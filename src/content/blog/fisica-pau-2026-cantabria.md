---
title: Física · PAU 2026 · Cantabria — examen resuelto
seoTitle: PAU Física Cantabria 2026 resuelta paso a paso
date: 2026-06-01
updated: 2026-11-05
description: Examen de Física de Cantabria 2026 resuelto paso a paso para 2.º de Bachillerato.
tag: Física PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

Una sonda espacial de $500\ \text{kg}$ describe una trayectoria circular de radio $r$ en torno a Marte, completando una revolución cada $100\ \text{minutos}$. Su energía mecánica en órbita es $-3{,}16\cdot10^{9}\ \text{J}$.

**(a)** Deduzca la expresión del periodo de la órbita en función de $G$, de la masa de Marte $M_M$ y del radio $r$.
**(b)** Calcule el radio de la órbita y la masa de Marte.


### Esquema para el apartado gráfico

![Esquema de líneas de campo eléctrico y de campo magnético alrededor de un conductor](/assets/latex/pau-fisica-fields.svg)
### Solución explicada

**(a)** En órbita circular, la gravedad es la fuerza centrípeta: $\dfrac{G M_M m}{r^{2}}=\dfrac{m\,4\pi^{2} r}{T^{2}}$, de donde (tercera ley de Kepler):
$$T^{2}=\dfrac{4\pi^{2}}{G M_M}\,r^{3}\ \Rightarrow\ T=2\pi\sqrt{\dfrac{r^{3}}{G M_M}}$$

**(b)** La energía mecánica orbital es $E_{mec}=-\dfrac{G M_M m}{2r}$, luego
$$\dfrac{G M_M}{r}=\dfrac{-2E_{mec}}{m}=\dfrac{2\cdot3{,}16\cdot10^{9}}{500}=1{,}264\cdot10^{7}\ \text{(SI)}$$
De la expresión del periodo, $G M_M=\dfrac{4\pi^{2} r^{3}}{T^{2}}$, así que $\dfrac{G M_M}{r}=\dfrac{4\pi^{2} r^{2}}{T^{2}}$:
$$r^{2}=\dfrac{(G M_M/r)\,T^{2}}{4\pi^{2}}=\dfrac{1{,}264\cdot10^{7}\cdot6000^{2}}{4\pi^{2}}\ \Rightarrow\ r=3{,}40\cdot10^{6}\ \text{m}$$
$$G M_M=\left(\dfrac{G M_M}{r}\right)r=1{,}264\cdot10^{7}\cdot3{,}40\cdot10^{6}=4{,}29\cdot10^{13}\ \Rightarrow\ M_M=\dfrac{4{,}29\cdot10^{13}}{6{,}67\cdot10^{-11}}=6{,}43\cdot10^{23}\ \text{kg}$$

## Ejercicio 2

### Enunciado

Dos masas puntuales idénticas $m_1=m_2=10\ \text{kg}$ se sitúan en $P_1(0,0)\ \text{m}$ y $P_2(0,10)\ \text{m}$ del plano $xy$.

**(a)** Calcule y represente el vector campo gravitatorio creado por $m_1$ y $m_2$ en el punto $(5,5)\ \text{m}$.
**(b)** Calcule el trabajo del campo gravitatorio para trasladar una masa $m_3=1\ \text{kg}$ desde $(5,5)\ \text{m}$ hasta $(0,5)\ \text{m}$.
**(c)** Interprete el signo del trabajo obtenido.

### Solución explicada

**(a)** El punto $(5,5)$ dista $r=\sqrt{5^{2}+5^{2}}=\sqrt{50}\ \text{m}$ de cada masa. Cada campo $g_i=\dfrac{G m_i}{r^{2}}=\dfrac{6{,}67\cdot10^{-11}\cdot10}{50}=1{,}334\cdot10^{-11}\ \text{N/kg}$ apunta hacia su masa. Por simetría, las componentes $y$ se cancelan y sólo queda la componente $x$ (hacia el eje $y$, sentido $-\vec{i}$):
$$g_x=2\,g_i\cos45^\circ=2\cdot1{,}334\cdot10^{-11}\cdot\dfrac{5}{\sqrt{50}}=-1{,}89\cdot10^{-11}\ \text{N/kg}$$
$$\vec{g}=-1{,}89\cdot10^{-11}\,\vec{i}\ \text{N/kg}\quad(|\vec{g}|\approx 1{,}9\cdot10^{-11}\ \text{N/kg})$$

