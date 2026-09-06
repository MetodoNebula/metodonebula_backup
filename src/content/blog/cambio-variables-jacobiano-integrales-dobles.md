---
title: "Cambio de variables y jacobiano en integrales dobles"
date: "2026-09-06"
updated: "2026-09-06"
description: "Aprende a cambiar variables en integrales dobles: jacobiano, coordenadas polares, transformaciones lineales y ejercicios resueltos."
tag: "Cálculo"
category: "Matemáticas universitarias"
relatedService: "/clases-particulares/calculo-universitario/"
relatedPosts: "integrales-dobles-ejercicios-resueltos,derivadas-parciales-gradiente-ejercicios,integracion-por-sustitucion-cambio-variable-ejercicios"
image: "/assets/latex/jacobian-coordinate-transform.svg"
---

Un cambio de variables transforma una región y un integrando difíciles en otros más sencillos. En integrales dobles no basta con sustituir $x$ e $y$: también hay que transformar el elemento de área. El determinante jacobiano es el factor que mide cómo se estiran o comprimen localmente las áreas.

Las coordenadas polares son el caso más conocido, pero el mismo principio sirve para enderezar paralelogramos, regiones entre hipérbolas y dominios delimitados por familias de curvas.

## La idea a partir de una variable

En una integral de una variable, si $x=g(u)$, entonces

$$
dx=g'(u)\,du.
$$

La derivada corrige el cambio de escala. Por ejemplo, si $x=2u$, un intervalo de longitud $du$ se convierte en otro de longitud $2du$.

En dos dimensiones usamos una transformación

$$
T(u,v)=\bigl(x(u,v),y(u,v)\bigr).
$$

Un pequeño rectángulo de lados $du$ y $dv$ en el plano $uv$ se transforma aproximadamente en un paralelogramo en el plano $xy$. Sus lados locales vienen dados por

$$
T_u=(x_u,y_u),
\qquad
T_v=(x_v,y_v).
$$

El área del paralelogramo es el valor absoluto de su determinante:

$$
dA\approx
\left|\det
\begin{pmatrix}
x_u & x_v\\
y_u & y_v
\end{pmatrix}\right|du\,dv.
$$

![Una cuadrícula rectangular transformada en una cuadrícula curvada, con una celda elemental destacada](/assets/latex/jacobian-coordinate-transform.svg)

## Definición del jacobiano

El jacobiano de $(x,y)$ respecto de $(u,v)$ es

$$
\frac{\partial(x,y)}{\partial(u,v)}
=
\begin{vmatrix}
\dfrac{\partial x}{\partial u} & \dfrac{\partial x}{\partial v}\\[4pt]
\dfrac{\partial y}{\partial u} & \dfrac{\partial y}{\partial v}
\end{vmatrix}
=x_uy_v-x_vy_u.
$$

La fórmula de cambio de variables es

$$
\boxed{
\iint_R f(x,y)\,dx\,dy
=\iint_S f(x(u,v),y(u,v))
\left|\frac{\partial(x,y)}{\partial(u,v)}\right|du\,dv
}
$$

donde $T$ lleva la región $S$ del plano $uv$ a la región $R$ del plano $xy$.

El valor absoluto es obligatorio porque una integral de área no debe cambiar de signo si la transformación invierte la orientación. Un jacobiano negativo indica esa inversión, no un área negativa.

## Condiciones que deben revisarse

La versión habitual del teorema exige que la transformación sea continuamente diferenciable, que sea uno a uno en el interior relevante y que el jacobiano no se anule salvo, como mucho, en conjuntos de área cero que puedan tratarse adecuadamente.

En la práctica comprueba:

- que las fórmulas cubren toda la región original;
- que no cubren la misma zona varias veces;
- que puedes describir la región nueva con límites correctos;
- que usas el jacobiano en la dirección adecuada;
- que los puntos donde el determinante se anula no invalidan la transformación.

Las coordenadas polares, por ejemplo, identifican todos los valores de $\theta$ cuando $r=0$. Esa falta de unicidad ocurre en un único punto, de área cero, y no impide su uso habitual en un disco.

