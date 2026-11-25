---
title: "TWR y MWR: cómo calcular rentabilidad ponderada por tiempo y por dinero"
seoTitle: "TWR y MWR: diferencias, cálculo y ejemplo resuelto"
date: "2026-11-25"
updated: "2026-11-25"
description: "TWR y MWR explicados con un ejemplo resuelto: cómo separar el rendimiento de una cartera del efecto de las aportaciones y retiradas de dinero."
tag: "Finanzas"
category: "Economía y ADE"
relatedService: "/clases-particulares/economia-ade/"
relatedPosts: "van-tir-ejercicio-inversion-finanzas-ade,contabilidad-financiera-ade-asientos-libro-diario-balance,microeconomia-i-tipos-problemas-examen"
image: "/favicon.svg"
---

Dos inversores pueden tener la misma cartera y obtener una rentabilidad distinta si aportan o retiran dinero en fechas diferentes. Por eso TWR y MWR no son dos nombres para el mismo porcentaje: responden a preguntas distintas sobre el rendimiento.

> **Respuesta directa.** TWR mide cómo ha rendido la estrategia de inversión aislando los flujos externos. MWR mide la rentabilidad que ha experimentado el inversor, incorporando el importe y el momento de sus aportaciones y retiradas.

## La pregunta determina la medida

Usa TWR, time-weighted return o rentabilidad ponderada por tiempo, cuando quieres evaluar la gestión de una cartera o comparar fondos sin que las decisiones de entrada y salida del cliente distorsionen el resultado.

Usa MWR, money-weighted return o rentabilidad ponderada por dinero, cuando quieres saber qué rendimiento efectivo obtuvo un inversor concreto. Matemáticamente, MWR suele calcularse como la tasa interna de retorno de sus flujos de caja.

No digas que una es «más correcta» que la otra: cada una contesta una pregunta distinta.

## TWR: dividir en subperiodos

Cuando hay un flujo externo, la TWR divide la vida de la cartera en subperiodos. Para cada periodo calcula el rendimiento sin mezclar una aportación o retirada con el rendimiento del mercado:

$$
r_t=\frac{V_t-V_{t-1}-CF_t}{V_{t-1}},
$$

donde $V_t$ es el valor final del subperiodo y $CF_t$ es el flujo externo neto ocurrido al final del periodo, según la convención aplicada.

Después encadena los rendimientos:

$$
TWR=\prod_{t=1}^{n}(1+r_t)-1.
$$

El producto es importante: no sumes porcentajes de periodos consecutivos salvo como una aproximación muy limitada.

## Ejemplo de TWR con una aportación

Una cartera comienza con 10.000 euros y, antes de la aportación, vale 11.000. El inversor añade 5.000 euros. Al final del segundo periodo, la cartera vale 16.800 euros.

El rendimiento del primer periodo es:

$$
r_1=\frac{11\,000}{10\,000}-1=10\%.
$$

Tras aportar, el valor de partida económico para el segundo periodo es 16.000 euros. Por tanto:

$$
r_2=\frac{16\,800}{16\,000}-1=5\%.
$$

La TWR total es:

$$
(1{,}10)(1{,}05)-1=15{,}5\%.
$$

La aportación no se interpreta como beneficio: solo permite separar ambos periodos de mercado.

## MWR: la TIR de los flujos del inversor

Desde el punto de vista del inversor, los flujos del ejemplo son:

| Momento | Flujo |
| --- | ---: |
| Inicio | -10.000 |
| Aportación intermedia | -5.000 |
| Final, valor de la cartera | +16.800 |

La MWR es la tasa $r$ que hace que el valor actual neto sea cero. Si la aportación sucede a mitad de año, una formulación simplificada es:

$$
0=-10\,000-\frac{5\,000}{(1+r)^{0.5}}+\frac{16\,800}{1+r}.
$$

Este cálculo pondera más o menos cada rendimiento según cuánto dinero había invertido en ese momento. Si el inversor aporta justo antes de una mala fase, su MWR puede quedar por debajo de la TWR aunque la gestión de la cartera no haya cambiado.

## Por qué TWR y MWR pueden alejarse mucho

La diferencia es especialmente visible cuando:

- Hay aportaciones o retiradas grandes.
- Los flujos ocurren cerca de periodos de alta volatilidad.
- La cartera tiene poco valor antes de recibir una aportación grande.
- El inversor decide el momento de los flujos.

Si no hay flujos externos, ambas medidas coinciden. Si los hay, no esperes que lo hagan.

## Errores frecuentes

- Tratar una aportación como si fuera rentabilidad.
- Calcular MWR con valores de cartera pero sin incluir todos los flujos.
- Sumar rendimientos de subperiodos en lugar de capitalizarlos.
- Comparar la MWR de un cliente con la TWR de un fondo sin explicar que miden cosas diferentes.
- Mezclar el signo de los flujos: para el inversor, una aportación es salida de dinero y el valor final es entrada.

En Finanzas, la interpretación vale tanto como el cálculo. Si preparas evaluación de carteras, inversiones o cálculo financiero, puedes practicar ejercicios de flujos y tasas con [clases particulares de Economía y ADE](/clases-particulares/economia-ade/).
