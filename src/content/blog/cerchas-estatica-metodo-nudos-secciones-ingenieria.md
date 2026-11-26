---
title: "Cerchas en estática: método de los nudos y de las secciones con ejercicios"
seoTitle: "Cerchas: método de los nudos y secciones para Ingeniería"
date: "2026-11-27"
updated: "2026-11-27"
description: "Cómo resolver cerchas planas en Estática mediante el método de los nudos y de las secciones: reacciones, tracción, compresión y errores de examen."
tag: "Estática"
category: "Física y Química"
relatedService: "/clases-particulares/fisica-ingenieria/"
relatedPosts: "diagramas-cuerpo-libre-metodo-errores-frecuentes,momento-inercia-eje-paralelo-ingenieria,como-aprobar-fisica-i-ingenieria-sin-memorizar-formulas"
image: "/favicon.svg"
---

En una cercha plana no se empieza aislando el nudo más vistoso. Primero hay que calcular las reacciones exteriores y decidir qué incógnitas puede resolver cada diagrama de cuerpo libre. El método es repetitivo, pero los signos y las direcciones exigen orden.

> **Respuesta directa.** Calcula primero las reacciones de apoyo de toda la cercha. Después usa el método de los nudos en un nudo con como máximo dos incógnitas, o corta con el método de las secciones atravesando hasta tres barras desconocidas.

## Hipótesis del modelo de cercha

El modelo clásico supone barras unidas mediante articulaciones ideales, cargas aplicadas en los nudos y fuerzas axiales en las barras. Por eso cada barra trabaja a tracción o a compresión, no con un momento flector propio dentro del modelo.

No apliques este método sin revisar el dibujo: si hay cargas distribuidas sobre las barras o uniones rígidas, el modelo puede ser otro.

## Paso 1: reacciones exteriores

Aísla la cercha completa. En dos dimensiones tienes:

$$
\sum F_x=0,\qquad
\sum F_y=0,\qquad
\sum M=0.
$$

Empieza tomando momentos respecto a un apoyo para eliminar las reacciones que pasan por él. Si las reacciones exteriores no cuadran, ningún nudo interior podrá cuadrar después.

## Método de los nudos

En cada nudo escribe:

$$
\sum F_x=0,\qquad\sum F_y=0.
$$

Supón inicialmente que todas las barras tiran del nudo. Si el resultado de una fuerza sale positivo, la hipótesis de tracción era coherente; si sale negativo, la barra está a compresión.

Esta convención evita dibujar dos versiones de cada fuerza. Lo importante es mantenerla en todos los nudos.

## Ejemplo de un nudo con dos barras

Supón un nudo con una carga vertical de 10 kN hacia abajo, una barra horizontal AB y una barra AC inclinada 30° respecto a la horizontal. Con la hipótesis de tracción:

$$
\sum F_y=0:
\qquad
F_{AC}\sin30^\circ-10=0.
$$

Así:

$$
F_{AC}=20\text{ kN}.
$$

En horizontal:

$$
\sum F_x=0:
\qquad
F_{AB}+F_{AC}\cos30^\circ=0.
$$

Por tanto:

$$
F_{AB}=-17{,}32\text{ kN}.
$$

AC está a tracción y AB a compresión. El signo tiene significado físico: no lo borres al dar el resultado.

## Método de las secciones

Si te piden directamente una barra lejos de los apoyos, no resuelvas todos los nudos. Traza una sección que corte como máximo tres barras con fuerza desconocida y aísla uno de los dos lados.

Elige momentos respecto al punto de intersección de dos barras cortadas: sus fuerzas no generan momento y puedes despejar la tercera más rápidamente.

## Barras de fuerza nula

En una articulación sin carga externa ni reacción:

- Dos barras no colineales implican que ambas son de fuerza nula.
- Tres barras, dos colineales, implican que la tercera no colineal tiene fuerza nula.

Estas reglas ahorran trabajo, pero solo se aplican bajo esas condiciones geométricas y de carga.

## Errores que cambian todo el ejercicio

- No calcular reacciones antes de empezar nudos.
- Cortar cuatro o más barras desconocidas en una sección plana.
- Cambiar la orientación de una fuerza de barra entre nudos.
- Llamar compresión o tracción sin interpretar el signo.
- Usar longitudes del dibujo en vez de obtener senos y cosenos de la geometría dada.

Para ordenar los dibujos de fuerzas que requiere cada paso, repasa [diagramas de cuerpo libre](/blog/diagramas-cuerpo-libre-metodo-errores-frecuentes/). Las [clases de Física e Ingeniería](/clases-particulares/fisica-ingenieria/) pueden centrarse en Estática, Resistencia de Materiales o Mecánica según tu grado.
