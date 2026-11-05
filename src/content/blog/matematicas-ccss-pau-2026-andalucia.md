---
title: Matemáticas Aplicadas a las CCSS II · PAU 2026 · Andalucía — examen resuelto
seoTitle: PAU Matemáticas Aplicadas a las CCSS II Andalucía 2026 resuelta
date: 2026-06-01
updated: 2026-11-05
description: Examen resuelto de Matemáticas Aplicadas a las Ciencias Sociales II de Andalucía 2026, con procedimientos completos.
tag: Matemáticas CCSS PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

La distancia por viaje de unos camiones sigue una $N(\mu,\sigma)$ con varianza $225\ \text{km}^2$ y media desconocida. En una muestra de $49$ viajes la media es $325$ km.

**(a)** $(0{,}75$ puntos$)$ Calcule un intervalo de confianza al $97\%$ para $\mu$.

**(b)** $(0{,}5$ puntos$)$ ¿Puede considerarse que recorren por término medio $310$ km por viaje?

**(c)** $(0{,}75$ puntos$)$ ¿Cuántos viajes, como mínimo, para un intervalo al $99\%$ con amplitud inferior a $4$ km?

### Solución

**(a)** $\sigma=15$. Al $97\%$, $z=2{,}17$:
$$E=2{,}17\cdot\dfrac{15}{\sqrt{49}}=4{,}65\Rightarrow IC=(325-4{,}65,\ 325+4{,}65)=(320{,}35,\ 329{,}65).$$

**(b)** $310$ km **no pertenece** al intervalo $(320{,}35,\ 329{,}65)$, luego no puede aceptarse esa media.

**(c)** Al $99\%$, $z=2{,}575$. Amplitud $<4\Rightarrow E<2$:
$$n\geq\Big(\dfrac{z\sigma}{E}\Big)^{2}=\Big(\dfrac{2{,}575\cdot 15}{2}\Big)^{2}\approx 372{,}97\Rightarrow n\geq 373\ \text{viajes}.$$

## Ejercicio 2

### Enunciado

**(a)** $(1$ punto$)$ Dada la población $\{-5,-2,13,18,20\}$, con todas las muestras de tamaño $3$ por muestreo aleatorio simple, calcule la media y la varianza de la distribución de la media muestral.

**(b)** $(1$ punto$)$ Dados dos sucesos con $P(A)=0{,}75$, $P(B^{c})=0{,}8$ y $P(A\mid B)=0{,}6$, calcule $P(A\cap B)$, $P(B-A)$, $P(A\cup B)$ y $P(A^{c}-B)$.

### Solución

**(a)** La media de las medias muestrales es la media poblacional:
$$\mu=\dfrac{-5-2+13+18+20}{5}=8{,}8.$$
Varianza poblacional: $\sigma^{2}=\dfrac{25+4+169+324+400}{5}-8{,}8^{2}=106{,}96$. Varianza de la media muestral: $\dfrac{\sigma^{2}}{3}=\dfrac{106{,}96}{3}\approx 35{,}65$.

**(b)** $P(B)=1-0{,}8=0{,}2$. De $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}=0{,}6$: $P(A\cap B)=0{,}6\cdot 0{,}2=0{,}12$.
$P(B-A)=P(B)-P(A\cap B)=0{,}2-0{,}12=0{,}08$.
$P(A\cup B)=0{,}75+0{,}2-0{,}12=0{,}83$.
$P(A^{c}-B)=P(A^{c}\cap B^{c})=1-P(A\cup B)=1-0{,}83=0{,}17$.

## Ejercicio 3

### Enunciado

Sean $A$ y $B$ sucesos con $P(A)=2P(B)$, $P(B^{c}\mid A)=0{,}75$ y $P(A\cap B)=0{,}2$.

**(a)** $(0{,}5$ puntos$)$ Calcule $P(B)$.

**(b)** $(0{,}5$ puntos$)$ Calcule la probabilidad de que no ocurra ni $A$ ni $B$. ¿Son $A^{c}$ y $B^{c}$ incompatibles?

**(c)** Si el experimento se repite $1350$ veces de forma independiente, con $X$ = "número de veces que ocurre $B$": **(i)** $(0{,}25$ puntos$)$ determine la distribución de $X$; **(ii)** $(0{,}75$ puntos$)$ calcule $P(499< X\leq 580)$.

### Solución

**(a)** Sea $P(B)=p$, $P(A)=2p$. Como $P(B\mid A)=1-0{,}75=0{,}25=\dfrac{P(A\cap B)}{P(A)}=\dfrac{0{,}2}{2p}$:
$$0{,}25=\dfrac{0{,}2}{2p}\Rightarrow p=\dfrac{0{,}2}{0{,}5}=0{,}4.$$
Luego $P(B)=0{,}4$ (y $P(A)=0{,}8$).

**(b)** $P(A^{c}\cap B^{c})=1-P(A\cup B)=1-(0{,}8+0{,}4-0{,}2)=0$. Como la intersección es vacía, $A^{c}$ y $B^{c}$ son **incompatibles**.

**(c-i)** $X\sim B(1350,\ 0{,}4)$.

**(c-ii)** Aproximamos por la normal $Y\sim N(\mu,\sigma)$ con $\mu=np=540$ y $\sigma=\sqrt{npq}=\sqrt{1350\cdot 0{,}4\cdot 0{,}6}=18$. Con corrección de Yates:
$$P(499< X\leq 580)\approx P(499{,}5< Y< 580{,}5)=P\Big(\dfrac{499{,}5-540}{18}< Z< \dfrac{580{,}5-540}{18}\Big).$$
$$=P(-2{,}25< Z< 2{,}25)=2\cdot 0{,}9878-1=0{,}9756.$$

