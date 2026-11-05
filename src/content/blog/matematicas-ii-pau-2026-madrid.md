---
title: Matemáticas II · PAU 2026 · Comunidad de Madrid — examen resuelto
seoTitle: Matemáticas II · PAU 2026 · Comunidad de Madrid — examen resuelto
date: 2026-10-06
updated: 2026-11-05
description: Examen Matemáticas II · PAU 2026 · Comunidad de Madrid resuelto paso a paso con planteamientos, cálculos y comprobaciones para preparar la Selectividad.
tag: Matemáticas II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: como-preparar-pau-matematicas-ii,pau-matematicas-matrices-determinantes-gauss,pau-matematicas-integrales-areas
image: /favicon.svg
---

Este examen resuelto conserva el enunciado y desarrolla cada apartado. Úsalo primero a contrarreloj y compáralo después con el razonamiento, no solo con el resultado final.

**Convocatoria:** ordinaria, modelo A. **Examen:** preguntas 1, 2 y 3 obligatorias y una opción de cada bloque 4 y 5.

## Ejercicio 1 · Rango y ecuación matricial

### Enunciado

Trabajamos con la matriz

$$A=\begin{pmatrix}1&\lambda-2&\lambda\\0&1&\lambda-1\\1&0&1\end{pmatrix}.$$

**a)** Averigua su rango dependiendo del valor real de $\lambda$. (1 punto)

**b)** Si $\lambda=2$, despeja $X$ en la ecuación $A^2-AX=I_3$. (1 punto)

### Solución

**a)** Las filas segunda y tercera son independientes para cualquier $\lambda$, así que el rango es como mínimo 2. Calculamos el determinante:

$$\det A=\lambda^2-4\lambda+3=(\lambda-1)(\lambda-3).$$

Por tanto,

$$\boxed{\operatorname{rg}(A)=\begin{cases}3,&\lambda\neq1,3,\\2,&\lambda=1\text{ o }\lambda=3.\end{cases}}$$

**b)** Con $\lambda=2$, la matriz es invertible. Partimos de $A^2-AX=I$:

$$AX=A^2-I\ \Longrightarrow\ X=A^{-1}(A^2-I)=A-A^{-1}.$$

Las matrices necesarias son

$$A=\begin{pmatrix}1&0&2\\0&1&1\\1&0&1\end{pmatrix},\qquad
A^{-1}=\begin{pmatrix}-1&0&2\\-1&1&1\\1&0&-1\end{pmatrix}.$$

Restando obtenemos

$$\boxed{X=\begin{pmatrix}2&0&0\\1&0&0\\0&0&2\end{pmatrix}}.$$

## Ejercicio 2 · Coste mínimo de un jardín

### Enunciado

Un jardín es un triángulo rectángulo cuyos catetos miden 42 m y 56 m. Queremos cubrir una zona rectangular que tenga un vértice en el ángulo recto del triángulo y el opuesto en la hipotenusa. Sus lados serán paralelos a los catetos.

El suelo de la parte techada cuesta 30 €/m² y el resto, 50 €/m². ¿Cuánto deben medir los lados del rectángulo para gastar lo menos posible en el suelo? (2 puntos)

### Solución

Llamamos $x$ al lado situado sobre el cateto de 56 m e $y$ al situado sobre el de 42 m. Por semejanza de triángulos, el vértice sobre la hipotenusa cumple

$$\frac{x}{56}+\frac{y}{42}=1
\ \Longrightarrow\ y=42-\frac34x=\frac{168-3x}{4}.$$

El área total del triángulo es $42\cdot56/2=1176$ m². El área techada es $xy$. Así, el coste total vale

$$C(x,y)=30xy+50(1176-xy)=58800-20xy.$$

Sustituimos la relación entre $x$ e $y$:

$$\begin{aligned}C(x)&=58800-20x\left(42-\frac34x\right)\\
&=15x^2-840x+58800.\end{aligned}$$

Derivamos:

$$C'(x)=30x-840=0\ \Longrightarrow\ x=28.$$

Como $C''(x)=30>0$, es un mínimo. El otro lado mide $y=42-3\cdot28/4=21$.

**Dimensiones óptimas:** $\boxed{28\ \mathrm{m}\times21\ \mathrm{m}}$.

## Ejercicio 3 · Simetría y posiciones relativas

### Enunciado

Considera el plano $\pi:2x+2y-z=13$ y la recta

$$r:\frac{x-2}{1}=\frac y1=\frac z4.$$

**a)** Calcula el simétrico de $P=(2,0,0)$ respecto de $\pi$. (1 punto)

**b)** Elige una de estas dos tareas (1 punto): **b1)** hallar la distancia de $r$ a $\pi$, o **b2)** encontrar un plano que contenga $r$ y sea perpendicular a $\pi$.

### Solución

**a)** El vector normal al plano es $\vec n=(2,2,-1)$. La perpendicular por $P$ tiene ecuación

$$(x,y,z)=(2,0,0)+t(2,2,-1).$$

La intersección con el plano se obtiene sustituyendo: $2(2+2t)+2(2t)-(-t)=13$, de donde $t=1$. El punto de corte es $M=(4,2,-1)$, punto medio entre $P$ y su simétrico $Q$. Por eso,

$$Q=2M-P=(8,4,-2)-(2,0,0)=\boxed{(6,4,-2)}.$$

**b1)** El vector director de la recta es $\vec v=(1,1,4)$ y cumple $\vec v\cdot\vec n=2+2-4=0$: recta y plano son paralelos. El punto $P=(2,0,0)$ está en $r$, pero no en $\pi$. Calculamos su distancia al plano:

$$d(r,\pi)=\frac{|2\cdot2+2\cdot0-0-13|}{\sqrt{2^2+2^2+(-1)^2}}=\frac9{3}=\boxed{3}.$$

**b2)** El plano buscado pasa por $(2,0,0)$ y contiene las direcciones $(1,1,4)$ y $(2,2,-1)$. Su ecuación se obtiene anulando el determinante

$$\begin{vmatrix}x-2&y&z\\1&1&4\\2&2&-1\end{vmatrix}=0,
$$

que se simplifica como $-9x+9y+18=0$. Luego una ecuación válida es

$$\boxed{x-y-2=0}.$$


## Ejercicio 4.1 · Baterías

### Enunciado

La duración de una batería de móvil sigue una normal con media 24 horas y desviación típica 3 horas. Se considera defectuosa cuando dura menos de 21 horas.

**a)** ¿Qué probabilidad tiene una batería escogida al azar de ser defectuosa? (1 punto)

**b)** En un lote de 10 móviles independientes, ¿qué probabilidad hay de que al menos 9 tengan una batería que no sea defectuosa? (1 punto)

### Solución

**a)** Si $X\sim N(24,3)$, tipificamos:

$$P(X<21)=P\left(Z<\frac{21-24}{3}\right)=P(Z<-1)
=1-0{,}8413=\boxed{0{,}1587}.$$

**b)** El número $Y$ de baterías defectuosas sigue $B(10,0{,}1587)$. Pedir al menos nueve buenas equivale a pedir **como máximo una defectuosa**:

$$\begin{aligned}P(Y\le1)&=P(Y=0)+P(Y=1)\\
&=\binom{10}{0}(0{,}8413)^{10}
+\binom{10}{1}(0{,}1587)(0{,}8413)^9\\
&\approx\boxed{0{,}5127}.
\end{aligned}$$

## Ejercicio 4.2 · Sucesos

### Enunciado

Sabemos que $P(B)=0{,}4$, $P(\overline{A\cup B})=0{,}4$ y $P(B\mid A)=0{,}2$.

**a)** Halla $P(\overline A)$ y $P(A\cap B)$. (1 punto)

**b)** Calcula $P(A\cap B\mid A\cup B)$. (1 punto)

### Solución

**a)** Primero, $P(A\cup B)=1-0{,}4=0{,}6$. La probabilidad condicionada da

$$P(A\cap B)=P(B\mid A)P(A)=0{,}2P(A).$$

Por inclusión-exclusión,

$$0{,}6=P(A)+0{,}4-0{,}2P(A)=0{,}8P(A)+0{,}4.$$

Despejamos $P(A)=0{,}25$. De ahí,

$$\boxed{P(\overline A)=0{,}75,\qquad P(A\cap B)=0{,}05}.$$

**b)** Como la intersección está dentro de la unión:

$$P(A\cap B\mid A\cup B)=\frac{P(A\cap B)}{P(A\cup B)}
=\frac{0{,}05}{0{,}6}=\boxed{\frac1{12}\approx0{,}0833}.$$


## Ejercicio 5.1 · Área bajo una curva

### Enunciado

Calcula el área encerrada entre la gráfica de $f(x)=\ln x$, el eje horizontal y la recta $x=e$. (2 puntos)

### Solución

El logaritmo corta el eje horizontal en $x=1$, y es positivo entre 1 y $e$. Por eso el área es

$$A=\int_1^e\ln x\,dx.$$

Integramos por partes, tomando $u=\ln x$ y $dv=dx$:

$$\int\ln x\,dx=x\ln x-x+C.$$

Aplicamos los extremos:

$$A=[x\ln x-x]_1^e=(e-e)-(0-1)=\boxed{1\ \text{unidad}^2}.$$

## Ejercicio 5.2 · Función a trozos y tangente

### Enunciado

Dada la función

$$f(x)=\begin{cases}3x^2-\sin(ax)+b,&x<0,\\[3pt]\dfrac{2e^x}{1+x^2},&x\ge0,\end{cases}$$

**a)** Encuentra $a$ y $b$ para que sea continua y derivable en $x=0$. (1 punto)

**b)** Calcula la recta tangente a su gráfica cuando $x=2$. (1 punto)

### Solución

**a)** El límite por la izquierda en 0 es $b$, mientras que por la derecha y el valor de la función son $2$. Para la continuidad, $b=2$.

Las derivadas en cada lado son

$$f'_-(x)=6x-a\cos(ax),\qquad f'_+(x)=\frac{2e^x(1+x^2-2x)}{(1+x^2)^2}.$$

Al acercarnos a 0, obtenemos $f'_-(0)=-a$ y $f'_+(0)=2$. Por derivabilidad, $-a=2$, de donde

$$\boxed{a=-2,\qquad b=2}.$$

**b)** Para $x=2$ usamos el segundo tramo:

$$f(2)=\frac{2e^2}5,\qquad f'(2)=\frac{2e^2(1+4-4)}{25}=\frac{2e^2}{25}.$$

La tangente en forma punto-pendiente es

$$\boxed{y-\frac{2e^2}{5}=\frac{2e^2}{25}(x-2)}.$$

## Cómo usar este examen para preparar la PAU

Haz una primera vuelta sin consultar la solución. Al corregir, señala el primer paso que no supiste justificar y repítelo al día siguiente. Así conviertes un modelo de examen en una lista concreta de técnicas que debes entrenar.

Si quieres trabajar estos bloques con una ruta de práctica, explicaciones y seguimiento, tienes el [Campus de Método Nebula](/campus/).

