---
title: Física · PAU 2022 · Julio · Comunidad Valenciana — examen resuelto
seoTitle: PAU Física Comunidad Valenciana 2022 · Julio resuelta paso a paso
date: 2022-06-01
updated: 2026-11-05
description: Examen de Física de Comunidad Valenciana 2022 · Julio resuelto paso a paso para 2.º de Bachillerato.
tag: Física PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

El potencial gravitatorio a una distancia $r$ del centro de un planeta es $V=-9{,}1\cdot10^{8}\ \text{J/kg}$. La intensidad del campo en la superficie es $g_0=26\ \text{m/s}^2$ y el radio del planeta $R=7\cdot10^{4}\ \text{km}$. Deduce una relación que dé $r$ en función de $V$, $R$ y $g_0$, y calcula $r$.

### Solución explicada

El potencial gravitatorio y la gravedad superficial son:
$$V = -\dfrac{GM}{r}, \qquad g_0 = \dfrac{GM}{R^2} \;\Rightarrow\; GM = g_0 R^2$$
Sustituyendo $GM$ en el potencial:
$$V = -\dfrac{g_0 R^2}{r} \;\Rightarrow\; \boxed{r = -\dfrac{g_0 R^2}{V}}$$
Numéricamente:
$$r = -\dfrac{26\cdot(7\cdot10^{7})^2}{-9{,}1\cdot10^{8}} = 1{,}4\cdot10^{8}\ \text{m} = 1{,}4\cdot10^{5}\ \text{km}$$
(es decir, $r=2R$).

## Ejercicio 2

### Enunciado

Deduce la relación entre la energía mecánica de un satélite y el radio de su órbita circular. Dos satélites $A$ y $B$ de igual masa tienen energías mecánicas $E_A=-4\cdot10^{10}\ \text{J}$ y $E_B=-2\cdot10^{10}\ \text{J}$. Razona cuál tiene mayor energía cinética y cuál está más lejos del planeta.

### Solución explicada

En una órbita circular, la energía cinética y la mecánica son:
$$E_c = \dfrac{1}{2}\dfrac{GMm}{r}, \qquad E_p = -\dfrac{GMm}{r}, \qquad E = E_c + E_p = -\dfrac{GMm}{2r}$$
Luego **$E=-\dfrac{GMm}{2r}$**: cuanto mayor es el radio $r$, menos negativa (mayor) es $E$. Además $E_c=-E$, es decir $E_c=\dfrac{GMm}{2r}$.

Como $|E_A|>|E_B|$ ($E_A$ es más negativa):
- **Energía cinética:** $E_c=-E$, luego $E_{cA}=4\cdot10^{10}\ \text{J} > E_{cB}=2\cdot10^{10}\ \text{J}$. El satélite **A** tiene mayor energía cinética.
- **Distancia:** $r=-\dfrac{GMm}{2E}$; a $E$ menos negativa, mayor $r$. El satélite **B** ($E_B$ menos negativa) está **más lejos**.

## Ejercicio 3

### Enunciado

Una carga de $3\ \mu\text{C}$ entra con $\vec{v}=10^{4}\,\vec{i}\ \text{m/s}$ en una región con campo eléctrico $\vec{E}=10^{4}\,\vec{j}\ \text{N/C}$ y campo magnético $\vec{B}=(\vec{i}+\vec{k})\ \text{T}$. Determina las fuerzas eléctrica, magnética y total sobre la carga.

### Solución explicada

**Fuerza eléctrica:**
$$\vec{F}_E = q\vec{E} = 3\cdot10^{-6}\cdot10^{4}\,\vec{j} = 3\cdot10^{-2}\,\vec{j}\ \text{N}$$

**Fuerza magnética:** $\vec{F}_B = q\,\vec{v}\times\vec{B}$. Calculamos el producto vectorial:
$$\vec{v}\times\vec{B} = (10^{4}\,\vec{i})\times(\vec{i}+\vec{k}) = 10^{4}(\vec{i}\times\vec{i}+\vec{i}\times\vec{k}) = 10^{4}(\vec{0}-\vec{j}) = -10^{4}\,\vec{j}$$
$$\vec{F}_B = 3\cdot10^{-6}\cdot(-10^{4}\,\vec{j}) = -3\cdot10^{-2}\,\vec{j}\ \text{N}$$

