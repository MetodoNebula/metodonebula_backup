---
title: Matemáticas II · PAU 2026 · Andalucía — examen resuelto
seoTitle: Matemáticas II · PAU 2026 · Andalucía — examen resuelto
date: 2026-10-18
updated: 2026-11-05
description: Examen Matemáticas II · PAU 2026 · Andalucía resuelto paso a paso con planteamientos, cálculos y comprobaciones para preparar la Selectividad.
tag: Matemáticas II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: como-preparar-pau-matematicas-ii,pau-matematicas-matrices-determinantes-gauss,pau-matematicas-integrales-areas
image: /favicon.svg
---

Este examen resuelto conserva el enunciado y desarrolla cada apartado. Úsalo primero a contrarreloj y compáralo después con el razonamiento, no solo con el resultado final.

**Convocatoria:** ordinaria. **Examen:** ejercicios 1 y 2 obligatorios; después se elige un ejercicio entre 3.1 y 3.2 y otro entre 4.1 y 4.2.

## Ejercicio 1 · Ventana de área máxima

### Enunciado

Queremos diseñar una ventana con un rectángulo en la parte inferior y un semicírculo encima. El contorno completo debe medir 8 metros. ¿Qué dimensiones harán que entre la mayor cantidad posible de luz? (2,5 puntos)

### Solución

Llamamos $x$ a la anchura del rectángulo, que también es el diámetro del semicírculo, e $y$ a su altura. El área total es la suma de la parte rectangular y la semicircular:

$$A(x,y)=xy+\frac12\pi\left(\frac x2\right)^2
=xy+\frac{\pi x^2}{8}.$$

El contorno incluye la base, los dos lados verticales y el arco del semicírculo. Por tanto,

$$x+2y+\frac{\pi x}{2}=8
\ \Longrightarrow\ y=4-\frac{2+\pi}{4}x.$$

Sustituimos esta relación en el área para trabajar con una sola variable:

$$\begin{aligned}A(x)&=x\left(4-\frac{2+\pi}{4}x\right)+\frac{\pi x^2}{8}\\
&=4x-\frac{4+\pi}{8}x^2.\end{aligned}$$

Derivamos e igualamos a cero:

$$A'(x)=4-\frac{4+\pi}{4}x=0
\ \Longrightarrow\ x=\frac{16}{4+\pi}.$$

Como $A''(x)=-(4+\pi)/4<0$, hemos encontrado un máximo. La altura del rectángulo se obtiene sustituyendo:

$$y=4-\frac{2+\pi}{4}\frac{16}{4+\pi}
=\frac8{4+\pi}.$$

**Dimensiones óptimas:** anchura $\boxed{x=16/(4+\pi)}$ metros y altura rectangular $\boxed{y=8/(4+\pi)}$ metros. El semicírculo tiene radio $x/2=8/(4+\pi)$ metros.

## Ejercicio 2 · Coplanaridad, área y volumen

### Enunciado

Dados $A=(1,2,0)$, $B=(2,m,1)$, $C=(3,4,2)$ y $D=(1,-1,m)$:

**a)** Busca los valores de $m$ con los que los cuatro puntos están en el mismo plano. (1,5 puntos)

**b)** Para $m=1$, calcula el área del triángulo $ABC$ y el volumen del tetraedro $ABCD$. (1 punto)

### Solución

**a)** Formamos dos vectores del plano de $A$, $B$ y $C$:

$$\overrightarrow{AB}=(1,m-2,1),\qquad \overrightarrow{AC}=(2,2,2).$$

Para comprobar que $D$ está en ese plano podemos calcular el producto mixto con $\overrightarrow{AD}=(0,-3,m)$:

$$\det\begin{pmatrix}1&m-2&1\\2&2&2\\0&-3&m\end{pmatrix}=0.$$

Al desarrollar el determinante resulta una expresión proporcional a $m(3-m)$. Por tanto, los cuatro puntos son coplanarios si

$$\boxed{m=0\quad\text{o}\quad m=3}.$$

**b)** Con $m=1$:

