---
title: Matemáticas II · PAU 2025 · Cantabria — examen resuelto
seoTitle: Matemáticas II · PAU 2025 · Cantabria — examen resuelto
date: 2025-10-20
updated: 2026-11-05
description: Examen de Matemáticas II de la PAU 2025 de Cantabria resuelto paso a paso, con todas las alternativas explicadas.
tag: Matemáticas II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: como-preparar-pau-matematicas-ii,pau-matematicas-matrices-determinantes-gauss,pau-matematicas-probabilidad-bayes
image: /favicon.svg
---

En este examen aparecen las dos alternativas de cada apartado, desarrolladas una a una. El objetivo no es solo llegar al resultado: fíjate en qué condición permite escoger el método en cada paso.

**Convocatoria:** ordinaria. En el original se respondía una cuestión por apartado; aquí se incluyen todas.

## Cuestión 1A · Invertibilidad de una matriz

### Enunciado

Sean

$$
A=\begin{pmatrix}a+1&1&1\\1&a+3&1\\1&1&a+1\end{pmatrix},\qquad
B=\begin{pmatrix}-1&-3\\2&0\\5&3\end{pmatrix}.
$$

**a)** Determina cuándo $A$ tiene inversa.

**b)** Para $a=-3$, calcula $A^{-1}$.

**c)** Para $a=-3$, resuelve $AX=B$.

### Solución

Una matriz cuadrada es invertible si su determinante no se anula. Al desarrollar y factorizar,

$$\det A=a(a+1)(a+4).$$

Por tanto,

$$\boxed{A\text{ es invertible si }a\ne-4,-1,0}.$$

Para $a=-3$,

$$
A=\begin{pmatrix}-2&1&1\\1&0&1\\1&1&-2\end{pmatrix},
\qquad
A^{-1}=\frac16\begin{pmatrix}-1&3&1\\3&3&3\\1&3&-1\end{pmatrix}.
$$

Como $A$ es invertible, multiplicamos $AX=B$ por $A^{-1}$ a la izquierda:

$$
X=A^{-1}B
=\boxed{\begin{pmatrix}2&1\\3&0\\0&-1\end{pmatrix}}.
$$

## Cuestión 1B · Sistema con parámetro

### Enunciado

Estudia la compatibilidad del sistema

$$\begin{cases}ax+y-z=1,\\(a^2-2)y+2z=-2,\\-x+z=0.\end{cases}$$

Después, para $a=0$, obtén todas sus soluciones.

### Solución

El determinante de la matriz de coeficientes es

$$
\det\begin{pmatrix}a&1&-1\\0&a^2-2&2\\-1&0&1\end{pmatrix}
=a(a+1)(a-2).
$$

Si $a\ne-1,0,2$, el determinante es distinto de cero y hay una única solución. Analizamos los valores excepcionales:

- Si $a=0$, las ecuaciones se reducen a $y-z=1$ y $x=z$: son compatibles e indeterminadas.
- Si $a=-1$ o $a=2$, al sustituir se llega a una contradicción, por lo que el sistema es incompatible.

En consecuencia es compatible para $\boxed{a\ne-1,2}$; para $a=0$ hay infinitas soluciones y en el resto de valores compatibles la solución es única.

Con $a=0$, tomando $z=\lambda$, resulta $x=\lambda$ y $y=1+\lambda$:

$$\boxed{(x,y,z)=(\lambda,1+\lambda,\lambda),\quad\lambda\in\mathbb R}.$$

## Cuestión 2A · Continuidad, asíntotas y tangente

### Enunciado

Considera

$$f(x)=\begin{cases}\dfrac{x^3-8}{x^2-4},&x\ne2,\\e^k,&x=2.\end{cases}$$

**a)** Calcula $k$ para que sea continua en $x=2$.

**b)** Estudia sus asíntotas.

**c)** Halla la tangente en $x=1$.

### Solución

Para $x\ne\pm2$ podemos simplificar:

$$
\frac{x^3-8}{x^2-4}=\frac{(x-2)(x^2+2x+4)}{(x-2)(x+2)}
=x+\frac4{x+2}.
$$

El límite al acercarse a 2 vale $2+4/4=3$. Para continuidad debe ser $e^k=3$, luego $\boxed{k=\ln3}$.

La forma simplificada deja clara una asíntota vertical en $\boxed{x=-2}$. Además,

$$f(x)-x=\frac4{x+2}\longrightarrow0,$$

por lo que tiene asíntota oblicua $\boxed{y=x}$. En $x=2$ hay un punto removible si no se escoge $k=\ln3$, no una asíntota.

Derivamos $f(x)=x+4/(x+2)$:

$$f'(x)=1-\frac4{(x+2)^2}.$$

En $x=1$, $f(1)=7/3$ y $f'(1)=5/9$. La tangente es

$$
y-\frac73=\frac59(x-1),\qquad
\boxed{y=\frac59x+\frac{16}{9}}.
$$

## Cuestión 2B · Estudio de una exponencial

### Enunciado

Sea $f(x)=(x^2-2)e^{2x}$.

**a)** Halla sus cortes con los ejes.

**b)** Estudia crecimiento y decrecimiento.

**c)** Calcula el área entre la curva, el eje $OX$ y las rectas $x=-2$ y $x=1$.

### Solución

Como $e^{2x}$ nunca es cero, los cortes con el eje $OX$ satisfacen $x^2-2=0$:

$$\boxed{(-\sqrt2,0),\ (\sqrt2,0)}.$$

En el eje vertical, $f(0)=-2$, así que el corte es $\boxed{(0,-2)}$.

Derivamos:

$$f'(x)=2e^{2x}(x^2+x-2)=2e^{2x}(x+2)(x-1).$$

El factor exponencial es positivo. Por el signo del polinomio, $f$ crece en $(-\infty,-2)\cup(1,+\infty)$ y decrece en $(-2,1)$.

Una primitiva útil es

$$F(x)=\frac{e^{2x}}2\left(x^2-x-\frac32\right).$$

La función es positiva entre $-2$ y $-\sqrt2$ y negativa entre $-\sqrt2$ y $1$. Por eso el área exige partir la integral:

$$
\begin{aligned}A&=\int_{-2}^{-\sqrt2}f(x)\,dx-\int_{-\sqrt2}^{1}f(x)\,dx\\
&=2F(-\sqrt2)-F(-2)-F(1)\\
\end{aligned}
$$

Evaluamos directamente: $F(-2)=\frac{9e^{-4}}4$, $F(-\sqrt2)=\frac{e^{-2}}2(\frac12+\sqrt2)$ y $F(1)=-3e^2/4$. Por tanto,

$$\boxed{A=e^{-2}\left(\frac12+\sqrt2\right)-\frac{9e^{-4}}4+\frac{3e^2}{4}\approx5{,}614}.$$

## Cuestión 3 · Recta y distancia de un punto

### Enunciado

Considera $r:\begin{cases}2x-y=3,\\y-2z=1,\end{cases}$ y $P=(1,1,1)$.

**a)** Halla los puntos de $r$ que están a distancia $\sqrt{14}$ de $P$.

**b)** Halla el plano que contiene a $r$ y a $P$.

**c)** Calcula la distancia de $P$ a $r$.

### Solución

Tomando $z=\lambda$, la recta se escribe

$$r:(x,y,z)=(2+\lambda,1+2\lambda,\lambda).$$

La distancia al cuadrado entre este punto y $P$ es

$$ (1+\lambda)^2+(2\lambda)^2+(\lambda-1)^2=6\lambda^2+2.$$

Al pedir que sea 14, obtenemos $\lambda^2=2$. Los puntos son

$$\boxed{(2+\sqrt2,1+2\sqrt2,\sqrt2),\quad(2-\sqrt2,1-2\sqrt2,-\sqrt2)}.$$

Un punto de $r$ es $Q=(2,1,0)$, su dirección es $(1,2,1)$ y $\overrightarrow{PQ}=(1,0,-1)$. Con esos dos vectores, un normal del plano es $(1,2,1)\times(1,0,-1)=(-2,2,-2)$. Simplificando, el plano es

$$\boxed{x-y+z-1=0}.$$

Para la distancia, el punto de $r$ más cercano debe hacer perpendicular el vector que lo une con $P$ a $(1,2,1)$. Eso impone $\lambda=0$, de modo que el pie es $Q=(2,1,0)$ y

$$d(P,r)=\lVert(1,0,-1)\rVert=\boxed{\sqrt2}.$$

## Cuestión 4A · Dos actividades deportivas

### Enunciado

Sean $A=$ «matricularse en atletismo» y $B=$ «matricularse en baloncesto». Se sabe que $P(A)=0{,}40$, $P(B)=0{,}65$ y que el 10 % no se matricula en ningún deporte.

**a)** Calcula $P(A\cap B)$.

**b)** Calcula $P(A\mid B)$, $P(B\mid A)$ y $P(A\mid\overline B)$.

### Solución

Como $P(A\cup B)=1-0{,}10=0{,}90$,

$$P(A\cap B)=P(A)+P(B)-P(A\cup B)=0{,}40+0{,}65-0{,}90=\boxed{0{,}15}.$$

Las probabilidades condicionadas salen de dividir por el suceso condicionado:

$$
P(A\mid B)=\frac{0{,}15}{0{,}65}=\boxed{\frac3{13}},\qquad
P(B\mid A)=\frac{0{,}15}{0{,}40}=\boxed{\frac38}.
$$

Además, $P(A\cap\overline B)=0{,}40-0{,}15=0{,}25$ y $P(\overline B)=0{,}35$, por lo que

$$P(A\mid\overline B)=\frac{0{,}25}{0{,}35}=\boxed{\frac57}.$$

## Cuestión 4B · Probabilidad total y Bayes

### Enunciado

Dos fábricas producen un mismo aparato. La fábrica A aporta el 60 % de la producción y B el 40 %. Fallan el 0,15 % de los aparatos de A y el 0,1 % de los de B durante su primer año.

**a)** Calcula $P(\text{no falla}\mid B)$.

**b)** Calcula la probabilidad total de fallo.

**c)** Si no falla, calcula la probabilidad de que proceda de A.

### Solución

Si en B falla el 0,1 %, no falla el $1-0{,}001=\boxed{0{,}999}$.

Por probabilidad total,

$$P(F)=0{,}60\cdot0{,}0015+0{,}40\cdot0{,}001=\boxed{0{,}0013}.$$

Para el último apartado aplicamos Bayes. La probabilidad de no fallar es $1-0{,}0013=0{,}9987$:

$$
P(A\mid\overline F)=\frac{0{,}60\cdot0{,}9985}{0{,}9987}
=\boxed{\frac{1997}{3329}\approx0{,}5999}.
$$

## Cómo usar este examen

Cuando corrijas, separa un error de cálculo de un error de planteamiento. El segundo indica el bloque que debes volver a entrenar; el primero suele resolverse escribiendo los pasos intermedios con más orden.

Puedes practicar matrices, análisis, geometría y probabilidad con una ruta guiada en el [Campus de Método Nebula](/campus/).