## Método paso a paso

1. Dibuja o interpreta las fronteras de $R$.
2. Busca expresiones que se repitan en el integrando y en las fronteras.
3. Define las variables nuevas $u$ y $v$.
4. Despeja $x=x(u,v)$ e $y=y(u,v)$ cuando sea posible.
5. Transforma cada frontera y describe la nueva región $S$.
6. Calcula el valor absoluto del jacobiano inverso.
7. Sustituye el integrando completo y el elemento de área.
8. Integra en $S$.
9. Comprueba signo, unidades, área o simetría.

No empieces por el determinante sin decidir antes si la transformación simplifica realmente la región o el integrando.

## Coordenadas polares

La transformación polar es

$$
x=r\cos\theta,
\qquad
y=r\sin\theta.
$$

Su jacobiano es

$$
\frac{\partial(x,y)}{\partial(r,\theta)}
=
\begin{vmatrix}
\cos\theta & -r\sin\theta\\
\sin\theta & r\cos\theta
\end{vmatrix}
=r\cos^2\theta+r\sin^2\theta=r.
$$

Como se toma $r\ge0$,

$$
dx\,dy=r\,dr\,d\theta.
$$

El factor $r$ tiene una interpretación geométrica. Una pequeña variación $dr$ cambia el radio, mientras que un ángulo $d\theta$ recorre un arco de longitud aproximada $r\,d\theta$. El área local es, por tanto, $dr(r\,d\theta)$.

## Cuándo elegir coordenadas polares

Son especialmente útiles cuando aparecen:

- discos, semidiscos, sectores o coronas circulares;
- expresiones $x^2+y^2$;
- funciones que dependen solo de la distancia al origen;
- fronteras del tipo $x^2+y^2=a^2$;
- rectas que parten del origen, convertidas en ángulos constantes.

Las identidades básicas son

$$
x^2+y^2=r^2,
\qquad
\tan\theta=\frac yx.
$$

Una circunferencia desplazada no siempre se simplifica con polares centradas en el origen; a veces conviene trasladar primero las coordenadas.

## Ejemplo 1: integral sobre un disco

Calcula

$$
I=\iint_R(x^2+y^2)\,dA,
\qquad
R=\{x^2+y^2\le4\}.
$$

El disco se transforma en

$$
0\le r\le2,
\qquad
0\le\theta\le2\pi.
$$

El integrando pasa a ser $r^2$ y el elemento de área aporta otro factor $r$:

$$
I=\int_0^{2\pi}\int_0^2r^3\,dr\,d\theta.
$$

Entonces

$$
I=\int_0^{2\pi}\left[\frac{r^4}{4}\right]_0^2d\theta
=\int_0^{2\pi}4\,d\theta
=8\pi.
$$

Como $0\le x^2+y^2\le4$ y el área del disco es $4\pi$, la integral debe estar entre $0$ y $16\pi$. El resultado cumple la cota.

## Ejemplo 2: volumen bajo un paraboloide

Hallemos el volumen bajo

$$
z=4-x^2-y^2
$$

y sobre el plano $z=0$. La superficie corta al plano cuando $x^2+y^2=4$, así que la base es el disco de radio $2$.

En polares,

$$
V=\int_0^{2\pi}\int_0^2(4-r^2)r\,dr\,d\theta.
$$

La integral radial es

$$
\left[2r^2-\frac{r^4}{4}\right]_0^2=4.
$$

Por tanto,

$$
V=\int_0^{2\pi}4\,d\theta=8\pi.
$$

El integrando es no negativo en toda la base y se anula en el borde, coherente con el sólido descrito.

## Ejemplo 3: sector anular

Sea

$$
R=\{(x,y):1\le x^2+y^2\le9,\ 0\le y\le x\}.
$$

Las circunferencias dan $1\le r\le3$. La condición $0\le y\le x$ selecciona el sector del primer cuadrante entre $\theta=0$ y $\theta=\pi/4$. El área es

$$
A=\int_0^{\pi/4}\int_1^3r\,dr\,d\theta.
$$

Calculando,

