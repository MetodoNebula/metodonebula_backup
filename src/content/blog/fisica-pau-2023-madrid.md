---
title: Física · PAU 2023 · Madrid — examen resuelto
seoTitle: PAU Física Madrid 2023 resuelta paso a paso
date: 2023-06-01
updated: 2026-11-05
description: Examen de Física de Madrid 2023 resuelto paso a paso para 2.º de Bachillerato.
tag: Física PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

Un satélite de la constelación OneWeb, de masa $m_S = 150\ \text{kg}$, se encuentra en una órbita circular alrededor de la Tierra a una altura $h = 1200\ \text{km}$ sobre el nivel del mar. Determine:

**(a)** Las energías potencial gravitatoria y cinética que tiene el satélite en su órbita.

**(b)** La energía que fue necesario comunicar al satélite para ponerlo en órbita desde la superficie de la Tierra.

### Solución explicada

**(a)** El radio de la órbita es $r = R_T + h = 6{,}37\cdot10^{6} + 1{,}2\cdot10^{6} = 7{,}57\cdot10^{6}\ \text{m}$.

Energía potencial gravitatoria:
$$E_P = -\dfrac{G\,M_T\,m_S}{r} = -\dfrac{6{,}67\cdot10^{-11}\cdot 5{,}97\cdot10^{24}\cdot 150}{7{,}57\cdot10^{6}} = -7{,}89\cdot10^{9}\ \text{J}$$

En una órbita circular la fuerza gravitatoria actúa como centrípeta, $\dfrac{G\,M_T\,m_S}{r^2} = \dfrac{m_S\,v^2}{r}$, luego $v^2 = \dfrac{G\,M_T}{r}$. La energía cinética es:
$$E_C = \tfrac{1}{2}\,m_S\,v^2 = \dfrac{G\,M_T\,m_S}{2\,r} = 3{,}95\cdot10^{9}\ \text{J}$$

**(b)** La energía de satelización es la variación de energía mecánica entre la superficie (en reposo) y la órbita:
$$E = E_{M,\text{órbita}} - E_{M,\text{sup}} = \left(E_C + E_P\right) - \left(0 - \dfrac{G\,M_T\,m_S}{R_T}\right)$$
$$E = -3{,}95\cdot10^{9} + 6{,}67\cdot10^{-11}\,\dfrac{5{,}97\cdot10^{24}\cdot 150}{6{,}37\cdot10^{6}} = 5{,}43\cdot10^{9}\ \text{J}$$

## Ejercicio 2

### Enunciado

A lo largo de una cuerda se propaga en el sentido $+x$ una onda transversal. El periodo de oscilación y la elongación máxima de un punto cualquiera son, respectivamente, $T = 4\cdot10^{-3}\ \text{s}$ y $A = 3\ \text{mm}$. La distancia mínima entre dos puntos que oscilan en fase es de $0{,}25\ \text{m}$. En el instante $t = 2\cdot10^{-3}\ \text{s}$ la elongación de un punto situado en $x = +0{,}5\ \text{m}$ es $-1{,}5\ \text{mm}$ y su velocidad de oscilación en ese instante es positiva.

**(a)** Halle la frecuencia angular y la velocidad de propagación de la onda.

**(b)** Obtenga la expresión matemática que describe la onda.

### Solución explicada

**(a)** La distancia mínima entre puntos en fase es la longitud de onda, $\lambda = 0{,}25\ \text{m}$.
$$\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{4\cdot10^{-3}} = 500\pi\ \text{rad·s}^{-1} \approx 1{,}57\cdot10^{3}\ \text{rad·s}^{-1}$$
$$v = \lambda\,f = \dfrac{\lambda}{T} = \dfrac{0{,}25}{4\cdot10^{-3}} = 62{,}5\ \text{m·s}^{-1}$$

