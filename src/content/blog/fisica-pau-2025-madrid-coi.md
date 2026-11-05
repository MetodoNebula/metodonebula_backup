---
title: Física · PAU 2025 · Serie alternativa · Madrid — examen resuelto
seoTitle: PAU Física Madrid 2025 · Serie alternativa resuelta paso a paso
date: 2025-06-01
updated: 2026-11-05
description: Examen de Física de Madrid 2025 · Serie alternativa resuelto paso a paso para 2.º de Bachillerato.
tag: Física PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

En medicina nuclear se emplea el tecnecio-99, $^{99}\text{Tc}$. Para controlar una dosis se mide su actividad a dos tiempos desde la preparación de la muestra:

| Tiempo desde la creación (h) | 4 | 16 |
|---|---|---|
| Actividad (Bq) | $3{,}62\cdot10^{13}$ | $4{,}90\cdot10^{12}$ |

**(a)** Determine el periodo de semidesintegración del $^{99}\text{Tc}$ y la actividad inicial de la muestra.
**(b)** Calcule la masa de isótopo presente en el instante en que se preparó.

### Solución explicada

**(a) Periodo de semidesintegración y actividad inicial.**

La actividad decae exponencialmente, $A = A_0\,e^{-t/\tau}$, con $\tau$ la vida media. Entre las dos lecturas, separadas $\Delta t = 12\ \text{h} = 43200\ \text{s}$:
$$A_2 = A_1\,e^{-\Delta t/\tau}\ \Rightarrow\ \tau = \dfrac{-\Delta t}{\ln\!\left(\dfrac{A_2}{A_1}\right)} = \dfrac{-43200}{\ln\!\left(\dfrac{4{,}90\cdot10^{12}}{3{,}62\cdot10^{13}}\right)} = 2{,}16\cdot10^{4}\ \text{s}$$
El periodo de semidesintegración:
$$T_{1/2} = \tau\,\ln 2 = 2{,}16\cdot10^{4}\cdot 0{,}693 = 1{,}50\cdot10^{4}\ \text{s}\ (\approx 4{,}2\ \text{h})$$
La actividad inicial (en $t=0$) a partir de la lectura de $t=4\ \text{h}$:
$$A_0 = A_1\,e^{+t_1/\tau} = 3{,}62\cdot10^{13}\,e^{(4\cdot3600)/2{,}16\cdot10^{4}} = 7{,}05\cdot10^{13}\ \text{Bq}$$

**(b) Masa inicial.**

Como $A = \lambda N = N/\tau$, el número de núcleos iniciales es:
$$N_0 = A_0\,\tau = 7{,}05\cdot10^{13}\cdot 2{,}16\cdot10^{4} = 1{,}52\cdot10^{18}\ \text{núcleos}$$
Y la masa correspondiente:
$$m = \dfrac{N_0\,M}{N_A} = \dfrac{1{,}52\cdot10^{18}\cdot 98{,}9}{6{,}02\cdot10^{23}} = 2{,}50\cdot10^{-4}\ \text{g}$$

## Ejercicio 2

### Enunciado

Un satélite de masa $300\ \text{kg}$ describe una órbita elíptica alrededor de la Tierra. En el perigeo dista $7000\ \text{km}$ de la superficie terrestre y lleva una velocidad de $6000\ \text{m}\cdot\text{s}^{-1}$; su periodo es de $6{,}08\ \text{horas}$.

**(a)** La energía del satélite y su momento angular.
**(b)** La máxima distancia satélite-Tierra y su velocidad en ese punto.
**(c)** El trabajo de la fuerza gravitatoria al pasar del apogeo al perigeo.

### Solución explicada

**(a) Energía mecánica y momento angular (datos del perigeo).**
$$E_m = -\,G\dfrac{M_T m}{r_{per}} + \tfrac12 m v_{per}^2 = -\,6{,}67\cdot10^{-11}\dfrac{5{,}97\cdot10^{24}\cdot300}{1{,}337\cdot10^{7}} + \tfrac12\cdot300\cdot6000^2 = -3{,}53\cdot10^{9}\ \text{J}$$
En el perigeo $\vec{r}\perp\vec{v}$, luego:
$$L = r_{per}\,m\,v_{per} = 1{,}337\cdot10^{7}\cdot300\cdot6000 = 2{,}41\cdot10^{13}\ \text{kg}\cdot\text{m}^2\cdot\text{s}^{-1}$$

