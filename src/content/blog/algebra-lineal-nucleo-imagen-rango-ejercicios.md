---
title: "Núcleo, imagen y rango de una aplicación lineal: ejercicios resueltos paso a paso"
seoTitle: "Núcleo, imagen y rango: cómo resolver ejercicios de Álgebra Lineal"
date: "2026-11-10"
updated: "2026-11-10"
description: "Aprende a calcular núcleo, imagen y rango de una aplicación lineal con matrices, Gauss, bases, dimensión y ejercicios resueltos."
tag: "Álgebra Lineal"
category: "Matemáticas universitarias"
relatedService: "/clases-particulares/algebra-lineal-universidad/"
relatedPosts: "algebra-lineal-universidad-que-estudiar-primero-errores,matrices-determinantes-sistemas-ecuaciones-guia,pau-matematicas-matrices-determinantes-gauss"
image: "/favicon.svg"
---

El núcleo y la imagen no son dos definiciones que haya que aprender de memoria: describen, respectivamente, qué vectores se transforman en cero y qué resultados puede producir una aplicación lineal. La matriz asociada y el método de Gauss permiten calcular ambos de forma ordenada.

> **Respuesta directa.** Para hallar el núcleo, resuelve $A\mathbf{x}=\mathbf{0}$. Para hallar la imagen, localiza las columnas pivote de la matriz original y toma las columnas correspondientes. El rango es el número de pivotes, y cumple rango más nulidad igual a la dimensión del dominio.

## Un ejemplo completo

Sea $T:\mathbb{R}^3\to\mathbb{R}^2$ con matriz

$$
A=\begin{pmatrix}1&2&3\\2&4&6\end{pmatrix}.
$$

Al reducir por filas queda una sola fila no nula. Por tanto, el rango es $1$.

Para el núcleo resolvemos

$$
x+2y+3z=0.
$$

Tomamos $y=s$ y $z=t$. Entonces $x=-2s-3t$, de modo que

$$
\ker(T)=\operatorname{span}\left\{\begin{pmatrix}-2\\1\\0\end{pmatrix},\begin{pmatrix}-3\\0\\1\end{pmatrix}\right\}.
$$

La nulidad es $2$. Como el dominio tiene dimensión $3$, se verifica $1+2=3$.

## La imagen se toma de la matriz original

La columna pivote es la primera. Por eso una base de la imagen es

$$
\left\{\begin{pmatrix}1\\2\end{pmatrix}\right\}.
$$

No uses directamente las columnas de la matriz reducida como base de la imagen de $A$: las operaciones por filas cambian el espacio columna. La reducción te dice qué posiciones son pivote; después vuelves a las columnas de la matriz original.

## Errores frecuentes

- Resolver $A\mathbf{x}=\mathbf{b}$ en lugar de $A\mathbf{x}=\mathbf{0}$ para el núcleo.
- Elegir columnas reducidas para la imagen.
- Dar vectores generadores sin verificar si son independientes.
- Olvidar indicar de qué espacio son los vectores.

## Una comprobación que une todo

El teorema rango-nulidad es una prueba rápida de consistencia:

$$
\dim(\ker T)+\dim(\operatorname{Im}T)=\dim(\text{dominio}).
$$

Si no se cumple, revisa los parámetros libres o el número de pivotes. Para consolidar la base, continúa con la [guía de Álgebra Lineal en la universidad](/blog/algebra-lineal-universidad-que-estudiar-primero-errores/) o trabaja tus ejercicios de asignatura en las [clases de Álgebra Lineal](/clases-particulares/algebra-lineal-universidad/).
