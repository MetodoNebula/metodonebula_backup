---
title: Integral definida e indefinida: diferencias y ejemplos
date: 2026-08-10
updated: 2026-08-10
description: Distingue integral definida e indefinida: significado, notación, constante de integración, teorema fundamental y ejercicios resueltos.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: teorema-fundamental-calculo-ejemplos-ejercicios,que-son-las-integrales-y-para-que-se-utilizan,area-entre-dos-curvas-ejercicios-resueltos
image: /favicon.svg
---

Una integral indefinida representa una familia de primitivas:

$$
\int f(x)dx=F(x)+C,
$$

mientras que una integral definida representa un número asociado a un intervalo:

$$
\int_a^b f(x)dx.
$$

Ambas están conectadas por el teorema fundamental del cálculo: si \(F'(x)=f(x)\), entonces la integral definida vale \(F(b)-F(a)\). La constante \(C\) aparece en la indefinida, pero se cancela al evaluar extremos en la definida.

## Comparación rápida

| Aspecto | Integral indefinida | Integral definida |
| --- | --- | --- |
| Resultado | Familia de funciones | Número |
| Notación | \(\int f(x)dx\) | \(\int_a^b f(x)dx\) |
| Límites | No tiene | Tiene extremo inferior \(a\) y superior \(b\) |
| Constante | Incluye \(+C\) | No se escribe \(+C\) en el resultado |
| Pregunta que responde | ¿Qué funciones derivan en \(f\)? | ¿Cuánto se acumula entre \(a\) y \(b\)? |
| Comprobación | Derivar la primitiva | Revisar cálculo, signo, unidades y cotas |

La diferencia no es solo de notación. Una indefinida devuelve funciones; una definida evalúa una acumulación neta. Confundirlas conduce a errores como añadir \(+C\) a un área o dar un número cuando se pedía una primitiva general.

## Qué es una primitiva

Una función \(F\) es primitiva de \(f\) en un intervalo si

$$
F'(x)=f(x)
$$

en todos los puntos de ese intervalo. Por ejemplo, \(F(x)=x^3/3\) es una primitiva de \(f(x)=x^2\).

Pero no es la única:

$$
\frac{x^3}{3}+2,\qquad \frac{x^3}{3}-7,\qquad \frac{x^3}{3}+\pi
$$

tienen la misma derivada. En un intervalo, dos primitivas de una misma función continua difieren en una constante. Por eso escribimos

$$
\int x^2dx=\frac{x^3}{3}+C.
$$

El símbolo de integral indefinida no representa una suma infinita ni un área concreta: representa el conjunto de primitivas.

## Por qué hace falta la constante C

La derivada elimina las constantes. Si escribimos solo

$$
\int 2x dx=x^2,
$$

encontramos una primitiva, pero no todas. La respuesta general es

$$
\int2x dx=x^2+C.
$$

La constante puede determinarse si se añade una condición. Por ejemplo, busca una función \(F\) tal que

$$
F'(x)=2x \qquad\text{y}\qquad F(1)=5.
$$

Primero,

$$
F(x)=x^2+C.
$$

Aplicamos la condición:

$$
5=F(1)=1+C \quad\Rightarrow\quad C=4.
$$

La función concreta es \(F(x)=x^2+4\). La condición selecciona un miembro de la familia.

## Qué mide una integral definida

La integral definida de una función continua puede definirse como el límite de sumas de Riemann. Dividimos \([a,b]\) en intervalos pequeños de anchura \(\Delta x_i\), elegimos un punto \(x_i^*\) en cada uno y sumamos

$$
\sum_{i=1}^{n}f(x_i^*)\Delta x_i.
$$

Cuando el tamaño máximo de las particiones tiende a cero, el límite es

$$
\int_a^b f(x)dx.
$$

Esta definición explica la idea de acumulación: cada término es una pequeña contribución «valor por anchura». Si \(f\) es una velocidad en metros por segundo y \(x\) representa segundos, la integral tiene unidades de metros.

Para una función positiva, la integral coincide con el área bajo la curva. Si \(f\) toma valores negativos, las regiones bajo el eje restan. La [guía conceptual sobre qué son las integrales](/blog/que-son-las-integrales-y-para-que-se-utilizan/) desarrolla esta interpretación en distintos contextos.

## El teorema fundamental del cálculo

El [teorema fundamental del cálculo](/blog/teorema-fundamental-calculo-ejemplos-ejercicios/) conecta las dos ideas: acumulación y primitiva. Tiene dos afirmaciones complementarias.

Si \(f\) es continua y definimos

$$
A(x)=\int_a^x f(t)dt,
$$

entonces

$$
A'(x)=f(x).
$$

La tasa de cambio de lo acumulado es la cantidad que se está acumulando en ese instante.

Además, si \(F\) es cualquier primitiva de \(f\),

$$
\boxed{\int_a^b f(x)dx=F(b)-F(a)}.
$$

Esta fórmula permite calcular una suma continua mediante valores de una primitiva en dos puntos.

## Por qué C desaparece en una integral definida

Si usamos la primitiva general \(F(x)+C\), entonces

$$
\begin{aligned}
\int_a^b f(x)dx
&=[F(x)+C]_a^b\\
&=(F(b)+C)-(F(a)+C)\\
&=F(b)-F(a).
\end{aligned}
$$

La constante se cancela. Por eso no se añade \(+C\) al valor de una integral definida. No significa que las primitivas hayan dejado de tener constantes; significa que cualquiera de ellas produce la misma diferencia entre extremos.

## Ejemplo 1 — misma función, dos preguntas distintas

Sea \(f(x)=3x^2-2\).

**Pregunta indefinida.** Calcula todas sus primitivas.

$$
\int(3x^2-2)dx=x^3-2x+C.
$$

El resultado es una familia de funciones.

**Pregunta definida.** Calcula la acumulación entre \(x=0\) y \(x=2\).

$$
\begin{aligned}
\int_0^2(3x^2-2)dx
&=[x^3-2x]_0^2\\
&=(8-4)-0=4.
\end{aligned}
$$

El resultado es el número \(4\). En la primera pregunta se comprueba derivando; en la segunda se comprueba además que las unidades y el signo tengan sentido en el contexto.

## Ejemplo 2 — integral definida con zona negativa

Calcula

$$
\int_{-1}^{2}x\,dx.
$$

Una primitiva es \(F(x)=x^2/2\). Por tanto,

$$
\int_{-1}^{2}x\,dx
=\left[\frac{x^2}{2}\right]_{-1}^{2}
=2-\frac12
=\frac32.
$$

Entre \(-1\) y \(0\), la gráfica está bajo el eje y aporta \(-1/2\). Entre \(0\) y \(2\), aporta \(2\). La acumulación neta es \(3/2\).

El área geométrica total sería

$$
\int_{-1}^{0}(-x)dx+\int_0^2x dx
=\frac12+2=\frac52.
$$

Integral definida y área no siempre son sinónimos. Para regiones más complejas, consulta [cómo calcular el área entre dos curvas](/blog/area-entre-dos-curvas-ejercicios-resueltos/).

## Propiedades de la integral indefinida

La linealidad permite separar sumas y sacar constantes:

$$
\int[af(x)+bg(x)]dx
=a\int f(x)dx+b\int g(x)dx.
$$

Sin embargo, no existe una regla general que permita separar productos:

$$
\int f(x)g(x)dx
\neq\left(\int f(x)dx\right)\left(\int g(x)dx\right).
$$

Para productos puede corresponder [integración por partes](/blog/integracion-por-partes-formula-ejercicios-resueltos/); para composiciones, [cambio de variable](/blog/integracion-por-sustitucion-cambio-variable-ejercicios/).

## Propiedades de la integral definida

Para funciones integrables:

### Orientación

$$
\int_b^a f(x)dx=-\int_a^b f(x)dx.
$$

Intercambiar los límites cambia el signo.

### Intervalo nulo

$$
\int_a^a f(x)dx=0.
$$

No hay anchura sobre la que acumular.

### Aditividad por intervalos

$$
\int_a^b f(x)dx+\int_b^c f(x)dx=\int_a^c f(x)dx.
$$

Esta propiedad permite dividir en puntos donde cambia una fórmula o un signo.

### Linealidad

$$
\int_a^b[\alpha f(x)+\beta g(x)]dx
=\alpha\int_a^bf(x)dx+\beta\int_a^bg(x)dx.
$$

### Comparación

Si \(f(x)\leq g(x)\) en \([a,b]\), entonces

$$
\int_a^bf(x)dx\leq\int_a^bg(x)dx.
$$

En particular, si \(m\leq f(x)\leq M\),

$$
m(b-a)\leq\int_a^bf(x)dx\leq M(b-a).
$$

Estas cotas son muy útiles para detectar un resultado numérico imposible.

## Ejemplo 3 — usar propiedades sin integrar desde cero

Se sabe que

$$
\int_0^2 f(x)dx=3
\qquad\text{y}\qquad
\int_2^5 f(x)dx=-1.
$$

Calcula \(\int_0^5 f(x)dx\) y \(\int_5^0 f(x)dx\).

Por aditividad,

$$
\int_0^5f(x)dx=3+(-1)=2.
$$

Al invertir límites,

$$
\int_5^0f(x)dx=-2.
$$

No necesitamos conocer la fórmula de \(f\). Las propiedades contienen información suficiente.

## Ejemplo 4 — simetría

Si \(f\) es impar, \(f(-x)=-f(x)\), entonces

$$
\int_{-a}^{a}f(x)dx=0.
$$

Por ejemplo,

$$
\int_{-2}^{2}(x^3+3x)dx=0.
$$

Si \(f\) es par, \(f(-x)=f(x)\), entonces

$$
\int_{-a}^{a}f(x)dx=2\int_0^af(x)dx.
$$

Así,

$$
\int_{-1}^{1}(x^2+1)dx
=2\int_0^1(x^2+1)dx
=\frac83.
$$

La simetría simplifica el cálculo, pero debe comprobarse sobre toda la función, no sobre uno de sus términos.

## Función de acumulación

Una integral cuyo extremo superior es variable define una función:

$$
A(x)=\int_a^x f(t)dt.
$$

Aquí \(t\) es una variable muda: podría llamarse \(u\), \(s\) o cualquier otra letra. La variable libre es \(x\), que aparece en el límite.

### Ejemplo 5 — derivar una acumulación

Sea

$$
A(x)=\int_1^x(t^2+1)dt.
$$

Por el teorema fundamental,

$$
A'(x)=x^2+1.
$$

También podemos calcular primero:

$$
A(x)=\left[\frac{t^3}{3}+t\right]_1^x
=\frac{x^3}{3}+x-\frac43,
$$

y derivar para obtener el mismo resultado.

Si el límite es una función, interviene la regla de la cadena. Para

$$
B(x)=\int_0^{x^2}\cos t\,dt,
$$

se cumple

$$
B'(x)=\cos(x^2)\cdot2x.
$$

## Ejemplo 6 — límite superior e inferior variables

Sea

$$
G(x)=\int_x^{x^2}e^t dt.
$$

Podemos escribir

$$
G(x)=\int_0^{x^2}e^t dt-\int_0^xe^t dt.
$$

Derivando:

$$
G'(x)=2xe^{x^2}-e^x.
$$

La contribución del límite inferior lleva signo negativo. Este tipo de ejercicio evalúa simultáneamente orientación, teorema fundamental y regla de la cadena.

## Integrales definidas con cambio de variable

En una integral indefinida, después de sustituir \(u=g(x)\) hay que volver a \(x\). En una definida se pueden cambiar los límites:

$$
\int_a^b f(g(x))g'(x)dx
=\int_{g(a)}^{g(b)}f(u)du.
$$

### Ejemplo 7 — límites transformados

Calcula

$$
\int_0^1 2xe^{x^2}dx.
$$

Con \(u=x^2\), \(du=2x dx\). Los nuevos límites son \(0\) y \(1\):

$$
\int_0^1e^u du=e-1.
$$

No se añade \(+C\), y no se mezclan límites en \(x\) con una primitiva en \(u\).

## Ejemplo 8 — valor medio de una función

El valor medio de \(f\) en \([a,b]\) es

$$
f_{\text{medio}}=\frac1{b-a}\int_a^bf(x)dx.
$$

Para \(f(x)=x^2\) en \([0,3]\):

$$
f_{\text{medio}}
=\frac13\int_0^3x^2dx
=\frac13\left[\frac{x^3}{3}\right]_0^3
=3.
$$

El resultado tiene las mismas unidades que \(f\), porque dividimos la acumulación por la longitud del intervalo. Además está entre el mínimo \(0\) y el máximo \(9\).

## Integrales impropias: tener límites no basta

Una integral con límites puede ser impropia si el intervalo es infinito o el integrando no está acotado. La guía de [integrales impropias y convergencia](/blog/integrales-impropias-convergencia-ejercicios/) desarrolla su clasificación y los criterios de comparación. Por ejemplo,

$$
\int_1^\infty\frac1{x^2}dx
$$

se define como

$$
\lim_{b\to\infty}\int_1^b\frac1{x^2}dx=1.
$$

En cambio, \(\int_1^\infty1/x\,dx\) diverge. No basta con escribir una primitiva y sustituir \(\infty\) como si fuera un número; hay que evaluar un límite.

## Existencia de la integral y discontinuidades

Una función continua en \([a,b]\) es integrable, pero la continuidad no es necesaria. Las funciones acotadas con un número finito de discontinuidades también son integrables en el sentido de Riemann. Por ejemplo,

$$
f(x)=
\begin{cases}
0,&x<0,\\
1,&x\geq0
\end{cases}
$$

es integrable en \([-1,1]\), y

$$
\int_{-1}^{1}f(x)dx=1.
$$

La discontinuidad en un único punto no aporta anchura. En cambio, una discontinuidad infinita, como la de \(1/x\) en cero, obliga a formular una integral impropia. No puede ignorarse porque la función deja de estar acotada cerca del punto.

También hay que distinguir una fórmula definida por tramos de una función discontinua. Si las piezas encajan en el punto de cambio, la función puede ser continua; si no encajan pero permanece acotada, la integral puede seguir existiendo y se calcula separando intervalos.

### Ejemplo 9 — función definida por tramos

Sea

$$
f(x)=
\begin{cases}
x+1,&-1\leq x<0,\\
x^2,&0\leq x\leq2.
\end{cases}
$$

Calcula \(\int_{-1}^{2}f(x)dx\). Usamos aditividad en el punto donde cambia la fórmula:

$$
\begin{aligned}
\int_{-1}^{2}f(x)dx
&=\int_{-1}^{0}(x+1)dx+\int_0^2x^2dx\\
&=\left[\frac{x^2}{2}+x\right]_{-1}^{0}
+\left[\frac{x^3}{3}\right]_0^2\\
&=\frac12+\frac83=\frac{19}{6}.
\end{aligned}
$$

El valor de la función exactamente en \(x=0\) no modificaría la integral: cambiar un número finito de puntos no altera una suma continua.

## Aproximar una integral definida

El teorema fundamental permite calcular exactamente cuando conocemos una primitiva elemental. Si no la conocemos o solo disponemos de datos, usamos aproximaciones numéricas.

Para una partición uniforme de anchura \(h=(b-a)/n\), la regla del punto medio aproxima

$$
\int_a^bf(x)dx
\approx h\sum_{i=1}^{n}f\left(\frac{x_{i-1}+x_i}{2}\right).
$$

La regla del trapecio usa

$$
\int_a^bf(x)dx
\approx\frac h2\left[f(x_0)+2\sum_{i=1}^{n-1}f(x_i)+f(x_n)\right].
$$

Estas fórmulas aproximan la integral definida, no producen una integral indefinida. Una tabla de valores puede estimar una acumulación, pero no determina por sí sola una familia de primitivas simbólicas.

### Ejemplo 10 — regla del trapecio

Aproxima \(\int_0^2x^2dx\) con dos subintervalos. Tenemos \(h=1\) y nodos \(0,1,2\):

$$
T_2=\frac12[f(0)+2f(1)+f(2)]
=\frac12(0+2+4)=3.
$$

El valor exacto es

$$
\left[\frac{x^3}{3}\right]_0^2=\frac83\approx2{,}667.
$$

El trapecio sobreestima porque \(x^2\) es convexa: las cuerdas quedan por encima de la gráfica. Esta interpretación ayuda a juzgar el signo del error.

## Unidades y análisis dimensional

Si \(f(x)\) tiene unidades \(U_f\) y \(x\) tiene unidades \(U_x\), la integral tiene unidades \(U_fU_x\). Una tasa de litros por minuto integrada respecto de minutos produce litros; una fuerza integrada respecto del desplazamiento produce trabajo.

Una primitiva también tiene unidades \(U_fU_x\). La constante \(C\) debe tener esas mismas unidades para poder sumarse a \(F(x)\). Este detalle evita expresiones físicamente incoherentes aunque el álgebra parezca correcta.

### Ejemplo 11 — tasa de entrada

Un depósito recibe agua a una tasa \(r(t)=6+2t\) litros por minuto durante cuatro minutos. El volumen añadido es

$$
\int_0^4(6+2t)dt
=[6t+t^2]_0^4
=40\text{ litros}.
$$

La primitiva \(6t+t^2+C\) describiría familias de funciones de volumen total; una condición inicial determinaría \(C\). La integral definida responde cuánto se añadió durante el intervalo.

## Una integral definida puede existir sin primitiva elemental

Que una integral definida tenga valor no implica que podamos escribir una primitiva con funciones elementales. La función $e^{-x^2}$ es continua, así que

$$
\int_0^1e^{-x^2}dx
$$

existe. Sin embargo, su primitiva no se expresa mediante una combinación finita de polinomios, exponenciales, logaritmos y funciones trigonométricas elementales.

El valor puede aproximarse numéricamente o expresarse mediante la función error. Esto separa dos preguntas:

- La **existencia** de la integral definida depende de la integrabilidad de la función en el intervalo.
- El **cálculo simbólico mediante primitivas elementales** depende de que exista una fórmula elemental disponible.

El teorema fundamental sigue siendo válido formulado con la función de acumulación. Lo que falta no es la integral, sino una expresión dentro del repertorio elemental del curso.

## Errores frecuentes

- **Olvidar \(+C\) en una indefinida.** Se piden todas las primitivas.
- **Añadir \(+C\) a una definida.** El resultado es un número y la constante se cancela.
- **Confundir integral definida con área total.** Las regiones negativas restan.
- **Sustituir límites antes de obtener una primitiva correcta.** Primero se integra, después se evalúa.
- **Invertir límites sin cambiar el signo.** La orientación forma parte de la definición.
- **Usar la misma letra como variable muda y límite sin cuidado.** En \(\int_a^x f(t)dt\), \(t\) desaparece tras integrar.
- **Aplicar el teorema fundamental ignorando discontinuidades.** Hay que revisar las hipótesis y las posibles integrales impropias.
- **Tratar \(dx\) como decoración.** Indica la variable respecto de la que se integra y sus unidades contribuyen al resultado.

## Cómo reconocer qué te están pidiendo

Busca estas señales en el enunciado:

- «Calcula una primitiva» o «integra \(f(x)\)»: integral indefinida y \(+C\).
- «Calcula \(\int_a^b f(x)dx\)»: integral definida y resultado numérico.
- «Área»: hay que estudiar signos y fronteras; puede requerir valores absolutos o varios tramos.
- «Acumulación entre dos instantes»: integral definida con interpretación y unidades.
- «Halla la función sabiendo que su derivada…»: primitiva más condición para determinar \(C\).
- «Deriva una función definida mediante una integral»: teorema fundamental y quizá regla de la cadena.

Identificar el tipo de objeto antes de calcular evita la mayoría de errores de notación.

## Cómo comprobar cada tipo

Para una integral indefinida:

1. Deriva la respuesta.
2. Simplifica hasta recuperar exactamente el integrando.
3. Revisa el dominio y la constante.

Para una integral definida:

1. Comprueba la primitiva por derivación.
2. Evalúa siempre «superior menos inferior».
3. Revisa signo, cotas y unidades.
4. Si se pide área, verifica que no haya cancelaciones.
5. Si hay singularidades o infinito, formula los límites correspondientes.

## Ejercicios propuestos

1. Calcula \(\int(4x^3-3x^2+2)dx\).
2. Halla \(F\) si \(F'(x)=6x-1\) y \(F(0)=4\).
3. Calcula \(\int_1^3(2x+1)dx\).
4. Calcula la integral y el área geométrica de \(f(x)=x\) en \([-2,1]\).
5. Si \(H(x)=\int_2^{x^3}\sqrt{1+t^2}dt\), calcula \(H'(x)\).
6. Sabiendo que \(\int_0^2f=5\) y \(\int_2^4f=-2\), calcula \(\int_4^0f\).
7. Calcula el valor medio de \(f(x)=3x+1\) en \([0,2]\).

## Soluciones de los ejercicios

**1. Integral indefinida.**

$$
\int(4x^3-3x^2+2)dx=x^4-x^3+2x+C.
$$

Derivar devuelve el integrando.

**2. Condición inicial.** Primero,

$$
F(x)=3x^2-x+C.
$$

Como \(F(0)=C=4\),

$$
F(x)=3x^2-x+4.
$$

**3. Integral definida.**

$$
\int_1^3(2x+1)dx=[x^2+x]_1^3=12-2=10.
$$

**4. Integral frente a área.**

$$
\int_{-2}^{1}x dx
=\left[\frac{x^2}{2}\right]_{-2}^{1}
=-\frac32.
$$

El área es

$$
\int_{-2}^{0}(-x)dx+\int_0^1x dx
=2+\frac12=\frac52.
$$

**5. Teorema fundamental y cadena.**

$$
H'(x)=\sqrt{1+(x^3)^2}\cdot3x^2
=3x^2\sqrt{1+x^6}.
$$

**6. Aditividad y orientación.**

$$
\int_0^4f=5-2=3,
$$

luego

$$
\int_4^0f=-3.
$$

**7. Valor medio.**

$$
f_{\text{medio}}
=\frac12\int_0^2(3x+1)dx
=\frac12\left[\frac{3x^2}{2}+x\right]_0^2
=4.
$$

El valor queda entre \(f(0)=1\) y \(f(2)=7\), como debe ocurrir.

## Resumen práctico

La integral indefinida busca una familia de primitivas y termina con \(+C\). La integral definida mide una acumulación neta sobre un intervalo y termina en un número. El teorema fundamental permite calcular esa acumulación restando valores de una primitiva y explica por qué la constante desaparece.

Antes de operar, identifica qué objeto pide el problema. Después comprueba por derivación y, en integrales definidas, añade controles de signo, unidades, cotas y continuidad. Si necesitas trabajar estas diferencias sobre problemas de tu grado, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
