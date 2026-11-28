---
title: "Maxima para ecuaciones diferenciales: ode2, condiciones iniciales, rk y gráficas"
seoTitle: "Maxima para ecuaciones diferenciales: ode2 y RK en Ingeniería"
date: "2026-11-27"
updated: "2026-11-28"
description: "Tutorial detallado de Maxima para EDO en Ingeniería: ode2, ic1, ic2, solución numérica Runge–Kutta rk, representación y comprobación de condiciones iniciales."
tag: "Maxima"
category: "Matemáticas universitarias"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "ecuaciones-diferenciales-identificar-metodo-correcto,oscilador-armonico-amortiguado-ecuaciones-diferenciales-ingenieria,circuitos-rlc-fasores-resonancia-ingenieria"
image: "/favicon.svg"
---

Maxima permite resolver ciertas ecuaciones diferenciales de primer y segundo orden de forma simbólica y aproximar otras numéricamente. La distinción importa: una solución simbólica, una solución particular y una tabla de Runge–Kutta no son el mismo objeto y no se interpretan igual en una asignatura de Ingeniería.

> **Objetivo de este artículo.** Formular bien una EDO en Maxima, obtener una solución con ode2, imponer condiciones iniciales con ic1 o ic2, calcular una aproximación con rk y comprobar que el resultado responde al modelo físico.

## La comilla delante de diff no es decorativa

En una ecuación diferencial, necesitas que Maxima conserve la derivada sin evaluarla al escribir el modelo. Para:

$$
y'(x)=-2y(x),
$$

la entrada correcta es:

```maxima
eq : 'diff(y,x) = -2*y$
ode2(eq, y, x);
```

**Resultado**

```text
y = %e^(-2 x) %c
```

La comilla en 'diff crea la forma no evaluada de la derivada. Si omites esa comilla, Maxima intenta derivar y respecto a x antes de haber definido la función, y el planteamiento no representa la EDO deseada.

La solución general contiene una constante, normalmente %c:

$$
y(x)=Ce^{-2x}.
$$

Esa constante no es un resultado molesto: representa la familia de soluciones compatible con la ecuación.

## Condición inicial de primer orden con ic1

Si además sabes que $y(0)=3$, guarda primero la solución general y aplica la condición:

```maxima
solg : ode2(eq, y, x)$
sol : ic1(solg, x = 0, y = 3);
```

**Resultado**

```text
y = 3 %e^(-2 x)
```

Debes obtener una expresión equivalente a:

$$
y(x)=3e^{-2x}.
$$

No confundas el segundo argumento de ic1 con una sustitución libre. La estructura x = 0, y = 3 identifica el punto y el valor de la solución.

Comprueba la condición y la ecuación por separado:

```maxima
subst(0, x, rhs(sol));
ratsimp(diff(rhs(sol),x) + 2*rhs(sol));
```

**Resultado**

```text
3
0
```

La primera salida debe ser 3 y la segunda 0. Esa doble comprobación es muy útil antes de entregar una práctica.

## Ecuaciones de segundo orden e ic2

Para el oscilador ideal:

$$
y''+4y=0,
$$

escribe:

```maxima
eq2 : 'diff(y,x,2) + 4*y = 0$
solg2 : ode2(eq2, y, x)$
sol2 : ic2(solg2, x = 0, y = 1,
           'diff(y,x) = 0);
```

**Resultado**

```text
y = cos(2 x)
```

La condición de velocidad inicial requiere de nuevo la forma no evaluada 'diff(y,x). Un error habitual es sustituirla por una sintaxis de derivada que Maxima evalúa antes de usarla como condición.

El resultado debe ser equivalente a $y(x)=\cos(2x)$. Verifica tanto posición como velocidad inicial:

```maxima
subst(0, x, rhs(sol2));
subst(0, x, diff(rhs(sol2),x));
```

**Resultado**

```text
1
0
```

subst sustituye de forma local y evita que una asignación temporal de x afecte a la comprobación siguiente en una sesión de consola.

## Un modelo de Ingeniería: oscilador amortiguado

Para:

$$
m x''+c x'+kx=0,
$$

puedes mantener parámetros simbólicos:

```maxima
ode : m*'diff(x,t,2) + c*'diff(x,t) + k*x = 0$
ode;
```

**Resultado**

