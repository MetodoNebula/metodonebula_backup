---
title: Matemáticas II · PAU 2026 · Comunitat Valenciana — examen resuelto
seoTitle: Matemáticas II · PAU 2026 · Comunitat Valenciana — examen resuelto
date: 2026-10-08
updated: 2026-11-05
description: Examen Matemáticas II · PAU 2026 · Comunitat Valenciana resuelto paso a paso con planteamientos, cálculos y comprobaciones para preparar la Selectividad.
tag: Matemáticas II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: como-preparar-pau-matematicas-ii,pau-matematicas-matrices-determinantes-gauss,pau-matematicas-integrales-areas
image: /favicon.svg
---

Este examen resuelto conserva el enunciado y desarrolla cada apartado. Úsalo primero a contrarreloj y compáralo después con el razonamiento, no solo con el resultado final.

**Convocatoria:** ordinaria. **Examen:** la pregunta 1 es obligatoria; en las preguntas 2, 3 y 4 hay que elegir entre las opciones propuestas.

## Ejercicio 1 · Probabilidad y estadística

### Enunciado

En un país, el 20 % de sus habitantes tiene una enfermedad. El test que se utiliza para detectarla sale positivo en el 90 % de las personas enfermas y también en el 5 % de las personas sanas.

**1.1)** Si hacemos el test a alguien elegido al azar, ¿qué probabilidad hay de que salga positivo? (0,75 puntos)

**1.2)** Si el resultado ha sido positivo, ¿qué probabilidad hay de que la persona esté sana? (0,75 puntos)

**1.3)** Elegimos 8 personas de forma independiente. ¿Qué probabilidad hay de que como mucho 2 tengan la enfermedad? (1 punto)

### Solución

Llamamos $E$ al suceso «tener la enfermedad» y $+$ al test positivo. Sabemos que $P(E)=0{,}2$, $P(+\mid E)=0{,}9$ y $P(+\mid\overline E)=0{,}05$.

**1.1)** Aplicamos la probabilidad total:

$$P(+)=0{,}2\cdot0{,}9+0{,}8\cdot0{,}05=\boxed{0{,}22}.$$

**1.2)** Ahora usamos Bayes:

$$P(\overline E\mid+)=\frac{P(\overline E)P(+\mid\overline E)}{P(+)}
=\frac{0{,}8\cdot0{,}05}{0{,}22}
=\boxed{0{,}1818}.$$

**1.3)** Sea $X$ el número de personas enfermas. Sigue una binomial $X\sim B(8,0{,}2)$:

$$\begin{aligned}
P(X\le2)&=\sum_{k=0}^2\binom8k(0{,}2)^k(0{,}8)^{8-k}\\
&=\boxed{0{,}7969}.
\end{aligned}$$


## Ejercicio 2.1 · Matriz de tensiones

### Enunciado

En un material elástico, el vector de tensiones $u$ se calcula multiplicando una matriz $T$ por otro vector $v=(x,y,z)^T$. Disponemos de

$$T=\begin{pmatrix}2&m&0\\m&2&0\\0&0&1\end{pmatrix},\qquad
u=\begin{pmatrix}4\\4\\-2\end{pmatrix},\qquad Tv=u.$$

**2.1.1)** Clasifica el sistema según el valor real de $m$. (1 punto)

**2.1.2)** Resuélvelo para $m=-1$. (0,75 puntos)

**2.1.3)** Para $m=2$, calcula las raíces de $\det(T-\alpha I)=0$, llamadas tensiones principales. (0,75 puntos)

### Solución

**2.1.1)** La matriz tiene determinante

$$\det T=4-m^2=(2-m)(2+m).$$

Si $m\neq\pm2$, hay solución única. Si $m=2$, las dos primeras ecuaciones son iguales ($2x+2y=4$), así que hay infinitas soluciones. Si $m=-2$, las ecuaciones $2x-2y=4$ y $-2x+2y=4$ son incompatibles.

$$\boxed{\begin{array}{ll}m\neq\pm2:&\text{una solución},\\m=2:&\text{infinitas soluciones},\\m=-2:&\text{sin solución}.\end{array}}$$

**2.1.2)** Para $m=-1$:

$$\begin{cases}2x-y=4,\\-x+2y=4,\\z=-2.\end{cases}$$

Sumando y resolviendo las dos primeras ecuaciones obtenemos $x=y=4$. Por tanto,

$$\boxed{v=(4,4,-2)^T}.$$

**2.1.3)** Para $m=2$:

$$\det(T-\alpha I)
=(1-\alpha)\left((2-\alpha)^2-4\right)
=(1-\alpha)\alpha(\alpha-4).$$

Las tensiones principales son $\boxed{\alpha=0,1,4}$.

## Ejercicio 2.2 · Matrices ortogonales

### Enunciado

Una matriz es ortogonal cuando su inversa coincide con su transpuesta.

**2.2.1)** Comprueba que, para cualquier ángulo $\alpha$, la matriz siguiente es ortogonal (0,75 puntos):