$$
A=\frac\pi4\left[\frac{r^2}{2}\right]_1^3
=\frac\pi4\cdot4=\pi.
$$

También coincide con la fracción $1/8$ del área de la corona completa: $(1/8)\pi(9-1)=\pi$.

## Transformaciones lineales

Si

$$
x=au+bv,
\qquad
y=cu+dv,
$$

el jacobiano es el determinante constante

$$
\frac{\partial(x,y)}{\partial(u,v)}=ad-bc.
$$

Una transformación con determinante no nulo convierte rectángulos en paralelogramos y multiplica todas las áreas por $|ad-bc|$.

## Ejemplo 4: enderezar un rombo

Considera la región

$$
R=\{(x,y):|x+y|\le1,\ |x-y|\le1\}.
$$

Sus fronteras sugieren

$$
u=x+y,
\qquad
v=x-y.
$$

En el plano $uv$, la región es el cuadrado

$$
-1\le u\le1,
\qquad
-1\le v\le1.
$$

Despejamos:

$$
x=\frac{u+v}{2},
\qquad
y=\frac{u-v}{2}.
$$

El jacobiano inverso es

$$
\frac{\partial(x,y)}{\partial(u,v)}
=
\begin{vmatrix}
1/2 & 1/2\\
1/2 & -1/2
\end{vmatrix}
=-\frac12.
$$

Para calcular el área usamos su valor absoluto:

$$
A=\int_{-1}^1\int_{-1}^1\frac12\,dv\,du=2.
$$

La región original es un rombo con diagonales $2$ y $2$, cuya área también es $(2\cdot2)/2=2$.

Si además queremos integrar $(x+y)^2$, el integrando se convierte en $u^2$:

$$
\iint_R(x+y)^2\,dA
=\int_{-1}^1\int_{-1}^1\frac{u^2}{2}\,dv\,du
=\frac23.
$$

La transformación simplifica simultáneamente las fronteras y el integrando.

## Jacobiano directo e inverso

Si defines

$$
u=u(x,y),\qquad v=v(x,y),
$$

es frecuente calcular primero

$$
\frac{\partial(u,v)}{\partial(x,y)}.
$$

Pero la fórmula de integración en $du\,dv$ necesita

$$
\left|\frac{\partial(x,y)}{\partial(u,v)}\right|.
$$

Cuando las transformaciones son localmente inversas,

$$
\frac{\partial(x,y)}{\partial(u,v)}
=\frac{1}{\dfrac{\partial(u,v)}{\partial(x,y)}}.
$$

El determinante del denominador debe evaluarse expresándolo en las nuevas variables si no es constante. Confundir ambas direcciones es uno de los errores más frecuentes.

## Ejemplo 5: región entre hipérbolas y rectas

En el primer cuadrante, sea $R$ la región delimitada por

$$
xy=1,\quad xy=4,\quad \frac xy=1,\quad \frac xy=9.
$$

Las propias fronteras sugieren

$$
u=xy,
\qquad
v=\frac xy.
$$

La región nueva es el rectángulo

$$
1\le u\le4,
\qquad
1\le v\le9.
$$

Como estamos en el primer cuadrante,

$$
x=\sqrt{uv},
\qquad
y=\sqrt{\frac uv}.
$$

Al calcular el determinante se obtiene

$$
\left|\frac{\partial(x,y)}{\partial(u,v)}\right|
=\frac1{2v}.
$$

Evaluemos

$$
I=\iint_R\frac1{xy}\,dA.
$$

Como $xy=u$,

$$
I=\int_1^4\int_1^9\frac1u\frac1{2v}\,dv\,du.
$$

La integral es separable:

$$
I=\frac12\left(\int_1^4\frac{du}{u}\right)
\left(\int_1^9\frac{dv}{v}\right)
=\frac12\ln4\ln9
=2\ln2\ln3.
$$

Sin el cambio, describir las cuatro fronteras en coordenadas cartesianas exigiría dividir la región.

## Cómo elegir las variables nuevas

Busca familias de fronteras que puedan convertirse en constantes:

