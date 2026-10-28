---
title: "Probabilidad en ESO: aprende a contar bien y evita los errores que cambian todo"
date: "2026-10-22"
updated: "2026-10-28"
description: "Probabilidad en ESO con espacio muestral, sucesos, Laplace, árboles, ejemplos, comprobaciones y ejercicios resueltos."
tag: "ESO"
category: "Matemáticas ESO y Bachillerato"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "estadistica-descriptiva-eso-media-mediana-moda,probabilidad-condicionada-bayes-problemas-resueltos"
image: "/assets/latex/probability-tree.svg"
---

La mayoría de los errores de probabilidad no empiezan en una división. Empiezan al olvidar un resultado posible, contar dos veces el mismo caso o suponer que todos los resultados son igual de probables.

La solución es representar antes de calcular. Una lista, tabla o árbol hace visible el espacio muestral y permite comprobar si el recuento está completo.

![Diagrama de árbol para dos etapas con probabilidades condicionadas](/assets/latex/probability-tree.svg)

## Experimento, resultado y suceso

El experimento es la acción aleatoria; un resultado elemental es una posibilidad concreta; un suceso es un conjunto de resultados.

Al lanzar un dado, el espacio muestral es:

$$
\Omega=\{1,2,3,4,5,6\}.
$$

El suceso “obtener un número par” es $A=\{2,4,6\}$.

## Regla de Laplace

Cuando los resultados son equiprobables:

$$
P(A)=\frac{\text{casos favorables}}{\text{casos posibles}}.
$$

Para el dado, $P(A)=3/6=1/2$. No uses esta regla si los resultados no tienen la misma probabilidad.

## Suceso contrario

La probabilidad de que no ocurra $A$ es:

$$
P(A^c)=1-P(A).
$$

Esto simplifica preguntas como “al menos uno”. A veces es mucho más fácil calcular la probabilidad de ninguno y restar a uno.

## Dos etapas: tablas y árboles

Al lanzar dos monedas, los resultados ordenados son:

$$
\{CC,CX,XC,XX\}.
$$

La probabilidad de exactamente una cara es $2/4=1/2$. Contar solo “cara-cruz” una vez omite que el orden produce dos caminos diferentes.

En un árbol, multiplica probabilidades a lo largo de una rama y suma ramas incompatibles que conducen al mismo suceso.

## Sin reemplazo

Una bolsa contiene 3 bolas rojas y 2 azules. Se extraen dos sin reemplazo. La probabilidad de dos rojas es:

$$
\frac35\cdot\frac24=\frac{3}{10}.
$$

La segunda probabilidad cambia porque queda una bola menos. Con reemplazo sería $3/5\cdot3/5$.

## Frecuencia experimental

Si un suceso ocurre 42 veces en 100 ensayos, su frecuencia relativa es 0,42. No tiene que coincidir exactamente con la probabilidad teórica, pero suele estabilizarse alrededor de ella al aumentar el número de repeticiones.

La probabilidad no predice cada resultado individual; describe comportamiento a largo plazo.

## Comprobaciones rápidas

- Toda probabilidad está entre 0 y 1.
- Los resultados de todo el espacio suman 1.
- Un suceso imposible vale 0 y uno seguro vale 1.
- En un árbol, las ramas que salen de un nodo suman 1.
- Si hay reemplazo o no, debe reflejarse en la segunda etapa.

## Errores frecuentes

- Aplicar Laplace sin equiprobabilidad.
- Confundir “y” con “o”.
- Olvidar el orden cuando importa.
- Mantener denominador al extraer sin reemplazo.
- Sumar probabilidades de ramas que no son incompatibles.
- Dar un porcentaje mayor que 100% sin revisar.

## Ejercicios de control

1. Probabilidad de múltiplo de 3 al lanzar un dado.
2. Probabilidad de al menos una cara en dos monedas.
3. En la bolsa anterior, probabilidad de roja y azul en cualquier orden.
4. Explica la diferencia entre probabilidad teórica y frecuencia relativa.

Resultados: $1/3$; $3/4$; $3/5$; y la última compara modelo ideal con datos observados.

El campus virtual de Método Nebula recorre fundamentos, estadística y probabilidad con teoría, árboles, ejercicios y autoevaluación. Si quieres detectar exactamente dónde se rompe el recuento y practicar en dificultad creciente, utiliza el botón de contacto.
