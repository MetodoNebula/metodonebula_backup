---
title: "Chi-cuadrado en Psicología: tablas de contingencia paso a paso"
seoTitle: "Chi-cuadrado en Psicología: tablas de contingencia"
date: 2026-11-04
updated: 2026-11-05
description: "Aprende cuándo usar chi-cuadrado en Psicología, cómo calcular frecuencias esperadas e interpretar una tabla de contingencia con ejemplos resueltos."
tag: "Estadística"
category: "Estadística"
relatedService: "/campus/"
relatedPosts: "estadistica-desde-cero-para-elegir-contrastes,t-student-psicologia-ejercicios-resueltos,que-prueba-estadistica-utilizar-guia-test-correcto"
image: "/favicon.svg"
---

La prueba chi-cuadrado de independencia responde a una pregunta sencilla: ¿dos variables categóricas parecen relacionadas en la muestra o la distribución observada es compatible con que sean independientes? El cálculo importa, pero lo primero es reconocer que trabajas con recuentos en categorías, no con medias.

> **Respuesta directa.** Usa chi-cuadrado de independencia cuando tienes dos variables categóricas y una tabla de frecuencias. Calcula qué frecuencias esperarías si fueran independientes, compara con las observadas y comunica el resultado junto al tamaño del efecto y el contexto.

## Cuándo corresponde esta prueba

Ejemplos habituales en Psicología:

- tipo de intervención (presencial u online) y adherencia (sí o no);
- grupo de edad y preferencia de formato terapéutico;
- presencia de un síntoma (sí o no) y exposición a una condición.

No corresponde si quieres comparar una puntuación media de ansiedad entre grupos: allí la variable resultado es cuantitativa y suele requerir otra familia de pruebas, como la [t de Student](/blog/t-student-psicologia-ejercicios-resueltos/).

## La tabla observada

Imagina una muestra de \(80\) participantes:

| | Adhiere | No adhiere | Total |
| --- | ---: | ---: | ---: |
| Programa A | 30 | 10 | 40 |
| Programa B | 22 | 18 | 40 |
| Total | 52 | 28 | 80 |

Estas son las frecuencias **observadas**. La pregunta es si la diferencia entre \(30/10\) y \(22/18\) puede atribuirse a la variación muestral bajo independencia.

## Frecuencias esperadas

Si programa y adherencia fueran independientes, cada celda tendría una frecuencia esperada:

$$
E_{ij}=\frac{(\text{total de fila})(\text{total de columna})}{\text{total general}}.
$$

Para Programa A y «adhiere»:

$$
E=\frac{40\cdot52}{80}=26.
$$

Para Programa A y «no adhiere»:

$$
E=\frac{40\cdot28}{80}=14.
$$

Las otras dos celdas tienen las mismas expectativas, pues las dos filas suman \(40\). La tabla esperada es \(26,14,26,14\).

## El estadístico chi-cuadrado

El estadístico suma las discrepancias relativas entre observados y esperados:

$$
\chi^2=\sum\frac{(O-E)^2}{E}.
$$

En el ejemplo:

$$
\chi^2=\frac{(30-26)^2}{26}+\frac{(10-14)^2}{14}+\frac{(22-26)^2}{26}+\frac{(18-14)^2}{14}.
$$

El resultado se compara con una distribución chi-cuadrado cuyos grados de libertad, en una tabla de \(r\) filas y \(c\) columnas, son:

$$
gl=(r-1)(c-1).
$$

Una tabla \(2\times2\) tiene \(gl=1\). Un programa estadístico ofrece el valor \(p\); tu tarea es interpretar la asociación sin confundirla con causalidad.

## Cómo redactar una conclusión

Una conclusión clara incluye:

1. qué dos variables se analizaron;
2. la diferencia observada en porcentajes o recuentos;
3. \(\chi^2\), grados de libertad y \(p\);
4. el tamaño del efecto, por ejemplo \(V\) de Cramér;
5. el límite de la interpretación: asociación no significa causa.

Por ejemplo: «La adherencia fue mayor en el programa A que en el B. La prueba chi-cuadrado indicó una asociación entre programa y adherencia; conviene informar también del tamaño de esa asociación y considerar posibles variables de confusión».

## Supuestos que debes revisar

- Cada participante cuenta una sola vez en una sola celda.
- Las categorías son mutuamente excluyentes.
- Las observaciones son independientes.
- Las frecuencias esperadas no deben ser demasiado bajas; en una tabla pequeña, consulta alternativas exactas o agrupa categorías solo si tiene sentido teórico.

No uses porcentajes como datos de entrada: construye la prueba con los recuentos originales.

## Errores frecuentes

- Aplicar chi-cuadrado a una variable cuantitativa sin justificar cómo se ha categorizado.
- Concluir causalidad por una asociación.
- Interpretar un \(p\) pequeño sin mirar los porcentajes y la dirección del patrón.
- Ignorar celdas con frecuencias esperadas bajas.
- Olvidar que un tamaño de muestra grande puede volver significativo un efecto pequeño.

## Ejercicios propuestos

1. ¿Qué prueba elegirías para relacionar turno de trabajo (mañana/tarde) y calidad de sueño (buena/mala)?
2. En una tabla \(3\times4\), ¿cuántos grados de libertad hay?
3. ¿Qué significa una frecuencia esperada de \(2\) en varias celdas?
4. ¿Permite chi-cuadrado afirmar que una intervención ha causado la mejoría?

## Soluciones

1. Chi-cuadrado de independencia, si cada persona aporta una única respuesta en cada variable.
2. \(gl=(3-1)(4-1)=6\).
3. Debe revisarse el supuesto de frecuencias esperadas y considerar una alternativa o una agrupación justificada.
4. No. Muestra asociación; para causalidad hacen falta un diseño y controles adecuados.

En el [Campus de Método Nebula](/campus/) la elección de contrastes se practica como una secuencia: pregunta, tipo de variables, diseño, supuestos, cálculo e interpretación. Así chi-cuadrado no queda como una fórmula aislada.
