---
title: "Integrales dobles: cálculo, regiones y ejercicios resueltos"
date: "2026-09-03"
updated: "2026-09-03"
description: "Aprende integrales dobles paso a paso: dominios rectangulares, regiones generales, cambio de orden, áreas, volúmenes y ejercicios."
tag: "Cálculo"
category: "Matemáticas universitarias"
relatedService: "/clases-particulares/calculo-universitario/"
relatedPosts: "que-son-las-integrales-y-para-que-se-utilizan,derivadas-parciales-gradiente-ejercicios,cambio-variables-jacobiano-integrales-dobles"
image: "/assets/latex/double-integral-region.svg"
---

Una integral doble acumula los valores de una función sobre una región del plano. Puede representar volumen bajo una superficie, área, masa, valor medio, probabilidad o cualquier magnitud distribuida en dos dimensiones. El cálculo se convierte normalmente en dos integrales de una variable, pero el paso decisivo es describir bien la región y sus límites.

Esta guía explica cómo pasar del dibujo a los límites, cuándo cambiar el orden de integración y cómo comprobar el resultado.

## Qué representa una integral doble

Sea $f(x,y)$ una función definida sobre una región $R$. Dividimos $R$ en pequeñas celdas de área $\Delta A_i$, elegimos un punto $(x_i^*,y_i^*)$ en cada una y sumamos

$$
\sum_i f(x_i^*,y_i^*)\Delta A_i.
$$

Si estas sumas se aproximan a un límite único al refinar la partición, definimos

$$
\iint_R f(x,y)\,dA.
$$

Cuando $f\ge0$, cada producto $f\Delta A$ aproxima el volumen de una columna muy fina. Por eso la integral da el volumen bajo $z=f(x,y)$ y sobre $R$. Si $f$ cambia de signo, el resultado es volumen firmado: las partes bajo el plano $z=0$ restan.

Si $f=1$, la altura de todas las columnas es uno y

$$
\iint_R1\,dA=\operatorname{área}(R).
$$

Esta interpretación conecta las [integrales de una variable](/blog/que-son-las-integrales-y-para-que-se-utilizan/) con superficies y regiones bidimensionales.

## Dominios rectangulares y teorema de Fubini

En un rectángulo

$$
R=[a,b]\times[c,d],
$$

el teorema de Fubini permite calcular una integral continua mediante integrales iteradas:

$$
\iint_R f(x,y)\,dA
=\int_a^b\left(\int_c^d f(x,y)\,dy\right)dx.
$$

También podemos invertir el orden:

$$
\iint_R f(x,y)\,dA
=\int_c^d\left(\int_a^b f(x,y)\,dx\right)dy.
$$

En la integral interior, la otra variable se trata como constante. Después de evaluarla debe quedar una expresión que dependa solo de la variable exterior.

Fubini requiere hipótesis de integrabilidad; para las funciones continuas sobre rectángulos cerrados que aparecen en cursos iniciales, se cumplen automáticamente.

## Ejemplo 1: integral sobre un rectángulo

Calcula

$$
\iint_R(x+2y)\,dA,
\qquad
R=[0,1]\times[0,2].
$$

Integramos primero respecto de $y$:

$$
\int_0^1\left(\int_0^2(x+2y)\,dy\right)dx.
$$

Dentro, $x$ es constante:

$$
\int_0^2(x+2y)\,dy
=\left[xy+y^2\right]_0^2
=2x+4.
$$

Ahora integramos respecto de $x$:

$$
\int_0^1(2x+4)\,dx
=\left[x^2+4x\right]_0^1=5.
$$

Como $x+2y\ge0$ en el rectángulo, el resultado puede interpretarse como un volumen y debe ser positivo.

Al invertir el orden se obtiene

$$
\int_0^2\left(\int_0^1(x+2y)\,dx\right)dy=5,
$$

una comprobación independiente.

## Integrandos separables