$$A=\begin{pmatrix}\cos\alpha&\sin\alpha\\-\sin\alpha&\cos\alpha\end{pmatrix}.$$

**2.2.2)** Encuentra todos los valores de $a$ y $b$ con los que $B$ es ortogonal, e indica cuántas matrices hay de ese tipo (0,75 puntos):

$$B=\begin{pmatrix}0&0&a\\0&1&0\\b&0&0\end{pmatrix}.$$

**2.2.3)** Si $B$ es una de esas matrices ortogonales, resuelve la ecuación (1 punto):

$$BX+\begin{pmatrix}1&0\\0&1\\1&1\end{pmatrix}
=\begin{pmatrix}2&1\\0&2\\1&0\end{pmatrix}.$$

### Solución

**2.2.1)** Multiplicamos por la transpuesta:

$$AA^T=\begin{pmatrix}\cos^2\alpha+\sin^2\alpha&0\\0&\sin^2\alpha+\cos^2\alpha\end{pmatrix}=I_2.$$

Como se cumple $AA^T=I_2$, la matriz es ortogonal para cualquier $\alpha$.

**2.2.2)** Las condiciones de ortogonalidad dan

$$B^TB=BB^T=I_3\ \Longleftrightarrow\ a^2=b^2=1.$$

Por eso $a\in\{-1,1\}$ y $b\in\{-1,1\}$. Hay $\boxed4$ combinaciones posibles.

**2.2.3)** Pasamos la matriz conocida al segundo miembro y multiplicamos por $B^{-1}=B^T$:

$$X=B^T\left[\begin{pmatrix}2&1\\0&2\\1&0\end{pmatrix}
-\begin{pmatrix}1&0\\0&1\\1&1\end{pmatrix}\right].$$

La resta vale $\begin{pmatrix}1&1\\0&1\\0&-1\end{pmatrix}$ y, por tanto,

$$\boxed{X=\begin{pmatrix}0&-b\\0&1\\a&a\end{pmatrix}}.$$


## Ejercicio 3.1 · Recta y plano con parámetro

### Enunciado

Sea la recta

$$r:\frac{x}{2}=\frac{y+1}{-1}=\frac{z-1}{1}$$

y el plano $\pi:2x+my+z-3=0$.

**3.1.1)** Encuentra $m$ para que la recta sea perpendicular al plano. (0,5 puntos)

**3.1.2)** Encuentra $m$ para que sean paralelos. (0,75 puntos)

**3.1.3)** Calcula el punto de corte para los valores de $m$ en los que exista. (1,25 puntos)

### Solución

El vector director de la recta es $v=(2,-1,1)$ y el normal del plano, $n=(2,m,1)$.

**3.1.1)** Para que la recta sea perpendicular al plano, ambos vectores deben ser proporcionales. Como la primera componente de $n$ coincide con la de $v$, el factor de proporcionalidad es 1, así que $\boxed{m=-1}$.

**3.1.2)** Para que la recta sea paralela al plano, $v\cdot n=0$:

$$2\cdot2+(-1)m+1\cdot1=5-m=0\ \Longrightarrow\ \boxed{m=5}.$$

**3.1.3)** Una parametrización de la recta es $(x,y,z)=(2t,-1-t,1+t)$. La sustituimos en el plano:

$$4t+m(-1-t)+(1+t)-3=0
\ \Longrightarrow\ (5-m)t=m+2.$$

Si $m\neq5$, resulta $t=(m+2)/(5-m)$. Sustituyendo:

$$\boxed{P=\left(\frac{4+2m}{5-m},\frac{-7}{5-m},\frac7{5-m}\right)}.$$

Para $m=5$ no hay punto de corte, porque la recta es paralela y exterior al plano.

## Ejercicio 3.2 · Distancia y ángulo de una recta

### Enunciado

Una recta del espacio viene dada por

$$s:\frac{x-1}{0}=y-1=\frac{z-1}{-1},$$

entendiendo la primera igualdad como $x=1$.

**3.2.1)** Encuentra un plano que pase por $(1,1,1)$ y sea perpendicular a $s$. (0,5 puntos)

**3.2.2)** Localiza los puntos de la recta que están a distancia 4 del origen. (1 punto)

**3.2.3)** Calcula el ángulo agudo que forma $s$ con el eje $Z$. (1 punto)

### Solución

La recta puede escribirse como $(x,y,z)=(1,1+t,1-t)$, con vector director $v=(0,1,-1)$.

**3.2.1)** Un plano perpendicular a $s$ tiene como vector normal $v$. Al pasar por $(1,1,1)$ su ecuación es

$$(y-1)-(z-1)=0\ \Longrightarrow\ \boxed{y-z=0}.$$

**3.2.2)** Imponemos la distancia 4:

$$1^2+(1+t)^2+(1-t)^2=16
\ \Longrightarrow\ 3+2t^2=16
\ \Longrightarrow\ t=\pm\frac{\sqrt{26}}2.$$

Los puntos son

