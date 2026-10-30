---
title: "Matemáticas GCSE: transformaciones y vectores sin perderte en el plano"
seoTitle: "Matemáticas GCSE: transformaciones y vectores"
date: "2026-10-19"
updated: "2026-10-19"
description: "Domina traslaciones, giros, simetrías, ampliaciones y vectores GCSE con notación correcta, centros y factores de escala."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-maths-algebra-graphs-revision,gcse-maths-trigonometry-bearings,gcse-maths-histograms-cumulative-frequency"
image: "/assets/latex/gcse-vector-transform.svg"
language: "es"
translation: "gcse-maths-transformations-vectors-en"
---

En transformaciones, una figura correcta puede recibir pocos puntos si falta la descripción completa. No basta con escribir “se mueve”: hay que nombrar la transformación y aportar los datos que la determinan.

> **Respuesta directa.** Una traslación necesita un vector; un giro, centro, ángulo y sentido; una simetría, su recta; una ampliación, centro y factor de escala. Los vectores describen desplazamientos y se suman componente a componente.

![Triángulo trasladado en una cuadrícula mediante un vector](/assets/latex/gcse-vector-transform.svg)

## Traslaciones

El vector

$$
\begin{pmatrix}5\\2\end{pmatrix}
$$

significa 5 unidades a la derecha y 2 hacia arriba. Cada vértice recibe exactamente el mismo desplazamiento.

No escribas coordenadas de destino como si fueran el vector. Calcula:

$$
\text{vector}=\text{punto final}-\text{punto inicial}.
$$

## Giros

Una descripción completa incluye:

- centro;
- ángulo;
- sentido horario o antihorario.

Para un giro de $90^\circ$, cada punto conserva su distancia al centro. Marca el centro, une un vértice y construye el ángulo antes de repetir con los demás.

## Simetrías

La recta de simetría es la mediatriz de cada segmento que une un punto con su imagen. Si te piden hallar la recta, une pares correspondientes y busca sus puntos medios.

Rectas como $x=2$, $y=-1$ o $y=x$ no se interpretan igual: dibújalas antes de reflejar.

## Ampliaciones

Con centro $C$ y factor $k$:

$$
\overrightarrow{CP'}=k\overrightarrow{CP}.
$$

- $k>1$: figura mayor.
- $0<k<1$: figura menor.
- $k<0$: la imagen queda al otro lado del centro.

Un factor negativo cambia tamaño y orientación relativa; no significa “factor imposible”.

## Vectores y recorridos

Si $\vec a=\binom{3}{1}$ y $\vec b=\binom{-2}{4}$:

$$
\vec a+\vec b=\begin{pmatrix}1\\5\end{pmatrix}.
$$

En geometría, dos rutas con el mismo inicio y final representan el mismo vector resultante. Esta idea permite justificar paralelismo y puntos medios sin medir.

## Ejemplo de razón vectorial

Si $M$ es el punto medio de $AB$:

$$
\overrightarrow{AM}=\frac12\overrightarrow{AB}.
$$

Si $\vec{OA}=\vec a$ y $\vec{OB}=\vec b$, entonces:

$$
\vec{OM}=\frac{\vec a+\vec b}{2}.
$$

## Invariantes que permiten comprobar el dibujo

Traslaciones, giros y simetrías conservan longitudes y ángulos; por eso se llaman transformaciones isométricas. Una ampliación conserva ángulos, pero multiplica cada longitud por $|k|$ y cada área por $k^2$. Si una figura ampliada con $k=3$ tiene un lado de 12 cm, el lado original medía 4 cm, mientras que el área de la imagen es nueve veces la original.

Estas propiedades detectan errores sin repetir toda la construcción. En una simetría, cada punto y su imagen deben estar a igual distancia de la recta. En un giro, ambos deben quedar a igual distancia del centro. En una traslación, los segmentos que unen puntos correspondientes son paralelos, iguales y con el mismo sentido.

## Demostración vectorial breve

Si $P$ divide el segmento $AB$ en la razón $AP:PB=2:1$, entonces recorre dos tercios del camino desde $A$ hasta $B$:

$$
\vec{OP}=\vec a+\frac23(\vec b-\vec a)
=\frac13\vec a+\frac23\vec b.
$$

La suma de los coeficientes es 1, lo que confirma que $P$ está en la recta $AB$. Para demostrar que dos segmentos son paralelos, basta obtener vectores que sean múltiplos escalares; para demostrar que también tienen igual longitud y sentido, los vectores deben ser iguales.

En preguntas de varios puntos, escribe cada igualdad y justifica la conclusión geométrica. Un resultado correcto sin enlace lógico puede perder la marca de razonamiento.

## Errores frecuentes

- Omitir el centro de giro o ampliación.
- Intercambiar componentes del vector.
- Usar signo positivo cuando el movimiento es hacia abajo o izquierda.
- Aplicar el factor de escala a coordenadas respecto al origen, aunque el centro sea otro.
- Describir una figura sin nombrar la transformación.

El campus de Método Nebula reúne geometría, coordenadas, transformaciones y vectores con ejemplos, práctica graduada y preguntas GCSE. Contacta si quieres una ruta que combine dibujo preciso y justificación algebraica.