**(b)** El trabajo del campo es $W=m_3\,(V_i-V_f)$, con $V=-G m\!\left(\tfrac{1}{r_1}+\tfrac{1}{r_2}\right)$.
$$V(5,5)=-2\cdot\dfrac{G\cdot10}{\sqrt{50}}=-1{,}887\cdot10^{-10}\ \text{J/kg}$$
$$V(0,5)=-2\cdot\dfrac{G\cdot10}{5}=-2{,}668\cdot10^{-10}\ \text{J/kg}$$
$$W=1\cdot\big(V(5,5)-V(0,5)\big)=(-1{,}887+2{,}668)\cdot10^{-10}=+7{,}8\cdot10^{-11}\ \text{J}$$

**(c)** El trabajo del campo es positivo: la masa se mueve hacia una región de potencial más negativo (más cerca de ambas masas), por lo que el campo gravitatorio acelera a $m_3$ y su energía potencial disminuye.

## Ejercicio 3

### Enunciado

La figura muestra las trayectorias circulares de tres partículas en un campo magnético uniforme perpendicular al plano del papel y saliente. Los radios cumplen $R_1>R_2>R_3$. Las tres tienen la misma masa ($m_1=m_2=m_3$) y la misma magnitud de carga ($|q_1|=|q_2|=|q_3|$).

**(a)** Deduzca el signo de las tres cargas.
**(b)** Razone qué partícula se mueve con mayor y cuál con menor velocidad.
**(c)** Si la partícula 2 tiene $m_2=3{,}3\cdot10^{-27}\ \text{kg}$, $v_2=1{,}2\cdot10^{6}\ \text{m/s}$, radio $R_2=3{,}5\ \text{cm}$ y $|\vec{B}|=0{,}7\ \text{T}$, determine su carga.

### Solución explicada

El campo curva las partículas por la fuerza de Lorentz $\vec{F}=q\,\vec{v}\times\vec{B}$, que actúa como fuerza centrípeta: $|q|vB=\dfrac{m v^{2}}{R}$, de donde
$$R=\dfrac{m v}{|q|\,B}$$

**(a)** El sentido de giro fija el signo: con $\vec{B}$ saliente, $\vec{F}=q\,\vec{v}\times\vec{B}$ debe apuntar al centro de cada circunferencia. Las partículas que, para la velocidad indicada en la figura, giran de modo que $\vec{v}\times\vec{B}$ apunta al centro son **positivas**, y las que giran en sentido contrario (su fuerza apunta al centro sólo con carga negativa) son **negativas**. Así, según el sentido de curvatura dibujado, las que se desvían hacia un lado son positivas y las que lo hacen hacia el opuesto, negativas.

**(b)** Como $m$, $|q|$ y $B$ son iguales, $R=\dfrac{m v}{|q|B}\propto v$: a mayor radio, mayor velocidad. Por tanto la partícula **1** ($R_1$ mayor) es la más rápida y la **3** ($R_3$ menor) la más lenta.

**(c)** Despejando la carga de la partícula 2:
$$|q_2|=\dfrac{m_2 v_2}{R_2\,B}=\dfrac{3{,}3\cdot10^{-27}\cdot1{,}2\cdot10^{6}}{0{,}035\cdot0{,}7}=1{,}6\cdot10^{-19}\ \text{C}$$
(una carga elemental).

## Ejercicio 4

### Enunciado

Tres cargas eléctricas $q_1=5\ \mu\text{C}$, $q_2=-20\ \mu\text{C}$ y $q_3=10\ \mu\text{C}$ se sitúan en $(-1,0)\ \text{cm}$, $(0,3)\ \text{cm}$ y $(2,0)\ \text{cm}$. Calcule:

**(a)** El vector campo eléctrico en $(0,0)\ \text{cm}$.
**(b)** El potencial eléctrico en $(0,0)\ \text{cm}$ y en $(3,3)\ \text{cm}$.
**(c)** El trabajo del campo para trasladar una carga de $1\ \mu\text{C}$ desde $(0,0)$ hasta $(3,3)\ \text{cm}$, interpretando su signo.

