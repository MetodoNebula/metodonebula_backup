---
title: Física · PAU 2024 · Cantabria — examen resuelto
seoTitle: PAU Física Cantabria 2024 resuelta paso a paso
date: 2024-06-01
updated: 2026-11-05
description: Examen de Física de Cantabria 2024 resuelto paso a paso para 2.º de Bachillerato.
tag: Física PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

Dos masas $m_1=25\ \text{kg}$ y $m_2=50\ \text{kg}$ están en los puntos $(1,1)\ \text{m}$ y $(-1,0)\ \text{m}$ respectivamente.

**(a)** Calcule y represente el vector fuerza gravitatoria que experimenta una masa $m_3=500\ \text{g}$ situada en $(1,0)\ \text{m}$.

**(b)** Calcule el trabajo del campo gravitatorio de $m_1$ y $m_2$ cuando $m_3$ se desplaza de $(1,0)\ \text{m}$ a una posición muy alejada.

**(c)** Razone el significado físico del signo de ese trabajo.


### Esquema para el apartado gráfico

![Esquema de líneas de campo eléctrico y de campo magnético alrededor de un conductor](/assets/latex/pau-fisica-fields.svg)
### Solución explicada

**(a)** Distancias a $m_3$ en $(1,0)$: de $m_1$ en $(1,1)$, $r_1=1\ \text{m}$ (hacia $+y$); de $m_2$ en $(-1,0)$, $r_2=2\ \text{m}$ (hacia $-x$).

$$F_1=\dfrac{Gm_1 m_3}{r_1^2}=\dfrac{6{,}67\cdot10^{-11}\cdot25\cdot0{,}5}{1^2}=8{,}34\cdot10^{-10}\ \text{N}\ (+y)$$

$$F_2=\dfrac{Gm_2 m_3}{r_2^2}=\dfrac{6{,}67\cdot10^{-11}\cdot50\cdot0{,}5}{2^2}=4{,}17\cdot10^{-10}\ \text{N}\ (-x)$$

$$\vec{F}=(-4{,}17\cdot10^{-10}\,\vec{i}+8{,}34\cdot10^{-10}\,\vec{j})\ \text{N},\qquad |\vec{F}|=9{,}32\cdot10^{-10}\ \text{N}$$

**(b)** El trabajo del campo es $W=-\Delta E_p=E_{p,i}-E_{p,f}$. En el infinito $E_{p,f}=0$:

$$E_{p,i}=-\dfrac{Gm_1 m_3}{r_1}-\dfrac{Gm_2 m_3}{r_2}=-8{,}34\cdot10^{-10}-8{,}34\cdot10^{-10}=-1{,}67\cdot10^{-9}\ \text{J}$$

$$W=E_{p,i}-0=-1{,}67\cdot10^{-9}\ \text{J}$$

**(c)** El trabajo del campo es **negativo**: la fuerza gravitatoria es atractiva y se opone al alejamiento de $m_3$. Hay que aportar energía externa para llevar $m_3$ al infinito.

## Ejercicio 2

### Enunciado

Una sonda de $1500\ \text{kg}$ orbita Saturno en trayectoria circular, con una revolución cada $32\ \text{horas}$. Calcule:

**(a)** La velocidad orbital y el radio de la órbita.

**(b)** Las energías cinética, potencial gravitatoria y total.

**(c)** La energía mínima para que la sonda abandone el campo gravitatorio de Saturno.

### Solución explicada

**(a)** De la tercera ley de Kepler, $T^2=\dfrac{4\pi^2 r^3}{GM_S}$:

$$r=\left(\dfrac{GM_S\,T^2}{4\pi^2}\right)^{1/3}=\left(\dfrac{6{,}67\cdot10^{-11}\cdot5{,}68\cdot10^{26}\cdot(1{,}152\cdot10^{5})^2}{4\pi^2}\right)^{1/3}=2{,}34\cdot10^{8}\ \text{m}$$

$$v=\dfrac{2\pi r}{T}=\sqrt{\dfrac{GM_S}{r}}=1{,}27\cdot10^{4}\ \text{m/s}$$

