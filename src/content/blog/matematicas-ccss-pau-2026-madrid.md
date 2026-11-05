---
title: Matemáticas Aplicadas a las CCSS II · PAU 2026 · Madrid — examen resuelto
seoTitle: PAU Matemáticas Aplicadas a las CCSS II Madrid 2026 resuelta
date: 2026-06-01
updated: 2026-11-05
description: Examen resuelto de Matemáticas Aplicadas a las Ciencias Sociales II de Madrid 2026, con procedimientos completos.
tag: Matemáticas CCSS PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

Considere la función real $f(x)=x(1-x^2)+e^{-\lambda x}$, donde $\lambda$ es un parámetro real.

**(a)** (1 punto) Calcule $F(x)$, la primitiva de $f(x)$ tal que $F(0)=1$.

**(b)** (1 punto) Obtenga el área entre la curva de $f(x)$ y el eje horizontal en el intervalo $[0,1]$.

**(c)** (0,5 puntos) ¿Para qué valores de $\lambda$ es $f'(0)$ positiva?

### Solución

**(a) Primitiva con $F(0)=1$.**
$$F(x)=\int\left(x-x^3+e^{-\lambda x}\right)dx=\dfrac{x^2}{2}-\dfrac{x^4}{4}-\dfrac{e^{-\lambda x}}{\lambda}+C.$$
Imponiendo $F(0)=1$: $-\dfrac{1}{\lambda}+C=1\Rightarrow C=1+\dfrac{1}{\lambda}=\dfrac{\lambda+1}{\lambda}$. Así
$$F(x)=\dfrac{x^2}{2}-\dfrac{x^4}{4}-\dfrac{e^{-\lambda x}}{\lambda}+\dfrac{\lambda+1}{\lambda}.$$

**(b) Área en $[0,1]$.**
En $[0,1]$ se tiene $f(x)>0$, así que el área es $\displaystyle\int_0^1 f(x)\,dx=F(1)-F(0)$:
$$\int_0^1 f(x)\,dx=\left(\dfrac12-\dfrac14-\dfrac{e^{-\lambda}}{\lambda}\right)-\left(-\dfrac{1}{\lambda}\right)=\dfrac14+\dfrac{1-e^{-\lambda}}{\lambda}\ \text{u}^2.$$

**(c) Signo de $f'(0)$.**
$f'(x)=1-3x^2-\lambda e^{-\lambda x}$, luego $f'(0)=1-\lambda$. Entonces $f'(0)>0\iff\lambda<1$.

## Ejercicio 2

### Enunciado

Sea la función real definida por
$$f(x)=\begin{cases} \dfrac{x+2}{(x-2)^2} & \text{si } x<0,\\[2mm] \dfrac{x^2+x^3}{x^2+1} & \text{si } x\geq0. \end{cases}$$

**(a)** (0,5 puntos) Determine razonadamente el dominio de $f(x)$.

**(b)** (0,5 puntos) Estudie la continuidad de $f(x)$ en $x=0$.

**(c)** (0,5 puntos) Calcule la asíntota de $f(x)$ cuando $x\to-\infty$.

**(d)** (1 punto) Calcule la asíntota de $f(x)$ cuando $x\to+\infty$.

### Solución

**(a) Dominio.**
En la rama $x<0$, $(x-2)^2=0$ solo en $x=2\notin(-\infty,0)$, luego está definida en todo $x<0$. En la rama $x\geq0$, $x^2+1>0$ siempre. Por tanto $\text{Dom}\,f=\mathbb{R}$.

**(b) Continuidad en $x=0$.**
$f(0)=\dfrac{0}{1}=0$.
$$\lim_{x\to0^-}\dfrac{x+2}{(x-2)^2}=\dfrac{2}{4}=\dfrac12,\qquad \lim_{x\to0^+}\dfrac{x^2+x^3}{x^2+1}=0.$$
Como los límites laterales no coinciden ($\tfrac12\neq0$), $f$ **no es continua** en $x=0$ (discontinuidad de salto).

**(c) Asíntota cuando $x\to-\infty$.**
$$\lim_{x\to-\infty}\dfrac{x+2}{(x-2)^2}=\lim_{x\to-\infty}\dfrac{x+2}{x^2-4x+4}=0.$$
Asíntota horizontal $y=0$ (no hay asíntota oblicua por ese lado).

**(d) Asíntota cuando $x\to+\infty$.**
El grado del numerador supera en una unidad al del denominador: hay asíntota oblicua $y=mx+n$.
$$m=\lim_{x\to+\infty}\dfrac{f(x)}{x}=\lim_{x\to+\infty}\dfrac{x^2+x^3}{x^3+x}=1,$$
$$n=\lim_{x\to+\infty}\left(f(x)-x\right)=\lim_{x\to+\infty}\dfrac{x^2+x^3-x(x^2+1)}{x^2+1}=\lim_{x\to+\infty}\dfrac{x^2-x}{x^2+1}=1.$$
Asíntota oblicua $y=x+1$.