$$\boxed{\left(1,1+\frac{\sqrt{26}}2,1-\frac{\sqrt{26}}2\right)}
\quad\text{y}\quad
\boxed{\left(1,1-\frac{\sqrt{26}}2,1+\frac{\sqrt{26}}2\right)}.$$

**3.2.3)** El eje $Z$ tiene vector director $(0,0,1)$. Con el producto escalar y tomando el ángulo agudo:

$$\cos\theta=\frac{|(0,1,-1)\cdot(0,0,1)|}{\sqrt2\cdot1}=\frac1{\sqrt2}.$$

Así, $\boxed{\theta=\pi/4\text{ radianes}}$.


## Ejercicio 4.1 · Estudio completo de una función

### Enunciado

Estudia la función $\displaystyle f(x)=\frac{x+1}{x^2+1}$: dominio, continuidad, asíntotas, crecimiento, decrecimiento, máximos, mínimos y un esbozo razonado de la gráfica. (2,5 puntos)

### Solución

**Dominio y continuidad.** Como $x^2+1>0$ para todo $x$, tenemos $D_f=\mathbb R$ y la función es continua en todo él.

**Asíntotas.** No hay verticales y, puesto que el denominador tiene mayor grado que el numerador,

$$\lim_{x\to\pm\infty}f(x)=0,$$

por lo que la asíntota horizontal es $\boxed{y=0}$.

**Monotonía.** Derivamos:

$$f'(x)=\frac{(x^2+1)-2x(x+1)}{(x^2+1)^2}
=\frac{-x^2-2x+1}{(x^2+1)^2}.$$

La derivada se anula en $x=-1\pm\sqrt2$. El signo es positivo entre estas dos raíces y negativo fuera, así que la función crece en $(-1-\sqrt2,-1+\sqrt2)$ y decrece en $(-\infty,-1-\sqrt2)\cup(-1+\sqrt2,\infty)$.

**Extremos.** El mínimo absoluto está en

$$\boxed{\left(-1-\sqrt2,\frac{1-\sqrt2}{2}\right)}$$

y el máximo absoluto en

$$\boxed{\left(-1+\sqrt2,\frac{1+\sqrt2}{2}\right)}.$$

**Gráfica.** Pasa por $(-1,0)$ y $(0,1)$; se acerca al eje $X$ en ambos extremos, desciende hasta el mínimo, sube hasta el máximo y vuelve a descender. Estos puntos y los intervalos anteriores permiten dibujarla a escala.

## Ejercicio 4.2 · Áreas pintadas de una pared

### Enunciado

Una pared mide 12 m de ancho por 3 m de alto. Tomamos como origen su esquina inferior izquierda y dibujamos la curva

$$f(x)=\cos\left(\frac{\pi x}{9}\right)+2,\qquad 0\le x\le12.$$

La región que queda bajo la curva se pinta de verde; la que queda encima, de rojo.

**4.2.1)** Describe y dibuja la curva sobre la pared, con sus cortes, máximos, mínimos y tramos de crecimiento. (1,25 puntos)

**4.2.2)** Calcula cuántos metros cuadrados se pintan de cada color. (1 punto)

**4.2.3)** Si cada bote cubre 3 m², ¿cuántos botes verdes hacen falta como mínimo? (0,25 puntos)

### Solución

**4.2.1)** En el intervalo $[0,12]$, la curva pasa por $(0,3)$, alcanza su mínimo en $(9,1)$ y termina en $(12,3/2)$. Su derivada es

$$f'(x)=-\frac\pi9\sin\left(\frac{\pi x}{9}\right).$$

Es decreciente entre 0 y 9 y creciente entre 9 y 12. El máximo absoluto es $\boxed{(0,3)}$ y el mínimo absoluto, $\boxed{(9,1)}$.

**4.2.2)** El área verde es el área bajo la curva:

$$\begin{aligned}
A_v&=\int_0^{12}\left[\cos\left(\frac{\pi x}{9}\right)+2\right]dx\\
&=\left[\frac9\pi\sin\left(\frac{\pi x}{9}\right)+2x\right]_0^{12}\\
&=24-\frac{9\sqrt3}{2\pi}
\approx\boxed{21{,}519\ \text{m}^2}.
\end{aligned}$$

La pared completa tiene $12\cdot3=36$ m². El área roja será

$$A_r=36-A_v=12+\frac{9\sqrt3}{2\pi}
\approx\boxed{14{,}481\ \text{m}^2}.$$

**4.2.3)** Necesitamos $\lceil21{,}519/3\rceil=\boxed8$ botes de pintura verde.

## Cómo usar este examen para preparar la PAU

Haz una primera vuelta sin consultar la solución. Al corregir, señala el primer paso que no supiste justificar y repítelo al día siguiente. Así conviertes un modelo de examen en una lista concreta de técnicas que debes entrenar.

Si quieres trabajar estos bloques con una ruta de práctica, explicaciones y seguimiento, tienes el [Campus de Método Nebula](/campus/).

