---
title: Física · PAU 2022 · Junio · Comunidad Valenciana — examen resuelto
seoTitle: PAU Física Comunidad Valenciana 2022 · Junio resuelta paso a paso
date: 2022-06-01
updated: 2026-11-05
description: Examen de Física de Comunidad Valenciana 2022 · Junio resuelto paso a paso para 2.º de Bachillerato.
tag: Física PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

Deduzca la expresión de la velocidad de un satélite en órbita circular de radio $r$ alrededor de un planeta y la de la velocidad mínima necesaria para que se aleje indefinidamente desde esa órbita. Si al satélite se le comunica instantáneamente una velocidad igual a $1{,}5$ veces la orbital, ¿seguirá en alguna órbita o se alejará indefinidamente? Justifíquelo.

### Solución explicada

**Velocidad orbital.** La gravedad aporta la fuerza centrípeta:
$$\dfrac{G M m}{r^{2}}=\dfrac{m v_{orb}^{2}}{r}\ \Rightarrow\ v_{orb}=\sqrt{\dfrac{G M}{r}}$$

**Velocidad de escape.** Energía mecánica nula ($\tfrac12 m v_{esc}^{2}-\dfrac{GMm}{r}=0$):
$$v_{esc}=\sqrt{\dfrac{2G M}{r}}=\sqrt{2}\;v_{orb}\approx 1{,}414\,v_{orb}$$

**Comparación.** Como $1{,}5\,v_{orb}>1{,}414\,v_{orb}=v_{esc}$, la velocidad comunicada supera la de escape. La energía mecánica pasa a ser positiva y el satélite describe una trayectoria abierta (hiperbólica): se alejará indefinidamente del planeta.

## Ejercicio 2

### Enunciado

El potencial eléctrico en el punto $A$ de la figura es nulo y $q_2=1\ \text{nC}$. Determine el valor de la carga $q_1$ y el potencial eléctrico en el punto $B$.

*(Nota: las posiciones de $q_1$, $q_2$, $A$ y $B$ las fija la figura del enunciado; aquí se desarrolla el método con las distancias $r_{iA}$, $r_{iB}$.)*

### Solución explicada

**Carga $q_1$.** El potencial es escalar; en $A$:
$$V_A=k\dfrac{q_1}{r_{1A}}+k\dfrac{q_2}{r_{2A}}=0\ \Rightarrow\ q_1=-\,q_2\,\dfrac{r_{1A}}{r_{2A}}$$
Con las distancias $r_{1A}$ y $r_{2A}$ de la figura se obtiene el valor de $q_1$ (de signo opuesto a $q_2$). Por ejemplo, si $r_{1A}=2\,r_{2A}$, entonces $q_1=-2\ \text{nC}$.

**Potencial en $B$.** Una vez conocida $q_1$:
$$V_B=k\dfrac{q_1}{r_{1B}}+k\dfrac{q_2}{r_{2B}}$$
sustituyendo las distancias $r_{1B}$ y $r_{2B}$ de la figura. El resultado es, en general, distinto de cero.

## Ejercicio 3

### Enunciado

Una partícula cargada entra con velocidad constante $\vec{v}$ en una región con un campo magnético uniforme no nulo $\vec{B}$. Escriba la fuerza que actúa sobre la partícula y razone en qué condiciones es nula y en cuáles es máxima.

### Solución explicada

La fuerza magnética sobre una carga en movimiento es la fuerza de Lorentz:
$$\vec{F}=q\,\vec{v}\times\vec{B}$$
Su módulo es $F=|q|\,v\,B\,\mathrm{sen}\,\theta$, donde $\theta$ es el ángulo entre $\vec{v}$ y $\vec{B}$.

**Fuerza nula** ($\mathrm{sen}\,\theta=0$): cuando $\vec{v}$ es paralela o antiparalela a $\vec{B}$ ($\theta=0^\circ$ o $180^\circ$); también si la partícula estuviera en reposo ($v=0$). En ese caso la trayectoria es rectilínea y uniforme.

**Fuerza máxima** ($\mathrm{sen}\,\theta=1$): cuando $\vec{v}$ es perpendicular a $\vec{B}$ ($\theta=90^\circ$), con $F_{\max}=|q|\,v\,B$. Entonces la partícula describe una circunferencia (movimiento circular uniforme).

## Ejercicio 4

### Enunciado

Por un hilo rectilíneo indefinido circula una corriente uniforme de intensidad $I$. Escriba la expresión del módulo del campo magnético $\vec{B}$ y dibuje razonadamente dicho vector en un punto $P$ situado a distancia $d$ del hilo. Si el módulo del campo en $P$ es $100\ \mu\text{T}$, deduzca cuánto vale en un punto a distancia $d/2$ (en teslas).


