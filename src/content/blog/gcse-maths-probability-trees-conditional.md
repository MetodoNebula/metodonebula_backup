---
title: "Matemáticas GCSE: árboles de probabilidad y probabilidad condicionada sin sumar ramas equivocadas"
seoTitle: "Matemáticas GCSE: árboles y probabilidad condicionada"
date: "2026-09-16"
updated: "2026-09-16"
description: "Domina árboles de probabilidad GCSE: sucesos dependientes, sin reemplazo, probabilidad condicionada, productos de ramas y comprobaciones."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-maths-histograms-cumulative-frequency,gcse-maths-algebra-graphs-revision,gcse-maths-transformations-vectors"
image: "/assets/latex/probability-tree-conditional.svg"
language: "es"
translation: "gcse-maths-probability-trees-conditional-en"
---

Un árbol de probabilidad no es solo un dibujo con fracciones. Cada recorrido representa una intersección de sucesos y cada bifurcación debe contener probabilidades condicionadas a lo que ya ocurrió.

> **Respuesta directa.** Multiplica probabilidades a lo largo de una ruta porque deben ocurrir todos sus sucesos. Suma rutas completas cuando cualquiera de ellas sirve. Si no hay reemplazo, actualiza numerador y denominador después de la primera extracción.

![Árbol de probabilidad con sucesos A y B y probabilidades condicionadas](/assets/latex/probability-tree-conditional.svg)

## Las reglas que construyen el árbol

En cada bifurcación, las probabilidades deben sumar 1:

$$
P(A)+P(A^c)=1.
$$

Para una ruta de dos etapas:

$$
P(A\cap B)=P(A)P(B\mid A).
$$

El símbolo $P(B\mid A)$ se lee “probabilidad de B sabiendo que A ha ocurrido”. No tiene por qué ser igual a $P(B)$.

## Con reemplazo e independencia

Una bolsa contiene 3 bolas rojas y 2 azules. Se extrae una bola, se devuelve y se repite. La probabilidad de dos rojas es:

$$
P(RR)=\frac35\cdot\frac35=\frac9{25}.
$$

La composición de la bolsa vuelve a ser la misma. Las extracciones son independientes en este modelo.

La probabilidad de obtener una de cada color tiene dos rutas:

$$
P(RA\text{ o }AR)=\frac35\frac25+\frac25\frac35=\frac{12}{25}.
$$

Multiplicar una sola ruta omitiría un orden posible.

## Sin reemplazo

Con la misma bolsa, pero sin devolver la primera bola:

$$
P(RR)=\frac35\cdot\frac24=\frac3{10}.
$$

Después de sacar una roja quedan 2 rojas entre 4 bolas. Si la primera fuera azul, la segunda probabilidad roja sería $3/4$. Cada segunda rama depende de la primera.

## Probabilidad condicionada desde datos

La definición es:

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)},
$$

si $P(B)>0$. El denominador reduce el universo a los casos donde B ocurrió.

Si 40 estudiantes practican deporte, 18 de ellos tocan un instrumento y hay 100 estudiantes en total:

$$
P(I\mid D)=\frac{18/100}{40/100}=\frac{18}{40}=0.45.
$$

Dividir entre 100 sería responder a $P(I\cap D)$, no a la pregunta condicionada.

## Árbol inverso y Bayes

Un árbol puede dar $P(A)$, $P(B\mid A)$ y $P(B\mid A^c)$ y preguntar $P(A\mid B)$. Primero calcula:

$$
P(B)=P(A)P(B\mid A)+P(A^c)P(B\mid A^c),
$$

y después:

$$
P(A\mid B)=\frac{P(A)P(B\mid A)}{P(B)}.
$$

No se invierte una condición intercambiando letras. $P(A\mid B)$ y $P(B\mid A)$ responden a universos diferentes.

## Comprobaciones rápidas

- Cada pareja de ramas desde un nodo suma 1.
- Cada probabilidad está entre 0 y 1.
- La suma de todas las rutas finales es 1.
- Sin reemplazo, el total de objetos disminuye.
- Una respuesta “al menos uno” puede calcularse como $1-P(\text{ninguno})$.

## Errores frecuentes

- Sumar probabilidades dentro de una ruta.
- Multiplicar rutas alternativas.
- Mantener el mismo denominador sin reemplazo.
- Confundir mutuamente excluyentes con independientes.
- Redondear cada rama antes del resultado final.

## De un árbol a una preparación GCSE completa

El campus virtual de Método Nebula conecta probabilidad, estadística y álgebra con ejemplos visuales, práctica graduada y preguntas de examen. Los árboles se trabajan primero como estructura y después como cálculo condicionado. El botón de contacto permite acceder a una ruta bilingüe con teoría, ejercicios y modelos resueltos.
