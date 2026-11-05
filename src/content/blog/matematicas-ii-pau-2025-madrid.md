---
title: PAU 2025 Matemáticas II: examen resuelto de Madrid
seoTitle: PAU 2025 Matemáticas II Madrid: examen resuelto
date: 2026-10-20
updated: 2026-11-05
description: Examen PAU 2025 de Matemáticas II de Madrid, con todos los enunciados y soluciones desarrolladas de álgebra, análisis, geometría y probabilidad.
tag: Matemáticas II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: como-preparar-pau-matematicas-ii,pau-matematicas-matrices-determinantes-gauss,pau-matematicas-integrales-areas
image: /favicon.svg
---

Este modelo reúne todos los ejercicios y todas las alternativas. Para aprovecharlo de verdad, intenta cada bloque antes de abrir la solución y compárala paso a paso: lo importante no es solo llegar al número final, sino saber por qué se llega a él.

## Bloque 1 · Álgebra

### Ejercicio 1.1 · Lanzamientos en baloncesto

Un equipo anotó 80 puntos mediante tiros de uno, dos y tres puntos. Sus porcentajes de acierto fueron, respectivamente, del 80 %, 50 % y 40 %. Además, un tercio de los lanzamientos de dos puntos coincidió con un quinto del resto de lanzamientos, y el doble de los tiros de tres fue cinco unidades menor que la suma de los otros tiros. Determina cuántos lanzamientos realizó de cada tipo.

#### Solución

Llamamos \(x\), \(y\) y \(z\) a los lanzamientos de uno, dos y tres puntos. Los puntos anotados son \(0{,}8x+2\cdot0{,}5y+3\cdot0{,}4z=80\). Al multiplicar por 5 queda:

$$4x+5y+6z=400.$$

La segunda condición dice \(y/3=(x+z)/5\), es decir:

$$3x-5y+3z=0.$$

Y la tercera se traduce en \(x+y-2z=5\). Por tanto resolvemos:

$$
\begin{cases}
4x+5y+6z=400,\\
3x-5y+3z=0,\\
x+y-2z=5.
\end{cases}
$$

Al resolver el sistema obtenemos:

$$\boxed{x=25,\qquad y=30,\qquad z=25.}$$

El equipo lanzó 25 tiros de un punto, 30 de dos puntos y 25 de tres puntos.

### Ejercicio 1.2 · Polinomio característico y vector propio

Sea

$$A=\begin{pmatrix}4&1&0\\2&3&0\\3&2&2\end{pmatrix}.$$

Calcula \(P(\lambda)=\det(A-\lambda I)\), sus raíces reales y, para \(\lambda=5\), un vector no nulo que satisfaga \((A-5I)v=0\).

#### Solución

Empezamos formando \(A-\lambda I\):

$$
P(\lambda)=
\begin{vmatrix}
4-\lambda&1&0\\
2&3-\lambda&0\\
3&2&2-\lambda
\end{vmatrix}.
$$

Al desarrollar el determinante resulta:

$$
P(\lambda)=-\lambda^3+9\lambda^2-24\lambda+20
=(2-\lambda)(\lambda^2-7\lambda+10).
$$

Por tanto:

$$\boxed{\lambda=2\text{ (raíz doble)}\quad\text{y}\quad\lambda=5.}$$

Para \(\lambda=5\), el sistema homogéneo \((A-5I)v=0\) tiene infinitas soluciones. Si llamamos \(t\) al parámetro libre, queda:

$$
(x,y,z)=\left(t,t,\frac53t\right).
$$

Tomando \(t=3\), por ejemplo, obtenemos el vector no nulo:

$$\boxed{v=(3,3,5).}$$

## Bloque 2 · Análisis

### Ejercicio 2 · Regiones de un muro

En un muro de 12 m de ancho y 3 m de alto se dibuja la curva

$$f(x)=\cos\left(\frac{\pi x}{9}\right)+2,\qquad 0\le x\le12.$$

