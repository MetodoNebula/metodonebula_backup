---
title: "Matemáticas II PAU: domina vectores, rectas y planos sin memorizar veinte fórmulas"
date: "2026-09-27"
updated: "2026-10-28"
description: "Geometría del espacio para PAU: vectores, rectas, planos, posiciones relativas, distancias, ejemplo y estrategia de examen."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "como-preparar-pau-matematicas-ii,matrices-determinantes-sistemas-ecuaciones-guia,preparar-selectividad-con-calendario"
image: "/assets/latex/vectors-planes.svg"
---

La geometría del espacio se vuelve inabarcable cuando cada tipo de ejercicio se asocia a una fórmula diferente. En realidad, casi todo el bloque se apoya en tres ideas: **dirección, perpendicularidad e intersección**. Las ecuaciones son maneras de hacer visibles esas ideas.

![Plano con vector normal, recta y distancia perpendicular](/assets/latex/vectors-planes.svg)

## Qué información define cada objeto

Una recta queda determinada por un punto $P$ y un vector director $\vec v$:

$$
r:\ \vec x=\vec P+t\vec v.
$$

Un plano puede definirse por un punto y dos vectores directores independientes, o por una ecuación:

$$
\pi:\ ax+by+cz=d,
$$

cuyo vector normal es $\vec n=(a,b,c)$.

Antes de operar, escribe qué tienes y qué necesitas. Esta pausa evita construir una forma de la ecuación que luego no sirve para responder.

## El producto escalar traduce perpendicularidad

Dos vectores no nulos son perpendiculares si:

$$
\vec u\cdot\vec v=0.
$$

Por eso un vector normal del plano es perpendicular a todas sus direcciones. Una recta perpendicular a un plano tiene un vector director paralelo al normal del plano.

## El producto vectorial construye normales

Si conoces dos direcciones independientes $\vec u$ y $\vec v$ contenidas en un plano, entonces:

$$
\vec n=\vec u\times\vec v
$$

es perpendicular a ambas. Comprueba después que el punto dado satisface la ecuación obtenida.

## Posiciones relativas: interpreta el sistema

Para recta y plano, sustituye la ecuación paramétrica de la recta en la del plano:

- una solución para $t$: se cortan en un punto;
- ninguna solución: recta paralela y exterior;
- identidad: la recta está contenida en el plano.

No escribas solo “sistema compatible”. Traduce el resultado al dibujo espacial.

## Ejemplo: plano por tres puntos

Sean $A(1,0,0)$, $B(0,1,0)$ y $C(0,0,1)$. Dos direcciones son:

$$
\overrightarrow{AB}=(-1,1,0),\qquad \overrightarrow{AC}=(-1,0,1).
$$

Un vector normal es:

$$
\overrightarrow{AB}\times\overrightarrow{AC}=(1,1,1).
$$

Usando el punto $A$:

$$
(1,1,1)\cdot(x-1,y,z)=0,
$$

de donde:

$$
x+y+z=1.
$$

Comprobación: los tres puntos satisfacen la ecuación.

## Distancias: identifica primero los objetos

La distancia de un punto $P(x_0,y_0,z_0)$ al plano $ax+by+cz+d=0$ es:

$$
d(P,\pi)=\frac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}.
$$

Pero no uses esta fórmula para cualquier distancia. Punto–recta, rectas paralelas o rectas que se cruzan requieren construcciones distintas. Pregunta primero cuál es el segmento perpendicular más corto.

## Procedimiento de examen

1. Haz un boceto y nombra objetos.
2. Extrae puntos, directores y normales.
3. Traduce la condición: paralelo, perpendicular, pertenece o corta.
4. Elige la representación que haga esa condición más sencilla.
5. Resuelve y comprueba sustituyendo o usando un producto escalar.

## Errores frecuentes

- Usar dos vectores dependientes para definir un plano.
- Confundir vector normal y vector director.
- Hallar un punto de corte y no comprobarlo.
- Calcular una distancia sin valor absoluto.
- Clasificar un sistema sin interpretar la geometría.
- Perder signos al construir vectores entre puntos.

## Práctica recomendada

Alterna ejercicios de construcción, posición relativa, ángulos y distancias. Luego resuelve una pregunta que combine dos partes: por ejemplo, hallar un plano y medir una distancia. Finalmente incluye el bloque en un modelo PAU con tiempo real.

El campus virtual de Método Nebula desarrolla Matemáticas II desde vectores y sistemas hasta rectas, planos y geometría métrica, con ejemplos y preguntas de examen. Si quieres ordenar este bloque según los errores que realmente cometes, el botón de contacto permite iniciar el diagnóstico.
