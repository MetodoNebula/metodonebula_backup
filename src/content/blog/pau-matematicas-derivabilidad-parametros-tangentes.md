---
title: "Derivabilidad con parámetros en PAU: continuidad, derivadas laterales y tangentes sin saltos lógicos"
seoTitle: "Derivabilidad con parámetros PAU: método completo"
date: "2026-09-13"
updated: "2026-09-13"
description: "Resuelve derivabilidad con parámetros en Matemáticas II PAU: continuidad, derivadas laterales, funciones a trozos y rectas tangentes."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "continuidad-derivabilidad-diferencias-problemas,que-son-las-derivadas-y-para-que-se-utilizan,problemas-optimizacion-derivadas-ejercicios-resueltos"
image: "/assets/latex/derivative-parameter.svg"
---

En una función a trozos, derivar cada fórmula no basta. La derivabilidad se decide en los puntos donde cambia la definición, y exige dos filtros consecutivos: continuidad y coincidencia de derivadas laterales.

> **Respuesta directa.** Para que $f$ sea derivable en $x=a$, primero debe cumplirse $\lim_{x\to a^-}f=\lim_{x\to a^+}f=f(a)$. Después se impone $f'_-(a)=f'_+(a)$. Si falla continuidad, no hay derivabilidad y no tiene sentido buscar una tangente única.

![Condiciones de continuidad y derivadas laterales en un punto de unión](/assets/latex/derivative-parameter.svg)

## El orden correcto

Para una función:

$$
f(x)=
\begin{cases}
g(x),&x<a,\\
h(x),&x\geq a,
\end{cases}
$$

el estudio se concentra en $a$. En el interior de cada tramo se aplican las reglas habituales, siempre que $g$ y $h$ sean derivables.

Primero:

$$
\lim_{x\to a^-}g(x)=h(a)=\lim_{x\to a^+}h(x).
$$

Después:

$$
g'(a)=h'(a).
$$

La primera ecuación ajusta alturas; la segunda ajusta pendientes.

## Ejemplo con dos parámetros

Sea:

$$
f(x)=
\begin{cases}
x^2+bx,&x<1,\\
ax+2,&x\geq1.
\end{cases}
$$

Continuidad en $x=1$:

$$
1+b=a+2.
$$

Derivadas laterales:

$$
f'_-(1)=2+b,
\qquad
f'_+(1)=a.
$$

Por derivabilidad:

$$
2+b=a.
$$

Al comparar con $1+b=a+2$, se obtiene una contradicción. No existen valores de $a$ y $b$ que hagan derivable esta función tal como está definida. Detectar incompatibilidad también es una solución matemática; no se deben forzar parámetros.

## Un ejemplo compatible

Si el segundo tramo fuera $ax-1$, la continuidad daría:

$$
1+b=a-1,
$$

y la derivabilidad, $2+b=a$. Ambas ecuaciones son equivalentes, por lo que hay infinitas parejas relacionadas por $a=b+2$. El problema podría añadir otra condición, como que la tangente tenga pendiente 5, para obtener $a=5$ y $b=3$.

## Recta tangente y normal

Si $f$ es derivable en $x_0$:

$$
y-f(x_0)=f'(x_0)(x-x_0).
$$

La normal, si $f'(x_0)\neq0$, tiene pendiente:

$$
m_n=-\frac1{f'(x_0)}.
$$

No se puede escribir una tangente usando solo la derivada: también hace falta el punto. Si la derivada es cero, la tangente es horizontal y la normal es vertical.

## Valor absoluto y puntos angulosos

$f(x)=|x|$ es continua en 0, pero:

$$
f'_-(0)=-1,
\qquad
f'_+(0)=1.
$$

Por tanto, no es derivable. Este ejemplo demuestra que continuidad no implica derivabilidad. Una cúspide, un punto anguloso o una tangente vertical requieren examinar el cociente incremental, no solo una gráfica aproximada.

## Relación con crecimiento y extremos

Una vez determinada la derivabilidad, el signo de $f'$ estudia crecimiento y decrecimiento. Un punto con $f'(a)=0$ es candidato a extremo, pero puede ser un punto de inflexión horizontal. Hay que comprobar cambio de signo o utilizar información de derivadas superiores.

## Errores frecuentes

- Igualar derivadas antes de imponer continuidad.
- Usar $g(a)$ cuando el tramo izquierdo no incluye $a$ sin hablar de límite.
- Resolver parámetros y no sustituir para comprobar.
- Confundir derivada cero con máximo seguro.
- Escribir la tangente sin calcular $f(x_0)$.

## Ampliar el clúster de mayor demanda

Las consultas sobre derivadas concentran la mayor visibilidad orgánica actual de la web. Este artículo cubre una intención más avanzada y específica, mientras el campus virtual convierte esa entrada en un recorrido de continuidad, derivadas, representación y optimización. Incluye teoría, ejercicios escalonados y modelos PAU; el botón de contacto permite acceder al itinerario completo.