Si $f(x,y)=g(x)h(y)$ y el dominio es rectangular, la integral factoriza:

$$
\iint_R g(x)h(y)\,dA
=\left(\int_a^b g(x)\,dx\right)
\left(\int_c^d h(y)\,dy\right).
$$

Por ejemplo,

$$
\int_0^1\int_0^\pi xe^x\sin y\,dy\,dx
=\left(\int_0^1xe^x\,dx\right)
\left(\int_0^\pi\sin y\,dy\right).
$$

La primera integral vale $1$ y la segunda $2$, así que el resultado es $2$. Esta propiedad no puede aplicarse sin más en una región triangular, porque los límites enlazan las variables.

## Regiones generales: tipo I y tipo II

Una región simple respecto de $x$, o de tipo I, se describe mediante

$$
R=\{(x,y):a\le x\le b,\ g_1(x)\le y\le g_2(x)\}.
$$

Se recorre con segmentos verticales: para cada $x$, $y$ va desde la curva inferior hasta la superior. La integral es

$$
\iint_Rf\,dA
=\int_a^b\int_{g_1(x)}^{g_2(x)}f(x,y)\,dy\,dx.
$$

Una región simple respecto de $y$, o de tipo II, tiene la forma

$$
R=\{(x,y):c\le y\le d,\ h_1(y)\le x\le h_2(y)\},
$$

y se recorre con segmentos horizontales:

$$
\iint_Rf\,dA
=\int_c^d\int_{h_1(y)}^{h_2(y)}f(x,y)\,dx\,dy.
$$

![Comparación de los dos órdenes de integración en el triángulo: cortes verticales con límites de y y cortes horizontales con límites de x](/assets/latex/double-integral-region.svg)

Los dos paneles representan exactamente el mismo triángulo. En el primero se fija $x$ y se recorre el segmento rojo de abajo arriba, por eso la integral interior es respecto de $y$. En el segundo se fija $y$ y se recorre el segmento naranja de izquierda a derecha, por eso se integra primero respecto de $x$. Antes de calcular, dibuja las curvas, halla sus intersecciones y decide qué recorrido produce límites más sencillos.

## Ejemplo 2: región triangular

Sea

$$
R=\{(x,y):x\ge0,\ y\ge0,\ x+y\le1\}.
$$

Con cortes verticales, $x$ recorre $[0,1]$ y, fijado $x$, la variable $y$ va de $0$ a $1-x$. Calculemos

$$
\iint_R(x+y)\,dA.
$$

Planteamos

$$
\int_0^1\int_0^{1-x}(x+y)\,dy\,dx.
$$

La integral interior es

$$
\left[xy+\frac{y^2}{2}\right]_0^{1-x}
=x(1-x)+\frac{(1-x)^2}{2}
=\frac{1-x^2}{2}.
$$

Por tanto,

$$
\int_0^1\frac{1-x^2}{2}\,dx
=\frac12\left[x-\frac{x^3}{3}\right]_0^1
=\frac13.
$$

Por simetría, el valor medio de $x+y$ en este triángulo es $2/3$. Como el área es $1/2$, la integral debe ser $(2/3)(1/2)=1/3$, lo que confirma el resultado.

## Cómo cambiar el orden de integración

No intercambies simplemente $dx$ y $dy$. Los límites describen una región y deben reconstruirse para el nuevo orden.

El procedimiento es:

1. Traduce los límites originales a desigualdades.
2. Dibuja la región e identifica sus fronteras.
3. Proyecta la región sobre el nuevo eje exterior.
4. Describe el segmento interior desde la frontera izquierda a la derecha, o desde la inferior a la superior.
5. Divide la región si una sola pareja de funciones no sirve en todo el intervalo.

## Ejemplo 3: invertir el orden

Considera

$$
I=\int_0^1\int_x^1 e^{y^2}\,dy\,dx.
$$

La integral interior no tiene una primitiva elemental. La región original cumple

