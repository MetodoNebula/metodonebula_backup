---
title: Matemáticas II · PAU 2026 · País Vasco — examen resuelto
seoTitle: Matemáticas II · PAU 2026 · País Vasco — examen resuelto
date: 2026-09-30
updated: 2026-11-05
description: Examen Matemáticas II · PAU 2026 · País Vasco resuelto paso a paso con planteamientos, cálculos y comprobaciones para preparar la Selectividad.
tag: Matemáticas II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: como-preparar-pau-matematicas-ii,pau-matematicas-matrices-determinantes-gauss,pau-matematicas-integrales-areas
image: /favicon.svg
---

Este examen resuelto conserva el enunciado y desarrolla cada apartado. Úsalo primero a contrarreloj y compáralo después con el razonamiento, no solo con el resultado final.

**Convocatoria:** ordinaria. **Examen:** cinco ejercicios; los ejercicios 4 y 5 ofrecen dos opciones.

## Ejercicio 1 · Distribución normal y velocidades moleculares

### Enunciado

A 300 K, una componente de la velocidad de una molécula de nitrógeno se modeliza mediante $X\sim N(0,298)$, donde 298 es la desviación típica. Sea $Z\sim N(0,1)$.

**a)** Calcula la probabilidad de que la velocidad esté entre $-300$ y $300$. 

**b)** ¿Cuál es la probabilidad de que tome un valor entre $-600$ y $-300$?

**c)** Si la desviación típica de una componente de la velocidad depende de la masa molecular y una molécula de argón tiene mayor masa que una de nitrógeno, compara la probabilidad de que dicha componente quede entre $-300$ y $300$ en ambos gases.

### Solución

**a)** Tipificamos mediante $Z=X/298$:

$$\begin{aligned}
P(|X|<300)&=P\left(-\frac{300}{298}<Z<\frac{300}{298}\right)\\
&\approx P(-1{,}01<Z<1{,}01)\\
&=2P(Z<1{,}01)-1\\
&=2\cdot0{,}8438-1=\boxed{0{,}6876}.
\end{aligned}$$

**b)** De forma parecida,

$$\begin{aligned}
P(-600<X<-300)&=P(-2{,}01<Z<-1{,}01)\\
&=P(Z<2{,}01)-P(Z<1{,}01)\\
&=0{,}9778-0{,}8438=\boxed{0{,}134}.
\end{aligned}$$

**c)** La desviación típica de la componente de velocidad disminuye al aumentar la masa molecular. Como el argón es más pesado, $\sigma_A<\sigma_N$ y, por tanto, $300/\sigma_A>300/\sigma_N$. Eso implica

$$P(|X_A|<300)=P\left(|Z|<\frac{300}{\sigma_A}\right)
> P\left(|Z|<\frac{300}{\sigma_N}\right)=P(|X_N|<300).$$

Es **más probable** que la componente de la velocidad del argón quede dentro del intervalo indicado.

## Ejercicio 2 · Sistema con parámetro

### Enunciado

En un sistema de tres incógnitas con parámetro $a\ne0$, la matriz de coeficientes es

$$A=\begin{pmatrix}1&a&0\\1&a&1\\a-2&a&a-1\end{pmatrix}.$$

**a)** Analiza cuándo el sistema puede tener más de una solución. Para $a=3$, el término independiente es $(1,3,5)^T$; clasifica el sistema en ese caso.

**b)** Resuelve el sistema correspondiente a $a=3$.

### Solución

**a)** Calculamos

$$\det A=a(a-3).$$

Como se toma $a\ne0$, para $a\ne3$ hay solución única. En cambio, para $a=3$ la matriz ampliada es

$$\left(\begin{array}{ccc|c}1&3&0&1\\1&3&1&3\\1&3&2&5\end{array}\right).$$

Aquí las matrices de coeficientes y ampliada tienen rango 2, que es menor que el número de incógnitas. Así que el sistema es **compatible indeterminado** y admite infinitas soluciones.

**b)** Restando la primera fila de la segunda, vemos que $z=2$. La primera ecuación es $x+3y=1$; la tercera no añade información. Si damos a $x$ un valor libre $t$, entonces

$$\boxed{x=t,\qquad y=\frac{1-t}{3},\qquad z=2,\quad t\in\mathbb R}.$$

## Ejercicio 3 · Dos parábolas y área entre curvas

### Enunciado

Considera las parábolas

$$y=x(2x-3),\qquad y=x(2-x).$$

**a)** Estudia sus cortes con los ejes, sus vértices y sus puntos de intersección; utiliza esos datos para dibujar el recinto comprendido entre ambas.

**b)** Calcula exactamente el área de ese recinto.

### Solución

**a)** La primera parábola, $y=2x^2-3x$, corta el eje horizontal en $0$ y $3/2$. Su vértice es $\left(3/4,-9/8\right)$. La segunda, $y=2x-x^2$, corta el eje en $0$ y $2$ y tiene vértice en $(1,1)$.

Para encontrar sus intersecciones, igualamos:

$$x(2x-3)=x(2-x)
\ \Longrightarrow\ 3x^2-5x=0
\ \Longrightarrow\ \boxed{x=0\text{ o }x=5/3}.$$

Entre ambas abscisas, la parábola $x(2-x)$ queda por encima de $x(2x-3)$.

**b)** El área se expresa como la integral de la función superior menos la inferior:

$$\begin{aligned}
A&=\int_0^{5/3}[x(2-x)-x(2x-3)]\,dx\\
&=\int_0^{5/3}(5x-3x^2)\,dx\\
&=\left[\frac{5x^2}{2}-x^3\right]_0^{5/3}
=\boxed{\frac{125}{54}\ \text{u}^2}.
\end{aligned}$$


