---
title: Matemáticas Aplicadas a las CCSS II · PAU 2026 · Asturias — examen resuelto
seoTitle: PAU Matemáticas Aplicadas a las CCSS II Asturias 2026 resuelta
date: 2026-06-01
updated: 2026-11-05
description: Examen resuelto de Matemáticas Aplicadas a las Ciencias Sociales II de Asturias 2026, con procedimientos completos.
tag: Matemáticas CCSS PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

Se construye una sucesión de figuras encadenando hexágonos, de modo que cada hexágono nuevo comparte un lado con el anterior. Contando palitos $p$ (lados) y vértices $v$ se observa: Figura 1: $6$ palitos y $6$ vértices; Figura 2: $11$ palitos y $10$ vértices; Figura 3: $16$ palitos y $14$ vértices.

**(a)** Determine el número de palitos y de vértices de la figura $16$, y obtenga una fórmula general para el número de palitos.

**(b)** ¿Existe alguna figura con $206$ palitos? En caso afirmativo, indique su número y cuántos vértices tiene.

### Solución

**(a)** Los palitos forman una progresión aritmética de primer término $6$ y diferencia $5$:
$$p=6+5(n-1)=5n+1.$$
Para $n=16$: $p=5\cdot16+1=81$ palitos. Los vértices siguen $v=4n+2$, luego para $n=16$: $v=4\cdot16+2=66$ vértices. (También $v=\dfrac{4p+6}{5}=\dfrac{4\cdot81+6}{5}=66$.)

**(b)** Como $p=5n+1$, un número de palitos válido debe ser un múltiplo de $5$ más $1$; $206=5\cdot41+1$ lo cumple:
$$5n+1=206\ \Rightarrow\ n=\frac{205}{5}=41.$$
Es la figura $41$. Sus vértices son $v=4\cdot41+2=166$ (o $v=\dfrac{4\cdot206+6}{5}=166$).

## Ejercicio 2

### Enunciado

Las ventas (en miles de euros) de un producto $t$ meses después de su lanzamiento vienen dadas por
$$v(t)=\begin{cases} 2t+5, & 0<t<3\\ -t^2+10t+k, & 3\le t<8\\ 6, & 8\le t\le 12\end{cases}$$

**(a)** Determine el valor de $k$ para que $v(t)$ sea continua en todo su dominio.

**(b)** Estudie en qué intervalo aumentan las ventas y en qué instante alcanzan su mayor valor, indicando dicho valor.

**(c)** Calcule las ventas totales acumuladas entre $t=5$ y $t=9$ mediante la integral definida $\int_5^9 v(t)\,dt$.

### Solución

**(a)** Cada trozo es polinómico, luego sólo hay que exigir continuidad en los puntos de unión $t=3$ y $t=8$.

En $t=3$: $\lim_{t\to3^-}(2t+5)=11$ y $\lim_{t\to3^+}(-t^2+10t+k)=-9+30+k=21+k$. Igualando,
$$11=21+k\ \Rightarrow\ k=-10.$$
En $t=8$ con $k=-10$: $\lim_{t\to8^-}(-t^2+10t-10)=-64+80-10=6$ y el tercer trozo vale $6$. Coinciden, así que $v$ es continua con $k=-10$.

**(b)** En $(0,3)$: $v'(t)=2>0$, creciente. En $[3,8)$: $v'(t)=-2t+10>0\iff t<5$. A partir de $t\ge 8$ es constante. Por tanto las ventas **aumentan en $(0,5)$**. El máximo se alcanza en el vértice $t=5$:
$$v(5)=-25+50-10=15,$$
es decir, $15\,000$ € en el quinto mes.

**(c)**
$$\int_5^9 v(t)\,dt=\int_5^8(-t^2+10t-10)\,dt+\int_8^9 6\,dt.$$
$$\int_5^8(-t^2+10t-10)\,dt=\Big[-\tfrac{t^3}{3}+5t^2-10t\Big]_5^8=36,\qquad \int_8^9 6\,dt=6.$$
Total $=36+6=42$, es decir, $42\,000$ €.

