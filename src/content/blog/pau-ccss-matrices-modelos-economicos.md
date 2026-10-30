---
title: "Matrices en Matemáticas CCSS PAU: producción, costes y sistemas con interpretación económica"
seoTitle: "Matrices CCSS PAU: producción, costes y sistemas"
date: "2026-09-08"
updated: "2026-09-08"
description: "Resuelve matrices en Matemáticas CCSS PAU: productos, sistemas, inversa, modelos de producción, costes e interpretación de resultados."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "pau-matematicas-matrices-determinantes-gauss,pau-ccss-programacion-lineal-problemas,pau-ccss-inferencia-intervalos-confianza"
image: "/assets/latex/matrix-model.svg"
---

En Matemáticas CCSS, una matriz no es una tabla que se multiplica mecánicamente. Sus filas y columnas representan categorías concretas: productos, recursos, períodos o precios. Si se pierde ese significado, es fácil obtener una operación definida pero interpretar mal el resultado.

> **Respuesta directa.** Escribe qué representa cada dimensión antes de operar. El producto $AB$ combina filas de $A$ con columnas de $B$ y solo existe si coinciden las dimensiones interiores. Para resolver $A\vec x=\vec b$, utiliza Gauss o $A^{-1}$ cuando exista, y traduce la solución al contexto.

![Transformación de un vector de decisiones mediante una matriz](/assets/latex/matrix-model.svg)

## Dimensiones con significado

Una empresa fabrica dos productos usando tres recursos. La matriz de consumos puede ser:

$$
C=
\begin{pmatrix}
2&1\\
3&4\\
1&2
\end{pmatrix},
$$

donde las filas son recursos y las columnas productos. Si:

$$
\vec x=\binom{x_1}{x_2},
$$

entonces $C\vec x$ es un vector de tres componentes con el consumo total de cada recurso. El resultado no puede interpretarse como número de productos, porque sus filas conservan el significado de recursos.

## Producto de matrices

Si $A$ es $m\times n$ y $B$ es $n\times p$, entonces $AB$ es $m\times p$. El elemento $(i,j)$ se obtiene:

$$
(AB)_{ij}=\sum_{k=1}^{n}a_{ik}b_{kj}.
$$

En general, $AB\neq BA$ y uno de los dos productos puede no existir. Comprobar dimensiones antes de multiplicar evita desarrollar una operación imposible.

## Coste total y varios escenarios

Si el vector de precios por recurso es:

$$
\vec p=
\begin{pmatrix}5&2&4\end{pmatrix},
$$

el coste unitario de cada producto es $\vec pC$:

$$
\vec pC=
\begin{pmatrix}
5&2&4
\end{pmatrix}
\begin{pmatrix}
2&1\\3&4\\1&2
\end{pmatrix}
=
\begin{pmatrix}20&21\end{pmatrix}.
$$

Multiplicar después por $\vec x$ produce el coste total. La asociación $(\vec pC)\vec x=\vec p(C\vec x)$ permite calcular primero costes unitarios o consumos totales según convenga.

## Sistemas matriciales

Un sistema lineal puede escribirse:

$$
A\vec x=\vec b.
$$

Si $A$ es cuadrada y $\det A\neq0$:

$$
\vec x=A^{-1}\vec b.
$$

Sin embargo, Gauss suele mostrar mejor si el sistema es compatible determinado, compatible indeterminado o incompatible. En contexto, una solución negativa puede ser algebraicamente válida y económicamente imposible; hay que indicarlo.

## Ejemplo de reparto

Se venden dos entradas, normal y reducida. En total hay 300 entradas y la recaudación a precios 12 € y 8 € es 3200 €:

$$
\begin{pmatrix}
1&1\\12&8
\end{pmatrix}
\binom{x}{y}
=
\binom{300}{3200}.
$$

De $x+y=300$ y $12x+8y=3200$ se obtiene $x=200$, $y=100$. La comprobación sustituye en ambas condiciones y recupera total y recaudación.

## Potencias y transiciones

Una matriz de transición puede describir cómo una población se reparte entre categorías de un período al siguiente:

$$
\vec x_{n+1}=T\vec x_n.
$$

Entonces $\vec x_n=T^n\vec x_0$. Antes de interpretar, comprueba si filas o columnas suman 1 según la convención. Cambiar la orientación del vector sin cambiar la matriz produce un modelo distinto.

## Errores frecuentes

- Multiplicar matrices sin comprobar dimensiones.
- Suponer que el producto conmuta.
- Usar la inversa cuando $\det A=0$.
- Dar un vector sin explicar sus componentes.
- Aceptar cantidades negativas de personas o productos sin discutir el modelo.
- Redondear unidades indivisibles sin revisar las ecuaciones.

## Del contexto a una solución defendible

El campus virtual de Método Nebula trabaja matrices CCSS con modelos de producción, sistemas, programación lineal y probabilidad. Incluye teoría, ejercicios graduados y problemas PAU donde la interpretación cuenta tanto como la operación. El botón de contacto permite acceder al recorrido completo y practicar con corrección contextual.
