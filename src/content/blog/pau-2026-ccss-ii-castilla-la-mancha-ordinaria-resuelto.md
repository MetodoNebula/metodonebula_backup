---
title: PAU 2026 · Castilla-La Mancha · Matemáticas Aplicadas a las Ciencias Sociales II — examen resuelto
seoTitle: PAU 2026 · Castilla-La Mancha · Matemáticas Aplicadas a las Ciencias Sociales II — examen resuelto
date: 2026-10-15
updated: 2026-11-05
description: Examen PAU 2026 · Castilla-La Mancha · Matemáticas Aplicadas a las Ciencias Sociales II resuelto paso a paso con planteamientos, cálculos y comprobaciones para preparar la Selectividad.
tag: CCSS II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: pau-ccss-programacion-lineal-problemas,pau-ccss-inferencia-intervalos-confianza,pau-ccss-matrices-modelos-economicos
image: /favicon.svg
---

Este examen resuelto conserva el enunciado y desarrolla cada apartado. Úsalo primero a contrarreloj y compáralo después con el razonamiento, no solo con el resultado final.

**Convocatoria:** ordinaria  
**Comunidad autónoma:** Castilla-La Mancha

## Ejercicio 1 · Probabilidad en clubes deportivos

### Enunciado

En una región, el 40 % de los clubes deportivos son de fútbol, el 15 % de baloncesto y el 45 % de otras disciplinas. Son clubes femeninos el 20 % de los de fútbol, el 45 % de los de baloncesto y el 50 % de los de otros deportes.

**a)** ¿Qué probabilidad hay de elegir un club femenino?  
**b)** Si ya sabemos que el club elegido es femenino, ¿qué probabilidad hay de que sea de baloncesto?  
**c)** Si seleccionamos dos clubes de forma independiente, ¿qué probabilidad hay de obtener uno de fútbol y otro de un deporte diferente del fútbol y el baloncesto?

### Solución

Llamamos $F$, $B$ y $O$ a las categorías fútbol, baloncesto y otros deportes, y $M$ al suceso «club femenino».

**a)** Por probabilidad total,

$$P(M)=0{,}4\cdot0{,}2+0{,}15\cdot0{,}45+0{,}45\cdot0{,}5=\boxed{0{,}3725}.$$

**b)** Aplicamos Bayes:

$$P(B\mid M)=\frac{P(M\mid B)P(B)}{P(M)}=\frac{0{,}45\cdot0{,}15}{0{,}3725}\approx\boxed{0{,}1812}.$$

**c)** Hay dos órdenes favorables, fútbol-otros y otros-fútbol. Por eso,

$$P(F,O\text{ en cualquier orden})=2\cdot0{,}4\cdot0{,}45=\boxed{0{,}36}.$$

## Ejercicio 2 · Reparto de una inversión

### Enunciado

Una empresa invierte 20.000 € en tres fondos, **A**, **B** y **C**. El beneficio por cada euro invertido es del 5 %, 10 % y 2 %, respectivamente. En total obtiene 994 € de beneficio. Además, destina al fondo A el triple de la suma invertida en B y C.

**a)** Escribe el sistema de ecuaciones.  
**b)** Resuélvelo para saber cuánto recibe cada fondo.

### Solución

Si $a$, $b$ y $c$ son las cantidades invertidas, las tres condiciones se traducen en

$$\begin{cases}a+b+c=20000,\\0{,}05a+0{,}10b+0{,}02c=994,\\a=3(b+c).\end{cases}$$

De la primera y la tercera, $a=3(20000-a)$; por tanto, $4a=60000$ y $a=15000$. Quedan $b+c=5000$. Al sustituir en el beneficio:

$$750+0{,}10b+0{,}02c=994\quad\Longrightarrow\quad0{,}10b+0{,}02c=244.$$

Con $c=5000-b$ obtenemos $0{,}08b+100=244$, luego $b=1800$ y $c=3200$. La distribución es $\boxed{15\,000\text{ € en A}}$, $\boxed{1\,800\text{ € en B}}$ y $\boxed{3\,200\text{ € en C}}$.

## Ejercicio 3 · Opción A: arena de una playa

### Enunciado

Tras construir un dique, la profundidad $P(t)$ de la arena de una playa, en metros, depende de los años $t$ transcurridos según

$$P(t)=\begin{cases}2+t^2,&0\le t\le1,\\\dfrac{8t^2-t-1}{2t^2},&t>1.\end{cases}$$

Si la profundidad supera los 4 metros, será necesario elevar el paseo marítimo.

**a.1)** Comprueba si $P$ es continua.  
**a.2)** ¿Hay algún periodo en el que la profundidad disminuya?  
**a.3)** ¿Llegará a superar los 4 metros con el paso del tiempo?

### Solución

**a.1)** La única unión de tramos se produce en $t=1$. El primer tramo vale $P(1)=2+1^2=3$ y el segundo se aproxima a

$$\lim_{t\to1^+}\frac{8t^2-t-1}{2t^2}=\frac{8-1-1}{2}=3.$$

Como coinciden, **la función es continua**.

**a.2)** Derivamos en ambos intervalos:

$$P'(t)=\begin{cases}2t,&0<t<1,\\\dfrac{t+2}{2t^3},&t>1.\end{cases}$$