## Ejercicio 3

### Enunciado

En una encuesta a $n=800$ personas sobre presupuestos participativos, el intervalo de confianza al $95\%$ para la proporción poblacional de apoyo es $(0{,}6169,\ 0{,}6831)$.

**(a)** Determine la proporción muestral $\hat p$ y el número de personas que respondieron afirmativamente.

**(b)** El intervalo contiene el valor $2/3\approx0{,}66$. ¿Se puede garantizar con esa confianza que la proporción real supera dos tercios?

**(c)** Un segundo intervalo, con la misma muestra ($n=800$, $\hat p=0{,}65$), es $(0{,}6107,\ 0{,}6893)$. Determine el nivel de confianza empleado.

### Solución

**(a)** La proporción muestral es el centro del intervalo:
$$\hat p=\frac{0{,}6169+0{,}6831}{2}=0{,}65.$$
Número de respuestas afirmativas: $n\hat p=800\cdot0{,}65=520$ personas.

**(b)** El valor $2/3\approx0{,}66$ está dentro del intervalo pero no es su extremo inferior; por tanto no puede asegurarse que la proporción real supere dos tercios con ese nivel de confianza.

**(c)** El segundo intervalo es más ancho con la misma muestra, luego su confianza es mayor que el $95\%$. Su semiamplitud es $\varepsilon=0{,}6893-0{,}65=0{,}0393$. De
$$\varepsilon=z_{\alpha/2}\sqrt{\frac{\hat p(1-\hat p)}{n}}\ \Rightarrow\ 0{,}0393=z_{\alpha/2}\sqrt{\frac{0{,}65\cdot0{,}35}{800}}\ \Rightarrow\ z_{\alpha/2}\approx2{,}33.$$
Como $\Phi(2{,}33)=0{,}99$, se tiene $1-\alpha/2=0{,}99\Rightarrow\alpha=0{,}02$, de modo que el nivel de confianza es $1-\alpha=0{,}98$ (**98 %**).

## Ejercicio 4

### Enunciado

El gasto mensual en alquiler de una persona joven sigue $X\sim N(\mu,\ 150)$ (desviación típica $\sigma=150$ €).

**(a)** Halle el tamaño muestral mínimo para estimar $\mu$ con un error $\varepsilon\le20$ € y un nivel de confianza del $95\%$.

**(b)** Con cierta muestra se obtiene el intervalo de confianza $(741{,}77,\ 758{,}23)$. Determine la media muestral $\overline{x}$.

**(c)** Explique de qué depende el error de estimación $\varepsilon=z_{\alpha/2}\dfrac{\sigma}{\sqrt n}$ si se mantienen fijos el nivel de confianza y $\sigma$.

### Solución

**(a)** El tamaño mínimo cumple
$$n\ge\left(\frac{z_{\alpha/2}\,\sigma}{\varepsilon}\right)^2=\left(\frac{1{,}96\cdot150}{20}\right)^2=(14{,}7)^2=216{,}09,$$
luego $n=217$ personas.

**(b)** La media muestral es el centro del intervalo:
$$\overline{x}=\frac{741{,}77+758{,}23}{2}=\frac{1500}{2}=750\ \text{€}.$$

**(c)** Con $z_{\alpha/2}$ y $\sigma$ constantes, $\varepsilon$ depende sólo de $n$ y es inversamente proporcional a $\sqrt n$: al aumentar la muestra, el error disminuye. No depende del valor concreto de $\overline{x}$.

## Ejercicio 5

### Enunciado

