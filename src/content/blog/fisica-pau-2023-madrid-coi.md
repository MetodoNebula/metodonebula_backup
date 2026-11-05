---
title: Física · PAU 2023 · Serie alternativa · Madrid — examen resuelto
seoTitle: PAU Física Madrid 2023 · Serie alternativa resuelta paso a paso
date: 2023-06-01
updated: 2026-11-05
description: Examen de Física de Madrid 2023 · Serie alternativa resuelto paso a paso para 2.º de Bachillerato.
tag: Física PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

El astronauta Rocannon se ha situado en una órbita circular de $4{,}36\ \text{h}$ de período alrededor de Fomalhaut II, un planeta de $4\cdot10^{23}\ \text{kg}$ de masa y $5000\ \text{km}$ de radio.

**(a)** Obtenga la altura de la órbita sobre la superficie de Fomalhaut II.

**(b)** Rocannon dispone de $1{,}5\cdot10^{10}\ \text{J}$ para escapar de Fomalhaut II desde la órbita en que se halla. Determine el valor máximo que puede tener la masa conjunta de Rocannon y su nave para lograr escapar con esa energía.

### Solución explicada

**(a)** En órbita circular, de $v = \dfrac{2\pi r}{T}$ y de la 2.ª ley de Newton $\dfrac{GM}{r^2} = \dfrac{v^2}{r}$ se obtiene $v = \sqrt{\dfrac{GM}{r}}$. Combinando ambas (3.ª ley de Kepler):
$$r = \sqrt[3]{\dfrac{GM\,T^2}{4\pi^2}} = \sqrt[3]{\dfrac{6{,}67\cdot10^{-11}\cdot 4\cdot10^{23}\cdot(4{,}36\cdot3600)^2}{4\pi^2}} = 5{,}50\cdot10^{6}\ \text{m}.$$
La altura sobre la superficie:
$$H = r - R = 5{,}50\cdot10^{6} - 5\cdot10^{6} \approx 501\ \text{km}.$$

**(b)** La energía mecánica en la órbita circular es
$$E_{\text{órbita}} = -\dfrac{GMm}{r} + \tfrac{1}{2}mv^2 = -\dfrac{1}{2}\dfrac{GMm}{r}.$$
Para escapar, la energía final debe ser al menos cero: $E_{\text{órbita}} + \Delta E = 0$, de donde
$$\dfrac{1}{2}\dfrac{GMm}{r} = \Delta E\ \Rightarrow\ m = \dfrac{2 r\,\Delta E}{GM} = \dfrac{2\cdot 5{,}50\cdot10^{6}\cdot 1{,}5\cdot10^{10}}{6{,}67\cdot10^{-11}\cdot 4\cdot10^{23}} \approx 6{,}19\cdot10^{3}\ \text{kg}.$$

## Ejercicio 2

### Enunciado

Una onda armónica transversal se propaga en una cuerda tensa en el sentido positivo del eje $x$, con una velocidad de $20\ \text{m/s}$. Sabiendo que el punto situado en $x = 0{,}5\ \text{m}$ oscila según la ley $y(t) = 2{,}5\cos(10\pi t)\ \text{cm}$ (con $t$ en s), determine:

**(a)** La longitud de onda y el desfase inicial.

**(b)** La velocidad y aceleración máximas de oscilación de un punto cualquiera de la cuerda.

### Solución explicada

**(a)** De $\omega = 10\pi\ \text{rad/s}$ y $v = 20\ \text{m/s}$:
$$\lambda = \dfrac{2\pi v}{\omega} = \dfrac{2\pi\cdot 20}{10\pi} = 4\ \text{m},\qquad k = \dfrac{2\pi}{\lambda} = \dfrac{\pi}{2}\ \text{rad/m}.$$
La onda general es $y(x,t) = A\cos(\omega t - kx + \varphi)$. En $x = 0{,}5\ \text{m}$ debe reducirse a $2{,}5\cos(10\pi t)$, luego el argumento cumple $-k\cdot 0{,}5 + \varphi = 0$:
$$\varphi = k\cdot 0{,}5 = \dfrac{\pi}{2}\cdot 0{,}5 = \dfrac{\pi}{4}\ \text{rad} = 45^\circ.$$

**(b)** Derivando la elongación respecto al tiempo:
$$v_{\max} = A\,\omega = 0{,}025\cdot 10\pi = 0{,}79\ \text{m/s}.$$
$$a_{\max} = A\,\omega^2 = 0{,}025\cdot(10\pi)^2 = 24{,}7\ \text{m/s}^2.$$

