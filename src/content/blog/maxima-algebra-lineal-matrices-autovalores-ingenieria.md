---
title: "Maxima para Álgebra Lineal en Ingeniería: matrices, sistemas, autovalores y verificación"
seoTitle: "Maxima para Álgebra Lineal: matrices y autovalores en Ingeniería"
date: "2026-11-27"
updated: "2026-11-28"
description: "Guía técnica de Maxima para Álgebra Lineal: creación de matrices, resolución de sistemas, rango, determinante, autovalores, autovectores y comprobaciones."
tag: "Maxima"
category: "Matemáticas universitarias"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "algebra-lineal-nucleo-imagen-rango-ejercicios,valores-propios-vectores-propios-diagonalizacion-ejercicios-resueltos,minimos-cuadrados-proyeccion-ortogonal-algebra-lineal"
image: "/favicon.svg"
---

En Álgebra Lineal, Maxima es muy eficaz para revisar operaciones largas, pero el resultado solo es útil si sabes qué objeto matemático has construido. Un vector fila no es un vector columna, resolver un sistema no equivale a invertir una matriz y que un programa dé autovalores no prueba por sí solo que la matriz sea diagonalizable.

> **Objetivo de este artículo.** Usar Maxima para comprobar sistemas, determinantes, rango, base del núcleo y autovalores, manteniendo el razonamiento que se exige en Álgebra Lineal de Ingeniería.

## Crear matrices y reconocer sus dimensiones

Una matriz se construye por filas:

```maxima
A : matrix([2,-1,0],
           [1, 3,4],
           [0, 2,1])$
B : matrix([1,2],
           [3,4],
           [5,6])$
```

**Resultado**

```text
A = matrix([2, -1, 0], [1, 3, 4], [0, 2, 1])
B = matrix([1, 2], [3, 4], [5, 6])
```

Antes de multiplicar, comprueba las dimensiones con matrix_size:

```maxima
matrix_size(A);
matrix_size(B);
```

**Resultado**

```text
[3, 3]
[3, 2]
```

El producto $AB$ solo existe si el número de columnas de $A$ coincide con el número de filas de $B$. Maxima avisará de una incompatibilidad, pero en un examen debes detectar esa condición antes de pulsar Enter.

La transpuesta se obtiene con transpose:

```maxima
transpose(B);
```

**Resultado**

```text
matrix([1, 3, 5],
       [2, 4, 6])
```

## Sistemas lineales: qué devuelve linsolve

Para resolver:

$$
\begin{cases}
2x-y=1\\
x+3y=9
\end{cases}
$$

puedes usar:

```maxima
linsolve([2*x-y = 1, x+3*y = 9], [x,y]);
```

**Resultado**

```text
[x = 12/7, y = 17/7]
```

La salida representa una lista de soluciones. En un sistema compatible determinado aparecerá un único par. En un sistema compatible indeterminado, Maxima puede dejar un parámetro libre; eso es información sobre la dimensión del espacio de soluciones, no un error del programa.

Cuando el problema está dado como $Ax=b$, conserva la estructura matricial y comprueba el resultado:

```maxima
A : matrix([2,-1],[1,3])$
b : matrix([1],[9])$
xsol : invert(A).b$
ratsimp(A.xsol-b);
```

**Resultado**

```text
matrix([0],
       [0])
```

La última línea debe dar la matriz cero. Esta vía requiere que $A$ sea cuadrada e invertible; no la uses de forma automática para un sistema rectangular o singular.

## Determinante, rango e invertibilidad

Para una matriz cuadrada:

```maxima
determinant(A);
rank(A);
```

**Resultado**

```text
7
2
```

Un determinante no nulo implica que la matriz cuadrada es invertible y tiene rango completo. Sin embargo, el determinante no sirve para estudiar de manera general matrices rectangulares. Para ellas, el rango es el objeto adecuado.

Un flujo correcto para un ejercicio es:

1. Identificar el tamaño de la matriz.
2. Calcular o justificar el rango.
3. Aplicar rango–nulidad si se pide el núcleo.
4. Concluir compatibilidad de un sistema con rango de la matriz ampliada cuando proceda.

No sustituyas todas esas frases por una captura de salida de Maxima.

## Núcleo e imagen: comprobar, no adivinar