- $x+y=c$ y $x-y=c$ sugieren $u=x+y$, $v=x-y$;
- $xy=c$ y $x/y=c$ sugieren $u=xy$, $v=x/y$;
- $x^2+y^2=c$ y rayos desde el origen sugieren polares;
- $ax+by=c$ junto con $cx+dy=c$ sugieren una transformación lineal;
- elipses $x^2/a^2+y^2/b^2=c$ sugieren escalar $x=au$, $y=bv$ y quizá usar polares después.

Una buena elección suele simplificar dos cosas a la vez: el dominio y una expresión dominante del integrando. Si solo simplifica una frontera pero vuelve el integrando mucho peor, quizá no compense.

## Ejemplo 6: una elipse convertida en disco

Calculemos el área de

$$
\frac{x^2}{9}+\frac{y^2}{4}\le1.
$$

Tomamos

$$
x=3u,
\qquad
y=2v.
$$

La región pasa al disco unidad $u^2+v^2\le1$ y

$$
\left|\frac{\partial(x,y)}{\partial(u,v)}\right|=6.
$$

Por tanto,

$$
A=\iint_{u^2+v^2\le1}6\,du\,dv=6\pi.
$$

También puede combinarse en un solo paso con

$$
x=3r\cos\theta,
\qquad
y=2r\sin\theta.
$$

El jacobiano es $6r$, y

$$
A=\int_0^{2\pi}\int_0^16r\,dr\,d\theta=6\pi.
$$

El resultado coincide con la fórmula geométrica $\pi ab$ para semiejes $3$ y $2$.

## Ejemplo 7: la integral gaussiana mediante polares

El cambio polar permite calcular una integral sin primitiva elemental directa:

$$
I=\int_{-\infty}^{+\infty}e^{-x^2}\,dx.
$$

Como el integrando es positivo, $I>0$. Elevamos al cuadrado e introducimos una segunda variable independiente:

$$
I^2
=\int_{-\infty}^{+\infty}\int_{-\infty}^{+\infty}
e^{-(x^2+y^2)}\,dx\,dy.
$$

La región es todo el plano y el integrando depende de $x^2+y^2$, así que usamos polares:

$$
I^2
=\int_0^{2\pi}\int_0^{+\infty}e^{-r^2}r\,dr\,d\theta.
$$

Con $u=r^2$, $du=2r\,dr$, la integral radial vale

$$
\int_0^{+\infty}e^{-r^2}r\,dr
=\frac12\int_0^{+\infty}e^{-u}\,du
=\frac12.
$$

Por tanto,

$$
I^2=2\pi\cdot\frac12=\pi.
$$

Como $I$ es positiva,

$$
\boxed{I=\sqrt\pi}.
$$

El argumento completo requiere justificar el paso a la integral doble impropia, algo permitido aquí por la no negatividad. Conceptualmente, una integral difícil en una dimensión se vuelve radialmente elemental después de formar un problema bidimensional.

## Composición de transformaciones

A veces conviene realizar dos cambios sucesivos. Si $(u,v)$ depende de $(r,s)$ y $(x,y)$ depende de $(u,v)$, la regla de la cadena para determinantes da

$$
\frac{\partial(x,y)}{\partial(r,s)}
=\frac{\partial(x,y)}{\partial(u,v)}
\frac{\partial(u,v)}{\partial(r,s)}.
$$

Esto explica el jacobiano $6r$ de la elipse: el escalado $(u,v)\mapsto(3u,2v)$ aporta $6$, y las polares $(r,\theta)\mapsto(u,v)$ aportan $r$.

La multiplicación también ofrece una comprobación práctica. Si calculas el determinante combinado directamente y no coincide con el producto, alguna derivada parcial o algún orden de variables es incorrecto.

## Traslaciones y polares desplazadas

Si una región circular está centrada en $(a,b)$, conviene introducir primero

$$
u=x-a,
\qquad
v=y-b.
$$

Esta traslación tiene jacobiano $1$: desplaza áreas sin deformarlas. Después usamos polares en las variables trasladadas,

