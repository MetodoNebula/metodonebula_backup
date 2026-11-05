---
title: Matemáticas Aplicadas a las CCSS II · PAU 2025 · Murcia — examen resuelto
seoTitle: PAU Matemáticas Aplicadas a las CCSS II Murcia 2025 resuelta
date: 2025-06-01
updated: 2026-11-05
description: Examen resuelto de Matemáticas Aplicadas a las Ciencias Sociales II de Murcia 2025, con procedimientos completos.
tag: Matemáticas CCSS PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

La asistencia (en miles de personas) a un concierto es $N(t)=\dfrac{20t}{(t+1)^2}$, con $0\le t\le5$ ($t$ en horas tras el comienzo).

**(a)** Estudie el crecimiento y decrecimiento de $N(t)$. **(b)** ¿En qué hora se alcanza el máximo de asistentes y cuántos son? **(c)** Evalúe e interprete $N'(2)$. **(d)** ¿Cuántos asistentes hay a las $3$ horas?

### Solución

**(a)**
$$N'(t)=\frac{20(t+1)^2-20t\cdot2(t+1)}{(t+1)^4}=\frac{20(1-t)}{(t+1)^3}.$$
$N'(t)=0\iff t=1$. Para $0<t<1$, $N'>0$ (**crece**); para $1<t<5$, $N'<0$ (**decrece**).

**(b)** El máximo se alcanza en $t=1$: $N(1)=\dfrac{20}{4}=5$, es decir, **$5000$ personas**.

**(c)** $N'(2)=\dfrac{20(1-2)}{3^3}=-\dfrac{20}{27}\approx-0{,}74$. Significa que entre la segunda y la tercera hora la asistencia disminuye en unas $0{,}74$ miles, es decir, se van unas $740$ personas.

**(d)** $N(3)=\dfrac{20\cdot3}{16}=\dfrac{60}{16}=3{,}75$, es decir, $3750$ personas a las $3$ horas.

## Ejercicio 2

### Enunciado

**(a)** Si $\displaystyle\int_0^2 f(x)\,dx=4$, ¿cuánto vale $\displaystyle\int_0^2[f(x)+3]\,dx$?

**(b)** Represente el recinto limitado por $f(x)=x^2$ y $g(x)=2x+3$ y calcule su área.

### Solución

**(a)** Por linealidad,
$$\int_0^2[f(x)+3]\,dx=\int_0^2 f(x)\,dx+3\int_0^2 dx=4+3\cdot2=10.$$

**(b)** Puntos de corte: $x^2=2x+3\Rightarrow x^2-2x-3=0\Rightarrow x=-1,\ x=3$. En $(-1,3)$ la recta queda por encima de la parábola, luego
$$\text{Área}=\int_{-1}^{3}(2x+3-x^2)\,dx=\Big[x^2+3x-\tfrac{x^3}{3}\Big]_{-1}^{3}=9-\Big(-\tfrac53\Big)=\frac{32}{3}\ \text{u}^2.$$

## Ejercicio 3

### Enunciado

**(a)** Halle los límites $a$ y $b$ para que $\displaystyle\int_{-2}^{1}f(x)\,dx+\int_{1}^{5}f(x)\,dx=\int_{a}^{b}f(x)\,dx$.

**(b)** Dada $f(x)=\dfrac12 e^{x/2}$: (b.1) escriba la integral que describe el área bajo la curva entre $x=0$ y $x=4$; (b.2) calcule dicha área.

### Solución

**(a)** Por la aditividad respecto al intervalo,
$$\int_{-2}^{1}f+\int_{1}^{5}f=\int_{-2}^{5}f,\qquad\text{luego } a=-2,\ b=5.$$

**(b.1)** El área entre $x=0$ y $x=4$ es
$$\int_0^4 \tfrac12 e^{x/2}\,dx.$$

**(b.2)** Una primitiva de $\tfrac12 e^{x/2}$ es $e^{x/2}$, así que
$$\int_0^4 \tfrac12 e^{x/2}\,dx=\big[e^{x/2}\big]_0^4=e^2-1\ \text{u}^2\approx6{,}39\ \text{u}^2.$$

