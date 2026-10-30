---
title: "Geometría métrica PAU: distancias, ángulos y posiciones relativas sin memorizar fórmulas sueltas"
seoTitle: "Geometría métrica PAU: distancias y ángulos"
date: "2026-09-10"
updated: "2026-09-10"
description: "Domina geometría métrica en Matemáticas II PAU: punto, recta, plano, distancias, ángulos, proyecciones y posiciones relativas."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "pau-matematicas-ii-vectores-rectas-planos,pau-matematicas-sistemas-parametro-rouche-frobenius,pau-matematicas-matrices-determinantes-gauss"
image: "/assets/latex/metric-geometry-distance.svg"
---

Las fórmulas de distancia en el espacio dejan de parecer arbitrarias cuando se identifica la dirección perpendicular adecuada. La geometría métrica se reduce a vectores directores, vectores normales, productos escalares y proyecciones.

> **Respuesta directa.** Antes de calcular, clasifica los objetos y su posición relativa. La distancia mínima siempre se mide en dirección perpendicular: al plano mediante su normal; a una recta mediante una proyección o un producto vectorial. Los ángulos se obtienen comparando direcciones relevantes.

![Proyección perpendicular de un punto sobre un plano y fórmula de distancia](/assets/latex/metric-geometry-distance.svg)

## Datos geométricos esenciales

Una recta puede escribirse:

$$
r:\ \vec x=\vec p+\lambda\vec v,
$$

donde $\vec v$ es vector director.

Un plano:

$$
\pi:\ Ax+By+Cz+D=0
$$

tiene vector normal $\vec n=(A,B,C)$. El producto escalar permite comprobar perpendicularidad:

$$
\vec v\cdot\vec n=0
$$

si la recta es paralela al plano.

## Distancia de un punto a un plano

Para $P(x_0,y_0,z_0)$:

$$
d(P,\pi)=
\frac{|Ax_0+By_0+Cz_0+D|}
{\sqrt{A^2+B^2+C^2}}.
$$

El numerador evalúa la ecuación del plano en el punto; el denominador normaliza la longitud de $\vec n$. El valor absoluto garantiza una distancia no negativa.

### Ejemplo

Para $P(1,2,-1)$ y $\pi:2x-y+2z-3=0$:

$$
d=\frac{|2-2-2-3|}{\sqrt{4+1+4}}
=\frac5{3}.
$$

La unidad es la de las coordenadas, no “unidades cuadradas”.

## Punto a recta

Si $A$ es un punto de $r$ y $\vec v$ su director:

$$
d(P,r)=\frac{|\overrightarrow{AP}\times\vec v|}{|\vec v|}.
$$

El numerador es el área del paralelogramo y dividir por la base produce su altura. También puede hallarse el pie de la perpendicular imponiendo que $\overrightarrow{PH}\cdot\vec v=0$.

## Distancia entre rectas

- Si se cortan, la distancia es 0.
- Si son paralelas, se reduce a punto–recta.
- Si se cruzan sin cortarse, son rectas reversas y:

$$
d(r,s)=
\frac{|\overrightarrow{AB}\cdot(\vec u\times\vec v)|}
{|\vec u\times\vec v|}.
$$

Antes de usar esta fórmula, comprueba que los directores no son paralelos y que el sistema de intersección es incompatible.

## Ángulos

Entre dos rectas:

$$
\cos\theta=
\frac{|\vec u\cdot\vec v|}{|\vec u||\vec v|}.
$$

Entre dos planos se comparan sus normales. Entre recta y plano, si $\alpha$ es el ángulo agudo:

$$
\sin\alpha=
\frac{|\vec v\cdot\vec n|}{|\vec v||\vec n|}.
$$

El seno aparece porque el ángulo recta–plano es complementario al ángulo entre director y normal.

## Proyección y simétrico de un punto

Para proyectar $P$ sobre $\pi$, construye la recta perpendicular que pasa por $P$ con director $\vec n$. Su intersección con el plano es el pie $H$. El simétrico respecto al plano cumple:

$$
\vec{PH'}=2\vec{PH},
\qquad
H'=2H-P.
$$

Este procedimiento es más seguro que intentar recordar una fórmula larga de coordenadas.

## Errores frecuentes

- Usar un vector director de la recta como normal del plano sin justificar.
- Olvidar el valor absoluto en una distancia.
- Aplicar la fórmula de rectas reversas a rectas paralelas.
- Confundir ángulo entre recta y plano con ángulo entre director y normal.
- Calcular antes de clasificar la posición relativa.

## De la fórmula al modelo de examen

El campus virtual de Método Nebula conecta vectores, rectas, planos, sistemas y geometría métrica con ejercicios visuales y modelos PAU resueltos. La práctica obliga a justificar cada vector y cada perpendicularidad. El botón de contacto permite acceder al recorrido completo y trabajar los problemas con corrección paso a paso.
