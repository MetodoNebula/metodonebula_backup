---
title: Matemáticas II · PAU 2026 · Cantabria — examen resuelto
seoTitle: Matemáticas II · PAU 2026 · Cantabria — examen resuelto
date: 2026-10-28
updated: 2026-11-05
description: Examen de Matemáticas II de la PAU 2026 de Cantabria resuelto con todos los pasos y alternativas.
tag: Matemáticas II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: como-preparar-pau-matematicas-ii,pau-matematicas-matrices-determinantes-gauss,pau-matematicas-probabilidad-bayes
image: /favicon.svg
---

Aquí están desarrolladas todas las tareas, aunque en la prueba se elegía una alternativa por bloque. Las soluciones conservan las operaciones intermedias necesarias para justificar el resultado.

## Tarea 1A · Potencias y ecuación matricial

### Enunciado

Sea $A=\begin{pmatrix}1&a&0\\0&1&0\\0&0&a\end{pmatrix}$. Estudia su rango, calcula $A^{100}$ y, para $a=-1$, resuelve $AXA=M$, donde

$$M=\begin{pmatrix}2&2&2\\0&0&-1\\0&-2&-2\end{pmatrix}.$$

### Solución

Como $A$ es triangular, $\det A=1\cdot1\cdot a=a$. Si $a\ne0$, el determinante es no nulo y $\operatorname{rg}A=3$. Si $a=0$, queda $\operatorname{diag}(1,1,0)$, que tiene un menor no nulo de orden 2; por tanto,

$$\boxed{\operatorname{rg}A=3\ (a\ne0),\qquad\operatorname{rg}A=2\ (a=0).}$$

Multiplicando las primeras potencias se ve el patrón

$$
A^2=\begin{pmatrix}1&2a&0\\0&1&0\\0&0&a^2\end{pmatrix},\qquad
A^n=\begin{pmatrix}1&na&0\\0&1&0\\0&0&a^n\end{pmatrix}.
$$

Por inducción, al multiplicar $A^n$ por $A$ se pasa de $na$ a $(n+1)a$ y de $a^n$ a $a^{n+1}$. Luego

$$\boxed{A^{100}=\begin{pmatrix}1&100a&0\\0&1&0\\0&0&a^{100}\end{pmatrix}}.$$

Para $a=-1$,

$$
A=\begin{pmatrix}1&-1&0\\0&1&0\\0&0&-1\end{pmatrix},\qquad
A^{-1}=\begin{pmatrix}1&1&0\\0&1&0\\0&0&-1\end{pmatrix}.
$$

Multiplicamos $AXA=M$ por $A^{-1}$ a izquierda y derecha:

$$
X=A^{-1}MA^{-1}
=\boxed{\begin{pmatrix}2&0&-1\\0&0&1\\0&2&-2\end{pmatrix}}.
$$

## Tarea 1B · Discusión de un sistema

### Enunciado

Discute el sistema

$$\begin{cases}x+y+z=0,\\y+az=1,\\ay+z=2-a.\end{cases}$$

Resuélvelo además para $a=2$ y $a=1$.

### Solución

El determinante de la matriz de coeficientes es

$$\det\begin{pmatrix}1&1&1\\0&1&a\\0&a&1\end{pmatrix}=1-a^2.$$

Para $a\ne\pm1$ hay solución única. Si $a=-1$, las dos últimas ecuaciones son $y-z=1$ y $-y+z=3$; al sumarlas aparece $0=4$, luego es incompatible.

Si $a=1$, ambas últimas ecuaciones son $y+z=1$. La primera da $x=-(y+z)=-1$. Tomando $y=\lambda$, $z=1-\lambda$:

$$\boxed{a=1:\ (x,y,z)=(-1,\lambda,1-\lambda).}$$

Para $a=2$:

$$y+2z=1,\qquad2y+z=0.$$

De la segunda $y=-z/2$; al sustituir en la primera, $-z/2+2z=1$, de donde $z=2/3$, $y=-1/3$. Finalmente $x=-y-z=-1/3$:

$$\boxed{a=2:\ (x,y,z)=(-1/3,-1/3,2/3).}$$

## Tarea 2A · Asíntota, monotonía y tangente

### Enunciado

Sea $f(x)=\dfrac{x^2+ax+1}{x+a^2}$. **a)** Determina $a$ para que la asíntota oblicua sea $y=x-6$. **b)** Con $a=-2$, estudia crecimiento y decrecimiento. **c)** Halla la tangente en $x=-1$.

### Solución

La división de polinomios da

$$f(x)=x+(a-a^2)+\frac{1-a^3+a^4}{x+a^2}.$$

La asíntota oblicua es $y=x+a-a^2$. Al imponer $a-a^2=-6$:

$$a^2-a-6=0\Longrightarrow(a-3)(a+2)=0,$$

así que $\boxed{a=3\text{ o }a=-2}$.

Con $a=-2$, $f(x)=x-6+25/(x+4)$ y

$$f'(x)=1-\frac{25}{(x+4)^2}.$$

Se anula cuando $(x+4)^2=25$, es decir, en $x=-9$ y $x=1$; $x=-4$ no pertenece al dominio. El signo de la derivada da:

$$\boxed{\text{crece en }(-\infty,-9)\cup(1,+\infty),\quad\text{decrece en }(-9,-4)\cup(-4,1).}$$

En $x=-1$, $f(-1)=4/3$ y $f'(-1)=1-25/9=-16/9$. La recta tangente es

$$y-\frac43=-\frac{16}{9}(x+1),\qquad\boxed{y=-\frac{16}{9}x-\frac49}.$$

## Tarea 2B · Asíntotas e integral logarítmica

