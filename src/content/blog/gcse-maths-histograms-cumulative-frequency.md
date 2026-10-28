---
title: "GCSE Maths: histograms y cumulative frequency sin confundir altura, área y frecuencia"
date: "2026-11-22"
updated: "2026-11-22"
description: "Aprende histogramas, frequency density y cumulative frequency en GCSE Maths con cálculo, interpretación y errores frecuentes."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-maths-revision-plan-foundation-higher,estadistica-descriptiva-eso-cuartiles-rango-diagrama-caja"
image: "/assets/latex/histogram-density.svg"
---

En un bar chart la altura puede representar frecuencia. En un histogram con intervalos de distinta anchura, esa idea deja de funcionar: **la frecuencia está representada por el área de cada barra**. La altura es frequency density.

![Histograma con clases de distinta anchura y relación entre área, densidad y frecuencia](/assets/latex/histogram-density.svg)

## La fórmula esencial

$$
\text{frequency density}=\frac{\text{frequency}}{\text{class width}}.
$$

De forma equivalente:

$$
\text{frequency}=\text{density}\times\text{class width}.
$$

Geométricamente, el segundo producto es base por altura: el área de la barra.

## Ejemplo de tabla

| Tiempo (min) | Frecuencia | Anchura | Densidad |
|---|---:|---:|---:|
| $0<t\le10$ | 8 | 10 | 0,8 |
| $10<t\le20$ | 18 | 10 | 1,8 |
| $20<t\le40$ | 24 | 20 | 1,2 |
| $40<t\le50$ | 5 | 10 | 0,5 |

La tercera clase tiene mayor frecuencia que la segunda, pero su barra es más baja porque ocupa el doble de anchura. El área, no la altura aislada, conserva los 24 datos.

## Recuperar una frecuencia desde el gráfico

Si una barra abarca de 30 a 50 y tiene densidad 1,6:

$$
f=(50-30)\cdot1,6=32.
$$

Hay 32 observaciones en ese intervalo. Escribe la anchura explícitamente para evitar tomar 50 como base.

## Cumulative frequency

La frecuencia acumulada suma todas las observaciones hasta cada límite superior. Si las frecuencias son $8,18,24,5$, las acumuladas son:

$$
8,\ 26,\ 50,\ 55.
$$

En el gráfico se representan los límites superiores frente a estas sumas y se unen con una curva creciente. Nunca debe descender: añadir una clase no puede reducir el total acumulado.

## Mediana y cuartiles desde la curva

Para $N$ datos se localizan aproximadamente:

$$
Q_1:\frac N4,\qquad \text{mediana}:\frac N2,\qquad Q_3:\frac{3N}{4}.
$$

Se entra horizontalmente desde esas frecuencias acumuladas hasta la curva y después se baja al eje de valores. Al trabajar con datos agrupados, el resultado es una estimación.

El rango intercuartílico es:

$$
IQR=Q_3-Q_1.
$$

Sirve para comparar dispersión central y es menos sensible a valores extremos que el rango total.

## Estimar dentro de una clase

Cuando se pregunta cuántos datos están por debajo de un valor interior de una clase, la curva acumulada permite leer una estimación. Si se calcula desde una tabla, normalmente se supone distribución uniforme dentro del intervalo. Esa suposición debe reconocerse: los datos originales no están disponibles individualmente.

## Histograma frente a bar chart

| Histograma | Bar chart |
|---|---|
| Variable continua agrupada | Categorías o valores discretos |
| Barras contiguas | Puede haber separación |
| Área representa frecuencia | Altura suele representar frecuencia |
| Eje horizontal numérico continuo | Eje horizontal categórico posible |

## Errores frecuentes

- Dibujar altura igual a frecuencia con clases desiguales.
- Calcular anchura como límite superior en vez de diferencia.
- Dejar huecos entre intervalos continuos.
- Usar puntos medios en una cumulative frequency graph; se usan límites superiores.
- Leer cuartiles en $N/3$ y $2N/3$.
- Presentar una estimación como valor exacto.

## Comprobaciones rápidas

Suma las áreas de las barras: debe representar el total. Comprueba que la acumulada final sea $N$. Verifica que $Q_1<\text{mediana}<Q_3$ y que el IQR sea positivo.

El campus virtual de Método Nebula desarrolla Statistics con tablas, histogramas, cumulative frequency, box plots y comparación de distribuciones mediante ejercicios y preguntas de examen. Si quieres dominar tanto el cálculo como la interpretación escrita, utiliza el botón de contacto.