**(b) Distancia máxima (apogeo) y velocidad.**
Por la 3.ª ley de Kepler se obtiene el semieje mayor:
$$T^2 = \dfrac{4\pi^2 a^3}{G M_T}\ \Rightarrow\ a = \sqrt[3]{\dfrac{T^2 G M_T}{4\pi^2}} = 1{,}69\cdot10^{7}\ \text{m}$$
$$r_{apo} = 2a - r_{per} = 2\cdot1{,}69\cdot10^{7} - 1{,}337\cdot10^{7} = 2{,}04\cdot10^{7}\ \text{m}$$
Conservación del momento angular entre apogeo y perigeo:
$$v_{apo} = \dfrac{L}{m\,r_{apo}} = \dfrac{2{,}41\cdot10^{13}}{300\cdot2{,}04\cdot10^{7}} = 3{,}92\cdot10^{3}\ \text{m}\cdot\text{s}^{-1}$$

**(c) Trabajo del apogeo al perigeo.**
La fuerza gravitatoria es conservativa, $W = -\Delta E_p = \Delta E_c$:
$$W = \tfrac12 m\,(v_{per}^2 - v_{apo}^2) = \tfrac12\cdot300\,(6000^2 - 3920^2) = 3{,}09\cdot10^{9}\ \text{J}$$

## Ejercicio 3

### Enunciado

Dos partículas puntuales $A$ y $B$ con masas $m_A = 5\ \text{kg}$ y $m_B = 20\ \text{kg}$ están en el origen y en el punto $(6,0)\ \text{m}$, respectivamente, en reposo.

**(a)** El campo gravitatorio en el punto $(1,0)\ \text{m}$.
**(b)** El punto de equilibrio entre $A$ y $B$.
**(c)** El trabajo de la fuerza gravitatoria al desplazar una masa de $100\ \text{g}$ desde $(1,0)\ \text{m}$ hasta $(2,0)\ \text{m}$.

### Solución explicada

**(a) Campo en $(1,0)\ \text{m}$.**
El campo de cada masa apunta hacia ella. En $(1,0)$: $A$ está a $1\ \text{m}$ (campo hacia $-x$) y $B$ a $5\ \text{m}$ (campo hacia $+x$):
$$\vec{g} = -G\dfrac{m_A}{1^2}\,\vec{i} + G\dfrac{m_B}{5^2}\,\vec{i} = \left(-6{,}67\cdot10^{-11}\cdot5 + 6{,}67\cdot10^{-11}\dfrac{20}{25}\right)\vec{i}$$
$$\vec{g} = -2{,}80\cdot10^{-10}\,\vec{i}\ \text{N}\cdot\text{kg}^{-1}$$

**(b) Punto de equilibrio.**
Entre ambas los campos tienen sentidos opuestos; se igualan módulos ($x$ desde $A$):
$$G\dfrac{5}{x^2} = G\dfrac{20}{(6-x)^2}\ \Rightarrow\ \dfrac{(6-x)^2}{x^2} = 4\ \Rightarrow\ 6-x = 2x\ \Rightarrow\ x = 2\ \text{m}$$
El punto de equilibrio es $(2,0)\ \text{m}$ (la otra raíz, $x=-6$, carece de sentido físico).

**(c) Trabajo al mover $m_C$ de $(1,0)$ a $(2,0)$.**
$W = -\Delta E_p$ con $E_p = -G m_C\!\left(\dfrac{m_A}{r_A}+\dfrac{m_B}{r_B}\right)$:
$$E_{p,i} = -G\,0{,}1\left(\dfrac{5}{1}+\dfrac{20}{5}\right) = -6{,}00\cdot10^{-11}\ \text{J}$$
$$E_{p,f} = -G\,0{,}1\left(\dfrac{5}{2}+\dfrac{20}{4}\right) = -5{,}00\cdot10^{-11}\ \text{J}$$
$$W = -\big(E_{p,f}-E_{p,i}\big) = -1{,}00\cdot10^{-11}\ \text{J}$$

## Ejercicio 4

### Enunciado

Dos cargas fijas $q_1 = 1\ \mu\text{C}$ y $q_2$ (desconocida) están en $(-2,0)\ \text{m}$ y $(4,0)\ \text{m}$.

**(a)** El valor de $q_2$ sabiendo que el campo en $(0,2)\ \text{m}$ sólo tiene componente $x$.
**(b)** El campo eléctrico total en $(0,2)\ \text{m}$.
**(c)** Si $q_2$ (masa $1\ \text{g}$) se deja libre, la velocidad al pasar por el origen.

### Solución explicada

