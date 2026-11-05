---
title: Matemáticas II · PAU 2025 · Murcia — examen resuelto
seoTitle: Matemáticas II · PAU 2025 · Murcia — examen resuelto
date: 2025-10-22
updated: 2026-11-05
description: Examen de Matemáticas II de la PAU 2025 de Murcia con todos los enunciados y soluciones desarrolladas paso a paso.
tag: Matemáticas II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: como-preparar-pau-matematicas-ii,pau-matematicas-matrices-determinantes-gauss,pau-matematicas-probabilidad-bayes
image: /favicon.svg
---

Este artículo reúne las dos opciones de las cuatro cuestiones. Conserva cada enunciado y transforma la resolución en pasos que puedes reutilizar en ejercicios parecidos.

## Cuestión 1A · Sistema de salarios

### Enunciado

Tres músicos cobran $x$, $y$ y $z$. El primero cobra $m$ veces lo que cobra el segundo, el segundo cobra el doble que el tercero y $mz+x+y=600$, con $m>0$.

**a)** Plantea el sistema. **b)** Justifica que los sueldos quedan determinados. **c)** Obtén los sueldos en función de $m$ y para $m=2$.

### Solución

El sistema que traduce literalmente los datos es

$$\begin{cases}x-my=0,\\y-2z=0,\\x+y+mz=600.\end{cases}$$

Su matriz de coeficientes tiene determinante $3m+2$. Como $m>0$, este valor es positivo y nunca se anula; por tanto el sistema tiene una única solución.

De $y=2z$ y $x=my=2mz$, la última ecuación se convierte en $(3m+2)z=600$. Así,

$$\boxed{x=\frac{1200m}{3m+2},\quad y=\frac{1200}{3m+2},\quad z=\frac{600}{3m+2}}.$$

Para $m=2$ se obtiene $\boxed{x=300,\ y=150,\ z=75}$, es decir, 300 €, 150 € y 75 €.

## Cuestión 1B · Ecuación matricial

### Enunciado

Sean

$$A=\begin{pmatrix}2&1\\1&3\end{pmatrix},\quad B=\begin{pmatrix}1&0\\2&1\end{pmatrix},\quad C=\begin{pmatrix}5&0\\5&0\end{pmatrix}.$$

**a)** Comprueba que $A$ y $B$ son invertibles y calcula sus inversas.

**b)** Resuelve $A^tXB=C$.

### Solución

Los determinantes son $\det A=5$ y $\det B=1$, así que ambas matrices son invertibles. Aplicando la fórmula de la inversa de una matriz $2\times2$:

$$
A^{-1}=\begin{pmatrix}3/5&-1/5\\-1/5&2/5\end{pmatrix},\qquad
B^{-1}=\begin{pmatrix}1&0\\-2&1\end{pmatrix}.
$$

Como $A$ es simétrica, $A^t=A$. Multiplicamos la ecuación por $A^{-1}$ a la izquierda y por $B^{-1}$ a la derecha:

$$
X=A^{-1}CB^{-1}
=\boxed{\begin{pmatrix}2&0\\1&0\end{pmatrix}}.
$$

## Cuestión 2A · Triángulo de área máxima

### Enunciado

Un triángulo rectángulo tiene catetos $x$ e $y$ e hipotenusa $7\sqrt2$ cm.

**a)** Expresa su área en función de $x$.

**b)** Encuentra las dimensiones que maximizan el área y el área máxima.

### Solución

Por Pitágoras, $x^2+y^2=98$, de modo que $y=\sqrt{98-x^2}$. El área es

$$f(x)=\frac12x\sqrt{98-x^2}.$$

Derivamos:

$$f'(x)=\frac{98-2x^2}{2\sqrt{98-x^2}}.$$

En el intervalo físico $0<x<7\sqrt2$, el denominador es positivo. El único punto crítico es $x=7$; la derivada pasa de positiva a negativa, así que da un máximo. Entonces $y=\sqrt{98-49}=7$.

$$\boxed{x=y=7\text{ cm},\qquad A_{\max}=\frac{7\cdot7}{2}=24{,}5\text{ cm}^2}.$$

## Cuestión 2B · Integral logarítmica y área

### Enunciado

Sea $f(x)=\ln\left(\dfrac{x+1}{x}\right)$.

**a)** Calcula una primitiva.

**b)** Comprueba que el área bajo su gráfica entre $x=1$ y $x=2$ es $\ln(27/16)$.

### Solución

Integramos por partes, con $u=\ln((x+1)/x)$ y $dv=dx$. Como $du=-dx/[x(x+1)]$, queda

$$
\int\ln\left(\frac{x+1}{x}\right)dx
=x\ln\left(\frac{x+1}{x}\right)+\ln(x+1)+C.
$$

En $[1,2]$ la función es positiva, así que el área es la integral definida:

$$
\begin{aligned}A&=\left[x\ln\left(\frac{x+1}{x}\right)+\ln(x+1)\right]_1^2\\
&=3\ln3-4\ln2=\boxed{\ln\left(\frac{27}{16}\right)}.
\end{aligned}
$$

## Cuestión 3A · Rectas cruzadas

### Enunciado

Considera

$$
r:(x,y,z)=(1,5+\lambda,\lambda),\qquad
s:(x,y,z)=(7+3\mu,-5+\mu,7).
$$

