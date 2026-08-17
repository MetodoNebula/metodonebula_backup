const c=`---
title: Álgebra Lineal en la universidad: qué estudiar primero y qué errores penalizan más
date: 2026-06-15
updated: 2026-06-15
description: Guía para estudiar Álgebra Lineal en la universidad: orden de temas, matrices, espacios vectoriales, diagonalización y errores frecuentes.
tag: Álgebra Lineal
category: Matemáticas universitarias
relatedService: /clases-particulares/algebra-lineal-universidad/
relatedPosts: matrices-determinantes-sistemas-ecuaciones-guia,como-estudiar-matematicas-sin-memorizar,como-aprobar-calculo-i-ingenieria-seis-semanas
image: /favicon.svg
---

Álgebra Lineal suele ser una de las primeras asignaturas donde muchos estudiantes universitarios descubren que saber operar no basta. Puedes hacer reducciones por filas correctamente y, aun así, no entender qué significa una base, una dimensión o una aplicación lineal.

La forma más eficiente de estudiar Álgebra Lineal es construir el temario en capas. Si saltas directamente a diagonalización sin dominar sistemas, rango y subespacios, cada ejercicio parece distinto aunque use las mismas ideas.

## Qué estudiar primero

El orden recomendado es:

1. Sistemas de ecuaciones y método de Gauss.
2. Matrices, rango y operaciones elementales.
3. Determinantes e inversa.
4. Vectores, combinaciones lineales y dependencia.
5. Espacios vectoriales, subespacios, bases y dimensión.
6. Aplicaciones lineales, núcleo e imagen.
7. Autovalores, autovectores y diagonalización.

Este orden no es casual. El método de Gauss aparece en casi todo: resolver sistemas, calcular rango, estudiar independencia, encontrar bases, hallar el núcleo de una aplicación y comprobar diagonalización.

## La idea central: rango, dimensión y libertad

Una matriz no es solo una tabla de números. Resume relaciones entre variables. El rango mide cuánta información independiente hay.

Si un sistema tiene matriz de coeficientes \\(A\\) y matriz ampliada \\((A|b)\\), el criterio de compatibilidad se expresa así:

$$
\\operatorname{rg}(A)=\\operatorname{rg}(A|b)
$$

Si además ese rango coincide con el número de incógnitas, el sistema tiene solución única. Si es menor, hay infinitas soluciones.

Esta idea conecta con bases y dimensión: cuantas menos restricciones independientes, más grados de libertad quedan.

## Errores que penalizan mucho

### 1. Hacer Gauss sin justificar operaciones

Las operaciones elementales por filas son válidas, pero deben ser claras. Cambiar filas, sumar múltiplos o multiplicar por escalares no nulos no cambia el conjunto de soluciones de forma arbitraria. Si el examen pide razonamiento, no basta con escribir matrices sueltas.

### 2. Confundir filas con columnas

La independencia de columnas y la independencia de filas están relacionadas por el rango, pero no siempre responden a la misma pregunta del enunciado. Si te piden si unos vectores generan un subespacio, identifica primero si esos vectores están colocados como filas o columnas.

### 3. Usar determinantes cuando no toca

El determinante solo existe para matrices cuadradas. Además, no siempre es la herramienta más eficiente. Para estudiar un conjunto de vectores en \\(\\mathbb{R}^4\\), muchas veces Gauss es más claro que buscar determinantes menores sin orden.

### 4. No distinguir base de conjunto generador

Una base debe cumplir dos condiciones: generar el espacio y ser linealmente independiente. Un conjunto con demasiados vectores puede generar, pero no ser base. Un conjunto con pocos vectores puede ser independiente, pero no generar.

### 5. Diagonalizar sin comprobar

Para diagonalizar una matriz \\(A\\), necesitas suficientes autovectores independientes. No basta con encontrar autovalores.

$$
A=PDP^{-1}
$$

Aquí \\(D\\) contiene los autovalores y \\(P\\) contiene autovectores independientes. Si \\(P\\) no es invertible, la diagonalización falla.

## Ejercicio resuelto: dependencia lineal

Estudia si los vectores \\(v_1=(1,2,1)\\), \\(v_2=(2,4,2)\\) y \\(v_3=(0,1,1)\\) son linealmente independientes.

Planteamos:

$$
a v_1+b v_2+c v_3=0
$$

Como \\(v_2=2v_1\\), ya existe una relación no trivial:

$$
-2v_1+v_2+0v_3=0
$$

Por tanto, el conjunto es linealmente dependiente. No hace falta seguir operando: detectar relaciones evidentes ahorra tiempo.

## Cómo estudiar para examen

Cada bloque debe acabar con tres tipos de ejercicios:

- Uno mecánico para asegurar técnica.
- Uno conceptual para explicar qué significa el resultado.
- Uno mixto de examen donde tengas que elegir herramienta.

Por ejemplo, después de estudiar rango, no hagas solo reducciones por filas. Pregúntate también qué implica el rango para soluciones, dimensión, independencia o existencia de inversa.

## Checklist antes del examen

Antes del examen deberías poder responder sin mirar apuntes:

- Qué significa que un conjunto sea linealmente independiente.
- Cómo encontrar una base de un subespacio.
- Cuándo una matriz tiene inversa.
- Qué mide el rango.
- Cómo se calcula el núcleo de una aplicación lineal.
- Qué condición permite diagonalizar.

Si alguno de estos puntos solo lo reconoces cuando ves una solución, todavía no está consolidado.

Para trabajar Álgebra Lineal con problemas guiados y corrección de errores, puedes revisar la página de [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/).
`,l=`---
title: Área entre dos curvas: planteamiento y ejercicios resueltos
date: 2026-08-08
updated: 2026-08-08
description: Aprende a calcular el área entre curvas: intersecciones, función superior e inferior, cambios de signo y ejercicios resueltos paso a paso.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: integral-definida-e-indefinida-diferencias-ejemplos,que-son-las-integrales-y-para-que-se-utilizan,metodos-de-integracion-como-elegir
image: /favicon.svg
---

El área entre dos curvas se calcula integrando la distancia vertical entre ellas. Si \\(f(x)\\geq g(x)\\) en todo el intervalo \\([a,b]\\), entonces

$$
A=\\int_a^b\\bigl(f(x)-g(x)\\bigr)\\,dx.
$$

La parte decisiva no es hallar primitivas: es encontrar correctamente las intersecciones y determinar qué función está arriba en cada tramo. Si las curvas cambian de orden, hay que dividir el intervalo; un área geométrica nunca puede salir negativa.

## La idea geométrica: sumar distancias

En una posición \\(x\\), la altura de una tira vertical que une las dos curvas es

$$
h(x)=y_{\\text{superior}}-y_{\\text{inferior}}.
$$

Si la tira tiene anchura muy pequeña \\(dx\\), su área aproximada es \\(h(x)dx\\). La integral suma esas contribuciones:

$$
A=\\int_a^b h(x)\\,dx.
$$

![Región entre la recta y=x+2 y la parábola y=x², limitada por sus puntos de intersección](/assets/latex/area-between-curves.svg)

En la figura, la recta está por encima de la parábola entre \\(x=-1\\) y \\(x=2\\). Por eso la altura es \\((x+2)-x^2\\). Fuera de ese intervalo las curvas intercambian su orden, pero esas zonas no forman parte de la región sombreada.

La interpretación se apoya en el significado de acumulación explicado en [qué son las integrales](/blog/que-son-las-integrales-y-para-que-se-utilizan/). Aquí el integrando no es una de las curvas, sino la separación entre ambas.

## Procedimiento completo

Para una región limitada por \\(y=f(x)\\) y \\(y=g(x)\\):

1. Dibuja un esquema cualitativo o analiza las funciones.
2. Resuelve \\(f(x)=g(x)\\) para encontrar las intersecciones.
3. Ordena las abscisas de corte.
4. Decide qué función está arriba en cada intervalo, usando un punto de prueba si hace falta.
5. Escribe «superior menos inferior» en cada tramo.
6. Integra y evalúa los límites.
7. Comprueba que el resultado es no negativo y razonable respecto al dibujo.

No empieces calculando primitivas antes de resolver las intersecciones. Los límites forman parte del planteamiento geométrico, no son datos secundarios.

## Ejemplo 1 — recta y parábola

Calcula el área encerrada por

$$
y=x+2 \\qquad\\text{e}\\qquad y=x^2.
$$

**Qué nos piden.** El área de la región cerrada entre ambas gráficas.

**Intersecciones.** Igualamos:

$$
x+2=x^2.
$$

Entonces

$$
x^2-x-2=0=(x-2)(x+1),
$$

de donde \\(x=-1\\) y \\(x=2\\).

**Qué curva está arriba.** Probamos \\(x=0\\): la recta vale \\(2\\) y la parábola vale \\(0\\). La recta es superior en \\([-1,2]\\).

**Desarrollo.**

$$
\\begin{aligned}
A
&=\\int_{-1}^{2}\\left[(x+2)-x^2\\right]dx\\\\
&=\\left[\\frac{x^2}{2}+2x-\\frac{x^3}{3}\\right]_{-1}^{2}\\\\
&=\\left(2+4-\\frac83\\right)-\\left(\\frac12-2+\\frac13\\right)\\\\
&=\\frac92.
\\end{aligned}
$$

**Comprobación.** La anchura de la región es \\(3\\) y su altura máxima, en torno al centro, es algo mayor que \\(2\\). Un área de \\(4{,}5\\) es coherente. Además, el integrando es no negativo en todo el intervalo.

## Integral con signo frente a área geométrica

Para una función \\(f\\), la integral

$$
\\int_a^b f(x)dx
$$

suma con signo: las zonas bajo el eje \\(x\\) restan. En cambio, el área entre \\(y=f(x)\\) y el eje es

$$
A=\\int_a^b|f(x)|dx.
$$

El valor absoluto no se integra de forma mecánica: primero hay que encontrar los ceros y escribir una expresión sin valor absoluto en cada tramo. La [diferencia entre integral definida e indefinida](/blog/integral-definida-e-indefinida-diferencias-ejemplos/) ayuda a separar el cálculo de acumulación con signo del cálculo de primitivas.

## Ejemplo 2 — área respecto del eje x

Calcula el área entre \\(f(x)=x^2-1\\) y el eje \\(x\\) en \\([-2,2]\\).

Los ceros son

$$
x^2-1=0 \\quad\\Rightarrow\\quad x=-1,1.
$$

La función es positiva en \\([-2,-1]\\) y \\([1,2]\\), y negativa en \\([-1,1]\\). Por simetría par,

$$
A=2\\int_1^2(x^2-1)dx-\\int_{-1}^{1}(x^2-1)dx.
$$

También podemos aprovechar la simetría del tramo central:

$$
A=2\\int_1^2(x^2-1)dx+2\\int_0^1(1-x^2)dx.
$$

Calculamos:

$$
2\\left[\\frac{x^3}{3}-x\\right]_1^2
+2\\left[x-\\frac{x^3}{3}\\right]_0^1
=\\frac83.
$$

**Comprobación.** La integral con signo en \\([-2,2]\\) sería

$$
\\int_{-2}^{2}(x^2-1)dx=\\frac43,
$$

distinta del área total \\(8/3\\). La diferencia procede de la región negativa, que en el área se cuenta en positivo.

## Cuando las curvas cambian de orden

Si \\(f-g\\) cambia de signo dentro del intervalo, una sola integral puede cancelar áreas. Hay que localizar todos los puntos donde \\(f(x)=g(x)\\) y separar.

En forma compacta,

$$
A=\\int_a^b|f(x)-g(x)|dx,
$$

pero para calcularla se elimina el valor absoluto por tramos.

## Ejemplo 3 — dos curvas que se cruzan varias veces

Calcula el área entre

$$
f(x)=x^3 \\qquad\\text{y}\\qquad g(x)=x
$$

en \\([-1,1]\\).

**Intersecciones.**

$$
x^3=x \\quad\\Rightarrow\\quad x(x-1)(x+1)=0.
$$

Los cortes son \\(-1,0,1\\).

En \\((-1,0)\\), por ejemplo en \\(x=-1/2\\), \\(x^3=-1/8\\) y \\(x=-1/2\\), así que \\(x^3\\) está arriba. En \\((0,1)\\), \\(x\\) está arriba.

Por tanto,

$$
A=\\int_{-1}^{0}(x^3-x)dx+\\int_0^1(x-x^3)dx.
$$

La simetría permite escribir

$$
A=2\\int_0^1(x-x^3)dx
=2\\left[\\frac{x^2}{2}-\\frac{x^4}{4}\\right]_0^1
=\\frac12.
$$

**Error que evita el planteamiento.** Integrar \\(x-x^3\\) directamente en \\([-1,1]\\) daría cero porque es impar, pero la región tiene área positiva.

## Cómo decidir la función superior

Hay tres métodos útiles:

- **Gráfica razonada.** Ayuda a entender la región, pero un dibujo aproximado no sustituye la comprobación.
- **Punto de prueba.** Entre dos intersecciones, evalúa ambas funciones en un valor sencillo.
- **Estudio del signo.** Factoriza \\(f(x)-g(x)\\) y construye una tabla de signos.

Si \\(f-g>0\\), \\(f\\) está arriba; si \\(f-g<0\\), está arriba \\(g\\). El estudio del signo es especialmente seguro cuando hay más de dos cortes.

## Ejemplo 4 — exponencial y recta en un intervalo dado

Calcula el área entre \\(y=e^x\\) y \\(y=1+x\\) para \\(x\\in[-1,1]\\).

Las funciones coinciden en \\(x=0\\). Además, la desigualdad clásica

$$
e^x\\geq1+x
$$

se cumple para todo \\(x\\), con igualdad solo en cero. Por tanto, la exponencial está arriba en ambos tramos y no hace falta separar para cambiar el orden:

$$
\\begin{aligned}
A
&=\\int_{-1}^{1}\\left(e^x-1-x\\right)dx\\\\
&=\\left[e^x-x-\\frac{x^2}{2}\\right]_{-1}^{1}\\\\
&=e+e^{-1}-3.
\\end{aligned}
$$

El resultado es positivo, aproximadamente \\(0{,}086\\). Es pequeño porque \\(1+x\\) es la recta tangente a \\(e^x\\) en cero y ambas curvas permanecen próximas en el intervalo.

## Integrar respecto de y

Las tiras verticales no siempre son la opción más simple. Si las curvas se describen mejor como \\(x\\) en función de \\(y\\), usamos tiras horizontales:

$$
A=\\int_c^d\\left(x_{\\text{derecha}}-x_{\\text{izquierda}}\\right)dy.
$$

La regla es análoga: derecha menos izquierda. Elegimos la orientación que evite partir innecesariamente la región.

## Ejemplo 5 — una parábola lateral y una recta

Calcula el área encerrada por

$$
x=y^2 \\qquad\\text{y}\\qquad x=y+2.
$$

**Intersecciones.** Igualamos:

$$
y^2=y+2 \\quad\\Rightarrow\\quad (y-2)(y+1)=0.
$$

Así, \\(y=-1\\) y \\(y=2\\). En \\(y=0\\), la recta da \\(x=2\\) y la parábola \\(x=0\\), luego la recta está a la derecha.

$$
\\begin{aligned}
A
&=\\int_{-1}^{2}\\left[(y+2)-y^2\\right]dy\\\\
&=\\left[\\frac{y^2}{2}+2y-\\frac{y^3}{3}\\right]_{-1}^{2}\\\\
&=\\frac92.
\\end{aligned}
$$

Es la misma estructura algebraica del primer ejemplo, rotada en la forma de describir las fronteras.

## Ejemplo 6 — elegir la orientación que simplifica

Considera la región limitada por \\(y=x^2\\) y \\(y=2-x\\). Con tiras verticales, las intersecciones se obtienen de

$$
x^2=2-x,
$$

es decir, \\(x=-2\\) y \\(x=1\\). La recta está arriba:

$$
A=\\int_{-2}^{1}(2-x-x^2)dx=\\frac92.
$$

Si intentáramos integrar respecto de \\(y\\), la parábola se convertiría en \\(x=\\pm\\sqrt y\\) y la frontera izquierda cambiaría en parte de la región. Habría que dividir el cálculo. Las tiras verticales son claramente mejores.

La orientación no cambia el área; cambia la dificultad del planteamiento.

## Ejemplo 7 — área entre valor absoluto y parábola

Calcula el área encerrada por

$$
y=|x| \\qquad\\text{y}\\qquad y=x^2.
$$

La igualdad \\(x^2=|x|\\) produce \\(x=-1,0,1\\). En \\([-1,0]\\), \\(|x|=-x\\); en \\([0,1]\\), \\(|x|=x\\). El valor absoluto está por encima de \\(x^2\\) en ambos tramos.

Por simetría,

$$
A=2\\int_0^1(x-x^2)dx
=2\\left[\\frac{x^2}{2}-\\frac{x^3}{3}\\right]_0^1
=\\frac13.
$$

**Comprobación.** Cada mitad tiene base \\(1\\) y altura máxima menor que \\(1/4\\); un área total de \\(1/3\\) es compatible con la forma curvada de la región.

## Ejemplo 8 — parámetro y unidades

La velocidad de dos móviles durante \\(0\\leq t\\leq4\\) es

$$
v_1(t)=2t \\qquad\\text{y}\\qquad v_2(t)=t+2,
$$

en metros por segundo. Calcula la diferencia total de desplazamiento acumulado en valor absoluto.

Las velocidades coinciden cuando \\(2t=t+2\\), es decir, en \\(t=2\\). Antes de ese instante \\(v_2>v_1\\); después \\(v_1>v_2\\):

$$
\\begin{aligned}
A
&=\\int_0^2[(t+2)-2t]dt+\\int_2^4[2t-(t+2)]dt\\\\
&=\\int_0^2(2-t)dt+\\int_2^4(t-2)dt\\\\
&=2+2=4.
\\end{aligned}
$$

Las unidades son metros, porque integramos una diferencia de velocidades respecto del tiempo. Geométricamente es un área en una gráfica velocidad-tiempo; físicamente representa la diferencia acumulada sin cancelaciones.

## Regiones no acotadas y áreas impropias

Dos curvas pueden delimitar una región que se extiende hasta infinito. El área se define mediante un límite. Por ejemplo, entre \\(y=1/x^2\\) y el eje \\(x\\) para \\(x\\geq1\\):

$$
A=\\int_1^\\infty\\frac1{x^2}dx
=\\lim_{b\\to\\infty}\\left[-\\frac1x\\right]_1^b=1.
$$

Una región infinita puede tener área finita. En cambio,

$$
\\int_1^\\infty\\frac1x dx
$$

diverge, de modo que la región bajo \\(1/x\\) tiene área infinita. El dibujo por sí solo no decide la convergencia.

## Regiones delimitadas por tres curvas

Cuando intervienen tres o más fronteras, una misma función puede no ser la superior o inferior en todo el intervalo. Las intersecciones deben usarse para describir el contorno real, no para integrar automáticamente todas las parejas posibles.

### Ejemplo 9 — parábola y dos rectas

Calcula el área de la región limitada por

$$
y=x^2,\\qquad y=x+2,\\qquad y=-x+2.
$$

Las rectas se cortan en \\((0,2)\\). La parábola corta a \\(y=x+2\\) en \\(x=-1,2\\), y a \\(y=-x+2\\) en \\(x=-2,1\\). Para la región central, los extremos son \\(x=-2\\) y \\(x=2\\).

Entre \\(-2\\) y \\(0\\), la frontera superior es \\(y=-x+2\\). Entre \\(0\\) y \\(2\\), es \\(y=x+2\\). La parábola forma la frontera inferior:

$$
\\begin{aligned}
A
&=\\int_{-2}^{0}\\left[(-x+2)-x^2\\right]dx
+\\int_0^2\\left[(x+2)-x^2\\right]dx.
\\end{aligned}
$$

La región es simétrica respecto del eje \\(y\\), así que

$$
A=2\\int_0^2(x+2-x^2)dx
=\\frac{20}{3}.
$$

**Qué había que reconocer.** Las rectas intercambian el papel de frontera superior en \\(x=0\\). Usar una sola entre \\(-2\\) y \\(2\\) incluiría puntos fuera del recinto.

## Curvas dadas de forma implícita

Una ecuación como

$$
x^2+y^2=R^2
$$

no define una única función \\(y=f(x)\\) en toda la circunferencia. Hay dos ramas:

$$
y=\\sqrt{R^2-x^2}
\\qquad\\text{y}\\qquad
y=-\\sqrt{R^2-x^2}.
$$

Para calcular el área del círculo con tiras verticales, la altura es

$$
2\\sqrt{R^2-x^2},
$$

y

$$
A=\\int_{-R}^{R}2\\sqrt{R^2-x^2}dx=\\pi R^2.
$$

El detalle esencial es distinguir las dos ramas; \\(y=\\sqrt{R^2-x^2}\\) describe solo el semicírculo superior.

## Ejemplo 10 — región dentro de un círculo

En el círculo unidad \\(x^2+y^2=1\\), calcula el área situada por encima de \\(y=0\\).

La frontera superior es \\(y=\\sqrt{1-x^2}\\), la inferior es el eje y los extremos son \\(-1,1\\):

$$
A=2\\int_0^1\\sqrt{1-x^2}dx.
$$

Con \\(x=\\sin\\theta\\), \\(dx=\\cos\\theta d\\theta\\), y límites \\(0,\\pi/2\\):

$$
\\begin{aligned}
A
&=2\\int_0^{\\pi/2}\\cos^2\\theta d\\theta\\\\
&=2\\int_0^{\\pi/2}\\frac{1+\\cos2\\theta}{2}d\\theta\\\\
&=\\frac\\pi2.
\\end{aligned}
$$

**Comprobación geométrica.** Es un semicírculo de radio uno, cuya área conocida es \\(\\pi/2\\).

## Cómo construir un esquema útil

Un esquema matemático debe mostrar los puntos de intersección, qué curvas forman el borde, los intervalos donde cambia la frontera y la orientación de una tira representativa.

Si eliges tiras verticales, dibuja un pequeño segmento vertical dentro de la región y lee sus extremos. Si una misma tira atraviesa dos regiones separadas o cambia de frontera al desplazarse, probablemente tendrás que dividir el intervalo o usar tiras horizontales.

## Cotas para comprobar el área

Si la distancia entre curvas \\(h(x)\\) satisface

$$
0\\leq h(x)\\leq M
$$

en un intervalo de anchura \\(b-a\\), entonces

$$
0\\leq A\\leq M(b-a).
$$

También puede inscribirse un rectángulo para obtener una cota inferior. Estas estimaciones detectan límites equivocados, factores de simetría olvidados y errores aritméticos grandes.

Por ejemplo, entre \\(y=x\\) y \\(y=x^2\\) en \\([0,1]\\), la separación máxima es \\(1/4\\); por tanto el área debe ser menor que \\(1/4\\). El valor exacto \\(1/6\\) cumple la cota.

## Ejemplo 11 — decidir entre dx y dy

Calcula el área limitada por $y=x^2$, el eje $y$ y la recta $y=2x+3$ en la región situada a la derecha del eje vertical.

La parábola y la recta se cortan cuando $x^2=2x+3$, es decir, en $x=-1$ y $x=3$. La región indicada usa $0\\leq x\\leq3$. Con tiras verticales, la recta está arriba:

$$
\\begin{aligned}
A
&=\\int_0^3(2x+3-x^2)dx\\\\
&=\\left[x^2+3x-\\frac{x^3}{3}\\right]_0^3\\\\
&=9.
\\end{aligned}
$$

Con tiras horizontales habría que despejar $x=\\sqrt y$ para la parábola y $x=(y-3)/2$ para la recta. Además, la frontera izquierda cambiaría en parte de la región, lo que obliga a dividir. Integrar respecto de $x$ evita esa complicación.

**Comprobación.** La separación es cero en $x=3$, vale $3$ en $x=0$ y alcanza un máximo de $4$ en $x=1$. Una región de anchura $3$ y altura media $3$ tiene área $9$, coherente con el cálculo.

## Aplicación: excedente económico

Si una curva de demanda inversa es $p_D(q)$ y una curva de oferta es $p_O(q)$, el área

$$
\\int_0^{q^*}[p_D(q)-p_O(q)]dq
$$

mide la diferencia acumulada entre disposición a pagar y coste marginal hasta la cantidad de equilibrio $q^*$.

Por ejemplo, si

$$
p_D(q)=10-q,
\\qquad
p_O(q)=2+q,
$$

el equilibrio satisface $10-q=2+q$, luego $q^*=4$. El área entre ambas curvas es

$$
\\int_0^4[(10-q)-(2+q)]dq
=\\int_0^4(8-2q)dq
=16.
$$

Si el precio está en euros y la cantidad en unidades, el resultado se expresa en euros. La interpretación contextual no cambia el planteamiento, pero obliga a indicar unidades y sentido.

## Errores frecuentes

- **Restar en el orden incorrecto.** Con tiras verticales: superior menos inferior.
- **Usar solo dos intersecciones cuando hay más.** Hay que analizar todos los cortes relevantes.
- **Confundir integral con área.** Las zonas negativas no se cancelan en un área geométrica.
- **No partir cuando cambia el orden.** El integrando \\(f-g\\) debe ser no negativo en cada tramo de área.
- **Confiar únicamente en el dibujo.** Un esquema orienta; el signo de \\(f-g\\) confirma.
- **Elegir una orientación costosa.** Valora si convienen tiras verticales u horizontales.
- **Olvidar unidades.** El resultado tiene unidades de eje horizontal por eje vertical.
- **Ignorar singularidades o infinito.** En regiones impropias se necesita un límite convergente.

## Cómo comprobar el resultado

Antes de aceptar el área:

1. Verifica que las curvas coinciden en los extremos de cada región cerrada.
2. Comprueba que el integrando de cada tramo es no negativo.
3. Estima base por altura para detectar órdenes de magnitud imposibles.
4. Usa simetría cuando exista y comprueba que no estás duplicando un tramo dos veces.
5. Revisa unidades y singularidades.

Si el cálculo produce un número negativo, no basta con cambiarle el signo al final. Hay que corregir el orden de las funciones o la división de intervalos, porque el planteamiento contiene información geométrica.

## Ejercicios propuestos

1. Área entre \\(y=2x\\) y \\(y=x^2\\).
2. Área entre \\(y=x^2-4\\) y el eje \\(x\\) en \\([-3,3]\\).
3. Área entre \\(y=\\sqrt{x}\\) y \\(y=x\\) en \\([0,1]\\).
4. Área entre \\(y=x^3-x\\) y el eje \\(x\\) en \\([-1,1]\\).
5. Área encerrada por \\(x=y^2-1\\) y \\(x=1-y\\).
6. Área bajo \\(y=e^{-x}\\) para \\(x\\geq0\\).

## Soluciones de los ejercicios

**1. Recta y parábola.** Las intersecciones son \\(x=0,2\\), y \\(2x\\geq x^2\\) entre ellas:

$$
A=\\int_0^2(2x-x^2)dx=\\frac43.
$$

**2. Tres tramos por cambios de signo.** Los ceros son \\(-2,2\\). Por simetría,

$$
A=2\\int_0^2(4-x^2)dx+2\\int_2^3(x^2-4)dx=\\frac{46}{3}.
$$

**3. Raíz y recta.** En \\([0,1]\\), \\(\\sqrt{x}\\geq x\\):

$$
A=\\int_0^1(\\sqrt{x}-x)dx
=\\frac23-\\frac12=\\frac16.
$$

**4. Simetría.** \\(x^3-x\\) es positiva en \\([-1,0]\\) y negativa en \\([0,1]\\):

$$
A=2\\int_0^1(x-x^3)dx=\\frac12.
$$

**5. Tiras horizontales.** Las intersecciones satisfacen \\(y^2-1=1-y\\), luego \\(y=-2,1\\). La recta queda a la derecha:

$$
A=\\int_{-2}^{1}\\left[(1-y)-(y^2-1)\\right]dy=\\frac92.
$$

**6. Área impropia.**

$$
A=\\int_0^\\infty e^{-x}dx
=\\lim_{b\\to\\infty}\\left[-e^{-x}\\right]_0^b=1.
$$

## Resumen práctico

El área entre curvas es la integral de una distancia: superior menos inferior con tiras verticales, o derecha menos izquierda con tiras horizontales. Las intersecciones determinan los límites y los posibles cambios de orden. Si una función cruza el eje o las curvas se cruzan varias veces, se divide la región antes de integrar.

La mejor comprobación combina álgebra y geometría: integrandos no negativos, extremos correctos, estimación visual y unidades coherentes. Si necesitas practicar el planteamiento sobre gráficas de examen, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
`,d=`---
title: Circuitos eléctricos de corriente continua: problemas resueltos de nivel universitario
date: 2026-07-03
updated: 2026-07-03
description: Problemas resueltos de circuitos de corriente continua: ley de Ohm, resistencias equivalentes, Kirchhoff, potencia y errores habituales.
tag: Física
category: Física y Química
relatedService: /clases-particulares/fisica-ingenieria/
relatedPosts: como-aprobar-fisica-i-ingenieria-sin-memorizar-formulas,diagramas-cuerpo-libre-metodo-errores-frecuentes,fisica-y-quimica-como-plantear-problemas
image: /favicon.svg
---

Los circuitos eléctricos de corriente continua suelen parecer una lista de fórmulas: ley de Ohm, resistencias en serie, resistencias en paralelo, potencia y leyes de Kirchhoff. Pero los problemas universitarios se aprueban entendiendo qué magnitud se conserva y cómo se reparte la corriente o la tensión.

## Ley de Ohm

La relación básica es:

$$
V=IR
$$

donde \\(V\\) es la diferencia de potencial, \\(I\\) la intensidad y \\(R\\) la resistencia. Esta fórmula no se usa sola: debe aplicarse a un elemento concreto del circuito.

## Problema 1: resistencias en serie

Tres resistencias de \\(2\\,\\Omega\\), \\(4\\,\\Omega\\) y \\(6\\,\\Omega\\) están en serie conectadas a una fuente de \\(24\\,V\\). Calcula la corriente.

En serie, la resistencia equivalente es:

$$
R_{eq}=R_1+R_2+R_3
$$

Por tanto:

$$
R_{eq}=2+4+6=12\\,\\Omega
$$

Aplicamos Ohm al circuito completo:

$$
I=\\frac{V}{R_{eq}}=\\frac{24}{12}=2\\,A
$$

En serie, la corriente es la misma en todas las resistencias.

## Problema 2: resistencias en paralelo

Dos resistencias de \\(6\\,\\Omega\\) y \\(3\\,\\Omega\\) están en paralelo conectadas a \\(12\\,V\\). Calcula la resistencia equivalente y la corriente total.

En paralelo:

$$
\\frac{1}{R_{eq}}=\\frac{1}{R_1}+\\frac{1}{R_2}
$$

Entonces:

$$
\\frac{1}{R_{eq}}=\\frac{1}{6}+\\frac{1}{3}=\\frac{1}{2}
$$

Por tanto:

$$
R_{eq}=2\\,\\Omega
$$

La corriente total:

$$
I=\\frac{12}{2}=6\\,A
$$

En paralelo, la tensión es la misma en cada rama.

## Problema 3: potencia disipada

Una resistencia de \\(8\\,\\Omega\\) conduce una corriente de \\(3\\,A\\). Calcula la potencia.

La potencia puede escribirse como:

$$
P=VI
$$

También:

$$
P=I^2R
$$

Sustituyendo:

$$
P=3^2\\cdot 8=72\\,W
$$

La unidad final debe ser vatios. Si no aparece una unidad de potencia, revisa dimensiones.

## Problema 4: ley de Kirchhoff de tensiones

En una malla con una batería de \\(10\\,V\\) y dos resistencias en serie \\(R_1=2\\,\\Omega\\), \\(R_2=3\\,\\Omega\\), calcula la corriente.

Kirchhoff dice que la suma algebraica de tensiones en una malla cerrada es cero:

$$
10-2I-3I=0
$$

Entonces:

$$
10=5I
$$

Por tanto:

$$
I=2\\,A
$$

Es el mismo resultado que usando resistencia equivalente, pero Kirchhoff prepara problemas más complejos.

## Método para problemas universitarios

Sigue este orden:

1. Identifica nodos y ramas.
2. Marca si hay serie, paralelo o mezcla.
3. Reduce si el circuito lo permite.
4. Si no se puede reducir fácilmente, usa Kirchhoff.
5. Define sentidos de corriente.
6. Escribe ecuaciones y resuelve.
7. Comprueba unidades y signos.

Un signo negativo en una corriente no significa que el problema esté mal: significa que el sentido real es contrario al que supusiste.

## Errores frecuentes

- Tratar resistencias en paralelo como si estuvieran en serie.
- Olvidar que en paralelo la tensión es común.
- Aplicar \\(V=IR\\) al circuito completo cuando \\(R\\) es solo una rama.
- No definir sentido de corrientes antes de Kirchhoff.
- Confundir potencia con energía.

Si estás preparando circuitos dentro de Física I o Electricidad, puedes revisar [clases particulares de Física para Bachillerato e Ingeniería](/clases-particulares/fisica-ingenieria/) y practicar primero la guía de [cómo plantear problemas de Física y Química](/blog/fisica-y-quimica-como-plantear-problemas/).
`,u=`---
title: Cómo aprobar Cálculo I en primero de Ingeniería: plan de estudio de seis semanas
date: 2026-06-13
updated: 2026-08-12
description: Plan de seis semanas para aprobar Cálculo I en Ingeniería: límites, derivadas, integrales, práctica y simulacros de examen.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: como-resolver-limites-indeterminaciones-ejercicios,metodos-de-integracion-como-elegir,que-son-las-derivadas-y-para-que-se-utilizan
image: /favicon.svg
---

Aprobar Cálculo I en primero de Ingeniería no depende solo de hacer muchos ejercicios. Depende de estudiar en el orden correcto, detectar los bloqueos reales y llegar al examen habiendo practicado problemas completos, no solo técnicas sueltas.

Este plan de seis semanas está pensado para estudiantes que tienen poco margen, un temario amplio y la sensación de que cada tema nuevo se apoya en algo que todavía no está firme.

## Antes de empezar: diagnóstico rápido

Dedica una sesión a revisar cuatro bloques:

- Límites y continuidad.
- Derivadas y estudio de funciones.
- Integrales inmediatas, cambio de variable y partes.
- Problemas de examen mezclados.

No busques acertarlo todo. Busca saber dónde se rompe el razonamiento. Un buen diagnóstico separa tres casos: no recuerdas una técnica, no entiendes el concepto o no sabes elegir el método.

## Semana 1: límites, continuidad y lenguaje

El primer objetivo es leer funciones con calma. Trabaja [límites laterales, indeterminaciones y asíntotas](/blog/como-resolver-limites-indeterminaciones-ejercicios/). No memorices listas de límites sin saber qué significan.

Un ejercicio mínimo que debes dominar es:

$$
\\lim_{x\\to 0}\\frac{\\sqrt{1+x}-1}{x}
$$

Racionalizando:

$$
\\frac{\\sqrt{1+x}-1}{x}\\cdot\\frac{\\sqrt{1+x}+1}{\\sqrt{1+x}+1}
=\\frac{1}{\\sqrt{1+x}+1}
$$

Por tanto:

$$
\\lim_{x\\to 0}\\frac{\\sqrt{1+x}-1}{x}=\\frac{1}{2}
$$

La idea importante no es el resultado, sino reconocer la indeterminación y elegir una transformación limpia.

## Semana 2: derivadas con interpretación

En la segunda semana repasa reglas de derivación, derivada implícita, recta tangente, crecimiento y extremos. Cada derivada debe responder a una pregunta: cómo cambia una función, dónde crece, dónde se aplana o dónde cambia de comportamiento.

La recta tangente en \\(x=a\\) se escribe así:

$$
y=f(a)+f'(a)(x-a)
$$

Si esta fórmula parece mecánica, reescríbela en palabras: parto del valor de la función y avanzo con la pendiente local. Esa interpretación evita muchos errores en problemas de aproximación lineal.

## Semana 3: estudio de funciones y problemas completos

Aquí conviene unir límites y derivadas. Practica dominio, cortes, asíntotas, monotonía, extremos, concavidad y representación cualitativa. En Cálculo I, un estudio de función mal ordenado suele costar muchos puntos aunque las derivadas estén bien.

Orden recomendado:

1. Dominio.
2. Simetrías si son evidentes.
3. Cortes con ejes.
4. Límites en puntos críticos e infinito.
5. Derivada primera: crecimiento y extremos.
6. Derivada segunda: concavidad e inflexión.
7. Gráfica coherente con todo lo anterior.

El error más caro es dibujar antes de tener restricciones. La gráfica debe ser consecuencia del análisis, no una intuición.

## Semana 4: integrales sin perderse

La cuarta semana debe centrarse en reconocer patrones. Una integral no se resuelve probando técnicas al azar: primero se mira si es inmediata, si pide cambio de variable, si encaja con integración por partes o si necesita descomposición.

Ejemplo de cambio de variable:

$$
\\int 2x\\cos(x^2)\\,dx
$$

Tomando \\(u=x^2\\), queda \\(du=2x\\,dx\\). Entonces:

$$
\\begin{aligned}
\\int 2x\\cos(x^2)\\,dx
&=\\int \\cos(u)\\,du \\\\
&=\\sin(u)+C \\\\
&=\\sin(x^2)+C
\\end{aligned}
$$

La clave está en ver la derivada de la función interna. Si no buscas esa relación, el cambio parece magia.

Para entrenar esa decisión, utiliza primero la [guía para elegir métodos de integración](/blog/metodos-de-integracion-como-elegir/). Cuando el patrón esté claro, trabaja por separado los ejercicios de [cambio de variable](/blog/integracion-por-sustitucion-cambio-variable-ejercicios/) y de [integración por partes](/blog/integracion-por-partes-formula-ejercicios-resueltos/).

## Semana 5: temas finales y mezcla

Según la universidad, esta semana puede incluir integrales impropias, series, aproximaciones o aplicaciones. El objetivo no es abrir temas nuevos sin control, sino mezclar bloques:

- Un límite que usa Taylor o equivalentes.
- Una integral con interpretación geométrica.
- Un problema de optimización con dominio.
- Un estudio de función con asíntotas y extremos.

Haz ejercicios de examen antiguos. Si no los tienes, crea simulacros mezclando dos problemas de cada bloque.

## Semana 6: simulacros y corrección de errores

La última semana no es para releer apuntes. Es para hacer simulacros cronometrados, corregirlos y escribir una lista de errores repetidos.

Clasifica cada fallo:

- Error de concepto.
- Error de elección de método.
- Error algebraico.
- Error de presentación.
- Error por falta de tiempo.

Después decide qué se entrena. No se corrige igual no saber derivar que perder un signo en una matriz de operaciones auxiliares.

## Rutina semanal realista

Una rutina sostenible para aprobar Cálculo I puede ser:

- 3 días de teoría activa y problemas guiados.
- 2 días de problemas sin mirar soluciones.
- 1 día de corrección profunda.
- 1 bloque corto de repaso acumulado.

La corrección profunda es la parte que más alumnos evitan. También es la que más sube la nota.

## Señales de que vas bien

Vas bien cuando puedes explicar qué método usar antes de empezar a operar, cuando detectas dominios y restricciones sin que te lo recuerden, y cuando tus soluciones tienen una línea narrativa clara: planteamiento, método, cálculo e interpretación.

Si necesitas convertir este plan en un calendario adaptado a tu asignatura concreta, revisa la página de [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/) o [cuéntanos tu caso](/contacto/).
`,m=`---
title: Cómo aprobar Estadística en Psicología sin tener una buena base matemática
date: 2026-07-08
updated: 2026-07-08
description: Guía para aprobar Estadística en Psicología aunque tengas poca base matemática: conceptos, pruebas, interpretación y plan de estudio.
tag: Psicología
category: Estadística
relatedService: /clases-particulares/estadistica-psicologia-ade/
relatedPosts: que-prueba-estadistica-utilizar-guia-test-correcto,p-valor-intervalo-confianza-tamano-efecto-ejemplo,errores-comunes-inferencia-estadistica
image: /favicon.svg
---

Aprobar Estadística en Psicología no exige ser brillante en matemáticas. Exige entender qué pregunta plantea cada análisis, qué significan los datos y cómo se interpreta el resultado en lenguaje psicológico.

El problema de muchos estudiantes no es la falta de capacidad. Es que intentan estudiar Estadística como una lista de fórmulas sueltas: media, desviación típica, t de Student, ANOVA, correlación, regresión, p-valor. Así todo parece desconectado.

## Cambia la pregunta: de calcular a interpretar

En Psicología, la Estadística sirve para responder preguntas como:

- ¿Ha mejorado un grupo después de una intervención?
- ¿Hay diferencias entre dos tratamientos?
- ¿Existe relación entre ansiedad y horas de sueño?
- ¿Puede una variable predecir otra?
- ¿El resultado observado podría explicarse por azar muestral?

Cuando estudias desde estas preguntas, las pruebas dejan de ser fórmulas misteriosas.

## Lo mínimo que debes dominar

Antes de entrar en pruebas estadísticas, necesitas cuatro ideas:

1. **Variable:** qué estás midiendo.
2. **Muestra:** a quién has medido.
3. **Distribución:** cómo se reparten los valores.
4. **Comparación:** qué diferencia o relación quieres evaluar.

Por ejemplo, si comparas ansiedad antes y después de una terapia, la variable es ansiedad, la muestra son los participantes y la comparación es dentro de las mismas personas.

## Media y desviación típica sin miedo

La media resume el centro:

$$
\\bar{x}=\\frac{x_1+x_2+\\cdots+x_n}{n}
$$

La desviación típica resume dispersión: cuánto se alejan los datos de la media. No hace falta memorizar la fórmula desde el primer día. Primero entiende la idea: dos grupos pueden tener la misma media y comportarse de forma muy distinta si uno es mucho más variable.

## El mapa de pruebas más útil

Para aprobar, organiza los test por tipo de pregunta:

- Comparar una media con un valor: t de una muestra.
- Comparar dos grupos independientes: t de muestras independientes.
- Comparar antes y después en las mismas personas: t de muestras relacionadas.
- Comparar tres o más grupos: ANOVA.
- Relacionar dos variables cuantitativas: correlación.
- Predecir una variable cuantitativa: regresión lineal.
- Relacionar variables categóricas: chi-cuadrado.

Este mapa vale más que memorizar diez fórmulas sin contexto.

## Ejemplo sencillo

Un grupo de estudiantes hace un programa de reducción de ansiedad. Medimos ansiedad antes y después. Como son las mismas personas en dos momentos, no usamos una t de grupos independientes. Usamos una prueba para muestras relacionadas.

La pregunta no es solo si las medias son distintas. La pregunta completa es:

> ¿La diferencia media observada es suficientemente clara, teniendo en cuenta la variabilidad y el tamaño de la muestra?

Ahí entra el contraste estadístico.

## Plan de estudio de cuatro semanas

### Semana 1: descriptiva

Media, mediana, desviación típica, gráficos, tipos de variables y lectura de tablas.

### Semana 2: inferencia básica

Hipótesis nula, hipótesis alternativa, p-valor, intervalo de confianza y tamaño del efecto.

### Semana 3: pruebas frecuentes

t de Student, ANOVA, correlación y chi-cuadrado. No estudies cada prueba aislada: estudia cuándo se usa.

### Semana 4: interpretación y software

Practica salidas de SPSS, Jamovi, R o Python. Aprende a escribir conclusiones: resultado estadístico, dirección del efecto, tamaño e interpretación psicológica.

## Errores frecuentes

- Intentar memorizar fórmulas sin entender la pregunta.
- No distinguir grupos independientes y medidas repetidas.
- Creer que \\(p<0.05\\) significa que el resultado es importante.
- No mirar gráficos antes de hacer pruebas.
- Copiar salidas de software sin saber qué línea interpretar.

## Cómo saber si vas bien

Vas bien cuando puedes mirar un enunciado y decir:

1. Qué variable se mide.
2. Cuántos grupos o momentos hay.
3. Si las muestras son independientes o relacionadas.
4. Qué prueba encaja.
5. Cómo escribirías la conclusión.

Para seguir con el mapa de decisión, lee [qué prueba estadística utilizar](/blog/que-prueba-estadistica-utilizar-guia-test-correcto/) o revisa [clases particulares de Estadística y Probabilidad](/clases-particulares/estadistica-universidad/).
`,p=`---
title: Cómo aprobar Física I en Ingeniería sin memorizar todas las fórmulas
date: 2026-06-29
updated: 2026-06-29
description: Método para aprobar Física I en Ingeniería entendiendo modelos, unidades, diagramas y leyes básicas sin depender de memorizar fórmulas.
tag: Física
category: Física y Química
relatedService: /clases-particulares/fisica-ingenieria/
relatedPosts: diagramas-cuerpo-libre-metodo-errores-frecuentes,circuitos-corriente-continua-problemas-resueltos-universidad,fisica-y-quimica-como-plantear-problemas
image: /favicon.svg
---

Aprobar Física I en Ingeniería no consiste en memorizar todas las fórmulas del formulario. Consiste en reconocer qué modelo describe el problema, qué magnitudes intervienen y qué ley física conecta los datos con lo que se pide.

La mayoría de suspensos no aparecen porque falte una fórmula aislada. Aparecen porque se mezclan ejes, se ignoran unidades, se dibujan mal las fuerzas o se aplica energía cuando el problema pedía dinámica.

## Empieza por los modelos, no por las fórmulas

En Física I suelen repetirse varios bloques:

- Cinemática: posición, velocidad y aceleración.
- Dinámica: fuerzas y leyes de Newton.
- Trabajo y energía.
- Cantidad de movimiento e impulso.
- Movimiento circular.
- Sólido rígido si entra en tu programa.

Cada bloque responde a una pregunta distinta. Si el enunciado habla de fuerzas, aceleración y contacto, probablemente estás en dinámica. Si compara alturas, velocidades y rozamiento, quizá conviene energía. Si hay choques, piensa en cantidad de movimiento.

## La fórmula sale del modelo

Una expresión como:

$$
\\sum F = ma
$$

no es una receta. Significa que la fuerza neta sobre el sistema determina su aceleración. Antes de usarla debes decidir:

- Qué objeto es el sistema.
- Qué fuerzas actúan.
- Qué eje eliges como positivo.
- Si hay aceleración y en qué dirección.

Cuando esto está claro, las fórmulas dejan de ser una lista y empiezan a ser consecuencias del dibujo.

## Método de estudio en cuatro fases

### 1. Lectura física del enunciado

Subraya magnitudes y condiciones. No copies números sin unidad. Es distinto \\(5\\,\\text{m}\\), \\(5\\,\\text{m/s}\\) y \\(5\\,\\text{N}\\). Si confundes unidades, el planteamiento ya nace roto.

### 2. Dibujo o esquema

En dinámica, haz diagrama de cuerpo libre. En energía, marca alturas y puntos inicial/final. En cinemática, define eje, origen y sentido positivo.

### 3. Ley principal

Elige una ley central. Por ejemplo:

$$
E_m=K+U
$$

o:

$$
W_{\\text{neto}}=\\Delta K
$$

No empieces por sustituir datos. Primero escribe la relación simbólica.

### 4. Cálculo y comprobación

Al final revisa signo, unidades y orden de magnitud. Si un bloque de \\(2\\,\\text{kg}\\) en una mesa acelera a \\(500\\,\\text{m/s}^2\\), algo no cuadra.

## Ejemplo: bloque con rozamiento

Un bloque de masa \\(m\\) se mueve sobre una superficie horizontal con coeficiente de rozamiento \\(\\mu\\). Se aplica una fuerza horizontal \\(F\\). La fuerza de rozamiento vale:

$$
F_r=\\mu N
$$

Como no hay aceleración vertical:

$$
N=mg
$$

En el eje horizontal:

$$
F-F_r=ma
$$

Sustituyendo:

$$
F-\\mu mg=ma
$$

Por tanto:

$$
a=\\frac{F-\\mu mg}{m}
$$

La fórmula final importa menos que el camino: dibujo, normal, rozamiento, eje horizontal y segunda ley de Newton.

## Errores que más penalizan

- Usar \\(mg\\) como fuerza en cualquier dirección.
- Poner rozamiento siempre hacia la izquierda sin pensar el movimiento relativo.
- Mezclar energía con fuerzas sin justificar.
- Olvidar que la normal no siempre vale \\(mg\\).
- Sustituir datos antes de tener una ecuación simbólica.
- No indicar unidades en el resultado final.

## Cómo organizar seis semanas de estudio

Si tienes un examen cerca, usa esta distribución:

1. Cinemática y unidades.
2. Leyes de Newton y diagramas.
3. Rozamiento, planos inclinados y poleas.
4. Trabajo, energía y potencia.
5. Choques, impulso y cantidad de movimiento.
6. Simulacros mezclados y corrección de errores.

La clave está en mezclar temas en la última fase. En examen no te dicen "este problema es de energía"; tienes que reconocerlo.

Si necesitas convertir tu temario en un plan de estudio concreto, revisa [clases particulares de Física para Bachillerato e Ingeniería](/clases-particulares/fisica-ingenieria/) o la guía de [cómo plantear problemas de Física y Química](/blog/fisica-y-quimica-como-plantear-problemas/).
`,$=`---
title: Cómo aprobar Matemáticas I en ADE y Economía
date: 2026-07-04
updated: 2026-07-04
description: Guía para aprobar Matemáticas I en ADE y Economía: funciones, derivadas, optimización, elasticidad, matrices y estrategia de examen.
tag: Economía
category: Economía y ADE
relatedService: /clases-particulares/economia-ade/
relatedPosts: economia-ade-matematicas-sin-perderse,microeconomia-i-tipos-problemas-examen,derivadas-integrales-universitarias-prueba-nivel-ejercicios-resueltos
image: /favicon.svg
---

Matemáticas I en ADE y Economía suele mezclar cálculo, álgebra y aplicaciones económicas. El error más común es estudiar como si fuera una asignatura puramente mecánica: derivar, despejar y sustituir sin interpretar.

Para aprobar, necesitas dos capas: técnica matemática y lectura económica del resultado.

## Qué temas suelen entrar

Aunque cada universidad tiene su programa, los bloques habituales son:

- Funciones de una variable.
- Límites y continuidad.
- Derivadas.
- Optimización.
- Elasticidad.
- Integrales básicas si el programa las incluye.
- Matrices y sistemas lineales.
- Aplicaciones a costes, ingresos, beneficio y demanda.

No todos los temas pesan igual. Derivadas, optimización y matrices suelen aparecer mucho en exámenes de primero.

## Derivadas con sentido económico

Si tienes una función de coste \\(C(q)\\), la derivada:

$$
C'(q)
$$

representa el coste marginal: cuánto cambia el coste cuando aumenta la producción en una unidad aproximada.

Si tienes ingresos:

$$
I(q)=p(q)q
$$

y beneficio:

$$
\\pi(q)=I(q)-C(q)
$$

la condición de máximo interior suele ser:

$$
\\pi'(q)=0
$$

Pero no basta con resolver. Debes comprobar si el punto tiene sentido económico y si está dentro del dominio.

## Optimización: el bloque más rentable

Un problema típico pide maximizar beneficio o minimizar coste. El método:

1. Define la variable de decisión.
2. Escribe la función objetivo.
3. Calcula la derivada.
4. Resuelve la condición de primer orden.
5. Comprueba segunda derivada o comportamiento.
6. Interpreta el resultado.

Ejemplo:

$$
\\pi(q)=-q^2+20q-36
$$

Derivamos:

$$
\\pi'(q)=-2q+20
$$

Igualamos a cero:

$$
-2q+20=0 \\Rightarrow q=10
$$

Como:

$$
\\pi''(q)=-2<0
$$

el punto es un máximo. La producción óptima es \\(q=10\\).

## Matrices y sistemas

En ADE y Economía, las matrices suelen aparecer en sistemas lineales, modelos input-output o ejercicios de equilibrio.

Un sistema:

$$
Ax=b
$$

puede resolverse por Gauss, por inversa si existe o mediante discusión de rangos. Lo importante es interpretar \\(x\\): precios, cantidades, producción o variables del modelo.

## Cómo estudiar sin perder tiempo

Divide cada sesión en tres partes:

- Técnica: practicar derivadas, sistemas o límites.
- Problema aplicado: leer un enunciado económico.
- Interpretación: escribir una frase final con unidades y sentido.

No dejes la interpretación para el final del curso. Muchos exámenes penalizan resultados sin explicación.

## Errores frecuentes

- Derivar bien y no saber qué representa la derivada.
- Optimizar sin comprobar dominio.
- Confundir ingreso medio, marginal y total.
- Resolver sistemas sin interpretar variables.
- Estudiar ejercicios sueltos sin agruparlos por tipo.

## Plan de repaso de dos semanas

Si tienes poco tiempo:

1. Días 1-2: funciones, dominio y gráficas básicas.
2. Días 3-5: derivadas y elasticidad.
3. Días 6-8: optimización económica.
4. Días 9-10: matrices y sistemas.
5. Días 11-12: exámenes antiguos.
6. Días 13-14: simulacro y corrección de errores.

Para reforzar este bloque con ejercicios adaptados a tu grado, revisa [clases particulares de Economía y ADE](/clases-particulares/economia-ade/) y la guía de [Economía y ADE sin perder el sentido económico](/blog/economia-ade-matematicas-sin-perderse/).
`,x=`---
title: Cómo estudiar matemáticas sin memorizar fórmulas
date: 2026-05-20
updated: 2026-05-20
description: Un método práctico para dejar de estudiar matemáticas a base de memoria: concepto, problema tipo, explicación en voz alta y variaciones.
tag: Método
category: Matemáticas universitarias
relatedService: /clases-particulares/matematicas-universidad/
relatedPosts: que-son-las-derivadas-y-para-que-se-utilizan,que-son-las-integrales-y-para-que-se-utilizan
image: /favicon.svg
---

Muchos alumnos llegan a Matemáticas con una sensación muy concreta: han estudiado, han hecho ejercicios parecidos, reconocen las fórmulas, pero en el examen se bloquean cuando cambia el enunciado.

El problema casi nunca es la memoria. Es no haber entendido **cuándo** usar cada herramienta, **por qué** aparece cada paso y **qué condición** hace válido el procedimiento.

## El error más común

> "Entiendo la teoría en clase, pero cuando me siento solo delante del problema no sé ni por dónde empezar."

Esa frase suele señalar una diferencia importante: ver una solución no es lo mismo que poder reconstruirla. Si solo memorizas el camino de un ejercicio, dependes de que el examen sea casi idéntico. Si entiendes el mapa, puedes adaptarte.

## Un método en cuatro fases

Para estudiar una asignatura cuantitativa conviene trabajar cada bloque así:

1. **Concepto.** Antes de operar, define qué mide la herramienta y qué pregunta responde.
2. **Problema tipo.** Revisa un ejercicio representativo y marca la decisión que activa cada paso.
3. **Reproducción.** Cierra la solución e intenta rehacerlo explicando en voz alta por qué haces cada operación.
4. **Variación.** Cambia un dato, una condición o el formato del enunciado para comprobar que el razonamiento aguanta.

La fase más incómoda es la tercera, pero también es la que más revela. Si no puedes explicar un paso sin mirar, todavía no está consolidado.

## Ejemplo: optimización antes de derivar

Imagina un ejercicio de optimización: "encuentra el área máxima". Muchos alumnos empiezan derivando cualquier expresión que aparece. El orden correcto es otro:

1. Define la variable que realmente puedes mover.
2. Escribe la magnitud que quieres maximizar.
3. Usa las restricciones para dejar una sola variable.
4. Deriva solo cuando la función ya representa el objetivo.
5. Comprueba dominio, unidades y sentido del resultado.

Una forma compacta de verlo es escribir la condición de óptimo como \\(A'(x)=0\\), pero solo después de haber construido la función objetivo:

$$
\\begin{aligned}
A(x)&=x(20-2x)\\\\
A'(x)&=20-4x
\\end{aligned}
$$

La gráfica resume la idea: primero se construye la función, después se estudia dónde cambia su crecimiento y, por último, se interpreta el punto crítico dentro del contexto del problema.

![Parábola de área con máximo en el vértice](/assets/latex/quadratic-optimization.svg)

## Errores que conviene detectar

- Resolver mirando la solución y creer que ya se domina el método.
- Saltarse dominio, unidades o interpretación de signos.
- Hacer diez ejercicios iguales y ninguno con una variación real.
- Corregir solo el resultado final, no el punto donde se rompió el razonamiento.
- Memorizar una lista de fórmulas sin asociarlas a preguntas concretas.

## Qué hacer esta semana

Elige un ejercicio que te salió mal y aplícale las cuatro fases. No busques hacer veinte problemas. Haz uno solo, pero de verdad: explica cada paso, cambia un dato y revisa si el método sigue funcionando.

Si el bloqueo aparece en matemáticas de ESO, Bachillerato, Cálculo, Álgebra, Ecuaciones Diferenciales u otra asignatura cuantitativa, revisa la página de [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/) o [cuéntanos tu caso](/contacto/) para plantear un diagnóstico.
`,f=`---
title: Cómo preparar IB Mathematics AA y AI: estrategia para estudiar y practicar
date: 2026-07-21
updated: 2026-07-21
description: Diferencias prácticas entre IB Mathematics AA y AI y un método para preparar exámenes con contenidos, formato, criterios y práctica.
tag: Exámenes internacionales
category: Exámenes internacionales
relatedService: /preparacion-examenes/ib-mathematics/
relatedPosts: ib-gcse-como-preparar-examenes-internacionales,como-estudiar-matematicas-sin-memorizar,como-preparar-pau-matematicas-ii
image: /favicon.svg
---

Preparar IB Mathematics no empieza por hacer muchas preguntas de examen. Empieza por saber con precisión si cursas Analysis and Approaches (AA) o Applications and Interpretation (AI), en qué nivel estás y qué permite cada componente de evaluación. Los contenidos, la forma de argumentar y el uso de tecnología no se trabajan exactamente igual.

La fuente definitiva es siempre la guía vigente de tu convocatoria y las indicaciones de tu centro. Este artículo propone una forma de estudiar; no sustituye los criterios oficiales.

## AA y AI: la diferencia que cambia tu práctica

En términos generales, AA da más peso al razonamiento algebraico, las funciones, el cálculo y la demostración. AI pone más énfasis en modelización, estadística, interpretación y el uso razonado de tecnología. Ambas rutas requieren entender matemáticas: ninguna se aprueba aplicando una lista de botones de calculadora.

La consecuencia práctica es clara. Si estudias AA, reserva tiempo para derivar, transformar expresiones y justificar por qué un método funciona. Si estudias AI, entrena cómo elegir un modelo, interpretar un resultado en contexto y comprobar si una salida tecnológica tiene sentido.

## Construye un mapa de contenidos

Divide tu programa en bloques y marca cada uno como “entiendo”, “resuelvo con ayuda” o “resuelvo y explico”. No uses solo una nota. Para cada bloque, guarda un ejemplo que represente una dificultad real: una función que exige análisis, un problema de probabilidad con condicionamiento o un modelo que deba interpretarse.

Después, relaciona cada bloque con el tipo de pregunta que aparece en tus materiales oficiales. El objetivo es dejar de pensar “tengo que estudiar cálculo” y pasar a “puedo decidir cuándo usar esta herramienta y justificar el resultado”.

## La rutina de práctica más útil

Trabaja tres tipos de sesión cada semana:

1. **Fundamentos:** ejercicios cortos para consolidar técnicas y vocabulario.
2. **Problemas con contexto:** preguntas donde hay que elegir el modelo, interpretar unidades o explicar una decisión.
3. **Práctica de examen:** una selección cronometrada, corregida después con la rúbrica o el esquema de calificación disponible.

Después de cada sesión, apunta un único error de método. Por ejemplo: “calculo un valor sin comprobar si pertenece al dominio” o “doy una cifra sin interpretar qué representa”. Acumular estos avisos en un cuaderno es más útil que repetir sin revisar.

## Usa la calculadora con criterio

La tecnología ayuda a explorar una función, ajustar un modelo o verificar operaciones; no reemplaza el planteamiento. Antes de usarla, formula una previsión: ¿el resultado debería ser positivo?, ¿qué orden de magnitud esperas?, ¿qué unidades conserva?

Cuando la uses, anota el comando, gráfico o ajuste relevante y explica la lectura. En un examen, el corrector debe poder seguir el razonamiento entre la pregunta y tu conclusión, incluso si ha intervenido una herramienta.

## Cómo preparar los exámenes finales

No dejes los past papers para el final. Empieza separando preguntas por tema, continúa con secciones cronometradas y termina con exámenes completos según las condiciones de tu convocatoria. Al corregir, distingue cuatro causas: contenido no aprendido, estrategia incorrecta, error de ejecución o falta de tiempo.

Si el tiempo es el problema, no aceleres a ciegas. Observa en qué te detienes: leer, decidir el método, operar o redactar. Cada atasco se entrena de manera distinta.

Para organizar el trabajo de varias asignaturas, consulta la guía sobre [IB y GCSE con rúbrica y calendario](/blog/ib-gcse-como-preparar-examenes-internacionales/). Si quieres transformar tu programa y tus preguntas de práctica en un plan concreto, puedes ver las [clases particulares para IB y GCSE](/clases-particulares/gcse-ib/) o [contactar con Nebula](/contacto/).
`,g=`---
title: Cómo preparar Matemáticas II para la PAU: qué practicar y cómo corregir
date: 2026-07-21
updated: 2026-07-21
description: Plan práctico para preparar Matemáticas II en la PAU: bloques prioritarios, modelos de examen, corrección y gestión del tiempo.
tag: Selectividad
category: Selectividad
relatedService: /preparacion-examenes/matematicas-selectividad/
relatedPosts: preparar-selectividad-con-calendario,como-estudiar-matematicas-sin-memorizar,que-son-las-derivadas-y-para-que-se-utilizan
image: /favicon.svg
---

Preparar Matemáticas II para la PAU no consiste en repetir ejercicios al azar hasta que alguno se parezca al examen. Consiste en dominar los procedimientos que se combinan en los modelos oficiales, detectar qué paso falla y entrenar con tiempo limitado.

El formato y los criterios cambian entre comunidades autónomas. Por eso, usa siempre los modelos, matrices de especificaciones y criterios de corrección publicados por tu universidad o consejería. Esta guía sirve para construir el método de trabajo, no para sustituirlos.

## Empieza con un diagnóstico, no con un calendario lleno

Reserva una tarde para hacer un modelo reciente sin apuntes y con el tiempo aproximado del examen. Después corrígelo con tres colores:

- **Rojo:** no sabes iniciar el ejercicio o eliges un método incorrecto.
- **Ámbar:** entiendes el camino, pero cometes errores de cálculo, signos o notación.
- **Verde:** lo resuelves y puedes justificar los pasos.

Esta corrección dice más que una nota global. Un 5 puede esconder un problema muy concreto —por ejemplo, matrices— que se mejora rápido, o una base débil en varios bloques que exige priorizar.

## Los bloques que debes poder conectar

Aunque el temario se organice por unidades, en un examen las herramientas se cruzan. Trabaja estas conexiones:

1. **Álgebra y matrices:** operaciones elementales, determinantes, rango, sistemas y la interpretación de que un sistema tenga una, ninguna o infinitas soluciones.
2. **Análisis:** límites, continuidad, derivadas, crecimiento, extremos, concavidad y representación razonada de funciones.
3. **Integrales:** primitivas, [área entre curvas](/blog/area-entre-dos-curvas-ejercicios-resueltos/) y la lectura geométrica del resultado.
4. **Probabilidad y estadística**, si están incluidas en tu modelo: distinguir datos, sucesos y distribución antes de aplicar una fórmula.

No estudies una lista de recetas. Antes de calcular, escribe qué se pide, qué datos tienes y qué herramienta conecta ambas cosas. Esa pausa de treinta segundos evita muchos ejercicios empezados por el método equivocado.

## Una sesión de 90 minutos que sí deja avance

Una buena sesión puede tener esta estructura:

1. Diez minutos: rehacer de memoria un ejercicio corregido ayer.
2. Veinticinco minutos: resolver dos ejercicios del mismo tipo sin mirar soluciones.
3. Veinticinco minutos: un ejercicio mixto o de modelo oficial, cronometrado.
4. Veinte minutos: corrección escrita. Anota el primer paso que falló, no solo el resultado final.
5. Diez minutos: crea una tarjeta de error con una regla concreta, por ejemplo: “antes de integrar, dibujo las curvas y localizo sus cortes”.

Si has hecho seis ejercicios pero no sabes por qué fallaste dos, no has terminado la sesión: te falta la parte que convierte práctica en aprendizaje.

## Cómo usar los exámenes de otros años

Los modelos antiguos no son un simulacro exclusivo para la última semana. Úsalos desde el principio en tres fases:

- Primero, por preguntas: selecciona los problemas de un mismo bloque.
- Después, por combinaciones: mezcla álgebra y análisis en la misma sesión.
- Al final, completos y con reloj, respetando las opciones permitidas en tu comunidad.

Al corregir, compara tu solución con los criterios oficiales. En PAU también puntúa presentar el planteamiento, justificar un resultado y usar una notación comprensible. No borres un intento correcto por no llegar al número final: deja visible el razonamiento que puede obtener puntuación parcial.

## El plan de las últimas tres semanas

En las tres semanas previas, alterna tres días de bloques débiles, dos días de modelos parciales y un simulacro completo. Deja una franja corta para revisar tu cuaderno de errores, no para releer todo el libro.

La señal de que avanzas no es que el examen “te suene”. Es que puedes decidir el método, ejecutar los pasos sin depender de una solución y explicar dónde comprobarías un resultado.

Para planificar la preparación general, consulta [cómo organizar la Selectividad con un calendario](/blog/preparar-selectividad-con-calendario/). Si necesitas convertir tus modelos de PAU en un plan de trabajo y corrección adaptado a tu punto de partida, revisa las [clases particulares para Selectividad y PAU](/clases-particulares/selectividad/) o [cuéntanos tu caso](/contacto/).
`,b=`---
title: Cómo resolver límites: indeterminaciones y ejercicios
date: 2026-08-17
updated: 2026-08-17
description: Método completo para resolver límites: sustitución, factorización, conjugados, límites notables, infinito e indeterminaciones con ejercicios.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: como-aprobar-calculo-i-ingenieria-seis-semanas,que-son-las-derivadas-y-para-que-se-utilizan,derivadas-integrales-universitarias-prueba-nivel-ejercicios-resueltos
image: /favicon.svg
---

Para resolver un límite no se empieza eligiendo una técnica: se empieza sustituyendo. Si la sustitución produce un número real y la función es continua alrededor del punto, el problema ha terminado. Solo cuando aparece una indeterminación hay que transformar la expresión sin alterar sus valores cerca del punto.

La pregunta clave no es «¿qué regla uso?», sino «¿qué impide evaluar y qué transformación elimina ese obstáculo?».

## Qué significa un límite

Escribimos

$$
\\lim_{x\\to a}f(x)=L
$$

cuando los valores de $f(x)$ pueden hacerse tan próximos a $L$ como queramos tomando $x$ suficientemente próximo a $a$, sin exigir que $x=a$.

El límite describe el comportamiento **alrededor** del punto. Por eso puede existir aunque $f(a)$ no esté definido o aunque tenga un valor distinto de $L$.

Por ejemplo, la función

$$
f(x)=\\frac{x^2-1}{x-1}
$$

no está definida en $x=1$. Sin embargo, para $x\\neq1$ se simplifica como $f(x)=x+1$, de modo que

$$
\\lim_{x\\to1}\\frac{x^2-1}{x-1}=2.
$$

El hueco en un único punto no cambia la tendencia de los valores cercanos.

## Definición rigurosa

La afirmación $\\lim_{x\\to a}f(x)=L$ significa que para todo $\\varepsilon>0$ existe un $\\delta>0$ tal que

$$
0<|x-a|<\\delta
\\quad\\Longrightarrow\\quad
|f(x)-L|<\\varepsilon.
$$

$\\varepsilon$ mide la precisión deseada en la salida y $\\delta$ indica cuánto debemos acercarnos en la entrada. La condición $0<|x-a|$ excluye el propio punto: el límite no depende necesariamente de $f(a)$.

### Ejemplo 1 — demostración epsilon-delta sencilla

Demuestra que

$$
\\lim_{x\\to2}(3x-1)=5.
$$

Queremos conseguir $|(3x-1)-5|<\\varepsilon$. Simplificamos:

$$
|(3x-1)-5|=|3x-6|=3|x-2|.
$$

Si elegimos $\\delta=\\varepsilon/3$, entonces

$$
0<|x-2|<\\delta
\\quad\\Longrightarrow\\quad
|(3x-1)-5|<3\\delta=\\varepsilon.
$$

Esto verifica formalmente el límite. En los ejercicios de cálculo habitual no se repite esta prueba para cada función; se usan propiedades demostradas a partir de la definición.

## Límites laterales y existencia del límite

El límite por la izquierda considera $x<a$:

$$
\\lim_{x\\to a^-}f(x),
$$

y el límite por la derecha considera $x>a$:

$$
\\lim_{x\\to a^+}f(x).
$$

El límite bilateral existe si y solo si ambos límites laterales existen y son iguales.

### Ejemplo 2 — laterales distintos

Estudia

$$
\\lim_{x\\to0}\\frac{x}{|x|}.
$$

Si $x<0$, $|x|=-x$ y el cociente vale $-1$. Si $x>0$, $|x|=x$ y vale $1$. Por tanto,

$$
\\lim_{x\\to0^-}\\frac{x}{|x|}=-1,
\\qquad
\\lim_{x\\to0^+}\\frac{x}{|x|}=1.
$$

Como no coinciden, el límite bilateral no existe. No debe responderse $0/0$: eso solo describe la sustitución, no el comportamiento lateral.

## Primer paso: sustitución directa

Polinomios, exponenciales, funciones trigonométricas y logaritmos son continuos en sus dominios. Los cocientes de funciones continuas también lo son donde el denominador no se anula.

### Álgebra de límites

Si $f(x)\\to L$ y $g(x)\\to M$, con límites finitos, entonces

$$
f(x)+g(x)\\to L+M,
\\qquad
f(x)g(x)\\to LM,
$$

y, si $M\\neq0$,

$$
\\frac{f(x)}{g(x)}\\to\\frac LM.
$$

También pueden componerse límites con funciones continuas. Si $f(x)\\to L$ y $\\varphi$ es continua en $L$, entonces

$$
\\varphi(f(x))\\to\\varphi(L).
$$

Esto justifica pasos habituales como introducir un límite dentro de una raíz cuando el argumento permanece en el dominio, o pasar de $u(x)\\to2$ a $e^{u(x)}\\to e^2$. No justifica dividir por una función cuyo límite es cero ni separar formas indeterminadas.

### Ejemplo 3 — no hay indeterminación

Calcula

$$
\\lim_{x\\to2}\\frac{x^2+3x-1}{x+4}.
$$

El denominador vale $6$, así que sustituimos:

$$
\\frac{2^2+3\\cdot2-1}{2+4}
=\\frac9{6}=\\boxed{\\frac32}.
$$

Factorizar o aplicar una regla avanzada aquí solo añadiría trabajo.

## Qué es una indeterminación

Una indeterminación es una forma simbólica que no determina por sí sola el límite. Las principales son

$$
\\frac00,
\\qquad
\\frac{\\infty}{\\infty},
\\qquad
0\\cdot\\infty,
\\qquad
\\infty-\\infty,
\\qquad
0^0,
\\qquad
1^\\infty,
\\qquad
\\infty^0.
$$

Por ejemplo, dos cocientes con forma $0/0$ pueden tender a números distintos o no tener límite. La forma indica que hay que transformar; no es el resultado.

No son indeterminaciones expresiones como $1/0$ o $\\infty+\\infty$. En esos casos hay que estudiar signo y laterales para decidir si el límite es infinito o no existe.

## Técnica 1: factorizar y simplificar

La factorización es la primera opción cuando aparecen polinomios y la sustitución da $0/0$.

### Ejemplo 4 — diferencia de cuadrados

Calcula

$$
\\lim_{x\\to3}\\frac{x^2-9}{x-3}.
$$

Factorizamos el numerador:

$$
x^2-9=(x-3)(x+3).
$$

Para $x\\neq3$ podemos cancelar $x-3$:

$$
\\frac{x^2-9}{x-3}=x+3.
$$

Ahora evaluamos la expresión equivalente cerca del punto:

$$
\\boxed{\\lim_{x\\to3}\\frac{x^2-9}{x-3}=6}.
$$

La cancelación no afirma que las funciones sean iguales en $x=3$; afirma que coinciden en un entorno perforado, que es lo que importa para el límite.

### Ejemplo 5 — factor común de mayor grado

Calcula

$$
\\lim_{x\\to0}\\frac{x^3-2x^2}{x^2}.
$$

Extraemos $x^2$:

$$
\\frac{x^2(x-2)}{x^2}=x-2
\\qquad(x\\neq0).
$$

Por tanto, el límite es $\\boxed{-2}$.

## Técnica 2: multiplicar por el conjugado

Cuando una resta con raíces produce $0/0$ o $\\infty-\\infty$, el conjugado convierte la diferencia de raíces en una diferencia algebraica.

### Ejemplo 6 — raíz cerca de un punto finito

Calcula

$$
\\lim_{x\\to0}\\frac{\\sqrt{x+4}-2}{x}.
$$

Multiplicamos numerador y denominador por el conjugado:

$$
\\frac{\\sqrt{x+4}-2}{x}
\\frac{\\sqrt{x+4}+2}{\\sqrt{x+4}+2}
=\\frac{x}{x(\\sqrt{x+4}+2)}.
$$

Para $x\\neq0$ se simplifica a

$$
\\frac1{\\sqrt{x+4}+2}.
$$

Ahora sustituimos:

$$
\\boxed{\\frac14}.
$$

### Ejemplo 7 — diferencia infinita

Calcula

$$
\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+x}-x\\right).
$$

La forma es $\\infty-\\infty$. Racionalizamos:

$$
\\sqrt{x^2+x}-x
=\\frac{x}{\\sqrt{x^2+x}+x}.
$$

Como $x>0$ cuando $x\\to\\infty$, dividimos numerador y denominador por $x$:

$$
\\frac1{\\sqrt{1+1/x}+1}\\longrightarrow\\boxed{\\frac12}.
$$

No es correcto separar la diferencia en dos límites infinitos y restarlos.

## Técnica 3: reducir a común denominador

Las diferencias de fracciones suelen ocultar un factor cancelable.

### Ejemplo 8 — diferencia de cocientes

Calcula

$$
\\lim_{x\\to2}\\frac{\\frac1x-\\frac12}{x-2}.
$$

Unimos el numerador:

$$
\\frac1x-\\frac12=\\frac{2-x}{2x}=-\\frac{x-2}{2x}.
$$

Entonces

$$
\\frac{\\frac1x-\\frac12}{x-2}
=-\\frac1{2x},
$$

y el límite vale

$$
\\boxed{-\\frac14}.
$$

Esta expresión es también el cociente incremental de $f(x)=1/x$ en $x=2$, por lo que coincide con $f'(2)$.

## Límites trigonométricos notables

El límite fundamental es

$$
\\lim_{x\\to0}\\frac{\\sin x}{x}=1,
$$

siempre que el ángulo esté medido en radianes. De él se deducen

$$
\\lim_{x\\to0}\\frac{\\tan x}{x}=1,
\\qquad
\\lim_{x\\to0}\\frac{1-\\cos x}{x^2}=\\frac12.
$$

No deben aplicarse si el argumento no tiende a cero sin antes hacer el ajuste necesario.

### Ejemplo 9 — ajustar el argumento

Calcula

$$
\\lim_{x\\to0}\\frac{\\sin(3x)}{x}.
$$

Multiplicamos y dividimos por $3$:

$$
\\frac{\\sin(3x)}{x}
=3\\frac{\\sin(3x)}{3x}.
$$

Como $3x\\to0$,

$$
\\boxed{\\lim_{x\\to0}\\frac{\\sin(3x)}x=3}.
$$

### Ejemplo 10 — identidad de ángulo mitad

Calcula

$$
\\lim_{x\\to0}\\frac{1-\\cos x}{x^2}.
$$

Usamos $1-\\cos x=2\\sin^2(x/2)$:

$$
\\frac{1-\\cos x}{x^2}
=\\frac12\\left(\\frac{\\sin(x/2)}{x/2}\\right)^2.
$$

El cociente notable tiende a $1$, así que el resultado es $\\boxed{1/2}$.

Estos límites son la base de derivadas trigonométricas, conectadas con la interpretación de la [derivada como tasa de cambio](/blog/que-son-las-derivadas-y-para-que-se-utilizan/).

## Equivalentes infinitesimales

Decimos que $f$ y $g$ son equivalentes cuando $x\\to a$ si

$$
\\lim_{x\\to a}\\frac{f(x)}{g(x)}=1,
$$

y escribimos $f(x)\\sim g(x)$. Cerca de cero son especialmente útiles

$$
\\sin x\\sim x,
\\qquad
\\tan x\\sim x,
\\qquad
1-\\cos x\\sim\\frac{x^2}{2},
$$

$$
e^x-1\\sim x,
\\qquad
\\ln(1+x)\\sim x.
$$

Los equivalentes pueden sustituirse con seguridad dentro de productos y cocientes. No deben reemplazarse término a término dentro de una resta que provoque cancelación, porque podría desaparecer precisamente el orden dominante.

### Ejemplo 10 bis — combinar varios equivalentes

Calcula

$$
\\lim_{x\\to0}\\frac{e^{2x}-1}{\\sin(3x)}.
$$

Cuando $x\\to0$,

$$
e^{2x}-1\\sim2x,
\\qquad
\\sin(3x)\\sim3x.
$$

Por tanto,

$$
\\frac{e^{2x}-1}{\\sin(3x)}
\\sim\\frac{2x}{3x}=\\boxed{\\frac23}.
$$

La misma conclusión puede obtenerse multiplicando por los cocientes notables correspondientes. La notación de equivalencia resume ese razonamiento.

### Orden de un infinitésimo

Si $f(x)/g(x)\\to0$, decimos que $f$ es de orden menor que $g$. Por ejemplo, cuando $x\\to0$,

$$
x^2=o(x),
$$

porque $x^2/x=x\\to0$. En una suma, el término de orden mayor domina:

$$
3x+x^2\\sim3x.
$$

Esta idea permite anticipar resultados y detectar simplificaciones incorrectas.

### Ejemplo 10 ter — identificar el término dominante

$$
\\lim_{x\\to0}\\frac{4x^2+x^3}{2x^2-5x^4}
$$

Factorizamos el menor grado presente:

$$
\\frac{x^2(4+x)}{x^2(2-5x^2)}
=\\frac{4+x}{2-5x^2}
\\longrightarrow\\boxed{2}.
$$

Numerador y denominador son ambos equivalentes a constantes por $x^2$; los términos de grados superiores no afectan al límite.

## Límites en infinito de cocientes

En un cociente de polinomios se compara el grado dominante:

- si el grado del numerador es menor, el límite es $0$;
- si los grados son iguales, se divide el cociente de coeficientes principales;
- si el grado del numerador es mayor, el módulo crece sin cota y hay que estudiar signo.

### Ejemplo 11 — mismo grado

$$
\\lim_{x\\to\\infty}\\frac{3x^2-x+4}{2x^2+5}
$$

Dividimos todo por $x^2$:

$$
\\lim_{x\\to\\infty}
\\frac{3-1/x+4/x^2}{2+5/x^2}
=\\boxed{\\frac32}.
$$

Solo los términos dominantes sobreviven, pero escribir la división justifica el resultado.

## Asíntotas horizontales y oblicuas

Si

$$
\\lim_{x\\to\\infty}f(x)=L,
$$

la recta $y=L$ es una asíntota horizontal por la derecha. Puede existir otra distinta cuando $x\\to-\\infty$.

Una recta $y=mx+n$ es asíntota oblicua si

$$
\\lim_{x\\to\\infty}[f(x)-(mx+n)]=0.
$$

Sus coeficientes se buscan mediante

$$
m=\\lim_{x\\to\\infty}\\frac{f(x)}x,
\\qquad
n=\\lim_{x\\to\\infty}[f(x)-mx],
$$

si ambos límites apropiados existen y $m\\neq0$.

### Ejemplo 11 bis — asíntota de una función racional

Encuentra la asíntota oblicua de

$$
f(x)=\\frac{x^2+1}{x-1}.
$$

La división de polinomios da

$$
\\frac{x^2+1}{x-1}=x+1+\\frac2{x-1}.
$$

Como $2/(x-1)\\to0$ cuando $x\\to\\pm\\infty$,

$$
f(x)-(x+1)\\to0.
$$

La asíntota oblicua es

$$
\\boxed{y=x+1}.
$$

La diferencia entre la función y la recta mide el error de la aproximación, no solo su pendiente dominante.

### Infinito negativo y raíces

Debe recordarse que

$$
\\sqrt{x^2}=|x|,
$$

no $x$ para todo real. Si $x\\to-\\infty$, entonces $|x|=-x$. Ignorar este signo cambia muchos límites con radicales.

## Límites infinitos y asíntotas verticales

Si $f(x)$ crece sin cota al acercarse a $a$, escribimos $f(x)\\to+\\infty$ o $f(x)\\to-\\infty$. Esto describe divergencia infinita, no un límite real.

### Ejemplo 12 — el signo lateral decide

Para

$$
\\frac1{x-2},
$$

el denominador es negativo y muy pequeño por la izquierda, y positivo y muy pequeño por la derecha:

$$
\\lim_{x\\to2^-}\\frac1{x-2}=-\\infty,
\\qquad
\\lim_{x\\to2^+}\\frac1{x-2}=+\\infty.
$$

El límite bilateral no existe porque los laterales no coinciden. La recta $x=2$ es una asíntota vertical.

En cambio,

$$
\\lim_{x\\to2}\\frac1{(x-2)^2}=+\\infty,
$$

porque el denominador es positivo a ambos lados.

## Teorema del encaje

Si

$$
g(x)\\leq f(x)\\leq h(x)
$$

cerca de $a$, y $g(x)$ y $h(x)$ tienen el mismo límite $L$, entonces $f(x)$ también tiende a $L$.

### Ejemplo 13 — oscilación acotada

Calcula

$$
\\lim_{x\\to0}x^2\\sin\\left(\\frac1x\\right).
$$

La función seno oscila sin acercarse a un único valor, pero

$$
-1\\leq\\sin(1/x)\\leq1.
$$

Al multiplicar por $x^2\\geq0$,

$$
-x^2\\leq x^2\\sin(1/x)\\leq x^2.
$$

Los extremos tienden a cero, así que

$$
\\boxed{\\lim_{x\\to0}x^2\\sin(1/x)=0}.
$$

## Indeterminaciones con productos y potencias

Una forma $0\\cdot\\infty$ suele transformarse en cociente:

$$
f(x)g(x)=\\frac{f(x)}{1/g(x)}
\\quad\\text{o}\\quad
\\frac{g(x)}{1/f(x)}.
$$

Para potencias $f(x)^{g(x)}$ con formas $1^\\infty$, $0^0$ o $\\infty^0$, se toma logaritmo. Si $y=f(x)^{g(x)}$ y $f(x)>0$, entonces

$$
\\ln y=g(x)\\ln f(x).
$$

Se calcula primero el límite del exponente logarítmico y después se aplica la exponencial.

### Ejemplo 13 bis — producto cero por infinito

Calcula

$$
\\lim_{x\\to0^+}x\\ln x.
$$

La forma es $0\\cdot(-\\infty)$. La transformamos en cociente:

$$
x\\ln x=\\frac{\\ln x}{1/x}.
$$

También puede hacerse el cambio $x=1/t$, con $t\\to\\infty$:

$$
x\\ln x=-\\frac{\\ln t}{t}.
$$

El logaritmo crece más despacio que la función lineal, así que $\\ln t/t\\to0$. Por tanto,

$$
\\boxed{\\lim_{x\\to0^+}x\\ln x=0}.
$$

El signo es negativo cerca de cero, pero los valores se aproximan a cero desde abajo.

### Ejemplo 14 — límite exponencial notable

Calcula

$$
\\lim_{x\\to\\infty}\\left(1+\\frac2x\\right)^x.
$$

Es una forma $1^\\infty$. Sea $y_x=(1+2/x)^x$. Entonces

$$
\\ln y_x=x\\ln\\left(1+\\frac2x\\right).
$$

Con $u=2/x$,

$$
x\\ln\\left(1+\\frac2x\\right)
=2\\frac{\\ln(1+u)}u\\longrightarrow2,
$$

porque $\\lim_{u\\to0}\\ln(1+u)/u=1$. Por continuidad de la exponencial,

$$
\\boxed{\\lim_{x\\to\\infty}\\left(1+\\frac2x\\right)^x=e^2}.
$$

## Funciones definidas a trozos y continuidad

En un punto donde cambia la fórmula, se calculan los dos límites laterales. Después se comparan entre sí y con el valor de la función si se pide continuidad.

### Ejemplo 15 — determinar un parámetro

Sea

$$
f(x)=
\\begin{cases}
kx+1,&x<2,\\\\
x^2-1,&x\\geq2.
\\end{cases}
$$

Determina $k$ para que $f$ sea continua en $x=2$.

Por la izquierda,

$$
\\lim_{x\\to2^-}f(x)=2k+1.
$$

Por la derecha y en el punto,

$$
\\lim_{x\\to2^+}f(x)=f(2)=2^2-1=3.
$$

La continuidad exige $2k+1=3$, luego

$$
\\boxed{k=1}.
$$

Este ejercicio combina existencia del límite, igualdad de laterales y coincidencia con el valor de la función.

## Árbol de decisión para resolver límites

1. **Comprueba el dominio** cerca del punto y determina si necesitas laterales.
2. **Sustituye directamente.** Si aparece un valor real, termina.
3. **Clasifica la forma.** No llames indeterminación a cualquier división por cero.
4. Para $0/0$, prueba factorización, conjugado, denominador común o límite notable.
5. Para $\\infty/\\infty$, divide por el término dominante o reorganiza la expresión.
6. Para $\\infty-\\infty$, reúne términos o racionaliza.
7. Para productos indeterminados, convierte en cociente.
8. Para potencias indeterminadas, toma logaritmos.
9. Si hay oscilación acotada, busca un encaje.
10. Comprueba laterales, signo y orden de magnitud.

La regla de L'Hôpital puede ser útil para ciertas formas $0/0$ y $\\infty/\\infty$, pero tiene hipótesis y no debe sustituir estas transformaciones básicas. Merece un estudio independiente porque aplicarla a formas no válidas conduce a errores.

## Lectura gráfica y comprobación numérica

Una gráfica puede sugerir un límite, pero no lo demuestra. La resolución puede ser insuficiente para mostrar oscilaciones rápidas, huecos o asíntotas, y un programa puede unir visualmente puntos que pertenecen a ramas distintas.

Una tabla de valores también es solo una comprobación. Para estudiar $x\\to a$, conviene tomar puntos por ambos lados y reducir progresivamente la distancia, por ejemplo $a\\pm10^{-1}$, $a\\pm10^{-2}$ y $a\\pm10^{-3}$. Si las columnas parecen dirigirse a valores distintos, hay que calcular límites laterales de forma analítica.

Los cálculos numéricos cerca de una forma $0/0$ pueden sufrir cancelación y redondeo. En

$$
\\frac{\\sqrt{1+x}-1}{x},
$$

restar dos números casi iguales pierde precisión cuando $x$ es muy pequeño. La forma racionalizada

$$
\\frac1{\\sqrt{1+x}+1}
$$

es matemáticamente equivalente para $x\\neq0$ y numéricamente más estable. La transformación algebraica no solo permite hallar el límite: también mejora su evaluación.

Si una tabla parece estabilizarse, conviene comparar la diferencia entre cada valor y el candidato a límite. Si esa diferencia disminuye de forma coherente desde ambos lados, la conjetura gana plausibilidad; aun así, la conclusión final debe apoyarse en continuidad, una transformación algebraica, un límite notable o un teorema de comparación.

## Relación entre límites, continuidad y derivadas

Una función es continua en $a$ si se cumplen tres condiciones:

1. $f(a)$ está definida.
2. $\\lim_{x\\to a}f(x)$ existe.
3. El límite coincide con $f(a)$.

La derivada se define mediante otro límite:

$$
f'(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}h.
$$

Por eso factorizar, racionalizar y usar límites notables no son técnicas aisladas: permiten construir las reglas de derivación. Más adelante, el [teorema fundamental del cálculo](/blog/teorema-fundamental-calculo-ejemplos-ejercicios/) utiliza de nuevo un límite de cocientes para demostrar que la derivada de una acumulación recupera el integrando.

## Errores frecuentes

- **Dar $0/0$ como respuesta.** Es una señal de indeterminación, no un valor.
- **Cancelar un factor que no existe.** Solo pueden cancelarse factores multiplicativos completos.
- **Separar $\\infty-\\infty$.** Cada término diverge y la diferencia puede tener cualquier comportamiento.
- **Olvidar los límites laterales.** Son imprescindibles con valores absolutos, funciones a trozos y denominadores que cambian de signo.
- **Usar grados en límites trigonométricos.** Los límites notables requieren radianes.
- **Escribir $\\sqrt{x^2}=x$.** La identidad correcta es $|x|$.
- **Aplicar un límite notable sin ajustar el argumento.** Debe aparecer exactamente una variable que tienda a cero.
- **Confundir límite infinito con existencia de límite real.** $+\\infty$ describe crecimiento sin cota.
- **Manipular la expresión solo en el punto.** Las transformaciones deben ser equivalentes en un entorno perforado.

## Cómo comprobar el resultado

Evalúa la expresión en valores próximos al punto por ambos lados. No es una demostración, pero detecta errores de signo y resultados incompatibles con la escala. Si el resultado es finito tras una forma $0/0$, verifica que el factor problemático se haya cancelado por completo.

En infinito, divide mentalmente por el término dominante y comprueba si el resultado concuerda con los grados. En una asíntota vertical, construye una tabla de signos del denominador y del numerador.

## Ejercicios propuestos

1. $\\displaystyle\\lim_{x\\to4}\\frac{x^2-16}{x-4}$
2. $\\displaystyle\\lim_{x\\to0}\\frac{\\sqrt{1+x}-1}{x}$
3. $\\displaystyle\\lim_{x\\to0}\\frac{\\sin(5x)}{2x}$
4. $\\displaystyle\\lim_{x\\to\\infty}\\frac{4x^3-x}{2x^3+7x}$
5. $\\displaystyle\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+4x}-x\\right)$
6. $\\displaystyle\\lim_{x\\to0}x\\cos(1/x)$
7. Estudia los laterales de $\\displaystyle\\frac{x+1}{x-1}$ cuando $x\\to1$.
8. $\\displaystyle\\lim_{x\\to0}\\frac{e^x-1}{x}$
9. $\\displaystyle\\lim_{x\\to\\infty}\\left(1-\\frac3x\\right)^x$
10. Determina $a$ para que $f(x)=ax+2$ si $x<1$ y $f(x)=x^2+3$ si $x\\geq1$ sea continua.

## Soluciones

**1. Factorización.**

$$
\\frac{(x-4)(x+4)}{x-4}=x+4\\longrightarrow\\boxed{8}.
$$

**2. Conjugado.**

$$
\\frac{\\sqrt{1+x}-1}{x}
=\\frac1{\\sqrt{1+x}+1}\\longrightarrow\\boxed{\\frac12}.
$$

**3. Límite notable.**

$$
\\frac{\\sin(5x)}{2x}
=\\frac52\\frac{\\sin(5x)}{5x}
\\longrightarrow\\boxed{\\frac52}.
$$

**4. Términos dominantes.** Dividiendo por $x^3$, el límite es $\\boxed{2}$.

**5. Racionalización.**

$$
\\sqrt{x^2+4x}-x
=\\frac{4x}{\\sqrt{x^2+4x}+x}
=\\frac4{\\sqrt{1+4/x}+1}
\\longrightarrow\\boxed{2}.
$$

**6. Encaje.** Como $|x\\cos(1/x)|\\leq|x|$ y $|x|\\to0$, el límite es $\\boxed{0}$.

**7. Signos laterales.** El numerador tiende a $2>0$. El denominador es negativo por la izquierda y positivo por la derecha:

$$
\\lim_{x\\to1^-}\\frac{x+1}{x-1}=-\\infty,
\\qquad
\\lim_{x\\to1^+}\\frac{x+1}{x-1}=+\\infty.
$$

El límite bilateral no existe.

**8. Límite notable exponencial.**

$$
\\boxed{\\lim_{x\\to0}\\frac{e^x-1}{x}=1}.
$$

**9. Potencia.** Es el modelo $(1+u/x)^x\\to e^u$ con $u=-3$:

$$
\\boxed{e^{-3}}.
$$

**10. Continuidad.** El límite izquierdo es $a+2$ y el valor por la derecha es $4$. Igualando, $a+2=4$, luego $\\boxed{a=2}$.

## Resumen práctico

Sustituye primero y transforma solo si aparece una indeterminación. Factoriza polinomios, racionaliza diferencias con raíces, reúne fracciones, ajusta los límites notables y divide por el término dominante en infinito. Los laterales deciden la existencia en puntos problemáticos; el encaje controla oscilaciones acotadas.

Al terminar, sustituye de nuevo en la expresión transformada, revisa el signo desde ambos lados y contrasta el orden de magnitud. Una forma indeterminada nunca es la respuesta final.

Los límites sostienen continuidad, derivadas e integrales, por lo que conviene dominarlos antes de avanzar en un plan de [Cálculo I para Ingeniería](/blog/como-aprobar-calculo-i-ingenieria-seis-semanas/). Si necesitas practicar con ejercicios de tu temario y recibir corrección del razonamiento, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
`,v=`---
title: Derivadas e integrales universitarias: prueba de nivel con ejercicios resueltos
date: 2026-06-23
updated: 2026-08-12
description: Prueba de nivel de derivadas e integrales universitarias con ejercicios resueltos para detectar errores antes del examen de Cálculo.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: metodos-de-integracion-como-elegir,integracion-por-sustitucion-cambio-variable-ejercicios,integracion-por-partes-formula-ejercicios-resueltos
image: /favicon.svg
---

Esta prueba de nivel de derivadas e integrales universitarias sirve para saber si tienes la base de Cálculo suficientemente firme antes de entrar en problemas más largos. No mide velocidad. Mide criterio.

Haz primero los ejercicios sin mirar la solución. Después revisa no solo el resultado, sino el método elegido.

## Ejercicio 1: derivada con regla de la cadena

Calcula:

$$
f(x)=\\ln(1+x^2)
$$

Solución:

$$
f'(x)=\\frac{1}{1+x^2}\\cdot 2x=\\frac{2x}{1+x^2}
$$

Qué comprueba: si reconoces que el logaritmo tiene una función interna. El error habitual es escribir \\(1/(1+x^2)\\) y olvidar multiplicar por \\(2x\\).

## Ejercicio 2: recta tangente

Encuentra la recta tangente a \\(f(x)=x^3-2x\\) en \\(x=1\\).

Primero:

$$
f(1)=1-2=-1
$$

La derivada es:

$$
f'(x)=3x^2-2
$$

Por tanto:

$$
f'(1)=1
$$

La recta tangente:

$$
y=f(1)+f'(1)(x-1)
$$

queda:

$$
y=-1+(x-1)=x-2
$$

Qué comprueba: interpretación de la derivada como pendiente local.

## Ejercicio 3: integral inmediata con cambio de variable

Calcula:

$$
\\int 3x^2 e^{x^3}\\,dx
$$

Tomamos:

$$
u=x^3,\\quad du=3x^2\\,dx
$$

Entonces:

$$
\\int 3x^2 e^{x^3}\\,dx=\\int e^u\\,du=e^u+C=e^{x^3}+C
$$

Qué comprueba: si sabes detectar una función y su derivada dentro de la integral.

## Ejercicio 4: integración por partes

Calcula:

$$
\\int x e^x\\,dx
$$

Usamos:

$$
\\int u\\,dv=uv-\\int v\\,du
$$

Elige \\(u=x\\) y \\(dv=e^x dx\\). Entonces \\(du=dx\\) y \\(v=e^x\\). Por tanto:

$$
\\int x e^x\\,dx=xe^x-\\int e^x\\,dx=xe^x-e^x+C
$$

Resultado:

$$
\\int x e^x\\,dx=e^x(x-1)+C
$$

Qué comprueba: elección razonable de \\(u\\). En general, conviene derivar la parte que se simplifica.

Si estos dos ejercicios de integración no salen con seguridad, trabaja la [guía completa de sustitución](/blog/integracion-por-sustitucion-cambio-variable-ejercicios/) y la [guía de integración por partes](/blog/integracion-por-partes-formula-ejercicios-resueltos/). Para aprender a distinguir ambas técnicas de fracciones parciales, identidades trigonométricas y formas inmediatas, consulta [cómo elegir el método de integración](/blog/metodos-de-integracion-como-elegir/).

## Ejercicio 5: área bajo una curva

Calcula el área bajo \\(f(x)=2x\\) entre \\(x=0\\) y \\(x=3\\).

$$
\\int_0^3 2x\\,dx=\\left[x^2\\right]_0^3=9
$$

El área es \\(9\\). No basta con integrar: hay que interpretar la integral definida como acumulación en un intervalo.

## Ejercicio 6: integral con signo

Calcula:

$$
\\int_{-1}^{1} x^3\\,dx
$$

La función \\(x^3\\) es impar, así que el área positiva y negativa se compensan:

$$
\\int_{-1}^{1} x^3\\,dx=0
$$

También se puede calcular:

$$
\\left[\\frac{x^4}{4}\\right]_{-1}^{1}=\\frac{1}{4}-\\frac{1}{4}=0
$$

Qué comprueba: diferencia entre integral definida y área geométrica total. Si te piden área encerrada, habría que partir intervalos y tomar valores absolutos cuando corresponda.

## Cómo interpretar tu resultado

Si has fallado ejercicios 1 o 3, el problema principal es regla de la cadena. Si has fallado 2, falta interpretación geométrica de la derivada. Si has fallado 4, necesitas practicar elección de técnica. Si has fallado 5 o 6, revisa integrales definidas y significado de signo.

## Nivel mínimo antes de un examen universitario

Antes de enfrentarte a problemas de Cálculo I deberías poder:

- Derivar funciones compuestas sin perder factores.
- Construir rectas tangentes.
- Reconocer cambios de variable sencillos.
- Aplicar integración por partes.
- Interpretar integrales definidas.
- Revisar si un resultado tiene sentido por signo, unidades o gráfica.

Para profundizar, puedes leer las guías sobre [qué son las derivadas](/blog/que-son-las-derivadas-y-para-que-se-utilizan/) y [qué son las integrales](/blog/que-son-las-integrales-y-para-que-se-utilizan/). Si quieres un diagnóstico más completo, revisa [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/).
`,y=`---
title: Diagramas de cuerpo libre: método paso a paso con errores frecuentes
date: 2026-07-01
updated: 2026-07-01
description: Aprende a hacer diagramas de cuerpo libre paso a paso: fuerzas reales, ejes, normal, rozamiento, tensión y errores frecuentes en Ingeniería.
tag: Física
category: Física y Química
relatedService: /clases-particulares/fisica-ingenieria/
relatedPosts: como-aprobar-fisica-i-ingenieria-sin-memorizar-formulas,circuitos-corriente-continua-problemas-resueltos-universidad,fisica-y-quimica-como-plantear-problemas
image: /favicon.svg
---

El diagrama de cuerpo libre es una de las herramientas más importantes de Física I. Si el diagrama está mal, las ecuaciones salen mal aunque sepas derivar, despejar o sustituir datos.

Un buen diagrama no es un dibujo bonito. Es una representación clara de todas las fuerzas reales que actúan sobre un cuerpo concreto.

## Paso 1: elige un solo cuerpo

Antes de dibujar, decide qué objeto estás aislando. Puede ser un bloque, una masa colgante, un coche, una partícula o una barra. No mezcles fuerzas de varios cuerpos en el mismo diagrama.

Pregunta guía:

> ¿Sobre qué cuerpo estoy escribiendo \\(\\sum F=ma\\)?

Esa pregunta evita muchos errores.

## Paso 2: dibuja solo fuerzas reales

Las fuerzas habituales son:

- Peso: \\(P=mg\\), siempre vertical hacia abajo.
- Normal: perpendicular a la superficie de contacto.
- Tensión: en la dirección de la cuerda.
- Rozamiento: opuesto al movimiento o a la tendencia de movimiento relativo.
- Fuerza aplicada: según indique el enunciado.
- Fuerza elástica: \\(F=kx\\), opuesta a la deformación.

No dibujes "la fuerza centrípeta" como fuerza adicional si ya tienes las fuerzas reales. La centrípeta es el resultado neto hacia el centro:

$$
\\sum F_{\\text{radial}}=\\frac{mv^2}{r}
$$

## Paso 3: elige ejes útiles

Los ejes no tienen que ser horizontal y vertical por costumbre. En un plano inclinado suele convenir un eje paralelo al plano y otro perpendicular.

Para un plano de ángulo \\(\\theta\\), el peso se descompone como:

$$
mg\\sin\\theta
$$

en la dirección paralela al plano, y:

$$
mg\\cos\\theta
$$

en la dirección perpendicular.

El error frecuente es intercambiar seno y coseno. Para comprobarlo, piensa en casos extremos: si \\(\\theta=0\\), no debería haber componente del peso bajando por el plano.

## Paso 4: escribe ecuaciones por eje

Después del diagrama, escribe una ecuación por eje:

$$
\\sum F_x=ma_x
$$

$$
\\sum F_y=ma_y
$$

Si no hay movimiento perpendicular a la superficie, normalmente \\(a_y=0\\). Eso permite encontrar la normal.

## Ejemplo: bloque en plano inclinado con rozamiento

Un bloque baja por un plano inclinado de ángulo \\(\\theta\\) con rozamiento \\(\\mu\\).

Fuerzas:

- Peso \\(mg\\).
- Normal \\(N\\).
- Rozamiento \\(F_r=\\mu N\\), hacia arriba del plano si el bloque baja.

Eje perpendicular:

$$
N-mg\\cos\\theta=0
$$

Por tanto:

$$
N=mg\\cos\\theta
$$

Eje paralelo:

$$
mg\\sin\\theta-\\mu N=ma
$$

Sustituyendo:

$$
mg\\sin\\theta-\\mu mg\\cos\\theta=ma
$$

Luego:

$$
a=g(\\sin\\theta-\\mu\\cos\\theta)
$$

## Errores frecuentes

### 1. Dibujar la normal siempre vertical

La normal es perpendicular a la superficie, no necesariamente vertical. En un plano inclinado, la normal está inclinada.

### 2. Poner el rozamiento en sentido arbitrario

El rozamiento se opone al movimiento relativo o a la tendencia de movimiento. Si el bloque tendería a bajar, el rozamiento apunta hacia arriba del plano.

### 3. Olvidar fuerzas de contacto

Si hay contacto con una superficie, revisa si hay normal y si puede haber rozamiento.

### 4. Mezclar fuerzas internas

Si estudias un sistema completo, algunas tensiones internas no aparecen en la ecuación global. Si estudias cada cuerpo por separado, sí aparecen.

### 5. Usar \\(F=ma\\) sin ejes

La segunda ley se aplica vectorialmente. En problemas reales, casi siempre necesitas descomponer por ejes.

## Checklist de examen

Antes de resolver, revisa:

- He aislado un cuerpo concreto.
- Todas las fuerzas dibujadas son reales.
- Cada fuerza tiene dirección clara.
- Los ejes simplifican el problema.
- La aceleración está en el eje correcto.
- La normal y el rozamiento están justificados.

Si este paso te cuesta, vuelve a la guía de [Física I sin memorizar fórmulas](/blog/como-aprobar-fisica-i-ingenieria-sin-memorizar-formulas/) o revisa [clases particulares de Física para Bachillerato e Ingeniería](/clases-particulares/fisica-ingenieria/).
`,q=`---
title: Econometría desde cero: cómo interpretar una regresión correctamente
date: 2026-07-06
updated: 2026-07-06
description: Guía de Econometría desde cero para interpretar una regresión: coeficientes, significación, R², supuestos y errores frecuentes.
tag: Econometría
category: Estadística
relatedService: /clases-particulares/estadistica-universidad/
relatedPosts: estadistica-desde-cero-para-elegir-contrastes,probabilidad-condicionada-bayes-problemas-resueltos,microeconomia-i-tipos-problemas-examen
image: /favicon.svg
---

Econometría no consiste solo en ejecutar una regresión y mirar si salen asteriscos. Una regresión se interpreta correctamente cuando conectas pregunta, modelo, coeficientes, incertidumbre y supuestos.

El modelo lineal simple se escribe así:

$$
y_i=\\beta_0+\\beta_1x_i+u_i
$$

donde \\(y_i\\) es la variable explicada, \\(x_i\\) la variable explicativa y \\(u_i\\) recoge factores no observados.

## Qué significa un coeficiente

En una regresión lineal, \\(\\beta_1\\) mide el cambio esperado en \\(y\\) cuando \\(x\\) aumenta una unidad, manteniendo el resto constante si hay más variables.

Por ejemplo:

$$
salario_i=\\beta_0+\\beta_1 educacion_i+u_i
$$

Si \\(\\hat{\\beta}\\_1=1200\\), una interpretación posible es: un año adicional de educación se asocia con 1200 unidades monetarias más de salario esperado, según el modelo.

La palabra "se asocia" importa. Para hablar de causalidad necesitas supuestos más fuertes.

## Significación estadística

Un contraste típico es:

$$
H_0:\\beta_1=0
$$

frente a:

$$
H_1:\\beta_1\\neq 0
$$

Si el p-valor es pequeño, hay evidencia estadística contra \\(H_0\\). Pero significación no implica relevancia económica. Un efecto puede ser estadísticamente significativo y económicamente pequeño.

## R²: qué dice y qué no dice

El \\(R^2\\) mide qué proporción de variabilidad de \\(y\\) queda explicada por el modelo:

$$
R^2=1-\\frac{SCR}{SCT}
$$

Un \\(R^2\\) alto no demuestra causalidad. Un \\(R^2\\) bajo no invalida automáticamente un modelo si la pregunta es estimar un efecto concreto.

## Regresión múltiple

En un modelo:

$$
y_i=\\beta_0+\\beta_1x_{1i}+\\beta_2x_{2i}+u_i
$$

el coeficiente \\(\\beta_1\\) se interpreta manteniendo \\(x_2\\) constante. Esta frase es central en Econometría. Si no la incluyes, la interpretación queda incompleta.

## Supuestos que debes revisar

Antes de confiar en una regresión, piensa en:

- Linealidad del modelo.
- Variables omitidas relevantes.
- Exogeneidad.
- Heterocedasticidad.
- Multicolinealidad.
- Tamaño muestral.
- Interpretación causal o solo predictiva.

No todos los cursos piden el mismo nivel, pero todos penalizan interpretar coeficientes sin contexto.

## Ejemplo interpretado

Modelo:

$$
nota_i=3.2+0.45 horas_i
$$

Interpretación: una hora adicional de estudio se asocia con 0.45 puntos más en la nota esperada, según este modelo lineal.

Si el p-valor de \\(horas\\) es 0.01, diríamos que hay evidencia estadística de asociación al 5%. Pero todavía habría que preguntarse si quienes estudian más también tienen otras características que explican la nota.

## Errores frecuentes

- Decir que un coeficiente "causa" algo sin justificar causalidad.
- Mirar solo el p-valor.
- Confundir significación estadística con importancia práctica.
- Interpretar \\(\\beta_0\\) aunque \\(x=0\\) no tenga sentido.
- No mencionar unidades.
- Ignorar variables omitidas.

## Cómo responder en un examen

Una buena respuesta incluye:

1. Variable dependiente y explicativas.
2. Signo del coeficiente.
3. Magnitud y unidades.
4. Significación si se pide.
5. Interpretación económica.
6. Cautela sobre causalidad y supuestos.

Para reforzar la base estadística, revisa [Estadística desde cero para elegir contrastes](/blog/estadistica-desde-cero-para-elegir-contrastes/) y [clases particulares de Estadística y Probabilidad](/clases-particulares/estadistica-universidad/).
`,E=`---
title: Economía y ADE: cómo estudiar matemáticas sin perder el sentido económico
date: 2026-05-26
updated: 2026-05-26
description: Cómo estudiar matemáticas, estadística y modelos de Economía y ADE conectando gráfica, fórmula e interpretación.
tag: Economía
category: Economía y ADE
relatedService: /clases-particulares/economia-ade/
relatedPosts: estadistica-desde-cero-para-elegir-contrastes,como-estudiar-matematicas-sin-memorizar
image: /favicon.svg
---

En Economía y ADE, las matemáticas no deberían estudiarse como una asignatura aislada. Una derivada, una elasticidad, una regresión o una función de costes tienen sentido porque responden a una pregunta económica.

El problema aparece cuando se estudia solo el procedimiento y se pierde la interpretación.

## Une gráfica, fórmula y frase

Cada concepto debería poder explicarse en tres formatos:

- **Gráfica:** qué forma tiene y qué cambia.
- **Fórmula:** qué variables aparecen y cómo se relacionan.
- **Frase:** qué decisión o fenómeno representa.

Si solo dominas uno de los tres, el examen puede cambiar el formato y dejarte bloqueado.

## No memorices modelos como recetas

En microeconomía, matemáticas financieras o estadística aplicada, pregunta siempre:

1. Qué representa la variable.
2. Qué supuesto estoy aceptando.
3. Qué conclusión puedo defender.
4. Qué pasaría si cambia una condición.

Por ejemplo, una expresión como \\(\\pi(q)=IT(q)-CT(q)\\) no es solo una fórmula: conecta ingresos, costes, producción y decisión.

## Practica con problemas mixtos

Los ejercicios reales mezclan lectura, cálculo e interpretación. Por eso conviene entrenar secuencias completas:

- Leer el enunciado.
- Dibujar o resumir el modelo.
- Calcular.
- Interpretar el resultado.
- Comprobar si tiene sentido económico.

## Qué evitar

- Resolver derivadas sin decir qué variable cambia.
- Aprender elasticidades como una tabla de fórmulas.
- Copiar procedimientos de estadística sin revisar supuestos.
- Separar teoría y problemas hasta la víspera del examen.

No se trata de convertirte en matemático. Se trata de que la parte cuantitativa no te impida entender economía, empresa o análisis de datos.

## Cómo repasar antes del examen

Una buena sesión de repaso debería mezclar:

1. Un problema de cálculo.
2. Una interpretación escrita.
3. Una gráfica o tabla.
4. Un caso con datos cambiados.

Si solo practicas la parte mecánica, el examen puede penalizarte en la explicación. Si solo estudias teoría, el cálculo llega inseguro. La clave está en unir ambas cosas.

Si ese es tu caso, puedes revisar [clases particulares de Economía y ADE](/clases-particulares/economia-ade/) o escribirnos desde [contacto](/contacto/).
`,_=`---
title: Ecuaciones diferenciales: cómo identificar el método correcto paso a paso
date: 2026-06-17
updated: 2026-06-17
description: Aprende a identificar el método correcto en ecuaciones diferenciales: separables, lineales, exactas y de segundo orden con ejemplos.
tag: Ecuaciones diferenciales
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: como-aprobar-calculo-i-ingenieria-seis-semanas,derivadas-integrales-universitarias-prueba-nivel-ejercicios-resueltos,como-estudiar-matematicas-sin-memorizar
image: /favicon.svg
---

En Ecuaciones Diferenciales, el bloqueo más frecuente no es resolver una integral concreta. Es mirar una ecuación y no saber qué método aplicar. Por eso conviene estudiar la asignatura como un árbol de decisión, no como una lista de recetas.

Una ecuación diferencial relaciona una función desconocida con sus derivadas. El primer paso siempre es clasificarla: orden, linealidad, variables y forma.

## Paso 1: identifica el orden

El orden es la derivada más alta que aparece.

$$
y'=2xy
$$

es de primer orden. En cambio:

$$
y''-3y'+2y=0
$$

es de segundo orden. Esta distinción decide la familia de métodos que tiene sentido.

## Paso 2: mira si es separable

Una ecuación de primer orden es separable si puedes escribirla como:

$$
\\frac{dy}{dx}=g(x)h(y)
$$

Entonces separas:

$$
\\frac{1}{h(y)}\\,dy=g(x)\\,dx
$$

Ejemplo:

$$
y'=2xy
$$

Si \\(y\\neq 0\\):

$$
\\frac{1}{y}\\,dy=2x\\,dx
$$

Integramos:

$$
\\ln|y|=x^2+C
$$

Por tanto:

$$
y=Ce^{x^2}
$$

La señal clara es que todos los términos con \\(y\\) pueden quedar a un lado y todos los de \\(x\\) al otro.

## Paso 3: si no es separable, prueba forma lineal

Una ecuación lineal de primer orden tiene forma:

$$
y'+p(x)y=q(x)
$$

Se resuelve con factor integrante:

$$
\\mu(x)=e^{\\int p(x)\\,dx}
$$

Ejemplo:

$$
y'+2y=e^x
$$

Aquí \\(p(x)=2\\), así que:

$$
\\mu(x)=e^{2x}
$$

Multiplicamos:

$$
e^{2x}y'+2e^{2x}y=e^{3x}
$$

El lado izquierdo es la derivada de \\(e^{2x}y\\):

$$
(e^{2x}y)'=e^{3x}
$$

Integramos:

$$
e^{2x}y=\\frac{1}{3}e^{3x}+C
$$

Luego:

$$
y=\\frac{1}{3}e^x+Ce^{-2x}
$$

## Paso 4: comprueba si es exacta

Si la ecuación aparece como:

$$
M(x,y)\\,dx+N(x,y)\\,dy=0
$$

comprueba:

$$
\\frac{\\partial M}{\\partial y}=\\frac{\\partial N}{\\partial x}
$$

Si se cumple, existe una función potencial \\(F(x,y)\\) tal que:

$$
dF=M\\,dx+N\\,dy
$$

La solución queda implícita como:

$$
F(x,y)=C
$$

Este método suele penalizar mucho si no se verifica la condición de exactitud antes de integrar.

## Paso 5: segundo orden con coeficientes constantes

Para ecuaciones como:

$$
ay''+by'+cy=0
$$

se plantea la ecuación característica:

$$
ar^2+br+c=0
$$

Ejemplo:

$$
y''-3y'+2y=0
$$

La característica es:

$$
r^2-3r+2=0
$$

Factorizando:

$$
(r-1)(r-2)=0
$$

Por tanto:

$$
y=C_1e^x+C_2e^{2x}
$$

Si hay raíces repetidas o complejas, cambia la forma de la solución, pero la lógica de partida es la misma.

## Árbol de decisión práctico

Cuando tengas una ecuación delante, sigue este orden:

1. ¿Cuál es el orden?
2. ¿Es lineal o no lineal?
3. Si es de primer orden, ¿se puede separar?
4. Si no se separa, ¿tiene forma \\(y'+p(x)y=q(x)\\)?
5. Si está en diferenciales, ¿es exacta?
6. Si es de segundo orden con coeficientes constantes, ¿puedo usar característica?
7. Si hay condición inicial, ¿ya tengo la solución general antes de sustituir?

La condición inicial se aplica al final, no al principio. Primero se encuentra la familia de soluciones; después se elige la curva concreta.

## Errores comunes

- Separar variables cuando \\(x\\) e \\(y\\) no están realmente separadas.
- Olvidar soluciones constantes al dividir por \\(y\\).
- Usar factor integrante sin poner la ecuación en forma lineal.
- Integrar una exacta sin comprobar exactitud.
- Sustituir condiciones iniciales antes de terminar la solución general.

Si necesitas practicar con una colección ordenada de problemas, puedes empezar por la guía de [cómo estudiar matemáticas sin memorizar fórmulas](/blog/como-estudiar-matematicas-sin-memorizar/) o pedir un diagnóstico en [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/).
`,h=`---
title: Errores más comunes en Inferencia Estadística
date: 2026-07-12
updated: 2026-07-12
description: Lista explicada de errores frecuentes en Inferencia Estadística: hipótesis, p-valores, intervalos, supuestos, tamaño muestral e interpretación.
tag: Inferencia
category: Estadística
relatedService: /clases-particulares/estadistica-universidad/
relatedPosts: p-valor-intervalo-confianza-tamano-efecto-ejemplo,que-prueba-estadistica-utilizar-guia-test-correcto,estadistica-desde-cero-para-elegir-contrastes
image: /favicon.svg
---

Inferencia Estadística es el bloque donde muchos estudiantes pasan de calcular a decidir. Ya no basta con obtener una media o una desviación típica: hay que sacar conclusiones sobre una población a partir de una muestra.

Estos son los errores más comunes y cómo evitarlos.

## 1. No escribir las hipótesis antes de calcular

Un contraste debe empezar con hipótesis claras:

$$
H_0:\\mu_1=\\mu_2
$$

$$
H_1:\\mu_1\\neq\\mu_2
$$

Si no sabes qué hipótesis estás contrastando, el p-valor no tiene significado.

## 2. Confundir muestra y población

La muestra es lo que observas. La población es aquello sobre lo que quieres concluir. Inferir es pasar de una a otra con incertidumbre.

La media muestral \\(\\bar{x}\\) estima la media poblacional \\(\\mu\\), pero no son lo mismo.

## 3. Interpretar mal el p-valor

El p-valor no es:

- La probabilidad de que \\(H_0\\) sea cierta.
- La probabilidad de que el resultado sea fruto del azar.
- Una medida del tamaño del efecto.

El p-valor mide compatibilidad entre los datos observados y la hipótesis nula bajo un modelo.

## 4. Usar 0.05 como frontera mágica

Un resultado con \\(p=0.049\\) y otro con \\(p=0.051\\) no son mundos distintos. La interpretación debe considerar tamaño del efecto, intervalo de confianza, diseño, muestra y contexto.

## 5. Ignorar el intervalo de confianza

Un intervalo de confianza aporta rango e incertidumbre:

$$
\\hat{\\theta}\\pm z_{\\alpha/2}\\cdot SE
$$

Si el intervalo es muy amplio, el resultado puede ser poco preciso aunque el p-valor parezca atractivo.

## 6. No revisar supuestos

Cada prueba descansa en condiciones. Algunas habituales:

- Independencia.
- Normalidad aproximada.
- Homogeneidad de varianzas.
- Tamaño muestral suficiente.
- Ausencia de valores extremos influyentes.

No siempre se cumplen perfectamente, pero hay que saber si el incumplimiento afecta mucho.

## 7. Elegir la prueba por costumbre

No todo se resuelve con t de Student ni todo con ANOVA. La prueba depende de la pregunta, el tipo de variable, el número de grupos y el diseño.

Si dudas, vuelve al mapa de [qué prueba estadística utilizar](/blog/que-prueba-estadistica-utilizar-guia-test-correcto/).

## 8. Confundir significación con importancia

Con muestras grandes, diferencias pequeñas pueden ser significativas. Con muestras pequeñas, efectos relevantes pueden no alcanzar significación. Por eso conviene informar también tamaño del efecto.

## 9. No corregir por comparaciones múltiples

Si haces muchos contrastes, aumenta la probabilidad de encontrar algún resultado significativo por azar. En diseños con muchas comparaciones, revisa si se piden correcciones o comparaciones post hoc.

## 10. Redactar conclusiones incompletas

Una conclusión estadística completa debería incluir:

1. Qué se comparó o analizó.
2. Qué prueba se usó.
3. Resultado principal.
4. p-valor o intervalo.
5. Tamaño del efecto si procede.
6. Interpretación en lenguaje del problema.

## Ejemplo de buena conclusión

> El grupo de intervención obtuvo menor ansiedad media que el grupo control. La diferencia fue estadísticamente significativa, \\(p=0.02\\), y el tamaño del efecto fue moderado. Esto sugiere que la intervención se asocia con menor ansiedad, aunque la interpretación causal depende del diseño del estudio.

La última frase importa: no prometas más de lo que el diseño permite.

Para reforzar este bloque, revisa [p-valor, intervalo de confianza y tamaño del efecto](/blog/p-valor-intervalo-confianza-tamano-efecto-ejemplo/) o [clases particulares de Estadística y Probabilidad](/clases-particulares/estadistica-universidad/).
`,C=`---
title: Estadística desde cero: cómo elegir un contraste sin aplicar recetas
date: 2026-05-29
updated: 2026-05-29
description: Una guía práctica para elegir pruebas estadísticas a partir de la pregunta, las variables, los supuestos y la interpretación.
tag: Estadística
category: Estadística
relatedService: /clases-particulares/estadistica-universidad/
relatedPosts: economia-ade-matematicas-sin-perderse,como-estudiar-matematicas-sin-memorizar
image: /favicon.svg
---

En Estadística muchos alumnos no se bloquean al calcular, sino al decidir. Conocen varias pruebas, han visto tablas y fórmulas, pero cuando aparece un enunciado nuevo no saben si toca comparar medias, proporciones, una regresión o un contraste de independencia.

La solución no es memorizar otra lista. Es construir una secuencia de decisión.

## Empieza por la pregunta

Antes de elegir técnica, escribe en una frase qué quieres responder:

1. Comparar dos medias.
2. Estimar un parámetro con incertidumbre.
3. Comprobar si dos variables categóricas están relacionadas.
4. Explicar una variable mediante otra.

Sin esa frase, cualquier contraste parece posible. Con ella, el abanico se reduce mucho.

## Identifica variables y muestra

El segundo filtro es la estructura de los datos:

- Variable cuantitativa o categórica.
- Una muestra, dos muestras o más de dos grupos.
- Muestras independientes o emparejadas.
- Tamaño muestral y supuestos razonables.

No se elige una prueba por el capítulo del temario. Se elige por la pregunta y por la forma de los datos.

## Hipótesis antes que cálculo

Un contraste se entiende mejor cuando las hipótesis están escritas antes de operar. Por ejemplo:

$$
H_0:\\mu_1=\\mu_2, \\qquad H_1:\\mu_1\\neq\\mu_2
$$

Después puedes calcular, pero el resultado debe volver a una frase: qué evidencia hay, qué decisión tomas y qué limitación mantiene la conclusión.

## Interpreta el p-valor

Un p-valor no significa "probabilidad de que la hipótesis nula sea cierta". Significa que, si el modelo y \\(H_0\\) fueran adecuados, observar un resultado tan extremo sería más o menos compatible con lo esperado.

Por eso conviene terminar cada ejercicio con interpretación:

- Qué hipótesis comparaste.
- Qué criterio de decisión usaste.
- Qué conclusión práctica puedes defender.
- Qué supuestos podrían cambiar la lectura.

## Protocolo simple

Cuando no sepas qué hacer, sigue este orden:

1. Redacta la pregunta.
2. Identifica variable respuesta y variable explicativa.
3. Clasifica el tipo de variables.
4. Revisa independencia, normalidad o tamaño muestral.
5. Elige técnica.
6. Interpreta en lenguaje natural.

## Señales de que estás aplicando recetas

Hay algunos avisos claros:

- Empiezas por buscar una fórmula antes de leer la pregunta.
- No sabes decir qué representa cada variable.
- El resultado numérico no termina en una conclusión escrita.
- Cambia el enunciado y ya no sabes si el mismo contraste sigue siendo válido.
- Te aprendes "si pasa esto, hago aquello" sin revisar supuestos.

La estadística universitaria se vuelve mucho más manejable cuando separas decisión, cálculo e interpretación. Cada parte tiene su dificultad, pero también su método de estudio.

Si estás preparando probabilidad, inferencia, regresión o estadística para Bachillerato, Universidad, TFG o TFM, revisa [clases particulares de Estadística y Probabilidad](/clases-particulares/estadistica-universidad/) o [cuéntanos tu caso](/contacto/).
`,j=`---
title: Estequiometría universitaria: ejercicios resueltos de dificultad progresiva
date: 2026-07-07
updated: 2026-07-07
description: Ejercicios resueltos de estequiometría universitaria con masa molar, reactivo limitante, rendimiento, disoluciones y errores frecuentes.
tag: Química
category: Física y Química
relatedService: /clases-particulares/quimica/
relatedPosts: fisica-y-quimica-como-plantear-problemas,como-aprobar-fisica-i-ingenieria-sin-memorizar-formulas,circuitos-corriente-continua-problemas-resueltos-universidad
image: /favicon.svg
---

La estequiometría universitaria se basa en una idea sencilla: una reacción química ajustada indica proporciones entre moles. La dificultad aparece al convertir masas, volúmenes, concentraciones y rendimientos sin perder el hilo.

El método general es:

1. Ajustar la reacción.
2. Convertir datos a moles.
3. Usar la proporción estequiométrica.
4. Convertir al formato pedido.
5. Revisar unidades y sentido químico.

## Ejercicio 1: masa a moles

Calcula los moles de \\(18\\,g\\) de agua. La masa molar del agua es:

$$
M(H_2O)=18\\,g/mol
$$

Entonces:

$$
n=\\frac{m}{M}=\\frac{18}{18}=1\\,mol
$$

Este paso parece básico, pero es la base de todos los problemas posteriores.

## Ejercicio 2: reacción ajustada

Considera la combustión del metano:

$$
CH_4+2O_2\\rightarrow CO_2+2H_2O
$$

Si reaccionan \\(3\\,mol\\) de \\(CH_4\\) con oxígeno suficiente, ¿cuántos moles de \\(CO_2\\) se forman?

La proporción es:

$$
1\\,mol\\,CH_4 \\rightarrow 1\\,mol\\,CO_2
$$

Por tanto:

$$
3\\,mol\\,CH_4 \\rightarrow 3\\,mol\\,CO_2
$$

## Ejercicio 3: reactivo limitante

Reacción:

$$
2H_2+O_2\\rightarrow 2H_2O
$$

Disponemos de \\(5\\,mol\\) de \\(H_2\\) y \\(2\\,mol\\) de \\(O_2\\). ¿Cuál es el reactivo limitante?

La reacción exige:

$$
2\\,mol\\,H_2 \\quad \\text{por cada} \\quad 1\\,mol\\,O_2
$$

Para consumir \\(2\\,mol\\) de \\(O_2\\), harían falta:

$$
4\\,mol\\,H_2
$$

Tenemos \\(5\\,mol\\), así que sobra \\(H_2\\). El reactivo limitante es \\(O_2\\).

## Ejercicio 4: rendimiento

Si una reacción debería producir \\(10\\,g\\) de producto, pero experimentalmente se obtienen \\(8\\,g\\), el rendimiento es:

$$
\\%R=\\frac{\\text{cantidad real}}{\\text{cantidad teórica}}\\cdot 100
$$

Sustituyendo:

$$
\\%R=\\frac{8}{10}\\cdot 100=80\\%
$$

El rendimiento nunca debe superar el 100% salvo que haya impurezas, errores de medida o producto húmedo.

## Ejercicio 5: disoluciones

Calcula los moles de soluto en \\(250\\,mL\\) de una disolución \\(0.5\\,M\\).

La molaridad es:

$$
M=\\frac{n}{V}
$$

con \\(V\\) en litros. Convertimos:

$$
250\\,mL=0.250\\,L
$$

Entonces:

$$
n=MV=0.5\\cdot 0.250=0.125\\,mol
$$

## Dificultad progresiva: cómo estudiar

Ordena los ejercicios así:

1. Conversiones masa-mol.
2. Reacciones ajustadas.
3. Reactivo limitante.
4. Rendimiento.
5. Disoluciones.
6. Problemas mixtos con pureza o concentración.

Si saltas directamente a problemas mixtos, es fácil no saber si el error está en el ajuste, la conversión o la proporción.

## Errores frecuentes

- Usar gramos directamente en proporciones estequiométricas.
- No ajustar la reacción.
- Confundir masa molar con masa del compuesto.
- No convertir mililitros a litros en molaridad.
- Elegir el reactivo limitante por cantidad mayor o menor sin comparar proporciones.
- Redondear demasiado pronto.

## Checklist final

Antes de entregar, revisa:

- La reacción está ajustada.
- Todos los datos están en unidades coherentes.
- Las proporciones se hacen en moles.
- El resultado responde exactamente a lo pedido.
- La unidad final es correcta.

Para seguir practicando, revisa la guía de [Física y Química: cómo plantear problemas antes de calcular](/blog/fisica-y-quimica-como-plantear-problemas/) o la página de [clases particulares de Química](/clases-particulares/quimica/).
`,P=`---
title: Física y Química: cómo plantear problemas antes de calcular
date: 2026-05-23
updated: 2026-05-23
description: Un método común para problemas de Física y Química: datos, magnitudes, modelo, unidades y comprobación final.
tag: Ciencia
category: Física y Química
relatedService: /clases-particulares/fisica-ingenieria/
relatedPosts: preparar-selectividad-con-calendario,como-estudiar-matematicas-sin-memorizar
image: /favicon.svg
---

En Física y Química muchos errores nacen antes del primer cálculo. El alumno reconoce fórmulas, pero no sabe qué representa cada magnitud, qué modelo está usando ni qué resultado tendría sentido.

Por eso el planteamiento vale tanto como la operación.

## Datos no es copiar números

Copiar datos del enunciado no basta. Hay que traducirlos:

- Qué sistema estoy estudiando.
- Qué magnitudes aparecen.
- Qué unidades tienen.
- Qué se conserva o qué cambia.
- Qué se pide exactamente.

En Física puede ser energía, fuerzas, movimiento o campo. En Química puede ser reacción, cantidad de sustancia, equilibrio o concentración.

## El modelo manda

Antes de calcular, decide el marco:

1. En Física: diagrama, fuerzas, energía, campo o circuito.
2. En Química: reacción ajustada, estequiometría, equilibrio, ácido-base o redox.
3. En ambos casos: unidades coherentes y resultado esperable.

Una fórmula como \\(F=ma\\) no es una receta aislada. Exige saber qué fuerza neta estás considerando, qué masa pertenece al sistema y en qué eje estás trabajando.

## Comprobación final

Al terminar, revisa:

- Unidad del resultado.
- Signo.
- Orden de magnitud.
- Coherencia con el enunciado.
- Si has usado todos los datos necesarios.

Este paso parece pequeño, pero detecta muchos fallos de examen: masas en gramos cuando deberían estar en kilogramos, concentraciones mal convertidas o signos aceptados sin interpretación.

## Entrena variantes

No repitas diez problemas idénticos. Cambia una condición: otra unidad, otro reactivo limitante, otro eje, otro tipo de dato. Así compruebas si sabes razonar o solo reconoces una plantilla.

## Un esquema para el cuaderno

Para cada problema, deja siempre la misma estructura:

1. Dibujo, reacción o sistema.
2. Datos con unidades.
3. Magnitud que se busca.
4. Modelo elegido.
5. Cálculo.
6. Comprobación final.

Parece lento al principio, pero acelera mucho cuando el examen mezcla temas. El objetivo es reducir decisiones improvisadas.

Si necesitas apoyo en problemas técnicos, revisa [Física para Bachillerato e Ingeniería](/clases-particulares/fisica-ingenieria/), [Química](/clases-particulares/quimica/) o [contacta](/contacto/) para organizar un plan.
`,z=`---
title: IB y GCSE: cómo preparar exámenes internacionales con rúbrica y calendario
date: 2026-06-10
updated: 2026-06-10
description: Una forma ordenada de preparar IB, GCSE e IGCSE: syllabus, rúbrica, práctica cronometrada, errores y revisión semanal.
tag: Exámenes
category: Exámenes internacionales
relatedService: /preparacion-examenes/ib-mathematics/
relatedPosts: preparar-selectividad-con-calendario,fisica-y-quimica-como-plantear-problemas
image: /favicon.svg
---

Los exámenes internacionales no se preparan solo estudiando contenido. En IB, GCSE e IGCSE importa mucho entender el syllabus, la rúbrica, el tipo de respuesta y el tiempo disponible.

La preparación debe combinar conocimiento, técnica de examen y revisión de errores.

## Empieza por el syllabus

Antes de hacer ejercicios al azar, marca:

- Temas incluidos.
- Peso de cada bloque.
- Formato de pregunta.
- Calculadora permitida o no.
- Criterios de corrección.

Esto evita dedicar demasiado tiempo a contenido que no tiene el mismo impacto.

## Entrena con rúbrica

Una respuesta buena no siempre es la más larga. Debe responder a lo que se pide y mostrar el razonamiento que la rúbrica valora.

Después de cada práctica, revisa:

1. Dónde perdiste puntos.
2. Si fue contenido, tiempo o forma de justificar.
3. Qué patrón se repite.
4. Qué vas a cambiar en el siguiente intento.

## Simulacros antes del final

Los mocks no deben aparecer la última semana. Hay que probar tiempo y presión cuando todavía queda margen para corregir.

Un calendario razonable mezcla repaso, ejercicios tipo, simulacros cortos y revisión de errores. Si solo haces ejercicios sin medir tiempo, no estás entrenando el examen completo.

## Idioma y terminología

Si estudias en inglés pero piensas mejor en español, conviene traducir conceptos clave sin perder terminología oficial. La meta es que entiendas el concepto y puedas responder en el idioma del examen.

## Qué debe quedar por escrito

- Lista de temas dominados y temas débiles.
- Errores recurrentes.
- Fórmulas o definiciones que conviene justificar.
- Preguntas tipo que consumen demasiado tiempo.
- Próximo simulacro y criterio de corrección.

## Revisión semanal

Cada semana conviene responder tres preguntas:

1. Qué tema ha mejorado.
2. Qué error se repite.
3. Qué práctica cronometrada toca después.

Esta revisión evita estudiar por inercia. En programas internacionales, donde el formato importa mucho, una preparación sin feedback acaba dejando puntos fáciles por el camino.

Para organizar esa preparación puedes ver [clases para GCSE, IGCSE e IB](/clases-particulares/gcse-ib/) o [contactar](/contacto/) para revisar syllabus, fecha y objetivo.
`,S=`---
title: Integración por partes: fórmula y ejercicios resueltos
date: 2026-08-06
updated: 2026-08-06
description: Domina la integración por partes: deducción de la fórmula, elección de u y dv, casos repetidos, integrales definidas y ejercicios resueltos.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: metodos-de-integracion-como-elegir,integracion-por-sustitucion-cambio-variable-ejercicios,que-son-las-integrales-y-para-que-se-utilizan
image: /favicon.svg
---

La integración por partes transforma una integral \\(\\int u\\,dv\\) en \\(uv-\\int v\\,du\\). Conviene usarla cuando el integrando contiene un producto y **derivar uno de los factores lo simplifica**, mientras el otro se puede integrar. También resuelve integrales de logaritmos y funciones inversas escribiéndolas como un producto por \\(1\\).

La fórmula no decide por sí sola qué parte será \\(u\\) y cuál \\(dv\\). Esa elección es el centro del método: la nueva integral debe ser más sencilla que la original o formar con ella una ecuación que podamos despejar.

## De dónde sale la fórmula

Partimos de la regla de derivación de un producto:

$$
(uv)'=u'v+uv'.
$$

Integramos ambos lados respecto de \\(x\\):

$$
uv=\\int u'v\\,dx+\\int uv'\\,dx.
$$

Reordenando,

$$
\\int uv'\\,dx=uv-\\int u'v\\,dx.
$$

Con la notación diferencial \\(du=u'\\,dx\\) y \\(dv=v'\\,dx\\), obtenemos

$$
\\boxed{\\int u\\,dv=uv-\\int v\\,du}.
$$

Por tanto, integración por partes es la regla del producto utilizada al revés. No crea una primitiva de la nada: intercambia un producto por otro que esperamos que sea más fácil.

Para integrales definidas entre \\(a\\) y \\(b\\), la fórmula es

$$
\\int_a^b u\\,dv=\\left[uv\\right]_a^b-\\int_a^b v\\,du.
$$

Los límites se mantienen porque no estamos cambiando la variable de integración; estamos reorganizando el producto.

## Cómo elegir u y dv

Una elección eficaz debe cumplir dos condiciones:

1. \\(u\\) se simplifica al derivarlo.
2. \\(dv\\) tiene una primitiva que podemos calcular sin introducir más dificultad.

La regla mnemotécnica LIATE ordena candidatos para \\(u\\): logarítmicas, inversas trigonométricas, algebraicas, trigonométricas y exponenciales. En español también se usa ILATE. Es una preferencia, no un teorema. Antes de seguirla, comprueba qué ocurre realmente al derivar e integrar.

| Producto | Elección habitual de \\(u\\) | Elección habitual de \\(dv\\) | Motivo |
| --- | --- | --- | --- |
| \\(x^n e^{ax}\\) | \\(x^n\\) | \\(e^{ax}dx\\) | El polinomio baja de grado |
| \\(x^n\\sin(ax)\\) | \\(x^n\\) | \\(\\sin(ax)dx\\) | El polinomio termina desapareciendo |
| \\(\\ln x\\) | \\(\\ln x\\) | \\(dx\\) | Su derivada es \\(1/x\\) |
| \\(\\arctan x\\) | \\(\\arctan x\\) | \\(dx\\) | Su derivada es racional |
| \\(e^{ax}\\cos(bx)\\) | Una de las dos | La otra por \\(dx\\) | Dos aplicaciones devuelven la integral original |

No conviene elegir como \\(dv\\) una expresión cuya primitiva desconocemos. En \\(\\int e^{x^2}x^3\\,dx\\), por ejemplo, tomar \\(dv=e^{x^2}dx\\) bloquea el método porque \\(e^{x^2}\\) no tiene primitiva elemental. Primero habría que usar \\(u=x^2\\) como cambio de variable, no como parte.

## Procedimiento paso a paso

Ante una integral candidata a partes:

1. Escribe el integrando como producto, aunque uno de los factores sea \\(1\\).
2. Elige \\(u\\) y \\(dv\\).
3. Calcula \\(du\\) derivando \\(u\\) y \\(v\\) integrando \\(dv\\).
4. Sustituye en \\(uv-\\int v\\,du\\), sin olvidar el signo menos.
5. Resuelve la integral restante; si exige partes otra vez, repite con una elección coherente.
6. Simplifica y añade \\(C\\) una sola vez al final.
7. Deriva el resultado para comprobarlo.

Si el problema principal es decidir entre partes y otros métodos, consulta antes el [árbol de decisión de métodos de integración](/blog/metodos-de-integracion-como-elegir/).

## Ejemplo 1 — polinomio por exponencial

Calcula

$$
\\int xe^x\\,dx.
$$

**Qué nos piden.** Una primitiva del producto de una función algebraica y una exponencial.

**Cómo reconocer el método.** Al derivar \\(x\\) obtenemos \\(1\\); \\(e^x\\) se integra sin cambiar de familia. Elegimos

$$
u=x, \\qquad dv=e^x\\,dx.
$$

Entonces

$$
du=dx, \\qquad v=e^x.
$$

Aplicamos la fórmula:

$$
\\begin{aligned}
\\int xe^x\\,dx
&=xe^x-\\int e^x\\,dx\\\\
&=xe^x-e^x+C\\\\
&=e^x(x-1)+C.
\\end{aligned}
$$

**Comprobación.**

$$
\\frac{d}{dx}\\left[e^x(x-1)\\right]
=e^x(x-1)+e^x=xe^x.
$$

La cancelación final confirma el signo de la fórmula.

## Ejemplo 2 — polinomio de grado dos y partes repetidas

Calcula

$$
\\int x^2e^x\\,dx.
$$

Elegimos \\(u=x^2\\) y \\(dv=e^x\\,dx\\):

$$
du=2x\\,dx, \\qquad v=e^x.
$$

La primera aplicación produce

$$
\\int x^2e^x\\,dx=x^2e^x-2\\int xe^x\\,dx.
$$

La integral restante es el ejemplo anterior. Sustituimos su resultado:

$$
\\begin{aligned}
\\int x^2e^x\\,dx
&=x^2e^x-2(xe^x-e^x)+C\\\\
&=e^x(x^2-2x+2)+C.
\\end{aligned}
$$

**Interpretación del proceso.** Cada derivación reduce el grado del polinomio: \\(x^2\\to2x\\to2\\to0\\). Por eso sabemos de antemano que el método terminará.

**Comprobación.**

$$
\\frac{d}{dx}\\left[e^x(x^2-2x+2)\\right]
=e^x(x^2-2x+2)+e^x(2x-2)=x^2e^x.
$$

## Ejemplo 3 — polinomio por seno

Calcula

$$
\\int x\\sin x\\,dx.
$$

Tomamos

$$
u=x, \\quad dv=\\sin x\\,dx, \\quad du=dx, \\quad v=-\\cos x.
$$

El signo de \\(v\\) es importante:

$$
\\begin{aligned}
\\int x\\sin x\\,dx
&=-x\\cos x-\\int(-\\cos x)\\,dx\\\\
&=-x\\cos x+\\sin x+C.
\\end{aligned}
$$

**Comprobación.** La derivada de \\(-x\\cos x\\) es \\(-\\cos x+x\\sin x\\); al sumar la derivada de \\(\\sin x\\), los cosenos se cancelan.

## Ejemplo 4 — integrar un logaritmo

Calcula

$$
\\int\\ln x\\,dx, \\qquad x>0.
$$

**Cómo reconocer el método.** No hay un producto visible, pero podemos escribir \\(\\ln x\\cdot1\\). La derivada del logaritmo es más sencilla.

$$
u=\\ln x, \\quad dv=dx, \\quad du=\\frac1x\\,dx, \\quad v=x.
$$

Entonces

$$
\\begin{aligned}
\\int\\ln x\\,dx
&=x\\ln x-\\int x\\frac1x\\,dx\\\\
&=x\\ln x-x+C.
\\end{aligned}
$$

En un intervalo negativo puede trabajarse con \\(\\ln|x|\\):

$$
\\int\\ln|x|\\,dx=x\\ln|x|-x+C, \\qquad x\\neq0.
$$

Derivar \\(x\\ln|x|-x\\) en cualquier intervalo que no contenga cero devuelve \\(\\ln|x|\\).

## Ejemplo 5 — función trigonométrica inversa

Calcula

$$
\\int\\arctan x\\,dx.
$$

Escribimos \\(\\arctan x\\cdot1\\) y elegimos

$$
u=\\arctan x, \\quad dv=dx.
$$

Así,

$$
du=\\frac{1}{1+x^2}\\,dx, \\qquad v=x.
$$

Aplicamos partes:

$$
\\int\\arctan x\\,dx=x\\arctan x-\\int\\frac{x}{1+x^2}\\,dx.
$$

La integral restante se resuelve con \\(w=1+x^2\\), \\(dw=2x\\,dx\\):

$$
\\int\\frac{x}{1+x^2}\\,dx=\\frac12\\ln(1+x^2).
$$

Por tanto,

$$
\\int\\arctan x\\,dx=x\\arctan x-\\frac12\\ln(1+x^2)+C.
$$

Este ejemplo muestra una secuencia habitual: partes crea una integral que después se resuelve por sustitución. Los métodos pueden combinarse sin que la clasificación inicial sea incorrecta.

## Ejemplo 6 — integral definida

Calcula

$$
\\int_0^1 xe^x\\,dx.
$$

Podemos usar la primitiva del ejemplo 1, pero aplicaremos la fórmula definida para hacer explícitos los extremos:

$$
u=x, \\quad dv=e^x\\,dx, \\quad du=dx, \\quad v=e^x.
$$

Entonces

$$
\\begin{aligned}
\\int_0^1 xe^x\\,dx
&=\\left[xe^x\\right]_0^1-\\int_0^1e^x\\,dx\\\\
&=e-\\left[e^x\\right]_0^1\\\\
&=e-(e-1)=1.
\\end{aligned}
$$

**Comprobación cualitativa.** En \\([0,1]\\), \\(xe^x\\geq0\\), así que el resultado debe ser positivo. Además, \\(xe^x\\leq e\\), de modo que el área no puede superar \\(e\\); el valor \\(1\\) es razonable.

## Ejemplo 7 — integral cíclica

Calcula

$$
I=\\int e^x\\cos x\\,dx.
$$

Ningún factor desaparece al derivarlo. Sin embargo, dos aplicaciones de partes devuelven la integral original, lo que permite despejarla.

Primera aplicación: elegimos \\(u=\\cos x\\), \\(dv=e^x\\,dx\\). Entonces \\(du=-\\sin x\\,dx\\), \\(v=e^x\\):

$$
I=e^x\\cos x+\\int e^x\\sin x\\,dx.
$$

Llamamos \\(J=\\int e^x\\sin x\\,dx\\). Aplicamos partes con \\(u=\\sin x\\), \\(dv=e^x\\,dx\\):

$$
J=e^x\\sin x-\\int e^x\\cos x\\,dx=e^x\\sin x-I.
$$

Sustituimos en la primera igualdad:

$$
I=e^x\\cos x+e^x\\sin x-I.
$$

Por tanto,

$$
2I=e^x(\\sin x+\\cos x)
$$

y

$$
\\boxed{I=\\frac{e^x}{2}(\\sin x+\\cos x)+C}.
$$

**Error típico.** Cuando reaparece \\(I\\), no se cancela ni se abandona el método: se agrupan ambos términos y se despeja. La constante se añade después de resolver la ecuación.

**Comprobación.**

$$
\\frac{d}{dx}\\left[\\frac{e^x}{2}(\\sin x+\\cos x)\\right]
=\\frac{e^x}{2}(\\sin x+\\cos x)+\\frac{e^x}{2}(\\cos x-\\sin x)
=e^x\\cos x.
$$

## Ejemplo 8 — partes dentro de un cambio de variable

Calcula

$$
\\int x^3\\ln(x^2)\\,dx, \\qquad x\\neq0.
$$

Podríamos aplicar partes directamente, pero la estructura \\(x^2\\) dentro del logaritmo y el factor \\(x^3dx=x^2(xdx)\\) sugieren primero \\(t=x^2\\):

$$
t=x^2, \\qquad dt=2x\\,dx, \\qquad x^3dx=t\\frac{dt}{2}.
$$

La integral queda

$$
\\frac12\\int t\\ln t\\,dt,
$$

donde \\(t>0\\). Ahora usamos partes:

$$
u=\\ln t, \\quad dv=t\\,dt, \\quad du=\\frac1t\\,dt, \\quad v=\\frac{t^2}{2}.
$$

Entonces

$$
\\begin{aligned}
\\frac12\\int t\\ln t\\,dt
&=\\frac12\\left(\\frac{t^2}{2}\\ln t-\\int\\frac{t^2}{2}\\frac1t\\,dt\\right)\\\\
&=\\frac{t^2}{4}\\ln t-\\frac{t^2}{8}+C.
\\end{aligned}
$$

Volvemos a \\(x\\):

$$
\\int x^3\\ln(x^2)\\,dx
=\\frac{x^4}{4}\\ln(x^2)-\\frac{x^4}{8}+C.
$$

La estrategia útil no es «partes siempre va primero en un producto», sino escoger el orden que reduzca antes la estructura compuesta.

## Método tabular para polinomios

Cuando hay que repetir partes varias veces con un polinomio, el método tabular resume las derivadas sucesivas y las primitivas sucesivas. Para

$$
\\int x^3e^x\\,dx,
$$

derivamos \\(x^3\\) hasta cero e integramos \\(e^x\\) repetidamente:

| Signo | Derivadas de \\(x^3\\) | Primitivas de \\(e^x\\) |
| --- | --- | --- |
| \\(+\\) | \\(x^3\\) | \\(e^x\\) |
| \\(-\\) | \\(3x^2\\) | \\(e^x\\) |
| \\(+\\) | \\(6x\\) | \\(e^x\\) |
| \\(-\\) | \\(6\\) | \\(e^x\\) |
|  | \\(0\\) |  |

Multiplicamos en diagonal con signos alternos:

$$
\\int x^3e^x\\,dx=e^x(x^3-3x^2+6x-6)+C.
$$

El esquema tabular ahorra escritura, pero no es una fórmula nueva. Es integración por partes repetida. Si las derivadas no terminan o las primitivas se complican, la tabla puede ocultar en vez de aclarar.

## Fórmulas de reducción

Partes permite relacionar una integral con otra de la misma familia y menor exponente. Define

$$
I_n=\\int x^ne^{ax}\\,dx, \\qquad a\\neq0.
$$

Elegimos \\(u=x^n\\) y \\(dv=e^{ax}dx\\). Entonces

$$
du=nx^{n-1}dx, \\qquad v=\\frac{e^{ax}}{a}.
$$

La fórmula da

$$
I_n=\\frac{x^ne^{ax}}{a}-\\frac{n}{a}\\int x^{n-1}e^{ax}\\,dx.
$$

Es decir,

$$
\\boxed{I_n=\\frac{x^ne^{ax}}{a}-\\frac{n}{a}I_{n-1}}.
$$

No se trata de memorizar otra receta, sino de expresar por qué el proceso termina: cada paso reduce \\(n\\) en una unidad hasta llegar a \\(I_0=\\int e^{ax}dx\\). También existen reducciones para potencias trigonométricas y otros productos, pero deben deducirse con sus condiciones, no aplicarse como identidades aisladas.

Por ejemplo, para \\(n=2\\) y \\(a=2\\):

$$
I_2=\\frac{x^2e^{2x}}2-I_1,
$$

y

$$
I_1=\\frac{xe^{2x}}2-\\frac14e^{2x}.
$$

Sustituyendo,

$$
\\int x^2e^{2x}dx
=e^{2x}\\left(\\frac{x^2}{2}-\\frac{x}{2}+\\frac14\\right)+C.
$$

La derivación de esta expresión confirma simultáneamente la fórmula y los coeficientes.

## Partes en integrales impropias

La fórmula sigue siendo útil cuando un extremo es infinito o el integrando no está acotado, pero primero hay que escribir la integral como límite y comprobar que los términos de frontera existen.

### Ejemplo 9 — un extremo infinito

Calcula

$$
\\int_0^\\infty xe^{-x}\\,dx.
$$

Por definición,

$$
\\int_0^\\infty xe^{-x}\\,dx
=\\lim_{b\\to\\infty}\\int_0^bxe^{-x}\\,dx.
$$

En la integral finita elegimos \\(u=x\\), \\(dv=e^{-x}dx\\), de modo que \\(du=dx\\) y \\(v=-e^{-x}\\):

$$
\\begin{aligned}
\\int_0^bxe^{-x}\\,dx
&=\\left[-xe^{-x}\\right]_0^b+\\int_0^be^{-x}\\,dx\\\\
&=-be^{-b}+1-e^{-b}.
\\end{aligned}
$$

Como \\(e^b\\) crece más deprisa que \\(b\\),

$$
\\lim_{b\\to\\infty}be^{-b}=0
$$

y \\(e^{-b}\\to0\\). Por tanto,

$$
\\int_0^\\infty xe^{-x}\\,dx=1.
$$

No sería riguroso escribir directamente \\([-xe^{-x}]_0^\\infty\\) sin justificar el límite. En integrales impropias, partes transforma el problema, pero no sustituye el análisis de convergencia.

## Qué ocurre si intercambiamos mal los papeles

En \\(\\int xe^x dx\\), elegir \\(u=e^x\\) y \\(dv=x\\,dx\\) es legal. Produce

$$
\\frac{x^2e^x}{2}-\\frac12\\int x^2e^x\\,dx,
$$

una integral más difícil que la original. La fórmula no ha fallado; ha revelado que la elección no reduce complejidad. Volver atrás y escoger \\(u=x\\) es una decisión matemática justificada, no un truco de solución oficial.

## Cuándo no usar integración por partes

Antes de aplicar la fórmula, busca señales de otro método:

- En \\(\\int 2x\\cos(x^2)\\,dx\\), aparece una función compuesta y su derivada: sustitución \\(u=x^2\\).
- En \\(\\int x/(x^2+1)\\,dx\\), la derivada del denominador está en el numerador: sustitución logarítmica.
- En \\(\\int (x^2+3x)/(x+1)\\,dx\\), conviene dividir polinomios.
- En \\(\\int \\sin x\\cos x\\,dx\\), basta \\(u=\\sin x\\) o una identidad trigonométrica.

Un producto visible no basta para justificar partes. La prueba es comparar la integral original con \\(\\int v\\,du\\): si la nueva es claramente más simple o permite cerrar un ciclo, el método tiene sentido.

## Ejemplo 10 — potencia por logaritmo

Calcula

$$
\\int x^2\\ln x\\,dx, \\qquad x>0.
$$

**Reconocimiento.** El producto combina una potencia y un logaritmo. Derivar \\(\\ln x\\) produce \\(1/x\\), que reduce la potencia después de multiplicar por la primitiva de \\(x^2\\). Elegimos

$$
u=\\ln x, \\qquad dv=x^2dx.
$$

Así,

$$
du=\\frac1x dx, \\qquad v=\\frac{x^3}{3}.
$$

Aplicamos partes:

$$
\\begin{aligned}
\\int x^2\\ln x\\,dx
&=\\frac{x^3}{3}\\ln x-\\int\\frac{x^3}{3}\\frac1x\\,dx\\\\
&=\\frac{x^3}{3}\\ln x-\\frac13\\int x^2dx\\\\
&=\\frac{x^3}{3}\\ln x-\\frac{x^3}{9}+C.
\\end{aligned}
$$

**Comprobación.** La derivada del primer término es \\(x^2\\ln x+x^2/3\\), mientras la del segundo es \\(-x^2/3\\). Los términos adicionales se cancelan. Este patrón se generaliza, para \\(n\\neq-1\\), a

$$
\\int x^n\\ln x\\,dx
=\\frac{x^{n+1}}{n+1}\\ln x-\\frac{x^{n+1}}{(n+1)^2}+C.
$$

La condición \\(x>0\\) corresponde a \\(\\ln x\\); con \\(\\ln|x|\\), la misma fórmula es válida en intervalos que no contienen cero.

## Errores frecuentes y cómo corregirlos

- **Olvidar el signo menos.** Escribe siempre la plantilla \\(uv-\\int v\\,du\\) antes de sustituir.
- **Integrar \\(u\\) y derivar \\(dv\\).** Los papeles son asimétricos: \\(u\\) se deriva; \\(dv\\) se integra.
- **Elegir un \\(dv\\) imposible.** Debes conocer \\(v=\\int dv\\).
- **No repetir el método cuando queda un polinomio.** En \\(x^2e^x\\), una sola aplicación no termina el problema.
- **Añadir constantes en cada etapa.** Basta una constante \\(C\\) al final; las intermedias se absorben en ella.
- **Tratar LIATE como obligación.** Comprueba que la integral restante sea más sencilla.
- **Evaluar mal una integral definida.** El término \\(uv\\) también se evalúa en ambos extremos.
- **Confundir la reaparición de la integral con un fracaso.** En casos cíclicos, esa reaparición permite formar una ecuación.

## Cómo comprobar el resultado

Deriva la primitiva completa, sin comprobar solo una parte. Si el resultado tiene forma \\(e^{ax}P(x)\\), usa la regla del producto y agrupa términos. Si contiene logaritmos, revisa dominio y valor absoluto. En una integral definida, añade estas comprobaciones:

1. El signo concuerda con el integrando en el intervalo.
2. El valor está dentro de cotas sencillas cuando el integrando está acotado.
3. Si hay unidades, el resultado tiene unidades de «integrando por variable».

Una comprobación rápida evita los dos fallos más comunes de partes: el signo de \\(v\\) en funciones trigonométricas y la pérdida de un coeficiente al integrar \\(e^{ax}\\).

En una solución de examen, deja visibles las cuatro piezas \\(u\\), \\(dv\\), \\(du\\) y \\(v\\) antes de aplicar la fórmula. Esa línea permite comprobar la elección y localizar un error sin rehacer todo el cálculo. Si repites el método, usa letras nuevas o indica «segunda aplicación» para no mezclar los papeles. La presentación debe mostrar por qué la integral restante es más sencilla, no solo una cadena de igualdades.

## Ejercicios propuestos

Resuelve sin mirar las soluciones y justifica la elección de \\(u\\) y \\(dv\\).

1. \\(\\displaystyle \\int x e^{3x}\\,dx\\)
2. \\(\\displaystyle \\int x^2\\cos x\\,dx\\)
3. \\(\\displaystyle \\int \\ln(2x)\\,dx\\), con \\(x>0\\)
4. \\(\\displaystyle \\int x\\ln x\\,dx\\), con \\(x>0\\)
5. \\(\\displaystyle \\int_0^{\\pi}x\\sin x\\,dx\\)
6. \\(\\displaystyle \\int e^{2x}\\sin x\\,dx\\)

## Soluciones de los ejercicios

**1. Polinomio por exponencial.** Elegimos \\(u=x\\), \\(dv=e^{3x}dx\\), de modo que \\(du=dx\\) y \\(v=e^{3x}/3\\):

$$
\\int xe^{3x}\\,dx
=\\frac{x}{3}e^{3x}-\\frac13\\int e^{3x}\\,dx
=e^{3x}\\left(\\frac{x}{3}-\\frac19\\right)+C.
$$

**2. Dos aplicaciones.** Primero \\(u=x^2\\), \\(dv=\\cos xdx\\):

$$
\\int x^2\\cos x\\,dx=x^2\\sin x-2\\int x\\sin x\\,dx.
$$

Como \\(\\int x\\sin xdx=-x\\cos x+\\sin x\\), resulta

$$
x^2\\sin x+2x\\cos x-2\\sin x+C.
$$

**3. Logaritmo por \\(1\\).** Con \\(u=\\ln(2x)\\), \\(dv=dx\\), tenemos \\(du=dx/x\\) y \\(v=x\\):

$$
\\int\\ln(2x)\\,dx=x\\ln(2x)-x+C.
$$

La derivada de \\(\\ln(2x)\\) es \\(1/x\\), no \\(1/(2x)\\): la regla de la cadena cancela el factor \\(2\\).

**4. Producto con logaritmo.** Elegimos \\(u=\\ln x\\) y \\(dv=x\\,dx\\):

$$
\\begin{aligned}
\\int x\\ln x\\,dx
&=\\frac{x^2}{2}\\ln x-\\frac12\\int x\\,dx\\\\
&=\\frac{x^2}{2}\\ln x-\\frac{x^2}{4}+C.
\\end{aligned}
$$

**5. Integral definida.** Con \\(u=x\\), \\(dv=\\sin xdx\\), \\(v=-\\cos x\\):

$$
\\begin{aligned}
\\int_0^\\pi x\\sin x\\,dx
&=\\left[-x\\cos x\\right]_0^\\pi+\\int_0^\\pi\\cos x\\,dx\\\\
&=\\pi+\\left[\\sin x\\right]_0^\\pi=\\pi.
\\end{aligned}
$$

El resultado es positivo, como corresponde a \\(x\\sin x\\geq0\\) en \\([0,\\pi]\\).

**6. Integral cíclica.** Sea \\(I=\\int e^{2x}\\sin xdx\\). Con \\(u=\\sin x\\), \\(dv=e^{2x}dx\\):

$$
I=\\frac12e^{2x}\\sin x-\\frac12\\int e^{2x}\\cos x\\,dx.
$$

Aplicando partes a la integral restante y sustituyendo se obtiene

$$
I=\\frac12e^{2x}\\sin x-\\frac14e^{2x}\\cos x-\\frac14I.
$$

Por tanto,

$$
\\boxed{I=\\frac{e^{2x}}{5}(2\\sin x-\\cos x)+C}.
$$

Al derivar, los términos en \\(\\cos x\\) se cancelan y queda \\(e^{2x}\\sin x\\).

## Qué debes recordar

Integración por partes funciona cuando el intercambio \\(\\int u\\,dv\\to uv-\\int v\\,du\\) produce una integral más sencilla. Elige \\(u\\) pensando en su derivada y \\(dv\\) pensando en una primitiva accesible. Los polinomios suelen derivarse; exponenciales y funciones trigonométricas suelen integrarse. Logaritmos e inversas trigonométricas se multiplican por \\(1\\).

Después de aplicar la fórmula, pueden ocurrir tres cosas útiles: la nueva integral es inmediata, hay que repetir partes o reaparece la integral original y se despeja. En todos los casos, la derivación del resultado es la prueba definitiva.

Si quieres practicar el método con ejercicios de tu grado y recibir corrección sobre la elección de \\(u\\), los signos y la presentación, consulta las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
`,L=`---
title: Integración por sustitución: cambio de variable y ejercicios
date: 2026-08-12
updated: 2026-08-12
description: Aprende integración por sustitución con criterio: cómo elegir el cambio de variable, transformar diferenciales y límites, y comprobar cada resultado.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: metodos-de-integracion-como-elegir,integracion-por-partes-formula-ejercicios-resueltos,que-son-las-integrales-y-para-que-se-utilizan
image: /favicon.svg
---

La integración por sustitución, o cambio de variable, deshace la regla de la cadena. Si una integral contiene una función compuesta \\(f(g(x))\\) y también el factor \\(g'(x)\\), hacemos \\(u=g(x)\\) para convertirla en una integral de \\(f(u)\\). El cambio es adecuado cuando toda la expresión puede escribirse en la nueva variable y el resultado es más sencillo.

La clave no es «cambiar lo que está dentro de un paréntesis». Hay que transformar a la vez la función, el diferencial y, en integrales definidas, los límites. Si después del cambio quedan mezcladas \\(x\\) y \\(u\\), el procedimiento está incompleto o la sustitución no conviene.

## Por qué funciona: la regla de la cadena al revés

Si \\(F'(u)=f(u)\\) y \\(u=g(x)\\), la regla de la cadena afirma que

$$
\\frac{d}{dx}F(g(x))=F'(g(x))g'(x)=f(g(x))g'(x).
$$

Al leer esta igualdad al revés obtenemos

$$
\\int f(g(x))g'(x)\\,dx=F(g(x))+C.
$$

Con la notación

$$
u=g(x), \\qquad du=g'(x)\\,dx,
$$

escribimos

$$
\\int f(g(x))g'(x)\\,dx=\\int f(u)\\,du.
$$

La notación diferencial ayuda a organizar factores, pero la justificación matemática es la regla de la cadena. El símbolo \\(du\\) no es una variable independiente que podamos inventar: debe corresponder a la derivada del cambio elegido.

## Cómo reconocer una sustitución útil

Busca una expresión interior \\(g(x)\\) cuya derivada aparezca en el resto del integrando, quizá multiplicada por una constante. Las formas más frecuentes son:

| Estructura | Cambio natural | Forma resultante |
| --- | --- | --- |
| \\(g'(x)[g(x)]^n\\) | \\(u=g(x)\\) | \\(\\int u^n du\\) |
| \\(g'(x)e^{g(x)}\\) | \\(u=g(x)\\) | \\(\\int e^u du\\) |
| \\(g'(x)\\cos(g(x))\\) | \\(u=g(x)\\) | \\(\\int\\cos u\\,du\\) |
| \\(g'(x)/g(x)\\) | \\(u=g(x)\\) | \\(\\int du/u\\) |
| \\(g'(x)/(1+g(x)^2)\\) | \\(u=g(x)\\) | \\(\\int du/(1+u^2)\\) |
| \\(g'(x)/\\sqrt{1-g(x)^2}\\) | \\(u=g(x)\\) | \\(\\int du/\\sqrt{1-u^2}\\) |

La derivada no tiene que coincidir de manera exacta. En

$$
\\int x\\cos(x^2)\\,dx,
$$

la derivada de \\(x^2\\) es \\(2x\\), mientras solo aparece \\(x\\). Se compensa con un factor \\(1/2\\). Lo que no podemos compensar con una constante es una potencia o función que falta.

Por ejemplo, \\(u=x^2+1\\) no resuelve directamente

$$
\\int\\frac{dx}{x^2+1},
$$

porque \\(du=2x\\,dx\\) y el factor \\(x\\) no aparece. Esa integral es inmediata mediante la arcotangente. El parecido visual con una composición no basta.

## Procedimiento para integrales indefinidas

Sigue estos pasos:

1. Identifica la función interior y propón \\(u=g(x)\\).
2. Calcula \\(du=g'(x)dx\\).
3. Despeja el bloque diferencial que aparece en la integral, incluidos los factores constantes.
4. Sustituye hasta que no quede ninguna \\(x\\).
5. Integra respecto de \\(u\\).
6. Vuelve a \\(x\\).
7. Añade \\(C\\) y deriva el resultado.

Si la sustitución no elimina \\(x\\) o deja una integral igual de difícil, vuelve al integrando original y revisa el [método de integración más adecuado](/blog/metodos-de-integracion-como-elegir/).

## Ejemplo 1 — potencia de una función lineal

Calcula

$$
\\int(3x-2)^5\\,dx.
$$

**Qué nos piden.** Una primitiva de una potencia compuesta.

**Cómo reconocer el método.** La función interior es \\(3x-2\\), cuya derivada es la constante \\(3\\).

Tomamos

$$
u=3x-2, \\qquad du=3\\,dx, \\qquad dx=\\frac13du.
$$

La integral se transforma en

$$
\\begin{aligned}
\\int(3x-2)^5\\,dx
&=\\frac13\\int u^5\\,du\\\\
&=\\frac13\\cdot\\frac{u^6}{6}+C\\\\
&=\\frac{(3x-2)^6}{18}+C.
\\end{aligned}
$$

**Comprobación.**

$$
\\frac{d}{dx}\\left[\\frac{(3x-2)^6}{18}\\right]
=\\frac6{18}(3x-2)^5\\cdot3=(3x-2)^5.
$$

El factor \\(1/3\\) del cambio es el que compensa el \\(3\\) de la regla de la cadena.

## Ejemplo 2 — raíz y factor proporcional

Calcula

$$
\\int x\\sqrt{x^2+5}\\,dx.
$$

La expresión interior \\(x^2+5\\) tiene derivada \\(2x\\), proporcional al factor exterior. Elegimos

$$
u=x^2+5, \\qquad du=2x\\,dx, \\qquad x\\,dx=\\frac12du.
$$

Entonces

$$
\\begin{aligned}
\\int x\\sqrt{x^2+5}\\,dx
&=\\frac12\\int u^{1/2}\\,du\\\\
&=\\frac12\\cdot\\frac{2}{3}u^{3/2}+C\\\\
&=\\frac13(x^2+5)^{3/2}+C.
\\end{aligned}
$$

**Dominio.** Como \\(x^2+5>0\\), la expresión está definida para todo \\(x\\in\\mathbb R\\).

## Ejemplo 3 — forma logarítmica

Calcula

$$
\\int\\frac{2x}{x^2-4}\\,dx.
$$

Tomamos \\(u=x^2-4\\), \\(du=2x\\,dx\\). Así,

$$
\\int\\frac{2x}{x^2-4}\\,dx
=\\int\\frac1u\\,du
=\\ln|u|+C
=\\ln|x^2-4|+C.
$$

**Por qué aparece el valor absoluto.** El denominador puede ser positivo o negativo, pero no puede valer cero. La identidad

$$
\\frac{d}{dx}\\ln|g(x)|=\\frac{g'(x)}{g(x)}
$$

es válida en cada intervalo donde \\(g(x)\\neq0\\). Aquí esos intervalos están separados por \\(x=-2\\) y \\(x=2\\).

**Comprobación.** Derivando \\(\\ln|x^2-4|\\) obtenemos \\(2x/(x^2-4)\\).

## Ejemplo 4 — exponencial con función interior

Calcula

$$
\\int x^2e^{x^3+1}\\,dx.
$$

La función del exponente es \\(x^3+1\\) y su derivada \\(3x^2\\) aparece salvo un factor:

$$
u=x^3+1, \\qquad du=3x^2\\,dx, \\qquad x^2dx=\\frac13du.
$$

Por tanto,

$$
\\int x^2e^{x^3+1}\\,dx
=\\frac13\\int e^u\\,du
=\\frac13e^u+C
=\\frac13e^{x^3+1}+C.
$$

No conviene separar \\(e^{x^3+1}=e\\,e^{x^3}\\) como método principal: es correcto, pero la sustitución sigue siendo la decisión que resuelve la composición.

## Ejemplo 5 — composición trigonométrica

Calcula

$$
\\int\\sin^4x\\cos x\\,dx.
$$

**Reconocimiento.** La derivada de \\(\\sin x\\) es \\(\\cos x\\), presente como factor. Tomamos

$$
u=\\sin x, \\qquad du=\\cos x\\,dx.
$$

Entonces

$$
\\int\\sin^4x\\cos x\\,dx
=\\int u^4\\,du
=\\frac{u^5}{5}+C
=\\frac{\\sin^5x}{5}+C.
$$

**Alternativa.** Elegir \\(u=\\cos x\\) no es imposible, pero obligaría a transformar \\(\\sin^4x=(1-\\cos^2x)^2\\) y todavía quedaría un factor \\(\\cos xdx\\) que no coincide con \\(-\\sin xdx\\). La primera elección elimina el integrando de una vez.

## Ejemplo 6 — completar el diferencial

Calcula

$$
\\int\\frac{x+1}{x^2+2x+5}\\,dx.
$$

La derivada del denominador es \\(2x+2=2(x+1)\\). Tomamos

$$
u=x^2+2x+5, \\qquad du=2(x+1)\\,dx.
$$

Por tanto,

$$
(x+1)dx=\\frac12du
$$

y

$$
\\int\\frac{x+1}{x^2+2x+5}\\,dx
=\\frac12\\int\\frac{du}{u}
=\\frac12\\ln(x^2+2x+5)+C.
$$

Como \\(x^2+2x+5=(x+1)^2+4>0\\), no es necesario el valor absoluto, aunque escribirlo tampoco sería incorrecto.

## Sustitución en integrales definidas

Si

$$
u=g(x),
$$

los límites deben expresarse en la nueva variable:

$$
x=a\\Rightarrow u=g(a), \\qquad x=b\\Rightarrow u=g(b).
$$

El teorema de cambio de variable, bajo las hipótesis habituales de continuidad y derivabilidad, se escribe

$$
\\int_a^b f(g(x))g'(x)\\,dx
=\\int_{g(a)}^{g(b)}f(u)\\,du.
$$

No es necesario que \\(g\\) sea creciente. Si \\(g(a)>g(b)\\), los nuevos límites quedan invertidos y ese orden conserva automáticamente el signo.

Tampoco es imprescindible que \\(g\\) sea inyectiva para una integral de la forma exacta \\(f(g(x))g'(x)\\): una primitiva \\(F(g(x))\\) justifica la igualdad por el teorema fundamental. Por ejemplo,

$$
\\int_{-1}^{1}2xe^{x^2}\\,dx
$$

tiene integrando impar y vale cero. Con \\(u=x^2\\), ambos extremos se transforman en \\(u=1\\), de modo que

$$
\\int_1^1e^u\\,du=0.
$$

No hay contradicción: al recorrer de \\(x=-1\\) a \\(0\\), \\(u\\) baja de \\(1\\) a \\(0\\); después vuelve de \\(0\\) a \\(1\\), y las contribuciones se cancelan. Si el integrando no contiene exactamente el factor \\(g'(x)\\), esta simplificación no puede usarse sin dividir el intervalo y analizar el cambio con cuidado.

### Ejemplo 7 — cambiar los límites

Calcula

$$
\\int_0^2\\frac{x}{x^2+1}\\,dx.
$$

Tomamos

$$
u=x^2+1, \\qquad du=2x\\,dx.
$$

Transformamos los extremos:

$$
x=0\\Rightarrow u=1, \\qquad x=2\\Rightarrow u=5.
$$

Entonces

$$
\\begin{aligned}
\\int_0^2\\frac{x}{x^2+1}\\,dx
&=\\frac12\\int_1^5\\frac1u\\,du\\\\
&=\\frac12\\left[\\ln u\\right]_1^5\\\\
&=\\frac12\\ln5.
\\end{aligned}
$$

**Comprobación cualitativa.** El integrando es no negativo en \\([0,2]\\), luego el resultado debe ser positivo. \\(\\frac12\\ln5\\approx0{,}805\\) cumple esa condición.

### Ejemplo 8 — límites que se invierten

Calcula

$$
\\int_0^1 -2x e^{1-x^2}\\,dx.
$$

Tomamos \\(u=1-x^2\\), de modo que \\(du=-2x\\,dx\\). Los límites son

$$
x=0\\Rightarrow u=1, \\qquad x=1\\Rightarrow u=0.
$$

Por tanto,

$$
\\int_0^1 -2xe^{1-x^2}\\,dx
=\\int_1^0e^u\\,du
=\\left[e^u\\right]_1^0
=1-e.
$$

El resultado negativo es coherente: el factor \\(-2x\\) es no positivo y la exponencial es positiva. Invertir manualmente los límites sin añadir un signo menos habría producido un resultado incorrecto.

## Normalizar antes de reconocer una primitiva

A veces el cambio solo sirve para llevar la expresión a una forma estándar. Calcula

$$
\\int\\frac{dx}{\\sqrt{4-9x^2}}.
$$

Factorizamos \\(4\\) dentro de la raíz:

$$
\\sqrt{4-9x^2}=2\\sqrt{1-\\left(\\frac{3x}{2}\\right)^2}.
$$

Tomamos \\(u=3x/2\\), por lo que \\(dx=2du/3\\). Entonces

$$
\\begin{aligned}
\\int\\frac{dx}{\\sqrt{4-9x^2}}
&=\\frac13\\int\\frac{du}{\\sqrt{1-u^2}}\\\\
&=\\frac13\\arcsin u+C\\\\
&=\\frac13\\arcsin\\left(\\frac{3x}{2}\\right)+C.
\\end{aligned}
$$

La primitiva real se considera en intervalos contenidos en \\((-2/3,2/3)\\). Al derivarla, el factor \\(3/2\\) de la cadena se combina con \\(1/3\\) y con la normalización de la raíz para recuperar el integrando. Este tipo de escala aparece también en formas de arcotangente y logaritmo.

## Sustitución para expresiones racionales no inmediatas

A veces el cambio natural no está «dentro» de una función trascendente, sino que reduce una simetría algebraica.

### Ejemplo 9 — usar una potencia como nueva variable

Calcula

$$
\\int\\frac{x^3}{x^2+1}\\,dx.
$$

Escribimos \\(x^3dx=x^2(xdx)\\) y tomamos \\(u=x^2+1\\). Entonces \\(x^2=u-1\\) y \\(x\\,dx=du/2\\):

$$
\\begin{aligned}
\\int\\frac{x^3}{x^2+1}\\,dx
&=\\frac12\\int\\frac{u-1}{u}\\,du\\\\
&=\\frac12\\int\\left(1-\\frac1u\\right)du\\\\
&=\\frac{u}{2}-\\frac12\\ln|u|+C\\\\
&=\\frac{x^2+1}{2}-\\frac12\\ln(x^2+1)+C.
\\end{aligned}
$$

La constante \\(1/2\\) dentro del primer término podría absorberse en \\(C\\), de modo que \\(x^2/2-\\frac12\\ln(x^2+1)+C\\) es una forma equivalente.

**Comprobación.**

$$
\\frac{d}{dx}\\left[\\frac{x^2}{2}-\\frac12\\ln(x^2+1)\\right]
=x-\\frac{x}{x^2+1}
=\\frac{x^3}{x^2+1}.
$$

## Cambios encadenados y sustitución inversa

Una primera sustitución puede revelar una segunda técnica. Lo importante es que cada paso reduzca la complejidad y que las variables no se mezclen.

### Ejemplo 10 — sustitución y después partes

Calcula

$$
\\int x\\ln(x^2+1)\\,dx.
$$

Tomamos

$$
u=x^2+1, \\qquad du=2x\\,dx.
$$

Así,

$$
\\int x\\ln(x^2+1)\\,dx=\\frac12\\int\\ln u\\,du.
$$

La integral del logaritmo se resuelve por partes:

$$
\\int\\ln u\\,du=u\\ln u-u+C.
$$

Por tanto,

$$
\\int x\\ln(x^2+1)\\,dx
=\\frac12\\left[(x^2+1)\\ln(x^2+1)-(x^2+1)\\right]+C.
$$

La constante incluida en \\(-(x^2+1)/2\\) permite escribir también

$$
\\frac{x^2+1}{2}\\ln(x^2+1)-\\frac{x^2}{2}+C.
$$

Ambas primitivas difieren solo en una constante. La [integración por partes](/blog/integracion-por-partes-formula-ejercicios-resueltos/) explica el segundo paso con detalle.

## Separar el numerador para crear una sustitución

En algunos cocientes, el numerador no coincide con la derivada del denominador, pero puede descomponerse en una parte proporcional a ella y un resto. La parte proporcional produce un logaritmo; el resto se trata por separado.

### Ejemplo 11 — derivada del denominador más un resto

Calcula

$$
\\int\\frac{3x+1}{x^2+x+1}\\,dx.
$$

La derivada del denominador es \\(2x+1\\). Buscamos constantes \\(A\\) y \\(B\\) tales que

$$
3x+1=A(2x+1)+B.
$$

Comparando coeficientes, \\(A=3/2\\) y \\(B=-1/2\\). Entonces

$$
\\int\\frac{3x+1}{x^2+x+1}\\,dx
=\\frac32\\int\\frac{2x+1}{x^2+x+1}\\,dx
-\\frac12\\int\\frac{dx}{x^2+x+1}.
$$

La primera integral se resuelve con \\(u=x^2+x+1\\):

$$
\\frac32\\ln(x^2+x+1).
$$

Para la segunda completamos el cuadrado:

$$
x^2+x+1=\\left(x+\\frac12\\right)^2+\\frac34.
$$

Usando la forma de la arcotangente,

$$
\\int\\frac{dx}{x^2+x+1}
=\\frac{2}{\\sqrt3}\\arctan\\left(\\frac{2x+1}{\\sqrt3}\\right)+C.
$$

Por tanto,

$$
\\boxed{
\\int\\frac{3x+1}{x^2+x+1}\\,dx
=\\frac32\\ln(x^2+x+1)
-\\frac1{\\sqrt3}\\arctan\\left(\\frac{2x+1}{\\sqrt3}\\right)+C
}.
$$

El denominador es siempre positivo porque su discriminante es negativo. La lección no es que todo cociente pida sustitución, sino que comparar el numerador con la derivada del denominador permite separar la parte integrable por cadena.

## Cambios recíprocos

Cuando aparecen potencias de \\(1/x\\), puede ser útil tomar \\(u=1/x\\). Por ejemplo,

$$
\\int\\frac{1}{x^2}\\sqrt{1+\\frac1x}\\,dx, \\qquad x\\neq0.
$$

Elegimos

$$
u=1+\\frac1x, \\qquad du=-\\frac1{x^2}dx.
$$

Entonces

$$
\\begin{aligned}
\\int\\frac{1}{x^2}\\sqrt{1+\\frac1x}\\,dx
&=-\\int u^{1/2}du\\\\
&=-\\frac23u^{3/2}+C\\\\
&=-\\frac23\\left(1+\\frac1x\\right)^{3/2}+C.
\\end{aligned}
$$

La expresión real exige \\(1+1/x\\geq0\\). Derivar el resultado devuelve el integrando en cada intervalo de su dominio. Este patrón recuerda que la función interior no tiene por qué ser un polinomio: puede ser racional, trigonométrica o logarítmica.

## Sustitución algebraica frente a sustitución trigonométrica

No todos los cambios de variable consisten en elegir una subexpresión. En integrales con raíces como

$$
\\sqrt{a^2-x^2}, \\qquad \\sqrt{a^2+x^2}, \\qquad \\sqrt{x^2-a^2},
$$

se utilizan cambios \\(x=a\\sin\\theta\\), \\(x=a\\tan\\theta\\) o \\(x=a\\sec\\theta\\) para aplicar identidades pitagóricas. Es el mismo principio de cambio de variable, pero la elección procede de la geometría de la expresión, no de encontrar una derivada ya presente.

En cambio, para \\(\\int dx/\\sqrt{9-x^2}\\) también podemos reconocer directamente la derivada de \\(\\arcsin(x/3)\\). Conviene usar la primitiva inmediata cuando se conoce y reservar la sustitución trigonométrica para formas donde realmente elimina una raíz complicada.

## Sustituciones que parecen buenas pero fracasan

Analizar un intento fallido enseña a elegir mejor.

### Caso 1 — falta la derivada interior

En

$$
\\int e^{x^2}\\,dx,
$$

tomar \\(u=x^2\\) da \\(du=2x\\,dx\\), pero no hay factor \\(x\\). Despejar \\(dx=du/(2x)\\) deja \\(x=\\sqrt u\\) y produce

$$
\\frac12\\int\\frac{e^u}{\\sqrt u}\\,du,
$$

que no es más simple. La primitiva de \\(e^{x^2}\\) no es elemental.

### Caso 2 — el cambio no reduce el producto

En

$$
\\int xe^x\\,dx,
$$

usar \\(u=e^x\\) obliga a escribir \\(x=\\ln u\\), y queda \\(\\int\\ln u\\,du\\). Puede resolverse, pero solo mediante partes; el cambio añade una etapa innecesaria. Aplicar partes directamente es más claro.

### Caso 3 — sustitución demasiado grande

En

$$
\\int\\frac{2x+1}{x^2+x+4}\\,dx,
$$

el cambio \\(u=(x^2+x+4)^2\\) es válido en principio, pero complica la potencia del denominador. Elegir \\(u=x^2+x+4\\) produce directamente \\(du=(2x+1)dx\\) y una integral logarítmica.

La mejor sustitución suele ser la expresión más simple cuya derivada organiza el resto del integrando.

## Errores frecuentes

- **Cambiar solo una parte.** Si \\(u=x^2+1\\), hay que transformar también el factor diferencial; no se puede escribir \\(\\int x/u\\,dx\\) y continuar como si \\(dx=du\\).
- **Mezclar variables.** Una integral en \\(u\\) no debe contener \\(x\\).
- **Perder una constante.** De \\(du=2x\\,dx\\) se deduce \\(x\\,dx=du/2\\).
- **No volver a \\(x\\) en una indefinida.** La respuesta final debe estar en la variable original salvo que se pida otra cosa.
- **Volver a \\(x\\) y usar límites en \\(u\\).** En una definida, elige uno de los dos caminos y mantén la coherencia.
- **Añadir \\(C\\) antes de terminar.** Una sola constante al final es suficiente.
- **Omitir el valor absoluto.** \\(\\int du/u=\\ln|u|+C\\).
- **Forzar el método cuando falta \\(g'(x)\\).** No todos los integrandos con paréntesis son composiciones integrables por sustitución.

## Cómo comprobar el cambio y el resultado

Antes de integrar en \\(u\\), haz una comprobación estructural:

1. ¿Ha desaparecido completamente \\(x\\)?
2. ¿El nuevo diferencial incluye todos los factores y constantes?
3. ¿La nueva integral es más sencilla?
4. Si es definida, ¿los límites están en la misma variable que la primitiva?

Después, deriva la respuesta final usando la regla de la cadena. Para una integral definida, revisa además signo y orden de magnitud. Si \\(m\\leq f(x)\\leq M\\) en \\([a,b]\\), entonces

$$
m(b-a)\\leq\\int_a^bf(x)\\,dx\\leq M(b-a).
$$

Estas cotas detectan valores absurdos aunque el cálculo formal parezca ordenado.

En un examen, escribe el cambio y el diferencial en la misma línea, por ejemplo \\(u=x^2+1, du=2x\\,dx\\). Después muestra explícitamente el factor constante que ajustas. En una integral definida, anota la conversión de cada extremo antes de integrar. Esta notación breve permite distinguir un fallo conceptual —el cambio no elimina \\(x\\)— de un simple error de coeficiente o de límites.

## Ejercicios propuestos

Identifica primero \\(u\\), calcula \\(du\\) y explica qué factor permite el cambio.

1. \\(\\displaystyle \\int 6x(3x^2+1)^4\\,dx\\)
2. \\(\\displaystyle \\int \\frac{e^x}{1+e^x}\\,dx\\)
3. \\(\\displaystyle \\int \\frac{\\cos x}{2+\\sin x}\\,dx\\)
4. \\(\\displaystyle \\int x^5\\sqrt{x^2+1}\\,dx\\)
5. \\(\\displaystyle \\int_0^{\\pi/2}\\sin x\\cos^3x\\,dx\\)
6. \\(\\displaystyle \\int_1^e \\frac{\\ln x}{x}\\,dx\\)
7. \\(\\displaystyle \\int \\frac{dx}{x\\ln x}\\), con \\(x>1\\)

## Soluciones de los ejercicios

**1. Potencia compuesta.** Tomamos \\(u=3x^2+1\\), \\(du=6x\\,dx\\):

$$
\\int6x(3x^2+1)^4\\,dx
=\\int u^4\\,du
=\\frac{u^5}{5}+C
=\\frac{(3x^2+1)^5}{5}+C.
$$

**2. Derivada del denominador.** Con \\(u=1+e^x\\), \\(du=e^xdx\\):

$$
\\int\\frac{e^x}{1+e^x}\\,dx=\\ln(1+e^x)+C.
$$

No hace falta valor absoluto porque \\(1+e^x>0\\).

**3. Composición trigonométrica.** Tomamos \\(u=2+\\sin x\\), \\(du=\\cos xdx\\):

$$
\\int\\frac{\\cos x}{2+\\sin x}\\,dx=\\ln(2+\\sin x)+C.
$$

El argumento está entre \\(1\\) y \\(3\\), por lo que siempre es positivo.

**4. Reescritura algebraica.** Usamos \\(u=x^2+1\\), \\(du=2x\\,dx\\). Como \\(x^5dx=x^4(xdx)=(u-1)^2du/2\\):

$$
\\begin{aligned}
\\int x^5\\sqrt{x^2+1}\\,dx
&=\\frac12\\int(u-1)^2u^{1/2}\\,du\\\\
&=\\frac12\\int(u^{5/2}-2u^{3/2}+u^{1/2})\\,du\\\\
&=\\frac{u^{7/2}}7-\\frac{2u^{5/2}}5+\\frac{u^{3/2}}3+C.
\\end{aligned}
$$

Volviendo a \\(x\\):

$$
\\frac{(x^2+1)^{7/2}}7-\\frac{2(x^2+1)^{5/2}}5+\\frac{(x^2+1)^{3/2}}3+C.
$$

**5. Integral definida trigonométrica.** Elegimos \\(u=\\cos x\\), \\(du=-\\sin xdx\\). Los límites cambian de \\(x=0,\\pi/2\\) a \\(u=1,0\\):

$$
\\int_0^{\\pi/2}\\sin x\\cos^3x\\,dx
=-\\int_1^0u^3\\,du
=\\int_0^1u^3\\,du
=\\frac14.
$$

**6. Logaritmo como variable.** Tomamos \\(u=\\ln x\\), \\(du=dx/x\\). Los límites son \\(u=0\\) y \\(u=1\\):

$$
\\int_1^e\\frac{\\ln x}{x}\\,dx
=\\int_0^1u\\,du
=\\frac12.
$$

**7. Sustitución encadenada sencilla.** Con \\(u=\\ln x\\), \\(du=dx/x\\):

$$
\\int\\frac{dx}{x\\ln x}
=\\int\\frac{du}{u}
=\\ln|u|+C
=\\ln(\\ln x)+C,
$$

donde \\(x>1\\) garantiza \\(\\ln x>0\\). En otros intervalos del dominio se mantiene \\(\\ln|\\ln x|\\).

## Resumen práctico

Una sustitución buena identifica la función interior, incorpora su derivada y convierte todo el integrando a una sola variable. Las constantes pueden ajustarse; los factores variables que faltan, no. En integrales definidas, transforma los límites y respeta su orden. En indefinidas, vuelve a la variable original y añade \\(C\\).

La comprobación más fiable consiste en derivar: si recuperas el integrando mediante la regla de la cadena, el cambio y los coeficientes son correctos. Si el método no elimina \\(x\\) o produce una integral peor, no insistas; revisa si corresponde simplificar, usar partes o aplicar otra técnica.

Si estás trabajando sustituciones más exigentes en Cálculo y necesitas corregir la elección del cambio sobre ejercicios reales de tu asignatura, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
`,A=`---
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
\\int f(x)dx=F(x)+C,
$$

mientras que una integral definida representa un número asociado a un intervalo:

$$
\\int_a^b f(x)dx.
$$

Ambas están conectadas por el teorema fundamental del cálculo: si \\(F'(x)=f(x)\\), entonces la integral definida vale \\(F(b)-F(a)\\). La constante \\(C\\) aparece en la indefinida, pero se cancela al evaluar extremos en la definida.

## Comparación rápida

| Aspecto | Integral indefinida | Integral definida |
| --- | --- | --- |
| Resultado | Familia de funciones | Número |
| Notación | \\(\\int f(x)dx\\) | \\(\\int_a^b f(x)dx\\) |
| Límites | No tiene | Tiene extremo inferior \\(a\\) y superior \\(b\\) |
| Constante | Incluye \\(+C\\) | No se escribe \\(+C\\) en el resultado |
| Pregunta que responde | ¿Qué funciones derivan en \\(f\\)? | ¿Cuánto se acumula entre \\(a\\) y \\(b\\)? |
| Comprobación | Derivar la primitiva | Revisar cálculo, signo, unidades y cotas |

La diferencia no es solo de notación. Una indefinida devuelve funciones; una definida evalúa una acumulación neta. Confundirlas conduce a errores como añadir \\(+C\\) a un área o dar un número cuando se pedía una primitiva general.

## Qué es una primitiva

Una función \\(F\\) es primitiva de \\(f\\) en un intervalo si

$$
F'(x)=f(x)
$$

en todos los puntos de ese intervalo. Por ejemplo, \\(F(x)=x^3/3\\) es una primitiva de \\(f(x)=x^2\\).

Pero no es la única:

$$
\\frac{x^3}{3}+2,\\qquad \\frac{x^3}{3}-7,\\qquad \\frac{x^3}{3}+\\pi
$$

tienen la misma derivada. En un intervalo, dos primitivas de una misma función continua difieren en una constante. Por eso escribimos

$$
\\int x^2dx=\\frac{x^3}{3}+C.
$$

El símbolo de integral indefinida no representa una suma infinita ni un área concreta: representa el conjunto de primitivas.

## Por qué hace falta la constante C

La derivada elimina las constantes. Si escribimos solo

$$
\\int 2x dx=x^2,
$$

encontramos una primitiva, pero no todas. La respuesta general es

$$
\\int2x dx=x^2+C.
$$

La constante puede determinarse si se añade una condición. Por ejemplo, busca una función \\(F\\) tal que

$$
F'(x)=2x \\qquad\\text{y}\\qquad F(1)=5.
$$

Primero,

$$
F(x)=x^2+C.
$$

Aplicamos la condición:

$$
5=F(1)=1+C \\quad\\Rightarrow\\quad C=4.
$$

La función concreta es \\(F(x)=x^2+4\\). La condición selecciona un miembro de la familia.

## Qué mide una integral definida

La integral definida de una función continua puede definirse como el límite de sumas de Riemann. Dividimos \\([a,b]\\) en intervalos pequeños de anchura \\(\\Delta x_i\\), elegimos un punto \\(x_i^*\\) en cada uno y sumamos

$$
\\sum_{i=1}^{n}f(x_i^*)\\Delta x_i.
$$

Cuando el tamaño máximo de las particiones tiende a cero, el límite es

$$
\\int_a^b f(x)dx.
$$

Esta definición explica la idea de acumulación: cada término es una pequeña contribución «valor por anchura». Si \\(f\\) es una velocidad en metros por segundo y \\(x\\) representa segundos, la integral tiene unidades de metros.

Para una función positiva, la integral coincide con el área bajo la curva. Si \\(f\\) toma valores negativos, las regiones bajo el eje restan. La [guía conceptual sobre qué son las integrales](/blog/que-son-las-integrales-y-para-que-se-utilizan/) desarrolla esta interpretación en distintos contextos.

## El teorema fundamental del cálculo

El [teorema fundamental del cálculo](/blog/teorema-fundamental-calculo-ejemplos-ejercicios/) conecta las dos ideas: acumulación y primitiva. Tiene dos afirmaciones complementarias.

Si \\(f\\) es continua y definimos

$$
A(x)=\\int_a^x f(t)dt,
$$

entonces

$$
A'(x)=f(x).
$$

La tasa de cambio de lo acumulado es la cantidad que se está acumulando en ese instante.

Además, si \\(F\\) es cualquier primitiva de \\(f\\),

$$
\\boxed{\\int_a^b f(x)dx=F(b)-F(a)}.
$$

Esta fórmula permite calcular una suma continua mediante valores de una primitiva en dos puntos.

## Por qué C desaparece en una integral definida

Si usamos la primitiva general \\(F(x)+C\\), entonces

$$
\\begin{aligned}
\\int_a^b f(x)dx
&=[F(x)+C]_a^b\\\\
&=(F(b)+C)-(F(a)+C)\\\\
&=F(b)-F(a).
\\end{aligned}
$$

La constante se cancela. Por eso no se añade \\(+C\\) al valor de una integral definida. No significa que las primitivas hayan dejado de tener constantes; significa que cualquiera de ellas produce la misma diferencia entre extremos.

## Ejemplo 1 — misma función, dos preguntas distintas

Sea \\(f(x)=3x^2-2\\).

**Pregunta indefinida.** Calcula todas sus primitivas.

$$
\\int(3x^2-2)dx=x^3-2x+C.
$$

El resultado es una familia de funciones.

**Pregunta definida.** Calcula la acumulación entre \\(x=0\\) y \\(x=2\\).

$$
\\begin{aligned}
\\int_0^2(3x^2-2)dx
&=[x^3-2x]_0^2\\\\
&=(8-4)-0=4.
\\end{aligned}
$$

El resultado es el número \\(4\\). En la primera pregunta se comprueba derivando; en la segunda se comprueba además que las unidades y el signo tengan sentido en el contexto.

## Ejemplo 2 — integral definida con zona negativa

Calcula

$$
\\int_{-1}^{2}x\\,dx.
$$

Una primitiva es \\(F(x)=x^2/2\\). Por tanto,

$$
\\int_{-1}^{2}x\\,dx
=\\left[\\frac{x^2}{2}\\right]_{-1}^{2}
=2-\\frac12
=\\frac32.
$$

Entre \\(-1\\) y \\(0\\), la gráfica está bajo el eje y aporta \\(-1/2\\). Entre \\(0\\) y \\(2\\), aporta \\(2\\). La acumulación neta es \\(3/2\\).

El área geométrica total sería

$$
\\int_{-1}^{0}(-x)dx+\\int_0^2x dx
=\\frac12+2=\\frac52.
$$

Integral definida y área no siempre son sinónimos. Para regiones más complejas, consulta [cómo calcular el área entre dos curvas](/blog/area-entre-dos-curvas-ejercicios-resueltos/).

## Propiedades de la integral indefinida

La linealidad permite separar sumas y sacar constantes:

$$
\\int[af(x)+bg(x)]dx
=a\\int f(x)dx+b\\int g(x)dx.
$$

Sin embargo, no existe una regla general que permita separar productos:

$$
\\int f(x)g(x)dx
\\neq\\left(\\int f(x)dx\\right)\\left(\\int g(x)dx\\right).
$$

Para productos puede corresponder [integración por partes](/blog/integracion-por-partes-formula-ejercicios-resueltos/); para composiciones, [cambio de variable](/blog/integracion-por-sustitucion-cambio-variable-ejercicios/).

## Propiedades de la integral definida

Para funciones integrables:

### Orientación

$$
\\int_b^a f(x)dx=-\\int_a^b f(x)dx.
$$

Intercambiar los límites cambia el signo.

### Intervalo nulo

$$
\\int_a^a f(x)dx=0.
$$

No hay anchura sobre la que acumular.

### Aditividad por intervalos

$$
\\int_a^b f(x)dx+\\int_b^c f(x)dx=\\int_a^c f(x)dx.
$$

Esta propiedad permite dividir en puntos donde cambia una fórmula o un signo.

### Linealidad

$$
\\int_a^b[\\alpha f(x)+\\beta g(x)]dx
=\\alpha\\int_a^bf(x)dx+\\beta\\int_a^bg(x)dx.
$$

### Comparación

Si \\(f(x)\\leq g(x)\\) en \\([a,b]\\), entonces

$$
\\int_a^bf(x)dx\\leq\\int_a^bg(x)dx.
$$

En particular, si \\(m\\leq f(x)\\leq M\\),

$$
m(b-a)\\leq\\int_a^bf(x)dx\\leq M(b-a).
$$

Estas cotas son muy útiles para detectar un resultado numérico imposible.

## Ejemplo 3 — usar propiedades sin integrar desde cero

Se sabe que

$$
\\int_0^2 f(x)dx=3
\\qquad\\text{y}\\qquad
\\int_2^5 f(x)dx=-1.
$$

Calcula \\(\\int_0^5 f(x)dx\\) y \\(\\int_5^0 f(x)dx\\).

Por aditividad,

$$
\\int_0^5f(x)dx=3+(-1)=2.
$$

Al invertir límites,

$$
\\int_5^0f(x)dx=-2.
$$

No necesitamos conocer la fórmula de \\(f\\). Las propiedades contienen información suficiente.

## Ejemplo 4 — simetría

Si \\(f\\) es impar, \\(f(-x)=-f(x)\\), entonces

$$
\\int_{-a}^{a}f(x)dx=0.
$$

Por ejemplo,

$$
\\int_{-2}^{2}(x^3+3x)dx=0.
$$

Si \\(f\\) es par, \\(f(-x)=f(x)\\), entonces

$$
\\int_{-a}^{a}f(x)dx=2\\int_0^af(x)dx.
$$

Así,

$$
\\int_{-1}^{1}(x^2+1)dx
=2\\int_0^1(x^2+1)dx
=\\frac83.
$$

La simetría simplifica el cálculo, pero debe comprobarse sobre toda la función, no sobre uno de sus términos.

## Función de acumulación

Una integral cuyo extremo superior es variable define una función:

$$
A(x)=\\int_a^x f(t)dt.
$$

Aquí \\(t\\) es una variable muda: podría llamarse \\(u\\), \\(s\\) o cualquier otra letra. La variable libre es \\(x\\), que aparece en el límite.

### Ejemplo 5 — derivar una acumulación

Sea

$$
A(x)=\\int_1^x(t^2+1)dt.
$$

Por el teorema fundamental,

$$
A'(x)=x^2+1.
$$

También podemos calcular primero:

$$
A(x)=\\left[\\frac{t^3}{3}+t\\right]_1^x
=\\frac{x^3}{3}+x-\\frac43,
$$

y derivar para obtener el mismo resultado.

Si el límite es una función, interviene la regla de la cadena. Para

$$
B(x)=\\int_0^{x^2}\\cos t\\,dt,
$$

se cumple

$$
B'(x)=\\cos(x^2)\\cdot2x.
$$

## Ejemplo 6 — límite superior e inferior variables

Sea

$$
G(x)=\\int_x^{x^2}e^t dt.
$$

Podemos escribir

$$
G(x)=\\int_0^{x^2}e^t dt-\\int_0^xe^t dt.
$$

Derivando:

$$
G'(x)=2xe^{x^2}-e^x.
$$

La contribución del límite inferior lleva signo negativo. Este tipo de ejercicio evalúa simultáneamente orientación, teorema fundamental y regla de la cadena.

## Integrales definidas con cambio de variable

En una integral indefinida, después de sustituir \\(u=g(x)\\) hay que volver a \\(x\\). En una definida se pueden cambiar los límites:

$$
\\int_a^b f(g(x))g'(x)dx
=\\int_{g(a)}^{g(b)}f(u)du.
$$

### Ejemplo 7 — límites transformados

Calcula

$$
\\int_0^1 2xe^{x^2}dx.
$$

Con \\(u=x^2\\), \\(du=2x dx\\). Los nuevos límites son \\(0\\) y \\(1\\):

$$
\\int_0^1e^u du=e-1.
$$

No se añade \\(+C\\), y no se mezclan límites en \\(x\\) con una primitiva en \\(u\\).

## Ejemplo 8 — valor medio de una función

El valor medio de \\(f\\) en \\([a,b]\\) es

$$
f_{\\text{medio}}=\\frac1{b-a}\\int_a^bf(x)dx.
$$

Para \\(f(x)=x^2\\) en \\([0,3]\\):

$$
f_{\\text{medio}}
=\\frac13\\int_0^3x^2dx
=\\frac13\\left[\\frac{x^3}{3}\\right]_0^3
=3.
$$

El resultado tiene las mismas unidades que \\(f\\), porque dividimos la acumulación por la longitud del intervalo. Además está entre el mínimo \\(0\\) y el máximo \\(9\\).

## Integrales impropias: tener límites no basta

Una integral con límites puede ser impropia si el intervalo es infinito o el integrando no está acotado. La guía de [integrales impropias y convergencia](/blog/integrales-impropias-convergencia-ejercicios/) desarrolla su clasificación y los criterios de comparación. Por ejemplo,

$$
\\int_1^\\infty\\frac1{x^2}dx
$$

se define como

$$
\\lim_{b\\to\\infty}\\int_1^b\\frac1{x^2}dx=1.
$$

En cambio, \\(\\int_1^\\infty1/x\\,dx\\) diverge. No basta con escribir una primitiva y sustituir \\(\\infty\\) como si fuera un número; hay que evaluar un límite.

## Existencia de la integral y discontinuidades

Una función continua en \\([a,b]\\) es integrable, pero la continuidad no es necesaria. Las funciones acotadas con un número finito de discontinuidades también son integrables en el sentido de Riemann. Por ejemplo,

$$
f(x)=
\\begin{cases}
0,&x<0,\\\\
1,&x\\geq0
\\end{cases}
$$

es integrable en \\([-1,1]\\), y

$$
\\int_{-1}^{1}f(x)dx=1.
$$

La discontinuidad en un único punto no aporta anchura. En cambio, una discontinuidad infinita, como la de \\(1/x\\) en cero, obliga a formular una integral impropia. No puede ignorarse porque la función deja de estar acotada cerca del punto.

También hay que distinguir una fórmula definida por tramos de una función discontinua. Si las piezas encajan en el punto de cambio, la función puede ser continua; si no encajan pero permanece acotada, la integral puede seguir existiendo y se calcula separando intervalos.

### Ejemplo 9 — función definida por tramos

Sea

$$
f(x)=
\\begin{cases}
x+1,&-1\\leq x<0,\\\\
x^2,&0\\leq x\\leq2.
\\end{cases}
$$

Calcula \\(\\int_{-1}^{2}f(x)dx\\). Usamos aditividad en el punto donde cambia la fórmula:

$$
\\begin{aligned}
\\int_{-1}^{2}f(x)dx
&=\\int_{-1}^{0}(x+1)dx+\\int_0^2x^2dx\\\\
&=\\left[\\frac{x^2}{2}+x\\right]_{-1}^{0}
+\\left[\\frac{x^3}{3}\\right]_0^2\\\\
&=\\frac12+\\frac83=\\frac{19}{6}.
\\end{aligned}
$$

El valor de la función exactamente en \\(x=0\\) no modificaría la integral: cambiar un número finito de puntos no altera una suma continua.

## Aproximar una integral definida

El teorema fundamental permite calcular exactamente cuando conocemos una primitiva elemental. Si no la conocemos o solo disponemos de datos, usamos aproximaciones numéricas.

Para una partición uniforme de anchura \\(h=(b-a)/n\\), la regla del punto medio aproxima

$$
\\int_a^bf(x)dx
\\approx h\\sum_{i=1}^{n}f\\left(\\frac{x_{i-1}+x_i}{2}\\right).
$$

La regla del trapecio usa

$$
\\int_a^bf(x)dx
\\approx\\frac h2\\left[f(x_0)+2\\sum_{i=1}^{n-1}f(x_i)+f(x_n)\\right].
$$

Estas fórmulas aproximan la integral definida, no producen una integral indefinida. Una tabla de valores puede estimar una acumulación, pero no determina por sí sola una familia de primitivas simbólicas.

### Ejemplo 10 — regla del trapecio

Aproxima \\(\\int_0^2x^2dx\\) con dos subintervalos. Tenemos \\(h=1\\) y nodos \\(0,1,2\\):

$$
T_2=\\frac12[f(0)+2f(1)+f(2)]
=\\frac12(0+2+4)=3.
$$

El valor exacto es

$$
\\left[\\frac{x^3}{3}\\right]_0^2=\\frac83\\approx2{,}667.
$$

El trapecio sobreestima porque \\(x^2\\) es convexa: las cuerdas quedan por encima de la gráfica. Esta interpretación ayuda a juzgar el signo del error.

## Unidades y análisis dimensional

Si \\(f(x)\\) tiene unidades \\(U_f\\) y \\(x\\) tiene unidades \\(U_x\\), la integral tiene unidades \\(U_fU_x\\). Una tasa de litros por minuto integrada respecto de minutos produce litros; una fuerza integrada respecto del desplazamiento produce trabajo.

Una primitiva también tiene unidades \\(U_fU_x\\). La constante \\(C\\) debe tener esas mismas unidades para poder sumarse a \\(F(x)\\). Este detalle evita expresiones físicamente incoherentes aunque el álgebra parezca correcta.

### Ejemplo 11 — tasa de entrada

Un depósito recibe agua a una tasa \\(r(t)=6+2t\\) litros por minuto durante cuatro minutos. El volumen añadido es

$$
\\int_0^4(6+2t)dt
=[6t+t^2]_0^4
=40\\text{ litros}.
$$

La primitiva \\(6t+t^2+C\\) describiría familias de funciones de volumen total; una condición inicial determinaría \\(C\\). La integral definida responde cuánto se añadió durante el intervalo.

## Una integral definida puede existir sin primitiva elemental

Que una integral definida tenga valor no implica que podamos escribir una primitiva con funciones elementales. La función $e^{-x^2}$ es continua, así que

$$
\\int_0^1e^{-x^2}dx
$$

existe. Sin embargo, su primitiva no se expresa mediante una combinación finita de polinomios, exponenciales, logaritmos y funciones trigonométricas elementales.

El valor puede aproximarse numéricamente o expresarse mediante la función error. Esto separa dos preguntas:

- La **existencia** de la integral definida depende de la integrabilidad de la función en el intervalo.
- El **cálculo simbólico mediante primitivas elementales** depende de que exista una fórmula elemental disponible.

El teorema fundamental sigue siendo válido formulado con la función de acumulación. Lo que falta no es la integral, sino una expresión dentro del repertorio elemental del curso.

## Errores frecuentes

- **Olvidar \\(+C\\) en una indefinida.** Se piden todas las primitivas.
- **Añadir \\(+C\\) a una definida.** El resultado es un número y la constante se cancela.
- **Confundir integral definida con área total.** Las regiones negativas restan.
- **Sustituir límites antes de obtener una primitiva correcta.** Primero se integra, después se evalúa.
- **Invertir límites sin cambiar el signo.** La orientación forma parte de la definición.
- **Usar la misma letra como variable muda y límite sin cuidado.** En \\(\\int_a^x f(t)dt\\), \\(t\\) desaparece tras integrar.
- **Aplicar el teorema fundamental ignorando discontinuidades.** Hay que revisar las hipótesis y las posibles integrales impropias.
- **Tratar \\(dx\\) como decoración.** Indica la variable respecto de la que se integra y sus unidades contribuyen al resultado.

## Cómo reconocer qué te están pidiendo

Busca estas señales en el enunciado:

- «Calcula una primitiva» o «integra \\(f(x)\\)»: integral indefinida y \\(+C\\).
- «Calcula \\(\\int_a^b f(x)dx\\)»: integral definida y resultado numérico.
- «Área»: hay que estudiar signos y fronteras; puede requerir valores absolutos o varios tramos.
- «Acumulación entre dos instantes»: integral definida con interpretación y unidades.
- «Halla la función sabiendo que su derivada…»: primitiva más condición para determinar \\(C\\).
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

1. Calcula \\(\\int(4x^3-3x^2+2)dx\\).
2. Halla \\(F\\) si \\(F'(x)=6x-1\\) y \\(F(0)=4\\).
3. Calcula \\(\\int_1^3(2x+1)dx\\).
4. Calcula la integral y el área geométrica de \\(f(x)=x\\) en \\([-2,1]\\).
5. Si \\(H(x)=\\int_2^{x^3}\\sqrt{1+t^2}dt\\), calcula \\(H'(x)\\).
6. Sabiendo que \\(\\int_0^2f=5\\) y \\(\\int_2^4f=-2\\), calcula \\(\\int_4^0f\\).
7. Calcula el valor medio de \\(f(x)=3x+1\\) en \\([0,2]\\).

## Soluciones de los ejercicios

**1. Integral indefinida.**

$$
\\int(4x^3-3x^2+2)dx=x^4-x^3+2x+C.
$$

Derivar devuelve el integrando.

**2. Condición inicial.** Primero,

$$
F(x)=3x^2-x+C.
$$

Como \\(F(0)=C=4\\),

$$
F(x)=3x^2-x+4.
$$

**3. Integral definida.**

$$
\\int_1^3(2x+1)dx=[x^2+x]_1^3=12-2=10.
$$

**4. Integral frente a área.**

$$
\\int_{-2}^{1}x dx
=\\left[\\frac{x^2}{2}\\right]_{-2}^{1}
=-\\frac32.
$$

El área es

$$
\\int_{-2}^{0}(-x)dx+\\int_0^1x dx
=2+\\frac12=\\frac52.
$$

**5. Teorema fundamental y cadena.**

$$
H'(x)=\\sqrt{1+(x^3)^2}\\cdot3x^2
=3x^2\\sqrt{1+x^6}.
$$

**6. Aditividad y orientación.**

$$
\\int_0^4f=5-2=3,
$$

luego

$$
\\int_4^0f=-3.
$$

**7. Valor medio.**

$$
f_{\\text{medio}}
=\\frac12\\int_0^2(3x+1)dx
=\\frac12\\left[\\frac{3x^2}{2}+x\\right]_0^2
=4.
$$

El valor queda entre \\(f(0)=1\\) y \\(f(2)=7\\), como debe ocurrir.

## Resumen práctico

La integral indefinida busca una familia de primitivas y termina con \\(+C\\). La integral definida mide una acumulación neta sobre un intervalo y termina en un número. El teorema fundamental permite calcular esa acumulación restando valores de una primitiva y explica por qué la constante desaparece.

Antes de operar, identifica qué objeto pide el problema. Después comprueba por derivación y, en integrales definidas, añade controles de signo, unidades, cotas y continuidad. Si necesitas trabajar estas diferencias sobre problemas de tu grado, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
`,U=`---
title: Integrales de funciones racionales y fracciones parciales
date: 2026-08-03
updated: 2026-08-03
description: Aprende a integrar cocientes de polinomios: división, factorización, fracciones parciales y ejercicios resueltos de dificultad progresiva.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: metodos-de-integracion-como-elegir,integracion-por-sustitucion-cambio-variable-ejercicios,integracion-por-partes-formula-ejercicios-resueltos
image: /favicon.svg
---

Para integrar una función racional \\(P(x)/Q(x)\\), primero se compara el grado de los polinomios. Si el cociente es impropio, se hace la división; después se factoriza el denominador y se descompone la fracción propia en términos simples. Esos términos producen logaritmos, potencias racionales y arcotangentes que sí tienen primitivas conocidas.

El punto difícil no suele ser integrar al final, sino construir correctamente la descomposición: distinguir factores lineales simples o repetidos, factores cuadráticos irreducibles y numeradores de la forma adecuada para cada caso.

## Qué es una función racional

Una función racional es un cociente

$$
R(x)=\\frac{P(x)}{Q(x)},
$$

donde \\(P\\) y \\(Q\\) son polinomios y \\(Q(x)\\neq0\\). La integral se estudia en intervalos que no contengan ceros del denominador.

La fracción es **propia** si

$$
\\deg P<\\deg Q,
$$

e **impropia** si \\(\\deg P\\geq\\deg Q\\). Toda fracción impropia puede escribirse mediante división euclídea como

$$
\\frac{P(x)}{Q(x)}=S(x)+\\frac{R(x)}{Q(x)},
$$

donde \\(S\\) es un polinomio y \\(\\deg R<\\deg Q\\). Solo la fracción propia se descompone en fracciones parciales.

Este método ocupa una rama específica dentro de la [guía para elegir métodos de integración](/blog/metodos-de-integracion-como-elegir/): se aplica a cocientes de polinomios, no a cualquier expresión que contenga una fracción.

## La idea de las fracciones parciales

Descomponer en fracciones parciales significa reemplazar un cociente complicado por una suma de cocientes sencillos con el mismo denominador común. Por ejemplo,

$$
\\frac{1}{(x-1)(x+2)}
=\\frac{1/3}{x-1}-\\frac{1/3}{x+2}.
$$

La igualdad puede comprobarse reuniendo el lado derecho:

$$
\\frac{1}{3(x-1)}-\\frac{1}{3(x+2)}
=\\frac{(x+2)-(x-1)}{3(x-1)(x+2)}
=\\frac{1}{(x-1)(x+2)}.
$$

Ahora la integral es inmediata:

$$
\\int\\frac{dx}{(x-1)(x+2)}
=\\frac13\\ln|x-1|-\\frac13\\ln|x+2|+C.
$$

El método funciona porque todo polinomio real se factoriza en factores lineales y cuadráticos irreducibles. A cada tipo de factor le corresponde una forma concreta en la descomposición.

## Árbol de decisión para una función racional

Antes de calcular coeficientes, sigue este orden:

1. Comprueba que numerador y denominador son polinomios.
2. Determina el dominio excluyendo los ceros reales de \\(Q\\).
3. Si \\(\\deg P\\geq\\deg Q\\), divide.
4. Factoriza completamente el denominador sobre los reales.
5. Escribe todos los términos parciales que exige cada factor, incluidos los repetidos.
6. Calcula los coeficientes por sustitución de raíces, comparación de coeficientes o una combinación de ambos.
7. Integra cada término.
8. Deriva la respuesta o reúne las fracciones para comprobarla.

No conviene empezar a integrar antes de completar la descomposición. Una plantilla incompleta puede producir una identidad imposible aunque las operaciones posteriores estén bien hechas.

## Plantillas según el denominador

| Factor de \\(Q(x)\\) | Términos que deben incluirse |
| --- | --- |
| Lineal simple \\((x-a)\\) | \\(\\dfrac{A}{x-a}\\) |
| Lineal repetido \\((x-a)^m\\) | \\(\\dfrac{A_1}{x-a}+\\dfrac{A_2}{(x-a)^2}+\\cdots+\\dfrac{A_m}{(x-a)^m}\\) |
| Cuadrático irreducible \\(x^2+px+q\\) | \\(\\dfrac{Ax+B}{x^2+px+q}\\) |
| Cuadrático irreducible repetido \\(q(x)^m\\) | \\(\\dfrac{A_1x+B_1}{q(x)}+\\cdots+\\dfrac{A_mx+B_m}{q(x)^m}\\) |

En un factor cuadrático el numerador debe tener grado menor que dos, por eso se usa \\(Ax+B\\), no una sola constante. Omitir el término lineal impide representar todos los numeradores posibles.

## Ejemplo 1 — dos factores lineales distintos

Calcula

$$
\\int\\frac{5x+1}{(x-2)(x+1)}\\,dx.
$$

**Qué nos piden.** Una primitiva de una fracción propia con dos polos simples.

**Cómo reconocer el método.** El denominador ya está factorizado en dos factores lineales distintos. Planteamos

$$
\\frac{5x+1}{(x-2)(x+1)}
=\\frac{A}{x-2}+\\frac{B}{x+1}.
$$

Multiplicamos por \\((x-2)(x+1)\\):

$$
5x+1=A(x+1)+B(x-2).
$$

Sustituir las raíces elimina un término cada vez. Para \\(x=2\\):

$$
11=3A \\quad\\Rightarrow\\quad A=\\frac{11}{3}.
$$

Para \\(x=-1\\):

$$
-4=-3B \\quad\\Rightarrow\\quad B=\\frac43.
$$

Integramos:

$$
\\boxed{
\\int\\frac{5x+1}{(x-2)(x+1)}\\,dx
=\\frac{11}{3}\\ln|x-2|+\\frac43\\ln|x+1|+C
}.
$$

**Comprobación.** Al derivar y reunir denominadores, el numerador es

$$
\\frac{11}{3}(x+1)+\\frac43(x-2)=5x+1.
$$

## Ejemplo 2 — primero hay que dividir

Calcula

$$
\\int\\frac{x^3+2x^2+1}{x^2-1}\\,dx.
$$

**Reconocimiento.** El grado del numerador es tres y el del denominador es dos. La fracción es impropia.

La división da

$$
\\frac{x^3+2x^2+1}{x^2-1}
=x+2+\\frac{x+3}{x^2-1}.
$$

Factorizamos \\(x^2-1=(x-1)(x+1)\\) y planteamos

$$
\\frac{x+3}{(x-1)(x+1)}
=\\frac{A}{x-1}+\\frac{B}{x+1}.
$$

De

$$
x+3=A(x+1)+B(x-1)
$$

obtenemos \\(A=2\\) al usar \\(x=1\\), y \\(B=-1\\) al usar \\(x=-1\\). Por tanto,

$$
\\begin{aligned}
\\int\\frac{x^3+2x^2+1}{x^2-1}\\,dx
&=\\int\\left(x+2+\\frac{2}{x-1}-\\frac{1}{x+1}\\right)dx\\\\
&=\\frac{x^2}{2}+2x+2\\ln|x-1|-\\ln|x+1|+C.
\\end{aligned}
$$

**Error frecuente.** Intentar una descomposición directa sin hacer la división. Las fracciones parciales representan la parte propia, no el cociente polinómico.

## Ejemplo 3 — factor lineal repetido

Calcula

$$
\\int\\frac{2x+3}{x(x-1)^2}\\,dx.
$$

Como \\(x-1\\) aparece al cuadrado, la plantilla debe incluir las dos potencias:

$$
\\frac{2x+3}{x(x-1)^2}
=\\frac{A}{x}+\\frac{B}{x-1}+\\frac{C}{(x-1)^2}.
$$

Multiplicamos por \\(x(x-1)^2\\):

$$
2x+3=A(x-1)^2+Bx(x-1)+Cx.
$$

Con \\(x=0\\), \\(A=3\\). Con \\(x=1\\), \\(5=C\\). Para obtener \\(B\\), usamos por ejemplo \\(x=2\\):

$$
7=3+2B+10 \\quad\\Rightarrow\\quad B=-3.
$$

Así,

$$
\\frac{2x+3}{x(x-1)^2}
=\\frac3x-\\frac3{x-1}+\\frac5{(x-1)^2}.
$$

Integramos recordando que \\((x-1)^{-2}\\) no produce un logaritmo:

$$
\\boxed{
3\\ln|x|-3\\ln|x-1|-\\frac5{x-1}+C
}.
$$

En efecto,

$$
\\int\\frac5{(x-1)^2}dx
=5\\int(x-1)^{-2}dx
=-\\frac5{x-1}.
$$

## Ejemplo 4 — cuadrático irreducible

Calcula

$$
\\int\\frac{3x+5}{x^2+2x+5}\\,dx.
$$

El denominador no tiene raíces reales, pues su discriminante es \\(4-20=-16\\). No se necesitan fracciones parciales, pero sí separar el numerador usando la derivada del denominador:

$$
3x+5=\\frac32(2x+2)+2.
$$

Entonces

$$
\\int\\frac{3x+5}{x^2+2x+5}dx
=\\frac32\\int\\frac{2x+2}{x^2+2x+5}dx
+2\\int\\frac{dx}{(x+1)^2+4}.
$$

La primera integral es logarítmica. Para la segunda usamos

$$
\\int\\frac{dx}{z^2+a^2}=\\frac1a\\arctan\\left(\\frac za\\right)+C.
$$

Resultado:

$$
\\boxed{
\\frac32\\ln(x^2+2x+5)
+\\arctan\\left(\\frac{x+1}{2}\\right)+C
}.
$$

**Comprobación.** La derivada de la arcotangente es

$$
\\frac{1/2}{1+(x+1)^2/4}
=\\frac{2}{(x+1)^2+4},
$$

que coincide con el resto de la separación.

## Ejemplo 5 — factor lineal y cuadrático

Calcula

$$
\\int\\frac{x^2+2x+3}{(x-1)(x^2+1)}\\,dx.
$$

La plantilla correcta es

$$
\\frac{x^2+2x+3}{(x-1)(x^2+1)}
=\\frac{A}{x-1}+\\frac{Bx+C}{x^2+1}.
$$

Multiplicamos por el denominador:

$$
x^2+2x+3=A(x^2+1)+(Bx+C)(x-1).
$$

Expandimos el lado derecho:

$$
(A+B)x^2+(C-B)x+(A-C).
$$

Comparando coeficientes:

$$
A+B=1,\\qquad C-B=2,\\qquad A-C=3.
$$

La solución es \\(A=3\\), \\(B=-2\\), \\(C=0\\). Así,

$$
\\frac{x^2+2x+3}{(x-1)(x^2+1)}
=\\frac3{x-1}-\\frac{2x}{x^2+1}.
$$

Integramos:

$$
\\boxed{3\\ln|x-1|-\\ln(x^2+1)+C}.
$$

Aunque la plantilla exigía \\(Bx+C\\), el cálculo puede dar \\(C=0\\). Lo incorrecto sería suponerlo antes de resolver el sistema.

## Ejemplo 6 — cuadrático irreducible con resto de arcotangente

Calcula

$$
\\int\\frac{x^2+1}{(x+1)(x^2+4)}\\,dx.
$$

Planteamos

$$
\\frac{x^2+1}{(x+1)(x^2+4)}
=\\frac{A}{x+1}+\\frac{Bx+C}{x^2+4}.
$$

La identidad de numeradores es

$$
x^2+1=A(x^2+4)+(Bx+C)(x+1).
$$

Al expandir y comparar:

$$
A+B=1,\\qquad B+C=0,\\qquad 4A+C=1.
$$

Se obtiene \\(A=2/5\\), \\(B=3/5\\), \\(C=-3/5\\). Por tanto,

$$
\\begin{aligned}
\\int\\frac{x^2+1}{(x+1)(x^2+4)}dx
&=\\frac25\\ln|x+1|
+\\frac35\\int\\frac{x}{x^2+4}dx
-\\frac35\\int\\frac{dx}{x^2+4}\\\\
&=\\frac25\\ln|x+1|
+\\frac3{10}\\ln(x^2+4)
-\\frac3{10}\\arctan\\left(\\frac x2\\right)+C.
\\end{aligned}
$$

El coeficiente de la arcotangente incluye \\(1/2\\), porque \\(a=2\\).

## Ejemplo 7 — integral definida con singularidades fuera del intervalo

En una [integral definida](/blog/integral-definida-e-indefinida-diferencias-ejemplos/) no basta con encontrar una primitiva: el intervalo debe quedar dentro del dominio o tratarse mediante los límites de una [integral impropia](/blog/integrales-impropias-convergencia-ejercicios/).

Calcula

$$
\\int_0^1\\frac{dx}{(x+1)(x+2)}.
$$

Las singularidades \\(x=-1\\) y \\(x=-2\\) quedan fuera de \\([0,1]\\), así que la integral es propia. Descomponemos:

$$
\\frac1{(x+1)(x+2)}=\\frac1{x+1}-\\frac1{x+2}.
$$

Entonces

$$
\\begin{aligned}
\\int_0^1\\frac{dx}{(x+1)(x+2)}
&=\\left[\\ln(x+1)-\\ln(x+2)\\right]_0^1\\\\
&=(\\ln2-\\ln3)-(\\ln1-\\ln2)\\\\
&=\\ln\\left(\\frac43\\right).
\\end{aligned}
$$

**Interpretación.** El integrando es positivo en todo el intervalo, y \\(\\ln(4/3)>0\\). Además, el integrando está entre \\(1/6\\) y \\(1/2\\), por lo que el resultado debe quedar entre esos valores; \\(\\ln(4/3)\\approx0{,}288\\) es coherente.

## Ejemplo 8 — una singularidad dentro del intervalo

Considera

$$
\\int_0^2\\frac{dx}{x-1}.
$$

No podemos aplicar directamente

$$
\\left[\\ln|x-1|\\right]_0^2=0,
$$

porque el integrando no está definido en \\(x=1\\). La integral es impropia y debe separarse:

$$
\\int_0^1\\frac{dx}{x-1}+\\int_1^2\\frac{dx}{x-1}.
$$

Cada término se define mediante un límite, y ambos divergen. La cancelación simétrica que daría cero corresponde al valor principal de Cauchy, no a la convergencia de la integral impropia ordinaria.

Este control del dominio es imprescindible: una primitiva algebraicamente correcta no garantiza que una integral definida exista.

## Tres formas de calcular los coeficientes

### Sustitución de raíces

Es la opción más rápida para factores lineales distintos. Tras eliminar denominadores, sustituir \\(x=a\\) anula todos los términos salvo el asociado a \\(x-a\\).

### Comparación de coeficientes

Se expanden ambos lados y se igualan los coeficientes de cada potencia de \\(x\\). Es necesaria cuando hay cuadráticos irreducibles y útil como comprobación general.

### Valores convenientes

Puede sustituirse cualquier conjunto suficiente de valores que produzca un sistema sencillo. Es válido, pero hay que obtener tantas ecuaciones independientes como incógnitas.

La estrategia eficiente combina métodos: raíces para determinar coeficientes evidentes y comparación o un valor adicional para los restantes.

## Factorizar el denominador sin perder casos

La factorización se hace sobre los números reales. Conviene seguir una secuencia estable: extraer factores comunes, buscar raíces racionales, aplicar identidades notables y resolver los factores cuadráticos restantes.

Por ejemplo,

$$
x^3-x=x(x^2-1)=x(x-1)(x+1),
$$

mientras que

$$
x^3+x=x(x^2+1)
$$

contiene un cuadrático irreducible. Las plantillas son distintas:

$$
\\frac{P(x)}{x(x-1)(x+1)}
=\\frac A x+\\frac B{x-1}+\\frac C{x+1},
$$

pero

$$
\\frac{P(x)}{x(x^2+1)}
=\\frac A x+\\frac{Bx+C}{x^2+1}.
$$

No se introducen factores complejos en una integral real elemental. El factor \\(x^2+1\\) se conserva y conduce a logaritmos o arcotangentes.

También hay que mantener las multiplicidades. Si

$$
Q(x)=(x-2)^2(x^2+1),
$$

la plantilla completa es

$$
\\frac{A}{x-2}+\\frac{B}{(x-2)^2}
+\\frac{Cx+D}{x^2+1}.
$$

Contar incógnitas sirve como control. Aquí hay cuatro coeficientes, tantos como grados de libertad tiene un numerador general de grado menor que cuatro.

## Ejemplo 9 — cuadrático irreducible repetido

Calcula

$$
\\int\\frac{dx}{(x^2+1)^2}.
$$

Una vía eficaz consiste en fabricar la derivada de \\(x/(x^2+1)\\):

$$
\\frac{d}{dx}\\left(\\frac{x}{x^2+1}\\right)
=\\frac{1-x^2}{(x^2+1)^2}.
$$

Buscamos \\(A,B\\) tales que

$$
\\frac1{(x^2+1)^2}
=A\\frac{1-x^2}{(x^2+1)^2}+\\frac{B}{x^2+1}.
$$

El numerador del lado derecho es

$$
A(1-x^2)+B(x^2+1)=(A+B)+(B-A)x^2.
$$

Necesitamos \\(A+B=1\\) y \\(B-A=0\\), luego \\(A=B=1/2\\). Así,

$$
\\boxed{
\\int\\frac{dx}{(x^2+1)^2}
=\\frac{x}{2(x^2+1)}+\\frac12\\arctan x+C
}.
$$

**Comprobación.** La derivada del primer sumando aporta \\((1-x^2)/[2(x^2+1)^2]\\), y la del segundo \\((x^2+1)/[2(x^2+1)^2]\\). La suma es el integrando.

## Ejemplo 10 — división y factor repetido

Calcula

$$
\\int\\frac{x^3+x^2+1}{x(x-1)^2}dx.
$$

Numerador y denominador tienen grado tres. Como \\(x(x-1)^2=x^3-2x^2+x\\), la división produce

$$
\\frac{x^3+x^2+1}{x(x-1)^2}
=1+\\frac{3x^2-x+1}{x(x-1)^2}.
$$

Planteamos

$$
\\frac{3x^2-x+1}{x(x-1)^2}
=\\frac A x+\\frac B{x-1}+\\frac C{(x-1)^2}.
$$

La identidad es

$$
3x^2-x+1=A(x-1)^2+Bx(x-1)+Cx.
$$

Con \\(x=0\\), \\(A=1\\). Con \\(x=1\\), \\(C=3\\). Comparando el coeficiente de \\(x^2\\), \\(A+B=3\\), luego \\(B=2\\). Por tanto,

$$
\\frac{x^3+x^2+1}{x(x-1)^2}
=1+\\frac1x+\\frac2{x-1}+\\frac3{(x-1)^2}.
$$

Finalmente,

$$
\\boxed{x+\\ln|x|+2\\ln|x-1|-\\frac3{x-1}+C}.
$$

**Comprobación estructural.** Hay un término lineal por la división, logaritmos por los polos simples y un término racional por el polo doble. Esa correspondencia permite detectar si falta una parte.

## Unicidad y formas equivalentes

Una vez fijadas la factorización y la plantilla, los coeficientes son únicos. La primitiva, sin embargo, puede escribirse de varias formas. Por ejemplo,

$$
\\ln|x-1|-\\ln|x+1|
=\\ln\\left|\\frac{x-1}{x+1}\\right|.
$$

Ambas expresiones tienen la misma derivada en cada intervalo del dominio. Para comparar respuestas, deriva o usa propiedades logarítmicas sin perder los valores absolutos.

## Por qué los polos determinan la plantilla

La forma de cada término parcial reproduce el comportamiento local del cociente cerca de un cero del denominador. Si $Q(a)=0$ y la raíz es simple, la función se comporta cerca de $a$ como una constante dividida por $x-a$. Por eso aparece $A/(x-a)$ y su primitiva contiene $A\\ln|x-a|$. Si la raíz tiene multiplicidad dos, también puede existir un término proporcional a $(x-a)^{-2}$, cuya primitiva es racional.

Para una raíz simple puede calcularse directamente el coeficiente asociado:

$$
A=\\lim_{x\\to a}(x-a)\\frac{P(x)}{Q(x)}.
$$

Si $Q(x)=(x-a)S(x)$ y $S(a)\\neq0$, entonces

$$
A=\\frac{P(a)}{S(a)}=\\frac{P(a)}{Q'(a)}.
$$

Esta es la justificación del método de cubrir o sustituir la raíz. No debe aplicarse sin más a raíces repetidas, porque al multiplicar por un solo factor todavía queda una singularidad.

### Ejemplo 11 — coeficiente mediante el límite

En

$$
\\frac{2x+1}{(x-3)(x^2+1)},
$$

el coeficiente del término $1/(x-3)$ es

$$
A=\\lim_{x\\to3}\\frac{2x+1}{x^2+1}=\\frac7{10}.
$$

Todavía hacen falta los coeficientes de $(Bx+C)/(x^2+1)$, que se obtienen comparando coeficientes. El límite acelera una parte del sistema, pero no sustituye la plantilla completa.

## Ejemplo 12 — ejercicio tipo examen con parámetro

Determina $k$ para que

$$
\\int\\frac{kx+4}{(x-1)(x+2)}dx
$$

no contenga un término $\\ln|x+2|$, y calcula entonces la primitiva.

Planteamos

$$
\\frac{kx+4}{(x-1)(x+2)}
=\\frac A{x-1}+\\frac B{x+2}.
$$

La ausencia del logaritmo exige $B=0$. Tras eliminar denominadores,

$$
kx+4=A(x+2)+B(x-1).
$$

Con $x=-2$ obtenemos $-2k+4=-3B$. Como $B=0$, resulta $k=2$. Para ese valor,

$$
\\frac{2x+4}{(x-1)(x+2)}=\\frac2{x-1}
$$

en los puntos del dominio original. Por tanto,

$$
\\boxed{2\\ln|x-1|+C}.
$$

Aunque el factor $x+2$ se cancele, la función original no está definida en $x=-2$. La primitiva se entiende en intervalos contenidos en el dominio original.

## Errores frecuentes

- **No dividir una fracción impropia.** La plantilla se aplica después de la división.
- **Factorizar de forma incompleta.** \\(x^2-1\\) debe escribirse como \\((x-1)(x+1)\\).
- **Omitir potencias repetidas.** Para \\((x-a)^3\\) hacen falta denominadores de grados uno, dos y tres.
- **Usar una constante sobre un cuadrático.** El numerador general es \\(Ax+B\\).
- **Perder el valor absoluto.** Los factores lineales producen \\(\\ln|x-a|\\).
- **Convertir toda potencia en logaritmo.** Solo \\((x-a)^{-1}\\) integra como logaritmo; exponentes menores usan la regla de potencias.
- **Ignorar el dominio en integrales definidas.** Una singularidad interior obliga a estudiar límites.
- **Resolver coeficientes sin verificar.** Sustituye la descomposición en un valor ordinario o reúne fracciones.

## Cómo comprobar el resultado

Hay dos comprobaciones complementarias:

1. Antes de integrar, reúne las fracciones parciales y verifica que recuperas \\(P(x)/Q(x)\\).
2. Después, deriva la primitiva y simplifica.

También conviene revisar el comportamiento cerca de los polos. Un término \\(A/(x-a)\\) debe corresponder a un logaritmo \\(A\\ln|x-a|\\); un término \\(A/(x-a)^2\\) produce \\(-A/(x-a)\\). Si la respuesta no refleja las singularidades del integrando, probablemente falta un término.

## Ejercicios propuestos

1. \\(\\displaystyle \\int\\frac{7x-1}{(x-1)(x+3)}dx\\)
2. \\(\\displaystyle \\int\\frac{x^2+2}{x+1}dx\\)
3. \\(\\displaystyle \\int\\frac{dx}{x(x+1)^2}\\)
4. \\(\\displaystyle \\int\\frac{2x+4}{x^2+4x+8}dx\\)
5. \\(\\displaystyle \\int\\frac{x+2}{(x-2)(x^2+1)}dx\\)
6. \\(\\displaystyle \\int_0^1\\frac{2x+3}{(x+1)(x+2)}dx\\)

## Soluciones de los ejercicios

**1. Factores lineales.** De

$$
\\frac{7x-1}{(x-1)(x+3)}=\\frac{A}{x-1}+\\frac{B}{x+3}
$$

se obtiene \\(A=3/2\\) y \\(B=11/2\\). Por tanto,

$$
\\frac32\\ln|x-1|+\\frac{11}{2}\\ln|x+3|+C.
$$

**2. División.** Como

$$
\\frac{x^2+2}{x+1}=x-1+\\frac3{x+1},
$$

la primitiva es

$$
\\frac{x^2}{2}-x+3\\ln|x+1|+C.
$$

**3. Factor repetido.** La descomposición es

$$
\\frac1{x(x+1)^2}=\\frac1x-\\frac1{x+1}-\\frac1{(x+1)^2}.
$$

Así,

$$
\\ln|x|-\\ln|x+1|+\\frac1{x+1}+C.
$$

**4. Derivada del denominador.** Como \\(2x+4\\) es la derivada de \\(x^2+4x+8\\),

$$
\\ln(x^2+4x+8)+C.
$$

El argumento es siempre positivo porque \\((x+2)^2+4>0\\).

**5. Lineal y cuadrático.** La descomposición resulta

$$
\\frac{x+2}{(x-2)(x^2+1)}
=\\frac{4/5}{x-2}+\\frac{-4x/5+1/5}{x^2+1}.
$$

Por tanto,

$$
\\frac45\\ln|x-2|-\\frac25\\ln(x^2+1)+\\frac15\\arctan x+C.
$$

**6. Integral definida.** Primero,

$$
\\frac{2x+3}{(x+1)(x+2)}=\\frac1{x+1}+\\frac1{x+2}.
$$

Luego,

$$
\\int_0^1\\frac{2x+3}{(x+1)(x+2)}dx
=\\left[\\ln(x+1)+\\ln(x+2)\\right]_0^1
=\\ln3.
$$

## Resumen operativo

Una integral racional se resuelve en tres capas: división si la fracción es impropia, factorización completa del denominador y descomposición con la plantilla adecuada. Los factores lineales generan logaritmos o potencias; los cuadráticos irreducibles exigen separar una derivada logarítmica y un resto de arcotangente.

El método termina cuando cada sumando encaja en una primitiva conocida. La comprobación más segura se hace antes y después de integrar: primero reuniendo la descomposición y después derivando el resultado.

Si necesitas aplicar estas plantillas a ejercicios de tu asignatura y corregir la factorización o el sistema de coeficientes, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
`,D=`---
title: Integrales impropias: convergencia y ejercicios resueltos
date: 2026-08-15
updated: 2026-08-15
description: Aprende a clasificar integrales impropias, plantear los límites correctos y decidir su convergencia con criterios y ejercicios resueltos.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: teorema-fundamental-calculo-ejemplos-ejercicios,integrales-funciones-racionales-fracciones-parciales,metodos-de-integracion-como-elegir
image: /favicon.svg
---

Una integral impropia aparece cuando el intervalo es infinito o cuando el integrando se hace infinito en algún punto del intervalo. No se calcula sustituyendo $\\infty$ en una primitiva: primero se reemplaza el problema por uno o varios límites y después se decide si esos límites existen y son finitos.

Si el límite es finito, la integral **converge**. Si no existe o es infinito, **diverge**.

## Por qué no es una integral definida ordinaria

El [teorema fundamental del cálculo](/blog/teorema-fundamental-calculo-ejemplos-ejercicios/) se aplica directamente a funciones continuas en intervalos cerrados y acotados. En una integral impropia falla al menos una de esas condiciones:

- el intervalo no está acotado, como $[1,\\infty)$;
- la función no está acotada cerca de un extremo;
- existe una singularidad dentro del intervalo.

La notación

$$
\\int_1^\\infty f(x)dx
$$

es una abreviatura de un límite. El símbolo $\\infty$ no es un número real ni un extremo en el que podamos evaluar una función.

## Tipo I: intervalos infinitos

Para una función continua en $[a,\\infty)$ se define

$$
\\int_a^\\infty f(x)dx
=\\lim_{b\\to\\infty}\\int_a^b f(x)dx.
$$

La integral converge si el límite existe y es finito. De forma análoga,

$$
\\int_{-\\infty}^b f(x)dx
=\\lim_{a\\to-\\infty}\\int_a^b f(x)dx.
$$

Si ambos extremos son infinitos, se elige un punto real $c$ y se separa:

$$
\\int_{-\\infty}^{\\infty}f(x)dx
=\\int_{-\\infty}^{c}f(x)dx
+\\int_c^{\\infty}f(x)dx.
$$

Las dos integrales deben converger por separado. No está permitido imponer límites simétricos y confiar en que dos divergencias se cancelen.

### Ejemplo 1 — potencia convergente en infinito

Estudia

$$
\\int_1^\\infty\\frac1{x^2}dx.
$$

Sustituimos el extremo infinito por $b$:

$$
\\begin{aligned}
\\int_1^\\infty\\frac1{x^2}dx
&=\\lim_{b\\to\\infty}\\int_1^b x^{-2}dx\\\\
&=\\lim_{b\\to\\infty}\\left[-\\frac1x\\right]_1^b\\\\
&=\\lim_{b\\to\\infty}\\left(1-\\frac1b\\right)=1.
\\end{aligned}
$$

La integral converge y su valor es $1$. Aunque el intervalo tenga longitud infinita, la altura decrece con suficiente rapidez.

### Ejemplo 2 — la integral armónica diverge

Considera

$$
\\int_1^\\infty\\frac1x dx.
$$

El planteamiento correcto es

$$
\\lim_{b\\to\\infty}[\\ln x]_1^b
=\\lim_{b\\to\\infty}\\ln b.
$$

El límite es $+\\infty$, luego

$$
\\boxed{\\int_1^\\infty\\frac1x dx\\text{ diverge}.}
$$

Que $1/x$ tienda a cero no basta. La función decrece demasiado despacio y la acumulación sigue creciendo sin cota.

### Ejemplo 3 — decrecimiento exponencial

Calcula

$$
\\int_0^\\infty e^{-3x}dx.
$$

$$
\\begin{aligned}
\\int_0^\\infty e^{-3x}dx
&=\\lim_{b\\to\\infty}\\left[-\\frac13e^{-3x}\\right]_0^b\\\\
&=\\lim_{b\\to\\infty}\\left(\\frac13-\\frac13e^{-3b}\\right)\\\\
&=\\frac13.
\\end{aligned}
$$

La exponencial tiende a cero más rápido que cualquier potencia inversa, por lo que muchas integrales con decaimiento exponencial convergen.

## Tipo II: integrando no acotado

Si $f$ es continua en $(a,b]$ pero se hace infinita al acercarse a $a$ por la derecha, definimos

$$
\\int_a^b f(x)dx
=\\lim_{c\\to a^+}\\int_c^b f(x)dx.
$$

Si la singularidad está en el extremo derecho,

$$
\\int_a^b f(x)dx
=\\lim_{c\\to b^-}\\int_a^c f(x)dx.
$$

Una singularidad interior $c\\in(a,b)$ obliga a separar la integral:

$$
\\int_a^b f(x)dx
=\\int_a^c f(x)dx+\\int_c^b f(x)dx.
$$

Cada término se define con su propio límite lateral y ambos deben converger.

### Ejemplo 4 — singularidad integrable en un extremo

Estudia

$$
\\int_0^1\\frac1{\\sqrt{x}}dx.
$$

La función no está definida en $x=0$. Planteamos

$$
\\begin{aligned}
\\int_0^1x^{-1/2}dx
&=\\lim_{c\\to0^+}\\int_c^1x^{-1/2}dx\\\\
&=\\lim_{c\\to0^+}[2\\sqrt{x}]_c^1\\\\
&=\\lim_{c\\to0^+}(2-2\\sqrt c)=2.
\\end{aligned}
$$

La altura se hace infinita, pero el área acumulada cerca del cero sigue siendo finita.

### Ejemplo 5 — singularidad demasiado fuerte

Para

$$
\\int_0^1\\frac1{x^{3/2}}dx
$$

obtenemos

$$
\\begin{aligned}
\\lim_{c\\to0^+}\\int_c^1x^{-3/2}dx
&=\\lim_{c\\to0^+}[-2x^{-1/2}]_c^1\\\\
&=\\lim_{c\\to0^+}\\left(-2+\\frac2{\\sqrt c}\\right)=+\\infty.
\\end{aligned}
$$

Por tanto, diverge. Comparar este resultado con el ejemplo anterior muestra que no toda asíntota vertical produce el mismo comportamiento.

### Ejemplo 6 — singularidad interior

Estudia

$$
\\int_0^2\\frac{dx}{(x-1)^2}.
$$

Hay una singularidad en $x=1$. Debemos separar:

$$
\\int_0^1\\frac{dx}{(x-1)^2}
+\\int_1^2\\frac{dx}{(x-1)^2}.
$$

Ya en el lado izquierdo,

$$
\\begin{aligned}
\\lim_{c\\to1^-}\\int_0^c(x-1)^{-2}dx
&=\\lim_{c\\to1^-}\\left[-\\frac1{x-1}\\right]_0^c\\\\
&=\\lim_{c\\to1^-}\\left(-\\frac1{c-1}-1\\right)=+\\infty.
\\end{aligned}
$$

La integral diverge. No hace falta calcular el otro lado para decidirlo, aunque también diverge.

## Integrales p: los dos modelos que hay que dominar

Las potencias permiten clasificar muchas integrales por comparación.

### En infinito

$$
\\int_1^\\infty\\frac1{x^p}dx
\\begin{cases}
\\text{converge},&p>1,\\\\
\\text{diverge},&p\\leq1.
\\end{cases}
$$

Si $p>1$, su valor es

$$
\\int_1^\\infty x^{-p}dx=\\frac1{p-1}.
$$

### Cerca de cero

$$
\\int_0^1\\frac1{x^p}dx
\\begin{cases}
\\text{converge},&p<1,\\\\
\\text{diverge},&p\\geq1.
\\end{cases}
$$

Si $p<1$, su valor es $1/(1-p)$. Los criterios parecen opuestos porque describen zonas distintas: en infinito interesa que la función decrezca rápido; cerca de cero interesa que la singularidad no crezca demasiado.

| Modelo | Converge cuando | Caso frontera |
|---|---:|---|
| $\\int_1^\\infty x^{-p}dx$ | $p>1$ | $p=1$ diverge |
| $\\int_0^1 x^{-p}dx$ | $p<1$ | $p=1$ diverge |

## Integrales con dos causas de impropiedad

Una misma integral puede tener extremos infinitos y singularidades. Hay que cortar en todos los puntos problemáticos.

### Ejemplo 7 — toda la recta real

Calcula

$$
\\int_{-\\infty}^{\\infty}e^{-|x|}dx.
$$

El valor absoluto cambia de fórmula en cero y ambos extremos son infinitos:

$$
\\int_{-\\infty}^{0}e^x dx
+\\int_0^\\infty e^{-x}dx.
$$

Cada integral converge:

$$
\\int_{-\\infty}^{0}e^x dx=1,
\\qquad
\\int_0^\\infty e^{-x}dx=1.
$$

Por tanto,

$$
\\boxed{\\int_{-\\infty}^{\\infty}e^{-|x|}dx=2}.
$$

La simetría permite anticipar que ambas contribuciones son iguales, pero la definición exige que existan por separado.

### Ejemplo 8 — singularidad interior integrable

Calcula

$$
\\int_0^2\\frac{dx}{\\sqrt{|x-1|}}.
$$

La singularidad está en $x=1$. Separamos y usamos simetría:

$$
\\begin{aligned}
\\int_0^2\\frac{dx}{\\sqrt{|x-1|}}
&=\\int_0^1\\frac{dx}{\\sqrt{1-x}}
+\\int_1^2\\frac{dx}{\\sqrt{x-1}}\\\\
&=2+2=4.
\\end{aligned}
$$

Ambos límites laterales son finitos, así que la integral converge pese a que el integrando sea no acotado en el centro.

## Criterio de comparación directa

Supongamos que $0\\leq f(x)\\leq g(x)$ para $x$ suficientemente grande.

- Si $\\int_a^\\infty g(x)dx$ converge, entonces $\\int_a^\\infty f(x)dx$ también converge.
- Si $\\int_a^\\infty f(x)dx$ diverge, entonces $\\int_a^\\infty g(x)dx$ también diverge.

La dirección importa. Una función menor que una función divergente puede converger; una función mayor que una convergente puede divergir. Es necesario comparar en el sentido que transmite información.

### Ejemplo 9 — demostrar convergencia sin integrar

Estudia

$$
\\int_1^\\infty\\frac{dx}{x^2+3}.
$$

Para $x\\geq1$,

$$
0<\\frac1{x^2+3}\\leq\\frac1{x^2}.
$$

Como $\\int_1^\\infty1/x^2\\,dx$ converge, la integral propuesta también converge. No era necesario calcular su valor exacto.

## Criterio de comparación por el límite

Sean $f$ y $g$ positivas para $x$ suficientemente grande. Si

$$
\\lim_{x\\to\\infty}\\frac{f(x)}{g(x)}=L,
\\qquad 0<L<\\infty,
$$

entonces $\\int f$ y $\\int g$ tienen el mismo carácter: ambas convergen o ambas divergen.

### Ejemplo 10 — cociente de polinomios

Estudia

$$
\\int_1^\\infty\\frac{2x+1}{x^3+1}dx.
$$

Para valores grandes, el cociente se comporta como $2/x^2$. Elegimos $g(x)=1/x^2$ y calculamos

$$
\\lim_{x\\to\\infty}
\\frac{(2x+1)/(x^3+1)}{1/x^2}
=\\lim_{x\\to\\infty}\\frac{2x^3+x^2}{x^3+1}=2.
$$

Como el límite es positivo y finito, y la integral de $1/x^2$ converge, la integral original converge.

En cocientes racionales puede usarse como regla preliminar: si el denominador tiene al menos dos grados más que el numerador, la cola suele compararse con $1/x^p$ para algún $p>1$. La descomposición exacta se estudia en [integrales de funciones racionales](/blog/integrales-funciones-racionales-fracciones-parciales/).

## Comparación cerca de una singularidad finita

Los mismos criterios se aplican cuando $x\\to a^+$ o $x\\to a^-$. En lugar de comparar con $1/x^p$ en infinito, se compara con

$$
\\frac1{|x-a|^p}.
$$

Cerca de $a$, la integral converge si la potencia singular tiene exponente $p<1$ y diverge si $p\\geq1$.

### Ejemplo 11 — singularidad oculta por una función trigonométrica

Estudia

$$
\\int_0^{\\pi/2}\\frac{dx}{\\sqrt{\\sin x}}.
$$

La única singularidad está en $x=0$. Como

$$
\\lim_{x\\to0^+}\\frac{1/\\sqrt{\\sin x}}{1/\\sqrt{x}}
=\\lim_{x\\to0^+}\\sqrt{\\frac{x}{\\sin x}}=1,
$$

ambas funciones tienen el mismo comportamiento local. La integral modelo

$$
\\int_0^1x^{-1/2}dx
$$

converge; por comparación límite, la integral propuesta también converge. No necesitamos encontrar una primitiva de $1/\\sqrt{\\sin x}$.

### Ejemplo 12 — el logaritmo no domina una potencia crítica

Estudia

$$
\\int_0^{1/2}|\\ln x|\\,dx.
$$

El integrando crece al acercarse a cero, pero mucho más despacio que $x^{-1/2}$. De hecho,

$$
\\lim_{x\\to0^+}\\frac{|\\ln x|}{x^{-1/2}}
=\\lim_{x\\to0^+}\\sqrt{x}|\\ln x|=0.
$$

Por tanto, para $x$ suficientemente pequeño, $|\\ln x|\\leq x^{-1/2}$. Como el modelo converge cerca de cero, también lo hace la integral del logaritmo. La altura infinita no basta para concluir divergencia; importa la rapidez del crecimiento.

## Criterio de Cauchy y significado de converger

La convergencia de $\\int_a^\\infty f(x)dx$ significa que las contribuciones lejanas pueden hacerse tan pequeñas como queramos. Formalmente, para todo $\\varepsilon>0$ existe $M$ tal que, si $v>u>M$,

$$
\\left|\\int_u^v f(x)dx\\right|<\\varepsilon.
$$

Este criterio no exige conocer de antemano el valor de la integral. Explica por qué una cola convergente deja de añadir cantidades apreciables y por qué una cola como la de $1/x$ nunca se estabiliza por completo.

Para funciones no negativas, las integrales parciales

$$
F(b)=\\int_a^b f(x)dx
$$

crecen con $b$. En ese caso converger equivale a que $F(b)$ permanezca acotada. Si crece sin cota, la integral diverge a $+\\infty$.

## Estimar el error de truncar una integral

En cálculo numérico se reemplaza a menudo $\\int_a^\\infty f$ por $\\int_a^B f$. El error es la cola

$$
R_B=\\int_B^\\infty f(x)dx.
$$

Una comparación proporciona una cota útil. Si para $x\\geq B$ se cumple

$$
0\\leq f(x)\\leq\\frac{C}{x^p},
\\qquad p>1,
$$

entonces

$$
0\\leq R_B\\leq\\frac{C}{(p-1)B^{p-1}}.
$$

### Ejemplo 13 — elegir un punto de corte

Queremos aproximar

$$
\\int_1^\\infty\\frac{dx}{x^2+1}
$$

integrando solo hasta $B$. Como $1/(x^2+1)\\leq1/x^2$,

$$
0\\leq R_B\\leq\\int_B^\\infty\\frac{dx}{x^2}=\\frac1B.
$$

Para garantizar un error menor o igual que $0{,}01$, basta elegir $B\\geq100$. La cota puede no ser óptima, pero certifica la precisión sin conocer el error exacto.

## Convergencia absoluta y condicional

Una integral $\\int_a^\\infty f(x)dx$ converge absolutamente si

$$
\\int_a^\\infty|f(x)|dx
$$

converge. La convergencia absoluta implica convergencia ordinaria.

Algunas funciones oscilantes convergen por cancelación sin hacerlo absolutamente. Un ejemplo clásico es

$$
\\int_1^\\infty\\frac{\\sin x}{x}dx,
$$

que converge condicionalmente, mientras que la integral de $|\\sin x|/x$ diverge. En cambio,

$$
\\int_1^\\infty\\sin x\\,dx
$$

diverge porque

$$
\\int_1^b\\sin x\\,dx=\\cos1-\\cos b
$$

no tiene límite cuando $b\\to\\infty$. Oscilar no garantiza convergencia: también debe disminuir suficientemente la contribución de las oscilaciones.

### Por qué la convergencia absoluta es más fuerte

Para cualquier tramo finito $[a,b]$ se cumple

$$
\\left|\\int_a^b f(x)dx\\right|
\\leq\\int_a^b|f(x)|dx.
$$

Si la integral de $|f|$ tiene una cola arbitrariamente pequeña, la desigualdad obliga a que la cola de $f$ también sea pequeña. Por eso la convergencia absoluta implica la ordinaria.

### Ejemplo 10 bis — convergencia absoluta por comparación

Estudia

$$
\\int_1^\\infty\\frac{\\cos x}{x^2}dx.
$$

No necesitamos una primitiva. Como $|\\cos x|\\leq1$,

$$
0\\leq\\left|\\frac{\\cos x}{x^2}\\right|
\\leq\\frac1{x^2}.
$$

La integral de $1/x^2$ converge, luego

$$
\\int_1^\\infty\\left|\\frac{\\cos x}{x^2}\\right|dx
$$

converge por comparación. La integral original converge absolutamente y, por tanto, converge.

La ventaja de introducir el valor absoluto es que elimina las cancelaciones: demostramos que incluso la suma de todas las magnitudes es finita. En una integral condicional, en cambio, la cancelación entre zonas positivas y negativas es indispensable.

## Valor principal de Cauchy no es convergencia ordinaria

Para

$$
\\int_{-1}^{1}\\frac1x dx,
$$

el límite simétrico

$$
\\lim_{\\varepsilon\\to0^+}
\\left(\\int_{-1}^{-\\varepsilon}\\frac1x dx
+\\int_{\\varepsilon}^{1}\\frac1x dx\\right)=0
$$

por cancelación. Sin embargo, cada integral lateral diverge. La integral impropia ordinaria no existe; el valor $0$ es el **valor principal de Cauchy**, un concepto distinto que debe nombrarse explícitamente.

## Sustitución y partes en integrales impropias

Las técnicas algebraicas siguen siendo válidas, pero primero se aplican en un intervalo propio y después se toma el límite. El cambio de variable debe transformar también el extremo impropio.

### Ejemplo 14 — sustitución con extremo infinito

Calcula

$$
\\int_0^\\infty xe^{-x^2}dx.
$$

Trabajamos primero hasta $b$ y usamos $u=x^2$, $du=2x\\,dx$:

$$
\\begin{aligned}
\\int_0^\\infty xe^{-x^2}dx
&=\\lim_{b\\to\\infty}\\frac12\\int_0^{b^2}e^{-u}du\\\\
&=\\frac12\\lim_{b\\to\\infty}(1-e^{-b^2})\\\\
&=\\boxed{\\frac12}.
\\end{aligned}
$$

Escribir directamente un límite superior $\\infty^2$ no aporta rigor; la transformación se justifica para $b$ finito.

### Ejemplo 15 — integración por partes y convergencia

Calcula

$$
\\int_0^\\infty xe^{-x}dx.
$$

Para $b>0$, integramos por partes con $u=x$ y $dv=e^{-x}dx$:

$$
\\int_0^bxe^{-x}dx
=\\left[-xe^{-x}\\right]_0^b+\\int_0^be^{-x}dx
=-be^{-b}+1-e^{-b}.
$$

Como $be^{-b}\\to0$ y $e^{-b}\\to0$,

$$
\\boxed{\\int_0^\\infty xe^{-x}dx=1}.
$$

La fórmula de partes transforma la integral, pero la convergencia se concluye solo después de evaluar los términos límite.

## Aplicación: normalizar una densidad

Una función no negativa $f$ puede ser una densidad de probabilidad en $[0,\\infty)$ si su integral total es $1$. Considera

$$
f(x)=Ce^{-2x},\\qquad x\\geq0.
$$

La condición de normalización exige

$$
1=\\int_0^\\infty Ce^{-2x}dx
=C\\cdot\\frac12.
$$

Por tanto, $C=2$. Una vez normalizada, la probabilidad de que la variable supere $a\\geq0$ es

$$
\\int_a^\\infty2e^{-2x}dx=e^{-2a}.
$$

La convergencia no es aquí un detalle técnico: garantiza que la masa total de probabilidad sea finita y pueda ajustarse a uno.

## Un problema con dos comportamientos distintos

Estudia y calcula

$$
\\int_0^\\infty\\frac{dx}{\\sqrt{x}(1+x)}.
$$

Hay que analizar dos zonas. Cerca de cero, la función se comporta como $x^{-1/2}$, que es integrable. En infinito,

$$
\\frac1{\\sqrt{x}(1+x)}\\sim\\frac1{x^{3/2}},
$$

cuya cola también converge. Esto demuestra que ambas causas de impropiedad son compatibles con la convergencia.

Para calcular el valor hacemos $x=t^2$, $dx=2t\\,dt$. Cuando $x$ recorre $(0,\\infty)$, también lo hace $t$:

$$
\\begin{aligned}
\\int_0^\\infty\\frac{dx}{\\sqrt{x}(1+x)}
&=\\int_0^\\infty\\frac{2t}{t(1+t^2)}dt\\\\
&=2[\\arctan t]_0^\\infty\\\\
&=\\boxed{\\pi}.
\\end{aligned}
$$

El análisis previo evita aceptar una transformación formal sin saber si los extremos problemáticos producen límites finitos.

## Cómo elegir entre cálculo exacto y criterios

No toda pregunta de convergencia exige encontrar una primitiva.

| Estructura | Primera opción | Objetivo |
|---|---|---|
| Potencia pura | Integral $p$ | Clasificar por el exponente |
| Función positiva parecida a una potencia | Comparación límite | Decidir sin integrar |
| Desigualdad sencilla | Comparación directa | Acotar por un modelo conocido |
| Exponencial por polinomio | Sustitución o partes | Calcular y justificar el límite |
| Singularidades y extremos infinitos | Separar todos los puntos | Exigir convergencia en cada zona |
| Función oscilante | Convergencia absoluta o criterio específico | Controlar cancelaciones |

Si el enunciado pide solo «estudia la convergencia», una comparación rigurosa suele ser mejor que una primitiva complicada. Si pide además el valor, primero se justifica que el objeto existe y después se aplica la técnica de integración adecuada.

## Procedimiento completo

1. Localiza extremos infinitos, ceros del denominador, logaritmos fuera de dominio y raíces problemáticas.
2. Divide el intervalo en cada punto singular.
3. Sustituye cada extremo impropio por una variable distinta.
4. Calcula la integral definida antes de tomar el límite.
5. Evalúa cada límite por separado.
6. Declara convergencia solo si todos son finitos.
7. Si la primitiva es difícil o innecesaria, utiliza comparación.
8. Indica el valor únicamente después de justificar la convergencia.

## Errores frecuentes

- **Sustituir infinito en una primitiva.** Debe escribirse un límite.
- **No separar una singularidad interior.** Un único límite que atraviesa el punto no define la integral.
- **Cancelar dos divergencias.** Los lados deben converger independientemente.
- **Pensar que $f(x)\\to0$ implica convergencia.** $1/x$ es el contraejemplo básico.
- **Usar mal la comparación.** Hay que comprobar positividad, desigualdad y carácter de la función modelo.
- **Confundir acotación con convergencia.** Una función acotada sobre un intervalo infinito puede acumular área infinita.
- **Olvidar el dominio.** Una fórmula algebraica simplificada puede ocultar un punto excluido del integrando original.
- **Dar solo «diverge» sin mostrar el límite.** La clasificación debe quedar justificada.

## Cómo comprobar el resultado

Antes de aceptar una integral impropia, revisa que todos los símbolos $\\infty$ y todos los puntos singulares hayan sido reemplazados por límites laterales. Comprueba después el signo: una función no negativa no puede producir un valor negativo.

También sirve comparar el tamaño. Si $0\\leq f\\leq g$ y ya sabes que el área bajo $g$ es finita, el valor bajo $f$ no puede superarla. En una potencia, contrasta siempre el exponente con los dos modelos $p$.

## Ejercicios propuestos

1. Calcula $\\int_2^\\infty x^{-3}dx$.
2. Calcula $\\int_0^4x^{-1/2}dx$.
3. Estudia $\\int_0^1\\ln x\\,dx$.
4. Calcula $\\int_0^\\infty e^{-2x}dx$.
5. Calcula $\\int_{-\\infty}^{0}e^x dx$.
6. Estudia $\\int_0^\\infty\\frac{dx}{x+1}$.
7. Estudia $\\int_1^\\infty\\frac{dx}{x^2+x}$ y calcula su valor si converge.
8. Clasifica $\\int_0^1x^{-p}dx$ para $p=1/3$, $p=1$ y $p=2$.
9. Estudia $\\int_1^\\infty\\frac{3x^2+1}{x^4+2}dx$ por comparación límite.
10. Decide si $\\int_0^1\\frac{dx}{x^{2/3}(1+x)}$ converge.

## Soluciones

**1. Cola de potencia.**

$$
\\lim_{b\\to\\infty}\\left[-\\frac1{2x^2}\\right]_2^b
=\\boxed{\\frac18}.
$$

**2. Singularidad integrable.**

$$
\\lim_{c\\to0^+}[2\\sqrt{x}]_c^4
=\\boxed{4}.
$$

**3. Logaritmo en cero.** Aunque $\\ln x\\to-\\infty$,

$$
\\begin{aligned}
\\int_0^1\\ln x\\,dx
&=\\lim_{c\\to0^+}[x\\ln x-x]_c^1\\\\
&=-1-\\lim_{c\\to0^+}(c\\ln c-c)\\\\
&=\\boxed{-1}.
\\end{aligned}
$$

Se usa $c\\ln c\\to0$.

**4. Exponencial.**

$$
\\lim_{b\\to\\infty}\\left[-\\frac12e^{-2x}\\right]_0^b
=\\boxed{\\frac12}.
$$

**5. Extremo izquierdo infinito.**

$$
\\lim_{a\\to-\\infty}[e^x]_a^0
=1-0=\\boxed{1}.
$$

**6. Modelo armónico desplazado.**

$$
\\lim_{b\\to\\infty}[\\ln(x+1)]_0^b
=\\lim_{b\\to\\infty}\\ln(b+1)=+\\infty.
$$

La integral diverge.

**7. Fracciones simples.** Como

$$
\\frac1{x(x+1)}=\\frac1x-\\frac1{x+1},
$$

$$
\\lim_{b\\to\\infty}[\\ln x-\\ln(x+1)]_1^b
=0-(-\\ln2)=\\boxed{\\ln2}.
$$

**8. Modelo cerca de cero.** Para $p=1/3$ converge y vale $1/(1-1/3)=3/2$. Para $p=1$ y $p=2$ diverge.

**9. Comparación en infinito.** Tomamos $g(x)=1/x^2$:

$$
\\lim_{x\\to\\infty}
\\frac{(3x^2+1)/(x^4+2)}{1/x^2}=3.
$$

Como el límite es positivo y finito y $\\int_1^\\infty1/x^2dx$ converge, la integral propuesta converge.

**10. Comparación cerca de cero.** El factor $1/(1+x)$ permanece entre constantes positivas y

$$
\\frac1{x^{2/3}(1+x)}\\sim\\frac1{x^{2/3}}.
$$

Como $2/3<1$, la integral converge en cero. No hay otra singularidad en $[0,1]$.

## Resumen práctico

Una integral es impropia por un intervalo infinito, por una singularidad o por ambas causas. Se define mediante límites, se divide en todos los puntos problemáticos y converge solo si cada límite necesario es finito. Las integrales $p$ y los criterios de comparación permiten decidir muchos casos sin encontrar una primitiva exacta.

La clasificación debe preceder al valor. Antes de integrar, marca sobre el intervalo cada punto fuera del dominio y estudia por separado el comportamiento local y la cola en infinito. Después elige entre cálculo exacto y comparación. Esta secuencia evita cancelaciones ilegítimas, sustituciones de $\\infty$ como si fuera un número y conclusiones basadas únicamente en que el integrando tiende a cero.

Si necesitas trabajar convergencia, comparaciones y técnicas de integración sobre ejercicios de tu asignatura, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
`,I=`---
title: Matrices, determinantes y sistemas de ecuaciones: guía completa para primero de carrera
date: 2026-06-25
updated: 2026-06-25
description: Guía de matrices, determinantes y sistemas de ecuaciones para primero de carrera: rango, Gauss, inversa y discusión de soluciones.
tag: Álgebra Lineal
category: Matemáticas universitarias
relatedService: /clases-particulares/algebra-lineal-universidad/
relatedPosts: algebra-lineal-universidad-que-estudiar-primero-errores,como-estudiar-matematicas-sin-memorizar,como-aprobar-calculo-i-ingenieria-seis-semanas
image: /favicon.svg
---

Matrices, determinantes y sistemas de ecuaciones forman el núcleo operativo del Álgebra Lineal de primero de carrera. Si dominas este bloque, muchos temas posteriores dejan de parecer aislados: bases, dimensión, aplicaciones lineales, autovalores y diagonalización vuelven una y otra vez al rango y al método de Gauss.

## Qué representa una matriz

Una matriz organiza datos, coeficientes o transformaciones. En un sistema lineal:

$$
\\begin{cases}
x+2y=5\\\\
3x-y=4
\\end{cases}
$$

la matriz de coeficientes es:

$$
A=\\begin{pmatrix}
1 & 2\\\\
3 & -1
\\end{pmatrix}
$$

y la matriz ampliada:

$$
(A|b)=
\\begin{pmatrix}
1 & 2 & 5\\\\
3 & -1 & 4
\\end{pmatrix}
$$

El sistema se estudia operando con filas para mantener las mismas soluciones.

## Método de Gauss

El método de Gauss busca una forma escalonada. Las operaciones permitidas son:

- Intercambiar dos filas.
- Multiplicar una fila por un número no nulo.
- Sumar a una fila un múltiplo de otra.

Estas operaciones no son decoración: son la razón por la que el sistema equivalente conserva soluciones.

Para el sistema anterior:

$$
\\begin{pmatrix}
1 & 2 & 5\\\\
3 & -1 & 4
\\end{pmatrix}
$$

Hacemos \\(F_2\\leftarrow F_2-3F_1\\):

$$
\\begin{pmatrix}
1 & 2 & 5\\\\
0 & -7 & -11
\\end{pmatrix}
$$

Entonces:

$$
y=\\frac{11}{7}
$$

y sustituyendo en la primera ecuación:

$$
x+2\\cdot \\frac{11}{7}=5
$$

Por tanto:

$$
x=\\frac{13}{7}
$$

## Rango y discusión de sistemas

El rango mide el número de filas o columnas independientes. Para discutir sistemas se usa el teorema de Rouché-Frobenius:

$$
\\operatorname{rg}(A)=\\operatorname{rg}(A|b)
$$

Si los rangos son distintos, el sistema no tiene solución. Si son iguales, hay solución. Si además coinciden con el número de incógnitas, la solución es única. Si son menores, hay infinitas soluciones.

## Determinantes: cuándo usarlos

El determinante se define para matrices cuadradas. En una matriz \\(2\\times 2\\):

$$
\\det
\\begin{pmatrix}
a & b\\\\
c & d
\\end{pmatrix}
=ad-bc
$$

Si \\(\\det(A)\\neq 0\\), la matriz es invertible y el sistema \\(Ax=b\\) tiene solución única.

Pero cuidado: usar determinantes para todo puede ser lento. Para sistemas grandes, Gauss suele ser más eficiente y menos propenso a errores.

## Matriz inversa

La inversa de \\(A\\), si existe, cumple:

$$
AA^{-1}=I
$$

En sistemas, si \\(A\\) es invertible:

$$
Ax=b \\Rightarrow x=A^{-1}b
$$

Esto es útil conceptualmente, pero en cálculo manual muchas veces se resuelve antes con Gauss que calculando toda la inversa.

## Ejercicio resuelto con parámetro

Discute según \\(a\\):

$$
\\begin{cases}
x+y=1\\\\
2x+2y=a
\\end{cases}
$$

La segunda ecuación tiene el mismo lado izquierdo que el doble de la primera. Si multiplicamos la primera por 2:

$$
2x+2y=2
$$

Para que el sistema sea compatible, debe cumplirse \\(a=2\\).

Si \\(a=2\\), hay infinitas soluciones porque las dos ecuaciones representan la misma recta. Si \\(a\\neq 2\\), no hay solución.

## Errores típicos en primero de carrera

- Dividir por un parámetro sin estudiar el caso en que vale cero.
- Calcular determinantes de matrices que no son cuadradas.
- Confundir matriz de coeficientes y matriz ampliada.
- Hacer operaciones por columnas al resolver un sistema por filas.
- No interpretar el resultado final: única, ninguna o infinitas soluciones.

## Cómo practicar bien

No hagas solo sistemas numéricos. Mezcla:

- Sistemas con parámetro.
- Cálculo de rango.
- Determinantes sencillos.
- Matriz inversa.
- Problemas donde haya que decidir si usar Gauss, determinante o interpretación geométrica.

Si este bloque te cuesta, empieza por [Álgebra Lineal en la universidad](/blog/algebra-lineal-universidad-que-estudiar-primero-errores/) y revisa la página de [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/).
`,F=`---
title: Métodos de integración: cómo elegir la técnica adecuada
date: 2026-08-01
updated: 2026-08-01
description: Aprende a reconocer qué método de integración conviene usar, con un árbol de decisión, ejemplos resueltos y comprobaciones por derivación.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: integracion-por-sustitucion-cambio-variable-ejercicios,integracion-por-partes-formula-ejercicios-resueltos,integrales-funciones-racionales-fracciones-parciales
image: /favicon.svg
---

Elegir un método de integración consiste en reconocer **qué operación de derivación hay que deshacer**. Si aparece una función compuesta junto a su derivada, suele convenir un cambio de variable; si hay un producto que se simplifica al derivar uno de sus factores, integración por partes; si el integrando es racional, primero división y fracciones parciales. Antes de aplicar ninguna fórmula, simplifica y comprueba si la integral ya es inmediata.

Esta guía organiza esas decisiones. No sustituye las explicaciones específicas de cada técnica: sirve para diagnosticar una integral, justificar el método y saber cuándo abandonarlo si no produce una expresión más sencilla.

## Antes de elegir: qué significa resolver una integral

En una integral indefinida buscamos todas las funciones cuya derivada sea el integrando. Si

$$
F'(x)=f(x),
$$

entonces

$$
\\int f(x)\\,dx=F(x)+C.
$$

La constante \\(C\\) es necesaria porque todas las funciones \\(F(x)+C\\) tienen la misma derivada. En una integral definida, una vez encontrada una primitiva, usamos el teorema fundamental del cálculo:

$$
\\int_a^b f(x)\\,dx=F(b)-F(a).
$$

Esta diferencia importa al elegir método. En una integral indefinida hay que volver a la variable original y añadir \\(C\\). En una definida podemos transformar también los límites y terminar en la nueva variable.

No toda función elemental tiene una primitiva expresable mediante funciones elementales. Por ejemplo, \\(\\int e^{-x^2}\\,dx\\) no se resuelve con sustitución, partes o fracciones parciales en términos elementales. Antes de encadenar técnicas sin rumbo, hay que admitir esa posibilidad.

Si necesitas afianzar el significado geométrico y de acumulación, empieza por [qué son las integrales y para qué se utilizan](/blog/que-son-las-integrales-y-para-que-se-utilizan/).

## El orden de decisión que evita intentos al azar

Conviene revisar una integral en este orden:

1. **Simplificar.** Expande, factoriza, divide polinomios, separa una fracción o usa una identidad elemental si con ello aparecen integrales inmediatas.
2. **Buscar una primitiva conocida.** Potencias, exponenciales, funciones trigonométricas básicas y formas logarítmicas no necesitan un método más sofisticado.
3. **Buscar una composición.** Si ves \\(g(x)\\) dentro de otra función y también aparece \\(g'(x)\\), prueba sustitución.
4. **Examinar productos.** Si derivar un factor lo simplifica y el otro se integra con facilidad, prueba partes.
5. **Clasificar cocientes racionales.** Si es un cociente de polinomios, haz división cuando proceda y después fracciones parciales.
6. **Reconocer estructuras trigonométricas.** Potencias de seno y coseno, secante y tangente o raíces de expresiones cuadráticas requieren identidades o sustituciones específicas.
7. **Comprobar si el problema es impropio o no elemental.** Los límites infinitos y las singularidades exigen estudiar convergencia; algunas primitivas requieren funciones especiales o métodos numéricos.

La regla práctica es sencilla: un método es prometedor si **reduce la complejidad**. Tras el cambio, la nueva integral debe ser más reconocible que la anterior. Si no lo es, revisa la elección.

| Señal en el integrando | Primera técnica que conviene probar | Pregunta de control |
| --- | --- | --- |
| Suma de potencias o términos conocidos | Linealidad e integrales inmediatas | ¿Puedo integrar término a término? |
| \\(f(g(x))g'(x)\\) | Sustitución | ¿Está la derivada de la función interior, quizá salvo una constante? |
| Producto como \\(x e^x\\), \\(x\\sin x\\) o \\(\\ln x\\) | Partes | ¿Derivar un factor lo simplifica? |
| \\(P(x)/Q(x)\\), con \\(P,Q\\) polinomios | División y fracciones parciales | ¿El grado del numerador es menor que el del denominador? |
| Potencias de seno, coseno, secante o tangente | Identidades trigonométricas | ¿Hay una potencia impar que pueda reservar? |
| \\(\\sqrt{a^2-x^2}\\), \\(\\sqrt{a^2+x^2}\\) o \\(\\sqrt{x^2-a^2}\\) | Sustitución trigonométrica o hiperbólica | ¿Qué identidad elimina la raíz? |
| Límites infinitos o integrando no acotado | Integral impropia | ¿Existe el límite que define la integral? |

## Método 1: simplificar antes de integrar

Una forma complicada puede ocultar una suma inmediata. La simplificación no es un paso decorativo: a menudo es el método principal.

### Ejemplo 1 — cociente que se simplifica

Calcula

$$
\\int \\frac{x^3-2x}{x}\\,dx, \\qquad x\\neq 0.
$$

**Qué nos piden.** Una primitiva en cualquier intervalo que no cruce \\(x=0\\).

**Cómo reconocer el método.** Todos los términos del numerador son divisibles por \\(x\\). No hacen falta ni sustitución ni fracciones parciales.

$$
\\frac{x^3-2x}{x}=x^2-2.
$$

Integramos término a término:

$$
\\int (x^2-2)\\,dx=\\frac{x^3}{3}-2x+C.
$$

**Comprobación.** Al derivar obtenemos \\(x^2-2\\), que coincide con el integrando simplificado. La restricción \\(x\\neq0\\) sigue perteneciendo al problema original aunque la expresión final esté definida en cero.

### Ejemplo 2 — completar una derivada logarítmica

Calcula

$$
\\int \\frac{2x+5}{x^2+5x+7}\\,dx.
$$

El numerador es exactamente la derivada del denominador:

$$
\\frac{d}{dx}(x^2+5x+7)=2x+5.
$$

Por tanto es la forma inmediata \\(\\int f'(x)/f(x)\\,dx\\):

$$
\\int \\frac{2x+5}{x^2+5x+7}\\,dx=\\ln|x^2+5x+7|+C.
$$

Como el discriminante del denominador es \\(25-28=-3\\), el polinomio es siempre positivo y también podríamos escribir \\(\\ln(x^2+5x+7)+C\\).

**Comprobación.** La derivada del logaritmo es el cociente original. La observación decisiva fue comparar numerador y derivada del denominador antes de iniciar un procedimiento más largo.

## Método 2: sustitución para deshacer la regla de la cadena

La sustitución se basa en la regla de la cadena. Si el integrando tiene la forma

$$
f(g(x))g'(x),
$$

tomamos \\(u=g(x)\\) y \\(du=g'(x)\\,dx\\). La integral se convierte en \\(\\int f(u)\\,du\\).

No hace falta que \\(g'(x)\\) aparezca idéntica: puede faltar o sobrar una constante. Sí debe desaparecer **toda** la dependencia de \\(x\\) tras el cambio. La guía de [integración por sustitución y cambio de variable](/blog/integracion-por-sustitucion-cambio-variable-ejercicios/) desarrolla este criterio con más casos.

### Ejemplo 3 — composición directa

Calcula

$$
\\int x\\sqrt{x^2+4}\\,dx.
$$

**Reconocimiento.** La raíz contiene \\(x^2+4\\) y fuera aparece \\(x\\), que es proporcional a su derivada \\(2x\\).

Tomamos

$$
u=x^2+4, \\qquad du=2x\\,dx, \\qquad x\\,dx=\\frac{1}{2}du.
$$

Entonces

$$
\\begin{aligned}
\\int x\\sqrt{x^2+4}\\,dx
&=\\frac12\\int u^{1/2}\\,du\\\\
&=\\frac12\\cdot\\frac{2}{3}u^{3/2}+C\\\\
&=\\frac13(x^2+4)^{3/2}+C.
\\end{aligned}
$$

**Comprobación.** Aplicando la regla de la cadena:

$$
\\frac{d}{dx}\\left[\\frac13(x^2+4)^{3/2}\\right]
=\\frac13\\cdot\\frac32(x^2+4)^{1/2}\\cdot2x
=x\\sqrt{x^2+4}.
$$

### Ejemplo 4 — una sustitución que no conviene

En

$$
\\int x\\,e^x\\,dx,
$$

tomar \\(u=x\\) no cambia nada, y tomar \\(u=e^x\\) deja \\(x=\\ln u\\), con lo que resulta \\(\\int \\ln u\\,du\\). La integral no se ha simplificado de forma suficiente: hemos transformado un producto en otro problema que también exige partes. La señal correcta es que al derivar \\(x\\) obtenemos \\(1\\), mientras \\(e^x\\) se integra sin cambiar. Aquí conviene integración por partes.

## Método 3: integración por partes para productos

La fórmula procede de integrar la regla del producto:

$$
\\int u\\,dv=uv-\\int v\\,du.
$$

Se usa cuando podemos dividir el integrando en una parte \\(u\\), que al derivarse se simplifica, y otra \\(dv\\), que podemos integrar. También permite integrar funciones como \\(\\ln x\\) o \\(\\arctan x\\) escribiéndolas como producto por \\(1\\).

### Ejemplo 5 — producto de polinomio y exponencial

Calcula

$$
\\int x e^{2x}\\,dx.
$$

Elegimos \\(u=x\\), porque se reduce a \\(1\\), y \\(dv=e^{2x}\\,dx\\):

$$
du=dx, \\qquad v=\\frac12e^{2x}.
$$

Aplicamos la fórmula:

$$
\\begin{aligned}
\\int xe^{2x}\\,dx
&=\\frac{x}{2}e^{2x}-\\int\\frac12e^{2x}\\,dx\\\\
&=\\frac{x}{2}e^{2x}-\\frac14e^{2x}+C\\\\
&=\\frac{e^{2x}}{4}(2x-1)+C.
\\end{aligned}
$$

**Comprobación.** Derivar el producto final produce \\(xe^{2x}\\). Si tras aplicar partes la integral restante fuera más difícil que la original, la elección de \\(u\\) y \\(dv\\) debería revisarse.

### Ejemplo 6 — una función que no parece producto

Calcula

$$
\\int \\ln x\\,dx, \\qquad x>0.
$$

Escribimos \\(\\ln x\\cdot1\\). Elegimos

$$
u=\\ln x, \\quad dv=dx, \\quad du=\\frac1x\\,dx, \\quad v=x.
$$

Así,

$$
\\int\\ln x\\,dx=x\\ln x-\\int1\\,dx=x\\ln x-x+C.
$$

La [guía de integración por partes](/blog/integracion-por-partes-formula-ejercicios-resueltos/) explica elecciones repetidas, integrales cíclicas y el uso en integrales definidas.

## Método 4: funciones racionales y fracciones parciales

Una función racional tiene la forma \\(P(x)/Q(x)\\), con \\(P\\) y \\(Q\\) polinomios. El procedimiento tiene dos fases:

1. Si \\(\\deg P\\geq\\deg Q\\), divide los polinomios.
2. Factoriza \\(Q\\) sobre los reales y descompón la fracción propia resultante.

Factores lineales producen términos logarítmicos. Factores cuadráticos irreducibles pueden producir logaritmos y arcotangentes.

### Ejemplo 7 — factores lineales distintos

Calcula

$$
\\int\\frac{5x+1}{x^2-x-2}\\,dx.
$$

Factorizamos el denominador:

$$
x^2-x-2=(x-2)(x+1).
$$

Buscamos \\(A\\) y \\(B\\) tales que

$$
\\frac{5x+1}{(x-2)(x+1)}=\\frac{A}{x-2}+\\frac{B}{x+1}.
$$

Al multiplicar por el denominador:

$$
5x+1=A(x+1)+B(x-2).
$$

Con \\(x=2\\), \\(11=3A\\), luego \\(A=11/3\\). Con \\(x=-1\\), \\(-4=-3B\\), luego \\(B=4/3\\). Por tanto,

$$
\\int\\frac{5x+1}{x^2-x-2}\\,dx
=\\frac{11}{3}\\ln|x-2|+\\frac{4}{3}\\ln|x+1|+C.
$$

**Comprobación.** Al derivar y reunir las fracciones se recupera \\( (5x+1)/(x^2-x-2) \\). El valor absoluto es necesario porque cada factor puede cambiar de signo en los intervalos del dominio.

### Ejemplo 8 — primero hay que dividir

Calcula

$$
\\int\\frac{x^2+1}{x+1}\\,dx.
$$

Como el grado del numerador es mayor, dividimos:

$$
\\frac{x^2+1}{x+1}=x-1+\\frac{2}{x+1}.
$$

Así,

$$
\\int\\frac{x^2+1}{x+1}\\,dx
=\\frac{x^2}{2}-x+2\\ln|x+1|+C.
$$

Intentar fracciones parciales antes de convertir la fracción en propia añade trabajo y suele provocar errores de coeficientes.

La guía de [integrales de funciones racionales y fracciones parciales](/blog/integrales-funciones-racionales-fracciones-parciales/) desarrolla los casos con factores repetidos, cuadráticos irreducibles e integrales impropias.

## Método 5: identidades e integrales trigonométricas

En productos de potencias de seno y coseno, la paridad orienta la decisión:

- Si una potencia de seno es impar, reserva un factor \\(\\sin x\\) y transforma el resto mediante \\(\\sin^2x=1-\\cos^2x\\); después usa \\(u=\\cos x\\).
- Si una potencia de coseno es impar, reserva \\(\\cos x\\), usa \\(\\cos^2x=1-\\sin^2x\\) y toma \\(u=\\sin x\\).
- Si ambas potencias son pares, usa fórmulas de ángulo mitad.

Para potencias de secante y tangente hay reglas análogas basadas en \\(1+\\tan^2x=\\sec^2x\\).

### Ejemplo 9 — potencia impar

Calcula

$$
\\int\\sin^3x\\cos^2x\\,dx.
$$

Reservamos un seno:

$$
\\sin^3x=\\sin x(1-\\cos^2x).
$$

Tomamos \\(u=\\cos x\\), \\(du=-\\sin x\\,dx\\):

$$
\\begin{aligned}
\\int\\sin^3x\\cos^2x\\,dx
&=-\\int(1-u^2)u^2\\,du\\\\
&=-\\int(u^2-u^4)\\,du\\\\
&=-\\frac{u^3}{3}+\\frac{u^5}{5}+C\\\\
&=-\\frac{\\cos^3x}{3}+\\frac{\\cos^5x}{5}+C.
\\end{aligned}
$$

El método completo combina una identidad y una sustitución. Las categorías no son compartimentos cerrados: una integral puede exigir varios pasos en secuencia.

## Método 6: sustituciones trigonométricas para raíces cuadráticas

Las identidades pitagóricas eliminan raíces de tres formas frecuentes:

| Expresión | Sustitución habitual | Identidad utilizada |
| --- | --- | --- |
| \\(\\sqrt{a^2-x^2}\\) | \\(x=a\\sin\\theta\\) | \\(1-\\sin^2\\theta=\\cos^2\\theta\\) |
| \\(\\sqrt{a^2+x^2}\\) | \\(x=a\\tan\\theta\\) | \\(1+\\tan^2\\theta=\\sec^2\\theta\\) |
| \\(\\sqrt{x^2-a^2}\\) | \\(x=a\\sec\\theta\\) | \\(\\sec^2\\theta-1=\\tan^2\\theta\\) |

### Ejemplo 10 — raíz de \\(a^2-x^2\\)

Calcula

$$
\\int\\frac{dx}{\\sqrt{9-x^2}}.
$$

Tomamos \\(x=3\\sin\\theta\\), por lo que \\(dx=3\\cos\\theta\\,d\\theta\\). En el intervalo donde \\(\\cos\\theta\\geq0\\),

$$
\\sqrt{9-x^2}=\\sqrt{9-9\\sin^2\\theta}=3\\cos\\theta.
$$

Entonces

$$
\\int\\frac{3\\cos\\theta\\,d\\theta}{3\\cos\\theta}
=\\int d\\theta=\\theta+C.
$$

Como \\(\\theta=\\arcsin(x/3)\\),

$$
\\int\\frac{dx}{\\sqrt{9-x^2}}=\\arcsin\\left(\\frac{x}{3}\\right)+C.
$$

**Comprobación.** La derivada de \\(\\arcsin(x/3)\\) es \\(1/\\sqrt{9-x^2}\\). En este ejemplo la forma también puede reconocerse como primitiva inmediata; la sustitución explica de dónde procede.

## Integrales definidas: el método no cambia, pero sí los límites

Cuando hacemos \\(u=g(x)\\) en una integral definida, podemos transformar los límites:

$$
x=a\\Rightarrow u=g(a), \\qquad x=b\\Rightarrow u=g(b).
$$

Así evitamos volver a \\(x\\) antes de evaluar.

### Ejemplo 11 — sustitución con límites

Calcula

$$
\\int_0^1 2x e^{x^2}\\,dx.
$$

Tomamos \\(u=x^2\\), \\(du=2x\\,dx\\). Los límites cambian de \\(x=0,1\\) a \\(u=0,1\\):

$$
\\int_0^1 2xe^{x^2}\\,dx
=\\int_0^1 e^u\\,du
=\\left[e^u\\right]_0^1=e-1.
$$

**Interpretación.** El integrando es positivo en \\([0,1]\\), luego el resultado debe ser positivo; \\(e-1\\approx1{,}718\\) cumple esa condición.

No mezcles límites en \\(x\\) con una primitiva escrita en \\(u\\). O cambias los límites y trabajas enteramente en \\(u\\), o vuelves a \\(x\\) antes de sustituir extremos.

## Ejemplo 12 — un problema que exige dos decisiones

Calcula

$$
\\int\\frac{x^3}{(x^2+1)^2}\\,dx.
$$

**Primera lectura.** Es un cociente, pero no conviene empezar con fracciones parciales en \\(x\\): el denominador contiene la composición \\(x^2+1\\) y el numerador puede escribirse como \\(x^2(x\\,dx)\\). Esa estructura sugiere sustitución.

Tomamos

$$
u=x^2+1, \\qquad du=2x\\,dx, \\qquad x^2=u-1.
$$

La integral queda

$$
\\begin{aligned}
\\int\\frac{x^3}{(x^2+1)^2}\\,dx
&=\\frac12\\int\\frac{u-1}{u^2}\\,du\\\\
&=\\frac12\\int\\left(\\frac1u-\\frac1{u^2}\\right)du.
\\end{aligned}
$$

**Segunda decisión.** Después del cambio ya no hace falta otro método especial: simplificamos en potencias e integramos término a término.

$$
\\begin{aligned}
\\frac12\\int(u^{-1}-u^{-2})\\,du
&=\\frac12\\left(\\ln|u|+\\frac1u\\right)+C\\\\
&=\\frac12\\ln(x^2+1)+\\frac{1}{2(x^2+1)}+C.
\\end{aligned}
$$

**Comprobación.** Al derivar,

$$
\\frac{x}{x^2+1}-\\frac{x}{(x^2+1)^2}
=\\frac{x[(x^2+1)-1]}{(x^2+1)^2}
=\\frac{x^3}{(x^2+1)^2}.
$$

Este tipo de ejercicio muestra por qué el árbol de decisión se aplica de nuevo después de cada transformación. El método inicial no tiene que producir una primitiva inmediata; basta con que revele una estructura más sencilla.

## Señales de progreso durante el cálculo

Una elección está funcionando si ocurre al menos una de estas cosas:

- disminuye el grado de un polinomio;
- desaparece una composición;
- un cociente se convierte en suma de potencias;
- la integral restante pertenece a una tabla básica;
- reaparece la integral original de forma que puede despejarse;
- una singularidad o un límite infinito queda aislado en un límite explícito.

En cambio, detenerse y volver atrás es razonable cuando aparecen más funciones distintas que al principio, permanecen mezcladas dos variables, se introduce una primitiva desconocida o aumenta el grado sin crear una pauta de reducción. Cambiar de intento no es perder trabajo: es parte del diagnóstico matemático.

## Integrales impropias y primitivas no elementales

Un método algebraico puede encontrar una primitiva y, aun así, no resolver una integral impropia: falta estudiar el límite. La guía de [integrales impropias](/blog/integrales-impropias-convergencia-ejercicios/) explica cómo separar singularidades y decidir convergencia. Por ejemplo,

$$
\\int_1^\\infty\\frac{1}{x^2}\\,dx
=\\lim_{b\\to\\infty}\\int_1^b x^{-2}\\,dx
=\\lim_{b\\to\\infty}\\left[-\\frac1x\\right]_1^b=1.
$$

En cambio,

$$
\\int_1^\\infty\\frac1x\\,dx
=\\lim_{b\\to\\infty}\\ln b
$$

diverge. Tener una fórmula antiderivada no garantiza convergencia.

Tampoco conviene forzar los métodos elementales sobre \\(\\int e^{-x^2}\\,dx\\), \\(\\int \\sin(x^2)\\,dx\\) o \\(\\int dx/\\ln x\\). Estas integrales definen o se expresan mediante funciones especiales; en intervalos concretos pueden aproximarse numéricamente.

## Errores frecuentes al elegir técnica

- **Aplicar partes a cualquier producto.** En \\(\\int x\\cos(x^2)\\,dx\\), la sustitución \\(u=x^2\\) resuelve la integral de inmediato; partes la complica.
- **Hacer un cambio que no elimina \\(x\\).** Si después de sustituir quedan mezcladas \\(u\\) y \\(x\\), el cambio está incompleto o no es adecuado.
- **Olvidar dividir una función racional impropia.** Fracciones parciales se aplica a la parte propia.
- **Usar \\(\\ln f(x)\\) sin valor absoluto.** La primitiva general de \\(f'(x)/f(x)\\) es \\(\\ln|f(x)|+C\\) en intervalos donde \\(f\\neq0\\).
- **Perder factores constantes.** Si \\(du=3x^2dx\\) y solo aparece \\(x^2dx\\), debe introducirse un factor \\(1/3\\).
- **Encadenar métodos sin medir progreso.** Cada paso debe acercar el integrando a una tabla de primitivas conocidas.
- **Confundir integral con área total.** Una integral definida suma con signo. Si se pide área geométrica, hay que localizar los cambios de signo y separar intervalos.

## Cómo comprobar una integral sin rehacerla

La comprobación principal de una integral indefinida es derivar el resultado. Hazla por capas:

1. Deriva la expresión final con la regla adecuada.
2. Simplifica hasta recuperar exactamente el integrando.
3. Revisa el dominio: logaritmos, raíces y denominadores pueden exigir intervalos concretos.
4. En integrales definidas, comprueba signo, orden de magnitud y unidades.

Si \\(F'(x)=f(x)\\), la técnica fue correcta aunque la primitiva tenga una forma distinta a la de una solución oficial. Por ejemplo,

$$
-\\frac12\\ln\\left|\\frac{1+x}{1-x}\\right|+C
$$

y

$$
\\frac12\\ln\\left|\\frac{x-1}{x+1}\\right|+C
$$

pueden representar la misma familia en intervalos adecuados, pues difieren como mucho en una constante tras considerar los valores absolutos.

## Práctica progresiva: decide antes de calcular

Para cada integral, anota primero el método y la señal que lo justifica.

1. \\(\\displaystyle \\int (4x^3-2x+7)\\,dx\\)
2. \\(\\displaystyle \\int \\frac{x}{x^2+9}\\,dx\\)
3. \\(\\displaystyle \\int x\\cos x\\,dx\\)
4. \\(\\displaystyle \\int \\frac{3x+5}{(x-1)(x+2)}\\,dx\\)
5. \\(\\displaystyle \\int \\cos^3x\\,dx\\)
6. \\(\\displaystyle \\int_0^2 \\frac{x}{\\sqrt{x^2+5}}\\,dx\\)

## Soluciones de la práctica

**1. Inmediata y linealidad.** Integramos término a término:

$$
x^4-x^2+7x+C.
$$

**2. Sustitución.** Con \\(u=x^2+9\\), \\(du=2x\\,dx\\):

$$
\\int\\frac{x}{x^2+9}\\,dx=\\frac12\\ln(x^2+9)+C.
$$

**3. Partes.** Elegimos \\(u=x\\), \\(dv=\\cos x\\,dx\\):

$$
\\int x\\cos x\\,dx=x\\sin x+\\cos x+C.
$$

La derivada de \\(x\\sin x+\\cos x\\) es \\(\\sin x+x\\cos x-\\sin x=x\\cos x\\).

**4. Fracciones parciales.** Planteamos

$$
\\frac{3x+5}{(x-1)(x+2)}=\\frac{A}{x-1}+\\frac{B}{x+2}.
$$

De \\(3x+5=A(x+2)+B(x-1)\\), al usar \\(x=1\\) sale \\(A=8/3\\), y con \\(x=-2\\), \\(B=1/3\\). Por tanto,

$$
\\frac83\\ln|x-1|+\\frac13\\ln|x+2|+C.
$$

**5. Identidad y sustitución.** Escribimos \\(\\cos^3x=(1-\\sin^2x)\\cos x\\) y usamos \\(u=\\sin x\\):

$$
\\int\\cos^3x\\,dx=\\sin x-\\frac{\\sin^3x}{3}+C.
$$

**6. Sustitución definida.** Con \\(u=x^2+5\\), \\(du=2x\\,dx\\), los límites son \\(u=5\\) y \\(u=9\\):

$$
\\int_0^2\\frac{x}{\\sqrt{x^2+5}}\\,dx
=\\frac12\\int_5^9u^{-1/2}\\,du
=\\left[\\sqrt{u}\\right]_5^9
=3-\\sqrt5.
$$

El resultado es positivo y menor que \\(1\\), coherente con un integrando que va de \\(0\\) a \\(2/3\\) en un intervalo de longitud \\(2\\).

## Resumen operativo

Primero simplifica. Después busca una forma inmediata o una composición con su derivada. Si hay un producto, pregunta si derivar un factor lo simplifica; si hay un cociente de polinomios, divide y descompón; si hay potencias trigonométricas o raíces cuadráticas características, usa sus identidades. En una integral impropia, el último paso siempre es evaluar el límite.

La elección no se memoriza como una lista de palabras clave. Se entrena comparando la estructura del integrando con las reglas de derivación que ya conoces y comprobando si cada transformación reduce la dificultad.

Si estás preparando Cálculo universitario y necesitas aplicar este árbol de decisión a tus hojas de problemas o exámenes, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
`,N=`---
title: Microeconomía I: diez tipos de problemas que debes dominar antes del examen
date: 2026-07-05
updated: 2026-07-05
description: Diez tipos de problemas de Microeconomía I para preparar el examen: demanda, elasticidad, consumidor, costes, competencia y monopolio.
tag: Microeconomía
category: Economía y ADE
relatedService: /clases-particulares/economia-ade/
relatedPosts: como-aprobar-matematicas-i-ade-economia,economia-ade-matematicas-sin-perderse,econometria-desde-cero-interpretar-regresion
image: /favicon.svg
---

Microeconomía I se aprueba cuando sabes pasar de una gráfica a una fórmula y de una fórmula a una decisión económica. No basta con memorizar definiciones: el examen suele pedir calcular, representar e interpretar.

Estos son diez tipos de problemas que conviene dominar antes del examen.

## 1. Oferta, demanda y equilibrio

Debes saber encontrar el punto de equilibrio resolviendo:

$$
Q_d(P)=Q_s(P)
$$

Si:

$$
Q_d=100-2P,\\qquad Q_s=20+2P
$$

entonces:

$$
100-2P=20+2P
$$

Por tanto:

$$
P=20,\\quad Q=60
$$

## 2. Cambios en curvas

No confundas movimiento a lo largo de una curva con desplazamiento de la curva. Un cambio en el precio mueve sobre la curva. Un cambio en renta, costes, tecnología o preferencias puede desplazarla.

## 3. Elasticidad precio de la demanda

La elasticidad precio mide sensibilidad:

$$
E_p=\\frac{dQ}{dP}\\cdot\\frac{P}{Q}
$$

Si \\(|E_p|>1\\), la demanda es elástica. Si \\(|E_p|<1\\), es inelástica. El signo importa, pero la interpretación suele fijarse en el valor absoluto.

## 4. Restricción presupuestaria

La restricción del consumidor se escribe:

$$
p_xx+p_yy=m
$$

Debes saber representarla, calcular pendientes e interpretar cambios de renta o precios.

## 5. Utilidad y elección óptima

En problemas básicos, el óptimo interior cumple:

$$
\\frac{MU_x}{MU_y}=\\frac{p_x}{p_y}
$$

La lectura económica es clara: la relación marginal de sustitución se iguala al precio relativo.

## 6. Efecto renta y efecto sustitución

Estos problemas penalizan mucho si solo dibujas. Debes explicar qué parte del cambio en consumo viene del precio relativo y qué parte del poder adquisitivo.

## 7. Función de producción

Una función como:

$$
q=f(L,K)
$$

relaciona factores productivos con producción. Revisa producto medio, producto marginal y rendimientos.

## 8. Costes a corto plazo

Debes distinguir coste fijo, coste variable, coste total, coste medio y coste marginal:

$$
CMg(q)=\\frac{dC(q)}{dq}
$$

No memorices curvas sin entender qué decisión representa cada una.

## 9. Competencia perfecta

En competencia perfecta, la empresa toma el precio como dado y produce donde:

$$
P=CMg
$$

siempre revisando condiciones de cierre y beneficio.

## 10. Monopolio

En monopolio, la condición típica es:

$$
IMg=CMg
$$

Después se usa la demanda para encontrar el precio. Un error común es igualar directamente precio y coste marginal como en competencia perfecta.

## Cómo preparar estos diez bloques

Para cada tipo de problema, prepara una ficha:

- Qué pregunta plantea.
- Qué fórmula o gráfica aparece.
- Qué pasos se repiten.
- Qué error suele penalizar.
- Cómo se interpreta el resultado.

## Errores frecuentes

- Aprender gráficos sin saber calcular.
- Calcular sin escribir conclusión económica.
- Confundir coste medio y coste marginal.
- Usar condiciones de competencia perfecta en monopolio.
- No distinguir demanda individual y demanda de mercado.

Si quieres trabajar Microeconomía I desde ejercicios reales, revisa [clases particulares de Economía y ADE](/clases-particulares/economia-ade/) y la guía de [Matemáticas I en ADE y Economía](/blog/como-aprobar-matematicas-i-ade-economia/).
`,R=`---
title: p-valor, intervalo de confianza y tamaño del efecto explicados con un mismo ejemplo
date: 2026-07-10
updated: 2026-07-10
description: Explicación clara de p-valor, intervalo de confianza y tamaño del efecto usando un mismo ejemplo aplicado a Psicología y Estadística.
tag: Inferencia
category: Estadística
relatedService: /clases-particulares/estadistica-universidad/
relatedPosts: como-aprobar-estadistica-psicologia-sin-base-matematica,errores-comunes-inferencia-estadistica,que-prueba-estadistica-utilizar-guia-test-correcto
image: /favicon.svg
---

El p-valor, el intervalo de confianza y el tamaño del efecto suelen estudiarse por separado. Eso hace que muchos estudiantes los memoricen sin entender cómo se complementan.

Vamos a explicarlos con un mismo ejemplo.

## El ejemplo

Queremos evaluar si un programa de estudio reduce la ansiedad antes de un examen. Medimos ansiedad antes y después en el mismo grupo. Calculamos la diferencia:

$$
d_i=ansiedad\\ antes_i-ansiedad\\ después_i
$$

Si \\(d_i>0\\), la ansiedad ha bajado. Supongamos que la diferencia media observada es:

$$
\\bar{d}=4.2
$$

Es decir, de media, el grupo baja 4.2 puntos en ansiedad.

## Qué pregunta responde el p-valor

El p-valor responde a una pregunta condicional:

> Si en realidad el programa no tuviera efecto, ¿sería raro observar una diferencia como la encontrada o más extrema?

No es la probabilidad de que la hipótesis nula sea cierta. Tampoco es la probabilidad de que el resultado sea casual en lenguaje cotidiano.

Si planteamos:

$$
H_0:\\mu_d=0
$$

y obtenemos \\(p=0.03\\), diríamos que, bajo \\(H_0\\), el resultado observado sería poco compatible con una diferencia media nula al nivel del 5%.

## Qué aporta el intervalo de confianza

Un intervalo de confianza da un rango plausible para el efecto. Por ejemplo:

$$
IC_{95\\%}=[0.6,\\ 7.8]
$$

Esto indica que la reducción media compatible con los datos podría estar entre 0.6 y 7.8 puntos, bajo el procedimiento usado.

El intervalo aporta algo que el p-valor no da: magnitud e incertidumbre.

## Qué aporta el tamaño del efecto

El tamaño del efecto intenta responder:

> ¿La diferencia es pequeña, moderada o grande en términos prácticos?

Una medida frecuente es:

$$
d_z=\\frac{\\bar{d}}{s_d}
$$

donde \\(s_d\\) es la desviación típica de las diferencias. Si \\(\\bar{d}=4.2\\) y \\(s_d=8.4\\):

$$
d_z=\\frac{4.2}{8.4}=0.5
$$

Podríamos interpretarlo como un efecto moderado, aunque siempre depende del contexto y del área.

## Cómo se complementan

Los tres indicadores responden a preguntas distintas:

- p-valor: evidencia contra la hipótesis nula.
- Intervalo de confianza: rango plausible del efecto.
- Tamaño del efecto: magnitud práctica del cambio.

Un buen informe no se queda en "p menor que 0.05". Debe explicar cuánto cambia la variable y si ese cambio importa.

## Ejemplo de redacción

Una conclusión razonable sería:

> El programa se asoció con una reducción media de 4.2 puntos en ansiedad. La diferencia fue estadísticamente significativa, \\(p=0.03\\), con un intervalo de confianza del 95% entre 0.6 y 7.8 puntos. El tamaño del efecto fue moderado, \\(d_z=0.5\\).

Esa frase informa de dirección, evidencia, incertidumbre y magnitud.

## Errores frecuentes

- Decir que \\(p=0.03\\) significa un 3% de probabilidad de que \\(H_0\\) sea cierta.
- Informar solo "significativo" o "no significativo".
- Ignorar el tamaño del efecto.
- No mirar si el intervalo incluye valores poco relevantes.
- Confundir significación estadística con importancia clínica o práctica.

## Qué mirar en un examen

Si te dan una salida de software, localiza:

1. La diferencia o coeficiente estimado.
2. El p-valor.
3. El intervalo de confianza.
4. El tamaño del efecto si aparece.
5. La frase de interpretación.

Para evitar confusiones habituales, lee también [errores más comunes en Inferencia Estadística](/blog/errores-comunes-inferencia-estadistica/) y [qué prueba estadística utilizar](/blog/que-prueba-estadistica-utilizar-guia-test-correcto/).
`,M=`---
title: Preparar la PAU desde verano: plan realista para llegar fuerte a septiembre
date: 2026-07-21
updated: 2026-07-21
description: Cómo aprovechar el verano antes de 2º de Bachillerato para preparar la PAU sin adelantar temario sin criterio ni agotarte.
tag: Selectividad
category: Selectividad
relatedService: /preparacion-examenes/matematicas-selectividad/
relatedPosts: preparar-selectividad-con-calendario,como-preparar-pau-matematicas-ii,como-estudiar-matematicas-sin-memorizar
image: /favicon.svg
---

Preparar la PAU desde verano puede ayudarte mucho, pero solo si el objetivo es llegar a septiembre con una base más estable, no terminar por adelantado todo segundo de Bachillerato. Un plan excesivo en julio suele romperse antes de octubre; uno pequeño y constante deja margen cuando el curso se acelera.

La prioridad del verano es triple: recuperar lagunas de primero, conocer el formato de la prueba de tu comunidad y crear una rutina que puedas mantener durante el curso.

## Qué conviene hacer antes de empezar

Reúne tres documentos: el temario de segundo, los modelos de PAU más recientes de tu comunidad y los criterios de corrección cuando estén disponibles. Guárdalos como referencia, pero no intentes resolverlos aún de principio a fin. Primero identifica qué contenidos de primero reaparecen en cada asignatura.

En materias cuantitativas suelen volver el álgebra, funciones, ecuaciones, proporciones, unidades y lectura de gráficos. En asignaturas de comentario o desarrollo, la base es comprender una consigna, estructurar una respuesta y justificarla con precisión.

Haz una lista honesta con tres columnas: “lo hago con seguridad”, “lo entiendo pero me atasco” y “no sé por dónde empezar”. Esa lista será tu temario real del verano.

## El objetivo no es adelantar: es quitar fricción

Si en septiembre necesitas repasar fracciones, despejar una ecuación o interpretar una gráfica cada vez que aparece un problema nuevo, el curso se vuelve cuesta arriba. Dedicar ahora sesiones cortas a esas herramientas tiene más retorno que memorizar un tema de segundo sin contexto.

Por ejemplo, para Matemáticas o Física puedes alternar:

- Un día de álgebra básica y funciones.
- Un día de problemas con unidades, proporciones y lectura de enunciados.
- Un día de corrección y repaso de errores.

Para materias teóricas, alterna lectura activa, esquemas hechos de memoria y respuestas breves a preguntas de examen. Copiar apuntes da sensación de avance, pero no verifica que puedas recuperar la información ni usarla.

## Un calendario sostenible de seis semanas

No necesitas estudiar todos los días. Una propuesta razonable es trabajar cuatro sesiones de 60 a 90 minutos por semana y reservar tres días libres. Cada semana elige solo dos prioridades: una laguna de base y una habilidad de examen.

| Semana | Base que consolidar                      | Habilidad de examen                      |
| ------ | ---------------------------------------- | ---------------------------------------- |
| 1      | Diagnóstico y materiales                 | Leer una consigna y subrayar datos       |
| 2      | Álgebra, vocabulario o conceptos previos | Explicar un procedimiento por escrito    |
| 3      | Funciones, comentario o estructura       | Resolver una pregunta con tiempo         |
| 4      | Punto débil principal                    | Corregir con criterios, no con intuición |
| 5      | Repaso espaciado                         | Mini simulacro                           |
| 6      | Errores repetidos                        | Plan de arranque para septiembre         |

La última semana debe dejar preparado un plan simple para el curso: qué revisar cada semana, cuándo harás el primer simulacro y cómo guardarás tus errores. No llenes el calendario de tareas que dependen de una motivación perfecta.

## Errores que hacen que el verano no sirva

El primero es intentar abarcar todas las asignaturas a la vez. El segundo, pasar horas consumiendo resúmenes o vídeos sin resolver nada. El tercero, estudiar sin corrección: si no comparas tu respuesta con un criterio o una solución razonada, no puedes saber qué mejorar.

También conviene evitar convertir el verano en una repetición del curso. Descansar no es perder tiempo: una rutina breve, con días libres, es mucho más útil que un sprint de dos semanas.

## Cómo saber si el plan está funcionando

Al terminar deberías poder nombrar tus tres bloqueos prioritarios, resolver mejor los ejercicios básicos que en la primera semana y tener un sistema de corrección. No hace falta llegar sabiendo todo el temario de PAU; hace falta que el aprendizaje de septiembre no se apoye en terreno inestable.

Cuando empiece el curso, continúa con [un calendario de Selectividad que se pueda cumplir](/blog/preparar-selectividad-con-calendario/) y usa los modelos oficiales de tu comunidad. Si quieres priorizar asignaturas, nota objetivo y fechas de forma realista, puedes consultar las [clases para Selectividad y PAU](/clases-particulares/selectividad/).
`,B=`---
title: Preparar la Selectividad con un calendario que sí se cumple
date: 2026-06-07
updated: 2026-06-07
description: Cómo convertir el temario de Selectividad o PAU en una hoja de ruta semanal con bloques, simulacros y margen real.
tag: Exámenes
category: Selectividad
relatedService: /preparacion-examenes/matematicas-selectividad/
relatedPosts: como-estudiar-matematicas-sin-memorizar,ib-gcse-como-preparar-examenes-internacionales
image: /favicon.svg
---

Cuando se acerca la Selectividad, el riesgo no es solo tener mucho temario. El riesgo es estudiar sin dirección: repasar lo que ya sale bien, aplazar lo difícil y llegar a los simulacros demasiado tarde.

Un calendario útil no es una tabla bonita. Es un sistema de decisiones: qué toca esta semana, qué evidencia demuestra progreso y qué se corrige antes de seguir.

## Empieza por el final

Antes de repartir temas, fija tres datos:

- Fecha de cada examen.
- Nota objetivo y margen realista.
- Semanas disponibles hasta la prueba.

Con eso puedes trabajar hacia atrás desde el día del examen. No todas las asignaturas necesitan el mismo peso y no todos los temas tienen el mismo retorno. El calendario debe reflejarlo.

## Bloques pequeños y medibles

Un bloque de estudio productivo debería terminar con una salida concreta:

1. Resumen activo del tema sin copiar apuntes.
2. Ejercicios tipo examen.
3. Corrección con lista de errores.
4. Un mini objetivo para la siguiente sesión.

La pregunta no es "¿cuántas horas he estudiado?", sino "¿qué soy capaz de resolver mejor que ayer?".

## Simulacros antes de la última semana

Dejar los exámenes de años anteriores para el final es un error frecuente. Los simulacros sirven para entrenar tiempo, presión, formato y gestión de errores. Si aparecen tarde, ya no hay margen para corregir patrones.

Empieza con simulacros parciales y aumenta la duración cuando el contenido esté más asentado. Después de cada simulacro, separa fallos en tres grupos: concepto, procedimiento y tiempo.

## Ejemplo de semana

Una semana razonable podría organizarse así:

1. Lunes: repaso activo y formulario de un tema.
2. Martes: ejercicios tipo examen del mismo bloque.
3. Miércoles: corrección y lista de errores.
4. Jueves: segundo bloque o tema débil.
5. Viernes: mini simulacro cronometrado.
6. Fin de semana: recuperación de retrasos o repaso ligero.

El calendario debe tener colchón. Si no hay huecos, se romperá el primer día que un tema sea más difícil de lo previsto.

## Señales de que el plan no funciona

- Avanzas temas sin corregir ejercicios.
- Repasas siempre lo que ya dominas.
- No sabes qué errores se repiten.
- Los simulacros llegan al final.
- El plan exige una energía que no puedes sostener.

## Cómo lo trabajamos

En Nebula el calendario se construye con asignaturas, nota objetivo, fechas y punto de partida. Después se revisa semanalmente para ajustar prioridades.

Si necesitas preparar PAU, Matemáticas, Física, Química u otra materia con un plan medible, revisa [clases particulares para Selectividad y PAU](/clases-particulares/selectividad/) o [reserva un diagnóstico](/contacto/).
`,Q=`---
title: Tu primer proyecto de Python para datos: qué hacer antes de aprender más librerías
date: 2026-07-21
updated: 2026-07-21
description: Guía para elegir y terminar un primer proyecto de Python para análisis de datos, con pasos, alcance realista y errores que evitar.
tag: Programación y datos
category: Programación y datos
relatedService: /formacion-it/python-sql-data-engineering/
relatedPosts: python-y-sql-para-empezar-en-datos,transicion-al-sector-it-en-6-meses,r-spss-jamovi-python-programa-estadistico-universidad
image: /favicon.svg
---

Cuando empiezas con Python es fácil enlazar cursos, vídeos y listas de librerías sin construir nada que puedas explicar. Un primer proyecto pequeño cambia esa dinámica: te obliga a formular una pregunta, limpiar datos imperfectos, tomar decisiones y comunicar un resultado.

No necesitas un proyecto espectacular ni un conjunto de datos enorme. Necesitas uno que puedas terminar en una o dos semanas y defender paso a paso.

## Elige una pregunta, no una tecnología

“Voy a aprender pandas” no es un proyecto. “Quiero saber qué variables se relacionan con el precio de alquiler en este conjunto de datos” sí lo es. La pregunta delimita qué datos necesitas, qué limpieza tiene sentido y qué gráficos aportan información.

Para empezar, sirven preguntas sencillas como:

- ¿Cómo varían las ventas por mes y categoría?
- ¿Qué factores se asocian con el precio de un producto?
- ¿Qué horas concentran más incidencias en un registro?
- ¿Qué películas o libros aparecen con más frecuencia por género y año?

Evita temas que dependan de predicción, inteligencia artificial o extracción de datos de una web desde el primer día. La dificultad inicial debe estar en entender el flujo de análisis, no en configurar diez herramientas.

## El alcance adecuado para un primer proyecto

Una versión completa y pequeña tiene cinco piezas:

1. Un archivo de datos en CSV.
2. Una pregunta escrita en dos líneas.
3. Limpieza documentada: nulos, duplicados, tipos de fecha o nombres inconsistentes.
4. Dos o tres análisis o gráficos que respondan a la pregunta.
5. Una conclusión con límites: qué muestran los datos y qué no permiten afirmar.

Empieza con \`pandas\` para cargar y transformar tablas y con \`matplotlib\` o \`seaborn\` para visualizar. Añade otra librería solo cuando tengas un problema concreto que resolver. Saber explicar por qué agrupaste, filtraste o eliminaste una fila importa más que usar muchas funciones.

## Un flujo de trabajo en siete pasos

Primero, abre el archivo y comprueba cuántas filas y columnas tiene. Después mira los tipos de datos y algunos ejemplos, sin modificar nada. El tercer paso es redactar una lista de problemas de calidad: una fecha guardada como texto, categorías duplicadas o valores ausentes.

En cuarto lugar, limpia cada problema y deja un comentario que explique la decisión. En quinto, crea una tabla resumen antes de hacer gráficos: medias, conteos, porcentajes o agrupaciones. El sexto paso es elegir una visualización por pregunta; no uses un gráfico porque “queda bien”. Por último, escribe tres conclusiones y una limitación.

Un cuaderno ordenado puede seguir esta estructura:

\`\`\`text
01_pregunta_y_datos
02_revision_de_calidad
03_limpieza
04_analisis
05_visualizaciones
06_conclusiones_y_limites
\`\`\`

## Cómo evitar los errores más comunes

No borres los valores ausentes automáticamente: primero pregunta si son pocos, si representan una categoría o si eliminarlos altera el análisis. No confundas correlación con causa. Y no presentes un gráfico sin título, unidades ni contexto.

También es importante separar trabajo propio y código reutilizado. Si consultas documentación o adaptas una solución, enlázala o anótala. Lo que debes poder hacer es explicar cada bloque de tu proyecto y reproducirlo desde cero.

## Cuándo darlo por terminado

Termina cuando otra persona pueda abrir el cuaderno, entender la pregunta, ejecutar las celdas y llegar a la misma conclusión. Si todavía quieres añadir una sexta visualización o una predicción, guárdala para una versión dos. Acabar y explicar un proyecto breve vale más que dejar varios a medias.

Si estás decidiendo qué aprender antes, empieza por la guía [Python y SQL para empezar en datos](/blog/python-y-sql-para-empezar-en-datos/). Para trabajar Python desde la base o conectar el proyecto con una asignatura, revisa las [clases particulares de Programación](/clases-particulares/programacion-universidad/).
`,T=`---
title: Probabilidad condicionada y teorema de Bayes: problemas universitarios resueltos
date: 2026-06-27
updated: 2026-06-27
description: Problemas resueltos de probabilidad condicionada y teorema de Bayes para universidad, con fórmulas, árboles y errores frecuentes.
tag: Estadística
category: Estadística
relatedService: /clases-particulares/estadistica-universidad/
relatedPosts: estadistica-desde-cero-para-elegir-contrastes,como-estudiar-matematicas-sin-memorizar,derivadas-integrales-universitarias-prueba-nivel-ejercicios-resueltos
image: /favicon.svg
---

La probabilidad condicionada y el teorema de Bayes aparecen en asignaturas de Estadística, Ingeniería, Economía, Ciencia de Datos y Biomedicina. El problema no suele ser la fórmula, sino saber qué evento está condicionado por cuál.

La probabilidad condicionada se define como:

$$
P(A|B)=\\frac{P(A\\cap B)}{P(B)}
$$

siempre que \\(P(B)>0\\). Se lee: probabilidad de \\(A\\) sabiendo que ha ocurrido \\(B\\).

## Teorema de Bayes

El teorema de Bayes permite invertir una condición:

$$
P(A|B)=\\frac{P(B|A)P(A)}{P(B)}
$$

Cuando \\(B\\) puede ocurrir bajo varios escenarios \\(A_1,A_2,\\ldots,A_n\\), se usa:

$$
P(A_i|B)=\\frac{P(B|A_i)P(A_i)}{\\sum_{j=1}^{n}P(B|A_j)P(A_j)}
$$

La parte difícil suele estar en calcular bien el denominador: la probabilidad total de observar \\(B\\).

## Problema 1: test médico

Una enfermedad afecta al 2% de la población. Un test da positivo en el 95% de los enfermos y también da positivo en el 4% de los sanos. Si una persona da positivo, ¿cuál es la probabilidad de que esté enferma?

Definimos:

- \\(E\\): estar enfermo.
- \\(+\\): test positivo.

Datos:

$$
P(E)=0.02,\\quad P(+|E)=0.95,\\quad P(+|\\overline{E})=0.04
$$

Aplicamos Bayes:

$$
P(E|+)=\\frac{P(+|E)P(E)}{P(+|E)P(E)+P(+|\\overline{E})P(\\overline{E})}
$$

Sustituimos:

$$
P(E|+)=\\frac{0.95\\cdot 0.02}{0.95\\cdot 0.02+0.04\\cdot 0.98}
$$

Calculando:

$$
P(E|+)=\\frac{0.019}{0.0582}\\approx 0.326
$$

La probabilidad es aproximadamente 32.6%. El resultado sorprende porque la enfermedad es poco frecuente: la prevalencia importa.

## Problema 2: urnas

Hay dos urnas. La urna 1 tiene 3 bolas rojas y 2 azules. La urna 2 tiene 1 bola roja y 4 azules. Se elige una urna al azar y después se extrae una bola. Si la bola es roja, ¿cuál es la probabilidad de haber elegido la urna 1?

Definimos:

- \\(U_1\\): elegir urna 1.
- \\(U_2\\): elegir urna 2.
- \\(R\\): extraer bola roja.

Datos:

$$
P(U_1)=P(U_2)=\\frac{1}{2}
$$

Además:

$$
P(R|U_1)=\\frac{3}{5},\\quad P(R|U_2)=\\frac{1}{5}
$$

Bayes:

$$
P(U_1|R)=\\frac{P(R|U_1)P(U_1)}{P(R|U_1)P(U_1)+P(R|U_2)P(U_2)}
$$

Sustituyendo:

$$
P(U_1|R)=\\frac{\\frac{3}{5}\\cdot\\frac{1}{2}}{\\frac{3}{5}\\cdot\\frac{1}{2}+\\frac{1}{5}\\cdot\\frac{1}{2}}
=\\frac{3}{4}
$$

La probabilidad es 75%.

## Problema 3: producción defectuosa

Una fábrica tiene dos máquinas. La máquina A produce el 70% de las piezas y la máquina B el 30%. A tiene una tasa de defectos del 3% y B del 8%. Si una pieza es defectuosa, ¿cuál es la probabilidad de que venga de B?

Datos:

$$
P(A)=0.7,\\quad P(B)=0.3
$$

$$
P(D|A)=0.03,\\quad P(D|B)=0.08
$$

Aplicamos:

$$
P(B|D)=\\frac{P(D|B)P(B)}{P(D|A)P(A)+P(D|B)P(B)}
$$

Sustituimos:

$$
P(B|D)=\\frac{0.08\\cdot 0.3}{0.03\\cdot 0.7+0.08\\cdot 0.3}
=\\frac{0.024}{0.045}\\approx 0.533
$$

Aunque B produce menos piezas, explica aproximadamente el 53.3% de las defectuosas porque su tasa de defectos es mayor.

## Errores frecuentes

- Confundir \\(P(A|B)\\) con \\(P(B|A)\\).
- Ignorar la probabilidad base o prevalencia.
- Calcular el denominador con un solo caso.
- No definir eventos antes de operar.
- Pasar porcentajes a decimales de forma incorrecta.

## Método para resolver problemas de Bayes

Sigue siempre estos pasos:

1. Define eventos con letras claras.
2. Escribe lo que te dan como probabilidades condicionadas o marginales.
3. Identifica qué probabilidad te piden.
4. Construye el denominador con probabilidad total.
5. Interpreta el resultado en el contexto.

Si estás preparando Estadística, también puedes leer [Estadística desde cero para elegir contrastes](/blog/estadistica-desde-cero-para-elegir-contrastes/) o revisar la página de [clases particulares de Estadística y Probabilidad](/clases-particulares/estadistica-universidad/).
`,O=`---
title: Python y SQL para empezar en datos: qué aprender primero
date: 2026-06-01
updated: 2026-06-01
description: Una ruta inicial para estudiar programación y datos sin saltar entre cursos: SQL, Python, fundamentos y un proyecto pequeño.
tag: Programación
category: Programación y datos
relatedService: /formacion-it/python-sql-data-engineering/
relatedPosts: transicion-al-sector-it-en-6-meses,estadistica-desde-cero-para-elegir-contrastes
image: /favicon.svg
---

Aprender datos suele empezar con una duda razonable: ¿qué estudio primero, Python, SQL, estadística, Power BI, cloud o machine learning? La confusión aparece cuando intentas estudiar todo a la vez y no cierras nada.

Para construir una base sólida, conviene ordenar la ruta.

## Empieza por SQL

SQL te obliga a pensar en tablas, filtros, agrupaciones y relaciones. Es directo, muy usado y permite comprobar rápido si entiendes los datos.

Los primeros bloques deberían ser:

- Seleccionar columnas.
- Filtrar filas.
- Agrupar y resumir.
- Unir tablas.
- Leer resultados con criterio.

Si no entiendes una tabla, Python no va a arreglar el análisis. Solo hará que el error tenga más código alrededor.

## Usa Python como herramienta

Después entra Python, pero con foco:

1. Variables, listas, diccionarios y funciones.
2. Lectura de errores.
3. Pandas para cargar y transformar datos.
4. Gráficos sencillos para responder preguntas.
5. Scripts o notebooks reproducibles.

No hace falta aprender todo el lenguaje para empezar. Hace falta resolver problemas pequeños sin copiar y saber explicar cada decisión.

## Construye un proyecto mínimo

Un primer proyecto de datos puede ser suficiente si está cerrado:

- Dataset limpio y documentado.
- Tres preguntas concretas.
- Consultas SQL o transformaciones en Python.
- Visualizaciones básicas.
- README con decisiones, limitaciones y próximos pasos.

El objetivo no es impresionar por tamaño. Es demostrar que puedes pasar de una pregunta a una respuesta defendible.

## Evita la dispersión

Una ruta razonable puede ser:

1. Dos semanas de SQL.
2. Dos semanas de Python básico.
3. Dos semanas de mini proyecto.
4. Una semana para documentar y explicar.

Si una semana no produce una salida visible, reduce alcance. Mejor terminar algo pequeño que abandonar algo enorme.

## Cómo saber si avanzas

No midas el progreso por horas de vídeo. Mídelo por entregables:

- Puedes escribir una consulta sin mirar una solución.
- Lees un error de Python y entiendes dónde buscar.
- Tu notebook se ejecuta desde arriba hasta abajo.
- El README explica qué hiciste y por qué.
- Puedes contar el proyecto en tres minutos sin perderte en detalles.

Esa evidencia es la que convierte el estudio en una base profesional.

Para acompañar esta base puedes revisar [clases particulares de Programación desde cero](/clases-particulares/programacion-universidad/) o leer la ruta de [transición al sector IT en 6 meses](/blog/transicion-al-sector-it-en-6-meses/).
`,H=`---
title: Qué prueba estadística utilizar: guía para elegir el test correcto
date: 2026-07-09
updated: 2026-07-22
description: Guía práctica para elegir la prueba estadística correcta según la pregunta, el tipo de variable, el número de grupos y el diseño del estudio.
tag: Estadística
category: Estadística
relatedService: /clases-particulares/estadistica-psicologia-ade/
relatedPosts: como-aprobar-estadistica-psicologia-sin-base-matematica,regresion-lineal-anova-cuando-utilizar-interpretar-resultados,estadistica-desde-cero-para-elegir-contrastes
image: /favicon.svg
---

Elegir la prueba estadística correcta es una de las partes más difíciles para estudiantes universitarios. Muchas veces conocen la t de Student, ANOVA, chi-cuadrado o regresión, pero no saben cuál usar ante un enunciado nuevo.

La clave es no empezar por el nombre del test. Empieza por la pregunta y por el tipo de variables.

## Paso 1: identifica la pregunta

Casi todos los análisis responden a una de estas preguntas:

- ¿Quiero comparar una media?
- ¿Quiero comparar varios grupos?
- ¿Quiero estudiar una relación?
- ¿Quiero predecir una variable?
- ¿Quiero analizar frecuencias o categorías?

Si no puedes escribir la pregunta en una frase, todavía no estás listo para elegir prueba.

## Paso 2: clasifica la variable dependiente

La variable dependiente es lo que quieres explicar, comparar o predecir.

Puede ser:

- Cuantitativa: puntuación, edad, tiempo, nota, ansiedad en escala.
- Categórica: grupo, diagnóstico, respuesta sí/no, condición experimental.

Si la variable dependiente es cuantitativa, suelen aparecer t, ANOVA, correlación o regresión. Si es categórica, suelen aparecer chi-cuadrado o modelos específicos.

## Paso 3: cuenta grupos o condiciones

Si comparas medias:

- Una media contra un valor: t de una muestra.
- Dos grupos independientes: t de muestras independientes.
- Dos medidas en las mismas personas: t de muestras relacionadas.
- Tres o más grupos independientes: ANOVA de un factor.
- Tres o más medidas repetidas: ANOVA de medidas repetidas.

La diferencia entre independiente y relacionado es crucial. No es lo mismo comparar dos grupos de personas que comparar a las mismas personas antes y después.

## Paso 4: si estudias relación, mira el tipo de variables

Si tienes dos variables cuantitativas, puede encajar una correlación:

$$
r=\\frac{\\operatorname{cov}(X,Y)}{s_Xs_Y}
$$

Si además quieres predecir \\(Y\\) a partir de \\(X\\), puedes usar regresión lineal:

$$
Y=\\beta_0+\\beta_1X+\\varepsilon
$$

Si las variables son categóricas, puede encajar chi-cuadrado:

$$
\\chi^2=\\sum \\frac{(O-E)^2}{E}
$$

donde \\(O\\) son frecuencias observadas y \\(E\\) frecuencias esperadas.

## Guía rápida por escenarios

### Tengo dos grupos y una variable cuantitativa

Usa t de Student para muestras independientes si los grupos son distintos. Ejemplo: ansiedad en grupo control frente a grupo intervención.

### Tengo antes y después en las mismas personas

Usa t de muestras relacionadas si solo hay dos momentos. Ejemplo: estrés antes y después de un programa.

### Tengo tres grupos

Usa ANOVA si comparas medias entre tres o más grupos. Ejemplo: rendimiento en tres métodos de estudio.

### Tengo dos variables cuantitativas

Usa correlación si quieres medir asociación. Usa regresión si quieres predecir o modelizar una variable dependiente.

### Tengo variables categóricas

Usa chi-cuadrado si quieres estudiar asociación entre categorías. Ejemplo: género y elección de tratamiento.

## Supuestos: el filtro que no puedes saltarte

Elegir el test no termina el trabajo. Revisa:

- Independencia de observaciones.
- Escala de medida.
- Normalidad cuando corresponda.
- Homogeneidad de varianzas.
- Tamaño muestral.
- Presencia de valores extremos.

Los supuestos no son un trámite. Pueden cambiar la prueba o la interpretación.

## Tabla de decisión por diseño

| Objetivo y diseño                | Opción paramétrica habitual | Alternativa o modelo a valorar              |
| -------------------------------- | --------------------------- | ------------------------------------------- |
| Una media frente a un valor      | t de una muestra            | Wilcoxon de una muestra o método robusto    |
| Dos grupos independientes        | t independiente             | Mann-Whitney                                |
| Dos medidas relacionadas         | t pareada                   | Wilcoxon de rangos con signo                |
| Tres o más grupos independientes | ANOVA                       | Kruskal-Wallis                              |
| Tres o más medidas relacionadas  | ANOVA de medidas repetidas  | Friedman                                    |
| Dos variables cuantitativas      | Correlación de Pearson      | Spearman                                    |
| Dos variables categóricas        | Chi-cuadrado                | Fisher cuando las frecuencias lo aconsejen  |
| Predecir respuesta cuantitativa  | Regresión lineal            | Modelo robusto o transformación justificada |

La tabla ofrece candidatas, no decisiones automáticas. El diseño, la independencia y la pregunta científica tienen prioridad.

## Árbol de decisión textual

1. ¿La respuesta es cuantitativa?
   - Sí: decide si quieres comparar grupos, estudiar asociación o predecir.
   - No: si es categórica, valora tablas de contingencia o modelos para respuesta categórica.
2. Si comparas grupos, ¿cuántos son?
   - Dos: distingue muestras independientes de medidas relacionadas.
   - Tres o más: distingue grupos independientes de medidas repetidas.
3. Si estudias relación, ¿las variables son cuantitativas?
   - Asociación sin dirección predictiva: correlación.
   - Respuesta definida que quieres modelizar: regresión.
4. Revisa independencia, escala, valores extremos, residuos y homogeneidad.
5. Escribe qué parámetro o hipótesis responde a tu pregunta.

## Paramétricas frente a no paramétricas

Las pruebas no paramétricas no son una solución universal para “datos no normales”. Cambian la hipótesis y la información que utilizan.

- **t independiente:** compara medias de dos grupos independientes bajo su modelo.
- **Mann-Whitney:** trabaja con rangos entre dos grupos independientes.
- **t pareada:** analiza la media de las diferencias dentro de pares.
- **Wilcoxon:** trabaja con rangos y signos de diferencias relacionadas.
- **ANOVA:** compara medias mediante un modelo lineal.
- **Kruskal-Wallis:** extiende el enfoque por rangos a varios grupos independientes.

## Ejemplos por titulación

### Psicología

Se mide ansiedad antes y después de una intervención en las mismas personas. Hay dos momentos emparejados: t pareada como candidata; Wilcoxon si el planteamiento por rangos resulta más adecuado.

### ADE

Se estudia cómo cambia el gasto mensual con los ingresos. La respuesta y el predictor son cuantitativos: regresión lineal, con interpretación económica de la pendiente y revisión de residuos.

### Biología

Se compara la concentración de un marcador en cuatro tratamientos independientes. La respuesta es cuantitativa y el factor tiene cuatro niveles: ANOVA como candidata; Kruskal-Wallis si el modelo paramétrico no resulta defendible.

## Correlación, regresión, ANOVA y chi-cuadrado

- **Correlación:** cuantifica asociación sin convertirla en causalidad.
- **Regresión:** modeliza una respuesta y permite incorporar varios predictores.
- **ANOVA:** es un caso del modelo lineal con predictores categóricos.
- **Chi-cuadrado:** compara frecuencias observadas y esperadas en variables categóricas.

## Error típico: elegir por capítulo

Muchos alumnos usan el test del tema que están estudiando. Si el examen mezcla contenidos, esa estrategia falla. El criterio debe ser la estructura del problema, no el orden del temario.

## Plantilla de decisión

Antes de elegir prueba, completa:

1. Mi variable dependiente es...
2. Es cuantitativa o categórica...
3. Tengo tantos grupos o condiciones...
4. Las observaciones son independientes o relacionadas...
5. Quiero comparar, asociar o predecir...
6. Por tanto, la prueba candidata es...

## Checklist final

1. He escrito la pregunta sin nombrar una prueba.
2. He identificado respuesta, predictores y escala de medida.
3. Sé si los grupos o medidas son independientes o relacionados.
4. He definido cuántos grupos, condiciones o momentos existen.
5. He revisado diseño, valores extremos y supuestos relevantes.
6. Puedo explicar qué hipótesis contrasta la prueba candidata.
7. Informaré tamaño del efecto e incertidumbre cuando corresponda.
8. Interpretaré el resultado en el contexto original.

## Preguntas frecuentes

### ¿Debo hacer siempre una prueba de normalidad?

No como trámite aislado. Revisa el supuesto que corresponda, utiliza gráficos y considera tamaño muestral, diseño y residuos.

### ¿Mann-Whitney sustituye siempre a la t de Student?

No. Responden bajo marcos distintos. La elección depende de la pregunta y de la forma de los datos.

### ¿Puedo decidir solo con SPSS o Jamovi?

El software calcula, pero no conoce tu diseño ni tu pregunta. La decisión debe estar razonada antes de seleccionar un menú.

Para practicar la interpretación, continúa con [p-valor, intervalo de confianza y tamaño del efecto](/blog/p-valor-intervalo-confianza-tamano-efecto-ejemplo/) o revisa las [clases de Estadística para Psicología, ADE y Ciencias Sociales](/clases-particulares/estadistica-psicologia-ade/).
`,V=`---
title: Qué son las derivadas y para qué se utilizan
date: 2026-06-19
updated: 2026-06-19
description: Una guía clara para entender las derivadas como pendiente, ritmo de cambio y herramienta para optimizar funciones.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: como-resolver-limites-indeterminaciones-ejercicios,que-son-las-integrales-y-para-que-se-utilizan,como-estudiar-matematicas-sin-memorizar
image: /favicon.svg
---

Una derivada mide **cómo cambia una magnitud cuando cambia otra**. En una gráfica, esa idea se ve como la pendiente de la curva en un punto concreto. En un problema real, puede representar velocidad, crecimiento, coste marginal, sensibilidad de un modelo o el punto donde una función deja de subir y empieza a bajar.

La dificultad no está solo en aplicar reglas. Está en entender qué pregunta responde la derivada.

## La idea básica

Si una función \\(f(x)\\) describe una relación entre dos variables, la derivada \\(f'(x)\\) mide el cambio instantáneo de \\(f\\) respecto a \\(x\\).

La definición formal es:

$$
f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}
$$

Ese cociente compara cuánto cambia la función cuando \\(x\\) aumenta una cantidad pequeña \\(h\\). El límite hace que esa cantidad sea cada vez más pequeña hasta capturar el cambio en un punto. La guía sobre [cómo resolver límites e indeterminaciones](/blog/como-resolver-limites-indeterminaciones-ejercicios/) desarrolla las técnicas algebraicas que sostienen este cálculo.

## Pendiente de la tangente

En una curva suave, la derivada en \\(x_0\\) coincide con la pendiente de la recta tangente:

$$
f'(x_0)=m_{\\text{tangente}}
$$

![Curva con recta tangente en un punto](/assets/latex/derivative-tangent.svg)

Si la pendiente es positiva, la función crece en ese punto. Si es negativa, decrece. Si vale cero, puede haber un máximo, un mínimo o una zona plana que conviene estudiar con más contexto.

## Para qué se utilizan

Las derivadas aparecen en muchos problemas porque permiten estudiar cambios:

1. **Velocidad.** Si \\(s(t)\\) es la posición, entonces \\(s'(t)\\) es la velocidad.
2. **Optimización.** Para maximizar beneficios, minimizar costes o encontrar el mejor diseño, se buscan puntos donde \\(f'(x)=0\\).
3. **Economía y empresa.** El coste marginal o ingreso marginal se interpreta como una derivada.
4. **Ciencia e ingeniería.** Cambios de temperatura, presión, carga, concentración o energía se modelan con derivadas.
5. **Datos e inteligencia artificial.** Muchos algoritmos ajustan parámetros siguiendo pendientes de una función de error.

## Reglas útiles, pero con sentido

Al estudiar derivadas conviene conocer reglas, pero no memorizarlas sin interpretación:

$$
\\frac{d}{dx}x^n=nx^{n-1}
$$

$$
\\begin{aligned}
(f+g)'&=f'+g'\\\\
(fg)'&=f'g+fg'
\\end{aligned}
$$

$$
(f\\circ g)'(x)=f'(g(x))\\,g'(x)
$$

La regla de la cadena, por ejemplo, no es un truco. Dice que si una variable depende de otra de forma indirecta, el cambio total combina los cambios intermedios.

## Un ejemplo rápido

Para la función:

$$
f(x)=x^2-4x+3
$$

su derivada es:

$$
f'(x)=2x-4
$$

El punto crítico se obtiene con:

$$
2x-4=0 \\Rightarrow x=2
$$

Después no basta con decir "sale 2". Hay que interpretar qué representa ese punto en el problema: un mínimo, un máximo, un cambio de tendencia o una condición que debe compararse con el dominio.

## Cómo estudiarlas mejor

Para dominar derivadas, trabaja cada ejercicio en tres capas:

- Qué significa la función.
- Qué mide la derivada.
- Qué interpretación tiene el resultado.

Si solo practicas reglas, cualquier enunciado nuevo parece distinto. Si entiendes la derivada como ritmo de cambio, las reglas empiezan a tener dirección.

Puedes continuar con [qué son las integrales y para qué se utilizan](/blog/que-son-las-integrales-y-para-que-se-utilizan/) o revisar [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/).
`,G=`---
title: Qué son las integrales y para qué se utilizan
date: 2026-06-21
updated: 2026-08-12
description: Una explicación práctica de las integrales como acumulación, área bajo la curva y herramienta para medir cantidades totales.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: teorema-fundamental-calculo-ejemplos-ejercicios,integral-definida-e-indefinida-diferencias-ejemplos,area-entre-dos-curvas-ejercicios-resueltos
image: /favicon.svg
---

Una integral mide **acumulación**. Si la derivada responde a "a qué ritmo cambia algo", la integral responde a "cuánto se ha acumulado en total".

Por eso las integrales aparecen cuando queremos calcular áreas, distancias recorridas, trabajo, masa, probabilidad acumulada, consumo total o cualquier cantidad que se obtiene sumando pequeñas contribuciones.

## La idea geométrica

La integral definida de una función positiva entre \\(a\\) y \\(b\\) representa el área bajo la curva:

$$
\\int_a^b f(x)\\,dx
$$

![Área bajo una curva entre dos límites](/assets/latex/integral-area.svg)

La notación \\(dx\\) recuerda que estamos acumulando tiras muy estrechas. Cada tira tiene una altura aproximada \\(f(x)\\) y una anchura muy pequeña.

## La idea de acumulación

Si \\(v(t)\\) es una velocidad, entonces:

$$
\\int_{t_1}^{t_2} v(t)\\,dt
$$

representa la distancia acumulada entre los instantes \\(t_1\\) y \\(t_2\\), siempre que la velocidad sea positiva. Si una máquina consume energía a una tasa \\(p(t)\\), la integral de \\(p(t)\\) calcula el consumo total.

La integral no solo mira un punto: suma lo que ocurre en todo un intervalo.

## Relación con las derivadas

Derivadas e integrales están conectadas por el [teorema fundamental del cálculo](/blog/teorema-fundamental-calculo-ejemplos-ejercicios/). Si \\(F\\) es una primitiva de \\(f\\), es decir, si:

$$
F'(x)=f(x)
$$

entonces:

$$
\\int_a^b f(x)\\,dx = F(b)-F(a)
$$

Esto permite calcular acumulaciones sin sumar infinitas tiras una por una.

## Para qué se utilizan

Las integrales se usan en contextos muy distintos:

1. **Física.** Trabajo, energía, carga eléctrica, centro de masa o distancia recorrida.
2. **Economía.** Costes acumulados, ingresos totales o excedente del consumidor.
3. **Estadística.** Probabilidad acumulada en distribuciones continuas.
4. **Ingeniería.** Flujos, señales, presión acumulada y modelos continuos.
5. **Datos.** Medidas agregadas cuando una magnitud cambia de forma continua.

## Ejemplo básico

Si:

$$
f(x)=2x
$$

una primitiva es:

$$
F(x)=x^2
$$

Por tanto:

$$
\\begin{aligned}
\\int_1^3 2x\\,dx &= F(3)-F(1)\\\\
&=9-1=8
\\end{aligned}
$$

El resultado no es solo un número. Representa la acumulación de \\(2x\\) entre \\(1\\) y \\(3\\), o el área bajo esa recta en ese intervalo.

## Cómo estudiarlas mejor

Antes de resolver, pregúntate:

- Qué se está acumulando.
- Entre qué límites ocurre.
- Qué unidades tiene el resultado.
- Si la integral representa área, distancia, probabilidad, coste u otra magnitud.

Cuando entiendes la integral como acumulación, las técnicas de cálculo dejan de parecer recetas sueltas y empiezan a tener sentido.

El paso siguiente es distinguir con claridad la [integral definida de la indefinida](/blog/integral-definida-e-indefinida-diferencias-ejemplos/) y aprender a reconocer la estructura del integrando. La guía de [métodos de integración y elección de técnica](/blog/metodos-de-integracion-como-elegir/) organiza ese diagnóstico; después puedes profundizar en [fracciones parciales](/blog/integrales-funciones-racionales-fracciones-parciales/) y aplicar la integral definida al [área entre dos curvas](/blog/area-entre-dos-curvas-ejercicios-resueltos/).

Puedes leer también [qué son las derivadas y para qué se utilizan](/blog/que-son-las-derivadas-y-para-que-se-utilizan/) o revisar [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/).
`,w=`---
title: R, SPSS, Jamovi o Python: qué programa estadístico conviene usar en la universidad
date: 2026-07-14
updated: 2026-07-14
description: Comparativa práctica entre R, SPSS, Jamovi y Python para Estadística universitaria: ventajas, límites y cuál elegir según asignatura.
tag: Software estadístico
category: Estadística
relatedService: /clases-particulares/estadistica-psicologia-ade/
relatedPosts: como-aprobar-estadistica-psicologia-sin-base-matematica,que-prueba-estadistica-utilizar-guia-test-correcto,econometria-desde-cero-interpretar-regresion
image: /favicon.svg
---

Elegir entre R, SPSS, Jamovi o Python depende de tu carrera, tu asignatura y tu objetivo. No hay una herramienta perfecta para todo. Hay herramientas más cómodas para aprender, más potentes para investigar y más útiles para programar.

Lo importante es no confundir saber hacer clic con entender Estadística. El programa ayuda, pero la interpretación sigue siendo tu responsabilidad.

## SPSS: útil si tu grado lo pide

SPSS es frecuente en Psicología, Educación, Ciencias Sociales y algunas asignaturas aplicadas. Su ventaja principal es la interfaz gráfica: puedes hacer descriptivos, t de Student, ANOVA, correlaciones y regresiones sin programar.

Ventajas:

- Interfaz guiada.
- Muy usado en grados de Psicología.
- Salidas reconocibles en exámenes.
- Bueno para empezar si la asignatura lo exige.

Limitaciones:

- Menos flexible que R o Python.
- Puede fomentar copiar salidas sin entenderlas.
- Licencia dependiente de la universidad.

SPSS conviene si tu profesor lo usa, si el examen pide interpretar sus tablas o si estás empezando desde cero.

## Jamovi: amable para aprender

Jamovi es una opción muy cómoda para aprender Estadística aplicada. Tiene interfaz visual, resultados claros y una curva de entrada más suave que R.

Ventajas:

- Gratuito.
- Salidas limpias.
- Ideal para t, ANOVA, correlación, regresión y descriptiva.
- Menos intimidante para estudiantes sin base técnica.

Limitaciones:

- Menos flexible para análisis avanzados.
- No sustituye una buena comprensión de supuestos.

Jamovi suele ser buena elección para Psicología, Educación y primeros cursos con mucha interpretación.

## R: potente para Estadística y análisis reproducible

R es uno de los lenguajes más usados en Estadística. Permite análisis reproducibles y gráficos de alta calidad.

Una regresión lineal básica en R puede escribirse así:

\`\`\`r
modelo <- lm(nota ~ horas, data = datos)
summary(modelo)
\`\`\`

Ventajas:

- Muy potente para Estadística.
- Gran ecosistema de paquetes.
- Ideal para investigación, TFG, TFM y análisis reproducible.
- Excelente para gráficos.

Limitaciones:

- Requiere aprender sintaxis.
- Al principio puede distraer de la interpretación.

R conviene si quieres ir más allá de aprobar la asignatura y ganar una herramienta sólida para datos.

## Python: útil si conectas Estadística con programación

Python es muy usado en ciencia de datos, machine learning y automatización. Para Estadística universitaria puede ser excelente si ya tienes base de programación o si tu carrera conecta con datos.

Una regresión simple puede hacerse con \`statsmodels\`:

\`\`\`python
import statsmodels.formula.api as smf

modelo = smf.ols("nota ~ horas", data=datos).fit()
print(modelo.summary())
\`\`\`

Ventajas:

- Muy útil para programación y datos.
- Conecta con pandas, NumPy, scikit-learn y visualización.
- Buena opción para perfiles técnicos.

Limitaciones:

- Menos directo que Jamovi o SPSS para empezar.
- Puede ser excesivo si solo necesitas interpretar pruebas básicas.

Python conviene si tu objetivo incluye análisis de datos, automatización o carrera tecnológica.

## Qué elegir según tu caso

Si tu asignatura usa SPSS, empieza por SPSS. Si quieres aprender con una herramienta clara y gratuita, Jamovi es una gran opción. Si te interesa Estadística en serio, aprende R. Si quieres conectar Estadística con programación y datos, aprende Python.

La decisión práctica:

- Psicología de primero: Jamovi o SPSS.
- Psicología con investigación/TFG: Jamovi y después R.
- Economía, ADE o Econometría: R o Python, según profesor.
- Ciencia de datos o ingeniería: Python y R.
- Asignatura con examen de software concreto: usa el programa del profesor.

## Lo que debes saber aunque cambie el programa

Independientemente del software, debes poder:

- Elegir la prueba correcta.
- Identificar variables.
- Revisar supuestos.
- Leer p-valores e intervalos.
- Interpretar tamaño del efecto.
- Redactar una conclusión.

El software cambia; el razonamiento estadístico permanece.

Para decidir qué análisis hacer antes de abrir ningún programa, lee [qué prueba estadística utilizar](/blog/que-prueba-estadistica-utilizar-guia-test-correcto/) o revisa [clases particulares de Estadística y Probabilidad](/clases-particulares/estadistica-universidad/).
`,k=`---
title: Regresión lineal y ANOVA: cuándo utilizar cada método y cómo interpretar los resultados
date: 2026-07-11
updated: 2026-07-22
description: Diferencias entre regresión lineal y ANOVA: cuándo usar cada método, cómo interpretar coeficientes, medias, F y resultados en universidad.
tag: Estadística
category: Estadística
relatedService: /clases-particulares/estadistica-psicologia-ade/
relatedPosts: econometria-desde-cero-interpretar-regresion,que-prueba-estadistica-utilizar-guia-test-correcto,p-valor-intervalo-confianza-tamano-efecto-ejemplo
image: /favicon.svg
---

Regresión lineal y ANOVA aparecen en muchas asignaturas de Estadística, Psicología, ADE, Economía, Biología e Ingeniería. A veces se estudian como técnicas separadas, pero están más relacionadas de lo que parece.

La pregunta práctica es: ¿cuándo uso cada una y cómo interpreto el resultado?

## Cuándo usar ANOVA

Usa ANOVA cuando quieres comparar la media de una variable cuantitativa entre tres o más grupos.

Ejemplo:

- Variable dependiente: nota en un test de memoria.
- Factor: método de estudio con tres grupos.
- Pregunta: ¿hay diferencias medias entre métodos?

ANOVA contrasta:

$$
H_0:\\mu_1=\\mu_2=\\mu_3
$$

frente a que al menos una media sea distinta.

El estadístico principal es:

$$
F=\\frac{\\text{variabilidad entre grupos}}{\\text{variabilidad dentro de grupos}}
$$

Si la variabilidad entre grupos es grande respecto a la interna, hay evidencia de diferencias.

## Cuándo usar regresión lineal

Usa regresión lineal cuando quieres explicar o predecir una variable cuantitativa a partir de una o más variables.

El modelo simple es:

$$
Y=\\beta_0+\\beta_1X+\\varepsilon
$$

Ejemplo:

- Variable dependiente: nota.
- Variable explicativa: horas de estudio.
- Pregunta: ¿cómo cambia la nota esperada por cada hora adicional?

Si \\(\\hat{\\beta}\\_1=0.4\\), interpretamos que una hora adicional se asocia con 0.4 puntos más en la nota esperada, según el modelo.

## La conexión entre ANOVA y regresión

ANOVA puede verse como una regresión donde las variables explicativas son categóricas. Si tienes tres métodos de estudio, puedes crear variables indicadoras para comparar grupos.

Por eso ambas técnicas pertenecen al marco del modelo lineal. La diferencia está en cómo formulas la pregunta y qué tipo de predictores usas.

## Interpretar ANOVA correctamente

Un resultado significativo en ANOVA no dice automáticamente qué grupos difieren. Solo indica que no todas las medias parecen iguales.

Después necesitas comparaciones post hoc o contrastes planificados.

Una redacción básica:

> Se encontraron diferencias estadísticamente significativas entre métodos de estudio, \\(F(2,57)=5.31\\), \\(p=0.008\\). Las comparaciones posteriores indicaron que el método A obtuvo una media superior al método C.

## Interpretar regresión correctamente

En regresión, no basta con decir si el modelo es significativo. Debes interpretar coeficientes:

$$
\\hat{Y}=\\hat{\\beta}_0+\\hat{\\beta}_1X
$$

- \\(\\hat{\\beta}\\_0\\): valor esperado de \\(Y\\) cuando \\(X=0\\), si tiene sentido.
- \\(\\hat{\\beta}\\_1\\): cambio esperado en \\(Y\\) por cada unidad adicional de \\(X\\).
- \\(R^2\\): proporción de variabilidad explicada por el modelo.

Si hay varios predictores, añade "manteniendo constantes las demás variables".

## Errores frecuentes

- Usar ANOVA con dos grupos cuando una t de Student sería suficiente, aunque ANOVA también puede dar resultado equivalente.
- Decir que ANOVA indica exactamente qué grupo difiere sin hacer comparaciones.
- Interpretar correlación o regresión como causalidad automática.
- Olvidar revisar supuestos.
- Informar solo \\(p\\) sin magnitud del efecto.

## Tabla comparativa: ANOVA frente a regresión

| Criterio             | ANOVA                                  | Regresión lineal                                     |
| -------------------- | -------------------------------------- | ---------------------------------------------------- |
| Pregunta habitual    | ¿Difieren las medias entre grupos?     | ¿Cómo cambia o se predice una variable cuantitativa? |
| Variable dependiente | Cuantitativa                           | Cuantitativa                                         |
| Predictor principal  | Categórico                             | Cuantitativo o categórico codificado                 |
| Resultado central    | Estadístico F y comparación de medias  | Coeficientes, intervalos y ajuste del modelo         |
| Paso posterior       | Comparaciones post hoc o contrastes    | Interpretación de coeficientes y diagnóstico         |
| Riesgo común         | Creer que F indica qué grupos difieren | Interpretar asociación como causalidad               |

La tabla orienta, pero no sustituye la revisión del diseño. Si las mismas personas aparecen en varias condiciones, si hay medidas repetidas o si la variable respuesta no es cuantitativa, el modelo debe adaptarse.

## Ejemplo con los mismos datos

Supón que 60 estudiantes se reparten entre tres métodos de estudio —A, B y C— y que la variable respuesta es la nota sobre 10. Las medias observadas son 7,4; 6,9 y 6,1.

Con ANOVA, la pregunta es si las diferencias entre esas tres medias son mayores de lo esperable por la variabilidad interna. Un resultado hipotético \\(F(2,57)=5.31\\), \\(p=0.008\\) aporta evidencia contra la igualdad de todas las medias, pero todavía no identifica las parejas diferentes.

El mismo problema puede escribirse como regresión usando variables indicadoras. Si C es el grupo de referencia:

$$
\\widehat{nota}=6.1+1.3D_A+0.8D_B
$$

El intercepto 6,1 representa la media estimada de C; el coeficiente 1,3 representa la diferencia estimada entre A y C, y 0,8 la diferencia entre B y C.

## Supuestos que hay que revisar

1. **Independencia.** Depende del diseño y no se arregla con una prueba automática.
2. **Linealidad.** En regresión, la relación media debe estar bien representada.
3. **Homocedasticidad.** La dispersión de los residuos debe ser razonablemente estable.
4. **Normalidad de residuos.** Importa para la inferencia, especialmente con muestras pequeñas.
5. **Observaciones influyentes.** Un caso extremo puede alterar pendientes y conclusiones.

Si un supuesto falla, la respuesta no es aplicar automáticamente otra prueba. Primero hay que valorar diseño, tamaño muestral, gravedad del incumplimiento y objetivo del análisis.

## Dos ejercicios resueltos

### Tres terapias y ansiedad

Se compara la puntuación de ansiedad después de tres terapias aplicadas a grupos independientes. La respuesta es cuantitativa y el predictor es categórico con tres niveles. La primera candidata es un ANOVA de un factor. Si el contraste global aporta evidencia, se continúa con comparaciones planificadas o post hoc y tamaño del efecto.

### Horas de sueño y rendimiento

Se quiere estimar cómo cambia el rendimiento por cada hora adicional de sueño. Ambas variables son cuantitativas y existe una dirección explicativa definida. La candidata es una regresión lineal. La pendiente debe interpretarse en puntos por hora, con su intervalo de confianza y sin afirmar causalidad si el diseño es observacional.

## Preguntas frecuentes

### ¿ANOVA y regresión pueden dar el mismo resultado?

Sí. Un ANOVA de un factor puede expresarse como una regresión con variables indicadoras bajo una parametrización distinta.

### ¿Puedo usar ANOVA con dos grupos?

Es posible y el contraste equivale al cuadrado de la t correspondiente bajo los mismos supuestos. La t suele ser más directa con dos grupos.

### ¿Un resultado significativo implica un efecto importante?

No. Hay que informar la magnitud, la incertidumbre y el contexto, no solo el p-valor.

## Decisión rápida

Usa esta regla:

- Variable dependiente cuantitativa y predictor categórico con grupos: ANOVA.
- Variable dependiente cuantitativa y predictor cuantitativo: regresión.
- Varios predictores mixtos: modelo lineal/regresión con variables codificadas.

Para profundizar en regresión, lee [Econometría desde cero](/blog/econometria-desde-cero-interpretar-regresion/). Para decidir entre pruebas, revisa [qué prueba estadística utilizar](/blog/que-prueba-estadistica-utilizar-guia-test-correcto/) o consulta las [clases de Estadística para Psicología, ADE y Ciencias Sociales](/clases-particulares/estadistica-psicologia-ade/).
`,J=`---
title: Teorema fundamental del cálculo: ejemplos y ejercicios
date: 2026-08-13
updated: 2026-08-13
description: Comprende las dos partes del teorema fundamental del cálculo, deriva integrales con límites variables y resuelve integrales definidas paso a paso.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: integral-definida-e-indefinida-diferencias-ejemplos,que-son-las-integrales-y-para-que-se-utilizan,area-entre-dos-curvas-ejercicios-resueltos
image: /favicon.svg
---

El teorema fundamental del cálculo explica por qué derivar e integrar son operaciones inversas. Su primera parte afirma que una integral con extremo variable genera una función cuya derivada recupera el integrando. La segunda permite calcular una integral definida restando los valores de una primitiva en los extremos.

No son dos recetas aisladas. Las dos partes describen la misma conexión entre **variación instantánea** y **acumulación total**.

## Qué conecta exactamente el teorema

Conviene separar tres objetos que suelen mezclarse:

- $f(x)$ es la función que se acumula.
- $A(x)=\\int_a^x f(t)\\,dt$ es la acumulación desde un punto fijo $a$ hasta $x$.
- $F(x)$ es una primitiva de $f$, es decir, $F'(x)=f(x)$.

La primera parte relaciona $A$ con $f$; la segunda relaciona la integral definida con cualquier primitiva $F$. Esta distinción completa lo explicado en la guía sobre [integral definida e indefinida](/blog/integral-definida-e-indefinida-diferencias-ejemplos/).

![La integral como acumulación del área bajo una curva](/assets/latex/integral-area.svg)

Si $f$ es positiva, $A(x)$ representa el área acumulada bajo su gráfica. Cuando el extremo derecho avanza una cantidad pequeña $h$, se añade una franja de anchura $h$ y altura aproximadamente $f(x)$. Por eso el incremento de área es aproximadamente $f(x)h$, y la tasa de cambio del área es $f(x)$.

## Primera parte: derivar una función definida mediante una integral

Sea $f$ continua en un intervalo que contiene a $a$ y $x$. Definimos

$$
A(x)=\\int_a^x f(t)\\,dt.
$$

Entonces $A$ es derivable y

$$
\\boxed{A'(x)=f(x)}.
$$

La letra $t$ es una variable muda: solo sirve para recorrer el intervalo de integración. Podríamos escribir $u$, $s$ o cualquier otra letra sin cambiar la función $A(x)$. No conviene escribir $\\int_a^x f(x)\\,dx$ cuando después vamos a derivar respecto de $x$, porque el mismo símbolo quedaría usado como variable libre y variable de integración.

### Justificación mediante el cociente incremental

Partimos de la definición de derivada:

$$
\\frac{A(x+h)-A(x)}{h}.
$$

La aditividad de la integral permite escribir

$$
A(x+h)-A(x)
=\\int_x^{x+h}f(t)\\,dt.
$$

Por tanto,

$$
\\frac{A(x+h)-A(x)}{h}
=\\frac1h\\int_x^{x+h}f(t)\\,dt.
$$

El miembro derecho es el valor medio de $f$ en el intervalo corto entre $x$ y $x+h$. Si $f$ es continua, ese promedio se aproxima a $f(x)$ cuando $h$ tiende a cero. Luego

$$
A'(x)=\\lim_{h\\to0}\\frac1h\\int_x^{x+h}f(t)\\,dt=f(x).
$$

Esta demostración aclara el papel de la continuidad: garantiza que, en intervalos cada vez más pequeños, el promedio de la función converge a su valor en el punto.

### Ejemplo 1 — extremo superior igual a x

Sea

$$
A(x)=\\int_0^x(1+t^2)\\,dt.
$$

Nos piden $A'(x)$, no el valor numérico de una integral. El extremo superior es exactamente $x$, así que la primera parte da

$$
\\boxed{A'(x)=1+x^2}.
$$

Podemos comprobarlo calculando primero la acumulación:

$$
A(x)=\\left[t+\\frac{t^3}{3}\\right]_0^x
=x+\\frac{x^3}{3},
$$

y derivando. Se obtiene de nuevo $1+x^2$.

La ventaja del teorema aparece cuando la primitiva no es elemental: para derivar $\\int_0^x e^{-t^2}dt$ no necesitamos encontrar una fórmula cerrada; su derivada es $e^{-x^2}$.

### Ejemplo 2 — el extremo variable está abajo

Calcula la derivada de

$$
B(x)=\\int_x^3\\sqrt{1+t^4}\\,dt.
$$

Invertimos los límites:

$$
B(x)=-\\int_3^x\\sqrt{1+t^4}\\,dt.
$$

Ahora aplicamos el teorema:

$$
\\boxed{B'(x)=-\\sqrt{1+x^4}}.
$$

El signo negativo tiene sentido geométrico. Al aumentar $x$, el intervalo $[x,3]$ se acorta y la acumulación disminuye.

## Límites variables y regla de la cadena

Si el extremo superior es una función $g(x)$,

$$
H(x)=\\int_a^{g(x)}f(t)\\,dt,
$$

se compone la función de acumulación con $g$. La regla de la cadena produce

$$
\\boxed{H'(x)=f(g(x))g'(x)}.
$$

No basta con sustituir $t$ por $g(x)$: hay que multiplicar por la derivada del límite.

### Ejemplo 3 — extremo superior compuesto

Deriva

$$
H(x)=\\int_1^{x^2}\\ln(1+t)\\,dt.
$$

El integrando es $f(t)=\\ln(1+t)$ y el extremo es $g(x)=x^2$. Por tanto,

$$
H'(x)=\\ln(1+x^2)\\cdot2x.
$$

Así,

$$
\\boxed{H'(x)=2x\\ln(1+x^2)}.
$$

No necesitamos integrar el logaritmo. La pregunta se resuelve reconociendo teorema fundamental más regla de la cadena.

### Ambos extremos dependen de x

Para

$$
G(x)=\\int_{u(x)}^{v(x)}f(t)\\,dt,
$$

elegimos un punto fijo $c$ y descomponemos:

$$
G(x)=\\int_c^{v(x)}f(t)\\,dt-\\int_c^{u(x)}f(t)\\,dt.
$$

Al derivar,

$$
\\boxed{G'(x)=f(v(x))v'(x)-f(u(x))u'(x)}.
$$

El límite superior aporta con signo positivo y el inferior con signo negativo.

### Ejemplo 4 — dos límites variables

Sea

$$
G(x)=\\int_x^{2x}e^{t^2}\\,dt.
$$

No existe una primitiva elemental de $e^{t^2}$, pero eso no impide derivar $G$. Aplicamos la fórmula:

$$
G'(x)=e^{(2x)^2}\\cdot2-e^{x^2}\\cdot1.
$$

Por tanto,

$$
\\boxed{G'(x)=2e^{4x^2}-e^{x^2}}.
$$

La comprobación estructural es sencilla: aparecen dos contribuciones, una por cada frontera móvil, y cada una incluye la velocidad de su frontera.

## Segunda parte: calcular una integral mediante una primitiva

Sea $f$ continua en $[a,b]$ y sea $F$ una primitiva de $f$ en ese intervalo. Entonces

$$
\\boxed{\\int_a^b f(x)\\,dx=F(b)-F(a)}.
$$

Esta igualdad se conoce también como fórmula de Newton–Leibniz. La notación habitual es

$$
\\int_a^b f(x)\\,dx
=\\left[F(x)\\right]_a^b
=F(b)-F(a).
$$

El orden es siempre **valor en el extremo superior menos valor en el extremo inferior**.

### Por qué desaparece la constante C

Si usamos otra primitiva $F(x)+C$, obtenemos

$$
[F(b)+C]-[F(a)+C]=F(b)-F(a).
$$

La constante se cancela. Por eso una integral indefinida termina con $+C$, mientras que una integral definida termina en un número y no lo lleva.

### Cómo se deduce la segunda parte de la primera

Definimos la función de acumulación

$$
A(x)=\\int_a^x f(t)dt.
$$

La primera parte asegura que $A'(x)=f(x)$. Por tanto, $A$ es una primitiva de $f$. Si $F$ es cualquier otra primitiva, ambas difieren en una constante:

$$
A(x)=F(x)+C.
$$

Como $A(a)=\\int_a^a f(t)dt=0$, resulta $0=F(a)+C$ y, por tanto, $C=-F(a)$. Así,

$$
A(x)=F(x)-F(a).
$$

Al tomar $x=b$ obtenemos

$$
\\int_a^b f(t)dt=A(b)=F(b)-F(a).
$$

Esta deducción muestra que Newton–Leibniz no es una regla añadida desde fuera: surge al identificar la función de acumulación como una primitiva concreta, la que vale cero en $a$.

## Orientación y aditividad antes de calcular

Las integrales definidas cumplen propiedades que permiten reorganizar intervalos:

$$
\\int_a^a f(x)dx=0,
\\qquad
\\int_b^a f(x)dx=-\\int_a^b f(x)dx,
$$

y, para cualquier punto $c$ del dominio,

$$
\\int_a^b f(x)dx
=\\int_a^c f(x)dx+\\int_c^b f(x)dx.
$$

Estas igualdades son coherentes con la fórmula $F(b)-F(a)$. Por ejemplo,

$$
\\int_a^c f+\\int_c^b f
=[F(c)-F(a)]+[F(b)-F(c)]
=F(b)-F(a).
$$

Los términos $F(c)$ se cancelan. La aditividad permite dividir en puntos donde cambia una fórmula, el signo del integrando o la frontera de una región.

### Ejemplo 5 bis — reconstruir una integral con datos parciales

Supón que

$$
\\int_0^3f(x)dx=7
\\qquad\\text{y}\\qquad
\\int_3^5f(x)dx=-2.
$$

Sin conocer la fórmula de $f$ podemos concluir

$$
\\int_0^5f(x)dx=7+(-2)=5.
$$

Además,

$$
\\int_5^0f(x)dx=-5.
$$

El dato negativo en $[3,5]$ significa acumulación neta negativa; no necesariamente que el área geométrica sea negativa.

### Ejemplo 5 — integral polinómica

Calcula

$$
\\int_1^3(2x-1)\\,dx.
$$

Una primitiva es $F(x)=x^2-x$. Aplicamos la fórmula:

$$
\\begin{aligned}
\\int_1^3(2x-1)\\,dx
&=[x^2-x]_1^3\\\\
&=(9-3)-(1-1)\\\\
&=6.
\\end{aligned}
$$

**Comprobación geométrica.** En $[1,3]$ la función es positiva, con alturas $1$ y $5$. El área del trapecio es

$$
\\frac{1+5}{2}\\cdot2=6,
$$

coincidente con el cálculo analítico.

### Ejemplo 6 — valor absoluto y cambio de fórmula

Calcula

$$
\\int_{-1}^{2}|x|\\,dx.
$$

El integrando cambia de expresión en $x=0$:

$$
|x|=
\\begin{cases}
-x,&x<0,\\\\
x,&x\\geq0.
\\end{cases}
$$

Debemos separar:

$$
\\begin{aligned}
\\int_{-1}^{2}|x|\\,dx
&=\\int_{-1}^{0}(-x)\\,dx+\\int_0^2x\\,dx\\\\
&=\\left[-\\frac{x^2}{2}\\right]_{-1}^{0}
+\\left[\\frac{x^2}{2}\\right]_0^2\\\\
&=\\frac12+2=\\frac52.
\\end{aligned}
$$

No existe una única expresión polinómica válida a ambos lados del cero. El teorema se aplica en cada tramo y la aditividad reúne los resultados.

## Cómo reconocer qué parte hay que usar

| Enunciado | Herramienta principal | Señal decisiva |
|---|---|---|
| «Calcula $\\int_a^b f(x)dx$» | Segunda parte | Hay límites numéricos y se busca un valor |
| «Deriva $\\int_a^x f(t)dt$» | Primera parte | El extremo es la variable |
| «Deriva $\\int_a^{g(x)}f(t)dt$» | Primera parte + cadena | El extremo es una función de $x$ |
| «Deriva $\\int_{u(x)}^{v(x)}f(t)dt$» | Fórmula de Leibniz para extremos | Se mueven ambas fronteras |
| «Estudia una función de acumulación» | Primera parte + análisis de derivadas | El signo de $f$ determina crecimiento de la acumulación |

Si primero hay que obtener una primitiva, puede hacer falta escoger una técnica de la [guía de métodos de integración](/blog/metodos-de-integracion-como-elegir/). El teorema fundamental explica cómo usar esa primitiva; no sustituye el método necesario para encontrarla.

## Funciones de acumulación y estudio cualitativo

La igualdad $A'(x)=f(x)$ permite estudiar $A$ sin calcular la integral explícitamente:

- $A$ crece donde $f>0$.
- $A$ decrece donde $f<0$.
- Los ceros de $f$ son candidatos a extremos de $A$.
- Si $f$ es derivable, entonces $A''(x)=f'(x)$; el crecimiento de $f$ controla la concavidad de $A$.

### Ejemplo 7 — estudiar la acumulación desde el integrando

Definimos

$$
A(x)=\\int_0^x(t^2-1)\\,dt.
$$

Por el teorema,

$$
A'(x)=x^2-1=(x-1)(x+1).
$$

Así, $A$ crece en $(-\\infty,-1)$ y $(1,\\infty)$, y decrece en $(-1,1)$. Tiene un máximo local en $x=-1$ y un mínimo local en $x=1$.

Si queremos comprobarlo con la fórmula explícita,

$$
A(x)=\\frac{x^3}{3}-x.
$$

Pero esta primitiva no era necesaria para obtener los intervalos de crecimiento.

## Teorema del valor medio para integrales

Si $f$ es continua en $[a,b]$, existe al menos un punto $c\\in[a,b]$ tal que

$$
\\int_a^b f(x)\\,dx=f(c)(b-a).
$$

Equivale a afirmar que alguna altura real de la función produce un rectángulo con la misma área neta. El valor medio de $f$ es

$$
f_{\\mathrm{medio}}=\\frac1{b-a}\\int_a^b f(x)\\,dx.
$$

### Ejemplo 8 — localizar el valor medio

Para $f(x)=x^2$ en $[0,2]$,

$$
f_{\\mathrm{medio}}
=\\frac12\\int_0^2x^2dx
=\\frac12\\left[\\frac{x^3}{3}\\right]_0^2
=\\frac43.
$$

Buscamos $c\\in[0,2]$ con $c^2=4/3$. Como $c$ debe ser no negativo,

$$
\\boxed{c=\\frac{2}{\\sqrt3}}.
$$

La continuidad asegura la existencia; en este caso la monotonía de $x^2$ en $[0,2]$ hace que el punto sea único.

## Acumulación de una tasa: unidades e interpretación

Si $r(t)$ mide una tasa en «unidades por segundo», entonces

$$
Q(b)-Q(a)=\\int_a^b r(t)dt
$$

mide unidades acumuladas. El diferencial $dt$ aporta la dimensión de tiempo. El teorema fundamental afirma a la vez que $Q'(t)=r(t)$: la derivada recupera la tasa instantánea.

### Ejemplo 8 bis — velocidad, desplazamiento y distancia

Una partícula tiene velocidad

$$
v(t)=3t^2-6t
$$

en metros por segundo durante $0\\leq t\\leq3$. El desplazamiento es

$$
\\begin{aligned}
\\int_0^3v(t)dt
&=[t^3-3t^2]_0^3\\\\
&=27-27=0\\text{ m}.
\\end{aligned}
$$

Esto no significa que la partícula no se haya movido. Como $v(t)=3t(t-2)$, la velocidad es negativa entre $0$ y $2$ y positiva entre $2$ y $3$. La distancia total requiere integrar $|v|$:

$$
\\begin{aligned}
D
&=-\\int_0^2v(t)dt+\\int_2^3v(t)dt\\\\
&=-[t^3-3t^2]_0^2+[t^3-3t^2]_2^3\\\\
&=4+4=8\\text{ m}.
\\end{aligned}
$$

El desplazamiento suma con signo; la distancia suma la magnitud de cada tramo. El punto $t=2$ se obtiene resolviendo dónde cambia el signo de la tasa.

### Ejemplo 8 ter — reconstruir una cantidad a partir de su tasa

La tasa de entrada de agua en un depósito es $r(t)=4-t$ litros por minuto y al inicio hay $10$ litros. Para $0\\leq t\\leq3$, la cantidad es

$$
Q(t)=10+\\int_0^t(4-s)ds
=10+4t-\\frac{t^2}{2}.
$$

En el minuto tres,

$$
Q(3)=10+12-\\frac92=\\frac{35}{2}\\text{ litros}.
$$

Al derivar la fórmula obtenemos $Q'(t)=4-t$, lo que comprueba que la cantidad reconstruida tiene la tasa exigida. El valor inicial también se verifica: $Q(0)=10$.

## Hipótesis y casos que requieren cuidado

La continuidad de $f$ en $[a,b]$ es una condición suficiente y cómoda para el teorema en cursos iniciales. Hay versiones más generales, pero no conviene aplicar mecánicamente la fórmula sin revisar el dominio.

Si el integrando se hace infinito dentro del intervalo o el extremo es infinito, estamos ante una [integral impropia](/blog/integrales-impropias-convergencia-ejercicios/) y hay que introducir límites. Por ejemplo, no es válido escribir

$$
\\int_{-1}^{1}\\frac1x\\,dx=[\\ln|x|]_{-1}^{1}=0.
$$

La función no está definida en $x=0$ y las dos integrales laterales divergen. La sustitución formal de extremos ha ocultado la singularidad.

También puede ocurrir que $f$ sea integrable pero no tenga una primitiva expresable con funciones elementales. La función

$$
A(x)=\\int_0^x e^{-t^2}dt
$$

sigue estando bien definida y satisface $A'(x)=e^{-x^2}$. La dificultad algebraica de encontrar una fórmula cerrada no invalida el teorema.

### Qué no afirma el teorema

El teorema no dice que toda función tenga una primitiva elemental ni que toda integral represente un área positiva. Tampoco autoriza a atravesar una discontinuidad infinita como si el integrando fuera continuo.

La primera parte parte de una acumulación bien definida y concluye derivabilidad bajo hipótesis adecuadas. La segunda parte requiere una primitiva válida en el intervalo relevante. Si una fórmula de primitiva solo vale en ciertos intervalos del dominio, cada componente debe tratarse por separado.

Por ejemplo, $\\ln|x|$ es una primitiva de $1/x$ tanto en $(-\\infty,0)$ como en $(0,\\infty)$, pero eso no permite aplicar Newton–Leibniz en $[-1,1]$: el intervalo cruza un punto donde el integrando no existe. Revisar el dominio precede siempre a evaluar extremos.

El teorema tampoco convierte automáticamente una integral neta en área. Si $f$ cambia de signo,

$$
\\int_a^b f(x)dx
$$

resta la contribución situada bajo el eje. Para obtener área geométrica se integra $|f|$ o se divide en los ceros y se cambia el signo de los tramos negativos.

## Ejemplo 9 — ecuación con una función integral

Encuentra los puntos críticos de

$$
H(x)=\\int_1^{x^2}(t^3-4t)\\,dt.
$$

Derivamos sin calcular la integral:

$$
H'(x)=\\left[(x^2)^3-4x^2\\right]2x
=2x^3(x^4-4).
$$

Los puntos críticos satisfacen

$$
2x^3(x^2-2)(x^2+2)=0.
$$

Los reales son

$$
x=0,\\qquad x=\\pm\\sqrt2.
$$

**Comprobación.** El factor $x^2+2$ nunca se anula en los reales. Sustituir los tres valores en la expresión factorizada confirma que $H'(x)=0$.

## Ejemplo 10 — integral definida mediante sustitución

Calcula

$$
\\int_0^1 2x\\cos(x^2)\\,dx.
$$

Reconocemos la derivada de $x^2$. Tomamos $u=x^2$, de modo que $du=2x\\,dx$. Transformamos también los límites: si $x=0$, $u=0$; si $x=1$, $u=1$. Entonces

$$
\\int_0^1 2x\\cos(x^2)dx
=\\int_0^1\\cos u\\,du
=[\\sin u]_0^1
=\\sin1.
$$

Aquí trabajan dos ideas distintas: el cambio de variable simplifica el integrando y la segunda parte del teorema evalúa la integral resultante.

## Problema tipo examen — derivada segunda y tangente

Sea

$$
F(x)=\\int_0^{x^2+1}\\frac{t}{1+t^2}dt.
$$

Se pide hallar $F'(x)$, $F''(x)$ y la recta tangente a la gráfica de $F$ en $x=0$.

Primero aplicamos teorema fundamental y cadena:

$$
F'(x)=\\frac{x^2+1}{1+(x^2+1)^2}\\cdot2x.
$$

Para calcular $F''(0)$ no hace falta desarrollar toda la derivada. Escribimos $F'(x)=2x\\,q(x)$, donde

$$
q(x)=\\frac{x^2+1}{1+(x^2+1)^2}.
$$

Entonces

$$
F''(x)=2q(x)+2xq'(x),
$$

y

$$
F''(0)=2q(0)=2\\cdot\\frac12=1.
$$

La pendiente de la tangente es $F'(0)=0$. Para obtener el punto,

$$
F(0)=\\int_0^1\\frac{t}{1+t^2}dt
=\\left[\\frac12\\ln(1+t^2)\\right]_0^1
=\\frac12\\ln2.
$$

Por tanto, la recta tangente es horizontal:

$$
\\boxed{y=\\frac12\\ln2}.
$$

La comprobación reúne las dos partes del teorema: la primera proporciona la pendiente y la segunda calcula la ordenada del punto de tangencia.

## Errores frecuentes

- **Olvidar la regla de la cadena.** La derivada de $\\int_a^{x^2}f(t)dt$ es $2x f(x^2)$, no $f(x^2)$.
- **Perder el signo del límite inferior.** En $\\int_x^a f(t)dt$, la derivada es $-f(x)$.
- **Sustituir la variable muda de forma incorrecta.** En el extremo se evalúa todo el integrando: si $f(t)=t\\sin t$, entonces $f(x^2)=x^2\\sin(x^2)$.
- **Añadir $+C$ a una integral definida.** La evaluación en extremos elimina la constante.
- **Restar en orden inverso.** La fórmula es $F(b)-F(a)$.
- **Confundir integral neta con área geométrica.** Las zonas donde $f<0$ restan; para calcular área puede ser necesario dividir y cambiar el signo, como se explica en [área entre curvas](/blog/area-entre-dos-curvas-ejercicios-resueltos/).
- **Ignorar discontinuidades.** Una singularidad interior exige estudiar integrales impropias por separado.
- **Intentar hallar una primitiva que no hace falta.** Para derivar una integral con extremo variable suele bastar el teorema.

## Cómo comprobar un resultado

En una integral definida, deriva la primitiva propuesta antes de evaluar. Después revisa el signo y estima el orden de magnitud: si $m\\leq f(x)\\leq M$ en $[a,b]$, entonces

$$
m(b-a)\\leq\\int_a^bf(x)dx\\leq M(b-a).
$$

En una derivada de integral con límites variables, comprueba tres elementos: evaluación del integrando en cada extremo, derivada de cada extremo y signo negativo del límite inferior.

## Ejercicios propuestos

1. Deriva $A(x)=\\int_2^x(t^3+1)dt$.
2. Deriva $B(x)=\\int_{x^3}^{4}\\sqrt{1+t^2}dt$.
3. Deriva $C(x)=\\int_{\\sin x}^{x^2}\\frac{dt}{1+t^2}$.
4. Calcula $\\int_{-1}^{2}(3x^2-2x)dx$.
5. Calcula $\\int_0^2|x-1|dx$.
6. Halla el valor medio de $f(x)=3x+1$ en $[0,4]$ y un punto donde se alcance.
7. Estudia los intervalos de crecimiento de $G(x)=\\int_0^x t(t-2)dt$.
8. Calcula $\\int_0^{\\pi/2}\\sin x\\cos x\\,dx$ mediante un cambio de variable.

## Soluciones

**1. Extremo directo.**

$$
\\boxed{A'(x)=x^3+1}.
$$

**2. Límite inferior compuesto.** El signo es negativo y $(x^3)'=3x^2$:

$$
\\boxed{B'(x)=-3x^2\\sqrt{1+x^6}}.
$$

**3. Dos límites variables.**

$$
\\begin{aligned}
C'(x)
&=\\frac{2x}{1+x^4}
-\\frac{\\cos x}{1+\\sin^2x}.
\\end{aligned}
$$

**4. Newton–Leibniz.** Una primitiva es $x^3-x^2$:

$$
[x^3-x^2]_{-1}^{2}=4-(-2)=\\boxed{6}.
$$

**5. Valor absoluto.** Separamos en $x=1$:

$$
\\int_0^1(1-x)dx+\\int_1^2(x-1)dx
=\\frac12+\\frac12=\\boxed{1}.
$$

**6. Valor medio.**

$$
f_{\\mathrm{medio}}=\\frac14\\int_0^4(3x+1)dx
=\\frac14[\\tfrac32x^2+x]_0^4=7.
$$

Como $3c+1=7$, se alcanza en $\\boxed{c=2}$.

**7. Crecimiento.** Por el teorema, $G'(x)=x(x-2)$. Es positiva si $x<0$ o $x>2$, y negativa si $0<x<2$. Por tanto, $G$ crece en $(-\\infty,0)$ y $(2,\\infty)$, y decrece en $(0,2)$.

**8. Sustitución y evaluación.** Con $u=\\sin x$, $du=\\cos x\\,dx$ y límites $0$ y $1$:

$$
\\int_0^1u\\,du=\\left[\\frac{u^2}{2}\\right]_0^1=\\boxed{\\frac12}.
$$

## Resumen práctico

La primera parte del teorema deriva acumulaciones: $\\frac{d}{dx}\\int_a^x f(t)dt=f(x)$. Si el extremo es compuesto, se añade la regla de la cadena; si se mueven ambos extremos, se resta la contribución del inferior. La segunda parte calcula integrales definidas: $\\int_a^b f=F(b)-F(a)$.

La comprobación esencial consiste en derivar la primitiva, respetar la orientación de los límites y revisar el dominio completo. En problemas de acumulación, interpreta además el signo y las unidades: una integral definida mide cambio neto, mientras que el área o la distancia total pueden exigir dividir el intervalo.

Antes de operar, identifica si buscas una derivada o una acumulación numérica, revisa continuidad y dominio, y separa cualquier singularidad. Si necesitas practicar estas decisiones con ejercicios de tu asignatura, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
`,W=`---
title: Transición al sector IT en 6 meses: una ruta realista
date: 2026-06-04
updated: 2026-06-04
description: Una ruta de seis meses para entrar en tecnología con fundamentos, proyecto propio, portfolio y entrevistas preparadas.
tag: Carrera IT
category: Carrera tecnológica
relatedService: /formacion-it/python-sql-data-engineering/
relatedPosts: python-y-sql-para-empezar-en-datos,estadistica-desde-cero-para-elegir-contrastes
image: /favicon.svg
---

Cambiar de sector para entrar en tecnología es posible, pero no funciona acumulando cursos sin criterio. El error más habitual es estudiar un poco de Python, otro poco de SQL, algo de IA y varios tutoriales sueltos sin terminar nada defendible.

La diferencia entre avanzar y quedarse dando vueltas suele ser una ruta clara: un destino, fundamentos suficientes, un proyecto terminado y práctica para explicar decisiones.

## Elige una dirección

"Quiero entrar en IT" es demasiado amplio. Para seis meses necesitas foco:

- **Datos y analytics:** SQL, Python, limpieza de datos, visualización y comunicación.
- **Desarrollo:** fundamentos de programación, Git, web básica, pruebas y despliegue.
- **Cloud o DevOps inicial:** Linux, redes, automatización y un proveedor concreto.

No hace falta acertar para siempre. Hace falta elegir una dirección durante el tiempo suficiente para generar evidencia.

## La ruta de seis meses

1. **Meses 1 y 2: fundamentos.** Aprende lo mínimo que se repite en cualquier proyecto: control de flujo, estructuras, lectura de errores, Git y terminal.
2. **Meses 3 y 4: proyecto.** Construye algo pequeño pero completo. Debe tener objetivo, datos o entradas, código reproducible y README.
3. **Mes 5: perfil.** Ordena CV, LinkedIn, GitHub y relato profesional alrededor del proyecto.
4. **Mes 6: entrevistas.** Practica preguntas técnicas, explicación de decisiones y simulaciones.

Un proyecto terminado del que sabes hablar vale más que diez certificados que no conectan entre sí.

## Qué debe demostrar tu proyecto

Un primer proyecto no tiene que ser enorme. Tiene que ser claro:

- Qué problema resuelve.
- Qué decisiones tomaste.
- Cómo se ejecuta.
- Qué limitaciones tiene.
- Qué mejorarías en una segunda versión.

En una entrevista no basta con enseñar código. Tienes que explicar cómo pensaste.

## Errores frecuentes

- Aprender tres lenguajes a la vez.
- No terminar ningún proyecto.
- Subir repositorios sin README ni instrucciones.
- Preparar entrevistas leyendo preguntas sin responder en voz alta.
- Ocultar experiencia previa en vez de traducirla a valor.

## Cómo sostener el ritmo

La parte dura no es solo el temario. Es mantener continuidad cuando aparecen dudas, cansancio o comparación con perfiles más avanzados. Por eso conviene revisar progreso cada semana y cerrar entregables pequeños.

Si estás empezando desde cero, puedes leer [Python y SQL para empezar en datos](/blog/python-y-sql-para-empezar-en-datos/) o revisar [clases de programación universitaria y fundamentos](/clases-particulares/programacion-universidad/).
`;function K(n){const e=/^---\s*\n([\s\S]*?)\n---\s*\n?/.exec(n);if(!e)return{data:{},body:n.trim()};const r={};for(const a of e[1].split(`
`)){const i=a.indexOf(":");if(i===-1)continue;const s=a.slice(0,i).trim();let o=a.slice(i+1).trim();(o.startsWith('"')&&o.endsWith('"')||o.startsWith("'")&&o.endsWith("'"))&&(o=o.slice(1,-1)),s&&(r[s]=o)}return{data:r,body:n.slice(e[0].length).trim()}}function Y(n){const e=n.trim().split(/\s+/).filter(Boolean).length;return Math.max(1,Math.round(e/200))}const X=Object.assign({"../content/blog/algebra-lineal-universidad-que-estudiar-primero-errores.md":c,"../content/blog/area-entre-dos-curvas-ejercicios-resueltos.md":l,"../content/blog/circuitos-corriente-continua-problemas-resueltos-universidad.md":d,"../content/blog/como-aprobar-calculo-i-ingenieria-seis-semanas.md":u,"../content/blog/como-aprobar-estadistica-psicologia-sin-base-matematica.md":m,"../content/blog/como-aprobar-fisica-i-ingenieria-sin-memorizar-formulas.md":p,"../content/blog/como-aprobar-matematicas-i-ade-economia.md":$,"../content/blog/como-estudiar-matematicas-sin-memorizar.md":x,"../content/blog/como-preparar-ib-mathematics-aa-ai.md":f,"../content/blog/como-preparar-pau-matematicas-ii.md":g,"../content/blog/como-resolver-limites-indeterminaciones-ejercicios.md":b,"../content/blog/derivadas-integrales-universitarias-prueba-nivel-ejercicios-resueltos.md":v,"../content/blog/diagramas-cuerpo-libre-metodo-errores-frecuentes.md":y,"../content/blog/econometria-desde-cero-interpretar-regresion.md":q,"../content/blog/economia-ade-matematicas-sin-perderse.md":E,"../content/blog/ecuaciones-diferenciales-identificar-metodo-correcto.md":_,"../content/blog/errores-comunes-inferencia-estadistica.md":h,"../content/blog/estadistica-desde-cero-para-elegir-contrastes.md":C,"../content/blog/estequiometria-universitaria-ejercicios-resueltos.md":j,"../content/blog/fisica-y-quimica-como-plantear-problemas.md":P,"../content/blog/ib-gcse-como-preparar-examenes-internacionales.md":z,"../content/blog/integracion-por-partes-formula-ejercicios-resueltos.md":S,"../content/blog/integracion-por-sustitucion-cambio-variable-ejercicios.md":L,"../content/blog/integral-definida-e-indefinida-diferencias-ejemplos.md":A,"../content/blog/integrales-funciones-racionales-fracciones-parciales.md":U,"../content/blog/integrales-impropias-convergencia-ejercicios.md":D,"../content/blog/matrices-determinantes-sistemas-ecuaciones-guia.md":I,"../content/blog/metodos-de-integracion-como-elegir.md":F,"../content/blog/microeconomia-i-tipos-problemas-examen.md":N,"../content/blog/p-valor-intervalo-confianza-tamano-efecto-ejemplo.md":R,"../content/blog/preparar-pau-desde-verano-plan-septiembre.md":M,"../content/blog/preparar-selectividad-con-calendario.md":B,"../content/blog/primer-proyecto-python-principiantes-datos.md":Q,"../content/blog/probabilidad-condicionada-bayes-problemas-resueltos.md":T,"../content/blog/python-y-sql-para-empezar-en-datos.md":O,"../content/blog/que-prueba-estadistica-utilizar-guia-test-correcto.md":H,"../content/blog/que-son-las-derivadas-y-para-que-se-utilizan.md":V,"../content/blog/que-son-las-integrales-y-para-que-se-utilizan.md":G,"../content/blog/r-spss-jamovi-python-programa-estadistico-universidad.md":w,"../content/blog/regresion-lineal-anova-cuando-utilizar-interpretar-resultados.md":k,"../content/blog/teorema-fundamental-calculo-ejemplos-ejercicios.md":J,"../content/blog/transicion-al-sector-it-en-6-meses.md":W}),t=Object.entries(X).map(([n,e])=>{const r=n.split("/").pop().replace(/\.md$/,""),{data:a,body:i}=K(e);return{slug:r,title:a.title??r,date:a.date??"",updated:a.updated??a.date??"",description:a.description??"",tag:a.tag??"Blog",category:a.category??a.tag??"Blog",image:a.image??"/favicon.svg",relatedService:a.relatedService??"/contacto/",relatedPosts:a.relatedPosts?a.relatedPosts.split(",").map(s=>s.trim()).filter(Boolean):[],readingMinutes:Y(i),body:i}}).sort((n,e)=>n.date<e.date?1:n.date>e.date?-1:0);function nn(){return t}function en(n,e=9){return Math.max(1,Math.ceil(n.length/e))}function an(n,e,r=9){const a=(e-1)*r;return n.slice(a,a+r)}function Z(n){return t.find(e=>e.slug===n)}function rn(n){return t.filter(e=>e.category===n)}function on(n,e=3){const r=n.relatedPosts.map(i=>Z(i)).filter(i=>!!i),a=t.filter(i=>i.slug!==n.slug&&!r.some(s=>s.slug===i.slug));return[...r,...a].slice(0,e)}function sn(n){if(!n)return"";const e=new Date(n);return Number.isNaN(e.getTime())?n:e.toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"})}export{en as a,Z as b,an as c,nn as d,on as e,sn as f,rn as g};