**(b)**

$$E_c=\dfrac12 m v^2=\dfrac12\cdot1500\cdot(1{,}27\cdot10^{4})^2=1{,}22\cdot10^{11}\ \text{J}$$

$$E_p=-\dfrac{GM_S m}{r}=-2{,}43\cdot10^{11}\ \text{J}$$

$$E=E_c+E_p=-1{,}22\cdot10^{11}\ \text{J}\ \left(=-E_c\right)$$

**(c)** La energía mínima para escapar es la que lleva la energía total a cero:

$$E_{min}=0-E=+1{,}22\cdot10^{11}\ \text{J}$$

## Ejercicio 3

### Enunciado

Una carga situada en un punto del plano $XY$ genera en el origen un potencial de $-180\ \text{V}$ y un campo eléctrico de módulo $60\ \text{V/m}$.

**(a)** Calcule el valor de la carga y su distancia al origen.

**(b)** Esa carga ejerce fuerza sobre una segunda carga que se mueve desde el origen hasta el infinito; el trabajo de la fuerza eléctrica es $900\ \text{nJ}$. Calcule la segunda carga.

**(c)** Razone la relación entre el signo del trabajo y los signos de ambas cargas.

*(Nota del corrector: el valor del campo se perdió en la digitalización; se reconstruye $|\vec{E}|=60\ \text{V/m}$, coherente con los datos. El apartado b no depende de ese valor.)*

### Solución explicada

**(a)** Para una carga puntual, $V=\dfrac{Kq}{r}$ y $E=\dfrac{K|q|}{r^2}$, de modo que $\dfrac{|V|}{E}=r$:

$$r=\dfrac{|V|}{E}=\dfrac{180}{60}=3\ \text{m}$$

$$q=\dfrac{V\,r}{K}=\dfrac{-180\cdot3}{9\cdot10^{9}}=-6\cdot10^{-8}\ \text{C}=-60\ \text{nC}$$

La carga es negativa (coherente con $V<0$), a $3\ \text{m}$ del origen.

**(b)** El trabajo de la fuerza eléctrica al llevar $q_2$ del origen al infinito ($V_\infty=0$):

$$W=q_2\,(V_{origen}-V_\infty)=q_2\cdot(-180)\Rightarrow q_2=\dfrac{900\cdot10^{-9}}{-180}=-5\cdot10^{-9}\ \text{C}=-5\ \text{nC}$$

**(c)** Ambas cargas son **negativas**: se repelen. Al alejarse $q_2$ hacia el infinito, la fuerza eléctrica actúa a favor del desplazamiento, por eso el trabajo es **positivo**. (Si tuvieran signos opuestos, se atraerían y el trabajo sería negativo.)

## Ejercicio 4

### Enunciado

Dos hilos conductores rectilíneos, paralelos e infinitos, están en el plano $XY$; uno sobre el eje $OX$ con $I_1=200\ \text{mA}$ (sentido $+x$) y el segundo paralelo a $20\ \text{cm}$.

**(a)** Intensidad (valor y sentido) del segundo hilo para anular el campo en el punto $A$ (equidistante, a $10\ \text{cm}$ de cada hilo).

**(b)** Intensidad para anular el campo en el punto $B$ (fuera, a $10\ \text{cm}$ del primer hilo por el lado opuesto al segundo).

**(c)** Si $I_2=I_1$ pero de sentido opuesto, campo magnético resultante en el punto $C$, equidistante de ambos.

*(Nota del corrector: las posiciones exactas de $A$, $B$ y $C$ de la figura no se conservaron; se reconstruyen de forma coherente con el enunciado.)*

### Solución explicada

El módulo del campo de un hilo recto a distancia $d$ es $B=\dfrac{\mu_0 I}{2\pi d}$.

**(a)** En $A$ (punto medio, $d_1=d_2=0{,}10\ \text{m}$), para dos hilos **paralelos con corrientes del mismo sentido** los campos en el punto medio son opuestos. Se anulan si son de igual módulo:

