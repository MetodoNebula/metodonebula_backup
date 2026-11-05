---
title: Matemáticas II · PAU 2025 · Comunidad Valenciana — examen resuelto
seoTitle: Matemáticas II · PAU 2025 · Comunidad Valenciana — examen resuelto
date: 2025-10-26
updated: 2026-11-05
description: Examen de Matemáticas II de la PAU 2025 de Comunidad Valenciana resuelto con todos los pasos intermedios.
tag: Matemáticas II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: como-preparar-pau-matematicas-ii,pau-matematicas-matrices-determinantes-gauss,pau-matematicas-probabilidad-bayes
image: /favicon.svg
---

Se incluyen las dos alternativas de álgebra, geometría y análisis. Las cuentas intermedias se dejan visibles para que puedas copiarlas y justificarlas con orden en una prueba escrita.

## Pregunta 1 · Pizza y distribución binomial

### Enunciado

Las probabilidades de pedir pizza margarita y vegetariana son $0{,}40$ y $0{,}25$; el resto pide pepperoni. Calcula: **1.1** la probabilidad de pepperoni; **1.2** la de que dos clientes pidan tipos distintos; **1.3** la de que exactamente 4 de 10 pidan margarita; **1.4** la de que al menos uno de esos 10 pida margarita.

### Solución

La probabilidad de pepperoni es el resto hasta 1:

$$P(P)=1-0{,}40-0{,}25=\boxed{0{,}35}.$$

Para que dos clientes independientes elijan tipos distintos, podemos sumar según el primer tipo elegido:

$$\begin{aligned}P(\text{distintos})&=0{,}40(1-0{,}40)+0{,}25(1-0{,}25)+0{,}35(1-0{,}35)\\&=0{,}24+0{,}1875+0{,}2275=\boxed{0{,}655}.\end{aligned}$$

Si $X$ cuenta margaritas entre 10 pedidos, $X\sim B(10,0{,}4)$. Por la fórmula binomial,

$$
P(X=4)=\binom{10}{4}0{,}4^4\,0{,}6^6
=210\cdot0{,}4^4\cdot0{,}6^6\approx\boxed{0{,}2508}.
$$

Para «al menos una» usamos el complementario «ninguna»:

$$
P(X\ge1)=1-P(X=0)=1-\binom{10}{0}0{,}4^0\,0{,}6^{10}
=\boxed{1-0{,}6^{10}\approx0{,}9940}.
$$

## Pregunta 2.1 · Matriz idempotente e inversa

### Enunciado

Sea

$$A=\begin{pmatrix}1&\alpha&0\\0&\alpha&0\\0&0&1-\alpha\end{pmatrix}.$$

**a)** Halla los valores de $\alpha$ para los que $A^2=A$. **b)** Determina cuándo existe $A^{-1}$ y calcúlala.

### Solución

Multiplicamos la matriz por sí misma:

$$A^2=\begin{pmatrix}1&\alpha+\alpha^2&0\\0&\alpha^2&0\\0&0&(1-\alpha)^2\end{pmatrix}.$$

Al igualar con $A$, la entrada central exige $\alpha^2=\alpha$ y la entrada $(1,2)$ exige $\alpha+\alpha^2=\alpha$, es decir, $\alpha^2=0$. La condición conjunta solo deja

$$\boxed{\alpha=0}.$$

Como es triangular, $\det A=1\cdot\alpha\cdot(1-\alpha)$. Por tanto es invertible si $\alpha\ne0,1$. Para hallar su inversa, resolvemos $AX=I$; la inversa del bloque superior izquierdo $\begin{pmatrix}1&\alpha\\0&\alpha\end{pmatrix}$ es $\begin{pmatrix}1&-1\\0&1/\alpha\end{pmatrix}$. Así,

$$\boxed{A^{-1}=\begin{pmatrix}1&-1&0\\0&1/\alpha&0\\0&0&1/(1-\alpha)\end{pmatrix},\qquad\alpha\ne0,1.}$$

## Pregunta 2.2 · Sistema con parámetro

### Enunciado

Discute y resuelve cuando proceda

$$\begin{cases}3x-2y-3z=0,\\2x+ay-5z=-3,\\x+y+2z=3.\end{cases}$$

En particular, da las soluciones en el caso compatible indeterminado y para $a=0$.

### Solución

La matriz de coeficientes tiene determinante

$$\det\begin{pmatrix}3&-2&-3\\2&a&-5\\1&1&2\end{pmatrix}=9a+27=9(a+3).$$

Para $a\ne-3$, el determinante no es cero y el sistema tiene solución única. Solo queda estudiar $a=-3$. Sustituimos y usamos la tercera ecuación para despejar $x$:

$$x=3-y-2z.$$

En la primera, $3(3-y-2z)-2y-3z=0$, luego $5y+9z=9$. La segunda produce la misma ecuación, por lo que hay una variable libre. Tomando $y=\lambda$,

$$z=1-\frac{5\lambda}{9},\qquad x=3-\lambda-2\left(1-\frac{5\lambda}{9}\right)=1+\frac\lambda9.$$

$$\boxed{a=-3:\ (x,y,z)=\left(1+\frac\lambda9,\lambda,1-\frac{5\lambda}{9}\right).}$$

Para $a=0$, la tercera ecuación da $x=3-y-2z$. Al sustituir en las otras dos se obtiene $-5y-9z=-9$ y $2y+9z=9$. Sumando, $-3y=0$, así que $y=0$, $z=1$ y $x=1$:

$$\boxed{(x,y,z)=(1,0,1)}.$$