## Ejercicio 4

### Enunciado

$(3$ puntos$)$ Una empresa fabrica tableros DM y aglomerado. Cada $\text{m}^2$ de DM consume $10\ \text{m}^3$ de madera triturada y da $10$€ de beneficio; cada $\text{m}^2$ de aglomerado consume $30\ \text{m}^3$ y da $20$€. Como máximo puede fabricar $12\ \text{m}^2$ de DM y $18\ \text{m}^2$ de aglomerado al día; la producción conjunta se limita a $26\ \text{m}^2$ diarios y dispone de $600\ \text{m}^3$ de madera al día. Determine cuántos $\text{m}^2$ de cada tipo maximizan el beneficio y cuál es ese beneficio.

### Solución

Sean $x$ los $\text{m}^2$ de DM e $y$ los de aglomerado. Maximizar $B(x,y)=10x+20y$ con
$$\begin{cases} x\leq 12 \\ y\leq 18 \\ x+y\leq 26 \\ x+3y\leq 60 \\ x\geq 0,\ y\geq 0 \end{cases}$$
Vértices y beneficio:
$$\begin{aligned} A(0,0)&\to 0 \\ B(0,18)&\to 360 \\ C(6,18)&\to 420 \\ D(9,17)&\to 430\ (\text{máximo}) \\ E(12,14)&\to 400 \\ F(12,0)&\to 120 \end{aligned}$$
El vértice $D(9,17)$ es la intersección de $x+y=26$ y $x+3y=60$. El máximo beneficio es $430$€.

## Ejercicio 5

### Enunciado

Se considera la función
$$f(x)=\begin{cases} \dfrac{x^{2}}{20} & \text{si } 0\leq x\leq 20 \\[4pt] a+bx & \text{si } 20< x\leq 50 \\[4pt] 36-\dfrac{x^{2}}{100} & \text{si } 50< x\leq 60 \end{cases}$$
siendo $a$ y $b$ reales.

**(a)** $(0{,}75$ puntos$)$ Determine $a$ y $b$ para que $f$ sea continua en su dominio.

**(b)** Para $a=26$ y $b=-\dfrac{3}{10}$: **(i)** $(0{,}75$ puntos$)$ calcule los extremos relativos; **(ii)** $(0{,}5$ puntos$)$ represente $f$; **(iii)** $(1$ punto$)$ calcule el área del recinto limitado por el eje $OX$ y la gráfica de $f$.

### Solución

**(a)** Continuidad en $x=20$: $\dfrac{20^{2}}{20}=20=a+20b$. Continuidad en $x=50$: $a+50b=36-\dfrac{50^{2}}{100}=11$. Resolviendo $a+20b=20$, $a+50b=11$: $30b=-9\Rightarrow b=-\dfrac{3}{10}$ y $a=26$.

**(b-i)** Con esos valores, $f'(x)=\dfrac{x}{10}$ en $(0,20)$, $f'(x)=-\dfrac{3}{10}$ en $(20,50)$ y $f'(x)=-\dfrac{x}{50}$ en $(50,60)$. Hay **mínimo relativo** en $(0,0)$, **máximo relativo** en $(20,20)$ y **mínimo relativo** en $(60,0)$.

**(b-ii)** Tabla de valores: $(0,0),(10,5),(15,11{,}25),(20,20),(30,17),(45,12{,}5),(50,11),(60,0)$: parábola creciente, recta decreciente y parábola decreciente hasta el eje.

**(b-iii)** Como $f\geq 0$ en todo el dominio, el área es
$$\text{Área}=\int_{0}^{20}\dfrac{x^{2}}{20}\,dx+\int_{20}^{50}\Big(26-\dfrac{3x}{10}\Big)dx+\int_{50}^{60}\Big(36-\dfrac{x^{2}}{100}\Big)dx=\dfrac{400}{3}+465+\dfrac{170}{3}=655\ \text{u}^2.$$

## Ejercicio 6

### Enunciado

En un festival de cine se venden entradas Estándar, Premium y VIP. En la sesión inaugural se vendieron $5$ Premium, $20$ Estándar y $20$ VIP, con recaudación $1800$€. En la sesión nocturna, $10$ VIP, $10$ Estándar y $5$ Premium, con $1000$€. En la clausura el número de entradas Premium superó en $4$ al resto ($12$ VIP y $4$ Estándar), con recaudación $1560$€.

**(a)** $(2{,}25$ puntos$)$ Calcule el precio de cada tipo de entrada y la recaudación total.

**(b)** $(0{,}75$ puntos$)$ Determine el tipo de entrada con mayor recaudación y su valor.

### Solución

Sean $x$, $y$, $z$ los precios de Estándar, Premium y VIP.
**(a)** El sistema es
$$\begin{cases} 20x+5y+20z=1800 \\ 10x+5y+10z=1000 \\ 4x+20y+12z=1560 \end{cases}$$
(en la clausura las Premium fueron $12+4+4=20$). Resolviéndolo se obtiene
$$x=25,\quad y=40,\quad z=55.$$
Cada entrada Estándar cuesta $25$€, la Premium $40$€ y la VIP $55$€. La recaudación total es $1800+1000+1560=4360$€.

**(b)** Estándar: $34\cdot 25=850$€; Premium: $30\cdot 40=1200$€; VIP: $42\cdot 55=2310$€. La mayor recaudación se obtuvo con las entradas **VIP**, con $2310$€.
