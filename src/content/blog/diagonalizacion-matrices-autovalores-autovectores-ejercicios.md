---
title: "Diagonalización de matrices: autovalores, autovectores y ejercicios resueltos"
seoTitle: "Diagonalización de matrices: autovalores y autovectores paso a paso"
date: "2026-11-10"
updated: "2026-11-10"
description: "Diagonalización de matrices explicada con autovalores, autovectores, multiplicidad, matriz P, matriz D y comprobaciones."
tag: "Álgebra Lineal"
category: "Matemáticas universitarias"
relatedService: "/clases-particulares/algebra-lineal-universidad/"
relatedPosts: "algebra-lineal-nucleo-imagen-rango-ejercicios,algebra-lineal-universidad-que-estudiar-primero-errores,matrices-determinantes-sistemas-ecuaciones-guia"
image: "/favicon.svg"
---

Diagonalizar una matriz significa elegir una base en la que su aplicación lineal actúa simplemente escalando cada coordenada. La matriz diagonal recoge esos factores de escala; los vectores de la nueva base son autovectores.

> **Respuesta directa.** Una matriz cuadrada $A$ es diagonalizable si tiene tantos autovectores linealmente independientes como dimensión. Colócalos como columnas de $P$, forma $D$ con los autovalores correspondientes y verifica $A=PDP^{-1}$.

## Encontrar los autovalores

Los autovalores satisfacen

$$
\det(A-\lambda I)=0.
$$

Para

$$
A=\begin{pmatrix}4&1\\0&2\end{pmatrix},
$$

el polinomio característico es $(4-\lambda)(2-\lambda)$. Los autovalores son $4$ y $2$.

## Encontrar un autovector para cada valor

Para $\lambda=4$, resolvemos

$$
(A-4I)\mathbf v=\mathbf0.
$$

Esto obliga a $y=0$, así que podemos tomar $\mathbf v_1=(1,0)$. Para $\lambda=2$, la ecuación es $2x+y=0$; un autovector es $\mathbf v_2=(1,-2)$.

Como son independientes,

$$
P=\begin{pmatrix}1&1\\0&-2\end{pmatrix},\qquad
D=\begin{pmatrix}4&0\\0&2\end{pmatrix}.
$$

## Multiplicidad no significa automáticamente diagonalización

Si un autovalor se repite, compara dos cantidades: su multiplicidad algebraica en el polinomio característico y el número de autovectores independientes que produce. Una matriz de tamaño $n$ necesita sumar $n$ autovectores independientes entre todos sus autovalores.

Por ejemplo, una matriz $2\times2$ con un único autovalor repetido no es diagonalizable si el sistema $(A-\lambda I)\mathbf v=0$ solo deja una dirección libre.

## Comprobaciones útiles

- La suma de autovalores, con multiplicidad, coincide con la traza.
- Su producto coincide con el determinante.
- Cada columna de $P$ cumple $A\mathbf v=\lambda\mathbf v$.
- El orden de columnas de $P$ debe coincidir con el orden de la diagonal de $D$.

La diagonalización conecta matrices, aplicaciones lineales y potencias de matrices. Antes de practicar ejercicios largos, refuerza [núcleo, imagen y rango](/blog/algebra-lineal-nucleo-imagen-rango-ejercicios/) o trabaja los casos de tu asignatura en [Álgebra Lineal universitaria](/clases-particulares/algebra-lineal-universidad/).
