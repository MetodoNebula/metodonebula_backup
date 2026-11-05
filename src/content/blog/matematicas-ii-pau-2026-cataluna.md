---
title: Matemáticas II · PAU 2026 · Cataluña — examen resuelto
seoTitle: Matemáticas II · PAU 2026 · Cataluña — examen resuelto
date: 2026-10-10
updated: 2026-11-05
description: Examen Matemáticas II · PAU 2026 · Cataluña resuelto paso a paso con planteamientos, cálculos y comprobaciones para preparar la Selectividad.
tag: Matemáticas II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: como-preparar-pau-matematicas-ii,pau-matematicas-matrices-determinantes-gauss,pau-matematicas-integrales-areas
image: /favicon.svg
---

Este examen resuelto conserva el enunciado y desarrolla cada apartado. Úsalo primero a contrarreloj y compáralo después con el razonamiento, no solo con el resultado final.

**Convocatoria:** ordinaria, serie 1. **Examen:** ejercicios 1, 2 y 3 obligatorios; en el 4 se elige entre A y B.

## Ejercicio 1 · Continuidad, áreas y tangentes

### Enunciado

Trabajamos con la función a trozos

$$
f(x)=\begin{cases}
5e^{2x},&x\leq 0,\\
(x+m)^2+1,&0<x<2,\\
1,&x\geq 2,
\end{cases}
$$

donde $m$ es un número real.

**a) (1 punto)** Encuentra el valor de $m$ para que no haya ningún salto en la gráfica y la función sea continua en todo su dominio.

**b) (1 punto)** Si $m=-2$, dibuja un esquema de la gráfica y calcula el área encerrada entre la función, el eje horizontal y las rectas $x=-1$ y $x=3$.

**c) (0,5 puntos)** También para $m=-2$, localiza un punto donde la tangente tenga la misma inclinación que $y=-2x$ y escribe la ecuación de esa tangente.

### Solución

**a) Comprobamos dónde se unen los trozos.** Cada expresión es continua dentro de su intervalo, así que solo necesitamos estudiar $x=0$ y $x=2$.

En $x=0$, el trozo izquierdo vale $5$ y el límite por la derecha es $m^2+1$. Para que coincidan,

$$5=m^2+1\quad\Longrightarrow\quad m=2\ \text{o}\ m=-2.$$

En $x=2$, el límite desde la izquierda vale $(2+m)^2+1$ y desde la derecha, $1$. Debemos imponer

$$(2+m)^2+1=1\quad\Longrightarrow\quad m=-2.$$

Este es el único valor que satisface las dos condiciones: $\boxed{m=-2}$.

**b) Calculamos el área por tramos.** Al sustituir $m=-2$ tenemos

$$f(x)=\begin{cases}5e^{2x},&x\leq0,\\(x-2)^2+1,&0<x<2,\\1,&x\geq2.\end{cases}$$

La gráfica empieza con una exponencial creciente hasta $(0,5)$; después sigue una parábola decreciente que llega a $(2,1)$; a partir de ahí continúa como una recta horizontal a altura $1$. Como los tres tramos están por encima del eje $OX$, sumamos directamente sus áreas:

$$\begin{aligned}
A_1&=\int_{-1}^{0}5e^{2x}\,dx=\left[\frac52e^{2x}\right]_{-1}^0=\frac52(1-e^{-2}),\\[3pt]
A_2&=\int_0^2\big((x-2)^2+1\big)\,dx
=\left[\frac{(x-2)^3}{3}+x\right]_0^2=\frac{14}{3},\\[3pt]
A_3&=\int_2^3 1\,dx=1.
\end{aligned}$$

Por tanto,

$$\boxed{A=\frac52(1-e^{-2})+\frac{14}{3}+1=\frac{49-15e^{-2}}{6}\approx7{,}83\ \text{u}^2}.$$

**c) Buscamos una pendiente igual a $-2$.** En la parte exponencial la derivada $10e^{2x}$ siempre es positiva; en la parte horizontal es cero. Por tanto, miramos el tramo parabólico:

$$f'(x)=2(x-2),\qquad 2(x-2)=-2\ \Longrightarrow\ x=1.$$

Para ese valor, $f(1)=2$. La recta que pasa por $(1,2)$ y tiene pendiente $-2$ cumple

$$y-2=-2(x-1)\quad\Longrightarrow\quad\boxed{y=-2x+4}.$$

## Ejercicio 2 · Sistemas y planos en el espacio

### Enunciado

Este sistema representa tres planos y depende del parámetro real $m$:

$$\begin{cases}
x+my+z=4,\\
x+3y+z=5,\\
mx+y+z=4.
\end{cases}$$

**a) (1 punto)** Estudia cuántas soluciones tiene según el valor de $m$.

**b) (1 punto)** Explica qué ocurre geométricamente con los planos en cada caso. Después, resuelve el sistema para $m=1$.

**c) (0,5 puntos)** Para $m=1$, ¿podemos incorporar una cuarta ecuación de modo que quede una única solución, concretamente $(3,\tfrac12,\tfrac12)$? Justifícalo.

### Solución

