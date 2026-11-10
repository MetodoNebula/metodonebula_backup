---
title: "Regresión múltiple: R² ajustado, multicolinealidad y diagnóstico del modelo"
seoTitle: "Regresión múltiple: R² ajustado, VIF y multicolinealidad"
date: "2026-11-10"
updated: "2026-11-10"
description: "Interpreta regresión múltiple con coeficientes, R² ajustado, residuos, VIF, multicolinealidad e intervalos de confianza."
tag: "Estadística"
category: "Estadística"
relatedService: "/clases-particulares/estadistica-universidad/"
relatedPosts: "regresion-logistica-odds-ratio-interpretacion,regresion-lineal-anova-cuando-utilizar-interpretar-resultados,econometria-desde-cero-interpretar-regresion"
image: "/favicon.svg"
---

La regresión múltiple estudia la relación entre una respuesta cuantitativa y varios predictores. Añadir variables no garantiza un modelo mejor: hay que interpretar cada coeficiente condicionando por las demás variables y revisar si el modelo resulta estable.

> **Respuesta directa.** En $Y=\beta_0+\beta_1X_1+\beta_2X_2+\varepsilon$, $\beta_1$ representa el cambio medio esperado en $Y$ por una unidad de $X_1$, manteniendo $X_2$ constante. R² ajustado penaliza variables que no mejoran suficientemente el ajuste; el VIF ayuda a detectar colinealidad.

## Coeficientes condicionados

Supón que un modelo estima la nota a partir de horas de práctica y asistencia. El coeficiente de horas no compara libremente a dos alumnos cualesquiera: compara casos con el mismo nivel de asistencia dentro del modelo. Esa condición debe aparecer en la interpretación.

No conviertas una asociación en causalidad sin diseño que la sostenga. Un coeficiente puede reflejar variables omitidas, selección de la muestra o una relación que cambia según otro factor.

## R² y R² ajustado

R² resume la proporción de variabilidad de $Y$ que el modelo explica en esa muestra. Al añadir predictores, R² nunca baja, aunque la variable nueva sea poco útil. Por eso el R² ajustado incorpora una penalización por complejidad.

Un R² alto no prueba que las predicciones sean precisas fuera de la muestra ni que los coeficientes tengan interpretación causal. Revisa también el contexto, los residuos y la validación disponible.

## Multicolinealidad y VIF

Hay multicolinealidad cuando varios predictores contienen información muy parecida. El modelo puede conservar buen ajuste global y, aun así, producir coeficientes inestables con intervalos amplios.

El factor de inflación de la varianza se expresa como

$$
\operatorname{VIF}_j=\frac{1}{1-R_j^2},
$$

donde $R_j^2$ procede de predecir $X_j$ con los demás predictores. No hay un umbral universal que sustituya al juicio del contexto; usa VIF junto con correlaciones, tamaño muestral y sentido de las variables.

## Diagnóstico mínimo

- Representa residuos frente a valores ajustados para buscar patrones.
- Revisa observaciones influyentes antes de eliminar ninguna.
- Comprueba que la escala y codificación de cada variable están bien definidas.
- Informa de intervalos de confianza además de p-valores.

Para distinguir este modelo de otros análisis, consulta [regresión lineal y ANOVA](/blog/regresion-lineal-anova-cuando-utilizar-interpretar-resultados/). Las [clases de Estadística universitaria](/clases-particulares/estadistica-universidad/) pueden centrarse en interpretar tu salida de R, SPSS, Jamovi o Python sin sustituir tu trabajo académico.
