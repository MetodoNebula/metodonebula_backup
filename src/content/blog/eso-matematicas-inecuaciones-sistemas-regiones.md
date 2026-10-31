---
title: "Inecuaciones y sistemas en ESO: intervalos, rectas y regiones sin cambiar signos por intuición"
seoTitle: "Inecuaciones en ESO: intervalos y sistemas"
date: "2026-08-09"
updated: "2026-08-09"
description: "Resuelve inecuaciones y sistemas en ESO: cambio de signo, intervalos, valor absoluto, regiones del plano y comprobación de soluciones."
tag: "Matemáticas ESO"
category: "Matemáticas ESO y Bachillerato"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "eso-matematicas-ecuaciones-sistemas-estudiar,eso-matematicas-polinomios-factorizacion,pau-ccss-programacion-lineal-problemas"
image: "/assets/latex/inequation-regions.svg"
---

Una inecuación no pide un número aislado, sino un conjunto de valores. El procedimiento se parece al de una ecuación, con una diferencia esencial: al multiplicar o dividir por una cantidad negativa, el sentido de la desigualdad se invierte.

> **Respuesta directa.** Despeja conservando equivalencias, cambia el signo solo al multiplicar o dividir por un número negativo y expresa la solución como intervalo. En dos variables, la igualdad asociada forma la frontera y un punto de prueba decide el semiplano.

![Intersección de semiplanos definida por dos inecuaciones lineales](/assets/latex/inequation-regions.svg)

## Inecuación lineal

Resuelve:

$$
3x-5<10.
$$

Sumando 5 y dividiendo entre 3:

$$
3x<15\Rightarrow x<5.
$$

La solución es $(-\infty,5)$. El extremo 5 no se incluye porque la desigualdad es estricta.

## Cuándo cambia el sentido

$$
-2x\leq8.
$$

Al dividir entre $-2$:

$$
x\geq-4.
$$

El cambio no ocurre por “pasar el 2 al otro lado”; ocurre porque multiplicar por un negativo invierte el orden. Por ejemplo, $2<5$ pero $-2>-5$.

## Dobles desigualdades

$$
-1<2x+3\leq9.
$$

Se opera en los tres miembros:

$$
-4<2x\leq6,
$$

$$
-2<x\leq3.
$$

En intervalo: $(-2,3]$. Un círculo abierto representa extremo excluido y uno cerrado, incluido.

## Productos y cocientes

Para:

$$
(x-2)(x+1)\leq0,
$$

los puntos críticos son $-1$ y 2. Se estudia el signo en:

$$
(-\infty,-1),\quad(-1,2),\quad(2,\infty).
$$

El producto es no positivo entre las raíces:

$$
x\in[-1,2].
$$

No se puede dividir por $(x-2)$ sin conocer su signo; hacerlo perdería soluciones o cambiaría indebidamente la desigualdad.

## Valor absoluto

$$
|x-3|<2
$$

significa que la distancia de $x$ a 3 es menor que 2:

$$
-2<x-3<2
\Rightarrow
1<x<5.
$$

En cambio, $|x-3|>2$ selecciona el exterior: $x<1$ o $x>5$.

## Inecuaciones en dos variables

Para $y\leq x+1$:

1. dibuja la frontera $y=x+1$ con línea continua;
2. prueba un punto que no esté en la recta, por ejemplo $(0,0)$;
3. como $0\leq1$ es cierto, sombrea el lado que contiene al origen.

Si la desigualdad es estricta, la frontera se dibuja discontinua.

## Sistemas y región solución

Un sistema exige cumplir todas las condiciones a la vez. La solución es la intersección de intervalos o semiplanos, no su unión.

En un problema contextual también pueden aparecer:

$$
x\geq0,\qquad y\geq0,
$$

porque cantidades de productos, tiempo o personas no son negativas. Estas restricciones no deben darse por supuestas si forman parte del modelo.

## Errores frecuentes

- Cambiar el signo al sumar un negativo.
- No cambiarlo al dividir por un negativo.
- Incluir un extremo en una desigualdad estricta.
- Dividir por una expresión de signo desconocido.
- Sombrear la unión cuando se pide un sistema.

## Preparar el salto a modelos reales

El campus virtual de Método Nebula conecta inecuaciones con sistemas, funciones y programación lineal mediante teoría visual y ejercicios graduados. El botón de contacto permite acceder a una ruta que empieza con intervalos de ESO y llega a regiones factibles y optimización de Bachillerato.