**Fuerza total (Lorentz):**
$$\vec{F} = \vec{F}_E + \vec{F}_B = 3\cdot10^{-2}\,\vec{j} - 3\cdot10^{-2}\,\vec{j} = \vec{0}$$
La fuerza eléctrica y la magnética se cancelan: la fuerza total es nula (configuración tipo selector de velocidades).

## Ejercicio 4

### Enunciado

Un circuito en forma de $\sqsubset$ tiene una barra metálica que desliza sobre él; un campo magnético perpendicular al plano $xy$ atraviesa el circuito. Razona por qué se genera corriente inducida y cuál es su sentido (con un dibujo). Escribe la ley física en que te basas, indicando sus magnitudes.

### Solución explicada

Al deslizar la barra cambia el **área** encerrada por el circuito y, con ella, el **flujo magnético** $\Phi=\vec{B}\cdot\vec{S}=B\,S\cos\theta$. Una variación del flujo induce una fuerza electromotriz según la **ley de Faraday-Lenz**:
$$\varepsilon = -\dfrac{d\Phi}{dt}$$
donde $\Phi$ es el flujo, $t$ el tiempo y el signo negativo expresa la ley de Lenz. Para la barra de longitud $L$ que se mueve con velocidad $v$, $\dfrac{dS}{dt}=Lv$ y:
$$|\varepsilon| = B\,L\,v$$

**Sentido (ley de Lenz):** la corriente inducida se opone a la variación de flujo. Si al avanzar la barra aumenta el flujo saliente, la corriente inducida circula de modo que crea un campo entrante dentro del circuito (sentido horario visto desde donde sale $\vec{B}$); si el flujo saliente disminuye, el sentido es el contrario. En todo caso, el sentido es tal que la fuerza magnética sobre la barra ($\vec{F}=I\vec{L}\times\vec{B}$) se opone a su movimiento.

## Ejercicio 5

### Enunciado

Una onda transversal en una cuerda es $y(x,t)=a\,\text{sen}(2\pi b t - c x)$. ¿Qué magnitudes representan $a$, $b$ y $c$? ¿Cuáles son sus unidades en el SI? ¿Qué información aporta el signo negativo? ¿Qué magnitud representa el cociente $2\pi b/c$?

### Solución explicada

Comparando con la forma general $y=A\,\text{sen}(\omega t - k x)$:

- $a = A$ es la **amplitud**; unidad: metro (**m**).
- $2\pi b = \omega = 2\pi f$ es la pulsación, luego $b = f$ es la **frecuencia**; unidad: hercio (**Hz** $=\text{s}^{-1}$).
- $c = k = \dfrac{2\pi}{\lambda}$ es el **número de onda**; unidad: **rad·m$^{-1}$** (o m$^{-1}$).

El **signo negativo** ($-cx$) indica que la onda se propaga en el **sentido positivo del eje $x$**.

El cociente:
$$\dfrac{2\pi b}{c} = \dfrac{\omega}{k} = \lambda f = v$$
representa la **velocidad de propagación** de la onda (unidad m/s).

## Ejercicio 6

### Enunciado

En el fondo de una piscina de agua salada hay un foco luminoso. El rayo $A$ se refracta y sale al aire con ángulo de refracción $44^\circ$, pero el rayo $B$ no se refracta. Determina el índice de refracción $n$ del líquido y explica por qué el rayo $B$ no se refracta.

### Solución explicada

**Índice de refracción (rayo $A$):** aplicando la ley de Snell en la superficie agua$\to$aire, con $\theta_A$ el ángulo de incidencia del rayo $A$ dentro del agua (leído de la figura) y $44^\circ$ el de refracción en el aire:
$$n\,\text{sen}\,\theta_A = n_{aire}\,\text{sen}\,44^\circ \;\Rightarrow\; n = \dfrac{\text{sen}\,44^\circ}{\text{sen}\,\theta_A}$$
(Por ejemplo, si de la figura $\theta_A=30^\circ$, resultaría $n=\dfrac{\text{sen}\,44^\circ}{\text{sen}\,30^\circ}=1{,}39$.)

