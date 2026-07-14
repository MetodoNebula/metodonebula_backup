---
title: Probabilidad condicionada y teorema de Bayes: problemas universitarios resueltos
date: 2026-07-14
updated: 2026-07-14
description: Problemas resueltos de probabilidad condicionada y teorema de Bayes para universidad, con fórmulas, árboles y errores frecuentes.
tag: Estadística
category: Estadística
relatedService: /clases-particulares/estadistica-universidad/
relatedPosts: estadistica-desde-cero-para-elegir-contrastes,como-estudiar-matematicas-sin-memorizar,derivadas-integrales-universitarias-prueba-nivel-ejercicios-resueltos
image: /favicon.svg
---

La probabilidad condicionada y el teorema de Bayes aparecen en asignaturas de Estadística, Ingeniería, Economía, Ciencia de Datos y Biomedicina. El problema no suele ser la fórmula, sino saber qué evento está condicionado por cuál.

La probabilidad condicionada se define como:

$$
P(A|B)=\frac{P(A\cap B)}{P(B)}
$$

siempre que \(P(B)>0\). Se lee: probabilidad de \(A\) sabiendo que ha ocurrido \(B\).

## Teorema de Bayes

El teorema de Bayes permite invertir una condición:

$$
P(A|B)=\frac{P(B|A)P(A)}{P(B)}
$$

Cuando \(B\) puede ocurrir bajo varios escenarios \(A_1,A_2,\ldots,A_n\), se usa:

$$
P(A_i|B)=\frac{P(B|A_i)P(A_i)}{\sum_{j=1}^{n}P(B|A_j)P(A_j)}
$$

La parte difícil suele estar en calcular bien el denominador: la probabilidad total de observar \(B\).

## Problema 1: test médico

Una enfermedad afecta al 2% de la población. Un test da positivo en el 95% de los enfermos y también da positivo en el 4% de los sanos. Si una persona da positivo, ¿cuál es la probabilidad de que esté enferma?

Definimos:

- \(E\): estar enfermo.
- \(+\): test positivo.

Datos:

$$
P(E)=0.02,\quad P(+|E)=0.95,\quad P(+|\overline{E})=0.04
$$

Aplicamos Bayes:

$$
P(E|+)=\frac{P(+|E)P(E)}{P(+|E)P(E)+P(+|\overline{E})P(\overline{E})}
$$

Sustituimos:

$$
P(E|+)=\frac{0.95\cdot 0.02}{0.95\cdot 0.02+0.04\cdot 0.98}
$$

Calculando:

$$
P(E|+)=\frac{0.019}{0.0582}\approx 0.326
$$

La probabilidad es aproximadamente 32.6%. El resultado sorprende porque la enfermedad es poco frecuente: la prevalencia importa.

## Problema 2: urnas

Hay dos urnas. La urna 1 tiene 3 bolas rojas y 2 azules. La urna 2 tiene 1 bola roja y 4 azules. Se elige una urna al azar y después se extrae una bola. Si la bola es roja, ¿cuál es la probabilidad de haber elegido la urna 1?

Definimos:

- \(U_1\): elegir urna 1.
- \(U_2\): elegir urna 2.
- \(R\): extraer bola roja.

Datos:

$$
P(U_1)=P(U_2)=\frac{1}{2}
$$

Además:

$$
P(R|U_1)=\frac{3}{5},\quad P(R|U_2)=\frac{1}{5}
$$

Bayes:

$$
P(U_1|R)=\frac{P(R|U_1)P(U_1)}{P(R|U_1)P(U_1)+P(R|U_2)P(U_2)}
$$

Sustituyendo:

$$
P(U_1|R)=\frac{\frac{3}{5}\cdot\frac{1}{2}}{\frac{3}{5}\cdot\frac{1}{2}+\frac{1}{5}\cdot\frac{1}{2}}
=\frac{3}{4}
$$

La probabilidad es 75%.

## Problema 3: producción defectuosa

Una fábrica tiene dos máquinas. La máquina A produce el 70% de las piezas y la máquina B el 30%. A tiene una tasa de defectos del 3% y B del 8%. Si una pieza es defectuosa, ¿cuál es la probabilidad de que venga de B?

Datos:

$$
P(A)=0.7,\quad P(B)=0.3
$$

$$
P(D|A)=0.03,\quad P(D|B)=0.08
$$

Aplicamos:

$$
P(B|D)=\frac{P(D|B)P(B)}{P(D|A)P(A)+P(D|B)P(B)}
$$

Sustituimos:

$$
P(B|D)=\frac{0.08\cdot 0.3}{0.03\cdot 0.7+0.08\cdot 0.3}
=\frac{0.024}{0.045}\approx 0.533
$$

Aunque B produce menos piezas, explica aproximadamente el 53.3% de las defectuosas porque su tasa de defectos es mayor.

## Errores frecuentes

- Confundir \(P(A|B)\) con \(P(B|A)\).
- Ignorar la probabilidad base o prevalencia.
- Calcular el denominador con un solo caso.
- No definir eventos antes de operar.
- Pasar porcentajes a decimales de forma incorrecta.

## Método para resolver problemas de Bayes

Sigue siempre estos pasos:

1. Define eventos con letras claras.
2. Escribe lo que te dan como probabilidades condicionadas o marginales.
3. Identifica qué probabilidad te piden.
4. Construye el denominador con probabilidad total.
5. Interpreta el resultado en el contexto.

Si estás preparando Estadística, también puedes leer [Estadística desde cero para elegir contrastes](/blog/estadistica-desde-cero-para-elegir-contrastes/) o revisar la página de [clases particulares de Estadística y Probabilidad](/clases-particulares/estadistica-universidad/).