### Esquema para el apartado gráfico

![Esquema de líneas de campo eléctrico y de campo magnético alrededor de un conductor](/assets/latex/pau-fisica-fields.svg)
### Solución explicada

El campo de un hilo rectilíneo indefinido es:
$$B=\dfrac{\mu_0 I}{2\pi d}$$
Su dirección es tangente a las circunferencias centradas en el hilo y contenidas en el plano perpendicular a él; el sentido lo da la regla de la mano derecha (pulgar en el sentido de $I$, dedos en el de $\vec{B}$).

Como $B\propto 1/d$, al reducir la distancia a la mitad el campo se duplica:
$$B(d/2)=\dfrac{\mu_0 I}{2\pi (d/2)}=2\,B(d)=2\cdot100\ \mu\text{T}=200\ \mu\text{T}=2\cdot10^{-4}\ \text{T}$$

## Ejercicio 5

### Enunciado

Una fuente sonora puntual de potencia $1{,}26\cdot10^{-4}\ \text{W}$ emite uniformemente en todas las direcciones. Calcule la intensidad a $10\ \text{m}$ de la fuente y el nivel de intensidad sonora (en dB) a esa distancia.

### Solución explicada

**Intensidad.** Para una fuente puntual que emite de forma isótropa, la potencia se reparte sobre una esfera:
$$I=\dfrac{P}{4\pi r^{2}}=\dfrac{1{,}26\cdot10^{-4}}{4\pi\cdot10^{2}}=1{,}0\cdot10^{-7}\ \text{W}\cdot\text{m}^{-2}$$

**Nivel de intensidad sonora.**
$$\beta=10\log\dfrac{I}{I_0}=10\log\dfrac{1{,}0\cdot10^{-7}}{10^{-12}}=10\log(10^{5})=50\ \text{dB}$$

## Ejercicio 6

### Enunciado

En la figura se muestran una lente, la posición de un objeto $O$ y la de la imagen $O'$ que la lente forma. Determine la distancia focal imagen de la lente, su potencia en dioptrías y el tamaño de la imagen si el objeto mide $2\ \text{cm}$.

*(Nota: las posiciones de $O$ y $O'$ respecto a la lente las da la figura; aquí se desarrolla el método con $s$ y $s'$.)*

### Solución explicada

A partir de la figura se leen la distancia objeto $s$ (negativa, a la izquierda) y la distancia imagen $s'$. Con la ecuación de la lente delgada:
$$\dfrac{1}{s'}-\dfrac{1}{s}=\dfrac{1}{f'}\ \Rightarrow\ f'=\left(\dfrac{1}{s'}-\dfrac{1}{s}\right)^{-1}$$
La potencia es $P=\dfrac{1}{f'}$ (en dioptrías, con $f'$ en metros).

El tamaño de la imagen se obtiene del aumento lateral:
$$A=\dfrac{y'}{y}=\dfrac{s'}{s}\ \Rightarrow\ y'=A\cdot y=\dfrac{s'}{s}\cdot 2\ \text{cm}$$
El signo de $A$ indica si la imagen es derecha ($A>0$) o invertida ($A<0$).

## Ejercicio 7

### Enunciado

Al iluminar un cátodo con radiación monocromática de frecuencia $f=6{,}1\cdot10^{14}\ \text{Hz}$ se produce efecto fotoeléctrico, con un potencial de frenado $\Delta V=0{,}23\ \text{V}$. Calcule la frecuencia umbral $f_0$ y determine el metal del cátodo.

### Solución explicada

El balance fotoeléctrico es $h f = W_e + E_{c,\max}$, con $E_{c,\max}=q\,\Delta V$. El trabajo de extracción:
$$W_e=h f-q\,\Delta V=6{,}6\cdot10^{-34}\cdot6{,}1\cdot10^{14}-1{,}6\cdot10^{-19}\cdot0{,}23$$
$$W_e=4{,}026\cdot10^{-19}-3{,}68\cdot10^{-20}=3{,}66\cdot10^{-19}\ \text{J}=2{,}3\ \text{eV}$$
El trabajo de extracción es $2{,}3\ \text{eV}$, por lo que el metal es el **potasio**.

Frecuencia umbral:
$$f_0=\dfrac{W_e}{h}=\dfrac{3{,}66\cdot10^{-19}}{6{,}6\cdot10^{-34}}=5{,}5\cdot10^{14}\ \text{Hz}$$

## Ejercicio 8

### Enunciado

