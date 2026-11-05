---
title: Matemáticas Aplicadas a las CCSS II · PAU 2026 · Aragón — examen resuelto
seoTitle: PAU Matemáticas Aplicadas a las CCSS II Aragón 2026 resuelta
date: 2026-06-01
updated: 2026-11-05
description: Examen resuelto de Matemáticas Aplicadas a las Ciencias Sociales II de Aragón 2026, con procedimientos completos.
tag: Matemáticas CCSS PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

$(10$ puntos$)$ El número de descargas ilegales en función del aumento de precio $x$ (en euros) sobre un precio base de $10$€ se modeliza, para $2\leq x\leq 15$, por
$$D(x)=-4x^{3}+36x^{2}+864x+400.$$
**(a)** $(8$ puntos$)$ Calcule $D(2)$ y $D(15)$. Estudie el crecimiento y decrecimiento en $[2,15]$ y determine los valores mínimo y máximo de descargas y el precio final en que se alcanzan, indicando si son extremos relativos y/o absolutos.

**(b)** $(2$ puntos$)$ Calcule los puntos de inflexión y estudie la curvatura en $[2,15]$.

### Solución

**(a)** $D(2)=2240$ y $D(15)=7960$. Derivada: $D'(x)=-12x^{2}+72x+864$. $D'(x)=0\Rightarrow x^{2}-6x-72=0\Rightarrow x=12$ o $x=-6$; solo $x=12\in[2,15]$.
Signo: $D'(10)=384>0$ (crece en $[2,12)$) y $D'(13)=-228<0$ (decrece en $(12,15]$). Hay **máximo relativo** en $x=12$.
$D(12)=9040$: con un aumento de $12$€ (precio $22$€) se alcanza el **máximo absoluto** de $9040$ descargas. Como $D(2)=2240<7960=D(15)$, el **mínimo absoluto** es $2240$, con aumento de $2$€ (precio $12$€).

**(b)** $D''(x)=-24x+72=0\Rightarrow x=3$. $D''(2{,}5)=12>0$ (convexa en $[2,3)$) y $D''(10)=-168<0$ (cóncava en $(3,15]$). Hay **punto de inflexión** en $x=3$, con $D(3)=3208$, es decir $(3,3208)$.

## Ejercicio 2

### Enunciado

$(5$ puntos$)$ El beneficio semanal (en cientos de euros) tras $x$ días de campaña se modeliza por $B(x)=3x^{2}+ax+1$. Sabiendo que el beneficio acumulado en los dos primeros días es de $3000$€, lo que equivale a
$$\int_{0}^{2}B(x)\,dx=30,$$
determine el valor del parámetro $a$.

### Solución

Calculamos la integral definida:
$$\int_{0}^{2}(3x^{2}+ax+1)\,dx=\Big[x^{3}+\dfrac{a x^{2}}{2}+x\Big]_{0}^{2}=8+2a+2=10+2a.$$
Igualando a $30$:
$$10+2a=30\Rightarrow 2a=20\Rightarrow a=10.$$

## Ejercicio 3

### Enunciado

$(10$ puntos$)$ En una muestra de $100$ clientes, $52$ realizan compras online al menos una vez al mes.

**(a)** $(5$ puntos$)$ Calcule un intervalo de confianza del $96\%$ para la proporción. A la vista del intervalo, ¿hay motivos para dudar que la proporción real sea del $65\%$?

**(b)** $(5$ puntos$)$ Suponiendo que la proporción real coincide con la muestral, si se eligen $10$ clientes al azar con reemplazamiento, calcule la probabilidad de que exactamente $6$ realicen compras online al menos una vez al mes.

### Solución

**(a)** $\hat{p}=\dfrac{52}{100}=0{,}52$, $\hat{q}=0{,}48$. Al $96\%$, $z=2{,}055$:
$$E=2{,}055\sqrt{\dfrac{0{,}52\cdot 0{,}48}{100}}\approx 0{,}1027\Rightarrow IC=(0{,}4173,\ 0{,}6227).$$
Como $0{,}65>0{,}6227$ queda **fuera** del intervalo: hay motivos para dudar que la proporción real sea del $65\%$.

