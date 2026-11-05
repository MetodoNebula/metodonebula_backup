---
title: "t de Student en Psicología: ejercicios resueltos e interpretación"
seoTitle: "t de Student en Psicología: ejercicios resueltos"
date: 2026-11-05
updated: 2026-11-05
description: "Aprende cuándo usar la t de Student en Psicología, cómo interpretar t, p e intervalos de confianza, con ejercicios resueltos paso a paso."
tag: "Estadística"
category: "Estadística"
relatedService: "/campus/"
relatedPosts: "estadistica-desde-cero-para-elegir-contrastes,como-aprobar-estadistica-psicologia-sin-base-matematica,p-valor-intervalo-confianza-tamano-efecto-ejemplo"
image: "/favicon.svg"
---

La t de Student sirve para comparar medias, pero la pregunta importante no es «¿qué fórmula aplico?». Es decidir qué medias se comparan, si las observaciones están relacionadas y qué significa el resultado en el contexto de Psicología.

> **Respuesta directa.** Usa una t de Student cuando la variable resultado es cuantitativa y quieres contrastar una media con un valor, comparar dos grupos independientes o comparar dos medidas de las mismas personas. Informa siempre de la diferencia, el estadístico \(t\), los grados de libertad, el valor \(p\) y, cuando sea posible, un intervalo de confianza.

## Los tres casos más habituales

| Situación | Prueba | Ejemplo |
| --- | --- | --- |
| Una muestra frente a un valor | t de una muestra | ¿La media de ansiedad difiere de 50? |
| Dos grupos distintos | t independiente | ¿Difieren terapia A y terapia B? |
| Las mismas personas dos veces | t pareada | ¿Cambia el estrés antes y después de una intervención? |

La diferencia entre independiente y pareada no es un detalle técnico. Si cada medida «después» pertenece a la misma persona que una medida «antes», los datos están emparejados y deben analizarse como tales.

## Qué contrasta una t

En una t de una muestra, la hipótesis nula afirma que la media poblacional coincide con un valor de referencia:

$$
H_0:\mu=\mu_0.
$$

El estadístico compara la distancia observada con la variabilidad esperable:

$$
t=\frac{\bar{x}-\mu_0}{s/\sqrt{n}}.
$$

Un valor de \(t\) grande en valor absoluto indica que la diferencia observada es grande respecto a su incertidumbre. No basta por sí solo para concluir: se interpreta junto a los grados de libertad y el valor \(p\).

## Ejemplo 1 — t de una muestra

En una escala con media normativa \(50\), una muestra de \(25\) estudiantes obtiene \(\bar{x}=54\) y \(s=10\). Queremos comprobar si difiere de la norma.

$$
t=\frac{54-50}{10/\sqrt{25}}=\frac{4}{2}=2.
$$

Los grados de libertad son \(gl=n-1=24\). El signo positivo indica que la muestra está por encima del valor de referencia. La conclusión estadística depende del \(p\) asociado y del nivel de significación acordado; la conclusión sustantiva requiere además valorar si una diferencia de cuatro puntos es relevante.

## Ejemplo 2 — grupos independientes

Se comparan las puntuaciones de ansiedad de un grupo con terapia A y otro con terapia B. Las personas de A no son las mismas que las de B: corresponde una t independiente.

Antes de interpretar:

1. Comprueba que cada persona pertenece a un solo grupo.
2. Examina valores atípicos y la forma de cada distribución.
3. Revisa la homogeneidad de varianzas; si no se sostiene, usa la versión de Welch.
4. Informa de las medias y desviaciones típicas de ambos grupos, no solo de \(p\).

Una redacción útil sería: «El grupo A obtuvo una media de \(18{,}2\) y el grupo B de \(22{,}7\); la diferencia estimada fue de \(-4{,}5\) puntos». Después se añade el resultado del contraste y su incertidumbre.

## Ejemplo 3 — medidas antes y después

Doce participantes completan una escala de estrés antes y después de ocho semanas. La pregunta no es si las dos columnas tienen medias distintas de forma aislada: es si **el cambio de cada persona** difiere de cero.

Definimos una diferencia para cada participante:

$$
d_i=\text{después}_i-\text{antes}_i.
$$

La t pareada es una t de una muestra aplicada a la lista de diferencias. Si la media de las diferencias es negativa, el estrés ha disminuido con ese orden de resta.

## Cómo interpretar el valor p sin exagerar

Un valor \(p\) pequeño no mide el tamaño ni la importancia práctica del efecto. Indica cuán compatibles serían los datos con el modelo nulo y sus supuestos. Por eso acompaña el contraste con:

- la diferencia de medias;
- un intervalo de confianza;
- un tamaño del efecto, por ejemplo \(d\) de Cohen;
- una interpretación ligada a la escala usada.

No escribas «se acepta la hipótesis nula» solo porque \(p\) sea mayor que \(0{,}05\). Lo correcto es indicar que los datos no aportan evidencia suficiente contra la hipótesis nula con ese análisis.

## Supuestos y alternativas

La t es razonablemente robusta con tamaños de muestra moderados, pero conviene revisar:

- observaciones independientes en los diseños independientes;
- variable cuantitativa y medición coherente;
- ausencia de atípicos extremos;
- distribución aproximadamente simétrica, sobre todo con muestras pequeñas.

Si los supuestos son débiles, no saltes directamente a una conclusión. Considera una transformación, un método robusto, un contraste no paramétrico o una recogida de datos mejor diseñada, según la pregunta.

## Ejercicios propuestos

1. ¿Qué t usarías para comparar el sueño de las mismas 30 personas antes y después de una pauta?
2. Una clase se compara con una media poblacional conocida. ¿Qué tipo de t corresponde?
3. Dos grupos de estudiantes distintos reciben dos métodos de estudio. ¿Qué diseño es?
4. Un análisis produce \(p=0{,}18\). ¿Se puede afirmar que los grupos son iguales?

## Soluciones

1. t pareada, porque cada persona aporta dos medidas relacionadas.
2. t de una muestra.
3. t de grupos independientes; si las varianzas son desiguales, considera Welch.
4. No. Solo indica que el análisis no encontró evidencia suficiente de diferencia con esos datos y supuestos.

En el [Campus de Método Nebula](/campus/) este tema se conecta con elección de contrastes, p-valor, intervalos de confianza y ejercicios graduados, para practicar la decisión antes de memorizar el nombre de una prueba.