### Solución explicada

**(a)** Campo en $(0,0)$ (distancias: $q_1$ a $1\ \text{cm}$, $q_2$ a $3\ \text{cm}$, $q_3$ a $2\ \text{cm}$):
$$E_1=\dfrac{k q_1}{(0{,}01)^{2}}=4{,}5\cdot10^{8}\ \text{N/C}\ (+\vec{i}),\quad E_2=\dfrac{k|q_2|}{(0{,}03)^{2}}=2{,}0\cdot10^{8}\ \text{N/C}\ (+\vec{j}),\quad E_3=\dfrac{k q_3}{(0{,}02)^{2}}=2{,}25\cdot10^{8}\ \text{N/C}\ (-\vec{i})$$
($q_1$ positiva: se aleja, hacia $+x$; $q_3$ positiva: hacia $-x$; $q_2$ negativa: hacia ella, $+y$.)
$$\vec{E}=(4{,}5-2{,}25)\cdot10^{8}\,\vec{i}+2{,}0\cdot10^{8}\,\vec{j}=\left(2{,}25\cdot10^{8}\,\vec{i}+2{,}0\cdot10^{8}\,\vec{j}\right)\ \text{N/C}$$
$$|\vec{E}|=3{,}0\cdot10^{8}\ \text{N/C}$$

**(b)** Potenciales ($V=\sum k q_i/r_i$). En $(0,0)$:
$$V_{(0,0)}=k\left(\dfrac{5}{0{,}01}+\dfrac{-20}{0{,}03}+\dfrac{10}{0{,}02}\right)\cdot10^{-6}=3{,}0\cdot10^{6}\ \text{V}$$
En $(3,3)\ \text{cm}$ (distancias: $q_1$ a $5\ \text{cm}$, $q_2$ a $3\ \text{cm}$, $q_3$ a $\sqrt{10}\ \text{cm}$):
$$V_{(3,3)}=k\left(\dfrac{5}{0{,}05}+\dfrac{-20}{0{,}03}+\dfrac{10}{0{,}0316}\right)\cdot10^{-6}=-2{,}25\cdot10^{6}\ \text{V}$$

**(c)** Trabajo del campo:
$$W=q\,(V_{(0,0)}-V_{(3,3)})=10^{-6}\,(3{,}0\cdot10^{6}-(-2{,}25\cdot10^{6}))=+5{,}3\ \text{J}$$
Es positivo: el campo impulsa la carga positiva desde el punto de mayor potencial $(0,0)$ hacia el de menor potencial $(3,3)$.

## Ejercicio 5

### Enunciado

Por una cuerda se propaga una onda dada (en unidades SI) por
$$y(x,t)=0{,}02\,\mathrm{sen}\!\left(\pi\left(\dfrac{4x}{3}+200\,t\right)\right)$$

**(a)** Determine el sentido de propagación, la amplitud, la longitud de onda, la frecuencia, el periodo y la velocidad de propagación.
**(b)** Calcule la elongación de un punto situado en $x=\tfrac34\ \text{m}$ en el instante $t=\tfrac{1}{240}\ \text{s}$.
**(c)** Calcule la velocidad transversal de ese punto en ese instante.

### Solución explicada

**(a)** Como $x$ y $t$ aparecen con el **mismo** signo, la onda se propaga en el sentido $-x$. Identificando:
$$A=0{,}02\ \text{m}\qquad k=\dfrac{4\pi}{3}\ \Rightarrow\ \lambda=\dfrac{2\pi}{k}=1{,}5\ \text{m}$$
$$\omega=200\pi\ \Rightarrow\ f=\dfrac{\omega}{2\pi}=100\ \text{Hz},\quad T=\dfrac{1}{f}=0{,}01\ \text{s}$$
$$v=\dfrac{\omega}{k}=\dfrac{200\pi}{4\pi/3}=150\ \text{m/s}$$

