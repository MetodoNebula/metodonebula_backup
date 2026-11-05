---
title: Matemáticas Aplicadas a las CCSS II · PAU 2022 · País Vasco — examen resuelto
seoTitle: PAU Matemáticas Aplicadas a las CCSS II País Vasco 2022 resuelta
date: 2022-06-01
updated: 2026-11-05
description: Examen resuelto de Matemáticas Aplicadas a las Ciencias Sociales II de País Vasco 2022, con procedimientos completos.
tag: Matemáticas CCSS PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

**(a)** Calcula las derivadas de las funciones
$$f(x)=(x^2-1)(3x^3+5x)^3,\qquad g(x)=\dfrac{\ln(3x)}{e^{2x}}$$
**(b)** Determina la ecuación de la recta tangente a $h(x)=\dfrac{3x+6}{2x+1}$ en el punto de abscisa $x=1$.
**(c)** Determina, si existen, las asíntotas verticales y horizontales de $h(x)$.
**(d)** Calcula $\displaystyle\int\left(e^{3x}-3x^2+\dfrac{2}{x+2}-\dfrac{4}{(x+2)^2}\right)dx$.

### Solución

**(a)** Derivada de $f$ (producto y regla de la cadena):
$$f'(x)=2x(3x^3+5x)^3+3(3x^3+5x)^2(9x^2+5)(x^2-1)$$
Derivada de $g$ (cociente):
$$g'(x)=\dfrac{\frac{3}{3x}e^{2x}-2e^{2x}\ln(3x)}{(e^{2x})^2}=\dfrac{\frac{1}{x}-2\ln(3x)}{e^{2x}}$$

**(b)** $h'(x)=\dfrac{3(2x+1)-2(3x+6)}{(2x+1)^2}=\dfrac{-9}{(2x+1)^2}$, de donde $h'(1)=-1$ y $h(1)=\dfrac{9}{3}=3$. La recta tangente es
$$y-3=-1\,(x-1)\ \Rightarrow\ y=-x+4$$

**(c)** El dominio es $\mathbb{R}\setminus\left\{-\tfrac12\right\}$. Asíntota **vertical** $x=-\tfrac12$ (pues $\lim_{x\to-1/2}h(x)=\pm\infty$). Asíntota **horizontal**: $\lim_{x\to\pm\infty}\dfrac{3x+6}{2x+1}=\dfrac32$, luego $y=\dfrac32$.

**(d)**
$$\int\left(e^{3x}-3x^2+\frac{2}{x+2}-\frac{4}{(x+2)^2}\right)dx=\frac13e^{3x}-x^3+2\ln(x+2)+\frac{4}{x+2}+K$$

## Ejercicio 2

### Enunciado

En un examen de Lengua Inglesa el 30 % del alumnado obtuvo una puntuación superior a 7,6 puntos. La puntuación sigue una distribución normal de media 6,8 puntos.

**(a)** Calcula la desviación típica de la distribución.
**(b)** Si la desviación típica es 1,5 puntos, ¿qué puntuación es superada únicamente por el 20 % del alumnado?
**(c)** Si la desviación típica es 1,5 puntos y el aprobado se obtiene con 5 o más, ¿qué porcentaje del alumnado ha aprobado?

### Solución

**(a)** $P(X>7{,}6)=0{,}3\Rightarrow P(X\leq7{,}6)=0{,}7$. Tipificando:
$$P\!\left(Z\leq\frac{7{,}6-6{,}8}{\sigma}\right)=0{,}7\Rightarrow \frac{0{,}8}{\sigma}=0{,}525\Rightarrow \sigma=\frac{0{,}8}{0{,}525}\approx1{,}52$$

**(b)** Buscamos $k$ con $P(X>k)=0{,}2$, es decir $P(X\leq k)=0{,}8$. El valor crítico es $z=0{,}845$:
$$\frac{k-6{,}8}{1{,}5}=0{,}845\Rightarrow k=6{,}8+0{,}845\cdot1{,}5\approx8{,}06$$

