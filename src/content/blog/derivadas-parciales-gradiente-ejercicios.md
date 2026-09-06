---
title: "Derivadas parciales y gradiente: teoría y ejercicios"
date: "2026-09-06"
updated: "2026-09-06"
description: "Entiende las derivadas parciales y el gradiente con ejemplos: derivadas direccionales, curvas de nivel, plano tangente y ejercicios."
tag: "Cálculo"
category: "Matemáticas universitarias"
relatedService: "/clases-particulares/calculo-universitario/"
relatedPosts: "que-son-las-derivadas-y-para-que-se-utilizan,derivacion-implicita-ejercicios-resueltos,problemas-optimizacion-derivadas-ejercicios-resueltos"
image: "/assets/latex/gradient-level-curves.svg"
---

Las derivadas parciales describen cómo cambia una función de varias variables cuando modificamos una sola coordenada. El gradiente reúne esas tasas de cambio y señala la dirección de crecimiento más rápido. Estas dos ideas son la puerta de entrada al cálculo multivariable y aparecen en optimización, economía, física, ingeniería y aprendizaje automático.

El procedimiento de cálculo suele ser breve; lo importante es interpretar qué variable se mueve, qué permanece fijo y qué información geométrica contiene el resultado.

## De una variable a varias variables

En una función de una variable, $y=f(x)$, la derivada $f'(a)$ mide la tasa de cambio instantánea al variar $x$ cerca de $a$. Para una función de dos variables,

$$
z=f(x,y),
$$

hay muchas formas de moverse desde un punto $(a,b)$. Podemos cambiar solo $x$, solo $y$ o avanzar en cualquier dirección del plano. Una única cifra ya no basta para describir todos esos cambios.

Por ejemplo, si $T(x,y)$ representa la temperatura sobre un mapa, la variación percibida al caminar hacia el este puede ser distinta de la obtenida al caminar hacia el norte. Las derivadas parciales miden esos cambios básicos y el gradiente permite combinarlos para cualquier dirección.

Antes de derivar, también hay que revisar el dominio. Para

$$
f(x,y)=\ln(4-x^2-y^2),
$$

se exige

$$
x^2+y^2<4.
$$

El dominio es el disco abierto de radio $2$, no un intervalo de la recta.

## Definición de derivada parcial

La derivada parcial respecto de $x$ en $(a,b)$ se define como

$$
f_x(a,b)=\frac{\partial f}{\partial x}(a,b)
=\lim_{h\to0}\frac{f(a+h,b)-f(a,b)}{h},
$$

si el límite existe. La coordenada $y=b$ se mantiene fija. De manera análoga,

$$
f_y(a,b)=\frac{\partial f}{\partial y}(a,b)
=\lim_{h\to0}\frac{f(a,b+h)-f(a,b)}{h}.
$$

Las notaciones $f_x$, $D_xf$ y $\partial f/\partial x$ expresan la misma idea. El símbolo $\partial$ recuerda que solo derivamos respecto de una parte de las variables.

Geométricamente, $f_x(a,b)$ es la pendiente de la curva obtenida al cortar la superficie $z=f(x,y)$ con el plano $y=b$. Del mismo modo, $f_y(a,b)$ es la pendiente del corte $x=a$.

## Cómo calcular derivadas parciales

Para hallar $f_x$, trata $y$ como una constante. Para hallar $f_y$, trata $x$ como una constante. Se aplican las mismas reglas de suma, producto, cociente y cadena que en una variable.

### Ejemplo 1: polinomio de dos variables

Sea

$$
f(x,y)=x^3y^2+4xy-5y.
$$

Respecto de $x$, los factores que solo contienen $y$ son constantes:

$$
f_x(x,y)=3x^2y^2+4y.
$$

Respecto de $y$:

$$
f_y(x,y)=2x^3y+4x-5.
$$

No debe escribirse $y'=0$ ni introducir una derivada implícita: aquí $x$ e $y$ son variables independientes y simplemente se congela una de ellas.