## Ejercicio 4

### Enunciado

Dadas $A=\begin{pmatrix}2&-1\\ 1&0\end{pmatrix}$, $B=\begin{pmatrix}1&0\\ -1&1\end{pmatrix}$ y $C=\begin{pmatrix}1&2\\ 0&-1\end{pmatrix}$:

**(a)** Calcule $C^2$. **(b)** Halle $A+B+C^2$. **(c)** Encuentre $(A-B)^{-1}$. **(d)** Resuelva la ecuación matricial $AX-BX=A+B+C^2$.

Además, discuta y resuelva el sistema $\begin{cases}3x+2y-z=3\\ x-y+2z=4\\ 2x+3y-z=3\end{cases}$.

### Solución

**(a)** $C^2=\begin{pmatrix}1&2\\ 0&-1\end{pmatrix}\begin{pmatrix}1&2\\ 0&-1\end{pmatrix}=\begin{pmatrix}1&0\\ 0&1\end{pmatrix}=I.$

**(b)** $A+B+C^2=\begin{pmatrix}2&-1\\ 1&0\end{pmatrix}+\begin{pmatrix}1&0\\ -1&1\end{pmatrix}+\begin{pmatrix}1&0\\ 0&1\end{pmatrix}=\begin{pmatrix}4&-1\\ 0&2\end{pmatrix}.$

**(c)** $A-B=\begin{pmatrix}1&-1\\ 2&-1\end{pmatrix}$, con $|A-B|=1$, luego $(A-B)^{-1}=\begin{pmatrix}-1&1\\ -2&1\end{pmatrix}.$

**(d)** $AX-BX=(A-B)X=A+B+C^2\Rightarrow X=(A-B)^{-1}(A+B+C^2)$:
$$X=\begin{pmatrix}-1&1\\ -2&1\end{pmatrix}\begin{pmatrix}4&-1\\ 0&2\end{pmatrix}=\begin{pmatrix}-4&3\\ -8&4\end{pmatrix}.$$

**Sistema:** con $\begin{pmatrix}1&-1&2\\ 3&2&-1\\ 2&3&-1\end{pmatrix}$, $|A|=-10\neq0$, así que $\operatorname{rg}(A)=3=\operatorname{rg}(A|b)=n$: **compatible determinado**. La solución es $x=1,\ y=1,\ z=2$.

## Ejercicio 5

### Enunciado

El peso (kg) de los jugadores sigue $N(\mu,\ 12)$ ($\sigma=12$ kg).

**(a)** Con una muestra de $64$ jugadores y media $70$ kg, calcule un intervalo de confianza al $95\%$ para $\mu$.

**(b)** Determine el tamaño muestral mínimo para que el error en la estimación de $\mu$ sea menor que $4$ kg con confianza del $98\%$.

**(c)** Si $\mu=71$, ¿probabilidad de que un jugador pese más de $75$ kg?

### Solución

**(a)** Con $z_{\alpha/2}=1{,}96$,
$$IC_{95\%}=\Big(70-1{,}96\cdot\tfrac{12}{\sqrt{64}},\ 70+1{,}96\cdot\tfrac{12}{\sqrt{64}}\Big)=70\pm1{,}96\cdot1{,}5=(67{,}06,\ 72{,}94).$$

**(b)** El error cumple $\varepsilon=z_{\alpha/2}\dfrac{\sigma}{\sqrt n}<4$. Con $z_{\alpha/2}=2{,}33$ (nivel $98\%$):
$$\sqrt n>\frac{2{,}33\cdot12}{4}=6{,}99\Rightarrow n>48{,}86\Rightarrow n=49.$$
(Con el valor redondeado $z=2{,}34$, se obtiene $n>49{,}28\Rightarrow n=50$; ambos valores de $z$ se admiten.)

**(c)** Para un jugador, $X\sim N(71,\ 12)$:
$$P(X>75)=P\!\left(Z>\frac{75-71}{12}\right)=P(Z>0{,}33)=1-0{,}6293=0{,}3707.$$

## Ejercicio 6

### Enunciado

