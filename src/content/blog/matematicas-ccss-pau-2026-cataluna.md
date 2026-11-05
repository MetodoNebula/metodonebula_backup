---
title: Matemáticas Aplicadas a las CCSS II · PAU 2026 · Cataluña — examen resuelto
seoTitle: PAU Matemáticas Aplicadas a las CCSS II Cataluña 2026 resuelta
date: 2026-06-01
updated: 2026-11-05
description: Examen resuelto de Matemáticas Aplicadas a las Ciencias Sociales II de Cataluña 2026, con procedimientos completos.
tag: Matemáticas CCSS PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

El número de seguidores de un médico divulgador, en función del tiempo $t$ (en semanas), es $f(t)=10t^3-120t^2+450t+700$, con $t\in[0,10]$.

**(1.1)** ¿Cuántos seguidores tiene al principio y al cabo de $10$ semanas? Estudia los intervalos de crecimiento y decrecimiento, determina los extremos locales y esboza la gráfica.

**(1.2)** ¿En qué semana cuelga el vídeo polémico (pierde seguidores) y cuántos tiene? ¿En qué semana cuelga el vídeo de éxito? A lo largo de las $10$ semanas, ¿cuándo tiene más seguidores?

### Solución

**(1.1)** Valores en los extremos del intervalo:
$$f(0)=700,\qquad f(10)=10000-12000+4500+700=3200.$$

Derivada: $f'(t)=30t^2-240t+450=30(t^2-8t+15)=30(t-3)(t-5)$, que se anula en $t=3$ y $t=5$.

- En $[0,3)$: $f'(1)=240>0$, creciente.
- En $(3,5)$: $f'(4)=-30<0$, decreciente.
- En $(5,10]$: $f'(6)=90>0$, creciente.

Por tanto hay un **máximo relativo** en $t=3$, $f(3)=270-1080+1350+700=1240$, y un **mínimo relativo** en $t=5$, $f(5)=1250-3000+2250+700=1200$.

**(1.2)** El vídeo polémico (pierde seguidores, empieza a decrecer) lo cuelga en la **semana $3$**, cuando tiene $1240$ seguidores. El vídeo de éxito (vuelve a crecer) lo cuelga en la **semana $5$** (mínimo, $1200$ seguidores). Comparando el máximo relativo ($1240$) con el valor final $f(10)=3200$, el máximo absoluto en $[0,10]$ está en $t=10$: tiene más seguidores al final, con $3200$.

## Ejercicio 2

### Enunciado

La tabla recoge los estudiantes de grado (G), máster (M) y doctorado (D) en las facultades de Ciencias (C), Ingeniería (I) y Letras (L):

| Facultad | G | M | D | Total |
|---|---|---|---|---|
| Ciencias | 450 | 172 | 41 | 663 |
| Ingeniería | 445 | 178 | 45 | 668 |
| Letras | 438 | 183 | 48 | 669 |
| Total | 1333 | 533 | 134 | 2000 |

**(4.1)** Si se escoge un estudiante al azar, ¿probabilidad de que sea de doctorado de Letras? Si se escoge al azar un estudiante de máster, ¿probabilidad de que estudie en Ingeniería?

**(4.2)** Expresa la tabla (sin totales) como matriz $3\times 3$ y calcula, con un producto de matrices, el vector con el total de estudiantes de grado, máster y doctorado. Si grado paga $1000$ €, máster $1500$ € y doctorado $500$ €, calcula mediante producto de matrices el importe total de matrículas.

### Solución

**(4.1)** Por la regla de Laplace:
$$P(D\cap L)=\dfrac{48}{2000}=0{,}024.$$
$$P(I\mid M)=\dfrac{178}{533}\approx 0{,}334.$$

**(4.2)** Matriz de la tabla (filas = facultades, columnas = G, M, D):
$$T=\begin{pmatrix} 450 & 172 & 41 \\ 445 & 178 & 45 \\ 438 & 183 & 48 \end{pmatrix}.$$
Multiplicando por la fila $(1\;1\;1)$ se obtiene el total por nivel:
$$(1\;\;1\;\;1)\cdot T=(1333\;\;533\;\;134).$$
Multiplicando este vector por la columna de precios:
$$(1333\;\;533\;\;134)\begin{pmatrix} 1000 \\ 1500 \\ 500 \end{pmatrix}=1333\cdot 1000+533\cdot 1500+134\cdot 500=2199500\ \text{€}.$$

## Ejercicio 3

### Enunciado

Una empresa considera una página web eficiente si carga en menos de $3$ s y afirma que al menos el $50\,\%$ de las que gestiona son eficientes. Se toma una muestra de $n=2500$ páginas.

**(3.1)** Suponiendo $p=0{,}5$ de que una página sea eficiente (independiente del resto), sea $X$ el número de páginas eficientes de la muestra. ¿Qué distribución sigue $X$? Calcula la probabilidad de que como mucho $1299$ sean eficientes, usando la aproximación normal sin corrección por continuidad.