**(b)** $X\sim B(10,\ 0{,}52)$. Entonces
$$P(X=6)=\binom{10}{6}0{,}52^{6}\,0{,}48^{4}=210\cdot 0{,}52^{6}\cdot 0{,}48^{4}\approx 0{,}2204.$$

## Ejercicio 4

### Enunciado

$(5$ puntos$)$ Se ofrecen tres promociones: $A$ (novelas), $B$ (manuales) y $C$ (accesorios). De cada $1000$ clientes, $300$ reciben la $A$, el $50\%$ la $B$ y el resto la $C$. La probabilidad de compra es $0{,}6$ si recibió $A$, $0{,}8$ si recibió $B$ y $0{,}7$ si recibió $C$. Elegido al azar un cliente que ha comprado, calcule la probabilidad de que hubiera recibido la promoción $A$.

### Solución

Sea $D$ "realizar una compra". Por el teorema de Bayes:
$$P(A\mid D)=\dfrac{P(A)P(D\mid A)}{P(A)P(D\mid A)+P(B)P(D\mid B)+P(C)P(D\mid C)}.$$
$$P(A\mid D)=\dfrac{0{,}3\cdot 0{,}6}{0{,}3\cdot 0{,}6+0{,}5\cdot 0{,}8+0{,}2\cdot 0{,}7}=\dfrac{0{,}18}{0{,}72}=\dfrac{1}{4}=0{,}25.$$

## Ejercicio 5

### Enunciado

$(10$ puntos$)$ Una librería prepara lotes de Novedades y de Reposición. Cada lote de Novedades requiere $3$ horas de recepción y $1$ de etiquetado; cada lote de Reposición, $1$ hora de recepción y $2$ de etiquetado. Cada departamento dispone de $100$ horas semanales. El beneficio es $500$€ por lote de Novedades y $400$€ por lote de Reposición. Además, se preparan al menos $40$ lotes en total cada semana.

**(a)** $(8$ puntos$)$ Determine cuántos lotes de cada tipo maximizan el beneficio y el beneficio máximo.

**(b)** $(2$ puntos$)$ Razone si preparar $10$ lotes de Novedades y $40$ de Reposición satisface las restricciones. En caso afirmativo, ¿es óptima?

### Solución

Sean $x$ los lotes de Novedades e $y$ los de Reposición. Maximizar $B(x,y)=500x+400y$ con
$$\begin{cases} 3x+y\leq 100 \\ x+2y\leq 100 \\ x+y\geq 40 \\ x\geq 0,\ y\geq 0 \end{cases}$$
**(a)** Vértices y beneficio:
$$\begin{aligned} A(0,50)&\to 20000 \\ B(20,40)&\to 26000\ (\text{máximo}) \\ C(30,10)&\to 19000 \\ D(0,40)&\to 16000 \end{aligned}$$
El vértice $B(20,40)$ es la intersección de $3x+y=100$ y $x+2y=100$. El máximo beneficio es $26000$€ con $20$ lotes de Novedades y $40$ de Reposición.

**(b)** El punto $(10,40)$ cumple $3\cdot 10+40=70\leq 100$, $10+2\cdot 40=90\leq 100$, $10+40=50\geq 40$ y $x,y\geq 0$: **sí satisface** las restricciones. Pero $B(10,40)=500\cdot 10+400\cdot 40=21000<26000$, luego **no es óptima**.

## Ejercicio 6

### Enunciado

$(5$ puntos$)$ Con un descuento del $10\%$ sobre el precio original, un cliente compró una novela, un cuaderno y una mochila y pagó $117$€ en total. Antes del descuento, el precio del cuaderno era la cuarta parte del de la novela y el de la mochila el doble del de la novela. Determine el precio original de cada artículo.

### Solución

Sean $n$, $c$, $m$ los precios originales de novela, cuaderno y mochila.
$$\begin{cases} 0{,}9n+0{,}9c+0{,}9m=117 \\ c=\dfrac{n}{4} \\ m=2n \end{cases}$$
De la primera, $n+c+m=\dfrac{117}{0{,}9}=130$. Sustituyendo:
$$n+\dfrac{n}{4}+2n=130\Rightarrow \dfrac{13n}{4}=130\Rightarrow n=40.$$
Entonces $c=\dfrac{40}{4}=10$ y $m=2\cdot 40=80$.