**a)** Comprueba que se cruzan. **b)** Halla su perpendicular común. **c)** Calcula su distancia.

### Solución

Sus vectores directores son $d_r=(0,1,1)$ y $d_s=(3,1,0)$, que no son proporcionales. Si se cortaran, la coordenada $x$ exigiría $\mu=-2$ y la coordenada $z$ exigiría $\lambda=7$; al usar la coordenada $y$ aparece una contradicción. Por tanto, no son paralelas ni se cortan: son rectas cruzadas.

Tomamos $P\in r$ y $Q\in s$ y exigimos que $\overrightarrow{PQ}$ sea perpendicular a ambas direcciones. Se obtiene $\lambda=-2$ y $\mu=-1$, de modo que

$$P=(1,3,-2),\qquad Q=(4,-6,7),\qquad \overrightarrow{PQ}=(3,-9,9).$$

Una dirección equivalente es $(1,-3,3)$; la perpendicular común es

$$\boxed{t:(x,y,z)=(1,3,-2)+\gamma(1,-3,3)}.$$

Su longitud entre los puntos de corte es

$$d(r,s)=\sqrt{3^2+(-9)^2+9^2}=\boxed{3\sqrt{19}}.$$

## Cuestión 3B · Planos y proyección ortogonal

### Enunciado

Sean $\pi_1:x-y+z=0$ y $\pi_2:x+y-z=2$.

**a)** Halla su recta de intersección.

**b)** Halla una recta por $P=(1,2,3)$ que no corte a ninguno de los planos.

**c)** Calcula la proyección ortogonal de $P$ sobre $\pi_1$.

### Solución

Al sumar las ecuaciones de los planos resulta $2x=2$, luego $x=1$. Tomando $z=\lambda$, sale $y=1+\lambda$:

$$\boxed{r:(x,y,z)=(1,1,0)+\lambda(0,1,1)}.$$

Una recta paralela a esa intersección no corta los planos si no está contenida en ellos. La que pasa por $P$ es

$$\boxed{(x,y,z)=(1,2,3)+\lambda(0,1,1)}.$$

El normal de $\pi_1$ es $(1,-1,1)$. La perpendicular por $P$ se escribe $(1,2,3)+t(1,-1,1)$. Al imponer la ecuación del plano, $2+3t=0$, por lo que $t=-2/3$. Así,

$$\boxed{P'=\left(\frac13,\frac83,\frac73\right)}.$$

## Cuestión 4A · Dos urnas

### Enunciado

La urna 1 contiene 2 bolas rojas y 3 verdes; la urna 2, 6 rojas y 3 verdes. Se pasa una bola de la urna 1 a la 2 y se extrae después una bola de la urna 2.

Calcula: **a)** $P(R_2\mid R_1)$; **b)** $P(V_2\mid R_1)$; **c)** $P(V_2)$; **d)** $P(R_1\mid R_2)$.

### Solución

Si la primera bola fue roja, la segunda urna tendrá 7 rojas y 3 verdes. Por ello,

$$\boxed{P(R_2\mid R_1)=\frac7{10}},\qquad\boxed{P(V_2\mid R_1)=\frac3{10}}.$$

Si se trasladó una verde, en la segunda urna habrá 6 rojas y 4 verdes. Aplicamos probabilidad total para la verde final:

$$P(V_2)=\frac3{10}\cdot\frac25+\frac4{10}\cdot\frac35=\boxed{\frac9{25}}.$$

Así $P(R_2)=1-9/25=16/25$. Bayes da

$$
P(R_1\mid R_2)=\frac{P(R_2\mid R_1)P(R_1)}{P(R_2)}
=\frac{\frac7{10}\frac25}{\frac{16}{25}}
=\boxed{\frac7{16}}.
$$

## Cuestión 4B · Binomial y aproximación normal

### Enunciado

El 2 % de las piezas producidas es defectuoso.

**a)** Para un lote de 10, estudia el número de piezas buenas y calcula la probabilidad de exactamente una defectuosa.

**b)** Para un lote de 2 000, repite el estudio y calcula la probabilidad de menos de 50 defectuosas.

### Solución

Si $X$ cuenta las piezas buenas, la probabilidad de éxito es $p=0{,}98$.

Para 10 piezas, $X\sim B(10,0{,}98)$, con media $9{,}8$ y desviación típica $\sqrt{10\cdot0{,}98\cdot0{,}02}\approx0{,}443$. Una defectuosa equivale a $X=9$:

$$
P(X=9)=\binom{10}{9}0{,}98^9\,0{,}02
=\boxed{\approx0{,}1667}.
$$

Para 2 000 piezas, $X\sim B(2000,0{,}98)$, con $\mu=1960$ y $\sigma=\sqrt{2000\cdot0{,}98\cdot0{,}02}\approx6{,}26$. Menos de 50 defectuosas significa al menos 1 951 buenas. Con corrección de continuidad:

$$
P(X\ge1951)\approx P\left(Z\ge\frac{1950{,}5-1960}{6{,}26}\right)
=P(Z\ge-1{,}52)=\boxed{0{,}9357}.
$$

## Cómo usar este examen

Si se atasca una cuestión, identifica primero su familia: sistema, optimización, integral, posición relativa o distribución. A partir de ahí el camino de resolución suele ser mucho más claro.

Puedes entrenar esos bloques con práctica guiada y seguimiento en el [Campus de Método Nebula](/campus/).
