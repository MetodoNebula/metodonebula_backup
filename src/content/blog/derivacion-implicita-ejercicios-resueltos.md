---
title: "Derivación implícita: método y ejercicios resueltos"
date: "2026-09-04"
updated: "2026-09-04"
description: "Aprende derivación implícita paso a paso: rectas tangentes, segunda derivada, tangentes verticales y ejercicios resueltos."
tag: "Cálculo"
category: "Matemáticas universitarias"
relatedService: "/clases-particulares/calculo-universitario/"
relatedPosts: "que-son-las-derivadas-y-para-que-se-utilizan,continuidad-derivabilidad-diferencias-problemas,estudio-completo-funcion-paso-a-paso"
image: "/assets/latex/implicit-circle-tangent.svg"
---

La derivación implícita permite hallar pendientes aunque una curva no esté escrita como $y=f(x)$. Es especialmente útil en circunferencias, curvas algebraicas, relaciones trigonométricas y problemas donde despejar $y$ sería difícil o introduciría varias ramas.

La idea central es sencilla: se considera que $y$ depende de $x$, se derivan los dos miembros respecto de $x$ y se aplica la regla de la cadena cada vez que aparece $y$. La dificultad real está en reconocer dónde debe aparecer el factor $y'$ y en interpretar los puntos donde la fórmula obtenida deja de ser válida.

## Qué es una relación implícita

Una función está expresada de forma explícita cuando $y$ aparece despejada, por ejemplo,

$$
y=x^2+1.
$$

En cambio, una ecuación como

$$
x^2+y^2=25
$$

define una relación implícita entre $x$ e $y$. Si despejamos,

$$
y=\pm\sqrt{25-x^2},
$$

aparecen dos ramas: la semicircunferencia superior y la inferior. No existe una única función $y=f(x)$ que describa toda la circunferencia, pero cerca de muchos de sus puntos sí puede estudiarse una rama como función de $x$.

Es habitual escribir una curva implícita como

$$
F(x,y)=0.
$$

Si cerca de un punto se puede considerar $y=y(x)$, entonces la identidad pasa a ser $F(x,y(x))=0$.

## Regla fundamental de la derivación implícita

Al derivar $F(x,y(x))=0$ respecto de $x$, la regla de la cadena da

$$
F_x(x,y)+F_y(x,y)y'=0.
$$

Siempre que $F_y(x,y)\ne0$, podemos despejar:

$$
\boxed{y'=-\frac{F_x}{F_y}}.
$$

Esta fórmula compacta es útil para comprobar el resultado, pero al empezar conviene derivar término a término. Así se ve con claridad por qué

$$
\frac{d}{dx}(y^n)=ny^{n-1}y'
$$

y por qué

$$
\frac{d}{dx}(\sin y)=\cos(y)y'.
$$

El factor $y'$ aparece porque $y$ no es una constante: es una función desconocida de $x$.

## Método paso a paso

Ante una ecuación implícita, sigue este orden:

1. Comprueba que el punto indicado pertenece a la curva.
2. Deriva ambos miembros respecto de $x$.
3. Aplica producto, cociente y cadena donde corresponda.
4. Reúne en un miembro todos los términos que contienen $y'$.
5. Factoriza $y'$ y despeja.
6. Sustituye el punto solo al final, salvo que el cálculo aconseje hacerlo antes.
7. Interpreta el denominador: puede señalar una tangente vertical o un punto singular.

Sustituir las coordenadas demasiado pronto suele ocultar la fórmula general y aumenta el riesgo de perder términos.

## Cuándo conviene usar este método

La derivación implícita es la opción natural cuando la ecuación mezcla $x$ e $y$, cuando despejar genera varias ramas o cuando solo se pide la pendiente en un punto. Si $y$ ya está aislada mediante una expresión sencilla, derivar de forma explícita suele ser más corto. Ambos métodos deben dar lo mismo donde la rama sea derivable.

También conviene mantener la ecuación implícita cuando presenta una simetría útil. En $x^2+y^2=25$, despejar obliga a separar dos semicircunferencias y a vigilar el signo de la raíz; la ecuación original conserva toda la geometría en una sola línea. En cambio, para $x+y=3$, despejar $y=3-x$ simplifica inmediatamente el problema. Elegir bien la representación reduce álgebra sin cambiar el objeto matemático.

## Ejemplo 1: circunferencia y recta tangente

Para la circunferencia

$$
x^2+y^2=25,
$$

derivamos ambos lados:

$$
2x+2yy'=0.
$$

Despejando,

$$
y'=-\frac{x}{y}.
$$

En el punto $(3,4)$, que sí cumple $3^2+4^2=25$, la pendiente es

$$
m=y'(3,4)=-\frac34.
$$

La recta tangente queda

$$
y-4=-\frac34(x-3),
$$

o, de forma equivalente,

$$
3x+4y=25.
$$

![Circunferencia x al cuadrado más y al cuadrado igual a 25, con el radio y la recta tangente en el punto 3 coma 4](/assets/latex/implicit-circle-tangent.svg)

Geométricamente, el radio que une el origen con $(3,4)$ tiene pendiente $4/3$. El producto de ambas pendientes es $-1$, por lo que radio y tangente son perpendiculares. Esta comprobación confirma el cálculo.

La recta normal, perpendicular a la tangente, tiene precisamente pendiente $4/3$:

$$
y-4=\frac43(x-3).
$$

## Ejemplo 2: productos de $x$ e $y$

Considera

$$
x^2+xy+y^2=7.
$$

El término $xy$ requiere la regla del producto:

$$
\frac{d}{dx}(xy)=y+xy'.
$$

Por tanto,

$$
2x+y+xy'+2yy'=0.
$$

Agrupamos los términos con $y'$:

$$
(x+2y)y'=-(2x+y),
$$

y obtenemos

$$
y'=-\frac{2x+y}{x+2y}.
$$

El punto $(1,2)$ pertenece a la curva porque $1+2+4=7$. Allí,

$$
y'(1,2)=-\frac45.
$$

El error más común en este ejemplo es escribir $(xy)'=xy'$. Falta la derivada de $x$, que genera el sumando $y$.

## Ejemplo 3: potencias y regla de la cadena

Sea

$$
x^3+y^3=6xy.
$$

Derivando,

$$
3x^2+3y^2y'=6y+6xy'.
$$

Llevamos los términos con $y'$ al mismo lado:

$$
(3y^2-6x)y'=6y-3x^2.
$$

Así,

$$
y'=\frac{2y-x^2}{y^2-2x}.
$$

Esta curva, conocida como folium de Descartes tras un cambio de escala según la convención usada, ilustra que la derivación implícita evita despejar una ecuación cúbica.

### Comprobación mediante la fórmula de parciales

Podemos verificar el resultado escribiendo

$$
F(x,y)=x^3+y^3-6xy.
$$

Sus derivadas parciales son

$$
F_x=3x^2-6y,
\qquad
F_y=3y^2-6x.
$$

La fórmula $y'=-F_x/F_y$ produce

$$
y'=-\frac{3x^2-6y}{3y^2-6x}
=\frac{2y-x^2}{y^2-2x},
$$

igual que la derivación término a término. Disponer de dos caminos reduce mucho los errores de signo.

## Funciones exponenciales y trigonométricas

La técnica no se limita a polinomios. Si

$$
e^{xy}+x=y,
$$

la derivada del término exponencial combina cadena y producto:

$$
e^{xy}(y+xy')+1=y'.
$$

Separando los términos,

$$
e^{xy}y+1=y'(1-xe^{xy}),
$$

de donde

$$
y'=\frac{e^{xy}y+1}{1-xe^{xy}}.
$$

En la relación

$$
\sin(x+y)=xy,
$$

obtenemos

$$
\cos(x+y)(1+y')=y+xy'.
$$

Al despejar,

$$
y'=\frac{y-\cos(x+y)}{\cos(x+y)-x}.
$$

En ambos casos, encerrar mentalmente la función interior antes de derivar ayuda: el exponente es $xy$ y el argumento del seno es $x+y$.

## Ejemplo 4: logaritmos sin despejar

Supón que $x>0$, $y>0$ y

$$
x^y=y^x.
$$

Despejar una variable no es práctico. Tomamos logaritmos:

$$
y\ln x=x\ln y.
$$

Ahora derivamos. En ambos miembros aparece un producto:

$$
y'\ln x+\frac yx
=\ln y+\frac{x}{y}y'.
$$

Agrupando,

$$
y'\left(\ln x-\frac xy\right)
=\ln y-\frac yx.
$$

Por tanto,

$$
y'=\frac{\ln y-y/x}{\ln x-x/y},
$$

si el denominador no se anula. El paso decisivo no es derivar, sino reconocer que el logaritmo transforma exponentes variables en productos manejables.

En el punto $(2,4)$ se cumple $2^4=4^2$. La pendiente es

$$
y'(2,4)
=\frac{\ln4-2}{\ln2-1/2}
=2.
$$

La igualdad final se obtiene usando $\ln4=2\ln2$. La recta tangente es $y-4=2(x-2)$.

## Ejemplo 5: una curva con tangente vertical

Analicemos

$$
y^3+y=x^2.
$$

Derivando,

$$
(3y^2+1)y'=2x,
$$

de modo que

$$
y'=\frac{2x}{3y^2+1}.
$$

Como $3y^2+1$ nunca se anula, esta descripción no presenta tangentes verticales. En cambio, si intercambiamos la estructura y consideramos

$$
x^3+x=y^2,
$$

obtenemos

$$
3x^2+1=2yy',
\qquad
y'=\frac{3x^2+1}{2y}.
$$

El punto $(0,0)$ pertenece a la curva y el denominador se anula, mientras que el numerador vale $1$. Hay una tangente vertical $x=0$. Para confirmarlo sin confiar en una fracción infinita, describimos $x$ como función de $y$ y derivamos respecto de $y$:

$$
(3x^2+1)\frac{dx}{dy}=2y.
$$

En el origen, $dx/dy=0$, lo que significa que la curva tiene allí una tangente vertical en la representación habitual.

## Segunda derivada implícita

Para calcular $y''$, se vuelve a derivar la ecuación que contiene $y'$. Después se sustituye la fórmula de $y'$ si se desea expresar el resultado solo mediante $x$ e $y$.

Retomemos la circunferencia:

$$
2x+2yy'=0.
$$

Derivando otra vez,

$$
2+2\bigl((y')^2+yy''\bigr)=0.
$$

Por tanto,

$$
y''=-\frac{1+(y')^2}{y}.
$$

Como $y'=-x/y$,

$$
y''=-\frac{1+x^2/y^2}{y}
=-\frac{x^2+y^2}{y^3}
=-\frac{25}{y^3}.
$$

En $(3,4)$ resulta

$$
y''=-\frac{25}{64}<0,
$$

coherente con la curvatura de la semicircunferencia superior.

Al derivar $yy'$ debes usar producto:

$$
\frac{d}{dx}(yy')=(y')^2+yy''.
$$

Omitir el término $(y')^2$ es el fallo típico de la segunda derivación implícita.

## Tangentes horizontales y verticales

Si $F(x,y)=0$ y

$$
y'=-\frac{F_x}{F_y},
$$

una tangente horizontal suele aparecer cuando $F_x=0$ y $F_y\ne0$. Una tangente vertical suele aparecer cuando $F_y=0$ y $F_x\ne0$. Hay que comprobar siempre que el punto pertenece a la curva.

En $x^2+y^2=25$:

- las tangentes horizontales cumplen $x=0$, luego están en $(0,5)$ y $(0,-5)$;
- las tangentes verticales cumplen $y=0$, luego están en $(5,0)$ y $(-5,0)$.

En una tangente vertical, describir $y$ como función derivable de $x$ deja de ser adecuado, pero localmente puede describirse $x$ como función de $y$.

Si se anulan simultáneamente $F_x$ y $F_y$, la fórmula produce una indeterminación y el punto puede ser singular. Por ejemplo, en la cúspide de

$$
y^2=x^3
$$

ambas derivadas parciales se anulan en $(0,0)$. No basta con declarar una pendiente: es necesario estudiar las ramas o una parametrización.

## Ejemplo 6: tangente y normal a una elipse girada

Hallemos las dos rectas en el punto $(0,\sqrt2)$ de la curva

$$
x^2+xy+2y^2=4.
$$

Primero comprobamos el punto: $0+0+2(\sqrt2)^2=4$. Al derivar,

$$
2x+y+xy'+4yy'=0.
$$

Agrupamos antes de sustituir:

$$
(x+4y)y'=-(2x+y),
$$

por tanto

$$
y'=-\frac{2x+y}{x+4y}.
$$

En $(0,\sqrt2)$ la pendiente tangente es

$$
m_t=-\frac{\sqrt2}{4\sqrt2}=-\frac14.
$$

La recta tangente es

$$
y-\sqrt2=-\frac14x.
$$

Como la pendiente es finita y no nula, la normal tiene pendiente recíproca opuesta:

$$
m_n=4,
$$

y su ecuación es

$$
y-\sqrt2=4x.
$$

Podemos comprobar la orientación con el gradiente de

$$
F(x,y)=x^2+xy+2y^2-4.
$$

En el punto, $\nabla F=(\sqrt2,4\sqrt2)$, un vector paralelo a $(1,4)$. Ese vector es normal a la curva y tiene pendiente $4$, exactamente la obtenida. La comprobación es útil porque una confusión al tomar el recíproco cambia tangente y normal.

Si la tangente fuese horizontal, la normal sería vertical y no tendría pendiente finita. Si la tangente fuese vertical, la normal sería horizontal. En esos casos es más seguro escribir las rectas directamente que intentar usar $m_n=-1/m_t$ con ceros o infinitos.

## Derivación implícita y funciones inversas

Si $y=f^{-1}(x)$, entonces

$$
f(y)=x.
$$

Derivando implícitamente,

$$
f'(y)y'=1,
$$

y por tanto

$$
(f^{-1})'(x)=\frac{1}{f'(f^{-1}(x))},
$$

si el denominador no se anula. Esta identidad explica fórmulas como

$$
\frac{d}{dx}(\arcsin x)=\frac1{\sqrt{1-x^2}}.
$$

En efecto, si $y=\arcsin x$, entonces $\sin y=x$. Al derivar, $\cos y\,y'=1$ y, en la rama principal, $\cos y=\sqrt{1-x^2}$.

## Razones de cambio relacionadas

La misma idea se aplica cuando las variables dependen del tiempo. Supón que un punto se mueve por la circunferencia $x^2+y^2=25$. Al derivar respecto de $t$:

$$
2x\frac{dx}{dt}+2y\frac{dy}{dt}=0.
$$

Así,

$$
\frac{dy}{dt}=-\frac{x}{y}\frac{dx}{dt}.
$$

Si el punto está en $(3,4)$ y $dx/dt=2$ unidades por segundo, entonces

$$
\frac{dy}{dt}=-\frac32
$$

unidades por segundo. La coordenada vertical disminuye para que la distancia al origen permanezca constante.

La diferencia respecto de $y'$ es conceptual: ahora tanto $x$ como $y$ dependen de una tercera variable, el tiempo.

## Cuándo puede considerarse $y$ una función de $x$

La fórmula $y'=-F_x/F_y$ refleja el teorema de la función implícita. De forma intuitiva, si $F$ es suficientemente regular, $F(x_0,y_0)=0$ y

$$
F_y(x_0,y_0)\ne0,
$$

entonces cerca de $(x_0,y_0)$ la curva puede escribirse de manera única como $y=f(x)$. No significa que pueda hacerse globalmente.

En una circunferencia, alrededor de $(3,4)$ existe una rama superior bien definida. En $(5,0)$, en cambio, $F_y=2y=0$ y la curva tiene tangente vertical: falla la descripción local como $y=f(x)$, aunque la curva sigue siendo perfectamente regular.

Esta distinción enlaza con la guía sobre [continuidad y derivabilidad](/blog/continuidad-derivabilidad-diferencias-problemas/): disponer de una ecuación no garantiza que una rama sea derivable respecto de la variable elegida.

## Diferencia entre forma implícita y parametrización

Una curva también puede darse mediante

$$
x=x(t),\qquad y=y(t).
$$

Si $dx/dt\ne0$, su pendiente es

$$
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}.
$$

Por ejemplo, la circunferencia de radio $5$ admite la parametrización

$$
x=5\cos t,\qquad y=5\sin t.
$$

Entonces

$$
\frac{dy}{dx}
=\frac{5\cos t}{-5\sin t}
=-\frac{\cos t}{\sin t}
=-\frac{x}{y},
$$

el mismo resultado que por derivación implícita. La forma paramétrica es especialmente cómoda cuando la trayectoria ya viene expresada en función del tiempo o cuando una misma coordenada $x$ corresponde a varias ramas. La forma implícita suele ser más directa para obtener normales y estudiar curvas de nivel.

## Cómo comprobar una derivada implícita

Hay cuatro comprobaciones útiles:

1. **Sustitución del punto.** Verifica que satisface la ecuación original.
2. **Fórmula de parciales.** Si has derivado término a término, compara con $-F_x/F_y$.
3. **Despeje local.** Cuando es fácil aislar una rama, derívala explícitamente y compara.
4. **Geometría.** En circunferencias y niveles, la tangente debe ser perpendicular al gradiente o al radio correspondiente.

Para la rama superior de $x^2+y^2=25$,

$$
y=\sqrt{25-x^2}.
$$

La derivada explícita es

$$
y'=\frac{-2x}{2\sqrt{25-x^2}}
=-\frac{x}{y},
$$

que coincide con la implícita. Esta prueba solo cubre la rama $y>0$; la fórmula implícita describe también la inferior siempre que $y\ne0$.

## Errores frecuentes

### Tratar $y$ como una constante

Si $y=y(x)$, entonces $(y^2)'=2yy'$, no cero ni $2y$. Cada derivada de una expresión que dependa de $y$ necesita la regla de la cadena.

### Perder términos al derivar productos

Para $xy$, $y\sin x$ o $e^x y^2$, se aplica además la regla del producto. Conviene escribir una línea intermedia antes de agrupar $y'$.

### Sustituir un punto que no está en la curva

La pendiente implícita solo tiene sentido en puntos de la relación. Verifica primero $F(x_0,y_0)=0$.

### Dividir por una expresión que puede ser cero

Al despejar $y'$, anota la condición del denominador. Un cero puede corresponder a una tangente vertical o a un punto singular que exige análisis adicional.

### Confundir $y'$ con una variable independiente

$y'$ representa la derivada evaluada sobre la curva. En una expresión como $(y')^2+yy''$, ambos términos provienen de diferenciar funciones de $x$.

## Ejercicios propuestos

1. Halla $y'$ si $x^2+4y^2=16$.
2. Calcula la pendiente de $x^2+xy+y^2=3$ en $(1,1)$.
3. Halla la recta tangente a $x^2-xy+y^2=7$ en $(2,3)$.
4. Deriva implícitamente $x^2y+y^3=10$.
5. Halla $y'$ si $\ln(xy)=x+y$.
6. Determina las tangentes horizontales de $x^2+2y^2=8$.
7. Calcula $y''$ para $x^2+y^2=9$ y evalúala en $(0,3)$.
8. Si $x^2+y^2=100$, calcula $dy/dt$ cuando $(x,y)=(6,8)$ y $dx/dt=4$.
9. A partir de $\tan y=x$, deduce la derivada de $y=\arctan x$.
10. Explica qué debe revisarse en un punto donde $F_x=F_y=0$.

## Soluciones

### Ejercicio 1

De $2x+8yy'=0$ se obtiene

$$
y'=-\frac{x}{4y}.
$$

### Ejercicio 2

La fórmula es $y'=-(2x+y)/(x+2y)$. En $(1,1)$, la pendiente vale $-1$. Como el vector normal es $(F_x,F_y)=(3,3)$, un vector tangente puede ser $(1,-1)$, lo que confirma esa pendiente.

### Ejercicio 3

Al derivar,

$$
2x-y-xy'+2yy'=0,
$$

de modo que $y'=(y-2x)/(2y-x)$. En $(2,3)$ vale $-1/4$ y la tangente es

$$
y-3=-\frac14(x-2).
$$

### Ejercicio 4

Usando producto y cadena:

$$
2xy+x^2y'+3y^2y'=0.
$$

Por tanto,

$$
y'=-\frac{2xy}{x^2+3y^2}.
$$

### Ejercicio 5

Como $\ln(xy)=\ln x+\ln y$ cuando $xy>0$, al derivar resulta

$$
\frac1x+\frac{y'}y=1+y'.
$$

Así,

$$
y'=\frac{y(x-1)}{x(1-y)}.
$$

### Ejercicio 6

La derivada es $y'=-x/(2y)$. Para una tangente horizontal se exige $x=0$ y $y\ne0$. Sustituyendo en la elipse aparecen $(0,2)$ y $(0,-2)$.

Las rectas tangentes son $y=2$ e $y=-2$. En ambos puntos el denominador es distinto de cero, así que la condición horizontal es válida y no corresponde a una singularidad.

### Ejercicio 7

Para una circunferencia de radio $3$,

$$
y''=-\frac9{y^3}.
$$

En $(0,3)$ vale $-1/3$.

El signo negativo concuerda con la semicircunferencia superior, que se curva hacia abajo cerca de su punto más alto.

### Ejercicio 8

Derivando respecto del tiempo,

$$
x\frac{dx}{dt}+y\frac{dy}{dt}=0.
$$

Luego

$$
\frac{dy}{dt}=-\frac68\cdot4=-3.
$$

### Ejercicio 9

De $\tan y=x$ se obtiene $\sec^2(y)y'=1$. Como $\sec^2 y=1+\tan^2y=1+x^2$,

$$
y'=\frac1{1+x^2}.
$$

### Ejercicio 10

La fórmula $-F_x/F_y$ no decide la pendiente porque produce $0/0$ si ambas parciales se anulan. Hay que estudiar el término dominante, factorizar, parametrizar o analizar las ramas. Puede existir una cúspide, un cruce, un punto aislado u otra singularidad.

## Resumen operativo

La derivación implícita se reduce a tres hábitos: recordar que $y$ depende de $x$, aplicar la regla de la cadena y no dividir sin revisar el denominador. Con eso puedes obtener pendientes, tangentes, curvatura y razones de cambio incluso cuando despejar la variable es inviable.

Si las reglas de derivación todavía no están automatizadas, repasa primero [qué son las derivadas y para qué se utilizan](/blog/que-son-las-derivadas-y-para-que-se-utilizan/). Para practicar relaciones implícitas con corrección individual, las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/) permiten detectar exactamente en qué paso se rompe el razonamiento.
