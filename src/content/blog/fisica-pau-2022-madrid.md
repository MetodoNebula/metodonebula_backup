---
title: Física · PAU 2022 · Madrid — examen resuelto
seoTitle: PAU Física Madrid 2022 resuelta paso a paso
date: 2022-06-01
updated: 2026-11-05
description: Examen de Física de Madrid 2022 resuelto paso a paso para 2.º de Bachillerato.
tag: Física PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

Una partícula de masa $20\ \text{kg}$ permanece fija en el origen de coordenadas.

**(a)** Calcule el campo gravitatorio generado por la masa en el punto $(8,6)\ \text{m}$ y la fuerza que experimentará una segunda partícula de masa $3\ \text{kg}$ situada en dicho punto.

**(b)** Con el objetivo de alejar la segunda partícula, se le transmite una velocidad de $1{,}2\cdot10^{-5}\ \text{m/s}$ en la dirección de la recta que une ambas partículas. Halle el punto más alejado del origen que alcanzará dicha partícula.

### Solución explicada

**(a)** La distancia del origen al punto $(8,6)$ es $d=\sqrt{8^2+6^2}=10\ \text{m}$, con vector unitario $\vec{u}_r=(0{,}8;\,0{,}6)$.

$$\vec{g}=-\dfrac{GM}{d^2}\,\vec{u}_r=-\dfrac{6{,}67\cdot10^{-11}\cdot 20}{10^2}\,(0{,}8;\,0{,}6)$$

$$\vec{g}=\left(-1{,}07\cdot10^{-11}\,\vec{i}-8{,}0\cdot10^{-12}\,\vec{j}\right)\ \text{N/kg}$$

La fuerza sobre la masa $m=3\ \text{kg}$ es $\vec{F}=m\,\vec{g}$:

$$\vec{F}=\left(-3{,}21\cdot10^{-11}\,\vec{i}-2{,}40\cdot10^{-11}\,\vec{j}\right)\ \text{N}$$

**(b)** Por conservación de la energía mecánica, con la partícula partiendo de $r_0=10\ \text{m}$:

$$E=-\dfrac{GMm}{r_0}+\dfrac12 m v^2=-\dfrac{6{,}67\cdot10^{-11}\cdot20\cdot3}{10}+\dfrac12\cdot3\cdot(1{,}2\cdot10^{-5})^2=-1{,}84\cdot10^{-10}\ \text{J}$$

En el punto más alejado la velocidad se anula y $E=-\dfrac{GMm}{r_{\max}}$:

$$r_{\max}=-\dfrac{GMm}{E}=-\dfrac{6{,}67\cdot10^{-11}\cdot20\cdot3}{-1{,}84\cdot10^{-10}}=21{,}7\ \text{m}$$

Como la partícula se mueve a lo largo de la recta origen–punto (dirección $\vec{u}_r$):

$$(x_{\max},y_{\max})=21{,}7\,(0{,}8;\,0{,}6)=(17{,}4;\,13{,}0)\ \text{m}$$

## Ejercicio 2

### Enunciado

Por una cuerda dispuesta a lo largo del eje $x$ viaja una onda armónica que desplaza los elementos de la cuerda en la dirección del eje $y$. Los elementos $A$ y $B$, ubicados en $x_A=0\ \text{m}$ y $x_B=2\ \text{m}$, oscilan en fase y cortan al eje $x$ cada $4\ \text{s}$. No hay entre $A$ y $B$ ningún otro elemento que oscile en fase con ellos.

**(a)** Calcule la velocidad de propagación.

**(b)** Escriba la expresión matemática de la onda, si viaja en el sentido negativo del eje $x$ y en el instante inicial $A$ y $B$ tienen desplazamiento $+10\ \text{cm}$ y velocidad nula.

### Solución explicada

**(a)** Cortar el eje cada $4\ \text{s}$ significa medio periodo entre dos pasos por la posición de equilibrio, luego $T=8\ \text{s}$. Como $A$ y $B$ son los puntos en fase más próximos, su separación es una longitud de onda: $\lambda=2\ \text{m}$.

$$v=\dfrac{\lambda}{T}=\dfrac{2}{8}=0{,}25\ \text{m/s}$$

**(b)** Onda que viaja hacia $-x$:

$$y(x,t)=A_0\cos\!\left(\dfrac{2\pi}{T}\,t+\dfrac{2\pi}{\lambda}\,x+\varphi_0\right)$$

Como en $t=0$ la velocidad es nula y el desplazamiento es máximo, $A_0=0{,}1\ \text{m}$ y $\varphi_0=0$. Con $\dfrac{2\pi}{T}=\dfrac{\pi}{4}\ \text{rad/s}$ y $\dfrac{2\pi}{\lambda}=\pi\ \text{rad/m}$:

$$y(x,t)=0{,}1\,\cos\!\left(\dfrac{\pi}{4}\,t+\pi x\right)\ \text{(SI)}$$

## Ejercicio 3

### Enunciado

Una varilla metálica de $20\ \text{cm}$ desliza sin rozamiento sobre raíles horizontales paralelos al eje $x$, de resistencia despreciable, con velocidad $\vec{v}=2\,\vec{i}\ \text{m/s}$. Los raíles están conectados en $x=0$ por una resistencia $R=0{,}5\ \Omega$. En la región hay un campo magnético uniforme $\vec{B}=-0{,}4\,\vec{k}\ \text{T}$. Calcule:

**(a)** La intensidad de la corriente en el circuito.

**(b)** La fuerza $\vec{F}$ que el campo magnético ejerce sobre la varilla.

### Solución explicada

**(a)** El flujo es $\Phi=B\,x\,L$ y varía porque cambia el área del circuito. La fem inducida:

$$|\varepsilon|=\left|\dfrac{d\Phi}{dt}\right|=B\,L\,\dfrac{dx}{dt}=B\,L\,v=0{,}4\cdot0{,}2\cdot2=0{,}16\ \text{V}$$

$$I=\dfrac{|\varepsilon|}{R}=\dfrac{B\,L\,v}{R}=\dfrac{0{,}16}{0{,}5}=0{,}32\ \text{A}$$

**(b)** La fuerza sobre la varilla, con $\vec{L}=0{,}2\,\vec{j}$ (según el sentido de la corriente) y $\vec{B}=-0{,}4\,\vec{k}$:

$$\vec{F}=I\,\vec{L}\times\vec{B}=0{,}32\cdot0{,}2\,\vec{j}\times(-0{,}4\,\vec{k})=-2{,}56\cdot10^{-2}\,\vec{i}\ \text{N}$$

La fuerza se opone al movimiento (ley de Lenz), como debe ser.

## Ejercicio 4

### Enunciado

Dos lentes convergentes idénticas están separadas $16\ \text{cm}$. Cuando un objeto se sitúa a cierta distancia a la izquierda de la primera lente, cada una de ellas opera con aumento igual a $-1$.

**(a)** Determine la potencia de las lentes.

**(b)** ¿Cuánto y hacia dónde debe desplazarse la segunda lente para que la imagen del sistema se forme en el infinito?

### Solución explicada