Calcula el máximo y el mínimo de la función, comprueba si la curva cabe en el muro, halla las áreas a ambos lados de la curva y determina cuántos botes de 3 m² hacen falta para pintar la región inferior.

#### Solución

Como el coseno siempre está entre \(-1\) y \(1\), al sumar 2 obtenemos:

$$\boxed{1\le f(x)\le3.}$$

La curva nunca baja de 1 ni supera 3, así que queda completamente dentro de la altura del muro.

Para el área inferior integramos:

$$
\begin{aligned}
A_{\text{inf}}
&=\int_0^{12}\left[\cos\left(\frac{\pi x}{9}\right)+2\right]\,dx\\
&=\left[\frac9\pi\sin\left(\frac{\pi x}{9}\right)+2x\right]_0^{12}\\
&=24+\frac9\pi\sin\left(\frac{4\pi}{3}\right)
\approx21{,}52\text{ m}^2.
\end{aligned}
$$

El muro completo mide \(12\cdot3=36\text{ m}^2\). Por eso el área superior es:

$$\boxed{A_{\text{sup}}=36-A_{\text{inf}}\approx14{,}48\text{ m}^2.}$$

Cada bote cubre 3 m². Para la zona inferior se necesitan \(21{,}52/3\approx7{,}17\) botes; como no se puede comprar una fracción:

$$\boxed{8\text{ botes}.}$$

## Bloque 3 · Geometría

### Ejercicio 3.1 · Recta y plano

Sean

$$r:\frac{x-1}{2}=\frac y0=\frac{z-2}{1},\qquad \pi:x+2y-3z=1.$$

Calcula: un plano que contenga a \(r\) y sea perpendicular a \(\pi\); una recta contenida en \(\pi\) que corte perpendicularmente a \(r\); y los puntos de \(r\) situados a distancia \(\sqrt{14}\) del plano.

#### Solución

La recta pasa por \(P=(1,0,2)\) y tiene vector director \(u=(2,0,1)\). El plano \(\pi\) tiene normal \(n=(1,2,-3)\). Un plano que contenga \(r\) y sea perpendicular a \(\pi\) puede generarse con \(u\) y \(n\). Su ecuación cartesiana es:

$$\boxed{2x-7y-4z+6=0.}$$

Para la recta pedida en el apartado b, primero cortamos \(r\) con \(\pi\). Escribiendo \(r=(1+2\lambda,0,2+\lambda)\), la sustitución da \(\lambda=-6\), luego el punto de corte es \((-11,0,-4)\).

Su dirección debe ser perpendicular tanto a \(u\) como a \(n\), así que usamos:

$$u\times n=(2,0,1)\times(1,2,-3)=(-2,7,4).$$

Por tanto, una ecuación de la recta es:

$$\boxed{\frac{x+11}{-2}=\frac y7=\frac{z+4}{4}.}$$

Para el último apartado, un punto genérico de \(r\) es \(P_\lambda=(1+2\lambda,0,2+\lambda)\). Su distancia a \(\pi\) vale:

$$
\frac{|(1+2\lambda)-3(2+\lambda)-1|}{\sqrt{1^2+2^2+(-3)^2}}
=\frac{|-\lambda-6|}{\sqrt{14}}.
$$

Al igualarla a \(\sqrt{14}\), queda \(|-\lambda-6|=14\), de donde \(\lambda=-20\) o \(\lambda=8\). Los puntos son:

$$\boxed{(-39,0,-18)\quad\text{y}\quad(17,0,10).}$$

### Ejercicio 3.2 · Distancia a un plano

Dados \(P=(0,1,1)\) y el plano \(\pi:x+y=2\), calcula la distancia de \(P\) a \(\pi\), el punto \(Q\) de \(\pi\) que está a esa misma distancia de \(P\), y el área del triángulo formado por \(P\) y los cortes de \(\pi\) con los ejes.

