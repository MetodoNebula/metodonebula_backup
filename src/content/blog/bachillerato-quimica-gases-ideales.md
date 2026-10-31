---
title: "Gases ideales en Bachillerato: presión, volumen y temperatura con unidades que no sabotean el resultado"
seoTitle: "Gases ideales en Bachillerato: leyes y ejercicios"
date: "2026-08-20"
updated: "2026-08-20"
description: "Resuelve gases ideales en Bachillerato: Boyle, Charles, Gay-Lussac, ecuación pV=nRT, mezclas, densidad y unidades."
tag: "Química Bachillerato"
category: "Física y Química"
relatedService: "/clases-particulares/quimica/"
relatedPosts: "bachillerato-fisica-quimica-mol-estequiometria,pau-quimica-estequiometria-gases-disoluciones,bachillerato-quimica-reactivo-limitante-rendimiento-pureza"
image: "/assets/latex/gas-laws-pv.svg"
---

Los problemas de gases suelen fallar por una unidad incompatible o por usar grados Celsius dentro de una proporción. La física es sencilla si se distingue qué variables permanecen constantes y se trabaja siempre con temperatura absoluta.

> **Respuesta directa.** Para una cantidad fija de gas ideal, $pV/T$ permanece constante. En cualquier estado, $pV=nRT$. Usa kelvin, elige una constante $R$ compatible con presión y volumen, y no supongas condiciones normales si no se indican.

![Isotermas en un diagrama presión-volumen y ecuación de gas ideal](/assets/latex/gas-laws-pv.svg)

## El modelo cinético

Un gas ideal se modela con partículas de volumen despreciable, movimiento aleatorio y choques elásticos, sin fuerzas intermoleculares salvo durante los choques. La presión surge de impactos contra las paredes.

La temperatura absoluta se relaciona con energía cinética media. Por eso debe usarse:

$$
T(\mathrm K)=T(^\circ\mathrm C)+273.15.
$$

Duplicar de 20 °C a 40 °C no duplica la temperatura absoluta.

## Leyes particulares

Con $n$ y $T$ constantes, Boyle:

$$
p_1V_1=p_2V_2.
$$

Con $n$ y $p$ constantes, Charles:

$$
\frac{V_1}{T_1}=\frac{V_2}{T_2}.
$$

Con $n$ y $V$ constantes:

$$
\frac{p_1}{T_1}=\frac{p_2}{T_2}.
$$

Estas relaciones no son fórmulas independientes: proceden de $pV=nRT$ al mantener variables constantes.

## Elegir la constante de los gases

Dos opciones habituales:

$$
R=8.314\ \mathrm{J\,mol^{-1}\,K^{-1}}
$$

con $p$ en pascales y $V$ en $\mathrm{m^3}$, o:

$$
R=0.08314\ \mathrm{L\,bar\,mol^{-1}\,K^{-1}}.
$$

No se mezclan litros con pascales sin conversión. La unidad de $R$ dice exactamente qué conjunto utilizar.

## Ejemplo resuelto

Calcula el volumen de 0.250 mol a 300 K y 1.20 bar:

$$
V=\frac{nRT}{p}
=\frac{0.250(0.08314)(300)}{1.20}
=5.20\ \mathrm L.
$$

El orden de magnitud es razonable: un cuarto de mol cerca de ambiente ocupa varios litros.

## Densidad molar

Como $n=m/M$:

$$
pV=\frac mMRT.
$$

Con $\rho=m/V$:

$$
\rho=\frac{pM}{RT}.
$$

A igual presión y temperatura, un gas de mayor masa molar tiene mayor densidad. Esta expresión también permite estimar masa molar a partir de densidad experimental.

## Mezclas y presiones parciales

La ley de Dalton establece:

$$
p_{\rm total}=\sum_i p_i.
$$

Para gases ideales:

$$
p_i=x_i p_{\rm total},
$$

donde $x_i=n_i/n_{\rm total}$. Todos ocupan el mismo volumen de la mezcla y están a la misma temperatura.

Si un gas se recoge sobre agua, la presión total incluye vapor de agua:

$$
p_{\rm gas}=p_{\rm total}-p_{\rm vapor}.
$$

## Cuándo deja de ser ideal

El modelo falla más a presión alta y temperatura baja: el volumen molecular y las atracciones dejan de ser despreciables. A baja presión y alta temperatura, muchos gases reales se aproximan bien.

## Errores frecuentes

- Introducir Celsius en $pV=nRT$.
- Usar volumen molar sin condiciones especificadas.
- Mezclar L con $R=8.314$ y Pa.
- Olvidar vapor de agua en una recogida húmeda.
- Afirmar que una isoterma $p$–$V$ es una recta.

## Integrar gases con el resto de química

El campus virtual de Método Nebula conecta gases, moles, estequiometría, disoluciones y termoquímica con teoría y ejercicios graduados. El botón de contacto permite acceder a una ruta donde unidades, modelo y reacción se trabajan juntos mediante problemas de Bachillerato y PAU resueltos.
