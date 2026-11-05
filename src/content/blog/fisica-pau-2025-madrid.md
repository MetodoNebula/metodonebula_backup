---
title: Física · PAU 2025 · Madrid — examen resuelto
seoTitle: PAU Física Madrid 2025 resuelta paso a paso
date: 2025-06-01
updated: 2026-11-05
description: Examen de Física de Madrid 2025 resuelto paso a paso para 2.º de Bachillerato.
tag: Física PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

Eris es un planeta enano del sistema solar. Tiene un diámetro de $2330\ \text{km}$ y su densidad es de $2{,}5\ \text{g/cm}^3$. Su órbita es muy excéntrica: su afelio está a $1{,}45\cdot10^{13}\ \text{m}$ del Sol y su perihelio a $5{,}24\cdot10^{12}\ \text{m}$.

**(a)** Calcule la masa del planeta y el valor de la aceleración de la gravedad en su superficie.

**(b)** Sabiendo que la energía mecánica de un objeto de masa $m_1$ que orbita a otro de masa $m_2$ en órbita elíptica de semieje mayor $a$ es $E_{\text{mec}} = -\dfrac{G m_1 m_2}{2a}$, halle la energía mecánica de Eris y su velocidad orbital en el perihelio.

*Datos:* $G = 6{,}67\cdot10^{-11}\ \text{N m}^2\text{kg}^{-2}$; $M_{\text{Sol}} = 1{,}99\cdot10^{30}\ \text{kg}$.

### Solución explicada

**(a)** Radio $R = D/2 = 1{,}165\cdot10^{6}\ \text{m}$. Volumen y masa:
$$V = \tfrac{4}{3}\pi R^3 = 6{,}62\cdot10^{18}\ \text{m}^3,\qquad M = \rho\,V = 2500\cdot 6{,}62\cdot10^{18} = 1{,}66\cdot10^{22}\ \text{kg}.$$
Gravedad superficial:
$$g = \dfrac{GM}{R^2} = \dfrac{6{,}67\cdot10^{-11}\cdot 1{,}66\cdot10^{22}}{(1{,}165\cdot10^{6})^2} \approx 0{,}82\ \text{m/s}^2.$$

**(b)** Semieje mayor:
$$a = \dfrac{r_a + r_p}{2} = \dfrac{1{,}45\cdot10^{13} + 5{,}24\cdot10^{12}}{2} = 9{,}87\cdot10^{12}\ \text{m}.$$
Energía mecánica:
$$E_{\text{mec}} = -\dfrac{GM_{\text{Sol}}M}{2a} = -\dfrac{6{,}67\cdot10^{-11}\cdot 1{,}99\cdot10^{30}\cdot 1{,}66\cdot10^{22}}{2\cdot 9{,}87\cdot10^{12}} \approx -1{,}11\cdot10^{29}\ \text{J}.$$
Velocidad en el perihelio (conservación de la energía, $E_{\text{mec}} = \tfrac12 M v_p^2 - \dfrac{GM_{\text{Sol}}M}{r_p}$):
$$v_p = \sqrt{2GM_{\text{Sol}}\left(\dfrac{1}{r_p} - \dfrac{1}{2a}\right)} \approx 6{,}1\cdot10^{3}\ \text{m/s}.$$

## Ejercicio 2

### Enunciado

Un electrón de carga $-e$ y un positrón de carga $+e$ se encuentran inicialmente fijos en el plano $xy$ en las posiciones $(0, 6)\ \text{nm}$ y $(0, -6)\ \text{nm}$, respectivamente.

**(a)** Obtenga el campo eléctrico en el punto $(8, 0)\ \text{nm}$ debido a ambas partículas.

**(b)** Si al positrón se le imprime una velocidad de $-1{,}5\cdot10^{5}\ \text{m/s}\,\vec{j}$, permaneciendo fijo el electrón, determine la máxima distancia de alejamiento entre ambas partículas.

*Datos:* $K = 9\cdot10^{9}\ \text{N m}^2\text{C}^{-2}$; $e = 1{,}6\cdot10^{-19}\ \text{C}$; $m_e = 9{,}1\cdot10^{-31}\ \text{kg}$.

### Solución explicada

