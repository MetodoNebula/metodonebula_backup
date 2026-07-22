---
title: Qué prueba estadística utilizar: guía para elegir el test correcto
date: 2026-07-09
updated: 2026-07-22
description: Guía práctica para elegir la prueba estadística correcta según la pregunta, el tipo de variable, el número de grupos y el diseño del estudio.
tag: Estadística
category: Estadística
relatedService: /clases-particulares/estadistica-psicologia-ade/
relatedPosts: como-aprobar-estadistica-psicologia-sin-base-matematica,regresion-lineal-anova-cuando-utilizar-interpretar-resultados,estadistica-desde-cero-para-elegir-contrastes
image: /favicon.svg
---

Elegir la prueba estadística correcta es una de las partes más difíciles para estudiantes universitarios. Muchas veces conocen la t de Student, ANOVA, chi-cuadrado o regresión, pero no saben cuál usar ante un enunciado nuevo.

La clave es no empezar por el nombre del test. Empieza por la pregunta y por el tipo de variables.

## Paso 1: identifica la pregunta

Casi todos los análisis responden a una de estas preguntas:

- ¿Quiero comparar una media?
- ¿Quiero comparar varios grupos?
- ¿Quiero estudiar una relación?
- ¿Quiero predecir una variable?
- ¿Quiero analizar frecuencias o categorías?

Si no puedes escribir la pregunta en una frase, todavía no estás listo para elegir prueba.

## Paso 2: clasifica la variable dependiente

La variable dependiente es lo que quieres explicar, comparar o predecir.

Puede ser:

- Cuantitativa: puntuación, edad, tiempo, nota, ansiedad en escala.
- Categórica: grupo, diagnóstico, respuesta sí/no, condición experimental.

Si la variable dependiente es cuantitativa, suelen aparecer t, ANOVA, correlación o regresión. Si es categórica, suelen aparecer chi-cuadrado o modelos específicos.

## Paso 3: cuenta grupos o condiciones

Si comparas medias:

- Una media contra un valor: t de una muestra.
- Dos grupos independientes: t de muestras independientes.
- Dos medidas en las mismas personas: t de muestras relacionadas.
- Tres o más grupos independientes: ANOVA de un factor.
- Tres o más medidas repetidas: ANOVA de medidas repetidas.

La diferencia entre independiente y relacionado es crucial. No es lo mismo comparar dos grupos de personas que comparar a las mismas personas antes y después.

## Paso 4: si estudias relación, mira el tipo de variables

Si tienes dos variables cuantitativas, puede encajar una correlación:

$$
r=\frac{\operatorname{cov}(X,Y)}{s_Xs_Y}
$$

Si además quieres predecir \(Y\) a partir de \(X\), puedes usar regresión lineal:

$$
Y=\beta_0+\beta_1X+\varepsilon
$$

Si las variables son categóricas, puede encajar chi-cuadrado:

$$
\chi^2=\sum \frac{(O-E)^2}{E}
$$

donde \(O\) son frecuencias observadas y \(E\) frecuencias esperadas.

## Guía rápida por escenarios

### Tengo dos grupos y una variable cuantitativa

Usa t de Student para muestras independientes si los grupos son distintos. Ejemplo: ansiedad en grupo control frente a grupo intervención.

### Tengo antes y después en las mismas personas

Usa t de muestras relacionadas si solo hay dos momentos. Ejemplo: estrés antes y después de un programa.

### Tengo tres grupos

Usa ANOVA si comparas medias entre tres o más grupos. Ejemplo: rendimiento en tres métodos de estudio.

### Tengo dos variables cuantitativas

Usa correlación si quieres medir asociación. Usa regresión si quieres predecir o modelizar una variable dependiente.

### Tengo variables categóricas

Usa chi-cuadrado si quieres estudiar asociación entre categorías. Ejemplo: género y elección de tratamiento.

## Supuestos: el filtro que no puedes saltarte

Elegir el test no termina el trabajo. Revisa:

- Independencia de observaciones.
- Escala de medida.
- Normalidad cuando corresponda.
- Homogeneidad de varianzas.
- Tamaño muestral.
- Presencia de valores extremos.

Los supuestos no son un trámite. Pueden cambiar la prueba o la interpretación.

## Tabla de decisión por diseño

| Objetivo y diseño                | Opción paramétrica habitual | Alternativa o modelo a valorar              |
| -------------------------------- | --------------------------- | ------------------------------------------- |
| Una media frente a un valor      | t de una muestra            | Wilcoxon de una muestra o método robusto    |
| Dos grupos independientes        | t independiente             | Mann-Whitney                                |
| Dos medidas relacionadas         | t pareada                   | Wilcoxon de rangos con signo                |
| Tres o más grupos independientes | ANOVA                       | Kruskal-Wallis                              |
| Tres o más medidas relacionadas  | ANOVA de medidas repetidas  | Friedman                                    |
| Dos variables cuantitativas      | Correlación de Pearson      | Spearman                                    |
| Dos variables categóricas        | Chi-cuadrado                | Fisher cuando las frecuencias lo aconsejen  |
| Predecir respuesta cuantitativa  | Regresión lineal            | Modelo robusto o transformación justificada |

