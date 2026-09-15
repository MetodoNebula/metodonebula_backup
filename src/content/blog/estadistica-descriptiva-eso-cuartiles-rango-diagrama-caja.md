---
title: "Estadística descriptiva en ESO II: rango, cuartiles y diagrama de caja"
date: "2026-09-15"
updated: "2026-09-15"
description: "Continúa Estadística de ESO con rango, cuartiles, recorrido intercuartílico y diagramas de caja, explicados con ejemplos y ejercicios resueltos."
tag: "ESO"
category: "Estadística"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "estadistica-descriptiva-eso-media-mediana-moda,como-estudiar-matematicas-sin-memorizar,estadistica-desde-cero-para-elegir-contrastes"
image: "/assets/latex/diagrama-caja-rango-eso.svg"
---

Esta es la continuación de la guía de [estadística descriptiva en ESO: media, mediana, moda y frecuencias](/blog/estadistica-descriptiva-eso-media-mediana-moda/). Allí resumimos un grupo con un valor central; aquí damos el siguiente paso: medir cuánto se separan los datos y localizar qué ocurre en sus distintas zonas.

Dos grupos pueden tener la misma media y comportarse de forma muy distinta. El **rango** muestra la distancia entre el dato menor y el mayor. Los **cuartiles** dividen los datos ordenados en cuatro partes y ayudan a saber dónde está el 50 % central. El **diagrama de caja** reúne esas ideas en un dibujo sencillo.

## Antes de empezar: ordenar no es opcional

Para calcular media no importa el orden de una lista. Para mediana, cuartiles o percentiles, sí importa. Por eso el primer paso es siempre ordenar de menor a mayor.

Usaremos los minutos que diez estudiantes leen cada semana:

$$
9,4,12,7,10,5,13,8,11,6.
$$

Ordenados quedan así:

$$
4,5,6,7,8,9,10,11,12,13.
$$

Trabajaremos con esta lista durante toda la guía. Tener un solo ejemplo evita perderse entre cálculos nuevos y permite comprobar que cada número sale de los mismos datos.

## El rango: una medida rápida de dispersión

La media, mediana y moda describen una posición o un valor habitual. El **rango** —también llamado recorrido— describe la amplitud de los datos:

$$
\text{rango}=\text{valor máximo}-\text{valor mínimo}.
$$

En la lista de lectura, el mínimo es $4$ y el máximo es $13$. Por tanto:

$$
\text{rango}=13-4=9.
$$

El rango es de $9$ minutos. Eso no significa que cada estudiante se diferencie nueve minutos de los demás: significa que hay nueve minutos entre el caso más bajo y el más alto.

### Qué nos dice y qué no nos dice el rango

El rango es fácil y útil para una primera comparación. Si el grupo A tiene rango $3$ y el grupo B tiene rango $15$, los datos del grupo B están más extendidos entre sus extremos.

Pero utiliza solo dos datos: el mínimo y el máximo. Observa estos dos conjuntos:

$$
A: 4,7,7,7,7,7,7,10
$$

$$
B: 4,5,6,7,8,9,10,10.
$$

Los dos tienen rango $10-4=6$, pero no se reparten igual. En A casi todos los valores se amontonan alrededor de $7$; en B están más distribuidos. Para describir mejor la parte central necesitamos los cuartiles.

## Qué son los cuartiles

Los **cuartiles** son tres valores que, tras ordenar los datos, los separan aproximadamente en cuatro grupos del mismo tamaño:

- **Primer cuartil**, $Q_1$: deja aproximadamente el 25 % de los datos por debajo.
- **Segundo cuartil**, $Q_2$: es la mediana; deja aproximadamente el 50 % por debajo.
- **Tercer cuartil**, $Q_3$: deja aproximadamente el 75 % de los datos por debajo.

Una buena imagen mental es una fila de alumnos ordenada por una característica. La mediana busca el centro de toda la fila. $Q_1$ busca el centro de la mitad de abajo y $Q_3$, el centro de la mitad de arriba.

En algunos libros pueden aparecer reglas ligeramente distintas para calcular cuartiles cuando el número de datos no encaja de forma exacta. En ESO, sigue siempre el método que use tu profesor. Lo importante es ordenar primero, dividir de forma coherente y explicar qué parte de los datos representa cada cuartil.

## Cómo calcular $Q_1$, mediana y $Q_3$ paso a paso

Partimos de los diez tiempos ordenados:

$$
4,5,6,7,8,9,10,11,12,13.
$$

### 1. Hallar la mediana, que es $Q_2$

Hay diez datos, un número par. Los dos centrales son el quinto y el sexto: $8$ y $9$.

$$
Q_2=\text{mediana}=\frac{8+9}{2}=8{,}5.
$$

### 2. Dividir la lista en dos mitades

La mitad inferior contiene los cinco primeros valores:

$$
4,5,6,7,8.
$$

La mitad superior contiene los cinco últimos:

$$
9,10,11,12,13.
$$

Como la mediana no es un dato de la lista en este caso, no hay duda: cada mitad tiene cinco datos.

### 3. Buscar el centro de cada mitad

El centro de la mitad inferior es $6$, así que:

$$
Q_1=6.
$$

El centro de la mitad superior es $11$, así que:

$$
Q_3=11.
$$

![Lista de diez datos ordenados, dividida en mitad inferior y superior, con Q1 igual a seis, mediana igual a ocho coma cinco y Q3 igual a once](/assets/latex/cuartiles-datos-ordenados-eso.svg)

En el ejemplo quedan cuatro zonas fáciles de leer:

| Zona | Valores o límites | Qué representa |
|---|---|---|
| Desde el mínimo hasta $Q_1$ | de 4 a 6 | El primer cuarto de los datos |
| Entre $Q_1$ y la mediana | de 6 a 8,5 | El segundo cuarto |
| Entre la mediana y $Q_3$ | de 8,5 a 11 | El tercer cuarto |
| Desde $Q_3$ hasta el máximo | de 11 a 13 | El último cuarto |

Los cuartiles no obligan a que haya exactamente el mismo número entero de datos en cada intervalo. Son puntos de corte que resumen una posición dentro de una lista.

## Recorrido intercuartílico: la amplitud de la zona central

El **recorrido intercuartílico** se abrevia a veces como RIC y mide la distancia entre el tercer y el primer cuartil:

$$
RIC=Q_3-Q_1.
$$

En nuestro ejemplo:

$$
RIC=11-6=5.
$$

El 50 % central de los tiempos está en un intervalo de cinco minutos, entre $6$ y $11$. Esta medida es especialmente útil porque no depende tanto de los valores extremos como el rango.

Compara:

- El rango usa solo $4$ y $13$: vale $9$.
- El RIC usa la zona central, de $6$ a $11$: vale $5$.

Si un día un estudiante leyera $60$ minutos, el rango crecería mucho. En cambio, $Q_1$ y $Q_3$ podrían permanecer iguales si el resto de los datos no cambia. Por eso los cuartiles ayudan a describir el grupo habitual sin que un caso excepcional domine el resumen.

## Cómo leer un diagrama de caja

Un **diagrama de caja y bigotes** representa cinco números:

1. mínimo;
2. $Q_1$;
3. mediana;
4. $Q_3$;
5. máximo.

La caja empieza en $Q_1$ y termina en $Q_3$. La línea dentro de la caja es la mediana. Los segmentos que salen a izquierda y derecha, llamados bigotes, conectan con el mínimo y el máximo en este nivel introductorio.

![Diagrama de caja para datos con mínimo cuatro, Q1 seis, mediana ocho coma cinco, Q3 once y máximo trece](/assets/latex/diagrama-caja-rango-eso.svg)

Este diagrama permite afirmar, sin mirar la lista completa, que:

- los datos van desde $4$ hasta $13$;
- la mitad de los datos está entre $6$ y $11$;
- el centro se sitúa en $8{,}5$;
- el intervalo entre $Q_1$ y $Q_3$ mide $5$.

No midas la anchura de la caja en píxeles: lee los valores de la escala. Una caja más ancha indica más dispersión solo si los dos diagramas usan la misma escala horizontal.

## Comparar dos grupos con un diagrama de caja

Imagina dos grupos que han hecho el mismo ejercicio de lectura. Ambos tienen mediana $8{,}5$ minutos, pero sus resúmenes son:

| Grupo | Mínimo | $Q_1$ | Mediana | $Q_3$ | Máximo |
|---|---:|---:|---:|---:|---:|
| A | 4 | 6 | 8,5 | 11 | 13 |
| B | 1 | 7 | 8,5 | 10 | 17 |

Los dos grupos comparten mediana: el valor central es igual. Sin embargo:

$$
RIC_A=11-6=5
$$

