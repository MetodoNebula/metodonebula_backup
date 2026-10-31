---
title: "Equilibrios de solubilidad PAU: cómo usar Kps, predecir precipitados y resolver el ion común"
seoTitle: "Solubilidad y Kps PAU: precipitación e ion común"
date: "2026-07-20"
updated: "2026-07-20"
description: "Resuelve equilibrios de solubilidad PAU: Kps, solubilidad molar, cociente de reacción, precipitación, ion común y efecto del pH."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-quimica-equilibrio-quimico-estudiar,pau-quimica-acido-base-ph-calculos,pau-quimica-estequiometria-gases-disoluciones"
image: "/assets/latex/solubility-kps.svg"
---

En solubilidad, el error más común es igualar directamente $K_{ps}$ con la solubilidad. Sólo ocurre en sales con estequiometría muy concreta. La ecuación de disociación decide qué concentraciones aparecen y con qué potencias.

> **Respuesta directa.** Escribe primero el equilibrio, expresa cada concentración en función de la solubilidad molar $s$ y sustituye en $K_{ps}$. Para una mezcla real calcula el cociente iónico $Q$: precipita si $Q>K_{ps}$, está justo saturada si son iguales y no precipita si $Q<K_{ps}$.

![Equilibrio de disolución y criterio de precipitación mediante Q y Kps](/assets/latex/solubility-kps.svg)

## Construir la expresión correcta

Para:

$$
AB_2(s)\rightleftharpoons A^{2+}(aq)+2B^-(aq),
$$

el sólido no aparece en la constante:

$$
K_{ps}=[A^{2+}][B^-]^2.
$$

Si la solubilidad molar es $s$:

$$
[A^{2+}]=s,
\qquad
[B^-]=2s.
$$

Por tanto:

$$
K_{ps}=s(2s)^2=4s^3.
$$

## De Kps a solubilidad

Si $K_{ps}=3.2\times10^{-11}$ para una sal $AB_2$:

$$
s=\sqrt[3]{\frac{K_{ps}}4}
=2.0\times10^{-4}\ \mathrm{mol/L}.
$$

Para convertir a gramos por litro se multiplica por la masa molar. Conviene mantener más cifras durante el cálculo y redondear al final.

## Predecir precipitación

Tras mezclar disoluciones, primero se calculan las concentraciones diluidas en el volumen total. Después:

$$
Q=[A^{2+}]_{mezcla}[B^-]_{mezcla}^2.
$$

- Si $Q<K_{ps}$, la disolución es insaturada.
- Si $Q=K_{ps}$, está en equilibrio con el sólido.
- Si $Q>K_{ps}$, aparece precipitado hasta recuperar el equilibrio.

Comparar concentraciones aisladas con $K_{ps}$ no tiene sentido dimensional ni químico.

## Ejemplo de mezcla

Se mezclan $50\ \mathrm{mL}$ de $0.010\ \mathrm M$ en $A^{2+}$ con $50\ \mathrm{mL}$ de $0.020\ \mathrm M$ en $B^-$. El volumen final es $0.100\ \mathrm L$:

$$
[A^{2+}]=0.0050\ \mathrm M,
\qquad
[B^-]=0.010\ \mathrm M.
$$

Entonces:

$$
Q=(0.0050)(0.010)^2=5.0\times10^{-7}.
$$

Si $K_{ps}=2.0\times10^{-8}$, como $Q>K_{ps}$, precipita.

## Efecto del ion común

Añadir un ion que ya participa en el equilibrio desplaza la disolución hacia el sólido y reduce la solubilidad. Si inicialmente hay concentración $c$ de $B^-$:

$$
K_{ps}=s(c+2s)^2.
$$

Sólo puede aproximarse $c+2s\approx c$ si después se verifica que $2s$ es despreciable frente a $c$.

## Influencia del pH

Las sales con aniones básicos, como hidróxidos o carbonatos, pueden aumentar su solubilidad en medio ácido porque el anión se protona y sale del equilibrio. Para un hidróxido metálico, elevar el pH aumenta $[OH^-]$ y suele favorecer la precipitación.

Los problemas de precipitación selectiva comparan el pH o la concentración de reactivo necesarios para que cada sólido empiece a formarse.

## Errores frecuentes

- Incluir el sólido en la expresión de $K_{ps}$.
- Olvidar coeficientes estequiométricos y exponentes.
- Usar concentraciones anteriores a la mezcla.
- Comparar $Q$ y $K_{ps}$ con expresiones distintas.
- Aplicar una aproximación sin comprobarla.
- Dar solubilidad en mol/L cuando piden g/L.

## Integrar solubilidad con equilibrio y ácido-base

El campus virtual de Método Nebula conecta $K_{ps}$ con equilibrio, pH, estequiometría y análisis químico mediante teoría, ejercicios graduados y modelos PAU resueltos. El botón de contacto permite acceder a una ruta que entrena tanto la tabla de equilibrio como la decisión química final.