En una población estudiantil, los estratos son alto $A$, medio $M$ y bajo $B$ con $P(A)=0{,}2$, $P(M)=0{,}5$, $P(B)=0{,}3$. La probabilidad de abandonar los estudios $D$ según el estrato es $P(D/A)=0{,}05$, $P(D/M)=0{,}15$, $P(D/B)=0{,}3$.

**(a)** Si una persona ha abandonado, ¿a qué estrato es más probable que pertenezca?

**(b)** ¿Existe relación entre el abandono y el estrato socioeconómico?

**(c)** Entre quienes acuden al servicio de orientación $O$ se sabe que $P(D/O)=0{,}12$. ¿Influye la orientación en el abandono?

### Solución

**(a)** Probabilidad total de abandono:
$$P(D)=0{,}2\cdot0{,}05+0{,}5\cdot0{,}15+0{,}3\cdot0{,}3=0{,}01+0{,}075+0{,}09=0{,}175.$$
Por el teorema de Bayes:
$$P(A/D)=\frac{0{,}01}{0{,}175}\approx0{,}0571,\quad P(M/D)=\frac{0{,}075}{0{,}175}\approx0{,}4286,\quad P(B/D)=\frac{0{,}09}{0{,}175}\approx0{,}5143.$$
Lo más probable es que pertenezca al **estrato bajo** $B$.

**(b)** Sí existe relación: $P(D/A)=0{,}05$, $P(D/M)=0{,}15$, $P(D/B)=0{,}3$ no son iguales. A menor nivel económico, mayor tasa de abandono, luego $D$ depende del estrato.

**(c)** Como $P(D/O)=0{,}12<0{,}175=P(D)$, acudir a orientación reduce la probabilidad de abandono: influye (la disminuye).

## Ejercicio 6

### Enunciado

Una persona compra ropa en plataformas de segunda mano $S$ con $P(S)=0{,}7$, o en tiendas tradicionales $T$ con $P(T)=0{,}3$. La probabilidad de donar ropa a una ONG $D$ es $P(D/S)=0{,}6$ y $P(D/T)=0{,}2$.

**(a)** Calcule la probabilidad de que una persona compre en segunda mano y done ropa, $P(S\cap D)$.

**(b)** ¿Es donar ropa independiente del lugar de compra?

**(c)** Si una persona dona ropa, ¿cuál es la probabilidad de que compre en tiendas tradicionales, $P(T/D)$?

### Solución

**(a)**
$$P(S\cap D)=P(S)\cdot P(D/S)=0{,}7\cdot0{,}6=0{,}42.$$

**(b)** La probabilidad total de donar es
$$P(D)=P(S)P(D/S)+P(T)P(D/T)=0{,}7\cdot0{,}6+0{,}3\cdot0{,}2=0{,}42+0{,}06=0{,}48.$$
Como $P(D/S)=0{,}6\neq0{,}48=P(D)$, los sucesos $D$ y $S$ **no son independientes**: donar depende del lugar de compra.

**(c)** Por Bayes,
$$P(T/D)=\frac{P(T)\cdot P(D/T)}{P(D)}=\frac{0{,}3\cdot0{,}2}{0{,}48}=\frac{0{,}06}{0{,}48}=\frac18=0{,}125.$$

## Ejercicio 7

### Enunciado

Una furgoneta transporta mesas ($x$) y sillas ($y$). Por peso: $25x+8y\le 800$. Por volumen: $0{,}6x+0{,}2y\le 15$ (equivalente a $3x+y\le 75$). Por criterio de carga se exige al menos dos sillas por mesa: $2x\le y$. Además $x,y\ge 0$ (y en la práctica enteros).

**(a)** Identifique la región factible y sus vértices.

**(b)** Razone si la restricción de peso $25x+8y\le 800$ limita realmente la solución, y si el punto $(1{,}15,\,2{,}3)$ puede ser solución.

**(c)** Se quiere maximizar el beneficio $z(x,y)=35x+10y$ (en €). Determine el óptimo.

### Solución

