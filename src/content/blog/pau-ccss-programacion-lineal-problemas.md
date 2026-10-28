---
title: "Matemáticas CCSS PAU: domina programación lineal y convierte enunciados en puntos"
date: "2026-09-30"
updated: "2026-10-28"
description: "Programación lineal para Matemáticas CCSS PAU: variables, restricciones, región factible, vértices, ejemplo y errores típicos."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "preparar-selectividad-con-calendario,como-preparar-pau-matematicas-ii"
image: "/assets/latex/linear-programming.svg"
---

Programación lineal parece un tema de dibujar rectas, pero el dibujo solo representa decisiones. El verdadero problema está en traducir una situación de recursos, tiempo o beneficio a un modelo matemático que pueda justificarse.

La ruta siempre tiene cuatro etapas: **variables, restricciones, región factible y función objetivo.** Saltarse una de ellas puede producir un vértice correcto para un problema que no era el del enunciado.

![Región factible, restricciones, vértices y recta de nivel de una función objetivo](/assets/latex/linear-programming.svg)

## Define variables con significado y unidad

No empieces escribiendo $x$ e $y$ sin explicar qué cuentan. Una definición válida sería: “$x$ es el número de lotes del producto A e $y$ el número de lotes del producto B”. Añade $x\ge0$, $y\ge0$ y, si la situación lo exige, la condición de enteros.

## Traduce las palabras clave

- “Como máximo” conduce normalmente a $\le$.
- “Al menos” conduce a $\ge$.
- “No menos de” significa también $\ge$.
- “Por cada unidad” introduce un coeficiente.
- Un presupuesto o tiempo total produce una suma ponderada.

Prueba un caso sencillo del enunciado para comprobar el sentido de la desigualdad antes de dibujar.

## Ejemplo completo

Una empresa produce lotes A y B. Cada A usa 2 horas de máquina y 1 de acabado; cada B usa 1 hora de máquina y 2 de acabado. Hay 8 horas de máquina y 10 de acabado. El beneficio es 30 € por A y 40 € por B.

Las restricciones son:

$$
2x+y\le8,
$$

$$
x+2y\le10,
$$

$$
x\ge0,\qquad y\ge0.
$$

La función objetivo es:

$$
B(x,y)=30x+40y.
$$

Los vértices relevantes son $(0,0)$, $(4,0)$, $(0,5)$ y la intersección de las dos fronteras. Resolviendo:

$$
2x+y=8,\qquad x+2y=10,
$$

obtenemos $(x,y)=(2,4)$. Evaluamos:

| Vértice | Beneficio |
|---|---:|
| $(0,0)$ | 0 € |
| $(4,0)$ | 120 € |
| $(0,5)$ | 200 € |
| $(2,4)$ | 220 € |

El máximo se alcanza produciendo 2 lotes A y 4 lotes B, con 220 € de beneficio.

## Por qué basta revisar los vértices

En un problema lineal con región factible poligonal y acotada, las rectas de nivel de la función objetivo se desplazan de forma paralela. El último punto de contacto con la región aparece en un vértice o, en un caso de múltiples óptimos, a lo largo de un lado.

No es magia ni una regla sin motivo: es una propiedad de la geometría lineal.

## Casos que debes reconocer

- **Región vacía:** las restricciones son incompatibles.
- **Región no acotada:** puede existir o no un óptimo finito.
- **Múltiples soluciones óptimas:** la función objetivo es paralela a un lado óptimo.
- **Variables enteras:** el óptimo continuo puede no ser una decisión permitida.

## Errores frecuentes

- Olvidar no negatividad.
- Sombrear el semiplano opuesto por no probar un punto.
- Usar interceptos aproximados y perder el vértice exacto.
- Evaluar puntos que no pertenecen a la región.
- Dar solo el valor máximo sin interpretar las variables.
- Redondear una solución cuando el problema exige enteros sin comprobar vecinos factibles.

## Lista de comprobación PAU

¿Variables definidas? ¿Todas las restricciones traducidas? ¿Semiplanos verificados? ¿Vértices exactos? ¿Función objetivo evaluada? ¿Respuesta redactada con unidades? Si las seis respuestas son sí, el ejercicio está completo y el corrector puede seguir el razonamiento.

El campus virtual de Método Nebula incluye Matemáticas CCSS con sistemas, representación, programación lineal, probabilidad e inferencia, organizados en teoría, ejemplos y práctica de examen. Si quieres dejar de depender de plantillas y aprender a modelizar, utiliza el botón de contacto.