**(b)** Escribimos $y(x,t) = A\,\operatorname{sen}(\omega t - k x + \varphi)$, con $A = 3\cdot10^{-3}\ \text{m}$ y
$$k = \dfrac{2\pi}{\lambda} = \dfrac{2\pi}{0{,}25} = 8\pi\ \text{m}^{-1}$$

Imponemos la condición en $x=0{,}5\ \text{m}$, $t=2\cdot10^{-3}\ \text{s}$:
$$3\cdot10^{-3}\operatorname{sen}(500\pi\cdot2\cdot10^{-3} - 8\pi\cdot0{,}5 + \varphi) = -1{,}5\cdot10^{-3}$$
$$\operatorname{sen}(\pi - 4\pi + \varphi) = -0{,}5 \;\Rightarrow\; \operatorname{sen}(-3\pi+\varphi) = -0{,}5$$

Hay dos soluciones, $\varphi = \tfrac{17\pi}{6}$ y $\varphi = \tfrac{25\pi}{6}$. La condición $v_y>0$ exige $\cos(-3\pi+\varphi)>0$, que se cumple para $\varphi = \tfrac{17\pi}{6} \equiv \tfrac{5\pi}{6}$. Por tanto:
$$y(x,t) = 3\cdot10^{-3}\,\operatorname{sen}\!\left(500\pi\,t - 8\pi\,x + \tfrac{5\pi}{6}\right)\ \text{m}$$
con $x$ en metros y $t$ en segundos.

## Ejercicio 3

### Enunciado

Tres cargas $-q$, $-q$ y $+2q$ se encuentran situadas en los puntos del plano $(-a,a)$, $(a,a)$ y $(0,0)$, respectivamente. En función de la constante de Coulomb $K$, de la carga $q$ y de la distancia $a$, determine:

**(a)** La expresión de la fuerza electrostática que se ejerce sobre la carga situada en $(a,a)$ y la expresión del trabajo que habrá realizado esa fuerza electrostática para traer la carga $-q$ desde el infinito hasta $(a,a)$.

**(b)** El flujo del campo eléctrico a través de las superficies cerradas $S_1$ (que encierra a $+2q$ y a la carga $-q$ situada en $(a,a)$) y $S_2$ (que encierra a las tres cargas).

### Solución explicada

**(a)** Sobre la carga $-q$ situada en $(a,a)$ actúan:

Fuerza de la otra $-q$ (en $(-a,a)$, a distancia $2a$), repulsiva, dirigida según $+\vec{\imath}$:
$$\vec{F}_{1} = K\dfrac{q^2}{(2a)^2}\,\vec{\imath} = K\dfrac{q^2}{4a^2}\,\vec{\imath}$$

Fuerza de la carga $+2q$ (en el origen, a distancia $a\sqrt{2}$), atractiva, dirigida de $(a,a)$ hacia el origen, es decir según $(-\vec{\imath}-\vec{\jmath})/\sqrt2$:
$$\vec{F}_{2} = K\dfrac{2q^2}{2a^2}\cdot\dfrac{-\vec{\imath}-\vec{\jmath}}{\sqrt2} = K\dfrac{q^2}{a^2}\left(-\tfrac{1}{\sqrt2}\vec{\imath}-\tfrac{1}{\sqrt2}\vec{\jmath}\right)$$

Sumando:
$$\vec{F} = K\dfrac{q^2}{a^2}\left[\left(\tfrac14-\tfrac{1}{\sqrt2}\right)\vec{\imath} - \tfrac{1}{\sqrt2}\vec{\jmath}\right] = K\dfrac{q^2}{a^2}\left(-0{,}46\,\vec{\imath} - 0{,}71\,\vec{\jmath}\right)$$

El trabajo de la fuerza electrostática al traer $-q$ desde el infinito es $W = -\Delta E_p = -E_p(a,a)$, siendo
$$E_p = K\dfrac{(-q)(-q)}{2a} + K\dfrac{(2q)(-q)}{a\sqrt2} = K\dfrac{q^2}{a}\left(\tfrac12 - \tfrac{2}{\sqrt2}\right) = -0{,}91\,K\dfrac{q^2}{a}$$
$$W = -E_p = +0{,}91\,K\dfrac{q^2}{a}$$

