---
title: "R para series temporales económicas: estacionalidad, ARIMA y previsión con datos mensuales"
seoTitle: "R para series temporales económicas: ARIMA y previsión"
date: "2026-11-28"
updated: "2026-11-28"
description: "Tutorial de R para series temporales económicas: objeto ts, descomposición, estacionalidad, ACF/PACF, ARIMA, diagnósticos y previsión mensual."
tag: "R y Economía"
category: "Economía y ADE"
relatedService: "/clases-particulares/economia-ade/"
relatedPosts: "econometria-desde-cero-interpretar-regresion,r-analisis-datos-economia-regresion-diagnostico,series-numericas-criterios-convergencia-universidad"
image: "/favicon.svg"
---

Una serie temporal económica no es una columna de números con fechas al lado. El orden, la frecuencia, la estacionalidad y los cambios de nivel contienen información que se pierde si aplicas una regresión ordinaria sin estructura temporal. En R, el primer paso no es ajustar ARIMA: es construir correctamente el objeto de serie y preguntarse qué proceso económico ha generado los datos.

> **Objetivo de este artículo.** Analizar una serie mensual de ventas, inflación, turismo o desempleo con R: crear un objeto ts, separar tendencia y estacionalidad, estudiar autocorrelación, ajustar un ARIMA y validar una previsión sin prometer más de lo que los datos permiten.

## La tabla base debe tener tiempo regular

Supón una tabla con una observación mensual y una variable ventas reales. Antes de convertirla en serie, comprueba que no falten meses ni haya duplicados:

```r
datos <- read.csv("ventas_mensuales.csv", stringsAsFactors = FALSE)

head(datos)
tail(datos)
nrow(datos)
```

Si falta abril de un año, no construyas un objeto ts como si la siguiente fila fuera abril. Primero decide cómo tratar el hueco: recuperar el dato, marcarlo como ausente y usar un método apropiado, o limitar el periodo. La frecuencia no se inventa.

## Crear una serie mensual con ts

Si los datos van de enero de 2018 a diciembre de 2025:

```r
ventas_ts <- ts(
  datos$ventas_reales,
  start = c(2018, 1),
  frequency = 12
)

plot(ventas_ts,
     xlab = "Año",
     ylab = "Ventas reales",
     main = "Ventas mensuales")
```

El argumento frequency igual a 12 indica periodicidad mensual. No significa que R haya detectado estacionalidad; solo codifica la estructura temporal que tú conoces.

Para localizar un periodo:

```r
window(ventas_ts, start = c(2022, 1), end = c(2024, 12))
```

Trabajar con índices temporales correctos evita desalinear una serie con tipos de interés, precios o campañas comerciales.

## Transformación y lectura económica

Muchas series económicas presentan una dispersión que crece con el nivel. Si los valores son positivos, el logaritmo puede facilitar una lectura en tasas aproximadas:

```r
log_ventas <- log(ventas_ts)
plot(log_ventas, main = "Logaritmo de ventas")
```

No uses logaritmos si hay ceros o valores negativos sin explicar cómo los tratas. Añadir una constante solo para que el código funcione cambia la interpretación; debe estar justificado por el problema.

Para estudiar variación mensual aproximada:

```r
crecimiento <- diff(log_ventas)
plot(crecimiento,
     main = "Variación mensual aproximada",
     ylab = "Diferencia de logaritmos")
abline(h = 0, lty = 2)
```

La diferencia de logaritmos se interpreta aproximadamente como una tasa de crecimiento cuando las variaciones son moderadas. No la llames porcentaje exacto sin precisar la aproximación.

## Descomposición: tendencia, estacionalidad y residuo

La descomposición clásica requiere al menos dos ciclos completos y una frecuencia conocida:

```r
descomp <- decompose(ventas_ts, type = "multiplicative")
plot(descomp)
```

El modelo multiplicativo es razonable cuando la amplitud estacional crece con el nivel. Si la variación estacional parece de tamaño constante, examina una versión aditiva o trabaja sobre el logaritmo.

Para una descomposición más flexible de una serie mensual sin valores perdidos, usa STL:

```r
stl_ventas <- stl(log_ventas, s.window = "periodic")
plot(stl_ventas)
```

STL separa componentes suavizados. No conviertas automáticamente el componente estacional en una prueba de causalidad: que las ventas tengan patrón mensual no identifica por sí solo qué mecanismo lo produce.

## Autocorrelación antes de ARIMA

La función acf muestra correlaciones con retardos; pacf ayuda a estudiar correlaciones parciales:

```r
acf(crecimiento, main = "ACF de crecimiento")
pacf(crecimiento, main = "PACF de crecimiento")
```

