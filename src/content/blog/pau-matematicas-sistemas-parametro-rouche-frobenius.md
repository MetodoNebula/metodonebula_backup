---
title: "Sistemas con parámetro en PAU: Rouché–Frobenius, rangos y casos sin improvisar"
date: "2026-11-17"
updated: "2026-11-17"
description: "Discute sistemas con parámetro en Matemáticas II PAU usando rangos, valores críticos, Rouché–Frobenius y resolución por casos."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-matematicas-ii-vectores-rectas-planos,matrices-determinantes-sistemas-ecuaciones-guia"
image: "/assets/latex/rank-decision.svg"
---

En un sistema con parámetro, resolver directamente para un valor genérico puede ocultar justo los casos que más puntúan. El objetivo no es encontrar $x,y,z$ cuanto antes, sino **determinar cuándo cambia el rango y clasificar el sistema en cada caso**.

![Árbol de decisión del teorema de Rouché–Frobenius mediante los rangos de A y la ampliada](/assets/latex/rank-decision.svg)

## El teorema que organiza la discusión

Para un sistema $AX=B$ con $n$ incógnitas:

- Si $\operatorname{rg}(A)=\operatorname{rg}(A^*)=n$, es compatible determinado: una solución.
- Si $\operatorname{rg}(A)=\operatorname{rg}(A^*)<n$, es compatible indeterminado: infinitas soluciones.
- Si $\operatorname{rg}(A)\ne\operatorname{rg}(A^*)$, es incompatible: ninguna solución.

$A^*$ es la matriz ampliada, que añade a $A$ la columna de términos independientes.

## Por qué buscar valores críticos

Si $A$ es cuadrada y $\det A\ne0$, su rango es $n$ y el sistema tiene solución única. Por tanto, los valores especiales solo pueden aparecer cuando:

$$
\det A=0.
$$

Resolver esa ecuación produce los valores críticos del parámetro. Para todos los demás, la discusión queda cerrada de una vez.

## Ejemplo completo

Considera:

$$
\begin{cases}
x+y+z=1,\\
x+ay+z=2,\\
x+y+az=2.
\end{cases}
$$

La matriz de coeficientes es:

$$
A=\begin{pmatrix}
1&1&1\\
1&a&1\\
1&1&a
\end{pmatrix}.
$$

Restando la primera fila a la segunda y a la tercera, el determinante se simplifica:

$$
\det A=(a-1)^2.
$$

Si $a\ne1$, el determinante no es cero y existe una única solución.

Si $a=1$, las tres filas de $A$ son iguales, de modo que $\operatorname{rg}(A)=1$. Sin embargo, la ampliada contiene filas equivalentes a:

$$
(1,1,1\mid1),\qquad(1,1,1\mid2).
$$

Al restarlas aparece:

$$
(0,0,0\mid1),
$$

que representa $0=1$. Entonces $\operatorname{rg}(A^*)=2$ y el sistema es incompatible para $a=1$.

La discusión final debe escribirse de forma explícita:

$$
\begin{cases}
a\ne1: & \text{SCD},\\
a=1: & \text{SI}.
\end{cases}
$$

## Si el sistema es compatible indeterminado

Cuando los rangos coinciden pero son menores que $n$, el número de parámetros libres es:

$$
n-\operatorname{rg}(A).
$$

Después de discutir, usa Gauss, elige las variables libres y expresa las restantes en función de ellas. “Infinitas soluciones” no sustituye a la parametrización si el ejercicio pide resolver.

## Determinante y Gauss cumplen funciones distintas

El determinante localiza rápidamente valores que pueden cambiar la clasificación. Gauss permite calcular rangos, detectar contradicciones y obtener soluciones. Un desarrollo eficaz los combina; no intenta forzar un único método para todo.

## Qué significa geométricamente la clasificación

En tres incógnitas, cada ecuación lineal representa un plano. Un SCD corresponde normalmente a tres planos que comparten un único punto. En un SCI pueden compartir una recta, coincidir o contener una familia común de puntos. En un sistema incompatible no existe ningún punto que pertenezca simultáneamente a todos.

El parámetro modifica la posición relativa de esos planos. Por eso un valor crítico no es una anomalía algebraica: es el instante en que una ecuación deja de aportar una dirección independiente o aparece una contradicción. El rango mide precisamente cuántas restricciones independientes permanecen.

Esta interpretación ayuda a revisar el resultado. Si el sistema tiene tres incógnitas y rango dos, una única variable libre produce una recta de soluciones; si el rango es uno, deben aparecer dos parámetros libres.

## Errores frecuentes

- Dividir por una expresión con el parámetro sin separar el caso en que vale cero.
- Calcular solo $\operatorname{rg}(A)$ y olvidar la ampliada.
- Concluir SCI únicamente porque $\det A=0$.
- Sustituir el valor crítico en el determinante pero no en el sistema.
- Dar casos sin justificar los rangos.
- Confundir número de ecuaciones con rango.

## Plantilla de examen

Matriz $A$ y ampliada → determinante o menores → valores críticos → caso general → sustitución de cada valor crítico → rangos → clasificación → resolución cuando se solicite.

El campus virtual de Método Nebula desarrolla matrices, determinantes, Gauss, Rouché–Frobenius y discusión con parámetros mediante teoría y problemas PAU graduados. Si quieres aprender a construir una discusión completa y verificable, utiliza el botón de contacto.