$$
0\le x\le1,
\qquad
x\le y\le1.
$$

Es el triángulo situado sobre $y=x$ y bajo $y=1$. Con cortes horizontales, $y$ recorre $[0,1]$ y $x$ va de $0$ a $y$. Entonces

$$
I=\int_0^1\int_0^y e^{y^2}\,dx\,dy.
$$

Ahora el integrando es constante respecto de $x$:

$$
I=\int_0^1 ye^{y^2}\,dy.
$$

Con $u=y^2$, $du=2y\,dy$:

$$
I=\frac12\int_0^1e^u\,du
=\frac{e-1}{2}.
$$

Cambiar el orden no es una formalidad: convierte una integral imposible con técnicas elementales en un cambio de variable inmediato.

## Regiones que deben dividirse

Sea la región limitada por $y=x^2$ y $y=2-x$. Las intersecciones satisfacen

$$
x^2=2-x,
$$

de donde $x=-2$ y $x=1$. Como región de tipo I se describe en una sola integral:

$$
-2\le x\le1,
\qquad
x^2\le y\le2-x.
$$

Si queremos usar cortes horizontales, debemos observar que la frontera izquierda cambia. La parábola da $x=\pm\sqrt y$ y la recta da $x=2-y$. Para $0\le y\le1$, el corte va de $-\sqrt y$ a $\sqrt y$; para $1\le y\le4$, va de $-\sqrt y$ a $2-y$. Por tanto,

$$
\iint_R f\,dA
=\int_0^1\int_{-\sqrt y}^{\sqrt y}f\,dx\,dy
+\int_1^4\int_{-\sqrt y}^{2-y}f\,dx\,dy.
$$

Un dibujo revela el cambio en $y=1$. Intentar forzar una sola integral horizontal incluiría puntos ajenos o excluiría parte de la región.

## Ejemplo 4: integrar entre dos curvas

Calculemos

$$
I=\iint_R y\,dA,
$$

donde $R$ está limitada por $y=x^2$ y $y=x$. Primero resolvemos $x^2=x$, lo que da $x=0$ y $x=1$. En ese intervalo, $x^2\le x$, así que la parábola es la frontera inferior y la recta la superior:

$$
I=\int_0^1\int_{x^2}^{x}y\,dy\,dx.
$$

Integramos respecto de $y$:

$$
I=\int_0^1\left[\frac{y^2}{2}\right]_{x^2}^{x}dx
=\frac12\int_0^1(x^2-x^4)\,dx.
$$

Por tanto,

$$
I=\frac12\left(\frac13-\frac15\right)=\frac1{15}.
$$

La función $y$ es no negativa en la región y nunca supera $1$. Como el área es $1/6$, el resultado debe pertenecer a $[0,1/6]$; $1/15$ cumple esa condición.

## Área de una región

Para hallar un área se integra la función constante uno. En la región entre $y=x^2$ e $y=x$, las intersecciones son $x=0$ y $x=1$. Así,

$$
A=\int_0^1\int_{x^2}^{x}1\,dy\,dx
=\int_0^1(x-x^2)\,dx
=\frac16.
$$

La integral doble reproduce la fórmula «curva superior menos curva inferior», pero además prepara el mismo dominio para integrar densidades o alturas variables.

## Volumen entre dos superficies

Si $z=f(x,y)$ está por encima de $z=g(x,y)$ sobre $R$, el volumen es

$$
V=\iint_R\bigl(f(x,y)-g(x,y)\bigr)\,dA.
$$

Por ejemplo, sobre el cuadrado $0\le x\le1$, $0\le y\le1$, el volumen entre $z=3+x$ y $z=x+y^2$ es

$$
V=\int_0^1\int_0^1(3-y^2)\,dy\,dx.
$$

La integral interior vale $3-1/3=8/3$ y la exterior multiplica por la anchura $1$. Por tanto, $V=8/3$. El término $x$ desaparece al restar las superficies, una simplificación que conviene hacer antes de integrar.

