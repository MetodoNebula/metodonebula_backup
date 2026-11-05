---
title: Matemáticas II · PAU 2025 · Aragón — examen resuelto
seoTitle: Matemáticas II · PAU 2025 · Aragón — examen resuelto
date: 2025-10-18
updated: 2026-11-05
description: Examen de Matemáticas II de la PAU 2025 de Aragón resuelto paso a paso, incluidas todas sus opciones.
tag: Matemáticas II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: como-preparar-pau-matematicas-ii,pau-matematicas-matrices-determinantes-gauss,pau-matematicas-probabilidad-bayes
image: /favicon.svg
---

Este modelo reúne los enunciados y el desarrollo completo de cada alternativa. Haz una primera vuelta con el tiempo contado y corrige después atendiendo al primer paso que no pudiste justificar.

**Convocatoria:** ordinaria. **Formato:** la pregunta 1 era obligatoria; en las preguntas 2, 3 y 4 se elegía una de las dos opciones. Aquí están resueltas todas.

## Pregunta 1 · Cifrado con matrices

### Enunciado

Se codifica una palabra sustituyendo cada letra por su posición en el alfabeto y formando una matriz columna. Después se multiplica por

$$M_E=\begin{pmatrix}1&1&1&1\\-1&0&-1&-1\\-1&-1&0&-1\\-1&-1&-1&0\end{pmatrix}.$$

**a)** Cifra la palabra HOLA.

**b)** Explica cómo se descifra un mensaje.

**c)** Descifra $M_f=(30,-21,-25,-16)^t$.

**d)** Indica qué condición debe cumplir cualquier otra matriz de cifrado de este tamaño.

### Solución

Las letras de HOLA corresponden a $8$, $16$, $12$ y $1$, de forma que

$$M_C=\begin{pmatrix}8\\16\\12\\1\end{pmatrix}.$$

Multiplicamos fila a fila:

$$
M_EM_C=
\begin{pmatrix}37\\-21\\-25\\-36\end{pmatrix}.
$$

Así, el mensaje cifrado es $\boxed{(37,-21,-25,-36)^t}$.

Para deshacer el proceso hay que multiplicar por la inversa de la matriz de cifrado:

$$
M_C=M_E^{-1}M_f,\qquad
M_E^{-1}=\begin{pmatrix}-2&-1&-1&-1\\1&1&0&0\\1&0&1&0\\1&0&0&1\end{pmatrix}.
$$

Aplicamos esta matriz al mensaje del apartado c):

$$
M_E^{-1}\begin{pmatrix}30\\-21\\-25\\-16\end{pmatrix}
=\begin{pmatrix}2\\9\\5\\14\end{pmatrix}.
$$

Los números representan B, I, E y N, por lo que el mensaje original es $\boxed{\text{BIEN}}$.

La condición esencial del apartado d) es que la matriz sea invertible; dicho de otro modo, debe tener $\boxed{\det M\ne0}$.

## Pregunta 2.1 · Productos vectoriales

### Enunciado

Sean $u$ y $v$ vectores no nulos y perpendiculares de $\mathbb R^3$, y sea $w=u\times v$. Se definen

$$a=(u\times v)+w,\qquad b=v\times(v\times w),\qquad c=u\cdot(v\times w).$$

Indica cuáles son vectores y cuáles escalares, y establece sus relaciones de paralelismo o perpendicularidad con $u$, $v$ y $w$.

### Solución

Como $u\times v=w$, se tiene $a=w+w=2w$. Por tanto $a$ es un **vector**, paralelo a $w$ y perpendicular tanto a $u$ como a $v$.

La expresión $b$ también es un **vector**, pues procede de productos vectoriales. Usamos la identidad $v\times(v\times w)=v(v\cdot w)-w(v\cdot v)$. Como $v\perp w$, queda

$$b=-\lVert v\rVert^2w.$$

Así que $b$ es paralelo a $w$ y perpendicular a $u$ y a $v$.

Por último, $c$ es un producto escalar de $u$ con otro vector; por eso es un **escalar**. En concreto es un producto mixto, no un vector al que se le pueda pedir dirección.

## Pregunta 2.2 · Recta perpendicular y plano que contiene una recta

### Enunciado

**a)** Halla la recta que pasa por $P=(4,-3,0)$ y es perpendicular al plano $x-2y+z-1=0$.

**b)** Halla el plano que contiene a $Q=(1,2,3)$ y a la recta

$$r:\begin{cases}x+y+z=1,\\x-2y=0.\end{cases}$$

### Solución

**a)** El vector normal del plano es $(1,-2,1)$; esa es justamente la dirección que debe llevar la recta perpendicular. Por tanto,

$$\boxed{(x,y,z)=(4,-3,0)+\lambda(1,-2,1)}.$$

**b)** Dos puntos de $r$ son $A=(0,0,1)$ y $B=(4,2,-5)$. Por ello, un vector director de $r$ es

$$\overrightarrow{AB}=(4,2,-6).$$

También necesitamos conectar $A$ con $Q$: $\overrightarrow{AQ}=(1,2,2)$. Un normal del plano es el producto vectorial

$$\overrightarrow{AB}\times\overrightarrow{AQ}=(8,-7,3).$$

Usando que el plano pasa por $A$, resulta

$$8(x-0)-7(y-0)+3(z-1)=0,$$

es decir,

$$\boxed{8x-7y+3z-3=0}.$$

## Pregunta 3.1 · Mejor aproximación lineal

### Enunciado

Se aproxima $f(x)=e^x$ en $[0,1]$ mediante $g_m(x)=mx$. El error se define por

$$\operatorname{err}(m)=\int_0^1\bigl(e^x-mx\bigr)^2dx.$$