$$
RIC_B=10-7=3.
$$

El 50 % central de B está más concentrado. Pero B tiene extremos más alejados, pues su rango es $17-1=16$, frente al rango $9$ de A. Para comparar con cuidado conviene mirar tanto la caja como los bigotes; una sola medida no cuenta toda la historia.

## Errores frecuentes

### Calcular cuartiles con los datos desordenados

Los cuartiles describen posiciones. Si no ordenas, «el dato central» no tiene significado estadístico.

### Confundir $Q_1$ con el dato mínimo

$Q_1$ no es el primer dato: marca aproximadamente el 25 % de la lista. En el ejemplo, el mínimo es $4$ y $Q_1$ es $6$.

### Olvidar que $Q_2$ es la mediana

No hace falta hacer dos cálculos distintos. El segundo cuartil y la mediana son el mismo punto de corte.

### Decir que la caja contiene todos los datos

La caja contiene el 50 % central, no el 100 %. Los bigotes muestran lo que queda hacia el mínimo y el máximo.

### Confundir rango y recorrido intercuartílico

El rango va de mínimo a máximo. El RIC va de $Q_1$ a $Q_3$. El primero mira toda la amplitud; el segundo, la zona central.

## Ejercicios para practicar

### 1. Rango

Las temperaturas máximas de una semana fueron:

$$
18,21,19,23,20,22,17.
$$

Calcula el rango.

### 2. Cuartiles en una lista de diez datos

Ordena y calcula $Q_1$, $Q_2$ y $Q_3$ de:

$$
14,8,10,12,6,11,7,9,13,5.
$$

### 3. Recorrido intercuartílico

En un grupo se ha calculado $Q_1=18$ y $Q_3=27$. Halla el RIC e interpreta el resultado.

### 4. Leer un resumen de cinco números

Un diagrama de caja tiene mínimo $2$, $Q_1=5$, mediana $7$, $Q_3=9$ y máximo $14$. Indica el rango y el RIC.

### 5. Elegir la afirmación correcta

Si un grupo tiene $Q_1=10$ y $Q_3=18$, ¿cuál es correcta?

- A. Todos los datos están entre 10 y 18.
- B. El 50 % central de los datos está entre 10 y 18.
- C. La media vale 14.

## Soluciones razonadas

### Solución 1

El mínimo es $17$ y el máximo es $23$. Luego:

$$
\text{rango}=23-17=6.
$$

Las temperaturas se extienden seis grados entre los extremos de la semana.

### Solución 2

La lista ordenada es:

$$
5,6,7,8,9,10,11,12,13,14.
$$

Los dos valores centrales son $9$ y $10$, por lo que:

$$
Q_2=9{,}5.
$$

Las mitades son $5,6,7,8,9$ y $10,11,12,13,14$. Sus centros son $7$ y $12$. Por tanto:

$$
Q_1=7,qquad Q_2=9{,}5,qquad Q_3=12.
$$

### Solución 3

$$
RIC=27-18=9.
$$

El 50 % central de los datos ocupa un intervalo de nueve unidades, desde $18$ hasta $27$.

### Solución 4

$$
\text{rango}=14-2=12
$$

$$
RIC=9-5=4.
$$

El conjunto completo se extiende doce unidades, mientras que la mitad central se concentra en una amplitud de cuatro.

### Solución 5

La respuesta correcta es la B. $Q_1$ y $Q_3$ delimitan la mitad central de los datos. No permiten saber que todos estén en ese intervalo ni calculan por sí solos la media.

## Resumen para estudiar

Ordena antes de localizar posiciones. El rango es máximo menos mínimo; los cuartiles sitúan el 25 %, 50 % y 75 % de la lista; el RIC es $Q_3-Q_1$. En un diagrama de caja, los extremos y los bigotes muestran el recorrido total, mientras que la caja muestra el 50 % central.

Si aún no dominas las medidas básicas, empieza por la guía de [media, mediana, moda y frecuencias](/blog/estadistica-descriptiva-eso-media-mediana-moda/) y vuelve después a estos ejercicios. Para crear una rutina de práctica que no dependa de memorizar pasos, puede ayudarte la guía de [cómo estudiar matemáticas sin memorizar](/blog/como-estudiar-matematicas-sin-memorizar/).

Si necesitas practicar Estadística o Matemáticas de ESO con ejercicios de tu temario, puedes consultar las [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/).
