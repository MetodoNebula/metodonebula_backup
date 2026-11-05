---
title: PAU 2026 · Andalucía · Matemáticas Aplicadas a las Ciencias Sociales II — examen resuelto
seoTitle: PAU 2026 · Andalucía · Matemáticas Aplicadas a las Ciencias Sociales II — examen resuelto
date: 2026-10-19
updated: 2026-11-05
description: Examen PAU 2026 · Andalucía · Matemáticas Aplicadas a las Ciencias Sociales II resuelto paso a paso con planteamientos, cálculos y comprobaciones para preparar la Selectividad.
tag: CCSS II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: pau-ccss-programacion-lineal-problemas,pau-ccss-inferencia-intervalos-confianza,pau-ccss-matrices-modelos-economicos
image: /favicon.svg
---

Este examen resuelto conserva el enunciado y desarrolla cada apartado. Úsalo primero a contrarreloj y compáralo después con el razonamiento, no solo con el resultado final.

**Convocatoria:** ordinaria  
**Comunidad autónoma:** Andalucía

## Ejercicio 1 · Opción A: entradas de cine

### Enunciado

En un festival se venden entradas **Estándar**, **Premium** y **VIP**. En la inauguración se venden 20 Estándar, 5 Premium y 20 VIP, y se recaudan 1.800 €. En la sesión nocturna se venden 10 Estándar, 5 Premium y 10 VIP, con 1.000 € de ingresos. En la clausura se venden 4 Estándar, 12 VIP y 4 entradas Premium más que las otras dos categorías juntas; se recaudan 1.560 €.

**a)** Averigua el precio de cada entrada y cuánto dinero se ingresa en todo el festival.  
**b)** Indica qué categoría aporta más dinero y cuánto aporta.

### Solución

Llamamos $x$, $y$ y $z$ a los precios de las entradas Estándar, Premium y VIP. En la clausura se vendieron $4+12+4=20$ entradas Premium. Así, el sistema es:

$$\begin{cases}20x+5y+20z=1800\\10x+5y+10z=1000\\4x+20y+12z=1560.\end{cases}$$

Simplificamos las ecuaciones y despejamos $y$ de la segunda:

$$\begin{cases}4x+y+4z=360\\2x+y+2z=200\\x+5y+3z=390\end{cases}\qquad\Longrightarrow\qquad y=200-2x-2z.$$

Al sustituir en las otras dos, obtenemos $x+z=80$ y $9x+7z=610$. De $x=80-z$ se deduce:

$$9(80-z)+7z=610\Rightarrow z=55,\quad x=25,\quad y=40.$$

Los precios son **25 € (Estándar)**, **40 € (Premium)** y **55 € (VIP)**. La recaudación conjunta es $1800+1000+1560=\boxed{4360\text{ €}}$.

Para comparar las categorías, sumamos las entradas vendidas:

| Tipo | Entradas | Ingresos |
|---|---:|---:|
| Estándar | $20+10+4=34$ | $34\cdot25=850$ € |
| Premium | $5+5+20=30$ | $30\cdot40=1200$ € |
| VIP | $20+10+12=42$ | $42\cdot55=2310$ € |

Las **VIP** generan la mayor recaudación: $\boxed{2310\text{ €}}$.

## Ejercicio 1 · Opción B: producción de tableros

### Enunciado

Una fábrica produce tableros **DM** y de **aglomerado**. Por cada metro cuadrado de DM necesita $10\,\mathrm{m^3}$ de madera triturada y gana 10 €; para el aglomerado necesita $30\,\mathrm{m^3}$ y gana 20 €. Al día puede fabricar como máximo $12\,\mathrm{m^2}$ de DM, $18\,\mathrm{m^2}$ de aglomerado y $26\,\mathrm{m^2}$ en total. Dispone de $600\,\mathrm{m^3}$ de madera triturada. ¿Qué cantidades le conviene producir para conseguir el mayor beneficio diario?

### Solución

Si $x$ es la producción diaria de DM e $y$ la de aglomerado, hay que maximizar:

$$B(x,y)=10x+20y$$

respetando las condiciones

$$0\le x\le12,\quad0\le y\le18,\quad x+y\le26,\quad10x+30y\le600.$$

La última desigualdad equivale a $x+3y\le60$. Los vértices de la región que cumple todas las restricciones son:

| Vértice | Beneficio $10x+20y$ |
|---|---:|
| $(0,0)$ | 0 € |
| $(0,18)$ | 360 € |
| $(6,18)$ | 420 € |
| $(9,17)$ | **430 €** |
| $(12,14)$ | 400 € |
| $(12,0)$ | 120 € |

