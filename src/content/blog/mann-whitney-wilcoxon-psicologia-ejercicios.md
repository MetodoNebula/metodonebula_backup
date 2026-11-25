---
title: "Mann–Whitney U o Wilcoxon: cómo elegir e interpretar en Psicología"
seoTitle: "Mann–Whitney U vs Wilcoxon: ejercicios de Psicología"
date: "2026-11-25"
updated: "2026-11-25"
description: "Diferencia Mann–Whitney U y Wilcoxon con un ejercicio de Psicología: muestras independientes, datos pareados, rangos, hipótesis e interpretación."
tag: "Estadística aplicada"
category: "Estadística"
relatedService: "/clases-particulares/estadistica-universidad/"
relatedPosts: "t-student-psicologia-ejercicios-resueltos,que-prueba-estadistica-utilizar-guia-test-correcto,anova-un-factor-post-hoc-ejercicios-universidad"
image: "/favicon.svg"
---

Mann–Whitney U y Wilcoxon aparecen juntos en muchos apuntes, pero responden a diseños distintos. Confundirlos no es un error de fórmula: es un error sobre quién ha medido los datos y cuándo.

> **Respuesta directa.** Usa Mann–Whitney U para dos grupos independientes; usa Wilcoxon de rangos con signo para dos medidas de las mismas personas o parejas emparejadas. Ambos trabajan con rangos, pero no son intercambiables.

## Caso 1: dos grupos independientes

Quieres comparar la puntuación de ansiedad de un grupo que recibe intervención A y otro grupo diferente que recibe intervención B. Cada estudiante participa una sola vez.

La opción no paramétrica habitual para comparar ambos grupos es Mann–Whitney U. La hipótesis nula plantea que las distribuciones de ambos grupos son iguales; si sus formas son comparables, suele interpretarse como una comparación de localización o mediana.

El procedimiento básico es:

1. Reunir todas las puntuaciones y ordenarlas.
2. Asignar rangos, promediando en caso de empate.
3. Sumar rangos de cada grupo.
4. Calcular $U$ y obtener p-valor exacto o aproximado.

Para el grupo 1, con tamaño $n_1$ y suma de rangos $R_1$:

$$
U_1=n_1n_2+\frac{n_1(n_1+1)}{2}-R_1.
$$

No hace falta calcularlo a mano si usas SPSS, Jamovi o R, pero sí debes reconocer cuándo la salida corresponde a grupos independientes.

## Caso 2: antes y después en las mismas personas

Ahora mides estrés antes y después de un programa en los mismos 18 estudiantes. Las observaciones están vinculadas persona a persona. Aquí Mann–Whitney no sirve: ignoraría ese emparejamiento.

Wilcoxon analiza las diferencias dentro de cada pareja. El método elimina diferencias cero, ordena los valores absolutos de las diferencias y asigna signos según la dirección del cambio.

La pregunta es distinta: ¿las diferencias típicas entre antes y después se centran en cero?

## Ejemplo de decisión rápida

| Pregunta | Diseño | Prueba |
| --- | --- | --- |
| ¿Difieren dos clases distintas? | Independiente | Mann–Whitney U |
| ¿Cambia el mismo grupo tras una intervención? | Pareado | Wilcoxon |
| ¿Cambian dos miembros de cada pareja? | Pareado | Wilcoxon |

No elijas una prueba porque hay dos columnas en la hoja de datos. Comprueba si cada fila contiene dos medidas vinculadas de la misma unidad.

## Qué informar en un resultado

Una conclusión útil no es «se acepta la alternativa». Incluye la prueba, el contraste, el p-valor, una medida descriptiva y la dirección del efecto:

> El grupo A presentó puntuaciones más bajas que el grupo B, $U=42$, $p=0{,}018$.

En muestras pareadas, informa una mediana de diferencias o la mediana antes y después. Si el software ofrece tamaño de efecto, explica qué representa y no lo confundas con el p-valor.

## Errores que penalizan

- Usar Mann–Whitney para pretest y postest de las mismas personas.
- Cambiar a no paramétrica solo porque la muestra es pequeña, sin mirar diseño ni datos.
- Llamar «medias» a los rangos.
- Olvidar qué significa una puntuación más alta en la escala.
- Concluir causalidad cuando el diseño solo compara grupos observados.

Para decidir entre técnicas antes de abrir el programa, consulta [qué prueba estadística utilizar](/blog/que-prueba-estadistica-utilizar-guia-test-correcto/). Si preparas Estadística en Psicología, puedes practicar salidas reales con [clases de Estadística y Probabilidad](/clases-particulares/estadistica-universidad/).
