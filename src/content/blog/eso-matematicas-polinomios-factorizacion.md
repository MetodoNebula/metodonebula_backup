---
title: "Polinomios y factorización en ESO: cómo encontrar raíces y simplificar sin probar al azar"
seoTitle: "Polinomios en ESO: raíces y factorización paso a paso"
date: "2026-09-05"
updated: "2026-09-05"
description: "Aprende polinomios y factorización en ESO: factor común, identidades notables, Ruffini, raíces, teorema del resto y fracciones algebraicas."
tag: "Matemáticas ESO"
category: "Matemáticas ESO y Bachillerato"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "eso-matematicas-ecuaciones-sistemas-estudiar,bachillerato-matematicas-funciones-representacion,como-estudiar-matematicas-sin-memorizar"
image: "/assets/latex/polynomial-factor.svg"
---

Factorizar no consiste en “quitar paréntesis al revés” sin criterio. Significa escribir un polinomio como producto de factores más simples. Las raíces indican qué factores deben aparecer y permiten conectar álgebra, ecuaciones y gráficas.

> **Respuesta directa.** Empieza siempre por factor común; busca después identidades notables y raíces racionales. Si $P(r)=0$, entonces $(x-r)$ es factor. Multiplica al final para comprobar que recuperas exactamente el polinomio original.

![Polinomio cúbico con tres raíces y su factorización](/assets/latex/polynomial-factor.svg)

## Factor común antes que cualquier método

$$
6x^3-9x^2=3x^2(2x-3).
$$

El máximo factor común incluye números y la menor potencia compartida de cada letra. Si se omite este paso, Ruffini o las identidades generan cálculos más largos y factores incompletos.

## Identidades notables

$$
a^2-b^2=(a-b)(a+b),
$$

$$
a^2+2ab+b^2=(a+b)^2,
$$

$$
a^2-2ab+b^2=(a-b)^2.
$$

En $x^2-16$, reconocer diferencia de cuadrados da $(x-4)(x+4)$. En $x^2+8x+16$, el término central es $2\cdot x\cdot4$, por lo que resulta $(x+4)^2$.

No todo trinomio es un cuadrado perfecto. Las tres piezas deben encajar.

## Teorema del resto y del factor

Al dividir $P(x)$ entre $(x-a)$, el resto es $P(a)$. Por tanto:

$$
P(a)=0\Longleftrightarrow(x-a)\text{ es factor}.
$$

Esto permite comprobar candidatos sin realizar todas las divisiones. Para un polinomio con coeficientes enteros y término independiente 6, las raíces enteras posibles deben dividir a 6: $\pm1,\pm2,\pm3,\pm6$.

## Ruffini con sentido

Considera:

$$
P(x)=x^3-2x^2-5x+6.
$$

Como $P(1)=0$, dividimos entre $(x-1)$ y obtenemos:

$$
P(x)=(x-1)(x^2-x-6).
$$

El segundo factor se descompone:

$$
x^2-x-6=(x-3)(x+2).
$$

Por tanto:

$$
P(x)=(x-1)(x-3)(x+2).
$$

Las raíces son $1$, $3$ y $-2$, justamente los cortes con el eje $x$ de la figura.

## Multiplicidad y forma de la gráfica

Si un factor aparece una vez, la gráfica suele cruzar el eje en esa raíz. Si aparece con multiplicidad par, como $(x-2)^2$, toca el eje y vuelve hacia el mismo lado. La multiplicidad conecta la factorización con el aspecto local de la función.

El signo del coeficiente principal y el grado determinan el comportamiento en los extremos. Esta información permite esbozar una gráfica sin construir una tabla enorme.

## Fracciones algebraicas

Para simplificar:

$$
\frac{x^2-9}{x^2-x-6}
=\frac{(x-3)(x+3)}{(x-3)(x+2)}
=\frac{x+3}{x+2},
$$

pero deben conservarse las restricciones originales:

$$
x\neq3,\qquad x\neq-2.
$$

Cancelar un factor no hace que el valor prohibido reaparezca en el dominio.

## Errores frecuentes

- Aplicar Ruffini sin ordenar el polinomio ni escribir coeficientes cero.
- Confundir la raíz $r$ con el factor $(x+r)$.
- Cancelar términos de una suma en lugar de factores.
- Perder restricciones al simplificar fracciones.
- Dejar una factorización sin verificar mediante producto.

## Construir una base que siga sirviendo

El campus virtual de Método Nebula enlaza polinomios con ecuaciones, funciones, límites y derivadas. La teoría se acompaña de ejercicios graduados y comprobaciones gráficas para que factorizar no sea una colección de trucos. El botón de contacto permite acceder a esta ruta y trabajar desde fundamentos de ESO hasta problemas de Bachillerato.
