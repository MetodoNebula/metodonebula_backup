---
title: Matemáticas Aplicadas a las CCSS II · PAU 2025 · Comunidad Valenciana · Extraordinaria — examen resuelto
seoTitle: PAU Matemáticas Aplicadas a las CCSS II Comunidad Valenciana 2025 resuelta
date: 2025-06-01
updated: 2026-11-05
description: Examen resuelto de Matemáticas Aplicadas a las Ciencias Sociales II de Comunidad Valenciana 2025, con procedimientos completos.
tag: Matemáticas CCSS PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

Dos modelos describen una magnitud (en una escala de $0$ a $1$) en función de $x\in[0,50]$:
$$D_{A}(x)=\dfrac{29x+30}{3000},\qquad D_{B}(x)=\dfrac{x^{2}}{3000}.$$
**(a)** Halle el valor de $x$ en que ambos modelos coinciden.

**(b)** Determine el intervalo donde $D_{A}(x)< D_{B}(x)$ y el intervalo donde $D_{B}(x)< D_{A}(x)$, con $x\in[0,50]$.

**(c)** Calcule el área encerrada entre ambas curvas en cada uno de esos intervalos.

### Solución

**(a)** Igualamos $D_{A}(x)=D_{B}(x)$:
$$29x+30=x^{2}\Rightarrow x^{2}-29x-30=0\Rightarrow (x-30)(x+1)=0\Rightarrow x=30\ \text{o}\ x=-1.$$
La única solución válida en $[0,50]$ es $x=30$.

**(b)** En $[0,30)$ se cumple $D_{B}(x)< D_{A}(x)$ y en $(30,50]$ se cumple $D_{A}(x)< D_{B}(x)$ (basta probar un punto de cada intervalo).

**(c)** Primer recinto, en $[0,30]$:
$$\int_{0}^{30}\big(D_{A}(x)-D_{B}(x)\big)\,dx=\dfrac{1}{3000}\int_{0}^{30}(29x+30-x^{2})\,dx=\dfrac{33}{20}=1{,}65.$$
Segundo recinto, en $[30,50]$:
$$\int_{30}^{50}\big(D_{B}(x)-D_{A}(x)\big)\,dx=\dfrac{1}{3000}\int_{30}^{50}(x^{2}-29x-30)\,dx=\dfrac{133}{45}\approx 2{,}9556.$$

## Ejercicio 2

### Enunciado

Se consideran las matrices
$$A=\begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & -2 \\ 0 & 3 & 0 \end{pmatrix},\quad B=\begin{pmatrix} -3 & -1 & 0 \\ 1 & 0 & -1 \end{pmatrix},\quad C=\begin{pmatrix} 1 & 0 & -1 \\ 4 & 2 & 0 \end{pmatrix}.$$
Resuelva la ecuación matricial
$$2\,X\cdot A+B^{t}\cdot C=I_{3},$$
donde $I_{3}$ es la matriz identidad de orden $3$ y $B^{t}$ la traspuesta de $B$, obteniendo la matriz $X$.

### Solución

Despejamos $X$. De $2XA+B^{t}C=I_{3}$ se obtiene $2XA=I_{3}-B^{t}C$, es decir
$$X=\tfrac{1}{2}\,(I_{3}-B^{t}C)\,A^{-1}.$$
Calculamos $B^{t}C$ (con $B^{t}$ de orden $3\times 2$ y $C$ de orden $2\times 3$):
$$B^{t}C=\begin{pmatrix} 1 & 2 & 3 \\ -1 & 0 & 1 \\ -4 & -2 & 0 \end{pmatrix}.$$
Como $\det(A)=6\neq 0$, existe la inversa:
$$A^{-1}=\begin{pmatrix} 1 & 1 & -\tfrac{1}{3} \\ 0 & 0 & \tfrac{1}{3} \\ 0 & -\tfrac{1}{2} & \tfrac{1}{6} \end{pmatrix}.$$
Entonces $I_{3}-B^{t}C=\begin{pmatrix} 0 & -2 & -3 \\ 1 & 1 & -1 \\ 4 & 2 & 1 \end{pmatrix}$ y
$$X=\tfrac{1}{2}(I_{3}-B^{t}C)\,A^{-1}=\begin{pmatrix} 0 & \tfrac{3}{4} & -\tfrac{7}{12} \\ \tfrac{1}{2} & \tfrac{3}{4} & -\tfrac{1}{12} \\ 2 & \tfrac{7}{4} & -\tfrac{1}{4} \end{pmatrix}.$$

## Ejercicio 3

### Enunciado

Se encuesta a $2000$ ciudadanos sobre dos actividades: limpieza de parques y plantación de árboles. $800$ participaron en la limpieza, $1400$ en la plantación, $300$ en ambas y $100$ en ninguna. Se elige un ciudadano al azar.

