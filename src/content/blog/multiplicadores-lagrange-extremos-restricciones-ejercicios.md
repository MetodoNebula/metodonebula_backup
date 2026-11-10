---
title: "Multiplicadores de Lagrange: máximos y mínimos con restricciones"
seoTitle: "Multiplicadores de Lagrange: extremos con restricciones y ejercicios"
date: "2026-11-10"
updated: "2026-11-10"
description: "Resuelve máximos y mínimos con restricciones mediante multiplicadores de Lagrange: gradiente, sistema, candidatos y comprobación."
tag: "Cálculo universitario"
category: "Matemáticas universitarias"
relatedService: "/clases-particulares/calculo-universitario/"
relatedPosts: "derivadas-parciales-gradiente-ejercicios,examen-calculo-1-ingenieria-simulacro-resuelto,como-aprobar-calculo-i-ingenieria-seis-semanas"
image: "/favicon.svg"
---

Los multiplicadores de Lagrange localizan extremos de una función cuando no puedes elegir libremente todas las variables. La restricción obliga a moverse por una curva o superficie concreta; en un extremo sobre ella, el gradiente de la función objetivo es paralelo al de la restricción.

> **Respuesta directa.** Para optimizar $f(x,y)$ sujeto a $g(x,y)=0$, resuelve $\nabla f=\lambda\nabla g$ junto con $g=0$. Evalúa $f$ en todos los candidatos y compara los valores si el dominio restringido es cerrado.

## De dónde sale el sistema

Si una curva de restricción impide avanzar en una dirección que mantenga $g=0$, en un máximo o mínimo tampoco debe existir una dirección permitida que aumente o disminuya $f$. Por eso los gradientes son paralelos:

$$
\nabla f(x,y)=\lambda\nabla g(x,y).
$$

El escalar $\lambda$ no es una variable extra del problema original: permite expresar ese paralelismo.

## Ejemplo: máximo de un producto

Busca los extremos de $f(x,y)=xy$ sujetos a $x+y=10$. Define

$$
g(x,y)=x+y-10.
$$

Como $\nabla f=(y,x)$ y $\nabla g=(1,1)$, el sistema queda

$$
y=\lambda,\qquad x=\lambda,\qquad x+y=10.
$$

De las dos primeras ecuaciones, $x=y$. Sustituyendo en la restricción obtenemos $x=y=5$. El producto vale $25$.

Si además se exige $x,y\geq0$, el segmento incluye sus extremos: allí el producto vale $0$. Por tanto, $25$ es el máximo y $0$ el mínimo en ese dominio.

## Dos restricciones

Con $f(x,y,z)$ y dos restricciones $g=0$, $h=0$, se usa

$$
\nabla f=\lambda\nabla g+\mu\nabla h,
$$

junto con ambas ecuaciones de restricción. Antes de derivar, comprueba que las superficies realmente dejan una curva o un conjunto donde tenga sentido buscar extremos.

## Errores frecuentes

- Olvidar incluir la ecuación de restricción en el sistema.
- Dividir una ecuación por una variable que puede valer cero.
- Encontrar candidatos y no calcular el valor de $f$ en ellos.
- Ignorar extremos de frontera cuando la región los tiene.

Para repasar gradiente y derivadas parciales, continúa con [derivadas parciales y gradiente](/blog/derivadas-parciales-gradiente-ejercicios/). En las [clases de Cálculo universitario](/clases-particulares/calculo-universitario/) se puede trabajar el planteamiento y la comprobación con el formato concreto de tu asignatura.