## Ejercicio 3

### Enunciado

Considere las matrices
$$A=\begin{pmatrix} 1/2 & 1 & 3/2 \\ 1 & 1/2 & 1 \\ 3/2 & 1 & 1/2 \end{pmatrix},\qquad B=\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1/2 & 0 \\ 0 & 0 & 1/4 \end{pmatrix}.$$

**(a)** (1,5 puntos) Calcule la matriz $X$ en la ecuación matricial $AXB=A+B$.

**(b)** (1 punto) Calcule el determinante $|C^2B|$, siendo $C=2(A^{-1})^t$. (Nota: $M^t$ denota la traspuesta de $M$.)

### Solución

**(a) Despeje de $X$.**
Como $|A|=1\neq0$ y $B$ es diagonal invertible, de $AXB=A+B$ multiplicamos por $A^{-1}$ a la izquierda y por $B^{-1}$ a la derecha:
$$X=A^{-1}(A+B)B^{-1}=A^{-1}AB^{-1}+A^{-1}BB^{-1}=B^{-1}+A^{-1}.$$
Con $A^{-1}=\begin{pmatrix} -3/4 & 1 & 1/4 \\ 1 & -2 & 1 \\ 1/4 & 1 & -3/4 \end{pmatrix}$ y $B^{-1}=\begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 4 \end{pmatrix}$:
$$X=B^{-1}+A^{-1}=\begin{pmatrix} 1/4 & 1 & 1/4 \\ 1 & 0 & 1 \\ 1/4 & 1 & 13/4 \end{pmatrix}.$$

**(b) Determinante $|C^2B|$.**
Por propiedades: $|C^2B|=|C|^2\,|B|$. Como $B$ es diagonal, $|B|=1\cdot\tfrac12\cdot\tfrac14=\tfrac18$. Además
$$|C|=|2(A^{-1})^t|=2^3\,|(A^{-1})^t|=8\,|A^{-1}|=\dfrac{8}{|A|}=8.$$
Por tanto $|C^2B|=|C|^2|B|=8^2\cdot\dfrac18=\dfrac{64}{8}=8.$

## Ejercicio 4

### Enunciado

El barómetro de octubre de 2025 del CIS entrevistó a $4029$ personas. De los $333$ entrevistados de $18$ a $24$ años, un $35{,}5\%$ menciona "la vivienda" como uno de los tres principales problemas de España.

**(a)** (1,5 puntos) Calcule el intervalo de confianza al $95\%$ para la proporción de jóvenes de $18$ a $24$ años que consideran la vivienda uno de los tres principales problemas en octubre de 2025.

**(b)** (1 punto) Para el barómetro de noviembre se quiere estimar de nuevo esa proporción con un margen de error de cinco puntos porcentuales y nivel de confianza del $97\%$. Calcule el tamaño de muestra necesario, asumiendo $p=0{,}355$.

### Solución

**(a) Intervalo de confianza al $95\%$.**
Como $n\hat{p}=118{,}2>5$ y $n(1-\hat{p})=214{,}8>5$, es válida la aproximación normal. Con $\alpha=0{,}05$, $z_{\alpha/2}=1{,}96$:
$$IC=\hat{p}\pm z_{\alpha/2}\sqrt{\dfrac{\hat{p}(1-\hat{p})}{n}}=0{,}355\pm1{,}96\sqrt{\dfrac{0{,}355\cdot0{,}645}{333}}.$$
$$=0{,}355\pm0{,}0514=(0{,}3036,\ 0{,}4064).$$

**(b) Tamaño muestral.**
Al $97\%$: $\alpha=0{,}03$, $z_{\alpha/2}\approx2{,}17$. De $E=z_{\alpha/2}\sqrt{\dfrac{\hat{p}(1-\hat{p})}{n}}$ despejamos
$$n\geq\dfrac{z_{\alpha/2}^2\,\hat{p}(1-\hat{p})}{E^2}=\dfrac{2{,}17^2\cdot0{,}355\cdot0{,}645}{0{,}05^2}\approx431{,}29.$$
Se requiere $n=432$ entrevistados.

## Ejercicio 5

### Enunciado

Sean $A$, $B$ y $C$ tres sucesos de los que se conoce:
$$P(A)=0{,}4,\ P(B)=0{,}6,\ P(C)=0{,}5,\ P(A\mid C)=0{,}6,\ P(B\mid C)=0{,}8,$$
$$P(A\cap B\mid C)=P(A\mid C)P(B\mid C),\qquad P(A\cap B\mid \overline{C})=0{,}08.$$