**a) Analizamos el determinante de la matriz de coeficientes.**

$$A=\begin{pmatrix}1&m&1\\1&3&1\\m&1&1\end{pmatrix},\qquad
\det A=(m-1)(m-3).$$

- Si $m\neq1,3$, el determinante no es cero y el sistema tiene **una única solución**.
- Si $m=1$, la primera y la tercera ecuación coinciden: $x+y+z=4$. La segunda ecuación es distinta e independiente, por lo que hay **infinitas soluciones**.
- Si $m=3$, las dos primeras ecuaciones tienen exactamente el mismo lado izquierdo pero distintos términos independientes: $x+3y+z=4$ y $x+3y+z=5$. Son incompatibles, así que **no hay solución**.

**b) Lo interpretamos con planos.** Para $m\neq1,3$, los tres se cruzan en un punto. Cuando $m=1$, dos planos coinciden y el tercero los corta en una recta. Cuando $m=3$, los dos primeros planos son paralelos y distintos, por lo que no puede existir un punto común a los tres.

Resolvemos el caso $m=1$:

$$\begin{cases}x+y+z=4,\\x+3y+z=5.\end{cases}$$

Restando las ecuaciones encontramos $2y=1$ y, por tanto, $y=\tfrac12$. Entonces $x+z=\tfrac72$. Si llamamos $t$ a $z$,

$$\boxed{(x,y,z)=\left(\frac72-t,\frac12,t\right),\quad t\in\mathbb R}.$$

**c) Añadimos una ecuación que fije un punto de la recta.** El punto propuesto ya pertenece a la recta anterior: para $t=\tfrac12$ se obtiene $(3,\tfrac12,\tfrac12)$. Basta incorporar

$$\boxed{z=\frac12}.$$

Con esta nueva condición, $z$ queda fijada, $y=\tfrac12$ y $x=3$. El sistema ampliado tiene exactamente esa solución.

## Ejercicio 3 · Sorteo, probabilidad y sonido en un concierto

### Enunciado

El ayuntamiento de Canet de Mar reparte mediante un sorteo **24 entradas gratis** para un concierto. Participan todos los vecinos aficionados al grupo, pero solo el **16 %** consigue una entrada en el sorteo. De quienes se quedan sin ella, **seis séptimas partes** intentan comprarla por internet. En esa compra, cada persona tiene un **25 % de probabilidad** de conseguirla.

**a) (0,75 puntos)** ¿Cuántos seguidores del grupo terminan teniendo entrada?

**b) (0,75 puntos)** Elegimos al azar a un seguidor que **no tiene entrada**. ¿Qué probabilidad hay de que hubiera intentado comprarla por internet?

**c) (1 punto)** Durante una canción de cinco minutos, el volumen de los gritos del público se modela con

$$S(t)=-t^3+12t^2-30t+90,\qquad0\leq t\leq5,$$

donde $S$ se mide en decibelios y $t$ en minutos. Si el nivel supera los **100 dB**, se encienden unas luces especiales. ¿Llegarán a encenderse? En caso afirmativo, indica aproximadamente en qué minuto empieza a suceder, redondeando a una décima.

### Solución

**a) Empezamos averiguando cuántos seguidores participan.** Los 24 ganadores representan el 16 % del total:

$$N=\frac{24}{0{,}16}=150.$$

Se quedan sin premio $150-24=126$ seguidores. De ellos, intentan comprar entrada

$$126\cdot\frac67=108.$$

El 25 % la consigue, de modo que por internet compran $108\cdot0{,}25=27$ entradas. Sumándolas a las sorteadas,

$$\boxed{24+27=51\ \text{personas con entrada}}.$$

**b) Consideramos únicamente a las personas sin entrada.** En total son $150-51=99$. De quienes lo intentaron por internet, no lograron comprarla $108-27=81$. La probabilidad condicional es

$$\boxed{P(\text{intentó comprar}\mid\text{sin entrada})=\frac{81}{99}=\frac9{11}\approx0{,}8182}.$$

Es decir, cerca del **81,82 %**.

**c) Buscamos el momento en que se llega a los 100 dB.** Restamos el umbral a la función:

$$D(t)=S(t)-100=-t^3+12t^2-30t-10.$$

Es continua porque es un polinomio. Además,

$$D(0)=-10<0,\qquad D(5)=15>0.$$

Por el teorema de Bolzano, en algún instante entre $0$ y $5$ se alcanza exactamente el valor $100$. Acotamos ese momento:

$$S(4)=98<100,\qquad S(4{,}2)=101{,}592>100.$$

La solución de $S(t)=100$ que pertenece al intervalo de la canción es $t\approx4{,}111$. Al pasar ese instante se supera el umbral y se activan las luces.

$$\boxed{t\approx4{,}1\ \text{minutos}}.$$

## Ejercicio 4A · diseño de un parque

### Enunciado

En un parque infantil se van a reservar dos zonas: una **circular** para una boca de riego y otra **cuadrada** para una caseta de herramientas. Ambas deben estar rodeadas por una barandilla. Tenemos **10 metros de barandilla en total** para los dos cerramientos.

