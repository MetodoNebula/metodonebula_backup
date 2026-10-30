---
title: "Termoquímica PAU: ley de Hess, entalpías y signos sin perder energía por el camino"
seoTitle: "Termoquímica PAU: ley de Hess, entalpías y signos"
date: "2026-10-18"
updated: "2026-10-18"
description: "Domina termoquímica PAU: entalpía, ley de Hess, entalpías de formación, energías de enlace, calorimetría y signos."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-quimica-equilibrio-quimico-estudiar,pau-quimica-acido-base-ph-calculos,pau-corregir-simulacros-plan-estudio"
image: "/assets/latex/hess-cycle.svg"
---

La ley de Hess no es una fórmula nueva: expresa que la entalpía es una función de estado. Si reactivos y productos son los mismos, el cambio total no depende del camino intermedio.

> **Respuesta directa.** Construye un ciclo donde todas las flechas tengan dirección clara. Si inviertes una reacción, cambia el signo de $\Delta H$; si multiplicas sus coeficientes, multiplica también la entalpía.

![Ciclo de Hess entre reactivos, productos y elementos de referencia](/assets/latex/hess-cycle.svg)

## Exotérmica y endotérmica

$$
\Delta H=H_{\text{productos}}-H_{\text{reactivos}}.
$$

- $\Delta H<0$: proceso exotérmico.
- $\Delta H>0$: proceso endotérmico.

El signo pertenece al sistema. “Libera calor” y $\Delta H<0$ describen la misma situación.

## Entalpías estándar de formación

La entalpía estándar de formación es el cambio al formar un mol de compuesto desde sus elementos en estados estándar:

$$
\Delta H^\circ_{\rm r}
=
\sum\nu\,\Delta H^\circ_f(\text{productos})
-
\sum\nu\,\Delta H^\circ_f(\text{reactivos}).
$$

Los coeficientes estequiométricos multiplican cada valor. Para un elemento en su estado estándar, $\Delta H_f^\circ=0$.

## Ejemplo

Para:

$$
\mathrm{CH_4+2O_2\to CO_2+2H_2O(l)},
$$

con $\Delta H_f^\circ$ en kJ/mol: $\mathrm{CH_4}=-74.8$, $\mathrm{CO_2}=-393.5$, $\mathrm{H_2O(l)}=-285.8$:

$$
\Delta H^\circ_{\rm r}
=[-393.5+2(-285.8)]-[-74.8]
=-890.3\ \mathrm{kJ/mol}.
$$

La combustión es exotérmica.

## Energías de enlace

Como romper enlaces requiere energía y formarlos la libera:

$$
\Delta H\approx
\sum E(\text{enlaces rotos})
-
\sum E(\text{enlaces formados}).
$$

Es una estimación porque las energías tabuladas suelen ser valores medios en fase gaseosa.

## Calorimetría

$$
q=mc\Delta T.
$$

Si la disolución gana calor, la reacción lo pierde:

$$
q_{\text{reacción}}=-q_{\text{disolución}}.
$$

Después divide por los moles que reaccionan según la ecuación para expresar kJ/mol.

## Ejemplo de calorimetría con signo

Se mezclan disoluciones cuya masa total es 100 g y la temperatura aumenta $6.5\ ^\circ\mathrm C$. Si se aproxima $c=4.18\ \mathrm{J\,g^{-1}\,K^{-1}}$:

$$
q_{\text{disolución}}=100(4.18)(6.5)=2717\ \mathrm J=2.717\ \mathrm{kJ}.
$$

La disolución ha ganado energía, así que $q_{\text{reacción}}=-2.717$ kJ. Si reaccionaron $0.0500$ mol según la ecuación escrita:

$$
\Delta H=\frac{-2.717}{0.0500}=-54.3\ \mathrm{kJ\,mol^{-1}}.
$$

La referencia “por mol” corresponde al avance de reacción de la ecuación ajustada, no necesariamente a cualquier reactivo tomado por separado.

## Pérdidas de calor y calidad del dato

En un calorímetro escolar, parte del calor se transfiere al recipiente y al entorno. En una reacción exotérmica, la subida de temperatura medida suele ser menor que la ideal, por lo que el módulo calculado de $\Delta H$ queda infravalorado. Aislar el vaso, colocar tapa y registrar la temperatura máxima mediante extrapolación reduce este efecto.

No todas las discrepancias se arreglan diciendo “pérdida de calor”. Una combustión incompleta o la evaporación del combustible cambian la cantidad de reacción; usar capacidades caloríficas medias introduce otra aproximación. Identificar la dirección del error demuestra comprensión experimental.

## Método de resolución

1. Ajusta la reacción.
2. Marca estados físicos.
3. Decide qué datos encajan: formación, combustión, enlaces o calorimetría.
4. Escribe el ciclo o la suma antes de calcular.
5. Comprueba signo, unidad y cantidad de sustancia de referencia.

## Errores frecuentes

- Olvidar coeficientes estequiométricos.
- Cambiar una reacción de sentido sin cambiar $\Delta H$.
- Confundir agua líquida y gaseosa.
- Sumar enlaces formados con signo positivo.
- Dar el calor total cuando piden entalpía molar.

El campus virtual de Método Nebula conecta termoquímica, equilibrio y espontaneidad mediante teoría y problemas PAU. El botón de contacto permite trabajar el razonamiento y no solo la tabla de datos.
