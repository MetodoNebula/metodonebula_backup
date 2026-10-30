---
title: "Física cuántica PAU: efecto fotoeléctrico y fotones para entender por qué existe una frecuencia umbral"
seoTitle: "Efecto fotoeléctrico PAU: fotones y frecuencia umbral"
date: "2026-10-10"
updated: "2026-10-10"
description: "Domina el efecto fotoeléctrico en Física PAU: fotones, trabajo de extracción, frecuencia umbral, potencial de frenado y gráficas."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-fisica-nuclear-defecto-masa,pau-fisica-ondas-resolver-problemas,pau-corregir-simulacros-plan-estudio"
image: "/assets/latex/photoelectric-threshold.svg"
---

El efecto fotoeléctrico obliga a separar intensidad y frecuencia. Aumentar la intensidad aporta más fotones; aumentar la frecuencia cambia la energía de cada fotón.

> **Respuesta directa.** Un electrón solo se emite si $hf\geq\phi$. Por encima de la frecuencia umbral, la energía cinética máxima es $K_{\max}=hf-\phi$. La intensidad modifica el número de electrones emitidos, no su energía máxima si la frecuencia permanece fija.

![Energía cinética máxima frente a frecuencia con umbral fotoeléctrico](/assets/latex/photoelectric-threshold.svg)

## La ecuación de Einstein

$$
E_\gamma=hf=\frac{hc}{\lambda}.
$$

Parte de esa energía vence el trabajo de extracción $\phi$:

$$
K_{\max}=hf-\phi.
$$

En el umbral, $K_{\max}=0$:

$$
\phi=hf_0.
$$

## Ejemplo resuelto

Un metal tiene trabajo de extracción $\phi=2.2$ eV. Su frecuencia umbral es:

$$
f_0=\frac{\phi}{h}.
$$

Convirtiendo:

$$
\phi=2.2(1.602\times10^{-19})
=3.52\times10^{-19}\ \mathrm{J}.
$$

$$
f_0\approx\frac{3.52\times10^{-19}}{6.626\times10^{-34}}
=5.31\times10^{14}\ \mathrm{Hz}.
$$

## Potencial de frenado

Si un potencial $V_f$ detiene a los electrones más energéticos:

$$
eV_f=K_{\max}.
$$

La pendiente de una gráfica $K_{\max}$ frente a $f$ es $h$; el corte con el eje de frecuencia es $f_0$.

## Qué cambia con la intensidad

Por encima del umbral, más intensidad significa más fotones por segundo y, por tanto, mayor corriente fotoeléctrica. Pero si $f$ no cambia, cada fotón conserva la misma energía y $K_{\max}$ permanece.

Por debajo del umbral, ninguna intensidad compensa la falta de energía por fotón.

## Ejemplo con potencial de frenado

Sobre un metal de trabajo de extracción $2.0$ eV inciden fotones de energía $3.4$ eV. La energía cinética máxima es:

$$
K_{\max}=3.4-2.0=1.4\ \mathrm{eV}.
$$

Como un electrón que atraviesa un voltio cambia su energía en un electronvoltio, el potencial de frenado es $V_f=1.4$ V. Si la intensidad se duplica manteniendo la frecuencia, aumentará la corriente de saturación, pero el potencial de frenado seguirá siendo 1.4 V.

Si en cambio aumenta la frecuencia, la recta $K_{\max}(f)$ crece con pendiente $h$. Medir esa pendiente permite estimar la constante de Planck, mientras que la ordenada en el origen extrapolada es $-\phi$.

## Qué observaciones exigieron el modelo de fotón

La emisión aparece sin retraso apreciable cuando $f>f_0$, incluso con intensidad baja. Además, existe una frecuencia umbral y la energía máxima depende de la frecuencia, no de la intensidad. Un modelo ondulatorio clásico que repartiera energía continuamente no explicaba bien este conjunto de resultados.

El modelo de Einstein asigna la interacción a paquetes individuales: un fotón entrega su energía a un electrón. Esto explica por qué muchos fotones poco energéticos no “suman” normalmente su energía para liberar un electrón en el experimento básico, y por qué aumentar la intensidad incrementa el número de sucesos, no la energía de cada uno.

En una explicación PAU, observación y modelo deben aparecer conectados. Citar solo la ecuación obtiene menos información física que interpretar qué variable controla cada medida.

## Dualidad y longitud de onda

La relación de de Broglie:

$$
\lambda=\frac{h}{p}
$$

asocia longitud de onda a partículas con momento. En preguntas PAU conviene distinguir esta longitud de onda de la del fotón incidente.

## Errores frecuentes

- Usar eV como si fueran julios.
- Afirmar que más intensidad aumenta $K_{\max}$.
- Confundir frecuencia umbral con intensidad mínima.
- Omitir el trabajo de extracción.
- Usar $c=f\lambda$ con la velocidad de un electrón.

El campus virtual de Método Nebula desarrolla cuántica, relatividad y nuclear con teoría, gráficos y problemas PAU. Contacta para entrenar conversiones, modelos y explicaciones.