**(a) Valor de $q_2$.**
Para que $E_y=0$ en $P$, la componente $y$ de $q_2$ debe cancelar la de $q_1$; como $q_1>0$ empuja hacia $+y$, $q_2$ debe ser **negativa** (atrae hacia sí). Igualando módulos de $E_y$ (sen del ángulo $=$ cateto vertical $/$ distancia, altura $2\ \text{m}$):
$$K\dfrac{q_1}{d_1^2}\cdot\dfrac{2}{d_1} = K\dfrac{|q_2|}{d_2^2}\cdot\dfrac{2}{d_2}\ \Rightarrow\ |q_2| = q_1\left(\dfrac{d_2}{d_1}\right)^3 = 1\cdot10^{-6}\left(\dfrac{\sqrt{20}}{\sqrt{8}}\right)^3 = 3{,}95\ \mu\text{C}$$
$$q_2 = -3{,}95\ \mu\text{C}$$

**(b) Campo total en $(0,2)\ \text{m}$.**
Sólo quedan las componentes $x$ (ambas hacia $+x$): $q_1$ empuja hacia $+x$ (está a la izquierda) y $q_2<0$ atrae hacia $+x$ (está a la derecha):
$$E_x = K\dfrac{q_1}{d_1^2}\dfrac{2}{d_1} + K\dfrac{|q_2|}{d_2^2}\dfrac{4}{d_2} = 9\cdot10^{9}\!\left(\dfrac{10^{-6}\cdot2}{8\sqrt8} + \dfrac{3{,}95\cdot10^{-6}\cdot4}{20\sqrt{20}}\right) = 2{,}39\cdot10^{3}\ \text{N}\cdot\text{C}^{-1}$$
$$\vec{E} = 2{,}39\cdot10^{3}\,\vec{i}\ \text{N}\cdot\text{C}^{-1}$$

**(c) Velocidad en el origen.**
$q_2$ parte del reposo en $(4,0)$ (dista $6\ \text{m}$ de $q_1$) y llega al origen (dista $2\ \text{m}$). Conservación de la energía:
$$K\dfrac{q_1 q_2}{6} = K\dfrac{q_1 q_2}{2} + \tfrac12 m v^2$$
$$-5{,}925\cdot10^{-3} = -1{,}7775\cdot10^{-2} + \tfrac12\,10^{-3}v^2\ \Rightarrow\ v = 4{,}87\ \text{m}\cdot\text{s}^{-1}$$

## Ejercicio 5

### Enunciado

Una bobina cuadrada de $10$ espiras de $10\ \text{cm}$ de lado y resistencia total $20\ \Omega$ se coloca perpendicular a un campo $B(t)=B_0 e^{-t/\tau}$ con $B_0=0{,}5\ \text{T}$, $\tau=1\ \text{ms}$.

**(a)** En $t=2\ \text{ms}$: el flujo magnético, la f.e.m. inducida y la intensidad.
**(b)** A partir de $t=3\ \text{ms}$ el campo es constante y la bobina rota con velocidad angular $\omega$. Calcule $\omega$ para que la intensidad máxima sea $5\ \text{mA}$.

### Solución explicada

**(a) Flujo, f.e.m. e intensidad en $t=2\ \text{ms}$.**
Con $\vec{B}\parallel$ normal: $\phi = B\,S_{tot} = B_0 e^{-t/\tau}\,0{,}1$. En $t=2\ \text{ms}$ ($t/\tau=2$):
$$\phi = 0{,}5\,e^{-2}\,0{,}1 = 6{,}77\cdot10^{-3}\ \text{Wb}$$
$$|\varepsilon| = \left|\dfrac{d\phi}{dt}\right| = \dfrac{B_0 S_{tot}}{\tau}\,e^{-t/\tau} = \dfrac{0{,}05}{10^{-3}}\,e^{-2} = 6{,}77\ \text{V}$$
$$I = \dfrac{|\varepsilon|}{R} = \dfrac{6{,}77}{20} = 0{,}34\ \text{A}$$

**(b) Rotación con campo constante.**
Ahora $B=B_0 e^{-3}$ (constante) y el flujo varía por el giro: $\phi = B\,S_{tot}\cos(\omega t)$.
$$|\varepsilon| = B S_{tot}\,\omega\,|\sin(\omega t)|\ \Rightarrow\ |\varepsilon|_{máx} = B_0 e^{-3} S_{tot}\,\omega$$
La intensidad máxima:
$$I_{máx} = \dfrac{B_0 e^{-3} S_{tot}\,\omega}{R} = 5\cdot10^{-3}\ \Rightarrow\ \omega = \dfrac{5\cdot10^{-3}\cdot20}{0{,}5\,e^{-3}\cdot0{,}1} = 40{,}2\ \text{rad}\cdot\text{s}^{-1}$$

## Ejercicio 6

### Enunciado

A $1500\ \text{m}$ de la casa de Juan hay una mina donde se producen explosiones idénticas. Juan mide un nivel de intensidad de $20\ \text{dB}$.