**(a)** Las restricciones activas son $x=0$, $3x+y=75$ y $y=2x$. Los vértices del recinto son:
$$E=(0,0),\qquad B=(0,75),\qquad C=(15,30),$$
donde $C$ es la intersección de $y=2x$ con $3x+y=75$: $3x+2x=75\Rightarrow x=15,\ y=30$. (En $B$ y $C$ se cumple $25x+8y\le 800$.)

**(b)** La inecuación de peso $25x+8y\le 800$ es **redundante**: no interviene en los lados del recinto (en $C$ vale $615\le 800$), luego el peso no limita la solución. El punto $(1{,}15,\,2{,}3)$ está dentro de la región, pero **no es solución válida** porque las coordenadas no son enteras (no se pueden enviar fracciones de mesas o sillas).

**(c)** Evaluamos $z=35x+10y$ en los vértices:
$$z(B)=35\cdot0+10\cdot75=750,\quad z(C)=35\cdot15+10\cdot30=825,\quad z(E)=0.$$
El máximo es $825$ € en $C=(15,30)$: enviar $15$ mesas y $30$ sillas.

## Ejercicio 8

### Enunciado

Se dan tres funciones y tres gráficas numeradas. Una de las funciones, $(A)$, está definida a trozos; otra, $(B)$, es una función cuadrática (parábola); y la tercera es $(C)$: $g(x)=e^{-x}+1$.

**(a)** Empareje cada función con su gráfica, justificando el criterio utilizado.