**(c)** $P(X\geq5)=P\!\left(Z\geq\dfrac{5-6{,}8}{1{,}5}\right)=P(Z\geq-1{,}2)=P(Z\leq1{,}2)=0{,}8849$.

Por tanto ha aprobado aproximadamente el $88{,}5\%$ del alumnado.

## Ejercicio 3

### Enunciado

Para estimar el porcentaje de población vacunada frente a una enfermedad se elige una muestra aleatoria de 1000 personas; 860 responden que sí están vacunadas.

**(a)** Estima, con un nivel de confianza del 95 %, el porcentaje de población vacunada.
**(b)** Calcula el error máximo admisible para dicho nivel de confianza.
**(c)** Interpreta los resultados obtenidos.

### Solución

**(a)** La proporción muestral es $\hat{p}=0{,}86$ y $\hat{q}=0{,}14$. El error típico es
$$\sqrt{\dfrac{\hat{p}\hat{q}}{n}}=\sqrt{\dfrac{0{,}86\cdot0{,}14}{1000}}=0{,}01097$$
Con $z_{\alpha/2}=1{,}96$, el intervalo de confianza para la proporción es
$$\left(\hat{p}\pm z_{\alpha/2}\sqrt{\dfrac{\hat{p}\hat{q}}{n}}\right)=(0{,}86\pm1{,}96\cdot0{,}01097)=(0{,}8385,\ 0{,}8815)$$
Es decir, entre el $83{,}85\%$ y el $88{,}15\%$.

**(b)** El error máximo admisible es la semiamplitud del intervalo:
$$E=z_{\alpha/2}\sqrt{\dfrac{\hat{p}\hat{q}}{n}}=1{,}96\cdot0{,}01097=0{,}0215\ (\approx2{,}15\%)$$

**(c)** Con un nivel de confianza del 95 %, el porcentaje de población vacunada está entre el $83{,}85\%$ y el $88{,}15\%$, con un error máximo del $2{,}15\%$.

## Ejercicio 4

### Enunciado

Un libro tiene 230 páginas en 3 capítulos. El primer capítulo tiene 100 páginas, de las cuales el 15 % tiene errores. El segundo tiene 80 páginas, de las cuales 8 tienen errores; y en el tercero, de 50 páginas, solo hay 40 sin ningún error. Abrimos el libro por una página al azar.

**(a)** Probabilidad de que sea del segundo capítulo.
**(b)** Probabilidad de que tenga errores y sea del tercer capítulo.
**(c)** Probabilidad de que no tenga errores.
**(d)** Si la página tiene errores, ¿cuál es la probabilidad de que sea del tercer capítulo?

### Solución

Sean $C_1,C_2,C_3$ los capítulos y $E$ el suceso "la página tiene errores". Las proporciones de error por capítulo son $P(E|C_1)=0{,}15$, $P(E|C_2)=\tfrac{8}{80}=0{,}1$, $P(E|C_3)=\tfrac{10}{50}=0{,}2$.

**(a)** $P(C_2)=\dfrac{80}{230}=0{,}3478$ (≈ $34{,}78\%$).

**(b)** $P(E\cap C_3)=P(C_3)\,P(E|C_3)=\dfrac{50}{230}\cdot\dfrac{10}{50}=\dfrac{10}{230}=0{,}0435$ (≈ $4{,}3\%$).

**(c)** Por probabilidad total, $P(E^c)=\dfrac{100}{230}\cdot\dfrac{85}{100}+\dfrac{80}{230}\cdot\dfrac{72}{80}+\dfrac{50}{230}\cdot\dfrac{40}{50}=0{,}8565$ (≈ $85{,}65\%$).

**(d)** $P(E)=1-0{,}8565=0{,}1435$. Por el teorema de Bayes:
$$P(C_3|E)=\dfrac{P(E|C_3)\,P(C_3)}{P(E)}=\dfrac{\frac{10}{50}\cdot\frac{50}{230}}{\frac{33}{230}}=\dfrac{10}{33}=0{,}303$$
(≈ $30{,}3\%$).