$$
u=r\cos\theta,
\qquad
v=r\sin\theta,
$$

de modo que

$$
x=a+r\cos\theta,
\qquad
y=b+r\sin\theta,
$$

y el jacobiano combinado sigue siendo $r$.

Por ejemplo, el disco $(x-2)^2+(y+1)^2\le9$ se convierte en $0\le r\le3$, $0\le\theta\le2\pi$. Usar polares centradas en el origen produciría una frontera radial dependiente del ángulo y perdería la principal ventaja del cambio.

Las traslaciones también simplifican integrandos como $(x-a)^2+(y-b)^2$. La regla práctica es centrar las coordenadas en el punto respecto del cual existe simetría antes de pasar a polares.

Esta elección no cambia la geometría del problema; solo escoge un sistema de referencia mejor adaptado. Conviene transformar primero la ecuación del borde y verificar que se reduce a $r=R$. Si todavía depende de $\theta$, revisa el centro elegido o valora otra transformación.

## Transformaciones que cubren varias veces

No basta con que el jacobiano sea fácil. La transformación debe tener una multiplicidad controlada. Por ejemplo,

$$
x=r\cos\theta,\qquad y=r\sin\theta
$$

cubre el disco una vez si $0\le r\le R$ y se toma un intervalo angular de longitud $2\pi$. Si usamos $0\le\theta\le4\pi$, casi todos los puntos se cuentan dos veces y la integral se duplica.

Algo similar ocurre con transformaciones cuadráticas. Si

$$
u=x^2-y^2,
\qquad
v=2xy,
$$

los puntos $(x,y)$ y $(-x,-y)$ producen el mismo $(u,v)$. Para usarla hay que restringir el dominio a una zona donde sea uno a uno o corregir explícitamente la multiplicidad.

## Cómo comprobar el resultado

### Comprobación de área

Integra solo el jacobiano sobre $S$. El resultado debe coincidir con el área conocida o estimada de $R$:

$$
\operatorname{área}(R)
=\iint_S\left|\frac{\partial(x,y)}{\partial(u,v)}\right|du\,dv.
$$

### Dimensión del jacobiano

Si $u$ y $v$ son adimensionales y $x,y$ tienen unidades de longitud, el jacobiano debe aportar unidades de área. En polares, $r\,dr\,d\theta$ tiene dimensión longitud al cuadrado.

### Cotas y signo

Si el integrando original es no negativo, el resultado debe ser no negativo. Si $m\le f\le M$, multiplica esas cotas por el área para acotar la integral.

### Inversa local

Cuando sea posible, comprueba que

$$
\frac{\partial(u,v)}{\partial(x,y)}
\frac{\partial(x,y)}{\partial(u,v)}=1.
$$

Esto detecta si has usado el determinante recíproco incorrecto.

## El signo y la orientación

La transformación $x=u$, $y=-v$ refleja el plano respecto del eje $x$. Su jacobiano es $-1$: conserva áreas, pero invierte la orientación. Para una integral escalar usamos $|-1|=1$.

La orientación sí importa en otros contextos, como integrales de línea, flujo y teoremas vectoriales, donde el signo codifica el sentido de recorrido o la normal elegida. En el cambio de variables de una integral doble ordinaria, el elemento $dA$ representa área positiva y por eso se utiliza siempre el valor absoluto.

Este detalle permite recordar la regla: el determinante con signo describe orientación y escala; su valor absoluto conserva únicamente la escala de área necesaria aquí.

## Errores frecuentes

### Sustituir el integrando y olvidar $dA$

En polares, escribir $dx\,dy=dr\,d\theta$ pierde el factor $r$. El resultado suele tener incluso unidades o escalas incorrectas.

### No usar valor absoluto

El signo del determinante describe orientación. El factor de área es siempre su valor absoluto.

### Transformar el dominio de memoria

Cada frontera debe traducirse por separado. Una desigualdad angular requiere además identificar el cuadrante correcto.

### Usar el jacobiano en la dirección equivocada

Si calculas $\partial(u,v)/\partial(x,y)$ pero integras en $du\,dv$, normalmente necesitas su recíproco.

