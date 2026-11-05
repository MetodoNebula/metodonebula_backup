---
title: Matemáticas Aplicadas a las CCSS II · PAU 2025 · Madrid — examen resuelto
seoTitle: PAU Matemáticas Aplicadas a las CCSS II Madrid 2025 resuelta
date: 2025-06-01
updated: 2026-11-05
description: Examen resuelto de Matemáticas Aplicadas a las Ciencias Sociales II de Madrid 2025, con procedimientos completos.
tag: Matemáticas CCSS PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

Se considera $f(x)=e^{x}(-x^{2}+3)$.
**(a)** Determina los intervalos de crecimiento y decrecimiento y clasifica, si procede, sus extremos relativos.
**(b)** Halla el valor de la integral definida $\displaystyle\int_{1}^{2}\frac{f(x)}{x\,e^{x}}\,dx$.

### Solución

**(a)** $f$ es continua y derivable en $\mathbb{R}$.
$$f'(x)=e^{x}(-x^2+3)+e^{x}(-2x)=e^{x}(-x^2-2x+3).$$
Como $e^x>0$, $f'(x)=0\iff x^2+2x-3=0\iff x=-3$ o $x=1$. Estudiando el signo:
- En $(-\infty,-3)$ y $(1,+\infty)$: $f'<0$, $f$ **decrece**.
- En $(-3,1)$: $f'>0$, $f$ **crece**.

Por tanto hay un **mínimo relativo** en $x=-3$: $f(-3)=e^{-3}(-9+3)=-6e^{-3}$, y un **máximo relativo** en $x=1$: $f(1)=e(-1+3)=2e$.

**(b)** Simplificamos el integrando: $\dfrac{f(x)}{x e^x}=\dfrac{e^x(-x^2+3)}{x e^x}=\dfrac{-x^2+3}{x}=-x+\dfrac{3}{x}$. Entonces
$$\int_1^2\left(-x+\frac{3}{x}\right)dx=\left[-\frac{x^2}{2}+3\ln|x|\right]_1^2=\left(-2+3\ln2\right)-\left(-\tfrac12\right)=-\tfrac32+3\ln2\approx0{,}5794.$$

## Ejercicio 2

### Enunciado

Se considera
$$f(x)=\begin{cases} \dfrac{x^{2}+1}{x-1} & \text{si } x\le0\\[2mm] \dfrac{x+a}{x+1} & \text{si } x>0\end{cases},\qquad a\in\mathbb{R}.$$
**(a)** Determina el valor de $a$ para que $f$ sea continua en $x=0$.
**(b)** Calcula las asíntotas de $f(x)$.

### Solución

**(a)** Continuidad en $x=0$: $f(0)=\dfrac{0+1}{0-1}=-1$ y $\displaystyle\lim_{x\to0^+}\frac{x+a}{x+1}=a$. Igualando los límites laterales con $f(0)$: $a=-1$.

**(b)** Con $a=-1$, el dominio es todo $\mathbb{R}$ (los denominadores $x-1$ para $x\le0$ y $x+1$ para $x>0$ no se anulan en sus tramos), por lo que **no hay asíntotas verticales**.

*Asíntota horizontal (en $+\infty$):* $\displaystyle\lim_{x\to+\infty}\frac{x-1}{x+1}=1$, luego $y=1$ es asíntota horizontal en $+\infty$.

*Asíntota oblicua (en $-\infty$):* como $\displaystyle\lim_{x\to-\infty}\frac{x^2+1}{x-1}=-\infty$, buscamos $y=mx+n$:
$$m=\lim_{x\to-\infty}\frac{x^2+1}{x(x-1)}=1,\qquad n=\lim_{x\to-\infty}\left(\frac{x^2+1}{x-1}-x\right)=\lim_{x\to-\infty}\frac{x+1}{x-1}=1.$$
Luego $y=x+1$ es asíntota oblicua en $-\infty$.

## Ejercicio 3

### Enunciado