$$\overrightarrow{AB}=(1,-1,1),\qquad
\overrightarrow{AC}=(2,2,2),\qquad
\overrightarrow{AD}=(0,-3,1).$$

Para el triángulo, calculamos el producto vectorial

$$\overrightarrow{AB}\times\overrightarrow{AC}=(-4,0,4).$$

El área es la mitad de su módulo:

$$S_{ABC}=\frac12\sqrt{(-4)^2+0^2+4^2}=\boxed{2\sqrt2\ \text{u}^2}.$$

Para el tetraedro usamos un sexto del valor absoluto del producto mixto:

$$V_{ABCD}=\frac16\left|\det\begin{pmatrix}1&-1&1\\2&2&2\\0&-3&1\end{pmatrix}\right|
=\frac{|4|}{6}=\boxed{\frac23\ \text{u}^3}.$$


## Ejercicio 3.1 · Discusión de un sistema

### Enunciado

Estudia este sistema en función del parámetro real $a$:

$$\begin{cases}
3x-y=a^2,\\
(1-a)y+2z=0,\\
4y+(3-a)z=a-5.
\end{cases}$$

**a)** Indica para qué valores de $a$ hay una solución, infinitas soluciones o ninguna. (1,75 puntos)

**b)** Resuelve el sistema cuando $a=0$. (0,75 puntos)

### Solución

**a)** La matriz de coeficientes es

$$M=\begin{pmatrix}3&-1&0\\0&1-a&2\\0&4&3-a\end{pmatrix}.$$

Calculamos su determinante:

$$\det M=3\bigl[(1-a)(3-a)-8\bigr]
=3(a^2-4a-5)=3(a-5)(a+1).$$

Para $a\neq-1,5$, el determinante no se anula y el sistema tiene **solución única**.

Si $a=-1$, las dos últimas ecuaciones tienen el mismo lado izquierdo salvo un factor, pero distintos términos independientes:

$$2y+2z=0,\qquad4y+4z=-6.$$

Son incompatibles. Por tanto, para $a=-1$ **no hay solución**.

Si $a=5$, las dos últimas ecuaciones son opuestas:

$$-4y+2z=0,\qquad4y-2z=0.$$

La tercera no añade ninguna condición nueva, y el sistema tiene **infinitas soluciones**.

$$\boxed{\begin{array}{ll}
a\neq-1,5:&\text{una solución},\\
a=-1:&\text{ninguna solución},\\
a=5:&\text{infinitas soluciones}.
\end{array}}$$

**b)** Al poner $a=0$ queda

$$\begin{cases}3x-y=0,\\y+2z=0,\\4y+3z=-5.\end{cases}$$

De $y=-2z$, sustituimos en la tercera: $4(-2z)+3z=-5$, luego $-5z=-5$ y $z=1$. Así, $y=-2$ y $3x=-2$. Finalmente,

$$\boxed{(x,y,z)=\left(-\frac23,-2,1\right)}.$$

## Ejercicio 3.2 · Propiedades de determinantes

### Enunciado

Tenemos una matriz con $\det A=-2$:

$$A=\begin{pmatrix}\alpha&\beta&1\\2&\alpha&\beta\\3&4&\alpha\end{pmatrix}.$$

**a)** Calcula sin desarrollar directamente este determinante (1,5 puntos):

$$D=\begin{vmatrix}-3&-4&-\alpha\\\alpha-2&\beta-\alpha&1-\beta\\8&4\alpha&4\beta\end{vmatrix}.$$

**b)** Obtén $\det(A^{-1}A^tA^2)$. (1 punto)

### Solución

**a)** Primero sacamos factor común $4$ de la tercera fila:

$$D=4\begin{vmatrix}-3&-4&-\alpha\\\alpha-2&\beta-\alpha&1-\beta\\2&\alpha&\beta\end{vmatrix}.$$

Después sumamos la tercera fila a la segunda, una operación que no cambia el determinante:

$$D=4\begin{vmatrix}-3&-4&-\alpha\\\alpha&\beta&1\\2&\alpha&\beta\end{vmatrix}.$$

Sacamos $-1$ de la primera fila y reordenamos las filas para recuperar $A$. En total aparecen tres cambios de signo (uno por el factor $-1$ y dos por intercambios):