Ambas expresiones son positivas en sus respectivos intervalos: **la profundidad nunca disminuye**.

**a.3)** La segunda rama puede escribirse $P(t)=4-\dfrac{t+1}{2t^2}$. Para $t>1$ el término restado es positivo, así que $P(t)<4$, aunque

$$\lim_{t\to\infty}P(t)=4.$$

La profundidad se acerca a 4 metros sin alcanzarlos ni superarlos. **No será necesario elevar el paseo por esta causa**.

## Ejercicio 3 · Opción B: atención durante una clase

### Enunciado

La atención del alumnado durante una clase de 40 minutos se mide entre 0 y 100 y se modeliza como

$$F(t)=at(b-t),\qquad0\le t\le40.$$

A los 20 minutos se alcanza la máxima atención, de 100 puntos.

**b.1)** Encuentra $a$ y $b$.  
**b.2)** ¿Cuánta atención predice el modelo a los 5 minutos?  
**b.3)** Con las matrices

$$A=\begin{pmatrix}1&1\\0&1\end{pmatrix},\qquad B=\begin{pmatrix}7&-3\\8&-3\end{pmatrix},$$

encuentra $X$ en la ecuación $AXA^{-1}=B$.

### Solución

**b.1)** Derivamos $F'(t)=ab-2at$. Al existir un máximo en $t=20$:

$$F'(20)=0\Rightarrow ab-40a=0\Rightarrow b=40,$$

ya que $a=0$ no permitiría alcanzar 100 puntos. Ahora $F(20)=20a(40-20)=400a=100$, por lo que $\boxed{a=1/4}$ y $\boxed{b=40}$.

**b.2)** $F(5)=\dfrac14\cdot5\cdot(40-5)=\boxed{43{,}75}$ puntos.

**b.3)** Despejando: $X=A^{-1}BA$. Primero,

$$A^{-1}=\begin{pmatrix}1&-1\\0&1\end{pmatrix}.$$

Después multiplicamos:

$$X=\begin{pmatrix}1&-1\\0&1\end{pmatrix}\begin{pmatrix}7&-3\\8&-3\end{pmatrix}\begin{pmatrix}1&1\\0&1\end{pmatrix}=\boxed{\begin{pmatrix}-1&-1\\8&5\end{pmatrix}}.$$

## Ejercicio 4 · Opción A: gestión de un coto

### Enunciado

En un coto se permite cazar, como mucho, 400 piezas entre conejos y perdices. Debe haber tantos conejos como perdices o más, y nunca se pueden cazar más de 240 conejos. El beneficio es de 35 € por conejo y 43 € por perdiz.

**a.1)** Plantea la función que se quiere maximizar y todas las restricciones; describe la región posible.  
**a.2)** Encuentra cuántos animales de cada tipo maximizan el beneficio.

### Solución

Llamamos $x$ a los conejos e $y$ a las perdices. Maximizamos

$$B(x,y)=35x+43y$$

con $x+y\le400$, $0\le y\le x$ y $x\le240$. La región es el polígono delimitado por estas rectas y los ejes. Sus vértices son:

| $(x,y)$ | Beneficio |
|---|---:|
| $(0,0)$ | 0 € |
| $(240,0)$ | 8.400 € |
| $(240,160)$ | 15.280 € |
| $(200,200)$ | **15.600 €** |

Para hallar $(200,200)$ resolvemos $x=y$ y $x+y=400$. Comparando los beneficios, la mejor elección es **200 conejos y 200 perdices**, con $\boxed{15\,600\text{ €}}$ de beneficio.

## Ejercicio 4 · Opción B: duración de llamadas

### Enunciado

La duración de las llamadas de una operadora sigue una distribución normal con desviación típica de 60 segundos. En una muestra de 36 llamadas, la media ha sido de 240 segundos.

**b.1)** Calcula el intervalo de confianza del 95 % para la duración media.  
**b.2)** ¿Qué amplitud tendría ese intervalo si el tamaño de la muestra aumentara a 100?  
**b.3)** ¿Habría que subir o bajar el nivel de confianza para que 230 segundos dejara de estar dentro del intervalo calculado en b.1?

### Solución

**b.1)** Con $z_{0{,}975}=1{,}96$:

$$IC=\overline x\pm z\frac\sigma{\sqrt n}=240\pm1{,}96\frac{60}{\sqrt{36}}=240\pm19{,}6.$$

Por tanto, $\boxed{IC_{95\%}=[220{,}4;259{,}6]\text{ s}}$.

**b.2)** Si $n=100$, el margen de error baja a $1{,}96\cdot60/10=11{,}76$ segundos. La **amplitud total** será $2\cdot11{,}76=\boxed{23{,}52\text{ s}}$.

**b.3)** Como 230 s está dentro del intervalo de confianza actual, necesitamos **reducir** su amplitud. Manteniendo la muestra, esto se consigue **bajando el nivel de confianza**.

## Cómo usar este examen para preparar la PAU

Haz una primera vuelta sin consultar la solución. Al corregir, señala el primer paso que no supiste justificar y repítelo al día siguiente. Así conviertes un modelo de examen en una lista concreta de técnicas que debes entrenar.

Si quieres trabajar estos bloques con una ruta de práctica, explicaciones y seguimiento, tienes el [Campus de Método Nebula](/campus/).