## Masa, centro de masas y valor medio

Si una lámina ocupa $R$ y tiene densidad superficial $\rho(x,y)$, su masa es

$$
M=\iint_R\rho(x,y)\,dA.
$$

Sus momentos respecto de los ejes son

$$
M_x=\iint_Ry\rho(x,y)\,dA,
\qquad
M_y=\iint_Rx\rho(x,y)\,dA,
$$

y el centro de masas es

$$
\bar x=\frac{M_y}{M},
\qquad
\bar y=\frac{M_x}{M}.
$$

El intercambio de subíndices tiene sentido: el momento respecto del eje $y$ utiliza la distancia horizontal $x$.

El valor medio de una función sobre una región de área no nula es

$$
f_{\mathrm{med}}=\frac1{\operatorname{área}(R)}\iint_Rf\,dA.
$$

### Ejemplo 5: masa con densidad variable

En el rectángulo $0\le x\le2$, $0\le y\le1$, sea $\rho(x,y)=1+x$. Entonces

$$
M=\int_0^2\int_0^1(1+x)\,dy\,dx
=\int_0^2(1+x)\,dx=4.
$$

La densidad aumenta hacia la derecha. El momento respecto del eje $y$ es

$$
M_y=\int_0^2\int_0^1x(1+x)\,dy\,dx
=\int_0^2(x+x^2)\,dx
=\frac{14}{3}.
$$

Por tanto,

$$
\bar x=\frac{14/3}{4}=\frac76>1,
$$

coherente con que el centro de masas se desplace a la derecha del centro geométrico. Por simetría vertical, $\bar y=1/2$.

## Simetría antes de integrar

Una simetría puede ahorrar todo el cálculo. Si $R$ es simétrica respecto del eje $y$ y

$$
f(-x,y)=-f(x,y),
$$

entonces

$$
\iint_Rf(x,y)\,dA=0.
$$

Cada punto $(x,y)$ se empareja con $(-x,y)$ y sus contribuciones se cancelan. Existe una regla análoga para funciones impares en $y$ sobre regiones simétricas respecto del eje $x$.

Por ejemplo, en el disco unidad,

$$
\iint_R x(1+y^2)\,dA=0,
$$

porque el integrando es impar en $x$. En cambio, $x^2(1+y)$ no es impar en $x$ y no puede anularse con ese argumento. La simetría debe comprobarse tanto en el integrando como en la región.

Si la función es par, la integral no se anula, pero puede reducirse. Sobre una región simétrica respecto de ambos ejes,

$$
\iint_R f(x,y)\,dA
=4\iint_{R\cap\{x\ge0,y\ge0\}}f(x,y)\,dA
$$

cuando $f$ es par en cada variable. Esta reducción será especialmente útil con coordenadas polares.

## Integrales impropias y orden de integración

Fubini permite intercambiar el orden bajo hipótesis adecuadas. Si $f\ge0$, el teorema de Tonelli permite interpretar ambas integrales iteradas, aunque el resultado pueda ser infinito. Si $f$ cambia de signo en una región no acotada, la convergencia absoluta cobra importancia: sin ella, cambiar el orden puede alterar el resultado o hacer que una iterada no exista.

En ejercicios iniciales con funciones continuas sobre regiones cerradas y acotadas no aparece este problema. Pero no conviene extrapolar el intercambio de orden de forma automática a integrales impropias. Primero debe justificarse la integrabilidad.

## Coordenadas polares: cuándo aparecen

Las regiones circulares suelen resultar incómodas en coordenadas cartesianas. Con

$$
x=r\cos\theta,
\qquad
y=r\sin\theta,
$$

un disco se describe mediante límites constantes en $r$ y $\theta$. Sin embargo, el elemento de área no es $dr\,d\theta$, sino

$$
dA=r\,dr\,d\theta.
$$

