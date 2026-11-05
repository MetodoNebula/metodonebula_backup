---
title: Matemáticas Aplicadas a las CCSS II · PAU 2024 · País Vasco — examen resuelto
seoTitle: PAU Matemáticas Aplicadas a las CCSS II País Vasco 2024 resuelta
date: 2024-06-01
updated: 2026-11-05
description: Examen resuelto de Matemáticas Aplicadas a las Ciencias Sociales II de País Vasco 2024, con procedimientos completos.
tag: Matemáticas CCSS PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

Sea $f(x)$ una función polinómica de tercer grado cuyo coeficiente del término de grado tres vale $1$.

**(a)** Halla los demás coeficientes sabiendo que pasa por $(0,0)$ y que tiene un extremo relativo en $(2,-4)$.

**(b)** Para $f(x)=x^3-3x^2$, determina los máximos y mínimos relativos y los puntos de inflexión.

**(c)** Calcula el área de la región finita delimitada por la gráfica de $f(x)=x^3-3x^2$ y el eje de abscisas.

### Solución

**(a)** Sea $f(x)=x^3+ax^2+bx+c$.

- $f(0)=0$, de modo que $c=0$.
- Al usar $f(2)=-4$:

$$8+4a+2b=-4\Rightarrow2a+b=-6.$$

- Como $f'(x)=3x^2+2ax+b$ y en un extremo $f'(2)=0$:

$$12+4a+b=0\Rightarrow4a+b=-12.$$

Resolviendo $\begin{cases}2a+b=-6\\4a+b=-12\end{cases}$ se obtiene $a=-3$, $b=0$. Por tanto $f(x)=x^3-3x^2$.

