---
title: "Mínimos cuadrados y proyección ortogonal: ajuste lineal con Álgebra Lineal"
seoTitle: "Mínimos cuadrados y proyección ortogonal: ejercicio de Ingeniería"
date: "2026-11-27"
updated: "2026-11-27"
description: "Ejercicio de mínimos cuadrados para Ingeniería: matriz de diseño, ecuaciones normales, proyección ortogonal y lectura geométrica del ajuste lineal."
tag: "Álgebra Lineal"
category: "Matemáticas universitarias"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "algebra-lineal-nucleo-imagen-rango-ejercicios,matrices-determinantes-sistemas-ecuaciones-guia,valores-propios-vectores-propios-diagonalizacion-ejercicios-resueltos"
image: "/favicon.svg"
---

El método de mínimos cuadrados aparece cuando un sistema tiene más ecuaciones que incógnitas y no existe una solución exacta. En Ingeniería no se trata de “hacer una recta bonita”: se busca el vector de parámetros cuyo error sea perpendicular al espacio de modelos.

> **Respuesta directa.** Para ajustar $A\hat{x}\approx b$, minimiza $\lVert A x-b\rVert^2$. Si las columnas de $A$ son linealmente independientes, el ajuste cumple las ecuaciones normales $A^TA\hat{x}=A^Tb$.

## Un ajuste lineal como sistema sobredeterminado

Quieres ajustar una recta:

$$
y\approx a+bx
$$

a tres observaciones $(0,1)$, $(1,2)$ y $(2,2)$. La matriz de diseño y el vector de datos son:

$$
A=
\begin{pmatrix}
1&0\\
1&1\\
1&2
\end{pmatrix},
\qquad
b=
\begin{pmatrix}
1\\2\\2
\end{pmatrix}.
$$

No hay por qué existir una recta que pase exactamente por los tres puntos. En lugar de exigir $Ax=b$, buscamos el vector $\hat{x}=(a,b)^T$ que deja el residuo más corto.

## Ecuaciones normales paso a paso

Calculamos:

$$
A^TA=
\begin{pmatrix}
3&3\\
3&5
\end{pmatrix},
\qquad
A^Tb=
\begin{pmatrix}
5\\6
\end{pmatrix}.
$$

Por tanto:

$$
\begin{pmatrix}
3&3\\
3&5
\end{pmatrix}
\begin{pmatrix}
a\\b
\end{pmatrix}
=
\begin{pmatrix}
5\\6
\end{pmatrix}.
$$

Resolviendo, se obtiene $a=7/6$ y $b=1/2$. La recta de mínimos cuadrados es:

$$
\hat{y}=\frac76+\frac12x.
$$

## La interpretación geométrica que suele caer en examen

El vector ajustado $A\hat{x}$ es la proyección ortogonal de $b$ sobre el espacio columna de $A$. El residuo:

$$
r=b-A\hat{x}
$$

es perpendicular a cada columna de $A$. Por eso:

$$
A^Tr=0.
$$

Esta igualdad no es una fórmula independiente que haya que memorizar: expresa exactamente que el error no conserva componente en las direcciones permitidas por el modelo.

## Cuándo usar QR en vez de ecuaciones normales

Las ecuaciones normales son muy útiles para aprender y para ejercicios pequeños. En cálculo numérico, formar $A^TA$ puede empeorar el condicionamiento. Por eso los métodos QR o SVD son preferibles en implementaciones reales.

En un examen, identifica qué te piden: derivar el ajuste suele llevar a ecuaciones normales; calcular de forma estable o analizar rango puede llevar a QR o descomposición en valores singulares.

## Errores frecuentes

- Intentar resolver $Ax=b$ como si siempre fuera compatible.
- Confundir el espacio columna de $A$ con el núcleo de $A$.
- Decir que el residuo es cero en un ajuste por mínimos cuadrados.
- Aplicar $(A^TA)^{-1}A^Tb$ sin comprobar independencia de columnas.
- Interpretar el coeficiente de determinación sin mirar primero el modelo y los residuos.

Si preparas Álgebra Lineal, Métodos Numéricos o tratamiento de datos en Ingeniería, conviene practicar la transición entre matrices y geometría. Puedes ampliar con [núcleo, imagen y rango](/blog/algebra-lineal-nucleo-imagen-rango-ejercicios/) o trabajar problemas de tu asignatura con [clases de Matemáticas universitarias](/clases-particulares/matematicas-universidad/).