## Ejercicio 4A · Posición relativa y distancia

### Enunciado

Una recta pasa por $P=(0,1,0)$ y tiene vector director $(1,1,-1)$, mientras que un plano depende del parámetro real $A$:

$$r:(x,y,z)=(t,t+1,-t),\qquad\pi:-x+2y+z+A=0.$$

**a)** Estudia la posición relativa de la recta y el plano según $A$.

**b)** Calcula la distancia entre ambos según el parámetro.

### Solución

**a)** El vector normal del plano es $n=(-1,2,1)$ y el director de la recta es $v=(1,1,-1)$. Su producto escalar es

$$v\cdot n=-1+2-1=0.$$

Por tanto, la recta es paralela al plano o está contenida en él. Sustituimos $P=(0,1,0)$ en la ecuación del plano:

$$-0+2(1)+0+A=2+A.$$

Si $A=-2$, el punto pertenece al plano y toda la recta está contenida en él. Si $A\ne-2$, son paralelos y no se cortan.

**b)** Para $A=-2$ la distancia es cero. En los demás casos, medimos la distancia desde $P$:

$$\boxed{d(r,\pi)=\frac{|A+2|}{\sqrt{(-1)^2+2^2+1^2}}=\frac{|A+2|}{\sqrt6}}.$$

## Ejercicio 4B · Plano mediador de dos puntos

### Enunciado

Sean $A=(1,1,2)$ y $B=(-1,0,3)$.

**a)** Encuentra la ecuación del plano perpendicular al segmento $AB$ que pasa por su punto medio.

**b)** Calcula la distancia de $A$ a ese plano.

### Solución

**a)** Un vector perpendicular al plano es $\overrightarrow{AB}=(-2,-1,1)$, equivalente a $(2,1,-1)$. El punto medio del segmento es

$$M=\frac{A+B}{2}=\left(0,\frac12,\frac52\right).$$

Un plano con normal $(2,1,-1)$ tendrá la forma $2x+y-z+d=0$. Sustituyendo $M$:

$$\frac12-\frac52+d=0\ \Longrightarrow\ d=2.$$

Así, $\boxed{\pi:2x+y-z+2=0}$.

**b)** Aplicamos la fórmula punto-plano:

$$d(A,\pi)=\frac{|2(1)+1-2+2|}{\sqrt{2^2+1^2+(-1)^2}}
=\frac3{\sqrt6}=\boxed{\frac{\sqrt6}{2}}.$$


## Ejercicio 5A · Tangente a un montículo parabólico

### Enunciado

Un montículo de hormigón tiene sección parabólica, altura máxima de 12 m y una base de 6 m de anchura. Sobre su eje de simetría hay un punto situado a 15 m del suelo, desde el que se traza una recta tangente al montículo por su lado derecho. ¿A qué distancia del borde de la base toca esa recta el suelo?

### Solución

Colocamos el origen en el centro de la base y el eje vertical pasando por la cima. La parábola tiene vértice $(0,12)$ y corta el suelo en $x=\pm3$. Su ecuación es

$$f(x)=12-\frac43x^2,\qquad f'(x)=-\frac83x.$$

La tangente en el punto de abscisa $a>0$ se expresa como

$$y=f(a)+f'(a)(x-a).$$

Debe pasar por $(0,15)$. Al sustituirlo:

$$15=f(a)-af'(a)
=12-\frac43a^2+\frac83a^2
=12+\frac43a^2.$$

De ahí $a^2=9/4$ y $a=3/2$. La pendiente es $f'(3/2)=-4$, así que la tangente es $y=15-4x$.

Cuando toca el suelo, $y=0$, de donde $x=15/4$. El borde derecho de la base está en $x=3$. La separación buscada es

$$\boxed{\frac{15}4-3=\frac34=0{,}75\ \text{m}}.$$

## Ejercicio 5B · Una barra para delimitar una esquina

### Enunciado

Queremos colocar una barra recta de 4 m entre dos paredes perpendiculares de una habitación. Junto con las paredes, la barra delimitará una zona triangular. ¿A qué distancia de la esquina debe apoyarse cada extremo para que la superficie encerrada sea la mayor posible?

### Solución

Llamamos $x$ e $y$ a las distancias de los extremos de la barra a la esquina, medidas sobre cada pared. La barra es la hipotenusa de un triángulo rectángulo, así que

$$x^2+y^2=4^2=16.$$

El área encerrada es $S=xy/2$. Sustituimos $y=\sqrt{16-x^2}$:

$$S(x)=\frac{x\sqrt{16-x^2}}2,\qquad0\le x\le4.$$

Su derivada es

$$S'(x)=\frac{8-x^2}{\sqrt{16-x^2}}.$$

La derivada se anula cuando $x^2=8$, luego $x=2\sqrt2$. Como el área es cero en los extremos del intervalo y la función alcanza aquí su máximo, sustituimos para el otro cateto:

$$y=\sqrt{16-8}=2\sqrt2.$$

La barra debe apoyarse a $\boxed{2\sqrt2\text{ m}}$ de la esquina en cada pared.

## Cómo usar este examen para preparar la PAU

Haz una primera vuelta sin consultar la solución. Al corregir, señala el primer paso que no supiste justificar y repítelo al día siguiente. Así conviertes un modelo de examen en una lista concreta de técnicas que debes entrenar.

Si quieres trabajar estos bloques con una ruta de práctica, explicaciones y seguimiento, tienes el [Campus de Método Nebula](/campus/).