**a)** Comprueba que $\operatorname{err}(m)=\dfrac{e^2}{2}-\dfrac12-2m+\dfrac{m^2}{3}$.

**b)** Halla el valor de $m$ que minimiza el error y el valor mínimo.

### Solución

Desarrollamos el cuadrado antes de integrar:

$$\bigl(e^x-mx\bigr)^2=e^{2x}-2mxe^x+m^2x^2.$$

Las integrales necesarias son $\int_0^1e^{2x}dx=(e^2-1)/2$, $\int_0^1xe^x dx=1$ y $\int_0^1x^2dx=1/3$. De ahí sale

$$\operatorname{err}(m)=\frac{e^2}{2}-\frac12-2m+\frac{m^2}{3}.$$

Derivamos respecto de $m$:

$$\operatorname{err}'(m)=-2+\frac{2m}{3}.$$

Se anula en $m=3$. Además, $\operatorname{err}''(m)=2/3>0$, de modo que es un mínimo. Sustituyendo,

$$
\boxed{m=3},\qquad
\operatorname{err}(3)=\boxed{\frac{e^2-7}{2}}.
$$

## Pregunta 3.2 · Límite y área

### Enunciado

**a)** Calcula $\displaystyle\lim_{x\to0}\frac{x^2-\sin(x^2)}{1-\cos x}$.

**b)** Calcula el área encerrada por $f(x)=\cos^2x\sin x$ y el eje horizontal para $x\in[0,\pi]$.

### Solución

**a)** Cerca de cero, $\sin(x^2)=x^2-x^6/6+o(x^6)$ y $1-\cos x=x^2/2+o(x^2)$. Por tanto el numerador es de orden $x^6$, mientras que el denominador es de orden $x^2$:

$$\frac{x^2-\sin(x^2)}{1-\cos x}\sim\frac{x^6/6}{x^2/2}=\frac{x^4}{3}\longrightarrow\boxed0.$$

**b)** El signo cambia en $x=\pi/2$, pues $\sin x\ge0$ y el cuadrado del coseno nunca es negativo; en realidad la función es no negativa en todo el intervalo. Una primitiva es

$$\int\cos^2x\sin x\,dx=-\frac{\cos^3x}{3}.$$

Así, el área es

$$
\left[-\frac{\cos^3x}{3}\right]_0^\pi
=\frac13-\left(-\frac13\right)=\boxed{\frac23}.
$$

## Pregunta 4.1 · Cadena de movimientos

### Enunciado

Una ficha ocupa las casillas $1$, $2$ y $3$ de una fila. Con una moneda equilibrada se intenta mover a la izquierda con cara y a la derecha con cruz; si no hay casilla en esa dirección, se queda donde está.

**a)** Da las probabilidades de transición en un turno.

**b)** Si parte de la casilla 1, ¿cuál es la probabilidad de volver a 1 tras tres turnos?

**c)** Si inicialmente $P(1)=1/2$ y $P(2)=P(3)=1/4$, calcula la distribución tras dos turnos.

### Solución

La matriz de transición, en el orden $1,2,3$, es

$$T=\begin{pmatrix}1/2&1/2&0\\1/2&0&1/2\\0&1/2&1/2\end{pmatrix}.$$

Esto resume el apartado a): desde 1 se queda en 1 o va a 2 con probabilidad $1/2$; desde 2 va a 1 o 3 con $1/2$; desde 3 va a 2 o se queda en 3 con $1/2$.

Para b), la primera componente de $(1,0,0)T^3$ es $3/8$. Por tanto,

$$\boxed{P(X_3=1\mid X_0=1)=\frac38}.$$

Para c), partimos de $p_0=(1/2,1/4,1/4)$. Calculamos

$$p_2=p_0T^2=\left(\frac38,\frac5{16},\frac5{16}\right).$$

En consecuencia, tras dos turnos las probabilidades de estar en las casillas 1, 2 y 3 son, respectivamente,

$$\boxed{\frac38,\quad\frac5{16},\quad\frac5{16}}.$$

## Pregunta 4.2 · Probabilidad condicionada

### Enunciado

Dos sucesos verifican $P(A\mid B)=2/3$ y $P(B\mid A)=3/4$.

**a)** Si fueran independientes, calcula $P(A\cup B)$.

**b)** Si $P(A\cup B)=5/6$, calcula $P(A)$, $P(B)$ y $P(A\cup\overline B)$.

### Solución

**a)** Si son independientes, $P(A\mid B)=P(A)=2/3$ y $P(B\mid A)=P(B)=3/4$. Por tanto,

$$
P(A\cup B)=\frac23+\frac34-\frac23\cdot\frac34
=\boxed{\frac{11}{12}}.
$$

**b)** Llamemos $q=P(A\cap B)$. Las probabilidades condicionadas dan

$$P(B)=\frac32q,\qquad P(A)=\frac43q.$$

Usamos la unión conocida:

$$\frac56=P(A)+P(B)-q=\left(\frac43+\frac32-1\right)q=\frac{11}{6}q.$$

Así, $q=5/11$, y entonces

$$P(A)=\frac{20}{33},\qquad P(B)=\frac{15}{22}.$$

Finalmente,

$$
P(A\cup\overline B)=P(A)+P(\overline B)-P(A\cap\overline B)
=\frac{20}{33}+\frac7{22}-\left(\frac{20}{33}-\frac5{11}\right)
=\boxed{\frac{17}{22}}.
$$

## Cómo usar este examen

Si fallas una opción, no memorices el último número: vuelve al primer modelo que se ha usado (matriz, producto vectorial, derivada o probabilidad condicionada) y repite un ejercicio parecido al día siguiente.

Puedes practicar estas técnicas con itinerario, explicaciones y seguimiento en el [Campus de Método Nebula](/campus/).
