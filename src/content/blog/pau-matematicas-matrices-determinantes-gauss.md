---
title: "Matrices y determinantes en PAU: cuándo usar inversa, Gauss o propiedades sin hacer cuentas de más"
date: "2026-10-25"
updated: "2026-10-25"
description: "Estrategia de Matemáticas II PAU para elegir entre matriz inversa, Gauss, determinantes y rangos con ejemplos y comprobaciones."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "pau-matematicas-sistemas-parametro-rouche-frobenius,matrices-determinantes-sistemas-ecuaciones-guia"
image: "/assets/latex/matrix-method-map.svg"
---

En álgebra matricial, saber calcular no basta. Un ejercicio puede resolverse por inversa, Gauss o determinantes, pero no todos los caminos cuestan lo mismo ni explican lo mismo. La primera decisión debe ser: **¿quiero resolver, clasificar, demostrar invertibilidad o simplificar una expresión?**

![Mapa de decisión entre matriz inversa y eliminación de Gauss según el determinante y la tarea](/assets/latex/matrix-method-map.svg)

## Producto de matrices: el orden importa

Si $A$ es $m\times n$ y $B$ es $n\times p$, entonces $AB$ existe y es $m\times p$. En general:

$$
AB\ne BA.
$$

Incluso puede existir $AB$ y no existir $BA$. Antes de multiplicar, escribe dimensiones. Esta comprobación evita desarrollar productos imposibles.

## Inversa y determinante

Una matriz cuadrada $A$ es invertible si y solo si:

$$
\det A\ne0.
$$

Para una matriz $2\times2$:

$$
A=\begin{pmatrix}a&b\\c&d\end{pmatrix},\qquad
A^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}.
$$

El denominador muestra por qué $\det A=0$ impide la inversa.

## Resolver $AX=B$ con inversa

Si $A$ es invertible:

$$
AX=B.
$$

Multiplicamos por $A^{-1}$ a la izquierda:

$$
A^{-1}AX=A^{-1}B,
$$

$$
X=A^{-1}B.
$$

El lado importa. En matrices no se puede cambiar el orden como si fueran números.

## Cuándo Gauss es mejor

La eliminación de Gauss es preferible cuando:

- El sistema no es cuadrado.
- Hay que clasificarlo.
- Aparecen parámetros.
- La matriz puede no ser invertible.
- Se busca el rango.

Las operaciones elementales por filas conservan el conjunto de soluciones del sistema. El objetivo es producir ceros de manera estratégica, no aplicar operaciones al azar.

## Ejemplo breve por Gauss

$$
\begin{cases}
x+y+z=6,\\
2x-y+z=3,\\
x+2y-z=2.
\end{cases}
$$

La ampliada es:

$$
\left(\begin{array}{ccc|c}
1&1&1&6\\
2&-1&1&3\\
1&2&-1&2
\end{array}\right).
$$

Aplicamos $F_2\leftarrow F_2-2F_1$ y $F_3\leftarrow F_3-F_1$:

$$
\left(\begin{array}{ccc|c}
1&1&1&6\\
0&-3&-1&-9\\
0&1&-2&-4
\end{array}\right).
$$

Intercambiar las dos últimas filas facilita el pivote. Continuando se obtiene $z=3$, $y=2$, $x=1$. Sustituir en las tres ecuaciones verifica la solución.

## Propiedades de determinantes que ahorran tiempo

- Intercambiar dos filas cambia el signo.
- Multiplicar una fila por $k$ multiplica el determinante por $k$.
- Sumar a una fila un múltiplo de otra no cambia el determinante.
- Una matriz triangular tiene determinante igual al producto de la diagonal.
- Si dos filas son proporcionales, el determinante es cero.

En un determinante grande, crear ceros mediante propiedades suele ser más seguro que expandir directamente por cofactores.

## Rango: cuánta información independiente queda

El rango es el número de filas no nulas tras escalonar, o el orden máximo de un menor no nulo. No cuenta filas escritas, sino ecuaciones independientes. Esta idea conecta matrices, sistemas y geometría.

## Errores frecuentes

- Suponer que $A^{-1}B=BA^{-1}$.
- Calcular una inversa sin comprobar el determinante.
- Hacer una operación de columna en la matriz ampliada de un sistema como si fuera una operación de ecuaciones.
- Perder el cambio de signo al intercambiar filas en un determinante.
- Confundir matriz nula con determinante cero.
- Resolver por Cramer un sistema cuya matriz no es invertible.

## Criterio de elección

Inversa para despejar una ecuación matricial invertible; Gauss para sistemas y rangos; determinantes para invertibilidad, parámetros y simplificación; Cramer para sistemas pequeños cuando se pide explícitamente o resulta muy directo.

El campus virtual de Método Nebula desarrolla matrices, determinantes, rango, inversa, Gauss, Cramer y sistemas con parámetros mediante teoría y ejercicios PAU. El botón de contacto permite solicitar una ruta para elegir el método con criterio y justificar cada operación.