## Ejercicio 5

### Enunciado

Sean $A,B,C,D,E$ sucesos de un experimento aleatorio.

**(a)** Si $P(A)=0{,}4$, $P(B)=0{,}3$ y $P(A\cup B)=0{,}5$, calcula $P(A\cap B)$.
**(b)** Si $P(C)=0{,}5$, $P(D)=0{,}6$ y $P(C\cup D)=0{,}7$, calcula $P(C\,|\,D)$.
**(c)** Si $P(A)=0{,}4$, $P(E)=0{,}6$ y $A,E$ son independientes, calcula la probabilidad de que ocurra alguno de los dos.

### Solución

**(a)** De $P(A\cup B)=P(A)+P(B)-P(A\cap B)$:
$$P(A\cap B)=0{,}4+0{,}3-0{,}5=0{,}2$$

**(b)** Primero $P(C\cap D)=P(C)+P(D)-P(C\cup D)=0{,}5+0{,}6-0{,}7=0{,}4$. Entonces
$$P(C\,|\,D)=\dfrac{P(C\cap D)}{P(D)}=\dfrac{0{,}4}{0{,}6}=0{,}6\overline{6}$$

**(c)** Por independencia, $P(A\cap E)=P(A)\,P(E)=0{,}4\cdot0{,}6=0{,}24$. Luego
$$P(A\cup E)=P(A)+P(E)-P(A\cap E)=0{,}6+0{,}4-0{,}24=0{,}76$$

## Ejercicio 6

### Enunciado

El ayuntamiento de una ciudad ha concedido licencia para construir una urbanización de a lo sumo 120 viviendas, de dos tipos A y B. La empresa constructora dispone de un capital máximo de 15 millones de euros. El coste de construcción de una vivienda de tipo A es $100\,000$ € y el de una de tipo B es $300\,000$ €. El beneficio por la venta de una vivienda de tipo A es $20\,000$ € y por una de tipo B es $40\,000$ €.

**(a)** ¿Cuántas viviendas de cada tipo deben construirse para obtener el máximo beneficio?
**(b)** ¿A cuánto asciende dicho beneficio máximo?

### Solución

Sea $x$ el nº de viviendas de tipo A e $y$ el de tipo B.

**Función objetivo:** $f(x,y)=20\,000x+40\,000y$ (beneficio a maximizar).

**Restricciones:**
$$\begin{cases} x+y\leq120 \\ x+3y\leq150 \\ x\geq0,\ y\geq0 \end{cases}$$
(la segunda se obtiene al dividir $100\,000x+300\,000y\leq15\,000\,000$ entre $100\,000$).

**(a)** El vértice $C$ es la intersección de $x+y=120$ y $x+3y=150$: restando, $2y=30\Rightarrow y=15$, $x=105$. Los vértices de la región factible son:
$$A(0,0),\quad B(120,0),\quad C(105,15),\quad D(0,50)$$
Evaluamos la función objetivo:
$$f(A)=0,\ f(B)=2\,400\,000,\ f(C)=2\,700\,000,\ f(D)=2\,000\,000$$
El máximo se alcanza en $C(105,15)$: deben construirse **105 viviendas de tipo A y 15 de tipo B**.

**(b)** $f(C)=20\,000\cdot105+40\,000\cdot15=2\,700\,000$ €.

## Ejercicio 7

### Enunciado

Sea la función
$$f(x)=\begin{cases} \dfrac{2x+1}{1-2x} & \text{si } x<0 \\[2mm] x^2-x-a & \text{si } x\geq0 \end{cases}$$

**(a)** Halla el valor del parámetro $a$ para que $f$ sea continua en $x=0$.
**(b)** En el caso $a=2$, analiza los intervalos de crecimiento y decrecimiento y los máximos y mínimos relativos.
**(c)** En el caso $a=2$, realiza la representación gráfica de la función.