Un maestro jabonero sabe que el $90\%$ de sus pastillas pasarían el control de calidad.
**(a)** Determina el tamaño mínimo de muestra para estimar la proporción que supera el control, con confianza del $95\%$ y error inferior al $5\%$.
**(b)** Si se eligen $140$ pastillas, calcula, aproximando por la normal adecuada, la probabilidad de que al menos $120$ superen el control.

### Solución

**(a)** Con $z_{\alpha/2}=1{,}96$ y $E=z_{\alpha/2}\sqrt{\dfrac{pq}{n}}<0{,}05$:
$$n>\frac{z_{\alpha/2}^{2}\,p\,q}{E^{2}}=\frac{1{,}96^{2}\cdot0{,}90\cdot0{,}10}{0{,}05^{2}}=138{,}2976.$$
Por tanto, el tamaño mínimo es $n=139$ pastillas.

**(b)** Sea $X=$ "n.º de pastillas que superan el control" entre $140$, $X\sim B(140;\,0{,}90)$. Como $n>30$, $np=126>5$ y $nq=14>5$, aproximamos por $Y\sim N(\mu,\sigma)$ con $\mu=np=126$ y $\sigma=\sqrt{npq}=\sqrt{12{,}6}\approx3{,}55$. Con corrección de continuidad (Yates):
$$P(X\ge120)\approx P\!\left(Z\ge\frac{119{,}5-126}{3{,}55}\right)=P(Z\ge-1{,}83)=P(Z\le1{,}83)=0{,}9664.$$

## Ejercicio 4

### Enunciado

El peso de las pastillas de jabón se aproxima por una normal de media $\mu$ gramos y desviación típica $30$ gramos.
**(a)** Se seleccionan $140$ pastillas con peso total $17500$ g. Obtén un intervalo de confianza del $99\%$ para $\mu$.
**(b)** Si $\mu=100$ g, ¿cuál sería la probabilidad de que el peso medio de una muestra de $64$ pastillas supere $110$ g?

### Solución

**(a)** Media muestral: $\overline{x}=\dfrac{17500}{140}=125$ g. Para el $99\%$, $z_{\alpha/2}=2{,}575$. El intervalo es
$$\overline{x}\pm z_{\alpha/2}\frac{\sigma}{\sqrt n}=125\pm2{,}575\cdot\frac{30}{\sqrt{140}}=125\pm6{,}53=(118{,}47,\ 131{,}53).$$

**(b)** Con $\mu=100$ y $n=64$: $\overline{X}\sim N\!\left(100,\ \dfrac{30}{\sqrt{64}}=\dfrac{30}{8}=3{,}75\right)$. Entonces
$$P(\overline{X}>110)=P\!\left(Z>\frac{110-100}{3{,}75}\right)=P(Z>2{,}67)=1-0{,}9962=0{,}0038.$$

## Ejercicio 5

### Enunciado

En un concesionario, el $50\%$ de las ventas son de microhíbridos, el $35\%$ híbridos y el resto eléctricos enchufables. El acabado más alto de gama se vende en el $80\%$ de los eléctricos, el $60\%$ de los híbridos y el $45\%$ de los microhíbridos. Se selecciona una venta al azar.
**(a)** Probabilidad de que el coche vendido no tenga el acabado más alto de gama.
**(b)** Si el coche tiene el acabado más alto, probabilidad de que sea eléctrico enchufable.

### Solución

Sean $A,B,C$ los sucesos "microhíbrido", "híbrido" y "eléctrico enchufable", con $P(A)=0{,}50$, $P(B)=0{,}35$, $P(C)=0{,}15$, y $G=$ "acabado más alto de gama".

**(a)** Por probabilidad total:
$$P(G)=0{,}45\cdot0{,}50+0{,}60\cdot0{,}35+0{,}80\cdot0{,}15=0{,}225+0{,}21+0{,}12=0{,}555.$$
Luego $P(\overline{G})=1-0{,}555=0{,}445$.