**(b)** Por la ley de Gauss, $\Phi = \dfrac{q_{\text{enc}}}{\varepsilon_0} = 4\pi K\,q_{\text{enc}}$.
$$\Phi_{S_1} = \dfrac{+2q - q}{\varepsilon_0} = \dfrac{q}{\varepsilon_0} = 4\pi K\,q$$
$$\Phi_{S_2} = \dfrac{+2q - q - q}{\varepsilon_0} = 0$$

## Ejercicio 4

### Enunciado

Un objeto de $2\ \text{cm}$ de altura se sitúa a $18\ \text{cm}$ a la izquierda de una pantalla. Entre la pantalla y el objeto, a $14{,}2\ \text{cm}$ de este, se sitúa una lente convergente.

**(a)** Determine la distancia focal que debe tener la lente para que se enfoque la imagen del objeto sobre la pantalla y el tamaño de la imagen.

**(b)** A continuación se retira la pantalla y se sitúa, a $5\ \text{cm}$ a la derecha de la primera lente, otra lente convergente de distancia focal $1{,}2\ \text{cm}$. ¿Dónde se formará la nueva imagen?

### Solución explicada

**(a)** La pantalla está a $18\ \text{cm}$ del objeto y la lente a $14{,}2\ \text{cm}$ del objeto, luego la imagen se forma a $s' = 18 - 14{,}2 = 3{,}8\ \text{cm}$ a la derecha de la lente. Con el objeto en $s = -14{,}2\ \text{cm}$ y la ecuación de las lentes delgadas:
$$\dfrac{1}{s'} - \dfrac{1}{s} = \dfrac{1}{f'} \;\Rightarrow\; \dfrac{1}{3{,}8} - \dfrac{1}{-14{,}2} = \dfrac{1}{f'} \;\Rightarrow\; f' = 3{,}0\ \text{cm}$$

El aumento lateral:
$$m = \dfrac{s'}{s} = \dfrac{3{,}8}{-14{,}2} = -0{,}27 \;\Rightarrow\; y' = m\,y = -0{,}27\cdot2 = -0{,}54\ \text{cm}$$
Imagen real, invertida y reducida.

**(b)** La imagen anterior (a $3{,}8\ \text{cm}$ de la primera lente) actúa como objeto para la segunda lente, situada a $5\ \text{cm}$: $s_2 = 3{,}8 - 5 = -1{,}2\ \text{cm}$. Como $|s_2| = f'_2 = 1{,}2\ \text{cm}$, el objeto está en el foco objeto de la segunda lente:
$$\dfrac{1}{s'_2} = \dfrac{1}{f'_2} + \dfrac{1}{s_2} = \dfrac{1}{1{,}2} + \dfrac{1}{-1{,}2} = 0 \;\Rightarrow\; s'_2 = \infty$$
La imagen final se forma en el infinito (rayos emergentes paralelos).

## Ejercicio 5

### Enunciado

Se sospecha que un acuífero recibe aportes intermitentes de radón ($^{222}\text{Rn}$). Se miden semanalmente actividades de muestras de un litro de agua; una medida da $14\ \text{Bq}$. Determine el valor de la medida de la semana siguiente (otra muestra de un litro):

**(a)** Si no hubiese ningún aporte de $^{222}\text{Rn}$ durante esa semana.

**(b)** Si el cuarto día de esa semana la concentración de $^{222}\text{Rn}$ experimentase un aumento súbito de $2\cdot10^{-16}\ \text{g}$ por cada litro de agua.

### Solución explicada

**(a)** Sin aporte, la actividad decae exponencialmente durante $t = 7\ \text{días}$:
$$A = A_0\,2^{-t/T_{1/2}} = 14\cdot 2^{-7/3{,}8} = 3{,}9\ \text{Bq}$$

**(b)** El aumento de $\Delta C = 2\cdot10^{-16}\ \text{g/L}$ añade núcleos cuya actividad, al final de la semana, ha decaído durante $t' = 7-4 = 3\ \text{días}$. La constante de desintegración es $\lambda = \dfrac{\ln 2}{T_{1/2}} = \dfrac{\ln 2}{3{,}8\cdot 86400} = 2{,}11\cdot10^{-6}\ \text{s}^{-1}$ y el número de átomos añadidos $N = \dfrac{\Delta C}{M}\,N_A = \dfrac{2\cdot10^{-16}}{222}\cdot6{,}02\cdot10^{23} = 5{,}42\cdot10^{5}$.
$$\Delta A = \lambda\,N\,2^{-t'/T_{1/2}} = 2{,}11\cdot10^{-6}\cdot5{,}42\cdot10^{5}\cdot 2^{-3/3{,}8} = 0{,}66\ \text{Bq}$$

La actividad medida será:
$$A' = A + \Delta A = 3{,}9 + 0{,}66 = 4{,}6\ \text{Bq}$$

## Ejercicio 6

### Enunciado

Un satélite orbita la Tierra en órbita circular a una altura $h = 1600\ \text{km}$ sobre la superficie.

**(a)** Calcule la velocidad orbital del satélite y el tiempo que tarda en dar una vuelta completa. Desprecie la interacción gravitatoria de la Luna.

**(b)** Para evitar que caiga, se decide impulsarlo hacia la Luna. Determine la distancia $x$ al centro de la Tierra a la que deberá llegar para que el efecto del campo gravitatorio lunar supere al del campo terrestre.

### Solución explicada

**(a)** La fuerza gravitatoria es la centrípeta, luego $v = \sqrt{\dfrac{G\,M_T}{R_T+h}}$. Con $r = R_T + h = 6{,}37\cdot10^{6} + 1{,}6\cdot10^{6} = 7{,}97\cdot10^{6}\ \text{m}$:
$$v = \sqrt{\dfrac{6{,}67\cdot10^{-11}\cdot5{,}97\cdot10^{24}}{7{,}97\cdot10^{6}}} = 7{,}07\cdot10^{3}\ \text{m·s}^{-1} \approx 7{,}07\ \text{km·s}^{-1}$$
$$T = \dfrac{2\pi r}{v} = \dfrac{2\pi\cdot7{,}97\cdot10^{6}}{7{,}07\cdot10^{3}} \approx 7{,}08\cdot10^{3}\ \text{s} \approx 1{,}97\ \text{h}$$

**(b)** El punto neutro cumple que los módulos de los campos terrestre y lunar se igualan, estando el satélite a distancia $x$ de la Tierra y $d-x$ de la Luna:
$$\dfrac{G\,M_T}{x^2} = \dfrac{G\,M_L}{(d-x)^2} \;\Rightarrow\; \dfrac{x}{d-x} = \sqrt{\dfrac{M_T}{M_L}}$$
$$\dfrac{x}{3{,}84\cdot10^{5}-x} = \sqrt{\dfrac{5{,}97\cdot10^{24}}{7{,}35\cdot10^{22}}} = 9{,}01 \;\Rightarrow\; x \approx 3{,}46\cdot10^{5}\ \text{km}$$
Más allá de esa distancia predomina el campo lunar.

## Ejercicio 7

### Enunciado

Un observador situado a $3\ \text{m}$ de una fuente puntual sonora que emite en todas direcciones mide un nivel de intensidad sonora de $53\ \text{dB}$. Halle:

**(a)** La intensidad sonora recibida por el observador y la potencia con la que emite la fuente.

**(b)** La distancia a la que debe situarse el observador para que el nivel de intensidad sonora percibido se reduzca a una cuarta parte.

### Solución explicada

**(a)** A partir del nivel de intensidad $\beta = 10\log(I/I_0)$:
$$I_1 = I_0\,10^{\beta_1/10} = 10^{-12}\cdot10^{5{,}3} = 1{,}99\cdot10^{-7}\ \text{W·m}^{-2}$$
Para una fuente puntual, $I = \dfrac{P}{4\pi r^2}$, luego
$$P = I_1\,4\pi r_1^2 = 1{,}99\cdot10^{-7}\cdot4\pi\cdot3^2 = 2{,}25\cdot10^{-5}\ \text{W}$$

**(b)** Un nivel igual a la cuarta parte, $\beta_2 = 53/4 = 13{,}25\ \text{dB}$, corresponde a
$$I_2 = I_0\,10^{\beta_2/10} = 10^{-12}\cdot10^{1{,}325} = 2{,}11\cdot10^{-11}\ \text{W·m}^{-2}$$
Como $\dfrac{I_1}{I_2} = \dfrac{r_2^2}{r_1^2}$:
$$r_2 = r_1\sqrt{\dfrac{I_1}{I_2}} = 3\sqrt{\dfrac{1{,}99\cdot10^{-7}}{2{,}11\cdot10^{-11}}} \approx 291\ \text{m}$$

## Ejercicio 8

### Enunciado

Un ion de $\text{He}^+$ se sitúa inicialmente en reposo en una región donde existe un campo eléctrico homogéneo de $10^{3}\ \text{V·m}^{-1}$ dirigido según $+x$.

**(a)** Calcule la aceleración que experimenta el ion en el instante inicial.

**(b)** Determine la fuerza total sobre el ion si a los $20\ \mu\text{s}$ de ser depositado se aplica un campo magnético homogéneo de $0{,}6\ \text{T}$ según $+y$.

### Solución explicada

**(a)** La masa del ion es $m = 4\,\text{u} = 4\cdot1{,}66\cdot10^{-27} = 6{,}64\cdot10^{-27}\ \text{kg}$. La fuerza eléctrica es $\vec{F} = q\vec{E} = 1{,}6\cdot10^{-19}\cdot10^{3}\,\vec{\imath} = 1{,}6\cdot10^{-16}\,\vec{\imath}\ \text{N}$, y
$$\vec{a} = \dfrac{\vec{F}}{m} = \dfrac{1{,}6\cdot10^{-16}}{6{,}64\cdot10^{-27}}\,\vec{\imath} = 2{,}41\cdot10^{10}\,\vec{\imath}\ \text{m·s}^{-2}$$

**(b)** A los $20\ \mu\text{s}$ la velocidad (movimiento uniformemente acelerado) es
$$\vec{v} = \vec{a}\,t = 2{,}41\cdot10^{10}\cdot20\cdot10^{-6}\,\vec{\imath} = 4{,}82\cdot10^{5}\,\vec{\imath}\ \text{m·s}^{-1}$$
La fuerza magnética es
$$\vec{F}_B = q\,(\vec{v}\times\vec{B}) = 1{,}6\cdot10^{-19}\,(4{,}82\cdot10^{5}\,\vec{\imath}\times0{,}6\,\vec{\jmath}) = 4{,}63\cdot10^{-14}\,\vec{k}\ \text{N}$$
La fuerza total (sumando la eléctrica, que persiste):
$$\vec{F}_{\text{total}} = 1{,}6\cdot10^{-16}\,\vec{\imath} + 4{,}63\cdot10^{-14}\,\vec{k}\ \text{N}$$

## Ejercicio 9

### Enunciado

Un rayo de luz incide sobre la cara izquierda de un prisma equilátero (ángulos de $60^\circ$) de índice de refracción $1{,}66$.

**(a)** Determine los ángulos $\alpha$ (refracción en la cara de entrada) y $\beta$ (refracción en la cara de salida) para un rayo que entra desde el aire con un ángulo de incidencia de $50^\circ$.

**(b)** Calcule el ángulo de incidencia desde el aire para que el rayo no llegue a emerger por la segunda cara (sufra reflexión total).

### Solución explicada

**(a)** Ley de Snell en la cara de entrada:
$$n_0\operatorname{sen}50^\circ = n\operatorname{sen}\alpha \;\Rightarrow\; \operatorname{sen}\alpha = \dfrac{\operatorname{sen}50^\circ}{1{,}66} = 0{,}461 \;\Rightarrow\; \alpha = 27{,}5^\circ$$
Por la geometría del prisma, el ángulo de incidencia interno en la segunda cara es $\gamma = 60^\circ - \alpha = 32{,}5^\circ$. En la cara de salida:
$$n\operatorname{sen}\gamma = n_0\operatorname{sen}\beta \;\Rightarrow\; \operatorname{sen}\beta = 1{,}66\cdot\operatorname{sen}32{,}5^\circ = 0{,}892 \;\Rightarrow\; \beta = 63{,}2^\circ$$

**(b)** El rayo no emerge cuando en la segunda cara se alcanza el ángulo límite, es decir $\beta = 90^\circ$:
$$1{,}66\operatorname{sen}\gamma' = n_0\operatorname{sen}90^\circ \;\Rightarrow\; \operatorname{sen}\gamma' = \dfrac{1}{1{,}66} = 0{,}602 \;\Rightarrow\; \gamma' = 37{,}0^\circ$$
Entonces el ángulo de refracción en la primera cara es $\alpha' = 60^\circ - \gamma' = 23{,}0^\circ$, y por Snell en la entrada:
$$\operatorname{sen}\theta_i = 1{,}66\operatorname{sen}23{,}0^\circ = 0{,}648 \;\Rightarrow\; \theta_i \approx 40{,}4^\circ$$
Para ángulos de incidencia menores que $\approx 40{,}4^\circ$ el rayo sufre reflexión total en la segunda cara.

## Ejercicio 10

### Enunciado

Para estudiar el efecto fotoeléctrico se ilumina un metal con luz de $379\ \text{nm}$ y de $544\ \text{nm}$, observándose potenciales de frenado de $2{,}5\ \text{V}$ y $1{,}5\ \text{V}$, respectivamente.

**(a)** A partir de los potenciales de frenado, obtenga el valor de la constante de Planck.

**(b)** Indique los valores del potencial de frenado y de la intensidad de corriente máxima para la luz de $379\ \text{nm}$ si se disminuye a la mitad la intensidad del haz (la corriente máxima con el haz completo era $10\ \text{pA}$).

### Solución explicada

**(a)** La ecuación del efecto fotoeléctrico, con $E_{c,\max} = e\,V$ (potencial de frenado), es $\dfrac{hc}{\lambda} = \phi + e\,V$. Escribiéndola para ambas longitudes de onda y restando se elimina el trabajo de extracción $\phi$:
$$\dfrac{hc}{\lambda_1} - \dfrac{hc}{\lambda_2} = e(V_1 - V_2)$$
$$h = \dfrac{e(V_1 - V_2)}{c\left(\dfrac{1}{\lambda_1} - \dfrac{1}{\lambda_2}\right)} = \dfrac{1{,}6\cdot10^{-19}(2{,}5-1{,}5)}{3\cdot10^{8}\left(\dfrac{1}{379\cdot10^{-9}}-\dfrac{1}{544\cdot10^{-9}}\right)} = 6{,}66\cdot10^{-34}\ \text{J·s}$$

**(b)** El potencial de frenado depende solo de la frecuencia de la luz y del trabajo de extracción, no de la intensidad del haz; por tanto sigue siendo $V = 2{,}5\ \text{V}$. En cambio, el número de fotoelectrones (y la corriente máxima) es proporcional a la intensidad: al reducirla a la mitad, la corriente máxima pasa a $5\ \text{pA}$.
