---
title: Matemáticas II · PAU 2026 · Castilla-La Mancha — examen resuelto
seoTitle: Matemáticas II · PAU 2026 · Castilla-La Mancha — examen resuelto
date: 2026-10-12
updated: 2026-11-05
description: Examen Matemáticas II · PAU 2026 · Castilla-La Mancha resuelto paso a paso con planteamientos, cálculos y comprobaciones para preparar la Selectividad.
tag: Matemáticas II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: como-preparar-pau-matematicas-ii,pau-matematicas-matrices-determinantes-gauss,pau-matematicas-integrales-areas
image: /favicon.svg
---

Este examen resuelto conserva el enunciado y desarrolla cada apartado. Úsalo primero a contrarreloj y compáralo después con el razonamiento, no solo con el resultado final.

**Convocatoria:** ordinaria. **Examen:** tres preguntas obligatorias y una opción de cada uno de los dos bloques finales.

## Ejercicio 1 · Probabilidad

### Enunciado

En la misión espacial Dulcinea, las alertas se reparten entre navegación (50 %), comunicaciones (30 %) y soporte vital (20 %). De las alertas de cada sistema, son críticas el 4 %, el 6 % y el 10 %, respectivamente.

a) Si escogemos una alerta al azar, ¿qué probabilidad hay de que sea crítica? (1 punto)

b) Si sabemos que una alerta no es crítica, ¿qué probabilidad hay de que proceda del soporte vital? (1 punto)

### Solución

Llamamos $N$, $C$ y $V$ a los tres sistemas, y $K$ al suceso «alerta crítica».

**a)** Aplicamos la probabilidad total, sumando las contribuciones de los tres sistemas:

$$
\begin{aligned}
P(K)&=P(N)P(K\mid N)+P(C)P(K\mid C)+P(V)P(K\mid V)\\
&=0{,}5\cdot0{,}04+0{,}3\cdot0{,}06+0{,}2\cdot0{,}10\\
&=\boxed{0{,}058}.
\end{aligned}
$$

**b)** Usamos la probabilidad condicionada. Una alerta de soporte vital no es crítica con probabilidad $0{,}90$:

$$
P(V\mid\overline K)=\frac{P(V)P(\overline K\mid V)}{P(\overline K)}
=\frac{0{,}2\cdot0{,}9}{1-0{,}058}
=\boxed{0{,}1911}.
$$

## Ejercicio 2 · Optimización

### Enunciado

Una empresa de azafrán pone en marcha una campaña promocional. Su beneficio diario, medido en **centenares de euros**, sigue la función

$$B(x)=80x\,e^{-0{,}5x},\qquad x\geq0,$$

donde $x$ indica los días transcurridos desde que empezó la campaña.

a) Averigua cuándo aumenta y cuándo disminuye el beneficio, y en qué día se consigue el máximo. (1,25 puntos)

b) ¿Qué ocurre con el beneficio cuando pasa mucho tiempo? Calcula el límite y explica su significado. (0,75 puntos)

### Solución

**a)** Derivamos y buscamos dónde se anula:

$$
B'(x)=80e^{-0{,}5x}-40xe^{-0{,}5x}
=e^{-0{,}5x}(80-40x).
$$

Como la exponencial siempre es positiva, el signo de la derivada depende de $80-40x$. Se anula cuando $x=2$, es positiva para $0<x<2$ y negativa para $x>2$. Por tanto, el beneficio **crece hasta el día 2 y después decrece**. El máximo se alcanza en $\boxed{x=2}$.

**b)** Reescribimos el límite para aplicar L'Hôpital:

$$
\lim_{x\to\infty}80xe^{-0{,}5x}
=\lim_{x\to\infty}\frac{80x}{e^{0{,}5x}}
=\lim_{x\to\infty}\frac{80}{0{,}5e^{0{,}5x}}
=\boxed{0}.
$$

Con el tiempo, el beneficio diario del modelo se aproxima a cero.

## Ejercicio 3 · Matrices

### Enunciado

**a)** Encuentra $a$ y $b$ para que $AB=I_3$, con

$$
A=\begin{pmatrix}1&a&1\\1&2&1\\1&1&b\end{pmatrix},\qquad
B=\begin{pmatrix}3&-1&-1\\-1&1&0\\-1&0&1\end{pmatrix}.
$$

**b)** Resuelve este sistema, en el que las incógnitas son matrices de tamaño $2\times2$:

$$
\begin{cases}
X+Y=\begin{pmatrix}1&0\\2&3\end{pmatrix},\\[4pt]
2X+3Y=\begin{pmatrix}4&1\\7&9\end{pmatrix}.
\end{cases}
$$

Cada apartado vale 1 punto.

### Solución

**a)** Multiplicamos las matrices:

$$AB=\begin{pmatrix}2-a&a-1&0\\0&1&0\\2-b&0&b-1\end{pmatrix}.$$

Al compararla con la identidad, las entradas correspondientes deben coincidir. De ahí obtenemos $2-a=1$, $a-1=0$, $2-b=0$ y $b-1=1$. La respuesta es $\boxed{a=1,\ b=2}$.

**b)** Para simplificar, llamamos $M$ y $N$ a las matrices del lado derecho. El sistema queda $X+Y=M$, $2X+3Y=N$. Al eliminar una incógnita:

$$Y=N-2M,\qquad X=3M-N.$$

Sustituimos:

$$
\begin{aligned}
X&=3\begin{pmatrix}1&0\\2&3\end{pmatrix}-\begin{pmatrix}4&1\\7&9\end{pmatrix}
=\boxed{\begin{pmatrix}-1&-1\\-1&0\end{pmatrix}},\\[5pt]
Y&=\begin{pmatrix}4&1\\7&9\end{pmatrix}-2\begin{pmatrix}1&0\\2&3\end{pmatrix}
=\boxed{\begin{pmatrix}2&1\\3&3\end{pmatrix}}.
\end{aligned}
$$


## Ejercicio 4.1 · Vectores

### Enunciado

Tenemos los vectores $\vec u=(1,-1,a)$, $\vec v=(2,a,1)$ y $\vec w=(-1,1,-1)$.

a) ¿Para qué valores de $a$ están en un mismo plano? (0,75 puntos)

b) ¿Qué valores de $a$ hacen que el paralelepípedo que forman tenga volumen $10$ unidades cúbicas? (1,25 puntos)

### Solución

**a)** Tres vectores del espacio son coplanarios cuando su producto mixto es cero:

$$
\det\begin{pmatrix}1&-1&a\\2&a&1\\-1&1&-1\end{pmatrix}
=a^2+a-2=(a-1)(a+2).
$$

Luego $\boxed{a=1\ \text{o}\ a=-2}$.

**b)** El volumen es el valor absoluto del mismo producto mixto. Por eso resolvemos

$$|a^2+a-2|=10.$$

La rama $a^2+a-2=10$ da $a^2+a-12=0$, con raíces $a=3$ y $a=-4$. La otra rama, $a^2+a-2=-10$, no tiene soluciones reales. Por tanto, $\boxed{a=3\ \text{o}\ a=-4}$.

## Ejercicio 4.2 · Simetría respecto a un plano

### Enunciado

Un muro se representa por el plano $\pi:x+y+z-6=0$. Se ha colocado un sensor en $P=(1,2,6)$ y queremos instalar otro en su posición simétrica al otro lado del muro.

a) Obtén las coordenadas del segundo sensor $P'$. (1,25 puntos)

b) Calcula la distancia entre los dos sensores. (0,75 puntos)

### Solución

**a)** El vector normal del plano es $(1,1,1)$. La recta perpendicular a $\pi$ que pasa por $P$ es

$$(x,y,z)=(1,2,6)+t(1,1,1).$$

El punto medio $M$ de $PP'$ debe estar en el plano. Sustituyendo la recta:

$$(1+t)+(2+t)+(6+t)-6=0\ \Longrightarrow\ 3+3t=0\ \Longrightarrow\ t=-1.$$

Así, $M=(0,1,5)$. Como $M=(P+P')/2$, tenemos $P'=2M-P$, es decir,

$$\boxed{P'=(-1,0,4)}.$$

**b)** La distancia entre los sensores se calcula con el módulo de $\overrightarrow{PP'}=(-2,-2,-2)$:

$$d(P,P')=\sqrt{(-2)^2+(-2)^2+(-2)^2}=\boxed{2\sqrt3\approx3{,}46}.$$


## Ejercicio 5.1 · Límite e integral

### Enunciado

**a)** Calcula $\displaystyle\lim_{x\to\infty}\left(\frac{2x+1}{2x-3}\right)^x$. (1 punto)

**b)** Resuelve $\displaystyle\int e^x\sin x\,dx$. (1 punto)

### Solución

**a)** La expresión tiene la forma indeterminada $1^{\infty}$. Como $\frac{2x+1}{2x-3}=1+\frac4{2x-3}$, utilizamos el límite exponencial:

$$
\begin{aligned}
L&=\exp\left(\lim_{x\to\infty}x\ln\left(1+\frac4{2x-3}\right)\right)\\
&=\exp\left(\lim_{x\to\infty}\frac{4x}{2x-3}\right)
=\boxed{e^2}.
\end{aligned}
$$

**b)** Hacemos integración por partes dos veces. Si $I=\int e^x\sin x\,dx$, entonces

$$I=e^x\sin x-\int e^x\cos x\,dx.$$

Y aplicando partes a la integral que queda:

$$\int e^x\cos x\,dx=e^x\cos x+\int e^x\sin x\,dx.$$

Por tanto, $I=e^x\sin x-e^x\cos x-I$, de donde

$$\boxed{\int e^x\sin x\,dx=\frac{e^x(\sin x-\cos x)}{2}+C}.$$

## Ejercicio 5.2 · Continuidad y derivabilidad

### Enunciado

Considera la función

$$
f(x)=\begin{cases}\dfrac{x^2-1}{x-1},&x<1,\\ ax+b,&x\ge1.\end{cases}
$$

Encuentra $a$ y $b$ para que no haya ni salto ni esquina en $x=1$, es decir, para que la función sea continua y derivable ahí. (2 puntos)

### Solución

Para $x\neq1$, la primera expresión se simplifica: $(x^2-1)/(x-1)=x+1$. Su límite por la izquierda en $1$ vale $2$. Como $f(1)=a+b$, la continuidad exige

$$a+b=2.$$

La derivada del tramo izquierdo es $1$ y la del derecho es $a$. Para que coincidan en el punto necesitamos $a=1$. Con la condición de continuidad resulta $b=1$.

$$\boxed{a=1,\qquad b=1}.$$

## Cómo usar este examen para preparar la PAU

Haz una primera vuelta sin consultar la solución. Al corregir, señala el primer paso que no supiste justificar y repítelo al día siguiente. Así conviertes un modelo de examen en una lista concreta de técnicas que debes entrenar.

Si quieres trabajar estos bloques con una ruta de práctica, explicaciones y seguimiento, tienes el [Campus de Método Nebula](/campus/).

