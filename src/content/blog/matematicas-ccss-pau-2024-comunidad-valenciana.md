---
title: Matemáticas Aplicadas a las CCSS II · PAU 2024 · Comunidad Valenciana — examen resuelto
seoTitle: PAU Matemáticas Aplicadas a las CCSS II Comunidad Valenciana 2024 resuelta
date: 2024-06-01
updated: 2026-11-05
description: Examen resuelto de Matemáticas Aplicadas a las Ciencias Sociales II de Comunidad Valenciana 2024, con procedimientos completos.
tag: Matemáticas CCSS PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

Se considera $f(x)=\begin{cases} x^{3}+ax^{2}+24x & \text{si } x\leq -1 \\ (x-1)^{2}+3 & \text{si } x>-1 \end{cases}$.

**(a)** Determina el valor de $a$ para que $f$ sea continua en $x=-1$ (y razona que es continua en los demás puntos para cualquier $a$).
**(b)** Para $a=9$, calcula el máximo y el mínimo local de la rama $x\leq-1$.
**(c)** Para $a=0$, calcula el área limitada por $f$, el eje $OX$ y las rectas $x=2$ y $x=3$.

### Solución

**(a)** En cada rama $f$ es polinómica, luego continua. En $x=-1$:
$$\lim_{x\to-1^{-}}(x^{3}+ax^{2}+24x)=-1+a-24=a-25,\qquad \lim_{x\to-1^{+}}\big((x-1)^{2}+3\big)=4+3=7.$$
Continuidad $\Rightarrow a-25=7\Rightarrow a=32$.

**(b)** Con $a=9$, $g(x)=x^{3}+9x^{2}+24x$, $g'(x)=3x^{2}+18x+24=3(x+2)(x+4)=0\Rightarrow x=-4,\ x=-2$ (ambos en $x\leq-1$).
$g''(x)=6x+18$: $g''(-4)=-6<0\Rightarrow$ **máximo local** en $x=-4$, $g(-4)=-16$. $g''(-2)=6>0\Rightarrow$ **mínimo local** en $x=-2$, $g(-2)=-20$.

**(c)** En $[2,3]$ se usa la rama $(x-1)^{2}+3>0$. Una primitiva es $\dfrac{x^{3}}{3}-x^{2}+4x$, y
$$A=\int_{2}^{3}\big((x-1)^{2}+3\big)dx=\left[\frac{(x-1)^{3}}{3}+3x\right]_{2}^{3}=\left(\frac{8}{3}+9\right)-\left(\frac{1}{3}+6\right)=\frac{16}{3}\approx5{,}3333\ \text{u}^{2}.$$

## Ejercicio 2

### Enunciado

Sean $A=\begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ y $B=\begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix}$, e $I$ la identidad de orden $3$.

**(a)** Resuelve $X^{-1}A+A=B$ y obtén $X$.
**(b)** Resuelve $(A-B)Y-AY=I$ y obtén $Y$.
**(c)** Resuelve $AZA^{-1}=I$ y obtén $Z$.

### Solución

**(a)** $X^{-1}A+A=B\Rightarrow X^{-1}A=B-A\Rightarrow X^{-1}=(B-A)A^{-1}\Rightarrow X=A\,(B-A)^{-1}$.
$B-A=\begin{pmatrix} 0 & 1 & 1 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{pmatrix}$, con $(B-A)^{-1}=\begin{pmatrix} 0 & 0 & 1 \\ 1 & -1 & 0 \\ 0 & 1 & 0 \end{pmatrix}$. Entonces
$$X=A\,(B-A)^{-1}=\begin{pmatrix} 0 & -1 & 1 \\ 1 & -1 & 0 \\ 0 & 1 & 0 \end{pmatrix}.$$

**(b)** $(A-B)Y-AY=(A-B-A)Y=-BY=I\Rightarrow Y=-B^{-1}$. Como $|B|=2$ y $B^{-1}=\dfrac12\begin{pmatrix} 1 & -1 & 1 \\ 1 & 1 & -1 \\ -1 & 1 & 1 \end{pmatrix}$,
$$Y=-B^{-1}=-\frac12\begin{pmatrix} 1 & -1 & 1 \\ 1 & 1 & -1 \\ -1 & 1 & 1 \end{pmatrix}.$$

**(c)** $AZA^{-1}=I\Rightarrow Z=A^{-1}IA=A^{-1}A=I$.

## Ejercicio 3

### Enunciado

En una empresa, el $30\%$ de los directivos conoce inglés y alemán, el $40\%$ conoce inglés y el $40\%$ de los que conocen alemán también conocen inglés. Se elige un directivo al azar. Calcula:

**(a)** La probabilidad de que conozca alemán.
**(b)** La probabilidad de que conozca alemán pero no inglés.
**(c)** Sabiendo que no conoce alemán, la probabilidad de que conozca inglés.

### Solución

Sean $I$ (inglés) y $Al$ (alemán).

**(a)** De $P(I\mid Al)=\dfrac{P(I\cap Al)}{P(Al)}=0{,}40$ y $P(I\cap Al)=0{,}30$:
$$P(Al)=\frac{0{,}30}{0{,}40}=0{,}75.$$

**(b)** $P(Al\cap \overline{I})=P(Al)-P(Al\cap I)=0{,}75-0{,}30=0{,}45$.

**(c)** $P(I\mid \overline{Al})=\dfrac{P(I\cap\overline{Al})}{P(\overline{Al})}=\dfrac{P(I)-P(I\cap Al)}{1-P(Al)}=\dfrac{0{,}40-0{,}30}{1-0{,}75}=\dfrac{0{,}10}{0{,}25}=0{,}40$.