Un núcleo de $^{60}\text{Co}$ se desintegra según $^{60}_{27}\text{Co}\to{}^{60}_{28}\text{Ni}^{*}+{}^{a}_{b}X$. Razone qué partícula es $X$. El núcleo de níquel excitado $^{60}_{28}\text{Ni}^{*}$ emite después dos fotones de $1{,}17$ y $1{,}33\ \text{MeV}$. Si cada segundo se emiten $10^{10}$ fotones de cada tipo, calcule la energía por unidad de tiempo (en watios) de la emisión.

### Solución explicada

**Identificación de $X$.** Conservación del número másico y del número atómico:
$$A:\ 60=60+a\ \Rightarrow\ a=0;\qquad Z:\ 27=28+b\ \Rightarrow\ b=-1$$
La partícula $X$ tiene $A=0$ y $Z=-1$: es un **electrón** ($^{0}_{-1}e$), es decir una partícula $\beta^{-}$ (desintegración beta menos, acompañada de un antineutrino).

**Potencia de la emisión gamma.** Energía de cada fotón en julios: $1\ \text{MeV}=1{,}6\cdot10^{-13}\ \text{J}$. Por segundo:
$$\dfrac{E}{t}=10^{10}\cdot(1{,}17+1{,}33)\cdot10^{6}\cdot1{,}6\cdot10^{-19}\ \text{J}$$
$$=10^{10}\cdot2{,}5\cdot10^{6}\cdot1{,}6\cdot10^{-19}=4{,}0\cdot10^{-3}\ \text{W}$$

## Ejercicio 9

### Enunciado

Un planeta de radio $R_P=5000\ \text{km}$ emite fragmentos en erupciones volcánicas que pueden llegar a orbitar circularmente a una altura $h=400\ \text{km}$, donde el campo gravitatorio vale $g=7\ \text{m/s}^{2}$.

**(a)** Deduzca las expresiones de la velocidad orbital y de la energía mecánica de un fragmento de masa $m=2\ \text{kg}$ en esa órbita, y calcule sus valores.
**(b)** Calcule el campo gravitatorio en la superficie del planeta y la velocidad con la que el fragmento fue emitido desde la superficie.

### Solución explicada

**(a)** En la órbita, el campo gravitatorio aporta la aceleración centrípeta, $g=\dfrac{v^{2}}{r}$:
$$v_{orb}=\sqrt{g\,r}=\sqrt{7\cdot5{,}4\cdot10^{6}}=6{,}15\cdot10^{3}\ \text{m/s}$$
La energía mecánica en órbita circular es $E=-\dfrac{1}{2}m v_{orb}^{2}$ (igual a $-\tfrac12\,m g r$):
$$E=-\tfrac12\cdot2\cdot(6{,}15\cdot10^{3})^{2}=-3{,}78\cdot10^{7}\ \text{J}$$

**(b)** El campo en la superficie, usando $g\propto 1/r^{2}$ (mismo $GM$):
$$g_s=g\left(\dfrac{r}{R_P}\right)^{2}=7\left(\dfrac{5400}{5000}\right)^{2}=8{,}16\ \text{m/s}^{2}$$
Velocidad de emisión, por conservación de la energía (con $GM=g\,r^{2}=g_s R_P^{2}$) entre superficie y órbita:
$$\tfrac12 m v_e^{2}-\dfrac{GM m}{R_P}=\tfrac12 m v_{orb}^{2}-\dfrac{GM m}{r}$$
$$v_e=\sqrt{v_{orb}^{2}+2GM\left(\dfrac{1}{R_P}-\dfrac{1}{r}\right)}\approx 6{,}62\cdot10^{3}\ \text{m/s}$$

## Ejercicio 10

### Enunciado

Una carga fija $q_1=10^{-9}\ \text{C}$ está a $1\ \text{m}$ de otra carga fija $q_2=-2q_1$.

**(a)** Determine el punto de la recta que une las cargas en el que el campo eléctrico es nulo.
**(b)** Un protón con velocidad inicial nula se libera entre $q_1$ y $q_2$, a $90\ \text{cm}$ de $q_2$. Determine la variación de energía potencial del protón entre ese punto y otro situado a $10\ \text{cm}$ de $q_2$, y la velocidad del protón al llegar a ese último punto.

### Solución explicada

**(a)** El campo sólo puede anularse fuera del segmento, del lado de la carga de menor módulo ($q_1$). Sea $x$ la distancia a $q_1$ hacia la izquierda; igualando módulos:
$$\dfrac{k|q_1|}{x^{2}}=\dfrac{k|q_2|}{(x+1)^{2}}\ \Rightarrow\ \dfrac{x+1}{x}=\sqrt{\dfrac{|q_2|}{|q_1|}}=\sqrt{2}$$
$$x=\dfrac{1}{\sqrt2-1}=2{,}41\ \text{m}\ \text{a la izquierda de }q_1$$