Se encuesta a $1000$ personas sobre fijar una edad legal para el móvil infantil: $560$ están a favor ($F$), de las que $390$ son mujeres; de las $440$ en contra, $280$ son hombres. Se elige una persona al azar.

**(a)** $P(F)$. **(b)** $P(M)$ (que sea mujer). **(c)** $P(M\cup F)$. **(d)** Si es hombre, $P(F\mid H)$.

### Solución

De los datos: mujeres a favor $=390$, hombres a favor $=170$; mujeres en contra $=160$, hombres en contra $=280$. Totales: mujeres $=550$, hombres $=450$.

**(a)** $P(F)=\dfrac{560}{1000}=0{,}56.$

**(b)** $P(M)=\dfrac{550}{1000}=0{,}55.$

**(c)** $P(M\cap F)=\dfrac{390}{1000}=0{,}39$, luego
$$P(M\cup F)=P(M)+P(F)-P(M\cap F)=0{,}55+0{,}56-0{,}39=0{,}72.$$

**(d)** $P(F\mid H)=\dfrac{P(F\cap H)}{P(H)}=\dfrac{170/1000}{450/1000}=\dfrac{170}{450}=\dfrac{17}{45}\approx0{,}3778.$

## Ejercicio 7

### Enunciado

Una empresa fabrica portátiles notebook ($x$) y gaming ($y$), con beneficios de $400$ € y $500$ € por unidad. Hay tres fases con límites diarios: fase 1 $2x+y\le14$, fase 2 $x+4y\le16$, fase 3 $x+2y\le10$, con $x,y\ge0$.

**(a)** Formule la función objetivo y las restricciones. **(b)** Represente la región factible. **(c)** Halle sus vértices. **(d)** ¿Cuántos de cada tipo producir para maximizar el beneficio? **(e)** Calcule el beneficio máximo diario.

### Solución

**(a)** Objetivo: $f(x,y)=400x+500y$, sujeta a $2x+y\le14$, $x+4y\le16$, $x+2y\le10$, $x,y\ge0$.

**(b)-(c)** Los vértices de la región factible son
$$(0,0),\ (7,0),\ (6,2),\ (4,3),\ (0,4),$$
donde $(6,2)$ es la intersección de $2x+y=14$ y $x+2y=10$, y $(4,3)$ la de $x+2y=10$ y $x+4y=16$.

**(d)** Evaluando $f$:
$$f(0,0)=0,\ f(7,0)=2800,\ f(6,2)=3400,\ f(4,3)=3100,\ f(0,4)=2000.$$
El máximo es $3400$ en $(6,2)$: producir $6$ notebooks y $2$ gaming.

**(e)** El beneficio máximo diario es $\mathbf{3400}$ €.

## Ejercicio 8

### Enunciado

Dada $f(x)=\dfrac{x^2+3}{1-x}$:

**(a)** Determine su dominio. **(b)** Estudie sus asíntotas. **(c)** Calcule los intervalos de crecimiento y decrecimiento. **(d)** Calcule los máximos y mínimos locales.

### Solución

**(a)** Se anula el denominador en $x=1$, luego $D(f)=\mathbb{R}\setminus\{1\}$.

**(b)** **Asíntota vertical:** $x=1$. No hay horizontal (el grado del numerador supera al del denominador en $1$), pero sí **oblicua** $y=mx+n$:
$$m=\lim_{x\to\infty}\frac{f(x)}{x}=-1,\qquad n=\lim_{x\to\infty}\big(f(x)+x\big)=-1,$$
de modo que $y=-x-1$.

**(c)** Derivando,
$$f'(x)=\frac{-x^2+2x+3}{(1-x)^2},\qquad f'(x)=0\iff x^2-2x-3=0\iff x=-1,\ x=3.$$
El numerador $-x^2+2x+3$ es positivo entre $-1$ y $3$: $f$ **crece** en $(-1,1)\cup(1,3)$ y **decrece** en $(-\infty,-1)\cup(3,+\infty)$.

**(d)** **Mínimo local** en $x=-1$: $f(-1)=\dfrac{4}{2}=2$, punto $(-1,2)$. **Máximo local** en $x=3$: $f(3)=\dfrac{12}{-2}=-6$, punto $(3,-6)$.