Para encontrar, por ejemplo, $(9,17)$, cruzamos las fronteras $x+y=26$ y $x+3y=60$: al restar, $2y=34$, de donde $y=17$ y $x=9$. Como la función objetivo es lineal, basta comprobar los vértices. La mejor elección es fabricar $\boxed{9\,\mathrm{m^2}}$ de DM y $\boxed{17\,\mathrm{m^2}}$ de aglomerado, con un beneficio de $\boxed{430\text{ €}}$.

## Ejercicio 2 · Función definida a trozos

### Enunciado

Trabajamos con la siguiente función, donde $a$ y $b$ son constantes:

$$f(x)=\begin{cases}\dfrac{x^2}{20},&0\le x<20,\\a+bx,&20\le x<50,\\36-\dfrac{x^2}{100},&50\le x\le60.\end{cases}$$

**a)** Encuentra $a$ y $b$ para que no haya saltos en la gráfica.  
**b)** Tomando $a=26$ y $b=-\dfrac3{10}$, localiza los extremos relativos, describe cómo dibujar la gráfica y calcula el área que queda entre la curva y el eje horizontal.

### Solución

**a) Continuidad.** Dentro de cada tramo no hay problemas de continuidad. Solo hay que igualar las expresiones en $x=20$ y $x=50$:

$$a+20b=\frac{20^2}{20}=20,\qquad a+50b=36-\frac{50^2}{100}=11.$$

Restando las ecuaciones: $30b=-9$, así que $b=-3/10$. Después, $a=20-20(-3/10)=26$. Por tanto,

$$\boxed{a=26,\qquad b=-\frac3{10}}.$$

**b.i) Extremos.** Con esos parámetros, las derivadas en el interior de cada tramo son

$$f'(x)=\begin{cases}x/10,&0<x<20,\\-3/10,&20<x<50,\\-x/50,&50<x<60.\end{cases}$$

La función sube hasta $x=20$ y luego baja hasta $x=60$. En consecuencia, tiene un **máximo relativo** en $(20,20)$ y **mínimos en los extremos del dominio** $(0,0)$ y $(60,0)$ (considerados mínimos relativos laterales).

**b.ii) Gráfica.** Para dibujarla, unimos de forma continua el arco parabólico que pasa por $(0,0)$, $(10,5)$ y $(20,20)$; después trazamos el segmento recto hasta $(50,11)$; por último, otra rama parabólica decreciente llega a $(60,0)$. Otros puntos de apoyo son $(30,17)$ y $(45,12{,}5)$.

**b.iii) Área.** Los tres tramos son no negativos, así que sumamos tres integrales:

$$\begin{aligned}A&=\int_0^{20}\frac{x^2}{20}\,dx+\int_{20}^{50}\left(26-\frac{3x}{10}\right)dx+\int_{50}^{60}\left(36-\frac{x^2}{100}\right)dx\\[2mm]
&=\left[\frac{x^3}{60}\right]_0^{20}+\left[26x-\frac{3x^2}{20}\right]_{20}^{50}+\left[36x-\frac{x^3}{300}\right]_{50}^{60}\\[2mm]
&=\frac{400}{3}+465+\frac{170}{3}=\boxed{655\ \mathrm{u^2}}.\end{aligned}$$

## Ejercicio 3 · Opción A: muestras y sucesos

### Enunciado

**a)** Se parte de la población $\{-5,-2,13,18,20\}$ y se estudian medias de muestras aleatorias de tamaño 3. Calcula la media y la varianza de la distribución de esas medias.  
**b)** Para dos sucesos $A$ y $B$ sabemos que $P(A)=0{,}75$, $P(B^c)=0{,}8$ y $P(A\mid B)=0{,}6$. Halla $P(A\cap B)$, $P(B\setminus A)$, $P(A\cup B)$ y $P(A^c\setminus B)$.

### Solución

**a)** La esperanza de la media muestral coincide con la media poblacional:

$$\mu=\frac{-5-2+13+18+20}{5}=\boxed{8{,}8}.$$

Calculamos la varianza poblacional:

$$\sigma^2=\frac{(-5)^2+(-2)^2+13^2+18^2+20^2}{5}-(8{,}8)^2=106{,}96.$$

Siguiendo el muestreo independiente utilizado en el desarrollo, la varianza de la media de tamaño 3 es

$$\operatorname{Var}(\overline X)=\frac{\sigma^2}{3}=\boxed{35{,}6533}.$$

**b)** Como $P(B)=1-0{,}8=0{,}2$:

$$\begin{aligned}
P(A\cap B)&=P(A\mid B)P(B)=0{,}6\cdot0{,}2=\boxed{0{,}12},\\
P(B\setminus A)&=P(B)-P(A\cap B)=0{,}2-0{,}12=\boxed{0{,}08},\\
P(A\cup B)&=P(A)+P(B)-P(A\cap B)=0{,}75+0{,}2-0{,}12=\boxed{0{,}83},\\
P(A^c\setminus B)&=1-P(A\cup B)=\boxed{0{,}17}.
\end{aligned}$$

## Ejercicio 3 · Opción B: probabilidad binomial

### Enunciado

Se sabe que $P(A)=2P(B)$, $P(B^c\mid A)=0{,}75$ y $P(A\cap B)=0{,}2$.

**a)** Calcula $P(B)$.  
**b)** ¿Qué probabilidad hay de que no ocurra ninguno de los dos sucesos? ¿Son incompatibles $A^c$ y $B^c$?  
**c)** Si repetimos el experimento de manera independiente 1.350 veces, indica la distribución del número de veces que aparece $B$ y aproxima la probabilidad de que aparezca entre 500 y 580 veces, ambos incluidos.

### Solución

**a)** Escribimos $P(B)=p$ y $P(A)=2p$. Como $P(B\mid A)=1-0{,}75=0{,}25$:

$$\frac{P(A\cap B)}{P(A)}=\frac{0{,}2}{2p}=0{,}25\Rightarrow\boxed{p=0{,}4}.$$

**b)** Por tanto, $P(A)=0{,}8$ y

$$P(A^c\cap B^c)=1-[P(A)+P(B)-P(A\cap B)]=1-(0{,}8+0{,}4-0{,}2)=\boxed{0}.$$

Sí, $A^c$ y $B^c$ son incompatibles en el sentido probabilístico: su intersección tiene probabilidad cero.

**c)** Si $X$ cuenta cuántas veces ocurre $B$, entonces

$$X\sim\mathrm{Bin}(1350;0{,}4).$$

Aproximamos por una normal con media $np=540$ y desviación típica $\sqrt{np(1-p)}=\sqrt{1350\cdot0{,}4\cdot0{,}6}=18$. Aplicando corrección de continuidad:

$$\begin{aligned}P(499<X\le580)&\approx P(499{,}5<Y<580{,}5)\\
&=P\left(-2{,}25<Z<2{,}25\right)\\
&=0{,}9878-(1-0{,}9878)=\boxed{0{,}9756}.
\end{aligned}$$

## Ejercicio 4 · Intervalos de confianza

### Enunciado

Una empresa de transporte quiere conocer la distancia media de sus viajes. La distancia tiene distribución normal, con varianza poblacional conocida de $225\,\mathrm{km^2}$. En una muestra de 49 viajes, la media observada es de 325 km.

**a)** Construye un intervalo de confianza del 97 % para la distancia media.  
**b)** Con ese intervalo, ¿resulta razonable considerar que la media es de 310 km?  
**c)** ¿Cuántos viajes hacen falta, como mínimo, para conseguir con una confianza del 99 % un intervalo de amplitud inferior a 4 km?

### Solución

La desviación típica es $\sigma=\sqrt{225}=15\,\mathrm{km}$.

**a)** Para una confianza del 97 %, usamos $z_{0{,}985}\approx2{,}17$. El margen de error resulta:

$$E=2{,}17\frac{15}{\sqrt{49}}=4{,}65.$$

Por tanto, el intervalo es

$$[325-4{,}65,325+4{,}65]=\boxed{[320{,}35;329{,}65]\ \mathrm{km}}.$$

**b)** Los 310 km quedan fuera del intervalo, de modo que **esa media no es compatible con el intervalo calculado**.

**c)** Para el 99 % de confianza tomamos $z\approx2{,}575$. Una amplitud inferior a 4 km exige $E<2$ km. Planteamos:

$$2\approx\frac{2{,}575\cdot15}{\sqrt n}\quad\Rightarrow\quad n\approx\left(\frac{2{,}575\cdot15}{2}\right)^2=372{,}97.$$

Redondeamos al entero superior: $\boxed{373\text{ viajes}}$.

## Cómo usar este examen para preparar la PAU

Haz una primera vuelta sin consultar la solución. Al corregir, señala el primer paso que no supiste justificar y repítelo al día siguiente. Así conviertes un modelo de examen en una lista concreta de técnicas que debes entrenar.

Si quieres trabajar estos bloques con una ruta de práctica, explicaciones y seguimiento, tienes el [Campus de Método Nebula](/campus/).