¿Cómo hay que repartir esos 10 metros entre las dos zonas para que la suma de sus superficies sea la menor posible? Calcula también esa superficie mínima. **(2,5 puntos)**

### Solución

Llamamos $r$ al radio de la zona circular y $a$ al lado de la cuadrada. La cantidad total de barandilla se traduce en

$$2\pi r+4a=10\quad\Longrightarrow\quad a=\frac{5-\pi r}{2}.$$

La superficie conjunta es

$$S=\pi r^2+a^2=\pi r^2+\left(\frac{5-\pi r}{2}\right)^2.$$

Derivamos respecto a $r$ y buscamos el punto crítico:

$$\begin{aligned}
S'(r)&=2\pi r-\frac\pi2(5-\pi r)
=\frac\pi2\bigl((4+\pi)r-5\bigr),\\
S'(r)=0&\ \Longrightarrow\ \boxed{r=\frac5{4+\pi}}.
\end{aligned}$$

La segunda derivada es $S''(r)=\tfrac\pi2(4+\pi)>0$, así que este valor da un **mínimo**. El lado del cuadrado es

$$a=\frac{5-\pi\frac5{4+\pi}}2=\boxed{\frac{10}{4+\pi}}.$$

Ahora calculamos la cantidad de barandilla de cada zona:

$$\begin{aligned}
L_{\text{círculo}}&=2\pi r=\boxed{\frac{10\pi}{4+\pi}\approx4{,}40\ \text{m}},\\
L_{\text{cuadrado}}&=4a=\boxed{\frac{40}{4+\pi}\approx5{,}60\ \text{m}}.
\end{aligned}$$

La superficie mínima es

$$S_{\min}=\pi\left(\frac5{4+\pi}\right)^2+\left(\frac{10}{4+\pi}\right)^2
=\boxed{\frac{25}{4+\pi}\approx3{,}50\ \text{m}^2}.$$

## Ejercicio 4B · geometría de un tetraedro

### Enunciado

Considera estos tres puntos del espacio:

$$P=(1,0,-1),\qquad Q=(3,-2,0),\qquad R=(1,1,1).$$

**a) (0,75 puntos)** Calcula el plano que pasa por los tres puntos.

**b) (0,75 puntos)** Comprueba que el área del triángulo $PQR$ es $\frac{3\sqrt5}{2}$ unidades cuadradas.

**c) (1 punto)** Queremos añadir un cuarto punto $S=(x,y,z)$ y conseguir que el tetraedro $PQRS$ tenga **volumen 1**. Encuentra la condición que deben cumplir $x$, $y$ y $z$.

### Solución

**a) Encontramos una dirección perpendicular al plano.** Construimos dos vectores que están contenidos en él:

$$\overrightarrow{PQ}=(2,-2,1),\qquad\overrightarrow{PR}=(0,1,2).$$

Su producto vectorial es

$$\overrightarrow{PQ}\times\overrightarrow{PR}=(-5,-4,2).$$

Este es un vector normal al plano. Usando el punto $P$,

$$-5(x-1)-4y+2(z+1)=0.$$

Simplificamos y obtenemos

$$\boxed{\pi:\;-5x-4y+2z+7=0}.$$

**b) Calculamos el área mediante el producto vectorial.**

$$\begin{aligned}
\lVert\overrightarrow{PQ}\times\overrightarrow{PR}\rVert
&=\sqrt{(-5)^2+(-4)^2+2^2}=\sqrt{45}=3\sqrt5,\\
A_{PQR}&=\frac12\lVert\overrightarrow{PQ}\times\overrightarrow{PR}\rVert
=\boxed{\frac{3\sqrt5}{2}}.
\end{aligned}$$

**c) Utilizamos la fórmula del volumen.** Si $h$ es la distancia de $S$ al plano $PQR$,

$$1=\frac{A_{PQR}\,h}{3}=\frac{3\sqrt5\,h}{6}
\quad\Longrightarrow\quad h=\frac2{\sqrt5}.$$

La distancia desde $S=(x,y,z)$ al plano de la primera parte es

$$d(S,\pi)=\frac{|-5x-4y+2z+7|}{\sqrt{25+16+4}}
=\frac{|-5x-4y+2z+7|}{3\sqrt5}.$$

Para que la altura sea la calculada debe cumplirse

$$\frac{|-5x-4y+2z+7|}{3\sqrt5}=\frac2{\sqrt5}
\quad\Longrightarrow\quad|-5x-4y+2z+7|=6.$$

El valor absoluto produce dos planos posibles. Por tanto, los puntos válidos son **todos los que cumplan una de estas ecuaciones**:

$$\boxed{5x+4y-2z-1=0\quad\text{o}\quad5x+4y-2z-13=0}.$$

## Cómo usar este examen para preparar la PAU

Haz una primera vuelta sin consultar la solución. Al corregir, señala el primer paso que no supiste justificar y repítelo al día siguiente. Así conviertes un modelo de examen en una lista concreta de técnicas que debes entrenar.

Si quieres trabajar estos bloques con una ruta de práctica, explicaciones y seguimiento, tienes el [Campus de Método Nebula](/campus/).

