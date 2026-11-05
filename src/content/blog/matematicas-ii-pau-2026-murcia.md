---
title: Matemáticas II · PAU 2026 · Región de Murcia — examen resuelto
seoTitle: Matemáticas II · PAU 2026 · Región de Murcia — examen resuelto
date: 2026-10-04
updated: 2026-11-05
description: Examen Matemáticas II · PAU 2026 · Región de Murcia resuelto paso a paso con planteamientos, cálculos y comprobaciones para preparar la Selectividad.
tag: Matemáticas II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: como-preparar-pau-matematicas-ii,pau-matematicas-matrices-determinantes-gauss,pau-matematicas-integrales-areas
image: /favicon.svg
---

Este examen resuelto conserva el enunciado y desarrolla cada apartado. Úsalo primero a contrarreloj y compáralo después con el razonamiento, no solo con el resultado final.

**Convocatoria:** ordinaria. **Examen:** preguntas 1, 2 y 3 obligatorias; en las preguntas 4 y 5 se elige una de las dos opciones.

## Ejercicio 1 · Sistemas de ecuaciones

### Enunciado

Darío y Cayetana van a invertir 12 000 € en un negocio. Destinan $x$ miles de euros a publicidad, $y$ miles a materiales y $z$ miles a logística. Su plan exige que:

- La inversión total sea de 12 miles de euros.
- Publicidad más el doble de materiales sea igual a logística más un parámetro positivo $k$.
- El doble de publicidad, menos materiales y más logística, sume 4 miles de euros.

**a)** Escribe un sistema de tres ecuaciones que recoja estas condiciones. (0,75 puntos)

**b)** Comprueba cuántas soluciones tiene y, si es única, calcula las inversiones según $k$. (1,25 puntos)

### Solución

**a)** Las tres condiciones se traducen en

$$\begin{cases}x+y+z=12,\\x+2y-z=k,\\2x-y+z=4.\end{cases}$$

**b)** Para la matriz de coeficientes,

$$\det\begin{pmatrix}1&1&1\\1&2&-1\\2&-1&1\end{pmatrix}=-7\neq0.$$

El determinante es distinto de cero para cualquier $k$; por tanto, el sistema es **compatible determinado**. Aplicando Cramer, obtenemos

$$\boxed{x=\frac{2k}{7},\qquad y=\frac{k+28}{7},\qquad z=\frac{56-3k}{7}}.$$

## Ejercicio 2 · Optimización trigonométrica

### Enunciado

En una circunferencia de radio 10 centrada en el origen, elegimos un punto $P=(a,b)$ del primer cuadrante. El radio $OP$ forma un ángulo $x$ con el eje horizontal. Con los puntos $O=(0,0)$, $A=(a,0)$, $B=(0,b)$ y $P$ construimos un rectángulo.

**a)** Demuestra que su área se puede escribir como $f(x)=100\sin x\cos x$. (0,75 puntos)

**b)** ¿Qué ángulo, en radianes, permite conseguir el área más grande? (1,25 puntos)

### Solución

**a)** En el triángulo rectángulo, $\sin x=b/10$ y $\cos x=a/10$. De aquí, $a=10\cos x$ y $b=10\sin x$. El área del rectángulo es

$$f(x)=ab=(10\cos x)(10\sin x)=\boxed{100\sin x\cos x}.$$

**b)** Derivamos y localizamos los puntos críticos:

$$f'(x)=100(\cos^2x-\sin^2x)=100(2\cos^2x-1).$$

Igualamos a cero, teniendo en cuenta que $0<x<\pi/2$:

$$2\cos^2x-1=0\ \Longrightarrow\ \cos x=\frac{\sqrt2}{2}\ \Longrightarrow\ x=\frac\pi4.$$

La derivada es positiva antes de $\pi/4$ y negativa después, así que ahí se alcanza el máximo:

$$\boxed{x=\frac\pi4\text{ radianes}}.$$

## Ejercicio 3 · Recta y plano

### Enunciado

Dados el plano $\pi:2x-y+3z-5=0$ y la recta

$$r:\frac{x-1}{2}=\frac{y+1}{1}=\frac{z-2}{-1},$$

**a)** Explica cómo están situados uno respecto de la otra. (0,75 puntos)

**b)** Si se cortan, encuentra el punto y su ángulo; si son paralelos, calcula la distancia entre ambos. (1,25 puntos)

### Solución

**a)** El plano tiene vector normal $\vec n=(2,-1,3)$ y la recta vector director $\vec v=(2,1,-1)$. Su producto escalar es

$$\vec n\cdot\vec v=2\cdot2+(-1)\cdot1+3\cdot(-1)=4-1-3=0.$$

Así que la recta es paralela al plano o está contenida en él. Para distinguir estos casos, comprobamos el punto $P=(1,-1,2)$ de la recta:

$$2(1)-(-1)+3(2)-5=4\neq0.$$

Por ello, **la recta es paralela al plano, sin pertenecer a él**.