**(a)** (1 punto) Determine si $A$ y $B$ son independientes.

**(b)** (1,5 puntos) Determine la probabilidad de que $C$ ocurra sabiendo que $A$ y $B$ ocurrieron.

### Solución

**(a) Independencia de $A$ y $B$.**
Por la probabilidad total, usando que $A$ y $B$ son condicionalmente independientes dado $C$ ($P(A\cap B\mid C)=0{,}6\cdot0{,}8=0{,}48$):
$$P(A\cap B)=P(A\cap B\mid C)P(C)+P(A\cap B\mid \overline{C})P(\overline{C})=0{,}48\cdot0{,}5+0{,}08\cdot0{,}5=0{,}28.$$
Como $P(A)P(B)=0{,}4\cdot0{,}6=0{,}24\neq0{,}28=P(A\cap B)$, los sucesos $A$ y $B$ **no son independientes**.

**(b) $P(C\mid A\cap B)$.**
Por la regla de Bayes:
$$P(C\mid A\cap B)=\dfrac{P(A\cap B\mid C)P(C)}{P(A\cap B)}=\dfrac{0{,}48\cdot0{,}5}{0{,}28}=\dfrac{0{,}24}{0{,}28}\approx0{,}8571.$$

## Ejercicio 6

### Enunciado

En un laboratorio se realiza un test de calidad. El $3\%$ de los productos tiene defecto grave, el $7\%$ defecto leve y el resto no tiene defectos. El test da positivo el $98\%$ de las veces si el defecto es grave, el $80\%$ si es leve y el $5\%$ si no hay defecto.

**(a)** (1,2 puntos) Calcule la probabilidad de que el test de un producto al azar dé negativo.

**(b)** (1,3 puntos) Si el test ha dado positivo, calcule la probabilidad de que el defecto sea grave.

### Solución

Sean $G$ (defecto grave), $L$ (defecto leve), $N$ (sin defecto), y $+/-$ el resultado del test. Entonces $P(-\mid G)=0{,}02$, $P(-\mid L)=0{,}20$, $P(-\mid N)=0{,}95$.

**(a) Test negativo (probabilidad total).**
$$P(-)=P(-\mid G)P(G)+P(-\mid L)P(L)+P(-\mid N)P(N)$$
$$=0{,}02\cdot0{,}03+0{,}20\cdot0{,}07+0{,}95\cdot0{,}90=0{,}0006+0{,}014+0{,}855=0{,}8696.$$

**(b) Defecto grave dado positivo (Bayes).**
$$P(+)=0{,}98\cdot0{,}03+0{,}80\cdot0{,}07+0{,}05\cdot0{,}90=0{,}0294+0{,}056+0{,}045=0{,}1304.$$
$$P(G\mid +)=\dfrac{P(+\mid G)P(G)}{P(+)}=\dfrac{0{,}0294}{0{,}1304}\approx0{,}2255.$$

## Ejercicio 7

### Enunciado

Considere la región $S$ del plano delimitada por las restricciones
$$x\leq6,\quad 3y-2x\leq10,\quad 3y\geq2-2x,\quad x\leq10-y,\quad y\geq x-6.$$

**(a)** (2 puntos) Calcule las coordenadas de los vértices de $S$ y represente gráficamente la región.

**(b)** (0,5 puntos) Se desea minimizar el triple de $y$ menos la mitad de $x$ en $S$. Indique el valor mínimo y el punto donde se alcanza.

### Solución

**(a) Vértices de $S$.**
Escribimos las restricciones como $x\leq6$, $-2x+3y\leq10$, $2x+3y\geq2$, $x+y\leq10$, $x-y\leq6$. Intersecando las rectas activas se obtienen los vértices:
$$A(4,6),\quad B(6,4),\quad C(6,0),\quad D(4,-2),\quad E(-2,2).$$
(Por ejemplo, $A$ es $x+y=10$ con $-2x+3y=10$; $C$ es $x=6$ con $2x+3y=2$; $D$ es $x=6$... y $x-y=6$ cortando con $2x+3y=2$ da $D(4,-2)$; $E$ es $2x+3y=2$ con $-2x+3y=10$.)

**(b) Minimización de $f(x,y)=3y-\dfrac{x}{2}$.**
Evaluamos en los vértices:
$$\begin{array}{c|ccccc}
\text{Vértice} & A(4,6) & B(6,4) & C(6,0) & D(4,-2) & E(-2,2)\\\hline
f & 16 & 9 & -3 & -8 & 7
\end{array}$$
El mínimo es $f(4,-2)=-8$, alcanzado en $D(4,-2)$.