#### Solución

Escribimos el plano como \(x+y-2=0\). La distancia de \(P\) al plano es:

$$
d(P,\pi)=\frac{|0+1-2|}{\sqrt{1^2+1^2+0^2}}
=\boxed{\frac{\sqrt2}{2}}.
$$

La recta que parte de \(P\) y es perpendicular al plano tiene como dirección el vector normal \((1,1,0)\):

$$
(x,y,z)=(\lambda,1+\lambda,1).
$$

Al imponer \(x+y=2\), obtenemos \(2\lambda+1=2\), luego \(\lambda=1/2\). Así:

$$\boxed{Q=\left(\frac12,\frac32,1\right).}$$

El plano corta a los ejes \(x\) e \(y\) en \(A=(2,0,0)\) y \(B=(0,2,0)\). Por producto vectorial:

$$
\text{Área}=\frac12\left\|\overrightarrow{PA}\times\overrightarrow{PB}\right\|
=\boxed{3}.
$$

## Bloque 4 · Probabilidad

### Ejercicio 4.1 · Espacio muestral

Sea \(E=\{2,3,5,7,11,13,17,19\}\). Se sabe que \(P(3)=P(7)=1/4\) y que los otros seis resultados son equiprobables. Para

$$A=\{7,11,13,19\},\quad B=\{2,5,7,13,17\},\quad C=\{3,5,7,11,13\},$$

calcula \(P((A-C)\cap B)\) y \(P((A\cap B)\mid C)\).

#### Solución

Si \(x\) es la probabilidad de cada uno de los seis resultados restantes:

$$2\cdot\frac14+6x=1\quad\Longrightarrow\quad x=\frac1{12}.$$

Como \(A-C=\{19\}\), al intersectar con \(B\) queda el conjunto vacío:

$$\boxed{P((A-C)\cap B)=0.}$$

Además, \(A\cap B=\{7,13\}\), pero ninguno de esos resultados pertenece al complemento de \(C\). Por tanto la intersección necesaria para la probabilidad condicionada es vacía y:

$$\boxed{P((A\cap B)\mid C)=0.}$$

### Ejercicio 4.2 · Lectura habitual

En una población, el 20 % tiene entre 14 y 24 años, el 50 % entre 25 y 64 y el 30 % restante supera los 64. Dentro de cada grupo, las probabilidades de ser lector habitual son 0,74; 0,658 y 0,537. Calcula la probabilidad de escoger a un lector habitual y, sabiendo que una persona no lo es, la probabilidad de que tenga entre 25 y 64 años.

#### Solución

Llamamos \(D\) al suceso “ser lector habitual”. Por probabilidad total:

$$
\begin{aligned}
P(D)
&=0{,}74\cdot0{,}20+0{,}658\cdot0{,}50+0{,}537\cdot0{,}30\\
&=\boxed{0{,}6381}.
\end{aligned}
$$

Para la segunda pregunta usamos Bayes con el suceso “no ser lector habitual”:

$$
\begin{aligned}
P(25\text{-}64\mid D^c)
&=\frac{P(D^c\mid25\text{-}64)\,P(25\text{-}64)}{P(D^c)}\\
&=\frac{(1-0{,}658)\cdot0{,}50}{1-0{,}6381}\\
&\approx\boxed{0{,}4725}.
\end{aligned}
$$

Por tanto, entre quienes no son lectores habituales, aproximadamente el 47,25 % tiene entre 25 y 64 años.

## Cómo usar este modelo para preparar la PAU

Haz primero un bloque de cada pareja de alternativas y marca el primer paso que no hayas sabido justificar. Cuando lo repases, intenta explicar ese paso con tus propias palabras: es la forma más rápida de detectar si realmente dominas el método.

Si quieres organizar la práctica por bloques, corregir errores recurrentes y avanzar con una ruta de estudio, puedes hacerlo en el [Campus de Método Nebula](/campus/).