Para una aplicación $T(x)=Ax$, el núcleo es el conjunto de soluciones de $Ax=0$. Por ejemplo:

```maxima
C : matrix([1,2,3],
           [2,4,6])$
linsolve([x+2*y+3*z = 0,
          2*x+4*y+6*z = 0], [x,y,z]);
```

**Resultado**

```text
[x = -2 %r2 - 3 %r1, y = %r2, z = %r1]
```

La salida debe traducirse a una forma paramétrica. Si, por ejemplo, quedan parámetros libres $y=s$ y $z=t$, escribe cada solución como combinación lineal de vectores y extrae una base. Maxima puede resolver la ecuación; el paso de convertir parámetros a base sigue siendo una decisión matemática que debes explicar.

Para la imagen, las columnas pivote de una reducción por filas se identifican en la matriz original, no en una matriz reducida si se pide una base del espacio columna. Este detalle evita uno de los errores más frecuentes.

## Autovalores y autovectores

Para una matriz cuadrada $M$:

```maxima
M : matrix([4,1],
           [2,3])$
eigenvalues(M);
eigenvectors(M);
```

**Resultado**

```text
[[5, 2], [1, 1]]
[[[5, 2], [1, 1]], [[[1, 1]], [[1, -2]]]]
```

La función eigenvalues devuelve autovalores y sus multiplicidades; eigenvectors añade listas de autovectores. Antes de ejecutar, puedes verificar el polinomio característico:

```maxima
expand(determinant(M - lambda*ident(2)));
solve(%, lambda);
```

**Resultado**

```text
lambda^2 - 7 lambda + 10
[lambda = 5, lambda = 2]
```

Esta comprobación es importante cuando el ejercicio pide desarrollar el método. Usar eigenvalues para verificar no equivale a haber demostrado cómo se obtiene el polinomio característico.

Para comprobar un par $(\lambda,v)$:

```maxima
lambda : 5$
v : matrix([1],[1])$
ratsimp(M.v - lambda*v);
```

**Resultado**

```text
matrix([0],
       [0])
```

El resultado debe ser la matriz columna nula.

## Diagonalización: la condición que no debes omitir

Una matriz de tamaño $n$ es diagonalizable cuando reúne $n$ autovectores linealmente independientes. No basta con que tenga autovalores.

Si construyes una matriz $P$ con autovectores por columnas y una diagonal $D$ con sus autovalores en el mismo orden, verifica:

```maxima
P : matrix([1,1],
           [1,-2])$
D : matrix([5,0],
           [0,2])$
ratsimp(M.P - P.D);
```

**Resultado**

```text
matrix([0, 0],
       [0, 0])
```

o, si $P$ es invertible:

```maxima
ratsimp(invert(P).M.P - D);
```

**Resultado**

```text
matrix([0, 0],
       [0, 0])
```

La correspondencia de orden es crucial. Colocar autovalores y autovectores en órdenes distintos produce una diagonalización aparentemente razonable pero falsa.

## Precisión exacta frente a decimal

Maxima mantiene racionales exactos cuando escribes 1/3, pero usa aproximaciones si introduces 0.333. Para una demostración de Álgebra Lineal, trabaja con enteros, fracciones y raíces exactas mientras sea posible. Pasa a formato numérico al final con numer solo si el contexto es numérico.

## Errores que Maxima no arregla

- Declarar una matriz por columnas cuando el constructor espera filas.
- Aplicar invert a una matriz singular.
- Confundir la matriz punto con el producto elemento a elemento.
- Interpretar una lista de parámetros como una sola solución.
- Llamar diagonalizable a una matriz sin contar autovectores independientes.
- Elegir columnas de una matriz reducida como base de la imagen.
- Introducir decimales antes de tiempo y perder una estructura exacta.

Para practicar lo que hay detrás de la salida, continúa con [núcleo, imagen y rango](/blog/algebra-lineal-nucleo-imagen-rango-ejercicios/) y [autovalores y diagonalización](/blog/valores-propios-vectores-propios-diagonalizacion-ejercicios-resueltos/). Las [clases de Matemáticas universitarias](/clases-particulares/matematicas-universidad/) permiten trabajar las matrices y convenciones de tu asignatura.

Las funciones determinant, eigenvalues y eigenvectors están descritas en la [referencia oficial de Maxima](https://maxima.sourceforge.io/docs/manual/intromax.html).
