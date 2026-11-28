---
title: "R para análisis de datos en Economía: regresión, diagnóstico y predicción reproducible"
seoTitle: "R para análisis de datos económicos: regresión y diagnóstico"
date: "2026-11-28"
updated: "2026-11-28"
description: "Tutorial de R para Economía: importar datos, limpiar valores perdidos, estimar una regresión lineal, diagnosticar residuos, interpretar coeficientes y predecir."
tag: "R y Economía"
category: "Economía y ADE"
relatedService: "/clases-particulares/economia-ade/"
relatedPosts: "econometria-desde-cero-interpretar-regresion,regresion-multiple-r2-ajustado-multicolinealidad,van-tir-ejercicio-inversion-finanzas-ade"
image: "/favicon.svg"
---

En Economía, R es útil cuando el análisis se puede repetir y auditar: desde la importación hasta la tabla final, cada decisión queda escrita. Una regresión con una línea de código puede ser rápida; una regresión que documenta unidades, valores perdidos, diagnóstico y alcance de la predicción es defendible en una práctica, un TFG o un informe.

> **Objetivo de este artículo.** Construir un flujo completo en R para estudiar ventas, precios y renta: importar una tabla, auditar datos, estimar un modelo lineal, revisar supuestos y realizar una predicción sin confundir asociación con causalidad.

## El ejemplo económico y las unidades

Imagina una base mensual con las variables ventas, precio, renta y publicidad. Cada fila contiene un mes. Antes de modelar, establece las unidades: unidades vendidas, euros por unidad, índice de renta disponible e inversión publicitaria en miles de euros.

Si cada fila es un mes, no puedes interpretar el resultado como si cada observación fuese un consumidor independiente. La frecuencia y el diseño condicionan qué significan los errores estándar y la causalidad.

## Importar y revisar antes de limpiar

Para importar un CSV estándar:

```r
datos <- read.csv(
  "ventas_mensuales.csv",
  na.strings = c("", "NA", "."),
  stringsAsFactors = FALSE
)

str(datos)
summary(datos)
colSums(is.na(datos))
```

No elimines valores perdidos solo porque impiden ejecutar lm. Primero averigua si son errores de carga, meses sin actividad, una variable no observada o un patrón relacionado con el resultado. Las decisiones de limpieza deben poder explicarse.

Comprueba intervalos imposibles y duplicados:

```r
subset(datos, precio <= 0 | ventas < 0)
sum(duplicated(datos))
```

Un precio cero puede significar promoción, dato faltante codificado como cero o un error. Cada caso requiere una respuesta distinta.

## Crear variables con significado económico

En muchos modelos de demanda interesa trabajar con logaritmos si las variables son positivas:

```r
datos$log_ventas <- log(datos$ventas)
datos$log_precio <- log(datos$precio)
datos$log_renta <- log(datos$renta)
```

En un modelo log-log, el coeficiente de log_precio se interpreta aproximadamente como elasticidad: el cambio porcentual esperado en ventas ante un cambio porcentual en precio, manteniendo constantes los otros regresores. Esa lectura requiere explicar el dominio y no usar logaritmos sobre cero o números negativos.

Para conservar explícita la muestra empleada:

```r
vars <- c("log_ventas", "log_precio", "log_renta", "publicidad")
muestra <- datos[complete.cases(datos[vars]), vars]
nrow(muestra)
```

Anota cuántas filas has perdido y por qué. Cambiar de muestra entre modelos sin decirlo puede alterar resultados y comparaciones.

## Estimar una regresión múltiple

Un modelo lineal se ajusta con una fórmula:

```r
modelo <- lm(
  log_ventas ~ log_precio + log_renta + publicidad,
  data = muestra
)

summary(modelo)
coef(modelo)
confint(modelo)
```

La fórmula se lee como respuesta a la izquierda y explicativas a la derecha. El resumen presenta coeficientes, errores estándar, estadísticos t y medidas globales, pero no sustituye una interpretación.

Si el coeficiente de log_precio fuese -1.2, la lectura condicional sería: dentro de este modelo y esta muestra, un aumento del 1 % en precio se asocia con una caída aproximada del 1,2 % en ventas, manteniendo renta y publicidad constantes. No afirma automáticamente que subir el precio cause ese efecto: puede haber endogeneidad, estacionalidad u otras variables omitidas.

## Ejemplo ejecutado en R: código y salida verificable

Para que el resultado no dependa de un archivo externo, este ejemplo crea una muestra determinista de 20 observaciones. Se ejecutó con R 4.5.2 antes de publicar el artículo:

```r
datos <- data.frame(
  ventas = c(118,123,130,128,142,150,149,160,168,172,
             180,191,197,205,214,221,229,238,246,254),
  precio = c(10.8,10.6,10.7,10.5,10.4,10.3,10.2,10.1,10.0,9.9,
             9.8,9.7,9.8,9.6,9.5,9.4,9.3,9.2,9.1,9.0),
  renta = c(100,101,100,102,103,104,104,105,106,107,
            108,108,109,110,111,112,113,114,115,116),
  publicidad = c(4,4,5,4,5,6,5,6,6,7,6,7,8,7,8,8,9,9,10,9)
)

datos$log_ventas <- log(datos$ventas)
datos$log_precio <- log(datos$precio)
datos$log_renta <- log(datos$renta)

modelo <- lm(
  log_ventas ~ log_precio + log_renta + publicidad,
  data = datos
)

nuevo <- data.frame(
  log_precio = log(9.2),
  log_renta = log(117),
  publicidad = 9
)

round(coef(modelo), 4)
round(predict(modelo, nuevo, interval = "prediction"), 4)
round(sqrt(mean(residuals(modelo)^2)), 4)
```

La consola de R produjo:

```text
(Intercept)  log_precio   log_renta  publicidad
     4.2272     -2.3154      1.2925      0.0305

    fit    lwr    upr
1 5.518 5.3976 5.6385

[1] 0.0241
```

La última línea es la raíz del error cuadrático medio de los residuos en escala logarítmica. El intervalo de la segunda salida es de predicción, no de confianza. Como estos datos son didácticos y construidos, sus coeficientes verifican sintaxis y flujo de trabajo; no constituyen una estimación causal de un mercado real.

## Diagnóstico: el modelo no termina en summary

Los gráficos básicos del objeto lm muestran residuos frente a ajustados, normalidad aproximada, escala–localización e influencia:

```r
par(mfrow = c(2, 2))
plot(modelo)
par(mfrow = c(1, 1))
```

Busca patrones, no una estética perfecta. Una curvatura en residuos frente a valores ajustados puede indicar no linealidad; una dispersión que aumenta con el ajuste puede sugerir heterocedasticidad; puntos con gran influencia requieren revisión de datos y contexto.

Extrae métricas específicas:

```r
res <- residuals(modelo)
ajustados <- fitted(modelo)
hatvalues(modelo)
cooks.distance(modelo)
```

No borres una observación solo porque tiene una distancia de Cook alta. Comprueba si es un error, un episodio económico real o un caso que exige un modelo más adecuado.

## Interacciones y términos no lineales

Si sospechas que el efecto de publicidad depende de la renta, expresa la interacción:

```r
m_interaccion <- lm(
  log_ventas ~ log_precio + log_renta * publicidad,
  data = muestra
)

summary(m_interaccion)
```

El asterisco añade efectos principales e interacción. No interpretes un coeficiente de interacción aislado sin evaluar el efecto marginal en valores concretos de las variables implicadas.

Para un término cuadrático de precio:

```r
m_cuadratico <- lm(
  log_ventas ~ log_precio + I(log_precio^2) + log_renta,
  data = muestra
)
```

La función I evita que el operador tenga el significado especial de la sintaxis de fórmulas. Este detalle evita muchos errores de prácticas.

## Predicción: media esperada y observación futura

Para estimar ventas esperadas en un escenario:

```r
nuevo <- data.frame(
  log_precio = log(12),
  log_renta = log(105),
  publicidad = 8
)

predict(modelo, newdata = nuevo, interval = "confidence")
predict(modelo, newdata = nuevo, interval = "prediction")
```

El intervalo de confianza se refiere a la media esperada del modelo; el intervalo de predicción incluye además la variabilidad de una observación futura y suele ser más ancho. No intercambies ambas preguntas en un informe comercial o económico.

Las etiquetas de las columnas en nuevo deben coincidir con las del modelo. Si has ajustado transformaciones, introdúcelas de la misma forma; no pases precio si el modelo se entrenó con log_precio.

## Tabla mínima de resultados reproducibles

Un análisis entregable debería dejar claros:

1. Origen y frecuencia de los datos.
2. Definición y unidades de cada variable.
3. Reglas de limpieza y tamaño de la muestra final.
4. Fórmula del modelo.
5. Coeficientes con incertidumbre.
6. Diagnóstico de residuos e influencia.
7. Qué puede y qué no puede concluirse causalmente.

## Errores frecuentes en Economía con R

- Importar números con coma decimal sin comprobar cómo quedaron leídos.
- Ajustar un modelo con valores perdidos sin declarar la muestra efectiva.
- Interpretar un coeficiente log-log sin comprobar que todas las variables sean positivas.
- Usar $R^2$ como prueba de causalidad.
- Predecir fuera del rango de precio o renta observado sin advertir extrapolación.
- Confundir intervalo de confianza con intervalo de predicción.
- Presentar una tabla de R sin explicar la unidad económica del coeficiente.

Para profundizar en la lectura econométrica, continúa con [cómo interpretar una regresión](/blog/econometria-desde-cero-interpretar-regresion/) y [R² ajustado y multicolinealidad](/blog/regresion-multiple-r2-ajustado-multicolinealidad/). Las [clases particulares de Economía y ADE](/clases-particulares/economia-ade/) pueden trabajar datos reales, Econometría, Estadística o tu práctica en R.

La sintaxis de lm, residuals y predict se basa en la [documentación oficial de R para modelos lineales](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/lm.html) y [predicciones de objetos lm](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/predict.lm.html).