$$\dfrac{\mu_0 I_1}{2\pi d_1}=\dfrac{\mu_0 I_2}{2\pi d_2}\Rightarrow I_2=I_1=200\ \text{mA}\ (\text{mismo sentido},\ +x)$$

**(b)** En $B$ (fuera de ambos, a $0{,}10\ \text{m}$ del hilo 1 y a $0{,}30\ \text{m}$ del hilo 2). Fuera, los campos se anulan si las corrientes son de **sentidos opuestos** y:

$$\dfrac{I_1}{0{,}10}=\dfrac{I_2}{0{,}30}\Rightarrow I_2=3I_1=600\ \text{mA}\ (\text{sentido opuesto},\ -x)$$

**(c)** En $C$ (punto medio, $0{,}10\ \text{m}$ de cada hilo) con $I_2=I_1$ de **sentido opuesto**, los campos se suman:

$$B_C=2\cdot\dfrac{\mu_0 I_1}{2\pi d}=2\cdot\dfrac{2\cdot10^{-7}\cdot0{,}2}{0{,}10}=8\cdot10^{-7}\ \text{T}$$

perpendicular al plano que contiene los hilos (dirección $\pm\vec{k}$ según los sentidos).

## Ejercicio 5

### Enunciado

Una onda armónica transversal viaja por una cuerda hacia $-x$. Dos puntos $A$ ($x_A=0\ \text{m}$) y $B$ ($x_B=0{,}6\ \text{m}$) oscilan en fase y cortan el eje cada $0{,}06\ \text{s}$; ningún otro punto entre ellos está en fase. Inicialmente $A$ y $B$ tienen elongación $+0{,}005\ \text{m}$ y velocidad nula.

**(a)** Escriba la ecuación de la onda.

**(b)** Calcule la velocidad de propagación.

**(c)** Determine la velocidad transversal del punto $x=0{,}3\ \text{m}$ en función del tiempo.

### Solución explicada

Pasar por el eje cada $0{,}06\ \text{s}$ es medio periodo: $T=0{,}12\ \text{s}$. Al ser $A$ y $B$ los puntos en fase consecutivos, $\lambda=0{,}6\ \text{m}$.

$$\omega=\dfrac{2\pi}{T}=\dfrac{2\pi}{0{,}12}=52{,}4\ \text{rad/s},\qquad k=\dfrac{2\pi}{\lambda}=\dfrac{2\pi}{0{,}6}=10{,}5\ \text{rad/m}$$

**(a)** Onda hacia $-x$ con elongación máxima en $t=0$ (coseno, $\varphi_0=0$):

$$y(x,t)=0{,}005\,\cos\!\left(52{,}4\,t+10{,}5\,x\right)\ \text{(SI)}$$

**(b)** $v=\dfrac{\lambda}{T}=\dfrac{0{,}6}{0{,}12}=5\ \text{m/s}$ (en sentido $-x$).

**(c)** La velocidad transversal es $v_y=\dfrac{\partial y}{\partial t}=-0{,}005\cdot52{,}4\,\text{sen}(52{,}4\,t+10{,}5\,x)$. En $x=0{,}3\ \text{m}$, $k x=10{,}5\cdot0{,}3=\pi$:

$$v_y=-0{,}262\,\text{sen}(52{,}4\,t+\pi)=0{,}262\,\text{sen}(52{,}4\,t)\ \text{m/s}$$

## Ejercicio 6

### Enunciado

Un observador está a $10\ \text{m}$ de un altavoz de potencia $200\ \text{W}$.

**(a)** Calcule la intensidad sonora en ese punto.

**(b)** ¿A qué distancia debe situarse para que el nivel de intensidad sea $80\ \text{dB}$?

**(c)** ¿Por qué factor debe disminuirse la potencia para que a $10\ \text{m}$ el nivel sea $80\ \text{dB}$?

### Solución explicada

**(a)** La intensidad para emisión esférica:

$$I=\dfrac{P}{4\pi r^2}=\dfrac{200}{4\pi\cdot10^2}=0{,}159\ \text{W/m}^2$$