**(b)** Para la función $g(x)=e^{-x}+1$: estudie su dominio, su monotonía (calculando $g'(x)$) y su comportamiento cuando $x\to\infty$. Razone si $g$ puede alcanzar en algún momento el valor $1{,}5$ y si puede tomar valores inferiores a $1$.

**(c)** Un técnico propone usar $g(x)$ para modelizar las visualizaciones de un fenómeno viral (en cientos de miles). Razone si es adecuado.

### Solución

**(a)** La única función definida a trozos es $(A)$, que se corresponde con la gráfica que presenta un cambio de comportamiento (la $(3)$). La función cuadrática $(B)$ es una parábola, que se corresponde con la gráfica simétrica respecto a un eje vertical (la $(1)$). Por exclusión —o por ser la única siempre decreciente (desde $+\infty$ hacia la asíntota $y=1$), con un decrecimiento rápido al principio y cada vez más suave— la exponencial $(C)=g(x)=e^{-x}+1$ se empareja con la gráfica $(2)$.

**(b)** $g(x)=e^{-x}+1$ está definida en todo $\mathbb{R}$. Su derivada es
$$g'(x)=-e^{-x}<0\quad\text{para todo }x,$$
luego $g$ es **estrictamente decreciente**. Además
$$\lim_{x\to\infty}\big(e^{-x}+1\big)=0+1=1,$$
por lo que $y=1$ es asíntota horizontal. Como $g$ decrece desde valores altos hacia $1$ sin alcanzarlo, cruza el nivel $1{,}5$ una sola vez (por ejemplo $g(1)=e^{-1}+1\approx 1{,}368<1{,}5$) y **nunca** toma valores inferiores a $1$.

**(c)** No es adecuado: un fenómeno viral se caracteriza por un crecimiento inicial rápido, y $g$ es siempre decreciente; además las visualizaciones acabarían estabilizándose por encima de $100\,000$ (el valor $1$), sin el habitual "olvido" que las llevaría a decrecer hacia $0$.

## Ejercicio 9

### Enunciado

Un servicio asistencial reparte horas de fisioterapia ($x$) y de asistencia doméstica ($y$) según el sistema
$$\begin{cases} x+2y=5\\ ax+6y=15\end{cases}$$

**(a)** Determine el valor de $a$ para que el sistema tenga infinitas soluciones y proponga una de ellas con sentido en el contexto.

**(b)** Para $a=1$, discuta y resuelva el sistema, comprobando que la solución tiene sentido (horas no negativas).

### Solución

**(a)** El sistema es compatible indeterminado (infinitas soluciones) si las dos ecuaciones son proporcionales:
$$\frac{1}{a}=\frac{2}{6}=\frac{5}{15}=\frac13\ \Rightarrow\ a=3.$$
Entonces ambas ecuaciones equivalen a $x+2y=5$. Tomando $x=1$: $1+2y=5\Rightarrow y=2$. La solución $(x,y)=(1,2)$ —$1$ hora de fisioterapia y $2$ de asistencia— verifica también $3x+6y=15$: $3+12=15$. ✓

**(b)** Para $a=1$:
$$\begin{cases} x+2y=5\\ x+6y=15\end{cases},\qquad |A|=\begin{vmatrix}1&2\\1&6\end{vmatrix}=6-2=4\neq0,$$
luego es **compatible determinado** (solución única). Por Cramer:
$$x=\frac{\begin{vmatrix}5&2\\15&6\end{vmatrix}}{4}=\frac{0}{4}=0,\qquad y=\frac{\begin{vmatrix}1&5\\1&15\end{vmatrix}}{4}=\frac{10}{4}=2{,}5.$$
La solución $(0,\ 2{,}5)$ tiene coordenadas no negativas: $0$ horas de fisioterapia y $2{,}5$ horas de asistencia.

## Ejercicio 10

### Enunciado

Se consideran $A=\begin{pmatrix}1&m\\ m&2\end{pmatrix}$, $B=\begin{pmatrix}m&1\\ 1&0\end{pmatrix}$, $C=\begin{pmatrix}x\\ y\end{pmatrix}$, $D=\begin{pmatrix}m\\ 1\end{pmatrix}$ y $E=\begin{pmatrix}1-m\\ 1\end{pmatrix}$, y la ecuación $A\cdot B\cdot C=2(D+E)$.

**(a)** Calcule $A\cdot B$ y escriba el sistema que resulta de $A\cdot B\cdot C=2(D+E)$.

**(b)** Determine los valores de $m$ para los que el sistema NO tiene solución.

**(c)** Para el resto de valores, resuelva el sistema (dando, por ejemplo, la solución para $m=0$).

### Solución

**(a)**
$$A\cdot B=\begin{pmatrix}1&m\\ m&2\end{pmatrix}\begin{pmatrix}m&1\\ 1&0\end{pmatrix}=\begin{pmatrix}2m&1\\ m^2+2&m\end{pmatrix}.$$
Como $D+E=\begin{pmatrix}1\\2\end{pmatrix}$, se tiene $2(D+E)=\begin{pmatrix}2\\4\end{pmatrix}$, y la ecuación $A\cdot B\cdot C=2(D+E)$ da el sistema
$$\begin{cases} 2mx+y=2\\ (m^2+2)x+my=4.\end{cases}$$

**(b)** El determinante de la matriz de coeficientes es
$$|F|=\begin{vmatrix}2m&1\\ m^2+2&m\end{vmatrix}=2m^2-(m^2+2)=m^2-2.$$
$|F|=0\iff m=\pm\sqrt2$. Para esos valores la matriz ampliada tiene rango $2>$ rango de $F$, de modo que el sistema es **incompatible**: no tiene solución para $m=\pm\sqrt2$.

**(c)** Si $m\neq\pm\sqrt2$, es compatible determinado. Por Cramer,
$$|F_x|=\begin{vmatrix}2&1\\4&m\end{vmatrix}=2m-4,\qquad |F_y|=\begin{vmatrix}2m&2\\ m^2+2&4\end{vmatrix}=-2(m^2-4m+2),$$
$$x=\frac{2m-4}{m^2-2},\qquad y=\frac{-2(m^2-4m+2)}{m^2-2}.$$
Por ejemplo, para $m=0$: $(x,y)=(2,2)$.