Ese factor $r$ es un jacobiano y mide cómo cambia el área al transformar las coordenadas. La guía de [cambio de variables y jacobiano](/blog/cambio-variables-jacobiano-integrales-dobles/) desarrolla el método y las condiciones para aplicarlo.

## Cómo comprobar una integral doble

Antes de confiar en el resultado, aplica varios controles:

- **Signo:** si $f\ge0$, la integral no puede ser negativa.
- **Cotas:** si $m\le f\le M$ en $R$, entonces

$$
m\,\operatorname{área}(R)
\le\iint_Rf\,dA
\le M\,\operatorname{área}(R).
$$

- **Unidades:** densidad superficial por área produce masa; altura por área produce volumen.
- **Simetría:** una función impar respecto de un eje integrada sobre una región simétrica puede dar cero.
- **Orden alternativo:** si ambos órdenes son razonables, deben coincidir.
- **Integrando constante:** para $f=c$, el resultado debe ser $c$ por el área.

En el ejemplo triangular, $0\le x+y\le1$ y el área es $1/2$, de modo que la integral debe estar entre $0$ y $1/2$. El valor $1/3$ satisface este control.

## Cómo pasar de un enunciado a los límites

Subraya primero qué magnitud se integra y sobre qué región. Si el dominio viene descrito con palabras, traduce cada borde a una ecuación. Calcula sus intersecciones y elige un punto interior para decidir qué curva queda arriba, abajo, a la izquierda o a la derecha.

Después escribe una frase de recorrido antes de la integral: «$x$ va de cero a uno y, fijado $x$, $y$ va de $x^2$ a $x$». Esa frase detecta límites invertidos mejor que una manipulación simbólica. Finalmente comprueba que el límite interior solo depende de la variable exterior, nunca de la propia variable que se está integrando.

## Aproximación numérica cuando no hay primitiva

No toda integral doble admite una expresión elemental. Una vez planteados correctamente los límites, puede aproximarse mediante sumas de Riemann, reglas de cuadratura iteradas o métodos de Montecarlo. El planteamiento geométrico sigue siendo necesario: el algoritmo debe saber qué puntos pertenecen a la región y con qué peso cuentan.

En una malla rectangular uniforme, una suma de puntos medios tiene la forma

$$
\iint_Rf\,dA
\approx\sum_{i=1}^{m}\sum_{j=1}^{n}
f(x_i^*,y_j^*)\,\Delta x\,\Delta y.
$$

Para una región general pueden descartarse las celdas exteriores o, con mayor precisión, parametrizarse sus límites mediante una integral iterada. Al aumentar $m$ y $n$, compara aproximaciones sucesivas y usa las cotas del integrando para detectar resultados imposibles.

Una calculadora o un programa puede ejecutar la cuadratura, pero no corrige una región mal descrita. Si se invierten las curvas superior e inferior, el software calculará fielmente una integral con signo negativo aunque el problema pidiera un área positiva.

## Errores frecuentes

### Mantener los límites al cambiar el orden

Los límites pertenecen a una descripción geométrica concreta. Al invertir el orden hay que deducirlos de nuevo.

### Integrar la variable exterior dentro

En $\int\int f\,dy\,dx$, la primera operación es respecto de $y$ y $x$ se trata como constante.

### Evaluar mal límites dependientes

Si el límite es $1-x$, debe sustituirse toda la expresión y simplificarse con paréntesis antes de la integral exterior.

### Confundir volumen con integral firmada

Si la función cambia de signo, $\iint f\,dA$ puede incluir cancelaciones. Para volumen geométrico se integra la diferencia «superficie superior menos inferior» o se divide el dominio donde cambie el orden.

### Olvidar dividir la región

Una frontera puede cambiar a mitad del recorrido. Si un segmento horizontal o vertical entra y sale varias veces, la región requiere varias integrales.

## Ejercicios propuestos

