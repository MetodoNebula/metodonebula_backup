---
title: "Física PAU: electromagnetismo desde cero para dominar campos, fuerzas e inducción"
date: "2026-10-24"
updated: "2026-10-28"
description: "Electromagnetismo para Física PAU: campo, fuerza de Lorentz, movimiento de cargas, flujo, inducción, ejemplo y errores típicos."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-fisica-ondas-resolver-problemas,preparar-selectividad-con-calendario"
image: "/assets/latex/electromagnetism-path.svg"
---

Electromagnetismo parece una colección de reglas de la mano, pero todas responden a una pregunta común: **qué genera el campo, qué partícula o conductor lo experimenta y en qué dirección aparece la fuerza o la corriente inducida.**

![Carga positiva moviéndose en un campo magnético con fuerza perpendicular y trayectoria curva](/assets/latex/electromagnetism-path.svg)

## Campo eléctrico y fuerza

El campo eléctrico es fuerza por unidad de carga:

$$
\vec E=\frac{\vec F}{q}.
$$

Una carga $q$ experimenta:

$$
\vec F=q\vec E.
$$

Si $q$ es positiva, fuerza y campo tienen el mismo sentido; si es negativa, sentidos opuestos. Especificar el signo evita errores de dirección.

## Potencial y energía

El potencial es energía potencial por unidad de carga. La variación de energía se relaciona con la diferencia de potencial:

$$
\Delta U=q\Delta V.
$$

Campo y potencial están relacionados, pero no son la misma magnitud. El campo es vectorial; el potencial es escalar.

## Fuerza magnética sobre una carga

Para una carga que se mueve con velocidad $\vec v$ en un campo $\vec B$:

$$
\vec F=q\,\vec v\times\vec B.
$$

Su módulo es:

$$
F=|q|vB\sin\theta.
$$

Si velocidad y campo son paralelos, la fuerza es cero. Si son perpendiculares, la fuerza es máxima y puede producir movimiento circular.

## Por qué cambia dirección pero no rapidez

La fuerza magnética es perpendicular a la velocidad instantánea. Por ello no realiza trabajo en el modelo ideal: cambia la dirección del vector velocidad, no su módulo.

Igualando fuerza magnética y centrípeta:

$$
|q|vB=\frac{mv^2}{r},
$$

obtenemos:

$$
r=\frac{mv}{|q|B}.
$$

## Ejemplo

Un protón entra perpendicularmente en un campo de 0,20 T con velocidad $3.0\times10^6$ m/s. Con $m_p=1.67\times10^{-27}$ kg y $q=1.60\times10^{-19}$ C:

$$
r=\frac{1.67\times10^{-27}\cdot3.0\times10^6}{1.60\times10^{-19}\cdot0.20}\approx0.157\ \mathrm{m}.
$$

El sentido de curvatura se determina con el producto vectorial y el signo positivo de la carga.

## Fuerza sobre una corriente

Un conductor recto de longitud $L$ con corriente $I$ en un campo uniforme experimenta:

$$
\vec F=I\vec L\times\vec B.
$$

El vector $\vec L$ sigue el sentido de la corriente convencional. Dibuja antes de aplicar una regla de la mano.

## Flujo magnético

Para campo uniforme:

$$
\Phi=B A\cos\theta,
$$

donde $\theta$ es el ángulo entre el campo y el vector normal a la superficie, no necesariamente con el plano. Esta precisión explica muchos errores de seno y coseno.

## Inducción y ley de Lenz

La fuerza electromotriz inducida aparece cuando cambia el flujo:

$$
\mathcal{E}=-\frac{d\Phi}{dt}.
$$

Puede cambiar $B$, el área, la orientación o varias a la vez. El signo negativo expresa que la corriente inducida crea un efecto que se opone al cambio de flujo, no al flujo sin más.

## Errores frecuentes

- Aplicar la regla de la mano antes de identificar vectores.
- Olvidar invertir el sentido para una carga negativa.
- Confundir ángulo con el plano y ángulo con la normal.
- Afirmar que el campo magnético aumenta la rapidez de una carga aislada.
- Usar Lenz sin decir qué cambio se opone.
- Mezclar campo, fuerza y potencial.

## Método PAU

Dibujo → vectores → ley física → módulo → dirección → comprobación de unidades. Para inducción añade: “qué hace variar el flujo”. Esta secuencia produce soluciones legibles y conserva puntuación parcial.

El campus virtual de Método Nebula desarrolla electromagnetismo con fundamentos, ejemplos visuales, ejercicios y preguntas PAU. Si quieres convertir reglas sueltas en un mapa coherente y entrenable, utiliza el botón de contacto.