### Ignorar la inyectividad

Una parametrización que recorre dos veces la región duplica la integral. El intervalo angular y las ramas de raíces deben elegirse con cuidado.

## Ejercicios propuestos

1. Calcula el jacobiano de $x=2u+v$, $y=u-3v$.
2. Transforma $x^2+y^2\le9$ a polares y halla su área.
3. Evalúa $\iint_R e^{-(x^2+y^2)}dA$ en el disco unidad.
4. Halla el área del sector $1\le r\le2$, $\pi/6\le\theta\le\pi/2$.
5. Con $u=x+y$, $v=x-y$, expresa $x^2-y^2$ en función de $u,v$.
6. Halla el área de $|x+y|\le2$, $|x-y|\le3$.
7. Transforma la elipse $x^2/16+y^2/9\le1$ en el disco unidad y halla su área.
8. Calcula $\iint_R(x^2+y^2)dA$ sobre la corona $1\le x^2+y^2\le4$.
9. Si $u=2x+y$ y $v=x-y$, calcula $\partial(x,y)/\partial(u,v)$.
10. Explica qué ocurre al usar polares con $0\le\theta\le4\pi$ para integrar un disco.

## Soluciones

### Ejercicio 1

El determinante es

$$
\begin{vmatrix}2&1\\1&-3\end{vmatrix}=-7.
$$

El factor de área es $7$.

### Ejercicio 2

Los límites son $0\le r\le3$, $0\le\theta\le2\pi$. Entonces

$$
A=\int_0^{2\pi}\int_0^3r\,dr\,d\theta=9\pi.
$$

### Ejercicio 3

En polares,

$$
I=\int_0^{2\pi}\int_0^1e^{-r^2}r\,dr\,d\theta.
$$

Con $u=r^2$ resulta

$$
I=\pi(1-e^{-1}).
$$

### Ejercicio 4

El ángulo mide $\pi/3$. Por tanto,

$$
A=\int_{\pi/6}^{\pi/2}\int_1^2r\,dr\,d\theta
=\frac\pi3\cdot\frac32=\frac\pi2.
$$

### Ejercicio 5

Como $x=(u+v)/2$ e $y=(u-v)/2$,

$$
x^2-y^2=(x+y)(x-y)=uv.
$$

### Ejercicio 6

La región nueva es $-2\le u\le2$, $-3\le v\le3$ y el factor jacobiano es $1/2$. Su área es

$$
(4)(6)\frac12=12.
$$

### Ejercicio 7

Tomamos $x=4u$, $y=3v$. El jacobiano vale $12$ y el disco unidad tiene área $\pi$, así que el área de la elipse es $12\pi$.

### Ejercicio 8

La corona corresponde a $1\le r\le2$. Entonces

$$
I=\int_0^{2\pi}\int_1^2r^2r\,dr\,d\theta
=2\pi\left[\frac{r^4}{4}\right]_1^2
=\frac{15\pi}{2}.
$$

### Ejercicio 9

El jacobiano directo es

$$
\frac{\partial(u,v)}{\partial(x,y)}
=\begin{vmatrix}2&1\\1&-1\end{vmatrix}=-3.
$$

Por tanto,

$$
\frac{\partial(x,y)}{\partial(u,v)}=-\frac13,
$$

y el factor de área es $1/3$.

### Ejercicio 10

Cada punto del disco, salvo excepciones de área cero, se representa dos veces. La integral resultante será el doble de la correcta. Debe usarse un intervalo angular de longitud $2\pi$ para una cobertura única.

## Resumen operativo

Un cambio de variables útil convierte las fronteras en límites simples y reduce el integrando. Después hay que transformar también el área mediante el valor absoluto del jacobiano. En polares, recuerda $dA=r\,dr\,d\theta$; en transformaciones definidas como $u(x,y)$ y $v(x,y)$, revisa si necesitas el determinante inverso.

Conviene dominar antes el planteamiento de [integrales dobles y cambios de orden](/blog/integrales-dobles-ejercicios-resueltos/). Para practicar transformaciones sobre regiones de examen, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
