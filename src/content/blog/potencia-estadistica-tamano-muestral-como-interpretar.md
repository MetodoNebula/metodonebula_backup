---
title: "Potencia estadística y tamaño muestral: cómo interpretar un resultado no significativo"
seoTitle: "Potencia estadística y tamaño muestral: guía universitaria"
date: "2026-11-25"
updated: "2026-11-25"
description: "Aprende qué son la potencia estadística, el tamaño muestral y el error de tipo II, y cómo interpretar un p-valor no significativo en un ejercicio universitario."
tag: "Inferencia estadística"
category: "Estadística"
relatedService: "/clases-particulares/estadistica-universidad/"
relatedPosts: "p-valor-intervalo-confianza-tamano-efecto-ejemplo,que-prueba-estadistica-utilizar-guia-test-correcto,t-student-psicologia-ejercicios-resueltos"
image: "/favicon.svg"
---

Un resultado no significativo no demuestra automáticamente que «no haya efecto». En Estadística universitaria, esa conclusión depende de cuánto efecto buscabas, cuántos datos tenías y cuánta variabilidad había en la muestra. Ahí entran la potencia estadística y el tamaño muestral.

> **Respuesta directa.** La potencia es la probabilidad de detectar un efecto real de un tamaño concreto. Si una prueba no resulta significativa con una muestra pequeña, puede significar que no hay evidencia suficiente, no que el efecto sea exactamente cero.

## Los cuatro elementos que van juntos

Al planificar o interpretar un contraste hay cuatro piezas conectadas:

- Nivel de significación, normalmente $\alpha=0{,}05$.
- Tamaño del efecto que interesa detectar.
- Tamaño muestral $n$.
- Potencia, que suele buscarse alrededor de $0{,}80$.

Si mantienes fijo el resto, una muestra mayor aumenta la capacidad para distinguir una señal del ruido. Pero no convierte cualquier diferencia minúscula en una diferencia importante: por eso se debe mirar también el tamaño del efecto y su intervalo de confianza.

## Error de tipo I y error de tipo II

En un contraste se parte de una hipótesis nula, por ejemplo:

$$
H_0:\mu_1=\mu_2.
$$

Un error de tipo I consiste en rechazar $H_0$ cuando era cierta. Su probabilidad se controla con $\alpha$. Un error de tipo II consiste en no rechazar $H_0$ cuando sí existía una diferencia relevante. Su probabilidad se representa por $\beta$.

La potencia es:

$$
\text{Potencia}=1-\beta.
$$

No es una propiedad fija de la t de Student o de ANOVA. Cambia con la pregunta, los datos y el efecto que se pretende detectar.

## Ejemplo: dos grupos con una muestra limitada

Imagina que se comparan dos métodos de estudio. La media del grupo A es 7,1 y la del grupo B es 7,6. El contraste devuelve $p=0{,}12$.

La lectura incorrecta es: «Los métodos son iguales». La lectura responsable es: «Con estos datos no hay evidencia suficiente para afirmar una diferencia al nivel elegido». Para ir más lejos necesitas revisar:

1. El tamaño del efecto observado, por ejemplo $d$ de Cohen.
2. El intervalo de confianza de la diferencia de medias.
3. El número de estudiantes y la dispersión de las notas.
4. Qué diferencia habría sido útil detectar antes de recoger los datos.

Si el intervalo es muy amplio y admite tanto una mejora relevante como una diferencia nula, el estudio es impreciso. Si es estrecho y excluye mejoras relevantes, la conclusión de ausencia práctica es más defendible.

## Tamaño del efecto antes que una cifra aislada

Un p-valor depende, entre otras cosas, de $n$. Con una muestra enorme, una diferencia poco útil puede terminar siendo significativa. Con una muestra pequeña, una diferencia importante puede no alcanzar el umbral.

Por eso conviene informar en conjunto:

$$
\text{estimación} + \text{intervalo de confianza} + \text{tamaño del efecto} + p\text{-valor}.
$$

En una comparación de medias, $d$ de Cohen expresa la diferencia en unidades de desviación típica. No sustituye a interpretar el contexto: una diferencia de 0,3 desviaciones puede ser relevante en un ámbito y poco útil en otro.

## Cómo plantear un ejercicio de potencia

Antes de recoger datos, fija una diferencia mínima relevante, el nivel $\alpha$ y la potencia deseada. Con esa información se estima el tamaño muestral necesario. Es mejor formular «quiero poder detectar una diferencia de 0,4 puntos» que pedir una muestra grande sin criterio.

Después de obtener un resultado no significativo, no intentes calcular la potencia observada para salvar o invalidar el p-valor. Resulta más claro estudiar el intervalo de confianza y comparar su amplitud con la diferencia relevante.

## Errores que restan puntos en un examen

- Traducir $p>0{,}05$ como «la hipótesis nula es verdadera».
- Olvidar que la potencia se define respecto a un efecto concreto.
- Elegir $n$ por costumbre, sin justificar qué diferencia se desea detectar.
- Hablar de significación sin incluir una interpretación práctica.
- Confundir precisión de la estimación con significación estadística.

Si estás preparando inferencia, Psicología, Ciencias de la Salud, Economía o un TFG, empieza por decidir la pregunta y qué resultado sería relevante. Puedes ampliar con [p-valor, intervalo de confianza y tamaño del efecto](/blog/p-valor-intervalo-confianza-tamano-efecto-ejemplo/) o trabajar ejercicios con [clases particulares de Estadística y Probabilidad](/clases-particulares/estadistica-universidad/).