**(b)**
$$f'(x)=3x^2-6x=0\Rightarrow x=0\quad\text{o}\quad x=2.$$
Como $f''(x)=6x-6$:
$$f''(0)=-6<0\Rightarrow (0,0)\text{ es un máximo relativo}.$$
$$f''(2)=6>0\Rightarrow (2,-4)\text{ es un mínimo relativo}.$$
Punto de inflexión: $f''(x)=0\Rightarrow x=1$ y $f'''(1)=6\neq 0$, luego $(1,-2)$ es punto de inflexión.

**(c)** La curva corta al eje OX en $x=0$ y $x=3$ (pues $x^3-3x^2=x^2(x-3)$). En $(0,3)$ es $f(x)\leq 0$, así que
$$A=\int_0^3\bigl[0-(x^3-3x^2)\bigr]\,dx=\left[-\dfrac{x^4}{4}+x^3\right]_0^3=-\dfrac{81}{4}+27=\dfrac{27}{4}\ \text{u}^2.$$

## Ejercicio 2

### Enunciado

En un examen el $35\,\%$ del alumnado obtuvo más de $6{,}8$ puntos. La puntuación sigue una distribución normal de media $5{,}8$.

**(a)** Calcula la desviación típica.

**(b)** Si $\sigma=2{,}6$, ¿qué puntuación es superada solo por el $20\,\%$ del alumnado?

**(c)** Si $\sigma=2{,}6$ y el Apto se obtiene con $5$ o más, ¿qué porcentaje del alumnado resulta apto?

### Solución

**(a)** $P(X>6{,}8)=0{,}35\Rightarrow P(X\leq 6{,}8)=0{,}65$. Tipificando con $z=\dfrac{6{,}8-5{,}8}{\sigma}=\dfrac{1}{\sigma}$, buscamos en la tabla $P(Z\leq z)=0{,}65\Rightarrow z\approx 0{,}385$.
$$\dfrac{1}{\sigma}=0{,}385\Rightarrow \sigma=\dfrac{1}{0{,}385}\approx 2{,}597.$$

**(b)** Con $\sigma=2{,}6$ buscamos $k$ con $P(X>k)=0{,}20\Rightarrow P(X\leq k)=0{,}80$. En la tabla $z\approx 0{,}845$, luego
$$k=5{,}8+0{,}845\cdot 2{,}6\approx 7{,}99\approx 8.$$

**(c)** $P(X\geq 5)=P\Bigl(Z\geq \dfrac{5-5{,}8}{2{,}6}\Bigr)=P(Z\geq -0{,}31)=P(Z\leq 0{,}31)\approx 0{,}6217$.

## Ejercicio 3

### Enunciado

De $1000$ jóvenes vascos de $25$ años elegidos al azar, solo $140$ no vivían con sus padres.

**(a)** Estima, con un nivel de confianza del $95\,\%$, el porcentaje de jóvenes vascos de $25$ años que viven con sus padres.

**(b)** Calcula el error máximo admisible para ese nivel de confianza.

**(c)** Interpreta los resultados.

### Solución

La proporción muestral de jóvenes que viven con sus padres es $\hat p=\dfrac{860}{1000}=0{,}86$, con $\hat q=0{,}14$.

**(a)** El intervalo de confianza para la proporción es
$$\Bigl(\hat p\pm z_{\alpha/2}\sqrt{\dfrac{\hat p\,\hat q}{n}}\Bigr).$$
Con $z_{\alpha/2}=1{,}96$ y $\sqrt{\dfrac{0{,}86\cdot 0{,}14}{1000}}\approx 0{,}01097$:
$$IC=(0{,}86\pm 1{,}96\cdot 0{,}01097)=(0{,}8385,\;0{,}8815).$$

**(b)** Error máximo admisible:
$$e=z_{\alpha/2}\sqrt{\dfrac{\hat p\,\hat q}{n}}=1{,}96\cdot 0{,}01097\approx 0{,}0215\;(2{,}15\,\%).$$

**(c)** Con un nivel de confianza del $95\,\%$, el porcentaje de jóvenes vascos de $25$ años que viven con sus padres está entre el $83{,}85\,\%$ y el $88{,}15\,\%$, con un error máximo del $2{,}15\,\%$.

## Ejercicio 4

### Enunciado

Asier tiene una urna con $4$ bolas verdes y $2$ rojas. Lanza una moneda: si sale cara extrae una bola de la urna, y si sale cruz extrae dos bolas sin reemplazamiento.

**(a)** ¿Probabilidad de que haya extraído dos bolas rojas?

**(b)** ¿Probabilidad de no haber extraído ninguna bola roja?

**(c)** ¿Probabilidad de haber sacado al menos una bola verde?

**(d)** ¿Probabilidad de que haya salido cara sabiendo que al menos una bola es verde?

### Solución

**(a)** Dos bolas rojas solo es posible si sale cruz:
$$P(R_1\cap R_2)=\tfrac12\cdot\tfrac{2}{6}\cdot\tfrac{1}{5}=\tfrac{1}{30}\approx 0{,}0333\;(3{,}33\,\%).$$

**(b)** Ninguna roja = (cara y verde) o (cruz y dos verdes):
$$P=\tfrac12\cdot\tfrac{4}{6}+\tfrac12\cdot\tfrac{4}{6}\cdot\tfrac{3}{5}=\tfrac13+\tfrac{1}{5}=\tfrac{8}{15}\approx 0{,}5333\;(53{,}33\,\%).$$

**(c)** Al menos una verde = complementario de "ninguna verde":
$$P(\text{al menos una verde})=1-\Bigl[\tfrac12\cdot\tfrac{2}{6}+\tfrac12\cdot\tfrac{2}{6}\cdot\tfrac{1}{5}\Bigr]=1-\tfrac{1}{5}=\tfrac{4}{5}=0{,}8\;(80\,\%).$$

**(d)** Por el teorema de Bayes, con $P(\text{al menos una verde}\mid\text{cara})=\tfrac{4}{6}$:
$$P(\text{cara}\mid\text{al menos una verde})=\dfrac{\tfrac12\cdot\tfrac{4}{6}}{\tfrac{4}{5}}=\dfrac{1/3}{4/5}=\dfrac{5}{12}\approx 0{,}4167\;(41{,}67\,\%).$$

## Ejercicio 5

### Enunciado

En un barrio hay dos pastelerías. El $40\,\%$ de la población compra en la pastelería A, el $25\,\%$ en la B y el $15\,\%$ en ambas. Se escoge una persona al azar.

**(a)** ¿Probabilidad de que compre en A y no en B?

**(b)** Si es cliente de A, ¿probabilidad de que también lo sea de B?

**(c)** ¿Probabilidad de que no sea cliente ni de A ni de B?

**(d)** ¿Son independientes los sucesos "ser cliente de A" y "ser cliente de B"?

### Solución

**(a)** $P(A\cap B^c)=P(A)-P(A\cap B)=0{,}40-0{,}15=0{,}25\;(25\,\%).$

**(b)** $P(B\mid A)=\dfrac{P(A\cap B)}{P(A)}=\dfrac{0{,}15}{0{,}40}=0{,}375\;(37{,}5\,\%).$

**(c)** Aplicamos el complemento de la unión:
$$P(A^c\cap B^c)=1-P(A\cup B).$$
Ahora sustituimos los datos:
$$P(A\cup B)=0{,}40+0{,}25-0{,}15=0{,}50.$$
Por tanto,
$$P(A^c\cap B^c)=1-0{,}50=0{,}50\quad(50\,\%).$$

**(d)** Serían independientes si $P(A\cap B)=P(A)\cdot P(B)$. Como $P(A)\cdot P(B)=0{,}40\cdot 0{,}25=0{,}10\neq 0{,}15=P(A\cap B)$, los sucesos **no son independientes** (equivalentemente, $P(B\mid A)=0{,}375\neq 0{,}25=P(B)$).

## Ejercicio 6

### Enunciado

Una pastelería elabora dos tipos de trufas: dulces y amargas. Cada trufa dulce lleva $20$ g de cacao, $20$ g de nata y $30$ g de azúcar y se vende a $1$ € la unidad. Cada trufa amarga lleva $100$ g de cacao, $20$ g de nata y $15$ g de azúcar y se vende a $1{,}3$ € la unidad. Un día la pastelería solo dispone de $30$ kg de cacao, $8$ kg de nata y $10{,}5$ kg de azúcar, y vende todo lo que elabora.

**(a)** ¿Cuántas trufas de cada tipo deben elaborarse ese día para maximizar los ingresos?

**(b)** ¿A cuánto asciende dicho ingreso máximo?

### Solución

Sea $x$ el número de trufas dulces e $y$ el de amargas.

**Función objetivo (ingresos):** $f(x,y)=x+1{,}3\,y$.

**Restricciones** (en gramos, simplificadas):
$$\begin{cases} 20x+100y\leq 30000 \;\Rightarrow\; x+5y\leq 1500 \\ 20x+20y\leq 8000 \;\Rightarrow\; x+y\leq 400 \\ 30x+15y\leq 10500 \;\Rightarrow\; 2x+y\leq 700 \\ x\geq 0,\; y\geq 0 \end{cases}$$

**Vértices de la región factible:**
$$A(0,0),\quad B(0,300),\quad C(125,275),\quad D(300,100),\quad E(350,0).$$
($C$ es la intersección de $x+y=400$ y $x+5y=1500$; $D$ la de $x+y=400$ y $2x+y=700$.)

**Valoración de $f$ en los vértices:**
$$f(A)=0,\; f(B)=390,\; f(C)=482{,}5,\; f(D)=430,\; f(E)=350.$$

El máximo se alcanza en $C(125,275)$.

## Ejercicio 7

### Enunciado

**(a)** Asocia razonadamente las funciones $A)\,f(x)=\dfrac{x-1}{x}$, $B)\,g(x)=\dfrac{x}{x^2-1}$, $C)\,h(x)=\dfrac{x^2-1}{x}$ con sus representaciones gráficas.

**(b)** En cada caso, a partir de la gráfica, indica el dominio, el recorrido y los intervalos de crecimiento y decrecimiento.

### Solución

**(a) Asociación por asíntotas y cortes:**

- $A)\,f(x)=\dfrac{x-1}{x}$: no definida en $x=0$ (asíntota vertical $x=0$), asíntota horizontal $y=1$, corta en $(1,0)$. $\Rightarrow$ gráfica (3).
- $B)\,g(x)=\dfrac{x}{x^2-1}$: no definida en $x=\pm 1$ (dos asíntotas verticales), asíntota horizontal $y=0$, pasa por $(0,0)$. $\Rightarrow$ gráfica (1).
- $C)\,h(x)=\dfrac{x^2-1}{x}$: no definida en $x=0$ (asíntota vertical), asíntota oblicua $y=x$, corta en $(\pm 1,0)$. $\Rightarrow$ gráfica (2).

**(b) Dominio, recorrido y monotonía:**

$A)\;f(x)=\dfrac{x-1}{x}=1-\dfrac1x$: $\operatorname{Dom}=\mathbb{R}\setminus\{0\}$, $\operatorname{Rec}=\mathbb{R}\setminus\{1\}$, creciente en $(-\infty,0)\cup(0,+\infty)$.

$B)\;g(x)=\dfrac{x}{x^2-1}$: $\operatorname{Dom}=\mathbb{R}\setminus\{-1,1\}$, $\operatorname{Rec}=\mathbb{R}$, decreciente en $(-\infty,-1)\cup(-1,1)\cup(1,+\infty)$.

$C)\;h(x)=\dfrac{x^2-1}{x}=x-\dfrac1x$: $\operatorname{Dom}=\mathbb{R}\setminus\{0\}$, $\operatorname{Rec}=\mathbb{R}$, creciente en $(-\infty,0)\cup(0,+\infty)$.

## Ejercicio 8

### Enunciado

En un examen de matemáticas que constaba de tres problemas, Aitor obtuvo una calificación total de $7{,}2$ puntos. La puntuación obtenida en el primer problema fue un $40\,\%$ más que la obtenida en el segundo, y la del tercero fue el doble de la suma de las puntuaciones obtenidas en el primero y en el segundo.

¿Cuál fue la puntuación obtenida por Aitor en cada problema?

### Solución

Sean $x$, $y$, $z$ las puntuaciones del primer, segundo y tercer problema.

De las condiciones del enunciado se obtiene el sistema
$$\begin{cases} x+y+z=7{,}2 \\ x=1{,}4\,y \\ z=2x+2y \end{cases}\Longrightarrow \begin{cases} 5x+5y+5z=36 \\ 5x-7y=0 \\ 2x+2y-z=0 \end{cases}$$

**Comprobamos que se puede aplicar Cramer** (determinante de coeficientes no nulo):
$$\begin{vmatrix} 5 & 5 & 5 \\ 5 & -7 & 0 \\ 2 & 2 & -1 \end{vmatrix}=180\neq 0.$$

**Regla de Cramer:**
$$x=\dfrac{\begin{vmatrix} 36 & 5 & 5 \\ 0 & -7 & 0 \\ 0 & 2 & -1 \end{vmatrix}}{180}=\dfrac{252}{180}=1{,}4,\quad y=\dfrac{\begin{vmatrix} 5 & 36 & 5 \\ 5 & 0 & 0 \\ 2 & 0 & -1 \end{vmatrix}}{180}=\dfrac{180}{180}=1,$$
$$z=\dfrac{\begin{vmatrix} 5 & 5 & 36 \\ 5 & -7 & 0 \\ 2 & 2 & 0 \end{vmatrix}}{180}=\dfrac{864}{180}=4{,}8.$$

Las tres puntuaciones suman $1{,}4+1+4{,}8=7{,}2$, como exige el enunciado.