**(b)** En $x=\tfrac34\ \text{m}$, $t=\tfrac{1}{240}\ \text{s}$ el argumento es $\pi\left(\tfrac43\cdot\tfrac34+200\cdot\tfrac{1}{240}\right)=\pi\left(1+\tfrac56\right)=\dfrac{11\pi}{6}$:
$$y=0{,}02\,\mathrm{sen}\dfrac{11\pi}{6}=0{,}02\cdot(-0{,}5)=-0{,}01\ \text{m}$$

**(c)** Velocidad transversal $v_y=\dfrac{\partial y}{\partial t}=0{,}02\cdot200\pi\,\cos\!\left(\pi\left(\tfrac{4x}{3}+200t\right)\right)$. En ese punto e instante:
$$v_y=4\pi\cos\dfrac{11\pi}{6}=4\pi\cdot\dfrac{\sqrt3}{2}=10{,}9\ \text{m/s}$$

## Ejercicio 6

### Enunciado

Un objeto de $8\ \text{cm}$ de altura está situado $10\ \text{cm}$ a la izquierda de una lente delgada divergente de $5\ \text{dioptrías}$.

**(a)** Dibuje el trazado de rayos correspondiente.
**(b)** Calcule la posición de la imagen y su tamaño, justificando su naturaleza (real/virtual, derecha/invertida, mayor/menor).


### Esquema para el apartado gráfico

![Trazado de rayos para una lente divergente y un espejo cóncavo](/assets/latex/pau-fisica-optics.svg)
### Solución explicada

**(a)** Rayos principales: uno paralelo al eje que, al salir, diverge como si procediera del foco imagen $F'$ (virtual, a la izquierda); otro que pasa por el centro óptico sin desviarse. Sus prolongaciones se cortan del lado del objeto, dando una imagen virtual.

**(b)** Potencia negativa, $f'=1/P=-0{,}20\ \text{m}$. Ecuación de la lente:
$$\dfrac{1}{s'}-\dfrac{1}{s}=P\ \Rightarrow\ \dfrac{1}{s'}=-5+\dfrac{1}{-0{,}10}=-5-10=-15\ \text{m}^{-1}$$
$$s'=-0{,}067\ \text{m}=-6{,}7\ \text{cm}$$
Aumento lateral:
$$A=\dfrac{s'}{s}=\dfrac{-0{,}067}{-0{,}10}=0{,}67\ \Rightarrow\ y'=0{,}67\cdot8=5{,}3\ \text{cm}$$
La imagen es **virtual** ($s'<0$, al mismo lado que el objeto), **derecha** ($A>0$) y **menor** ($|A|<1$). Es el comportamiento típico de una lente divergente.

## Ejercicio 7

### Enunciado

La actividad de una muestra de $10^{21}$ átomos desciende al $40\%$ al cabo de $265\ \text{días}$. Calcule:

**(a)** La constante de desintegración.
**(b)** El periodo de semidesintegración.
**(c)** El tiempo que debe transcurrir hasta que la actividad de la muestra sea de $10^{6}\ \text{Bq}$.

### Solución explicada

**(a)** De $N=N_0 e^{-\lambda t}$ con $N/N_0=0{,}40$ a $t=265\ \text{días}$ ($=2{,}29\cdot10^{7}\ \text{s}$):
$$\lambda=\dfrac{-\ln(0{,}40)}{t}=\dfrac{0{,}916}{2{,}29\cdot10^{7}}=4{,}0\cdot10^{-8}\ \text{s}^{-1}$$

**(b)** Periodo de semidesintegración:
$$T_{1/2}=\dfrac{\ln 2}{\lambda}=\dfrac{0{,}693}{4{,}0\cdot10^{-8}}=1{,}73\cdot10^{7}\ \text{s}\approx 200\ \text{días}$$

**(c)** La actividad inicial es $A_0=\lambda N_0=4{,}0\cdot10^{-8}\cdot10^{21}=4{,}0\cdot10^{13}\ \text{Bq}$. Como $A=A_0 e^{-\lambda t}$:
$$t=\dfrac{1}{\lambda}\ln\dfrac{A_0}{A}=\dfrac{1}{4{,}0\cdot10^{-8}}\ln\dfrac{4{,}0\cdot10^{13}}{10^{6}}=4{,}4\cdot10^{8}\ \text{s}\approx 13{,}9\ \text{años}$$
