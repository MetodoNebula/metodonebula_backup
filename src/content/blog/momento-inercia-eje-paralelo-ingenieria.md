---
title: Momento de inercia: problemas resueltos para Física e Ingeniería
date: 2026-11-24
updated: 2026-11-24
description: Aprende a resolver problemas de momento de inercia en Física e Ingeniería: eje de giro, teorema de ejes paralelos, energía rotacional y errores típicos.
tag: Física universitaria
category: Física y Química
relatedService: /clases-particulares/fisica-ingenieria/
relatedPosts: bachillerato-fisica-momento-choques,diagramas-cuerpo-libre-metodo-errores-frecuentes,examen-calculo-1-ingenieria-simulacro-resuelto
image: /favicon.svg
---

El **momento de inercia** es una de las primeras ideas de Física universitaria que exige dejar de pensar solo en masas puntuales. Dos objetos con la misma masa pueden responder de forma muy distinta al mismo par de fuerzas si esa masa está distribuida a distinta distancia del eje.

Para una distribución continua,

$$
I=\int r^2\,dm,
$$

donde $r$ es la distancia perpendicular de cada elemento de masa al eje elegido. El eje no es un detalle: cambiarlo cambia el momento de inercia.

## La relación central de la dinámica rotacional

La analogía con el movimiento lineal organiza casi todos los problemas:

$$
F=ma \qquad\longleftrightarrow\qquad \tau=I\alpha.
$$

El par $\tau$ juega el papel de la fuerza; $I$, el de la masa; y $\alpha$, el de la aceleración. Pero no apliques la fórmula antes de dibujar el eje, las fuerzas y los brazos de palanca.

## Tablas útiles, pero solo con el eje correcto

Algunos resultados habituales son:

$$
I_{\text{aro}}=MR^2,\qquad
I_{\text{disco}}=\frac12MR^2,\qquad
I_{\text{barra, centro}}=\frac1{12}ML^2.
$$

Memorizar estas expresiones no resuelve por sí solo el ejercicio. Hay que comprobar si el eje del enunciado pasa por el centro, por un extremo o por un punto desplazado. Una barra respecto a un extremo, por ejemplo, no usa directamente la fórmula respecto a su centro.

## Teorema de los ejes paralelos

Si conoces el momento de inercia respecto a un eje que pasa por el centro de masas, puedes desplazarlo una distancia perpendicular $d$:

$$
I=I_{CM}+Md^2.
$$

Para una barra homogénea de longitud $L$ que gira alrededor de un extremo:

$$
I=\frac1{12}ML^2+M\left(\frac L2\right)^2
=\frac13ML^2.
$$

El paso que más se olvida es justificar que los ejes son paralelos y que $d$ se mide entre ellos, no hasta un punto cualquiera del objeto.

## Energía de rotación y rodadura

La energía cinética de un sólido rígido que gira es

$$
K_{rot}=\frac12I\omega^2.
$$

En rodadura sin deslizamiento se suma a la energía de traslación:

$$
K=\frac12Mv_{CM}^2+\frac12I_{CM}\omega^2,\qquad v_{CM}=R\omega.
$$

Por eso una esfera, un disco y un aro no bajan igual por un plano inclinado aunque tengan la misma masa y radio: su distribución de masa cambia la parte de energía asociada al giro.

## Errores que conviene corregir antes del examen

- Usar el radio del objeto en lugar de la distancia al eje.
- Confundir fuerza con par: $\tau=rF\sin\theta$.
- Elegir una fórmula tabulada para un eje distinto.
- Mezclar $v=R\omega$ cuando hay deslizamiento.
- Olvidar unidades: $I$ se mide en $\mathrm{kg\,m^2}$.

En las [clases de Física para Ingeniería](/clases-particulares/fisica-ingenieria/) trabajamos el diagrama, la elección de eje y el planteamiento antes de sustituir números. Puedes compartir el enunciado, tu grado y la fecha de convocatoria en [contacto](/contacto/) para organizar una preparación ajustada a tu asignatura.