### Ejemplo 2: exponencial con producto interior

Para

$$
f(x,y)=x^2y+e^{xy},
$$

la regla de la cadena da

$$
f_x(x,y)=2xy+ye^{xy},
$$

porque la derivada de $xy$ respecto de $x$ es $y$. De forma similar,

$$
f_y(x,y)=x^2+xe^{xy}.
$$

### Ejemplo 3: logaritmo y dominio

Si

$$
f(x,y)=\ln(x^2+y^2),
$$

el dominio es $\mathbb R^2\setminus\{(0,0)\}$. Sus parciales son

$$
f_x=\frac{2x}{x^2+y^2},
\qquad
f_y=\frac{2y}{x^2+y^2}.
$$

Las fórmulas tampoco están definidas en el origen, de acuerdo con el dominio de la función.

## Derivadas parciales de orden superior

Las primeras parciales pueden volver a derivarse. Para una función de dos variables aparecen cuatro derivadas de segundo orden:

$$
f_{xx},\qquad f_{xy},\qquad f_{yx},\qquad f_{yy}.
$$

Las dos primeras letras se leen según el orden de derivación adoptado por el texto; con la notación

$$
f_{xy}=\frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right),
$$

primero se deriva respecto de $x$ y después respecto de $y$.

Considera

$$
f(x,y)=x^3y+\sin(xy).
$$

Tenemos

$$
f_x=3x^2y+y\cos(xy),
\qquad
f_y=x^3+x\cos(xy).
$$

Por tanto,

$$
f_{xx}=6xy-y^2\sin(xy),
$$

$$
f_{xy}=3x^2+\cos(xy)-xy\sin(xy),
$$

y

$$
f_{yx}=3x^2+\cos(xy)-xy\sin(xy).
$$

Aquí las derivadas cruzadas coinciden. El teorema de Clairaut garantiza $f_{xy}=f_{yx}$ cerca de un punto si las segundas parciales son continuas en un entorno. No conviene asumir la igualdad sin hipótesis: existen funciones menos regulares donde falla.

## Qué es el gradiente

El gradiente de $f:\mathbb R^2\to\mathbb R$ es el vector formado por sus derivadas parciales:

$$
\nabla f(x,y)=\left(f_x(x,y),f_y(x,y)\right).
$$

Para una función de tres variables,

$$
\nabla f(x,y,z)=\left(f_x,f_y,f_z\right).
$$

No es un número, sino un campo vectorial: en cada punto asigna una dirección y una magnitud. Sus propiedades principales son:

- apunta en la dirección de máximo crecimiento local;
- su opuesto apunta en la dirección de máximo descenso;
- su norma es la máxima derivada direccional en ese punto;
- es perpendicular a las curvas o superficies de nivel regulares.

![Curvas de nivel elípticas con un vector gradiente perpendicular en un punto](/assets/latex/gradient-level-curves.svg)

### Ejemplo 4: dirección de máximo crecimiento

Sea

$$
f(x,y)=x^2+2y^2.
$$

Entonces

$$
\nabla f(x,y)=(2x,4y).
$$

En $P=(1,-1)$,

$$
\nabla f(1,-1)=(2,-4).
$$

La dirección unitaria de crecimiento máximo es

$$
\frac{\nabla f}{\|\nabla f\|}
=\frac{(2,-4)}{\sqrt{20}}
=\left(\frac1{\sqrt5},-\frac2{\sqrt5}\right).
$$

La tasa máxima de crecimiento es

$$
\|\nabla f(1,-1)\|=2\sqrt5.
$$

## Derivada direccional

Si $\mathbf u=(u_1,u_2)$ es un vector unitario, la derivada direccional de una función diferenciable en la dirección de $\mathbf u$ es

$$
D_{\mathbf u}f(a,b)=\nabla f(a,b)\cdot\mathbf u.
$$

El requisito de que $\mathbf u$ sea unitario es importante: así el resultado mide cambio por unidad de distancia. Si se proporciona un vector cualquiera $\mathbf v$, primero hay que normalizarlo:

$$
\mathbf u=\frac{\mathbf v}{\|\mathbf v\|}.
$$

### Ejemplo 5: cambio en una dirección concreta

Para la función anterior, en $P=(1,-1)$ y en la dirección de $\mathbf v=(3,4)$, el vector ya tiene norma $5$, de modo que

$$
\mathbf u=\left(\frac35,\frac45\right).
$$

Por tanto,

$$
D_{\mathbf u}f(1,-1)
=(2,-4)\cdot\left(\frac35,\frac45\right)
=\frac65-\frac{16}5=-2.
$$

La función disminuye a razón de $2$ unidades de altura por unidad de desplazamiento en esa dirección.

Por la desigualdad de Cauchy-Schwarz,

$$
\nabla f\cdot\mathbf u\le\|\nabla f\|\|\mathbf u\|=\|\nabla f\|.
$$

La igualdad se alcanza cuando $\mathbf u$ tiene la dirección del gradiente. De ahí se deduce rigurosamente la propiedad de máximo crecimiento.

## Curvas de nivel y perpendicularidad

Una curva de nivel de $f$ está formada por los puntos que satisfacen

$$
f(x,y)=c,
$$

donde $c$ es constante. En un mapa topográfico, cada curva une puntos de igual altura.

Si una trayectoria $\mathbf r(t)=(x(t),y(t))$ permanece en esa curva, entonces

$$
f(\mathbf r(t))=c.
$$

Al derivar mediante la regla de la cadena,

$$
\nabla f(\mathbf r(t))\cdot\mathbf r'(t)=0.
$$

El vector $\mathbf r'(t)$ es tangente a la curva; por tanto, el gradiente es perpendicular a ella cuando $\nabla f\ne\mathbf0$.

Para $f(x,y)=x^2+2y^2$, las curvas de nivel son elipses $x^2+2y^2=c$. En $(1,-1)$, la curva de nivel es $x^2+2y^2=3$ y el vector normal es $(2,-4)$, precisamente el gradiente.