**(a)** Con la ecuación de la lente delgada $\dfrac{1}{s'}-\dfrac{1}{s}=\dfrac{1}{f'}$ y $m=\dfrac{s'}{s}=-1\Rightarrow s'=-s$.

Sustituyendo: $\dfrac{1}{-s}-\dfrac{1}{s}=\dfrac{1}{f'}\Rightarrow s=-2f'$ y $s'=2f'$. Es decir, objeto e imagen están a $2f'$ (configuración $2F$–$2F$).

La imagen de la primera lente es el objeto de la segunda; la distancia entre lentes es la suma $2f'+2f'=4f'$:

$$4f'=16\ \text{cm}\Rightarrow f'=4\ \text{cm}=0{,}04\ \text{m}\Rightarrow P=\dfrac{1}{f'}=25\ \text{dioptrías}$$

**(b)** La imagen de la primera lente se forma a $2f'=8\ \text{cm}$ de ella. Para que el sistema dé imagen en el infinito, esa imagen debe caer en el foco objeto de la segunda lente, es decir, la segunda lente debe estar a $f'=4\ \text{cm}$ de dicha imagen. Como ahora está a $8\ \text{cm}$, debe acercarse $4\ \text{cm}$: hay que desplazarla $4\ \text{cm}$ hacia la izquierda.

## Ejercicio 5

### Enunciado

Una muestra contiene inicialmente $30\ \text{mg}$ de $^{210}\text{Po}$, cuyo periodo de semidesintegración es $138{,}38\ \text{días}$. Determine:

**(a)** La vida media del isótopo y la actividad inicial de la muestra.

**(b)** El tiempo que debe transcurrir para que el contenido de $^{210}\text{Po}$ se reduzca a $5\ \text{mg}$.

### Solución explicada

**(a)** Vida media:

$$\tau=\dfrac{T_{1/2}}{\ln 2}=\dfrac{138{,}38}{0{,}693}=199{,}6\ \text{días}=1{,}72\cdot10^{7}\ \text{s}$$

Número inicial de núcleos:

$$N_0=\dfrac{m_0}{M}\,N_A=\dfrac{30\cdot10^{-3}}{210}\cdot6{,}02\cdot10^{23}=8{,}6\cdot10^{19}\ \text{núcleos}$$

Actividad inicial ($\lambda=1/\tau$):

$$A_0=\lambda N_0=\dfrac{N_0}{\tau}=\dfrac{8{,}6\cdot10^{19}}{1{,}72\cdot10^{7}}=4{,}99\cdot10^{12}\ \text{Bq}$$

**(b)** La masa sigue $m(t)=m_0 e^{-\lambda t}$:

$$t=\dfrac{1}{\lambda}\ln\!\dfrac{m_0}{m}=\tau\,\ln\!\dfrac{30}{5}=1{,}72\cdot10^{7}\cdot\ln 6=3{,}09\cdot10^{7}\ \text{s}\approx357\ \text{días}$$

## Ejercicio 6

### Enunciado

Marte posee la décima parte de la masa de la Tierra y la mitad de su diámetro.

**(a)** Encuentre la relación entre las velocidades de escape de Marte y de la Tierra desde sus superficies.

**(b)** Un objeto se lanza verticalmente desde la superficie terrestre con velocidad igual a la de escape de Marte. Despreciando el rozamiento, ¿qué altura máxima alcanzaría?

### Solución explicada

**(a)** La velocidad de escape es $v_e=\sqrt{\dfrac{2GM}{R}}$. Por tanto:

$$\dfrac{v_{eM}}{v_{eT}}=\sqrt{\dfrac{M_M}{M_T}\cdot\dfrac{R_T}{R_M}}=\sqrt{\dfrac{1}{10}\cdot 2}=\dfrac{1}{\sqrt5}\approx0{,}447$$

**(b)** La velocidad de lanzamiento es $v=v_{eM}$, con $v_{eM}^2=\dfrac{2GM_M}{R_M}=\dfrac{1}{5}\cdot\dfrac{2GM_T}{R_T}$. Conservando la energía desde la superficie terrestre hasta la altura máxima (donde $v=0$):

$$\dfrac12 v_{eM}^2-\dfrac{GM_T}{R_T}=-\dfrac{GM_T}{r_{\max}}$$

$$\dfrac{1}{5}\dfrac{GM_T}{R_T}-\dfrac{GM_T}{R_T}=-\dfrac{4}{5}\dfrac{GM_T}{R_T}=-\dfrac{GM_T}{r_{\max}}\Rightarrow r_{\max}=\dfrac{5}{4}R_T$$

$$h_{\max}=r_{\max}-R_T=\dfrac{R_T}{4}=\dfrac{6{,}37\cdot10^{6}}{4}=1{,}59\cdot10^{6}\ \text{m}=1592{,}5\ \text{km}$$

## Ejercicio 7

### Enunciado

Un foco sonoro de potencia $P$ se sitúa a una altura $h$ sobre el suelo. El nivel de intensidad sonora vale $60\ \text{dB}$ en el punto $A$, a $100\ \text{m}$ del foco, y $80\ \text{dB}$ en el punto $B$, en el suelo en la vertical del foco.

**(a)** Calcule $P$ y $h$.

**(b)** ¿Cuál sería el nivel de intensidad en $B$ si se añadiese sobre él otro foco de igual potencia a una altura $h/2$?

### Solución explicada

**(a)** A partir de $\beta=10\log\dfrac{I}{I_0}$ y $I=\dfrac{P}{4\pi r^2}$. En $A$:

$$P=4\pi R^2\,I_0\,10^{\,\beta_A/10}=4\pi\,100^2\,10^{-12}\,10^{6}=4\pi\cdot10^{-2}=0{,}126\ \text{W}\approx125{,}7\ \text{mW}$$

En $B$ (a distancia $h$):

$$h=\sqrt{\dfrac{P}{4\pi\,I_0\,10^{\,\beta_B/10}}}=\sqrt{\dfrac{4\pi\cdot10^{-2}}{4\pi\,10^{-12}\,10^{8}}}=\sqrt{100}=10\ \text{m}$$

**(b)** El foco original dista $h=10\ \text{m}$ de $B$ (intensidad $I_B$); el nuevo foco, a $h/2$, dista $5\ \text{m}$, con intensidad $\dfrac{P}{4\pi(h/2)^2}=4I_B$. La intensidad total es $I_B+4I_B=5I_B$:

$$\beta_B'=10\log\dfrac{5I_B}{I_0}=\beta_B+10\log5=80+6{,}99=87\ \text{dB}$$

## Ejercicio 8

### Enunciado

Una carga puntual positiva está en el punto $(3,4)\ \text{m}$. Una segunda carga puntual, también positiva y de magnitud el cuádruple de la primera, se coloca de modo que el campo eléctrico se anula en el origen.

**(a)** Determine la posición de la segunda carga.

**(b)** Si el potencial en el origen vale $1{,}08\cdot10^{4}\ \text{V}$, encuentre el valor de las cargas.

### Solución explicada

**(a)** Para que $\vec{E}=0$ en el origen, el campo de $q_2$ debe ser opuesto al de $q_1$ y de igual módulo. Como $K\dfrac{q_1}{r_1^2}=K\dfrac{q_2}{r_2^2}$ con $q_2=4q_1$:

$$r_2=\sqrt{\dfrac{q_2}{q_1}}\,r_1=2r_1=10\ \text{m}$$

Para que los campos sean opuestos (ambas cargas positivas), $q_2$ debe estar en la prolongación de la recta origen–$q_1$ pero al otro lado, en el tercer cuadrante, a $10\ \text{m}$:

$$\vec{r}_2=-2\,\vec{r}_1=-2(3,4)=(-6,-8)\ \text{m}$$

**(b)** El potencial en el origen es la suma escalar:

$$V=K\!\left(\dfrac{q_1}{r_1}+\dfrac{q_2}{r_2}\right)=K q_1\!\left(\dfrac15+\dfrac{4}{10}\right)=K q_1\cdot\dfrac{3}{5}=1{,}08\cdot10^{4}$$

$$q_1=\dfrac{5}{3}\cdot\dfrac{1{,}08\cdot10^{4}}{9\cdot10^{9}}=2\cdot10^{-6}\ \text{C}\quad\Rightarrow\quad q_2=8\cdot10^{-6}\ \text{C}$$

## Ejercicio 9

### Enunciado

Una lámina de vidrio se halla sobre un líquido de índice desconocido. La longitud de onda de la luz en el vidrio se reduce al $70\%$ de su valor en el aire. Si se emite luz desde el líquido, los rayos con ángulos de incidencia superiores a $30^\circ$ en la cara inferior de la lámina no se refractan al aire por la cara superior. Calcule:

**(a)** El índice de refracción del vidrio.

**(b)** El índice de refracción del líquido.

### Solución explicada

**(a)** La longitud de onda en un medio es $\lambda=\dfrac{\lambda_{aire}\,n_{aire}}{n}$, de modo que $\lambda_{vidrio}=\dfrac{\lambda_{aire}}{n_{vidrio}}$. Con $\lambda_{vidrio}=0{,}70\,\lambda_{aire}$:

$$n_{vidrio}=\dfrac{1}{0{,}70}=1{,}43$$

**(b)** Si para incidencias $>30^\circ$ desde el líquido ya no hay refracción al aire por la cara superior, a $30^\circ$ el rayo emerge rasante ($90^\circ$) al aire. Aplicando la ley de Snell en cadena líquido $\to$ vidrio $\to$ aire, los términos del vidrio se cancelan:

$$n_{liq}\,\text{sen}\,30^\circ=n_{aire}\,\text{sen}\,90^\circ\Rightarrow n_{liq}=\dfrac{1}{\text{sen}\,30^\circ}=2$$

## Ejercicio 10

### Enunciado

Un electrón relativista adquiere una energía cinética igual a la energía de un fotón de $5\cdot10^{-12}\ \text{m}$ de longitud de onda en el vacío. Calcule:

**(a)** La energía cinética del electrón, en eV.

**(b)** La velocidad del electrón.

### Solución explicada

**(a)** La energía cinética del electrón iguala la del fotón:

$$E_c=\dfrac{hc}{\lambda}=\dfrac{6{,}63\cdot10^{-34}\cdot3\cdot10^{8}}{5\cdot10^{-12}}=3{,}98\cdot10^{-14}\ \text{J}$$

$$E_c=\dfrac{3{,}98\cdot10^{-14}}{1{,}6\cdot10^{-19}}=2{,}49\cdot10^{5}\ \text{eV}$$

**(b)** De la energía cinética relativista $E_c=(\gamma-1)m_e c^2$, con $m_e c^2=8{,}19\cdot10^{-14}\ \text{J}$, se obtiene $\gamma=1+\dfrac{E_c}{m_e c^2}=1{,}486$:

$$v=c\sqrt{1-\dfrac{1}{\gamma^2}}=c\sqrt{1-\dfrac{1}{1{,}486^2}}=0{,}740\,c=2{,}22\cdot10^{8}\ \text{m/s}$$