1. Calcula $\int_0^2\int_0^1(x+y)\,dy\,dx$.
2. Calcula $\iint_Rxy\,dA$ para $R=[0,2]\times[1,3]$.
3. Halla el área de $R=\{0\le x\le2,\ 0\le y\le x^2\}$.
4. Evalúa $\int_0^1\int_0^{1-x}1\,dy\,dx$ e interpreta el resultado.
5. Invierte el orden para la región $0\le x\le1$, $\sqrt x\le y\le1$.
6. Calcula $\iint_R(x-y)\,dA$ en el cuadrado $[-1,1]^2$ usando simetría.
7. Halla el volumen bajo $z=2-x-y$ sobre $x\ge0$, $y\ge0$, $x+y\le2$.
8. Calcula el valor medio de $f=x+y$ en $[0,2]\times[0,1]$.
9. Una lámina ocupa $[0,1]^2$ y tiene densidad $\rho=2x+1$. Halla su masa y $\bar x$.
10. Decide qué orden usarías para $\int\int_R e^{x^2}\,dA$ si $R=\{0\le y\le x\le1\}$.

## Soluciones

### Ejercicio 1

La integral interior vale $x+1/2$. Integrando de $0$ a $2$:

$$
\int_0^2\left(x+\frac12\right)dx=3.
$$

### Ejercicio 2

Al ser rectangular y separable,

$$
\iint_Rxy\,dA
=\left(\int_0^2x\,dx\right)
\left(\int_1^3y\,dy\right)=2\cdot4=8.
$$

### Ejercicio 3

Integramos uno sobre la región:

$$
A=\int_0^2\int_0^{x^2}1\,dy\,dx
=\int_0^2x^2\,dx=\frac83.
$$

### Ejercicio 4

El resultado es

$$
\int_0^1(1-x)\,dx=\frac12,
$$

el área del triángulo de vértices $(0,0)$, $(1,0)$ y $(0,1)$.

### Ejercicio 5

La región cumple $0\le x\le1$ y $\sqrt x\le y\le1$, equivalente a $0\le y\le1$ y $0\le x\le y^2$. Por tanto,

$$
\int_0^1\int_0^{y^2}f(x,y)\,dx\,dy.
$$

### Ejercicio 6

Tanto $x$ como $-y$ son impares respecto de uno de los ejes y el cuadrado es simétrico. Las contribuciones se cancelan, así que la integral vale cero.

### Ejercicio 7

Planteamos

$$
V=\int_0^2\int_0^{2-x}(2-x-y)\,dy\,dx.
$$

La integral interior es $(2-x)^2/2$ y la exterior vale

$$
\frac12\int_0^2(2-x)^2dx=\frac43.
$$

### Ejercicio 8

La integral de $x+y$ sobre el rectángulo vale $3$ y su área es $2$. El valor medio es $3/2$, igual a la suma de las coordenadas del centro $(1,1/2)$.

### Ejercicio 9

La masa es

$$
M=\int_0^1\int_0^1(2x+1)\,dy\,dx=2.
$$

El momento $M_y$ vale $\int_0^1x(2x+1)dx=7/6$, luego

$$
\bar x=\frac{7}{12}.
$$

### Ejercicio 10

El orden original de la región sería $0\le x\le1$, $0\le y\le x$, pero integrar $e^{x^2}$ respecto de $y$ sí es inmediato. Usamos

$$
\int_0^1\int_0^xe^{x^2}\,dy\,dx
=\int_0^1xe^{x^2}\,dx
=\frac{e-1}{2}.
$$

## Resumen operativo

Dibuja primero y escribe después los límites. En una integral iterada, resuelve la integral interior tratando la otra variable como constante. Cambia el orden cuando simplifique el integrando o los límites, reconstruyendo siempre la región. Para áreas integra uno; para volúmenes usa altura superior menos inferior; para masas introduce la densidad.

Si necesitas trabajar regiones y cambios de orden con ejercicios de tu temario, las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/) permiten practicar el planteamiento y no solo la integración mecánica.