## Pregunta 3.1 · Dos rectas y un plano

### Enunciado

Sean

$$r:(x,y,z)=(1+2\lambda,\lambda,2-\lambda),$$

$$s:\begin{cases}x=-1,\\x+2y+z=0.\end{cases}$$

Calcula el punto de corte, el plano que contiene ambas y la distancia de $P=(1,0,2)$ a ese plano.

### Solución

Parametrizamos $s$ tomando $y=\mu$: $s=(-1,\mu,1-2\mu)$. Igualamos sus coordenadas con las de $r$. De $-1=1+2\lambda$ sale $\lambda=-1$; entonces $\mu=\lambda=-1$, y la tercera ecuación se comprueba: $1-2(-1)=3=2-(-1)$. Por tanto,

$$\boxed{A=(-1,-1,3)}.$$

Los vectores directores son $u=(2,1,-1)$ y $v=(0,1,-2)$. Su producto vectorial es proporcional a $(1,-4,-2)$, normal del plano. Con $(1,0,2)\in r$:

$$\boxed{\pi:x-4y-2z+3=0}.$$

La distancia es

$$d(P,\pi)=\frac{|1-4\cdot0-2\cdot2+3|}{\sqrt{1^2+(-4)^2+(-2)^2}}=\boxed0,$$

porque $P$ pertenece al plano.

## Pregunta 3.2 · Planos perpendiculares y simetría

### Enunciado

Para $\pi:3x-y+2z=4$, $P=(-1,0,1)$ y $Q=(2,1,2)$, halla: **a)** el plano perpendicular a $\pi$ por $P,Q$; **b)** $d(Q,\pi)$; **c)** el simétrico de $P$ respecto a $\pi$.

### Solución

El vector $\overrightarrow{PQ}=(3,1,1)$ y el normal de $\pi$, $n=(3,-1,2)$, están contenidos en el plano buscado. Un normal al nuevo plano es $\overrightarrow{PQ}\times n=(3,-3,-6)$, proporcional a $(1,-1,-2)$. Usando $P$:

$$\boxed{\pi':x-y-2z+3=0}.$$

Para la distancia,

$$
d(Q,\pi)=\frac{|3\cdot2-1+2\cdot2-4|}{\sqrt{3^2+(-1)^2+2^2}}
=\boxed{\frac5{\sqrt{14}}=\frac{5\sqrt{14}}{14}}.
$$

La recta perpendicular a $\pi$ por $P$ es $(-1,0,1)+t(3,-1,2)$. Su corte con el plano verifica

$$3(-1+3t)-(-t)+2(1+2t)=4\Longrightarrow14t=5,$$

de donde el pie es $C=(1/14,-5/14,12/7)$. El simétrico es $P'=2C-P$:

$$\boxed{P'=\left(\frac87,-\frac57,\frac{17}{7}\right)}.$$

## Pregunta 4.1 · Caja de coste mínimo

### Enunciado

Una caja de volumen 80 cm³ tiene base cuadrada de lado $x$ y altura $h$. Las caras laterales cuestan 1 céntimo/cm² y base y tapa cuestan un 25 % más. Halla la función de precio, dimensiones óptimas y precio mínimo.

### Solución

El volumen da $x^2h=80$, luego $h=80/x^2$. Las cuatro caras laterales suman $4xh=320/x$ cm² y cuestan esa cantidad en céntimos. Base y tapa tienen área $2x^2$ y cuestan $1{,}25\cdot2x^2=2{,}5x^2$ céntimos. Por tanto,

$$P(x)=\frac{320}{x}+2{,}5x^2,\qquad x>0.$$

$$P'(x)=-\frac{320}{x^2}+5x.$$

Al anularla: $5x=320/x^2$, $5x^3=320$, $x^3=64$ y $x=4$. Además, $P''(x)=640/x^3+5>0$, luego es un mínimo. La altura es $h=80/16=5$.

$$\boxed{\text{Base }4\text{ cm}\times4\text{ cm},\quad h=5\text{ cm},\quad P(4)=120\text{ céntimos}.}$$

El precio mínimo es 1,20 €.

## Pregunta 4.2 · Área con valor absoluto

### Enunciado

Calcula la región y el área entre $f(x)=x|x-2|$, el eje $OX$ y las rectas $x=-1$, $x=5$.

### Solución

El valor absoluto cambia en $x=2$:

$$f(x)=\begin{cases}2x-x^2,&x<2,\\x^2-2x,&x\ge2.\end{cases}$$

Los cortes con el eje son $x=0$ y $x=2$. La función es negativa en $[-1,0]$ y positiva en $[0,2]$ y $[2,5]$. Por eso el área se calcula cambiando el signo en el primer tramo:

$$
\begin{aligned}A&=-\int_{-1}^0(2x-x^2)dx+\int_0^2(2x-x^2)dx+\int_2^5(x^2-2x)dx\\
&=-\left[x^2-\frac{x^3}{3}\right]_{-1}^0+\left[x^2-\frac{x^3}{3}\right]_0^2+\left[\frac{x^3}{3}-x^2\right]_2^5\\
&=\frac43+\frac43+18=\boxed{\frac{62}{3}}.
\end{aligned}
$$

## Cómo usar este examen

En las cuestiones largas, deja una línea entre cada transformación y escribe siempre qué se está sustituyendo. Esa presentación hace que el corrector pueda seguir tu razonamiento incluso si cometes un pequeño error aritmético.

Puedes entrenar estas técnicas de forma guiada en el [Campus de Método Nebula](/campus/).