**(b)** Por Bayes:
$$P(C\mid G)=\frac{P(G\mid C)P(C)}{P(G)}=\frac{0{,}80\cdot0{,}15}{0{,}555}=\frac{0{,}12}{0{,}555}\approx0{,}2162.$$

## Ejercicio 6

### Enunciado

De tres sucesos $A$, $B$ y $C$ se sabe que $A$ y $C$ son disjuntos, $A$ y $B$ son independientes y $P(A)=0{,}25$, $P(B)=0{,}2$, $P(B\cap C)=0{,}05$.
**(a)** Calcula la probabilidad de que ocurra al menos uno de los sucesos $A$ o $B$.
**(b)** Calcula $P(\overline{B}\cup\overline{C})$.
**(c)** ¿Pueden ser independientes los sucesos $A$ y $C$?

### Solución

Como $A$ y $B$ son independientes, $P(A\cap B)=P(A)P(B)=0{,}25\cdot0{,}2=0{,}05$.

**(a)** $$P(A\cup B)=P(A)+P(B)-P(A\cap B)=0{,}25+0{,}2-0{,}05=0{,}4.$$

**(b)** Por las leyes de De Morgan, $\overline{B}\cup\overline{C}=\overline{B\cap C}$, de modo que
$$P(\overline{B}\cup\overline{C})=1-P(B\cap C)=1-0{,}05=0{,}95.$$

**(c)** Como $P(B\cap C)=0{,}05$, se tiene $P(C)\ge0{,}05>0$, y además $P(A)=0{,}25>0$, luego $P(A)P(C)>0$. Pero al ser disjuntos $P(A\cap C)=0\neq P(A)P(C)$. Por tanto, $A$ y $C$ **no pueden ser independientes**.

## Ejercicio 7

### Enunciado

Un frutero alquila una cámara con capacidad para $2700$ kg de sandía, que es lo que vende cada semana, de tres variedades: rayada (a $1{,}25$ €/kg), negra sin pepitas (a $2{,}75$ €/kg) y negra con pepitas (a $2{,}25$ €/kg). Quiere que, en cualquier caso, los kilos de sandía negra con pepitas sean un tercio del total de kilos de sandía sin pepitas y rayada.
**(a)** Para recaudar exactamente $5400$ € vendiendo las $2700$ kg, ¿cuántos kilos de cada variedad debe vender?
**(b)** ¿Es posible poner el mismo precio a todas las variedades y seguir recaudando $5400$ € con los $2700$ kg? Si es así, ¿cuál sería el precio y las cantidades? Justifica si son únicas.

### Solución

Sean $x=$ kg de rayada, $y=$ kg de negra con pepitas, $z=$ kg de negra sin pepitas.

**(a)** El sistema es
$$\begin{cases} x+y+z=2700\\ x-3y+z=0\\ 1{,}25x+2{,}25y+2{,}75z=5400\end{cases}$$
(la segunda ecuación viene de $y=\tfrac13(x+z)$). Resolviendo por Gauss se obtiene $z=900$, $y=675$, $x=1125$. Comprobación: $1125+675+900=2700$ y $1{,}25\cdot1125+2{,}25\cdot675+2{,}75\cdot900=5400$.
$$\boxed{1125\text{ kg rayada},\ 675\text{ kg negra con pepitas},\ 900\text{ kg negra sin pepitas}.}$$

**(b)** Si el precio común es $p$ €/kg, la tercera ecuación pasa a $p(x+y+z)=5400$, es decir $2700p=5400\Rightarrow p=2$ €/kg. Con el sistema
$$\begin{cases} x+y+z=2700\\ x-3y+z=0\end{cases}$$
se obtiene $y=675$ y $x+z=2025$. Como hay dos ecuaciones y tres incógnitas, el sistema es **compatible indeterminado**: la solución **no es única**. Se venderían $675$ kg de negra con pepitas y, entre rayada y negra sin pepitas, $2025$ kg repartidos de cualquier forma válida.
