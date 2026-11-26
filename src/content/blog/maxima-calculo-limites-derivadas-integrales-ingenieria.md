---
title: "Maxima para Cálculo en Ingeniería: límites, derivadas, integrales y comprobación de resultados"
seoTitle: "Maxima para Cálculo: límites, derivadas e integrales en Ingeniería"
date: "2026-11-27"
updated: "2026-11-27"
description: "Tutorial práctico de Maxima para Cálculo de Ingeniería: sintaxis de límites, derivadas, integrales definidas e impropias, simplificación y verificación de resultados."
tag: "Maxima"
category: "Matemáticas universitarias"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "integrales-impropias-convergencia-ejercicios,integracion-por-partes-formula-ejercicios-resueltos,regla-lhopital-cuando-usarla-ejercicios"
image: "/favicon.svg"
---

Maxima es especialmente útil en Cálculo cuando se usa como verificador de un procedimiento que ya entiendes. Puede derivar, integrar y calcular límites simbólicos en segundos; no puede decidir por ti qué hipótesis tiene un teorema ni corregir un planteamiento matemático mal escrito.

> **Objetivo de este artículo.** Aprenderás a introducir expresiones sin ambigüedad, comprobar derivadas e integrales, diagnosticar límites indeterminados y evitar los errores de sintaxis que más tiempo hacen perder en una práctica de Ingeniería.

## Antes de ejecutar: reglas mínimas de sintaxis

Maxima termina cada instrucción con punto y coma para mostrar el resultado o con dólar para ejecutarla sin imprimirlo:

~~~maxima
f(x) : x^3*exp(-x)$
f(2);
~~~

Usa asterisco para multiplicar y paréntesis cuando una expresión pueda interpretarse de más de una forma. Por ejemplo, escribe 1/(x+1), no 1/x+1, si quieres el inverso de toda la suma.

Las asignaciones se hacen con dos puntos. La igualdad matemática se escribe con = y se usa, por ejemplo, en solve u ode2. Esta diferencia es esencial:

~~~maxima
a : 3$
solve(a*x = 12, x);
~~~

La segunda línea resuelve una ecuación; no reasigna la variable x.

## Límites: confirmar una hipótesis, no sustituirla

Para calcular un límite bilateral:

~~~maxima
limit((sin(x)-x)/x^3, x, 0);
~~~

El resultado es $-1/6$. Antes de abrir Maxima, identifica la forma $0/0$ y piensa qué método usarías en un examen: desarrollo de Taylor o L'Hôpital. Después, usa el resultado para comprobar el signo y el factor.

Para límites laterales:

~~~maxima
limit(1/x, x, 0, plus);
limit(1/x, x, 0, minus);
~~~

Si los resultados difieren, el límite bilateral no existe. No escribas solo el que devuelve una calculadora: el sentido de aproximación forma parte del problema.

Para infinito se utilizan inf y minf:

~~~maxima
limit((3*x^2-x+1)/(x^2+4), x, inf);
~~~

## Derivadas y derivadas parciales

La derivada ordinaria se obtiene con diff:

~~~maxima
g : x^2*log(x)$
diff(g, x);
~~~

Para una derivada segunda:

~~~maxima
diff(g, x, 2);
~~~

En varias variables, puedes encadenar pares variable–orden:

~~~maxima
u : x^2*y^3 + sin(x*y)$
diff(u, x, 2, y, 1);
~~~

Una comprobación potente de una integral es derivar tu resultado y simplificar la diferencia:

~~~maxima
F : x^2*log(x)/2 - x^2/4$
ratsimp(diff(F, x) - x*log(x));
~~~

Si Maxima devuelve 0, has verificado la derivada en el sentido simbólico. Eso no sustituye revisar el dominio: $x\log x$ requiere $x>0$ en el contexto real habitual.

## Integrales indefinidas: verifica y mira si queda sin evaluar

Para pedir una primitiva:

~~~maxima
integrate(x*log(x), x);
~~~

No des por hecho que toda salida está resuelta. Maxima puede dejar una forma nominal, reconocible por una integral sin evaluar. En ese caso, prueba a simplificar la expresión, factorizar o cambiar de estrategia matemática. La documentación oficial indica que integrate reconoce varios casos especiales, pero no garantiza una forma cerrada para cualquier integrando.

Un buen flujo de trabajo es:

1. Simplifica el integrando con factor, expand o ratsimp cuando tenga sentido.
2. Calcula la integral.
3. Deriva el resultado.
4. Simplifica la diferencia con el integrando original.
5. Añade la constante $C$ al escribir una integral indefinida en la entrega.

## Integral definida e impropia

La sintaxis de una integral definida es:

~~~maxima
integrate(exp(-x^2), x, 0, 1);
~~~

Para una impropia en infinito:

~~~maxima
integrate(1/(1+x^2), x, 0, inf);
~~~

No confundas que Maxima produzca un valor con haber demostrado convergencia. En una práctica o examen, justifica por qué el extremo impropio se interpreta mediante un límite y revisa discontinuidades internas.

Por ejemplo, para una integral con singularidad en cero, separa el análisis matemático de la orden:

~~~maxima
limit(integrate(x^(-p), x, a, 1), a, 0, plus);
~~~

Aquí tú decides después para qué valores de $p$ existe ese límite.

## L'Hôpital: úsalo como contraste, no como atajo automático

Maxima puede derivar numerador y denominador, pero el criterio de L'Hôpital lo pones tú. Para una expresión $N(x)/D(x)$:

~~~maxima
N : exp(x)-1$
D : x$
limit(diff(N,x)/diff(D,x), x, 0);
~~~

Solo tiene sentido después de haber verificado que la forma inicial es $0/0$ o $\infty/\infty$, y que las condiciones del teorema son aplicables. En la solución escrita, explica la indeterminación y muestra cada paso relevante; no pegues la salida del programa.

## Sustitución numérica, precisión y gráficos

Con una expresión simbólica, ev permite evaluar bajo condiciones. Para obtener una aproximación decimal, usa numer:

~~~maxima
h : integrate(sin(x)/x, x, 0, 1)$
ev(h, numer);
~~~

Para explorar el comportamiento de una función antes de resolver un problema de optimización:

~~~maxima
plot2d([sin(x)/x, 1-x^2/6], [x,-4,4],
       [legend, "sin(x)/x", "Taylor orden 2"]);
~~~

El gráfico sirve para detectar una escala absurda o una aproximación local que se usa demasiado lejos de su centro. No prueba una igualdad matemática.

## Errores concretos que bloquean ejercicios

- Usar una coma decimal: Maxima usa punto, como 0.25.
- Escribir e^x en lugar de %e^x o exp(x).
- Omitir el asterisco: 2x no es una multiplicación válida.
- Confundir : con =.
- Pedir integrate(f,x) cuando la dependencia real era f(x).
- Mostrar un decimal cuando se pedía la expresión exacta.
- Copiar una salida sin indicar el dominio, la constante de integración o la convergencia.

En Cálculo para Ingeniería, Maxima debe funcionar como una segunda comprobación, no como sustituto del razonamiento. Para entrenar el método manual, continúa con [integrales impropias y convergencia](/blog/integrales-impropias-convergencia-ejercicios/) o trabaja tu temario con [clases de Matemáticas universitarias](/clases-particulares/matematicas-universidad/).

La sintaxis de diff, limit e integrate se apoya en la [documentación oficial de Maxima](https://maxima.sourceforge.io/docs/manual/intromax.html).