**(b)** El protón va de $x_i=0{,}10\ \text{m}$ (a $90\ \text{cm}$ de $q_2$) a $x_f=0{,}90\ \text{m}$ (a $10\ \text{cm}$ de $q_2$). Potenciales (con $q_1$ en $0$ y $q_2$ en $1\ \text{m}$):
$$V_i=k\dfrac{q_1}{0{,}10}+k\dfrac{q_2}{0{,}90}=+70\ \text{V}\qquad V_f=k\dfrac{q_1}{0{,}90}+k\dfrac{q_2}{0{,}10}=-170\ \text{V}$$
$$\Delta E_p=q(V_f-V_i)=1{,}6\cdot10^{-19}\,(-170-70)=-3{,}84\cdot10^{-17}\ \text{J}$$
La energía cinética ganada es $|\Delta E_p|$:
$$v=\sqrt{\dfrac{2\,|\Delta E_p|}{m_p}}=\sqrt{\dfrac{2\cdot3{,}84\cdot10^{-17}}{1{,}67\cdot10^{-27}}}=2{,}14\cdot10^{5}\ \text{m/s}$$

## Ejercicio 11

### Enunciado

Una onda viene dada por $y(x,t)=2\,\mathrm{sen}(\pi t-8\pi x)$, con $x$ e $y$ en metros y $t$ en segundos.

**(a)** Calcule la amplitud, el periodo, la frecuencia y la longitud de onda.
**(b)** Calcule la velocidad de propagación y la velocidad de vibración de un punto situado a $1\ \text{m}$ del foco emisor en $t=8\ \text{s}$.

### Solución explicada

**(a)** Comparando con $y=A\,\mathrm{sen}(\omega t-k x)$:
$$A=2\ \text{m}\qquad \omega=\pi\ \text{rad/s}\ \Rightarrow\ T=\dfrac{2\pi}{\omega}=2\ \text{s}\qquad f=\dfrac{1}{T}=0{,}5\ \text{Hz}$$
$$k=8\pi\ \text{rad/m}\ \Rightarrow\ \lambda=\dfrac{2\pi}{k}=\dfrac{2\pi}{8\pi}=0{,}25\ \text{m}$$

**(b)** Velocidad de propagación:
$$v=\dfrac{\omega}{k}=\dfrac{\pi}{8\pi}=0{,}125\ \text{m/s}$$
Velocidad de vibración (transversal), $v_y=\dfrac{\partial y}{\partial t}=2\pi\cos(\pi t-8\pi x)$. En $x=1\ \text{m}$, $t=8\ \text{s}$ el argumento es $8\pi-8\pi=0$:
$$v_y=2\pi\cos(0)=2\pi\approx 6{,}28\ \text{m/s}$$

## Ejercicio 12

### Enunciado

El mesón $J/\psi$ tiene una vida media de $7{,}2\cdot10^{-21}\ \text{s}$ en su sistema de referencia propio y de $1{,}1\cdot10^{-20}\ \text{s}$ medida en el laboratorio, respecto al cual se mueve a velocidad relativista.

**(a)** Calcule la velocidad del mesón respecto al laboratorio.
**(b)** Calcule la energía cinética y la energía total, en MeV, en ambos sistemas de referencia.

### Solución explicada

**(a)** Dilatación temporal: $\tau=\gamma\,\tau_0$, luego
$$\gamma=\dfrac{\tau}{\tau_0}=\dfrac{1{,}1\cdot10^{-20}}{7{,}2\cdot10^{-21}}=1{,}528$$
$$v=c\sqrt{1-\dfrac{1}{\gamma^{2}}}=3\cdot10^{8}\sqrt{1-\dfrac{1}{1{,}528^{2}}}=2{,}27\cdot10^{8}\ \text{m/s}\approx 0{,}756\,c$$

**(b)** Energía en reposo:
$$E_0=m_0c^{2}=5{,}52\cdot10^{-27}\cdot(3\cdot10^{8})^{2}=4{,}97\cdot10^{-10}\ \text{J}=3105\ \text{MeV}$$
**Sistema del laboratorio** (en movimiento, $\gamma=1{,}528$):
$$E=\gamma E_0=1{,}528\cdot3105=4744\ \text{MeV}\qquad E_c=(\gamma-1)E_0=1639\ \text{MeV}$$
**Sistema propio** (en reposo, $\gamma=1$): $E_c=0$ y $E=E_0=3105\ \text{MeV}$.
