---
title: "Ley de Ohm en 4º ESO: circuitos y ejercicios resueltos"
seoTitle: "Ley de Ohm 4º ESO: ejercicios resueltos"
date: 2026-11-02
updated: 2026-11-05
description: "Aprende la ley de Ohm en 4º ESO con circuitos, unidades, conversiones y ejercicios resueltos de tensión, intensidad y resistencia."
tag: "ESO"
category: "Física y Química"
relatedService: "/campus/"
relatedPosts: "eso-fisica-quimica-electricidad-circuitos,factores-conversion-3-eso-ejercicios-resueltos,circuitos-corriente-continua-problemas-resueltos-universidad"
image: "/assets/latex/circuits-series-parallel.svg"
---

La ley de Ohm conecta tres magnitudes, pero antes de sustituir números hay que decidir qué representa cada una y comprobar las unidades. Una intensidad en miliamperios no puede entrar sin convertir en una fórmula cuyos resultados esperas en amperios.

> **Respuesta directa.** La ley de Ohm es \(V=IR\): tensión en voltios, intensidad en amperios y resistencia en ohmios. Despeja la incógnita, convierte unidades y revisa si el resultado tiene sentido físico.

## Las tres magnitudes

| Magnitud | Símbolo | Unidad | Idea útil |
| --- | --- | --- | --- |
| Tensión | \(V\) | voltio (V) | Energía que impulsa las cargas |
| Intensidad | \(I\) | amperio (A) | Carga que circula por segundo |
| Resistencia | \(R\) | ohmio (\(\Omega\)) | Oposición al paso de corriente |

Las formas equivalentes son:

$$
V=IR,\qquad I=\frac{V}{R},\qquad R=\frac{V}{I}.
$$

No son tres fórmulas distintas: son la misma relación despejada para una incógnita distinta.

## Ejemplo 1 — calcular intensidad

Una resistencia de \(6\,\Omega\) se conecta a \(12\text{ V}\):

$$
I=\frac{12}{6}=2\text{ A}.
$$

La intensidad aumenta si la tensión aumenta, pero disminuye si la resistencia aumenta.

## Ejemplo 2 — convertir unidades antes de calcular

Un circuito tiene \(R=2{,}0\text{ k}\Omega\) y \(I=3{,}0\text{ mA}\). Calcula la tensión.

Convertimos: \(2{,}0\text{ k}\Omega=2000\,\Omega\) y \(3{,}0\text{ mA}=0{,}003\text{ A}\). Entonces:

$$
V=0{,}003\cdot2000=6\text{ V}.
$$

También se puede usar kiloohmios y miliamperios a la vez, porque \(1\text{ k}\Omega\cdot1\text{ mA}=1\text{ V}\), pero solo si sabes por qué se compensan los prefijos.

## Serie y paralelo: qué permanece igual

En una conexión **en serie**, la intensidad es la misma en todos los componentes. La tensión total se reparte:

$$
V_{\text{total}}=V_1+V_2+\cdots
$$

En una conexión **en paralelo**, la tensión es la misma en cada rama. La intensidad total es la suma de las intensidades de rama:

$$
I_{\text{total}}=I_1+I_2+\cdots
$$

No memorices ambas frases sin dibujo: marca primero los dos nodos de cada componente. Si comparten los mismos dos nodos, están en paralelo.

## Ejemplo 3 — dos resistencias en serie

Dos resistencias de \(2\,\Omega\) y \(4\,\Omega\) están en serie con una pila de \(12\text{ V}\). La resistencia equivalente es:

$$
R_{\text{eq}}=2+4=6\,\Omega.
$$

La intensidad del circuito es \(I=12/6=2\text{ A}\). Por tanto, las caídas de tensión son \(V_1=2\cdot2=4\text{ V}\) y \(V_2=2\cdot4=8\text{ V}\). Suman \(12\text{ V}\), que es la comprobación esencial.

## Errores frecuentes

- Confundir voltaje con intensidad.
- Olvidar pasar mA a A o k\(\Omega\) a \(\Omega\).
- Sumar resistencias en paralelo como si estuvieran en serie.
- Aplicar \(V=IR\) a un componente usando la intensidad de otra rama.
- No comprobar que tensiones o intensidades se conservan según el tipo de conexión.

## Ejercicios propuestos

1. Calcula \(I\) para \(V=9\text{ V}\) y \(R=3\,\Omega\).
2. Calcula \(R\) si \(V=24\text{ V}\) e \(I=0{,}50\text{ A}\).
3. Dos resistencias de \(5\,\Omega\) y \(7\,\Omega\) están en serie con \(24\text{ V}\). Calcula la intensidad.
4. ¿Qué magnitud permanece igual en todas las ramas de un paralelo?

## Soluciones

1. \(I=3\text{ A}\).
2. \(R=48\,\Omega\).
3. \(R_{\text{eq}}=12\,\Omega\), luego \(I=2\text{ A}\).
4. La tensión.

En el [Campus de Método Nebula](/campus/) la electricidad se trabaja desde las magnitudes y los dibujos de circuito hasta problemas de serie, paralelo y potencia, con ejercicios graduados para que cada fórmula tenga un significado físico.
