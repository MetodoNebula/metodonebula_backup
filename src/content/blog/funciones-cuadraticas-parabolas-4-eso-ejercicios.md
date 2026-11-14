---
title: "Funciones cuadráticas y parábolas en 4 ESO: ejercicios resueltos"
seoTitle: "Funciones cuadráticas 4 ESO: parábolas y ejercicios resueltos"
date: "2026-11-07"
updated: "2026-11-10"
description: "Guía de funciones cuadráticas en 4 ESO: forma de la parábola, vértice, cortes con ejes, signo y ejercicios desarrollados paso a paso."
tag: "Matemáticas ESO"
category: "ESO"
relatedService: "/campus/"
relatedPosts: "funciones-lineales-afines-3-eso-ejercicios,ecuaciones-segundo-grado-3-eso-ejercicios-resueltos,geometria-analitica-4-eso-rectas-ejercicios"
image: "/favicon.svg"
---

Una función cuadrática relaciona cada valor de $x$ con una expresión que contiene $x^2$. Su gráfica es una parábola, pero dibujar una curva reconocible no basta: hay que saber de dónde sale el vértice, qué indican los cortes y en qué intervalos la función es positiva o negativa.

> **Respuesta directa.** En $f(x)=ax^2+bx+c$, el signo de $a$ decide si la parábola abre hacia arriba o hacia abajo. Para representarla con criterio, localiza el vértice, el corte con el eje $y$, las raíces si existen y algunos puntos simétricos.

## Qué cuenta el coeficiente principal

Si $a>0$, la parábola abre hacia arriba y el vértice es un mínimo. Si $a<0$, abre hacia abajo y el vértice es un máximo. Además, un valor absoluto grande de $a$ hace la gráfica más cerrada que en $y=x^2$.

Por ejemplo, $y=2x^2$ abre hacia arriba y es más estrecha que $y=x^2$. En cambio, $y=-\frac12x^2$ abre hacia abajo y es más abierta. Este primer análisis evita dibujar una parábola con orientación incorrecta.

## El vértice y el eje de simetría

Para $f(x)=ax^2+bx+c$, la coordenada horizontal del vértice es

$$
x_v=\frac{-b}{2a}.
$$

Después se calcula $y_v=f(x_v)$. El eje de simetría es la recta vertical $x=x_v$: dos puntos a la misma distancia de ese eje tienen la misma altura.

En $f(x)=x^2-4x+3$, tenemos $a=1$ y $b=-4$:

$$
x_v=\frac{-(-4)}{2\cdot1}=2,
$$

$$
y_v=f(2)=2^2-4\cdot2+3=-1.
$$

El vértice es $(2,-1)$ y la parábola abre hacia arriba.

## Cortes con los ejes

El corte con el eje $y$ se encuentra haciendo $x=0$. En el ejemplo anterior, $f(0)=3$, así que pasa por $(0,3)$.

Los cortes con el eje $x$ son las soluciones de $f(x)=0$:

$$
x^2-4x+3=0.
$$

Factorizamos:

$$
(x-1)(x-3)=0.
$$

Por tanto, las raíces son $x=1$ y $x=3$. La gráfica corta el eje $x$ en $(1,0)$ y $(3,0)$. Como el eje de simetría es $x=2$, los dos cortes quedan correctamente colocados a un lado y a otro del vértice.

## Ejercicio completo de representación

Representa $g(x)=-x^2+2x+3$.

Primero, $a=-1$, así que abre hacia abajo. Para el vértice:

$$
x_v=\frac{-2}{2(-1)}=1,
$$

$$
y_v=g(1)=-1+2+3=4.
$$

El vértice es $(1,4)$. El corte con el eje $y$ es $g(0)=3$, luego pasa por $(0,3)$. Para las raíces:

$$
-x^2+2x+3=0\quad\Longleftrightarrow\quad x^2-2x-3=0.
$$

$$
(x-3)(x+1)=0,
$$

de donde $x=3$ y $x=-1$. Con los puntos $(-1,0)$, $(0,3)$, $(1,4)$ y $(3,0)$ ya se puede dibujar una curva simétrica y coherente.

## Signo e interpretación

En la función anterior, $g(x)>0$ entre las raíces, es decir, para $-1<x<3$. Fuera de ese intervalo, $g(x)<0$. Esto es importante cuando una parábola representa altura, beneficio o área: el signo puede indicar que el modelo ya no tiene sentido físico en cierto intervalo, aunque la expresión pueda calcularse.

## De la ecuación a la gráfica, no al revés

Una tabla de valores puede ayudar, pero no sustituye el análisis. Si se calculan puntos sin conocer la orientación o la simetría, es fácil cometer un error y unirlos mal. El orden eficaz es: identificar $a$, calcular vértice, hallar cortes, usar simetría y comprobar algún punto adicional.

## Errores habituales

- Cambiar mal el signo al aplicar $-b/(2a)$.
- Confundir el corte con el eje $y$ con una raíz.
- Dibujar una parábola que abre hacia arriba cuando $a$ es negativo.
- Hallar raíces pero no convertirlas en puntos $(x,0)$.
- Ignorar que la escala de los ejes puede deformar visualmente la curva.

El [Campus de Método Nebula](/campus/) conecta funciones lineales, parábolas, ecuaciones y gráficas con ejemplos explicados y ejercicios graduados. El objetivo es que el alumno pueda pasar de una expresión a una representación razonada, no que memorice un dibujo.