(Equivale a un nivel $\beta=10\log\dfrac{I}{I_0}\approx112\ \text{dB}$.)

**(b)** Nivel $80\ \text{dB}\Rightarrow I'=I_0\,10^{8}=10^{-4}\ \text{W/m}^2$:

$$r'=\sqrt{\dfrac{P}{4\pi I'}}=\sqrt{\dfrac{200}{4\pi\cdot10^{-4}}}=399\ \text{m}$$

**(c)** A $10\ \text{m}$ se quiere $I'=10^{-4}\ \text{W/m}^2$, que requiere potencia $P'=I'\,4\pi r^2=10^{-4}\cdot4\pi\cdot100=0{,}126\ \text{W}$:

$$\dfrac{P}{P'}=\dfrac{200}{0{,}126}\approx1{,}59\cdot10^{3}$$

Hay que reducir la potencia por un factor $\approx1600$.

## Ejercicio 7

### Enunciado

Una lámina de vidrio (índice $n_v$) está entre un líquido ($n_l$) y aire ($n_a$). La longitud de onda de la luz en el vidrio es dos tercios de la del aire. Al emitir luz desde el líquido, los rayos con incidencia superior a $36^\circ$ en la cara inferior no se refractan al aire por la cara superior.

**(a)** Calcule $n_v$.

**(b)** Calcule $n_l$.

**(c)** Calcule el tiempo que tarda un rayo, incidiendo normalmente, en recorrer la distancia $d$ de la figura.

*(Nota del corrector: el valor de $d$ no se conservó; se toma el espesor del vidrio $d=2\ \text{cm}$ para el cálculo numérico.)*

### Solución explicada

**(a)** Como $\lambda_v=\dfrac{\lambda_a}{n_v}$ y $\lambda_v=\dfrac23\lambda_a$:

$$n_v=\dfrac{1}{2/3}=\dfrac32=1{,}5$$

**(b)** A $36^\circ$ de incidencia desde el líquido, el rayo emerge rasante ($90^\circ$) al aire por la cara superior. Aplicando Snell en cadena líquido $\to$ vidrio $\to$ aire, el vidrio se cancela:

$$n_l\,\text{sen}\,36^\circ=n_a\,\text{sen}\,90^\circ\Rightarrow n_l=\dfrac{1}{\text{sen}\,36^\circ}=1{,}70$$

**(c)** Con incidencia normal el rayo no se desvía; en el vidrio su velocidad es $v=\dfrac{c}{n_v}$. Recorriendo un espesor $d=2\ \text{cm}$:

$$t=\dfrac{d}{v}=\dfrac{n_v\,d}{c}=\dfrac{1{,}5\cdot0{,}02}{3\cdot10^{8}}=1{,}0\cdot10^{-10}\ \text{s}$$

## Ejercicio 8

### Enunciado

Con una lente convergente de distancia focal $15\ \text{cm}$ se quiere obtener una imagen de tamaño doble del objeto.

**(a)** Posiciones de objeto e imagen si la imagen es derecha (con trazado de rayos).

**(b)** Posiciones si la imagen es invertida (con trazado de rayos).

**(c)** Razone la naturaleza (real/virtual) de la imagen en cada caso.


### Esquema para el apartado gráfico

![Trazado de rayos para una lente divergente y un espejo cóncavo](/assets/latex/pau-fisica-optics.svg)
### Solución explicada

Usamos $\dfrac{1}{s'}-\dfrac{1}{s}=\dfrac{1}{f'}$ y $m=\dfrac{s'}{s}$ (objeto a la izquierda, $s<0$).

**(a) Imagen derecha y doble:** $m=+2\Rightarrow s'=2s$. Entonces:

$$\dfrac{1}{2s}-\dfrac{1}{s}=\dfrac{1}{f'}\Rightarrow-\dfrac{1}{2s}=\dfrac{1}{f'}\Rightarrow s=-\dfrac{f'}{2}=-7{,}5\ \text{cm},\quad s'=-15\ \text{cm}$$

Objeto a $7{,}5\ \text{cm}$; imagen a $15\ \text{cm}$ del **mismo lado** (virtual).

**(b) Imagen invertida y doble:** $m=-2\Rightarrow s'=-2s$:

$$\dfrac{1}{-2s}-\dfrac{1}{s}=\dfrac{1}{f'}\Rightarrow-\dfrac{3}{2s}=\dfrac{1}{f'}\Rightarrow s=-\dfrac{3f'}{2}=-22{,}5\ \text{cm},\quad s'=+45\ \text{cm}$$

Objeto a $22{,}5\ \text{cm}$; imagen real a $45\ \text{cm}$ al otro lado.

**(c)** En (a) $s'<0$: imagen **virtual**, derecha (objeto dentro de la focal). En (b) $s'>0$: imagen **real**, invertida (objeto entre $f$ y $2f$).

## Ejercicio 9

### Enunciado

Al incidir sobre un material luz de $520\ \text{nm}$ se liberan electrones con potencial de frenado $0{,}5\ \text{V}$. Calcule:

**(a)** El trabajo de extracción.

**(b)** La máxima longitud de onda que provoca efecto fotoeléctrico.

**(c)** La energía cinética máxima de los electrones con $\lambda=280\ \text{nm}$.

### Solución explicada

**(a)** La ecuación de Einstein es $\dfrac{hc}{\lambda}=W+E_{c,\max}$, con $E_{c,\max}=eV_{frenado}$:

$$W=\dfrac{hc}{\lambda}-eV=\dfrac{6{,}63\cdot10^{-34}\cdot3\cdot10^{8}}{520\cdot10^{-9}}-1{,}6\cdot10^{-19}\cdot0{,}5$$

$$W=3{,}83\cdot10^{-19}-0{,}80\cdot10^{-19}=3{,}03\cdot10^{-19}\ \text{J}=1{,}89\ \text{eV}$$

**(b)** La longitud de onda umbral cumple $W=\dfrac{hc}{\lambda_{\max}}$:

$$\lambda_{\max}=\dfrac{hc}{W}=\dfrac{6{,}63\cdot10^{-34}\cdot3\cdot10^{8}}{3{,}03\cdot10^{-19}}=6{,}58\cdot10^{-7}\ \text{m}=658\ \text{nm}$$

**(c)** Con $\lambda=280\ \text{nm}$:

$$E_{c,\max}=\dfrac{hc}{\lambda}-W=\dfrac{6{,}63\cdot10^{-34}\cdot3\cdot10^{8}}{280\cdot10^{-9}}-3{,}03\cdot10^{-19}=4{,}08\cdot10^{-19}\ \text{J}=2{,}55\ \text{eV}$$

## Ejercicio 10

### Enunciado

Al cabo de $150\ \text{días}$, la actividad de una muestra de $10^{20}$ átomos de cierto elemento ha descendido un $40\%$.

**(a)** ¿Cuál es la constante de desintegración?

**(b)** ¿Cuál es el periodo de semidesintegración?

**(c)** ¿Cuál será la actividad y cuántos átomos quedarán al cabo de esos $150\ \text{días}$?

### Solución explicada

Como $A=\lambda N$, el cociente $A/A_0=N/N_0=e^{-\lambda t}=0{,}6$.

**(a)** $$\lambda=-\dfrac{\ln(0{,}6)}{t}=\dfrac{0{,}511}{150}=3{,}41\cdot10^{-3}\ \text{día}^{-1}=3{,}94\cdot10^{-8}\ \text{s}^{-1}$$

**(b)** $$T_{1/2}=\dfrac{\ln2}{\lambda}=\dfrac{0{,}693}{3{,}41\cdot10^{-3}}=204\ \text{días}$$

**(c)** Átomos restantes: $N=0{,}6\,N_0=6\cdot10^{19}$. Actividad:

$$A=\lambda N=3{,}94\cdot10^{-8}\ \text{s}^{-1}\cdot6\cdot10^{19}=2{,}36\cdot10^{12}\ \text{Bq}$$