**b)** La distancia de una recta paralela a un plano coincide con la distancia de cualquiera de sus puntos al plano:

$$d(r,\pi)=d(P,\pi)=\frac{|2(1)-(-1)+3(2)-5|}{\sqrt{2^2+(-1)^2+3^2}}
=\frac4{\sqrt{14}}=\boxed{\frac{2\sqrt{14}}7}.$$


## Ejercicio 4.1 · Teorema de Rolle

### Enunciado

Justifica que la función $f(x)=e^x(x-1)+1-x$ tiene algún punto del intervalo $(0,1)$ en el que su derivada vale cero. (2 puntos)

### Solución

La función es continua en $[0,1]$ y derivable en $(0,1)$, al estar formada por operaciones con funciones continuas y derivables. Además,

$$f(0)=e^0(-1)+1=0,\qquad f(1)=e(0)+1-1=0.$$

Se cumplen las hipótesis del **teorema de Rolle**, así que existe al menos un $c\in(0,1)$ con $\boxed{f'(c)=0}$.

## Ejercicio 4.2 · Primitivas

### Enunciado

**a)** Resuelve $\displaystyle\int\frac{1}{x(\ln x)^2}\,dx$. (1,5 puntos)

**b)** De todas sus primitivas, encuentra la que pasa por el punto $(e,1)$. (0,5 puntos)

### Solución

**a)** Hacemos $t=\ln x$, con $dt=dx/x$:

$$\int\frac{1}{x(\ln x)^2}\,dx=\int t^{-2}\,dt=-\frac1t+C
=\boxed{-\frac1{\ln x}+C}.$$

**b)** Imponemos que $F(e)=1$:

$$1=-\frac1{\ln e}+C=-1+C\ \Longrightarrow\ C=2.$$

La primitiva buscada es $\boxed{F(x)=2-\frac1{\ln x}}$.


## Ejercicio 5.1 · Máquinas y piezas defectuosas

### Enunciado

Una fábrica utiliza tres máquinas. La A produce el 50 % de las piezas y tiene un 3 % de defectos; la B fabrica el 30 % y falla el 4 % de las veces; la C produce el 20 % y el 5 % de sus piezas son defectuosas. Elegimos una pieza al azar.

**a)** ¿Cuál es la probabilidad de que tenga un defecto? (0,75 puntos)

**b)** Si la pieza es defectuosa, ¿qué probabilidad hay de que sea de la máquina B? (0,75 puntos)

**c)** Si procede de la C, ¿qué probabilidad hay de que esté bien? (0,5 puntos)

### Solución

Denotamos por $D$ el suceso «pieza defectuosa».

**a)** Por probabilidad total:

$$P(D)=0{,}5\cdot0{,}03+0{,}3\cdot0{,}04+0{,}2\cdot0{,}05
=\boxed{0{,}037}.$$

**b)** Aplicamos Bayes:

$$P(B\mid D)=\frac{P(D\mid B)P(B)}{P(D)}
=\frac{0{,}04\cdot0{,}3}{0{,}037}
=\boxed{\frac{12}{37}\approx0{,}324}.$$

**c)** Basta con utilizar la probabilidad complementaria:

$$P(\overline D\mid C)=1-P(D\mid C)=1-0{,}05=\boxed{0{,}95}.$$

## Ejercicio 5.2 · Distribución binomial y aproximación normal

### Enunciado

En una fábrica, el 5 % de las bombillas sale defectuoso.

**a)** Si seleccionamos 9 bombillas, ¿qué probabilidad hay de encontrar exactamente 3 defectuosas? (0,75 puntos)

**b)** Si elegimos 200 bombillas, calcula aproximadamente la probabilidad de que al menos 10 sean defectuosas. (1,25 puntos)

### Solución

**a)** El número de defectuosas sigue una binomial $X\sim B(9,0{,}05)$. Por tanto,

$$P(X=3)=\binom93(0{,}05)^3(0{,}95)^6=\boxed{0{,}0077}.$$

**b)** Ahora $X\sim B(200,0{,}05)$. Como $np=10$ y $n(1-p)=190$, aproximamos con una normal de media $\mu=10$ y desviación típica

$$\sigma=\sqrt{np(1-p)}=\sqrt{9{,}5}\approx3{,}082.$$

Aplicamos la **corrección por continuidad** para $P(X\ge10)$:

$$\begin{aligned}
P(X\ge10)&\approx P(Y\ge9{,}5)\\
&=P\left(Z\ge\frac{9{,}5-10}{3{,}082}\right)
=P(Z\ge-0{,}16)\\
&=P(Z\le0{,}16)=\boxed{0{,}5636}.
\end{aligned}$$

## Cómo usar este examen para preparar la PAU

Haz una primera vuelta sin consultar la solución. Al corregir, señala el primer paso que no supiste justificar y repítelo al día siguiente. Así conviertes un modelo de examen en una lista concreta de técnicas que debes entrenar.

Si quieres trabajar estos bloques con una ruta de práctica, explicaciones y seguimiento, tienes el [Campus de Método Nebula](/campus/).