$$D=4(-1)^3\det A=-4(-2)=\boxed{8}.$$

**b)** Utilizamos $\det(BC)=\det B\det C$, $\det A^t=\det A$ y $\det A^{-1}=1/\det A$:

$$\begin{aligned}
\det(A^{-1}A^tA^2)&=\frac1{\det A}\cdot\det A\cdot(\det A)^2\\
&=(\det A)^2=(-2)^2=\boxed{4}.
\end{aligned}$$


## Ejercicio 4.1 · Primitiva con una tangente dada

### Enunciado

Sea

$$f(x)=\frac{8e^x-4e^{2x}}{1+e^x}.$$

Encuentra una primitiva $F$ cuya gráfica, cuando $x=0$, tenga como recta tangente $y=2x+12\ln2$. (2,5 puntos)

### Solución

Buscamos la integral de $f$. Hacemos $t=e^x$; entonces $dt=e^x\,dx$ y $dx=dt/t$:

$$\begin{aligned}
\int f(x)\,dx
&=\int\frac{8t-4t^2}{1+t}\frac{dt}{t}\\
&=\int\frac{8-4t}{1+t}\,dt
=\int\left(\frac{12}{1+t}-4\right)dt\\
&=12\ln(1+t)-4t+C.
\end{aligned}$$

Volviendo a $x$ obtenemos $F(x)=12\ln(1+e^x)-4e^x+C$.

Como la tangente pasa por $(0,12\ln2)$, debemos exigir $F(0)=12\ln2$:

$$12\ln2-4+C=12\ln2\ \Longrightarrow\ C=4.$$

Comprobamos también la pendiente: $F'(0)=f(0)=(8-4)/(1+1)=2$, justo la de la recta dada. La primitiva buscada es

$$\boxed{F(x)=12\ln(1+e^x)-4e^x+4}.$$

## Ejercicio 4.2 · Monedas y probabilidad condicionada

### Enunciado

Hay dos bolsas: la primera contiene 2 monedas de oro y 3 de plata; la segunda, 6 de oro y 3 de plata. Sacamos al azar una moneda de la primera bolsa y la trasladamos a la segunda. Luego sacamos una de la segunda bolsa.

**a)** Si la moneda trasladada fue de plata, ¿cuál es la probabilidad de sacar después una de oro? (0,75 puntos)

**b)** Si la segunda moneda ha sido de oro, ¿qué probabilidad hay de que la trasladada fuera de plata? (1,75 puntos)

### Solución

Llamamos $P_1$ al suceso «primera moneda de plata» y $O_2$ a «segunda moneda de oro».

**a)** Al trasladar plata, en la segunda bolsa quedan 6 de oro y 4 de plata, de modo que

$$\boxed{P(O_2\mid P_1)=\frac6{10}=0{,}6}.$$

**b)** Para aplicar Bayes necesitamos la probabilidad de que la segunda moneda sea de oro. Si la primera fue de oro, la segunda bolsa tendrá 7 monedas de oro y 3 de plata:

$$\begin{aligned}P(O_2)
&=P(\text{primera oro})P(O_2\mid\text{primera oro})+P(P_1)P(O_2\mid P_1)\\
&=\frac25\frac7{10}+\frac35\frac6{10}
=\frac{32}{50}=0{,}64.\end{aligned}$$

Ahora aplicamos Bayes:

$$P(P_1\mid O_2)=\frac{P(P_1)P(O_2\mid P_1)}{P(O_2)}
=\frac{\frac35\frac6{10}}{\frac{32}{50}}
=\frac{18}{32}=\boxed{\frac9{16}=0{,}5625}.$$

## Cómo usar este examen para preparar la PAU

Haz una primera vuelta sin consultar la solución. Al corregir, señala el primer paso que no supiste justificar y repítelo al día siguiente. Así conviertes un modelo de examen en una lista concreta de técnicas que debes entrenar.

Si quieres trabajar estos bloques con una ruta de práctica, explicaciones y seguimiento, tienes el [Campus de Método Nebula](/campus/).

