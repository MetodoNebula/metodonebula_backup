---
title: "Óptica geométrica PAU: lentes, espejos y signos con rayos que justifican cada resultado"
seoTitle: "Óptica geométrica PAU: lentes, espejos y signos"
date: "2026-10-23"
updated: "2026-10-23"
description: "Resuelve óptica geométrica PAU con convenio de signos, ecuación de lentes, aumento, diagramas de rayos e interpretación de imágenes."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-fisica-ondas-resolver-problemas,pau-fisica-electromagnetismo-estudiar,pau-corregir-simulacros-plan-estudio"
image: "/assets/latex/lens-ray-diagram.svg"
---

En óptica geométrica, una sustitución numérica puede parecer correcta y describir una imagen imposible. El diagrama de rayos no es decorativo: anticipa si la imagen será real o virtual, derecha o invertida y mayor o menor.

> **Respuesta directa.** Fija primero el convenio de signos, dibuja los rayos principales y después aplica la ecuación. La posición y el aumento deben contar la misma historia que el esquema.

![Diagrama de rayos principales en una lente convergente](/assets/latex/lens-ray-diagram.svg)

## Tres rayos principales

En una lente delgada convergente:

1. El rayo paralelo al eje sale pasando por el foco imagen.
2. El rayo que pasa por el centro óptico no se desvía en el modelo paraxial.
3. El rayo dirigido hacia el foco objeto sale paralelo.

La intersección de los rayos refractados localiza una imagen real. La intersección de sus prolongaciones localiza una imagen virtual.

## Ecuación y convenio

Con distancias positivas tomadas como módulos en el esquema habitual:

$$
\frac1f=\frac1s+\frac1{s'}.
$$

En cursos que utilizan convenio cartesiano, los signos cambian según lado y dirección. No mezcles convenios en una misma solución: declara el utilizado y mantén coherencia.

El aumento lateral es:

$$
m=\frac{y'}{y}=-\frac{s'}{s}.
$$

El signo negativo suele indicar inversión.

## Ejemplo resuelto

Un objeto está a 30 cm de una lente convergente de focal 10 cm:

$$
\frac1{10}=\frac1{30}+\frac1{s'}
\Rightarrow
\frac1{s'}=\frac{2}{30}
\Rightarrow
s'=15\ \mathrm{cm}.
$$

$$
m=-\frac{15}{30}=-0.5.
$$

La imagen es real, invertida y de la mitad del tamaño. El diagrama debe mostrarla entre $F'$ y $2F'$.

## Potencia de una lente

$$
P=\frac1f,
$$

con $f$ en metros y $P$ en dioptrías. Una focal de $0.25$ m corresponde a $4$ D.

## Predecir la imagen antes de calcular

En una lente convergente, la posición del objeto permite anticipar el resultado. Más allá de $2F$, la imagen es real, invertida y reducida; en $2F$, tiene el mismo tamaño; entre $F$ y $2F$, es real, invertida y aumentada. Si el objeto está entre la lente y $F$, los rayos emergen divergentes y sus prolongaciones forman una imagen virtual, derecha y aumentada.

Esta clasificación funciona como control del álgebra. Si un objeto situado a más de $2F$ produce en tu cálculo una imagen virtual aumentada, no conviene cambiar un signo al azar: hay que volver al convenio y a la ecuación.

## Ejemplo inverso y resolución experimental

Una lente forma una imagen real tres veces mayor a 60 cm. Como $|m|=s'/s=3$:

$$
s=\frac{60}{3}=20\ \mathrm{cm},
\qquad
\frac1f=\frac1{20}+\frac1{60}=\frac4{60},
$$

de modo que $f=15$ cm y $P=1/0.15=6.67$ D. El signo de $m$ sería negativo porque la imagen real aparece invertida.

En laboratorio, una imagen real puede enfocarse sobre una pantalla; una virtual no. Para estimar la focal se miden objeto, lente y pantalla desde una referencia común, se repite con varias posiciones y se evita tomar distancias desde el borde del soporte. La nitidez del enfoque limita la incertidumbre y debe reflejarse en las cifras significativas.

## Espejos

Los mismos principios geométricos se aplican con reflexión. En un espejo cóncavo, un objeto más allá del foco puede formar imagen real; entre foco y espejo produce imagen virtual aumentada. El espejo convexo produce imágenes virtuales, derechas y reducidas.

## Comprobaciones físicas

- ¿Los rayos reales se cruzan donde afirma el cálculo?
- ¿El signo de $m$ coincide con la orientación?
- ¿La escala del dibujo es compatible con $|m|$?
- ¿Las distancias están en la unidad exigida?

## Errores frecuentes

- Usar centímetros en dioptrías.
- Dibujar todos los rayos atravesando el foco.
- Confundir foco objeto y foco imagen.
- Dar una posición sin clasificar la imagen.
- Corregir signos “al final” en vez de mantener un convenio.

El campus de Método Nebula desarrolla ondas y óptica con diagramas, ecuaciones y ejercicios PAU. Contacta si necesitas convertir el convenio de signos en un procedimiento verificable.