**(a)** Probabilidad de que participara en al menos una actividad.

**(b)** Probabilidad de que participara en la limpieza pero no en la plantación.

**(c)** Probabilidad de que participara en exactamente una actividad.

**(d)** Sabiendo que no participó en la plantación, probabilidad de que tampoco participara en la limpieza.

### Solución

Construimos la tabla de contingencia (totales $2000$):

| | Plantación | No plantación | Total |
|---|---|---|---|
| Limpieza | $300$ | $500$ | $800$ |
| No limpieza | $1100$ | $100$ | $1200$ |
| Total | $1400$ | $600$ | $2000$ |

**(a)** Al menos una actividad es el complementario de "ninguna":
$$P=\dfrac{2000-100}{2000}=\dfrac{1900}{2000}=0{,}95.$$

**(b)** Limpieza y no plantación: $\dfrac{500}{2000}=0{,}25$.

**(c)** Exactamente una actividad: $\dfrac{500+1100}{2000}=\dfrac{1600}{2000}=0{,}80$.

**(d)** Probabilidad condicionada:
$$P(\text{no limpieza}\mid\text{no plantación})=\dfrac{100/2000}{600/2000}=\dfrac{100}{600}\approx 0{,}1667.$$

## Ejercicio 4

### Enunciado

Una agencia programa excursiones a la montaña y a la playa. Cada excursión a la montaña proporciona un beneficio de $700$€ y cada una a la playa de $500$€. Las excursiones están sujetas a las restricciones $2x+2y\leq 10$ y $2x+y\leq 8$, siendo $x$ el número de excursiones a la montaña e $y$ el de excursiones a la playa.

**(a)** Determine cuántas excursiones de cada tipo debe programar la agencia para maximizar el beneficio.

**(b)** Calcule el beneficio máximo.

### Solución

Sea $x$ el número de excursiones a la montaña e $y$ el de excursiones a la playa. Se maximiza la función objetivo $f(x,y)=700x+500y$ con
$$\begin{cases} 2x+2y\leq 10 \\ 2x+y\leq 8 \\ x\geq 0,\ y\geq 0 \end{cases}$$
**(a)** La región factible es un cuadrilátero de vértices $A(3,2)$, $B(0,5)$, $C(4,0)$ y $D(0,0)$. El vértice $A(3,2)$ es la intersección de $2x+2y=10$ y $2x+y=8$. Evaluamos $f$:
$$\begin{aligned} D(0,0)&\to 0 \\ B(0,5)&\to 2500 \\ C(4,0)&\to 2800 \\ A(3,2)&\to 3100\ (\text{máximo}) \end{aligned}$$
El máximo se alcanza en $A(3,2)$: $3$ excursiones a la montaña y $2$ a la playa.

**(b)** El beneficio máximo es $f(3,2)=700\cdot 3+500\cdot 2=3100$€.

## Ejercicio 5

### Enunciado

Se considera la función
$$f(x)=\dfrac{x}{(x+1)^{2}}.$$
**(a)** Determine el dominio y los puntos de corte con los ejes.

**(b)** Halle las asíntotas vertical y horizontal.

**(c)** Estudie los intervalos de crecimiento y decrecimiento y los extremos locales.

**(d)** Represente gráficamente la función a partir de los resultados anteriores.

### Solución

**(a)** Dominio: se anula el denominador en $x=-1$, luego $\text{Dom}(f)=\mathbb{R}\setminus\{-1\}$. Cortes: $f(x)=0\Rightarrow x=0$; el único corte con los ejes es $(0,0)$.

**(b)** En $x=-1$: $\lim_{x\to -1}f(x)=-\infty$, luego hay **asíntota vertical** $x=-1$. Como $\lim_{x\to\pm\infty}\dfrac{x}{(x+1)^{2}}=0$, hay **asíntota horizontal** $y=0$.

**(c)** Derivada:
$$f'(x)=\dfrac{(x+1)^{2}-x\cdot 2(x+1)}{(x+1)^{4}}=\dfrac{1-x}{(x+1)^{3}}.$$
$f'(x)=0\Rightarrow x=1$. Estudiando el signo: $f$ es **decreciente** en $(-\infty,-1)$, **creciente** en $(-1,1)$ y **decreciente** en $(1,+\infty)$. Hay un **máximo local** en $x=1$, con $f(1)=\dfrac{1}{4}$. No hay mínimos locales.

**(d)** Con dominio $\mathbb{R}\setminus\{-1\}$, paso por $(0,0)$, asíntota vertical $x=-1$, asíntota horizontal $y=0$ y máximo en $\big(1,\tfrac{1}{4}\big)$, se dibuja la curva: a la izquierda de $x=-1$ decrece hacia $y=0^{-}$... creciendo hasta el máximo $(1,\tfrac14)$ y decreciendo de nuevo hacia $y=0^{+}$.
