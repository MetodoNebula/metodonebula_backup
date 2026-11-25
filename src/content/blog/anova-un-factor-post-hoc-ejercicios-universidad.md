---
title: "ANOVA de un factor y pruebas post hoc: ejercicios resueltos para universidad"
seoTitle: "ANOVA de un factor y post hoc: ejercicios e interpretación"
date: "2026-11-25"
updated: "2026-11-25"
description: "Aprende a interpretar un ANOVA de un factor, comprobar supuestos y elegir pruebas post hoc con un ejemplo paso a paso de nivel universitario."
tag: "Inferencia estadística"
category: "Estadística"
relatedService: "/clases-particulares/estadistica-universidad/"
relatedPosts: "regresion-lineal-anova-cuando-utilizar-interpretar-resultados,t-student-psicologia-ejercicios-resueltos,que-prueba-estadistica-utilizar-guia-test-correcto"
image: "/favicon.svg"
---

Un ANOVA de un factor responde a una pregunta concreta: ¿hay evidencia de que las medias de tres o más grupos no sean todas iguales? No indica por sí solo qué grupos difieren ni sustituye la interpretación del tamaño del efecto.

> **Respuesta directa.** Si el ANOVA es significativo, rechazas que todas las medias poblacionales sean iguales. Después necesitas comparaciones post hoc para localizar las diferencias, con un método que controle el error de realizar varias pruebas.

## Cuándo usar un ANOVA de un factor

Úsalo cuando tienes:

- Una variable respuesta cuantitativa.
- Un factor categórico con tres o más grupos independientes.
- Una pregunta de comparación de medias.

Por ejemplo, comparar la nota media obtenida con tres métodos de estudio. Las hipótesis son:

$$
H_0:\mu_1=\mu_2=\mu_3,
$$

frente a la alternativa de que al menos una media es distinta.

## Qué compara el estadístico F

ANOVA descompone la variabilidad total en variabilidad entre grupos y dentro de los grupos:

$$
F=\frac{MS_{\text{entre}}}{MS_{\text{dentro}}}.
$$

Si los grupos tienen medias muy separadas respecto a la dispersión interna, $F$ será grande. No interpretes el valor de $F$ aislado: acompáñalo de grados de libertad, p-valor y tamaño del efecto.

## Ejemplo de lectura de resultados

Supón tres métodos A, B y C, con una salida:

| Fuente | gl | F | p |
| --- | ---: | ---: | ---: |
| Método | 2 | 5,84 | 0,006 |
| Error | 57 |  |  |

Como $p<0{,}05$, hay evidencia de diferencias entre las medias. La frase correcta no es «los tres métodos son diferentes»: podría ocurrir que solo B difiera de A y C.

## Pruebas post hoc: la pregunta que sigue

Si las varianzas son similares y los tamaños de grupo no son muy desiguales, Tukey HSD es una opción habitual para comparaciones por pares. Un resultado podría ser:

| Comparación | Diferencia estimada | p ajustado |
| --- | ---: | ---: |
| A – B | -1,1 | 0,004 |
| A – C | -0,2 | 0,74 |
| B – C | 0,9 | 0,011 |

Aquí B se diferencia de A y C, mientras que A y C no muestran una diferencia detectable. Los p-valores ya están ajustados: no debes volver a tratarlos como si fueran tres t de Student independientes.

## Supuestos que conviene comprobar

El ANOVA clásico trabaja mejor con independencia de observaciones, residuos aproximadamente normales y varianzas homogéneas. En ejercicios, explica qué revisas:

1. La independencia depende sobre todo del diseño y de cómo se recogieron los datos.
2. Los gráficos de residuos ayudan a valorar normalidad y valores atípicos.
3. Levene o Brown–Forsythe permiten estudiar homogeneidad de varianzas.

Una desviación pequeña de normalidad no invalida automáticamente el análisis. Si hay varianzas muy distintas, considera ANOVA de Welch. Si el diseño usa las mismas personas en varias condiciones, no es un ANOVA independiente: puede requerir medidas repetidas.

## Tamaño del efecto

La significación no dice cuánto importa una diferencia. Una medida frecuente es eta cuadrado:

$$
\eta^2=\frac{SS_{\text{entre}}}{SS_{\text{total}}}.
$$

Informa qué proporción de variabilidad de la respuesta se asocia al factor dentro de la muestra. Completa siempre la interpretación con las medias, sus intervalos y el contexto académico o profesional.

## Errores habituales

- Hacer tres t de Student sin ajuste antes de plantear ANOVA.
- Decir que todos los grupos son distintos porque el ANOVA es significativo.
- Aplicar post hoc sin comprobar si las muestras son independientes.
- Ignorar tamaño del efecto y medias descriptivas.
- Usar ANOVA de un factor cuando hay dos factores o medidas repetidas.

Para elegir la técnica desde el tipo de variable, revisa [regresión lineal y ANOVA](/blog/regresion-lineal-anova-cuando-utilizar-interpretar-resultados/). Si necesitas practicar salidas de SPSS, Jamovi, R o ejercicios de tu grado, puedes trabajar con [clases particulares de Estadística](/clases-particulares/estadistica-universidad/).