Esta idea también explica la fórmula de la [derivación implícita](/blog/derivacion-implicita-ejercicios-resueltos/). Si $F(x,y)=0$, el gradiente $(F_x,F_y)$ es normal a la curva, mientras que un vector tangente puede escribirse como $(1,y')$. Su producto escalar es cero:

$$
F_x+F_yy'=0.
$$

## Plano tangente y aproximación lineal

Si $f$ es diferenciable, el plano tangente a la superficie $z=f(x,y)$ en $(a,b,f(a,b))$ es

$$
z-f(a,b)=f_x(a,b)(x-a)+f_y(a,b)(y-b).
$$

Este plano proporciona la aproximación lineal

$$
f(a+\Delta x,b+\Delta y)
\approx f(a,b)+f_x(a,b)\Delta x+f_y(a,b)\Delta y.
$$

### Ejemplo 6: plano tangente

Sea

$$
f(x,y)=x^2+xy+y^2.
$$

En $(1,2)$,

$$
f(1,2)=7,
$$

y las parciales son

$$
f_x=2x+y,\qquad f_y=x+2y.
$$

Luego $f_x(1,2)=4$ y $f_y(1,2)=5$. El plano tangente es

$$
z-7=4(x-1)+5(y-2).
$$

Para estimar $f(1.02,1.97)$ usamos $\Delta x=0.02$ y $\Delta y=-0.03$:

$$
f(1.02,1.97)\approx7+4(0.02)+5(-0.03)=6.93.
$$

El valor exacto es $6.9307$, de modo que la aproximación es buena porque el desplazamiento es pequeño.

## Superficies implícitas y vectores normales

Una superficie de nivel $F(x,y,z)=c$ tiene como vector normal

$$
\nabla F=(F_x,F_y,F_z).
$$

Por ejemplo, la esfera

$$
x^2+y^2+z^2=9
$$

contiene el punto $(1,2,2)$. Para $F=x^2+y^2+z^2$, el gradiente en ese punto es $(2,4,4)$. El plano tangente cumple

$$
2(x-1)+4(y-2)+4(z-2)=0,
$$

que puede simplificarse como

$$
x+2y+2z=9.
$$

El radio $(1,2,2)$ es paralelo al gradiente, tal como exige la geometría de una esfera.

## Regla de la cadena multivariable

Si $z=f(x,y)$ y tanto $x$ como $y$ dependen de $t$, entonces

$$
\frac{dz}{dt}
=f_x\frac{dx}{dt}+f_y\frac{dy}{dt}
=\nabla f\cdot\mathbf r'(t).
$$

### Ejemplo 7: función sobre una trayectoria

Sea $f(x,y)=x^2+y^2$ y la trayectoria

$$
x(t)=\cos t,\qquad y(t)=\sin t.
$$

Como $\nabla f=(2x,2y)$,

$$
\frac{df}{dt}
=2\cos t(-\sin t)+2\sin t(\cos t)=0.
$$

El resultado es lógico: la trayectoria recorre la circunferencia unidad, donde $x^2+y^2=1$ permanece constante.

Si $x=x(s,t)$ e $y=y(s,t)$ dependen de dos parámetros, se aplica la misma idea para cada uno:

$$
\frac{\partial z}{\partial s}
=f_x\frac{\partial x}{\partial s}
+f_y\frac{\partial y}{\partial s}.
$$

## Relación con la optimización

En una función diferenciable de dos variables, un extremo interior suele ser candidato a satisfacer

$$
\nabla f(x,y)=\mathbf0.
$$

Esto equivale al sistema

$$
f_x(x,y)=0,
\qquad
f_y(x,y)=0.
$$

La condición es necesaria en situaciones regulares, pero no suficiente: un punto con gradiente nulo puede ser un mínimo, un máximo o un punto de silla. La clasificación requiere información de segundo orden, normalmente la matriz hessiana.

Por ejemplo, $f(x,y)=x^2+y^2$ tiene gradiente cero en el origen y allí hay un mínimo absoluto. En cambio, $g(x,y)=x^2-y^2$ también tiene gradiente cero en el origen, pero crece en la dirección del eje $x$ y decrece en la del eje $y$: es un punto de silla.

La lógica es la extensión natural de los [problemas de optimización con derivadas](/blog/problemas-optimizacion-derivadas-ejercicios-resueltos/) de una variable, aunque la clasificación completa pertenece al cálculo multivariable.

## Existencia de parciales frente a diferenciabilidad

Que existan $f_x(a,b)$ y $f_y(a,b)$ no garantiza por sí solo que $f$ sea diferenciable en $(a,b)$. Las parciales solo exploran dos direcciones coordenadas; pueden ocultar comportamientos distintos al acercarse por otras trayectorias.

Un ejemplo clásico es

$$
f(x,y)=
\begin{cases}
\dfrac{xy}{x^2+y^2}, & (x,y)\ne(0,0),\\
0, & (x,y)=(0,0).
\end{cases}
$$

Las dos parciales en el origen valen cero, porque sobre cada eje el numerador es cero. Sin embargo, por la recta $y=x$,

$$
f(x,x)=\frac{x^2}{2x^2}=\frac12,
$$

así que la función ni siquiera es continua en el origen. Por tanto, no es diferenciable allí.

Una condición suficiente muy utilizada es que las derivadas parciales existan en un entorno y sean continuas en el punto. Entonces la función es diferenciable en ese punto.

## Diferencial total y propagación de pequeños errores

La aproximación lineal puede escribirse mediante el diferencial total:

$$
df=f_x\,dx+f_y\,dy.
$$

Si $x$ e $y$ se miden con pequeños errores $\Delta x$ y $\Delta y$, entonces

$$
\Delta f\approx f_x\Delta x+f_y\Delta y.
$$

Además, una cota conservadora del error absoluto es

$$
|\Delta f|\lesssim |f_x||\Delta x|+|f_y||\Delta y|.
$$

Supón que el área de un rectángulo es $A(x,y)=xy$ y se miden $x=20$ cm, $y=10$ cm con errores máximos de $0.1$ cm y $0.05$ cm. Como

$$
A_x=y=10,
\qquad
A_y=x=20,
$$

el error máximo aproximado es

$$
|\Delta A|\lesssim10(0.1)+20(0.05)=2\ \text{cm}^2.
$$

El área calculada es $200\ \text{cm}^2$, por lo que el error relativo aproximado es del $1\%$. Este uso muestra que las parciales también miden sensibilidad: $A_y=20$ indica que, cerca del punto considerado, un pequeño error en la altura influye el doble por centímetro que el mismo error en la base.

## Ejemplo 8: del gradiente a una curva de nivel

Sea

$$
f(x,y)=x^2-xy+y^2.
$$

Queremos hallar la tangente a la curva de nivel que pasa por $P=(1,2)$. Primero calculamos su nivel:

$$
f(1,2)=1-2+4=3.
$$

La curva es $x^2-xy+y^2=3$. Su gradiente es

$$
\nabla f=(2x-y,-x+2y),
$$

y en $P$ vale

$$
\nabla f(1,2)=(0,3).
$$

Este vector es normal a la curva. La ecuación de la recta tangente satisface

$$
(0,3)\cdot(x-1,y-2)=0,
$$

por lo que $3(y-2)=0$ y la tangente es $y=2$. Si usamos derivación implícita,

$$
2x-y-xy'+2yy'=0,
$$

obtenemos $y'=-(2x-y)/(-x+2y)$, que en $(1,2)$ vale cero. Los dos métodos coinciden.

## Qué método elegir en cada problema

- Si piden el cambio al variar solo una coordenada, calcula una derivada parcial.
- Si dan una dirección, normalízala y usa el producto escalar con el gradiente.
- Si preguntan por el ascenso más rápido, usa la dirección de $\nabla f$ y la tasa $\|\nabla f\|$.
- Si buscan una normal a un nivel, evalúa el gradiente de la función que define ese nivel.
- Si piden un plano tangente a $z=f(x,y)$, necesitas $f_x$, $f_y$ y el valor $f(a,b)$.
- Si las variables dependen de un parámetro, aplica la regla de la cadena multivariable.
- Si se trata de un extremo interior, resuelve $\nabla f=0$, pero reserva la clasificación para el análisis de segundo orden.

Identificar qué objeto se pide evita mezclar fórmulas parecidas. Un vector normal, una derivada direccional y un plano tangente usan el gradiente, pero producen respuestas de tipos distintos.

## Errores frecuentes

### Derivar también la variable que debe permanecer fija

Al calcular $f_x$, $y$ actúa como constante. En $x^2y$, la derivada es $2xy$, no $2xy+x^2$.

### Confundir parcial e implícita

En $z=f(x,y)$, las variables $x$ e $y$ suelen ser independientes. En $F(x,y)=0$, en cambio, se puede considerar que $y$ depende de $x$ a lo largo de una curva. El contexto decide si aparece $y'$.

### Usar un vector no unitario

El producto $\nabla f\cdot\mathbf v$ depende de la longitud de $\mathbf v$. Para una tasa por unidad de distancia, normaliza primero la dirección.

### Creer que el gradiente es tangente al nivel

Es justo lo contrario: cuando no es nulo, el gradiente es normal a la curva o superficie de nivel.

### Concluir diferenciabilidad solo por tener parciales

La existencia de parciales es una prueba incompleta. Revisa continuidad de las parciales o aplica directamente la definición de diferenciabilidad cuando las hipótesis habituales no se cumplen.

## Ejercicios propuestos

1. Calcula las primeras parciales de $f(x,y)=x^2y^3-2xy$.
2. Halla $f_x$ y $f_y$ para $f(x,y)=\sqrt{1+x^2+y^2}$.
3. Calcula $\nabla f(1,0)$ si $f(x,y)=e^{xy}+x^2$.
4. Halla la derivada direccional de $f(x,y)=x^2-y^2$ en $(1,2)$ hacia $(3,4)$.
5. Determina la dirección de máximo crecimiento de $f(x,y)=xy$ en $(2,-1)$.
6. Halla el plano tangente a $z=x^2+3y^2$ en $(1,1,4)$.
7. Encuentra un vector normal a $x^2+2y^2+z^2=6$ en $(1,1,\sqrt3)$.
8. Comprueba que el gradiente de $f(x,y)=x^2+y^2$ es perpendicular a la circunferencia $x^2+y^2=4$ en $(\sqrt2,\sqrt2)$.
9. Si $f(x,y)=x^2y$ y $x=t^2$, $y=\sin t$, calcula $df/dt$.
10. Decide si el origen es un punto crítico de $f(x,y)=x^2-4xy+4y^2$.

## Soluciones

### Ejercicio 1

Tratando la otra variable como constante,

$$
f_x=2xy^3-2y,
\qquad
f_y=3x^2y^2-2x.
$$

### Ejercicio 2

Por la regla de la cadena,

$$
f_x=\frac{x}{\sqrt{1+x^2+y^2}},
\qquad
f_y=\frac{y}{\sqrt{1+x^2+y^2}}.
$$

### Ejercicio 3

Se tiene $f_x=ye^{xy}+2x$ y $f_y=xe^{xy}$. En $(1,0)$,

$$
\nabla f(1,0)=(2,1).
$$

### Ejercicio 4

El vector unitario asociado a $(3,4)$ es $(3/5,4/5)$. Como $\nabla f(1,2)=(2,-4)$,

$$
D_{\mathbf u}f(1,2)
=(2,-4)\cdot\left(\frac35,\frac45\right)=-2.
$$

### Ejercicio 5

El gradiente es $\nabla f=(y,x)$. En $(2,-1)$ vale $(-1,2)$, que marca la dirección de máximo crecimiento. La dirección unitaria es

$$
\left(-\frac1{\sqrt5},\frac2{\sqrt5}\right).
$$

### Ejercicio 6

Las parciales son $f_x=2x$ y $f_y=6y$. En $(1,1)$ valen $2$ y $6$, luego

$$
z-4=2(x-1)+6(y-1).
$$

### Ejercicio 7

Para $F=x^2+2y^2+z^2$, el gradiente es $(2x,4y,2z)$. En el punto dado, un vector normal es

$$
(2,4,2\sqrt3).
$$

### Ejercicio 8

El gradiente en el punto es $(2\sqrt2,2\sqrt2)$. Un vector tangente a la circunferencia allí es $(1,-1)$. Su producto escalar vale cero, de modo que son perpendiculares.

### Ejercicio 9

Como $f_x=2xy$ y $f_y=x^2$,

$$
\frac{df}{dt}
=2xy(2t)+x^2\cos t.
$$

Sustituyendo $x=t^2$ e $y=\sin t$:

$$
\frac{df}{dt}=4t^3\sin t+t^4\cos t.
$$

### Ejercicio 10

El gradiente es

$$
\nabla f=(2x-4y,-4x+8y).
$$

En $(0,0)$ se anula, así que el origen es un punto crítico. Además, $f=(x-2y)^2\ge0$: no es un mínimo aislado, pues toda la recta $x=2y$ alcanza el mismo valor mínimo cero.

## Resumen para estudiar

Quédate con esta secuencia:

1. Revisa el dominio en $\mathbb R^n$.
2. Para una parcial, fija todas las variables salvo una.
3. Agrupa las parciales en $\nabla f$.
4. Normaliza el vector antes de calcular una derivada direccional.
5. Interpreta el gradiente como dirección de máximo ascenso y normal a los niveles.
6. Usa las parciales para construir el plano tangente y la aproximación lineal.
7. No confundas existencia de parciales con diferenciabilidad.

Si quieres consolidar el salto desde derivadas de una variable a cálculo multivariable, en las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/) adaptamos los ejercicios a tu temario y trabajamos tanto el cálculo como la interpretación geométrica.