**(a)** La potencia de cada explosión.
**(b)** La potencia detectada por un micrófono de $2\ \text{cm}^2$.
**(c)** La casa más cercana está a $50\ \text{m}$; el límite legal es $55\ \text{dB}$. Número máximo de explosiones simultáneas sin superarlo.

### Solución explicada

**(a) Potencia de una explosión.**
De $L = 10\log(I/I_0)$ con $L=20\ \text{dB}$: $I = I_0\,10^{2} = 10^{-10}\ \text{W}\cdot\text{m}^{-2}$. Para un foco puntual $I = P/(4\pi r^2)$:
$$P = I\,4\pi r_1^2 = 10^{-10}\cdot4\pi\,1500^2 = 2{,}83\cdot10^{-3}\ \text{W}$$

**(b) Potencia en el micrófono.**
La intensidad en la casa es $I=10^{-10}\ \text{W}\cdot\text{m}^{-2}$:
$$P_{mic} = I\,S_{mic} = 10^{-10}\cdot2\cdot10^{-4} = 2\cdot10^{-14}\ \text{W}$$

**(c) Número máximo de explosiones a $50\ \text{m}$.**
La potencia total que da $55\ \text{dB}$ a $50\ \text{m}$:
$$P_{máx} = 10^{5{,}5}\,I_0\,4\pi r_2^2 = 10^{5{,}5}\cdot10^{-12}\cdot4\pi\,50^2 = 9{,}93\cdot10^{-3}\ \text{W}$$
Número de explosiones simultáneas:
$$n = \dfrac{P_{máx}}{P} = \dfrac{9{,}93\cdot10^{-3}}{2{,}83\cdot10^{-3}} = 3{,}5\ \Rightarrow\ n_{máx} = 3\ \text{explosiones}$$

## Ejercicio 7

### Enunciado

Una lámina de vidrio ($n_{vidrio}=1{,}55$) de espesor $d$ flota sobre agua ($n_{agua}=1{,}33$); encima hay aire. Un rayo de luz monocromática de $f=7\cdot10^{14}\ \text{Hz}$ incide desde el agua hacia el vidrio con $\alpha=40^\circ$; entre la entrada $(A)$ y la salida $(B)$ por la lámina hay $2\ \text{cm}$ de desplazamiento horizontal.

**(a)** Las longitudes de onda del rayo en el agua y en el vidrio.
**(b)** El espesor $d$ del vidrio y el tiempo que tarda el rayo en atravesarlo.
**(c)** El ángulo de incidencia mínimo en la interfase agua-vidrio para que la luz no salga al aire.

### Solución explicada

**(a) Longitudes de onda.**
$\lambda = v/f = c/(n f)$:
$$\lambda_{agua} = \dfrac{3\cdot10^{8}}{1{,}33\cdot7\cdot10^{14}} = 3{,}22\cdot10^{-7}\ \text{m} = 322\ \text{nm}$$
$$\lambda_{vidrio} = \dfrac{3\cdot10^{8}}{1{,}55\cdot7\cdot10^{14}} = 2{,}76\cdot10^{-7}\ \text{m} = 276\ \text{nm}$$

**(b) Espesor $d$ y tiempo.**
Ley de Snell en agua-vidrio:
$$n_{agua}\sin40^\circ = n_{vidrio}\sin\beta\ \Rightarrow\ \sin\beta = \dfrac{1{,}33\sin40^\circ}{1{,}55}\ \Rightarrow\ \beta = 33{,}5^\circ$$
El rayo cruza con ángulo $\beta$ respecto a la normal (vertical). El desplazamiento horizontal se relaciona con $d$:
$$\tan\beta = \dfrac{2\ \text{cm}}{d}\ \Rightarrow\ d = \dfrac{2}{\tan33{,}5^\circ} = 3{,}02\ \text{cm}$$
Recorrido dentro del vidrio: $d_{AB}=\sqrt{d^2+2^2} = \sqrt{3{,}02^2+2^2} = 3{,}63\ \text{cm}$.
$$t = \dfrac{d_{AB}}{v_{vidrio}} = \dfrac{3{,}63\cdot10^{-2}}{\,c/1{,}55\,} = 1{,}88\cdot10^{-10}\ \text{s}$$

**(c) Ángulo mínimo para reflexión total hacia el aire.**
En vidrio-aire el ángulo límite cumple $n_{vidrio}\sin\beta_L = 1$. Para que el rayo llegue al vidrio con ese $\beta_L$, por Snell en agua-vidrio $n_{agua}\sin\beta_{min}=n_{vidrio}\sin\beta_L = 1$:
$$\sin\beta_{min} = \dfrac{1}{n_{agua}} = \dfrac{1}{1{,}33}\ \Rightarrow\ \beta_{min} = 48{,}8^\circ$$