## Ejercicio 3

### Enunciado

Una espira cuadrada gira con un período de $0{,}5\ \text{s}$ en presencia de un campo magnético uniforme de $400\ \text{mT}$ perpendicular al eje de giro. Sabiendo que en el instante inicial su flujo magnético es máximo e igual a $1{,}6\cdot10^{-2}\ \text{T m}^2$, determine:

**(a)** La longitud del lado de la espira y la expresión del flujo magnético en función del tiempo.

**(b)** La expresión de la fem inducida en función del tiempo y su valor en $t = 1\ \text{s}$.

### Solución explicada

**(a)** El flujo máximo es $\Phi_{\max} = B\,a^2$ (espira cuadrada de lado $a$):
$$a = \sqrt{\dfrac{\Phi_{\max}}{B}} = \sqrt{\dfrac{1{,}6\cdot10^{-2}}{0{,}4}} = 0{,}20\ \text{m}.$$
La frecuencia angular:
$$\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{0{,}5} = 4\pi\ \text{rad/s}.$$
Como en $t=0$ el flujo es máximo ($\varphi = 0$):
$$\Phi(t) = \Phi_{\max}\cos(\omega t) = 1{,}6\cdot10^{-2}\cos(4\pi t)\ \text{T m}^2.$$

**(b)** Por la ley de Faraday:
$$\varepsilon(t) = -\dfrac{d\Phi}{dt} = \Phi_{\max}\,\omega\,\mathrm{sen}(\omega t) = 1{,}6\cdot10^{-2}\cdot 4\pi\,\mathrm{sen}(4\pi t) = 0{,}20\,\mathrm{sen}(4\pi t)\ \text{V}.$$
En $t = 1\ \text{s}$: $\mathrm{sen}(4\pi\cdot 1) = \mathrm{sen}(4\pi) = 0$, luego
$$\varepsilon(1\ \text{s}) = 0\ \text{V}.$$

## Ejercicio 4

### Enunciado

A una distancia de $3\ \text{cm}$ a la izquierda de una lente se sitúa un objeto de $2\ \text{cm}$ de altura. La imagen es virtual, derecha y tiene una altura de $3\ \text{cm}$ (situación A). A continuación, se aleja el objeto hasta $18\ \text{cm}$ a la izquierda de la lente, formando una imagen invertida (situación B).

**(a)** Calcule la distancia focal de la lente y dibuje el esquema de rayos en la situación A.

**(b)** Halle el aumento lateral de la imagen en la situación B y dibuje el esquema de rayos.


### Esquema para el apartado gráfico

![Trazado de rayos para una lente divergente y un espejo cóncavo](/assets/latex/pau-fisica-optics.svg)
### Solución explicada