### Enunciado

Para $f(x)=\dfrac{e^x-1}{e^{2x}-4}$, calcula sus asíntotas y una primitiva cuyo valor en $x=\ln4$ sea $\ln2$.

### Solución

El denominador se anula si $e^{2x}=4$, es decir, en $x=\ln2$. Como el numerador allí es 1, hay asíntota vertical $\boxed{x=\ln2}$. Los límites en los infinitos dan $f(x)\to0$ cuando $x\to+\infty$ y $f(x)\to1/4$ cuando $x\to-\infty$, así que las horizontales son $\boxed{y=0}$ y $\boxed{y=1/4}$.

Para integrar hacemos $t=e^x$, $dx=dt/t$:

$$\int f(x)dx=\int\frac{t-1}{t(t-2)(t+2)}dt.$$

Descomponemos

$$\frac{t-1}{t(t-2)(t+2)}=\frac1{4t}+\frac1{8(t-2)}-\frac3{8(t+2)}.$$

Luego

$$F(x)=\frac x4+\frac18\ln|e^x-2|-\frac38\ln|e^x+2|+K.$$

Al imponer $F(\ln4)=\ln2$, resulta $K=3\ln12/8$. Por tanto,

$$\boxed{F(x)=\frac x4+\frac18\ln|e^x-2|-\frac38\ln|e^x+2|+\frac{3\ln12}{8}}.$$

## Tarea 3 · Plano, distancia y volumen

### Enunciado

Dados $A=(0,0,4)$, $B=(-3,0,0)$ y $C=(0,-2,0)$, halla el plano $ABC$, la distancia de $P=(1,1,1)$ a la recta $AB$ y el volumen del tetraedro $ABCD$ con $D=(0,0,0)$.

### Solución

Tomamos $\overrightarrow{AB}=(-3,0,-4)$ y $\overrightarrow{AC}=(0,-2,-4)$. Su producto vectorial es proporcional a $(4,6,-3)$. Con el punto $A$:

$$4(x-0)+6(y-0)-3(z-4)=0\Longrightarrow\boxed{4x+6y-3z+12=0}.$$

La recta $AB$ es $(x,y,z)=(0,0,4)+\lambda(-3,0,-4)$. El plano por $P$ perpendicular a ella es $-3x-4z+7=0$. Intersectando:

$$-3(-3\lambda)-4(4-4\lambda)+7=0\Longrightarrow25\lambda=9.$$

El pie es $H=(-27/25,0,64/25)$. Por ello,

$$
d(P,AB)=\lVert\overrightarrow{PH}\rVert
=\sqrt{\left(-\frac{52}{25}\right)^2+(-1)^2+\left(\frac{39}{25}\right)^2}
=\boxed{\frac{\sqrt{194}}5}.
$$

El producto mixto de $\overrightarrow{DA}=(0,0,4)$, $\overrightarrow{DB}=(-3,0,0)$ y $\overrightarrow{DC}=(0,-2,0)$ vale 24. El volumen es un sexto:

$$\boxed{V=\frac{|24|}{6}=4}.$$

## Tarea 4A · Tabla de contingencia

### Enunciado

El 60 % de unas cobayas tiene pelo corto; el 8 % es blanco y de pelo largo. Si el 20 % es blanco, calcula: **a)** $P(\text{marrón}\mid\text{largo})$; **b)** $P(\text{largo}\mid\text{marrón})$; **c)** $P(\text{marrón}\mid\text{corto})$.

### Solución

El 40 % tiene pelo largo. De este total, el 8 % es blanco, así que el $40-8=32$ % es largo y marrón. Como el total blanco es 20 %, el blanco y corto es $20-8=12$ %; de los cortos, $60-12=48$ % son marrones.

$$
\begin{array}{c|cc|c}&\text{blanco}&\text{marrón}&\text{total}\\\hline
\text{corto}&12\%&48\%&60\%\\
\text{largo}&8\%&32\%&40\%\\\hline
\text{total}&20\%&80\%&100\%
\end{array}
$$

Dividimos cada casilla conjunta por el total condicionado:

$$\boxed{P(M\mid L)=32/40=0{,}8,\quad P(L\mid M)=32/80=0{,}4,\quad P(M\mid C)=48/60=0{,}8}. $$

## Tarea 4B · Normal y tipificación

### Enunciado

El diámetro $X$ de las mandarinas sigue $N(60,16)$. Calcula: **a)** $P(X<40\text{ o }X>90)$; **b)** la probabilidad de que dos tengan diámetro menor de 50; **c)** $P(40<X<50)$.

### Solución

Tipificamos con $Z=(X-60)/16$. Para a), los valores son $z_{40}=-1{,}25$ y $z_{90}=1{,}875$:

$$P(X<40\text{ o }X>90)=\Phi(-1{,}25)+1-\Phi(1{,}875)\approx\boxed{0{,}136}. $$

Para 50 mm, $z=-0{,}625$. De la tabla, $P(X<50)=\Phi(-0{,}625)\approx0{,}26595$. Si las elecciones son independientes,

$$P(X_1<50\cap X_2<50)=0{,}26595^2\approx\boxed{0{,}0707}.$$

Finalmente,

$$
P(40<X<50)=\Phi(-0{,}625)-\Phi(-1{,}25)
\approx0{,}26595-0{,}1056=\boxed{0{,}16035}.
$$

## Cómo usar este examen

Cuando hayas terminado un bloque, comprueba si puedes explicar por qué se ha usado cada fórmula. Ese hábito evita aprender solo la apariencia de un procedimiento.

Puedes practicar estos contenidos con ejercicios guiados en el [Campus de Método Nebula](/campus/).
