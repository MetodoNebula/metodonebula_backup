---
title: Matrices, determinantes y sistemas de ecuaciones: guía completa para primero de carrera
date: 2026-07-14
updated: 2026-07-14
description: Guía de matrices, determinantes y sistemas de ecuaciones para primero de carrera: rango, Gauss, inversa y discusión de soluciones.
tag: Álgebra Lineal
category: Matemáticas universitarias
relatedService: /clases-particulares/matematicas-universidad/
relatedPosts: algebra-lineal-universidad-que-estudiar-primero-errores,como-estudiar-matematicas-sin-memorizar,como-aprobar-calculo-i-ingenieria-seis-semanas
image: /favicon.svg
---

Matrices, determinantes y sistemas de ecuaciones forman el núcleo operativo del Álgebra Lineal de primero de carrera. Si dominas este bloque, muchos temas posteriores dejan de parecer aislados: bases, dimensión, aplicaciones lineales, autovalores y diagonalización vuelven una y otra vez al rango y al método de Gauss.

## Qué representa una matriz

Una matriz organiza datos, coeficientes o transformaciones. En un sistema lineal:

$$
\begin{cases}
x+2y=5\\
3x-y=4
\end{cases}
$$

la matriz de coeficientes es:

$$
A=\begin{pmatrix}
1 & 2\\
3 & -1
\end{pmatrix}
$$

y la matriz ampliada:

$$
(A|b)=
\begin{pmatrix}
1 & 2 & 5\\
3 & -1 & 4
\end{pmatrix}
$$

El sistema se estudia operando con filas para mantener las mismas soluciones.

## Método de Gauss

El método de Gauss busca una forma escalonada. Las operaciones permitidas son:

- Intercambiar dos filas.
- Multiplicar una fila por un número no nulo.
- Sumar a una fila un múltiplo de otra.

Estas operaciones no son decoración: son la razón por la que el sistema equivalente conserva soluciones.

Para el sistema anterior:

$$
\begin{pmatrix}
1 & 2 & 5\\
3 & -1 & 4
\end{pmatrix}
$$

Hacemos \(F_2\leftarrow F_2-3F_1\):

$$
\begin{pmatrix}
1 & 2 & 5\\
0 & -7 & -11
\end{pmatrix}
$$

Entonces:

$$
y=\frac{11}{7}
$$

y sustituyendo en la primera ecuación:

$$
x+2\cdot \frac{11}{7}=5
$$

Por tanto:

$$
x=\frac{13}{7}
$$

## Rango y discusión de sistemas

El rango mide el número de filas o columnas independientes. Para discutir sistemas se usa el teorema de Rouché-Frobenius:

$$
\operatorname{rg}(A)=\operatorname{rg}(A|b)
$$

Si los rangos son distintos, el sistema no tiene solución. Si son iguales, hay solución. Si además coinciden con el número de incógnitas, la solución es única. Si son menores, hay infinitas soluciones.

## Determinantes: cuándo usarlos

El determinante se define para matrices cuadradas. En una matriz \(2\times 2\):

$$
\det
\begin{pmatrix}
a & b\\
c & d
\end{pmatrix}
=ad-bc
$$

Si \(\det(A)\neq 0\), la matriz es invertible y el sistema \(Ax=b\) tiene solución única.

Pero cuidado: usar determinantes para todo puede ser lento. Para sistemas grandes, Gauss suele ser más eficiente y menos propenso a errores.

## Matriz inversa

La inversa de \(A\), si existe, cumple:

$$
AA^{-1}=I
$$

En sistemas, si \(A\) es invertible:

$$
Ax=b \Rightarrow x=A^{-1}b
$$

Esto es útil conceptualmente, pero en cálculo manual muchas veces se resuelve antes con Gauss que calculando toda la inversa.

## Ejercicio resuelto con parámetro

Discute según \(a\):

$$
\begin{cases}
x+y=1\\
2x+2y=a
\end{cases}
$$

La segunda ecuación tiene el mismo lado izquierdo que el doble de la primera. Si multiplicamos la primera por 2:

$$
2x+2y=2
$$

Para que el sistema sea compatible, debe cumplirse \(a=2\).

Si \(a=2\), hay infinitas soluciones porque las dos ecuaciones representan la misma recta. Si \(a\neq 2\), no hay solución.

## Errores típicos en primero de carrera

- Dividir por un parámetro sin estudiar el caso en que vale cero.
- Calcular determinantes de matrices que no son cuadradas.
- Confundir matriz de coeficientes y matriz ampliada.
- Hacer operaciones por columnas al resolver un sistema por filas.
- No interpretar el resultado final: única, ninguna o infinitas soluciones.

## Cómo practicar bien

No hagas solo sistemas numéricos. Mezcla:

- Sistemas con parámetro.
- Cálculo de rango.
- Determinantes sencillos.
- Matriz inversa.
- Problemas donde haya que decidir si usar Gauss, determinante o interpretación geométrica.

Si este bloque te cuesta, empieza por [Álgebra Lineal en la universidad](/blog/algebra-lineal-universidad-que-estudiar-primero-errores/) y revisa la página de [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/).
