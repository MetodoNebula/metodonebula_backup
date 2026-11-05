---
title: PAU 2026 · Castilla y León · Matemáticas Aplicadas a las Ciencias Sociales II — examen resuelto
seoTitle: PAU 2026 · Castilla y León · Matemáticas Aplicadas a las Ciencias Sociales II — examen resuelto
date: 2026-10-13
updated: 2026-11-05
description: Examen PAU 2026 · Castilla y León · Matemáticas Aplicadas a las Ciencias Sociales II resuelto paso a paso con planteamientos, cálculos y comprobaciones para preparar la Selectividad.
tag: CCSS II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: pau-ccss-programacion-lineal-problemas,pau-ccss-inferencia-intervalos-confianza,pau-ccss-matrices-modelos-economicos
image: /favicon.svg
---

Este examen resuelto conserva el enunciado y desarrolla cada apartado. Úsalo primero a contrarreloj y compáralo después con el razonamiento, no solo con el resultado final.

**Convocatoria:** ordinaria  
**Comunidad autónoma:** Castilla y León

## Ejercicio 1 · Billetes de autobús

### Enunciado

Un autobús universitario transporta a 90 personas. Hay tres tarifas: ordinaria, de 1,20 €; bono descuento, de 0,75 €; y bono especial de estudiantes, de 0,65 €. El viaje genera 70,50 € y el número de estudiantes con bono especial es el doble que el de las otras dos categorías juntas. ¿Cuántas personas viajan con cada tarifa?

### Solución

Sean $x$ los billetes ordinarios, $y$ los bonos descuento y $z$ los bonos de estudiantes. Planteamos:

$$\begin{cases}x+y+z=90,\\1{,}2x+0{,}75y+0{,}65z=70{,}5,\\z=2(x+y).\end{cases}$$

De la primera y la tercera ecuación resulta $x+y=30$ y $z=60$. Sustituimos en la recaudación:

$$1{,}2x+0{,}75y+0{,}65(60)=70{,}5\Rightarrow1{,}2x+0{,}75y=31{,}5.$$

Con $x=30-y$:

$$1{,}2(30-y)+0{,}75y=31{,}5\Rightarrow0{,}45y=4{,}5\Rightarrow y=10.$$

Así, $x=20$ y $z=60$. Viajan **20 personas con billete ordinario, 10 con bono descuento y 60 con bono de estudiante**.

## Ejercicio 2 · Continuidad y área

### Enunciado

Considera la función

$$f(x)=\begin{cases}4x-2,&x\le3,\\(x-4)^2-1,&x>3.\end{cases}$$

**2.1)** Calcula el área entre la curva y el eje $x$ desde $x=4$ hasta $x=6$.  
**2.2)** Estudia si la función es continua en todo su dominio.  
**2.3)** Indica en qué intervalos crece y decrece para $x>3$.

### Solución

**2.1)** Entre 4 y 6 usamos $f(x)=(x-4)^2-1=x^2-8x+15$. La función se anula en $x=5$ dentro del intervalo; es negativa entre 4 y 5 y positiva entre 5 y 6. El área geométrica se calcula con valores absolutos:

$$\begin{aligned}A&=-\int_4^5\bigl((x-4)^2-1\bigr)\,dx+\int_5^6\bigl((x-4)^2-1\bigr)\,dx\\
&=-\left[\frac{(x-4)^3}{3}-x\right]_4^5+\left[\frac{(x-4)^3}{3}-x\right]_5^6\\
&=\frac23+\frac43=\boxed{2\,\mathrm{u^2}}.\end{aligned}$$

**2.2)** Ambos tramos son continuos por separado. En el punto de unión:

$$f(3)=4(3)-2=10,\quad\lim_{x\to3^-}f(x)=10,\quad\lim_{x\to3^+}f(x)=(3-4)^2-1=0.$$

Como los límites laterales son diferentes, existe una discontinuidad de salto en $x=3$. Por tanto, la función es continua en $\boxed{\mathbb R\setminus\{3\}}$.

**2.3)** En $x>3$, la derivada es $f'(x)=2(x-4)$. Es negativa para $3<x<4$ y positiva para $x>4$. Así, **decrece** en $(3,4)$, **crece** en $(4,+\infty)$ y presenta un mínimo local en $(4,-1)$.

## Ejercicio 3 · Compras por internet

### Enunciado

Entre las personas usuarias de internet de 16 a 74 años hay 34,5 millones. El 87 % compra online. Dentro de ese conjunto, 5 millones tienen de 25 a 34 años, y el 90 % de ellos compra online.

**3.1.a)** Organiza los datos como sucesos y probabilidades.  
**3.1.b)** ¿Qué porcentaje de usuarios de las demás edades compra online?  
**3.2.a)** Si el gasto mensual de quienes compran online sigue una normal de media 275 €, y el 69,15 % gasta menos de 300 €, encuentra la desviación típica.  
**3.2.b)** ¿Qué probabilidad hay de gastar más de 400 € al mes?  
**3.3.a)** Al seleccionar 10 clientes de entre 25 y 34 años, ¿cuál es la probabilidad de que exactamente 2 no compren online?  
**3.3.b)** ¿Y de que sean menos de 2?

### Solución

**3.1.a)** Sea $J$ el suceso «tener entre 25 y 34 años», $C$ el suceso «comprar online» y $U$ el universo de personas usuarias de internet entre 16 y 74 años. Entonces:

$$P(C\mid U)=0{,}87,\quad P(C\mid J)=0{,}90,\quad P(J\mid U)=\frac5{34{,}5}\approx0{,}1449.$$

**3.1.b)** Compran online $34{,}5\cdot0{,}87=30{,}015$ millones de usuarios, de los cuales $5\cdot0{,}9=4{,}5$ millones pertenecen al grupo joven. Entre las demás edades compran $30{,}015-4{,}5=25{,}515$ millones, de un total de $34{,}5-5=29{,}5$ millones:

$$\frac{25{,}515}{29{,}5}=0{,}865\Rightarrow\boxed{86{,}5\%}.$$

**3.2.a)** Si $X\sim N(275,\sigma)$ y $P(X<300)=0{,}6915$, el cuantil de la normal estándar es $z=0{,}5$. Entonces:

$$\frac{300-275}{\sigma}=0{,}5\Rightarrow\boxed{\sigma=50\text{ €}}.$$

**3.2.b)** Tipificamos:

$$P(X>400)=P\left(Z>\frac{400-275}{50}\right)=P(Z>2{,}5)=1-0{,}9938=\boxed{0{,}0062}.$$

**3.3)** El 10 % de los clientes jóvenes no compra online. Si $Y$ cuenta cuántas personas no compran en una muestra independiente de 10, entonces $Y\sim\mathrm{Bin}(10;0{,}1)$.

$$P(Y=2)=\binom{10}{2}(0{,}1)^2(0{,}9)^8=\boxed{0{,}1937}.$$

$$P(Y<2)=P(Y=0)+P(Y=1)=(0{,}9)^{10}+10(0{,}1)(0{,}9)^9=\boxed{0{,}7361}.$$

## Cómo usar este examen para preparar la PAU

Haz una primera vuelta sin consultar la solución. Al corregir, señala el primer paso que no supiste justificar y repítelo al día siguiente. Así conviertes un modelo de examen en una lista concreta de técnicas que debes entrenar.

Si quieres trabajar estos bloques con una ruta de práctica, explicaciones y seguimiento, tienes el [Campus de Método Nebula](/campus/).