**Por qué el rayo $B$ no se refracta:** el rayo $B$ incide con un ángulo **mayor o igual que el ángulo límite** (crítico) $\theta_c$, definido por
$$\text{sen}\,\theta_c = \dfrac{n_{aire}}{n} = \dfrac{1}{n}$$
Para $\theta_B \ge \theta_c$ no hay rayo refractado: se produce **reflexión total interna**, de modo que el rayo $B$ vuelve al agua en lugar de salir al aire.

## Ejercicio 7

### Enunciado

Una persona sitúa sus gafas a $30\ \text{cm}$ de un objeto y obtiene sobre una pared una imagen enfocada a $2{,}7\ \text{m}$ de la gafa. ¿Qué potencia tiene la lente? ¿Es convergente o divergente? Razona si la persona es miope o hipermétrope.

### Solución explicada

La imagen se forma sobre una pared, luego es **real** ($s'>0$). Con el criterio de signos ($s<0$ para objeto real):
$$\dfrac{1}{s'}-\dfrac{1}{s} = \dfrac{1}{f'} \;\Rightarrow\; \dfrac{1}{f'} = \dfrac{1}{2{,}7}-\dfrac{1}{-0{,}30} = 0{,}37 + 3{,}33 = 3{,}70\ \text{m}^{-1}$$
$$P = \dfrac{1}{f'} = 3{,}70\ \text{D}, \qquad f' = 0{,}27\ \text{m}$$
La potencia es **positiva**: la lente es **convergente** (sólo una lente convergente forma imagen real de un objeto real sobre una pantalla).

Las lentes convergentes corrigen la **hipermetropía**, por lo que la persona es **hipermétrope**.

## Ejercicio 8

### Enunciado

Calcula la velocidad que debe tener una partícula para que su energía relativista sea el doble de su energía en reposo. ¿Sería posible que su velocidad fuera el doble de la calculada? Razónalo.

### Solución explicada

La energía total relativista es $E=\gamma m_0 c^2$ y la de reposo $E_0=m_0 c^2$. La condición $E=2E_0$ implica $\gamma=2$:
$$\gamma = \dfrac{1}{\sqrt{1-\dfrac{v^2}{c^2}}} = 2 \;\Rightarrow\; 1-\dfrac{v^2}{c^2}=\dfrac{1}{4} \;\Rightarrow\; v = c\sqrt{1-\dfrac{1}{4}} = \dfrac{\sqrt{3}}{2}c$$
$$v = 0{,}866\,c = 2{,}60\cdot10^{8}\ \text{m/s}$$

El doble de esa velocidad sería $2v=\sqrt{3}\,c \approx 1{,}73\,c > c$, lo cual **es imposible**: ninguna partícula con masa puede alcanzar o superar la velocidad de la luz en el vacío.

## Ejercicio 9

### Enunciado

Una sonda de $800\ \text{kg}$ orbita en círculo de radio $6500\ \text{km}$ alrededor de Venus con energía cinética $2\cdot10^{10}\ \text{J}$.

**(a)** Deduce la velocidad orbital y calcula la masa de Venus.

**(b)** Si Venus es esférico con densidad $\rho=5{,}24\ \text{g/cm}^3$, obtén la altura a la que la atracción gravitatoria sobre un cuerpo es un $36\%$ menor que en la superficie.

### Solución explicada

**(a)** De $E_c=\tfrac12 m v^2$:
$$v = \sqrt{\dfrac{2E_c}{m}} = \sqrt{\dfrac{2\cdot 2\cdot10^{10}}{800}} = 7{,}07\cdot10^{3}\ \text{m/s}$$
Para órbita circular $v=\sqrt{\dfrac{GM}{r}}$, luego:
$$M = \dfrac{v^2 r}{G} = \dfrac{(7{,}07\cdot10^{3})^2\cdot 6{,}5\cdot10^{6}}{6{,}67\cdot10^{-11}} = 4{,}87\cdot10^{24}\ \text{kg}$$

**(b)** El radio de Venus a partir de la densidad ($M=\rho\tfrac43\pi R_V^3$):
$$R_V = \left(\dfrac{3M}{4\pi\rho}\right)^{1/3} = \left(\dfrac{3\cdot 4{,}87\cdot10^{24}}{4\pi\cdot 5240}\right)^{1/3} = 6{,}05\cdot10^{6}\ \text{m}$$
La fuerza (y $g$) a distancia $d$ es $g\propto 1/d^2$. Un $36\%$ menor significa $g=0{,}64\,g_0$:
$$\dfrac{R_V^2}{d^2} = 0{,}64 \;\Rightarrow\; d = \dfrac{R_V}{\sqrt{0{,}64}} = \dfrac{6{,}05\cdot10^{6}}{0{,}8} = 7{,}57\cdot10^{6}\ \text{m}$$
$$h = d - R_V = 7{,}57\cdot10^{6}-6{,}05\cdot10^{6} = 1{,}51\cdot10^{6}\ \text{m} \approx 1514\ \text{km}$$

## Ejercicio 10

### Enunciado

Una carga $q_1=-5\ \mu\text{C}$ está en $A(3,-4)\ \text{m}$ y $q_2=4\ \mu\text{C}$ en $B(0,-5)\ \text{m}$.

**(a)** Calcula los campos de cada carga y el campo total en el origen $O(0,0)$. Represéntalos.

**(b)** Calcula el potencial total en $O$ y el trabajo para traer $Q=1\ \mu\text{C}$ desde el infinito hasta $O$ (potencial nulo en el infinito).

### Solución explicada

Distancias al origen: $r_1=\sqrt{3^2+4^2}=5\ \text{m}$, $r_2=5\ \text{m}$.

**(a)** Campo de $q_1$ (negativa, apunta de $O$ hacia $A$, dirección $(3,-4)/5$):
$$E_1 = k\dfrac{|q_1|}{r_1^2}=9\cdot10^{9}\dfrac{5\cdot10^{-6}}{25}=1800\ \text{N/C} \;\Rightarrow\; \vec{E}_1=(1080\,\vec{i}-1440\,\vec{j})\ \text{N/C}$$
Campo de $q_2$ (positiva, se aleja de $B$; dirección $O-B=(0,5)/5=(0,1)$):
$$E_2 = 9\cdot10^{9}\dfrac{4\cdot10^{-6}}{25}=1440\ \text{N/C} \;\Rightarrow\; \vec{E}_2=(0\,\vec{i}+1440\,\vec{j})\ \text{N/C}$$
Total:
$$\vec{E}=(1080\,\vec{i}+0\,\vec{j})\ \text{N/C}, \qquad |\vec{E}|=1080\ \text{N/C}$$

**(b)** Potencial:
$$V_O = k\dfrac{q_1}{r_1}+k\dfrac{q_2}{r_2} = \dfrac{9\cdot10^{9}}{5}(-5\cdot10^{-6}+4\cdot10^{-6}) = -1800\ \text{V}$$
Trabajo para traer $Q$ desde el infinito ($W_{ext}=Q\,V_O$):
$$W = Q\,V_O = 10^{-6}\cdot(-1800) = -1{,}8\cdot10^{-3}\ \text{J}$$

## Ejercicio 11

### Enunciado

Se quiere obtener de un objeto de $15\ \text{cm}$ una imagen invertida de $0{,}75\ \text{m}$ sobre una pantalla, con una lente convergente de $4\ \text{dioptrías}$.

**(a)** ¿Dónde hay que colocar el objeto y la pantalla respecto a la lente?

**(b)** Se cambia la lente por otra cuya distancia focal imagen es la mitad. ¿Cuál es su potencia? Si la distancia objeto-pantalla es $1{,}0\ \text{m}$, determina la menor distancia a la que hay que situar la lente respecto al objeto para enfocar en la pantalla.

### Solución explicada

**(a)** $f'=1/P=0{,}25\ \text{m}$. El aumento lateral: $m=\dfrac{y'}{y}=\dfrac{-0{,}75}{0{,}15}=-5$. Como $m=\dfrac{s'}{s}$ y $\dfrac{1}{s'}-\dfrac{1}{s}=\dfrac{1}{f'}$, con $s'=m\,s$:
$$\dfrac{1}{m\,s}-\dfrac{1}{s}=\dfrac{1}{f'} \;\Rightarrow\; s=\dfrac{f'\left(\tfrac{1}{m}-1\right)}{1}=f'\left(\dfrac{1}{m}-1\right)=0{,}25\left(\dfrac{1}{-5}-1\right)=-0{,}30\ \text{m}$$
$$s'=m\,s = -5\cdot(-0{,}30)=1{,}50\ \text{m}$$
El objeto se coloca a $30\ \text{cm}$ delante de la lente y la pantalla a $1{,}5\ \text{m}$ detrás.

**(b)** Nueva focal $f'_2=0{,}125\ \text{m}$, potencia $P_2=1/0{,}125=8\ \text{D}$. Con objeto y pantalla fijos a $D=1{,}0\ \text{m}$, si $p$ es la distancia lente-objeto y $q$ la lente-pantalla, $p+q=1{,}0$ y $\dfrac{1}{f'_2}=\dfrac{1}{p}+\dfrac{1}{q}$ (distancias positivas):
$$\dfrac{1}{p}+\dfrac{1}{q}=8, \quad p+q=1 \;\Rightarrow\; p\,q=0{,}125$$
$p$ y $q$ son raíces de $x^2 - x + 0{,}125=0$: $x=0{,}854\ \text{m}$ ó $x=0{,}146\ \text{m}$. La **menor** distancia lente-objeto es $p\approx 0{,}146\ \text{m}\approx 14{,}6\ \text{cm}$.

## Ejercicio 12

### Enunciado

Al incidir luz de $\lambda_1=550\ \text{nm}$ se obtiene una velocidad máxima de los electrones $v=296\ \text{km/s}$.

**(a)** Calcula el trabajo de extracción del metal (en eV) y la longitud de onda umbral.

**(b)** Calcula el momento lineal y la longitud de onda de De Broglie (en nm) de esos electrones.

### Solución explicada

**(a)** Energía cinética máxima:
$$E_c = \tfrac12 m v^2 = \tfrac12\cdot 9{,}1\cdot10^{-31}\cdot(2{,}96\cdot10^{5})^2 = 3{,}99\cdot10^{-20}\ \text{J} = 0{,}25\ \text{eV}$$
Por Einstein $\dfrac{hc}{\lambda_1}=W+E_c$:
$$W = \dfrac{hc}{\lambda_1}-E_c = \dfrac{6{,}63\cdot10^{-34}\cdot3\cdot10^{8}}{5{,}5\cdot10^{-7}}-3{,}99\cdot10^{-20} = 3{,}22\cdot10^{-19}\ \text{J} = 2{,}01\ \text{eV}$$
Longitud de onda umbral:
$$\lambda_0 = \dfrac{hc}{W} = \dfrac{6{,}63\cdot10^{-34}\cdot3\cdot10^{8}}{3{,}22\cdot10^{-19}} = 6{,}18\cdot10^{-7}\ \text{m} = 618\ \text{nm}$$

**(b)** Momento lineal:
$$p = m v = 9{,}1\cdot10^{-31}\cdot2{,}96\cdot10^{5} = 2{,}69\cdot10^{-25}\ \text{kg·m/s}$$
Longitud de onda de De Broglie:
$$\lambda_{dB} = \dfrac{h}{p} = \dfrac{6{,}63\cdot10^{-34}}{2{,}69\cdot10^{-25}} = 2{,}46\cdot10^{-9}\ \text{m} = 2{,}46\ \text{nm}$$