No elijas p y q contando barras de forma mecánica. Considera el gráfico, el tamaño de la muestra, el conocimiento económico y los diagnósticos posteriores. Un salto de política, una crisis o una revisión metodológica puede crear estructuras que un ARIMA simple no representa bien.

## Ajustar un modelo ARIMA con R base

Un ARIMA se expresa por los órdenes no estacionales p, d, q y, si procede, una parte estacional. Para una serie diferenciada una vez y con componente autorregresivo de orden uno:

```r
modelo <- arima(
  log_ventas,
  order = c(1, 1, 0),
  seasonal = list(order = c(0, 1, 1), period = 12)
)

modelo
```

La diferenciación d igual a 1 combate una tendencia estocástica; D igual a 1 en la parte estacional aplica una diferencia a doce meses. No diferencies por rutina: una diferenciación excesiva puede introducir dependencia artificial y hacer el modelo más difícil de interpretar.

## Diagnóstico de residuos del modelo

Extrae los residuos y revisa si aún queda autocorrelación:

```r
e <- residuals(modelo)

acf(e, main = "ACF de residuos ARIMA")
Box.test(e, lag = 24, type = "Ljung-Box")
```

La prueba de Ljung–Box ayuda a comprobar si permanece autocorrelación conjunta hasta el retardo elegido. Un p-valor alto no demuestra que el modelo sea verdadero; indica que no se ha detectado esa estructura lineal concreta con esa prueba y muestra.

No olvides mirar también valores atípicos y cambios de varianza. Una serie con intervenciones o rupturas estructurales puede necesitar variables explicativas o un tratamiento por periodos.

## Previsión y escala correcta

Para prever doce meses:

```r
pred <- predict(modelo, n.ahead = 12)

pronostico_log <- pred$pred
error_log <- pred$se
```

Si ajustaste el modelo en logaritmos, los pronósticos están en escala logarítmica. Volver con exp es una transformación útil, pero debes explicar que la media en escala original no equivale en general a la exponencial de la media logarítmica. Para informes sencillos, indica claramente la escala y el método de transformación.

Una visualización mínima:

```r
ts.plot(
  log_ventas,
  ts(pronostico_log,
     start = c(2026, 1),
     frequency = 12),
  col = c("black", "blue"),
  lty = c(1, 2)
)
legend("topleft",
       legend = c("Histórico", "Previsión"),
       col = c("black", "blue"),
       lty = c(1, 2))
```

No presentes el pronóstico como una certeza puntual. Informa horizonte, modelo, intervalo y qué supuestos económicos lo sostienen.

## Validación temporal: nunca mezcles futuro y pasado

Una prueba útil consiste en separar los últimos doce meses como periodo de validación:

```r
entrenamiento <- window(log_ventas, end = c(2024, 12))
prueba <- window(log_ventas, start = c(2025, 1))

m_train <- arima(
  entrenamiento,
  order = c(1, 1, 0),
  seasonal = list(order = c(0, 1, 1), period = 12)
)

p_train <- predict(m_train, n.ahead = length(prueba))$pred
error_abs_medio <- mean(abs(p_train - prueba))
error_abs_medio
```

Esta validación respeta el orden temporal. Dividir filas al azar, como en un conjunto de datos transversal, filtra información futura hacia el entrenamiento y da una impresión engañosa de precisión.

## Errores frecuentes en series económicas

- Construir ts ignorando meses ausentes o duplicados.
- Usar frecuencia 12 sin comprobar que los datos sean mensuales.
- Confundir una tendencia visual con estacionariedad o no estacionariedad demostrada.
- Diferenciar de forma automática sin analizar el efecto.
- Ajustar ARIMA y no revisar residuos.
- Hacer validación aleatoria en vez de temporal.
- Pronosticar en logaritmos y comunicar el resultado como si estuviera en euros o unidades.
- Atribuir causalidad a un patrón estacional sin variables ni diseño causal.

Para unir la lectura estadística con la interpretación económica, consulta [cómo interpretar una regresión en Econometría](/blog/econometria-desde-cero-interpretar-regresion/). Las [clases particulares de Economía y ADE](/clases-particulares/economia-ade/) pueden trabajar R, Econometría, series temporales y previsión con el formato de datos de tu asignatura.

La sintaxis de arima procede de la [documentación del paquete stats de R](https://cran.r-project.org/doc/manuals/r-release/packages/stats/refman/stats.html); para descomposición y herramientas disponibles en series temporales, consulta la [vista de tareas de CRAN](https://cran.r-project.org/web/views/TimeSeries.html).