**(a)** El aumento lateral en A: $M_A = \dfrac{y_A'}{y_A} = \dfrac{3}{2} = 1{,}5$. Como $M_A = \dfrac{s_A'}{s_A}$:
$$s_A' = M_A\,s_A = 1{,}5\cdot(-3) = -4{,}5\ \text{cm}\ (\text{imagen virtual}).$$
Con la ecuación de la lente $\dfrac{1}{s_A'} - \dfrac{1}{s_A} = \dfrac{1}{f'}$:
$$f' = \dfrac{s_A\,s_A'}{s_A - s_A'} = \dfrac{(-3)(-4{,}5)}{-3-(-4{,}5)} = \dfrac{13{,}5}{1{,}5} = 9\ \text{cm}.$$
Lente convergente, $f' = +9\ \text{cm}$ (el objeto en A está dentro del foco → imagen virtual, derecha y mayor).

**(b)** Con $s_B = -18\ \text{cm}$:
$$\dfrac{1}{s_B'} = \dfrac{1}{f'} + \dfrac{1}{s_B} = \dfrac{1}{9} + \dfrac{1}{-18} = \dfrac{1}{18}\ \Rightarrow\ s_B' = 18\ \text{cm}.$$
$$M_B = \dfrac{s_B'}{s_B} = \dfrac{18}{-18} = -1.$$
La imagen es real, invertida y del mismo tamaño que el objeto (el objeto está en $2f$).

## Ejercicio 5

### Enunciado

Una célula fotoeléctrica de magnesio, cuya longitud de onda umbral es de $339\ \text{nm}$, se ilumina con un haz de luz de frecuencia $1{,}0\cdot10^{15}\ \text{Hz}$.

**(a)** Calcule la energía cinética máxima de los electrones emitidos expresada en eV.

**(b)** A continuación, la célula se ilumina con un haz de frecuencia desconocida, de manera que los electrones emitidos con la energía cinética máxima tienen una longitud de onda de De Broglie de $0{,}87\ \text{nm}$. Halle la frecuencia de este segundo haz.

### Solución explicada

**(a)** Energía umbral (trabajo de extracción):
$$W = \dfrac{hc}{\lambda_{\text{umbral}}} = \dfrac{6{,}63\cdot10^{-34}\cdot 3\cdot10^{8}}{339\cdot10^{-9}} = 5{,}87\cdot10^{-19}\ \text{J} = 3{,}67\ \text{eV}.$$
Energía del fotón incidente:
$$E_{\text{fot}} = h f = 6{,}63\cdot10^{-34}\cdot 1{,}0\cdot10^{15} = 6{,}63\cdot10^{-19}\ \text{J} = 4{,}14\ \text{eV}.$$
Como $E_{\text{fot}} > W$, hay emisión y:
$$E_{c,\max} = E_{\text{fot}} - W = 4{,}14 - 3{,}67 = 0{,}47\ \text{eV}.$$

**(b)** De la longitud de onda de De Broglie $\lambda_{\text{dB}} = \dfrac{h}{mv}$ obtenemos la velocidad:
$$v = \dfrac{h}{m\,\lambda_{\text{dB}}} = \dfrac{6{,}63\cdot10^{-34}}{9{,}1\cdot10^{-31}\cdot 0{,}87\cdot10^{-9}} = 8{,}37\cdot10^{5}\ \text{m/s}.$$
La energía cinética de estos electrones:
$$E_c = \tfrac{1}{2}mv^2 = \tfrac{1}{2}\cdot 9{,}1\cdot10^{-31}\cdot(8{,}37\cdot10^{5})^2 = 3{,}19\cdot10^{-19}\ \text{J} = 2{,}0\ \text{eV}.$$
La energía del fotón es $E_{\text{fot}}' = E_c + W = 2{,}0 + 3{,}67 = 5{,}67\ \text{eV} = 9{,}07\cdot10^{-19}\ \text{J}$, y su frecuencia:
$$f' = \dfrac{E_{\text{fot}}'}{h} = \dfrac{9{,}07\cdot10^{-19}}{6{,}63\cdot10^{-34}} \approx 1{,}37\cdot10^{15}\ \text{Hz}.$$

## Ejercicio 6

### Enunciado

Una partícula de masa $5\cdot10^{4}\ \text{kg}$ se encuentra fija en el punto $(6, 8)\ \text{cm}$ del plano $xy$.

**(a)** Calcule el campo gravitatorio que dicha partícula genera en el origen de coordenadas.

Desde el origen lanzamos una segunda partícula de masa $25\ \text{mg}$ con una velocidad de $5\ \text{mm/s}$ según la dirección que une ambas partículas, alejándola de la primera.

**(b)** Obtenga la distancia máxima a la que llegará la segunda partícula respecto a la primera.

### Solución explicada

**(a)** La partícula está a $d_0 = \sqrt{0{,}06^2 + 0{,}08^2} = 0{,}10\ \text{m}$ del origen. El campo en el origen apunta hacia la masa (en la dirección $(6,8)$), es decir con unitario $(0{,}6;\,0{,}8)$:
$$g = \dfrac{GM}{d_0^2} = \dfrac{6{,}67\cdot10^{-11}\cdot 5\cdot10^{4}}{0{,}10^2} = 3{,}34\cdot10^{-4}\ \text{m/s}^2.$$
$$\vec{g} = (2{,}00\,\vec{i} + 2{,}67\,\vec{j})\cdot10^{-4}\ \text{m/s}^2.$$

**(b)** Por conservación de la energía mecánica. Energía inicial (a $d_0=0{,}10\ \text{m}$):
$$E_0 = -\dfrac{GMm}{d_0} + \tfrac{1}{2}mv_0^2 = -6{,}67\cdot10^{-11}\dfrac{5\cdot10^{4}\cdot 25\cdot10^{-6}}{0{,}10} + \tfrac{1}{2}\cdot 25\cdot10^{-6}\cdot(5\cdot10^{-3})^2 = -5{,}21\cdot10^{-10}\ \text{J}.$$
En el punto de máximo alejamiento la velocidad es nula, luego $E_0 = -\dfrac{GMm}{d}$:
$$d = -\dfrac{GMm}{E_0} = -\dfrac{6{,}67\cdot10^{-11}\cdot 5\cdot10^{4}\cdot 25\cdot10^{-6}}{-5{,}21\cdot10^{-10}} \approx 0{,}16\ \text{m}.$$

## Ejercicio 7

### Enunciado

Un coro está formado por $12$ cantantes dispuestos en una semicircunferencia de radio $R$. Cada miembro canta con un nivel de intensidad de $90\ \text{dB}$ medido a $1\ \text{m}$. Sabiendo que cuando canta el coro entero el nivel de intensidad en el centro de la semicircunferencia es de $88{,}72\ \text{dB}$, calcule:

**(a)** La potencia sonora emitida por cada cantante.

**(b)** El radio de la semicircunferencia, $R$.

*Dato:* intensidad umbral, $I_0 = 10^{-12}\ \text{W/m}^2$.

### Solución explicada

**(a)** De $\beta = 10\log(I/I_0)$ con $\beta_1 = 90\ \text{dB}$:
$$I_{1\text{m}} = I_0\,10^{90/10} = 10^{-12}\cdot10^{9} = 10^{-3}\ \text{W/m}^2.$$
La potencia de cada cantante (fuente puntual, superficie esférica de radio $1\ \text{m}$):
$$P = I_{1\text{m}}\cdot 4\pi r^2 = 10^{-3}\cdot 4\pi\cdot 1^2 = 1{,}26\cdot10^{-2}\ \text{W}.$$

**(b)** Los $12$ cantantes emiten $P_{12} = 12P = 0{,}151\ \text{W}$. El nivel en el centro da la intensidad allí:
$$I_{\text{centro}} = I_0\,10^{88{,}72/10} = 7{,}44\cdot10^{-4}\ \text{W/m}^2.$$
Como todos están a distancia $R$ del centro:
$$I_{\text{centro}} = \dfrac{P_{12}}{4\pi R^2}\ \Rightarrow\ R = \sqrt{\dfrac{P_{12}}{4\pi I_{\text{centro}}}} = \sqrt{\dfrac{0{,}151}{4\pi\cdot 7{,}44\cdot10^{-4}}} \approx 4\ \text{m}.$$

## Ejercicio 8

### Enunciado

Dos cargas puntuales de $-3\ \mu\text{C}$ y $+2\ \mu\text{C}$ están situadas en los puntos $(-2,0)\ \text{m}$ y $(3,0)\ \text{m}$ del plano $xy$, respectivamente. Calcule:

**(a)** El trabajo que realiza el campo eléctrico para traer una carga de $+4\ \mu\text{C}$ desde el infinito al punto $(0,4)\ \text{m}$.

**(b)** La fuerza total sobre la carga situada en el punto $(0,4)\ \text{m}$ ejercida por las otras dos.

*Dato:* $K = 9\cdot10^{9}\ \text{N m}^2\text{C}^{-2}$.

### Solución explicada

Distancias al punto $(0,4)$: $d_1 = \sqrt{2^2+4^2} = \sqrt{20}\ \text{m}$ y $d_2 = \sqrt{3^2+4^2} = 5\ \text{m}$.

**(a)** Potencial en $(0,4)$:
$$V = K\dfrac{q_1}{d_1} + K\dfrac{q_2}{d_2} = 9\cdot10^{9}\left(\dfrac{-3\cdot10^{-6}}{\sqrt{20}} + \dfrac{2\cdot10^{-6}}{5}\right) = -2{,}44\cdot10^{3}\ \text{V}.$$
Trabajo del campo al traer $q_3$ desde el infinito ($V_\infty=0$):
$$W = q_3\,(V_\infty - V) = -q_3\,V = -4\cdot10^{-6}\cdot(-2{,}44\cdot10^{3}) = 9{,}75\cdot10^{-3}\ \text{J}.$$

**(b)** Fuerzas sobre $q_3$:
- De $q_1$ (atractiva, hacia $(-2,0)$): $F_1 = K\dfrac{|q_1|q_3}{d_1^2} = 5{,}4\cdot10^{-3}\ \text{N}$; componentes $\vec{F}_1 = (-2{,}41\,\vec{i} - 4{,}83\,\vec{j})\cdot10^{-3}\ \text{N}$.
- De $q_2$ (repulsiva, alejándose de $(3,0)$): $F_2 = K\dfrac{q_2 q_3}{d_2^2} = 2{,}88\cdot10^{-3}\ \text{N}$; componentes $\vec{F}_2 = (-1{,}73\,\vec{i} + 2{,}30\,\vec{j})\cdot10^{-3}\ \text{N}$.

Fuerza total:
$$\vec{F}_T = \vec{F}_1 + \vec{F}_2 = (-4{,}14\,\vec{i} - 2{,}53\,\vec{j})\cdot10^{-3}\ \text{N}.$$

## Ejercicio 9

### Enunciado

Un rayo de luz incide horizontalmente desde el aire sobre la cara de un prisma de vidrio de índice de refracción $1{,}33$. El prisma tiene forma de triángulo rectángulo, con ángulos de $30^\circ$ y $60^\circ$ (ver figura). Determine:

**(a)** El ángulo de refracción del rayo del aire al vidrio.

**(b)** El ángulo de refracción del vidrio al aire en la cara posterior del prisma.

*Dato:* $n_{\text{aire}} = 1$.

### Solución explicada

**(a)** En la primera cara, con ángulo de incidencia $30^\circ$, ley de Snell:
$$n_{\text{aire}}\,\mathrm{sen}\,30^\circ = n_{\text{vidrio}}\,\mathrm{sen}\,\theta_t\ \Rightarrow\ \mathrm{sen}\,\theta_t = \dfrac{\mathrm{sen}\,30^\circ}{1{,}33} = 0{,}376,$$
$$\theta_t = 22{,}1^\circ.$$

**(b)** Por geometría del triángulo, el ángulo de incidencia sobre la cara posterior (vidrio→aire) resulta $\theta_i' = 7{,}92^\circ$ (el ángulo refractado y el ángulo del prisma se combinan: los ángulos interiores del triángulo formado por los rayos y las caras suman $180^\circ$). Aplicando Snell en la cara posterior:
$$n_{\text{vidrio}}\,\mathrm{sen}\,7{,}92^\circ = n_{\text{aire}}\,\mathrm{sen}\,\theta_t'\ \Rightarrow\ \mathrm{sen}\,\theta_t' = 1{,}33\cdot\mathrm{sen}\,7{,}92^\circ,$$
$$\theta_t' = 10{,}6^\circ.$$

## Ejercicio 10

### Enunciado

El isótopo $^{222}\text{Rn}$ es radiactivo y tiene un período de semidesintegración de $3{,}82\ \text{días}$. La legislación ambiental limita la radiactividad causada por el $^{222}\text{Rn}$ a $300\ \text{Bq}$ por metro cúbico.

**(a)** Calcule la constante de desintegración del $^{222}\text{Rn}$ y la actividad inicial de $1\ \text{mg}$ de $^{222}\text{Rn}$.

**(b)** Determine la masa máxima de $^{222}\text{Rn}$ que puede haber en una habitación de $20\ \text{m}^3$ para no superar el límite legal.

*Datos:* $M_{\text{Rn}} = 222\ \text{u}$; $N_A = 6{,}02\cdot10^{23}\ \text{mol}^{-1}$.

### Solución explicada

**(a)** Constante de desintegración ($T_{1/2} = 3{,}82\ \text{días} = 3{,}30\cdot10^{5}\ \text{s}$):
$$\lambda = \dfrac{\ln 2}{T_{1/2}} = \dfrac{0{,}693}{3{,}30\cdot10^{5}} = 2{,}1\cdot10^{-6}\ \text{s}^{-1}\ (= 0{,}181\ \text{días}^{-1}).$$
Número de núcleos en $1\ \text{mg}$:
$$N = \dfrac{1\cdot10^{-3}}{222}\cdot 6{,}02\cdot10^{23} = 2{,}71\cdot10^{18}\ \text{núcleos}.$$
Actividad inicial:
$$A_0 = \lambda N = 2{,}1\cdot10^{-6}\cdot 2{,}71\cdot10^{18} = 5{,}69\cdot10^{12}\ \text{Bq}.$$

**(b)** Actividad límite en la habitación:
$$A_{\text{lim}} = 300\cdot 20 = 6000\ \text{Bq}.$$
Número máximo de núcleos:
$$N_{\text{lim}} = \dfrac{A_{\text{lim}}}{\lambda} = \dfrac{6000}{2{,}1\cdot10^{-6}} = 2{,}86\cdot10^{9}\ \text{núcleos}.$$
Masa máxima:
$$m_{\text{lim}} = \dfrac{M_{\text{Rn}}\,N_{\text{lim}}}{N_A} = \dfrac{222\cdot 2{,}86\cdot10^{9}}{6{,}02\cdot10^{23}} \approx 1{,}05\cdot10^{-12}\ \text{g}.$$