**(3.2)** En la muestra se obtiene media del tiempo de carga $\overline{x}=2{,}95$ s y desviación típica muestral $s=0{,}38$ s. Construye un intervalo de confianza del $95\,\%$ para el tiempo medio de carga. ¿Qué puede decirse sobre la afirmación de la empresa?

### Solución

**(3.1)** $X$ sigue una distribución binomial $X\sim B(2500,\,0{,}5)$. Como $n$ es grande, se aproxima por una normal $Y\sim\mathcal N(\mu,\sigma)$ con
$$\mu=np=2500\cdot 0{,}5=1250,\qquad \sigma=\sqrt{npq}=\sqrt{2500\cdot 0{,}5\cdot 0{,}5}=25.$$
Sin corrección por continuidad:
$$P(X\leq 1299)\approx P\Bigl(Z\leq \dfrac{1299-1250}{25}\Bigr)=P(Z\leq 1{,}96)=0{,}975.$$

**(3.2)** Con $z_{\alpha/2}=1{,}96$, el error es
$$E=z_{\alpha/2}\dfrac{s}{\sqrt n}=1{,}96\cdot\dfrac{0{,}38}{\sqrt{2500}}=1{,}96\cdot 0{,}0076\approx 0{,}015\ \text{s}.$$
El intervalo de confianza del $95\,\%$ para la media es
$$\Bigl(2{,}95-0{,}015,\;2{,}95+0{,}015\Bigr)=(2{,}935,\;2{,}965)\ \text{s}.$$
Como el extremo superior $2{,}965<3$, con confianza $95\,\%$ el tiempo medio de carga es inferior a $3$ s, lo que respalda la afirmación de que al menos el $50\,\%$ de las páginas son eficientes.

## Ejercicio 4

### Enunciado

Un campesino vende cajas de fresas ($f$), albaricoques ($a$) y cerezas ($c$). Un pedido de $5$ cajas de fresas, $3$ de albaricoques y $4$ de cerezas cuesta $120$ €; otro de $2$ cajas de fresas, $1$ de albaricoques y $3$ de cerezas cuesta $56$ €.

**(2.1)** Calcula el precio de una caja de fresas y de una de albaricoques en función del precio de una caja de cerezas. Con ello, calcula el precio de un pedido de $6$ cajas de fresas, $4$ de albaricoques y $2$ de cerezas.

**(2.2)** Si una caja de albaricoques cuesta $12{,}50$ €, calcula el precio de las otras dos.

### Solución

**(2.1)** El sistema tiene $2$ ecuaciones y $3$ incógnitas, luego es compatible indeterminado: expresamos $f$ y $a$ en función de $c$.

De $2f+a+3c=56$ se despeja $a=56-2f-3c$. Sustituyendo en $5f+3a+4c=120$:
$$5f+3(56-2f-3c)+4c=120\Rightarrow 168-f-5c=120\Rightarrow f=48-5c.$$
Y entonces $a=56-2(48-5c)-3c=7c-40$.

El pedido de $6$ cajas de fresas, $4$ de albaricoques y $2$ de cerezas cuesta
$$6f+4a+2c=6(48-5c)+4(7c-40)+2c=288-30c+28c-160+2c=128\ \text{€}.$$
(El resultado no depende de $c$.)

**(2.2)** Si $a=12{,}50$, de $a=7c-40$: $12{,}5=7c-40\Rightarrow c=\dfrac{52{,}5}{7}=7{,}5$ €. Entonces $f=48-5\cdot 7{,}5=10{,}5$ €.

## Ejercicio 5

### Enunciado

Con la misma tabla de estudiantes de grado (G), máster (M) y doctorado (D) en Ciencias (C), Ingeniería (I) y Letras (L) (totales G$=1333$, M$=533$, D$=134$; total $2000$):

**(4.1)** Si se escoge un estudiante al azar, ¿probabilidad de que sea de máster de Ciencias? Si se escoge al azar un estudiante de Ingeniería, ¿probabilidad de que curse un máster?

**(4.2)** Hay $1036$ estudiantes con beca. Considerando conjuntamente grado y máster, la mitad están becados, y hay el mismo número de becados de máster que de doctorado. Determina cuántos becados hay de cada nivel (grado, máster y doctorado).

### Solución

**(4.1)** Por la regla de Laplace:
$$P(M\cap C)=\dfrac{172}{2000}=0{,}086,\qquad P(M\mid I)=\dfrac{178}{668}\approx 0{,}2665.$$

**(4.2)** Sean $g$, $m$, $d$ los becados de grado, máster y doctorado.
- Total becados: $g+m+d=1036$.
- La mitad de los estudiantes de grado y máster están becados: $g+m=\dfrac{1333+533}{2}=933$.
- Igual número de becados de máster y doctorado: $m=d$.

Sustituyendo $g+m=933$ y $m=d$ en la primera ecuación: $933+d=1036\Rightarrow d=103$, luego $m=103$ y $g=933-103=830$.