### Solución

**(a)** $f$ es continua en $x=0$ si los límites laterales coinciden con $f(0)$:
$$\lim_{x\to0^-}\frac{2x+1}{1-2x}=\frac{1}{1}=1,\qquad \lim_{x\to0^+}(x^2-x-a)=-a=f(0)$$
Imponiendo $-a=1$ se obtiene $a=-1$.

**(b)** Con $a=2$, $f(x)=\dfrac{2x+1}{1-2x}$ si $x<0$ y $f(x)=x^2-x-2$ si $x\geq0$.

*Tramo $x<0$:* $f'(x)=\dfrac{4}{(1-2x)^2}>0$ siempre, luego $f$ es creciente en $(-\infty,0)$ y no tiene extremos en ese tramo.

*Tramo $x>0$:* $f'(x)=2x-1=0\Rightarrow x=\tfrac12$. Como $f''(x)=2>0$, en $x=\tfrac12$ hay un **mínimo relativo**. Además $f$ decrece en $\left(0,\tfrac12\right)$ y crece en $\left(\tfrac12,\infty\right)$.

El mínimo relativo es $\left(\tfrac12,\ f\!\left(\tfrac12\right)\right)=\left(\tfrac12,\ -\tfrac94\right)$.

**Resumen:** $f$ crece en $(-\infty,0)$ y en $\left(\tfrac12,\infty\right)$; decrece en $\left(0,\tfrac12\right)$; mínimo relativo en $\left(\tfrac12,-\tfrac94\right)$.

**(c)** Con tablas de valores: para $x<0$ (rama racional) pasa por $(-1,-\tfrac13)$ y $(-\tfrac12,0)$ y tiende a $1$ por la izquierda de $0$; para $x\geq0$ es la parábola $x^2-x-2$ con vértice en $\left(\tfrac12,-\tfrac94\right)$, que corta el eje OX en $x=2$ y vale $-2$ en $x=0$.

## Ejercicio 8

### Enunciado

Una determinada empresa de selección de personal realiza un test de 90 preguntas. Por cada acierto da 6 puntos; por cada fallo quita 2,5 puntos, y por cada pregunta no contestada quita 1,5 puntos. Para aprobar hay que obtener por lo menos 210 puntos.

¿Cuántas preguntas hay que contestar correctamente para obtener los 210 puntos, y que el número de preguntas no contestadas más el número de aciertos sea igual al doble del número de fallos?

### Solución

Definimos las variables: $x$ = nº de aciertos, $y$ = nº de fallos, $z$ = nº de preguntas no contestadas.

Con la información del enunciado planteamos el sistema:
$$\begin{cases} x+y+z=90 \\ 6x-2{,}5y-1{,}5z=210 \\ x+z=2y \end{cases}$$

Escribimos la tercera ecuación como $x-2y+z=0$. Comprobamos que puede usarse la regla de Cramer, es decir, que el determinante de la matriz de coeficientes no es nulo:
$$\begin{vmatrix} 1 & 1 & 1 \\ 6 & -2{,}5 & -1{,}5 \\ 1 & -2 & 1 \end{vmatrix} = -22{,}5 \neq 0$$

Por tanto el sistema es compatible determinado y lo resolvemos por Cramer:
$$x=\dfrac{\begin{vmatrix} 90 & 1 & 1 \\ 210 & -2{,}5 & -1{,}5 \\ 0 & -2 & 1 \end{vmatrix}}{-22{,}5}=50,\quad y=\dfrac{\begin{vmatrix} 1 & 90 & 1 \\ 6 & 210 & -1{,}5 \\ 1 & 0 & 1 \end{vmatrix}}{-22{,}5}=30,\quad z=\dfrac{\begin{vmatrix} 1 & 1 & 90 \\ 6 & -2{,}5 & 210 \\ 1 & -2 & 0 \end{vmatrix}}{-22{,}5}=10$$