**(a)** La distancia de cada carga al punto $(8,0)\ \text{nm}$ es
$$d = \sqrt{6^2 + 8^2} = 10\ \text{nm} = 1{,}0\cdot10^{-8}\ \text{m},\qquad \theta = \arctan\!\dfrac{8}{6} = 53{,}13^\circ.$$
Ambas cargas tienen igual módulo y distancia, luego crean campos de igual módulo:
$$|\vec{E}_\pm| = K\dfrac{e}{d^2} = 9\cdot10^{9}\cdot\dfrac{1{,}6\cdot10^{-19}}{(10^{-8})^2} = 1{,}44\cdot10^{7}\ \text{N/C}.$$
Por la geometría (simetría respecto al eje $x$), las componentes $x$ se cancelan y las $y$ se suman:
$$\vec{E}_{\text{total}} = 2\,|\vec{E}|\cos\theta\,\vec{j} = 1{,}73\cdot10^{7}\ \text{N/C}\,\vec{j}.$$

**(b)** Conservación de la energía entre el estado inicial $A$ (separación $2y_0 = 12\ \text{nm}$, positrón con velocidad $v_0$) y el de máximo alejamiento $B$ (velocidad nula). Como electrón y positrón se atraen, el positrón se aleja hasta frenarse.
$$E_{c,A} = \tfrac12 m_e v_0^2 = 1{,}02\cdot10^{-20}\ \text{J},\qquad E_{p,A} = -K\dfrac{e^2}{2y_0} = -1{,}92\cdot10^{-20}\ \text{J}.$$
En $B$: $E_{c,B}=0$ y $E_{p,B} = -K\dfrac{e^2}{d'}$. Igualando energías mecánicas:
$$d' = -\dfrac{K e^2}{E_{c,A} + E_{p,A}} = -\dfrac{9\cdot10^{9}\cdot(1{,}6\cdot10^{-19})^2}{1{,}02\cdot10^{-20} - 1{,}92\cdot10^{-20}} \approx 2{,}57\cdot10^{-8}\ \text{m}.$$

## Ejercicio 3

### Enunciado

Una espira conductora circular de radio $20\ \text{cm}$ se encuentra en un campo magnético homogéneo perpendicular a su plano. Si la espira tiene una resistencia de $40\ \Omega$, calcule la máxima intensidad de corriente que circulará por ella en los casos:

**(a)** El módulo del campo es constante, $B = 150\ \text{mT}$, y la espira gira en torno a uno de sus diámetros con velocidad angular $50\ \text{rad/s}$.

**(b)** La espira está fija y el campo varía como $B = B_0\,\mathrm{sen}(\omega t)$, con $B_0 = 200\ \text{mT}$ y $\omega = 75\ \text{rad/s}$.

### Solución explicada

**(a)** La espira gira: el flujo es $\Phi = B\,\pi r^2\cos(\omega t + \varphi)$. La fem inducida:
$$\varepsilon = -\dfrac{d\Phi}{dt} = B\,\pi r^2\,\omega\,\mathrm{sen}(\omega t + \varphi)\ \Rightarrow\ \varepsilon_{\max} = B\,\pi r^2\,\omega.$$
$$\varepsilon_{\max} = 0{,}15\cdot\pi\cdot(0{,}20)^2\cdot 50 = 0{,}942\ \text{V}.$$
Por la ley de Ohm:
$$I_{\max} = \dfrac{\varepsilon_{\max}}{R} = \dfrac{0{,}942}{40} = 0{,}0236\ \text{A} = 23{,}6\ \text{mA}.$$

**(b)** La espira está fija y varía $B$: $\Phi = B_0\,\mathrm{sen}(\omega t)\,\pi r^2$. La fem:
$$\varepsilon = -\dfrac{d\Phi}{dt} = -B_0\,\omega\cos(\omega t)\,\pi r^2\ \Rightarrow\ \varepsilon_{\max} = B_0\,\omega\,\pi r^2.$$
$$\varepsilon_{\max} = 0{,}20\cdot 75\cdot\pi\cdot(0{,}20)^2 = 1{,}88\ \text{V}.$$
$$I_{\max} = \dfrac{1{,}88}{40} = 0{,}0471\ \text{A} = 47{,}1\ \text{mA}.$$

## Ejercicio 4

### Enunciado

Una ballena sumergida emite un sonido grave de $60\ \text{Hz}$ y $25\ \text{m}$ de longitud de onda. Un barco $A$, situado sobre su vertical, detecta el sonido $80\ \text{ms}$ después de ser emitido, y poco después lo detecta otro barco $B$ situado a $300\ \text{m}$ del barco $A$.

**(a)** Halle la profundidad a la que se encuentra la ballena.

**(b)** Si el barco $A$ recibe el sonido con una intensidad de $3\ \mu\text{W/m}^2$, calcule la potencia del sonido emitido y el nivel de intensidad sonora que detectará el barco $B$.

*Dato:* intensidad umbral, $I_0 = 1\cdot10^{-12}\ \text{W/m}^2$.

### Solución explicada

**(a)** Velocidad del sonido en el agua:
$$v = \lambda f = 25\cdot 60 = 1500\ \text{m/s}.$$
Profundidad (distancia vertical ballena–barco $A$):
$$h = v\,t = 1500\cdot 0{,}08 = 120\ \text{m}.$$

**(b)** La potencia emitida se obtiene de la intensidad en $A$ (a distancia $h$), con frente esférico:
$$P = I_A\cdot 4\pi h^2 = 3\cdot10^{-6}\cdot 4\pi\cdot(120)^2 = 0{,}543\ \text{W}.$$
Distancia ballena–barco $B$:
$$d = \sqrt{D_{AB}^2 + h^2} = \sqrt{300^2 + 120^2} = 323\ \text{m}.$$
Intensidad en $B$:
$$I_B = \dfrac{P}{4\pi d^2} = I_A\left(\dfrac{h}{d}\right)^2 = 0{,}414\ \mu\text{W/m}^2 = 4{,}14\cdot10^{-7}\ \text{W/m}^2.$$
Nivel de intensidad sonora:
$$\beta = 10\log_{10}\dfrac{I_B}{I_0} = 10\log_{10}\dfrac{4{,}14\cdot10^{-7}}{10^{-12}} = 56{,}2\ \text{dB}.$$

## Ejercicio 5

### Enunciado

Considere la imagen formada por una lente delgada de distancia focal $f'$ de un objeto situado a una distancia $s$ a la izquierda de la lente.

**(a)** Demuestre que el aumento lateral $M$ tiene la expresión $M = \dfrac{f'}{f' + s}$.

**(b)** Razone si una lente divergente puede formar una imagen invertida.

**(c)** Dibuje el trazado de rayos de la imagen formada por una lente divergente si el objeto se sitúa a una distancia doble de su distancia focal.

### Solución explicada

**(a)** Partimos de la ecuación gaussiana $\dfrac{1}{s'} - \dfrac{1}{s} = \dfrac{1}{f'}$. Despejando $s'$:
$$s' = \dfrac{1}{\tfrac{1}{f'} + \tfrac{1}{s}} = \dfrac{f'\,s}{f' + s}.$$
El aumento lateral es $M = \dfrac{s'}{s}$, luego:
$$M = \dfrac{1}{s}\cdot\dfrac{f'\,s}{f' + s} = \dfrac{f'}{f' + s}.$$

**(b)** Para un objeto real a la izquierda, $s < 0$. En una lente **divergente**, $f' < 0$. Entonces el numerador $f'$ es negativo y el denominador $f' + s$ también es negativo (suma de dos negativos), de modo que su cociente $M$ es **positivo**. Un aumento positivo significa imagen **derecha**: por tanto una lente divergente **nunca** forma una imagen invertida (con objeto real).

**(c)** Con el objeto a $2f$ de una lente divergente: un rayo paralelo al eje emerge como si procediera del foco imagen $F'$ (situado del lado del objeto); un rayo que pasa por el centro óptico no se desvía. Las prolongaciones hacia atrás de los rayos emergentes se cortan entre la lente y el foco, dando una imagen **virtual, derecha y menor** que el objeto.

## Ejercicio 6

### Enunciado

Las moléculas de ozono absorben luz ultravioleta (UV) de alta energía.

**(a)** Halle la diferencia de energía, en electrón-voltios, entre los niveles electrónicos de la molécula de ozono que inducen la absorción de radiación de $260\ \text{nm}$.

**(b)** Si el flujo de fotones de $260\ \text{nm}$ que llega a una persona es de $2{,}6\cdot10^{14}\ \text{fotones/s}$, calcule la potencia que le incide debida a esos fotones UV y la energía recibida en $30\ \text{minutos}$.

*Datos:* $e = 1{,}6\cdot10^{-19}\ \text{C}$; $h = 6{,}63\cdot10^{-34}\ \text{J s}$; $c = 3\cdot10^{8}\ \text{m/s}$.


### Esquema para el apartado gráfico

![Trazado de rayos para una lente divergente y un espejo cóncavo](/assets/latex/pau-fisica-optics.svg)
### Solución explicada

**(a)** La energía de un fotón de $260\ \text{nm}$ es igual a la diferencia de energía entre niveles:
$$E = \dfrac{hc}{\lambda} = \dfrac{6{,}63\cdot10^{-34}\cdot 3\cdot10^{8}}{260\cdot10^{-9}} = 7{,}65\cdot10^{-19}\ \text{J}.$$
En electrón-voltios:
$$E = \dfrac{7{,}65\cdot10^{-19}}{1{,}6\cdot10^{-19}} = 4{,}78\ \text{eV}.$$

**(b)** La potencia es el flujo de fotones por la energía de cada fotón:
$$P = \Phi\,E = 2{,}6\cdot10^{14}\cdot 7{,}65\cdot10^{-19} = 1{,}99\cdot10^{-4}\ \text{W}.$$
La energía recibida en $30\ \text{min} = 1800\ \text{s}$:
$$E_{\text{recibida}} = P\,t = 1{,}99\cdot10^{-4}\cdot 1800 = 0{,}358\ \text{J}.$$

## Ejercicio 7

### Enunciado

El mineral de cuarzo ($\text{SiO}_2$) en superficie contiene impurezas de $^{26}\text{Al}$, con $0{,}1\%$ de átomos de $^{26}\text{Al}$ respecto a los átomos de silicio. Al enterrarse el mineral, el $^{26}\text{Al}$ se desintegra con un periodo de semidesintegración de $0{,}72$ millones de años.

**(a)** Calcule la actividad de una muestra de cuarzo en superficie debida al $^{26}\text{Al}$ si contiene $8{,}3\cdot10^{22}$ átomos de silicio.

**(b)** Se recoge una muestra de unos sedimentos con una relación de $0{,}08\%$ de $^{26}\text{Al}$ respecto al silicio. Obtenga la edad de formación de dichos sedimentos.

### Solución explicada

**(a)** Periodo en segundos: $T_{1/2} = 0{,}72\cdot10^{6}\ \text{años} = 2{,}27\cdot10^{13}\ \text{s}$. Vida media y constante:
$$\tau = \dfrac{T_{1/2}}{\ln 2} = 3{,}27\cdot10^{13}\ \text{s},\qquad \lambda = \dfrac{1}{\tau} = 3{,}05\cdot10^{-14}\ \text{s}^{-1}.$$
Número de núcleos de $^{26}\text{Al}$ en superficie:
$$N_{\text{Al}} = N_{\text{Si}}\cdot 10^{-3} = 8{,}3\cdot10^{22}\cdot 10^{-3} = 8{,}3\cdot10^{19}\ \text{núcleos}.$$
Actividad:
$$A = \lambda N_{\text{Al}} = 3{,}05\cdot10^{-14}\cdot 8{,}3\cdot10^{19} = 2{,}53\cdot10^{6}\ \text{Bq}.$$

**(b)** La relación inicial es $0{,}1\%$ y la actual $0{,}08\%$ (el silicio no se desintegra, sirve de referencia):
$$\dfrac{N_0}{N(t)} = \dfrac{0{,}1\%}{0{,}08\%} = 1{,}25.$$
De $N(t) = N_0\,e^{-t/\tau}$:
$$t = \tau\,\ln\!\dfrac{N_0}{N(t)} = 3{,}27\cdot10^{13}\cdot\ln(1{,}25) = 7{,}31\cdot10^{12}\ \text{s} \approx 0{,}232\ \text{millones de años}.$$