La tabla ofrece candidatas, no decisiones automáticas. El diseño, la independencia y la pregunta científica tienen prioridad.

## Árbol de decisión textual

1. ¿La respuesta es cuantitativa?
   - Sí: decide si quieres comparar grupos, estudiar asociación o predecir.
   - No: si es categórica, valora tablas de contingencia o modelos para respuesta categórica.
2. Si comparas grupos, ¿cuántos son?
   - Dos: distingue muestras independientes de medidas relacionadas.
   - Tres o más: distingue grupos independientes de medidas repetidas.
3. Si estudias relación, ¿las variables son cuantitativas?
   - Asociación sin dirección predictiva: correlación.
   - Respuesta definida que quieres modelizar: regresión.
4. Revisa independencia, escala, valores extremos, residuos y homogeneidad.
5. Escribe qué parámetro o hipótesis responde a tu pregunta.

## Paramétricas frente a no paramétricas

Las pruebas no paramétricas no son una solución universal para “datos no normales”. Cambian la hipótesis y la información que utilizan.

- **t independiente:** compara medias de dos grupos independientes bajo su modelo.
- **Mann-Whitney:** trabaja con rangos entre dos grupos independientes.
- **t pareada:** analiza la media de las diferencias dentro de pares.
- **Wilcoxon:** trabaja con rangos y signos de diferencias relacionadas.
- **ANOVA:** compara medias mediante un modelo lineal.
- **Kruskal-Wallis:** extiende el enfoque por rangos a varios grupos independientes.

## Ejemplos por titulación

### Psicología

Se mide ansiedad antes y después de una intervención en las mismas personas. Hay dos momentos emparejados: t pareada como candidata; Wilcoxon si el planteamiento por rangos resulta más adecuado.

### ADE

Se estudia cómo cambia el gasto mensual con los ingresos. La respuesta y el predictor son cuantitativos: regresión lineal, con interpretación económica de la pendiente y revisión de residuos.

### Biología

Se compara la concentración de un marcador en cuatro tratamientos independientes. La respuesta es cuantitativa y el factor tiene cuatro niveles: ANOVA como candidata; Kruskal-Wallis si el modelo paramétrico no resulta defendible.

## Correlación, regresión, ANOVA y chi-cuadrado

- **Correlación:** cuantifica asociación sin convertirla en causalidad.
- **Regresión:** modeliza una respuesta y permite incorporar varios predictores.
- **ANOVA:** es un caso del modelo lineal con predictores categóricos.
- **Chi-cuadrado:** compara frecuencias observadas y esperadas en variables categóricas.

## Error típico: elegir por capítulo

Muchos alumnos usan el test del tema que están estudiando. Si el examen mezcla contenidos, esa estrategia falla. El criterio debe ser la estructura del problema, no el orden del temario.

## Plantilla de decisión

Antes de elegir prueba, completa:

1. Mi variable dependiente es...
2. Es cuantitativa o categórica...
3. Tengo tantos grupos o condiciones...
4. Las observaciones son independientes o relacionadas...
5. Quiero comparar, asociar o predecir...
6. Por tanto, la prueba candidata es...

## Checklist final

1. He escrito la pregunta sin nombrar una prueba.
2. He identificado respuesta, predictores y escala de medida.
3. Sé si los grupos o medidas son independientes o relacionados.
4. He definido cuántos grupos, condiciones o momentos existen.
5. He revisado diseño, valores extremos y supuestos relevantes.
6. Puedo explicar qué hipótesis contrasta la prueba candidata.
7. Informaré tamaño del efecto e incertidumbre cuando corresponda.
8. Interpretaré el resultado en el contexto original.

## Preguntas frecuentes

### ¿Debo hacer siempre una prueba de normalidad?

No como trámite aislado. Revisa el supuesto que corresponda, utiliza gráficos y considera tamaño muestral, diseño y residuos.

### ¿Mann-Whitney sustituye siempre a la t de Student?

No. Responden bajo marcos distintos. La elección depende de la pregunta y de la forma de los datos.

### ¿Puedo decidir solo con SPSS o Jamovi?

El software calcula, pero no conoce tu diseño ni tu pregunta. La decisión debe estar razonada antes de seleccionar un menú.

Para practicar la interpretación, continúa con [p-valor, intervalo de confianza y tamaño del efecto](/blog/p-valor-intervalo-confianza-tamano-efecto-ejemplo/) o revisa las [clases de Estadística para Psicología, ADE y Ciencias Sociales](/clases-particulares/estadistica-psicologia-ade/).
