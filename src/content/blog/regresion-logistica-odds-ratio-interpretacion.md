---
title: "Regresión logística: cómo interpretar odds ratio, probabilidades y resultados"
seoTitle: "Regresión logística: interpretar odds ratio y probabilidades"
date: "2026-11-10"
updated: "2026-11-10"
description: "Guía de regresión logística: variable respuesta binaria, logit, odds ratio, intervalos de confianza, predicción y errores de interpretación."
tag: "Estadística"
category: "Estadística"
relatedService: "/clases-particulares/estadistica-universidad/"
relatedPosts: "regresion-lineal-anova-cuando-utilizar-interpretar-resultados,econometria-desde-cero-interpretar-regresion,que-prueba-estadistica-utilizar-guia-test-correcto"
image: "/favicon.svg"
---

La regresión logística se utiliza cuando la respuesta tiene dos resultados posibles: aprobar o no, presentar una condición o no, comprar o no. No predice directamente una cantidad continua; modeliza la probabilidad de que ocurra un resultado, siempre entre cero y uno.

> **Respuesta directa.** En regresión logística, un coeficiente describe el cambio en los log-odds. Al exponentiarlo obtenemos un odds ratio: valores mayores que uno se asocian con odds más altas del resultado, y valores menores que uno con odds más bajas, manteniendo las demás variables constantes.

## Del modelo a una probabilidad

Para una variable explicativa $x$, el modelo puede escribirse como

$$
\log\left(\frac{p}{1-p}\right)=\beta_0+\beta_1x.
$$

Aquí $p$ es la probabilidad del resultado codificado como $1$. La fracción $p/(1-p)$ son las odds, no la probabilidad. Diferenciarlas evita una de las confusiones más habituales.

## Cómo leer un odds ratio

Si $\exp(\beta_1)=1.20$, un aumento de una unidad en $x$ multiplica las odds por $1.20$, es decir, las aumenta un 20 %. No significa automáticamente que la probabilidad aumente 20 puntos porcentuales: ese cambio depende de la probabilidad inicial y del resto del modelo.

Si el predictor es categórico, especifica siempre la categoría de referencia. Decir solo “el grupo A tiene OR 1,20” no es suficiente si no sabemos frente a qué grupo se compara.

## Intervalo de confianza y evidencia

Un intervalo de confianza para el odds ratio ayuda a ver la precisión. Si un intervalo del 95 % incluye el valor $1$, los datos pueden ser compatibles con ausencia de asociación según ese criterio. Pero no cierres la interpretación ahí: revisa el tamaño de la muestra, el sentido práctico del efecto y la calidad del modelo.

## Errores que conviene evitar

- Presentar odds ratio como si fuera riesgo relativo o cambio directo de probabilidad.
- Omitir la codificación del resultado y las categorías de referencia.
- Concluir causalidad a partir de una asociación observacional.
- Elegir el modelo sin revisar datos ausentes, variables confusoras o la adecuación de la relación.

## Una forma responsable de terminar un ejercicio

Describe qué resultado está modelizado, qué predictores aparecen, cuál es el odds ratio relevante y qué limitación debe tener en cuenta el lector. Para decidir si este modelo es el adecuado frente a otros análisis, revisa la guía de [regresión lineal y ANOVA](/blog/regresion-lineal-anova-cuando-utilizar-interpretar-resultados/) o busca apoyo en [Estadística universitaria](/clases-particulares/estadistica-universidad/).
