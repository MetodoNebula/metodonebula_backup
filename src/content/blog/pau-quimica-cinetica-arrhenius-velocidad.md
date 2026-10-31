---
title: "Cinética química PAU: cómo interpretar órdenes, Arrhenius y mecanismos de reacción"
seoTitle: "Cinética química PAU: órdenes y Arrhenius"
date: "2026-07-18"
updated: "2026-07-18"
description: "Domina cinética química PAU: ley de velocidad, órdenes, constante cinética, Arrhenius, energía de activación, mecanismos y catalizadores."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-quimica-equilibrio-quimico-estudiar,pau-quimica-termoquimica-hess-entalpia,gcse-chemistry-rates-collision-theory"
image: "/assets/latex/arrhenius-energy.svg"
---

La cinética pregunta cuánto tarda una reacción y de qué depende su velocidad; la termodinámica pregunta si el cambio es favorable. Una reacción muy favorable puede ser lenta si pocas partículas superan la energía de activación.

> **Respuesta directa.** Obtén los órdenes comparando experimentos donde sólo cambie una concentración. La ley $v=k[A]^m[B]^n$ se determina experimentalmente. La temperatura modifica $k$ según Arrhenius y un catalizador reduce $E_a$ sin cambiar $\Delta H$ ni el equilibrio.

![Distribuciones de energía a dos temperaturas y umbral de activación](/assets/latex/arrhenius-energy.svg)

## Velocidad de reacción

Para una reacción:

$$
aA+bB\longrightarrow cC,
$$

la velocidad se define respetando coeficientes:

$$
v=-\frac1a\frac{d[A]}{dt}
=-\frac1b\frac{d[B]}{dt}
=\frac1c\frac{d[C]}{dt}.
$$

Los signos negativos indican consumo de reactivos. Dividir por los coeficientes produce una única velocidad de reacción.

## Ley de velocidad y órdenes

Una ley experimental típica es:

$$
v=k[A]^m[B]^n.
$$

$m$ y $n$ no se deducen de la ecuación global salvo en una etapa elemental. El orden total es $m+n$.

Si al duplicar $[A]$ la velocidad se duplica, el orden en $A$ es uno. Si se cuadruplica, es dos. Si no cambia, es cero.

## Método de velocidades iniciales

Compara dos ensayos donde sólo cambie $[A]$:

$$
\frac{v_2}{v_1}
=\left(\frac{[A]_2}{[A]_1}\right)^m.
$$

Después repite con $B$ y sustituye cualquier ensayo para hallar $k$. Las unidades de $k$ dependen del orden total. Para orden dos:

$$
[k]=\mathrm{L\,mol^{-1}\,s^{-1}}.
$$

## Arrhenius y temperatura

La constante cinética sigue:

$$
k=Ae^{-E_a/(RT)}.
$$

Al aumentar $T$, crece de manera importante la fracción de partículas con $E\ge E_a$. La forma lineal es:

$$
\ln k=\ln A-\frac{E_a}{R}\frac1T.
$$

Una gráfica de $\ln k$ frente a $1/T$ tiene pendiente $-E_a/R$.

## Cálculo entre dos temperaturas

Sin conocer $A$ puede usarse:

$$
\ln\frac{k_2}{k_1}
=-\frac{E_a}{R}
\left(\frac1{T_2}-\frac1{T_1}\right).
$$

Las temperaturas deben estar en kelvin y $E_a$ en julios por mol si se usa $R=8.314\ \mathrm{J\,mol^{-1}\,K^{-1}}$. Mezclar kJ y J introduce un factor mil.

## Mecanismos de reacción

Un mecanismo propone etapas elementales cuya suma reproduce la ecuación global. La etapa lenta puede controlar la velocidad, pero la ley resultante debe ser compatible con los datos.

Los intermedios se forman en una etapa y se consumen en otra; no aparecen en la ecuación global. Un catalizador participa y se regenera, por lo que tampoco aparece en el balance final.

## Catalizadores y perfil energético

El catalizador proporciona otro mecanismo con menor energía de activación. Acelera las reacciones directa e inversa y permite alcanzar antes el equilibrio, pero no cambia su constante ni su composición final a una temperatura dada.

En un perfil energético, cambia la altura de la barrera, no la diferencia entre reactivos y productos.

## Errores frecuentes

- Deducir órdenes de los coeficientes globales.
- Comparar ensayos donde cambian dos concentraciones a la vez.
- Dar $k$ sin unidades.
- Usar grados Celsius en Arrhenius.
- Confundir mayor número de colisiones con mayor fracción eficaz.
- Afirmar que el catalizador desplaza el equilibrio.

## Convertir datos cinéticos en razonamiento

El campus virtual de Método Nebula enlaza cinética, termoquímica y equilibrio mediante tablas experimentales, gráficos y problemas PAU resueltos. El botón de contacto permite acceder a una ruta con ejercicios por niveles para aprender a extraer la ley antes de introducir números.