## Ejercicio 4

### Enunciado

Se lanza un dado equilibrado. Si sale un número mayor que $2$, se lanza dos veces una moneda equilibrada; en caso contrario (resultado $\leq2$), se lanza dos veces una moneda trucada en la que la cara es tres veces más probable que la cruz ($P(\text{cara})=\tfrac34$).

**(a)** Sabiendo que han salido dos caras, halla la probabilidad de que el dado mostrara un número mayor que $2$.
**(b)** Calcula la probabilidad de la unión de los sucesos «el dado es $\leq2$» y «sale al menos una cara en los dos lanzamientos».
**(c)** Estudia si los sucesos «sacar un $6$» y «obtener dos cruces» son independientes.

### Solución

**(a)** $P(CC)=P(CC\mid>2)P(>2)+P(CC\mid\leq2)P(\leq2)=\dfrac14\cdot\dfrac23+\dfrac{9}{16}\cdot\dfrac13=\dfrac{8}{48}+\dfrac{9}{48}=\dfrac{17}{48}$.
$$P(>2\mid CC)=\frac{\tfrac14\cdot\tfrac23}{\tfrac{17}{48}}=\frac{8/48}{17/48}=\frac{8}{17}\approx0{,}4706.$$

**(b)** Sea $S=\{\text{dado}\leq2\}$ ($P=\tfrac13$) y $H=\{\text{al menos una cara}\}$. $P(\text{sin caras})=P(XX)=\tfrac14\cdot\tfrac23+\tfrac1{16}\cdot\tfrac13=\tfrac{9}{48}=\tfrac{3}{16}$, luego $P(H)=\tfrac{13}{16}$. $P(S\cap H)=\tfrac13\left(1-\tfrac1{16}\right)=\tfrac{5}{16}$.
$$P(S\cup H)=P(S)+P(H)-P(S\cap H)=\frac13+\frac{13}{16}-\frac{5}{16}=\frac13+\frac12=\frac{5}{6}\approx0{,}8333.$$

**(c)** $P(\text{sacar }6)=\tfrac16$; como $6>2$, moneda justa: $P(\text{dos cruces}\mid 6)=\tfrac14$, luego $P(6\cap XX)=\tfrac16\cdot\tfrac14=\tfrac{1}{24}$. Por otra parte $P(XX)=\tfrac{3}{16}$ y $P(6)\cdot P(XX)=\tfrac16\cdot\tfrac{3}{16}=\tfrac{1}{32}$. Como $\tfrac{1}{24}\neq\tfrac{1}{32}$, los sucesos **no son independientes**.

## Ejercicio 5

### Enunciado

Se considera la función $f(x)=\dfrac{x^{2}-3x}{(x-1)^{2}}$.

**(a)** Halla el dominio y los puntos de corte con los ejes.
**(b)** Determina las asíntotas vertical y horizontal.
**(c)** Estudia los intervalos de crecimiento y decrecimiento.
**(d)** Calcula los máximos y mínimos locales.
**(e)** Representa la gráfica de la función.

### Solución

**(a)** Dominio $\mathbb{R}-\{1\}$. Cortes: $x^{2}-3x=0\Rightarrow x=0,\ x=3$, luego $(0,0)$ y $(3,0)$.

**(b)** Vertical: $x=1$ (anula el denominador y no el numerador). Horizontal: como numerador y denominador tienen grado $2$, $\displaystyle\lim_{x\to\pm\infty}f(x)=1$, luego $y=1$.

**(c)-(d)** $f'(x)=\dfrac{(2x-3)(x-1)^{2}-(x^{2}-3x)\cdot2(x-1)}{(x-1)^{4}}=\dfrac{x+3}{(x-1)^{3}}$.
$f'(x)=0\Rightarrow x=-3$. Signo de $f'$: positivo en $(-\infty,-3)$, negativo en $(-3,1)$, positivo en $(1,+\infty)$. Por tanto $f$ **crece** en $(-\infty,-3)\cup(1,+\infty)$ y **decrece** en $(-3,1)$.
En $x=-3$ hay un **máximo local** con $f(-3)=\dfrac{9+9}{16}=\dfrac{9}{8}$. No hay mínimos locales.

**(e)** Dos ramas separadas por $x=1$, con asíntota horizontal $y=1$, cortes $(0,0)$ y $(3,0)$, y máximo en $\left(-3,\tfrac{9}{8}\right)$.

## Ejercicio 6

### Enunciado

Una tienda vendió $220$ televisores de tres modelos: ULED ($x$), QLED ($y$) y LD ($z$), con precios $1250$ €, $1125$ € y $1000$ €, respectivamente, recaudando $247250$ €. Además, el número de televisores ULED vendidos es la tercera parte del total vendido de los otros dos modelos (es decir, $y+z=3x$). Determina cuántos televisores de cada modelo se vendieron.

### Solución

Con $x$ (ULED), $y$ (QLED), $z$ (LD) el sistema es:
$$\begin{cases} x+y+z=220 \\ 1250x+1125y+1000z=247250 \\ 3x-y-z=0 \end{cases}$$
Sumando la $1.ª$ y la $3.ª$: $4x=220\Rightarrow x=55$. Entonces $y+z=165$.
Sustituyendo en la $2.ª$: $1250\cdot55+1125y+1000z=247250\Rightarrow1125y+1000z=178500$, y con $z=165-y$:
$$1125y+1000(165-y)=178500\Rightarrow125y=13500\Rightarrow y=108,\ z=57.$$
Comprobación: $55+108+57=220$ y $1250\cdot55+1125\cdot108+1000\cdot57=247250$.