```text
m d^2x/dt^2 + c dx/dt + k x = 0
```

Maxima puede devolver una forma dependiente de relaciones entre parámetros. Para una práctica concreta, sustituye valores después de plantear el modelo:

```maxima
odenum : ev(ode, m = 1, c = 2, k = 10)$
solg : ode2(odenum, x, t)$
ic2(solg, t = 0, x = 0.1, 'diff(x,t) = 0);
```

**Resultado**

```text
x = %e^(-t) (sin(3 t)/30 + cos(3 t)/10)
```

Primero decide matemáticamente si es subamortiguado, crítico o sobreamortiguado a partir de $c^2-4mk$. La salida simbólica no sustituye esa interpretación física.

## Cuando ode2 no da una forma útil

ode2 resuelve clases concretas de EDO ordinarias de orden uno y dos. Si devuelve una solución implícita, no encuentra resultado o el modelo necesita una aproximación, pasa a un método numérico con expectativas claras.

Para:

$$
x'=t-x^2,\qquad x(0)=1,
$$

usa rk:

```maxima
datos : rk(t-x^2, x, 1, [t,0,8,0.1])$
plot2d([discrete, datos], [xlabel,"t"], [ylabel,"x"]);
```

**Resultado**

```text
Se abre la gráfica de los pares [t, x] calculados por Runge–Kutta.
```

La lista datos contiene pares de la forma [t,x]. No es una expresión cerrada $x(t)$; es una aproximación en nodos espaciados 0,1 unidades.

## Elegir el paso en Runge–Kutta

No elijas el paso solo porque es cómodo. Repite el cálculo con un paso menor y compara valores representativos:

```maxima
a : rk(t-x^2, x, 1, [t,0,4,0.1])$
b : rk(t-x^2, x, 1, [t,0,4,0.05])$
last(a);
last(b);
```

**Resultado**

```text
[4.0, 1.9312259200921549]
[4.0, 1.9312267804182452]
```

Si el valor final cambia de forma importante, el paso original no era suficiente para la precisión requerida. El análisis también debe considerar estabilidad, rigidez y el intervalo del problema; Maxima no decide esos criterios de modelización.

## Representar soluciones simbólicas correctamente

Si sol contiene una ecuación, la función rhs extrae el miembro derecho para dibujarlo:

```maxima
plot2d(rhs(sol2), [x,0,10],
       [xlabel,"x"], [ylabel,"y"]);
```

**Resultado**

```text
Se abre la gráfica de y = cos(2 x) en el intervalo [0, 10].
```

Graficar la ecuación completa en lugar de rhs(sol2) es un error frecuente. Para comparar dos soluciones, pasa una lista de expresiones:

```maxima
plot2d([rhs(sol2), exp(-x)], [x,0,5],
       [legend,"oscilador","referencia"]);
```

**Resultado**

```text
Se abre una gráfica comparativa de cos(2 x) y %e^(-x).
```

Un gráfico ayuda a descubrir un signo incorrecto, pero no demuestra satisfacción de una condición inicial. Para eso, sustituye explícitamente y calcula el residuo.

## Diagnóstico de errores frecuentes

- Escribir diff sin comilla al formular la EDO.
- Usar y(x) en una llamada a ode2 que ha sido formulada para y, o al revés, sin mantener una convención.
- Aplicar ic1 a una ecuación de segundo orden.
- Olvidar una de las dos condiciones de ic2.
- Leer los puntos de rk como una solución exacta.
- Hacer una gráfica sin acotar ejes y concluir que el comportamiento es estable.
- Ajustar parámetros hasta obtener una salida bonita sin justificar el modelo.

Si necesitas elegir el método manual antes de usar software, revisa [cómo identificar el método de una ecuación diferencial](/blog/ecuaciones-diferenciales-identificar-metodo-correcto/). Para vibraciones, señales, circuitos o Física Matemática, las [clases de Matemáticas universitarias](/clases-particulares/matematicas-universidad/) pueden trabajarse con Maxima y con desarrollo manual paralelo.

La sintaxis de ode2, ic2 y rk sigue la [documentación oficial de ecuaciones diferenciales de Maxima](https://maxima.sourceforge.io/docs/manual/Differential-Equations.html) y su [referencia numérica](https://maxima.sourceforge.io/docs/manual/Numerical.html).
