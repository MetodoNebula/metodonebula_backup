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
seoTitle: "Área entre curvas: método y ejercicios resueltos"
date: 2026-08-08
updated: 2026-10-29
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

> **Respuesta directa.** Para calcular el área entre curvas, encuentra primero sus intersecciones, decide qué función queda arriba en cada intervalo e integra la diferencia superior menos inferior. Si cambian de orden, divide la región. El resultado debe ser no negativo y coherente con la gráfica.

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
title: "Mol y estequiometría en Bachillerato: el mapa definitivo para resolver problemas"
date: "2026-10-12"
updated: "2026-10-28"
description: "Guía completa de mol y estequiometría en Bachillerato: conversiones, reactivo limitante, pureza, rendimiento y ejemplos resueltos."
tag: "Bachillerato"
category: "Física y Química"
relatedService: "/clases-particulares/quimica/"
relatedPosts: "pau-quimica-equilibrio-quimico-estudiar,fisica-y-quimica-como-plantear-problemas"
image: "/assets/latex/mole-map.svg"
---

La estequiometría deja de parecer una sucesión de fórmulas cuando se comprende su mapa: **casi cualquier dato debe pasar por moles antes de usar la proporción química**. La ecuación ajustada es el centro del problema y las unidades indican por qué camino entrar y salir.

![Mapa de conversiones entre masa, moles, proporción química y cantidad pedida](/assets/latex/mole-map.svg)

## Qué representa un mol

El mol es una unidad de cantidad de sustancia. Conecta el número de partículas con cantidades macroscópicas. La masa molar $M$ permite convertir:

$$
n=\\frac{m}{M}.
$$

La relación no dice qué reacción ocurre; solo traduce masa a moles. La proporción entre sustancias viene después, de los coeficientes de la ecuación ajustada.

## La ruta universal

1. Escribe y ajusta la reacción.
2. Convierte el dato a moles.
3. Aplica la proporción estequiométrica.
4. Convierte los moles buscados a la unidad pedida.
5. Comprueba magnitud, unidad y cifras significativas.

## Ejemplo de masa a masa

Para:

$$
\\mathrm{2Mg+O_2\\rightarrow2MgO},
$$

calcula la masa de MgO formada a partir de 4,8 g de Mg, suponiendo oxígeno en exceso. Usa $M(Mg)=24$ g/mol y $M(MgO)=40$ g/mol.

$$
n(Mg)=\\frac{4.8}{24}=0.20\\ \\mathrm{mol}.
$$

La proporción Mg:MgO es 1:1, así que se forman 0,20 mol de MgO:

$$
m(MgO)=0.20\\cdot40=8.0\\ \\mathrm{g}.
$$

Que la masa del producto supere la del magnesio no es un error: el producto incorpora oxígeno.

## Reactivo limitante

Cuando se dan dos reactivos, convierte ambos a moles y compara cuántas unidades de reacción permite cada uno. Para $aA+bB$, puedes comparar $n(A)/a$ y $n(B)/b$. El menor valor identifica el limitante.

No lo decidas por masa. Sustancias con masas molares distintas no se comparan directamente en gramos.

## Pureza

Si una muestra tiene pureza $p\\%$, la masa de sustancia activa es:

$$
m_{pura}=m_{muestra}\\frac{p}{100}.
$$

Aplica la pureza antes de convertir a moles. El resto de la muestra no participa como la sustancia indicada, salvo información adicional.

## Rendimiento

El rendimiento porcentual compara cantidad real y teórica:

$$
\\%R=\\frac{cantidad\\ real}{cantidad\\ teórica}\\cdot100.
$$

La cantidad teórica se calcula a partir del reactivo limitante. Si obtienes más del 100%, revisa datos, pureza, humedad o interpretación experimental.

## Disoluciones y gases

En disoluciones, $n=cV$ con volumen en litros. En gases, utiliza la relación indicada por el temario y las condiciones del problema. No emplees un volumen molar sin comprobar temperatura, presión y convención del curso.

## Errores frecuentes

- Usar gramos en la proporción de coeficientes.
- No ajustar la ecuación.
- Elegir el limitante por la masa menor.
- Aplicar pureza después de hallar el producto.
- Usar mL en $n=cV$ sin convertir.
- Redondear demasiado pronto.

## Ejercicios de control

1. ¿Cuántos moles hay en 11 g de $CO_2$ si $M=44$ g/mol?
2. En $N_2+3H_2\\to2NH_3$, ¿cuántos moles de amoníaco produce 1 mol de $N_2$ con hidrógeno en exceso?
3. ¿Qué masa pura contiene una muestra de 50 g al 80%?
4. Si el rendimiento teórico es 20 g y se obtienen 15 g, ¿cuál es el porcentaje?

Respuestas: 0,25 mol; 2 mol; 40 g; 75%.

El campus virtual de Método Nebula une fundamentos, mol, gases, disoluciones y estequiometría aplicada con ejemplos, ejercicios y preguntas de examen. Si quieres sustituir fórmulas aisladas por una ruta que puedas reutilizar, utiliza el botón de contacto.
`,u=`---
title: "Cómo representar cualquier función en Bachillerato: la guía que conecta todos los pasos"
date: "2026-10-09"
updated: "2026-10-28"
description: "Guía completa para estudiar y representar funciones en Bachillerato: dominio, cortes, límites, derivadas, concavidad y ejemplo."
tag: "Bachillerato"
category: "Matemáticas ESO y Bachillerato"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "estudio-completo-funcion-paso-a-paso,continuidad-derivabilidad-diferencias-problemas"
image: "/assets/latex/function-study.svg"
---

Una representación de funciones no es una colección de cálculos independientes. Es una investigación: cada dato restringe la forma que puede tener la gráfica. El dominio dice dónde existe; los límites describen comportamientos; las derivadas explican cómo cambia.

![Gráfica con máximo, mínimo y secuencia para el estudio completo de una función](/assets/latex/function-study.svg)

## El orden que evita contradicciones

1. Dominio y simetrías.
2. Cortes con los ejes y signo.
3. Límites y asíntotas.
4. Continuidad.
5. Primera derivada: crecimiento y extremos.
6. Segunda derivada: concavidad e inflexión.
7. Tabla resumen y dibujo.

El orden puede adaptarse, pero dibujar antes de justificar suele ocultar errores.

## Dominio: la primera frontera

Busca denominadores nulos, radicandos negativos en raíces pares y argumentos no positivos en logaritmos. Para una racional:

$$
f(x)=\\frac{x+1}{x-2},
$$

el dominio es $\\mathbb{R}\\setminus\\{2\\}$. Ese punto también sugiere estudiar una posible asíntota vertical.

## Cortes y signo

El corte con el eje $y$ se obtiene evaluando $f(0)$ si existe. Los cortes con el eje $x$ se hallan resolviendo $f(x)=0$. En una función racional, los ceros proceden del numerador siempre que el denominador no se anule.

Una tabla de signos indica dónde la gráfica queda por encima o por debajo del eje.

## Límites y asíntotas

Una asíntota vertical en $x=a$ requiere estudiar límites laterales. Una horizontal $y=L$ aparece si $f(x)\\to L$ cuando $x\\to\\pm\\infty$. Una oblicua puede buscarse cuando la función crece aproximadamente como una recta.

No escribas una asíntota por reconocer una forma: justifícala con el límite correspondiente.

## Primera derivada: de símbolos a comportamiento

Los puntos críticos aparecen donde $f'(x)=0$ o donde la derivada no existe dentro del dominio. Construye una tabla de signos:

- $f'(x)>0$: la función crece.
- $f'(x)<0$: decrece.
- cambio de $+$ a $-$: máximo local.
- cambio de $-$ a $+$: mínimo local.

Un punto con derivada cero no es automáticamente un extremo.

## Segunda derivada y concavidad

El signo de $f''$ informa de la curvatura. Un candidato a punto de inflexión debe pertenecer a la gráfica y mostrar cambio de concavidad. Resolver $f''(x)=0$ solo produce candidatos.

## Ejemplo breve

Considera:

$$
f(x)=x^3-3x.
$$

El dominio es todo $\\mathbb{R}$ y la función es impar. Sus ceros son $x=-\\sqrt3,0,\\sqrt3$.

$$
f'(x)=3x^2-3=3(x-1)(x+1).
$$

Crece en $(-\\infty,-1)$ y $(1,\\infty)$; decrece en $(-1,1)$. Hay máximo local en $x=-1$, con $f(-1)=2$, y mínimo en $x=1$, con $f(1)=-2$.

Además:

$$
f''(x)=6x,
$$

por lo que cambia la concavidad en $x=0$ y el origen es punto de inflexión.

## Comprobaciones que ahorran errores

- Los cortes calculados deben aparecer en el dibujo.
- La gráfica no puede cruzar una asíntota vertical porque ese valor no pertenece al dominio.
- El sentido de crecimiento debe coincidir con la tabla de $f'$.
- Máximos, mínimos e inflexiones deben tener coordenadas completas.
- El comportamiento en infinito debe respetar los límites.

## Errores frecuentes

- Derivar antes de estudiar el dominio.
- Resolver $f'(x)=0$ y llamar extremos a todos los resultados.
- Confundir asíntota horizontal con un límite que no existe.
- Dibujar una curva suave atravesando un punto excluido.
- No separar intervalos en puntos fuera del dominio.

## Cómo practicar

Trabaja primero polinomios, después racionales y finalmente funciones con raíces, logaritmos o exponenciales. Alterna estudios parciales con ejercicios completos. Una vez por semana, representa una función con tiempo limitado y explica oralmente cada decisión.

El campus virtual de Método Nebula recorre funciones, límites, derivadas y aplicaciones con teoría, ejemplos y ejercicios graduados. Si quieres detectar si el bloqueo es algebraico, gráfico o de cálculo, utiliza el botón de contacto y convertimos el diagnóstico en una ruta concreta.
`,m=`---
title: "Sucesiones y progresiones en Bachillerato: cómo distinguir crecimiento lineal, exponencial y sumas"
seoTitle: "Sucesiones y progresiones en Bachillerato"
date: "2026-10-16"
updated: "2026-10-16"
description: "Domina sucesiones aritméticas y geométricas en Bachillerato: término general, sumas, crecimiento, interés y ejercicios."
tag: "Matemáticas Bachillerato"
category: "Matemáticas ESO y Bachillerato"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "eso-matematicas-porcentajes-interes-compuesto,bachillerato-matematicas-funciones-representacion,como-estudiar-matematicas-sin-memorizar"
image: "/assets/latex/sequences-growth.svg"
---

Una sucesión aritmética y una geométrica pueden empezar con números parecidos, pero responden a modelos distintos. La primera añade una cantidad constante; la segunda multiplica por un factor constante.

> **Respuesta directa.** Si las diferencias son constantes, usa $a_n=a_1+(n-1)d$. Si los cocientes son constantes, usa $a_n=a_1r^{n-1}$. Para sumar términos, identifica primero el tipo y el número de términos.

![Comparación del crecimiento aritmético lineal y geométrico exponencial](/assets/latex/sequences-growth.svg)

## Progresión aritmética

$$
a_n=a_1+(n-1)d.
$$

La suma de los primeros $n$ términos es:

$$
S_n=\\frac n2(a_1+a_n)
=\\frac n2[2a_1+(n-1)d].
$$

### Ejemplo

En $5,8,11,\\ldots$, $d=3$:

$$
a_{20}=5+19(3)=62.
$$

## Progresión geométrica

$$
a_n=a_1r^{n-1}.
$$

Si $r\\neq1$:

$$
S_n=a_1\\frac{r^n-1}{r-1}.
$$

Para $|r|<1$, la suma infinita converge:

$$
S_\\infty=\\frac{a_1}{1-r}.
$$

## Crecimiento porcentual

Un aumento del 4 % por período corresponde a:

$$
r=1.04.
$$

Tras $n$ períodos:

$$
C_n=C_0(1.04)^n.
$$

Sumar $4$ cada año no representa un 4 % salvo en un caso muy particular.

## Encontrar una posición

Si $a_n=7+4(n-1)$ y queremos $a_n=95$:

$$
95=7+4(n-1)
\\Rightarrow88=4(n-1)
\\Rightarrow n=23.
$$

La posición debe ser un número natural; si el despeje no lo es, el valor no pertenece a la sucesión.

## Modelos recurrentes

Una sucesión también puede definirse por recurrencia:

$$
a_{n+1}=a_n+d
$$

o:

$$
a_{n+1}=ra_n.
$$

La recurrencia explica cómo avanzar; el término general permite ir directamente a cualquier posición.

## Deducir parámetros a partir de dos términos

En una progresión aritmética, si $a_4=17$ y $a_{10}=41$:

$$
a_1+3d=17,
\\qquad
a_1+9d=41.
$$

Al restar, $6d=24$, luego $d=4$ y $a_1=5$. Restar ecuaciones elimina el término inicial y evita probar valores.

En una geométrica con términos positivos, si $a_3=12$ y $a_6=96$:

$$
\\frac{a_6}{a_3}=r^3=8\\Rightarrow r=2,
\\qquad
a_1=\\frac{12}{2^2}=3.
$$

El cociente entre términos separa el efecto acumulado de la razón.

## Sumas en problemas reales

Si una persona ahorra 50 € el primer mes y aumenta la aportación mensual en 10 €, las aportaciones forman una progresión aritmética. En 12 meses:

$$
a_{12}=50+11(10)=160,
$$

$$
S_{12}=\\frac{12}{2}(50+160)=1260\\ \\text{€}.
$$

El término $a_{12}$ es solo la aportación del último mes; $S_{12}$ es el total acumulado. Confundirlos es uno de los fallos más frecuentes en enunciados contextualizados.

En un capital con interés compuesto, en cambio, cada valor se obtiene multiplicando el anterior. Si además se realizan aportaciones periódicas, aparece una suma geométrica: cada depósito permanece invertido durante un número distinto de períodos. Dibujar una línea temporal ayuda a asignar el exponente correcto.

## Interpretación gráfica y límites

Una aritmética se representa mediante puntos alineados, aunque la variable $n$ solo toma valores naturales. Una geométrica con $r>1$ crece de forma exponencial; con $0<r<1$, decrece hacia cero. Si $r<0$, los signos alternan, por lo que la gráfica no es una curva exponencial positiva sencilla.

La suma infinita solo existe para $|r|<1$ porque los términos deben acercarse a cero. Esa condición es matemática, no un detalle opcional de la fórmula.

## Errores frecuentes

- Usar $n$ en vez de $n-1$.
- Confundir diferencia con razón.
- Aplicar la suma infinita cuando $|r|\\geq1$.
- Interpretar porcentaje como incremento fijo.
- No comprobar si la posición obtenida es entera.

## Estrategia de examen

Construye una tabla con $n$, $a_n$, diferencia y cociente. El patrón correcto suele hacerse visible antes de elegir fórmula.

El campus de Método Nebula desarrolla sucesiones, funciones e interés compuesto con teoría y ejercicios graduados. Contacta para conectar fórmulas, gráficas y problemas contextualizados.
`,p=`---
title: "Trigonometría en Bachillerato: cómo elegir entre seno, coseno y tangente sin probar fórmulas"
date: "2026-10-20"
updated: "2026-10-20"
description: "Método para resolver triángulos en Bachillerato: razones trigonométricas, leyes de senos y cosenos, ambigüedad y ejemplos."
tag: "Bachillerato"
category: "Matemáticas ESO y Bachillerato"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "bachillerato-matematicas-funciones-representacion,como-estudiar-matematicas-sin-memorizar"
image: "/assets/latex/triangle-strategy.svg"
---

Resolver un triángulo no consiste en buscar una fórmula que contenga la letra desconocida. Consiste en reconocer qué información geométrica está disponible. El criterio más útil es mirar si existe un **par lado–ángulo opuesto** o un **ángulo comprendido entre dos lados**.

![Triángulo general con criterio para elegir la ley de los senos o la ley del coseno](/assets/latex/triangle-strategy.svg)

## Si hay ángulo recto

En un triángulo rectángulo, respecto al ángulo $\\theta$:

$$
\\sin\\theta=\\frac{\\text{cateto opuesto}}{\\text{hipotenusa}},\\quad
\\cos\\theta=\\frac{\\text{cateto adyacente}}{\\text{hipotenusa}},
$$

$$
\\tan\\theta=\\frac{\\text{cateto opuesto}}{\\text{cateto adyacente}}.
$$

La razón adecuada es la que conecta los dos lados conocidos o buscados. Pitágoras es preferible si intervienen únicamente lados.

## Ley de los senos

En cualquier triángulo:

$$
\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}.
$$

Es especialmente útil cuando conoces:

- Dos ángulos y un lado.
- Dos lados y un ángulo opuesto a uno de ellos.

La correspondencia es esencial: $a$ siempre está frente a $A$, $b$ frente a $B$ y $c$ frente a $C$.

## Ley del coseno

$$
a^2=b^2+c^2-2bc\\cos A.
$$

Conviene cuando conoces:

- Dos lados y el ángulo comprendido.
- Los tres lados y buscas un ángulo.

Es una extensión de Pitágoras. Si $A=90^\\circ$, entonces $\\cos A=0$ y queda $a^2=b^2+c^2$.

## Ejemplo con ley del coseno

Dos lados miden 7 cm y 10 cm y el ángulo comprendido es $48^\\circ$. El lado opuesto cumple:

$$
a^2=7^2+10^2-2\\cdot7\\cdot10\\cos48^\\circ.
$$

$$
a\\approx7,44\\ \\mathrm{cm}.
$$

La desigualdad triangular proporciona una comprobación: el tercer lado debe estar entre $|10-7|=3$ y $10+7=17$.

## Ejemplo con ley de los senos

Si $A=42^\\circ$, $a=8$ cm y $B=65^\\circ$:

$$
\\frac{b}{\\sin65^\\circ}=\\frac{8}{\\sin42^\\circ}.
$$

$$
b=8\\frac{\\sin65^\\circ}{\\sin42^\\circ}\\approx10,84\\ \\mathrm{cm}.
$$

El tercer ángulo es $C=180^\\circ-42^\\circ-65^\\circ=73^\\circ$.

## El caso ambiguo del seno

Si se conocen dos lados y un ángulo no comprendido, puede haber dos triángulos, uno o ninguno. Esto ocurre porque:

$$
\\sin\\theta=\\sin(180^\\circ-\\theta).
$$

Si la calculadora devuelve $B=38^\\circ$, también hay que comprobar $B'=142^\\circ$. La segunda opción solo es válida si la suma con el ángulo conocido es menor que $180^\\circ$ y los lados respetan la geometría.

## Área de un triángulo

Con dos lados y el ángulo comprendido:

$$
\\mathcal A=\\frac12bc\\sin A.
$$

La fórmula se deduce de base por altura: la altura relativa a $b$ es $c\\sin A$. Entender esa deducción evita confundir qué ángulo debe emplearse.

## El dibujo también es una comprobación

Un croquis no necesita estar a escala exacta, pero debe conservar el orden de los ángulos y la correspondencia de lados. El ángulo mayor siempre queda frente al lado mayor. Si el cálculo produce $A>B$ pero también $a<b$, alguna pareja se ha cruzado o la calculadora está en el modo incorrecto.

Conviene mantener todos los decimales durante el desarrollo y redondear solo al final. Al resolver un triángulo, un lado redondeado se utiliza después para otro ángulo o para el área; un pequeño error temprano puede amplificarse. Cuando sea posible, reutiliza los datos originales en lugar de un resultado intermedio.

En problemas aplicados añade una frase final: altura, distancia o ángulo en el contexto. Un número trigonométrico sin indicar qué segmento representa deja incompleta la solución.

## Protocolo de decisión

La elección del método parte de un dibujo con lados y ángulos opuestos correctamente emparejados. Un ángulo recto conduce a razones trigonométricas o Pitágoras. Un par lado–ángulo opuesto conocido favorece la ley de los senos; dos lados con el ángulo comprendido, o tres lados, conducen a la ley del coseno.

La suma de ángulos, la desigualdad triangular y la correspondencia entre el mayor lado y el mayor ángulo ofrecen tres comprobaciones independientes del resultado.

## Errores frecuentes

- Emparejar un lado con un ángulo no opuesto.
- Usar ley de los senos sin ningún par completo conocido.
- Olvidar la segunda solución del seno.
- Dejar la calculadora en radianes.
- Introducir un ángulo no comprendido en la ley del coseno.
- Redondear antes del resultado final.

El campus virtual de Método Nebula desarrolla trigonometría desde triángulos rectángulos hasta leyes de senos y cosenos, identidades y ecuaciones, con ejemplos y práctica gradual. El botón de contacto permite solicitar una ruta basada en la estructura de cada problema.
`,$=`---
title: "Configuración electrónica y tabla periódica en Bachillerato: cómo justificar tendencias sin memorizar flechas"
seoTitle: "Configuración electrónica y periodicidad en Bachillerato"
date: "2026-10-21"
updated: "2026-10-21"
description: "Entiende configuración electrónica y propiedades periódicas: radio, ionización, electronegatividad, apantallamiento e iones."
tag: "Química Bachillerato"
category: "Física y Química"
relatedService: "/clases-particulares/quimica/"
relatedPosts: "pau-quimica-estructura-atomica-configuracion,pau-quimica-equilibrio-quimico-estudiar,bachillerato-fisica-quimica-mol-estequiometria"
image: "/assets/latex/periodic-trends.svg"
---

Las flechas de tendencias periódicas se olvidan cuando no se entiende qué fuerza compite con qué distancia. La tabla se vuelve predecible al combinar carga nuclear efectiva, nivel electrónico y apantallamiento.

> **Respuesta directa.** A lo largo de un período aumenta la carga nuclear efectiva y el radio suele disminuir; energía de ionización y electronegatividad aumentan. Al bajar en un grupo aparecen nuevos niveles: crece el radio y suele disminuir la atracción sobre el electrón externo.

![Direcciones generales del radio atómico, energía de ionización y electronegatividad](/assets/latex/periodic-trends.svg)

## Configuración y posición

La configuración externa ayuda a identificar grupo y bloque. Por ejemplo:

$$
\\mathrm{Cl}:[Ne]\\,3s^2\\,3p^5.
$$

Tiene siete electrones de valencia y pertenece al bloque $p$.

## Radio atómico

A lo largo de un período, los electrones se incorporan al mismo nivel principal mientras aumenta la carga nuclear. La atracción efectiva crece y el radio disminuye.

Al bajar en un grupo se añade un nivel completo, aumenta distancia y apantallamiento, y el radio crece.

## Energía de ionización

Es la energía necesaria para extraer un mol de electrones de un mol de átomos gaseosos:

$$
\\mathrm{X(g)\\to X^+(g)+e^-}.
$$

Debe mencionarse estado gaseoso y un mol. Una atracción mayor suele elevar la energía requerida.

## Electronegatividad

Mide la tendencia de un átomo enlazado a atraer densidad electrónica. No es exactamente lo mismo que afinidad electrónica o energía de ionización, aunque comparten tendencias generales.

## Iones y tamaño

Un catión suele ser menor que su átomo porque pierde electrones y disminuye repulsión; a veces desaparece un nivel completo. Un anión suele ser mayor porque aumenta la repulsión electrónica.

En una serie isoelectrónica, más protones implican menor radio.

## Ejemplo razonado

Compara $\\mathrm{Na^+}$, $\\mathrm{Mg^{2+}}$ y $\\mathrm{F^-}$. Los tres tienen 10 electrones. El núcleo de $\\mathrm{Mg^{2+}}$ tiene más protones y atrae con mayor fuerza, por lo que presenta el menor radio.

## Carga nuclear efectiva: la justificación completa

Los electrones internos apantallan parte de la atracción del núcleo, pero el apantallamiento no anula toda la carga adicional. Al avanzar en un período, protones y electrones se añaden, pero los electrones de valencia permanecen aproximadamente en el mismo nivel. Por eso aumenta la carga nuclear efectiva que sienten y el radio tiende a disminuir.

Al descender en un grupo domina otro cambio: se ocupa un nivel principal más alejado. La mayor distancia y el apantallamiento adicional reducen la atracción sobre el electrón externo, aunque el núcleo tenga más protones. Una explicación evaluable debe nombrar las tres piezas —carga, distancia y apantallamiento— y decidir cuál domina.

## Ionizaciones sucesivas y electrones de valencia

Las energías de ionización sucesivas siempre aumentan porque queda un ion cada vez más positivo. Un salto especialmente grande revela que se ha empezado a extraer electrones de una capa interna. Si un elemento muestra un gran salto entre la segunda y la tercera ionización, es razonable deducir que posee dos electrones de valencia.

Esta evidencia conecta datos experimentales y posición periódica. No se trata solo de recordar un grupo: se interpreta dónde cambia la configuración electrónica. También explica por qué ciertos iones son más estables que otros dentro de un modelo sencillo de capa completa.

## Excepciones útiles

Las irregularidades en energía de ionización pueden explicarse por subniveles y apareamiento. No invalidan el modelo; muestran que la energía electrónica no depende solo del período.

## Errores frecuentes

- Justificar todo únicamente con el número de protones.
- Confundir átomo mayor con ion mayor.
- Afirmar que electronegatividad es “ganar electrones”.
- Escribir configuraciones sin aplicar Hund.
- Memorizar flechas sin nombrar distancia y apantallamiento.

El campus de Método Nebula enlaza estructura electrónica, periodicidad, enlace y reactividad mediante teoría y problemas. Contacta para convertir las tendencias en explicaciones evaluables.
`,g=`---
title: "Reactivo limitante, pureza y rendimiento: el problema de estequiometría que resume Bachillerato"
date: "2026-10-05"
updated: "2026-10-05"
description: "Resuelve problemas de reactivo limitante, pureza y rendimiento en Química de Bachillerato con una cadena de cálculo rigurosa."
tag: "Bachillerato"
category: "Física y Química"
relatedService: "/clases-particulares/fisica-quimica/"
relatedPosts: "bachillerato-fisica-quimica-mol-estequiometria,estequiometria-universitaria-ejercicios-resueltos"
image: "/assets/latex/stoichiometry-chain.svg"
---

Los problemas más completos de estequiometría combinan una muestra impura, dos reactivos, un rendimiento inferior al 100 % y una pregunta final en gramos. Parecen cuatro dificultades, pero se resuelven con una sola cadena lógica: **cantidad real → moles disponibles → proporción química → producto teórico → producto real**.

![Cadena de cálculo desde masa y pureza hasta reactivo limitante y rendimiento](/assets/latex/stoichiometry-chain.svg)

## La ecuación ajustada es el centro

Consideremos:

$$
\\mathrm{2Al+3Cl_2\\rightarrow2AlCl_3}.
$$

Los coeficientes relacionan moles, no gramos: 2 mol de Al reaccionan con 3 mol de $\\mathrm{Cl_2}$ para formar 2 mol de $\\mathrm{AlCl_3}$. Antes de comparar reactivos hay que convertirlos a moles.

## Pureza: corrige la cantidad antes de reaccionar

Si una muestra de masa $m_{\\text{muestra}}$ tiene pureza $p$ expresada como fracción:

$$
m_{\\text{puro}}=p\\,m_{\\text{muestra}}.
$$

Una muestra de 10,0 g al 80 % contiene 8,0 g de sustancia activa. Los 2,0 g restantes no pueden entrar en la proporción estequiométrica salvo que el problema indique otra reacción.

## Cómo identificar el reactivo limitante

La comparación exige expresar cada reactivo en moles y determinar cuánto producto podría formar por separado. El que produzca menos cantidad de producto es el limitante.

También puede compararse el cociente:

$$
\\frac{n_i}{\\nu_i},
$$

donde $n_i$ son los moles disponibles y $\\nu_i$ el coeficiente estequiométrico. El menor cociente señala el reactivo limitante.

## Ejemplo integrado

Reaccionan 13,5 g de Al al 80 % de pureza con 28,4 g de $\\mathrm{Cl_2}$. ¿Qué masa real de $\\mathrm{AlCl_3}$ se obtiene si el rendimiento es del 75 %? Usa $M(Al)=27,0$, $M(Cl_2)=71,0$ y $M(AlCl_3)=133,5\\,\\mathrm{g/mol}$.

Masa pura de aluminio:

$$
m(Al)=13,5\\cdot0,80=10,8\\ \\mathrm{g}.
$$

Moles disponibles:

$$
n(Al)=\\frac{10,8}{27,0}=0,400\\ \\mathrm{mol},
$$

$$
n(Cl_2)=\\frac{28,4}{71,0}=0,400\\ \\mathrm{mol}.
$$

Comparamos con los coeficientes:

$$
\\frac{0,400}{2}=0,200,\\qquad \\frac{0,400}{3}=0,133.
$$

El cloro es limitante. Según $3\\,\\mathrm{mol}\\ Cl_2\\to2\\,\\mathrm{mol}\\ AlCl_3$:

$$
n_{\\text{teo}}(AlCl_3)=0,400\\frac{2}{3}=0,2667\\ \\mathrm{mol}.
$$

$$
m_{\\text{teo}}=0,2667\\cdot133,5=35,6\\ \\mathrm{g}.
$$

Con rendimiento del 75 %:

$$
m_{\\text{real}}=0,75\\cdot35,6=26,7\\ \\mathrm{g}.
$$

## Reactivo en exceso

El aluminio consumido es:

$$
n(Al)_{\\text{cons}}=0,400\\frac{2}{3}=0,2667\\ \\mathrm{mol}.
$$

Quedan $0,400-0,2667=0,1333$ mol, es decir, 3,60 g de Al puro. El rendimiento no significa necesariamente que reaccione solo el 75 % del limitante; describe la relación entre producto real aislado y producto teórico bajo el modelo del problema.

## Orden correcto de las correcciones

La pureza se aplica al reactivo disponible antes de calcular moles. El rendimiento se aplica al producto teórico al final:

$$
\\%R=\\frac{m_{\\text{real}}}{m_{\\text{teórico}}}\\times100.
$$

Intercambiar ambas etapas puede dar resultados numéricos aparentemente plausibles, pero rompe el significado químico.

## Control de unidades y de magnitud

Cada conversión puede expresarse como un factor que cancela unidades. Por ejemplo:

$$
28,4\\ \\mathrm{g\\ Cl_2}\\cdot\\frac{1\\ \\mathrm{mol\\ Cl_2}}{71,0\\ \\mathrm{g\\ Cl_2}}\\cdot
\\frac{2\\ \\mathrm{mol\\ AlCl_3}}{3\\ \\mathrm{mol\\ Cl_2}}.
$$

Al final solo quedan moles de producto. Esta escritura permite localizar un cociente invertido sin repetir todo el ejercicio. También conviene estimar: si 0,4 mol de reactivo limitante se transforma con una proporción $2/3$, el producto debe ser menor que 0,4 mol; obtener 0,6 mol indicaría que la razón se ha invertido.

La masa de producto puede superar la masa del limitante porque incorpora átomos del reactivo en exceso. Por tanto, comparar solo esas dos masas no es una prueba válida de error; la comprobación correcta es conservar cada elemento mediante la ecuación ajustada.

## Errores frecuentes

- Comparar masas de reactivos en vez de moles ajustados.
- Aplicar la pureza al producto.
- Elegir como limitante el reactivo con menos gramos.
- Aplicar el rendimiento antes de identificar el limitante.
- Usar coeficientes de una ecuación sin ajustar.
- Confundir masa teórica con masa real.

El campus virtual de Método Nebula desarrolla mol, masas molares, limitante, pureza, rendimiento, gases y disoluciones mediante ejemplos guiados y problemas acumulativos. El botón de contacto permite solicitar una ruta que entrena la cadena completa hasta dar sentido a cada paso.
`,f=`---
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
dx=g'(u)\\,du.
$$

La derivada corrige el cambio de escala. Por ejemplo, si $x=2u$, un intervalo de longitud $du$ se convierte en otro de longitud $2du$.

En dos dimensiones usamos una transformación

$$
T(u,v)=\\bigl(x(u,v),y(u,v)\\bigr).
$$

Un pequeño rectángulo de lados $du$ y $dv$ en el plano $uv$ se transforma aproximadamente en un paralelogramo en el plano $xy$. Sus lados locales vienen dados por

$$
T_u=(x_u,y_u),
\\qquad
T_v=(x_v,y_v).
$$

El área del paralelogramo es el valor absoluto de su determinante:

$$
dA\\approx
\\left|\\det
\\begin{pmatrix}
x_u & x_v\\\\
y_u & y_v
\\end{pmatrix}\\right|du\\,dv.
$$

![Una cuadrícula rectangular transformada en una cuadrícula curvada, con una celda elemental destacada](/assets/latex/jacobian-coordinate-transform.svg)

## Definición del jacobiano

El jacobiano de $(x,y)$ respecto de $(u,v)$ es

$$
\\frac{\\partial(x,y)}{\\partial(u,v)}
=
\\begin{vmatrix}
\\dfrac{\\partial x}{\\partial u} & \\dfrac{\\partial x}{\\partial v}\\\\[4pt]
\\dfrac{\\partial y}{\\partial u} & \\dfrac{\\partial y}{\\partial v}
\\end{vmatrix}
=x_uy_v-x_vy_u.
$$

La fórmula de cambio de variables es

$$
\\boxed{
\\iint_R f(x,y)\\,dx\\,dy
=\\iint_S f(x(u,v),y(u,v))
\\left|\\frac{\\partial(x,y)}{\\partial(u,v)}\\right|du\\,dv
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

Las coordenadas polares, por ejemplo, identifican todos los valores de $\\theta$ cuando $r=0$. Esa falta de unicidad ocurre en un único punto, de área cero, y no impide su uso habitual en un disco.

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
x=r\\cos\\theta,
\\qquad
y=r\\sin\\theta.
$$

Su jacobiano es

$$
\\frac{\\partial(x,y)}{\\partial(r,\\theta)}
=
\\begin{vmatrix}
\\cos\\theta & -r\\sin\\theta\\\\
\\sin\\theta & r\\cos\\theta
\\end{vmatrix}
=r\\cos^2\\theta+r\\sin^2\\theta=r.
$$

Como se toma $r\\ge0$,

$$
dx\\,dy=r\\,dr\\,d\\theta.
$$

El factor $r$ tiene una interpretación geométrica. Una pequeña variación $dr$ cambia el radio, mientras que un ángulo $d\\theta$ recorre un arco de longitud aproximada $r\\,d\\theta$. El área local es, por tanto, $dr(r\\,d\\theta)$.

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
\\qquad
\\tan\\theta=\\frac yx.
$$

Una circunferencia desplazada no siempre se simplifica con polares centradas en el origen; a veces conviene trasladar primero las coordenadas.

## Ejemplo 1: integral sobre un disco

Calcula

$$
I=\\iint_R(x^2+y^2)\\,dA,
\\qquad
R=\\{x^2+y^2\\le4\\}.
$$

El disco se transforma en

$$
0\\le r\\le2,
\\qquad
0\\le\\theta\\le2\\pi.
$$

El integrando pasa a ser $r^2$ y el elemento de área aporta otro factor $r$:

$$
I=\\int_0^{2\\pi}\\int_0^2r^3\\,dr\\,d\\theta.
$$

Entonces

$$
I=\\int_0^{2\\pi}\\left[\\frac{r^4}{4}\\right]_0^2d\\theta
=\\int_0^{2\\pi}4\\,d\\theta
=8\\pi.
$$

Como $0\\le x^2+y^2\\le4$ y el área del disco es $4\\pi$, la integral debe estar entre $0$ y $16\\pi$. El resultado cumple la cota.

## Ejemplo 2: volumen bajo un paraboloide

Hallemos el volumen bajo

$$
z=4-x^2-y^2
$$

y sobre el plano $z=0$. La superficie corta al plano cuando $x^2+y^2=4$, así que la base es el disco de radio $2$.

En polares,

$$
V=\\int_0^{2\\pi}\\int_0^2(4-r^2)r\\,dr\\,d\\theta.
$$

La integral radial es

$$
\\left[2r^2-\\frac{r^4}{4}\\right]_0^2=4.
$$

Por tanto,

$$
V=\\int_0^{2\\pi}4\\,d\\theta=8\\pi.
$$

El integrando es no negativo en toda la base y se anula en el borde, coherente con el sólido descrito.

## Ejemplo 3: sector anular

Sea

$$
R=\\{(x,y):1\\le x^2+y^2\\le9,\\ 0\\le y\\le x\\}.
$$

Las circunferencias dan $1\\le r\\le3$. La condición $0\\le y\\le x$ selecciona el sector del primer cuadrante entre $\\theta=0$ y $\\theta=\\pi/4$. El área es

$$
A=\\int_0^{\\pi/4}\\int_1^3r\\,dr\\,d\\theta.
$$

Calculando,

$$
A=\\frac\\pi4\\left[\\frac{r^2}{2}\\right]_1^3
=\\frac\\pi4\\cdot4=\\pi.
$$

También coincide con la fracción $1/8$ del área de la corona completa: $(1/8)\\pi(9-1)=\\pi$.

## Transformaciones lineales

Si

$$
x=au+bv,
\\qquad
y=cu+dv,
$$

el jacobiano es el determinante constante

$$
\\frac{\\partial(x,y)}{\\partial(u,v)}=ad-bc.
$$

Una transformación con determinante no nulo convierte rectángulos en paralelogramos y multiplica todas las áreas por $|ad-bc|$.

## Ejemplo 4: enderezar un rombo

Considera la región

$$
R=\\{(x,y):|x+y|\\le1,\\ |x-y|\\le1\\}.
$$

Sus fronteras sugieren

$$
u=x+y,
\\qquad
v=x-y.
$$

En el plano $uv$, la región es el cuadrado

$$
-1\\le u\\le1,
\\qquad
-1\\le v\\le1.
$$

Despejamos:

$$
x=\\frac{u+v}{2},
\\qquad
y=\\frac{u-v}{2}.
$$

El jacobiano inverso es

$$
\\frac{\\partial(x,y)}{\\partial(u,v)}
=
\\begin{vmatrix}
1/2 & 1/2\\\\
1/2 & -1/2
\\end{vmatrix}
=-\\frac12.
$$

Para calcular el área usamos su valor absoluto:

$$
A=\\int_{-1}^1\\int_{-1}^1\\frac12\\,dv\\,du=2.
$$

La región original es un rombo con diagonales $2$ y $2$, cuya área también es $(2\\cdot2)/2=2$.

Si además queremos integrar $(x+y)^2$, el integrando se convierte en $u^2$:

$$
\\iint_R(x+y)^2\\,dA
=\\int_{-1}^1\\int_{-1}^1\\frac{u^2}{2}\\,dv\\,du
=\\frac23.
$$

La transformación simplifica simultáneamente las fronteras y el integrando.

## Jacobiano directo e inverso

Si defines

$$
u=u(x,y),\\qquad v=v(x,y),
$$

es frecuente calcular primero

$$
\\frac{\\partial(u,v)}{\\partial(x,y)}.
$$

Pero la fórmula de integración en $du\\,dv$ necesita

$$
\\left|\\frac{\\partial(x,y)}{\\partial(u,v)}\\right|.
$$

Cuando las transformaciones son localmente inversas,

$$
\\frac{\\partial(x,y)}{\\partial(u,v)}
=\\frac{1}{\\dfrac{\\partial(u,v)}{\\partial(x,y)}}.
$$

El determinante del denominador debe evaluarse expresándolo en las nuevas variables si no es constante. Confundir ambas direcciones es uno de los errores más frecuentes.

## Ejemplo 5: región entre hipérbolas y rectas

En el primer cuadrante, sea $R$ la región delimitada por

$$
xy=1,\\quad xy=4,\\quad \\frac xy=1,\\quad \\frac xy=9.
$$

Las propias fronteras sugieren

$$
u=xy,
\\qquad
v=\\frac xy.
$$

La región nueva es el rectángulo

$$
1\\le u\\le4,
\\qquad
1\\le v\\le9.
$$

Como estamos en el primer cuadrante,

$$
x=\\sqrt{uv},
\\qquad
y=\\sqrt{\\frac uv}.
$$

Al calcular el determinante se obtiene

$$
\\left|\\frac{\\partial(x,y)}{\\partial(u,v)}\\right|
=\\frac1{2v}.
$$

Evaluemos

$$
I=\\iint_R\\frac1{xy}\\,dA.
$$

Como $xy=u$,

$$
I=\\int_1^4\\int_1^9\\frac1u\\frac1{2v}\\,dv\\,du.
$$

La integral es separable:

$$
I=\\frac12\\left(\\int_1^4\\frac{du}{u}\\right)
\\left(\\int_1^9\\frac{dv}{v}\\right)
=\\frac12\\ln4\\ln9
=2\\ln2\\ln3.
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
\\frac{x^2}{9}+\\frac{y^2}{4}\\le1.
$$

Tomamos

$$
x=3u,
\\qquad
y=2v.
$$

La región pasa al disco unidad $u^2+v^2\\le1$ y

$$
\\left|\\frac{\\partial(x,y)}{\\partial(u,v)}\\right|=6.
$$

Por tanto,

$$
A=\\iint_{u^2+v^2\\le1}6\\,du\\,dv=6\\pi.
$$

También puede combinarse en un solo paso con

$$
x=3r\\cos\\theta,
\\qquad
y=2r\\sin\\theta.
$$

El jacobiano es $6r$, y

$$
A=\\int_0^{2\\pi}\\int_0^16r\\,dr\\,d\\theta=6\\pi.
$$

El resultado coincide con la fórmula geométrica $\\pi ab$ para semiejes $3$ y $2$.

## Ejemplo 7: la integral gaussiana mediante polares

El cambio polar permite calcular una integral sin primitiva elemental directa:

$$
I=\\int_{-\\infty}^{+\\infty}e^{-x^2}\\,dx.
$$

Como el integrando es positivo, $I>0$. Elevamos al cuadrado e introducimos una segunda variable independiente:

$$
I^2
=\\int_{-\\infty}^{+\\infty}\\int_{-\\infty}^{+\\infty}
e^{-(x^2+y^2)}\\,dx\\,dy.
$$

La región es todo el plano y el integrando depende de $x^2+y^2$, así que usamos polares:

$$
I^2
=\\int_0^{2\\pi}\\int_0^{+\\infty}e^{-r^2}r\\,dr\\,d\\theta.
$$

Con $u=r^2$, $du=2r\\,dr$, la integral radial vale

$$
\\int_0^{+\\infty}e^{-r^2}r\\,dr
=\\frac12\\int_0^{+\\infty}e^{-u}\\,du
=\\frac12.
$$

Por tanto,

$$
I^2=2\\pi\\cdot\\frac12=\\pi.
$$

Como $I$ es positiva,

$$
\\boxed{I=\\sqrt\\pi}.
$$

El argumento completo requiere justificar el paso a la integral doble impropia, algo permitido aquí por la no negatividad. Conceptualmente, una integral difícil en una dimensión se vuelve radialmente elemental después de formar un problema bidimensional.

## Composición de transformaciones

A veces conviene realizar dos cambios sucesivos. Si $(u,v)$ depende de $(r,s)$ y $(x,y)$ depende de $(u,v)$, la regla de la cadena para determinantes da

$$
\\frac{\\partial(x,y)}{\\partial(r,s)}
=\\frac{\\partial(x,y)}{\\partial(u,v)}
\\frac{\\partial(u,v)}{\\partial(r,s)}.
$$

Esto explica el jacobiano $6r$ de la elipse: el escalado $(u,v)\\mapsto(3u,2v)$ aporta $6$, y las polares $(r,\\theta)\\mapsto(u,v)$ aportan $r$.

La multiplicación también ofrece una comprobación práctica. Si calculas el determinante combinado directamente y no coincide con el producto, alguna derivada parcial o algún orden de variables es incorrecto.

## Traslaciones y polares desplazadas

Si una región circular está centrada en $(a,b)$, conviene introducir primero

$$
u=x-a,
\\qquad
v=y-b.
$$

Esta traslación tiene jacobiano $1$: desplaza áreas sin deformarlas. Después usamos polares en las variables trasladadas,

$$
u=r\\cos\\theta,
\\qquad
v=r\\sin\\theta,
$$

de modo que

$$
x=a+r\\cos\\theta,
\\qquad
y=b+r\\sin\\theta,
$$

y el jacobiano combinado sigue siendo $r$.

Por ejemplo, el disco $(x-2)^2+(y+1)^2\\le9$ se convierte en $0\\le r\\le3$, $0\\le\\theta\\le2\\pi$. Usar polares centradas en el origen produciría una frontera radial dependiente del ángulo y perdería la principal ventaja del cambio.

Las traslaciones también simplifican integrandos como $(x-a)^2+(y-b)^2$. La regla práctica es centrar las coordenadas en el punto respecto del cual existe simetría antes de pasar a polares.

Esta elección no cambia la geometría del problema; solo escoge un sistema de referencia mejor adaptado. Conviene transformar primero la ecuación del borde y verificar que se reduce a $r=R$. Si todavía depende de $\\theta$, revisa el centro elegido o valora otra transformación.

## Transformaciones que cubren varias veces

No basta con que el jacobiano sea fácil. La transformación debe tener una multiplicidad controlada. Por ejemplo,

$$
x=r\\cos\\theta,\\qquad y=r\\sin\\theta
$$

cubre el disco una vez si $0\\le r\\le R$ y se toma un intervalo angular de longitud $2\\pi$. Si usamos $0\\le\\theta\\le4\\pi$, casi todos los puntos se cuentan dos veces y la integral se duplica.

Algo similar ocurre con transformaciones cuadráticas. Si

$$
u=x^2-y^2,
\\qquad
v=2xy,
$$

los puntos $(x,y)$ y $(-x,-y)$ producen el mismo $(u,v)$. Para usarla hay que restringir el dominio a una zona donde sea uno a uno o corregir explícitamente la multiplicidad.

## Cómo comprobar el resultado

### Comprobación de área

Integra solo el jacobiano sobre $S$. El resultado debe coincidir con el área conocida o estimada de $R$:

$$
\\operatorname{área}(R)
=\\iint_S\\left|\\frac{\\partial(x,y)}{\\partial(u,v)}\\right|du\\,dv.
$$

### Dimensión del jacobiano

Si $u$ y $v$ son adimensionales y $x,y$ tienen unidades de longitud, el jacobiano debe aportar unidades de área. En polares, $r\\,dr\\,d\\theta$ tiene dimensión longitud al cuadrado.

### Cotas y signo

Si el integrando original es no negativo, el resultado debe ser no negativo. Si $m\\le f\\le M$, multiplica esas cotas por el área para acotar la integral.

### Inversa local

Cuando sea posible, comprueba que

$$
\\frac{\\partial(u,v)}{\\partial(x,y)}
\\frac{\\partial(x,y)}{\\partial(u,v)}=1.
$$

Esto detecta si has usado el determinante recíproco incorrecto.

## El signo y la orientación

La transformación $x=u$, $y=-v$ refleja el plano respecto del eje $x$. Su jacobiano es $-1$: conserva áreas, pero invierte la orientación. Para una integral escalar usamos $|-1|=1$.

La orientación sí importa en otros contextos, como integrales de línea, flujo y teoremas vectoriales, donde el signo codifica el sentido de recorrido o la normal elegida. En el cambio de variables de una integral doble ordinaria, el elemento $dA$ representa área positiva y por eso se utiliza siempre el valor absoluto.

Este detalle permite recordar la regla: el determinante con signo describe orientación y escala; su valor absoluto conserva únicamente la escala de área necesaria aquí.

## Errores frecuentes

### Sustituir el integrando y olvidar $dA$

En polares, escribir $dx\\,dy=dr\\,d\\theta$ pierde el factor $r$. El resultado suele tener incluso unidades o escalas incorrectas.

### No usar valor absoluto

El signo del determinante describe orientación. El factor de área es siempre su valor absoluto.

### Transformar el dominio de memoria

Cada frontera debe traducirse por separado. Una desigualdad angular requiere además identificar el cuadrante correcto.

### Usar el jacobiano en la dirección equivocada

Si calculas $\\partial(u,v)/\\partial(x,y)$ pero integras en $du\\,dv$, normalmente necesitas su recíproco.

### Ignorar la inyectividad

Una parametrización que recorre dos veces la región duplica la integral. El intervalo angular y las ramas de raíces deben elegirse con cuidado.

## Ejercicios propuestos

1. Calcula el jacobiano de $x=2u+v$, $y=u-3v$.
2. Transforma $x^2+y^2\\le9$ a polares y halla su área.
3. Evalúa $\\iint_R e^{-(x^2+y^2)}dA$ en el disco unidad.
4. Halla el área del sector $1\\le r\\le2$, $\\pi/6\\le\\theta\\le\\pi/2$.
5. Con $u=x+y$, $v=x-y$, expresa $x^2-y^2$ en función de $u,v$.
6. Halla el área de $|x+y|\\le2$, $|x-y|\\le3$.
7. Transforma la elipse $x^2/16+y^2/9\\le1$ en el disco unidad y halla su área.
8. Calcula $\\iint_R(x^2+y^2)dA$ sobre la corona $1\\le x^2+y^2\\le4$.
9. Si $u=2x+y$ y $v=x-y$, calcula $\\partial(x,y)/\\partial(u,v)$.
10. Explica qué ocurre al usar polares con $0\\le\\theta\\le4\\pi$ para integrar un disco.

## Soluciones

### Ejercicio 1

El determinante es

$$
\\begin{vmatrix}2&1\\\\1&-3\\end{vmatrix}=-7.
$$

El factor de área es $7$.

### Ejercicio 2

Los límites son $0\\le r\\le3$, $0\\le\\theta\\le2\\pi$. Entonces

$$
A=\\int_0^{2\\pi}\\int_0^3r\\,dr\\,d\\theta=9\\pi.
$$

### Ejercicio 3

En polares,

$$
I=\\int_0^{2\\pi}\\int_0^1e^{-r^2}r\\,dr\\,d\\theta.
$$

Con $u=r^2$ resulta

$$
I=\\pi(1-e^{-1}).
$$

### Ejercicio 4

El ángulo mide $\\pi/3$. Por tanto,

$$
A=\\int_{\\pi/6}^{\\pi/2}\\int_1^2r\\,dr\\,d\\theta
=\\frac\\pi3\\cdot\\frac32=\\frac\\pi2.
$$

### Ejercicio 5

Como $x=(u+v)/2$ e $y=(u-v)/2$,

$$
x^2-y^2=(x+y)(x-y)=uv.
$$

### Ejercicio 6

La región nueva es $-2\\le u\\le2$, $-3\\le v\\le3$ y el factor jacobiano es $1/2$. Su área es

$$
(4)(6)\\frac12=12.
$$

### Ejercicio 7

Tomamos $x=4u$, $y=3v$. El jacobiano vale $12$ y el disco unidad tiene área $\\pi$, así que el área de la elipse es $12\\pi$.

### Ejercicio 8

La corona corresponde a $1\\le r\\le2$. Entonces

$$
I=\\int_0^{2\\pi}\\int_1^2r^2r\\,dr\\,d\\theta
=2\\pi\\left[\\frac{r^4}{4}\\right]_1^2
=\\frac{15\\pi}{2}.
$$

### Ejercicio 9

El jacobiano directo es

$$
\\frac{\\partial(u,v)}{\\partial(x,y)}
=\\begin{vmatrix}2&1\\\\1&-1\\end{vmatrix}=-3.
$$

Por tanto,

$$
\\frac{\\partial(x,y)}{\\partial(u,v)}=-\\frac13,
$$

y el factor de área es $1/3$.

### Ejercicio 10

Cada punto del disco, salvo excepciones de área cero, se representa dos veces. La integral resultante será el doble de la correcta. Debe usarse un intervalo angular de longitud $2\\pi$ para una cobertura única.

## Resumen operativo

Un cambio de variables útil convierte las fronteras en límites simples y reduce el integrando. Después hay que transformar también el área mediante el valor absoluto del jacobiano. En polares, recuerda $dA=r\\,dr\\,d\\theta$; en transformaciones definidas como $u(x,y)$ y $v(x,y)$, revisa si necesitas el determinante inverso.

Conviene dominar antes el planteamiento de [integrales dobles y cambios de orden](/blog/integrales-dobles-ejercicios-resueltos/). Para practicar transformaciones sobre regiones de examen, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
`,x=`---
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
`,v=`---
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

En la segunda semana repasa reglas de derivación, [continuidad y derivabilidad](/blog/continuidad-derivabilidad-diferencias-problemas/), recta tangente, crecimiento y extremos. Cada derivada debe responder a una pregunta: cómo cambia una función, dónde crece, dónde se aplana o dónde cambia de comportamiento.

La recta tangente en \\(x=a\\) se escribe así:

$$
y=f(a)+f'(a)(x-a)
$$

Si esta fórmula parece mecánica, reescríbela en palabras: parto del valor de la función y avanzo con la pendiente local. Esa interpretación evita muchos errores en problemas de aproximación lineal.

## Semana 3: estudio de funciones y problemas completos

Aquí conviene unir límites y derivadas. Practica dominio, cortes, asíntotas, monotonía, extremos, concavidad y representación cualitativa siguiendo un [estudio completo de una función paso a paso](/blog/estudio-completo-funcion-paso-a-paso/). En Cálculo I, un estudio de función mal ordenado suele costar muchos puntos aunque las derivadas estén bien.

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
- Un [problema de optimización con dominio](/blog/problemas-optimizacion-derivadas-ejercicios-resueltos/).
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
`,b=`---
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
`,y=`---
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
`,h=`---
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

Un problema típico pide maximizar beneficio o minimizar coste. La guía de [optimización con derivadas](/blog/problemas-optimizacion-derivadas-ejercicios-resueltos/) desarrolla también modelos geométricos y la comprobación del dominio. El método básico es:

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
`,q=`---
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

En Estadística de ESO, aplica esas fases a una lista pequeña de datos: construye una tabla, calcula media, mediana y moda, y cambia uno de los valores para explicar qué medida se modifica. La guía de [estadística descriptiva para ESO](/blog/estadistica-descriptiva-eso-media-mediana-moda/) ofrece un ejemplo completo para practicarlo.

## Ejemplo: optimización antes de derivar

Imagina un [ejercicio de optimización con derivadas](/blog/problemas-optimizacion-derivadas-ejercicios-resueltos/): "encuentra el área máxima". Muchos alumnos empiezan derivando cualquier expresión que aparece. El orden correcto es otro:

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
`,E=`---
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
`,_=`---
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
2. **Análisis:** límites, [continuidad y derivabilidad](/blog/continuidad-derivabilidad-diferencias-problemas/), derivadas, crecimiento, extremos, concavidad y representación razonada de funciones.
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
`,j=`---
title: Cómo resolver límites: indeterminaciones y ejercicios
seoTitle: "Límites e indeterminaciones: método y ejercicios resueltos"
date: 2026-08-17
updated: 2026-10-29
description: Método completo para resolver límites: sustitución, factorización, conjugados, límites notables, infinito e indeterminaciones con ejercicios.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: regla-lhopital-cuando-usarla-ejercicios,continuidad-derivabilidad-diferencias-problemas,como-aprobar-calculo-i-ingenieria-seis-semanas
image: /favicon.svg
---

Para resolver un límite no se empieza eligiendo una técnica: se empieza sustituyendo. Si la sustitución produce un número real y la función es continua alrededor del punto, el problema ha terminado. Solo cuando aparece una indeterminación hay que transformar la expresión sin alterar sus valores cerca del punto.

La pregunta clave no es «¿qué regla uso?», sino «¿qué impide evaluar y qué transformación elimina ese obstáculo?».

> **Respuesta directa.** Para resolver un límite, sustituye primero. Si aparece una indeterminación, identifica su forma y transforma la expresión con factorización, racionalización, límites notables o términos dominantes. Usa L'Hôpital solo en cocientes \\(0/0\\) o \\(\\infty/\\infty\\) y revisa siempre los límites laterales.

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

La [regla de L'Hôpital y sus condiciones de aplicación](/blog/regla-lhopital-cuando-usarla-ejercicios/) puede ser útil para ciertas formas $0/0$ y $\\infty/\\infty$, pero tiene hipótesis y no debe sustituir estas transformaciones básicas. Aplicarla a formas no válidas conduce a errores.

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
`,C=`---
title: Continuidad y derivabilidad: diferencias y problemas
seoTitle: "Continuidad y derivabilidad: diferencias y ejercicios"
date: 2026-08-31
updated: 2026-10-29
description: Distingue continuidad y derivabilidad, clasifica discontinuidades y resuelve funciones a trozos, parámetros, esquinas y tangentes paso a paso.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: como-resolver-limites-indeterminaciones-ejercicios,que-son-las-derivadas-y-para-que-se-utilizan,problemas-optimizacion-derivadas-ejercicios-resueltos
image: /favicon.svg
---

Una función es continua en un punto cuando su límite coincide con su valor. Es derivable cuando existe una pendiente instantánea finita y única. Toda función derivable en un punto es continua allí, pero una función continua puede no ser derivable: una esquina, una cúspide o una tangente vertical rompen la derivabilidad sin romper la gráfica.

> **Respuesta directa.** Continuidad significa que el límite coincide con el valor de la función; derivabilidad exige además una pendiente finita y única. Ser derivable implica ser continua, pero no al revés. En funciones a trozos, comprueba primero continuidad y después iguala las derivadas laterales.

## Continuidad en un punto

Una función $f$ es continua en $x=a$ si se cumplen simultáneamente:

1. $f(a)$ está definida.
2. Existe $\\lim_{x\\to a}f(x)$.
3. $\\lim_{x\\to a}f(x)=f(a)$.

Como el límite bilateral existe solo cuando coinciden los laterales, también podemos escribir

$$
\\lim_{x\\to a^-}f(x)
=\\lim_{x\\to a^+}f(x)
=f(a).
$$

Esta formulación es especialmente útil en funciones definidas a trozos. La guía de [límites e indeterminaciones](/blog/como-resolver-limites-indeterminaciones-ejercicios/) desarrolla las técnicas necesarias para calcular cada lateral.

### Interpretación gráfica

La continuidad significa que los valores próximos a $a$ están próximos a $f(a)$. La frase «dibujar sin levantar el lápiz» puede servir como intuición, pero no sustituye las tres condiciones: no distingue bien dominios, extremos ni comportamientos oscilatorios.

## Continuidad en intervalos

Una función es continua en un intervalo abierto si lo es en cada punto. En un intervalo cerrado $[a,b]$ se pide continuidad por la derecha en $a$, por la izquierda en $b$ y continuidad bilateral en los puntos interiores.

Las funciones elementales son continuas donde están definidas:

- los polinomios, en toda la recta real;
- los cocientes, donde el denominador no se anula;
- las raíces pares, donde el radicando es no negativo;
- los logaritmos, donde su argumento es positivo;
- las exponenciales y funciones trigonométricas, en sus dominios.

Sumas, productos y composiciones de funciones continuas siguen siendo continuas cuando las operaciones están definidas.

## Tipos de discontinuidad

Clasificar la discontinuidad ayuda a decidir si puede corregirse redefiniendo un punto o si forma parte esencial del comportamiento.

### Discontinuidad evitable

Existe un límite finito $L$, pero $f(a)$ no existe o no coincide con $L$.

### Ejemplo 1 — un hueco algebraico

Sea

$$
f(x)=\\frac{x^2-4}{x-2},\\qquad x\\neq2.
$$

Factorizamos:

$$
f(x)=x+2\\qquad(x\\neq2).
$$

Por tanto,

$$
\\lim_{x\\to2}f(x)=4.
$$

La función original no está definida en $2$, pero la discontinuidad se elimina definiendo $f(2)=4$. La fórmula simplificada no borra la restricción original; indica cuál debe ser la extensión continua.

### Discontinuidad de salto

Los límites laterales existen y son finitos, pero son distintos.

### Ejemplo 2 — función a trozos

$$
f(x)=
\\begin{cases}
x+1,&x<0,\\\\
x^2+2,&x\\geq0.
\\end{cases}
$$

En $x=0$,

$$
\\lim_{x\\to0^-}f(x)=1,
\\qquad
\\lim_{x\\to0^+}f(x)=2.
$$

No existe el límite bilateral. Cambiar únicamente $f(0)$ no puede unir dos tendencias diferentes, así que la discontinuidad no es evitable.

### Discontinuidad infinita

Al menos un límite lateral es infinito. Por ejemplo,

$$
f(x)=\\frac1{x-1}
$$

tiene una asíntota vertical en $x=1$:

$$
\\lim_{x\\to1^-}f(x)=-\\infty,
\\qquad
\\lim_{x\\to1^+}f(x)=+\\infty.
$$

### Discontinuidad oscilatoria

Los valores no se aproximan a un número ni crecen con un signo fijo, sino que oscilan indefinidamente. En

$$
f(x)=\\sin(1/x),
$$

cuando $x\\to0$ el argumento recorre valores cada vez mayores y el seno sigue oscilando entre $-1$ y $1$. El límite no existe.

## Definición de derivabilidad

Una función es derivable en $x=a$ si existe y es finito el límite

$$
f'(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}h.
$$

El cociente mide la pendiente de una secante entre $(a,f(a))$ y un punto próximo. Cuando $h\\to0$, si las pendientes convergen a un único valor, obtenemos la pendiente de la tangente. La guía sobre [qué son las derivadas](/blog/que-son-las-derivadas-y-para-que-se-utilizan/) desarrolla su interpretación como tasa de cambio.

![Recta tangente como límite de pendientes secantes](/assets/latex/derivative-tangent.svg)

También pueden calcularse derivadas laterales:

$$
f'_-(a)=\\lim_{h\\to0^-}\\frac{f(a+h)-f(a)}h,
\\qquad
f'_+(a)=\\lim_{h\\to0^+}\\frac{f(a+h)-f(a)}h.
$$

La derivada bilateral existe si ambas son finitas e iguales.

## Derivabilidad implica continuidad

Si $f$ es derivable en $a$, podemos escribir para $x\\neq a$:

$$
f(x)-f(a)
=\\frac{f(x)-f(a)}{x-a}(x-a).
$$

Al tomar límites cuando $x\\to a$,

$$
\\lim_{x\\to a}[f(x)-f(a)]
=f'(a)\\cdot0=0.
$$

Por tanto,

$$
\\lim_{x\\to a}f(x)=f(a),
$$

y $f$ es continua en $a$.

La implicación contraria es falsa. La continuidad asegura que no hay salto, hueco ni asíntota; no asegura que exista una pendiente única.

## Ejemplo 3 — continua pero no derivable: valor absoluto

Sea $f(x)=|x|$. Es continua en $0$ porque

$$
\\lim_{x\\to0}|x|=0=f(0).
$$

Las derivadas laterales son

$$
f'_-(0)=\\lim_{h\\to0^-}\\frac{|h|}{h}=-1,
\\qquad
f'_+(0)=\\lim_{h\\to0^+}\\frac{|h|}{h}=1.
$$

Como no coinciden, $f'(0)$ no existe. La gráfica tiene una esquina: llega con pendiente $-1$ y sale con pendiente $1$.

## Ejemplo 4 — cúspide y derivadas infinitas

Considera $f(x)=x^{2/3}$. Es continua en $0$, pero para $x\\neq0$,

$$
f'(x)=\\frac{2}{3x^{1/3}}.
$$

Cuando $x\\to0^-$, la derivada tiende a $-\\infty$; cuando $x\\to0^+$, tiende a $+\\infty$. No existe una derivada finita en el origen. La gráfica presenta una cúspide.

Una tangente vertical tampoco cuenta como derivada real finita en la definición habitual de Cálculo I, aunque geométricamente pueda hablarse de una recta tangente vertical.

## Funciones a trozos: método completo

Para estudiar una unión en $x=a$:

1. Comprueba continuidad igualando límite izquierdo, límite derecho y valor.
2. Solo si es continua, calcula las derivadas laterales.
3. Iguala las derivadas laterales para exigir derivabilidad.
4. Resuelve los parámetros y verifica el resultado en la función original.

La continuidad es una condición previa. Una función discontinua nunca puede ser derivable en el punto de ruptura.

## Ejemplo 5 — ajustar dos parámetros

Determina $m$ y $n$ para que

$$
f(x)=
\\begin{cases}
mx+n,&x<1,\\\\
x^2,&x\\geq1
\\end{cases}
$$

sea derivable en $x=1$.

**Continuidad.** El límite izquierdo es $m+n$ y el valor de la rama derecha es $1$. Por tanto,

$$
m+n=1.
$$

**Derivadas laterales.** La derivada izquierda vale $m$ y la derecha, $2x$ evaluada en $1$, vale $2$. Luego

$$
m=2.
$$

Sustituyendo en la condición de continuidad, $n=-1$. La solución es

$$
\\boxed{m=2,\\qquad n=-1}.
$$

**Comprobación.** Las dos ramas toman el valor $1$ en la unión y ambas pendientes valen $2$.

## Ejemplo 6 — continuidad no garantiza derivabilidad

Determina $a$ para que

$$
f(x)=
\\begin{cases}
ax,&x<0,\\\\
x^2+x,&x\\geq0
\\end{cases}
$$

sea continua y estudia cuándo es derivable.

Ambas ramas tienden a $0$ en el origen para cualquier $a$, y $f(0)=0$. Por tanto, es continua para todo $a$.

La derivada izquierda es $a$; la derecha es

$$
\\lim_{h\\to0^+}\\frac{h^2+h}{h}
=\\lim_{h\\to0^+}(h+1)=1.
$$

La función es derivable solo si $a=1$. Una condición de continuidad puede dejar libre un parámetro que la derivabilidad determina.

## Redefinir una función y estudiar su derivada

### Ejemplo 7 — extensión continua de un cociente

Sea

$$
f(x)=
\\begin{cases}
\\dfrac{x^2-1}{x-1},&x\\neq1,\\\\
c,&x=1.
\\end{cases}
$$

Para $x\\neq1$, $f(x)=x+1$. La continuidad exige $c=2$. Con ese valor, la función extendida coincide en toda la recta con $x+1$, por lo que es derivable en $1$ y

$$
f'(1)=1.
$$

Si $c\\neq2$, la función es discontinua y, en consecuencia, no derivable en $1$.

## Derivable una vez, pero no dos

La regularidad tiene niveles. Una función puede ser derivable sin tener segunda derivada.

### Ejemplo 8 — la función x por valor absoluto

Sea

$$
f(x)=x|x|
=\\begin{cases}
-x^2,&x<0,\\\\
x^2,&x\\geq0.
\\end{cases}
$$

En el origen,

$$
f'(0)=\\lim_{h\\to0}\\frac{h|h|}{h}
=\\lim_{h\\to0}|h|=0.
$$

La función es derivable. Para $x\\neq0$,

$$
f'(x)=
\\begin{cases}
-2x,&x<0,\\\\
2x,&x>0.
\\end{cases}
$$

Esta derivada también es continua en cero si definimos $f'(0)=0$, pero sus pendientes laterales son $-2$ y $2$. Por tanto, $f''(0)$ no existe.

## Derivable no significa derivada continua

Una función puede tener derivada en todos los puntos y, sin embargo, su derivada no ser continua. Ser de clase $C^1$ —tener primera derivada continua— es una condición más fuerte que ser simplemente derivable.

### Ejemplo 8 bis — derivada oscilatoria

Definimos

$$
f(x)=
\\begin{cases}
x^2\\sin(1/x),&x\\neq0,\\\\
0,&x=0.
\\end{cases}
$$

La función es continua en cero porque

$$
|x^2\\sin(1/x)|\\leq x^2\\to0.
$$

Para estudiar su derivada en el origen usamos la definición:

$$
f'(0)=\\lim_{h\\to0}\\frac{h^2\\sin(1/h)}h
=\\lim_{h\\to0}h\\sin(1/h)=0.
$$

Para $x\\neq0$, la regla del producto y la cadena dan

$$
f'(x)=2x\\sin(1/x)-\\cos(1/x).
$$

El primer término tiende a cero, pero el coseno oscila. Por tanto, $f'(x)$ no tiene límite cuando $x\\to0$ y la derivada no es continua en el origen, aunque $f'(0)$ exista.

Este ejemplo separa tres niveles: continuidad de $f$, existencia de $f'$ y continuidad de $f'$.

## Las derivadas tienen la propiedad del valor intermedio

El teorema de Darboux afirma que una derivada toma todos los valores intermedios entre dos de sus valores, incluso si no es continua. Una derivada no puede presentar una discontinuidad de salto.

Esto no significa que toda derivada sea continua: el ejemplo anterior oscila. Significa que, al pasar de una pendiente a otra, no puede omitir pendientes intermedias. Es una propiedad especial que no comparte una función arbitraria discontinua.

## Teoremas que dependen de la continuidad

### Teorema de Bolzano

Si $f$ es continua en $[a,b]$ y $f(a)f(b)<0$, existe al menos un $c\\in(a,b)$ con $f(c)=0$. El teorema garantiza existencia, no unicidad ni una fórmula para la raíz.

### Ejemplo 9 — demostrar que existe una solución

Para $f(x)=x^3+x-1$,

$$
f(0)=-1,
\\qquad
f(1)=1.
$$

Como el polinomio es continuo, existe una raíz en $(0,1)$. Además,

$$
f'(x)=3x^2+1>0,
$$

así que la función es estrictamente creciente y la raíz es única.

### Aproximar la raíz mediante bisección

Bolzano también fundamenta un algoritmo. Como la raíz del ejemplo está en $[0,1]$, evaluamos el punto medio $1/2$:

$$
f(1/2)=\\frac18+\\frac12-1=-\\frac38.
$$

El cambio de signo queda ahora entre $1/2$ y $1$. Repetir el proceso divide el intervalo por la mitad en cada paso. Tras $n$ bisecciones, la anchura es

$$
\\frac{b-a}{2^n}.
$$

La continuidad garantiza que no perdemos la raíz al conservar el subintervalo cuyos extremos tienen signos opuestos. La monotonía demostrada con $f'>0$ garantiza, además, que seguimos encerrando la única raíz.

### Teorema de los valores intermedios

Una función continua toma todos los valores comprendidos entre $f(a)$ y $f(b)$. No puede saltar de uno a otro omitiendo alturas intermedias.

### Teorema de Weierstrass

Una función continua en un intervalo cerrado y acotado $[a,b]$ alcanza máximo y mínimo absolutos. Si el intervalo es abierto o no acotado, la conclusión puede fallar.

Estos resultados son la base de muchos [problemas de optimización con derivadas](/blog/problemas-optimizacion-derivadas-ejercicios-resueltos/): la continuidad garantiza que existe un extremo global y la derivabilidad ayuda a localizar candidatos interiores.

## Derivabilidad y extremos

El teorema de Fermat afirma que si $f$ tiene un extremo local en un punto interior $a$ y es derivable allí, entonces $f'(a)=0$. La afirmación no funciona al revés: $f'(a)=0$ no garantiza un extremo.

Tampoco exige que todos los extremos sean derivables. $f(x)=|x|$ tiene un mínimo absoluto en $0$ y no es derivable allí. Al buscar extremos deben revisarse:

- puntos donde $f'(x)=0$;
- puntos del dominio donde $f'$ no existe;
- extremos del intervalo.

### Ejemplo 10 — punto estacionario sin extremo

Para $f(x)=x^3$,

$$
f'(x)=3x^2,
$$

y $f'(0)=0$. Sin embargo, la función es creciente a ambos lados del origen. El punto es una inflexión con tangente horizontal, no un máximo ni un mínimo.

## Continuidad y derivabilidad en extremos del dominio

En un extremo se utiliza la condición lateral compatible con el dominio. La función $f(x)=\\sqrt{x}$ es continua por la derecha en $0$ porque

$$
\\lim_{x\\to0^+}\\sqrt{x}=0=f(0).
$$

Su cociente incremental lateral es

$$
\\frac{\\sqrt{h}-0}{h}=\\frac1{\\sqrt h}\\to+\\infty.
$$

No tiene derivada lateral finita en cero. La gráfica presenta una tangente vertical al comenzar su dominio.

## Operaciones que conservan derivabilidad

Si $f$ y $g$ son derivables en $a$, también lo son $f+g$, $fg$ y $f/g$ cuando $g(a)\\neq0$. La composición $f\\circ g$ es derivable si $g$ lo es en $a$ y $f$ lo es en $g(a)$; su derivada viene dada por la regla de la cadena.

El valor absoluto requiere atención. Si $g(a)\\neq0$, entonces $|g|$ es derivable cerca de $a$ porque el signo de $g$ permanece estable por continuidad. Si $g(a)=0$ y $g'(a)\\neq0$, $g$ cruza el eje con pendiente no nula y $|g|$ suele crear una esquina.

### Ejemplo 10 bis — valor absoluto de una función

Estudia la derivabilidad de

$$
h(x)=|x^2-1|.
$$

Los únicos puntos problemáticos son los ceros interiores del valor absoluto: $x=\\pm1$. Cerca de $x=1$,

$$
h(x)=
\\begin{cases}
1-x^2,&x<1,\\\\
x^2-1,&x>1.
\\end{cases}
$$

Las pendientes laterales son $-2$ y $2$, así que no es derivable en $1$. En $x=-1$ las pendientes laterales también son opuestas. La función es continua en toda la recta, pero no derivable en $\\pm1$.

No era necesario estudiar todos los puntos: fuera de los ceros, el signo interior no cambia localmente y la composición es derivable.

## Cómo responder en un examen

Cuando se pide «estudia continuidad y derivabilidad», una solución completa debe indicar:

1. El dominio.
2. Los únicos puntos potencialmente problemáticos.
3. Los límites laterales y el valor de la función.
4. La conclusión de continuidad.
5. Las derivadas laterales, solo en los puntos continuos que lo requieran.
6. La conclusión de derivabilidad y la interpretación geométrica.

No es necesario rehacer límites en cada punto donde la fórmula es elemental. Basta justificar que cada rama es continua y derivable en el interior de su dominio y concentrar el análisis en las uniones o restricciones.

## Errores frecuentes

- **Comprobar solo que existe $f(a)$.** La continuidad exige también el límite y su igualdad con el valor.
- **Calcular solo un lateral.** En puntos interiores se necesitan ambos.
- **Estudiar derivabilidad antes de continuidad.** Si falla la continuidad, la derivabilidad queda descartada.
- **Igualar únicamente las derivadas.** Una función puede tener fórmulas con pendientes iguales y aun así presentar un salto.
- **Confundir continuidad con suavidad.** $|x|$ es continua y tiene una esquina.
- **Aceptar infinito como derivada.** En la definición habitual, la derivada debe ser finita.
- **Pensar que $f'(a)=0$ implica extremo.** Hace falta estudiar signos, derivadas superiores o valores.
- **Olvidar puntos donde la derivada no existe.** También pueden ser candidatos a extremos.
- **Aplicar condiciones bilaterales en un extremo.** Debe respetarse el dominio.

## Cómo comprobar el resultado

Para continuidad, verifica que las tres cantidades —lateral izquierdo, lateral derecho y valor— coincidan. Para derivabilidad, confirma primero esa igualdad y compara después las dos pendientes laterales.

Una representación gráfica ayuda a interpretar huecos, saltos, esquinas y tangentes verticales, pero la escala puede ocultarlos. La comprobación definitiva es analítica.

## Ejercicios propuestos

1. Clasifica la discontinuidad de $f(x)=(x^2-9)/(x-3)$ en $x=3$.
2. Estudia continuidad y derivabilidad de $f(x)=|x-2|$ en $x=2$.
3. Determina $k$ para que $f(x)=kx+1$ si $x<1$ y $f(x)=x^2$ si $x\\geq1$ sea continua.
4. En el ejercicio anterior, decide si algún valor de $k$ hace la función derivable.
5. Estudia continuidad de $f(x)=1/(x^2-4)$ y clasifica sus discontinuidades.
6. Estudia la derivabilidad de $f(x)=x^{1/3}$ en el origen.
7. Determina $a,b$ para que $f(x)=ax+b$ si $x<0$ y $f(x)=e^x$ si $x\\geq0$ sea derivable.
8. Demuestra que $x^5+x-1=0$ tiene una única raíz en $(0,1)$.

## Soluciones

**1. Evitable.** Para $x\\neq3$, el cociente vale $x+3$ y su límite es $6$. Definir $f(3)=6$ la elimina.

**2. Continua, no derivable.** El valor y el límite son cero. Las pendientes laterales son $-1$ y $1$.

**3. Continuidad.** El límite izquierdo es $k+1$ y el valor derecho es $1$. Luego $k=0$.

**4. Derivabilidad.** La pendiente izquierda sería $k$ y la derecha, $2$. La continuidad exige $k=0$ y la derivabilidad exigiría $k=2$; no existe un valor que cumpla ambas.

**5. Discontinuidades infinitas.** El dominio excluye $x=\\pm2$. En ambos puntos el denominador tiende a cero y aparecen asíntotas verticales.

**6. No derivable.**

$$
\\frac{h^{1/3}-0}{h}=\\frac1{h^{2/3}}\\to+\\infty.
$$

Existe una tangente vertical, pero no una derivada finita.

**7. Dos condiciones.** La continuidad exige $b=e^0=1$. Las pendientes laterales deben satisfacer $a=e^0=1$. Por tanto, $\\boxed{a=1,b=1}$.

**8. Existencia y unicidad.** Para $f(x)=x^5+x-1$, $f(0)=-1$ y $f(1)=1$. Bolzano garantiza una raíz. Como $f'(x)=5x^4+1>0$, la función es estrictamente creciente y no puede tener dos raíces.

## Resumen práctico

La continuidad compara límite y valor; la derivabilidad compara pendientes laterales. Derivabilidad implica continuidad, pero esquinas, cúspides y tangentes verticales muestran que la recíproca es falsa. En funciones a trozos, impón primero continuidad y después igualdad de derivadas.

En un [estudio completo de una función](/blog/estudio-completo-funcion-paso-a-paso/), empieza por el dominio y concentra los cálculos en uniones, ceros de denominadores, extremos de raíces y puntos con valor absoluto. Distingue además entre ser derivable y tener derivada continua: son niveles diferentes de regularidad.

Para funciones a trozos, redacta las conclusiones punto por punto: dónde es continua, dónde es derivable y qué tipo de fallo aparece en cada excepción. Una única afirmación global puede ocultar condiciones laterales diferentes.

Si necesitas practicar funciones a trozos, parámetros y justificaciones con el nivel de detalle de tu asignatura, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
`,z=`---
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
y=\\pm\\sqrt{25-x^2},
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

Siempre que $F_y(x,y)\\ne0$, podemos despejar:

$$
\\boxed{y'=-\\frac{F_x}{F_y}}.
$$

Esta fórmula compacta es útil para comprobar el resultado, pero al empezar conviene derivar término a término. Así se ve con claridad por qué

$$
\\frac{d}{dx}(y^n)=ny^{n-1}y'
$$

y por qué

$$
\\frac{d}{dx}(\\sin y)=\\cos(y)y'.
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
y'=-\\frac{x}{y}.
$$

En el punto $(3,4)$, que sí cumple $3^2+4^2=25$, la pendiente es

$$
m=y'(3,4)=-\\frac34.
$$

La recta tangente queda

$$
y-4=-\\frac34(x-3),
$$

o, de forma equivalente,

$$
3x+4y=25.
$$

![Circunferencia x al cuadrado más y al cuadrado igual a 25, con el radio y la recta tangente en el punto 3 coma 4](/assets/latex/implicit-circle-tangent.svg)

Geométricamente, el radio que une el origen con $(3,4)$ tiene pendiente $4/3$. El producto de ambas pendientes es $-1$, por lo que radio y tangente son perpendiculares. Esta comprobación confirma el cálculo.

La recta normal, perpendicular a la tangente, tiene precisamente pendiente $4/3$:

$$
y-4=\\frac43(x-3).
$$

## Ejemplo 2: productos de $x$ e $y$

Considera

$$
x^2+xy+y^2=7.
$$

El término $xy$ requiere la regla del producto:

$$
\\frac{d}{dx}(xy)=y+xy'.
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
y'=-\\frac{2x+y}{x+2y}.
$$

El punto $(1,2)$ pertenece a la curva porque $1+2+4=7$. Allí,

$$
y'(1,2)=-\\frac45.
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
y'=\\frac{2y-x^2}{y^2-2x}.
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
\\qquad
F_y=3y^2-6x.
$$

La fórmula $y'=-F_x/F_y$ produce

$$
y'=-\\frac{3x^2-6y}{3y^2-6x}
=\\frac{2y-x^2}{y^2-2x},
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
y'=\\frac{e^{xy}y+1}{1-xe^{xy}}.
$$

En la relación

$$
\\sin(x+y)=xy,
$$

obtenemos

$$
\\cos(x+y)(1+y')=y+xy'.
$$

Al despejar,

$$
y'=\\frac{y-\\cos(x+y)}{\\cos(x+y)-x}.
$$

En ambos casos, encerrar mentalmente la función interior antes de derivar ayuda: el exponente es $xy$ y el argumento del seno es $x+y$.

## Ejemplo 4: logaritmos sin despejar

Supón que $x>0$, $y>0$ y

$$
x^y=y^x.
$$

Despejar una variable no es práctico. Tomamos logaritmos:

$$
y\\ln x=x\\ln y.
$$

Ahora derivamos. En ambos miembros aparece un producto:

$$
y'\\ln x+\\frac yx
=\\ln y+\\frac{x}{y}y'.
$$

Agrupando,

$$
y'\\left(\\ln x-\\frac xy\\right)
=\\ln y-\\frac yx.
$$

Por tanto,

$$
y'=\\frac{\\ln y-y/x}{\\ln x-x/y},
$$

si el denominador no se anula. El paso decisivo no es derivar, sino reconocer que el logaritmo transforma exponentes variables en productos manejables.

En el punto $(2,4)$ se cumple $2^4=4^2$. La pendiente es

$$
y'(2,4)
=\\frac{\\ln4-2}{\\ln2-1/2}
=2.
$$

La igualdad final se obtiene usando $\\ln4=2\\ln2$. La recta tangente es $y-4=2(x-2)$.

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
y'=\\frac{2x}{3y^2+1}.
$$

Como $3y^2+1$ nunca se anula, esta descripción no presenta tangentes verticales. En cambio, si intercambiamos la estructura y consideramos

$$
x^3+x=y^2,
$$

obtenemos

$$
3x^2+1=2yy',
\\qquad
y'=\\frac{3x^2+1}{2y}.
$$

El punto $(0,0)$ pertenece a la curva y el denominador se anula, mientras que el numerador vale $1$. Hay una tangente vertical $x=0$. Para confirmarlo sin confiar en una fracción infinita, describimos $x$ como función de $y$ y derivamos respecto de $y$:

$$
(3x^2+1)\\frac{dx}{dy}=2y.
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
2+2\\bigl((y')^2+yy''\\bigr)=0.
$$

Por tanto,

$$
y''=-\\frac{1+(y')^2}{y}.
$$

Como $y'=-x/y$,

$$
y''=-\\frac{1+x^2/y^2}{y}
=-\\frac{x^2+y^2}{y^3}
=-\\frac{25}{y^3}.
$$

En $(3,4)$ resulta

$$
y''=-\\frac{25}{64}<0,
$$

coherente con la curvatura de la semicircunferencia superior.

Al derivar $yy'$ debes usar producto:

$$
\\frac{d}{dx}(yy')=(y')^2+yy''.
$$

Omitir el término $(y')^2$ es el fallo típico de la segunda derivación implícita.

## Tangentes horizontales y verticales

Si $F(x,y)=0$ y

$$
y'=-\\frac{F_x}{F_y},
$$

una tangente horizontal suele aparecer cuando $F_x=0$ y $F_y\\ne0$. Una tangente vertical suele aparecer cuando $F_y=0$ y $F_x\\ne0$. Hay que comprobar siempre que el punto pertenece a la curva.

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

Hallemos las dos rectas en el punto $(0,\\sqrt2)$ de la curva

$$
x^2+xy+2y^2=4.
$$

Primero comprobamos el punto: $0+0+2(\\sqrt2)^2=4$. Al derivar,

$$
2x+y+xy'+4yy'=0.
$$

Agrupamos antes de sustituir:

$$
(x+4y)y'=-(2x+y),
$$

por tanto

$$
y'=-\\frac{2x+y}{x+4y}.
$$

En $(0,\\sqrt2)$ la pendiente tangente es

$$
m_t=-\\frac{\\sqrt2}{4\\sqrt2}=-\\frac14.
$$

La recta tangente es

$$
y-\\sqrt2=-\\frac14x.
$$

Como la pendiente es finita y no nula, la normal tiene pendiente recíproca opuesta:

$$
m_n=4,
$$

y su ecuación es

$$
y-\\sqrt2=4x.
$$

Podemos comprobar la orientación con el gradiente de

$$
F(x,y)=x^2+xy+2y^2-4.
$$

En el punto, $\\nabla F=(\\sqrt2,4\\sqrt2)$, un vector paralelo a $(1,4)$. Ese vector es normal a la curva y tiene pendiente $4$, exactamente la obtenida. La comprobación es útil porque una confusión al tomar el recíproco cambia tangente y normal.

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
(f^{-1})'(x)=\\frac{1}{f'(f^{-1}(x))},
$$

si el denominador no se anula. Esta identidad explica fórmulas como

$$
\\frac{d}{dx}(\\arcsin x)=\\frac1{\\sqrt{1-x^2}}.
$$

En efecto, si $y=\\arcsin x$, entonces $\\sin y=x$. Al derivar, $\\cos y\\,y'=1$ y, en la rama principal, $\\cos y=\\sqrt{1-x^2}$.

## Razones de cambio relacionadas

La misma idea se aplica cuando las variables dependen del tiempo. Supón que un punto se mueve por la circunferencia $x^2+y^2=25$. Al derivar respecto de $t$:

$$
2x\\frac{dx}{dt}+2y\\frac{dy}{dt}=0.
$$

Así,

$$
\\frac{dy}{dt}=-\\frac{x}{y}\\frac{dx}{dt}.
$$

Si el punto está en $(3,4)$ y $dx/dt=2$ unidades por segundo, entonces

$$
\\frac{dy}{dt}=-\\frac32
$$

unidades por segundo. La coordenada vertical disminuye para que la distancia al origen permanezca constante.

La diferencia respecto de $y'$ es conceptual: ahora tanto $x$ como $y$ dependen de una tercera variable, el tiempo.

## Cuándo puede considerarse $y$ una función de $x$

La fórmula $y'=-F_x/F_y$ refleja el teorema de la función implícita. De forma intuitiva, si $F$ es suficientemente regular, $F(x_0,y_0)=0$ y

$$
F_y(x_0,y_0)\\ne0,
$$

entonces cerca de $(x_0,y_0)$ la curva puede escribirse de manera única como $y=f(x)$. No significa que pueda hacerse globalmente.

En una circunferencia, alrededor de $(3,4)$ existe una rama superior bien definida. En $(5,0)$, en cambio, $F_y=2y=0$ y la curva tiene tangente vertical: falla la descripción local como $y=f(x)$, aunque la curva sigue siendo perfectamente regular.

Esta distinción enlaza con la guía sobre [continuidad y derivabilidad](/blog/continuidad-derivabilidad-diferencias-problemas/): disponer de una ecuación no garantiza que una rama sea derivable respecto de la variable elegida.

## Diferencia entre forma implícita y parametrización

Una curva también puede darse mediante

$$
x=x(t),\\qquad y=y(t).
$$

Si $dx/dt\\ne0$, su pendiente es

$$
\\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}.
$$

Por ejemplo, la circunferencia de radio $5$ admite la parametrización

$$
x=5\\cos t,\\qquad y=5\\sin t.
$$

Entonces

$$
\\frac{dy}{dx}
=\\frac{5\\cos t}{-5\\sin t}
=-\\frac{\\cos t}{\\sin t}
=-\\frac{x}{y},
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
y=\\sqrt{25-x^2}.
$$

La derivada explícita es

$$
y'=\\frac{-2x}{2\\sqrt{25-x^2}}
=-\\frac{x}{y},
$$

que coincide con la implícita. Esta prueba solo cubre la rama $y>0$; la fórmula implícita describe también la inferior siempre que $y\\ne0$.

## Errores frecuentes

### Tratar $y$ como una constante

Si $y=y(x)$, entonces $(y^2)'=2yy'$, no cero ni $2y$. Cada derivada de una expresión que dependa de $y$ necesita la regla de la cadena.

### Perder términos al derivar productos

Para $xy$, $y\\sin x$ o $e^x y^2$, se aplica además la regla del producto. Conviene escribir una línea intermedia antes de agrupar $y'$.

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
5. Halla $y'$ si $\\ln(xy)=x+y$.
6. Determina las tangentes horizontales de $x^2+2y^2=8$.
7. Calcula $y''$ para $x^2+y^2=9$ y evalúala en $(0,3)$.
8. Si $x^2+y^2=100$, calcula $dy/dt$ cuando $(x,y)=(6,8)$ y $dx/dt=4$.
9. A partir de $\\tan y=x$, deduce la derivada de $y=\\arctan x$.
10. Explica qué debe revisarse en un punto donde $F_x=F_y=0$.

## Soluciones

### Ejercicio 1

De $2x+8yy'=0$ se obtiene

$$
y'=-\\frac{x}{4y}.
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
y-3=-\\frac14(x-2).
$$

### Ejercicio 4

Usando producto y cadena:

$$
2xy+x^2y'+3y^2y'=0.
$$

Por tanto,

$$
y'=-\\frac{2xy}{x^2+3y^2}.
$$

### Ejercicio 5

Como $\\ln(xy)=\\ln x+\\ln y$ cuando $xy>0$, al derivar resulta

$$
\\frac1x+\\frac{y'}y=1+y'.
$$

Así,

$$
y'=\\frac{y(x-1)}{x(1-y)}.
$$

### Ejercicio 6

La derivada es $y'=-x/(2y)$. Para una tangente horizontal se exige $x=0$ y $y\\ne0$. Sustituyendo en la elipse aparecen $(0,2)$ y $(0,-2)$.

Las rectas tangentes son $y=2$ e $y=-2$. En ambos puntos el denominador es distinto de cero, así que la condición horizontal es válida y no corresponde a una singularidad.

### Ejercicio 7

Para una circunferencia de radio $3$,

$$
y''=-\\frac9{y^3}.
$$

En $(0,3)$ vale $-1/3$.

El signo negativo concuerda con la semicircunferencia superior, que se curva hacia abajo cerca de su punto más alto.

### Ejercicio 8

Derivando respecto del tiempo,

$$
x\\frac{dx}{dt}+y\\frac{dy}{dt}=0.
$$

Luego

$$
\\frac{dy}{dt}=-\\frac68\\cdot4=-3.
$$

### Ejercicio 9

De $\\tan y=x$ se obtiene $\\sec^2(y)y'=1$. Como $\\sec^2 y=1+\\tan^2y=1+x^2$,

$$
y'=\\frac1{1+x^2}.
$$

### Ejercicio 10

La fórmula $-F_x/F_y$ no decide la pendiente porque produce $0/0$ si ambas parciales se anulan. Hay que estudiar el término dominante, factorizar, parametrizar o analizar las ramas. Puede existir una cúspide, un cruce, un punto aislado u otra singularidad.

## Resumen operativo

La derivación implícita se reduce a tres hábitos: recordar que $y$ depende de $x$, aplicar la regla de la cadena y no dividir sin revisar el denominador. Con eso puedes obtener pendientes, tangentes, curvatura y razones de cambio incluso cuando despejar la variable es inviable.

Si las reglas de derivación todavía no están automatizadas, repasa primero [qué son las derivadas y para qué se utilizan](/blog/que-son-las-derivadas-y-para-que-se-utilizan/). Para practicar relaciones implícitas con corrección individual, las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/) permiten detectar exactamente en qué paso se rompe el razonamiento.
`,S=`---
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
`,P=`---
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
f(x,y)=\\ln(4-x^2-y^2),
$$

se exige

$$
x^2+y^2<4.
$$

El dominio es el disco abierto de radio $2$, no un intervalo de la recta.

## Definición de derivada parcial

La derivada parcial respecto de $x$ en $(a,b)$ se define como

$$
f_x(a,b)=\\frac{\\partial f}{\\partial x}(a,b)
=\\lim_{h\\to0}\\frac{f(a+h,b)-f(a,b)}{h},
$$

si el límite existe. La coordenada $y=b$ se mantiene fija. De manera análoga,

$$
f_y(a,b)=\\frac{\\partial f}{\\partial y}(a,b)
=\\lim_{h\\to0}\\frac{f(a,b+h)-f(a,b)}{h}.
$$

Las notaciones $f_x$, $D_xf$ y $\\partial f/\\partial x$ expresan la misma idea. El símbolo $\\partial$ recuerda que solo derivamos respecto de una parte de las variables.

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
f(x,y)=\\ln(x^2+y^2),
$$

el dominio es $\\mathbb R^2\\setminus\\{(0,0)\\}$. Sus parciales son

$$
f_x=\\frac{2x}{x^2+y^2},
\\qquad
f_y=\\frac{2y}{x^2+y^2}.
$$

Las fórmulas tampoco están definidas en el origen, de acuerdo con el dominio de la función.

## Derivadas parciales de orden superior

Las primeras parciales pueden volver a derivarse. Para una función de dos variables aparecen cuatro derivadas de segundo orden:

$$
f_{xx},\\qquad f_{xy},\\qquad f_{yx},\\qquad f_{yy}.
$$

Las dos primeras letras se leen según el orden de derivación adoptado por el texto; con la notación

$$
f_{xy}=\\frac{\\partial}{\\partial y}\\left(\\frac{\\partial f}{\\partial x}\\right),
$$

primero se deriva respecto de $x$ y después respecto de $y$.

Considera

$$
f(x,y)=x^3y+\\sin(xy).
$$

Tenemos

$$
f_x=3x^2y+y\\cos(xy),
\\qquad
f_y=x^3+x\\cos(xy).
$$

Por tanto,

$$
f_{xx}=6xy-y^2\\sin(xy),
$$

$$
f_{xy}=3x^2+\\cos(xy)-xy\\sin(xy),
$$

y

$$
f_{yx}=3x^2+\\cos(xy)-xy\\sin(xy).
$$

Aquí las derivadas cruzadas coinciden. El teorema de Clairaut garantiza $f_{xy}=f_{yx}$ cerca de un punto si las segundas parciales son continuas en un entorno. No conviene asumir la igualdad sin hipótesis: existen funciones menos regulares donde falla.

## Qué es el gradiente

El gradiente de $f:\\mathbb R^2\\to\\mathbb R$ es el vector formado por sus derivadas parciales:

$$
\\nabla f(x,y)=\\left(f_x(x,y),f_y(x,y)\\right).
$$

Para una función de tres variables,

$$
\\nabla f(x,y,z)=\\left(f_x,f_y,f_z\\right).
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
\\nabla f(x,y)=(2x,4y).
$$

En $P=(1,-1)$,

$$
\\nabla f(1,-1)=(2,-4).
$$

La dirección unitaria de crecimiento máximo es

$$
\\frac{\\nabla f}{\\|\\nabla f\\|}
=\\frac{(2,-4)}{\\sqrt{20}}
=\\left(\\frac1{\\sqrt5},-\\frac2{\\sqrt5}\\right).
$$

La tasa máxima de crecimiento es

$$
\\|\\nabla f(1,-1)\\|=2\\sqrt5.
$$

## Derivada direccional

Si $\\mathbf u=(u_1,u_2)$ es un vector unitario, la derivada direccional de una función diferenciable en la dirección de $\\mathbf u$ es

$$
D_{\\mathbf u}f(a,b)=\\nabla f(a,b)\\cdot\\mathbf u.
$$

El requisito de que $\\mathbf u$ sea unitario es importante: así el resultado mide cambio por unidad de distancia. Si se proporciona un vector cualquiera $\\mathbf v$, primero hay que normalizarlo:

$$
\\mathbf u=\\frac{\\mathbf v}{\\|\\mathbf v\\|}.
$$

### Ejemplo 5: cambio en una dirección concreta

Para la función anterior, en $P=(1,-1)$ y en la dirección de $\\mathbf v=(3,4)$, el vector ya tiene norma $5$, de modo que

$$
\\mathbf u=\\left(\\frac35,\\frac45\\right).
$$

Por tanto,

$$
D_{\\mathbf u}f(1,-1)
=(2,-4)\\cdot\\left(\\frac35,\\frac45\\right)
=\\frac65-\\frac{16}5=-2.
$$

La función disminuye a razón de $2$ unidades de altura por unidad de desplazamiento en esa dirección.

Por la desigualdad de Cauchy-Schwarz,

$$
\\nabla f\\cdot\\mathbf u\\le\\|\\nabla f\\|\\|\\mathbf u\\|=\\|\\nabla f\\|.
$$

La igualdad se alcanza cuando $\\mathbf u$ tiene la dirección del gradiente. De ahí se deduce rigurosamente la propiedad de máximo crecimiento.

## Curvas de nivel y perpendicularidad

Una curva de nivel de $f$ está formada por los puntos que satisfacen

$$
f(x,y)=c,
$$

donde $c$ es constante. En un mapa topográfico, cada curva une puntos de igual altura.

Si una trayectoria $\\mathbf r(t)=(x(t),y(t))$ permanece en esa curva, entonces

$$
f(\\mathbf r(t))=c.
$$

Al derivar mediante la regla de la cadena,

$$
\\nabla f(\\mathbf r(t))\\cdot\\mathbf r'(t)=0.
$$

El vector $\\mathbf r'(t)$ es tangente a la curva; por tanto, el gradiente es perpendicular a ella cuando $\\nabla f\\ne\\mathbf0$.

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
f(a+\\Delta x,b+\\Delta y)
\\approx f(a,b)+f_x(a,b)\\Delta x+f_y(a,b)\\Delta y.
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
f_x=2x+y,\\qquad f_y=x+2y.
$$

Luego $f_x(1,2)=4$ y $f_y(1,2)=5$. El plano tangente es

$$
z-7=4(x-1)+5(y-2).
$$

Para estimar $f(1.02,1.97)$ usamos $\\Delta x=0.02$ y $\\Delta y=-0.03$:

$$
f(1.02,1.97)\\approx7+4(0.02)+5(-0.03)=6.93.
$$

El valor exacto es $6.9307$, de modo que la aproximación es buena porque el desplazamiento es pequeño.

## Superficies implícitas y vectores normales

Una superficie de nivel $F(x,y,z)=c$ tiene como vector normal

$$
\\nabla F=(F_x,F_y,F_z).
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
\\frac{dz}{dt}
=f_x\\frac{dx}{dt}+f_y\\frac{dy}{dt}
=\\nabla f\\cdot\\mathbf r'(t).
$$

### Ejemplo 7: función sobre una trayectoria

Sea $f(x,y)=x^2+y^2$ y la trayectoria

$$
x(t)=\\cos t,\\qquad y(t)=\\sin t.
$$

Como $\\nabla f=(2x,2y)$,

$$
\\frac{df}{dt}
=2\\cos t(-\\sin t)+2\\sin t(\\cos t)=0.
$$

El resultado es lógico: la trayectoria recorre la circunferencia unidad, donde $x^2+y^2=1$ permanece constante.

Si $x=x(s,t)$ e $y=y(s,t)$ dependen de dos parámetros, se aplica la misma idea para cada uno:

$$
\\frac{\\partial z}{\\partial s}
=f_x\\frac{\\partial x}{\\partial s}
+f_y\\frac{\\partial y}{\\partial s}.
$$

## Relación con la optimización

En una función diferenciable de dos variables, un extremo interior suele ser candidato a satisfacer

$$
\\nabla f(x,y)=\\mathbf0.
$$

Esto equivale al sistema

$$
f_x(x,y)=0,
\\qquad
f_y(x,y)=0.
$$

La condición es necesaria en situaciones regulares, pero no suficiente: un punto con gradiente nulo puede ser un mínimo, un máximo o un punto de silla. La clasificación requiere información de segundo orden, normalmente la matriz hessiana; la guía de [máximos y mínimos de varias variables](/blog/maximos-minimos-varias-variables-ejercicios/) desarrolla el criterio y las restricciones.

Por ejemplo, $f(x,y)=x^2+y^2$ tiene gradiente cero en el origen y allí hay un mínimo absoluto. En cambio, $g(x,y)=x^2-y^2$ también tiene gradiente cero en el origen, pero crece en la dirección del eje $x$ y decrece en la del eje $y$: es un punto de silla.

La lógica es la extensión natural de los [problemas de optimización con derivadas](/blog/problemas-optimizacion-derivadas-ejercicios-resueltos/) de una variable, aunque la clasificación completa pertenece al cálculo multivariable.

## Existencia de parciales frente a diferenciabilidad

Que existan $f_x(a,b)$ y $f_y(a,b)$ no garantiza por sí solo que $f$ sea diferenciable en $(a,b)$. Las parciales solo exploran dos direcciones coordenadas; pueden ocultar comportamientos distintos al acercarse por otras trayectorias.

Un ejemplo clásico es

$$
f(x,y)=
\\begin{cases}
\\dfrac{xy}{x^2+y^2}, & (x,y)\\ne(0,0),\\\\
0, & (x,y)=(0,0).
\\end{cases}
$$

Las dos parciales en el origen valen cero, porque sobre cada eje el numerador es cero. Sin embargo, por la recta $y=x$,

$$
f(x,x)=\\frac{x^2}{2x^2}=\\frac12,
$$

así que la función ni siquiera es continua en el origen. Por tanto, no es diferenciable allí.

Una condición suficiente muy utilizada es que las derivadas parciales existan en un entorno y sean continuas en el punto. Entonces la función es diferenciable en ese punto.

## Diferencial total y propagación de pequeños errores

La aproximación lineal puede escribirse mediante el diferencial total:

$$
df=f_x\\,dx+f_y\\,dy.
$$

Si $x$ e $y$ se miden con pequeños errores $\\Delta x$ y $\\Delta y$, entonces

$$
\\Delta f\\approx f_x\\Delta x+f_y\\Delta y.
$$

Además, una cota conservadora del error absoluto es

$$
|\\Delta f|\\lesssim |f_x||\\Delta x|+|f_y||\\Delta y|.
$$

Supón que el área de un rectángulo es $A(x,y)=xy$ y se miden $x=20$ cm, $y=10$ cm con errores máximos de $0.1$ cm y $0.05$ cm. Como

$$
A_x=y=10,
\\qquad
A_y=x=20,
$$

el error máximo aproximado es

$$
|\\Delta A|\\lesssim10(0.1)+20(0.05)=2\\ \\text{cm}^2.
$$

El área calculada es $200\\ \\text{cm}^2$, por lo que el error relativo aproximado es del $1\\%$. Este uso muestra que las parciales también miden sensibilidad: $A_y=20$ indica que, cerca del punto considerado, un pequeño error en la altura influye el doble por centímetro que el mismo error en la base.

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
\\nabla f=(2x-y,-x+2y),
$$

y en $P$ vale

$$
\\nabla f(1,2)=(0,3).
$$

Este vector es normal a la curva. La ecuación de la recta tangente satisface

$$
(0,3)\\cdot(x-1,y-2)=0,
$$

por lo que $3(y-2)=0$ y la tangente es $y=2$. Si usamos derivación implícita,

$$
2x-y-xy'+2yy'=0,
$$

obtenemos $y'=-(2x-y)/(-x+2y)$, que en $(1,2)$ vale cero. Los dos métodos coinciden.

## Qué método elegir en cada problema

- Si piden el cambio al variar solo una coordenada, calcula una derivada parcial.
- Si dan una dirección, normalízala y usa el producto escalar con el gradiente.
- Si preguntan por el ascenso más rápido, usa la dirección de $\\nabla f$ y la tasa $\\|\\nabla f\\|$.
- Si buscan una normal a un nivel, evalúa el gradiente de la función que define ese nivel.
- Si piden un plano tangente a $z=f(x,y)$, necesitas $f_x$, $f_y$ y el valor $f(a,b)$.
- Si las variables dependen de un parámetro, aplica la regla de la cadena multivariable.
- Si se trata de un extremo interior, resuelve $\\nabla f=0$, pero reserva la clasificación para el análisis de segundo orden.

Identificar qué objeto se pide evita mezclar fórmulas parecidas. Un vector normal, una derivada direccional y un plano tangente usan el gradiente, pero producen respuestas de tipos distintos.

## Errores frecuentes

### Derivar también la variable que debe permanecer fija

Al calcular $f_x$, $y$ actúa como constante. En $x^2y$, la derivada es $2xy$, no $2xy+x^2$.

### Confundir parcial e implícita

En $z=f(x,y)$, las variables $x$ e $y$ suelen ser independientes. En $F(x,y)=0$, en cambio, se puede considerar que $y$ depende de $x$ a lo largo de una curva. El contexto decide si aparece $y'$.

### Usar un vector no unitario

El producto $\\nabla f\\cdot\\mathbf v$ depende de la longitud de $\\mathbf v$. Para una tasa por unidad de distancia, normaliza primero la dirección.

### Creer que el gradiente es tangente al nivel

Es justo lo contrario: cuando no es nulo, el gradiente es normal a la curva o superficie de nivel.

### Concluir diferenciabilidad solo por tener parciales

La existencia de parciales es una prueba incompleta. Revisa continuidad de las parciales o aplica directamente la definición de diferenciabilidad cuando las hipótesis habituales no se cumplen.

## Ejercicios propuestos

1. Calcula las primeras parciales de $f(x,y)=x^2y^3-2xy$.
2. Halla $f_x$ y $f_y$ para $f(x,y)=\\sqrt{1+x^2+y^2}$.
3. Calcula $\\nabla f(1,0)$ si $f(x,y)=e^{xy}+x^2$.
4. Halla la derivada direccional de $f(x,y)=x^2-y^2$ en $(1,2)$ hacia $(3,4)$.
5. Determina la dirección de máximo crecimiento de $f(x,y)=xy$ en $(2,-1)$.
6. Halla el plano tangente a $z=x^2+3y^2$ en $(1,1,4)$.
7. Encuentra un vector normal a $x^2+2y^2+z^2=6$ en $(1,1,\\sqrt3)$.
8. Comprueba que el gradiente de $f(x,y)=x^2+y^2$ es perpendicular a la circunferencia $x^2+y^2=4$ en $(\\sqrt2,\\sqrt2)$.
9. Si $f(x,y)=x^2y$ y $x=t^2$, $y=\\sin t$, calcula $df/dt$.
10. Decide si el origen es un punto crítico de $f(x,y)=x^2-4xy+4y^2$.

## Soluciones

### Ejercicio 1

Tratando la otra variable como constante,

$$
f_x=2xy^3-2y,
\\qquad
f_y=3x^2y^2-2x.
$$

### Ejercicio 2

Por la regla de la cadena,

$$
f_x=\\frac{x}{\\sqrt{1+x^2+y^2}},
\\qquad
f_y=\\frac{y}{\\sqrt{1+x^2+y^2}}.
$$

### Ejercicio 3

Se tiene $f_x=ye^{xy}+2x$ y $f_y=xe^{xy}$. En $(1,0)$,

$$
\\nabla f(1,0)=(2,1).
$$

### Ejercicio 4

El vector unitario asociado a $(3,4)$ es $(3/5,4/5)$. Como $\\nabla f(1,2)=(2,-4)$,

$$
D_{\\mathbf u}f(1,2)
=(2,-4)\\cdot\\left(\\frac35,\\frac45\\right)=-2.
$$

### Ejercicio 5

El gradiente es $\\nabla f=(y,x)$. En $(2,-1)$ vale $(-1,2)$, que marca la dirección de máximo crecimiento. La dirección unitaria es

$$
\\left(-\\frac1{\\sqrt5},\\frac2{\\sqrt5}\\right).
$$

### Ejercicio 6

Las parciales son $f_x=2x$ y $f_y=6y$. En $(1,1)$ valen $2$ y $6$, luego

$$
z-4=2(x-1)+6(y-1).
$$

### Ejercicio 7

Para $F=x^2+2y^2+z^2$, el gradiente es $(2x,4y,2z)$. En el punto dado, un vector normal es

$$
(2,4,2\\sqrt3).
$$

### Ejercicio 8

El gradiente en el punto es $(2\\sqrt2,2\\sqrt2)$. Un vector tangente a la circunferencia allí es $(1,-1)$. Su producto escalar vale cero, de modo que son perpendiculares.

### Ejercicio 9

Como $f_x=2xy$ y $f_y=x^2$,

$$
\\frac{df}{dt}
=2xy(2t)+x^2\\cos t.
$$

Sustituyendo $x=t^2$ e $y=\\sin t$:

$$
\\frac{df}{dt}=4t^3\\sin t+t^4\\cos t.
$$

### Ejercicio 10

El gradiente es

$$
\\nabla f=(2x-4y,-4x+8y).
$$

En $(0,0)$ se anula, así que el origen es un punto crítico. Además, $f=(x-2y)^2\\ge0$: no es un mínimo aislado, pues toda la recta $x=2y$ alcanza el mismo valor mínimo cero.

## Resumen para estudiar

Quédate con esta secuencia:

1. Revisa el dominio en $\\mathbb R^n$.
2. Para una parcial, fija todas las variables salvo una.
3. Agrupa las parciales en $\\nabla f$.
4. Normaliza el vector antes de calcular una derivada direccional.
5. Interpreta el gradiente como dirección de máximo ascenso y normal a los niveles.
6. Usa las parciales para construir el plano tangente y la aproximación lineal.
7. No confundas existencia de parciales con diferenciabilidad.

Si quieres consolidar el salto desde derivadas de una variable a cálculo multivariable, en las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/) adaptamos los ejercicios a tu temario y trabajamos tanto el cálculo como la interpretación geométrica.
`,L=`---
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
`,A=`---
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
`,U=`---
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
`,D=`---
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
`,w=`---
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
`,R=`---
title: "Densidad, presión y flotación en ESO: por qué un objeto pesado también puede flotar"
date: "2026-10-12"
updated: "2026-10-12"
description: "Entiende densidad, presión hidrostática y empuje en ESO con modelos, fórmulas, un ejemplo resuelto y errores de unidades."
tag: "ESO"
category: "Física y Química"
relatedService: "/clases-particulares/fisica-quimica/"
relatedPosts: "fisica-y-quimica-como-plantear-problemas,gravitacion-eso-ley-universal-peso-ejercicios"
image: "/assets/latex/buoyancy-density.svg"
---

“El hierro se hunde y la madera flota” es una observación, no una explicación. Un barco de acero puede flotar porque no importa solo su masa: importa la **densidad media**, el volumen de fluido desplazado y el equilibrio entre peso y empuje.

![Cuerpo parcialmente sumergido con peso hacia abajo, empuje hacia arriba y fórmulas de densidad](/assets/latex/buoyancy-density.svg)

## Densidad: masa por unidad de volumen

$$
\\rho=\\frac{m}{V}.
$$

En el SI se expresa en $\\mathrm{kg/m^3}$, aunque en laboratorio es frecuente $\\mathrm{g/cm^3}$. La conversión clave es:

$$
1\\ \\mathrm{g/cm^3}=1000\\ \\mathrm{kg/m^3}.
$$

La densidad no indica cuánta materia hay sin más, sino cuánta masa ocupa cada unidad de volumen.

## Flotar no significa no tener peso

Todo cuerpo con masa tiene peso:

$$
P=mg.
$$

Al sumergirse en un fluido recibe una fuerza ascendente, el empuje:

$$
E=\\rho_{\\text{fluido}}gV_{\\text{desplazado}}.
$$

Si flota en reposo, la fuerza resultante es cero:

$$
E=P.
$$

El cuerpo se sumerge solo hasta desplazar un peso de fluido igual a su propio peso.

## Relación entre densidad y fracción sumergida

Para un cuerpo homogéneo que flota:

$$
\\rho_f gV_{\\text{sum}}=\\rho_c gV_{\\text{total}}.
$$

Por tanto:

$$
\\frac{V_{\\text{sum}}}{V_{\\text{total}}}=\\frac{\\rho_c}{\\rho_f}.
$$

Si la densidad del cuerpo es el 80 % de la del líquido, queda sumergido el 80 % de su volumen.

## Ejemplo resuelto

Un bloque de volumen $0,020\\,\\mathrm{m^3}$ y masa 16 kg flota en agua de densidad $1000\\,\\mathrm{kg/m^3}$.

Su densidad media es:

$$
\\rho_c=\\frac{16}{0,020}=800\\ \\mathrm{kg/m^3}.
$$

La fracción sumergida es:

$$
\\frac{V_{\\text{sum}}}{V}=\\frac{800}{1000}=0,80.
$$

Así que:

$$
V_{\\text{sum}}=0,80\\cdot0,020=0,016\\ \\mathrm{m^3}.
$$

Comprobación: el empuje vale $1000\\cdot9,8\\cdot0,016=156,8$ N, igual al peso $16\\cdot9,8=156,8$ N.

## Presión en un fluido

La presión es fuerza por unidad de superficie:

$$
p=\\frac{F}{A}.
$$

En un líquido en reposo, la presión aumenta con la profundidad:

$$
p=p_0+\\rho gh.
$$

No depende de la forma del recipiente, sino de la densidad del fluido, la gravedad y la profundidad. La diferencia de presión entre la parte inferior y superior del cuerpo es el origen del empuje neto.

## Por qué flota un barco de acero

El casco encierra aire y aumenta mucho el volumen total sin aumentar la masa en la misma proporción. La densidad media del conjunto barco–aire puede ser menor que la del agua. Si entra agua, la masa aumenta y el volumen exterior casi no cambia; la densidad media sube y puede perderse el equilibrio.

## Flotar, quedar suspendido o hundirse

Al soltar completamente un cuerpo dentro de un líquido pueden darse tres situaciones:

- Si $\\rho_c<\\rho_f$, inicialmente el empuje supera al peso y el cuerpo asciende hasta flotar parcialmente.
- Si $\\rho_c=\\rho_f$, empuje y peso pueden equilibrarse con el cuerpo totalmente sumergido: queda suspendido.
- Si $\\rho_c>\\rho_f$, el peso supera al empuje máximo y el cuerpo desciende.

Este criterio supone que la densidad del cuerpo es uniforme y que no hay otras fuerzas relevantes. Si el objeto toca el fondo, aparece además la fuerza normal; ya no puede afirmarse que peso y empuje sean las únicas fuerzas.

La misma comparación explica por qué un submarino modifica su flotabilidad llenando o vaciando tanques: cambia su masa y, por tanto, su densidad media, sin variar mucho el volumen exterior.

## Errores frecuentes

- Comparar masas cuando hay que comparar densidades.
- Usar el volumen total en Arquímedes cuando el cuerpo flota parcialmente.
- Creer que el empuje desaparece cuando el objeto se hunde.
- Mezclar $\\mathrm{cm^3}$ con $\\mathrm{kg/m^3}$.
- Decir que flota porque “no pesa”.
- Olvidar que equilibrio exige igualdad de fuerzas, no ausencia de fuerzas.

El campus virtual de Método Nebula desarrolla masa, volumen, densidad, presión, empuje y flotación con experimentos razonados, ejemplos y problemas progresivos. El botón de contacto permite solicitar una ruta que conecta cada fórmula con el modelo físico que la justifica.
`,M=`---
title: "Electricidad y circuitos en ESO: entiende qué ocurre antes de usar la ley de Ohm"
date: "2026-10-19"
updated: "2026-10-28"
description: "Electricidad en ESO explicada con corriente, voltaje, resistencia, serie, paralelo, ley de Ohm, ejemplo y errores frecuentes."
tag: "ESO"
category: "Física y Química"
relatedService: "/clases-particulares/fisica-ingenieria/"
relatedPosts: "gcse-physics-electricity-revision,fisica-y-quimica-como-plantear-problemas"
image: "/assets/latex/circuits-series-parallel.svg"
---

Un circuito no es un dibujo lleno de símbolos: es un camino cerrado en el que se transfiere energía. Si entiendes qué mide cada magnitud y qué cambia al conectar componentes, la ley de Ohm deja de ser una fórmula aislada.

![Circuitos en serie y paralelo con las magnitudes que permanecen iguales](/assets/latex/circuits-series-parallel.svg)

## Corriente, voltaje y resistencia

La corriente $I$ mide la carga que atraviesa un punto por unidad de tiempo y se expresa en amperios. La diferencia de potencial $V$ mide energía transferida por unidad de carga y se expresa en voltios. La resistencia $R$ mide oposición al paso de corriente y se expresa en ohmios.

La ley de Ohm es:

$$
V=IR.
$$

No indica automáticamente qué valor usar: primero debes saber entre qué puntos se mide el voltaje y por qué rama circula la corriente.

## Serie: un solo camino

En serie, la corriente es la misma en todos los componentes. El voltaje total se reparte y las resistencias se suman. Si una lámpara abre el circuito, deja de circular corriente por todo el montaje.

## Paralelo: varias ramas

En paralelo, cada rama conecta los mismos dos puntos y tiene el mismo voltaje. La corriente total se divide. Si una rama se abre, las otras pueden seguir funcionando.

Esta es la razón por la que las instalaciones domésticas no se conectan como una larga cadena de aparatos en serie.

## Ejemplo resuelto

Una pila de 9 V se conecta a una resistencia de $3\\,\\Omega$:

$$
I=\\frac{V}{R}=\\frac{9}{3}=3\\ \\mathrm{A}.
$$

Si añadimos otra resistencia de $6\\,\\Omega$ en serie:

$$
R_{eq}=3+6=9\\,\\Omega,
$$

y la corriente total pasa a:

$$
I=\\frac{9}{9}=1\\ \\mathrm{A}.
$$

La corriente disminuye porque la resistencia total aumenta manteniendo el mismo voltaje.

## Amperímetro y voltímetro

El amperímetro se coloca en serie para que lo atraviese la corriente de la rama. El voltímetro se conecta en paralelo entre los extremos del componente. Dibujar mal el instrumento revela que aún no está claro qué mide.

## Potencia y energía

La potencia eléctrica es:

$$
P=VI.
$$

La energía transferida durante un tiempo es:

$$
E=Pt.
$$

Comprueba las unidades: vatios, segundos y julios en el SI. Si se habla de consumo doméstico pueden aparecer kilovatios y horas.

## Seguridad y uso cotidiano

Un fusible o interruptor automático interrumpe el circuito cuando la corriente supera un valor seguro. La toma de tierra proporciona un camino de baja resistencia en caso de fallo. No memorices su nombre: explica qué riesgo reduce cada elemento.

## Errores frecuentes

- Confundir corriente con “cantidad almacenada”.
- Sumar resistencias en paralelo como si estuvieran en serie.
- Colocar el voltímetro en serie.
- No convertir miliamperios a amperios.
- Dar un resultado sin unidad.
- Explicar una lámpara más brillante solo con “tiene más electricidad”.

## Preguntas para comprobar comprensión

¿Qué ocurre con la corriente si duplicas la resistencia manteniendo $V$? Se reduce a la mitad en un componente óhmico. ¿Por qué dos ramas en paralelo tienen el mismo voltaje? Porque sus extremos están conectados a los mismos nodos. ¿Qué se conserva en una unión? La corriente total que entra es la que sale.

El campus virtual de Método Nebula desarrolla electricidad con conceptos, circuitos, ejemplos guiados, ejercicios y preguntas de examen. Si quieres saber si el bloqueo está en el dibujo, la fórmula o la interpretación, utiliza el botón de contacto.
`,I=`---
title: "Energía mecánica en ESO: trabajo, potencia y conservación sin confundir fuerza con energía"
seoTitle: "Energía mecánica en ESO: trabajo y conservación"
date: "2026-09-02"
updated: "2026-09-02"
description: "Entiende energía mecánica en ESO: trabajo, energía cinética, potencial, conservación, rozamiento, potencia y ejercicios resueltos."
tag: "Física ESO"
category: "Física y Química"
relatedService: "/clases-particulares/fisica-ingenieria/"
relatedPosts: "eso-fisica-quimica-leyes-newton-dinamica,gravitacion-eso-ley-universal-peso-ejercicios,mrua-eso-movimiento-rectilineo-uniformemente-acelerado-ejercicios"
image: "/assets/latex/energy-flow.svg"
---

Una fuerza y una energía no son la misma magnitud. La fuerza describe una interacción y puede cambiar el movimiento; la energía permite contabilizar transformaciones y predecir estados iniciales y finales sin reconstruir cada instante.

> **Respuesta directa.** La energía mecánica es $E_m=E_c+E_p$. Si solo actúan fuerzas conservativas, permanece constante. Con rozamiento, parte de la energía mecánica se transfiere a energía interna, pero la energía total sigue conservándose.

![Flujo entre energía almacenada, transferida y disipada](/assets/latex/energy-flow.svg)

## Energía cinética

$$
E_c=\\frac12mv^2.
$$

Depende del cuadrado de la velocidad. Si la velocidad se duplica, la energía cinética se multiplica por cuatro. Un objeto más lento puede tener más energía cinética si su masa es suficientemente grande.

La unidad es el julio:

$$
1\\ \\mathrm J=1\\ \\mathrm{N\\,m}.
$$

## Energía potencial gravitatoria

Cerca de la superficie terrestre:

$$
E_p=mgh.
$$

La altura se mide respecto a un nivel de referencia elegido. Cambiar el cero modifica los valores de $E_p$, pero no las diferencias de energía, que son las que afectan al movimiento.

Para un muelle ideal:

$$
E_{p,e}=\\frac12kx^2.
$$

Esta energía se almacena al deformarlo dentro del límite elástico.

## Conservación sin rozamiento

Una masa cae desde reposo una altura $h=5.0$ m. Si se ignora el aire:

$$
mgh=\\frac12mv^2.
$$

La masa se cancela:

$$
v=\\sqrt{2gh}\\approx\\sqrt{2(9.8)(5.0)}\\approx9.9\\ \\mathrm{m/s}.
$$

El resultado no afirma que la gravedad no dependa de la masa; indica que, en este modelo, energía potencial y cinética contienen el mismo factor $m$.

## Trabajo y cambio de energía

Para una fuerza constante paralela al desplazamiento:

$$
W=Fd.
$$

En general:

$$
W=Fd\\cos\\theta.
$$

El trabajo neto cumple:

$$
W_{\\rm neto}=\\Delta E_c.
$$

Una fuerza perpendicular al desplazamiento realiza trabajo cero, aunque pueda cambiar la dirección de la velocidad. Por ejemplo, la fuerza centrípeta ideal no cambia el módulo de la velocidad.

## Qué hace el rozamiento

Si una caja pierde 120 J de energía mecánica por rozamiento, esa energía se transfiere principalmente a energía interna de la caja y la superficie. No “desaparece”. El balance puede escribirse:

$$
E_{m,i}+W_{\\rm no\\ conservativas}=E_{m,f}.
$$

El trabajo del rozamiento suele ser negativo respecto al movimiento. Su módulo puede calcularse como $F_r d$ cuando la fuerza es constante.

## Potencia y rendimiento

La potencia mide rapidez de transferencia:

$$
P=\\frac Wt=\\frac Et.
$$

Dos máquinas pueden realizar el mismo trabajo, pero la de mayor potencia tarda menos. Si una grúa eleva 200 kg a 6 m en 10 s:

$$
P_{\\rm útil}=\\frac{mgh}{t}
=\\frac{200(9.8)(6)}{10}=1176\\ \\mathrm W.
$$

Con rendimiento del 80 %:

$$
P_{\\rm entrada}=\\frac{1176}{0.80}=1470\\ \\mathrm W.
$$

## Elegir entre fuerzas y energía

Usa Newton cuando necesites aceleración, tensión o normal. Usa energía cuando el problema conecte posiciones, alturas y velocidades sin pedir el tiempo. Ambos métodos deben ser compatibles; elegir el más corto no cambia la física.

## Errores frecuentes

- Usar $mgh$ sin definir diferencia de altura.
- Tratar el rozamiento como pérdida de energía total.
- Confundir potencia con energía consumida.
- Olvidar el cuadrado de la velocidad.
- Aplicar conservación de energía mecánica mientras existe trabajo disipativo sin incluirlo.

## Del ejercicio a un campus organizado

El campus virtual de Método Nebula conecta energía con movimiento, fuerzas, gravitación y calor. Incluye teoría visual, ejercicios por dificultad y problemas resueltos para aprender cuándo usar cada enfoque. El botón de contacto permite acceder a esta ruta desde ESO y continuar con el nivel de Bachillerato.
`,T=`---
title: "Formulación inorgánica en ESO: aprende la lógica y deja de memorizar listas infinitas"
date: "2026-10-07"
updated: "2026-10-28"
description: "Formulación inorgánica en ESO explicada con cargas, números de oxidación, familias, ejemplos, nomenclatura y práctica eficaz."
tag: "ESO"
category: "Física y Química"
relatedService: "/clases-particulares/quimica/"
relatedPosts: "bachillerato-fisica-quimica-mol-estequiometria,fisica-y-quimica-como-plantear-problemas"
image: "/assets/latex/bonding-particles.svg"
---

La formulación parece una asignatura dentro de otra asignatura: símbolos, prefijos, números romanos y tablas. Pero casi todos los ejercicios responden a una lógica estable: **identificar la familia, interpretar cargas o números de oxidación y construir una especie eléctricamente neutra.**

![Modelos de partículas que ayudan a distinguir compuestos iónicos, covalentes y metálicos](/assets/latex/bonding-particles.svg)

## Antes de formular: reconoce el tipo de sustancia

No uses la misma receta para todo. Pregunta si estás ante:

- óxido;
- hidruro;
- hidróxido;
- sal binaria;
- oxoácido;
- oxosal.

La familia indica qué elementos o iones deben aparecer y qué nomenclaturas son razonables.

## Carga y número de oxidación no son exactamente lo mismo

La carga pertenece a una especie real como $Na^+$ o $SO_4^{2-}$. El número de oxidación es una herramienta contable para seguir electrones en un compuesto. En iones monoatómicos coinciden numéricamente; en moléculas y iones poliatómicos se asignan siguiendo reglas.

Para formular compuestos iónicos, la suma de cargas debe ser cero.

## Ejemplo: óxido de hierro(III)

Hierro(III) indica $Fe^{3+}$ y el óxido es $O^{2-}$. Buscamos la proporción entera mínima que neutraliza:

$$
2(+3)+3(-2)=0.
$$

Por tanto:

$$
\\mathrm{Fe_2O_3}.
$$

No basta “cruzar” números: la comprobación de neutralidad explica por qué aparecen esos subíndices.

## Ejemplo: hidróxido de calcio

El calcio forma $Ca^{2+}$ y el hidróxido es $OH^-$. Se necesitan dos grupos hidróxido:

$$
\\mathrm{Ca(OH)_2}.
$$

Los paréntesis son esenciales porque el subíndice afecta al grupo completo. Escribir $CaOH_2$ cambia la composición.

## Nomenclatura de Stock

Cuando un elemento puede presentar varios estados de oxidación, el número romano aclara cuál aparece. En $CuO$, el oxígeno aporta $-2$, por lo que el cobre es $+2$: óxido de cobre(II). En $Cu_2O$, los dos cobres suman $+2$, así que cada uno es $+1$: óxido de cobre(I).

El número romano no indica cantidad de átomos; indica estado de oxidación.

## Nomenclatura sistemática

Los prefijos mono-, di-, tri-, tetra- y otros expresan cantidades. $CO_2$ puede nombrarse dióxido de carbono. Esta nomenclatura obliga a leer los subíndices, no a inferir cargas.

Sigue siempre la nomenclatura exigida por tu curso y profesor. Aprender a pasar de una a otra ayuda a comprobar la fórmula.

## Oxoácidos y oxosales: estudia familias

En lugar de memorizar una lista sin conexiones, agrupa especies por elemento central y relaciona ácido con anión. Si el ácido pierde protones, aparece la carga correspondiente del anión. Practica ambas direcciones: nombre → fórmula y fórmula → nombre.

## Rutina de cinco pasos

1. Clasifica la familia.
2. Escribe símbolos o iones con cargas.
3. Busca la proporción neutra mínima.
4. Usa paréntesis cuando se repita un ion poliatómico.
5. Comprueba el nombre desde la fórmula final.

## Errores frecuentes

- No simplificar subíndices cuando hay factor común.
- Usar números romanos como si fueran subíndices.
- Olvidar paréntesis en iones poliatómicos.
- Modificar la fórmula interna de un ion.
- Mezclar nomenclaturas dentro del mismo nombre.
- Memorizar sin verificar neutralidad.

## Práctica mínima útil

Formula: cloruro de magnesio, óxido de cobre(I), hidróxido de aluminio y sulfato de sodio. Nombra: $FeCl_3$, $N_2O_5$, $Ca(OH)_2$ y $K_2SO_4$.

Las fórmulas son $MgCl_2$, $Cu_2O$, $Al(OH)_3$ y $Na_2SO_4$. En Stock: cloruro de hierro(III), pentóxido de dinitrógeno en sistemática, hidróxido de calcio y sulfato de potasio.

El campus virtual de Método Nebula conecta estructura atómica, tabla periódica, enlace y formulación para que los nombres no aparezcan aislados. Si necesitas una secuencia que combine comprensión, tarjetas y ejercicios hasta automatizar sin memorizar a ciegas, utiliza el botón de contacto.
`,N=`---
title: "Leyes de Newton en ESO: el diagrama que convierte fuerzas en una ecuación con sentido"
seoTitle: "Leyes de Newton en ESO: fuerzas y diagramas"
date: "2026-10-26"
updated: "2026-10-26"
description: "Aprende las leyes de Newton en ESO con diagramas de fuerzas, resultante, rozamiento, peso, normal y ejercicios resueltos."
tag: "Física ESO"
category: "Física y Química"
relatedService: "/clases-particulares/fisica-ingenieria/"
relatedPosts: "diagramas-cuerpo-libre-metodo-errores-frecuentes,mrua-eso-movimiento-rectilineo-uniformemente-acelerado-ejercicios,eso-fisica-quimica-electricidad-circuitos"
image: "/assets/latex/forces-free-body.svg"
---

La segunda ley de Newton no empieza con $F=ma$. Empieza aislando el cuerpo y decidiendo qué interacciones actúan sobre él. Sin ese diagrama, los signos se convierten en adivinanzas.

> **Respuesta directa.** La aceleración tiene la dirección de la fuerza resultante: $\\sum\\vec F=m\\vec a$. Si las fuerzas se equilibran, la aceleración es cero; el objeto puede estar quieto o moverse con velocidad constante.

![Diagrama de cuerpo libre con peso, normal, fuerza aplicada y rozamiento](/assets/latex/forces-free-body.svg)

## Primera ley: equilibrio no significa reposo

Si:

$$
\\sum\\vec F=0,
$$

entonces $a=0$. La velocidad no cambia. Un cuerpo en movimiento puede estar en equilibrio dinámico.

## Segunda ley

En un eje:

$$
\\sum F_x=ma_x.
$$

Antes de sustituir, elige el sentido positivo. Las fuerzas opuestas aparecen con signo contrario por la geometría, no porque “el rozamiento siempre sea negativo”.

## Tercera ley

Las fuerzas de acción y reacción:

- tienen igual módulo;
- sentidos opuestos;
- actúan sobre cuerpos distintos;
- pertenecen a la misma interacción.

Peso y normal no forman un par de acción y reacción porque actúan sobre el mismo cuerpo y proceden de interacciones diferentes.

## Fuerzas habituales

- Peso: $P=mg$, vertical hacia abajo.
- Normal: perpendicular a la superficie.
- Rozamiento: se opone al deslizamiento o a su tendencia.
- Tensión: a lo largo de la cuerda.
- Fuerza elástica: $F=-kx$ en el modelo de Hooke.

La normal no es siempre igual al peso.

## Ejemplo resuelto

Una caja de 5 kg recibe 20 N hacia la derecha y sufre 5 N de rozamiento hacia la izquierda:

$$
F_{\\rm R}=20-5=15\\ \\mathrm{N}.
$$

$$
a=\\frac{F_{\\rm R}}m=\\frac{15}{5}=3\\ \\mathrm{m/s^2}.
$$

Verticalmente, si no acelera:

$$
N-mg=0\\Rightarrow N=mg.
$$

## Plano inclinado

El peso se descompone:

$$
P_\\parallel=mg\\sin\\theta,
\\qquad
P_\\perp=mg\\cos\\theta.
$$

Conviene elegir ejes paralelo y perpendicular al plano. Así la normal aparece solo en el eje perpendicular.

## Por qué la normal puede cambiar

La normal es la respuesta de contacto de una superficie, no una fuerza de valor fijo. En un ascensor que acelera hacia arriba:

$$
N-mg=ma\\quad\\Rightarrow\\quad N=m(g+a),
$$

por lo que la lectura de una báscula aumenta. Si el ascensor acelera hacia abajo, $N=m(g-a)$ y la lectura disminuye. El peso $mg$ no ha cambiado: cambia la fuerza que ejerce el suelo. Este ejemplo separa dos ideas que suelen confundirse.

## Del diagrama a una predicción

Supón ahora que la caja del ejemplo recibe la misma fuerza de 20 N, pero su masa se duplica y el rozamiento permanece en 5 N. La resultante sigue siendo 15 N, mientras que:

$$
a=\\frac{15}{10}=1.5\\ \\mathrm{m/s^2}.
$$

Duplicar la masa reduce a la mitad la aceleración solo porque la resultante se ha mantenido. Si el rozamiento también dependiera de la normal y cambiase, habría que recalcularlo antes de aplicar la segunda ley.

Una respuesta rigurosa distingue siempre datos, modelo y conclusión: primero identifica fuerzas, después calcula la resultante y al final interpreta el signo de la aceleración. Así es posible anticipar si el objeto acelera, frena o conserva su velocidad.

## Errores frecuentes

- Dibujar fuerzas que el cuerpo ejerce sobre otros.
- Añadir una “fuerza del movimiento”.
- Igualar normal y peso en cualquier situación.
- Sumar módulos sin considerar direcciones.
- Colocar acción y reacción en el mismo diagrama.

## Procedimiento

1. Aísla un solo cuerpo.
2. Dibuja interacciones reales.
3. Elige ejes.
4. Proyecta fuerzas.
5. Aplica Newton por eje.
6. Comprueba unidad, signo y sentido.

El campus de Método Nebula trabaja fuerzas y dinámica desde diagramas hasta problemas graduados de ESO y Bachillerato. Contacta para detectar si el bloqueo está en el dibujo, el álgebra o la interpretación.
`,F=`---
title: "Mezclas y disoluciones en ESO: cómo elegir filtración, destilación o cromatografía con criterio"
date: "2026-10-27"
updated: "2026-10-27"
description: "Guía de ESO para distinguir sustancias, mezclas y disoluciones y elegir métodos de separación según propiedades físicas."
tag: "ESO"
category: "Física y Química"
relatedService: "/clases-particulares/fisica-quimica/"
relatedPosts: "eso-fisica-quimica-formulacion-inorganica,bachillerato-fisica-quimica-mol-estequiometria"
image: "/assets/latex/separation-method-map.svg"
---

Elegir un método de separación no consiste en asociar “arena” con filtración o “tinta” con cromatografía. La pregunta científica es: **¿qué propiedad física distingue a los componentes de la mezcla?** Tamaño de partícula, punto de ebullición, densidad, solubilidad o afinidad permiten justificar el procedimiento.

![Mapa de elección de métodos de separación según tamaño, ebullición o afinidad](/assets/latex/separation-method-map.svg)

## Sustancia pura y mezcla

Una sustancia pura tiene composición definida y propiedades características. Una mezcla contiene dos o más sustancias en proporciones variables.

- Mezcla heterogénea: se distinguen fases o regiones diferentes.
- Mezcla homogénea o disolución: presenta aspecto y composición uniformes a escala macroscópica.

Que una mezcla sea transparente no significa que sea una sustancia pura. El agua salada puede ser transparente y seguir conteniendo dos componentes.

## Filtración: diferencia de tamaño y fase

La filtración separa un sólido insoluble de un líquido. El filtro permite pasar al líquido y a partículas suficientemente pequeñas; retiene el residuo sólido.

Arena y agua pueden separarse así. Sal disuelta y agua no, porque los iones hidratados atraviesan el papel con el disolvente. “Sólido” no basta: debe ser insoluble y formar una fase separada.

## Decantación y separación por densidad

La decantación aprovecha que dos fases inmiscibles o un sólido sedimentado tienen densidades distintas. Un embudo de decantación separa líquidos inmiscibles, como aceite y agua, controlando la salida de la fase inferior.

No funciona bien para dos líquidos miscibles, porque no forman capas estables.

## Evaporación y cristalización

Evaporar el disolvente permite recuperar un soluto sólido. Si se quiere obtener cristales más puros y bien formados, se concentra la disolución y se deja enfriar o evaporar lentamente.

La evaporación a sequedad puede degradar sustancias sensibles al calor y no recupera el disolvente. La elección depende del objetivo experimental.

## Destilación: diferencia de volatilidad

La destilación simple calienta una mezcla y condensa el vapor del componente más volátil. Puede recuperar un disolvente de una disolución o separar líquidos con puntos de ebullición suficientemente diferentes.

La destilación fraccionada añade una columna que permite múltiples ciclos de vaporización y condensación, mejorando la separación de líquidos con puntos de ebullición cercanos.

El termómetro debe medir la temperatura del vapor que entra en el condensador, no la del líquido del matraz sin más.

## Cromatografía: afinidad entre dos fases

En paper chromatography, los componentes se reparten entre una fase estacionaria y una fase móvil. Los que tienen mayor afinidad por el disolvente avanzan más; los que interaccionan más con el papel avanzan menos.

$$
R_f=\\frac{\\text{distancia recorrida por la sustancia}}{\\text{distancia recorrida por el frente del disolvente}}.
$$

$R_f$ está entre 0 y 1 si ambas distancias se miden desde la misma línea de origen. Se comparan valores solo bajo condiciones equivalentes.

## Concentración de una disolución

En concentración en masa:

$$
c=\\frac{m_{\\text{soluto}}}{V_{\\text{disolución}}}.
$$

Si se disuelven 12 g de sal hasta obtener 300 mL de disolución:

$$
c=\\frac{12}{0,300}=40\\ \\mathrm{g/L}.
$$

El volumen es el de la disolución final, no necesariamente el volumen inicial de disolvente.

## Diseñar una separación completa

Para una mezcla de limaduras de hierro, arena y sal:

La separación comienza retirando el hierro mediante magnetismo. El agua disuelve después la sal, pero no la arena. La filtración retiene la arena como residuo y deja pasar la disolución salina. Por último, la evaporación o cristalización del filtrado permite recuperar la sal.

Cada etapa elimina un componente aprovechando una propiedad distinta. El orden importa: filtrar antes de disolver la sal no separaría sal y arena.

## Errores frecuentes

- Llamar sustancia pura a cualquier material transparente.
- Intentar filtrar un soluto disuelto.
- Confundir evaporación con ebullición obligatoria.
- Colocar la mancha de cromatografía dentro del disolvente.
- Calcular $R_f$ con distancias desde puntos diferentes.
- Elegir un método sin nombrar la propiedad física que lo hace funcionar.

El campus virtual de Método Nebula desarrolla materia, mezclas, disoluciones, concentración y técnicas de separación con teoría, experimentos razonados, ejercicios y preguntas competenciales. El botón de contacto permite solicitar una ruta centrada en el diseño y la justificación del procedimiento.
`,H=`---
title: "Sonido y ondas en ESO: frecuencia, amplitud y velocidad sin confundir tono con volumen"
seoTitle: "Sonido y ondas en ESO: frecuencia, amplitud y velocidad"
date: "2026-10-08"
updated: "2026-10-08"
description: "Entiende sonido y ondas en ESO: amplitud, frecuencia, longitud de onda, velocidad, tono, volumen, eco y ejercicios."
tag: "Física ESO"
category: "Física y Química"
relatedService: "/clases-particulares/fisica-ingenieria/"
relatedPosts: "pau-fisica-ondas-resolver-problemas,eso-fisica-quimica-electricidad-circuitos,gravitacion-eso-ley-universal-peso-ejercicios"
image: "/assets/latex/wave-anatomy.svg"
---

Una gráfica de onda puede mostrar distancia o tiempo. Si no lees los ejes, es fácil llamar período a una longitud de onda o confundir amplitud con frecuencia.

> **Respuesta directa.** La frecuencia determina el tono; la amplitud se relaciona con la intensidad y el volumen percibido. La velocidad depende del medio y cumple $v=f\\lambda$. El sonido necesita un medio material para propagarse.

![Onda armónica con amplitud y longitud de onda](/assets/latex/wave-anatomy.svg)

## Magnitudes básicas

- Amplitud $A$: máxima separación del equilibrio.
- Longitud de onda $\\lambda$: distancia entre puntos en fase.
- Período $T$: tiempo de una oscilación.
- Frecuencia $f$: oscilaciones por segundo.

$$
f=\\frac1T,
\\qquad
v=f\\lambda.
$$

## Gráfica espacial y temporal

En una gráfica posición–desplazamiento, la separación entre crestas es $\\lambda$. En una gráfica tiempo–desplazamiento de un punto, la separación temporal entre máximos es $T$.

Escribe la unidad del eje horizontal antes de interpretar.

## Tono y volumen

Una frecuencia mayor produce un tono más agudo. Una amplitud mayor suele producir mayor intensidad. Duplicar amplitud no significa simplemente “doble volumen percibido”, porque intensidad y percepción no son lineales.

## Ejemplo

Una onda sonora de frecuencia 680 Hz se propaga a 340 m/s:

$$
\\lambda=\\frac vf=\\frac{340}{680}=0.50\\ \\mathrm{m}.
$$

Si pasa a otro medio, la fuente mantiene la frecuencia, pero velocidad y longitud de onda pueden cambiar.

## Eco y distancia

Si el sonido tarda $t$ en ir y volver:

$$
d=\\frac{vt}{2}.
$$

El factor 2 aparece porque el tiempo incluye ida y regreso.

### Ejemplo

Para un eco recibido tras $0.40$ s:

$$
d=\\frac{340(0.40)}2=68\\ \\mathrm{m}.
$$

## El sonido como onda mecánica

En aire, el sonido se propaga mediante compresiones y rarefacciones. Las partículas vibran alrededor de su posición; no viajan desde la fuente hasta el oído.

No hay sonido en el vacío, aunque sí pueden propagarse ondas electromagnéticas.

## Intensidad, distancia y decibelios

La energía emitida por una fuente puntual se reparte sobre superficies cada vez mayores. En un modelo ideal:

$$
I=\\frac{P}{4\\pi r^2}.
$$

Al duplicar la distancia, la intensidad se reduce a la cuarta parte. Esto no implica que el oído perciba exactamente “cuatro veces menos volumen”, porque la percepción sonora es aproximadamente logarítmica. El nivel sonoro se expresa en decibelios y una diferencia de nivel representa una razón de intensidades, no una resta directa de potencias.

## Medir la velocidad del sonido

Con dos micrófonos separados una distancia conocida $d$, puede medirse el retraso $\\Delta t$ con que llega un pulso:

$$
v=\\frac d{\\Delta t}.
$$

Una separación mayor reduce el porcentaje de incertidumbre asociado al tiempo, siempre que la señal siga siendo clara. Repetir, invertir la posición de los micrófonos y evitar ecos de paredes mejora el resultado.

También puede utilizarse resonancia en un tubo: las posiciones de resonancias consecutivas están separadas aproximadamente $\\lambda/2$. Con una frecuencia conocida, $v=f\\lambda$. Esta técnica enlaza una observación acústica con el modelo de onda estacionaria.

Comparar el resultado con 340 m/s solo tiene sentido indicando la temperatura, porque la velocidad del sonido en aire cambia con ella. Una discrepancia debe analizarse mediante incertidumbre y condiciones, no corrigiendo el número a mano.

## Errores frecuentes

- Identificar amplitud con tono.
- Leer $\\lambda$ en una gráfica temporal.
- Olvidar dividir entre dos en un eco.
- Cambiar frecuencia al cambiar de medio.
- Decir que las partículas avanzan con la onda.

## Método de comprobación

Revisa unidades: Hz para frecuencia, s para período, m para longitud y m/s para velocidad. Además, una frecuencia alta debe corresponder a un período pequeño.

El campus de Método Nebula reúne ondas, sonido y óptica con teoría, simulaciones conceptuales y ejercicios de ESO. Contacta para organizar el tema desde lectura de gráficas hasta problemas.
`,O=`---
title: "Ecuaciones y sistemas en ESO: el método para entenderlos y no volver a temer los signos"
date: "2026-10-04"
updated: "2026-10-28"
description: "Aprende ecuaciones y sistemas en ESO con equivalencia, traducción de problemas, métodos, ejemplos, comprobación y errores frecuentes."
tag: "ESO"
category: "Matemáticas ESO y Bachillerato"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "como-estudiar-matematicas-sin-memorizar,estadistica-descriptiva-eso-media-mediana-moda"
image: "/assets/latex/equations-balance.svg"
---

“Pasa el 3 restando” puede producir una respuesta correcta, pero es una frase peligrosa: oculta por qué la igualdad sigue siendo cierta. Cuando aparecen paréntesis, fracciones o incógnitas en ambos miembros, esa receta se rompe y empiezan los cambios de signo sin control.

La idea que sí funciona siempre es la equivalencia: **una ecuación es una balanza y debes realizar la misma operación en ambos miembros.**

![Balanza algebraica que representa operaciones equivalentes en una ecuación](/assets/latex/equations-balance.svg)

## Qué significa resolver una ecuación

Resolver es encontrar todos los valores que convierten la igualdad en una afirmación verdadera. Por eso sustituir el resultado al final no es un añadido opcional: es la prueba de que el valor funciona.

Para:

$$
x+3=11,
$$

restamos 3 en ambos miembros:

$$
x+3-3=11-3,
$$

y obtenemos $x=8$. La comprobación es $8+3=11$.

## Orden seguro para ecuaciones lineales

1. Quita paréntesis aplicando bien la distributiva.
2. Elimina denominadores mediante una operación equivalente cuando convenga.
3. Reduce términos semejantes en cada miembro.
4. Agrupa términos con incógnita y términos independientes.
5. Aísla la incógnita.
6. Comprueba en la ecuación original.

## Ejemplo con paréntesis

Resuelve:

$$
3(2x-1)+5=2(x+4).
$$

Desarrollamos:

$$
6x-3+5=2x+8.
$$

Simplificamos y restamos $2x$:

$$
4x+2=8.
$$

Restamos 2 y dividimos entre 4:

$$
x=\\frac{6}{4}=\\frac{3}{2}.
$$

Al sustituir, ambos miembros valen 11. La comprobación detecta errores de distributiva y de signo.

## Traducir un problema a ecuación

Un número más su tercera parte es 28. Si $x$ es el número:

$$
x+\\frac{x}{3}=28.
$$

Multiplicamos por 3:

$$
3x+x=84,
$$

de donde $x=21$. La frase final debe volver al contexto: el número buscado es 21.

## Sistemas: dos condiciones que deben cumplirse a la vez

Un sistema de dos ecuaciones representa dos relaciones simultáneas. La solución es el punto que satisface ambas.

### Sustitución

Conviene cuando una variable ya está despejada o es fácil hacerlo.

### Igualación

Resulta útil cuando ambas ecuaciones se despejan con sencillez para la misma variable.

### Reducción

Es eficiente cuando puedes cancelar una variable sumando o restando ecuaciones, quizá después de multiplicar alguna.

No hay un método “mejor” siempre. El buen método es el que reduce operaciones y riesgo de error.

## Ejemplo de sistema

$$
\\begin{cases}
x+y=11,\\\\
x-y=3.
\\end{cases}
$$

Sumamos ambas ecuaciones:

$$
2x=14\\Rightarrow x=7.
$$

Sustituimos en la primera: $y=4$. Comprobación: $7+4=11$ y $7-4=3$.

Gráficamente, las rectas se cortan en $(7,4)$. Si fueran paralelas no habría solución; si coincidieran habría infinitas.

## Los errores que conviene corregir por causa

- Cambiar un signo sin escribir la operación equivalente.
- Distribuir el factor solo al primer término del paréntesis.
- Sumar términos no semejantes.
- Dividir un solo término cuando debe dividirse todo el miembro.
- Encontrar $x$ en un sistema y olvidar $y$.
- Aceptar una solución que no cumple la ecuación original.

## Ejercicios para comprobar dominio

1. $5x-7=18$.
2. $2(x+3)=4x-6$.
3. $x/4+3=8$.
4. Resuelve $x+y=9$, $2x-y=6$.
5. Plantea: “dos entradas cuestan 26 € y una cuesta 4 € más que la otra”.

Resultados: $x=5$; $x=6$; $x=20$; $(x,y)=(5,4)$; y precios de 15 € y 11 €.

El campus virtual de Método Nebula organiza números, álgebra, ecuaciones, sistemas e inecuaciones con teoría, ejemplos y práctica gradual. Si el problema no es “hacer cuentas” sino saber qué paso dar y por qué, utiliza el botón de contacto para construir una ruta desde la base real.
`,B=`---
title: "Polinomios y factorización en ESO: cómo encontrar raíces y simplificar sin probar al azar"
seoTitle: "Polinomios en ESO: raíces y factorización paso a paso"
date: "2026-09-05"
updated: "2026-09-05"
description: "Aprende polinomios y factorización en ESO: factor común, identidades notables, Ruffini, raíces, teorema del resto y fracciones algebraicas."
tag: "Matemáticas ESO"
category: "Matemáticas ESO y Bachillerato"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "eso-matematicas-ecuaciones-sistemas-estudiar,bachillerato-matematicas-funciones-representacion,como-estudiar-matematicas-sin-memorizar"
image: "/assets/latex/polynomial-factor.svg"
---

Factorizar no consiste en “quitar paréntesis al revés” sin criterio. Significa escribir un polinomio como producto de factores más simples. Las raíces indican qué factores deben aparecer y permiten conectar álgebra, ecuaciones y gráficas.

> **Respuesta directa.** Empieza siempre por factor común; busca después identidades notables y raíces racionales. Si $P(r)=0$, entonces $(x-r)$ es factor. Multiplica al final para comprobar que recuperas exactamente el polinomio original.

![Polinomio cúbico con tres raíces y su factorización](/assets/latex/polynomial-factor.svg)

## Factor común antes que cualquier método

$$
6x^3-9x^2=3x^2(2x-3).
$$

El máximo factor común incluye números y la menor potencia compartida de cada letra. Si se omite este paso, Ruffini o las identidades generan cálculos más largos y factores incompletos.

## Identidades notables

$$
a^2-b^2=(a-b)(a+b),
$$

$$
a^2+2ab+b^2=(a+b)^2,
$$

$$
a^2-2ab+b^2=(a-b)^2.
$$

En $x^2-16$, reconocer diferencia de cuadrados da $(x-4)(x+4)$. En $x^2+8x+16$, el término central es $2\\cdot x\\cdot4$, por lo que resulta $(x+4)^2$.

No todo trinomio es un cuadrado perfecto. Las tres piezas deben encajar.

## Teorema del resto y del factor

Al dividir $P(x)$ entre $(x-a)$, el resto es $P(a)$. Por tanto:

$$
P(a)=0\\Longleftrightarrow(x-a)\\text{ es factor}.
$$

Esto permite comprobar candidatos sin realizar todas las divisiones. Para un polinomio con coeficientes enteros y término independiente 6, las raíces enteras posibles deben dividir a 6: $\\pm1,\\pm2,\\pm3,\\pm6$.

## Ruffini con sentido

Considera:

$$
P(x)=x^3-2x^2-5x+6.
$$

Como $P(1)=0$, dividimos entre $(x-1)$ y obtenemos:

$$
P(x)=(x-1)(x^2-x-6).
$$

El segundo factor se descompone:

$$
x^2-x-6=(x-3)(x+2).
$$

Por tanto:

$$
P(x)=(x-1)(x-3)(x+2).
$$

Las raíces son $1$, $3$ y $-2$, justamente los cortes con el eje $x$ de la figura.

## Multiplicidad y forma de la gráfica

Si un factor aparece una vez, la gráfica suele cruzar el eje en esa raíz. Si aparece con multiplicidad par, como $(x-2)^2$, toca el eje y vuelve hacia el mismo lado. La multiplicidad conecta la factorización con el aspecto local de la función.

El signo del coeficiente principal y el grado determinan el comportamiento en los extremos. Esta información permite esbozar una gráfica sin construir una tabla enorme.

## Fracciones algebraicas

Para simplificar:

$$
\\frac{x^2-9}{x^2-x-6}
=\\frac{(x-3)(x+3)}{(x-3)(x+2)}
=\\frac{x+3}{x+2},
$$

pero deben conservarse las restricciones originales:

$$
x\\neq3,\\qquad x\\neq-2.
$$

Cancelar un factor no hace que el valor prohibido reaparezca en el dominio.

## Errores frecuentes

- Aplicar Ruffini sin ordenar el polinomio ni escribir coeficientes cero.
- Confundir la raíz $r$ con el factor $(x+r)$.
- Cancelar términos de una suma en lugar de factores.
- Perder restricciones al simplificar fracciones.
- Dejar una factorización sin verificar mediante producto.

## Construir una base que siga sirviendo

El campus virtual de Método Nebula enlaza polinomios con ecuaciones, funciones, límites y derivadas. La teoría se acompaña de ejercicios graduados y comprobaciones gráficas para que factorizar no sea una colección de trucos. El botón de contacto permite acceder a esta ruta y trabajar desde fundamentos de ESO hasta problemas de Bachillerato.
`,k=`---
title: "Porcentajes e interés compuesto en ESO: el factor multiplicativo que evita casi todos los errores"
date: "2026-09-27"
updated: "2026-09-27"
description: "Aprende porcentajes sucesivos, descuentos e interés compuesto con factores multiplicativos, ejemplos y comprobaciones para ESO."
tag: "ESO"
category: "Matemáticas ESO y Bachillerato"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "eso-matematicas-ecuaciones-sistemas-estudiar,como-estudiar-matematicas-sin-memorizar"
image: "/assets/latex/compound-growth.svg"
---

El error más común con porcentajes no es calcular mal un 20 %. Es creer que subir un 20 % y bajar después un 20 % deja la cantidad como estaba. El segundo porcentaje actúa sobre una base distinta. La herramienta que hace visible esa diferencia es el **factor multiplicativo**.

![Crecimiento compuesto representado como multiplicaciones sucesivas por el mismo factor](/assets/latex/compound-growth.svg)

## Del porcentaje al factor

Un aumento del $r\\%$ equivale a multiplicar por:

$$
1+\\frac{r}{100}.
$$

Una disminución del $r\\%$ equivale a multiplicar por:

$$
1-\\frac{r}{100}.
$$

Por ejemplo, subir un 15 % es multiplicar por $1,15$; descontar un 15 % es multiplicar por $0,85$.

## Por qué aumentar y disminuir no se cancelan

Una chaqueta cuesta 100 €. Sube un 20 %:

$$
100\\cdot1,20=120.
$$

Después baja un 20 %:

$$
120\\cdot0,80=96.
$$

El efecto conjunto es:

$$
1,20\\cdot0,80=0,96.
$$

El precio final es un 4 % menor que el inicial. Los porcentajes sucesivos no se suman ni se restan sin más: **sus factores se multiplican**.

## Encontrar el valor inicial

Tras aplicar un descuento del 30 %, un producto cuesta 84 €. Si $P$ es el precio inicial:

$$
0,70P=84.
$$

Por tanto:

$$
P=\\frac{84}{0,70}=120\\ \\text{€}.
$$

No hay que “sumar el 30 % a 84”, porque 84 representa ya el 70 % del precio original.

## Interés simple e interés compuesto

En interés simple, los intereses se calculan siempre sobre el capital inicial:

$$
C_n=C_0(1+nr).
$$

En interés compuesto, cada periodo incorpora los intereses al capital y el siguiente porcentaje actúa sobre la nueva cantidad:

$$
C_n=C_0(1+r)^n.
$$

La potencia no es una fórmula arbitraria: resume $n$ multiplicaciones por el mismo factor.

## Ejemplo de interés compuesto

Se depositan 1500 € al 3 % anual durante 4 años:

$$
C_4=1500(1,03)^4\\approx1688,26\\ \\text{€}.
$$

El interés generado es:

$$
1688,26-1500=188,26\\ \\text{€}.
$$

Una estimación rápida confirma que el resultado es razonable: un 3 % anual durante cuatro años debe producir algo más de un 12 %, porque los intereses también generan intereses.

## Variaciones encadenadas

Si una población aumenta un 8 %, disminuye un 5 % y después aumenta un 2 %, el factor total es:

$$
1,08\\cdot0,95\\cdot1,02=1,04652.
$$

La variación global es un aumento del $4,652\\%$. Esta forma funciona con precios, población, depreciación, inflación y concentraciones.

## Método para no perder la base

El análisis comienza identificando qué cantidad representa el 100 % en cada etapa. Cada variación se traduce después a un factor, y los factores se multiplican en el orden temporal del problema. Cuando la incógnita es el valor inicial, la operación se invierte dividiendo por el factor total.

La comparación cualitativa entre valor inicial y final sirve de control: un factor total superior a 1 debe producir crecimiento; uno inferior a 1, disminución.

## Errores frecuentes

- Calcular todos los porcentajes sobre el valor inicial cuando son sucesivos.
- Usar $20$ en vez de $0,20$ como tasa.
- Confundir capital final con interés generado.
- Sumar tasas de crecimiento compuesto.
- Redondear el capital tras cada año.
- Olvidar adaptar la tasa y el número de periodos: una tasa anual no puede combinarse directamente con meses.

## Práctica breve

1. Un precio de 240 € recibe un descuento del 15 %. Resultado: 204 €.
2. Tras una subida del 12 %, un salario es 1568 €. Salario inicial: 1400 €.
3. 2000 € crecen al 2,5 % anual durante 3 años. Capital: aproximadamente 2153,78 €.
4. Un valor sube 10 % y baja 10 %. Factor total: $1,10\\cdot0,90=0,99$.

El campus virtual de Método Nebula conecta proporcionalidad, porcentajes y matemática financiera con ejemplos resueltos, ejercicios graduados y corrección de errores típicos. El botón de contacto permite definir una ruta desde el nivel real de cada estudiante.
`,Q=`---
title: "Probabilidad en ESO: aprende a contar bien y evita los errores que cambian todo"
date: "2026-10-22"
updated: "2026-10-28"
description: "Probabilidad en ESO con espacio muestral, sucesos, Laplace, árboles, ejemplos, comprobaciones y ejercicios resueltos."
tag: "ESO"
category: "Matemáticas ESO y Bachillerato"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "estadistica-descriptiva-eso-media-mediana-moda,probabilidad-condicionada-bayes-problemas-resueltos"
image: "/assets/latex/probability-tree.svg"
---

La mayoría de los errores de probabilidad no empiezan en una división. Empiezan al olvidar un resultado posible, contar dos veces el mismo caso o suponer que todos los resultados son igual de probables.

La solución es representar antes de calcular. Una lista, tabla o árbol hace visible el espacio muestral y permite comprobar si el recuento está completo.

![Diagrama de árbol para dos etapas con probabilidades condicionadas](/assets/latex/probability-tree.svg)

## Experimento, resultado y suceso

El experimento es la acción aleatoria; un resultado elemental es una posibilidad concreta; un suceso es un conjunto de resultados.

Al lanzar un dado, el espacio muestral es:

$$
\\Omega=\\{1,2,3,4,5,6\\}.
$$

El suceso “obtener un número par” es $A=\\{2,4,6\\}$.

## Regla de Laplace

Cuando los resultados son equiprobables:

$$
P(A)=\\frac{\\text{casos favorables}}{\\text{casos posibles}}.
$$

Para el dado, $P(A)=3/6=1/2$. No uses esta regla si los resultados no tienen la misma probabilidad.

## Suceso contrario

La probabilidad de que no ocurra $A$ es:

$$
P(A^c)=1-P(A).
$$

Esto simplifica preguntas como “al menos uno”. A veces es mucho más fácil calcular la probabilidad de ninguno y restar a uno.

## Dos etapas: tablas y árboles

Al lanzar dos monedas, los resultados ordenados son:

$$
\\{CC,CX,XC,XX\\}.
$$

La probabilidad de exactamente una cara es $2/4=1/2$. Contar solo “cara-cruz” una vez omite que el orden produce dos caminos diferentes.

En un árbol, multiplica probabilidades a lo largo de una rama y suma ramas incompatibles que conducen al mismo suceso.

## Sin reemplazo

Una bolsa contiene 3 bolas rojas y 2 azules. Se extraen dos sin reemplazo. La probabilidad de dos rojas es:

$$
\\frac35\\cdot\\frac24=\\frac{3}{10}.
$$

La segunda probabilidad cambia porque queda una bola menos. Con reemplazo sería $3/5\\cdot3/5$.

## Frecuencia experimental

Si un suceso ocurre 42 veces en 100 ensayos, su frecuencia relativa es 0,42. No tiene que coincidir exactamente con la probabilidad teórica, pero suele estabilizarse alrededor de ella al aumentar el número de repeticiones.

La probabilidad no predice cada resultado individual; describe comportamiento a largo plazo.

## Comprobaciones rápidas

- Toda probabilidad está entre 0 y 1.
- Los resultados de todo el espacio suman 1.
- Un suceso imposible vale 0 y uno seguro vale 1.
- En un árbol, las ramas que salen de un nodo suman 1.
- Si hay reemplazo o no, debe reflejarse en la segunda etapa.

## Errores frecuentes

- Aplicar Laplace sin equiprobabilidad.
- Confundir “y” con “o”.
- Olvidar el orden cuando importa.
- Mantener denominador al extraer sin reemplazo.
- Sumar probabilidades de ramas que no son incompatibles.
- Dar un porcentaje mayor que 100% sin revisar.

## Ejercicios de control

1. Probabilidad de múltiplo de 3 al lanzar un dado.
2. Probabilidad de al menos una cara en dos monedas.
3. En la bolsa anterior, probabilidad de roja y azul en cualquier orden.
4. Explica la diferencia entre probabilidad teórica y frecuencia relativa.

Resultados: $1/3$; $3/4$; $3/5$; y la última compara modelo ideal con datos observados.

El campus virtual de Método Nebula recorre fundamentos, estadística y probabilidad con teoría, árboles, ejercicios y autoevaluación. Si quieres detectar exactamente dónde se rompe el recuento y practicar en dificultad creciente, utiliza el botón de contacto.
`,G=`---
title: "Estadística descriptiva en ESO II: rango, cuartiles y diagrama de caja"
date: "2026-09-15"
updated: "2026-09-15"
description: "Continúa Estadística de ESO con rango, cuartiles, recorrido intercuartílico y diagramas de caja, explicados con ejemplos y ejercicios resueltos."
tag: "ESO"
category: "Estadística"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "estadistica-descriptiva-eso-media-mediana-moda,como-estudiar-matematicas-sin-memorizar,estadistica-desde-cero-para-elegir-contrastes"
image: "/assets/latex/diagrama-caja-rango-eso.svg"
---

Esta es la continuación de la guía de [estadística descriptiva en ESO: media, mediana, moda y frecuencias](/blog/estadistica-descriptiva-eso-media-mediana-moda/). Allí resumimos un grupo con un valor central; aquí damos el siguiente paso: medir cuánto se separan los datos y localizar qué ocurre en sus distintas zonas.

Dos grupos pueden tener la misma media y comportarse de forma muy distinta. El **rango** muestra la distancia entre el dato menor y el mayor. Los **cuartiles** dividen los datos ordenados en cuatro partes y ayudan a saber dónde está el 50 % central. El **diagrama de caja** reúne esas ideas en un dibujo sencillo.

## Antes de empezar: ordenar no es opcional

Para calcular media no importa el orden de una lista. Para mediana, cuartiles o percentiles, sí importa. Por eso el primer paso es siempre ordenar de menor a mayor.

Usaremos los minutos que diez estudiantes leen cada semana:

$$
9,4,12,7,10,5,13,8,11,6.
$$

Ordenados quedan así:

$$
4,5,6,7,8,9,10,11,12,13.
$$

Trabajaremos con esta lista durante toda la guía. Tener un solo ejemplo evita perderse entre cálculos nuevos y permite comprobar que cada número sale de los mismos datos.

## El rango: una medida rápida de dispersión

La media, mediana y moda describen una posición o un valor habitual. El **rango** —también llamado recorrido— describe la amplitud de los datos:

$$
\\text{rango}=\\text{valor máximo}-\\text{valor mínimo}.
$$

En la lista de lectura, el mínimo es $4$ y el máximo es $13$. Por tanto:

$$
\\text{rango}=13-4=9.
$$

El rango es de $9$ minutos. Eso no significa que cada estudiante se diferencie nueve minutos de los demás: significa que hay nueve minutos entre el caso más bajo y el más alto.

### Qué nos dice y qué no nos dice el rango

El rango es fácil y útil para una primera comparación. Si el grupo A tiene rango $3$ y el grupo B tiene rango $15$, los datos del grupo B están más extendidos entre sus extremos.

Pero utiliza solo dos datos: el mínimo y el máximo. Observa estos dos conjuntos:

$$
A: 4,7,7,7,7,7,7,10
$$

$$
B: 4,5,6,7,8,9,10,10.
$$

Los dos tienen rango $10-4=6$, pero no se reparten igual. En A casi todos los valores se amontonan alrededor de $7$; en B están más distribuidos. Para describir mejor la parte central necesitamos los cuartiles.

## Qué son los cuartiles

Los **cuartiles** son tres valores que, tras ordenar los datos, los separan aproximadamente en cuatro grupos del mismo tamaño:

- **Primer cuartil**, $Q_1$: deja aproximadamente el 25 % de los datos por debajo.
- **Segundo cuartil**, $Q_2$: es la mediana; deja aproximadamente el 50 % por debajo.
- **Tercer cuartil**, $Q_3$: deja aproximadamente el 75 % de los datos por debajo.

Una buena imagen mental es una fila de alumnos ordenada por una característica. La mediana busca el centro de toda la fila. $Q_1$ busca el centro de la mitad de abajo y $Q_3$, el centro de la mitad de arriba.

En algunos libros pueden aparecer reglas ligeramente distintas para calcular cuartiles cuando el número de datos no encaja de forma exacta. En ESO, sigue siempre el método que use tu profesor. Lo importante es ordenar primero, dividir de forma coherente y explicar qué parte de los datos representa cada cuartil.

## Cómo calcular $Q_1$, mediana y $Q_3$ paso a paso

Partimos de los diez tiempos ordenados:

$$
4,5,6,7,8,9,10,11,12,13.
$$

### 1. Hallar la mediana, que es $Q_2$

Hay diez datos, un número par. Los dos centrales son el quinto y el sexto: $8$ y $9$.

$$
Q_2=\\text{mediana}=\\frac{8+9}{2}=8{,}5.
$$

### 2. Dividir la lista en dos mitades

La mitad inferior contiene los cinco primeros valores:

$$
4,5,6,7,8.
$$

La mitad superior contiene los cinco últimos:

$$
9,10,11,12,13.
$$

Como la mediana no es un dato de la lista en este caso, no hay duda: cada mitad tiene cinco datos.

### 3. Buscar el centro de cada mitad

El centro de la mitad inferior es $6$, así que:

$$
Q_1=6.
$$

El centro de la mitad superior es $11$, así que:

$$
Q_3=11.
$$

![Lista de diez datos ordenados, dividida en mitad inferior y superior, con Q1 igual a seis, mediana igual a ocho coma cinco y Q3 igual a once](/assets/latex/cuartiles-datos-ordenados-eso.svg)

En el ejemplo quedan cuatro zonas fáciles de leer:

| Zona | Valores o límites | Qué representa |
|---|---|---|
| Desde el mínimo hasta $Q_1$ | de 4 a 6 | El primer cuarto de los datos |
| Entre $Q_1$ y la mediana | de 6 a 8,5 | El segundo cuarto |
| Entre la mediana y $Q_3$ | de 8,5 a 11 | El tercer cuarto |
| Desde $Q_3$ hasta el máximo | de 11 a 13 | El último cuarto |

Los cuartiles no obligan a que haya exactamente el mismo número entero de datos en cada intervalo. Son puntos de corte que resumen una posición dentro de una lista.

## Recorrido intercuartílico: la amplitud de la zona central

El **recorrido intercuartílico** se abrevia a veces como RIC y mide la distancia entre el tercer y el primer cuartil:

$$
RIC=Q_3-Q_1.
$$

En nuestro ejemplo:

$$
RIC=11-6=5.
$$

El 50 % central de los tiempos está en un intervalo de cinco minutos, entre $6$ y $11$. Esta medida es especialmente útil porque no depende tanto de los valores extremos como el rango.

Compara:

- El rango usa solo $4$ y $13$: vale $9$.
- El RIC usa la zona central, de $6$ a $11$: vale $5$.

Si un día un estudiante leyera $60$ minutos, el rango crecería mucho. En cambio, $Q_1$ y $Q_3$ podrían permanecer iguales si el resto de los datos no cambia. Por eso los cuartiles ayudan a describir el grupo habitual sin que un caso excepcional domine el resumen.

## Cómo leer un diagrama de caja

Un **diagrama de caja y bigotes** representa cinco números:

1. mínimo;
2. $Q_1$;
3. mediana;
4. $Q_3$;
5. máximo.

La caja empieza en $Q_1$ y termina en $Q_3$. La línea dentro de la caja es la mediana. Los segmentos que salen a izquierda y derecha, llamados bigotes, conectan con el mínimo y el máximo en este nivel introductorio.

![Diagrama de caja para datos con mínimo cuatro, Q1 seis, mediana ocho coma cinco, Q3 once y máximo trece](/assets/latex/diagrama-caja-rango-eso.svg)

Este diagrama permite afirmar, sin mirar la lista completa, que:

- los datos van desde $4$ hasta $13$;
- la mitad de los datos está entre $6$ y $11$;
- el centro se sitúa en $8{,}5$;
- el intervalo entre $Q_1$ y $Q_3$ mide $5$.

No midas la anchura de la caja en píxeles: lee los valores de la escala. Una caja más ancha indica más dispersión solo si los dos diagramas usan la misma escala horizontal.

## Comparar dos grupos con un diagrama de caja

Imagina dos grupos que han hecho el mismo ejercicio de lectura. Ambos tienen mediana $8{,}5$ minutos, pero sus resúmenes son:

| Grupo | Mínimo | $Q_1$ | Mediana | $Q_3$ | Máximo |
|---|---:|---:|---:|---:|---:|
| A | 4 | 6 | 8,5 | 11 | 13 |
| B | 1 | 7 | 8,5 | 10 | 17 |

Los dos grupos comparten mediana: el valor central es igual. Sin embargo:

$$
RIC_A=11-6=5
$$

$$
RIC_B=10-7=3.
$$

El 50 % central de B está más concentrado. Pero B tiene extremos más alejados, pues su rango es $17-1=16$, frente al rango $9$ de A. Para comparar con cuidado conviene mirar tanto la caja como los bigotes; una sola medida no cuenta toda la historia.

## Errores frecuentes

### Calcular cuartiles con los datos desordenados

Los cuartiles describen posiciones. Si no ordenas, «el dato central» no tiene significado estadístico.

### Confundir $Q_1$ con el dato mínimo

$Q_1$ no es el primer dato: marca aproximadamente el 25 % de la lista. En el ejemplo, el mínimo es $4$ y $Q_1$ es $6$.

### Olvidar que $Q_2$ es la mediana

No hace falta hacer dos cálculos distintos. El segundo cuartil y la mediana son el mismo punto de corte.

### Decir que la caja contiene todos los datos

La caja contiene el 50 % central, no el 100 %. Los bigotes muestran lo que queda hacia el mínimo y el máximo.

### Confundir rango y recorrido intercuartílico

El rango va de mínimo a máximo. El RIC va de $Q_1$ a $Q_3$. El primero mira toda la amplitud; el segundo, la zona central.

## Ejercicios para practicar

### 1. Rango

Las temperaturas máximas de una semana fueron:

$$
18,21,19,23,20,22,17.
$$

Calcula el rango.

### 2. Cuartiles en una lista de diez datos

Ordena y calcula $Q_1$, $Q_2$ y $Q_3$ de:

$$
14,8,10,12,6,11,7,9,13,5.
$$

### 3. Recorrido intercuartílico

En un grupo se ha calculado $Q_1=18$ y $Q_3=27$. Halla el RIC e interpreta el resultado.

### 4. Leer un resumen de cinco números

Un diagrama de caja tiene mínimo $2$, $Q_1=5$, mediana $7$, $Q_3=9$ y máximo $14$. Indica el rango y el RIC.

### 5. Elegir la afirmación correcta

Si un grupo tiene $Q_1=10$ y $Q_3=18$, ¿cuál es correcta?

- A. Todos los datos están entre 10 y 18.
- B. El 50 % central de los datos está entre 10 y 18.
- C. La media vale 14.

## Soluciones razonadas

### Solución 1

El mínimo es $17$ y el máximo es $23$. Luego:

$$
\\text{rango}=23-17=6.
$$

Las temperaturas se extienden seis grados entre los extremos de la semana.

### Solución 2

La lista ordenada es:

$$
5,6,7,8,9,10,11,12,13,14.
$$

Los dos valores centrales son $9$ y $10$, por lo que:

$$
Q_2=9{,}5.
$$

Las mitades son $5,6,7,8,9$ y $10,11,12,13,14$. Sus centros son $7$ y $12$. Por tanto:

$$
Q_1=7,qquad Q_2=9{,}5,qquad Q_3=12.
$$

### Solución 3

$$
RIC=27-18=9.
$$

El 50 % central de los datos ocupa un intervalo de nueve unidades, desde $18$ hasta $27$.

### Solución 4

$$
\\text{rango}=14-2=12
$$

$$
RIC=9-5=4.
$$

El conjunto completo se extiende doce unidades, mientras que la mitad central se concentra en una amplitud de cuatro.

### Solución 5

La respuesta correcta es la B. $Q_1$ y $Q_3$ delimitan la mitad central de los datos. No permiten saber que todos estén en ese intervalo ni calculan por sí solos la media.

## Resumen para estudiar

Ordena antes de localizar posiciones. El rango es máximo menos mínimo; los cuartiles sitúan el 25 %, 50 % y 75 % de la lista; el RIC es $Q_3-Q_1$. En un diagrama de caja, los extremos y los bigotes muestran el recorrido total, mientras que la caja muestra el 50 % central.

Si aún no dominas las medidas básicas, empieza por la guía de [media, mediana, moda y frecuencias](/blog/estadistica-descriptiva-eso-media-mediana-moda/) y vuelve después a estos ejercicios. Para crear una rutina de práctica que no dependa de memorizar pasos, puede ayudarte la guía de [cómo estudiar matemáticas sin memorizar](/blog/como-estudiar-matematicas-sin-memorizar/).

Si necesitas practicar Estadística o Matemáticas de ESO con ejercicios de tu temario, puedes consultar las [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/).
`,V=`---
title: "Estadística descriptiva en ESO: media, mediana, moda y frecuencias"
date: "2026-09-08"
updated: "2026-09-08"
description: "Aprende estadística descriptiva para ESO: frecuencia absoluta y relativa, media, mediana y moda con tablas, diagramas y ejercicios resueltos."
tag: "ESO"
category: "Estadística"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "estadistica-descriptiva-eso-cuartiles-rango-diagrama-caja,como-estudiar-matematicas-sin-memorizar,como-aprobar-estadistica-psicologia-sin-base-matematica"
image: "/assets/latex/frecuencias-absoluta-relativa-eso.svg"
---

La estadística descriptiva sirve para ordenar datos y responder preguntas sencillas: ¿cuál es el valor más frecuente?, ¿qué resultado representa mejor al grupo?, ¿qué parte de la clase ha elegido cada opción? Para hacerlo bien no basta con aplicar una fórmula: primero hay que saber qué datos tenemos y qué información queremos resumir.

En esta guía aprenderás a construir una tabla de frecuencias y a calcular e interpretar frecuencia absoluta, frecuencia relativa, media, mediana y moda. Todos los ejemplos usan datos pequeños para que puedas comprobar cada paso.

## Antes de calcular: datos y variable

Una **variable estadística** es la característica que observamos. Por ejemplo:

- número de mascotas de cada alumno;
- minutos que tarda cada persona en llegar al instituto;
- color de mochila elegido;
- puntuación de un examen.

Los resultados que obtiene cada persona son los **datos**. Si preguntamos a catorce estudiantes cuántas mascotas tienen, un posible listado sería:

$$
0,\\ 1,\\ 2,\\ 1,\\ 0,\\ 3,\\ 1,\\ 2,\\ 1,\\ 0,\\ 2,\\ 1,\\ 3,\\ 0.
$$

El listado sin ordenar contiene toda la información, pero cuesta responder de un vistazo. La estadística descriptiva la organiza sin inventar ni alterar ningún dato.

No todas las variables admiten las mismas operaciones. El número de mascotas es cuantitativo: podemos ordenar, sumar y calcular la media. El color de una mochila es cualitativo: podemos contar cuántas veces aparece cada color y hallar la moda, pero no tiene sentido sumar «rojo + azul» ni calcular una media de colores.

## Frecuencia absoluta: cuántas veces aparece un valor

La **frecuencia absoluta**, que escribiremos $f_i$, es el número de veces que aparece un valor.

Ordenemos los datos del ejemplo. Hay cuatro estudiantes con cero mascotas, cinco con una, tres con dos y dos con tres. El número total de alumnos es

$$
n=4+5+3+2=14.
$$

| Número de mascotas $x_i$ | Frecuencia absoluta $f_i$ |
|---:|---:|
| 0 | 4 |
| 1 | 5 |
| 2 | 3 |
| 3 | 2 |
| **Total** | **14** |

La suma de las frecuencias absolutas debe coincidir siempre con el número total de datos. Es la primera comprobación que conviene hacer antes de seguir.

Una frecuencia absoluta responde a preguntas del tipo «¿cuántos?». En este caso: cinco estudiantes tienen una mascota.

## Frecuencia relativa: qué parte del total representa

La **frecuencia relativa**, $h_i$, compara cada frecuencia absoluta con el total:

$$
h_i=\\frac{f_i}{n}.
$$

Para expresarla como porcentaje, multiplicamos por cien:

$$
\\text{porcentaje}=h_i\\cdot100.
$$

Calculamos la tabla completa:

| Mascotas $x_i$ | $f_i$ | Frecuencia relativa $h_i=f_i/14$ | Porcentaje |
|---:|---:|---:|---:|
| 0 | 4 | $4/14\\approx0{,}286$ | $28{,}6\\%$ |
| 1 | 5 | $5/14\\approx0{,}357$ | $35{,}7\\%$ |
| 2 | 3 | $3/14\\approx0{,}214$ | $21{,}4\\%$ |
| 3 | 2 | $2/14\\approx0{,}143$ | $14{,}3\\%$ |
| **Total** | **14** | **1** | **100 %** |

La frecuencia relativa responde a «¿qué parte?» o «¿qué porcentaje?». Decir que la frecuencia relativa de una mascota es $0{,}357$ significa que aproximadamente el $35{,}7\\%$ del grupo tiene una mascota.

Por el redondeo, los porcentajes de una tabla pueden sumar $99{,}9\\%$ o $100{,}1\\%$. No es un error si cada porcentaje se ha redondeado por separado; la suma exacta de las frecuencias relativas antes de redondear debe ser uno.

![Diagrama de barras de la frecuencia absoluta y porcentaje relativo para cero, una, dos y tres mascotas en un grupo de catorce estudiantes](/assets/latex/frecuencias-absoluta-relativa-eso.svg)

El diagrama de barras permite comparar de inmediato las frecuencias absolutas: la barra de una mascota es la más alta. Los porcentajes escritos sobre las barras dan la misma información en relación con el total. No confundas altura de la barra con porcentaje si el eje vertical está rotulado como frecuencia absoluta.

## Cómo elegir un gráfico sencillo

Para valores o categorías separados —colores, número de mascotas, deporte favorito— el diagrama de barras es claro porque compara alturas. Debe cumplir tres reglas:

1. Cada barra representa un valor o categoría.
2. Las barras tienen la misma anchura y dejan espacio entre sí.
3. El eje vertical empieza en cero cuando se comparan frecuencias, para no exagerar diferencias.

Un gráfico de sectores también puede mostrar porcentajes de un total, pero es menos preciso para comparar cantidades cercanas. Si dos sectores son parecidos, suele ser más fácil distinguir sus alturas en un diagrama de barras.

Cuando la variable es cuantitativa y se han agrupado datos en intervalos, se usa un histograma. A diferencia del diagrama de barras, las columnas del histograma se tocan porque los intervalos representan una escala continua.

## La media: repartir el total por igual

La **media aritmética** se obtiene sumando todos los datos y dividiendo entre su número:

$$
\\bar x=\\frac{x_1+x_2+\\cdots+x_n}{n}.
$$

La idea es imaginar que repartimos el total por igual entre todos. Con la tabla de frecuencias es más rápido multiplicar cada valor por las veces que aparece:

$$
\\bar x=\\frac{\\sum x_i f_i}{n}.
$$

Para las mascotas:

$$
\\bar x=\\frac{0\\cdot4+1\\cdot5+2\\cdot3+3\\cdot2}{14}
=\\frac{17}{14}\\approx1{,}21.
$$

La media es aproximadamente $1{,}21$ mascotas por estudiante. Nadie necesita tener exactamente $1{,}21$ mascotas: la media es un resumen del grupo, no un dato que deba aparecer en la lista.

### Comprobación de la media

El total de mascotas es $17$. Si cada uno de los catorce estudiantes tuviera exactamente la media, el total sería aproximadamente

$$
14\\cdot1{,}21\\approx16{,}94,
$$

muy cerca de $17$; la pequeña diferencia procede de haber redondeado $1{,}214285\\ldots$ a dos decimales. Si usamos la fracción exacta $17/14$, recuperamos exactamente el total.

La media utiliza todos los valores, lo que es una ventaja, pero también hace que los datos muy alejados influyan mucho en ella.

## La mediana: el dato central una vez ordenado

La **mediana** es el valor que deja la mitad de los datos a un lado y la otra mitad al otro, después de ordenarlos de menor a mayor.

Los catorce datos ordenados son:

$$
0,0,0,0,1,1,1,1,1,2,2,2,3,3.
$$

Como hay un número par de datos, los dos valores centrales ocupan las posiciones

$$
\\frac n2=7
\\qquad\\text{y}\\qquad
\\frac n2+1=8.
$$

El séptimo y el octavo valor son ambos $1$. Por tanto,

$$
\\operatorname{Mediana}=\\frac{1+1}{2}=1.
$$

La regla general es:

- Si el número de datos es impar, la mediana es el dato que ocupa la posición $(n+1)/2$.
- Si es par, se calcula la media de los dos datos centrales.

La mediana exige ordenar. Hallar «el dato que está en medio» en el listado original no sirve, porque el orden en que se recogieron los datos no tiene importancia.

## La moda: el valor más frecuente

La **moda** es el valor con mayor frecuencia absoluta. En la tabla de mascotas, la frecuencia más alta es $5$, correspondiente a una mascota. Luego:

$$
\\operatorname{Moda}=1.
$$

La moda es la única de estas tres medidas que puede usarse con variables cualitativas. Si en una clase el color de mochila más repetido es azul, azul es la moda, aunque no podamos calcular una media o una mediana de colores.

Una distribución puede tener:

- una moda: **unimodal**;
- dos modas: **bimodal**;
- varias modas;
- ninguna moda clara si todos los valores aparecen el mismo número de veces.

Por ejemplo, en los datos $1,1,2,2,3$ hay dos modas: $1$ y $2$. No es correcto elegir una solo porque aparece antes.

![Diagrama de puntos ordenado para catorce estudiantes: la barra de una mascota marca la moda, las posiciones séptima y octava marcan la mediana y una línea discontinua señala la media aproximada de una coma veintiuna mascotas](/assets/latex/media-mediana-moda-eso.svg)

En este ejemplo coinciden mediana y moda, pero no tienen por qué coincidir siempre. La línea discontinua de la media queda algo a la derecha de uno porque los valores dos y tres empujan el promedio hacia arriba.

## Media, mediana y moda: qué cuenta cada una

Las tres medidas intentan resumir una distribución, pero no responden exactamente a la misma pregunta.

| Medida | Qué indica | Cuándo resulta especialmente útil |
|---|---|---|
| Media | El reparto equilibrado del total | Datos numéricos sin valores extremos muy influyentes |
| Mediana | El valor central ordenado | Datos con valores extremos o distribuciones muy desiguales |
| Moda | El valor más repetido | Categorías o cuando interesa conocer la opción habitual |

No se trata de elegir una medida «mejor» para todos los casos. Debe elegirse la que describa honestamente los datos.

## Ejemplo completo: cuando la media puede engañar

Ocho estudiantes tardan estos minutos en llegar al instituto:

$$
8,9,10,11,12,13,14,60.
$$

La media es

$$
\\bar x=\\frac{8+9+10+11+12+13+14+60}{8}
=\\frac{137}{8}=17{,}125.
$$

Sin embargo, siete de las ocho personas tardan entre ocho y catorce minutos. El valor $60$ es excepcional y arrastra la media hacia arriba.

Para hallar la mediana, los datos ya están ordenados. Al haber ocho, miramos las posiciones cuarta y quinta:

$$
\\operatorname{Mediana}=\\frac{11+12}{2}=11{,}5.
$$

En este caso, decir que el tiempo habitual de desplazamiento ronda los $11{,}5$ minutos describe mejor a la mayoría que decir $17{,}125$ minutos. La media no está mal calculada; simplemente responde a otra idea: incluye por completo el trayecto extraordinario de sesenta minutos.

No hay moda porque cada tiempo aparece una sola vez.

## Frecuencias acumuladas: para ubicar posiciones

La **frecuencia acumulada** suma las frecuencias hasta un valor determinado. Para las mascotas:

| Mascotas | $f_i$ | Frecuencia acumulada |
|---:|---:|---:|
| 0 | 4 | 4 |
| 1 | 5 | 9 |
| 2 | 3 | 12 |
| 3 | 2 | 14 |

La tabla indica que las posiciones de la $1$ a la $4$ corresponden a cero mascotas; de la $5$ a la $9$, a una mascota. Por eso las posiciones séptima y octava de la mediana valen una.

Las frecuencias acumuladas no sustituyen a las frecuencias absolutas: responden a «¿cuántos tienen este valor o uno menor?». Son especialmente útiles al localizar medianas y cuartiles en tablas grandes.

## Método seguro para resolver un ejercicio

Cuando aparezca una lista de datos, sigue este orden:

1. Identifica qué se está midiendo y si son datos numéricos o categorías.
2. Ordena los valores o construye una tabla de frecuencias.
3. Comprueba que la suma de $f_i$ es el número total de datos.
4. Calcula $h_i=f_i/n$ y verifica que las frecuencias relativas suman uno.
5. Para la media, calcula $\\sum x_if_i$ antes de dividir entre $n$.
6. Para la mediana, localiza la posición central en los datos ordenados.
7. Para la moda, busca la frecuencia absoluta mayor.
8. Interpreta el resultado con una frase completa y con sus unidades.

Es preferible escribir «la media es $2{,}3$ libros por alumno» a dejar solamente «$2{,}3$». Las unidades ayudan a comprobar qué has calculado.

## Errores frecuentes

### Dividir entre el número de valores distintos

En la media se divide entre el número total de datos, no entre el número de filas de una tabla. En el ejemplo hay cuatro valores posibles, pero catorce estudiantes.

### Olvidar multiplicar por la frecuencia

En una tabla, la suma para la media es $\\sum x_if_i$. Usar solo $0+1+2+3$ ignora que algunos valores aparecen más veces que otros.

### Calcular la mediana sin ordenar

La mediana depende de la posición, y las posiciones solo tienen sentido en una lista ordenada.

### Confundir frecuencia relativa con porcentaje

$0{,}25$ y $25\\%$ expresan la misma proporción en formatos diferentes. $0{,}25\\%$, en cambio, equivale a $0{,}0025$ y es mucho menor.

### Llamar moda al valor más grande

La moda no es el número mayor: es el que aparece más veces. En $1,1,1,8$, la moda es $1$, aunque $8$ sea el valor máximo.

### Redondear demasiado pronto

Conserva fracciones o decimales suficientes durante el cálculo y redondea al final. Así evitas que pequeñas aproximaciones alteren un porcentaje total o una media.

## Ejercicios para practicar

### 1. Tabla de frecuencias

Las horas semanales de lectura de diez alumnos son:

$$
0,1,2,1,3,2,1,0,2,1.
$$

Construye una tabla con frecuencia absoluta, relativa y porcentaje.

### 2. Media con tabla

Una encuesta obtiene esta tabla de hermanos por alumno:

| Hermanos | 0 | 1 | 2 | 3 |
|---:|---:|---:|---:|---:|
| Frecuencia | 3 | 8 | 6 | 3 |

Calcula la media.

### 3. Mediana impar

Halla la mediana de

$$
4,7,5,6,4,8,7.
$$

### 4. Mediana par

Halla la mediana de

$$
12,8,10,9,11,7.
$$

### 5. Moda o modas

Indica la moda de $2,3,2,4,5,3,2,3$.

### 6. Elegir una medida

Los precios de siete cuadernos son $2,2,2,3,3,3,20$ euros. ¿Qué medida describe mejor el precio habitual: media, mediana o moda? Justifica.

### 7. Interpretar una frecuencia relativa

En un grupo de $30$ alumnos, la frecuencia relativa de quienes van andando al centro es $0{,}4$. ¿Cuántos alumnos son?

### 8. Comprobar una tabla

Una tabla presenta frecuencias relativas $0{,}18$, $0{,}42$, $0{,}27$ y $0{,}15$. ¿Puede ser correcta? Explica por qué.

## Soluciones razonadas

### Solución 1

Los valores posibles son $0$, $1$, $2$ y $3$. Sus frecuencias son $2$, $4$, $3$ y $1$, respectivamente. Como $n=10$, las frecuencias relativas son $0{,}2$, $0{,}4$, $0{,}3$ y $0{,}1$; los porcentajes son $20\\%$, $40\\%$, $30\\%$ y $10\\%$. Las absolutas suman $10$ y las relativas suman $1$, así que la tabla pasa las dos comprobaciones.

### Solución 2

El total de alumnos es

$$
n=3+8+6+3=20.
$$

El total de hermanos contado con frecuencias es

$$
0\\cdot3+1\\cdot8+2\\cdot6+3\\cdot3=29.
$$

Luego la media es

$$
\\bar x=\\frac{29}{20}=1{,}45.
$$

El grupo tiene una media de $1{,}45$ hermanos por alumno.

### Solución 3

Ordenamos: $4,4,5,6,7,7,8$. Hay siete datos, así que la posición central es la cuarta. La mediana es $6$.

### Solución 4

Ordenamos: $7,8,9,10,11,12$. Hay seis datos; los centrales son el tercero y el cuarto. Por tanto,

$$
\\operatorname{Mediana}=\\frac{9+10}{2}=9{,}5.
$$

### Solución 5

Los valores $2$ y $3$ aparecen tres veces cada uno. La distribución es bimodal: sus modas son $2$ y $3$.

### Solución 6

La media es $35/7=5$ euros, pero queda muy influida por el cuaderno de $20$ euros. La mediana es $3$ y la moda también es $3$. Para describir el precio habitual, $3$ euros es más representativo que la media de $5$ euros.

### Solución 7

Multiplicamos la proporción por el total:

$$
0{,}4\\cdot30=12.
$$

Van andando $12$ alumnos.

### Solución 8

No puede ser correcta porque

$$
0{,}18+0{,}42+0{,}27+0{,}15=1{,}02.
$$

Las frecuencias relativas exactas deben sumar uno. Podría tratarse de un problema de redondeo si se indicara que los números son aproximados, pero la diferencia de $0{,}02$ es demasiado grande para una tabla sencilla con dos decimales sin una explicación.

## Resumen para estudiar

La frecuencia absoluta cuenta; la relativa compara con el total. La media reparte el total por igual; la mediana localiza el centro de los datos ordenados; la moda identifica el valor más repetido. Antes de operar, organiza los datos y al terminar comprueba sumas, posiciones y unidades.

Cuando domines estas medidas, continúa con [rango, cuartiles y diagrama de caja en ESO](/blog/estadistica-descriptiva-eso-cuartiles-rango-diagrama-caja/): aprenderás a describir cuánto se dispersan los datos y dónde se concentra la mitad central.

Para afianzar este método, no memorices una tabla modelo: cambia los datos de un ejercicio, vuelve a ordenar y explica en voz alta qué representa cada resultado. La guía sobre [cómo estudiar matemáticas sin memorizar fórmulas](/blog/como-estudiar-matematicas-sin-memorizar/) puede ayudarte a convertir esa práctica en rutina.

Si necesitas reforzar Estadística o Matemáticas de ESO con ejercicios de tu propio temario, puedes consultar las [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/).
`,W=`---
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
`,J=`---
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
`,K=`---
title: "Estudio completo de una función paso a paso"
date: "2026-09-02"
updated: "2026-09-02"
description: "Aprende a estudiar una función: dominio, cortes, límites, asíntotas, monotonía, extremos, concavidad y representación gráfica."
tag: "Cálculo"
category: "Matemáticas universitarias"
relatedService: "/clases-particulares/calculo-universitario/"
relatedPosts: "como-resolver-limites-indeterminaciones-ejercicios,continuidad-derivabilidad-diferencias-problemas,que-son-las-derivadas-y-para-que-se-utilizan"
image: "/favicon.svg"
---

Estudiar una función no consiste en encadenar cálculos sin criterio. El objetivo es reunir información algebraica y analítica suficiente para entender su comportamiento y dibujar una gráfica coherente. Si sigues siempre el mismo orden, cada resultado prepara el siguiente y es mucho más difícil olvidar un caso importante.

En esta guía encontrarás un procedimiento completo, dos estudios desarrollados y una colección de ejercicios con solución. Es el tipo de esquema que conviene dominar para Cálculo I, Matemáticas II de Bachillerato y asignaturas cuantitativas de primeros cursos universitarios.

## Qué significa estudiar una función

Un estudio completo responde, como mínimo, a estas preguntas:

1. ¿Para qué valores de $x$ existe la función?
2. ¿Dónde corta a los ejes y qué signo tiene?
3. ¿Es continua? ¿Presenta saltos, huecos o infinitos?
4. ¿Qué ocurre cerca de los extremos del dominio y cuando $x\\to\\pm\\infty$?
5. ¿Dónde crece, decrece y alcanza extremos relativos?
6. ¿Dónde es cóncava o convexa y dónde cambia de curvatura?
7. ¿Qué asíntotas orientan la gráfica?
8. ¿Cómo se combinan todos esos datos en un esbozo final?

No todos los apartados aportan lo mismo en todas las funciones. Por ejemplo, buscar periodicidad en un polinomio suele ser inútil, mientras que en una función trigonométrica es esencial. El método debe ser sistemático, pero no mecánico.

## Orden recomendado para analizar una función

### 1. Dominio

El dominio es el conjunto de valores para los que la expresión tiene sentido. Debe calcularse antes que nada, porque condiciona límites, continuidad, derivadas e intervalos de crecimiento.

Las restricciones más frecuentes son:

- denominadores distintos de cero;
- radicandos de raíces pares mayores o iguales que cero;
- argumentos de logaritmos estrictamente positivos;
- argumentos válidos en funciones trigonométricas inversas.

Por ejemplo, para

$$
f(x)=\\frac{\\sqrt{x+2}}{x-1},
$$

se exige $x+2\\ge 0$ y $x\\ne1$. Por tanto,

$$
\\operatorname{Dom}(f)=[-2,1)\\cup(1,+\\infty).
$$

Un error habitual es resolver cada restricción y unir sus soluciones. Cuando deben cumplirse simultáneamente, hay que tomar la intersección.

### 2. Simetrías y periodicidad

Calcula $f(-x)$ siempre que el dominio sea simétrico respecto de cero:

- si $f(-x)=f(x)$, la función es par y su gráfica es simétrica respecto del eje $y$;
- si $f(-x)=-f(x)$, es impar y tiene simetría respecto del origen;
- si no se cumple ninguna igualdad, no se deduce una simetría de este tipo.

Por ejemplo, $f(x)=x^4-2x^2$ es par y $g(x)=x^3-3x$ es impar. Basta estudiar con detalle una mitad de la gráfica y reflejarla, aunque conviene conservar los intervalos completos en la tabla de signos.

En funciones trigonométricas busca además un periodo $T>0$ tal que $f(x+T)=f(x)$. La periodicidad permite reducir el estudio a un intervalo fundamental.

### 3. Cortes con los ejes y signo

El corte con el eje vertical se obtiene evaluando $f(0)$, si $0$ pertenece al dominio. Los cortes con el eje horizontal son las soluciones reales de

$$
f(x)=0.
$$

En una función racional, los ceros proceden del numerador, pero hay que descartar los valores que anulan también el denominador. Después, una tabla de signos indica dónde la gráfica está por encima o por debajo del eje $x$.

Ejemplo: si

$$
h(x)=\\frac{(x-2)(x+1)}{x-3},
$$

los puntos que separan intervalos son $-1$, $2$ y $3$. Probando un valor en cada intervalo se obtiene el signo de $h$ sin desarrollar los productos.

### 4. Continuidad y discontinuidades

Las funciones elementales son continuas en los puntos donde están definidas. Por eso, en muchas expresiones basta localizar los valores excluidos del dominio y estudiar sus límites laterales.

En una función definida a trozos también debes comparar:

$$
\\lim_{x\\to a^-}f(x),\\qquad
\\lim_{x\\to a^+}f(x),\\qquad
f(a).
$$

La función es continua en $a$ solo si los dos límites laterales existen, coinciden y su valor común es $f(a)$. Si quieres repasar esta relación con detalle, consulta la guía sobre [continuidad y derivabilidad](/blog/continuidad-derivabilidad-diferencias-problemas/).

### 5. Límites y asíntotas

Estudia los límites en los extremos de cada intervalo del dominio y en $\\pm\\infty$. Esta información permite detectar tres clases habituales de asíntotas.

Hay una asíntota vertical $x=a$ si al menos uno de los límites laterales es infinito:

$$
\\lim_{x\\to a^-}f(x)=\\pm\\infty
\\quad\\text{o}\\quad
\\lim_{x\\to a^+}f(x)=\\pm\\infty.
$$

Hay una asíntota horizontal $y=L$ si

$$
\\lim_{x\\to+\\infty}f(x)=L
\\quad\\text{o}\\quad
\\lim_{x\\to-\\infty}f(x)=L.
$$

Los dos extremos pueden dar horizontales distintas. Finalmente, existe una asíntota oblicua $y=mx+n$, con $m\\ne0$, si

$$
m=\\lim_{x\\to\\pm\\infty}\\frac{f(x)}{x},
\\qquad
n=\\lim_{x\\to\\pm\\infty}\\bigl(f(x)-mx\\bigr)
$$

son finitos. En funciones racionales también puede obtenerse mediante división de polinomios. La guía de [límites e indeterminaciones](/blog/como-resolver-limites-indeterminaciones-ejercicios/) desarrolla las técnicas necesarias para este paso.

### 6. Primera derivada: monotonía y extremos

Calcula $f'(x)$ y localiza los puntos críticos: valores interiores del dominio donde $f'(x)=0$ o donde la derivada no existe. Después estudia el signo de $f'$ en los intervalos determinados por esos puntos y por las discontinuidades.

- Si $f'(x)>0$, la función crece.
- Si $f'(x)<0$, la función decrece.
- Un cambio de $+$ a $-$ produce un máximo relativo.
- Un cambio de $-$ a $+$ produce un mínimo relativo.

Que $f'(a)=0$ no garantiza por sí solo un extremo. En $f(x)=x^3$, la derivada se anula en cero, pero la función sigue creciendo a ambos lados. Encontrarás el significado geométrico de este cálculo en [qué son las derivadas](/blog/que-son-las-derivadas-y-para-que-se-utilizan/).

### 7. Segunda derivada: curvatura e inflexión

La convención verbal puede variar entre manuales, pero el signo matemático no cambia:

- si $f''(x)>0$, las pendientes aumentan y la gráfica es convexa o cóncava hacia arriba;
- si $f''(x)<0$, las pendientes disminuyen y la gráfica es cóncava hacia abajo.

Los candidatos a punto de inflexión se obtienen resolviendo $f''(x)=0$ y añadiendo los puntos donde $f''$ no existe pero $f$ sí. Para confirmar una inflexión debe cambiar el signo de $f''$ y el punto ha de pertenecer a la gráfica.

Por eso una asíntota vertical nunca es un punto de inflexión, aunque la segunda derivada cambie de signo al cruzar el valor excluido.

### 8. Recorrido y representación final

El recorrido es el conjunto de valores que toma $f$. A veces se deduce de la continuidad, los límites y los extremos. En otros casos conviene resolver $y=f(x)$ respecto de $x$ y exigir que exista una solución real.

Para el esbozo final, marca primero cortes, extremos e inflexiones; dibuja después las asíntotas con línea discontinua; finalmente conecta la información respetando monotonía, curvatura y límites. Una tabla conjunta evita contradicciones:

| Intervalo | Signo de $f$ | Signo de $f'$ | Signo de $f''$ | Comportamiento |
|---|---:|---:|---:|---|
| $I_1$ | $-$ | $+$ | $-$ | Crece bajo el eje y se curva hacia abajo |
| $I_2$ | $+$ | $-$ | $+$ | Decrece sobre el eje y se curva hacia arriba |

No dibujes primero para justificar después los cálculos: la gráfica debe ser la consecuencia del estudio.

## Ejemplo 1: estudio completo de una función racional

Analicemos

$$
f(x)=\\frac{x^2+1}{x-1}.
$$

### Dominio, cortes y signo

El denominador se anula en $x=1$, luego

$$
\\operatorname{Dom}(f)=\\mathbb{R}\\setminus\\{1\\}.
$$

El numerador $x^2+1$ es siempre positivo, así que no hay cortes con el eje $x$. Como $f(0)=-1$, el corte vertical es $(0,-1)$. Además, el signo depende solo de $x-1$: $f(x)<0$ si $x<1$ y $f(x)>0$ si $x>1$.

La función no es par ni impar.

### Límites y asíntotas

Al acercarnos a uno, el numerador tiende a $2>0$ y el denominador cambia de signo:

$$
\\lim_{x\\to1^-}f(x)=-\\infty,
\\qquad
\\lim_{x\\to1^+}f(x)=+\\infty.
$$

Por tanto, $x=1$ es una asíntota vertical. La división de polinomios da

$$
f(x)=x+1+\\frac{2}{x-1}.
$$

Como el último término tiende a cero cuando $x\\to\\pm\\infty$, la asíntota oblicua es $y=x+1$. No hay asíntota horizontal.

### Crecimiento y extremos

Derivamos la expresión dividida:

$$
f'(x)=1-\\frac{2}{(x-1)^2}
=\\frac{(x-1)^2-2}{(x-1)^2}.
$$

Los puntos estacionarios son

$$
x=1-\\sqrt2,
\\qquad
x=1+\\sqrt2.
$$

El denominador de $f'$ es positivo en el dominio. El numerador es positivo cuando $|x-1|>\\sqrt2$ y negativo cuando $|x-1|<\\sqrt2$. Así:

- crece en $(-\\infty,1-\\sqrt2)$ y $(1+\\sqrt2,+\\infty)$;
- decrece en $(1-\\sqrt2,1)$ y $(1,1+\\sqrt2)$.

En $x=1-\\sqrt2$ hay un máximo relativo, cuyo valor es

$$
f(1-\\sqrt2)=2-2\\sqrt2.
$$

En $x=1+\\sqrt2$ hay un mínimo relativo, con

$$
f(1+\\sqrt2)=2+2\\sqrt2.
$$

### Curvatura y recorrido

La segunda derivada es

$$
f''(x)=\\frac{4}{(x-1)^3}.
$$

Es negativa en $(-\\infty,1)$ y positiva en $(1,+\\infty)$. La curvatura cambia al atravesar $x=1$, pero ese valor no pertenece al dominio: no existe punto de inflexión.

Los extremos de cada rama y sus límites muestran que el recorrido es

$$
(-\\infty,2-2\\sqrt2]\\cup[2+2\\sqrt2,+\\infty).
$$

También se puede comprobar imponiendo que la ecuación $y=(x^2+1)/(x-1)$ tenga soluciones reales. Al reorganizar aparece una cuadrática en $x$ cuyo discriminante exige $y^2-4y-4\\ge0$, exactamente la condición anterior.

La gráfica final tiene dos ramas separadas por $x=1$, se aproxima a $y=x+1$ en ambos infinitos y nunca corta el eje horizontal.

## Ejemplo 2: estudio de una función polinómica

Sea

$$
g(x)=x^3-3x.
$$

Su dominio es $\\mathbb R$ y es impar porque $g(-x)=-g(x)$. Los ceros satisfacen

$$
x(x^2-3)=0,
$$

de modo que corta el eje $x$ en $-\\sqrt3$, $0$ y $\\sqrt3$. Al ser un polinomio cúbico,

$$
\\lim_{x\\to-\\infty}g(x)=-\\infty,
\\qquad
\\lim_{x\\to+\\infty}g(x)=+\\infty,
$$

y no tiene asíntotas.

La primera derivada es

$$
g'(x)=3x^2-3=3(x-1)(x+1).
$$

Es positiva en $(-\\infty,-1)$, negativa en $(-1,1)$ y positiva en $(1,+\\infty)$. Por tanto, hay un máximo relativo en $(-1,2)$ y un mínimo relativo en $(1,-2)$.

Como

$$
g''(x)=6x,
$$

la gráfica es cóncava hacia abajo para $x<0$ y hacia arriba para $x>0$. En $(0,0)$ existe un punto de inflexión. La continuidad y los límites infinitos permiten concluir que su recorrido es todo $\\mathbb R$.

Este ejemplo muestra por qué conviene cruzar los datos: la simetría impar relaciona los dos extremos y el punto de inflexión coincide con el centro de simetría.

## Ejemplo 3: valor absoluto y puntos no derivables

Considera


$$
p(x)=|x^2-4|.
$$

El dominio es $\\mathbb R$ y la función es par. Para analizarla sin cometer errores, escribimos el valor absoluto por tramos:

$$
p(x)=
\\begin{cases}
x^2-4, & x\\le-2\\ \\text{o}\\ x\\ge2,\\\\
4-x^2, & -2<x<2.
\\end{cases}
$$

Los cortes con el eje horizontal son $x=\\pm2$ y el corte vertical es $(0,4)$. La función nunca es negativa. No tiene asíntotas: cuando $|x|\\to\\infty$, domina el término $x^2$.

La derivada en los intervalos abiertos es

$$
p'(x)=
\\begin{cases}
2x, & x<-2\\ \\text{o}\\ x>2,\\\\
-2x, & -2<x<2.
\\end{cases}
$$

En $x=-2$, la pendiente lateral izquierda vale $-4$ y la derecha vale $4$; en $x=2$, las pendientes son $-4$ y $4$. La función es continua en ambos puntos, pero no derivable: aparecen dos esquinas que son mínimos absolutos de valor cero. Además, $p$ decrece en $(-\\infty,-2)$, crece en $(-2,0)$, decrece en $(0,2)$ y crece en $(2,+\\infty)$. En $(0,4)$ hay un máximo relativo.

Dentro de $(-2,2)$, $p''=-2$; fuera, $p''=2$. La curvatura cambia al pasar por $\\pm2$, pero la gráfica tiene esquinas. Algunos temarios exigen derivabilidad o una tangente para hablar de inflexión y no los clasifican como tales; otros usan únicamente el cambio de concavidad. Conviene aplicar la definición fijada en la asignatura y justificar el cambio de signo. En cualquier caso, el ejemplo demuestra que un estudio completo debe incluir los puntos donde $f'$ no existe: limitarse a resolver $f'(x)=0$ haría perder los dos mínimos absolutos.

## Cómo comprobar que el esbozo es coherente

Una vez dibujada la gráfica, sométela a controles independientes. Cada corte anotado debe satisfacer la fórmula original. Cerca de una asíntota vertical, comprueba el signo de numerador y denominador a ambos lados. En un extremo, verifica que el valor pertenece al recorrido previsto y que el signo de $f'$ cambia como afirmas.

También puedes elegir un punto de prueba en cada intervalo y comparar el valor real con el dibujo. Si la gráfica aparece por encima del eje donde la tabla dice $f<0$, o se aleja de una asíntota cuando el límite afirma lo contrario, el esbozo contiene un fallo. Una calculadora gráfica resulta útil como comprobación final, pero no sustituye estas justificaciones porque puede ocultar huecos, escalas relevantes o ramas muy próximas a una asíntota.

## Errores frecuentes en un estudio de funciones

### Olvidar separar intervalos por discontinuidades

Una tabla de signos no puede atravesar un punto que no pertenece al dominio. Aunque la fórmula de $f'$ conserve el signo, los intervalos quedan separados por esa discontinuidad.

### Confundir un candidato con una conclusión

Las ecuaciones $f'(x)=0$ y $f''(x)=0$ solo generan candidatos. Debes comprobar cambios de signo o aplicar un criterio equivalente. Escribir «hay un mínimo porque la derivada vale cero» es una justificación incompleta.

### Afirmar que una asíntota no puede cortarse

La gráfica puede cortar una asíntota horizontal u oblicua. Una asíntota describe el comportamiento límite, no una barrera. La asíntota vertical sí corresponde a un valor donde la función no puede tomar un punto finito si el límite es infinito.

### Ignorar los límites laterales

En un punto excluido, el límite por la izquierda y el límite por la derecha pueden ser distintos. Especificar solo «el límite es infinito» puede ocultar que una rama baja a $-\\infty$ y la otra sube a $+\\infty$.

### Dibujar una curva incompatible con la segunda derivada

Una función puede crecer siendo cóncava hacia abajo o decrecer siendo cóncava hacia arriba. Monotonía y curvatura son propiedades distintas; ambas deben respetarse en el dibujo.

## Ejercicios propuestos

Intenta justificar cada apartado mediante una tabla, no solo con una gráfica de calculadora.

1. Estudia dominio, cortes, asíntotas y signo de $f(x)=\\dfrac{2x+1}{x-2}$.
2. Determina monotonía y extremos de $f(x)=x^4-4x^2$.
3. Estudia la curvatura y los puntos de inflexión de $f(x)=x^4-4x^3$.
4. Analiza completamente $f(x)=\\dfrac{x^2}{x+1}$.
5. Estudia $f(x)=\\ln x-x$ en su dominio.
6. Decide si $f(x)=\\dfrac{x}{x^2+1}$ es par, impar o ninguna de las dos, y halla sus extremos.
7. Halla el recorrido de $f(x)=x^2-4x+7$.
8. Explica por qué $f(x)=x^{1/3}$ no tiene un extremo en cero aunque su derivada no sea finita allí.

## Soluciones razonadas

### Ejercicio 1

El dominio es $\\mathbb R\\setminus\\{2\\}$. El corte vertical es $(0,-1/2)$ y el horizontal, $(-1/2,0)$. Hay asíntota vertical $x=2$. Como

$$
\\frac{2x+1}{x-2}=2+\\frac5{x-2},
$$

la asíntota horizontal es $y=2$. El signo es positivo en $(-\\infty,-1/2)$, negativo en $(-1/2,2)$ y positivo en $(2,+\\infty)$.

### Ejercicio 2

La derivada es $f'(x)=4x(x^2-2)$, con puntos críticos $-\\sqrt2$, $0$ y $\\sqrt2$. La función decrece en $(-\\infty,-\\sqrt2)$, crece en $(-\\sqrt2,0)$, decrece en $(0,\\sqrt2)$ y crece en $(\\sqrt2,+\\infty)$. Tiene mínimos absolutos en $(\\pm\\sqrt2,-4)$ y un máximo relativo en $(0,0)$.

### Ejercicio 3

Se obtiene

$$
f''(x)=12x^2-24x=12x(x-2).
$$

Es positiva en $(-\\infty,0)$ y $(2,+\\infty)$, y negativa en $(0,2)$. Hay puntos de inflexión en $(0,0)$ y $(2,-16)$.

### Ejercicio 4

El dominio es $\\mathbb R\\setminus\\{-1\\}$. La división

$$
\\frac{x^2}{x+1}=x-1+\\frac1{x+1}
$$

da la asíntota oblicua $y=x-1$ y la vertical $x=-1$. Como

$$
f'(x)=\\frac{x(x+2)}{(x+1)^2},
$$

crece en $(-\\infty,-2)$ y $(0,+\\infty)$, y decrece en $(-2,-1)$ y $(-1,0)$. Hay un máximo relativo en $(-2,-4)$ y un mínimo relativo en $(0,0)$.

### Ejercicio 5

El dominio es $(0,+\\infty)$. Como $f'(x)=1/x-1$, crece en $(0,1)$ y decrece en $(1,+\\infty)$. Su máximo absoluto es $f(1)=-1$. Además, $f''(x)=-1/x^2<0$, así que es cóncava hacia abajo en todo el dominio y no tiene inflexiones.

### Ejercicio 6

La función es impar. Su derivada es

$$
f'(x)=\\frac{1-x^2}{(x^2+1)^2}.
$$

Decrece en $(-\\infty,-1)$, crece en $(-1,1)$ y decrece en $(1,+\\infty)$. Tiene un mínimo en $(-1,-1/2)$ y un máximo en $(1,1/2)$.

### Ejercicio 7

Completando el cuadrado,

$$
x^2-4x+7=(x-2)^2+3.
$$

El mínimo absoluto es $3$, alcanzado en $x=2$, y no hay cota superior. El recorrido es $[3,+\\infty)$.

### Ejercicio 8

La función es estrictamente creciente a ambos lados de cero y también al atravesarlo. La tangente es vertical, pero no cambia la monotonía: cero no es máximo ni mínimo. Este caso recuerda que los puntos donde $f'$ no existe también deben analizarse, no clasificarse de forma automática.

## Plantilla rápida para un examen

Si tienes poco tiempo, usa esta lista de control:

1. Escribe el dominio y separa sus intervalos.
2. Comprueba simetría, cortes y signo.
3. Calcula límites laterales y en el infinito; anota asíntotas.
4. Halla $f'$, sus puntos críticos y una tabla de monotonía.
5. Evalúa los extremos en la función original.
6. Halla $f''$, estudia su signo y confirma inflexiones.
7. Deduce el recorrido cuando sea viable.
8. Dibuja al final y comprueba que respeta todos los datos.

Para aprender a enlazar estos pasos en problemas reales, en las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/) trabajamos el razonamiento, la presentación y la comprobación de cada resultado, no una plantilla memorizada sin contexto.
`,X=`---
title: Física y Química: cómo plantear problemas antes de calcular
date: 2026-05-23
updated: 2026-05-23
description: Un método común para problemas de Física y Química: datos, magnitudes, modelo, unidades y comprobación final.
tag: Ciencia
category: Física y Química
relatedService: /clases-particulares/fisica-ingenieria/
relatedPosts: mru-eso-movimiento-rectilineo-uniforme-ejercicios,mrua-eso-movimiento-rectilineo-uniformemente-acelerado-ejercicios,gravitacion-eso-ley-universal-peso-ejercicios
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

Para aplicar este método con contenidos de ESO, puedes practicar con las guías de [MRU](/blog/mru-eso-movimiento-rectilineo-uniforme-ejercicios/), [MRUA](/blog/mrua-eso-movimiento-rectilineo-uniformemente-acelerado-ejercicios/) y [gravitación](/blog/gravitacion-eso-ley-universal-peso-ejercicios/).

Si necesitas apoyo en problemas técnicos, revisa [Física para Bachillerato e Ingeniería](/clases-particulares/fisica-ingenieria/), [Química](/clases-particulares/quimica/) o [contacta](/contacto/) para organizar un plan.
`,Z=`---
title: "GCSE Chemistry: acids, bases and salts without guessing equations"
seoTitle: "GCSE Chemistry: acids, bases and salts step by step"
date: "2026-10-24"
updated: "2026-10-24"
description: "Learn acids, bases and salts for GCSE: pH, neutralisation, ionic equations, salt preparation and simple calculations."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-chemistry-equations-moles-revision-en,gcse-chemistry-electrolysis-electrode-products-en,gcse-chemistry-bonding-revision-en"
image: "/assets/latex/gcse-ph-neutralisation.svg"
language: "en"
translation: "gcse-chemistry-acids-bases-salts"
---

Acid and base questions become confusing when each reaction is memorised as a separate recipe. Most of the topic follows one idea: acids provide $\\mathrm{H^+}$ ions in solution and alkalis provide $\\mathrm{OH^-}$ ions.

> **Direct answer.** Neutralisation removes acidic and alkaline properties through $\\mathrm{H^++OH^-\\to H_2O}$. To prepare a salt, identify the acid supplying the anion and the metal, oxide, hydroxide or carbonate supplying the cation.

![pH scale and neutralisation between hydrogen and hydroxide ions](/assets/latex/gcse-ph-neutralisation.svg)

## Reading the pH scale

In the GCSE model:

- $pH<7$: acidic.
- $pH=7$: neutral.
- $pH>7$: alkaline.

A fall of one pH unit represents roughly ten times the hydrogen-ion concentration. pH 2 is therefore not merely “slightly” more acidic than pH 3.

## Four reaction patterns

$$
\\text{acid}+\\text{metal}\\to\\text{salt}+\\mathrm{H_2}
$$

$$
\\text{acid}+\\text{oxide or hydroxide}\\to\\text{salt}+\\mathrm{H_2O}
$$

$$
\\text{acid}+\\text{carbonate}\\to\\text{salt}+\\mathrm{H_2O}+\\mathrm{CO_2}
$$

The gas depends on the reactant: carbonates give carbon dioxide, while suitable metals give hydrogen.

## Naming the salt

- Hydrochloric acid $\\to$ chloride.
- Sulfuric acid $\\to$ sulfate.
- Nitric acid $\\to$ nitrate.

For example:

$$
\\mathrm{H_2SO_4+CuO\\to CuSO_4+H_2O}.
$$

The acid provides sulfate and copper oxide provides copper.

## Preparing a soluble salt

To make copper sulfate crystals:

1. Warm dilute sulfuric acid gently.
2. Add excess copper oxide until no more reacts.
3. Filter away the remaining solid.
4. Evaporate some water.
5. Cool to crystallise.
6. Dry the crystals.

The excess ensures all acid is used; filtration removes the insoluble excess.

## Quantitative example

For $25.0\\ \\mathrm{cm^3}$ of a $0.20\\ \\mathrm{mol\\,dm^{-3}}$ solution:

$$
n=cV=0.20\\times0.0250=5.0\\times10^{-3}\\ \\mathrm{mol}.
$$

Convert $\\mathrm{cm^3}$ to $\\mathrm{dm^3}$ by dividing by 1000.

## Indicators and end point

An indicator changes colour across a pH range; it does not neutralise the solution. In a titration, the observed end point should be close to the chemical equivalence point.

## Ionic equations and spectator ions

For hydrochloric acid reacting with sodium hydroxide:

$$
\\mathrm{HCl+NaOH\\to NaCl+H_2O},
$$

the $\\mathrm{Na^+}$ and $\\mathrm{Cl^-}$ ions remain unchanged. Removing them gives the net ionic equation:

$$
\\mathrm{H^+(aq)+OH^-(aq)\\to H_2O(l)}.
$$

State symbols help to show which species are actually dissolved. A spectator ion still matters when identifying the final salt, but it does not undergo the chemical change in neutralisation.

## Titration as an assessable procedure

Rinse the pipette with the solution it will measure and the burette with the solution it will contain. Record the initial meniscus reading at eye level, add only a few indicator drops to the flask and approach the end point one drop at a time. A rough trial locates the end point; further runs should produce concordant titres, commonly within $0.10$–$0.20\\ \\mathrm{cm^3}$ depending on the stated criterion.

The titre is final reading minus initial reading. Repeating a method without controlling the meniscus does not remove systematic error, and too much indicator can affect the result. A strong improvement names the change and explains why it increases precision.

## Common mistakes

- Writing water as a gas in neutralisation.
- Treating every base as an alkali: an alkali is a soluble base.
- Choosing the wrong acid for the required salt.
- Forgetting to filter off excess solid.
- Using $\\mathrm{cm^3}$ directly in $n=cV$.

Método Nebula's virtual campus links particles, chemical amounts, acids, salts and experimental methods through graded GCSE questions. The contact button opens a structured practice route.
`,Y=`---
title: "Química GCSE: ácidos, bases y sales con un método que evita ecuaciones al azar"
seoTitle: "Química GCSE: ácidos, bases y sales paso a paso"
date: "2026-10-24"
updated: "2026-10-24"
description: "Aprende ácidos, bases y sales en GCSE: pH, neutralización, ecuaciones iónicas, preparación de sales y cálculos sencillos."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-chemistry-equations-moles-revision,gcse-chemistry-electrolysis-electrode-products,gcse-chemistry-bonding-revision"
image: "/assets/latex/gcse-ph-neutralisation.svg"
language: "es"
translation: "gcse-chemistry-acids-bases-salts-en"
---

Los ejercicios de ácidos y bases se vuelven confusos cuando se memorizan como recetas independientes. En realidad, casi todos parten de una idea: los ácidos aportan $\\mathrm{H^+}$ en disolución y los álcalis aportan $\\mathrm{OH^-}$.

> **Respuesta directa.** La neutralización elimina las propiedades ácidas y básicas mediante $\\mathrm{H^++OH^-\\to H_2O}$. Para preparar una sal, identifica primero el ácido que aporta el anión y el metal, óxido, hidróxido o carbonato que aporta el catión.

![Escala de pH y neutralización entre iones hidrógeno e hidróxido](/assets/latex/gcse-ph-neutralisation.svg)

## Leer la escala de pH

En el modelo GCSE:

- $pH<7$: ácido.
- $pH=7$: neutro.
- $pH>7$: alcalino.

Una disminución de una unidad de pH representa aproximadamente diez veces más concentración de $\\mathrm{H^+}$. Por tanto, pH 2 no es “un poco” más ácido que pH 3.

## Cuatro patrones de reacción

$$
\\text{ácido}+\\text{metal}\\to\\text{sal}+\\mathrm{H_2}
$$

$$
\\text{ácido}+\\text{óxido o hidróxido}\\to\\text{sal}+\\mathrm{H_2O}
$$

$$
\\text{ácido}+\\text{carbonato}\\to\\text{sal}+\\mathrm{H_2O}+\\mathrm{CO_2}
$$

El gas no se inventa: depende del reactivo. Los carbonatos producen dióxido de carbono; los metales adecuados producen hidrógeno.

## Elegir el nombre de la sal

- Ácido clorhídrico $\\to$ cloruro.
- Ácido sulfúrico $\\to$ sulfato.
- Ácido nítrico $\\to$ nitrato.

Por ejemplo:

$$
\\mathrm{H_2SO_4+CuO\\to CuSO_4+H_2O}.
$$

El ácido aporta sulfato y el óxido de cobre aporta cobre.

## Cómo preparar una sal soluble

Para obtener cristales de sulfato de cobre:

1. Calienta suavemente ácido sulfúrico diluido.
2. Añade óxido de cobre en exceso hasta que deje de reaccionar.
3. Filtra el sólido sobrante.
4. Evapora parte del agua.
5. Deja enfriar para cristalizar.
6. Seca los cristales.

El exceso garantiza que todo el ácido se consume; la filtración retira el exceso insoluble.

## Ejemplo cuantitativo

Si $25.0\\ \\mathrm{cm^3}$ de una disolución de $0.20\\ \\mathrm{mol\\,dm^{-3}}$ reaccionan:

$$
n=cV=0.20\\times0.0250=5.0\\times10^{-3}\\ \\mathrm{mol}.
$$

Convierte siempre $\\mathrm{cm^3}$ a $\\mathrm{dm^3}$ dividiendo entre 1000.

## Indicadores y punto final

Un indicador cambia de color en un intervalo de pH. No “neutraliza” la disolución. En una valoración, el punto final observado debe estar próximo al punto de equivalencia químico.

## Ecuaciones iónicas y iones espectadores

En la reacción entre ácido clorhídrico e hidróxido de sodio:

$$
\\mathrm{HCl+NaOH\\to NaCl+H_2O},
$$

los iones $\\mathrm{Na^+}$ y $\\mathrm{Cl^-}$ permanecen sin cambiar. Al eliminarlos aparece la ecuación iónica neta:

$$
\\mathrm{H^+(aq)+OH^-(aq)\\to H_2O(l)}.
$$

Indicar los estados ayuda a justificar qué especies están realmente disueltas. Un ion espectador no es irrelevante para preparar la sal final, pero no participa en el cambio químico de neutralización.

## Valoración: un procedimiento que se puede evaluar

Enjuaga la pipeta con la disolución que va a medir y la bureta con la que va a contener. Registra la lectura inicial a la altura del menisco, añade unas gotas de indicador al matraz y aproxima la bureta al punto final lentamente. Un ensayo preliminar localiza la zona; después se buscan resultados concordantes, normalmente dentro de $0.10$–$0.20\\ \\mathrm{cm^3}$ según el criterio utilizado.

El volumen gastado es lectura final menos lectura inicial. Repetir sin controlar el menisco no corrige un error sistemático, y añadir demasiado indicador puede alterar el resultado. La mejora experimental debe indicar qué se cambia y por qué aumenta la precisión.

## Errores frecuentes

- Escribir agua como gas en una neutralización.
- Confundir base con álcali: un álcali es una base soluble.
- Usar el ácido equivocado para la sal deseada.
- Olvidar filtrar el reactivo sólido en exceso.
- Trabajar con $\\mathrm{cm^3}$ en $n=cV$.

El campus virtual de Método Nebula reúne estructura de la materia, cantidades químicas, ácidos, sales y métodos experimentales con ejercicios y preguntas GCSE. El botón de contacto permite convertir estos patrones en una ruta de práctica.
`,ee=`---
title: "GCSE Chemistry: understand bonding and explain any property"
date: "2026-09-17"
updated: "2026-10-28"
description: "Ionic, covalent and metallic bonding for GCSE Chemistry: particles, structures, properties, comparisons and exam answers."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-chemistry-equations-moles-revision-en,gcse-chemistry-electrolysis-electrode-products-en"
image: "/assets/latex/bonding-particles-en.svg"
language: "en"
translation: "gcse-chemistry-bonding-revision"
---

Bonding becomes difficult when it is learnt as three definitions and a list of melting points. In the exam, the question usually demands something more precise: explaining a macroscopic property from particles and structure.

The chain that unlocks the topic is **particles → bond or force → structure → observable property**. If one link is missing, the answer becomes an unsupported statement.

![Particle models for ionic, covalent and metallic bonding](/assets/latex/bonding-particles-en.svg)

## Ionic bonding: a lattice, not an isolated pair

An ionic compound contains positive and negative ions arranged in a giant ionic lattice. Electrostatic attraction acts in every direction. Separating the ions requires a large amount of energy, so ionic compounds usually have high melting and boiling points.

In a solid, the ions occupy fixed positions and cannot carry charge through the material. When molten or dissolved, they can move and conduct electricity. The scoring phrase is “the ions are free to move”, not simply “it contains ions”.

## Covalent bonding: distinguish simple molecules from giant networks

In a simple molecular substance, the covalent bonds inside each molecule are strong, but the forces between molecules are usually much weaker. Melting the substance does not necessarily break covalent bonds: it overcomes intermolecular forces.

In a giant covalent structure, such as diamond or silicon dioxide, an extended network of covalent bonds explains the high hardness and melting point.

Graphite is a frequent exam exception. Each carbon atom bonds to three neighbours in layers, leaving delocalised electrons that can move. It therefore conducts electricity even though it is covalent.

## Metallic bonding: positive ions and delocalised electrons

A metal can be modelled as a lattice of positive ions surrounded by delocalised electrons. The attraction between them holds the structure together. Mobile electrons transfer electrical charge and thermal energy.

Layers of ions can slide without completely destroying the attraction, helping to explain malleability and ductility. A strong answer links this model to the exact property in the question.

## Comparison table

| Structure | Relevant particles | Conductivity | Typical melting point |
|---|---|---|---|
| Solid ionic | Fixed ions | No | High |
| Molten/dissolved ionic | Mobile ions | Yes | — |
| Simple molecular | Molecules | Usually no | Low |
| Giant covalent | Atoms bonded in a network | Usually no; graphite does | Very high |
| Metallic | Ions and delocalised electrons | Yes | Variable, often high |

## How to build a four-mark answer

Suppose the question asks why sodium chloride has a high melting point:

1. It has a giant ionic lattice.
2. It contains oppositely charged ions.
3. There are strong electrostatic attractions in every direction.
4. A large amount of energy is needed to overcome those attractions.

Each sentence adds a necessary step. Writing only “the bonds are strong” is normally too vague.

## Comparison question: NaCl and CO₂

NaCl forms an ionic lattice, whereas CO₂ consists of simple molecules. Strong electrostatic attractions act between ions throughout the NaCl lattice. Much weaker intermolecular forces act between CO₂ molecules. Considerably more energy is therefore required to melt NaCl.

The comparison works because it applies the same reasoning chain to both materials.

## Common mistakes

- Saying that an ionic substance consists of molecules.
- Claiming that melting a molecular substance breaks covalent bonds.
- Writing that graphite conducts “because it is carbon”.
- Confusing delocalised electrons with mobile ions.
- Naming a property without explaining its microscopic mechanism.

## Short practice

1. Explain why magnesium oxide has a high melting point.
2. Explain why molten magnesium oxide conducts but the solid does not.
3. Compare diamond and graphite in structure and conductivity.
4. Explain why a metal can deform without immediately breaking.

Check every answer for particles, force, structure and property. If one is absent, the explanation can still be improved.

Método Nebula's virtual campus develops atoms, elements and bonding through visual theory, examples, exercises, multiple-choice questions and extended responses. If you want to move from memorising definitions to building answers that earn marks, the contact button opens a level diagnosis and a structured study route.
`,ne=`---
title: "Química GCSE: entiende los enlaces y explica cualquier propiedad"
date: "2026-09-17"
updated: "2026-10-28"
description: "Enlace iónico, covalente y metálico en Química GCSE: partículas, estructuras, propiedades, comparaciones y respuestas de examen."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-chemistry-equations-moles-revision,ib-gcse-como-preparar-examenes-internacionales"
image: "/assets/latex/bonding-particles.svg"
language: "es"
translation: "gcse-chemistry-bonding-revision-en"
---

El enlace químico se vuelve difícil cuando se estudia como tres definiciones y una lista de puntos de fusión. En el examen, la pregunta suele pedir algo más exigente: explicar una propiedad a partir de las partículas y de la estructura.

La cadena que desbloquea el tema es esta: **partículas → enlace o fuerza → estructura → propiedad observable**. Si falta un eslabón, la respuesta queda en una afirmación memorizada.

![Modelos de partículas para enlace iónico, covalente y metálico](/assets/latex/bonding-particles.svg)

## Enlace iónico: una red, no una pareja aislada

Un compuesto iónico contiene iones positivos y negativos organizados en una red iónica gigante. La atracción electrostática actúa en todas las direcciones. Se necesita mucha energía para separar los iones, por lo que suelen tener puntos de fusión y ebullición altos.

En estado sólido, los iones ocupan posiciones fijas y no pueden transportar carga por el material. Fundidos o disueltos, pueden desplazarse y conducir electricidad. La frase importante es “los iones están libres para moverse”, no simplemente “tiene iones”.

## Covalente: distingue moléculas simples y redes gigantes

En una sustancia molecular simple los enlaces covalentes dentro de cada molécula son fuertes, pero las fuerzas entre moléculas suelen ser mucho más débiles. Fundir la sustancia no rompe necesariamente los enlaces covalentes: vence las fuerzas intermoleculares.

En una estructura covalente gigante, como el diamante o el dióxido de silicio, existe una red extensa de enlaces covalentes. Esto explica la dureza y los puntos de fusión altos.

El grafito es una excepción que el examen utiliza mucho: cada átomo de carbono se enlaza a tres vecinos formando capas y deja electrones deslocalizados que pueden moverse. Por eso conduce, aunque sea covalente.

## Metálico: iones positivos y electrones deslocalizados

Un metal puede modelarse como una red de iones positivos rodeados por electrones deslocalizados. La atracción entre ambos mantiene la estructura. Los electrones móviles permiten conducir electricidad y energía térmica.

Las capas de iones pueden deslizarse sin destruir completamente la atracción, lo que ayuda a explicar maleabilidad y ductilidad. Una respuesta de calidad conecta el modelo con la propiedad concreta solicitada.

## Tabla de comparación

| Estructura | Partículas relevantes | Conductividad | Punto de fusión típico |
|---|---|---|---|
| Iónica sólida | Iones fijos | No | Alto |
| Iónica fundida/disuelta | Iones móviles | Sí | — |
| Molecular simple | Moléculas | Habitualmente no | Bajo |
| Covalente gigante | Átomos enlazados en red | Generalmente no; el grafito sí | Muy alto |
| Metálica | Iones y electrones deslocalizados | Sí | Variable, a menudo alto |

## Cómo construir una respuesta de cuatro marcas

Supón que preguntan por qué el cloruro de sodio tiene un punto de fusión alto:

1. Es una red iónica gigante.
2. Contiene iones de cargas opuestas.
3. Hay atracciones electrostáticas fuertes en todas las direcciones.
4. Se necesita mucha energía para vencer esas atracciones.

Cada frase aporta una pieza. Escribir solo “los enlaces son fuertes” suele ser demasiado impreciso.

## Pregunta comparativa: NaCl frente a CO₂

NaCl forma una red iónica; CO₂ está formado por moléculas simples. En NaCl hay atracciones electrostáticas fuertes entre iones en toda la red. Entre moléculas de CO₂ actúan fuerzas intermoleculares más débiles. Por eso hace falta mucha más energía para fundir NaCl.

La comparación funciona porque usa la misma estructura de razonamiento en ambos materiales.

## Errores frecuentes

- Decir que una sustancia iónica está formada por moléculas.
- Afirmar que al fundir una sustancia molecular se rompen enlaces covalentes.
- Escribir que el grafito conduce “porque es carbono”.
- Confundir electrones deslocalizados con iones móviles.
- Nombrar una propiedad sin explicar el mecanismo microscópico.

## Práctica breve

1. Explica por qué óxido de magnesio tiene un punto de fusión alto.
2. Justifica por qué óxido de magnesio fundido conduce y el sólido no.
3. Compara el diamante y el grafito en estructura y conductividad.
4. Explica por qué un metal puede deformarse sin romperse inmediatamente.

Corrige buscando los cuatro eslabones: partículas, fuerza, estructura y propiedad. Si uno no aparece, la respuesta aún puede mejorar.

El campus virtual de Método Nebula desarrolla átomos, elementos y enlaces con teoría visual, ejemplos, ejercicios, preguntas de opción múltiple y preguntas de respuesta extendida. Si quieres pasar de memorizar definiciones a construir explicaciones que puntúan, el botón de contacto abre un diagnóstico del nivel y una ruta de trabajo.
`,ae=`---
title: "GCSE Chemistry: electrolysis and electrode products without memorising lists"
date: "2026-10-07"
updated: "2026-10-28"
description: "Electrolysis for GCSE Chemistry: mobile ions, anode, cathode, products in melts and solutions, half-equations and common errors."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-chemistry-bonding-revision-en,gcse-chemistry-equations-moles-revision-en"
image: "/assets/latex/electrolysis-cell-en.svg"
language: "en"
translation: "gcse-chemistry-electrolysis-electrode-products"
---

Electrolysis becomes confusing when every compound is memorised separately. The general method is shorter: **list the mobile species, decide which electrode attracts each ion and write the electron transfer**.

![Electrolytic cell with a positive anode, negative cathode and ion migration](/assets/latex/electrolysis-cell-en.svg)

## What electrolysis requires

An electrolyte contains ions that can move. It may be a molten ionic compound or an aqueous solution. In an ionic solid, ions occupy fixed positions and cannot carry charge, so continuous electrolysis cannot occur.

A direct-current supply drives a non-spontaneous reaction:

- The **cathode is negative** and attracts cations.
- The **anode is positive** and attracts anions.
- Reduction occurs at the cathode.
- Oxidation occurs at the anode.

The redox rule is unchanged: reduction is gain of electrons; oxidation is loss of electrons.

## Molten compound: only two ions compete

Molten lead bromide contains $\\mathrm{Pb^{2+}}$ and $\\mathrm{Br^-}$.

At the cathode:

$$
\\mathrm{Pb^{2+}+2e^-\\rightarrow Pb}.
$$

At the anode:

$$
\\mathrm{2Br^-\\rightarrow Br_2+2e^-}.
$$

Electrons cancel when the half-equations are added. The compound decomposes into lead and bromine.

## Aqueous solution: water introduces competition

Species from water can also be discharged. At the cathode, a metal more reactive than hydrogen normally gives hydrogen instead of the metal. Less reactive metals, such as copper, may be deposited.

At the anode, concentrated halides normally produce the corresponding halogen. If no suitable halide is present, oxygen is usually formed from hydroxide ions.

Apply these rules to the complete set of ions, not merely to the solute's name.

## Example: aqueous sodium chloride

The relevant species are $\\mathrm{Na^+}$, $\\mathrm{Cl^-}$ and species from water. Hydrogen forms at the cathode because sodium is too reactive to be deposited from water:

$$
\\mathrm{2H_2O+2e^-\\rightarrow H_2+2OH^-}.
$$

For concentrated brine, chlorine forms at the anode:

$$
\\mathrm{2Cl^-\\rightarrow Cl_2+2e^-}.
$$

The remaining solution becomes richer in $\\mathrm{Na^+}$ and $\\mathrm{OH^-}$, producing sodium hydroxide.

## Example: copper(II) sulfate with inert electrodes

Copper is deposited at the cathode:

$$
\\mathrm{Cu^{2+}+2e^-\\rightarrow Cu}.
$$

Oxygen forms at the anode. The cathode gains mass and the blue colour can fade as the $\\mathrm{Cu^{2+}}$ concentration falls. With copper electrodes, the anode may dissolve:

$$
\\mathrm{Cu\\rightarrow Cu^{2+}+2e^-}.
$$

The electrode material is therefore part of the experimental model.

## How to write a half-equation

Fix the starting species and product first. Balance atoms before balancing charge with electrons. The final position of those electrons identifies reduction or oxidation and checks whether the assigned electrode is consistent.

$\\mathrm{Al^{3+}+3e^-\\to Al}$ is reduction because electrons appear on the left. $\\mathrm{2Cl^-\\to Cl_2+2e^-}$ is oxidation because they appear on the right.

## Use observations as evidence

A metal deposit changes the appearance or mass of the cathode; a gas produces bubbles and can be identified by a suitable test. Hydrogen gives a squeaky pop with a lit splint; oxygen relights a glowing splint; chlorine bleaches damp indicator paper after turning it red.

Tests do not replace half-equations. A precise extended answer distinguishes **predicted product**, **observation** and **identification test**.

## Common mistakes

- Claiming that electrons cross the electrolyte.
- Sending anions to the cathode.
- Predicting sodium metal from aqueous NaCl.
- Forgetting that halogens are diatomic.
- Writing a half-equation that does not conserve charge.
- Applying inert-electrode rules when an electrode reacts.

Método Nebula's virtual campus develops electrochemistry with particle models, product prediction, half-equations, copper electrodes and fuel cells, supported by exercises and exam questions. The contact button opens a study route designed to reason out each product instead of memorising tables.
`,ie=`---
title: "Química GCSE: electrólisis y productos de los electrodos sin memorizar listas"
date: "2026-10-07"
updated: "2026-10-07"
description: "Electrólisis para Química GCSE: iones móviles, ánodo, cátodo, productos en fundidos y disoluciones, semiecuaciones y errores."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-chemistry-bonding-revision,gcse-chemistry-equations-moles-revision"
image: "/assets/latex/electrolysis-cell.svg"
language: "es"
translation: "gcse-chemistry-electrolysis-electrode-products-en"
---

La electrólisis se vuelve confusa cuando se intenta recordar cada compuesto por separado. El método general es más corto: **enumera las especies móviles, decide qué electrodo atrae a cada ion y escribe la transferencia de electrones**.

![Celda electrolítica con ánodo positivo, cátodo negativo y migración de iones](/assets/latex/electrolysis-cell.svg)

## Qué necesita una electrólisis

Un electrolito contiene iones que pueden moverse. Puede ser un compuesto iónico fundido o una disolución acuosa. En un sólido iónico los iones ocupan posiciones fijas y no pueden transportar carga, por lo que no hay electrólisis continua.

Una fuente de corriente continua fuerza una reacción no espontánea:

- El **cátodo es negativo** y atrae cationes.
- El **ánodo es positivo** y atrae aniones.
- En el cátodo ocurre reducción.
- En el ánodo ocurre oxidación.

La regla redox no cambia: la reducción gana electrones y la oxidación pierde electrones.

## Compuesto fundido: solo compiten dos iones

En bromuro de plomo fundido existen $\\mathrm{Pb^{2+}}$ y $\\mathrm{Br^-}$.

En el cátodo:

$$
\\mathrm{Pb^{2+}+2e^-\\rightarrow Pb}.
$$

En el ánodo:

$$
\\mathrm{2Br^-\\rightarrow Br_2+2e^-}.
$$

Los electrones se conservan al sumar ambas semiecuaciones. El compuesto se descompone en plomo y bromo.

## Disolución acuosa: el agua introduce competencia

En una disolución también pueden descargarse especies procedentes del agua. En el cátodo, si el metal es más reactivo que el hidrógeno, suele formarse $\\mathrm{H_2}$ en vez del metal. Metales menos reactivos, como cobre, pueden depositarse.

En el ánodo, los haluros concentrados suelen producir halógeno. Si no hay haluro adecuado, suele formarse oxígeno a partir de iones hidróxido.

Estas reglas deben aplicarse al conjunto real de iones, no al nombre del soluto sin analizarlo.

## Ejemplo: cloruro de sodio acuoso

Especies relevantes: $\\mathrm{Na^+}$, $\\mathrm{Cl^-}$ y las especies del agua.

En el cátodo se produce hidrógeno porque el sodio es demasiado reactivo para depositarse desde agua:

$$
\\mathrm{2H_2O+2e^-\\rightarrow H_2+2OH^-}.
$$

En el ánodo, para salmuera concentrada:

$$
\\mathrm{2Cl^-\\rightarrow Cl_2+2e^-}.
$$

La disolución restante se enriquece en $\\mathrm{Na^+}$ y $\\mathrm{OH^-}$, formando hidróxido de sodio.

## Ejemplo: sulfato de cobre(II) con electrodos inertes

En el cátodo se deposita cobre:

$$
\\mathrm{Cu^{2+}+2e^-\\rightarrow Cu}.
$$

En el ánodo se forma oxígeno. La masa del cátodo aumenta y el color azul puede hacerse menos intenso al disminuir la concentración de $\\mathrm{Cu^{2+}}$.

Con electrodos de cobre, el ánodo puede disolverse:

$$
\\mathrm{Cu\\rightarrow Cu^{2+}+2e^-}.
$$

Por eso el material del electrodo también forma parte del modelo experimental.

## Cómo escribir una semiecuación

Una semiecuación se construye fijando primero la especie inicial y el producto. El ajuste de átomos precede al ajuste de carga, que se completa añadiendo electrones. La posición final de esos electrones muestra si el proceso es reducción u oxidación y permite contrastarlo con el electrodo asignado.

La ecuación $\\mathrm{Al^{3+}+3e^-\\to Al}$ muestra reducción porque los electrones están a la izquierda. $\\mathrm{2Cl^-\\to Cl_2+2e^-}$ muestra oxidación porque están a la derecha.

## Usar observaciones como evidencia

La predicción química debe conectarse con lo que podría observarse. Un depósito metálico cambia el aspecto o la masa del cátodo; un gas produce burbujas y puede identificarse con una prueba apropiada. El hidrógeno produce un pequeño estallido característico con una astilla encendida; el oxígeno reaviva una astilla incandescente; el cloro decolora papel indicador húmedo después de volverlo rojo.

Estas pruebas no sustituyen a las semiecuaciones. Son evidencias experimentales compatibles con ellas. Una respuesta extensa gana precisión cuando separa claramente **producto predicho**, **observación** y **prueba de identificación**, en vez de escribir que “aparecen burbujas” como conclusión suficiente.

## Errores frecuentes

- Afirmar que los electrones cruzan el electrolito.
- Enviar aniones al cátodo por confundir signo y nombre.
- Predecir sodio metálico en una disolución acuosa de NaCl.
- Olvidar que los halógenos son diatómicos.
- Escribir una semiecuación que no conserva carga.
- Aplicar reglas de electrodos inertes cuando el electrodo participa.

El campus virtual de Método Nebula desarrolla electroquímica con modelos de partículas, predicción de productos, semiecuaciones, electrodos de cobre y pilas de combustible, además de ejercicios y preguntas de examen. El botón de contacto permite solicitar una ruta para razonar cada producto en lugar de memorizar tablas.
`,oe=`---
title: "GCSE Chemistry: master equations and moles without the usual mistakes"
date: "2026-09-12"
updated: "2026-10-28"
description: "Connect formulae, equations and moles in GCSE Chemistry with a reliable method, a complete example and exam practice."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-chemistry-bonding-revision-en,gcse-chemistry-electrolysis-electrode-products-en"
image: "/assets/latex/mole-map-en.svg"
language: "en"
translation: "gcse-chemistry-equations-moles-revision"
---

GCSE Chemistry questions about formulae, masses, particles and equations often use the same bridge. A student who controls that bridge can solve unfamiliar problems; memorised formulae tend to fail when the data arrive in a different unit.

The central idea is simple: **a balanced equation relates moles, and moles connect the microscopic language of particles to measurable laboratory quantities.**

![Conversion map from mass to moles, chemical ratio and target quantity](/assets/latex/mole-map-en.svg)

## The three languages of a chemistry question

Before calculating, identify the level of each piece of information:

- **particles:** atoms, molecules, ions and electrons;
- **symbols:** formulae and balanced equations;
- **measurements:** mass, volume, concentration, moles or number of particles.

A complete solution translates between levels without gaps. Subscripts describe a substance's composition; coefficients state how many units react. Changing \`H2O\` into \`H2O2\` to balance an equation does not repair the arithmetic: it turns water into hydrogen peroxide.

## How to balance an equation systematically

1. Write the correct formulae for reactants and products.
2. Count every element on both sides.
3. Start with elements that appear in the fewest substances.
4. Leave hydrogen and oxygen until later when that simplifies the process.
5. Reduce coefficients to the smallest whole-number ratio.
6. Count every atom again.

For methane combustion:

$$
\\mathrm{CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O}.
$$

One mole of methane needs two moles of oxygen and produces one mole of carbon dioxide and two moles of water.

## The safe calculation map

Most problems follow this chain:

$$
\\text{data}\\rightarrow\\text{moles}\\rightarrow\\text{ratio}\\rightarrow\\text{target moles}\\rightarrow\\text{answer}.
$$

For a mass, use $n=m/M_r$. To find a mass, return through $m=nM_r$. For particles, use $N=nN_A$ when this relationship belongs to the specification. Write a unit at every arrow to expose inverted factors.

## Complete example: calcium carbonate decomposition

Consider:

$$
\\mathrm{CaCO_3 \\rightarrow CaO + CO_2}.
$$

What mass of $\\mathrm{CO_2}$ can be obtained from 10.0 g of $\\mathrm{CaCO_3}$ in a complete reaction? Take $M_r(\\mathrm{CaCO_3})=100$ and $M_r(\\mathrm{CO_2})=44$.

$$
n(\\mathrm{CaCO_3})=\\frac{10.0}{100}=0.100\\ \\mathrm{mol}.
$$

The ratio is 1:1, so 0.100 mol of $\\mathrm{CO_2}$ forms:

$$
m(\\mathrm{CO_2})=0.100\\cdot44=4.40\\ \\mathrm{g}.
$$

The answer is not merely 4.40. It includes the unit, substance and assumption of complete reaction.

## When there are two reactants: find the limiting one

Do not choose the limiting reactant because it has fewer grams. Convert both amounts to moles and compare how many times each can satisfy the equation's ratio. The reactant that permits fewer stoichiometric cycles limits the product.

Then confirm that the other reactant remains in excess. This check turns a memorised procedure into chemical reasoning.

## Mistakes that lose marks

- Using a ratio before balancing the equation.
- Confusing coefficients with subscripts.
- Putting grams directly into a mole ratio.
- Forgetting brackets in a relative formula mass.
- Rounding at every step rather than at the end.
- Giving a number without a unit or substance.

## Graduated practice

1. Balance $\\mathrm{Mg+O_2\\rightarrow MgO}$.
2. Find the moles in 9 g of water when $M_r=18$.
3. Explain why 2 mol of $\\mathrm{H_2}$ require 1 mol of $\\mathrm{O_2}$.
4. State what is needed to turn a reactant mass into a gas volume.
5. Solve a mixed question and underline every unit conversion.

The essential answers are $\\mathrm{2Mg+O_2\\rightarrow2MgO}$; 0.50 mol; the balanced equation supplies the ratio; and the appropriate volume–mole relationship is also required.

## A more complete study route

Método Nebula's virtual campus connects foundations, formulae and amounts, bonding, reactions and exam practice. Layered theory, worked examples, exercises, multiple-choice questions and exam problems make the step from concept to calculation deliberate rather than improvised.

If equations make sense separately but collapse in a longer problem, the contact button opens a review of the current level and a GCSE Chemistry route with a clear goal and deadline.
`,re=`---
title: "Química GCSE: domina ecuaciones y moles con una ruta que evita los errores típicos"
date: "2026-09-12"
updated: "2026-10-28"
description: "Aprende a conectar fórmulas, ecuaciones y moles en Química GCSE con un método estable, un ejemplo completo y práctica de examen."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-chemistry-bonding-revision,ib-gcse-como-preparar-examenes-internacionales,fisica-y-quimica-como-plantear-problemas"
image: "/assets/latex/mole-map.svg"
language: "es"
translation: "gcse-chemistry-equations-moles-revision-en"
---

En Química GCSE hay preguntas que parecen hablar de cosas distintas —fórmulas, masas, partículas, ecuaciones— pero en realidad recorren el mismo puente. El estudiante que domina ese puente puede resolver problemas nuevos; quien memoriza fórmulas aisladas suele bloquearse cuando el dato llega en una unidad diferente.

La idea central es sencilla: **la ecuación ajustada relaciona moles, y los moles conectan el lenguaje microscópico con las cantidades que se miden en el laboratorio.**

![Mapa de conversiones entre masa, moles, proporción química y cantidad pedida](/assets/latex/mole-map.svg)

## Los tres idiomas de una pregunta de química

Antes de calcular, identifica en qué nivel está cada dato:

- **partículas:** átomos, moléculas, iones y electrones;
- **símbolos:** fórmulas y ecuaciones ajustadas;
- **medidas:** masa, volumen, concentración, moles o número de partículas.

Una respuesta completa traduce de un nivel a otro sin saltos. Los subíndices describen la composición de una sustancia; los coeficientes indican cuántas unidades reaccionan. Cambiar \`H2O\` por \`H2O2\` para ajustar una ecuación no es corregir una cuenta: es convertir agua en peróxido de hidrógeno.

## Cómo ajustar una ecuación sin probar números al azar

1. Escribe correctamente las fórmulas de reactivos y productos.
2. Cuenta los átomos de cada elemento en ambos lados.
3. Ajusta primero los elementos que aparecen en menos sustancias.
4. Deja hidrógeno y oxígeno para el final cuando facilite el proceso.
5. Reduce los coeficientes a la proporción entera más sencilla.
6. Vuelve a contar todos los átomos.

Para la combustión del metano:

$$
\\mathrm{CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O}.
$$

La ecuación dice que un mol de metano necesita dos moles de oxígeno y produce un mol de dióxido de carbono y dos de agua.

## El mapa seguro de los cálculos

La mayoría de los problemas pueden escribirse como una cadena:

$$
\\text{dato}\\rightarrow\\text{moles}\\rightarrow\\text{proporción}\\rightarrow\\text{moles buscados}\\rightarrow\\text{respuesta}.
$$

Si el dato es una masa, usa:

$$
n=\\frac{m}{M_r}.
$$

Si se pide una masa, vuelve mediante $m=nM_r$. Si se pregunta por partículas, utiliza $N=nN_A$ cuando ese contenido forme parte del curso. Escribe la unidad en cada flecha: ayuda a detectar factores invertidos.

## Ejemplo completo: descomposición de carbonato de calcio

Considera:

$$
\\mathrm{CaCO_3 \\rightarrow CaO + CO_2}.
$$

¿Qué masa de $\\mathrm{CO_2}$ puede obtenerse a partir de 10,0 g de $\\mathrm{CaCO_3}$, suponiendo reacción completa? Usamos masas relativas aproximadas: $M_r(\\mathrm{CaCO_3})=100$ y $M_r(\\mathrm{CO_2})=44$.

Primero convertimos a moles:

$$
n(\\mathrm{CaCO_3})=\\frac{10.0}{100}=0.100\\ \\mathrm{mol}.
$$

La proporción es 1:1, así que se forman 0,100 mol de $\\mathrm{CO_2}$. Finalmente:

$$
m(\\mathrm{CO_2})=0.100\\cdot44=4.40\\ \\mathrm{g}.
$$

La respuesta no es solo 4,40. Incluye unidad, sustancia y la hipótesis de reacción completa.

## Cuando hay dos reactivos: encuentra el limitante

No elijas el reactivo limitante porque “tiene menos gramos”. Convierte ambos a moles y compara cuántas veces podría cumplirse la proporción de la ecuación. El que permita menos ciclos estequiométricos limita la cantidad de producto.

Después comprueba que el otro reactivo queda en exceso. Esta verificación convierte un procedimiento memorizado en un razonamiento químico.

## Errores que el examen castiga

- Aplicar una proporción antes de ajustar la ecuación.
- Confundir coeficientes con subíndices.
- Usar gramos directamente en una razón molar.
- Olvidar paréntesis al calcular una masa relativa.
- Redondear en cada paso en lugar de hacerlo al final.
- Entregar un número sin unidad ni sustancia.

## Práctica graduada

1. Ajusta $\\mathrm{Mg+O_2\\rightarrow MgO}$.
2. Calcula los moles contenidos en 9 g de agua si $M_r=18$.
3. Explica por qué 2 mol de $\\mathrm{H_2}$ requieren 1 mol de $\\mathrm{O_2}$.
4. Decide qué información necesitas para convertir una masa de reactivo en volumen de gas.
5. Resuelve una pregunta mixta y subraya cada conversión de unidades.

Las respuestas esenciales son: $\\mathrm{2Mg+O_2\\rightarrow2MgO}$; 0,50 mol; la proporción procede de la ecuación ajustada; y hace falta conocer la proporción molar y la relación volumen-mol aplicable en las condiciones indicadas.

## Una ruta de estudio más completa

El campus virtual de Método Nebula conecta fundamentos, fórmulas y cantidades, enlaces, reacciones y práctica de examen. Incluye teoría por capas, ejemplos, ejercicios, preguntas de opción múltiple, errores comunes y preguntas de examen para que el salto entre concepto y cálculo no dependa de una hoja suelta.

Si las ecuaciones “se entienden” por separado pero se desordenan en un problema largo, el botón de contacto sirve para plantear el caso, revisar el nivel y construir una ruta de Química GCSE con un objetivo y una fecha claros.
`,se=`---
title: "GCSE Chemistry: rates of reaction and collision theory for explaining every graph"
seoTitle: "GCSE Chemistry: rates and collision theory"
date: "2026-09-23"
updated: "2026-09-23"
description: "Master GCSE rates of reaction: collision theory, temperature, concentration, surface area, catalysts, practical methods and graphs."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-chemistry-equations-moles-revision-en,gcse-chemistry-acids-bases-salts-en,gcse-chemistry-electrolysis-electrode-products-en"
image: "/assets/latex/collision-theory-rate.svg"
language: "en"
translation: "gcse-chemistry-rates-collision-theory"
---

Saying that a reaction is faster “because particles move more” explains only part of the process. Collision theory requires two conditions: particles must collide and the collision must have enough energy to overcome the activation energy.

> **Direct answer.** Rate increases when the number of successful collisions per second rises. Temperature, concentration, pressure and surface area affect collisions; a catalyst provides an alternative route with lower activation energy and is not used up overall.

![Energy distribution and activation energies with and without a catalyst](/assets/latex/collision-theory-rate.svg)

## What rate measures

Rate may be expressed through reactant disappearance or product formation:

$$
\\text{rate}=\\frac{\\text{change in quantity}}{\\text{time}}.
$$

An experiment may measure gas volume, mass loss, colour change or concentration. The unit depends on the quantity, such as $\\mathrm{cm^3/s}$ or $\\mathrm{mol\\,dm^{-3}\\,s^{-1}}$.

## Concentration and pressure

A higher concentration places more particles in each unit volume. Collision frequency increases and, if the energy distribution is unchanged, the number of successful collisions per second also rises.

For gases, increasing pressure by reducing volume has the same effect: particles are closer together. Do not claim that every particle “has more energy”, because pressure or concentration alone does not necessarily increase mean kinetic energy.

## Surface area

A powdered solid exposes more particles to the other reactant than a block of the same mass. The collision frequency at the interface therefore rises.

The final product amount is unchanged when mass and limiting reactant remain the same. The reaction simply finishes sooner. On a gas-volume graph, powder gives a steeper initial curve but reaches the same plateau.

## Temperature: the complete explanation

When temperature rises:

1. particles move faster and collide more frequently;
2. a much larger fraction has energy $E\\geq E_a$.

The second effect is usually decisive. The distribution becomes broader and shifts so that the area beyond $E_a$ increases. An answer mentioning only extra collisions can lose the mark about collision energy.

## Catalysts

A catalyst lowers $E_a$ by providing an alternative pathway. At a fixed temperature, a larger fraction of collisions can react. It does not change reactant and product energies or the final amount fixed by stoichiometry.

For a reversible reaction, it speeds up both directions. Equilibrium is reached sooner, but its position is not moved by the catalyst.

## Reading a reaction graph

The instantaneous gradient represents rate. It is commonly greatest at the start because reactant concentration is high. The curve levels off when the limiting reactant has been used.

If 60 $\\mathrm{cm^3}$ of gas forms in 40 s, the mean rate is:

$$
\\frac{60}{40}=1.5\\ \\mathrm{cm^3/s}.
$$

The initial rate is not necessarily found from those endpoints: draw a tangent near $t=0$ and calculate its gradient.

## Designing a valid experiment

To investigate acid concentration with a carbonate:

- change concentration only;
- keep total volume, solid mass and surface area, and temperature constant;
- collect gas with a syringe or measure mass loss;
- repeat each condition and calculate a mean;
- use one criterion, such as time to produce 30 $\\mathrm{cm^3}$.

When timing a fixed product amount, $1/t$ can represent relative rate. Explain why a shorter time corresponds to a faster reaction.

## Common mistakes

- Confusing reaction rate with final product amount.
- Claiming that a catalyst raises yield.
- Saying concentration increases particle energy.
- Comparing trials in which two variables change.
- Giving a graph gradient without units.

## Practising explanations that earn marks

Método Nebula's virtual campus combines particle theory, graphs, practical work and graded GCSE questions. Each factor is trained through a cause–collision–result chain and model answers. Use the contact button to access this work alongside moles, chemical energetics and equilibrium.
`,te=`---
title: "Química GCSE: velocidad de reacción y teoría de colisiones para explicar cualquier gráfica"
seoTitle: "Química GCSE: velocidad de reacción y colisiones"
date: "2026-09-23"
updated: "2026-09-23"
description: "Domina velocidad de reacción en Química GCSE: teoría de colisiones, temperatura, concentración, superficie, catalizadores y gráficas."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-chemistry-equations-moles-revision,gcse-chemistry-acids-bases-salts,gcse-chemistry-electrolysis-electrode-products"
image: "/assets/latex/collision-theory-rate.svg"
language: "es"
translation: "gcse-chemistry-rates-collision-theory-en"
---

Decir que una reacción ocurre “más rápido porque las partículas se mueven más” solo explica una parte. La teoría de colisiones exige dos condiciones: las partículas deben chocar y el choque debe tener energía suficiente para superar la energía de activación.

> **Respuesta directa.** La velocidad aumenta si crece el número de colisiones eficaces por segundo. Temperatura, concentración, presión y superficie modifican las colisiones; un catalizador proporciona una ruta alternativa con menor energía de activación y no se consume globalmente.

![Distribución de energías y energías de activación con y sin catalizador](/assets/latex/collision-theory-rate.svg)

## Qué mide la velocidad

Puede expresarse mediante desaparición de reactivo o formación de producto:

$$
\\text{velocidad}=\\frac{\\text{cambio de cantidad}}{\\text{tiempo}}.
$$

En un experimento puede medirse volumen de gas, pérdida de masa, cambio de color o concentración. La unidad depende de la magnitud: por ejemplo, $\\mathrm{cm^3/s}$ o $\\mathrm{mol\\,dm^{-3}\\,s^{-1}}$.

## Concentración y presión

Una concentración mayor coloca más partículas por unidad de volumen. La frecuencia de colisión aumenta y, si la distribución de energías no cambia, también aumenta el número de colisiones eficaces por segundo.

En gases, elevar la presión reduciendo el volumen produce el mismo efecto: las partículas quedan más próximas. No conviene decir que cada partícula “tiene más energía”, porque presión o concentración por sí solas no aumentan necesariamente la energía cinética media.

## Superficie de contacto

Un sólido pulverizado expone más partículas al reactivo que un bloque de la misma masa. Por eso aumenta la frecuencia de colisión en la interfaz.

La cantidad final de producto no cambia si la masa y el reactivo limitante son iguales. Cambia el tiempo necesario. En una gráfica de volumen de gas frente a tiempo, la curva con polvo tiene mayor pendiente inicial, pero alcanza la misma meseta.

## Temperatura: la explicación completa

Al aumentar la temperatura:

1. las partículas se mueven más deprisa y chocan más frecuentemente;
2. una fracción mucho mayor posee energía $E\\geq E_a$.

El segundo efecto suele ser decisivo. La distribución se ensancha y desplaza, por lo que el área a la derecha de $E_a$ aumenta. Una respuesta que solo menciona más colisiones puede perder el punto referido a energía.

## Catalizadores

Un catalizador reduce $E_a$ mediante una ruta alternativa. A una temperatura dada, aumenta la fracción de colisiones que pueden reaccionar. No modifica la energía de reactivos y productos ni la cantidad final determinada por la estequiometría.

En una reacción reversible, acelera ambos sentidos. El equilibrio se alcanza antes, pero su posición no cambia por añadir catalizador.

## Leer una gráfica de reacción

La pendiente instantánea representa la velocidad. Al principio suele ser mayor porque la concentración de reactivos es alta. La curva se aplana cuando el reactivo limitante se agota.

Si se obtienen 60 $\\mathrm{cm^3}$ de gas en 40 s, la velocidad media es:

$$
\\frac{60}{40}=1.5\\ \\mathrm{cm^3/s}.
$$

La velocidad inicial no se calcula necesariamente con esos dos extremos: se traza una tangente cerca de $t=0$ y se calcula su gradiente.

## Diseñar un experimento válido

Para estudiar concentración con ácido y carbonato:

- cambia solo la concentración;
- mantén volumen total, masa y superficie del sólido, y temperatura;
- recoge el gas con jeringa o mide pérdida de masa;
- repite cada condición y calcula una media;
- decide un criterio común, como tiempo para producir 30 $\\mathrm{cm^3}$.

Si se utiliza tiempo para alcanzar una cantidad fija, una medida sencilla de velocidad relativa es $1/t$. Debe explicarse por qué un tiempo menor significa mayor velocidad.

## Errores frecuentes

- Confundir velocidad con cantidad final de producto.
- Afirmar que un catalizador aumenta el rendimiento.
- Decir que la concentración aumenta la energía de las partículas.
- Comparar experimentos cambiando dos variables a la vez.
- Calcular una pendiente sin unidades.

## Practicar explicaciones que sí puntúan

El campus virtual de Método Nebula combina teoría de partículas, gráficas, prácticas y preguntas GCSE graduadas. Cada factor se trabaja con la cadena causa–colisión–resultado y con modelos de respuesta. Utiliza el botón de contacto si quieres acceder a este entrenamiento junto con moles, energía química y equilibrio.
`,ce=`---
title: "GCSE Maths: master algebra and graphs by seeing one idea three ways"
date: "2026-10-14"
updated: "2026-10-28"
description: "Algebra and graphs for GCSE Maths: equations, straight lines, quadratics, transformations, examples and exam errors."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-maths-revision-plan-foundation-higher-en,gcse-maths-trigonometry-bearings-en"
image: "/assets/latex/function-study-en.svg"
language: "en"
translation: "gcse-maths-algebra-graphs-revision"
---

An equation, a table and a graph can describe exactly the same relationship. Algebra and graphs become manageable when you can move between representations and select the one that reveals the information you need.

![Function with critical points and a structured graph-reading sequence](/assets/latex/function-study-en.svg)

## Manipulation is not moving symbols at random

Simplifying an expression means writing an equivalent one. Expanding $3(x+2)$ gives $3x+6$ because 3 multiplies every term. Factorising $6x+12$ gives $6(x+2)$ because 6 is a common factor.

These inverse operations serve different purposes: expansion helps combine terms; factorisation reveals structure or roots.

## Straight lines: gradient and intercept

In $y=mx+c$, $m$ is the gradient and $c$ is the $y$-intercept. Given $(x_1,y_1)$ and $(x_2,y_2)$:

$$
m=\\frac{y_2-y_1}{x_2-x_1}.
$$

A positive gradient rises; a negative one falls. Parallel lines have the same gradient. In context, the gradient may represent cost per unit, speed or another rate of change.

## Linear example

A tariff costs £5 plus £2 per hour, so $C=2h+5$. The 5 is the initial charge and 2 is the hourly rate. Four hours cost £13. To find when it costs £21:

$$
2h+5=21\\Rightarrow h=8.
$$

The graph, equation and story express the same model.

## Quadratics: three forms, three advantages

The expanded form $ax^2+bx+c$ reveals the $y$-intercept. The factorised form $a(x-r_1)(x-r_2)$ reveals the roots. The completed-square form $a(x-p)^2+q$ reveals the turning point and transformations.

For $y=x^2-5x+6=(x-2)(x-3)$, the roots are 2 and 3 and the axis of symmetry is $x=2.5$. A reasoned sketch does not require a huge table.

## Intersections

Where two graphs meet, both equations are true. Solve the simultaneous equations algebraically or estimate from an accurate graph when permitted. Substitute the answer into both relationships to check it.

## Transformations

- $y=f(x)+a$: vertical translation.
- $y=f(x-a)$: horizontal translation to the right.
- $y=af(x)$: vertical scale factor.
- $y=f(ax)$: reciprocal horizontal scale factor.

The sign inside the argument often causes errors. Track a known point instead of trusting memory alone.

## Inequalities and regions

An inequality produces an interval, not only a number. Reverse the sign when multiplying or dividing by a negative quantity. In two dimensions, test a point to choose which half-plane to shade.

## Common mistakes

- Combining unlike terms.
- Distributing a negative sign to only the first term.
- Misreading an axis scale.
- Confusing a root with a $y$-intercept.
- Translating a graph horizontally in the wrong direction.
- Keeping a root that is impossible in context.

## Connected practice

Express one linear relationship as a story, equation, table and graph. Repeat with a quadratic, then solve a problem where two models intersect. This transfer is more valuable than a page of identical expansions.

Método Nebula's virtual campus develops number, algebra and graphs, coordinate geometry and functions through theory, examples, practice and exam questions. The contact button can turn scattered errors into a focused Foundation or Higher route.
`,le=`---
title: "Matemáticas GCSE: domina álgebra y gráficas viendo una idea de tres formas"
date: "2026-10-14"
updated: "2026-10-28"
description: "Guía de álgebra y gráficas para Matemáticas GCSE: ecuaciones, rectas, cuadráticas, transformaciones, ejemplos y errores de examen."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-maths-revision-plan-foundation-higher,como-estudiar-matematicas-sin-memorizar"
image: "/assets/latex/function-study.svg"
language: "es"
translation: "gcse-maths-algebra-graphs-revision-en"
---

Una ecuación, una tabla y una gráfica pueden describir exactamente la misma relación. El álgebra y las gráficas se dominan cuando puedes cambiar de una representación a otra y escoger la que hace visible la información que necesitas.

![Función con puntos críticos y una secuencia de lectura gráfica](/assets/latex/function-study.svg)

## Manipular no es mover símbolos al azar

Simplificar una expresión significa escribir otra equivalente. Al expandir $3(x+2)$ obtienes $3x+6$ porque el 3 multiplica a cada término. Al factorizar $6x+12$ obtienes $6(x+2)$ porque extraes un factor común.

Estas operaciones son inversas y sirven para propósitos distintos: expandir ayuda a combinar; factorizar ayuda a encontrar estructura o raíces.

## Rectas: pendiente e intercepto

En:

$$
y=mx+c,
$$

$m$ es la pendiente y $c$ es el corte con el eje $y$. Dados $(x_1,y_1)$ y $(x_2,y_2)$:

$$
m=\\frac{y_2-y_1}{x_2-x_1}.
$$

Una pendiente positiva indica crecimiento; una negativa, descenso. Rectas paralelas tienen la misma pendiente. En preguntas de contexto, la pendiente puede representar coste por unidad, velocidad o tasa de cambio.

## Ejemplo lineal

Una tarifa cuesta £5 fijos más £2 por hora:

$$
C=2h+5.
$$

El 5 es el coste inicial; el 2 indica £2 por cada hora. Para 4 horas, $C=13$. Si la pregunta pide cuándo cuesta £21:

$$
2h+5=21\\Rightarrow h=8.
$$

La gráfica, la ecuación y la historia cuentan lo mismo.

## Cuadráticas: tres formas, tres ventajas

La forma desarrollada $ax^2+bx+c$ muestra el corte con $y$. La factorizada $a(x-r_1)(x-r_2)$ muestra las raíces. La forma de vértice $a(x-p)^2+q$ muestra el vértice y las transformaciones.

Para:

$$
y=x^2-5x+6=(x-2)(x-3),
$$

las raíces son 2 y 3. El eje de simetría está en $x=2.5$. No necesitas una tabla enorme para hacer un boceto razonado.

## Intersecciones

El punto donde dos gráficas se cruzan satisface ambas ecuaciones. Puedes resolver el sistema algebraicamente o estimar desde el dibujo si se permite. Comprueba sustituyendo la solución en las dos relaciones.

## Transformaciones

- $y=f(x)+a$: desplazamiento vertical.
- $y=f(x-a)$: desplazamiento horizontal hacia la derecha.
- $y=af(x)$: escala vertical.
- $y=f(ax)$: escala horizontal inversa.

El signo dentro del argumento suele causar errores. Comprueba un punto conocido de la gráfica original en lugar de confiar solo en memoria.

## Desigualdades y regiones

Resolver una desigualdad produce un intervalo, no solo un número. Si multiplicas o divides por una cantidad negativa, invierte el sentido. En una gráfica bidimensional, prueba un punto para decidir qué semiplano sombrear.

## Errores frecuentes

- Sumar términos no semejantes.
- Distribuir un signo negativo solo al primer término.
- Leer mal la escala de un eje.
- Confundir raíz con intercepto en $y$.
- Aplicar un desplazamiento horizontal en dirección contraria.
- Aceptar una raíz que no encaja en el contexto.

## Práctica que conecta

Toma una relación lineal y exprésala como historia, ecuación, tabla y gráfica. Repite con una cuadrática. Después resuelve una pregunta donde dos modelos se intersecten. Esa transferencia prepara mejor que una página de expansiones idénticas.

El campus virtual de Método Nebula desarrolla números, álgebra y gráficas, geometría analítica y funciones con teoría, ejemplos, práctica y preguntas de examen. Si quieres convertir errores dispersos en una ruta de nivel básico o avanzado, utiliza el botón de contacto.
`,de=`---
title: "GCSE Maths: histograms and cumulative frequency without confusing height and area"
date: "2026-10-15"
updated: "2026-10-28"
description: "Learn histograms, frequency density and cumulative frequency in GCSE Maths through calculation, interpretation and error checks."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-maths-revision-plan-foundation-higher-en,gcse-maths-algebra-graphs-revision-en"
image: "/assets/latex/histogram-density-en.svg"
language: "en"
translation: "gcse-maths-histograms-cumulative-frequency"
---

In a bar chart, height may represent frequency. In a histogram with unequal class widths, that rule fails: **the area of each bar represents frequency**. Its height is frequency density.

![Histogram with unequal classes and the relationship between area, density and frequency](/assets/latex/histogram-density-en.svg)

## The essential formula

$$
\\text{frequency density}=\\frac{\\text{frequency}}{\\text{class width}}.
$$

Equivalently, $\\text{frequency}=\\text{density}\\times\\text{class width}$. This is base times height: the bar's area.

## Table example

| Time (min) | Frequency | Width | Density |
|---|---:|---:|---:|
| $0<t\\le10$ | 8 | 10 | 0.8 |
| $10<t\\le20$ | 18 | 10 | 1.8 |
| $20<t\\le40$ | 24 | 20 | 1.2 |
| $40<t\\le50$ | 5 | 10 | 0.5 |

The third class has a greater frequency than the second but a lower bar because it is twice as wide. Area, not height alone, preserves the 24 observations.

## Recovering a frequency from the graph

If a bar runs from 30 to 50 with density 1.6:

$$
f=(50-30)\\cdot1.6=32.
$$

There are 32 observations in that interval. Write the width explicitly so that 50 is not mistaken for the base.

## Cumulative frequency

Cumulative frequency adds every observation up to each upper class boundary. Frequencies $8,18,24,5$ give cumulative totals $8,26,50,55$.

Plot the upper boundaries against these totals and join them with an increasing curve. It must never fall: adding another class cannot reduce the running total.

## Median and quartiles from the curve

For $N$ values, locate:

$$
Q_1:\\frac N4,\\qquad \\text{median}:\\frac N2,\\qquad Q_3:\\frac{3N}{4}.
$$

Move horizontally to the curve and then down to the value axis. Grouped data give estimates. The interquartile range $IQR=Q_3-Q_1$ measures the central spread and is less sensitive to extremes than the full range.

## Estimating inside a class

A cumulative curve can estimate how many values lie below a point inside a class. A table calculation usually assumes a uniform distribution within the interval. State that assumption: the original individual values are unavailable.

## Histogram versus bar chart

| Histogram | Bar chart |
|---|---|
| Grouped continuous variable | Categories or discrete values |
| Bars touch | Bars may be separated |
| Area represents frequency | Height usually represents frequency |
| Continuous numerical axis | A categorical axis is possible |

## Common mistakes

- Setting height equal to frequency for unequal classes.
- Using the upper boundary instead of the difference as class width.
- Leaving gaps between continuous intervals.
- Plotting class midpoints on a cumulative frequency graph.
- Reading quartiles at $N/3$ and $2N/3$.
- Reporting an estimate as exact.

## Quick checks

The total bar area must represent the total frequency. The final cumulative value must equal $N$, and $Q_1<\\text{median}<Q_3$ with a positive IQR.

Método Nebula's virtual campus develops statistics through tables, histograms, cumulative frequency, box plots and distribution comparisons. The contact button opens a route that trains calculation and written interpretation together.
`,ue=`---
title: "Matemáticas GCSE: histogramas y frecuencia acumulada sin confundir altura y área"
date: "2026-10-15"
updated: "2026-10-15"
description: "Aprende histogramas, densidad de frecuencia y frecuencia acumulada en Matemáticas GCSE con cálculo, interpretación y errores frecuentes."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-maths-revision-plan-foundation-higher,estadistica-descriptiva-eso-cuartiles-rango-diagrama-caja"
image: "/assets/latex/histogram-density.svg"
language: "es"
translation: "gcse-maths-histograms-cumulative-frequency-en"
---

En un diagrama de barras la altura puede representar frecuencia. En un histograma con intervalos de distinta anchura, esa idea deja de funcionar: **la frecuencia está representada por el área de cada barra**. La altura es la densidad de frecuencia.

![Histograma con clases de distinta anchura y relación entre área, densidad y frecuencia](/assets/latex/histogram-density.svg)

## La fórmula esencial

$$
\\text{densidad de frecuencia}=\\frac{\\text{frecuencia}}{\\text{anchura de clase}}.
$$

De forma equivalente:

$$
\\text{frecuencia}=\\text{densidad}\\times\\text{anchura de clase}.
$$

Geométricamente, el segundo producto es base por altura: el área de la barra.

## Ejemplo de tabla

| Tiempo (min) | Frecuencia | Anchura | Densidad |
|---|---:|---:|---:|
| $0<t\\le10$ | 8 | 10 | 0,8 |
| $10<t\\le20$ | 18 | 10 | 1,8 |
| $20<t\\le40$ | 24 | 20 | 1,2 |
| $40<t\\le50$ | 5 | 10 | 0,5 |

La tercera clase tiene mayor frecuencia que la segunda, pero su barra es más baja porque ocupa el doble de anchura. El área, no la altura aislada, conserva los 24 datos.

## Recuperar una frecuencia desde el gráfico

Si una barra abarca de 30 a 50 y tiene densidad 1,6:

$$
f=(50-30)\\cdot1,6=32.
$$

Hay 32 observaciones en ese intervalo. Escribe la anchura explícitamente para evitar tomar 50 como base.

## Frecuencia acumulada

La frecuencia acumulada suma todas las observaciones hasta cada límite superior. Si las frecuencias son $8,18,24,5$, las acumuladas son:

$$
8,\\ 26,\\ 50,\\ 55.
$$

En el gráfico se representan los límites superiores frente a estas sumas y se unen con una curva creciente. Nunca debe descender: añadir una clase no puede reducir el total acumulado.

## Mediana y cuartiles desde la curva

Para $N$ datos se localizan aproximadamente:

$$
Q_1:\\frac N4,\\qquad \\text{mediana}:\\frac N2,\\qquad Q_3:\\frac{3N}{4}.
$$

Se entra horizontalmente desde esas frecuencias acumuladas hasta la curva y después se baja al eje de valores. Al trabajar con datos agrupados, el resultado es una estimación.

El rango intercuartílico es:

$$
IQR=Q_3-Q_1.
$$

Sirve para comparar dispersión central y es menos sensible a valores extremos que el rango total.

## Estimar dentro de una clase

Cuando se pregunta cuántos datos están por debajo de un valor interior de una clase, la curva acumulada permite leer una estimación. Si se calcula desde una tabla, normalmente se supone distribución uniforme dentro del intervalo. Esa suposición debe reconocerse: los datos originales no están disponibles individualmente.

## Histograma frente a diagrama de barras

| Histograma | Diagrama de barras |
|---|---|
| Variable continua agrupada | Categorías o valores discretos |
| Barras contiguas | Puede haber separación |
| Área representa frecuencia | Altura suele representar frecuencia |
| Eje horizontal numérico continuo | Eje horizontal categórico posible |

## Errores frecuentes

- Dibujar altura igual a frecuencia con clases desiguales.
- Calcular anchura como límite superior en vez de diferencia.
- Dejar huecos entre intervalos continuos.
- Usar puntos medios en una gráfica de frecuencia acumulada; se usan límites superiores.
- Leer cuartiles en $N/3$ y $2N/3$.
- Presentar una estimación como valor exacto.

## Comprobaciones rápidas

La suma de las áreas de las barras debe representar el total. La acumulada final tiene que coincidir con $N$; además, debe cumplirse $Q_1<\\text{mediana}<Q_3$ y el IQR ha de ser positivo.

El campus virtual de Método Nebula desarrolla estadística con tablas, histogramas, frecuencia acumulada, diagramas de caja y comparación de distribuciones mediante ejercicios y preguntas de examen. El botón de contacto permite solicitar una ruta que trabaja conjuntamente el cálculo y la interpretación escrita.
`,me=`---
title: "GCSE Maths: probability trees and conditional probability without adding the wrong branches"
seoTitle: "GCSE Maths: probability trees and conditional probability"
date: "2026-09-16"
updated: "2026-09-16"
description: "Master GCSE probability trees: dependent events, sampling without replacement, conditional probability, branch products and checks."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-maths-histograms-cumulative-frequency-en,gcse-maths-algebra-graphs-revision-en,gcse-maths-transformations-vectors-en"
image: "/assets/latex/probability-tree-conditional.svg"
language: "en"
translation: "gcse-maths-probability-trees-conditional"
---

A probability tree is more than a diagram carrying fractions. Each route represents an intersection of events and each split must contain probabilities conditional on what has already happened.

> **Direct answer.** Multiply probabilities along one route because all its events must occur. Add complete routes when any of them gives the required result. Without replacement, update both numerator and denominator after the first selection.

![Probability tree with events A and B and conditional probabilities](/assets/latex/probability-tree-conditional.svg)

## Rules that build the tree

At every split, branch probabilities add to 1:

$$
P(A)+P(A^c)=1.
$$

For a two-stage route:

$$
P(A\\cap B)=P(A)P(B\\mid A).
$$

$P(B\\mid A)$ means the probability of B given that A has occurred. It need not equal $P(B)$.

## Replacement and independence

A bag contains 3 red balls and 2 blue balls. One ball is taken, replaced and a second is taken. The probability of two reds is:

$$
P(RR)=\\frac35\\cdot\\frac35=\\frac9{25}.
$$

The bag returns to its original composition, so the selections are independent in this model.

Getting one of each colour has two routes:

$$
P(RB\\text{ or }BR)=\\frac35\\frac25+\\frac25\\frac35=\\frac{12}{25}.
$$

Multiplying only one route would omit a possible order.

## Without replacement

Using the same bag without returning the first ball:

$$
P(RR)=\\frac35\\cdot\\frac24=\\frac3{10}.
$$

After one red has been removed, 2 reds remain among 4 balls. If the first ball were blue, the second red probability would be $3/4$. Each second branch depends on the first outcome.

## Conditional probability from data

The definition is:

$$
P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)},
$$

provided $P(B)>0$. The denominator restricts the sample space to cases where B occurred.

If 40 students play sport, 18 of those also play an instrument, and there are 100 students in total:

$$
P(I\\mid S)=\\frac{18/100}{40/100}=\\frac{18}{40}=0.45.
$$

Dividing by 100 would answer $P(I\\cap S)$ instead of the conditional question.

## Reversing a tree and Bayes' rule

A tree may give $P(A)$, $P(B\\mid A)$ and $P(B\\mid A^c)$ but ask for $P(A\\mid B)$. First calculate:

$$
P(B)=P(A)P(B\\mid A)+P(A^c)P(B\\mid A^c),
$$

then:

$$
P(A\\mid B)=\\frac{P(A)P(B\\mid A)}{P(B)}.
$$

A condition cannot be reversed by swapping letters. $P(A\\mid B)$ and $P(B\\mid A)$ use different restricted sample spaces.

## Quick checks

- Each pair of branches from one node adds to 1.
- Every probability lies between 0 and 1.
- All complete end routes add to 1.
- Without replacement, the total number of objects falls.
- “At least one” may be easier as $1-P(\\text{none})$.

## Common mistakes

- Adding probabilities along one route.
- Multiplying alternative routes.
- Keeping the same denominator without replacement.
- Confusing mutually exclusive and independent events.
- Rounding each branch before the final result.

## From one tree to complete GCSE preparation

Método Nebula's virtual campus connects probability, statistics and algebra through visual examples, graded practice and exam questions. Trees are trained first as structures and then as conditional calculations. Use the contact button to access a bilingual route with theory, exercises and worked models.
`,pe=`---
title: "Matemáticas GCSE: árboles de probabilidad y probabilidad condicionada sin sumar ramas equivocadas"
seoTitle: "Matemáticas GCSE: árboles y probabilidad condicionada"
date: "2026-09-16"
updated: "2026-09-16"
description: "Domina árboles de probabilidad GCSE: sucesos dependientes, sin reemplazo, probabilidad condicionada, productos de ramas y comprobaciones."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-maths-histograms-cumulative-frequency,gcse-maths-algebra-graphs-revision,gcse-maths-transformations-vectors"
image: "/assets/latex/probability-tree-conditional.svg"
language: "es"
translation: "gcse-maths-probability-trees-conditional-en"
---

Un árbol de probabilidad no es solo un dibujo con fracciones. Cada recorrido representa una intersección de sucesos y cada bifurcación debe contener probabilidades condicionadas a lo que ya ocurrió.

> **Respuesta directa.** Multiplica probabilidades a lo largo de una ruta porque deben ocurrir todos sus sucesos. Suma rutas completas cuando cualquiera de ellas sirve. Si no hay reemplazo, actualiza numerador y denominador después de la primera extracción.

![Árbol de probabilidad con sucesos A y B y probabilidades condicionadas](/assets/latex/probability-tree-conditional.svg)

## Las reglas que construyen el árbol

En cada bifurcación, las probabilidades deben sumar 1:

$$
P(A)+P(A^c)=1.
$$

Para una ruta de dos etapas:

$$
P(A\\cap B)=P(A)P(B\\mid A).
$$

El símbolo $P(B\\mid A)$ se lee “probabilidad de B sabiendo que A ha ocurrido”. No tiene por qué ser igual a $P(B)$.

## Con reemplazo e independencia

Una bolsa contiene 3 bolas rojas y 2 azules. Se extrae una bola, se devuelve y se repite. La probabilidad de dos rojas es:

$$
P(RR)=\\frac35\\cdot\\frac35=\\frac9{25}.
$$

La composición de la bolsa vuelve a ser la misma. Las extracciones son independientes en este modelo.

La probabilidad de obtener una de cada color tiene dos rutas:

$$
P(RA\\text{ o }AR)=\\frac35\\frac25+\\frac25\\frac35=\\frac{12}{25}.
$$

Multiplicar una sola ruta omitiría un orden posible.

## Sin reemplazo

Con la misma bolsa, pero sin devolver la primera bola:

$$
P(RR)=\\frac35\\cdot\\frac24=\\frac3{10}.
$$

Después de sacar una roja quedan 2 rojas entre 4 bolas. Si la primera fuera azul, la segunda probabilidad roja sería $3/4$. Cada segunda rama depende de la primera.

## Probabilidad condicionada desde datos

La definición es:

$$
P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)},
$$

si $P(B)>0$. El denominador reduce el universo a los casos donde B ocurrió.

Si 40 estudiantes practican deporte, 18 de ellos tocan un instrumento y hay 100 estudiantes en total:

$$
P(I\\mid D)=\\frac{18/100}{40/100}=\\frac{18}{40}=0.45.
$$

Dividir entre 100 sería responder a $P(I\\cap D)$, no a la pregunta condicionada.

## Árbol inverso y Bayes

Un árbol puede dar $P(A)$, $P(B\\mid A)$ y $P(B\\mid A^c)$ y preguntar $P(A\\mid B)$. Primero calcula:

$$
P(B)=P(A)P(B\\mid A)+P(A^c)P(B\\mid A^c),
$$

y después:

$$
P(A\\mid B)=\\frac{P(A)P(B\\mid A)}{P(B)}.
$$

No se invierte una condición intercambiando letras. $P(A\\mid B)$ y $P(B\\mid A)$ responden a universos diferentes.

## Comprobaciones rápidas

- Cada pareja de ramas desde un nodo suma 1.
- Cada probabilidad está entre 0 y 1.
- La suma de todas las rutas finales es 1.
- Sin reemplazo, el total de objetos disminuye.
- Una respuesta “al menos uno” puede calcularse como $1-P(\\text{ninguno})$.

## Errores frecuentes

- Sumar probabilidades dentro de una ruta.
- Multiplicar rutas alternativas.
- Mantener el mismo denominador sin reemplazo.
- Confundir mutuamente excluyentes con independientes.
- Redondear cada rama antes del resultado final.

## De un árbol a una preparación GCSE completa

El campus virtual de Método Nebula conecta probabilidad, estadística y álgebra con ejemplos visuales, práctica graduada y preguntas de examen. Los árboles se trabajan primero como estructura y después como cálculo condicionado. El botón de contacto permite acceder a una ruta bilingüe con teoría, ejercicios y modelos resueltos.
`,$e=`---
title: "GCSE Maths: an eight-week plan to improve at Foundation or Higher"
date: "2026-09-10"
updated: "2026-10-28"
description: "An eight-week GCSE Maths plan using diagnosis, spaced practice and purposeful mock papers for Foundation or Higher."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-maths-algebra-graphs-revision-en,gcse-maths-histograms-cumulative-frequency-en,gcse-maths-trigonometry-bearings-en"
image: "/assets/latex/learning-cycle-en.svg"
language: "en"
translation: "gcse-maths-revision-plan-foundation-higher"
---

You can study GCSE Maths for weeks and barely change your mark: complete worksheets on familiar topics, check only the final answer and save full papers for the last few days. It looks productive but reveals little about what blocks progress.

A plan that improves marks works differently. **Measure first, turn each error into a decision and test it again after the solution has faded from memory.** This eight-week route works for Foundation and Higher and can be compressed when time is short.

![Cycle of diagnosis, theory, practice, exam work and spaced retrieval for GCSE Maths](/assets/latex/learning-cycle-en.svg)

## Before the calendar: find where marks are lost

Use a short diagnostic covering number, algebra and graphs, geometry, mensuration, trigonometry, probability and statistics. Do not focus on the overall score. Classify each question:

| Outcome | Meaning | Next action |
|---|---|---|
| I cannot start | Concept or recognition gap | Brief theory and guided example |
| I start but get stuck | Multi-step gap | Worked example and a variation |
| Correct method, wrong arithmetic | Fluency or checking gap | Short practice and verification |
| Correct result, weak explanation | Method marks at risk | Rewrite the complete solution |

Two students scoring 58% may need opposite plans. One may need fractions and proportion; another calculates well but cannot recognise modelling questions.

## The eight-week plan

### Weeks 1 and 2: close gaps that affect everything

Prioritise fractions, percentages, ratio, powers, standard form and algebraic manipulation. These skills sit inside trigonometry, probability and graphs. Solve a few, correct them, explain the error and return the next day with mixed variants.

### Weeks 3 and 4: connect representations

Work on equations, graphs, coordinates, geometry and measurement. Translate a sentence into an expression, an equation into a graph and a diagram into a calculation. At Higher, add functions, algebraic proof, quadratics and problems that do not announce the method.

### Weeks 5 and 6: mix topics and exam language

Use 25–35 minute blocks drawn from different units. The goal is to recognise the tool without a worksheet heading. Command words such as *show*, *estimate*, *prove*, *give a reason* and *hence* tell you what evidence must appear.

### Weeks 7 and 8: papers, timing and retrieval

Complete papers or sections under real timing. Spend at least as much effort reviewing them. Retry errors after 48 hours and find a variation one week later. A paper ends only when every error has an assigned action.

## A 75-minute session that leaves learning behind

1. **10 minutes:** retrieve two previous errors without notes.
2. **15 minutes:** minimum theory and one worked example.
3. **25 minutes:** independent practice of the same pattern.
4. **15 minutes:** two mixed or timed questions.
5. **10 minutes:** diagnose causes and choose the next step.

“I completed twelve questions” is not enough. State which decision you can now make better.

## Foundation and Higher need different strategies

At Foundation, quick gains often come from securing arithmetic, proportion, equations, scales, area, graphs and data while eliminating avoidable errors.

At Higher, fluency must be combined with unfamiliar problems. A function may appear inside geometry; ratio may hide in similarity; a proof may require transforming both sides without a predetermined path.

Choose a tier using evidence from several papers and the centre's awarding-body rules, not one bad afternoon.

## Example: why “I know percentages” is not enough

An £80 price rises by 20% and then falls by 20%:

$$
80\\cdot1.20=96,\\qquad96\\cdot0.80=76.80.
$$

It does not return to £80 because the second percentage uses a different base. That explanation is part of the answer.

## Five errors that slow progress

- Practising only the topic named in the heading.
- Looking at a solution before proposing a first step.
- Labelling an error “careless” without identifying its cause.
- Rounding during the calculation.
- Completing papers without retrieving failed questions later.

## Weekly mini-audit

Ask: which topic no longer needs support, which error repeats, which question can I now explain, and which block deserves more time next week? A useful plan changes when the evidence changes.

## From the article to a complete route

Método Nebula's virtual campus organises GCSE Mathematics by unit, with theory, worked examples, guided exercises, independent practice, exam questions, tests and error review. The contact button can turn an exam date, current tier and starting point into a realistic calendar.
`,ge=`---
title: "Matemáticas GCSE: el plan de 8 semanas para subir nota en nivel básico o avanzado"
date: "2026-09-10"
updated: "2026-10-28"
description: "Un plan de 8 semanas para preparar Matemáticas GCSE con diagnóstico, práctica espaciada y simulacros útiles en nivel básico o avanzado."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-maths-algebra-graphs-revision,ib-gcse-como-preparar-examenes-internacionales,como-estudiar-matematicas-sin-memorizar"
image: "/assets/latex/learning-cycle.svg"
language: "es"
translation: "gcse-maths-revision-plan-foundation-higher-en"
---

Hay una forma de estudiar Matemáticas GCSE durante semanas y seguir obteniendo casi la misma nota: hacer hojas de ejercicios de temas conocidos, corregir mirando únicamente el resultado y reservar los exámenes completos para los últimos días. Parece trabajo, pero produce muy poca información sobre lo que impide avanzar.

Un plan que sube nota funciona al revés. **Empieza midiendo, convierte cada error en una decisión y vuelve a comprobarlo cuando ya no recuerdas la solución.** Esta guía propone una ruta de ocho semanas que sirve para el nivel básico y el avanzado y que puede comprimirse si queda menos tiempo.

![Ciclo de diagnóstico, teoría, práctica, examen y recuperación espaciada para Matemáticas GCSE](/assets/latex/learning-cycle.svg)

## Antes del calendario: descubre dónde se pierden las marcas

Haz una prueba breve con preguntas de números, álgebra y gráficas, geometría, medida, trigonometría, probabilidad y estadística. No busques todavía una nota. Clasifica cada pregunta con dos datos:

| Resultado | Qué significa | Próxima acción |
|---|---|---|
| No sé empezar | Falta concepto o reconocimiento | Teoría breve y ejemplo guiado |
| Empiezo bien y me bloqueo | Falta encadenar pasos | Ejercicio resuelto y variante |
| Método correcto, cuenta incorrecta | Falta fluidez o revisión | Práctica corta y comprobación |
| Resultado correcto, explicación débil | Riesgo de perder puntos por el procedimiento | Reescribir la solución completa |

Esta matriz es más útil que un porcentaje general. Dos estudiantes con un 58% pueden necesitar planes opuestos: uno debe reforzar fracciones y proporciones; el otro sabe calcular, pero no reconoce preguntas de modelización.

## El plan de ocho semanas

### Semanas 1 y 2: cierra los agujeros que contaminan todo

Prioriza operaciones con fracciones, porcentajes, razones, potencias, notación científica y manipulación algebraica. Son habilidades que aparecen dentro de otros temas. Si fallan, también fallan trigonometría, probabilidad y gráficas aunque el concepto principal se entienda.

No hagas cincuenta ejercicios iguales. Resuelve cuatro, corrige, explica el error y vuelve al día siguiente con dos variantes mezcladas.

### Semanas 3 y 4: conecta representaciones

Trabaja ecuaciones, gráficas, coordenadas, geometría y medida. Practica cambios de formato: de una frase a una expresión, de una ecuación a una gráfica y de un diagrama a un cálculo. En el nivel avanzado añade funciones, demostración algebraica, cuadráticas y problemas donde el método no se anuncia.

### Semanas 5 y 6: mezcla temas y lenguaje de examen

Introduce bloques de 25–35 minutos con preguntas de distintas unidades. La meta es reconocer la herramienta sin que el título de la hoja de ejercicios la revele. Subraya verbos como *demuestra*, *estima*, *prueba*, *justifica* y *por tanto*: indican qué evidencia debe aparecer en la respuesta.

### Semanas 7 y 8: exámenes, tiempo y recuperación

Haz exámenes o secciones completas con el tiempo real. Después dedica al menos el mismo esfuerzo a corregir. Repite las preguntas falladas 48 horas más tarde y busca una variante una semana después. Un examen no termina al calcular la nota; termina cuando sus errores ya tienen una acción asignada.

## Una sesión de 75 minutos que deja aprendizaje

1. **10 minutos:** recuperación sin apuntes de dos errores anteriores.
2. **15 minutos:** teoría mínima y un ejemplo trabajado.
3. **25 minutos:** práctica independiente del mismo patrón.
4. **15 minutos:** dos preguntas mezcladas o cronometradas.
5. **10 minutos:** corrección por causa y elección del siguiente paso.

Si al terminar solo puedes decir “he hecho doce ejercicios”, la sesión no está cerrada. Debes poder decir qué decisión ahora tomas mejor que al empezar.

## El nivel básico y el avanzado no requieren la misma estrategia

En el nivel básico, la ganancia más rápida suele venir de asegurar aritmética, proporcionalidad, ecuaciones, escalas, áreas, gráficas y datos. El objetivo es reducir errores evitables y convertir procedimientos básicos en respuestas completas.

En el nivel avanzado, además de esa fluidez, necesitas tolerar preguntas no rutinarias. Una función puede aparecer dentro de geometría; una razón puede esconderse en un problema de semejanza; una demostración puede exigir transformar ambos lados sin saber de antemano cuál será el camino.

La decisión entre niveles debe tomarse con evidencia de varios exámenes y conociendo las reglas del centro y del organismo examinador correspondiente, no por una única mala tarde.

## Ejemplo: por qué “sé porcentajes” no basta

Un precio aumenta un 20% y después baja un 20%. Si costaba £80:

$$
80\\cdot1.20=96,
$$

$$
96\\cdot0.80=76.80.
$$

No vuelve a £80 porque el segundo porcentaje se aplica sobre una base distinta. La explicación es parte de la respuesta. Este tipo de conexión diferencia memorizar una operación de comprender el modelo multiplicativo.

## Los cinco errores que más frenan el progreso

- Practicar solo el tema que aparece en el encabezado.
- Mirar la solución antes de formular un primer paso propio.
- Marcar un error como “despiste” sin identificar su causa.
- Redondear durante el cálculo y arrastrar pérdida de precisión.
- Hacer exámenes completos sin recuperar después las preguntas falladas.

## Mini auditoría semanal

Cada domingo responde: ¿qué tema ha dejado de necesitar apoyo?, ¿qué error se repite?, ¿qué pregunta puedo explicar ahora?, ¿qué bloque merece más tiempo la semana siguiente? Ajusta el calendario con esas respuestas. Un plan útil cambia cuando cambian los datos.

## Del artículo a una ruta completa

El campus virtual de Método Nebula permite recorrer Matemáticas GCSE por unidades, con teoría, ejemplos trabajados, ejercicios guiados, práctica independiente, preguntas de examen, pruebas y revisión de errores. No sustituye el esfuerzo: evita que ese esfuerzo se disperse.

Si quieres saber por dónde empezar, qué nivel encaja con la situación y cómo convertir la fecha del examen en un calendario real, utiliza el botón de contacto. La primera conversación sirve para diagnosticar, no para vender horas al azar.
`,fe=`---
title: "GCSE Maths: transformations and vectors without getting lost on the grid"
seoTitle: "GCSE Maths: transformations and vectors"
date: "2026-10-19"
updated: "2026-10-19"
description: "Master GCSE translations, rotations, reflections, enlargements and vectors with correct notation, centres and scale factors."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-maths-algebra-graphs-revision-en,gcse-maths-trigonometry-bearings-en,gcse-maths-histograms-cumulative-frequency-en"
image: "/assets/latex/gcse-vector-transform.svg"
language: "en"
translation: "gcse-maths-transformations-vectors"
---

In transformation questions, a correct image may earn few marks if its description is incomplete. “It moves” is not enough: name the transformation and state every parameter that defines it.

> **Direct answer.** A translation needs a vector; a rotation needs centre, angle and direction; a reflection needs its mirror line; an enlargement needs centre and scale factor. Vectors describe displacements and add component by component.

![A triangle translated on a coordinate grid by a vector](/assets/latex/gcse-vector-transform.svg)

## Translations

The vector

$$
\\begin{pmatrix}5\\\\2\\end{pmatrix}
$$

means 5 units right and 2 units up. Every vertex receives exactly the same displacement.

Do not report final coordinates as the vector. Use:

$$
\\text{vector}=\\text{final point}-\\text{initial point}.
$$

## Rotations

A complete description states:

- centre;
- angle;
- clockwise or anticlockwise direction.

Every point keeps the same distance from the centre. Draw a line from the centre to one vertex, construct the angle and repeat consistently.

## Reflections

The mirror line is the perpendicular bisector of each segment joining a point to its image. To recover an unknown mirror line, join corresponding points and mark their midpoints.

Lines such as $x=2$, $y=-1$ and $y=x$ behave differently; sketch the line first.

## Enlargements

For centre $C$ and scale factor $k$:

$$
\\overrightarrow{CP'}=k\\overrightarrow{CP}.
$$

- $k>1$: larger image.
- $0<k<1$: smaller image.
- $k<0$: image on the opposite side of the centre.

A negative scale factor is valid and changes relative orientation.

## Vectors and routes

If $\\vec a=\\binom{3}{1}$ and $\\vec b=\\binom{-2}{4}$:

$$
\\vec a+\\vec b=\\begin{pmatrix}1\\\\5\\end{pmatrix}.
$$

Two routes with the same start and finish have the same resultant vector. This supports proofs about parallel lines and midpoints.

## Midpoint example

If $M$ is the midpoint of $AB$:

$$
\\overrightarrow{AM}=\\frac12\\overrightarrow{AB}.
$$

If $\\vec{OA}=\\vec a$ and $\\vec{OB}=\\vec b$:

$$
\\vec{OM}=\\frac{\\vec a+\\vec b}{2}.
$$

## Invariants that check the construction

Translations, rotations and reflections preserve lengths and angles, so they are isometries. An enlargement preserves angles but multiplies every length by $|k|$ and every area by $k^2$. If an image enlarged by $k=3$ has a 12 cm side, the original side was 4 cm, while the image area is nine times the original.

These properties reveal mistakes without repeating the whole construction. Under reflection, a point and its image must be equally far from the mirror line. Under rotation, both must be equally far from the centre. Under translation, the segments joining corresponding points are parallel, equal and point in the same direction.

## A short vector proof

If $P$ divides $AB$ in the ratio $AP:PB=2:1$, it lies two thirds of the way from $A$ to $B$:

$$
\\vec{OP}=\\vec a+\\frac23(\\vec b-\\vec a)
=\\frac13\\vec a+\\frac23\\vec b.
$$

The coefficients add to 1, confirming that $P$ lies on line $AB$. To prove that two segments are parallel, show that their vectors are scalar multiples. To prove that they also have equal length and direction, show that the vectors are equal.

In a multi-mark question, write each equality and state the geometric conclusion it supports. A correct final expression without the logical link can lose a reasoning mark.

## Common mistakes

- Omitting the centre of rotation or enlargement.
- Reversing vector components.
- Using a positive component for a move down or left.
- Scaling coordinates from the origin when the centre is elsewhere.
- Describing the image without naming the transformation.

Método Nebula's virtual campus connects geometry, coordinates, transformations and vectors through worked examples and graded GCSE questions. Contact us for a route combining accurate construction with algebraic reasoning.
`,xe=`---
title: "Matemáticas GCSE: transformaciones y vectores sin perderte en el plano"
seoTitle: "Matemáticas GCSE: transformaciones y vectores"
date: "2026-10-19"
updated: "2026-10-19"
description: "Domina traslaciones, giros, simetrías, ampliaciones y vectores GCSE con notación correcta, centros y factores de escala."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-maths-algebra-graphs-revision,gcse-maths-trigonometry-bearings,gcse-maths-histograms-cumulative-frequency"
image: "/assets/latex/gcse-vector-transform.svg"
language: "es"
translation: "gcse-maths-transformations-vectors-en"
---

En transformaciones, una figura correcta puede recibir pocos puntos si falta la descripción completa. No basta con escribir “se mueve”: hay que nombrar la transformación y aportar los datos que la determinan.

> **Respuesta directa.** Una traslación necesita un vector; un giro, centro, ángulo y sentido; una simetría, su recta; una ampliación, centro y factor de escala. Los vectores describen desplazamientos y se suman componente a componente.

![Triángulo trasladado en una cuadrícula mediante un vector](/assets/latex/gcse-vector-transform.svg)

## Traslaciones

El vector

$$
\\begin{pmatrix}5\\\\2\\end{pmatrix}
$$

significa 5 unidades a la derecha y 2 hacia arriba. Cada vértice recibe exactamente el mismo desplazamiento.

No escribas coordenadas de destino como si fueran el vector. Calcula:

$$
\\text{vector}=\\text{punto final}-\\text{punto inicial}.
$$

## Giros

Una descripción completa incluye:

- centro;
- ángulo;
- sentido horario o antihorario.

Para un giro de $90^\\circ$, cada punto conserva su distancia al centro. Marca el centro, une un vértice y construye el ángulo antes de repetir con los demás.

## Simetrías

La recta de simetría es la mediatriz de cada segmento que une un punto con su imagen. Si te piden hallar la recta, une pares correspondientes y busca sus puntos medios.

Rectas como $x=2$, $y=-1$ o $y=x$ no se interpretan igual: dibújalas antes de reflejar.

## Ampliaciones

Con centro $C$ y factor $k$:

$$
\\overrightarrow{CP'}=k\\overrightarrow{CP}.
$$

- $k>1$: figura mayor.
- $0<k<1$: figura menor.
- $k<0$: la imagen queda al otro lado del centro.

Un factor negativo cambia tamaño y orientación relativa; no significa “factor imposible”.

## Vectores y recorridos

Si $\\vec a=\\binom{3}{1}$ y $\\vec b=\\binom{-2}{4}$:

$$
\\vec a+\\vec b=\\begin{pmatrix}1\\\\5\\end{pmatrix}.
$$

En geometría, dos rutas con el mismo inicio y final representan el mismo vector resultante. Esta idea permite justificar paralelismo y puntos medios sin medir.

## Ejemplo de razón vectorial

Si $M$ es el punto medio de $AB$:

$$
\\overrightarrow{AM}=\\frac12\\overrightarrow{AB}.
$$

Si $\\vec{OA}=\\vec a$ y $\\vec{OB}=\\vec b$, entonces:

$$
\\vec{OM}=\\frac{\\vec a+\\vec b}{2}.
$$

## Invariantes que permiten comprobar el dibujo

Traslaciones, giros y simetrías conservan longitudes y ángulos; por eso se llaman transformaciones isométricas. Una ampliación conserva ángulos, pero multiplica cada longitud por $|k|$ y cada área por $k^2$. Si una figura ampliada con $k=3$ tiene un lado de 12 cm, el lado original medía 4 cm, mientras que el área de la imagen es nueve veces la original.

Estas propiedades detectan errores sin repetir toda la construcción. En una simetría, cada punto y su imagen deben estar a igual distancia de la recta. En un giro, ambos deben quedar a igual distancia del centro. En una traslación, los segmentos que unen puntos correspondientes son paralelos, iguales y con el mismo sentido.

## Demostración vectorial breve

Si $P$ divide el segmento $AB$ en la razón $AP:PB=2:1$, entonces recorre dos tercios del camino desde $A$ hasta $B$:

$$
\\vec{OP}=\\vec a+\\frac23(\\vec b-\\vec a)
=\\frac13\\vec a+\\frac23\\vec b.
$$

La suma de los coeficientes es 1, lo que confirma que $P$ está en la recta $AB$. Para demostrar que dos segmentos son paralelos, basta obtener vectores que sean múltiplos escalares; para demostrar que también tienen igual longitud y sentido, los vectores deben ser iguales.

En preguntas de varios puntos, escribe cada igualdad y justifica la conclusión geométrica. Un resultado correcto sin enlace lógico puede perder la marca de razonamiento.

## Errores frecuentes

- Omitir el centro de giro o ampliación.
- Intercambiar componentes del vector.
- Usar signo positivo cuando el movimiento es hacia abajo o izquierda.
- Aplicar el factor de escala a coordenadas respecto al origen, aunque el centro sea otro.
- Describir una figura sin nombrar la transformación.

El campus de Método Nebula reúne geometría, coordenadas, transformaciones y vectores con ejemplos, práctica graduada y preguntas GCSE. Contacta si quieres una ruta que combine dibujo preciso y justificación algebraica.
`,ve=`---
title: "GCSE Maths: trigonometry and bearings without impossible angles"
date: "2026-09-30"
updated: "2026-10-28"
description: "Solve bearings and trigonometry in GCSE Maths using north lines, SOHCAHTOA, sine and cosine rules, and geometric checks."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-maths-algebra-graphs-revision-en,gcse-maths-revision-plan-foundation-higher-en"
image: "/assets/latex/bearing-triangle-en.svg"
language: "en"
translation: "gcse-maths-trigonometry-bearings"
---

Bearings problems combine a map, an angle convention and trigonometry. Most errors happen before the calculator is used because the angle has been drawn at the wrong point.

A bearing is measured **clockwise from north and written with three digits**. Once the diagram obeys those rules, the trigonometry becomes much safer.

![Journey through three points with north lines, a bearing and a distance triangle](/assets/latex/bearing-triangle-en.svg)

## Translating a bearing into a diagram

The bearing $056^\\circ$ from A to B has its vertex at A. Start from the north line through A and turn clockwise by $56^\\circ$; the final direction is ray AB.

It is not the angle to a horizontal and it is not measured from B. The starting point determines the vertex.

## Parallel north lines

North lines drawn at different points on a flat map are parallel. Alternate and supplementary angles can therefore reveal the internal angles of the journey triangle. This is the geometric link often missed when two bearings are given.

## Right-angled triangles: SOHCAHTOA

$$
\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}},\\qquad
\\cos\\theta=\\frac{\\text{adjacent}}{\\text{hypotenuse}},
$$

$$
\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}.
$$

Label sides relative to the chosen angle before selecting a ratio. Opposite and adjacent change with the reference angle; the hypotenuse does not.

## Non-right-angled triangles

With a known opposite side–angle pair, the sine rule is often natural:

$$
\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}.
$$

With two sides and the included angle, or with three sides, use the cosine rule:

$$
a^2=b^2+c^2-2bc\\cos A.
$$

Choose from the data, not from the formula remembered first.

## Example with two legs

A boat travels 12 km on bearing $056^\\circ$ from A to B, then 8 km on bearing $124^\\circ$ from B to C. Find AC.

BA is opposite to AB, so its bearing from B is $056^\\circ+180^\\circ=236^\\circ$. The smaller difference from $124^\\circ$ is $B=112^\\circ$. Hence:

$$
AC^2=12^2+8^2-2\\cdot12\\cdot8\\cos112^\\circ,
$$

$$
AC\\approx16.73\\ \\mathrm{km}.
$$

Because the included angle is obtuse, its opposite side should be the longest. The result passes that check.

## Reverse bearing

Add or subtract $180^\\circ$ and return to $000^\\circ$–$360^\\circ$. The reverse of $056^\\circ$ is $236^\\circ$; the reverse of $310^\\circ$ is $130^\\circ$.

## Common mistakes

- Measuring from east as on coordinate axes.
- Turning anticlockwise.
- Writing $56^\\circ$ instead of $056^\\circ$.
- Subtracting bearings without checking the vertex.
- Using SOHCAHTOA in a non-right-angled triangle.
- Leaving the calculator in radians.
- Rounding an intermediate angle too early.

## Exam protocol

Use this chain: north references → clockwise turns → journey triangle → internal angles → trigonometric rule → calculation → geometric check → three-digit bearing. Every step should justify the next.

Método Nebula's virtual campus develops trigonometry, geometry and bearings through visual theory, guided exercises and exam-style questions. The contact button opens a route in which the diagram is a reasoning tool, not decoration.
`,be=`---
title: "Matemáticas GCSE: trigonometría y rumbos con un dibujo que evita ángulos imposibles"
date: "2026-09-30"
updated: "2026-09-30"
description: "Resuelve rumbos y trigonometría en Matemáticas GCSE: norte, ángulos, seno, coseno y comprobaciones con un ejemplo."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-maths-algebra-graphs-revision,gcse-maths-revision-plan-foundation-higher"
image: "/assets/latex/bearing-triangle.svg"
language: "es"
translation: "gcse-maths-trigonometry-bearings-en"
---

Los problemas de **rumbos** parecen difíciles porque mezclan un mapa, una convención angular y trigonometría. La mayoría de errores no ocurre al usar la calculadora: ocurre al dibujar el ángulo en el lugar equivocado.

Un rumbo se mide **desde el norte, en sentido horario y se escribe con tres cifras**. Si el dibujo respeta esas tres reglas, la trigonometría posterior se vuelve mucho más segura.

![Recorrido entre tres puntos con líneas norte, rumbo y triángulo de distancias](/assets/latex/bearing-triangle.svg)

## Traducir un rumbo a un dibujo

El rumbo $056^\\circ$ desde A hacia B significa:

El vértice del ángulo está en A y la referencia inicial es la línea norte que pasa por ese punto. Desde ella se realiza un giro horario de $56^\\circ$; la dirección final del giro determina la semirrecta AB.

No es el ángulo que forma AB con una horizontal ni se mide desde B. Es un giro orientado cuyo vértice está en el punto de salida.

## Líneas norte paralelas

En un mapa plano, las líneas norte dibujadas en distintos puntos son paralelas. Por eso pueden usarse ángulos alternos y suplementarios para encontrar los ángulos internos del triángulo del recorrido.

Esta es la conexión geométrica que suele faltar cuando un ejercicio entrega dos rumbos y pide una distancia.

## Triángulo rectángulo: SOHCAHTOA

Si aparece un ángulo recto:

$$
\\sin\\theta=\\frac{\\text{opuesto}}{\\text{hipotenusa}},\\qquad
\\cos\\theta=\\frac{\\text{adyacente}}{\\text{hipotenusa}},
$$

$$
\\tan\\theta=\\frac{\\text{opuesto}}{\\text{adyacente}}.
$$

Etiqueta los lados respecto al ángulo elegido antes de escoger razón. “Opuesto” y “adyacente” cambian cuando cambia el ángulo de referencia; “hipotenusa” no.

## Triángulos no rectángulos

Si conoces un par lado–ángulo opuesto, la regla del seno suele ser natural:

$$
\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}.
$$

Si conoces dos lados y el ángulo comprendido, o tres lados, usa la regla del coseno:

$$
a^2=b^2+c^2-2bc\\cos A.
$$

La elección depende de los datos, no de la fórmula que recuerdes primero.

## Ejemplo con dos trayectos

Un barco navega 12 km con rumbo $056^\\circ$ desde A hasta B. Después recorre 8 km con rumbo $124^\\circ$ desde B hasta C. ¿Qué distancia separa A y C?

La dirección BA es la opuesta a AB, así que su rumbo desde B es:

$$
056^\\circ+180^\\circ=236^\\circ.
$$

El ángulo interno ABC es la diferencia menor entre $236^\\circ$ y $124^\\circ$:

$$
B=112^\\circ.
$$

Con dos lados y el ángulo comprendido aplicamos coseno:

$$
AC^2=12^2+8^2-2\\cdot12\\cdot8\\cos112^\\circ.
$$

$$
AC\\approx16,73\\ \\mathrm{km}.
$$

La comprobación geométrica es potente: con un ángulo obtuso, el lado opuesto debe ser el mayor. $16,73$ km es mayor que 12 km y 8 km, como esperábamos.

## Rumbo de regreso

El rumbo inverso se obtiene sumando o restando $180^\\circ$ y ajustando al intervalo $000^\\circ$–$360^\\circ$. El regreso de $056^\\circ$ es $236^\\circ$; el de $310^\\circ$ es $130^\\circ$.

## Errores frecuentes

- Medir desde el este como en el plano cartesiano.
- Girar en sentido antihorario.
- Escribir $56^\\circ$ en vez de $056^\\circ$ cuando se pide un rumbo.
- Usar directamente la diferencia entre rumbos sin comprobar el vértice.
- Aplicar SOHCAHTOA a un triángulo sin ángulo recto.
- Dejar la calculadora en radianes.
- Redondear un ángulo intermedio demasiado pronto.

## Protocolo de examen

La resolución puede leerse como una cadena: nortes de referencia → giros horarios → triángulo del recorrido → ángulos internos → razón o ley trigonométrica → cálculo → comprobación geométrica → rumbo con tres cifras. Cada eslabón deja visible de dónde procede el siguiente.

El campus virtual de Método Nebula desarrolla trigonometría, geometría y rumbos con teoría visual, ejercicios guiados y preguntas tipo examen. El botón de contacto abre una ruta en la que el dibujo funciona como herramienta de razonamiento y no como boceto decorativo.
`,ye=`---
title: "GCSE Physics: master electricity and circuits without losing formula marks"
date: "2026-09-15"
updated: "2026-10-28"
description: "A complete GCSE Physics electricity guide: series, parallel, V=IR, power, graphs, a worked example and exam errors."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-physics-forces-exam-questions-en,gcse-physics-energy-work-power-efficiency-en"
image: "/assets/latex/circuits-series-parallel-en.svg"
language: "en"
translation: "gcse-physics-electricity-revision"
---

Learning \`V = IR\` is not the same as understanding electricity. Marks are often lost before any substitution: by confusing what is conserved in series and parallel, placing a meter incorrectly or failing to explain why current changes.

Treat the circuit as a system. **Interpret first, choose a relationship second, calculate and check last.**

![Comparison of series and parallel circuits](/assets/latex/circuits-series-parallel-en.svg)

## Five quantities that must not be mixed

| Quantity | Symbol | Unit | Physical meaning |
|---|---|---|---|
| Charge | $Q$ | coulomb (C) | charge transferred |
| Current | $I$ | ampere (A) | charge per unit time |
| Potential difference | $V$ | volt (V) | energy transferred per coulomb |
| Resistance | $R$ | ohm ($\\Omega$) | opposition to current |
| Power | $P$ | watt (W) | energy transferred per second |

A correct name with the wrong unit signals a conceptual confusion, not merely a typo.

## Series and parallel: what stays the same

A **series** circuit has one path. Current is the same through every component, potential differences add, and resistances satisfy:

$$
R_{eq}=R_1+R_2+\\cdots.
$$

In **parallel**, each branch joins the same two nodes and has the same potential difference. Total current splits between branches. For two resistors:

$$
\\frac{1}{R_{eq}}=\\frac{1}{R_1}+\\frac{1}{R_2}.
$$

Adding a parallel branch reduces equivalent resistance and can increase the total source current.

## Worked example: two series resistors

A 12 V battery supplies $2\\,\\Omega$ and $4\\,\\Omega$ resistors in series. Then $R_{eq}=6\\,\\Omega$ and:

$$
I=\\frac{V}{R}=\\frac{12}{6}=2\\ \\mathrm{A}.
$$

The same current passes through both. Their potential differences are $V_1=4$ V and $V_2=8$ V. The check $V_1+V_2=12$ V shows how energy per unit charge is distributed.

## Power and energy: the missing connection

Electrical power is $P=IV$ and energy is $E=Pt$. In cost questions, check whether time is in seconds or hours and whether energy is measured in joules or kWh. Similar-looking formulae do not make incompatible units safe.

## Reading a current–voltage graph

Check linearity before discussing resistance. An ohmic resistor at constant temperature gives a straight line. A filament lamp curves because its temperature and resistance rise. A diode conducts mainly in one direction after its characteristic threshold region.

A good exam description links the graph's shape to the physical cause.

## Meters and circuit errors

Place an ammeter in series with the component whose current is measured. Connect a voltmeter in parallel across it. One measures flow through a branch; the other compares energy per charge between two points.

## Reasoning question

Two identical lamps are in parallel. One breaks and opens its branch. In the ideal model, the other remains across the same potential difference and stays lit because its branch is still complete.

## Common errors and their antidotes

- **Milliamps used as amps:** convert before substituting.
- **Parallel resistances added directly:** identify nodes, not visual layout.
- **Voltage and current exchanged:** attach a unit to every datum.
- **Graph described without a cause:** connect shape, temperature or direction.
- **No final check:** use current or voltage conservation.

## Three-layer exam training

Begin with symbols and units, continue with one-equation problems and finish with multi-step questions combining circuits, power, energy and explanation. Move from topic practice to mixed sets and finally a timed paper.

Método Nebula's virtual campus organises electricity and magnetism through theory, worked examples, exercises and exam questions. The contact button can diagnose whether the block lies in the concept, the circuit or the calculation and turn it into a concrete plan.
`,he=`---
title: "Física GCSE: domina electricidad y circuitos sin perder puntos por una fórmula"
date: "2026-09-15"
updated: "2026-10-28"
description: "Una guía completa de electricidad para Física GCSE: serie, paralelo, V=IR, potencia, gráficas, ejemplo y errores de examen."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-physics-forces-exam-questions,ib-gcse-como-preparar-examenes-internacionales,circuitos-corriente-continua-problemas-resueltos-universidad"
image: "/assets/latex/circuits-series-parallel.svg"
language: "es"
translation: "gcse-physics-electricity-revision-en"
---

Aprender \`V = IR\` no equivale a entender electricidad. En Física GCSE los puntos se pierden antes de sustituir números: al confundir qué se conserva en serie y en paralelo, al colocar mal un instrumento o al no explicar por qué cambia la corriente.

La solución es estudiar el circuito como un sistema. **Primero se interpreta; después se elige la relación; al final se calcula y se comprueba.**

![Comparación entre un circuito en serie y uno en paralelo](/assets/latex/circuits-series-parallel.svg)

## Cinco magnitudes que no deben mezclarse

| Magnitud | Símbolo | Unidad | Idea física |
|---|---|---|---|
| Carga | $Q$ | culombio (C) | cantidad de carga transferida |
| Corriente | $I$ | amperio (A) | carga por unidad de tiempo |
| Diferencia de potencial | $V$ | voltio (V) | energía transferida por culombio |
| Resistencia | $R$ | ohmio ($\\Omega$) | oposición al paso de corriente |
| Potencia | $P$ | vatio (W) | energía transferida por segundo |

Si una respuesta usa el nombre correcto con la unidad equivocada, hay una confusión conceptual, no un simple despiste.

## Serie y paralelo: qué permanece igual

En un circuito **en serie** hay un solo camino. La corriente es la misma en todos los componentes y la diferencia de potencial total se reparte. Las resistencias se suman:

$$
R_{eq}=R_1+R_2+\\cdots.
$$

En **paralelo**, cada rama conecta los mismos dos nodos y tiene la misma diferencia de potencial. La corriente total se reparte entre las ramas. Para dos resistencias:

$$
\\frac{1}{R_{eq}}=\\frac{1}{R_1}+\\frac{1}{R_2}.
$$

Añadir una rama en paralelo reduce la resistencia equivalente y puede aumentar la corriente total suministrada por la fuente.

## Ejemplo resuelto: dos resistencias en serie

Una batería de 12 V alimenta resistencias de $2\\,\\Omega$ y $4\\,\\Omega$ en serie.

La resistencia equivalente es:

$$
R_{eq}=2+4=6\\,\\Omega.
$$

Por la ley de Ohm:

$$
I=\\frac{V}{R}=\\frac{12}{6}=2\\ \\mathrm{A}.
$$

La misma corriente atraviesa ambas resistencias. Las caídas de potencial son:

$$
V_1=IR_1=4\\ \\mathrm{V},\\qquad V_2=IR_2=8\\ \\mathrm{V}.
$$

La comprobación es $V_1+V_2=12$ V. Esa igualdad no solo valida la cuenta: muestra cómo se distribuye la energía por unidad de carga.

## Potencia y energía: la parte que suele quedar desconectada

La potencia eléctrica puede calcularse mediante:

$$
P=IV.
$$

También se relaciona con energía y tiempo:

$$
E=Pt.
$$

En una pregunta de coste energético, revisa si el tiempo está en segundos u horas y si la energía se expresa en julios o kWh. No mezcles unidades porque la fórmula “se parezca”.

## Cómo leer una gráfica corriente–voltaje

Antes de hablar de resistencia, observa si la relación es lineal. Un resistor óhmico a temperatura constante produce una recta; una lámpara de filamento muestra curvatura porque su temperatura y resistencia cambian; un diodo conduce principalmente en una dirección después de superar una zona característica.

Una descripción de examen debe vincular forma y causa: no basta con escribir “es curva”.

## Instrumentos y errores de montaje

El amperímetro se coloca en serie con el componente cuya corriente se mide. El voltímetro se conecta en paralelo entre sus extremos. Explica por qué: uno mide el flujo que atraviesa la rama; el otro compara energía por carga entre dos puntos.

## Pregunta de razonamiento

Dos lámparas idénticas están en paralelo. Una se rompe y abre su rama. ¿Qué ocurre con la otra? En el modelo ideal, sigue conectada a la misma diferencia de potencial y permanece encendida. La clave no es recordar la frase, sino reconocer que la otra rama continúa cerrada.

## Errores frecuentes y su antídoto

- **Miliamperios tratados como amperios:** escribe la conversión antes de sustituir.
- **Resistencias en paralelo sumadas directamente:** identifica nodos, no la apariencia del dibujo.
- **Voltaje y corriente intercambiados:** escribe la unidad junto a cada dato.
- **Gráfica descrita sin causa:** relaciona forma, temperatura o dirección de conducción.
- **Resultado sin comprobación:** verifica conservación de corriente o suma de voltajes según el montaje.

## Entrenamiento de examen en tres capas

Empieza con símbolos y unidades; continúa con problemas de una ecuación; termina con cuestiones de varios pasos que mezclen circuitos, potencia, energía y explicación. Después haz práctica por tema, una mezcla aleatoria y finalmente un examen cronometrado.

El campus virtual de Método Nebula organiza electricidad y magnetismo con teoría, ejemplos trabajados, ejercicios, preguntas de examen y revisión. Si quieres detectar si el bloqueo está en el concepto, el montaje o el cálculo, utiliza el botón de contacto y lo convertimos en un plan concreto.
`,qe=`---
title: "GCSE Physics: energy, work and power without confusing joules and watts"
date: "2026-09-22"
updated: "2026-10-28"
description: "Master energy, work, power and efficiency in GCSE Physics through conservation, formulae, a worked problem and error checks."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-physics-forces-exam-questions-en,gcse-physics-electricity-revision-en"
image: "/assets/latex/energy-flow-en.svg"
language: "en"
translation: "gcse-physics-energy-work-power-efficiency"
---

Many answers fail before the calculation because **energy**, **work** and **power** are treated as three names for the same quantity. Energy is stored and transferred; work measures a transfer caused by a force; power measures how quickly the transfer occurs.

The organising question is: **how much energy changes store, and over what time?**

![Energy conservation diagram with useful transfer, dissipated energy and efficiency](/assets/latex/energy-flow-en.svg)

## The balance that must never break

In a closed system, total energy is conserved. It may move from a chemical store to a kinetic store or spread into the surroundings as internal energy, but it does not disappear:

$$
E_{\\text{input}}=E_{\\text{useful}}+E_{\\text{dissipated}}.
$$

“Dissipated” means spread through the surroundings and less useful for the intended purpose, not destroyed.

## Work: a force causing displacement

For a constant force acting along the movement, $W=Fd$. Work is measured in joules, force in newtons and distance in metres. When force and displacement form an angle:

$$
W=Fd\\cos\\theta.
$$

Lifting a box transfers energy to its gravitational store. Pushing a wall that does not move does zero mechanical work on the wall because $d=0$.

## Power: the same energy at a different rate

$$
P=\\frac{E}{t}=\\frac{W}{t}.
$$

A 500 W motor transfers 500 J each second. Two machines may do the same work, but the more powerful one takes less time. A watt is not energy; it is one joule per second.

## Efficiency: compare useful output with input

$$
\\eta=\\frac{E_{\\text{useful}}}{E_{\\text{input}}},\\qquad
\\eta(\\%)=\\frac{E_{\\text{useful}}}{E_{\\text{input}}}\\times100.
$$

Efficiency cannot exceed 100%. A result of 140% means the ratio has been inverted or units have been mixed.

## Worked exam problem

A lift raises 120 kg through 6.0 m in 8.0 s, using 12 kJ. Take $g=9.8\\,\\mathrm{N/kg}$.

$$
E_p=mgh=120\\cdot9.8\\cdot6.0=7056\\ \\mathrm{J},
$$

$$
P_{\\text{useful}}=\\frac{7056}{8.0}=882\\ \\mathrm{W},
$$

$$
\\eta=\\frac{7056}{12000}\\times100=58.8\\%.
$$

The remaining 4944 J is mainly transferred to the surroundings by heating and sound. That sentence completes the physical interpretation.

## Recognising the relationship

| Given data | Physical question | Relationship |
|---|---|---|
| Force and distance | Energy transferred by a force | $W=Fd$ |
| Energy and time | Transfer rate | $P=E/t$ |
| Mass and speed | Kinetic store | $E_k=mv^2/2$ |
| Mass and height | Gravitational store | $E_p=mgh$ |
| Input and useful output | Useful fraction | $\\eta=E_u/E_i$ |

Do not search for a formula merely because it contains every number. Model the energy flow first.

## Mistakes that cost marks

- Calling a quantity in joules “power”.
- Using grams without converting to kilograms.
- Entering 75 instead of 0.75 for 75%.
- Saying energy is “lost” without identifying its destination.
- Rounding every step.
- Giving a result without a unit or interpretation.

## What a strong answer shows

A robust solution exposes **model → equation → substitution with units → result → check**. An efficiency between 0 and 1, power in watts and a closed energy balance provide independent checks.

Método Nebula's virtual campus develops energy, work and power through visual theory, guided examples, exercise banks and exam questions. The contact button opens a route in which formulae form a connected system rather than a list to memorise.
`,Ee=`---
title: "Física GCSE: energía, trabajo y potencia sin confundir julios, vatios y eficiencia"
date: "2026-09-22"
updated: "2026-09-22"
description: "Domina energía, trabajo, potencia y eficiencia en Física GCSE con conservación, fórmulas, un problema resuelto y errores de examen."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-physics-forces-exam-questions,gcse-physics-electricity-revision"
image: "/assets/latex/energy-flow.svg"
language: "es"
translation: "gcse-physics-energy-work-power-efficiency-en"
---

En Física GCSE muchas respuestas fallan antes de empezar a calcular: el estudiante trata **energía**, **trabajo** y **potencia** como si fueran nombres distintos de lo mismo. No lo son. La energía es una cantidad que se almacena y se transfiere; el trabajo mide una transferencia producida por una fuerza; la potencia mide la rapidez con la que ocurre esa transferencia.

La pregunta que ordena todo el tema es: **¿cuánta energía cambia de almacén y en cuánto tiempo?**

![Diagrama de conservación de energía con transferencia útil, energía disipada y eficiencia](/assets/latex/energy-flow.svg)

## El balance que nunca debe romperse

En un sistema cerrado, la energía total se conserva. Puede pasar de un almacén químico a uno cinético, o terminar repartida en el entorno como energía interna, pero no desaparece:

$$
E_{\\text{entrada}}=E_{\\text{útil}}+E_{\\text{disipada}}.
$$

“Disipada” no significa destruida. Significa que la energía se ha distribuido en el entorno y resulta menos útil para el propósito que estudiamos.

## Trabajo: fuerza que produce desplazamiento

Si una fuerza constante actúa en la dirección del movimiento:

$$
W=Fd.
$$

$W$ se mide en julios, $F$ en newtons y $d$ en metros. Si fuerza y desplazamiento forman un ángulo, el nivel más alto exige reconocer la componente eficaz:

$$
W=Fd\\cos\\theta.
$$

Levantar una caja transfiere energía al almacén gravitatorio. Empujar una pared que no se desplaza puede cansarte, pero el trabajo mecánico sobre la pared es cero porque $d=0$.

## Potencia: misma energía, distinto ritmo

$$
P=\\frac{E}{t}=\\frac{W}{t}.
$$

Un motor de 500 W transfiere 500 J cada segundo. Dos máquinas pueden realizar el mismo trabajo; la más potente tarda menos. El vatio no es una cantidad de energía: es un julio por segundo.

## Eficiencia: compara salida útil y entrada

$$
\\eta=\\frac{E_{\\text{útil}}}{E_{\\text{entrada}}}
$$

o, en porcentaje,

$$
\\eta(\\%)=\\frac{E_{\\text{útil}}}{E_{\\text{entrada}}}\\times100.
$$

La eficiencia no puede superar el 100 %. Si obtienes 140 %, has invertido el cociente o mezclado unidades.

## Problema resuelto de examen

Un elevador sube una masa de 120 kg una altura de 6,0 m en 8,0 s. Consume 12 kJ. Toma $g=9,8\\,\\mathrm{N/kg}$.

La energía útil es el aumento de energía potencial:

$$
E_p=mgh=120\\cdot9,8\\cdot6,0=7056\\ \\mathrm{J}.
$$

La potencia útil vale:

$$
P_{\\text{útil}}=\\frac{7056}{8,0}=882\\ \\mathrm{W}.
$$

Como la entrada es $12\\,000$ J:

$$
\\eta=\\frac{7056}{12000}\\times100=58,8\\%.
$$

El resto, $4944$ J, se transfiere principalmente al entorno por calentamiento y sonido. Esa última frase completa la interpretación física.

## Cómo reconocer la fórmula sin adivinar

| Datos del enunciado | Pregunta física | Relación |
|---|---|---|
| Fuerza y distancia | Energía transferida por una fuerza | $W=Fd$ |
| Energía y tiempo | Ritmo de transferencia | $P=E/t$ |
| Masa, velocidad | Almacén cinético | $E_k=mv^2/2$ |
| Masa, altura | Almacén gravitatorio | $E_p=mgh$ |
| Entrada y salida útil | Fracción aprovechada | $\\eta=E_u/E_i$ |

Buscar una fórmula que contenga todos los números suele ocultar la física. Un planteamiento más sólido parte del flujo de energía, identifica la magnitud representada por cada dato y solo entonces introduce las ecuaciones.

## Errores que cuestan marcas

- Llamar “potencia” a una energía expresada en julios.
- Usar gramos en $E_k$ o $E_p$ sin convertir a kilogramos.
- Introducir un porcentaje como 75 en vez de 0,75 dentro de un cálculo.
- Afirmar que la energía “se pierde” sin indicar dónde se transfiere.
- Redondear en cada paso y arrastrar error numérico.
- Dar un valor sin unidad ni interpretación final.

## Una respuesta de calidad

Una solución sólida deja visible la cadena **modelo → ecuación → sustitución con unidades → resultado → comprobación**. Si la eficiencia queda entre 0 y 1, la potencia tiene unidades de W y el balance de energía cierra, hay tres comprobaciones independientes de que el razonamiento es coherente.

El campus virtual de Método Nebula trabaja energía, trabajo y potencia con teoría visual, ejemplos guiados, bancos de ejercicios y preguntas de examen corregibles paso a paso. Para quienes necesitan que las fórmulas formen un sistema y no una lista para memorizar, el botón de contacto permite solicitar una ruta de estudio.
`,_e=`---
title: "GCSE Physics: a five-step method for forces and free-body diagrams"
date: "2026-09-20"
updated: "2026-10-28"
description: "Master GCSE Physics forces with diagrams, resultant force, mass, weight, pressure, a worked example and exam practice."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-physics-electricity-revision-en,gcse-physics-energy-work-power-efficiency-en"
image: "/assets/latex/forces-free-body-en.svg"
language: "en"
translation: "gcse-physics-forces-exam-questions"
---

An object can move right while its resultant force is zero. It can also move upwards while accelerating downwards. These situations only seem contradictory when motion, velocity and resultant force are confused.

The reliable five-step routine is **isolate, draw, sum, relate and check**.

![Free-body diagram of a block with weight, normal force, applied force and friction](/assets/latex/forces-free-body-en.svg)

## Step 1: isolate the correct object

Decide which body is being analysed. For a box pushed by a person, the box's diagram must not include forces acting on the person. Drawing the whole scene often introduces forces outside the chosen system.

## Step 2: draw only real forces

Include weight, normal contact force, friction, drag, tension or thrust when relevant. An arrow showing motion is not a force. Every force needs an agent or interaction: Earth, a surface, a string, an engine or a fluid.

Label each arrow. Use length as a qualitative clue only when the problem supports it.

## Step 3: find the resultant by axis

Choose positive directions. On a horizontal surface:

$$
\\sum F_x=F-f,\\qquad \\sum F_y=N-W.
$$

With no vertical acceleration, $N=W$ in this model. Do not memorise that equality for every situation: a slope or an additional vertical force changes it.

## Step 4: relate force to acceleration

Newton's second law is $F_{\\text{resultant}}=ma$. Acceleration points in the direction of the resultant. Zero resultant means zero acceleration, so the object may be stationary or moving at constant velocity.

## Step 5: check units and direction

Force is measured in newtons, mass in kilograms and acceleration in $\\mathrm{m/s^2}$. A negative sign can correctly mean that the acceleration points opposite to the chosen positive axis.

## Complete example

A 12 kg box is pushed horizontally with 50 N against 14 N of friction:

$$
F_R=50-14=36\\ \\mathrm{N},\\qquad
a=\\frac{36}{12}=3.0\\ \\mathrm{m/s^2}.
$$

Using $g=9.8\\,\\mathrm{N/kg}$, its weight is $W=12\\cdot9.8=117.6$ N. On a horizontal surface with no vertical acceleration, the normal force has the same magnitude in the opposite direction.

## Mass and weight: the costly confusion

Mass measures inertia and is expressed in kg. Weight is a gravitational force measured in N. On another planet, mass stays constant but weight changes with $g$.

## Pressure and contact area

$$
p=\\frac{F}{A}.
$$

For the same force, reducing area increases pressure. A narrow heel therefore produces greater pressure than a flat shoe. The comparison must keep force constant.

## Questions that reveal understanding

- Why can a skydiver reach terminal velocity?
- What changes in the diagram just after the fall begins?
- How can a car move at constant speed while the engine exerts a force?
- Why can a perpendicular force change direction without increasing speed?

At terminal velocity, weight and drag balance: resultant force and acceleration become zero.

## Common mistakes

- Drawing “motion” as a force.
- Forgetting that an action–reaction pair acts on different bodies.
- Using mass in kg as though it were weight in N.
- Applying $F=ma$ to one force instead of the resultant.
- Omitting direction and unit.

## From the diagram to complete preparation

Método Nebula's virtual campus organises measurement and motion, forces and pressure, energy and exam practice through theory, diagrams and graduated exercises. If a paper shows that formulae are known but force selection is weak, the contact button opens a focused GCSE Physics route.
`,je=`---
title: "Física GCSE: el método de 5 pasos para dominar fuerzas y diagramas"
date: "2026-09-20"
updated: "2026-10-28"
description: "Domina fuerzas en Física GCSE con diagramas, resultante, masa, peso, presión, un ejemplo resuelto y práctica de examen."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-physics-electricity-revision,diagramas-cuerpo-libre-metodo-errores-frecuentes,ib-gcse-como-preparar-examenes-internacionales"
image: "/assets/latex/forces-free-body.svg"
language: "es"
translation: "gcse-physics-forces-exam-questions-en"
---

Un objeto puede moverse hacia la derecha y tener fuerza resultante cero. También puede estar desplazándose hacia arriba mientras su aceleración apunta hacia abajo. Estas situaciones parecen contradictorias solo cuando se confunden tres ideas: movimiento, velocidad y fuerza resultante.

Para dominar las fuerzas en Física GCSE necesitas una rutina que empiece antes de la fórmula. El método más fiable tiene cinco pasos: **aislar, dibujar, sumar, relacionar y comprobar.**

![Diagrama de cuerpo libre de un bloque con peso, normal, fuerza aplicada y rozamiento](/assets/latex/forces-free-body.svg)

## Paso 1: aísla el objeto correcto

Decide qué cuerpo estás analizando. Si el problema habla de una caja empujada por una persona, el diagrama de la caja no incluye las fuerzas que actúan sobre la persona. Dibujar todo el escenario a la vez suele introducir fuerzas que no pertenecen al sistema elegido.

## Paso 2: dibuja solo fuerzas reales

Representa peso, fuerza normal de contacto, rozamiento, resistencia del fluido, tensión o empuje según proceda. La flecha del movimiento no es una fuerza. Una fuerza debe tener un agente o interacción: Tierra, superficie, cuerda, motor o fluido.

Etiqueta cada flecha y utiliza su longitud solo como indicación cualitativa cuando el problema lo permita.

## Paso 3: calcula la resultante por ejes

Elige sentidos positivos. En una superficie horizontal, trata por separado:

$$
\\sum F_x=F-f,
$$

$$
\\sum F_y=N-W.
$$

Si no hay aceleración vertical, $N=W$ en ese modelo. Pero no memorices siempre esa igualdad: en una pendiente o con una fuerza vertical adicional puede cambiar.

## Paso 4: relaciona fuerza y aceleración

La segunda ley de Newton se expresa como:

$$
F_{resultante}=ma.
$$

La aceleración tiene la dirección de la resultante. Resultante cero significa aceleración cero: el objeto puede estar en reposo o moverse con velocidad constante.

## Paso 5: comprueba unidades y sentido

La fuerza se mide en newtons, la masa en kilogramos y la aceleración en $\\mathrm{m/s^2}$. Si el signo de la aceleración contradice el diagrama, revisa la convención elegida. Un signo negativo no es automáticamente un error: puede indicar dirección opuesta al eje positivo.

## Ejemplo completo

Una caja de 12 kg recibe una fuerza horizontal de 50 N. El rozamiento es 14 N.

La resultante horizontal es:

$$
F_R=50-14=36\\ \\mathrm{N}.
$$

Por tanto:

$$
a=\\frac{F_R}{m}=\\frac{36}{12}=3.0\\ \\mathrm{m/s^2}.
$$

Si usamos $g=9.8\\,\\mathrm{N/kg}$, el peso es:

$$
W=mg=12\\cdot9.8=117.6\\ \\mathrm{N}.
$$

En una superficie horizontal sin aceleración vertical, la normal tiene la misma magnitud y sentido opuesto.

## Masa y peso: la confusión más costosa

La masa mide inercia y se expresa en kg. El peso es la fuerza gravitatoria y se expresa en N. Al cambiar de planeta, la masa permanece y el peso cambia porque cambia $g$.

Una frase como “el objeto pesa 12 kg” mezcla magnitudes. En lenguaje cotidiano se tolera; en física de examen, no.

## Presión y área de contacto

La presión se define mediante:

$$
p=\\frac{F}{A}.
$$

Con la misma fuerza, reducir el área aumenta la presión. Por eso un tacón fino ejerce mayor presión que un zapato plano. La explicación debe mantener constante la fuerza si esa es la comparación propuesta.

## Preguntas que revelan comprensión

- ¿Por qué un paracaidista puede alcanzar la velocidad terminal?
- ¿Qué cambia en el diagrama cuando empieza a caer?
- ¿Cómo puede un coche moverse a velocidad constante si el motor ejerce fuerza?
- ¿Por qué una fuerza perpendicular puede cambiar dirección sin aumentar rapidez?

Para la velocidad terminal, el peso y la resistencia del aire se equilibran: la resultante se hace cero y deja de haber aceleración.

## Errores frecuentes

- Dibujar “movimiento” como fuerza.
- Olvidar que fuerzas iguales y opuestas pueden actuar sobre cuerpos diferentes.
- Usar masa en kg como si fuera peso en N.
- Aplicar $F=ma$ a una fuerza individual en vez de a la resultante.
- Omitir dirección y unidad en la respuesta.

## Del diagrama a una preparación completa

El campus virtual de Método Nebula organiza medida y movimiento, fuerzas y presión, energía y práctica de examen con teoría, diagramas, ejemplos y ejercicios graduados. Si un examen revela que sabes las fórmulas pero no decides qué fuerzas incluir, el botón de contacto permite convertir ese patrón en una ruta específica de Física GCSE.
`,Ce=`---
title: "GCSE Physics: half-life and radioactivity through graphs that explain decay"
date: "2026-10-22"
updated: "2026-10-28"
description: "Understand radioactive decay and half-life in GCSE Physics: randomness, exponential curves, activity, calculations and safety."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-physics-forces-exam-questions-en,gcse-physics-energy-work-power-efficiency-en"
image: "/assets/latex/half-life-curve-en.svg"
language: "en"
translation: "gcse-physics-radioactivity-half-life"
---

The decay of one nucleus is random: its exact time cannot be predicted. A sample containing a vast number of nuclei nevertheless follows a highly regular statistical pattern. This combination of microscopic randomness and macroscopic law is the key to **radioactive decay**.

![Exponential curve of undecayed nuclei marked at successive half-lives](/assets/latex/half-life-curve-en.svg)

## What half-life means

The half-life $T_{1/2}$ is the time required to halve either the number of undecayed radioactive nuclei or their activity. After one half-life, $1/2$ remains; after two, $1/4$; after three, $1/8$.

$$
N=N_0\\left(\\frac12\\right)^n,
$$

where $n=t/T_{1/2}$ is the number of elapsed half-lives.

## It does not fall by the same amount

For 800 representative nuclei, $800\\to400\\to200\\to100$. The decreases are 400, 200 and 100. The same **fraction**, not the same quantity, is lost. The graph is exponential, not a straight descending line.

## Direct calculation example

A source has initial activity 640 Bq and half-life 6 h. In 18 h, $n=18/6=3$ half-lives pass:

$$
A=640\\left(\\frac12\\right)^3=80\\ \\mathrm{Bq}.
$$

One becquerel means one decay per second.

## Finding half-life from a graph

Choose a clear activity value and locate where the curve reaches half of it. The difference between the two times estimates $T_{1/2}$. Repeat with another pair to reduce reading error.

You do not need to start at $t=0$. If activity falls from 300 Bq to 150 Bq between 4 h and 9 h, the half-life is 5 h.

## Background radiation

A detector measures the source plus background radiation. Correct the reading before finding half-life:

$$
\\text{corrected count rate}=\\text{measured rate}-\\text{background rate}.
$$

Without this subtraction, the curve appears to approach a positive value and the calculated half-life is distorted.

## Alpha, beta and gamma

| Radiation | Nature | Penetration | Ionisation |
|---|---|---|---|
| Alpha | Helium nucleus | Low | High |
| Beta | Electron or positron | Medium | Medium |
| Gamma | Electromagnetic wave | High | Lower |

Risk depends on activity, radiation type, exposure time, distance and whether the source is inside or outside the body. “Gamma is always more dangerous” is not a valid general rule.

## Contamination and irradiation

Irradiation is exposure to radiation from an external source. Contamination means unwanted radioactive material is on or inside an object or person. An irradiated object does not necessarily become radioactive.

## Reasoned safety

- Reduce exposure time.
- Increase distance.
- Use suitable shielding.
- Prevent ingestion or inhalation of unsealed sources.
- Use tongs and labelled storage.

Each measure should be linked to how it reduces dose.

## Common mistakes

- Subtracting a fixed amount at every half-life.
- Confusing activity with the total number already decayed.
- Halving time instead of activity.
- Failing to subtract background radiation.
- Claiming a random process cannot be modelled.
- Confusing contamination with irradiation.

Método Nebula's virtual campus develops nuclear physics through nuclear structure, radiation, half-life, activity, safety and exam questions. The contact button opens a route connecting calculations, graphs and scientific explanations.
`,ze=`---
title: "Física GCSE: vida media y radiactividad con gráficas que explican el decaimiento"
date: "2026-10-22"
updated: "2026-10-22"
description: "Entiende la desintegración radiactiva y la vida media en Física GCSE: proceso aleatorio, curva exponencial, actividad, cálculos y seguridad."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-physics-forces-exam-questions,gcse-physics-energy-work-power-efficiency"
image: "/assets/latex/half-life-curve.svg"
language: "es"
translation: "gcse-physics-radioactivity-half-life-en"
---

La desintegración de un núcleo individual es aleatoria: no podemos predecir cuándo ocurrirá. Sin embargo, una muestra con muchísimos núcleos sigue un patrón estadístico muy regular. Esa combinación —azar microscópico y ley macroscópica— es la idea central de **desintegración radiactiva**.

![Curva exponencial de núcleos no desintegrados con marcas en cada vida media](/assets/latex/half-life-curve.svg)

## Qué significa la vida media

La vida media $T_{1/2}$ es el tiempo necesario para que se reduzca a la mitad:

- el número de núcleos radiactivos no desintegrados, o
- la actividad debida a esos núcleos.

Después de una vida media queda $1/2$; después de dos, $1/4$; después de tres, $1/8$.

$$
N=N_0\\left(\\frac12\\right)^n,
$$

donde $n=t/T_{1/2}$ es el número de vidas medias transcurridas.

## No disminuye la misma cantidad

Si una muestra empieza con 800 núcleos representativos:

$$
800\\to400\\to200\\to100.
$$

Las disminuciones son 400, 200 y 100. Se pierde la misma **fracción**, no la misma cantidad. Por eso la gráfica es exponencial y nunca una recta descendente.

## Ejemplo de cálculo directo

Una fuente tiene actividad inicial de 640 Bq y vida media de 6 h. Tras 18 h han pasado:

$$
n=\\frac{18}{6}=3
$$

vidas medias. Entonces:

$$
A=640\\left(\\frac12\\right)^3=80\\ \\mathrm{Bq}.
$$

Un becquerel equivale a una desintegración por segundo.

## Encontrar la vida media en una gráfica

La lectura comienza con un valor de actividad claramente identificable y continúa en el punto donde la curva alcanza su mitad. La diferencia entre ambos tiempos proporciona una estimación de $T_{1/2}$. Un segundo par de valores permite comprobarla y reducir el efecto del error gráfico.

No es obligatorio comenzar en $t=0$. Si la actividad pasa de 300 Bq a 150 Bq entre las horas 4 y 9, la vida media es 5 h.

## Radiación de fondo

Un detector mide radiación de la fuente y radiación de fondo. Antes de calcular una vida media debe corregirse:

$$
\\text{tasa de recuento corregida}=\\text{medida}-\\text{fondo}.
$$

Si se olvida esta resta, la curva parece acercarse a un valor positivo y la vida media calculada resulta incorrecta.

## Alfa, beta y gamma

| Radiación | Naturaleza | Penetración | Ionización |
|---|---|---|---|
| Alfa | Núcleo de helio | Baja | Alta |
| Beta | Electrón o positrón | Media | Media |
| Gamma | Onda electromagnética | Alta | Menor |

La peligrosidad depende de actividad, tipo de radiación, tiempo, distancia y si la fuente está dentro o fuera del cuerpo. “Gamma es siempre más peligrosa” es una simplificación incorrecta.

## Contaminación e irradiación

La irradiación significa exposición a radiación procedente de una fuente externa. La contaminación significa que material radiactivo no deseado entra o queda sobre un objeto o persona. Un objeto irradiado no se vuelve necesariamente radiactivo.

## Seguridad razonada

Las medidas básicas reducen dosis:

- Disminuir tiempo de exposición.
- Aumentar distancia.
- Utilizar blindaje adecuado.
- Evitar ingestión o inhalación de fuentes no selladas.
- Manipular con pinzas y almacenar en recipientes etiquetados.

Cada medida debe vincularse con cómo reduce la exposición, no recitarse como una lista.

## Errores frecuentes

- Restar una cantidad fija en cada vida media.
- Confundir actividad con número total de núcleos ya desintegrados.
- Leer la mitad del tiempo en vez de la mitad de la actividad.
- No corregir radiación de fondo.
- Afirmar que el proceso aleatorio no puede modelizarse.
- Confundir contaminación e irradiación.

El campus virtual de Método Nebula desarrolla física nuclear con estructura del núcleo, radiaciones, vida media, actividad, seguridad y preguntas de examen. El botón de contacto permite solicitar una ruta que conecta cálculos, gráficas y explicaciones científicas.
`,Se=`---
title: "GCSE Physics: stellar life cycles and H–R diagrams without memorising a list"
seoTitle: "GCSE Physics: stellar life cycles explained"
date: "2026-09-29"
updated: "2026-09-29"
description: "Understand stellar life cycles for GCSE Physics: nebulae, main sequence stars, giants, supernovae, white dwarfs and H–R diagrams."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-physics-radioactivity-half-life-en,gcse-physics-energy-work-power-efficiency-en,gcse-physics-waves-refraction-en"
image: "/assets/latex/gcse-star-life-cycle.svg"
language: "en"
translation: "gcse-physics-space-stars-life-cycle"
---

A star does not follow one fixed sequence regardless of size. Its initial mass determines which fuels can fuse, how long each stage lasts and whether the final remnant is a white dwarf, neutron star or black hole.

> **Direct answer.** Every star begins when gravity contracts gas and dust. During the main sequence, hydrogen fusion balances gravity. Sun-like stars end as white dwarfs; very massive stars may explode as supernovae and leave neutron stars or black holes.

![Low-mass and high-mass stellar routes from a cloud of hydrogen and helium](/assets/latex/gcse-star-life-cycle.svg)

## From gas to the main sequence

A nebula contains mostly hydrogen, helium and dust. A disturbance can cause one region to contract under gravity. As its size falls, its temperature rises because gravitational potential energy is transferred into thermal energy.

The protostar reaches the main sequence when its core becomes hot enough for hydrogen fusion. Outward thermal and radiation pressure approximately balance inward gravitational attraction. This **hydrostatic equilibrium** does not mean that nothing happens; it means the two tendencies balance.

## Mass controls the rate

A massive star has more fuel, but it consumes that fuel far faster because its core needs a greater temperature and pressure. It therefore spends less time on the main sequence than a low-mass star.

This result can feel counterintuitive. Saying only that the star contains more hydrogen is incomplete: the fusion rate must also be compared. Higher mass produces much greater luminosity and disproportionately rapid fuel use.

## Low- and medium-mass stars

When core hydrogen becomes scarce, the balance changes and the outer layers expand. The star becomes a red giant. It later releases its outer layers as a planetary nebula, leaving a hot core called a white dwarf.

The white dwarf no longer gains energy from sustained fusion. It cools gradually. A hypothetical black dwarf would be the final state after an enormous time, longer than the current age of the universe.

## High-mass stars

A massive star can fuse increasingly heavy elements until iron is produced. Iron fusion does not release the energy needed to support the core. The core collapses and the outer layers form a supernova.

The remnant depends on core mass: it may become an extremely dense neutron star or, if gravity overwhelms even that support, a black hole. Ejected heavy elements enrich the material from which later stars and planets form.

## Reading a Hertzsprung–Russell diagram

An H–R diagram plots luminosity against surface temperature. Temperature commonly decreases towards the right, so inspect the axis before interpreting it.

- The main sequence forms a diagonal band.
- Giants and supergiants are highly luminous because their radii are large.
- White dwarfs are hot but faint because their emitting surfaces are small.

Colour, temperature and luminosity are connected: blue stars are hotter than red stars. Apparent brightness, however, also depends on distance.

## GCSE reasoning example

Two stars have the same surface temperature, but A is one hundred times as luminous as B. From:

$$
L=4\\pi R^2\\sigma T^4,
$$

equal $T$ gives $L\\propto R^2$. A therefore has ten times B's radius. There is no need to memorise its exact diagram position: the physical relationship justifies why A belongs in a region of larger stars.

## Mistakes that lose marks

- Claiming that every star ends in a supernova.
- Saying a massive star lives longer because it has more fuel.
- Confusing apparent brightness with luminosity.
- Making fusion the initial cause of nebula contraction.
- Describing a black hole as a “switched-off star”.

## From one topic to complete preparation

Space physics combines extended explanations, graph reading, scales and energy. Método Nebula's virtual campus organises the theory into a route, adds graded questions and demonstrates how each idea becomes an exam answer. Use the contact button if you want to practise this unit alongside waves, nuclear physics and energy.
`,Pe=`---
title: "Física GCSE: ciclo de vida de las estrellas y diagrama H–R sin memorizar una lista"
seoTitle: "Física GCSE: ciclo de vida de las estrellas"
date: "2026-09-29"
updated: "2026-09-29"
description: "Comprende el ciclo de vida estelar en Física GCSE: nebulosas, secuencia principal, gigantes, supernovas, enanas blancas y diagrama H–R."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-physics-radioactivity-half-life,gcse-physics-energy-work-power-efficiency,gcse-physics-waves-refraction"
image: "/assets/latex/gcse-star-life-cycle.svg"
language: "es"
translation: "gcse-physics-space-stars-life-cycle-en"
---

Una estrella no recorre una secuencia fija independiente de su tamaño. La masa inicial decide qué combustible puede fusionar, cuánto dura cada etapa y si el final será una enana blanca, una estrella de neutrones o un agujero negro.

> **Respuesta directa.** Todas las estrellas nacen cuando la gravedad contrae gas y polvo. En la secuencia principal, la fusión de hidrógeno equilibra la gravedad. Las estrellas semejantes al Sol terminan como enanas blancas; las muy masivas pueden explotar como supernovas y dejar una estrella de neutrones o un agujero negro.

![Rutas estelares de baja y alta masa desde una nube de hidrógeno y helio](/assets/latex/gcse-star-life-cycle.svg)

## Del gas a la secuencia principal

Una nebulosa contiene principalmente hidrógeno, helio y polvo. Una perturbación puede hacer que una región se contraiga por gravedad. Al disminuir su tamaño, aumenta la temperatura: la energía potencial gravitatoria se transforma en energía térmica.

La protoestrella entra en la secuencia principal cuando su núcleo alcanza temperatura suficiente para que comience la fusión de hidrógeno. La presión térmica y de radiación hacia fuera equilibra aproximadamente la atracción gravitatoria hacia dentro. Este **equilibrio hidrostático** no significa que no ocurra nada; significa que las dos tendencias se compensan.

## La masa controla el ritmo

Una estrella masiva dispone de más combustible, pero lo consume mucho más deprisa porque su núcleo necesita una temperatura y una presión mayores. Por eso vive menos tiempo en la secuencia principal que una estrella de baja masa.

Esta conclusión suele parecer contraintuitiva. No basta con decir “tiene más hidrógeno”: hay que comparar también la velocidad de fusión. Mayor masa implica mayor luminosidad y un consumo desproporcionadamente rápido.

## Estrellas de masa baja o media

Cuando el hidrógeno del núcleo escasea, cambia el equilibrio y las capas externas se expanden. La estrella se convierte en gigante roja. Después expulsa sus capas exteriores, que forman una nebulosa planetaria, mientras queda un núcleo caliente: la enana blanca.

La enana blanca ya no obtiene energía mediante fusión sostenida. Se enfría lentamente. Una hipotética enana negra sería el resultado final tras un tiempo enorme, mayor que la edad actual del universo.

## Estrellas de gran masa

Una estrella masiva puede fusionar elementos cada vez más pesados hasta llegar al hierro. Fusionar hierro no libera la energía necesaria para sostener el núcleo. Este colapsa y las capas externas producen una supernova.

El remanente depende de la masa del núcleo: puede formarse una estrella de neutrones extremadamente densa o, si la gravedad domina incluso sobre ese soporte, un agujero negro. Los elementos pesados expulsados enriquecen el medio del que nacerán nuevas estrellas y planetas.

## Leer el diagrama Hertzsprung–Russell

El diagrama H–R representa luminosidad frente a temperatura superficial. La temperatura suele disminuir hacia la derecha, un detalle que debe revisarse antes de interpretar.

- La secuencia principal forma una banda diagonal.
- Las gigantes y supergigantes son muy luminosas por su gran radio.
- Las enanas blancas son calientes pero poco luminosas porque su superficie es pequeña.

Color, temperatura y luminosidad están conectados: las estrellas azuladas son más calientes que las rojizas. El brillo aparente, en cambio, también depende de la distancia.

## Ejemplo de razonamiento GCSE

Dos estrellas tienen la misma temperatura superficial, pero A es cien veces más luminosa que B. A partir de:

$$
L=4\\pi R^2\\sigma T^4,
$$

si $T$ es igual, $L\\propto R^2$. Por tanto, el radio de A es diez veces el de B. No hace falta memorizar su posición exacta: la relación física permite justificar que A pertenece a una región de estrellas mayores.

## Errores que pierden puntos

- Afirmar que todas las estrellas terminan en supernova.
- Decir que una estrella masiva vive más porque tiene más combustible.
- Confundir brillo aparente con luminosidad.
- Colocar la fusión como causa inicial de la contracción de la nebulosa.
- Presentar el agujero negro como una “estrella apagada”.

## Del tema aislado a una preparación completa

Espacio combina explicaciones largas, lectura de gráficas, escalas y energía. El campus virtual de Método Nebula reúne la teoría en una ruta, añade preguntas graduadas y muestra cómo convertir cada idea en una respuesta de examen. Si quieres practicar este bloque junto con ondas, nuclear y energía, utiliza el botón de contacto para acceder al plan adecuado.
`,Le=`---
title: "GCSE Physics: heating curves, specific heat capacity and state changes without mixing formulas"
seoTitle: "GCSE Physics: heating curves and changes of state"
date: "2026-10-12"
updated: "2026-10-12"
description: "Understand GCSE heating curves, specific heat capacity, latent heat, particle explanations and energy conservation."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-physics-energy-work-power-efficiency-en,gcse-physics-waves-refraction-en,gcse-physics-forces-exam-questions-en"
image: "/assets/latex/gcse-heating-curve.svg"
language: "en"
translation: "gcse-physics-thermal-heating-curves"
---

On a heating curve, a horizontal line does not mean that energy transfer has stopped. The supplied energy is changing particle arrangement rather than increasing temperature.

> **Direct answer.** Use $Q=mc\\Delta T$ when temperature changes within one state and $Q=mL$ during a change of state. On a plateau, temperature remains constant while internal energy increases.

![Heating curve with sloping sections and state-change plateaus](/assets/latex/gcse-heating-curve.svg)

## Temperature and internal energy

Temperature is linked to the particles' mean kinetic energy. Internal energy includes kinetic energy and potential energy associated with particle interactions.

Heating a solid usually increases particle vibration. During melting, energy partly overcomes the forces holding the structure together.

## Sloping sections

When state does not change:

$$
Q=mc\\Delta T.
$$

$m$ is mass, $c$ is specific heat capacity and $\\Delta T$ is temperature change.

### Worked example

Heating $0.50$ kg of water by $20^\\circ$C with $c=4200\\ \\mathrm{J\\,kg^{-1}\\,^\\circ C^{-1}}$ requires:

$$
Q=0.50\\times4200\\times20=42000\\ \\mathrm{J}.
$$

## Plateaus

During melting or boiling:

$$
Q=mL.
$$

$L$ is specific latent heat. Energy changes particle separation and potential energy rather than mean kinetic energy, so temperature remains constant.

## Power and time

For a heater of power $P$:

$$
E=Pt.
$$

Transferring $42000$ J with a 700 W heater takes, ideally:

$$
t=\\frac{42000}{700}=60\\ \\mathrm{s}.
$$

The real time is longer if energy escapes to the surroundings.

## Graph gradient

At constant power, a steeper line means temperature rises faster. For the same mass and power, a material with lower $c$ gives a steeper gradient.

Plateau length depends on the energy needed for the state change and the input power.

## Efficiency and energy that misses the sample

If a heater takes electrical energy $E_{\\rm in}=Pt$ but only a fraction heats the sample:

$$
\\eta=\\frac{E_{\\rm useful}}{E_{\\rm in}}.
$$

To deliver 42,000 J usefully at 70% efficiency, the input must be:

$$
E_{\\rm in}=\\frac{42000}{0.70}=60000\\ \\mathrm J.
$$

With a 700 W heater, the time is $60000/700\\approx86$ s rather than 60 s. The remaining energy heats the container and surroundings; it has not disappeared.

## Experiment to determine $c$

Measure the block mass, place a heater and thermometer in good thermal contact and record temperature while the electrical power is known. For heating time $t$:

$$
c=\\frac{Pt}{m\\Delta T}.
$$

Insulation and a lid reduce energy loss. The block should be dry and the sensors should fit tightly because an air gap increases thermal resistance. Taking many readings allows transferred energy to be plotted against temperature; the gradient is $mc$.

The experimental value of $c$ is often too high if all electrical energy is assigned to the block even though some escapes. A complete evaluation gives the direction of the effect rather than merely listing “heat loss”.

## Common mistakes

- Using $Q=mc\\Delta T$ on a plateau.
- Claiming internal energy is constant because temperature is constant.
- Confusing $c$ and $L$.
- Substituting mass in grams.
- Assuming 100% efficiency when losses are stated.

## Particle explanation

A complete answer names energy, motion, separation and forces. “Particles expand” is inaccurate: their average separation usually changes; the particles themselves do not grow.

Método Nebula's virtual campus develops thermal energy, particles, state changes and heat transfer through structured theory and GCSE questions. Contact us to combine calculations and scientific explanations in one plan.
`,Ae=`---
title: "Física GCSE: curvas de calentamiento, calor específico y cambios de estado sin mezclar fórmulas"
seoTitle: "Física GCSE: curvas de calentamiento y cambios de estado"
date: "2026-10-12"
updated: "2026-10-12"
description: "Entiende curvas de calentamiento GCSE, capacidad térmica específica, calor latente, partículas y conservación de la energía."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-physics-energy-work-power-efficiency,gcse-physics-waves-refraction,gcse-physics-forces-exam-questions"
image: "/assets/latex/gcse-heating-curve.svg"
language: "es"
translation: "gcse-physics-thermal-heating-curves-en"
---

En una curva de calentamiento, una línea horizontal no significa que haya dejado de entrar energía. Significa que esa energía está cambiando la organización de las partículas en lugar de aumentar su temperatura.

> **Respuesta directa.** Usa $Q=mc\\Delta T$ cuando cambia la temperatura dentro de un mismo estado y $Q=mL$ durante un cambio de estado. En una meseta, la temperatura permanece constante aunque la energía interna aumente.

![Curva de calentamiento con tramos inclinados y mesetas de cambio de estado](/assets/latex/gcse-heating-curve.svg)

## Temperatura y energía interna

La temperatura se relaciona con la energía cinética media de las partículas. La energía interna incluye energía cinética y energía potencial asociada a sus interacciones.

Calentar un sólido suele aumentar la vibración de sus partículas. Durante la fusión, la energía se emplea en vencer parcialmente las fuerzas que mantienen la estructura.

## Tramos inclinados

Si no cambia el estado:

$$
Q=mc\\Delta T.
$$

$m$ es masa, $c$ capacidad térmica específica y $\\Delta T$ cambio de temperatura.

### Ejemplo

Calentar $0.50$ kg de agua $20^\\circ$C con $c=4200\\ \\mathrm{J\\,kg^{-1}\\,^\\circ C^{-1}}$ requiere:

$$
Q=0.50\\times4200\\times20=42000\\ \\mathrm{J}.
$$

## Mesetas

Durante fusión o ebullición:

$$
Q=mL.
$$

$L$ es el calor latente específico. La energía cambia la separación y energía potencial de las partículas, no su energía cinética media; por eso la temperatura permanece constante.

## Potencia y tiempo

Para un calentador de potencia $P$:

$$
E=Pt.
$$

Si se transfieren $42000$ J con un calentador de 700 W, el tiempo ideal es:

$$
t=\\frac{42000}{700}=60\\ \\mathrm{s}.
$$

En la práctica será mayor si hay pérdidas al entorno.

## Pendiente de la gráfica

Con potencia constante, una pendiente grande significa que la temperatura cambia rápidamente. Para la misma masa y potencia, una sustancia con menor $c$ presenta mayor pendiente.

La longitud de una meseta depende de la energía requerida para el cambio de estado y de la potencia suministrada.

## Eficiencia y energía que no llega a la muestra

Si el calentador consume energía eléctrica $E_{\\rm in}=Pt$ pero solo una fracción calienta la muestra:

$$
\\eta=\\frac{E_{\\rm útil}}{E_{\\rm in}}.
$$

Para suministrar 42 000 J útiles con una eficiencia del 70 %, se necesitan:

$$
E_{\\rm in}=\\frac{42000}{0.70}=60000\\ \\mathrm J.
$$

Con 700 W, el tiempo sería $60000/700\\approx86$ s, no 60 s. La energía restante calienta el recipiente y el entorno; no desaparece.

## Experimento para determinar $c$

Mide la masa del bloque, introduce un calentador y un termómetro en contacto térmico y registra la temperatura mientras se conoce la potencia eléctrica. Si el calentamiento dura $t$:

$$
c=\\frac{Pt}{m\\Delta T}.
$$

El aislamiento y una tapa reducen pérdidas. El bloque debe estar seco y los sensores bien ajustados; un espacio de aire aumenta la resistencia térmica. Tomar muchas medidas permite representar energía transferida frente a temperatura: el gradiente es $mc$.

El valor experimental suele salir demasiado alto si se atribuye al bloque toda la energía eléctrica cuando parte se escapa. Una evaluación completa identifica la dirección del efecto, no solo enumera “pérdidas de calor”.

## Errores frecuentes

- Usar $Q=mc\\Delta T$ durante una meseta.
- Afirmar que la energía interna es constante porque la temperatura no cambia.
- Confundir $c$ con $L$.
- Introducir masa en gramos.
- Suponer eficiencia del 100 % cuando el enunciado menciona pérdidas.

## Respuesta de partículas

Una explicación completa nombra energía, movimiento, separación y fuerzas. “Las partículas se expanden” es impreciso: normalmente aumenta su separación; las partículas no crecen.

El campus de Método Nebula desarrolla energía térmica, partículas, cambios de estado y transferencia de calor con teoría y preguntas GCSE. Contacta para practicar cálculos y explicaciones científicas en un mismo plan.
`,Ue=`---
title: "GCSE Physics: reflection and refraction without mixing up frequency, speed and wavelength"
seoTitle: "GCSE Physics: reflection and refraction step by step"
date: "2026-10-29"
updated: "2026-10-29"
description: "Master reflection and refraction in GCSE Physics: normals, angles, speed, frequency, wavelength and exam explanations."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-physics-energy-work-power-efficiency-en,gcse-physics-radioactivity-half-life-en,gcse-physics-electricity-revision-en"
image: "/assets/latex/gcse-wave-refraction.svg"
language: "en"
translation: "gcse-physics-waves-refraction"
---

A wave does not simply “turn” at a boundary. In reflection it remains in the original medium; in refraction it enters another medium and changes speed. The diagram only becomes reliable after the normal has been drawn and every angle is measured from it.

> **Direct answer.** A refracted wave keeps the same frequency because the source fixes it. Its speed and wavelength may change through $v=f\\lambda$. If the wave slows down, it bends towards the normal; if it speeds up, it bends away.

![Incident, reflected and refracted rays with the normal and angles](/assets/latex/gcse-wave-refraction.svg)

## The normal organises the diagram

The normal is perpendicular to the boundary at the point of incidence. Incidence, reflection and refraction angles are measured between each ray and the normal, never between a ray and the surface.

For reflection:

$$
i=r_{\\text{reflection}}.
$$

This remains true for a curved mirror: construct the local normal first.

## What changes during refraction

The source continues oscillating at the same rate:

$$
f_1=f_2.
$$

Since $v=f\\lambda$, changing speed changes wavelength. If $v_2<v_1$, then $\\lambda_2<\\lambda_1$: the wavefronts become closer.

For two media:

$$
\\frac{\\sin i}{\\sin r}=\\frac{v_1}{v_2}.
$$

You do not need a memorised direction rule if you compare the speeds.

## Worked example

A wave moves at $12\\ \\mathrm{m\\,s^{-1}}$ in the first medium and $8\\ \\mathrm{m\\,s^{-1}}$ in the second. Its frequency is $4\\ \\mathrm{Hz}$.

$$
\\lambda_1=\\frac{12}{4}=3\\ \\mathrm{m},
\\qquad
\\lambda_2=\\frac{8}{4}=2\\ \\mathrm{m}.
$$

The frequency stays at $4$ Hz and the wavelength decreases. The refracted ray bends towards the normal.

## Water, light and sound

The physical argument is shared, but “denser medium” is not a universal shortcut. Light usually travels more slowly in glass than in air, while sound can travel faster in solids than in gases. Compare the relevant wave speeds.

## A complete explanation

A three-mark response should connect:

1. The speed changes at the boundary.
2. The frequency remains constant.
3. The wavelength changes because $v=f\\lambda$, producing the direction change.

## Critical angle and total internal reflection

When light tries to move from a medium in which it travels more slowly into one in which it travels faster, the refracted angle increases. At one particular incidence angle, called the **critical angle**, the refracted ray runs along the boundary: $r=90^\\circ$. Above that incidence angle, no transmitted ray remains and total internal reflection occurs.

Both conditions matter: light must be travelling towards the faster medium and its incidence angle must exceed the critical angle. In an optical fibre, repeated total internal reflection keeps the signal inside the core. Writing only that “light bounces” does not explain the role of the boundary and the angle.

## Reading a transparent-block experiment

Trace the block, draw a thin incident ray and mark two points on each straight ray section. Remove the block and join the points with a ruler. Construct each normal and place the protractor centre exactly at the incidence point before measuring. Repeating this for several angles allows $\\sin i$ to be compared with $\\sin r$.

Thick pencil lines, a tilted normal or measuring from the block face create systematic error. In an experimental-evaluation question, suggest thin lines, repeated readings and a wide range of angles rather than simply saying “be more careful”.

## Mistakes that lose marks

- Measuring angles from the surface.
- Changing frequency at the boundary.
- Confusing reflection with refraction.
- Treating amplitude and frequency as the same quantity.
- Drawing the refracted ray without comparing speeds.

## Final exam check

Check the normal, units, direction and $v=f\\lambda$. If the wave slows down but your wavelength increases, the answer is inconsistent.

Método Nebula's virtual campus links waves, light and sound through structured theory, graded questions and GCSE exam practice. Use the contact button if you want a plan with corrected diagrams and explanations.
`,De=`---
title: "Física GCSE: reflexión y refracción sin confundir frecuencia, velocidad y longitud de onda"
seoTitle: "Física GCSE: reflexión y refracción paso a paso"
date: "2026-10-29"
updated: "2026-10-29"
description: "Domina reflexión y refracción en Física GCSE: normales, ángulos, velocidad, frecuencia, longitud de onda y preguntas de examen."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-physics-energy-work-power-efficiency,gcse-physics-radioactivity-half-life,gcse-physics-electricity-revision"
image: "/assets/latex/gcse-wave-refraction.svg"
language: "es"
translation: "gcse-physics-waves-refraction-en"
---

Una onda no “gira porque sí” al llegar a una frontera. En la reflexión permanece en el medio original; en la refracción entra en otro medio y cambia su velocidad. El dibujo solo se entiende si se traza primero la normal y se miden los ángulos respecto a ella.

> **Respuesta directa.** Al refractarse una onda, su frecuencia no cambia porque la fija la fuente. Sí pueden cambiar la velocidad y la longitud de onda, relacionadas por $v=f\\lambda$. Si la onda disminuye su velocidad, se acerca a la normal; si aumenta, se aleja.

![Rayo incidente, reflejado y refractado con normal y ángulos](/assets/latex/gcse-wave-refraction.svg)

## La normal organiza todo el diagrama

La normal es una línea perpendicular a la frontera en el punto de incidencia. Los ángulos de incidencia, reflexión y refracción se miden entre el rayo y la normal, nunca entre el rayo y la superficie.

En reflexión:

$$
i=r_{\\text{reflexión}}.
$$

La igualdad no depende de la forma del espejo. Lo importante es construir la normal localmente.

## Qué cambia en la refracción

La fuente sigue oscilando al mismo ritmo, por lo que:

$$
f_1=f_2.
$$

Como $v=f\\lambda$, un cambio de velocidad obliga a cambiar $\\lambda$. Si $v_2<v_1$, entonces $\\lambda_2<\\lambda_1$. La separación entre frentes de onda disminuye.

Para dos medios puede usarse:

$$
\\frac{\\sin i}{\\sin r}=\\frac{v_1}{v_2}.
$$

No necesitas memorizar “hacia” o “lejos” de la normal si comparas velocidades.

## Ejemplo resuelto

Una onda pasa de un medio donde viaja a $12\\ \\mathrm{m\\,s^{-1}}$ a otro donde viaja a $8\\ \\mathrm{m\\,s^{-1}}$. Su frecuencia es $4\\ \\mathrm{Hz}$.

$$
\\lambda_1=\\frac{12}{4}=3\\ \\mathrm{m},
\\qquad
\\lambda_2=\\frac{8}{4}=2\\ \\mathrm{m}.
$$

La frecuencia permanece en $4$ Hz y la longitud de onda disminuye. El rayo refractado se acerca a la normal.

## Agua, luz y sonido

La idea física es la misma, pero no conviene aprender una regla universal sobre qué medio es “más denso”. La luz suele viajar más despacio en vidrio que en aire; el sonido puede viajar más deprisa en sólidos que en gases. Compara siempre la velocidad relevante.

## Pregunta de explicación completa

Una respuesta de tres puntos debería enlazar:

1. La velocidad cambia al entrar en otro medio.
2. La frecuencia permanece constante.
3. La longitud de onda cambia porque $v=f\\lambda$, y eso produce el cambio de dirección.

## Ángulo crítico y reflexión interna total

Cuando la luz intenta pasar de un medio donde viaja más despacio a otro donde viaja más deprisa, el ángulo refractado aumenta. Para un ángulo de incidencia concreto, llamado **ángulo crítico**, el rayo refractado sale justo por la frontera: $r=90^\\circ$. Si el ángulo de incidencia supera ese valor, ya no hay rayo transmitido y se produce reflexión interna total.

Las dos condiciones deben citarse juntas: la luz debe dirigirse hacia el medio de mayor velocidad y el ángulo de incidencia debe ser mayor que el crítico. En fibras ópticas, esta reflexión repetida mantiene la señal dentro del núcleo. No basta con escribir que “la luz rebota”; hay que relacionar el fenómeno con la frontera y el ángulo.

## Cómo leer un experimento con un bloque transparente

Marca la posición del bloque, dibuja un rayo fino y señala dos puntos antes y después de atravesarlo. Retira el bloque y une los puntos con regla. Después construye las normales y mide los ángulos con el centro del transportador exactamente en cada punto de incidencia. Repetir para varios ángulos permite comparar $\\sin i$ con $\\sin r$.

Una línea gruesa, una normal inclinada o medir desde la cara del bloque introducen un error sistemático. En una pregunta de evaluación experimental conviene mencionar líneas finas, más repeticiones y un intervalo amplio de ángulos.

## Errores que cuestan puntos

- Medir el ángulo desde la superficie.
- Cambiar la frecuencia al cruzar la frontera.
- Confundir reflexión con refracción.
- Afirmar que la amplitud y la frecuencia son lo mismo.
- Dibujar el rayo refractado sin comparar velocidades.

## Comprobación de examen

Antes de terminar, revisa normal, unidades, dirección y relación $v=f\\lambda$. Si el medio reduce la velocidad pero tu longitud de onda aumenta, hay una incoherencia.

El campus de Método Nebula conecta ondas, luz y sonido con teoría, ejercicios graduados y preguntas de examen GCSE. Si quieres practicar dibujos y explicaciones con corrección, utiliza el botón de contacto para construir un plan.
`,we=`---
title: "Gravitación en ESO: ley universal, masa, peso y ejercicios resueltos"
date: "2026-08-26"
updated: "2026-08-26"
description: "Aprende gravitación en ESO: fuerza gravitatoria, ley de Newton, diferencia entre masa y peso, caída libre y ejercicios resueltos."
tag: "ESO"
category: "Física y Química"
relatedService: "/clases-particulares/fisica-ingenieria/"
relatedPosts: "mrua-eso-movimiento-rectilineo-uniformemente-acelerado-ejercicios,mru-eso-movimiento-rectilineo-uniforme-ejercicios,fisica-y-quimica-como-plantear-problemas"
image: "/assets/latex/gravitacion-fuerzas-tierra-eso.svg"
---

La **gravitación** es la interacción por la que dos cuerpos con masa se atraen. Gracias a ella permanecemos sobre la Tierra, la Luna gira alrededor de nuestro planeta y los planetas siguen órbitas alrededor del Sol. No es una fuerza exclusiva de la Tierra: cualquier par de masas se atrae, aunque esa atracción suele ser demasiado pequeña para notarla entre objetos cotidianos.

En esta guía distinguirás la ley de gravitación universal, masa y peso. La diferencia es importante: una persona no pierde masa al viajar a la Luna, pero sí pesa menos allí.

## La idea de Newton: todas las masas se atraen

La ley de gravitación universal afirma que la fuerza entre dos masas es:

$$
F=G\\frac{Mm}{r^2}.
$$

Cada letra representa una magnitud:

| Símbolo | Significado | Unidad |
|---|---|---|
| $F$ | Fuerza gravitatoria | newton (N) |
| $G$ | Constante de gravitación universal | $6{,}67\\cdot10^{-11}$ N·m²/kg² |
| $M$, $m$ | Masas de los cuerpos | kilogramo (kg) |
| $r$ | Distancia entre sus centros | metro (m) |

![Esquema de la atracción gravitatoria entre la Tierra y un objeto, con fuerzas en sentidos opuestos y distancia entre centros](/assets/latex/gravitacion-fuerzas-tierra-eso.svg)

La fórmula muestra dos ideas decisivas:

- si una de las masas aumenta, la fuerza aumenta;
- si la distancia aumenta, la fuerza disminuye mucho porque aparece $r^2$ en el denominador.

Por ejemplo, si la distancia se duplica, $r^2$ se multiplica por cuatro. La fuerza se reduce a la cuarta parte, no solo a la mitad.

## Las fuerzas aparecen por pares

La Tierra atrae a un objeto y el objeto atrae a la Tierra con una fuerza de la misma intensidad. Sus direcciones son opuestas, porque cada fuerza actúa sobre un cuerpo distinto.

Esto no significa que ambos cuerpos aceleren igual. La aceleración depende también de la masa:

$$
a=\\frac{F}{m}.
$$

Como la masa de la Tierra es enorme, su aceleración causada por una persona es inapreciable. La persona sí acelera hacia la Tierra si no hay un soporte que la sostenga.

## Masa y peso no son lo mismo

En conversación se usa «peso» para decir cuántos kilogramos tiene alguien, pero en Física son magnitudes distintas.

| Magnitud | Qué mide | Unidad | ¿Cambia al viajar? |
|---|---|---|---|
| Masa | Cantidad de materia e inercia | kg | No |
| Peso | Fuerza gravitatoria que ejerce un astro | N | Sí |

El peso se calcula cerca de la superficie terrestre con:

$$
P=mg.
$$

En la Tierra, normalmente usamos:

$$
g\\approx9{,}8\\ \\text{m/s}^2.
$$

En algunos ejercicios de ESO el enunciado permite aproximar $g$ a $10$ m/s². Usa el valor que indique el problema.

### Ejemplo: el peso de una mochila

Una mochila tiene masa $m=6$ kg. En la Tierra:

$$
P=mg=6\\cdot9{,}8=58{,}8\\ \\text{N}.
$$

Su masa sigue siendo $6$ kg en cualquier lugar. En la Luna, donde $g\\approx1{,}62$ m/s², su peso sería:

$$
P_{\\text{Luna}}=6\\cdot1{,}62=9{,}72\\ \\text{N}.
$$

La mochila sería más fácil de levantar, pero no tendría menos materia.

## De la ley universal al peso cerca de la Tierra

La ley de Newton se puede escribir para un objeto de masa $m$ cerca de la Tierra:

$$
F=G\\frac{M_{\\text{Tierra}}m}{R_{\\text{Tierra}}^2}.
$$

Como $M_{\\text{Tierra}}$, $G$ y $R_{\\text{Tierra}}$ son los mismos para todos los objetos cercanos a la superficie, ese conjunto se resume en $g$:

$$
g=G\\frac{M_{\\text{Tierra}}}{R_{\\text{Tierra}}^2}.
$$

Por eso obtenemos $P=mg$. La fórmula del peso no contradice la ley universal: es su forma práctica para objetos cerca de la superficie terrestre.

## Caída libre y aceleración de la gravedad

Cuando soltamos un objeto y despreciamos el aire, cae con aceleración aproximadamente constante $g$. Es un caso de [MRUA](/blog/mrua-eso-movimiento-rectilineo-uniformemente-acelerado-ejercicios/).

Si elegimos hacia abajo como sentido positivo y soltamos el objeto desde reposo:

$$
v=gt
$$

$$
d=\\frac12gt^2.
$$

Una pelota se deja caer durante $2$ s. Entonces:

$$
v=9{,}8\\cdot2=19{,}6\\ \\text{m/s}
$$

$$
d=\\frac12\\cdot9{,}8\\cdot2^2=19{,}6\\ \\text{m}.
$$

Sin aire, una bola pesada y una ligera caen con la misma aceleración. La diferencia que observamos entre una hoja y una moneda se debe sobre todo al rozamiento con el aire, no a que la gravedad «tire más» de la moneda por ser más pesada.

## Órbitas: caer sin llegar al suelo

Un satélite está atraído por la Tierra igual que cualquier objeto. Sin embargo, tiene una velocidad horizontal muy alta. Mientras cae hacia la Tierra, la curvatura de su trayectoria acompaña la curvatura del planeta; por eso permanece en órbita.

No hace falta pensar que en una nave orbital no hay gravedad. Sí la hay, y precisamente proporciona la fuerza que curva la trayectoria. La sensación de ingravidez aparece porque nave y astronautas están cayendo juntos.

## Método para resolver ejercicios de gravitación

1. Decide si te piden **peso** cerca de la Tierra o fuerza entre dos masas separadas.
2. Escribe datos con unidades: kg, m y N.
3. Para peso, usa $P=mg$.
4. Para dos cuerpos a distancia, usa $F=GMm/r^2$.
5. Si aparece un radio, recuerda que $r$ mide entre centros, no entre superficies.
6. Revisa el resultado: el peso debe salir en N, no en kg.

La fórmula larga con $G$ suele requerir notación científica. Es buena práctica escribir las potencias de diez paso a paso, en vez de introducir todos los números de golpe en una calculadora.

## Errores frecuentes

### Escribir el peso en kilogramos

Los kilogramos son unidad de masa. El peso es una fuerza y se mide en newtons.

### Usar la masa en gramos

En el SI, la masa debe estar en kg. Una masa de $500$ g es $0{,}5$ kg antes de usar $P=mg$.

### Olvidar el cuadrado de la distancia

En $F=GMm/r^2$, solo la distancia está al cuadrado. Duplicar $r$ divide la fuerza entre cuatro.

### Pensar que no existe gravedad en el espacio

La gravedad disminuye con la distancia, pero no desaparece de golpe. Mantiene a planetas, lunas y satélites en sus trayectorias.

### Confundir acción y reacción con fuerzas que se anulan

La Tierra tira del objeto y el objeto tira de la Tierra con fuerzas iguales. No se anulan porque no actúan sobre el mismo cuerpo.

## Ejercicios resueltos

### 1. Peso de una persona

Una persona tiene masa $60$ kg. Calcula su peso en la Tierra con $g=9{,}8$ m/s².

$$
P=60\\cdot9{,}8=588\\ \\text{N}.
$$

### 2. Peso en la Luna

La misma persona está en la Luna, con $g=1{,}62$ m/s².

$$
P_{\\text{Luna}}=60\\cdot1{,}62=97{,}2\\ \\text{N}.
$$

Su masa continúa siendo $60$ kg.

### 3. Efecto de la distancia

Dos masas están separadas una distancia $r$. Si pasan a estar a distancia $2r$, ¿qué ocurre con la fuerza?

$$
F'=G\\frac{Mm}{(2r)^2}=G\\frac{Mm}{4r^2}=\\frac F4.
$$

La fuerza se reduce a una cuarta parte.

### 4. Caída libre

Se deja caer un objeto desde reposo durante $3$ s. Con $g=9{,}8$ m/s², ¿qué distancia cae?

$$
d=\\frac12\\cdot9{,}8\\cdot3^2=44{,}1\\ \\text{m}.
$$

## Resumen para estudiar

Todas las masas se atraen con una fuerza que aumenta con las masas y disminuye con el cuadrado de la distancia. La masa se mide en kg y no cambia al viajar; el peso es una fuerza, se mide en N y vale $P=mg$ cerca de la Tierra. La caída libre es un MRUA con aceleración $g$.

Para practicar el movimiento de caída, repasa el [MRUA con fórmulas y ejercicios](/blog/mrua-eso-movimiento-rectilineo-uniformemente-acelerado-ejercicios/). Para aprender a identificar datos, unidades y modelo antes de calcular, consulta [cómo plantear problemas de Física y Química](/blog/fisica-y-quimica-como-plantear-problemas/). También puedes consultar las [clases particulares de Física](/clases-particulares/fisica-ingenieria/).
`,Re=`---
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
`,Me=`---
title: Integración por partes: fórmula y ejercicios resueltos
seoTitle: "Integración por partes: fórmula, cómo elegir u y ejercicios"
date: 2026-08-06
updated: 2026-10-29
description: Domina la integración por partes: deducción de la fórmula, elección de u y dv, casos repetidos, integrales definidas y ejercicios resueltos.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: metodos-de-integracion-como-elegir,integracion-por-sustitucion-cambio-variable-ejercicios,que-son-las-integrales-y-para-que-se-utilizan
image: /favicon.svg
---

La integración por partes transforma una integral \\(\\int u\\,dv\\) en \\(uv-\\int v\\,du\\). Conviene usarla cuando el integrando contiene un producto y **derivar uno de los factores lo simplifica**, mientras el otro se puede integrar. También resuelve integrales de logaritmos y funciones inversas escribiéndolas como un producto por \\(1\\).

La fórmula no decide por sí sola qué parte será \\(u\\) y cuál \\(dv\\). Esa elección es el centro del método: la nueva integral debe ser más sencilla que la original o formar con ella una ecuación que podamos despejar.

> **Respuesta directa.** La fórmula es \\(\\int u\\,dv=uv-\\int v\\,du\\). Elige como \\(u\\) el factor que se simplifica al derivarlo y como \\(dv\\) el que puede integrarse sin dificultad. Si la nueva integral no es más sencilla, cambia la elección o utiliza otra técnica.

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
`,Ie=`---
title: Integración por sustitución: cambio de variable y ejercicios
seoTitle: "Integración por sustitución: método y ejercicios resueltos"
date: 2026-08-12
updated: 2026-10-29
description: Aprende integración por sustitución con criterio: cómo elegir el cambio de variable, transformar diferenciales y límites, y comprobar cada resultado.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: metodos-de-integracion-como-elegir,integracion-por-partes-formula-ejercicios-resueltos,que-son-las-integrales-y-para-que-se-utilizan
image: /favicon.svg
---

La integración por sustitución, o cambio de variable, deshace la regla de la cadena. Si una integral contiene una función compuesta \\(f(g(x))\\) y también el factor \\(g'(x)\\), hacemos \\(u=g(x)\\) para convertirla en una integral de \\(f(u)\\). El cambio es adecuado cuando toda la expresión puede escribirse en la nueva variable y el resultado es más sencillo.

La clave no es «cambiar lo que está dentro de un paréntesis». Hay que transformar a la vez la función, el diferencial y, en integrales definidas, los límites. Si después del cambio quedan mezcladas \\(x\\) y \\(u\\), el procedimiento está incompleto o la sustitución no conviene.

> **Respuesta directa.** Usa integración por sustitución cuando reconozcas una función compuesta acompañada, salvo una constante, por la derivada de su parte interior. Elige \\(u=g(x)\\), transforma también \\(dx\\) y los límites, integra en una sola variable y comprueba el resultado derivando.

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

En cálculo multivariable, la misma idea exige corregir áreas mediante el determinante: consulta la guía de [cambio de variables y jacobiano en integrales dobles](/blog/cambio-variables-jacobiano-integrales-dobles/).

Si estás trabajando sustituciones más exigentes en Cálculo y necesitas corregir la elección del cambio sobre ejercicios reales de tu asignatura, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
`,Te=`---
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
`,Ne=`---
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

Sea $f(x,y)$ una función definida sobre una región $R$. Dividimos $R$ en pequeñas celdas de área $\\Delta A_i$, elegimos un punto $(x_i^*,y_i^*)$ en cada una y sumamos

$$
\\sum_i f(x_i^*,y_i^*)\\Delta A_i.
$$

Si estas sumas se aproximan a un límite único al refinar la partición, definimos

$$
\\iint_R f(x,y)\\,dA.
$$

Cuando $f\\ge0$, cada producto $f\\Delta A$ aproxima el volumen de una columna muy fina. Por eso la integral da el volumen bajo $z=f(x,y)$ y sobre $R$. Si $f$ cambia de signo, el resultado es volumen firmado: las partes bajo el plano $z=0$ restan.

Si $f=1$, la altura de todas las columnas es uno y

$$
\\iint_R1\\,dA=\\operatorname{área}(R).
$$

Esta interpretación conecta las [integrales de una variable](/blog/que-son-las-integrales-y-para-que-se-utilizan/) con superficies y regiones bidimensionales.

## Dominios rectangulares y teorema de Fubini

En un rectángulo

$$
R=[a,b]\\times[c,d],
$$

el teorema de Fubini permite calcular una integral continua mediante integrales iteradas:

$$
\\iint_R f(x,y)\\,dA
=\\int_a^b\\left(\\int_c^d f(x,y)\\,dy\\right)dx.
$$

También podemos invertir el orden:

$$
\\iint_R f(x,y)\\,dA
=\\int_c^d\\left(\\int_a^b f(x,y)\\,dx\\right)dy.
$$

En la integral interior, la otra variable se trata como constante. Después de evaluarla debe quedar una expresión que dependa solo de la variable exterior.

Fubini requiere hipótesis de integrabilidad; para las funciones continuas sobre rectángulos cerrados que aparecen en cursos iniciales, se cumplen automáticamente.

## Ejemplo 1: integral sobre un rectángulo

Calcula

$$
\\iint_R(x+2y)\\,dA,
\\qquad
R=[0,1]\\times[0,2].
$$

Integramos primero respecto de $y$:

$$
\\int_0^1\\left(\\int_0^2(x+2y)\\,dy\\right)dx.
$$

Dentro, $x$ es constante:

$$
\\int_0^2(x+2y)\\,dy
=\\left[xy+y^2\\right]_0^2
=2x+4.
$$

Ahora integramos respecto de $x$:

$$
\\int_0^1(2x+4)\\,dx
=\\left[x^2+4x\\right]_0^1=5.
$$

Como $x+2y\\ge0$ en el rectángulo, el resultado puede interpretarse como un volumen y debe ser positivo.

Al invertir el orden se obtiene

$$
\\int_0^2\\left(\\int_0^1(x+2y)\\,dx\\right)dy=5,
$$

una comprobación independiente.

## Integrandos separables

Si $f(x,y)=g(x)h(y)$ y el dominio es rectangular, la integral factoriza:

$$
\\iint_R g(x)h(y)\\,dA
=\\left(\\int_a^b g(x)\\,dx\\right)
\\left(\\int_c^d h(y)\\,dy\\right).
$$

Por ejemplo,

$$
\\int_0^1\\int_0^\\pi xe^x\\sin y\\,dy\\,dx
=\\left(\\int_0^1xe^x\\,dx\\right)
\\left(\\int_0^\\pi\\sin y\\,dy\\right).
$$

La primera integral vale $1$ y la segunda $2$, así que el resultado es $2$. Esta propiedad no puede aplicarse sin más en una región triangular, porque los límites enlazan las variables.

## Regiones generales: tipo I y tipo II

Una región simple respecto de $x$, o de tipo I, se describe mediante

$$
R=\\{(x,y):a\\le x\\le b,\\ g_1(x)\\le y\\le g_2(x)\\}.
$$

Se recorre con segmentos verticales: para cada $x$, $y$ va desde la curva inferior hasta la superior. La integral es

$$
\\iint_Rf\\,dA
=\\int_a^b\\int_{g_1(x)}^{g_2(x)}f(x,y)\\,dy\\,dx.
$$

Una región simple respecto de $y$, o de tipo II, tiene la forma

$$
R=\\{(x,y):c\\le y\\le d,\\ h_1(y)\\le x\\le h_2(y)\\},
$$

y se recorre con segmentos horizontales:

$$
\\iint_Rf\\,dA
=\\int_c^d\\int_{h_1(y)}^{h_2(y)}f(x,y)\\,dx\\,dy.
$$

![Comparación de los dos órdenes de integración en el triángulo: cortes verticales con límites de y y cortes horizontales con límites de x](/assets/latex/double-integral-region.svg)

Los dos paneles representan exactamente el mismo triángulo. En el primero se fija $x$ y se recorre el segmento rojo de abajo arriba, por eso la integral interior es respecto de $y$. En el segundo se fija $y$ y se recorre el segmento naranja de izquierda a derecha, por eso se integra primero respecto de $x$. Antes de calcular, dibuja las curvas, halla sus intersecciones y decide qué recorrido produce límites más sencillos.

## Ejemplo 2: región triangular

Sea

$$
R=\\{(x,y):x\\ge0,\\ y\\ge0,\\ x+y\\le1\\}.
$$

Con cortes verticales, $x$ recorre $[0,1]$ y, fijado $x$, la variable $y$ va de $0$ a $1-x$. Calculemos

$$
\\iint_R(x+y)\\,dA.
$$

Planteamos

$$
\\int_0^1\\int_0^{1-x}(x+y)\\,dy\\,dx.
$$

La integral interior es

$$
\\left[xy+\\frac{y^2}{2}\\right]_0^{1-x}
=x(1-x)+\\frac{(1-x)^2}{2}
=\\frac{1-x^2}{2}.
$$

Por tanto,

$$
\\int_0^1\\frac{1-x^2}{2}\\,dx
=\\frac12\\left[x-\\frac{x^3}{3}\\right]_0^1
=\\frac13.
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
I=\\int_0^1\\int_x^1 e^{y^2}\\,dy\\,dx.
$$

La integral interior no tiene una primitiva elemental. La región original cumple

$$
0\\le x\\le1,
\\qquad
x\\le y\\le1.
$$

Es el triángulo situado sobre $y=x$ y bajo $y=1$. Con cortes horizontales, $y$ recorre $[0,1]$ y $x$ va de $0$ a $y$. Entonces

$$
I=\\int_0^1\\int_0^y e^{y^2}\\,dx\\,dy.
$$

Ahora el integrando es constante respecto de $x$:

$$
I=\\int_0^1 ye^{y^2}\\,dy.
$$

Con $u=y^2$, $du=2y\\,dy$:

$$
I=\\frac12\\int_0^1e^u\\,du
=\\frac{e-1}{2}.
$$

Cambiar el orden no es una formalidad: convierte una integral imposible con técnicas elementales en un cambio de variable inmediato.

## Regiones que deben dividirse

Sea la región limitada por $y=x^2$ y $y=2-x$. Las intersecciones satisfacen

$$
x^2=2-x,
$$

de donde $x=-2$ y $x=1$. Como región de tipo I se describe en una sola integral:

$$
-2\\le x\\le1,
\\qquad
x^2\\le y\\le2-x.
$$

Si queremos usar cortes horizontales, debemos observar que la frontera izquierda cambia. La parábola da $x=\\pm\\sqrt y$ y la recta da $x=2-y$. Para $0\\le y\\le1$, el corte va de $-\\sqrt y$ a $\\sqrt y$; para $1\\le y\\le4$, va de $-\\sqrt y$ a $2-y$. Por tanto,

$$
\\iint_R f\\,dA
=\\int_0^1\\int_{-\\sqrt y}^{\\sqrt y}f\\,dx\\,dy
+\\int_1^4\\int_{-\\sqrt y}^{2-y}f\\,dx\\,dy.
$$

Un dibujo revela el cambio en $y=1$. Intentar forzar una sola integral horizontal incluiría puntos ajenos o excluiría parte de la región.

## Ejemplo 4: integrar entre dos curvas

Calculemos

$$
I=\\iint_R y\\,dA,
$$

donde $R$ está limitada por $y=x^2$ y $y=x$. Primero resolvemos $x^2=x$, lo que da $x=0$ y $x=1$. En ese intervalo, $x^2\\le x$, así que la parábola es la frontera inferior y la recta la superior:

$$
I=\\int_0^1\\int_{x^2}^{x}y\\,dy\\,dx.
$$

Integramos respecto de $y$:

$$
I=\\int_0^1\\left[\\frac{y^2}{2}\\right]_{x^2}^{x}dx
=\\frac12\\int_0^1(x^2-x^4)\\,dx.
$$

Por tanto,

$$
I=\\frac12\\left(\\frac13-\\frac15\\right)=\\frac1{15}.
$$

La función $y$ es no negativa en la región y nunca supera $1$. Como el área es $1/6$, el resultado debe pertenecer a $[0,1/6]$; $1/15$ cumple esa condición.

## Área de una región

Para hallar un área se integra la función constante uno. En la región entre $y=x^2$ e $y=x$, las intersecciones son $x=0$ y $x=1$. Así,

$$
A=\\int_0^1\\int_{x^2}^{x}1\\,dy\\,dx
=\\int_0^1(x-x^2)\\,dx
=\\frac16.
$$

La integral doble reproduce la fórmula «curva superior menos curva inferior», pero además prepara el mismo dominio para integrar densidades o alturas variables.

## Volumen entre dos superficies

Si $z=f(x,y)$ está por encima de $z=g(x,y)$ sobre $R$, el volumen es

$$
V=\\iint_R\\bigl(f(x,y)-g(x,y)\\bigr)\\,dA.
$$

Por ejemplo, sobre el cuadrado $0\\le x\\le1$, $0\\le y\\le1$, el volumen entre $z=3+x$ y $z=x+y^2$ es

$$
V=\\int_0^1\\int_0^1(3-y^2)\\,dy\\,dx.
$$

La integral interior vale $3-1/3=8/3$ y la exterior multiplica por la anchura $1$. Por tanto, $V=8/3$. El término $x$ desaparece al restar las superficies, una simplificación que conviene hacer antes de integrar.

## Masa, centro de masas y valor medio

Si una lámina ocupa $R$ y tiene densidad superficial $\\rho(x,y)$, su masa es

$$
M=\\iint_R\\rho(x,y)\\,dA.
$$

Sus momentos respecto de los ejes son

$$
M_x=\\iint_Ry\\rho(x,y)\\,dA,
\\qquad
M_y=\\iint_Rx\\rho(x,y)\\,dA,
$$

y el centro de masas es

$$
\\bar x=\\frac{M_y}{M},
\\qquad
\\bar y=\\frac{M_x}{M}.
$$

El intercambio de subíndices tiene sentido: el momento respecto del eje $y$ utiliza la distancia horizontal $x$.

El valor medio de una función sobre una región de área no nula es

$$
f_{\\mathrm{med}}=\\frac1{\\operatorname{área}(R)}\\iint_Rf\\,dA.
$$

### Ejemplo 5: masa con densidad variable

En el rectángulo $0\\le x\\le2$, $0\\le y\\le1$, sea $\\rho(x,y)=1+x$. Entonces

$$
M=\\int_0^2\\int_0^1(1+x)\\,dy\\,dx
=\\int_0^2(1+x)\\,dx=4.
$$

La densidad aumenta hacia la derecha. El momento respecto del eje $y$ es

$$
M_y=\\int_0^2\\int_0^1x(1+x)\\,dy\\,dx
=\\int_0^2(x+x^2)\\,dx
=\\frac{14}{3}.
$$

Por tanto,

$$
\\bar x=\\frac{14/3}{4}=\\frac76>1,
$$

coherente con que el centro de masas se desplace a la derecha del centro geométrico. Por simetría vertical, $\\bar y=1/2$.

## Simetría antes de integrar

Una simetría puede ahorrar todo el cálculo. Si $R$ es simétrica respecto del eje $y$ y

$$
f(-x,y)=-f(x,y),
$$

entonces

$$
\\iint_Rf(x,y)\\,dA=0.
$$

Cada punto $(x,y)$ se empareja con $(-x,y)$ y sus contribuciones se cancelan. Existe una regla análoga para funciones impares en $y$ sobre regiones simétricas respecto del eje $x$.

Por ejemplo, en el disco unidad,

$$
\\iint_R x(1+y^2)\\,dA=0,
$$

porque el integrando es impar en $x$. En cambio, $x^2(1+y)$ no es impar en $x$ y no puede anularse con ese argumento. La simetría debe comprobarse tanto en el integrando como en la región.

Si la función es par, la integral no se anula, pero puede reducirse. Sobre una región simétrica respecto de ambos ejes,

$$
\\iint_R f(x,y)\\,dA
=4\\iint_{R\\cap\\{x\\ge0,y\\ge0\\}}f(x,y)\\,dA
$$

cuando $f$ es par en cada variable. Esta reducción será especialmente útil con coordenadas polares.

## Integrales impropias y orden de integración

Fubini permite intercambiar el orden bajo hipótesis adecuadas. Si $f\\ge0$, el teorema de Tonelli permite interpretar ambas integrales iteradas, aunque el resultado pueda ser infinito. Si $f$ cambia de signo en una región no acotada, la convergencia absoluta cobra importancia: sin ella, cambiar el orden puede alterar el resultado o hacer que una iterada no exista.

En ejercicios iniciales con funciones continuas sobre regiones cerradas y acotadas no aparece este problema. Pero no conviene extrapolar el intercambio de orden de forma automática a integrales impropias. Primero debe justificarse la integrabilidad.

## Coordenadas polares: cuándo aparecen

Las regiones circulares suelen resultar incómodas en coordenadas cartesianas. Con

$$
x=r\\cos\\theta,
\\qquad
y=r\\sin\\theta,
$$

un disco se describe mediante límites constantes en $r$ y $\\theta$. Sin embargo, el elemento de área no es $dr\\,d\\theta$, sino

$$
dA=r\\,dr\\,d\\theta.
$$

Ese factor $r$ es un jacobiano y mide cómo cambia el área al transformar las coordenadas. La guía de [cambio de variables y jacobiano](/blog/cambio-variables-jacobiano-integrales-dobles/) desarrolla el método y las condiciones para aplicarlo.

## Cómo comprobar una integral doble

Antes de confiar en el resultado, aplica varios controles:

- **Signo:** si $f\\ge0$, la integral no puede ser negativa.
- **Cotas:** si $m\\le f\\le M$ en $R$, entonces

$$
m\\,\\operatorname{área}(R)
\\le\\iint_Rf\\,dA
\\le M\\,\\operatorname{área}(R).
$$

- **Unidades:** densidad superficial por área produce masa; altura por área produce volumen.
- **Simetría:** una función impar respecto de un eje integrada sobre una región simétrica puede dar cero.
- **Orden alternativo:** si ambos órdenes son razonables, deben coincidir.
- **Integrando constante:** para $f=c$, el resultado debe ser $c$ por el área.

En el ejemplo triangular, $0\\le x+y\\le1$ y el área es $1/2$, de modo que la integral debe estar entre $0$ y $1/2$. El valor $1/3$ satisface este control.

## Cómo pasar de un enunciado a los límites

Subraya primero qué magnitud se integra y sobre qué región. Si el dominio viene descrito con palabras, traduce cada borde a una ecuación. Calcula sus intersecciones y elige un punto interior para decidir qué curva queda arriba, abajo, a la izquierda o a la derecha.

Después escribe una frase de recorrido antes de la integral: «$x$ va de cero a uno y, fijado $x$, $y$ va de $x^2$ a $x$». Esa frase detecta límites invertidos mejor que una manipulación simbólica. Finalmente comprueba que el límite interior solo depende de la variable exterior, nunca de la propia variable que se está integrando.

## Aproximación numérica cuando no hay primitiva

No toda integral doble admite una expresión elemental. Una vez planteados correctamente los límites, puede aproximarse mediante sumas de Riemann, reglas de cuadratura iteradas o métodos de Montecarlo. El planteamiento geométrico sigue siendo necesario: el algoritmo debe saber qué puntos pertenecen a la región y con qué peso cuentan.

En una malla rectangular uniforme, una suma de puntos medios tiene la forma

$$
\\iint_Rf\\,dA
\\approx\\sum_{i=1}^{m}\\sum_{j=1}^{n}
f(x_i^*,y_j^*)\\,\\Delta x\\,\\Delta y.
$$

Para una región general pueden descartarse las celdas exteriores o, con mayor precisión, parametrizarse sus límites mediante una integral iterada. Al aumentar $m$ y $n$, compara aproximaciones sucesivas y usa las cotas del integrando para detectar resultados imposibles.

Una calculadora o un programa puede ejecutar la cuadratura, pero no corrige una región mal descrita. Si se invierten las curvas superior e inferior, el software calculará fielmente una integral con signo negativo aunque el problema pidiera un área positiva.

## Errores frecuentes

### Mantener los límites al cambiar el orden

Los límites pertenecen a una descripción geométrica concreta. Al invertir el orden hay que deducirlos de nuevo.

### Integrar la variable exterior dentro

En $\\int\\int f\\,dy\\,dx$, la primera operación es respecto de $y$ y $x$ se trata como constante.

### Evaluar mal límites dependientes

Si el límite es $1-x$, debe sustituirse toda la expresión y simplificarse con paréntesis antes de la integral exterior.

### Confundir volumen con integral firmada

Si la función cambia de signo, $\\iint f\\,dA$ puede incluir cancelaciones. Para volumen geométrico se integra la diferencia «superficie superior menos inferior» o se divide el dominio donde cambie el orden.

### Olvidar dividir la región

Una frontera puede cambiar a mitad del recorrido. Si un segmento horizontal o vertical entra y sale varias veces, la región requiere varias integrales.

## Ejercicios propuestos

1. Calcula $\\int_0^2\\int_0^1(x+y)\\,dy\\,dx$.
2. Calcula $\\iint_Rxy\\,dA$ para $R=[0,2]\\times[1,3]$.
3. Halla el área de $R=\\{0\\le x\\le2,\\ 0\\le y\\le x^2\\}$.
4. Evalúa $\\int_0^1\\int_0^{1-x}1\\,dy\\,dx$ e interpreta el resultado.
5. Invierte el orden para la región $0\\le x\\le1$, $\\sqrt x\\le y\\le1$.
6. Calcula $\\iint_R(x-y)\\,dA$ en el cuadrado $[-1,1]^2$ usando simetría.
7. Halla el volumen bajo $z=2-x-y$ sobre $x\\ge0$, $y\\ge0$, $x+y\\le2$.
8. Calcula el valor medio de $f=x+y$ en $[0,2]\\times[0,1]$.
9. Una lámina ocupa $[0,1]^2$ y tiene densidad $\\rho=2x+1$. Halla su masa y $\\bar x$.
10. Decide qué orden usarías para $\\int\\int_R e^{x^2}\\,dA$ si $R=\\{0\\le y\\le x\\le1\\}$.

## Soluciones

### Ejercicio 1

La integral interior vale $x+1/2$. Integrando de $0$ a $2$:

$$
\\int_0^2\\left(x+\\frac12\\right)dx=3.
$$

### Ejercicio 2

Al ser rectangular y separable,

$$
\\iint_Rxy\\,dA
=\\left(\\int_0^2x\\,dx\\right)
\\left(\\int_1^3y\\,dy\\right)=2\\cdot4=8.
$$

### Ejercicio 3

Integramos uno sobre la región:

$$
A=\\int_0^2\\int_0^{x^2}1\\,dy\\,dx
=\\int_0^2x^2\\,dx=\\frac83.
$$

### Ejercicio 4

El resultado es

$$
\\int_0^1(1-x)\\,dx=\\frac12,
$$

el área del triángulo de vértices $(0,0)$, $(1,0)$ y $(0,1)$.

### Ejercicio 5

La región cumple $0\\le x\\le1$ y $\\sqrt x\\le y\\le1$, equivalente a $0\\le y\\le1$ y $0\\le x\\le y^2$. Por tanto,

$$
\\int_0^1\\int_0^{y^2}f(x,y)\\,dx\\,dy.
$$

### Ejercicio 6

Tanto $x$ como $-y$ son impares respecto de uno de los ejes y el cuadrado es simétrico. Las contribuciones se cancelan, así que la integral vale cero.

### Ejercicio 7

Planteamos

$$
V=\\int_0^2\\int_0^{2-x}(2-x-y)\\,dy\\,dx.
$$

La integral interior es $(2-x)^2/2$ y la exterior vale

$$
\\frac12\\int_0^2(2-x)^2dx=\\frac43.
$$

### Ejercicio 8

La integral de $x+y$ sobre el rectángulo vale $3$ y su área es $2$. El valor medio es $3/2$, igual a la suma de las coordenadas del centro $(1,1/2)$.

### Ejercicio 9

La masa es

$$
M=\\int_0^1\\int_0^1(2x+1)\\,dy\\,dx=2.
$$

El momento $M_y$ vale $\\int_0^1x(2x+1)dx=7/6$, luego

$$
\\bar x=\\frac{7}{12}.
$$

### Ejercicio 10

El orden original de la región sería $0\\le x\\le1$, $0\\le y\\le x$, pero integrar $e^{x^2}$ respecto de $y$ sí es inmediato. Usamos

$$
\\int_0^1\\int_0^xe^{x^2}\\,dy\\,dx
=\\int_0^1xe^{x^2}\\,dx
=\\frac{e-1}{2}.
$$

## Resumen operativo

Dibuja primero y escribe después los límites. En una integral iterada, resuelve la integral interior tratando la otra variable como constante. Cambia el orden cuando simplifique el integrando o los límites, reconstruyendo siempre la región. Para áreas integra uno; para volúmenes usa altura superior menos inferior; para masas introduce la densidad.

Si necesitas trabajar regiones y cambios de orden con ejercicios de tu temario, las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/) permiten practicar el planteamiento y no solo la integración mecánica.
`,Fe=`---
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
`,He=`---
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
`,Oe=`---
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
`,Be=`---
title: "Máximos y mínimos de varias variables: guía y ejercicios"
date: "2026-09-01"
updated: "2026-09-01"
description: "Aprende a hallar y clasificar extremos de dos variables con gradiente, matriz hessiana, fronteras y multiplicadores de Lagrange."
tag: "Cálculo"
category: "Matemáticas universitarias"
relatedService: "/clases-particulares/calculo-universitario/"
relatedPosts: "derivadas-parciales-gradiente-ejercicios,problemas-optimizacion-derivadas-ejercicios-resueltos,estudio-completo-funcion-paso-a-paso"
image: "/assets/latex/multivariable-extrema-contours.svg"
---

Para buscar máximos y mínimos de una función de varias variables no basta con igualar una derivada a cero. Hay que localizar candidatos interiores, clasificarlos, analizar la frontera del dominio y comparar valores si se piden extremos absolutos. La matriz hessiana resuelve muchos casos interiores; los multiplicadores de Lagrange permiten incorporar restricciones.

Esta guía desarrolla el procedimiento completo para funciones de dos variables, explica qué ocurre cuando el criterio de la hessiana no decide y resuelve ejemplos con y sin restricciones.

## Extremos locales y absolutos

Sea una función

$$
f:D\\subseteq\\mathbb R^2\\to\\mathbb R.
$$

Decimos que $f$ tiene un mínimo local en $(a,b)$ si existe un entorno del punto tal que

$$
f(a,b)\\le f(x,y)
$$

para todos los puntos del dominio dentro de ese entorno. Es un máximo local si la desigualdad se invierte.

Un mínimo absoluto cumple la desigualdad en todo $D$; un máximo absoluto también se compara con todo el dominio. La diferencia es esencial: un valle pequeño puede ser un mínimo local y, sin embargo, existir otro punto con un valor menor.

En una variable solo podemos acercarnos por la izquierda o por la derecha. En dos variables hay infinitas direcciones. Por eso un punto puede ser mínimo a lo largo de una recta y máximo a lo largo de otra: eso produce un punto de silla.

![Comparación de curvas de nivel numeradas para un mínimo, un máximo y un punto de silla, con flechas que indican dónde aumenta cada función](/assets/latex/multivariable-extrema-contours.svg)

En el mínimo, los niveles $1$, $4$ y $9$ aumentan al alejarse del centro; en el máximo, los niveles $-1$, $-4$ y $-9$ disminuyen hacia fuera, de modo que el valor central cero es el mayor. En el punto de silla aparecen dos familias de hipérbolas: la función sube en la dirección del eje $x$ y baja en la del eje $y$.

## Primer paso: localizar todos los candidatos

Si $f$ es diferenciable y tiene un extremo local en un punto interior $(a,b)$, entonces

$$
\\nabla f(a,b)=\\mathbf0.
$$

En dos variables hay que resolver el sistema

$$
f_x(x,y)=0,
\\qquad
f_y(x,y)=0.
$$

Las soluciones son puntos críticos o estacionarios, pero todavía no sabemos si son máximos, mínimos o puntos de silla.

La lista de candidatos también debe incluir:

- puntos interiores donde alguna derivada parcial no existe;
- puntos de la frontera del dominio;
- vértices y extremos de cada tramo de la frontera;
- comportamientos límite si el dominio no es cerrado o no está acotado.

Igualar el gradiente a cero solo encuentra candidatos interiores regulares. Es el equivalente multivariable de resolver $f'(x)=0$ sin mirar los extremos de un intervalo.

## Matriz hessiana y criterio de la segunda derivada

La matriz hessiana de una función de dos variables es

$$
H_f(x,y)=
\\begin{pmatrix}
f_{xx} & f_{xy}\\\\
f_{yx} & f_{yy}
\\end{pmatrix}.
$$

Si las segundas parciales son continuas, las cruzadas coinciden. En un punto crítico definimos

$$
D=f_{xx}f_{yy}-(f_{xy})^2.
$$

El criterio es:

| Condición en el punto crítico | Clasificación |
|---|---|
| $D>0$ y $f_{xx}>0$ | mínimo local |
| $D>0$ y $f_{xx}<0$ | máximo local |
| $D<0$ | punto de silla |
| $D=0$ | el criterio no decide |

Si $D>0$, las curvaturas principales tienen el mismo signo. El signo de $f_{xx}$ distingue un cuenco de una cúpula. Si $D<0$, la superficie se curva hacia arriba en unas direcciones y hacia abajo en otras.

Esta tabla solo se aplica después de comprobar que el punto es crítico e interior. Si $D=0$, no puede concluirse «no hay extremo»: hace falta otro argumento.

## Ejemplo 1: mínimo de una función cuadrática

Estudiemos

$$
f(x,y)=x^2+2y^2-4x+8y+1.
$$

Buscamos los puntos críticos:

$$
f_x=2x-4=0,
\\qquad
f_y=4y+8=0.
$$

La única solución es $(2,-2)$. Las segundas parciales son

$$
f_{xx}=2,
\\qquad f_{yy}=4,
\\qquad f_{xy}=0.
$$

Por tanto,

$$
D=2\\cdot4-0^2=8>0,
$$

y como $f_{xx}>0$, hay un mínimo local. En este caso podemos demostrar que es absoluto completando cuadrados:

$$
f(x,y)=(x-2)^2+2(y+2)^2-11.
$$

Los cuadrados son no negativos, así que

$$
f(x,y)\\ge-11,
$$

con igualdad únicamente en $(2,-2)$. El mínimo absoluto vale $-11$ y no existe máximo porque la función crece sin cota al alejarnos.

La hessiana clasifica localmente; completar cuadrados proporciona además una prueba global.

## Ejemplo 2: reconocer un punto de silla

Sea

$$
f(x,y)=x^2-y^2.
$$

El gradiente es $(2x,-2y)$ y solo se anula en $(0,0)$. Allí,

$$
D=(2)(-2)-0=-4<0,
$$

por lo que existe un punto de silla.

También puede verse comparando trayectorias. Sobre el eje $x$,

$$
f(x,0)=x^2\\ge0,
$$

mientras que sobre el eje $y$,

$$
f(0,y)=-y^2\\le0.
$$

En cualquier entorno del origen hay valores mayores y menores que $f(0,0)=0$. Esta prueba por caminos es especialmente útil cuando el criterio de segundo orden no decide.

## Qué hacer cuando $D=0$

Considera dos funciones con el mismo resultado inconcluso:

$$
f(x,y)=x^4+y^4,
\\qquad
g(x,y)=x^4-y^4.
$$

Ambas tienen gradiente nulo en el origen y todas sus segundas parciales valen cero allí, de modo que $D=0$.

Sin embargo,

$$
f(x,y)\\ge0=f(0,0),
$$

así que $f$ tiene un mínimo absoluto en el origen. Para $g$, sobre $y=0$ se obtienen valores positivos y sobre $x=0$ valores negativos; el origen es un punto de silla.

Cuando $D=0$, puedes:

1. factorizar o completar cuadrados;
2. estudiar el signo de $f(x,y)-f(a,b)$;
3. aproximarte por distintas curvas;
4. usar términos de orden superior de Taylor;
5. explotar desigualdades o propiedades globales.

El objetivo es decidir si cerca del punto todos los valores quedan a un lado o aparecen valores a ambos lados.

## Ejemplo 3: varios puntos críticos en un mismo problema

Estudiemos

$$
f(x,y)=x^3+y^3-3x-3y.
$$

Las ecuaciones del gradiente son independientes:

$$
f_x=3x^2-3=0,
\\qquad
f_y=3y^2-3=0.
$$

Por tanto, $x=\\pm1$ e $y=\\pm1$. Hay cuatro combinaciones, no dos:

$$
(1,1),\\quad(1,-1),\\quad(-1,1),\\quad(-1,-1).
$$

Las segundas parciales son

$$
f_{xx}=6x,
\\qquad
f_{yy}=6y,
\\qquad
f_{xy}=0,
$$

así que $D=36xy$. En $(1,1)$, $D>0$ y $f_{xx}>0$: hay un mínimo local de valor $-4$. En $(-1,-1)$, $D>0$ y $f_{xx}<0$: hay un máximo local de valor $4$. En los dos puntos con signos mezclados, $D<0$ y aparecen puntos de silla, ambos de valor cero.

Ninguno de los extremos locales es absoluto. Sobre la recta $y=0$,

$$
f(x,0)=x^3-3x,
$$

que tiende a $+\\infty$ cuando $x\\to+\\infty$ y a $-\\infty$ cuando $x\\to-\\infty$. El ejemplo separa tres tareas que suelen confundirse: resolver todas las combinaciones del sistema, clasificar localmente y estudiar después el comportamiento global.

## Extremos absolutos en regiones cerradas y acotadas

El teorema de Weierstrass garantiza que una función continua sobre un conjunto compacto —cerrado y acotado en $\\mathbb R^2$— alcanza máximo y mínimo absolutos. El teorema asegura que existen, pero no dice dónde.

El procedimiento es:

1. Halla los puntos críticos del interior.
2. Estudia cada parte de la frontera como un problema de una variable o mediante Lagrange.
3. Incluye vértices, uniones y puntos donde la parametrización falla.
4. Evalúa $f$ en todos los candidatos.
5. Compara los valores.

La comparación final es imprescindible. La hessiana no identifica por sí sola el máximo absoluto sobre una región limitada.

## Ejemplo 4: región triangular

Busquemos los extremos absolutos de

$$
f(x,y)=xy
$$

en el triángulo

$$
D=\\{(x,y):x\\ge0,\\ y\\ge0,\\ x+y\\le4\\}.
$$

En el interior, $\\nabla f=(y,x)$ solo se anula en $(0,0)$, que está en la frontera, así que no hay candidatos interiores.

Analizamos los tres lados:

- Si $x=0$, entonces $f=0$.
- Si $y=0$, entonces $f=0$.
- Si $x+y=4$, escribimos $y=4-x$, con $0\\le x\\le4$.

En el tercer lado,

$$
g(x)=x(4-x)=4x-x^2.
$$

Como $g'(x)=4-2x$, el candidato es $x=2$, luego $y=2$ y $f(2,2)=4$. En los vértices $(0,0)$, $(4,0)$ y $(0,4)$, el valor es cero.

Por comparación, el máximo absoluto es $4$ en $(2,2)$ y el mínimo absoluto es $0$, alcanzado en los dos lados apoyados sobre los ejes.

## Multiplicadores de Lagrange

Para optimizar $f(x,y)$ bajo una restricción suave

$$
g(x,y)=c,
$$

los extremos regulares satisfacen

$$
\\nabla f=\\lambda\\nabla g,
\\qquad
g(x,y)=c.
$$

Geométricamente, en un extremo restringido la curva de nivel de $f$ es tangente a la restricción. Sus vectores normales son paralelos, de ahí el multiplicador $\\lambda$.

El sistema completo es

$$
\\begin{cases}
f_x=\\lambda g_x,\\\\
f_y=\\lambda g_y,\\\\
g(x,y)=c.
\\end{cases}
$$

Debe revisarse aparte cualquier punto de la restricción donde $\\nabla g=0$, porque la condición regular deja de ser aplicable.

## Ejemplo 5: producto máximo en una circunferencia

Queremos hallar los extremos de

$$
f(x,y)=xy
$$

sujetos a $x^2+y^2=1$. Tomamos $g=x^2+y^2$:

$$
(y,x)=\\lambda(2x,2y).
$$

El sistema es

$$
y=2\\lambda x,
\\qquad
x=2\\lambda y,
\\qquad
x^2+y^2=1.
$$

Ni $x$ ni $y$ pueden ser cero, porque las dos primeras ecuaciones obligarían a que ambos lo fueran, contradiciendo la restricción. Multiplicando las relaciones o sustituyendo se obtiene $4\\lambda^2=1$, así que $y=\\pm x$.

Si $y=x$, entonces $2x^2=1$ y aparecen

$$
\\left(\\frac1{\\sqrt2},\\frac1{\\sqrt2}\\right),
\\quad
\\left(-\\frac1{\\sqrt2},-\\frac1{\\sqrt2}\\right),
$$

con valor $1/2$. Si $y=-x$, aparecen los otros dos puntos diagonales, con valor $-1/2$.

Como la circunferencia es compacta y $f$ es continua, la comparación demuestra que el máximo absoluto es $1/2$ y el mínimo absoluto es $-1/2$.

## Ejemplo 6: distancia mínima con una restricción

Hallemos el punto de la recta

$$
x+2y=6
$$

más cercano al origen. Minimizar la distancia $\\sqrt{x^2+y^2}$ equivale a minimizar

$$
f(x,y)=x^2+y^2,
$$

porque la raíz cuadrada es creciente. Con $g=x+2y$:

$$
(2x,2y)=\\lambda(1,2).
$$

Así,

$$
2x=\\lambda,
\\qquad
2y=2\\lambda,
$$

de donde $x=\\lambda/2$ e $y=\\lambda$. La restricción da

$$
\\frac\\lambda2+2\\lambda=6,
$$

luego $\\lambda=12/5$. El punto es

$$
\\left(\\frac65,\\frac{12}5\\right).
$$

La distancia mínima vale

$$
\\sqrt{\\frac{36}{25}+\\frac{144}{25}}
=\\frac6{\\sqrt5}.
$$

El vector que une el origen con el punto es paralelo a $(1,2)$, normal a la recta, lo que confirma la solución geométricamente.

## Ejemplo 7: dominio no acotado

Sea

$$
f(x,y)=x^2+y^2-2x
$$

en todo $\\mathbb R^2$. El único punto crítico satisface

$$
2x-2=0,\\qquad 2y=0,
$$

por lo que es $(1,0)$. La hessiana es $2I$, positiva definida, y el punto es un mínimo local. Además,

$$
f(x,y)=(x-1)^2+y^2-1\\ge-1,
$$

así que es mínimo absoluto.

No hay máximo: tomando $(x,y)=(t,0)$, $f(t,0)=t^2-2t\\to+\\infty$. En dominios no compactos hay que estudiar estos comportamientos; Weierstrass ya no garantiza extremos absolutos.

## Hessiana, autovalores y forma cuadrática

El criterio del determinante es la versión bidimensional de una idea más general. Cerca de un punto crítico, el término cuadrático de Taylor es

$$
\\frac12\\mathbf h^{\\mathsf T}H_f(a,b)\\mathbf h.
$$

Si la hessiana es positiva definida, ese término es positivo en toda dirección no nula y aparece un mínimo. Si es negativa definida, aparece un máximo. Si es indefinida, hay direcciones con signos opuestos y el punto es de silla.

En dimensiones mayores suele clasificarse mediante autovalores o menores principales:

- todos los autovalores positivos: mínimo local;
- todos negativos: máximo local;
- signos mezclados: punto de silla;
- algún autovalor cero: el criterio puede ser inconcluso.

Esta interpretación conecta la optimización con el álgebra lineal sin convertir el cálculo en una tabla memorizada.

## Restricciones por desigualdades

Una condición como $g(x,y)\\le c$ no se trata imponiendo Lagrange en todos los puntos. El interior de la región se estudia con $\\nabla f=0$; la igualdad $g=c$ describe solo la frontera y se analiza después. En un disco $x^2+y^2\\le1$, por ejemplo, debes combinar los candidatos interiores con los obtenidos sobre la circunferencia.

Si hay varias desigualdades, la frontera puede tener tramos distintos y vértices donde se activan dos restricciones. En cursos avanzados esta situación se formaliza con las condiciones de Karush-Kuhn-Tucker. En un primer curso suele ser más claro separar geométricamente interior, lados y vértices, como hicimos en el triángulo.

Antes de calcular, comprueba además si el conjunto es compacto. Una restricción cerrada como $x^2+y^2=1$ es compacta; la recta $x+y=1$ no está acotada. En la primera se alcanzan máximo y mínimo para toda función continua, mientras que en la segunda puede existir solo uno o ninguno.

La existencia debe decidirse antes de interpretar candidatos. Un valor límite que no se alcanza puede ser supremo o ínfimo sin constituir un máximo o mínimo.

## Errores frecuentes

### Clasificar sin resolver todo el sistema

Las ecuaciones $f_x=0$ y $f_y=0$ deben cumplirse simultáneamente. Resolverlas por separado y combinar valores arbitrariamente crea puntos que no son críticos.

### Olvidar la frontera

En una región cerrada, un extremo absoluto aparece con frecuencia en un lado o un vértice. El gradiente interior no puede detectarlo.

### Interpretar $D=0$ como ausencia de extremo

El criterio simplemente no decide. Debes estudiar el signo, caminos o términos de orden superior.

### Aplicar Lagrange sin la restricción

Las ecuaciones de paralelismo generan candidatos, pero todos deben satisfacer $g=c$. También hay que comprobar puntos no regulares y comparar valores.

### Optimizar una expresión más difícil de lo necesario

Para distancias suele minimizarse el cuadrado; para productos positivos a veces ayuda el logaritmo. La transformación debe preservar el orden de los valores en el dominio.

## Ejercicios propuestos

1. Clasifica los puntos críticos de $f=x^2+xy+y^2$.
2. Clasifica el origen para $f=x^3-3xy^2$.
3. Estudia el origen para $f=x^4+2x^2y^2+y^4$.
4. Halla los extremos absolutos de $f=x+y$ en $x^2+y^2\\le1$.
5. Halla los extremos de $f=x^2+y^2$ sujetos a $x+y=1$.
6. Maximiza $xyz$ para $x,y,z>0$ y $x+y+z=12$.
7. Halla el punto de $x^2+y^2=4$ más cercano a $(3,0)$.
8. Busca los extremos absolutos de $f=x^2-y$ en $0\\le x\\le2$, $0\\le y\\le1$.
9. Decide si $f=e^{x^2+y^2}$ tiene máximo o mínimo en $\\mathbb R^2$.
10. Explica por qué $f=x^2+y^2$ no tiene máximo en el disco abierto $x^2+y^2<1$.

## Soluciones

### Ejercicio 1

El gradiente es

$$
\\nabla f=(2x+y,x+2y),
$$

y solo se anula en el origen. Allí

$$
D=4-1=3>0,
\\qquad
f_{xx}=2>0,
$$

así que hay un mínimo. Además,

$$
x^2+xy+y^2=\\left(x+\\frac y2\\right)^2+\\frac{3y^2}{4}\\ge0,
$$

por lo que el mínimo es absoluto.

### Ejercicio 2

El origen es el único punto crítico y $D=0$. En coordenadas polares,

$$
f(r\\cos\\theta,r\\sin\\theta)=r^3\\cos(3\\theta),
$$

que toma ambos signos arbitrariamente cerca del origen. Es un punto de silla.

### Ejercicio 3

La función es $(x^2+y^2)^2\\ge0$. Aunque $D=0$ en el origen, allí se alcanza un mínimo absoluto de valor cero.

### Ejercicio 4

No hay puntos críticos interiores. En la circunferencia, Lagrange da $(1,1)=2\\lambda(x,y)$, luego $x=y=\\pm1/\\sqrt2$ con el mismo signo. El máximo es $\\sqrt2$ en $(1/\\sqrt2,1/\\sqrt2)$ y el mínimo $-\\sqrt2$ en el opuesto.

### Ejercicio 5

Lagrange da $(2x,2y)=\\lambda(1,1)$, así que $x=y$. Con $x+y=1$, resulta $(1/2,1/2)$ y el mínimo es $1/2$. Sobre la recta no hay máximo porque $x^2+(1-x)^2\\to+\\infty$ cuando $|x|\\to\\infty$.

### Ejercicio 6

Las ecuaciones $yz=\\lambda$, $xz=\\lambda$ y $xy=\\lambda$ implican $x=y=z$ al ser positivas. La restricción da $x=y=z=4$ y el producto máximo es $64$. La positividad y la desigualdad AM-GM confirman que es máximo global.

### Ejercicio 7

La distancia cuadrada es $(x-3)^2+y^2$. Sobre la circunferencia se simplifica a $13-6x$, así que se minimiza maximizando $x$. El punto es $(2,0)$ y la distancia mínima vale $1$.

### Ejercicio 8

No hay puntos críticos interiores porque $f_y=-1$. En el rectángulo, $x^2$ varía entre $0$ y $4$, y $-y$ entre $-1$ y $0$. El mínimo es $-1$ en $(0,1)$ y el máximo es $4$ en $(2,0)$.

### Ejercicio 9

El gradiente $2e^{x^2+y^2}(x,y)$ se anula solo en el origen. Allí hay un mínimo absoluto de valor $1$, porque $x^2+y^2\\ge0$. No existe máximo: la función tiende a infinito cuando aumenta la distancia al origen.

### Ejercicio 10

Todos los valores cumplen $f<1$, pero pueden acercarse tanto como se quiera a $1$ al aproximarse a la circunferencia. El supremo es $1$, pero no se alcanza porque la frontera no pertenece al dominio. Por tanto, no hay máximo absoluto.

## Resumen operativo

Primero separa el problema interior del problema de frontera. En el interior, resuelve $\\nabla f=0$ y clasifica con la hessiana; si el determinante es cero, cambia de argumento. En una región compacta, analiza cada frontera y compara todos los candidatos. Con una restricción regular, Lagrange expresa el paralelismo de los gradientes, pero no evita la comprobación final.

Conviene dominar antes las [derivadas parciales y el gradiente](/blog/derivadas-parciales-gradiente-ejercicios/). Si necesitas practicar clasificaciones y restricciones con los ejercicios de tu asignatura, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
`,ke=`---
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
`,Qe=`---
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
`,Ge=`---
title: "MRU en ESO: movimiento rectilíneo uniforme con fórmulas y ejercicios"
date: "2026-08-12"
updated: "2026-08-12"
description: "Aprende MRU en ESO: posición, velocidad, tiempo y gráficas con un método claro, unidades y ejercicios resueltos."
tag: "ESO"
category: "Física y Química"
relatedService: "/clases-particulares/fisica-ingenieria/"
relatedPosts: "mrua-eso-movimiento-rectilineo-uniformemente-acelerado-ejercicios,gravitacion-eso-ley-universal-peso-ejercicios,fisica-y-quimica-como-plantear-problemas"
image: "/assets/latex/mru-posicion-tiempo-eso.svg"
---

El **movimiento rectilíneo uniforme** (MRU) describe un objeto que se mueve en línea recta con velocidad constante. No acelera, no frena y no cambia de dirección. Es un modelo sencillo, pero sirve para aprender a traducir un enunciado a magnitudes, ecuaciones, unidades y gráficas.

En la realidad, un coche rara vez mantiene exactamente la misma velocidad durante mucho tiempo. Aun así, el MRU aproxima bien tramos cortos de una cinta transportadora, un ascensor en su parte central o un ciclista que avanza a ritmo constante.

## Cómo reconocer un MRU

Busca estas pistas en el enunciado:

- se mueve «a velocidad constante»;
- recorre distancias iguales en tiempos iguales;
- no acelera ni frena;
- la trayectoria es recta.

La idea clave es esta:

$$
a=0.
$$

Que la aceleración sea cero no significa que el objeto esté parado. Puede avanzar rápido; simplemente su velocidad no cambia.

## Magnitudes y unidades

En un problema de MRU aparecen normalmente tres magnitudes:

| Magnitud | Símbolo | Unidad del SI |
|---|---|---|
| Posición | $x$ | metro (m) |
| Tiempo | $t$ | segundo (s) |
| Velocidad | $v$ | metro por segundo (m/s) |

La velocidad indica cuánto cambia la posición en cada segundo:

$$
v=\\frac{\\Delta x}{\\Delta t}.
$$

Si un objeto avanza $30$ metros en $5$ segundos, su velocidad es:

$$
v=\\frac{30}{5}=6\\ \\text{m/s}.
$$

Es importante incluir la unidad. Escribir solo «6» no permite saber si hablas de metros por segundo, kilómetros por hora o una distancia.

## La ecuación de posición

En MRU, la posición se calcula con:

$$
x=x_0+v\\,t.
$$

Aquí:

- $x_0$ es la posición inicial;
- $v$ es la velocidad, con signo según el sentido elegido;
- $t$ es el tiempo transcurrido;
- $x$ es la posición final.

No confundas posición inicial con distancia recorrida. Si una persona empieza a $20$ m de un poste y recorre $40$ m en el sentido positivo, termina en la posición $60$ m.

## Ejemplo resuelto: un ciclista que ya está en marcha

Un ciclista se encuentra inicialmente a $20$ m de una referencia y avanza a $4$ m/s. ¿Dónde estará a los $10$ s?

Los datos son:

$$
x_0=20\\ \\text{m},\\qquad v=4\\ \\text{m/s},\\qquad t=10\\ \\text{s}.
$$

Aplicamos la ecuación:

$$
x=20+4\\cdot10=60\\ \\text{m}.
$$

El ciclista está en la posición $60$ m. Su **desplazamiento** ha sido $40$ m, pero su posición final es $60$ m porque no partía del origen.

![Gráfica posición-tiempo de un ciclista en MRU que parte de veinte metros y avanza cuatro metros por segundo](/assets/latex/mru-posicion-tiempo-eso.svg)

La recta no pasa por el origen porque $x_0=20$ m. Su pendiente es positiva: la posición aumenta con el tiempo. Entre $0$ y $5$ s sube de $20$ a $40$ m; por eso la velocidad es $20/5=4$ m/s.

## Cómo interpretar una gráfica posición-tiempo

En una gráfica $x-t$:

- una recta ascendente representa velocidad positiva;
- una recta descendente representa velocidad negativa, es decir, movimiento en el sentido contrario;
- una recta horizontal representa reposo;
- una recta más inclinada significa mayor rapidez en valor absoluto.

La pendiente se calcula así:

$$
v=\\frac{x_2-x_1}{t_2-t_1}.
$$

No confundas una gráfica posición-tiempo con una gráfica velocidad-tiempo. En una gráfica $x-t$, la altura muestra posición y la inclinación muestra velocidad. En una gráfica $v-t$, la altura sí representa velocidad.

## Convertir km/h y m/s

Muchos ejercicios mezclan kilómetros por hora y metros por segundo. Antes de sustituir, deja todas las unidades en un mismo sistema.

Para pasar de km/h a m/s, divide entre $3{,}6$:

$$
72\\ \\text{km/h}=\\frac{72}{3{,}6}=20\\ \\text{m/s}.
$$

Para pasar de m/s a km/h, multiplica por $3{,}6$:

$$
5\\ \\text{m/s}=5\\cdot3{,}6=18\\ \\text{km/h}.
$$

Una forma de comprobarlo: $20$ m/s es una velocidad considerable para correr, pero razonable para un vehículo; $20$ km/h no equivale a $20$ m/s.

## Encuentros: dos móviles en una recta

Dos móviles se encuentran cuando tienen la misma posición en el mismo instante. Supón que A sale del origen a $3$ m/s y B está inicialmente a $30$ m y se mueve hacia A a $2$ m/s.

Si tomamos hacia la derecha como sentido positivo:

$$
x_A=3t
$$

$$
x_B=30-2t.
$$

En el encuentro, $x_A=x_B$:

$$
3t=30-2t.
$$

$$
5t=30\\Rightarrow t=6\\ \\text{s}.
$$

La posición del encuentro es:

$$
x_A=3\\cdot6=18\\ \\text{m}.
$$

Los signos no son adornos: el $-2t$ indica que B se mueve hacia posiciones menores.

## Método seguro para resolver MRU

1. Dibuja una recta y elige el sentido positivo.
2. Escribe $x_0$, $v$ y $t$ con unidades.
3. Convierte unidades antes de calcular.
4. Elige $x=x_0+vt$ o $v=\\Delta x/\\Delta t$ según lo que se pida.
5. Revisa si el signo y el tamaño del resultado tienen sentido.

Por ejemplo, si un objeto se mueve hacia la izquierda y has elegido la derecha como positiva, una posición que disminuye es coherente. Un tiempo negativo en un problema que pregunta qué ocurrirá después de salir suele indicar que has planteado mal el origen temporal o los signos.

## Errores frecuentes

### Usar $x=vt$ cuando $x_0$ no es cero

La fórmula $x=vt$ solo es un caso particular en el que se parte del origen. En general necesitas $x=x_0+vt$.

### Confundir distancia y posición

La distancia recorrida es cuánto se ha desplazado el objeto; la posición dice dónde está respecto a una referencia. Pueden tener el mismo valor solo si se parte del origen y se avanza en el sentido positivo.

### Mezclar km/h con segundos

Si $v$ está en km/h y el tiempo en segundos, el producto no sale en metros. Convierte antes.

### Pensar que una velocidad constante implica posición constante

Con velocidad constante distinta de cero, la posición cambia de manera regular. Lo constante es el incremento por segundo, no la posición.

## Ejercicios resueltos

### 1. Posición final

Una persona empieza en $x_0=-10$ m y camina a $1{,}5$ m/s hacia el sentido positivo durante $8$ s. Calcula su posición.

$$
x=-10+1{,}5\\cdot8=2\\ \\text{m}.
$$

Termina en la posición $2$ m. Ha recorrido $12$ m, pero empezó diez metros a la izquierda del origen.

### 2. Tiempo necesario

Un robot se mueve a $0{,}8$ m/s y debe recorrer $24$ m. ¿Cuánto tarda?

$$
t=\\frac{\\Delta x}{v}=\\frac{24}{0{,}8}=30\\ \\text{s}.
$$

### 3. Conversión de unidades

Un tren viaja a $90$ km/h durante $20$ s. ¿Qué distancia recorre?

Primero:

$$
90\\ \\text{km/h}=\\frac{90}{3{,}6}=25\\ \\text{m/s}.
$$

Después:

$$
d=vt=25\\cdot20=500\\ \\text{m}.
$$

## Resumen para estudiar

En MRU la trayectoria es recta y la velocidad es constante, así que $a=0$. Usa $x=x_0+vt$, elige un sentido positivo y no mezcles unidades. En la gráfica posición-tiempo, la pendiente es la velocidad.

Cuando la velocidad deja de ser constante, el modelo correcto pasa a ser el [MRUA: movimiento rectilíneo uniformemente acelerado](/blog/mrua-eso-movimiento-rectilineo-uniformemente-acelerado-ejercicios/). Para reforzar el método general de planteamiento, consulta también [cómo resolver problemas de Física y Química](/blog/fisica-y-quimica-como-plantear-problemas/).

Si necesitas practicar con ejercicios de tu curso, puedes consultar las [clases particulares de Física](/clases-particulares/fisica-ingenieria/).
`,Ve=`---
title: "MRUA en ESO: movimiento rectilíneo acelerado con fórmulas y ejercicios"
date: "2026-08-19"
updated: "2026-08-19"
description: "Aprende MRUA en ESO: aceleración, velocidad, posición y gráficas con ejemplos resueltos y control de unidades."
tag: "ESO"
category: "Física y Química"
relatedService: "/clases-particulares/fisica-ingenieria/"
relatedPosts: "mru-eso-movimiento-rectilineo-uniforme-ejercicios,gravitacion-eso-ley-universal-peso-ejercicios,fisica-y-quimica-como-plantear-problemas"
image: "/assets/latex/mrua-velocidad-tiempo-eso.svg"
---

El **movimiento rectilíneo uniformemente acelerado** (MRUA) ocurre cuando un objeto se mueve en línea recta y su velocidad cambia siempre al mismo ritmo. Puede ganar velocidad —acelerar— o perderla —frenar—. Lo que se mantiene constante es la aceleración, no la velocidad.

El MRUA aparece en un coche que arranca de forma regular, en una bicicleta que frena suavemente o en una caída libre si despreciamos el rozamiento del aire. Es la continuación natural del [MRU](/blog/mru-eso-movimiento-rectilineo-uniforme-ejercicios/): en MRU $a=0$; en MRUA la aceleración es constante y distinta de cero.

## Magnitudes que hay que distinguir

| Magnitud | Símbolo | Unidad del SI | Qué indica |
|---|---|---|---|
| Posición | $x$ | m | Dónde está el móvil |
| Velocidad inicial | $v_0$ | m/s | Velocidad al empezar |
| Velocidad final | $v$ | m/s | Velocidad en un instante |
| Aceleración | $a$ | m/s² | Cambio de velocidad por segundo |
| Tiempo | $t$ | s | Tiempo transcurrido |

Decir que $a=2$ m/s² significa que la velocidad aumenta $2$ m/s cada segundo. No significa que recorra dos metros por segundo al cuadrado: la unidad describe un cambio de velocidad.

## La primera ecuación: velocidad y tiempo

Cuando la aceleración es constante:

$$
v=v_0+at.
$$

Un patinete parte con $v_0=3$ m/s y acelera a $1{,}5$ m/s² durante $4$ s. Entonces:

$$
v=3+1{,}5\\cdot4=9\\ \\text{m/s}.
$$

Cada segundo aumenta $1{,}5$ m/s: $3$, $4{,}5$, $6$, $7{,}5$, $9$. La velocidad no es constante, pero su incremento por segundo sí lo es.

## La ecuación de posición

Para saber dónde está el móvil usamos:

$$
x=x_0+v_0t+\\frac12at^2.
$$

El término con $t^2$ aparece porque la velocidad va cambiando. No lo uses en MRU, donde $a=0$ y queda simplemente $x=x_0+vt$.

Si un móvil parte del origen y del reposo, $x_0=0$ y $v_0=0$. La ecuación se simplifica:

$$
x=\\frac12at^2.
$$

## Ejemplo completo: un carro que arranca

Un carro parte del reposo y acelera a $2$ m/s² durante $4$ s. Calcula su velocidad final y el espacio recorrido.

Datos:

$$
v_0=0,\\qquad a=2\\ \\text{m/s}^2,\\qquad t=4\\ \\text{s}.
$$

Velocidad final:

$$
v=0+2\\cdot4=8\\ \\text{m/s}.
$$

Posición recorrida:

$$
x=0+0\\cdot4+\\frac12\\cdot2\\cdot4^2=16\\ \\text{m}.
$$

El carro alcanza $8$ m/s y recorre $16$ m. No uses $d=vt=8\\cdot4=32$ m: esa cuenta supondría que se ha movido a $8$ m/s durante los cuatro segundos, pero empezó parado.

![Gráfica velocidad-tiempo de un MRUA que parte del reposo, alcanza ocho metros por segundo en cuatro segundos y recorre dieciséis metros](/assets/latex/mrua-velocidad-tiempo-eso.svg)

En la gráfica $v-t$, la pendiente es la aceleración:

$$
a=\\frac{\\Delta v}{\\Delta t}=\\frac{8-0}{4-0}=2\\ \\text{m/s}^2.
$$

Además, el área bajo la gráfica representa el desplazamiento. En este caso es un triángulo:

$$
\\text{área}=\\frac12\\cdot4\\cdot8=16\\ \\text{m}.
$$

Las dos formas dan la misma distancia porque describen el mismo movimiento.

## Aceleración positiva, negativa y frenada

El signo depende del eje que elijas. Si tomas como positivo el sentido del movimiento inicial:

- $a>0$: la velocidad se hace más positiva; el móvil gana rapidez en ese sentido.
- $a<0$: la velocidad disminuye; puede estar frenando.

Un coche va a $20$ m/s y frena con $a=-4$ m/s². ¿Cuánto tarda en detenerse?

Al parar, $v=0$:

$$
0=20-4t.
$$

$$
t=5\\ \\text{s}.
$$

El signo negativo no es un resultado malo: indica que la aceleración apunta en sentido contrario a la velocidad inicial.

## Caída libre: un MRUA vertical

En ESO suele aproximarse la caída libre como MRUA con aceleración gravitatoria:

$$
g\\approx9{,}8\\ \\text{m/s}^2.
$$

Si elegimos hacia abajo como sentido positivo y dejamos caer un objeto, $v_0=0$ y $a=g$. Tras $2$ s:

$$
v=gt=9{,}8\\cdot2=19{,}6\\ \\text{m/s}.
$$

Si elegimos hacia arriba como sentido positivo, entonces $a=-g$. Ambas elecciones son correctas si mantienes los signos de forma coherente. La gravedad se estudia con más detalle en la guía de [gravitación en ESO](/blog/gravitacion-eso-ley-universal-peso-ejercicios/).

## Cómo distinguir las gráficas

| Gráfica | Qué representa su pendiente | Qué representa el área |
|---|---|---|
| Posición-tiempo ($x-t$) | Velocidad | No se suele interpretar como distancia en ESO |
| Velocidad-tiempo ($v-t$) | Aceleración | Desplazamiento |
| Aceleración-tiempo ($a-t$) | No es una magnitud básica en este nivel | Cambio de velocidad |

Una recta inclinada en una gráfica velocidad-tiempo significa aceleración constante. Una recta horizontal en esa misma gráfica significaría velocidad constante, es decir, MRU.

## Método seguro para problemas de MRUA

1. Decide el sentido positivo y dibuja un eje sencillo.
2. Escribe $x_0$, $v_0$, $v$, $a$ y $t$, con unidades.
3. Identifica qué magnitud buscas.
4. Elige una ecuación que incluya la incógnita y los datos conocidos.
5. Sustituye unidades coherentes: metros, segundos y m/s.
6. Comprueba que el signo final cuenta una historia física razonable.

No hace falta usar todas las fórmulas. Elegir bien la ecuación forma parte del problema.

## Errores frecuentes

### Confundir velocidad con aceleración

La velocidad dice cuánto cambia la posición por segundo; la aceleración, cuánto cambia la velocidad por segundo. Sus unidades son distintas.

### Usar $d=vt$ con la velocidad final

En MRUA, $v$ cambia. Solo podrías usar $d=v_{\\text{media}}t$ si calculas antes la velocidad media. Cuando la aceleración es constante:

$$
v_{\\text{media}}=\\frac{v_0+v}{2}.
$$

En el carro, $v_{\\text{media}}=(0+8)/2=4$ m/s, y $4\\cdot4=16$ m.

### Olvidar elevar el tiempo al cuadrado

En $\\frac12at^2$, primero se eleva $t$ al cuadrado. Para $t=4$, $t^2=16$, no $8$.

### Tratar una frenada como aceleración positiva

Si el móvil se dirige en el sentido positivo y disminuye su velocidad, la aceleración debe tener signo negativo.

## Ejercicios resueltos

### 1. Velocidad después de acelerar

Una moto lleva $5$ m/s y acelera a $3$ m/s² durante $2$ s.

$$
v=5+3\\cdot2=11\\ \\text{m/s}.
$$

### 2. Posición con velocidad inicial

Una pelota se mueve desde $x_0=2$ m con $v_0=4$ m/s y acelera a $1$ m/s² durante $3$ s.

$$
x=2+4\\cdot3+\\frac12\\cdot1\\cdot3^2=18{,}5\\ \\text{m}.
$$

### 3. Frenada

Un patinador va a $12$ m/s y tiene aceleración $-2$ m/s². Calcula su velocidad a los $4$ s.

$$
v=12-2\\cdot4=4\\ \\text{m/s}.
$$

Sigue avanzando en el sentido inicial, pero más despacio.

## Resumen para estudiar

En MRUA la trayectoria es recta y la aceleración es constante. Usa $v=v_0+at$ para velocidades y $x=x_0+v_0t+\\frac12at^2$ para posiciones. En una gráfica $v-t$, la pendiente es la aceleración y el área es el desplazamiento.

Para consolidar la base, repasa el [MRU con ejercicios](/blog/mru-eso-movimiento-rectilineo-uniforme-ejercicios/) y el método de [plantear problemas de Física y Química](/blog/fisica-y-quimica-como-plantear-problemas/). Si necesitas practicar con tu temario, puedes consultar las [clases particulares de Física](/clases-particulares/fisica-ingenieria/).
`,We=`---
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
`,Je=`---
title: "Inferencia estadística en Matemáticas CCSS PAU: intervalos de confianza y tamaño muestral con sentido"
seoTitle: "Inferencia estadística PAU: intervalos y tamaño muestral"
date: "2026-10-02"
updated: "2026-10-02"
description: "Resuelve inferencia estadística en Matemáticas CCSS PAU: intervalos de confianza, error, nivel de confianza y tamaño muestral."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "pau-matematicas-probabilidad-distribuciones,p-valor-intervalo-confianza-tamano-efecto-ejemplo,como-preparar-pau-matematicas-ii"
image: "/assets/latex/confidence-interval.svg"
---

Un intervalo de confianza no afirma que “la media está dentro con probabilidad 95 %” después de calcularlo. El parámetro es fijo; el procedimiento aleatorio es el intervalo construido a partir de la muestra.

> **Respuesta directa.** Un intervalo combina estimación puntual y margen de error. Aumentar confianza ensancha el intervalo; aumentar tamaño muestral lo estrecha. La interpretación debe mencionar el parámetro poblacional y el nivel de confianza.

![Distribución muestral y margen de un intervalo de confianza](/assets/latex/confidence-interval.svg)

## Intervalo para una media

Con desviación poblacional conocida:

$$
\\bar x\\pm z_{\\alpha/2}\\frac{\\sigma}{\\sqrt n}.
$$

El error máximo es:

$$
E=z_{\\alpha/2}\\frac{\\sigma}{\\sqrt n}.
$$

Para 95 % de confianza, $z_{\\alpha/2}\\approx1.96$.

## Ejemplo resuelto

Una muestra de $n=100$ tiene media $\\bar x=52$ y $\\sigma=10$. El intervalo al 95 % es:

$$
52\\pm1.96\\frac{10}{\\sqrt{100}}
=52\\pm1.96.
$$

Por tanto:

$$
(50.04,\\ 53.96).
$$

Interpretación: con el procedimiento utilizado, estimamos la media poblacional mediante un intervalo de confianza del 95 % entre 50.04 y 53.96.

## Tamaño muestral

Si se exige error máximo $E$:

$$
n\\geq\\left(\\frac{z_{\\alpha/2}\\sigma}{E}\\right)^2.
$$

El resultado se redondea siempre hacia arriba, porque una muestra menor no garantiza el error solicitado.

### Ejemplo de diseño muestral

Si $\\sigma=12$, se desea confianza del 95 % y error máximo 2:

$$
n\\geq\\left(\\frac{1.96(12)}{2}\\right)^2
=138.30.
$$

Se necesitan al menos 139 observaciones. Redondear a 138 produciría un error ligeramente superior al exigido. Si se quisiera reducir el error a 1 manteniendo todo lo demás, el tamaño se multiplicaría aproximadamente por cuatro.

## Condiciones y representatividad

Las fórmulas no corrigen una muestra sesgada. La selección debe ser aleatoria o razonablemente representativa y las observaciones deben poder tratarse como independientes. Para usar la aproximación normal en una proporción, se comprueba que los recuentos esperados de éxitos y fracasos sean suficientemente grandes según el criterio del temario.

Un intervalo estrecho obtenido de una encuesta voluntaria puede ser preciso respecto a esa muestra y, sin embargo, no describir bien la población. Precisión y ausencia de sesgo son propiedades distintas.

## Comparar dos intervalos con rigor

Si dos intervalos se han construido con el mismo método, uno más estrecho indica menor error estándar. Puede deberse a una muestra mayor o a menor variabilidad. Sin conocer ambas condiciones, no se debe atribuir la diferencia solo a $n$.

Que un valor hipotético quede fuera del intervalo sugiere incompatibilidad con los datos al nivel asociado, pero no mide por sí solo la importancia práctica de la diferencia. En PAU, la conclusión debe responder a la pregunta contextual y conservar las unidades.

También conviene distinguir confianza de probabilidad individual: el intervalo estima una media o proporción poblacional, no el rango donde caerá el 95 % de las observaciones.

## Qué ensancha o estrecha

- Mayor confianza $\\Rightarrow$ mayor $z$ $\\Rightarrow$ intervalo más ancho.
- Mayor variabilidad $\\Rightarrow$ intervalo más ancho.
- Mayor $n$ $\\Rightarrow$ menor error, con dependencia $1/\\sqrt n$.

Cuadruplicar la muestra divide aproximadamente el error entre dos.

## Proporciones

Para una proporción muestral $\\hat p$:

$$
\\hat p\\pm z_{\\alpha/2}
\\sqrt{\\frac{\\hat p(1-\\hat p)}{n}}.
$$

Comprueba las condiciones del modelo y expresa el resultado como proporción o porcentaje de forma consistente.

## Método PAU

1. Identifica parámetro: media o proporción.
2. Extrae $n$, estimador, dispersión y confianza.
3. Calcula el valor crítico.
4. Halla error e intervalo.
5. Interpreta en contexto.
6. Si piden $n$, despeja y redondea hacia arriba.

## Errores frecuentes

- Usar $1.96$ para cualquier nivel de confianza.
- Dividir por $n$ en lugar de $\\sqrt n$.
- Redondear el tamaño muestral hacia abajo.
- Interpretar el intervalo como rango de datos individuales.
- Omitir unidades o contexto.

El campus de Método Nebula reúne probabilidad, distribuciones, muestreo e inferencia con modelos PAU resueltos. Contacta para integrar fórmulas e interpretación en un plan de examen.
`,Ke=`---
title: "Matrices en Matemáticas CCSS PAU: producción, costes y sistemas con interpretación económica"
seoTitle: "Matrices CCSS PAU: producción, costes y sistemas"
date: "2026-09-08"
updated: "2026-09-08"
description: "Resuelve matrices en Matemáticas CCSS PAU: productos, sistemas, inversa, modelos de producción, costes e interpretación de resultados."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "pau-matematicas-matrices-determinantes-gauss,pau-ccss-programacion-lineal-problemas,pau-ccss-inferencia-intervalos-confianza"
image: "/assets/latex/matrix-model.svg"
---

En Matemáticas CCSS, una matriz no es una tabla que se multiplica mecánicamente. Sus filas y columnas representan categorías concretas: productos, recursos, períodos o precios. Si se pierde ese significado, es fácil obtener una operación definida pero interpretar mal el resultado.

> **Respuesta directa.** Escribe qué representa cada dimensión antes de operar. El producto $AB$ combina filas de $A$ con columnas de $B$ y solo existe si coinciden las dimensiones interiores. Para resolver $A\\vec x=\\vec b$, utiliza Gauss o $A^{-1}$ cuando exista, y traduce la solución al contexto.

![Transformación de un vector de decisiones mediante una matriz](/assets/latex/matrix-model.svg)

## Dimensiones con significado

Una empresa fabrica dos productos usando tres recursos. La matriz de consumos puede ser:

$$
C=
\\begin{pmatrix}
2&1\\\\
3&4\\\\
1&2
\\end{pmatrix},
$$

donde las filas son recursos y las columnas productos. Si:

$$
\\vec x=\\binom{x_1}{x_2},
$$

entonces $C\\vec x$ es un vector de tres componentes con el consumo total de cada recurso. El resultado no puede interpretarse como número de productos, porque sus filas conservan el significado de recursos.

## Producto de matrices

Si $A$ es $m\\times n$ y $B$ es $n\\times p$, entonces $AB$ es $m\\times p$. El elemento $(i,j)$ se obtiene:

$$
(AB)_{ij}=\\sum_{k=1}^{n}a_{ik}b_{kj}.
$$

En general, $AB\\neq BA$ y uno de los dos productos puede no existir. Comprobar dimensiones antes de multiplicar evita desarrollar una operación imposible.

## Coste total y varios escenarios

Si el vector de precios por recurso es:

$$
\\vec p=
\\begin{pmatrix}5&2&4\\end{pmatrix},
$$

el coste unitario de cada producto es $\\vec pC$:

$$
\\vec pC=
\\begin{pmatrix}
5&2&4
\\end{pmatrix}
\\begin{pmatrix}
2&1\\\\3&4\\\\1&2
\\end{pmatrix}
=
\\begin{pmatrix}20&21\\end{pmatrix}.
$$

Multiplicar después por $\\vec x$ produce el coste total. La asociación $(\\vec pC)\\vec x=\\vec p(C\\vec x)$ permite calcular primero costes unitarios o consumos totales según convenga.

## Sistemas matriciales

Un sistema lineal puede escribirse:

$$
A\\vec x=\\vec b.
$$

Si $A$ es cuadrada y $\\det A\\neq0$:

$$
\\vec x=A^{-1}\\vec b.
$$

Sin embargo, Gauss suele mostrar mejor si el sistema es compatible determinado, compatible indeterminado o incompatible. En contexto, una solución negativa puede ser algebraicamente válida y económicamente imposible; hay que indicarlo.

## Ejemplo de reparto

Se venden dos entradas, normal y reducida. En total hay 300 entradas y la recaudación a precios 12 € y 8 € es 3200 €:

$$
\\begin{pmatrix}
1&1\\\\12&8
\\end{pmatrix}
\\binom{x}{y}
=
\\binom{300}{3200}.
$$

De $x+y=300$ y $12x+8y=3200$ se obtiene $x=200$, $y=100$. La comprobación sustituye en ambas condiciones y recupera total y recaudación.

## Potencias y transiciones

Una matriz de transición puede describir cómo una población se reparte entre categorías de un período al siguiente:

$$
\\vec x_{n+1}=T\\vec x_n.
$$

Entonces $\\vec x_n=T^n\\vec x_0$. Antes de interpretar, comprueba si filas o columnas suman 1 según la convención. Cambiar la orientación del vector sin cambiar la matriz produce un modelo distinto.

## Errores frecuentes

- Multiplicar matrices sin comprobar dimensiones.
- Suponer que el producto conmuta.
- Usar la inversa cuando $\\det A=0$.
- Dar un vector sin explicar sus componentes.
- Aceptar cantidades negativas de personas o productos sin discutir el modelo.
- Redondear unidades indivisibles sin revisar las ecuaciones.

## Del contexto a una solución defendible

El campus virtual de Método Nebula trabaja matrices CCSS con modelos de producción, sistemas, programación lineal y probabilidad. Incluye teoría, ejercicios graduados y problemas PAU donde la interpretación cuenta tanto como la operación. El botón de contacto permite acceder al recorrido completo y practicar con corrección contextual.
`,Xe=`---
title: "Matemáticas CCSS PAU: domina programación lineal y convierte enunciados en puntos"
date: "2026-09-30"
updated: "2026-10-28"
description: "Programación lineal para Matemáticas CCSS PAU: variables, restricciones, región factible, vértices, ejemplo y errores típicos."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "preparar-selectividad-con-calendario,como-preparar-pau-matematicas-ii"
image: "/assets/latex/linear-programming.svg"
---

Programación lineal parece un tema de dibujar rectas, pero el dibujo solo representa decisiones. El verdadero problema está en traducir una situación de recursos, tiempo o beneficio a un modelo matemático que pueda justificarse.

La ruta siempre tiene cuatro etapas: **variables, restricciones, región factible y función objetivo.** Saltarse una de ellas puede producir un vértice correcto para un problema que no era el del enunciado.

![Región factible, restricciones, vértices y recta de nivel de una función objetivo](/assets/latex/linear-programming.svg)

## Define variables con significado y unidad

No empieces escribiendo $x$ e $y$ sin explicar qué cuentan. Una definición válida sería: “$x$ es el número de lotes del producto A e $y$ el número de lotes del producto B”. Añade $x\\ge0$, $y\\ge0$ y, si la situación lo exige, la condición de enteros.

## Traduce las palabras clave

- “Como máximo” conduce normalmente a $\\le$.
- “Al menos” conduce a $\\ge$.
- “No menos de” significa también $\\ge$.
- “Por cada unidad” introduce un coeficiente.
- Un presupuesto o tiempo total produce una suma ponderada.

Prueba un caso sencillo del enunciado para comprobar el sentido de la desigualdad antes de dibujar.

## Ejemplo completo

Una empresa produce lotes A y B. Cada A usa 2 horas de máquina y 1 de acabado; cada B usa 1 hora de máquina y 2 de acabado. Hay 8 horas de máquina y 10 de acabado. El beneficio es 30 € por A y 40 € por B.

Las restricciones son:

$$
2x+y\\le8,
$$

$$
x+2y\\le10,
$$

$$
x\\ge0,\\qquad y\\ge0.
$$

La función objetivo es:

$$
B(x,y)=30x+40y.
$$

Los vértices relevantes son $(0,0)$, $(4,0)$, $(0,5)$ y la intersección de las dos fronteras. Resolviendo:

$$
2x+y=8,\\qquad x+2y=10,
$$

obtenemos $(x,y)=(2,4)$. Evaluamos:

| Vértice | Beneficio |
|---|---:|
| $(0,0)$ | 0 € |
| $(4,0)$ | 120 € |
| $(0,5)$ | 200 € |
| $(2,4)$ | 220 € |

El máximo se alcanza produciendo 2 lotes A y 4 lotes B, con 220 € de beneficio.

## Por qué basta revisar los vértices

En un problema lineal con región factible poligonal y acotada, las rectas de nivel de la función objetivo se desplazan de forma paralela. El último punto de contacto con la región aparece en un vértice o, en un caso de múltiples óptimos, a lo largo de un lado.

No es magia ni una regla sin motivo: es una propiedad de la geometría lineal.

## Casos que debes reconocer

- **Región vacía:** las restricciones son incompatibles.
- **Región no acotada:** puede existir o no un óptimo finito.
- **Múltiples soluciones óptimas:** la función objetivo es paralela a un lado óptimo.
- **Variables enteras:** el óptimo continuo puede no ser una decisión permitida.

## Errores frecuentes

- Olvidar no negatividad.
- Sombrear el semiplano opuesto por no probar un punto.
- Usar interceptos aproximados y perder el vértice exacto.
- Evaluar puntos que no pertenecen a la región.
- Dar solo el valor máximo sin interpretar las variables.
- Redondear una solución cuando el problema exige enteros sin comprobar vecinos factibles.

## Lista de comprobación PAU

¿Variables definidas? ¿Todas las restricciones traducidas? ¿Semiplanos verificados? ¿Vértices exactos? ¿Función objetivo evaluada? ¿Respuesta redactada con unidades? Si las seis respuestas son sí, el ejercicio está completo y el corrector puede seguir el razonamiento.

El campus virtual de Método Nebula incluye Matemáticas CCSS con sistemas, representación, programación lineal, probabilidad e inferencia, organizados en teoría, ejemplos y práctica de examen. Si quieres dejar de depender de plantillas y aprender a modelizar, utiliza el botón de contacto.
`,Ze=`---
title: "Cómo corregir un simulacro de PAU para subir nota: el sistema que convierte fallos en un plan"
date: "2026-10-27"
updated: "2026-10-28"
description: "Sistema completo para corregir simulacros de PAU, clasificar errores, recuperar preguntas y convertir la nota en un plan semanal."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "preparar-selectividad-con-calendario,preparar-pau-desde-verano-plan-septiembre"
image: "/assets/latex/learning-cycle.svg"
---

La nota de un simulacro describe lo que ocurrió un día; no explica qué debes hacer mañana. Dos estudiantes con un 6 pueden estar en situaciones opuestas: uno no domina dos bloques importantes y el otro pierde puntos por tiempo, signos y justificación.

Una corrección útil transforma cada pérdida de puntos en una acción concreta y vuelve a medirla cuando la solución ya no está fresca.

![Ciclo de diagnóstico, práctica, examen, corrección y recuperación espaciada](/assets/latex/learning-cycle.svg)

## Antes de empezar: reproduce condiciones reales

Usa un modelo pertinente para tu comunidad, respeta tiempo, opciones y material permitido. Marca las preguntas dudosas, pero no consultes soluciones durante la prueba. Si las condiciones no se parecen al examen, la información sobre gestión del tiempo será limitada.

## Corrige con el criterio oficial

No compares solo resultados. Busca qué pasos puntúan: planteamiento, definición, representación, cálculo, unidad y conclusión. Anota la puntuación perdida junto al primer punto donde tu solución se desvía.

## Las cinco categorías de error

| Tipo | Señal | Intervención |
|---|---|---|
| Concepto | No puedes explicar la idea | Teoría breve y ejemplo |
| Reconocimiento | No sabes qué método elegir | Comparar problemas parecidos |
| Ejecución | Método correcto, cuenta errónea | Práctica corta y controlada |
| Comunicación | Falta justificación o unidad | Reescribir una solución modelo |
| Gestión | Dejas preguntas o te precipitas | Estrategia de tiempo y orden |

Evita la categoría “despiste”. Describe el mecanismo: copié mal un dato, no revisé el signo al distribuir, usé radianes cuando esperaba grados. Solo así puedes diseñar una barrera contra la repetición.

## Crea una ficha de error

Para cada fallo importante registra:

- tema y tipo de pregunta;
- primer paso incorrecto;
- regla o comprobación que lo habría evitado;
- un ejercicio de recuperación;
- fecha de repetición.

Una ficha no copia toda la solución. Captura la decisión que debes mejorar.

## Recuperación en tres tiempos

### Inmediata

Rehaz el problema después de estudiar la solución, explicando cada paso. Sirve para reconstruir el procedimiento, pero todavía hay memoria reciente.

### A las 48 horas

Resuelve el mismo ejercicio sin mirar. Si necesitas recordar la solución visualmente, aún no está consolidado.

### Una semana después

Busca una variante del mismo patrón. La transferencia a un enunciado nuevo es la evidencia más fuerte de aprendizaje.

## Convierte los resultados en una semana

Supón que un simulacro revela: equilibrio químico sin iniciar, integrales con errores de signo y una pregunta final en blanco por tiempo. El plan podría ser:

1. lunes: teoría y ejemplos de equilibrio;
2. martes: práctica breve de signos e integrales;
3. miércoles: preguntas de equilibrio sin apoyo;
4. jueves: bloque mixto cronometrado;
5. viernes: recuperación de los fallos;
6. sábado: media prueba con estrategia de orden;
7. domingo: revisión ligera y actualización del registro.

Cada actividad responde a una evidencia. No es un calendario genérico.

## Métricas mejores que la nota aislada

Observa también:

- preguntas iniciadas correctamente;
- errores de método frente a errores de cálculo;
- puntos perdidos por presentación;
- minutos por bloque;
- fallos repetidos;
- porcentaje de errores recuperados una semana después.

La nota puede tardar en subir mientras caen los errores de método. Esa tendencia ya indica que la preparación cambia en la dirección adecuada.

## Cuándo hacer el siguiente simulacro

No necesitas un paper completo cada día. Haz el siguiente cuando hayas trabajado las dos o tres causas principales del anterior. Entre simulacros, usa preguntas por tema y bloques mixtos. El paper mide; la práctica específica transforma.

## Errores al corregir simulacros

- Mirar la solución y pensar “lo entendía”.
- Corregir solo en rojo sin reescribir.
- Repetir inmediatamente hasta memorizar el enunciado.
- Contar como despiste un patrón recurrente.
- Cambiar de recurso cada vez que aparece dificultad.
- Hacer otro paper sin intervenir sobre el anterior.

## Cómo encaja un campus bien estructurado

El campus virtual de Método Nebula permite pasar del diagnóstico a la unidad concreta, revisar teoría, observar ejemplos, practicar, responder preguntas de examen y volver a medir. La ventaja no es acumular contenido; es conservar una ruta entre el fallo y la siguiente evidencia.

Si tienes modelos corregidos pero no sabes convertirlos en un calendario, utiliza el botón de contacto. Podemos revisar objetivo, comunidad, asignaturas, fecha y punto de partida para proponer un recorrido realista.
`,Ye=`---
title: "Campo gravitatorio PAU: satélites, órbitas y energía con un único desarrollo matemático"
date: "2026-10-02"
updated: "2026-10-02"
description: "Resuelve satélites en Física PAU: radio orbital, velocidad, periodo, energía, escape y errores de signo con deducciones paso a paso."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-fisica-electromagnetismo-estudiar,pau-fisica-ondas-resolver-problemas"
image: "/assets/latex/satellite-orbit.svg"
---

Los problemas de satélites dejan de parecer una colección de fórmulas cuando se entiende una idea: **la gravedad proporciona la aceleración centrípeta necesaria para curvar la trayectoria**. A partir de esa igualdad se deducen la velocidad orbital y el periodo. No hace falta memorizarlos como resultados independientes.

![Satélite en órbita con velocidad tangencial, fuerza gravitatoria radial y radio orbital](/assets/latex/satellite-orbit.svg)

## Primero: el radio correcto

Si un satélite está a altura $h$ sobre la superficie terrestre, su distancia al centro es:

$$
r=R_T+h.
$$

La ley de gravitación y las expresiones de campo o potencial siempre utilizan distancia al centro. Sustituir solo $h$ es uno de los errores más costosos del tema.

## Velocidad orbital deducida

En una órbita circular, la fuerza gravitatoria actúa como fuerza centrípeta:

$$
\\frac{GMm}{r^2}=\\frac{mv^2}{r}.
$$

Simplificamos la masa del satélite y un factor $r$:

$$
v=\\sqrt{\\frac{GM}{r}}.
$$

La velocidad no depende de la masa del satélite. Además, al aumentar $r$, la velocidad orbital disminuye. Esta conclusión debe aparecer antes de introducir números.

## Periodo y tercera ley de Kepler

Para movimiento circular uniforme:

$$
v=\\frac{2\\pi r}{T}.
$$

Sustituyendo la velocidad orbital:

$$
T=2\\pi\\sqrt{\\frac{r^3}{GM}}.
$$

Al elevar al cuadrado:

$$
T^2=\\frac{4\\pi^2}{GM}r^3.
$$

Así aparece la tercera ley de Kepler para cuerpos que orbitan la misma masa central.

## Energía de una órbita circular

La energía potencial gravitatoria, tomando cero en el infinito, es:

$$
U=-\\frac{GMm}{r}.
$$

Con $v^2=GM/r$:

$$
K=\\frac12mv^2=\\frac{GMm}{2r}.
$$

Por tanto, la energía mecánica total es:

$$
E=K+U=-\\frac{GMm}{2r}.
$$

Es negativa porque el satélite está ligado gravitatoriamente. En una órbita más alta, $E$ es menos negativa: hay que aportar energía para elevar el satélite, aunque su rapidez final sea menor.

## Ejemplo numérico

El cálculo de la velocidad de un satélite a 400 km de altura puede realizarse con $R_T=6,37\\times10^6$ m y $GM_T=3,986\\times10^{14}\\,\\mathrm{m^3/s^2}$.

$$
r=6,37\\times10^6+4,00\\times10^5=6,77\\times10^6\\ \\mathrm{m}.
$$

$$
v=\\sqrt{\\frac{3,986\\times10^{14}}{6,77\\times10^6}}
\\approx7,67\\times10^3\\ \\mathrm{m/s}.
$$

El orden de magnitud, unos kilómetros por segundo, es razonable para una órbita terrestre baja.

## Velocidad de escape

Para llegar al infinito con velocidad final nula, la energía total inicial debe ser cero:

$$
\\frac12mv_e^2-\\frac{GMm}{r}=0.
$$

Entonces:

$$
v_e=\\sqrt{\\frac{2GM}{r}}.
$$

Desde el mismo radio, $v_e=\\sqrt2\\,v_{\\text{orbital}}$. Esta relación sale del balance de energía y funciona como comprobación.

## Campo, potencial, fuerza y energía

Estas cuatro magnitudes se parecen en las fórmulas, pero responden a preguntas distintas:

$$
g=\\frac{GM}{r^2},\\qquad V=-\\frac{GM}{r},
$$

$$
F=mg,\\qquad U=mV.
$$

$g$ y $V$ describen el campo creado por la masa central y no dependen del cuerpo de prueba. $F$ y $U$ sí incluyen su masa. Además, campo y fuerza son vectores dirigidos hacia el centro, mientras que potencial y energía son escalares. Distinguir estas parejas evita sumar potenciales como vectores o asignar dirección a una energía.

El gradiente espacial también es distinto: el campo decrece como $1/r^2$ y el potencial como $1/r$. Por eso no pueden intercambiarse aunque ambos se anulen al llevar el origen de referencia al infinito.

## Órbita geoestacionaria

Un satélite geoestacionario debe tener periodo igual al de rotación terrestre, orbitar en el plano ecuatorial y hacerlo en el mismo sentido que la Tierra. Igualar solo el periodo no basta para garantizar que permanezca sobre el mismo punto.

## Errores frecuentes

- Utilizar altura en vez de radio orbital.
- Confundir campo $g=GM/r^2$ con potencial $V=-GM/r$.
- Eliminar el signo negativo de la energía potencial.
- Pensar que una órbita alta requiere mayor velocidad.
- Introducir kilómetros en una fórmula con $G$ en unidades SI.
- Usar conservación de energía sin declarar los estados inicial y final.

## Estructura de una solución rigurosa

Dibujo y radio → ley física → deducción simbólica → sustitución SI → unidades → interpretación. La deducción simbólica permite ver dependencias, detectar datos irrelevantes y conservar puntos aunque falle una operación numérica.

El campus virtual de Método Nebula desarrolla campo gravitatorio, potencial, energía, satélites, órbitas y escape con teoría, demostraciones, ejercicios y problemas PAU. El botón de contacto permite solicitar una ruta centrada en el desarrollo matemático que conecta todo el bloque.
`,en=`---
title: "Física cuántica PAU: efecto fotoeléctrico y fotones para entender por qué existe una frecuencia umbral"
seoTitle: "Efecto fotoeléctrico PAU: fotones y frecuencia umbral"
date: "2026-10-10"
updated: "2026-10-10"
description: "Domina el efecto fotoeléctrico en Física PAU: fotones, trabajo de extracción, frecuencia umbral, potencial de frenado y gráficas."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-fisica-nuclear-defecto-masa,pau-fisica-ondas-resolver-problemas,pau-corregir-simulacros-plan-estudio"
image: "/assets/latex/photoelectric-threshold.svg"
---

El efecto fotoeléctrico obliga a separar intensidad y frecuencia. Aumentar la intensidad aporta más fotones; aumentar la frecuencia cambia la energía de cada fotón.

> **Respuesta directa.** Un electrón solo se emite si $hf\\geq\\phi$. Por encima de la frecuencia umbral, la energía cinética máxima es $K_{\\max}=hf-\\phi$. La intensidad modifica el número de electrones emitidos, no su energía máxima si la frecuencia permanece fija.

![Energía cinética máxima frente a frecuencia con umbral fotoeléctrico](/assets/latex/photoelectric-threshold.svg)

## La ecuación de Einstein

$$
E_\\gamma=hf=\\frac{hc}{\\lambda}.
$$

Parte de esa energía vence el trabajo de extracción $\\phi$:

$$
K_{\\max}=hf-\\phi.
$$

En el umbral, $K_{\\max}=0$:

$$
\\phi=hf_0.
$$

## Ejemplo resuelto

Un metal tiene trabajo de extracción $\\phi=2.2$ eV. Su frecuencia umbral es:

$$
f_0=\\frac{\\phi}{h}.
$$

Convirtiendo:

$$
\\phi=2.2(1.602\\times10^{-19})
=3.52\\times10^{-19}\\ \\mathrm{J}.
$$

$$
f_0\\approx\\frac{3.52\\times10^{-19}}{6.626\\times10^{-34}}
=5.31\\times10^{14}\\ \\mathrm{Hz}.
$$

## Potencial de frenado

Si un potencial $V_f$ detiene a los electrones más energéticos:

$$
eV_f=K_{\\max}.
$$

La pendiente de una gráfica $K_{\\max}$ frente a $f$ es $h$; el corte con el eje de frecuencia es $f_0$.

## Qué cambia con la intensidad

Por encima del umbral, más intensidad significa más fotones por segundo y, por tanto, mayor corriente fotoeléctrica. Pero si $f$ no cambia, cada fotón conserva la misma energía y $K_{\\max}$ permanece.

Por debajo del umbral, ninguna intensidad compensa la falta de energía por fotón.

## Ejemplo con potencial de frenado

Sobre un metal de trabajo de extracción $2.0$ eV inciden fotones de energía $3.4$ eV. La energía cinética máxima es:

$$
K_{\\max}=3.4-2.0=1.4\\ \\mathrm{eV}.
$$

Como un electrón que atraviesa un voltio cambia su energía en un electronvoltio, el potencial de frenado es $V_f=1.4$ V. Si la intensidad se duplica manteniendo la frecuencia, aumentará la corriente de saturación, pero el potencial de frenado seguirá siendo 1.4 V.

Si en cambio aumenta la frecuencia, la recta $K_{\\max}(f)$ crece con pendiente $h$. Medir esa pendiente permite estimar la constante de Planck, mientras que la ordenada en el origen extrapolada es $-\\phi$.

## Qué observaciones exigieron el modelo de fotón

La emisión aparece sin retraso apreciable cuando $f>f_0$, incluso con intensidad baja. Además, existe una frecuencia umbral y la energía máxima depende de la frecuencia, no de la intensidad. Un modelo ondulatorio clásico que repartiera energía continuamente no explicaba bien este conjunto de resultados.

El modelo de Einstein asigna la interacción a paquetes individuales: un fotón entrega su energía a un electrón. Esto explica por qué muchos fotones poco energéticos no “suman” normalmente su energía para liberar un electrón en el experimento básico, y por qué aumentar la intensidad incrementa el número de sucesos, no la energía de cada uno.

En una explicación PAU, observación y modelo deben aparecer conectados. Citar solo la ecuación obtiene menos información física que interpretar qué variable controla cada medida.

## Dualidad y longitud de onda

La relación de de Broglie:

$$
\\lambda=\\frac{h}{p}
$$

asocia longitud de onda a partículas con momento. En preguntas PAU conviene distinguir esta longitud de onda de la del fotón incidente.

## Errores frecuentes

- Usar eV como si fueran julios.
- Afirmar que más intensidad aumenta $K_{\\max}$.
- Confundir frecuencia umbral con intensidad mínima.
- Omitir el trabajo de extracción.
- Usar $c=f\\lambda$ con la velocidad de un electrón.

El campus virtual de Método Nebula desarrolla cuántica, relatividad y nuclear con teoría, gráficos y problemas PAU. Contacta para entrenar conversiones, modelos y explicaciones.
`,nn=`---
title: "Física PAU: electromagnetismo desde cero para dominar campos, fuerzas e inducción"
date: "2026-10-24"
updated: "2026-10-28"
description: "Electromagnetismo para Física PAU: campo, fuerza de Lorentz, movimiento de cargas, flujo, inducción, ejemplo y errores típicos."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-fisica-ondas-resolver-problemas,preparar-selectividad-con-calendario"
image: "/assets/latex/electromagnetism-path.svg"
---

Electromagnetismo parece una colección de reglas de la mano, pero todas responden a una pregunta común: **qué genera el campo, qué partícula o conductor lo experimenta y en qué dirección aparece la fuerza o la corriente inducida.**

![Carga positiva moviéndose en un campo magnético con fuerza perpendicular y trayectoria curva](/assets/latex/electromagnetism-path.svg)

## Campo eléctrico y fuerza

El campo eléctrico es fuerza por unidad de carga:

$$
\\vec E=\\frac{\\vec F}{q}.
$$

Una carga $q$ experimenta:

$$
\\vec F=q\\vec E.
$$

Si $q$ es positiva, fuerza y campo tienen el mismo sentido; si es negativa, sentidos opuestos. Especificar el signo evita errores de dirección.

## Potencial y energía

El potencial es energía potencial por unidad de carga. La variación de energía se relaciona con la diferencia de potencial:

$$
\\Delta U=q\\Delta V.
$$

Campo y potencial están relacionados, pero no son la misma magnitud. El campo es vectorial; el potencial es escalar.

## Fuerza magnética sobre una carga

Para una carga que se mueve con velocidad $\\vec v$ en un campo $\\vec B$:

$$
\\vec F=q\\,\\vec v\\times\\vec B.
$$

Su módulo es:

$$
F=|q|vB\\sin\\theta.
$$

Si velocidad y campo son paralelos, la fuerza es cero. Si son perpendiculares, la fuerza es máxima y puede producir movimiento circular.

## Por qué cambia dirección pero no rapidez

La fuerza magnética es perpendicular a la velocidad instantánea. Por ello no realiza trabajo en el modelo ideal: cambia la dirección del vector velocidad, no su módulo.

Igualando fuerza magnética y centrípeta:

$$
|q|vB=\\frac{mv^2}{r},
$$

obtenemos:

$$
r=\\frac{mv}{|q|B}.
$$

## Ejemplo

Un protón entra perpendicularmente en un campo de 0,20 T con velocidad $3.0\\times10^6$ m/s. Con $m_p=1.67\\times10^{-27}$ kg y $q=1.60\\times10^{-19}$ C:

$$
r=\\frac{1.67\\times10^{-27}\\cdot3.0\\times10^6}{1.60\\times10^{-19}\\cdot0.20}\\approx0.157\\ \\mathrm{m}.
$$

El sentido de curvatura se determina con el producto vectorial y el signo positivo de la carga.

## Fuerza sobre una corriente

Un conductor recto de longitud $L$ con corriente $I$ en un campo uniforme experimenta:

$$
\\vec F=I\\vec L\\times\\vec B.
$$

El vector $\\vec L$ sigue el sentido de la corriente convencional. Dibuja antes de aplicar una regla de la mano.

## Flujo magnético

Para campo uniforme:

$$
\\Phi=B A\\cos\\theta,
$$

donde $\\theta$ es el ángulo entre el campo y el vector normal a la superficie, no necesariamente con el plano. Esta precisión explica muchos errores de seno y coseno.

## Inducción y ley de Lenz

La fuerza electromotriz inducida aparece cuando cambia el flujo:

$$
\\mathcal{E}=-\\frac{d\\Phi}{dt}.
$$

Puede cambiar $B$, el área, la orientación o varias a la vez. El signo negativo expresa que la corriente inducida crea un efecto que se opone al cambio de flujo, no al flujo sin más.

## Errores frecuentes

- Aplicar la regla de la mano antes de identificar vectores.
- Olvidar invertir el sentido para una carga negativa.
- Confundir ángulo con el plano y ángulo con la normal.
- Afirmar que el campo magnético aumenta la rapidez de una carga aislada.
- Usar Lenz sin decir qué cambio se opone.
- Mezclar campo, fuerza y potencial.

## Método PAU

Dibujo → vectores → ley física → módulo → dirección → comprobación de unidades. Para inducción añade: “qué hace variar el flujo”. Esta secuencia produce soluciones legibles y conserva puntuación parcial.

El campus virtual de Método Nebula desarrolla electromagnetismo con fundamentos, ejemplos visuales, ejercicios y preguntas PAU. Si quieres convertir reglas sueltas en un mapa coherente y entrenable, utiliza el botón de contacto.
`,an=`---
title: "Movimiento armónico simple en PAU: de la proyección circular a energía, velocidad y aceleración"
seoTitle: "Movimiento armónico simple PAU: método y ejercicios"
date: "2026-10-28"
updated: "2026-10-28"
description: "Domina el MAS en Física PAU: ecuación, fase, velocidad, aceleración, energía, muelles y péndulos con un ejemplo resuelto."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-fisica-ondas-resolver-problemas,pau-corregir-simulacros-plan-estudio,pau-fisica-campo-gravitatorio-satelites"
image: "/assets/latex/shm-projection.svg"
---

El movimiento armónico simple no es una colección de senos y cosenos: es el movimiento producido por una aceleración proporcional al desplazamiento y dirigida hacia el equilibrio.

> **Respuesta directa.** Si $a=-\\omega^2x$, el movimiento es armónico simple. Desde $x=A\\cos(\\omega t+\\varphi)$ se obtienen $v=-\\omega A\\sin(\\omega t+\\varphi)$ y $a=-\\omega^2x$. La fase inicial debe deducirse de la posición y el sentido de movimiento.

![Proyección de un movimiento circular y relaciones fundamentales del MAS](/assets/latex/shm-projection.svg)

## Las cuatro magnitudes que ordenan el problema

- $A$: amplitud, máximo valor de $|x|$.
- $\\omega$: frecuencia angular, en rad/s.
- $T=2\\pi/\\omega$: período.
- $\\varphi$: fase inicial.

La frecuencia es $f=1/T=\\omega/(2\\pi)$. Mezclar $f$ y $\\omega$ introduce un factor $2\\pi$ que contamina todo el ejercicio.

## Posición, velocidad y aceleración

Partiendo de:

$$
x=A\\cos(\\omega t+\\varphi),
$$

se deriva:

$$
v=-\\omega A\\sin(\\omega t+\\varphi),
\\qquad
a=-\\omega^2A\\cos(\\omega t+\\varphi)=-\\omega^2x.
$$

En el centro, $|v|$ es máximo y $a=0$. En los extremos, $v=0$ y $|a|$ es máximo.

## Energía sin memorizar tres fórmulas aisladas

Para un muelle:

$$
E=\\frac12kA^2,
\\qquad
E_p=\\frac12kx^2,
\\qquad
E_c=E-E_p.
$$

Como $\\omega^2=k/m$, también:

$$
v^2=\\omega^2(A^2-x^2).
$$

## Ejemplo resuelto

Una masa oscila con $A=0.08$ m y $T=0.40$ s. En $t=0$ está en el extremo positivo.

$$
\\omega=\\frac{2\\pi}{T}=5\\pi\\ \\mathrm{rad/s}.
$$

La condición inicial permite tomar $\\varphi=0$:

$$
x=0.08\\cos(5\\pi t).
$$

La velocidad máxima es:

$$
v_{\\max}=\\omega A=5\\pi(0.08)=0.4\\pi\\approx1.26\\ \\mathrm{m/s}.
$$

## Muelle y péndulo

Para una masa unida a un muelle:

$$
T=2\\pi\\sqrt{\\frac{m}{k}}.
$$

Para un péndulo simple y oscilaciones pequeñas:

$$
T=2\\pi\\sqrt{\\frac{\\ell}{g}}.
$$

La aproximación de ángulo pequeño es una hipótesis física; no debe omitirse.

## Cómo obtener la fase inicial sin adivinar

Las condiciones iniciales deben cumplir simultáneamente posición y velocidad:

$$
x_0=A\\cos\\varphi,
\\qquad
v_0=-\\omega A\\sin\\varphi.
$$

La primera ecuación suele proporcionar dos ángulos posibles. El signo de $v_0$ decide cuál corresponde al movimiento real. Por ejemplo, si $x_0=A/2$ y la partícula se desplaza hacia posiciones negativas, $\\cos\\varphi=1/2$ y $\\sin\\varphi>0$; por tanto, puede tomarse $\\varphi=\\pi/3$. Elegir $5\\pi/3$ daría la posición correcta, pero una velocidad positiva, incompatible con el enunciado.

## Una comprobación energética útil

En cualquier posición, la suma debe conservarse:

$$
\\frac12mv^2+\\frac12kx^2=\\frac12kA^2.
$$

Si el resultado da $|x|>A$ o $|v|>\\omega A$, hay un error algebraico o de unidades. Esta comprobación también permite resolver preguntas sin tiempo: conocida la posición, se obtiene el módulo de la velocidad, aunque su signo requiere saber hacia dónde se mueve el oscilador.

En una gráfica $x(t)$, la pendiente representa $v$ y la concavidad determina el signo de $a$. En un máximo de $x$, la pendiente es cero y la concavidad es negativa; esa lectura conecta cálculo y física y evita memorizar puntos aislados.

## Método PAU

1. Define origen y sentido positivo.
2. Calcula $\\omega$.
3. Usa posición y velocidad inicial para fijar fase.
4. Deriva la ecuación, no adivines signos.
5. Comprueba extremos, centro y unidades.

## Errores frecuentes

- Usar grados en una fase expresada en radianes.
- Suponer $\\varphi=0$ sin leer las condiciones iniciales.
- Colocar velocidad máxima en un extremo.
- Olvidar el signo restaurador de $a=-\\omega^2x$.
- Aplicar la fórmula del péndulo a amplitudes grandes sin justificar.

El campus virtual de Método Nebula integra MAS y ondas con teoría, ejercicios graduados y problemas PAU. El contacto sirve para diagnosticar si el bloqueo está en la fase, las derivadas o la interpretación física.
`,on=`---
title: "Física nuclear PAU: defecto de masa, energía de enlace y radiactividad con unidades bajo control"
seoTitle: "Física nuclear PAU: defecto de masa y energía de enlace"
date: "2026-10-06"
updated: "2026-10-06"
description: "Resuelve Física nuclear PAU: defecto de masa, energía de enlace por nucleón, desintegraciones, vida media y actividad."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-fisica-cuantica-efecto-fotoelectrico,gcse-physics-radioactivity-half-life,pau-corregir-simulacros-plan-estudio"
image: "/assets/latex/half-life-curve.svg"
---

En física nuclear aparecen masas muy pequeñas y energías enormes porque la conversión $E=mc^2$ multiplica cualquier defecto de masa por $c^2$. El reto es mantener coherentes núcleos, átomos, unidades de masa y electronvoltios.

> **Respuesta directa.** El defecto de masa es la diferencia entre la suma de masas de nucleones separados y la masa del núcleo. Su energía equivalente es la energía de enlace: $E_b=\\Delta mc^2$. Dividir entre el número de nucleones permite comparar estabilidad.

![Curva exponencial de núcleos no desintegrados y vidas medias](/assets/latex/half-life-curve.svg)

## Defecto de masa

Para un núcleo con $Z$ protones y $N$ neutrones:

$$
\\Delta m=Zm_p+Nm_n-m_{\\rm núcleo}.
$$

Si se utilizan masas atómicas, debe elegirse una formulación que cancele correctamente las masas electrónicas. No mezcles masa nuclear y atómica sin explicarlo.

## Energía de enlace

$$
E_b=\\Delta mc^2.
$$

Con $\\Delta m$ en unidades de masa atómica:

$$
1\\ \\mathrm{u}\\,c^2\\approx931.5\\ \\mathrm{MeV}.
$$

La energía de enlace por nucleón es:

$$
\\frac{E_b}{A},
$$

donde $A=Z+N$. Cuanto mayor sea en la región habitual, más ligado está el núcleo.

## Ejemplo

Si $\\Delta m=0.0300$ u:

$$
E_b=0.0300(931.5)=27.9\\ \\mathrm{MeV}.
$$

Para un núcleo con $A=4$:

$$
\\frac{E_b}{A}=6.99\\ \\mathrm{MeV/nucleón}.
$$

## Desintegraciones

- Alfa: $A$ disminuye 4 y $Z$ disminuye 2.
- Beta menos: un neutrón se transforma en protón; $A$ no cambia y $Z$ aumenta 1.
- Gamma: no cambian $A$ ni $Z$; el núcleo pierde energía.

Conserva carga eléctrica, número de nucleones, energía y momento.

## Vida media y actividad

$$
N=N_0e^{-\\lambda t},
\\qquad
A=\\lambda N,
\\qquad
T_{1/2}=\\frac{\\ln2}{\\lambda}.
$$

No confundas $A$ de número másico con actividad: el contexto y la unidad Bq los distinguen.

## Ejemplo de decaimiento y actividad

Una muestra contiene inicialmente $8.0\\times10^{12}$ núcleos y tiene vida media de 6 h. Tras 18 h han transcurrido tres vidas medias:

$$
N=N_0\\left(\\frac12\\right)^3=1.0\\times10^{12}.
$$

Para calcular la actividad en becquerelios, la constante debe expresarse en $\\mathrm{s^{-1}}$:

$$
\\lambda=\\frac{\\ln2}{6(3600)}=3.21\\times10^{-5}\\ \\mathrm{s^{-1}},
$$

$$
A=\\lambda N=3.21\\times10^7\\ \\mathrm{Bq}.
$$

La actividad también se reduce a la mitad en cada vida media porque es proporcional a $N$.

## Energía liberada en una reacción nuclear

Para una reacción, el valor energético es:

$$
Q=(m_{\\rm inicial}-m_{\\rm final})c^2.
$$

Si $Q>0$, la masa final es menor y la diferencia aparece como energía cinética o radiación. Si $Q<0$, la reacción requiere al menos esa energía, además de las condiciones impuestas por la conservación del momento.

Al usar masas atómicas, los electrones deben aparecer equilibrados en ambos lados. Después de calcular el defecto en u, multiplicar por 931.5 produce MeV para la reacción escrita. No debe dividirse por nucleón salvo que la pregunta pida una comparación de estabilidad.

## Fisión y fusión

Ambas pueden liberar energía al producir núcleos con mayor energía de enlace por nucleón. La explicación correcta se apoya en la curva de enlace, no en que “se pierde masa” sin indicar la transformación energética.

## Errores frecuentes

- Restar masas en orden inverso.
- Usar kg con el factor 931.5 MeV/u.
- Comparar energía total en vez de energía por nucleón.
- Cambiar $A$ en una emisión beta.
- Aplicar una disminución lineal a una ley exponencial.

El campus de Método Nebula conecta estructura nuclear, decaimiento, energía de enlace y problemas PAU. Contacta para practicar balances y conversiones con corrección detallada.
`,rn=`---
title: "Física PAU: domina ondas desde cero y convierte las fórmulas en puntos de examen"
date: "2026-09-22"
updated: "2026-10-28"
description: "Guía completa de ondas para Física PAU: magnitudes, ecuación armónica, gráficas, fenómenos, ejemplo resuelto y errores típicos."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-fisica-electromagnetismo-estudiar,preparar-selectividad-con-calendario,fisica-y-quimica-como-plantear-problemas"
image: "/assets/latex/wave-anatomy.svg"
---

Ondas es uno de esos temas de Física PAU donde conocer todas las fórmulas puede no ser suficiente. Una gráfica mal leída cambia frecuencia por longitud de onda; un signo elegido sin criterio invierte el sentido de propagación; una respuesta numérica sin interpretación pierde parte del valor del ejercicio.

La forma de dominar el bloque es reconstruirlo alrededor de tres preguntas: **qué oscila, cómo se propaga la perturbación y qué información describe el dibujo o la ecuación.**

![Anatomía de una onda armónica con amplitud, longitud de onda y relaciones fundamentales](/assets/latex/wave-anatomy.svg)

## Las magnitudes que debes poder explicar

- **Amplitud $A$:** máxima separación respecto al equilibrio.
- **Longitud de onda $\\lambda$:** distancia entre dos puntos en el mismo estado de vibración.
- **Período $T$:** tiempo de una oscilación completa.
- **Frecuencia $f$:** oscilaciones por segundo, con $f=1/T$.
- **Velocidad $v$:** rapidez de propagación, $v=\\lambda f$.
- **Frecuencia angular $\\omega$:** $\\omega=2\\pi f$.
- **Número de onda $k$:** $k=2\\pi/\\lambda$.

No memorices la tabla sin unidades. $f$ se expresa en hertz, $T$ en segundos, $\\lambda$ en metros y $v$ en metros por segundo.

## Fotografía espacial frente a evolución temporal

Si el eje horizontal es posición, ves una fotografía de la onda en un instante: la distancia entre crestas es $\\lambda$. Si el eje horizontal es tiempo, observas cómo vibra un punto: la distancia temporal entre máximos es $T$.

Esta distinción resuelve muchas preguntas antes de calcular. Escribe qué representa cada eje antes de leer un valor.

## Construir una ecuación de onda

Una onda armónica que se propaga en sentido positivo puede escribirse como:

$$
y(x,t)=A\\sin(\\omega t-kx+\\varphi_0),
$$

con otras convenciones equivalentes. Lo importante es ser consistente. Para comprobar el signo, fija una fase constante y observa cómo debe cambiar $x$ cuando aumenta $t$.

La velocidad transversal de una partícula del medio se obtiene derivando respecto al tiempo; la velocidad de propagación de la onda es $\\omega/k$. No son la misma magnitud.

## Ejemplo resuelto

Una onda tiene frecuencia de 5 Hz y se propaga a 20 m/s. Su amplitud es 0,08 m.

La longitud de onda es:

$$
\\lambda=\\frac{v}{f}=\\frac{20}{5}=4\\ \\mathrm{m}.
$$

Además:

$$
\\omega=2\\pi f=10\\pi\\ \\mathrm{rad/s},
$$

$$
k=\\frac{2\\pi}{\\lambda}=\\frac{\\pi}{2}\\ \\mathrm{rad/m}.
$$

Una ecuación posible, con fase inicial nula y propagación en $+x$, es:

$$
y=0.08\\sin\\left(10\\pi t-\\frac{\\pi}{2}x\\right).
$$

Comprueba que $\\omega/k=20$ m/s. Esa verificación detecta errores de factor $2\\pi$.

## Fenómenos que deben explicarse con una idea física

En reflexión, parte de la energía regresa al medio original. En refracción cambia la velocidad y, por tanto, la longitud de onda; la frecuencia la fija la fuente. En interferencia se superponen desplazamientos. En una onda estacionaria aparecen nodos y vientres por superposición de ondas que viajan en sentidos opuestos.

Una respuesta de calidad indica qué se conserva, qué cambia y por qué.

## Método de resolución PAU

1. Dibuja o interpreta el esquema.
2. Anota datos con unidad y símbolo.
3. Decide si la información es espacial o temporal.
4. Escribe la relación física antes de sustituir.
5. Calcula sin redondear prematuramente.
6. Añade una frase que interprete el resultado.

## Errores frecuentes

- Confundir $T$ y $f$.
- Leer $\\lambda$ en una gráfica temporal.
- Usar grados dentro de una ecuación expresada en radianes.
- Confundir velocidad de propagación con velocidad de vibración.
- Cambiar la frecuencia al pasar una onda a otro medio.
- Elegir el signo de la fase sin comprobar el sentido.

## Qué practicar después

Resuelve una pregunta de lectura de gráfica, otra de ecuación de onda, una de interferencia y una de energía o intensidad. Dos días después mézclalas sin encabezado. Finalmente intégralas en un modelo cronometrado de tu comunidad y corrige con su criterio oficial.

El campus virtual de Método Nebula desarrolla fundamentos, movimiento armónico, ondas y óptica mediante teoría, ejemplos, ejercicios y preguntas de examen. Si quieres convertir este bloque en una fuente estable de puntos, utiliza el botón de contacto para diagnosticar el punto de partida y construir el recorrido.
`,sn=`---
title: "Óptica geométrica PAU: lentes, espejos y signos con rayos que justifican cada resultado"
seoTitle: "Óptica geométrica PAU: lentes, espejos y signos"
date: "2026-10-23"
updated: "2026-10-23"
description: "Resuelve óptica geométrica PAU con convenio de signos, ecuación de lentes, aumento, diagramas de rayos e interpretación de imágenes."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-fisica-ondas-resolver-problemas,pau-fisica-electromagnetismo-estudiar,pau-corregir-simulacros-plan-estudio"
image: "/assets/latex/lens-ray-diagram.svg"
---

En óptica geométrica, una sustitución numérica puede parecer correcta y describir una imagen imposible. El diagrama de rayos no es decorativo: anticipa si la imagen será real o virtual, derecha o invertida y mayor o menor.

> **Respuesta directa.** Fija primero el convenio de signos, dibuja los rayos principales y después aplica la ecuación. La posición y el aumento deben contar la misma historia que el esquema.

![Diagrama de rayos principales en una lente convergente](/assets/latex/lens-ray-diagram.svg)

## Tres rayos principales

En una lente delgada convergente:

1. El rayo paralelo al eje sale pasando por el foco imagen.
2. El rayo que pasa por el centro óptico no se desvía en el modelo paraxial.
3. El rayo dirigido hacia el foco objeto sale paralelo.

La intersección de los rayos refractados localiza una imagen real. La intersección de sus prolongaciones localiza una imagen virtual.

## Ecuación y convenio

Con distancias positivas tomadas como módulos en el esquema habitual:

$$
\\frac1f=\\frac1s+\\frac1{s'}.
$$

En cursos que utilizan convenio cartesiano, los signos cambian según lado y dirección. No mezcles convenios en una misma solución: declara el utilizado y mantén coherencia.

El aumento lateral es:

$$
m=\\frac{y'}{y}=-\\frac{s'}{s}.
$$

El signo negativo suele indicar inversión.

## Ejemplo resuelto

Un objeto está a 30 cm de una lente convergente de focal 10 cm:

$$
\\frac1{10}=\\frac1{30}+\\frac1{s'}
\\Rightarrow
\\frac1{s'}=\\frac{2}{30}
\\Rightarrow
s'=15\\ \\mathrm{cm}.
$$

$$
m=-\\frac{15}{30}=-0.5.
$$

La imagen es real, invertida y de la mitad del tamaño. El diagrama debe mostrarla entre $F'$ y $2F'$.

## Potencia de una lente

$$
P=\\frac1f,
$$

con $f$ en metros y $P$ en dioptrías. Una focal de $0.25$ m corresponde a $4$ D.

## Predecir la imagen antes de calcular

En una lente convergente, la posición del objeto permite anticipar el resultado. Más allá de $2F$, la imagen es real, invertida y reducida; en $2F$, tiene el mismo tamaño; entre $F$ y $2F$, es real, invertida y aumentada. Si el objeto está entre la lente y $F$, los rayos emergen divergentes y sus prolongaciones forman una imagen virtual, derecha y aumentada.

Esta clasificación funciona como control del álgebra. Si un objeto situado a más de $2F$ produce en tu cálculo una imagen virtual aumentada, no conviene cambiar un signo al azar: hay que volver al convenio y a la ecuación.

## Ejemplo inverso y resolución experimental

Una lente forma una imagen real tres veces mayor a 60 cm. Como $|m|=s'/s=3$:

$$
s=\\frac{60}{3}=20\\ \\mathrm{cm},
\\qquad
\\frac1f=\\frac1{20}+\\frac1{60}=\\frac4{60},
$$

de modo que $f=15$ cm y $P=1/0.15=6.67$ D. El signo de $m$ sería negativo porque la imagen real aparece invertida.

En laboratorio, una imagen real puede enfocarse sobre una pantalla; una virtual no. Para estimar la focal se miden objeto, lente y pantalla desde una referencia común, se repite con varias posiciones y se evita tomar distancias desde el borde del soporte. La nitidez del enfoque limita la incertidumbre y debe reflejarse en las cifras significativas.

## Espejos

Los mismos principios geométricos se aplican con reflexión. En un espejo cóncavo, un objeto más allá del foco puede formar imagen real; entre foco y espejo produce imagen virtual aumentada. El espejo convexo produce imágenes virtuales, derechas y reducidas.

## Comprobaciones físicas

- ¿Los rayos reales se cruzan donde afirma el cálculo?
- ¿El signo de $m$ coincide con la orientación?
- ¿La escala del dibujo es compatible con $|m|$?
- ¿Las distancias están en la unidad exigida?

## Errores frecuentes

- Usar centímetros en dioptrías.
- Dibujar todos los rayos atravesando el foco.
- Confundir foco objeto y foco imagen.
- Dar una posición sin clasificar la imagen.
- Corregir signos “al final” en vez de mantener un convenio.

El campus de Método Nebula desarrolla ondas y óptica con diagramas, ecuaciones y ejercicios PAU. Contacta si necesitas convertir el convenio de signos en un procedimiento verificable.
`,tn=`---
title: "Relatividad especial en Física PAU: dilatación temporal, contracción y energía sin paradojas"
seoTitle: "Relatividad especial PAU: tiempo, longitud y energía"
date: "2026-09-27"
updated: "2026-09-27"
description: "Resuelve relatividad especial en Física PAU: factor de Lorentz, tiempo propio, contracción de longitud, energía y razonamiento físico."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-fisica-cuantica-efecto-fotoelectrico,pau-fisica-nuclear-defecto-masa,pau-corregir-simulacros-plan-estudio"
image: "/assets/latex/spacetime-dilation.svg"
---

La relatividad especial no afirma que “todo sea relativo”. Afirma que las leyes físicas y la velocidad de la luz son las mismas en todos los sistemas inerciales, y obliga a revisar cómo medimos tiempo, longitud, energía y simultaneidad.

> **Respuesta directa.** Primero identifica en qué sistema dos sucesos ocurren en el mismo lugar: ese sistema mide el tiempo propio $\\Delta t_0$. Para cualquier observador que vea moverse el reloj, $\\Delta t=\\gamma\\Delta t_0$. La longitud propia se mide en reposo y el observador que ve moverse el objeto mide $L=L_0/\\gamma$.

![Relojes de luz y triángulo geométrico de la dilatación temporal](/assets/latex/spacetime-dilation.svg)

## Los dos postulados

1. Las leyes de la física tienen la misma forma en todos los sistemas de referencia inerciales.
2. La luz en el vacío se mide con velocidad $c$ por cualquier observador inercial, independientemente del movimiento de la fuente.

No se suman velocidades clásicamente cuando el resultado podría acercarse a $c$. Las transformaciones de Lorentz sustituyen a las de Galileo en ese régimen.

## Factor de Lorentz

$$
\\gamma=\\frac1{\\sqrt{1-v^2/c^2}}.
$$

Siempre cumple $\\gamma\\geq1$. Si $v\\ll c$, entonces $\\gamma\\approx1$ y reaparece la física clásica. Antes de calcular, esta desigualdad permite detectar una raíz o un cociente invertidos.

## Tiempo propio y dilatación

El tiempo propio se mide con un único reloj situado donde ocurren ambos sucesos. Otro sistema ve ese reloj en movimiento y mide:

$$
\\Delta t=\\gamma\\Delta t_0.
$$

Por ejemplo, una partícula inestable tiene vida propia $2.2\\ \\mu\\mathrm{s}$ y se mueve a $0.98c$:

$$
\\gamma=\\frac1{\\sqrt{1-0.98^2}}\\approx5.03,
$$

$$
\\Delta t\\approx11.1\\ \\mu\\mathrm{s}.
$$

En el laboratorio recorre aproximadamente $v\\Delta t\\approx3.26$ km. Usar la vida propia directamente daría una distancia incompatible con la observación.

## Longitud propia y contracción

La longitud propia $L_0$ se mide en el sistema donde el objeto está en reposo. Quien lo ve moverse paralelamente a su longitud mide:

$$
L=\\frac{L_0}{\\gamma}.
$$

Solo se contrae la componente paralela al movimiento. Además, medir los dos extremos exige registrar sus posiciones simultáneamente en el sistema del observador; por eso longitud y simultaneidad están conectadas.

## Momento y energía relativistas

$$
p=\\gamma mv,
\\qquad
E=\\gamma mc^2,
\\qquad
E_0=mc^2.
$$

La energía cinética es:

$$
K=(\\gamma-1)mc^2.
$$

La relación general:

$$
E^2=p^2c^2+m^2c^4
$$

también sirve para partículas sin masa: si $m=0$, entonces $E=pc$. Una partícula con masa no alcanza $c$ porque $\\gamma$ y la energía requerida crecerían sin límite.

## Cómo evitar la falsa paradoja

Dos observadores pueden afirmar que el reloj del otro marcha más despacio porque las comparaciones no son simétricas cuando uno cambia de sistema o cuando se comparan sucesos distintos. En el problema de los gemelos, el viajero acelera para regresar y no permanece en un único sistema inercial durante todo el recorrido.

La respuesta PAU debe especificar observador, sucesos y magnitud propia. Frases como “para él el tiempo se para” sustituyen el razonamiento por una intuición imprecisa.

## Errores frecuentes

- Elegir como propio el intervalo medido por quien ve moverse el reloj.
- Multiplicar por $\\gamma$ en la contracción de longitudes.
- Usar $K=\\gamma mc^2$ y olvidar restar la energía en reposo.
- Introducir $v$ en km/h junto a $c$ en m/s.
- Redondear $v/c$ demasiado pronto cuando está cerca de 1.

## Entrenar el bloque, no una sola fórmula

En el campus virtual de Método Nebula, relatividad se trabaja junto con cuántica y nuclear mediante teoría conectada, ejemplos progresivos y problemas PAU completos. El objetivo es decidir el sistema de referencia antes de sustituir. El botón de contacto permite acceder a una ruta que combina diagnóstico, práctica y exámenes resueltos.
`,cn=`---
title: "Derivabilidad con parámetros en PAU: continuidad, derivadas laterales y tangentes sin saltos lógicos"
seoTitle: "Derivabilidad con parámetros PAU: método completo"
date: "2026-09-13"
updated: "2026-09-13"
description: "Resuelve derivabilidad con parámetros en Matemáticas II PAU: continuidad, derivadas laterales, funciones a trozos y rectas tangentes."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "continuidad-derivabilidad-diferencias-problemas,que-son-las-derivadas-y-para-que-se-utilizan,problemas-optimizacion-derivadas-ejercicios-resueltos"
image: "/assets/latex/derivative-parameter.svg"
---

En una función a trozos, derivar cada fórmula no basta. La derivabilidad se decide en los puntos donde cambia la definición, y exige dos filtros consecutivos: continuidad y coincidencia de derivadas laterales.

> **Respuesta directa.** Para que $f$ sea derivable en $x=a$, primero debe cumplirse $\\lim_{x\\to a^-}f=\\lim_{x\\to a^+}f=f(a)$. Después se impone $f'_-(a)=f'_+(a)$. Si falla continuidad, no hay derivabilidad y no tiene sentido buscar una tangente única.

![Condiciones de continuidad y derivadas laterales en un punto de unión](/assets/latex/derivative-parameter.svg)

## El orden correcto

Para una función:

$$
f(x)=
\\begin{cases}
g(x),&x<a,\\\\
h(x),&x\\geq a,
\\end{cases}
$$

el estudio se concentra en $a$. En el interior de cada tramo se aplican las reglas habituales, siempre que $g$ y $h$ sean derivables.

Primero:

$$
\\lim_{x\\to a^-}g(x)=h(a)=\\lim_{x\\to a^+}h(x).
$$

Después:

$$
g'(a)=h'(a).
$$

La primera ecuación ajusta alturas; la segunda ajusta pendientes.

## Ejemplo con dos parámetros

Sea:

$$
f(x)=
\\begin{cases}
x^2+bx,&x<1,\\\\
ax+2,&x\\geq1.
\\end{cases}
$$

Continuidad en $x=1$:

$$
1+b=a+2.
$$

Derivadas laterales:

$$
f'_-(1)=2+b,
\\qquad
f'_+(1)=a.
$$

Por derivabilidad:

$$
2+b=a.
$$

Al comparar con $1+b=a+2$, se obtiene una contradicción. No existen valores de $a$ y $b$ que hagan derivable esta función tal como está definida. Detectar incompatibilidad también es una solución matemática; no se deben forzar parámetros.

## Un ejemplo compatible

Si el segundo tramo fuera $ax-1$, la continuidad daría:

$$
1+b=a-1,
$$

y la derivabilidad, $2+b=a$. Ambas ecuaciones son equivalentes, por lo que hay infinitas parejas relacionadas por $a=b+2$. El problema podría añadir otra condición, como que la tangente tenga pendiente 5, para obtener $a=5$ y $b=3$.

## Recta tangente y normal

Si $f$ es derivable en $x_0$:

$$
y-f(x_0)=f'(x_0)(x-x_0).
$$

La normal, si $f'(x_0)\\neq0$, tiene pendiente:

$$
m_n=-\\frac1{f'(x_0)}.
$$

No se puede escribir una tangente usando solo la derivada: también hace falta el punto. Si la derivada es cero, la tangente es horizontal y la normal es vertical.

## Valor absoluto y puntos angulosos

$f(x)=|x|$ es continua en 0, pero:

$$
f'_-(0)=-1,
\\qquad
f'_+(0)=1.
$$

Por tanto, no es derivable. Este ejemplo demuestra que continuidad no implica derivabilidad. Una cúspide, un punto anguloso o una tangente vertical requieren examinar el cociente incremental, no solo una gráfica aproximada.

## Relación con crecimiento y extremos

Una vez determinada la derivabilidad, el signo de $f'$ estudia crecimiento y decrecimiento. Un punto con $f'(a)=0$ es candidato a extremo, pero puede ser un punto de inflexión horizontal. Hay que comprobar cambio de signo o utilizar información de derivadas superiores.

## Errores frecuentes

- Igualar derivadas antes de imponer continuidad.
- Usar $g(a)$ cuando el tramo izquierdo no incluye $a$ sin hablar de límite.
- Resolver parámetros y no sustituir para comprobar.
- Confundir derivada cero con máximo seguro.
- Escribir la tangente sin calcular $f(x_0)$.

## Ampliar el clúster de mayor demanda

Las consultas sobre derivadas concentran la mayor visibilidad orgánica actual de la web. Este artículo cubre una intención más avanzada y específica, mientras el campus virtual convierte esa entrada en un recorrido de continuidad, derivadas, representación y optimización. Incluye teoría, ejercicios escalonados y modelos PAU; el botón de contacto permite acceder al itinerario completo.
`,ln=`---
title: "Geometría métrica PAU: distancias, ángulos y posiciones relativas sin memorizar fórmulas sueltas"
seoTitle: "Geometría métrica PAU: distancias y ángulos"
date: "2026-09-10"
updated: "2026-09-10"
description: "Domina geometría métrica en Matemáticas II PAU: punto, recta, plano, distancias, ángulos, proyecciones y posiciones relativas."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "pau-matematicas-ii-vectores-rectas-planos,pau-matematicas-sistemas-parametro-rouche-frobenius,pau-matematicas-matrices-determinantes-gauss"
image: "/assets/latex/metric-geometry-distance.svg"
---

Las fórmulas de distancia en el espacio dejan de parecer arbitrarias cuando se identifica la dirección perpendicular adecuada. La geometría métrica se reduce a vectores directores, vectores normales, productos escalares y proyecciones.

> **Respuesta directa.** Antes de calcular, clasifica los objetos y su posición relativa. La distancia mínima siempre se mide en dirección perpendicular: al plano mediante su normal; a una recta mediante una proyección o un producto vectorial. Los ángulos se obtienen comparando direcciones relevantes.

![Proyección perpendicular de un punto sobre un plano y fórmula de distancia](/assets/latex/metric-geometry-distance.svg)

## Datos geométricos esenciales

Una recta puede escribirse:

$$
r:\\ \\vec x=\\vec p+\\lambda\\vec v,
$$

donde $\\vec v$ es vector director.

Un plano:

$$
\\pi:\\ Ax+By+Cz+D=0
$$

tiene vector normal $\\vec n=(A,B,C)$. El producto escalar permite comprobar perpendicularidad:

$$
\\vec v\\cdot\\vec n=0
$$

si la recta es paralela al plano.

## Distancia de un punto a un plano

Para $P(x_0,y_0,z_0)$:

$$
d(P,\\pi)=
\\frac{|Ax_0+By_0+Cz_0+D|}
{\\sqrt{A^2+B^2+C^2}}.
$$

El numerador evalúa la ecuación del plano en el punto; el denominador normaliza la longitud de $\\vec n$. El valor absoluto garantiza una distancia no negativa.

### Ejemplo

Para $P(1,2,-1)$ y $\\pi:2x-y+2z-3=0$:

$$
d=\\frac{|2-2-2-3|}{\\sqrt{4+1+4}}
=\\frac5{3}.
$$

La unidad es la de las coordenadas, no “unidades cuadradas”.

## Punto a recta

Si $A$ es un punto de $r$ y $\\vec v$ su director:

$$
d(P,r)=\\frac{|\\overrightarrow{AP}\\times\\vec v|}{|\\vec v|}.
$$

El numerador es el área del paralelogramo y dividir por la base produce su altura. También puede hallarse el pie de la perpendicular imponiendo que $\\overrightarrow{PH}\\cdot\\vec v=0$.

## Distancia entre rectas

- Si se cortan, la distancia es 0.
- Si son paralelas, se reduce a punto–recta.
- Si se cruzan sin cortarse, son rectas reversas y:

$$
d(r,s)=
\\frac{|\\overrightarrow{AB}\\cdot(\\vec u\\times\\vec v)|}
{|\\vec u\\times\\vec v|}.
$$

Antes de usar esta fórmula, comprueba que los directores no son paralelos y que el sistema de intersección es incompatible.

## Ángulos

Entre dos rectas:

$$
\\cos\\theta=
\\frac{|\\vec u\\cdot\\vec v|}{|\\vec u||\\vec v|}.
$$

Entre dos planos se comparan sus normales. Entre recta y plano, si $\\alpha$ es el ángulo agudo:

$$
\\sin\\alpha=
\\frac{|\\vec v\\cdot\\vec n|}{|\\vec v||\\vec n|}.
$$

El seno aparece porque el ángulo recta–plano es complementario al ángulo entre director y normal.

## Proyección y simétrico de un punto

Para proyectar $P$ sobre $\\pi$, construye la recta perpendicular que pasa por $P$ con director $\\vec n$. Su intersección con el plano es el pie $H$. El simétrico respecto al plano cumple:

$$
\\vec{PH'}=2\\vec{PH},
\\qquad
H'=2H-P.
$$

Este procedimiento es más seguro que intentar recordar una fórmula larga de coordenadas.

## Errores frecuentes

- Usar un vector director de la recta como normal del plano sin justificar.
- Olvidar el valor absoluto en una distancia.
- Aplicar la fórmula de rectas reversas a rectas paralelas.
- Confundir ángulo entre recta y plano con ángulo entre director y normal.
- Calcular antes de clasificar la posición relativa.

## De la fórmula al modelo de examen

El campus virtual de Método Nebula conecta vectores, rectas, planos, sistemas y geometría métrica con ejercicios visuales y modelos PAU resueltos. La práctica obliga a justificar cada vector y cada perpendicularidad. El botón de contacto permite acceder al recorrido completo y trabajar los problemas con corrección paso a paso.
`,dn=`---
title: "Matemáticas II PAU: domina vectores, rectas y planos sin memorizar veinte fórmulas"
date: "2026-09-27"
updated: "2026-10-28"
description: "Geometría del espacio para PAU: vectores, rectas, planos, posiciones relativas, distancias, ejemplo y estrategia de examen."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "como-preparar-pau-matematicas-ii,matrices-determinantes-sistemas-ecuaciones-guia,preparar-selectividad-con-calendario"
image: "/assets/latex/vectors-planes.svg"
---

La geometría del espacio se vuelve inabarcable cuando cada tipo de ejercicio se asocia a una fórmula diferente. En realidad, casi todo el bloque se apoya en tres ideas: **dirección, perpendicularidad e intersección**. Las ecuaciones son maneras de hacer visibles esas ideas.

![Plano con vector normal, recta y distancia perpendicular](/assets/latex/vectors-planes.svg)

## Qué información define cada objeto

Una recta queda determinada por un punto $P$ y un vector director $\\vec v$:

$$
r:\\ \\vec x=\\vec P+t\\vec v.
$$

Un plano puede definirse por un punto y dos vectores directores independientes, o por una ecuación:

$$
\\pi:\\ ax+by+cz=d,
$$

cuyo vector normal es $\\vec n=(a,b,c)$.

Antes de operar, escribe qué tienes y qué necesitas. Esta pausa evita construir una forma de la ecuación que luego no sirve para responder.

## El producto escalar traduce perpendicularidad

Dos vectores no nulos son perpendiculares si:

$$
\\vec u\\cdot\\vec v=0.
$$

Por eso un vector normal del plano es perpendicular a todas sus direcciones. Una recta perpendicular a un plano tiene un vector director paralelo al normal del plano.

## El producto vectorial construye normales

Si conoces dos direcciones independientes $\\vec u$ y $\\vec v$ contenidas en un plano, entonces:

$$
\\vec n=\\vec u\\times\\vec v
$$

es perpendicular a ambas. Comprueba después que el punto dado satisface la ecuación obtenida.

## Posiciones relativas: interpreta el sistema

Para recta y plano, sustituye la ecuación paramétrica de la recta en la del plano:

- una solución para $t$: se cortan en un punto;
- ninguna solución: recta paralela y exterior;
- identidad: la recta está contenida en el plano.

No escribas solo “sistema compatible”. Traduce el resultado al dibujo espacial.

## Ejemplo: plano por tres puntos

Sean $A(1,0,0)$, $B(0,1,0)$ y $C(0,0,1)$. Dos direcciones son:

$$
\\overrightarrow{AB}=(-1,1,0),\\qquad \\overrightarrow{AC}=(-1,0,1).
$$

Un vector normal es:

$$
\\overrightarrow{AB}\\times\\overrightarrow{AC}=(1,1,1).
$$

Usando el punto $A$:

$$
(1,1,1)\\cdot(x-1,y,z)=0,
$$

de donde:

$$
x+y+z=1.
$$

Comprobación: los tres puntos satisfacen la ecuación.

## Distancias: identifica primero los objetos

La distancia de un punto $P(x_0,y_0,z_0)$ al plano $ax+by+cz+d=0$ es:

$$
d(P,\\pi)=\\frac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}.
$$

Pero no uses esta fórmula para cualquier distancia. Punto–recta, rectas paralelas o rectas que se cruzan requieren construcciones distintas. Pregunta primero cuál es el segmento perpendicular más corto.

## Procedimiento de examen

1. Haz un boceto y nombra objetos.
2. Extrae puntos, directores y normales.
3. Traduce la condición: paralelo, perpendicular, pertenece o corta.
4. Elige la representación que haga esa condición más sencilla.
5. Resuelve y comprueba sustituyendo o usando un producto escalar.

## Errores frecuentes

- Usar dos vectores dependientes para definir un plano.
- Confundir vector normal y vector director.
- Hallar un punto de corte y no comprobarlo.
- Calcular una distancia sin valor absoluto.
- Clasificar un sistema sin interpretar la geometría.
- Perder signos al construir vectores entre puntos.

## Práctica recomendada

Alterna ejercicios de construcción, posición relativa, ángulos y distancias. Luego resuelve una pregunta que combine dos partes: por ejemplo, hallar un plano y medir una distancia. Finalmente incluye el bloque en un modelo PAU con tiempo real.

El campus virtual de Método Nebula desarrolla Matemáticas II desde vectores y sistemas hasta rectas, planos y geometría métrica, con ejemplos y preguntas de examen. Si quieres ordenar este bloque según los errores que realmente cometes, el botón de contacto permite iniciar el diagnóstico.
`,un=`---
title: "Integrales en Matemáticas II PAU: áreas, signos y primitivas con un método que se puede comprobar"
seoTitle: "Integrales PAU: áreas, signos y ejercicios resueltos"
date: "2026-10-14"
updated: "2026-10-14"
description: "Resuelve integrales y áreas en Matemáticas II PAU: primitivas, puntos de corte, cambios de signo, planteamiento y comprobaciones."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "area-entre-dos-curvas-ejercicios-resueltos,integracion-por-partes-formula-ejercicios-resueltos,como-preparar-pau-matematicas-ii"
image: "/assets/latex/integral-area.svg"
---

En PAU, el cálculo de una primitiva suele ser solo una parte del ejercicio. Los puntos decisivos están antes: interpretar la región, encontrar cortes y decidir dónde cambia el signo.

> **Respuesta directa.** Para calcular un área, dibuja o estudia las funciones, encuentra intersecciones, divide donde cambie el orden y suma integrales no negativas. Una integral definida con signo no siempre coincide con el área geométrica.

![Área acumulada bajo una curva entre dos límites](/assets/latex/integral-area.svg)

## Integral definida y área

$$
\\int_a^b f(x)\\,dx
$$

representa área con signo. Si $f<0$, la contribución es negativa. El área respecto al eje es:

$$
A=\\int_a^b|f(x)|\\,dx,
$$

que se calcula separando en los ceros.

Entre dos curvas:

$$
A=\\int_a^b\\bigl(y_{\\rm superior}-y_{\\rm inferior}\\bigr)\\,dx.
$$

## Ejemplo resuelto

Calcula el área entre $y=2x$ y $y=x^2$.

Intersecciones:

$$
x^2=2x\\Rightarrow x=0,\\ 2.
$$

En $(0,2)$, $2x>x^2$:

$$
A=\\int_0^2(2x-x^2)\\,dx
=\\left[x^2-\\frac{x^3}{3}\\right]_0^2
=4-\\frac83=\\frac43.
$$

El resultado es positivo y compatible con la escala de la región.

## Elegir técnica de integración

- Composición con derivada interior: sustitución.
- Producto que mejora al derivar un factor: partes.
- Cociente racional: división y fracciones parciales cuando proceda.
- Funciones elementales: tabla de primitivas.

La técnica se decide por estructura, no por la apariencia de dificultad.

## Condiciones con una función integral

Si:

$$
F(x)=\\int_a^x f(t)\\,dt,
$$

entonces:

$$
F'(x)=f(x).
$$

Los máximos y mínimos de $F$ se estudian con el signo de $f$, no integrando de nuevo.

## Área cuando la curva cambia de signo

Considera $f(x)=x^2-1$ entre $x=-2$ y $x=2$. Sus ceros son $-1$ y $1$. La función es positiva en los extremos y negativa en el intervalo central, de modo que el área exige tres tramos:

$$
A=\\int_{-2}^{-1}(x^2-1)\\,dx
-\\int_{-1}^{1}(x^2-1)\\,dx
+\\int_{1}^{2}(x^2-1)\\,dx.
$$

Por simetría par:

$$
A=2\\int_1^2(x^2-1)\\,dx+2\\int_0^1(1-x^2)\\,dx=4.
$$

En cambio, la integral con signo sobre $[-2,2]$ vale $4/3$. La diferencia no es de cálculo, sino de interpretación geométrica.

## Parámetros determinados por una integral

Si una función $f(x)=kx$ debe encerrar área 6 con el eje entre 0 y 3:

$$
\\int_0^3kx\\,dx=\\frac{9k}{2}=6
\\Rightarrow k=\\frac43.
$$

Antes de igualar a un área positiva, debe verificarse el signo de $f$ en el intervalo. En problemas con parámetros, los puntos de corte pueden depender del propio parámetro; resolverlos al principio evita integrar sobre una región equivocada.

Una buena presentación incluye ecuación de cortes, orden de las funciones, integral planteada y valor exacto. La calculadora puede comprobar un decimal, pero no sustituye la justificación de la región.

## Método PAU

1. Representa lo imprescindible.
2. Calcula cortes y ceros.
3. Ordena funciones por intervalos.
4. Escribe la integral antes de hallar primitivas.
5. Evalúa con paréntesis.
6. Comprueba signo y magnitud.

## Errores frecuentes

- Integrar superior menos inferior sin verificar el orden.
- Olvidar dividir cuando hay cruces.
- Confundir primitiva con integral definida.
- Omitir la constante en una integral indefinida.
- Perder signos al evaluar el extremo inferior.

El campus de Método Nebula incluye teoría, métodos de integración, áreas y modelos PAU resueltos paso a paso. Contacta para organizar el bloque según tu comunidad y nota objetivo.
`,mn=`---
title: "Límites y asíntotas en Matemáticas II PAU: cómo decidir el método antes de calcular"
seoTitle: "Límites y asíntotas PAU: método paso a paso"
date: "2026-09-18"
updated: "2026-09-18"
description: "Resuelve límites y asíntotas en Matemáticas II PAU: indeterminaciones, equivalencias, racionalización, laterales y representación."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "como-resolver-limites-indeterminaciones-ejercicios,continuidad-derivabilidad-diferencias-problemas,como-preparar-pau-matematicas-ii"
image: "/assets/latex/limit-asymptote.svg"
---

Una asíntota no se encuentra dibujando una línea que “parece cercana”. Se demuestra con límites. El orden eficaz es siempre el mismo: identificar el punto, sustituir, clasificar la indeterminación y elegir una transformación que conserve el límite.

> **Respuesta directa.** Los límites laterales detectan asíntotas verticales; el límite en infinito determina asíntota horizontal; si la función menos una recta tiende a cero, existe asíntota oblicua. Antes de usar L’Hôpital, factoriza, racionaliza o compara grados cuando sea más directo.

![Función racional con asíntotas vertical y horizontal](/assets/latex/limit-asymptote.svg)

## Sustituir primero

La sustitución puede dar:

- un número real: el límite ya está resuelto;
- infinito con signo: estudia comportamiento lateral;
- una forma indeterminada como $0/0$, $\\infty/\\infty$, $0\\cdot\\infty$ o $\\infty-\\infty$.

Una indeterminación no es el resultado. Solo indica que la expresión debe transformarse.

## Factorización en un límite finito

$$
\\lim_{x\\to2}\\frac{x^2-4}{x-2}
=\\lim_{x\\to2}\\frac{(x-2)(x+2)}{x-2}=4.
$$

La simplificación es válida para $x\\neq2$, precisamente los valores que intervienen al aproximarse. No demuestra que la función original esté definida en 2; demuestra que el límite existe.

## Racionalización

Para:

$$
\\lim_{x\\to0}\\frac{\\sqrt{1+x}-1}{x},
$$

multiplica por el conjugado:

$$
\\frac{\\sqrt{1+x}-1}{x}
\\frac{\\sqrt{1+x}+1}{\\sqrt{1+x}+1}
=\\frac1{\\sqrt{1+x}+1}\\to\\frac12.
$$

El conjugado elimina una diferencia de radicales, no es una receta para cualquier raíz.

## Asíntotas verticales

$x=a$ es asíntota vertical si al menos uno de los límites laterales es infinito:

$$
\\lim_{x\\to a^-}f(x)=\\pm\\infty
\\quad\\text{o}\\quad
\\lim_{x\\to a^+}f(x)=\\pm\\infty.
$$

En $f(x)=(2x+1)/(x-2)$, el denominador cambia de signo alrededor de 2 mientras el numerador es positivo. Por tanto, un lateral tiende a $-\\infty$ y el otro a $+\\infty$. Una tabla de signos pequeña evita adivinar.

## Horizontales y oblicuas

Si:

$$
\\lim_{x\\to\\pm\\infty}f(x)=L,
$$

entonces $y=L$ es asíntota horizontal en esa dirección.

Para una oblicua $y=mx+n$:

$$
m=\\lim_{x\\to\\infty}\\frac{f(x)}x,
\\qquad
n=\\lim_{x\\to\\infty}[f(x)-mx],
$$

con $m$ finito y no nulo. En funciones racionales, dividir polinomios suele ser más transparente que memorizar diferencias de grados.

## Equivalencias y L’Hôpital

Cerca de cero:

$$
\\sin x\\sim x,\\qquad e^x-1\\sim x,\\qquad \\ln(1+x)\\sim x.
$$

Las equivalencias se usan en productos y cocientes dentro de su contexto, no sustituyendo términos de una suma sin controlar el error. L’Hôpital se reserva para cocientes $0/0$ o $\\infty/\\infty$ cuando las hipótesis se cumplen; derivar numerador y denominador no es una operación algebraica general.

## Cómo entra en el estudio de una función

Los límites determinan dominio extendido, ramas y asíntotas. Después se combinan con signo, derivadas y puntos notables. Una representación coherente debe acercarse a cada asíntota por el lado que indican los límites y respetar crecimiento y extremos.

## Errores frecuentes

- Escribir $0/0=0$.
- Afirmar que todo cero del denominador genera asíntota vertical.
- Calcular una horizontal solo en $+\\infty$.
- Confundir una discontinuidad evitable con una asíntota.
- Aplicar L’Hôpital antes de verificar la indeterminación.

## Aprovechar el clúster que ya funciona

Los límites y las derivadas son ya una de las puertas de entrada orgánica más fuertes de Método Nebula. En el campus virtual, esta explicación se conecta con continuidad, representación, derivabilidad e integrales mediante ejercicios graduados y modelos PAU. El botón de contacto permite pasar de artículos sueltos a un itinerario completo con exámenes resueltos.
`,pn=`---
title: "Matrices y determinantes en PAU: cuándo usar inversa, Gauss o propiedades sin hacer cuentas de más"
date: "2026-10-25"
updated: "2026-10-25"
description: "Estrategia de Matemáticas II PAU para elegir entre matriz inversa, Gauss, determinantes y rangos con ejemplos y comprobaciones."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "pau-matematicas-sistemas-parametro-rouche-frobenius,matrices-determinantes-sistemas-ecuaciones-guia"
image: "/assets/latex/matrix-method-map.svg"
---

En álgebra matricial, saber calcular no basta. Un ejercicio puede resolverse por inversa, Gauss o determinantes, pero no todos los caminos cuestan lo mismo ni explican lo mismo. La primera decisión debe ser: **¿quiero resolver, clasificar, demostrar invertibilidad o simplificar una expresión?**

![Mapa de decisión entre matriz inversa y eliminación de Gauss según el determinante y la tarea](/assets/latex/matrix-method-map.svg)

## Producto de matrices: el orden importa

Si $A$ es $m\\times n$ y $B$ es $n\\times p$, entonces $AB$ existe y es $m\\times p$. En general:

$$
AB\\ne BA.
$$

Incluso puede existir $AB$ y no existir $BA$. Antes de multiplicar, escribe dimensiones. Esta comprobación evita desarrollar productos imposibles.

## Inversa y determinante

Una matriz cuadrada $A$ es invertible si y solo si:

$$
\\det A\\ne0.
$$

Para una matriz $2\\times2$:

$$
A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix},\\qquad
A^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}.
$$

El denominador muestra por qué $\\det A=0$ impide la inversa.

## Resolver $AX=B$ con inversa

Si $A$ es invertible:

$$
AX=B.
$$

Multiplicamos por $A^{-1}$ a la izquierda:

$$
A^{-1}AX=A^{-1}B,
$$

$$
X=A^{-1}B.
$$

El lado importa. En matrices no se puede cambiar el orden como si fueran números.

## Cuándo Gauss es mejor

La eliminación de Gauss es preferible cuando:

- El sistema no es cuadrado.
- Hay que clasificarlo.
- Aparecen parámetros.
- La matriz puede no ser invertible.
- Se busca el rango.

Las operaciones elementales por filas conservan el conjunto de soluciones del sistema. El objetivo es producir ceros de manera estratégica, no aplicar operaciones al azar.

## Ejemplo breve por Gauss

$$
\\begin{cases}
x+y+z=6,\\\\
2x-y+z=3,\\\\
x+2y-z=2.
\\end{cases}
$$

La ampliada es:

$$
\\left(\\begin{array}{ccc|c}
1&1&1&6\\\\
2&-1&1&3\\\\
1&2&-1&2
\\end{array}\\right).
$$

Aplicamos $F_2\\leftarrow F_2-2F_1$ y $F_3\\leftarrow F_3-F_1$:

$$
\\left(\\begin{array}{ccc|c}
1&1&1&6\\\\
0&-3&-1&-9\\\\
0&1&-2&-4
\\end{array}\\right).
$$

Intercambiar las dos últimas filas facilita el pivote. Continuando se obtiene $z=3$, $y=2$, $x=1$. Sustituir en las tres ecuaciones verifica la solución.

## Propiedades de determinantes que ahorran tiempo

- Intercambiar dos filas cambia el signo.
- Multiplicar una fila por $k$ multiplica el determinante por $k$.
- Sumar a una fila un múltiplo de otra no cambia el determinante.
- Una matriz triangular tiene determinante igual al producto de la diagonal.
- Si dos filas son proporcionales, el determinante es cero.

En un determinante grande, crear ceros mediante propiedades suele ser más seguro que expandir directamente por cofactores.

## Rango: cuánta información independiente queda

El rango es el número de filas no nulas tras escalonar, o el orden máximo de un menor no nulo. No cuenta filas escritas, sino ecuaciones independientes. Esta idea conecta matrices, sistemas y geometría.

## Errores frecuentes

- Suponer que $A^{-1}B=BA^{-1}$.
- Calcular una inversa sin comprobar el determinante.
- Hacer una operación de columna en la matriz ampliada de un sistema como si fuera una operación de ecuaciones.
- Perder el cambio de signo al intercambiar filas en un determinante.
- Confundir matriz nula con determinante cero.
- Resolver por Cramer un sistema cuya matriz no es invertible.

## Criterio de elección

Inversa para despejar una ecuación matricial invertible; Gauss para sistemas y rangos; determinantes para invertibilidad, parámetros y simplificación; Cramer para sistemas pequeños cuando se pide explícitamente o resulta muy directo.

El campus virtual de Método Nebula desarrolla matrices, determinantes, rango, inversa, Gauss, Cramer y sistemas con parámetros mediante teoría y ejercicios PAU. El botón de contacto permite solicitar una ruta para elegir el método con criterio y justificar cada operación.
`,$n=`---
title: "Probabilidad y distribuciones en PAU: aprende a elegir el modelo antes de calcular"
date: "2026-10-17"
updated: "2026-10-28"
description: "Probabilidad para Matemáticas II PAU: sucesos, binomial, normal, tipificación, ejemplos, comprobaciones y errores frecuentes."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "probabilidad-condicionada-bayes-problemas-resueltos,como-preparar-pau-matematicas-ii"
image: "/assets/latex/normal-distribution.svg"
---

La calculadora puede devolver ocho decimales y aun así responder a otro problema. En probabilidad PAU, la decisión más importante ocurre antes: definir la variable, traducir el suceso y justificar el modelo.

![Distribución normal con la zona central sombreada y una secuencia de comprobación](/assets/latex/normal-distribution.svg)

## Escribe el suceso antes de operar

“Al menos 3” significa $X\\ge3$; “más de 3”, $X>3$; “como máximo 3”, $X\\le3$. Una diferencia de una unidad cambia la probabilidad. Anota la desigualdad y, si la variable es discreta, los valores incluidos.

## Probabilidad condicionada

La probabilidad de $A$ sabiendo $B$ es:

$$
P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)},\\qquad P(B)>0.
$$

Condicionar cambia el universo de referencia. Independencia significa $P(A\\cap B)=P(A)P(B)$, no que los sucesos sean incompatibles. Sucesos incompatibles con probabilidad positiva no son independientes.

## Cuándo usar una binomial

Comprueba cuatro condiciones:

1. número fijo de ensayos $n$;
2. dos resultados relevantes por ensayo;
3. probabilidad de éxito $p$ constante;
4. independencia razonable.

Entonces $X\\sim B(n,p)$ y:

$$
P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}.
$$

La media es $np$ y la varianza $np(1-p)$.

## Ejemplo binomial

Una prueba se supera con probabilidad 0,7 y se realizan 5 intentos independientes. La probabilidad de exactamente 4 éxitos es:

$$
P(X=4)=\\binom54(0.7)^4(0.3)\\approx0.36015.
$$

Para “al menos 4” debes añadir $P(X=5)$; para “al menos uno” suele ser más rápido usar el complemento $1-P(X=0)$.

## Distribución normal

Si $X\\sim N(\\mu,\\sigma)$, estandariza mediante:

$$
Z=\\frac{X-\\mu}{\\sigma}.
$$

Antes de usar una tabla o calculadora, dibuja la campana y sombrea la zona. El dibujo anticipa si el resultado debe ser menor o mayor que 0,5 y evita restas invertidas.

## Ejemplo normal

Las puntuaciones siguen $N(70,10)$, donde 10 es la desviación típica. Para $P(X>85)$:

$$
z=\\frac{85-70}{10}=1.5.
$$

Entonces:

$$
P(X>85)=P(Z>1.5)\\approx0.0668.
$$

Tiene sentido: 85 está 1,5 desviaciones por encima de la media, así que la cola debe ser pequeña.

## Aproximación normal a binomial

Cuando el temario lo incluya y las condiciones sean adecuadas, recuerda la corrección por continuidad. Por ejemplo, $P(X\\le20)$ se aproxima con $P(Y<20.5)$. Justifica la aproximación según el criterio enseñado en tu comunidad.

## Errores frecuentes

- Usar binomial sin comprobar independencia o $p$ constante.
- Confundir desviación típica y varianza.
- Traducir mal “al menos” y “más de”.
- Olvidar el complemento.
- Estandarizar con el signo invertido.
- Obtener una probabilidad fuera de $[0,1]$ y no revisarla.

## Rutina PAU

Variable → modelo → suceso → cálculo → comprobación → frase final. Escribe las seis etapas incluso cuando la calculadora haga la operación central. El corrector debe ver por qué ese resultado responde a esa pregunta.

El campus virtual de Método Nebula desarrolla probabilidad, distribuciones y preparación de examen con teoría, ejemplos, ejercicios y simulación. Si quieres identificar si pierdes puntos por modelo, lenguaje o cálculo, utiliza el botón de contacto.
`,gn=`---
title: "Sistemas con parámetro en PAU: Rouché–Frobenius, rangos y casos sin improvisar"
date: "2026-10-10"
updated: "2026-10-10"
description: "Discute sistemas con parámetro en Matemáticas II PAU usando rangos, valores críticos, Rouché–Frobenius y resolución por casos."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "pau-matematicas-ii-vectores-rectas-planos,matrices-determinantes-sistemas-ecuaciones-guia"
image: "/assets/latex/rank-decision.svg"
---

En un sistema con parámetro, resolver directamente para un valor genérico puede ocultar justo los casos que más puntúan. El objetivo no es encontrar $x,y,z$ cuanto antes, sino **determinar cuándo cambia el rango y clasificar el sistema en cada caso**.

![Árbol de decisión del teorema de Rouché–Frobenius mediante los rangos de A y la ampliada](/assets/latex/rank-decision.svg)

## El teorema que organiza la discusión

Para un sistema $AX=B$ con $n$ incógnitas:

- Si $\\operatorname{rg}(A)=\\operatorname{rg}(A^*)=n$, es compatible determinado: una solución.
- Si $\\operatorname{rg}(A)=\\operatorname{rg}(A^*)<n$, es compatible indeterminado: infinitas soluciones.
- Si $\\operatorname{rg}(A)\\ne\\operatorname{rg}(A^*)$, es incompatible: ninguna solución.

$A^*$ es la matriz ampliada, que añade a $A$ la columna de términos independientes.

## Por qué buscar valores críticos

Si $A$ es cuadrada y $\\det A\\ne0$, su rango es $n$ y el sistema tiene solución única. Por tanto, los valores especiales solo pueden aparecer cuando:

$$
\\det A=0.
$$

Resolver esa ecuación produce los valores críticos del parámetro. Para todos los demás, la discusión queda cerrada de una vez.

## Ejemplo completo

Considera:

$$
\\begin{cases}
x+y+z=1,\\\\
x+ay+z=2,\\\\
x+y+az=2.
\\end{cases}
$$

La matriz de coeficientes es:

$$
A=\\begin{pmatrix}
1&1&1\\\\
1&a&1\\\\
1&1&a
\\end{pmatrix}.
$$

Restando la primera fila a la segunda y a la tercera, el determinante se simplifica:

$$
\\det A=(a-1)^2.
$$

Si $a\\ne1$, el determinante no es cero y existe una única solución.

Si $a=1$, las tres filas de $A$ son iguales, de modo que $\\operatorname{rg}(A)=1$. Sin embargo, la ampliada contiene filas equivalentes a:

$$
(1,1,1\\mid1),\\qquad(1,1,1\\mid2).
$$

Al restarlas aparece:

$$
(0,0,0\\mid1),
$$

que representa $0=1$. Entonces $\\operatorname{rg}(A^*)=2$ y el sistema es incompatible para $a=1$.

La discusión final debe escribirse de forma explícita:

$$
\\begin{cases}
a\\ne1: & \\text{SCD},\\\\
a=1: & \\text{SI}.
\\end{cases}
$$

## Si el sistema es compatible indeterminado

Cuando los rangos coinciden pero son menores que $n$, el número de parámetros libres es:

$$
n-\\operatorname{rg}(A).
$$

Después de discutir, usa Gauss, elige las variables libres y expresa las restantes en función de ellas. “Infinitas soluciones” no sustituye a la parametrización si el ejercicio pide resolver.

## Determinante y Gauss cumplen funciones distintas

El determinante localiza rápidamente valores que pueden cambiar la clasificación. Gauss permite calcular rangos, detectar contradicciones y obtener soluciones. Un desarrollo eficaz los combina; no intenta forzar un único método para todo.

## Qué significa geométricamente la clasificación

En tres incógnitas, cada ecuación lineal representa un plano. Un SCD corresponde normalmente a tres planos que comparten un único punto. En un SCI pueden compartir una recta, coincidir o contener una familia común de puntos. En un sistema incompatible no existe ningún punto que pertenezca simultáneamente a todos.

El parámetro modifica la posición relativa de esos planos. Por eso un valor crítico no es una anomalía algebraica: es el instante en que una ecuación deja de aportar una dirección independiente o aparece una contradicción. El rango mide precisamente cuántas restricciones independientes permanecen.

Esta interpretación ayuda a revisar el resultado. Si el sistema tiene tres incógnitas y rango dos, una única variable libre produce una recta de soluciones; si el rango es uno, deben aparecer dos parámetros libres.

## Errores frecuentes

- Dividir por una expresión con el parámetro sin separar el caso en que vale cero.
- Calcular solo $\\operatorname{rg}(A)$ y olvidar la ampliada.
- Concluir SCI únicamente porque $\\det A=0$.
- Sustituir el valor crítico en el determinante pero no en el sistema.
- Dar casos sin justificar los rangos.
- Confundir número de ecuaciones con rango.

## Plantilla de examen

La discusión completa sigue una estructura verificable: matriz $A$ y ampliada → determinante o menores → valores críticos → caso general → sustitución de cada valor crítico → rangos → clasificación → resolución. Esta secuencia separa la justificación algebraica de la obtención posterior de soluciones.

El campus virtual de Método Nebula desarrolla matrices, determinantes, Gauss, Rouché–Frobenius y discusión con parámetros mediante teoría y problemas PAU graduados. El botón de contacto permite solicitar una ruta para construir discusiones completas y verificables.
`,fn=`---
title: "Química PAU: domina ácido-base y pH con un método que ordena cualquier ejercicio"
date: "2026-10-02"
updated: "2026-10-28"
description: "Ácido-base y pH para Química PAU: especies, fuertes y débiles, neutralización, valoración, ejemplo y errores frecuentes."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-quimica-equilibrio-quimico-estudiar,preparar-selectividad-con-calendario"
image: "/assets/latex/titration-curve.svg"
---

En ácido-base, la calculadora suele aparecer demasiado pronto. El pH es el último resultado de una cadena: identificar especies, escribir la reacción, decidir si hay estequiometría o equilibrio y obtener la concentración relevante. Si esos pasos se invierten, el logaritmo solo oculta el error.

![Curva de valoración con zona tampón y punto de equivalencia](/assets/latex/titration-curve.svg)

## Brønsted–Lowry: empieza por los protones

Un ácido dona protones y una base los acepta. En:

$$
\\mathrm{HA+H_2O\\rightleftharpoons A^-+H_3O^+},
$$

$HA/A^-$ y $H_2O/H_3O^+$ son pares conjugados. Identificarlos ayuda a predecir reacciones y a entender sales, hidrólisis y disoluciones tampón.

## Fuerte no significa concentrado

“Fuerte” describe el grado de ionización; “concentrado” describe cuánta sustancia hay por volumen. Un ácido fuerte puede estar muy diluido y uno débil puede estar concentrado. Confundir ambas ideas conduce a conclusiones incorrectas sobre pH y conductividad.

## La ruta de decisión

1. Identifica todas las especies y cantidades.
2. Si se mezclan ácido y base, resuelve primero la neutralización.
3. Determina qué especie queda después de la reacción.
4. Decide si la concentración de $H_3O^+$ u $OH^-$ es directa o procede de un equilibrio.
5. Calcula pH o pOH y comprueba el orden de magnitud.

## Ejemplo: ácido fuerte

Para una disolución ideal de HCl $2.0\\times10^{-3}$ mol/L, suponiendo disociación completa:

$$
[H_3O^+]=2.0\\times10^{-3}\\ \\mathrm{mol/L}.
$$

Entonces:

$$
pH=-\\log(2.0\\times10^{-3})\\approx2.70.
$$

La respuesta debe ser ácida y coherente con una concentración milimolar.

## Ejemplo: neutralización antes del pH

Se mezclan 25,0 mL de HCl 0,100 M y 20,0 mL de NaOH 0,100 M.

Moles de ácido: $0.0250\\cdot0.100=2.50\\times10^{-3}$ mol.

Moles de base: $0.0200\\cdot0.100=2.00\\times10^{-3}$ mol.

Queda un exceso de $5.0\\times10^{-4}$ mol de ácido en 45,0 mL:

$$
[H_3O^+]=\\frac{5.0\\times10^{-4}}{0.0450}=1.11\\times10^{-2}\\ \\mathrm{M}.
$$

Por tanto, $pH\\approx1.95$. Promediar concentraciones habría dado una respuesta sin fundamento.

## Ácidos débiles y equilibrio

Para un ácido débil, plantea:

$$
K_a=\\frac{[A^-][H_3O^+]}{[HA]}.
$$

Usa una tabla de equilibrio, resuelve la incógnita y comprueba si cualquier aproximación realizada es consistente. No apliques automáticamente $[H_3O^+]=c_0$.

## Valoraciones: interpreta la curva

Antes del punto de equivalencia puede existir exceso de reactivo o zona tampón, según los reactivos. En equivalencia, los moles han reaccionado en la proporción estequiométrica, pero el pH no tiene por qué ser 7 si intervienen especies débiles. Después de equivalencia domina el reactivo añadido en exceso.

El indicador debe cambiar de color dentro del salto de pH relevante, no simplemente “cerca de 7”.

## Errores frecuentes

- Calcular pH antes de resolver la neutralización.
- Confundir volumen en mL con litros al hallar moles.
- Suponer que equivalencia implica siempre pH 7.
- Tratar un ácido débil como completamente disociado.
- Olvidar el volumen total después de mezclar.
- Entregar un pH incompatible con la especie que queda en exceso.

## Práctica inteligente

Alterna un ácido fuerte, uno débil, una neutralización y una valoración. En cada ejercicio escribe la ruta antes de calcular. Después mezcla ácido-base con equilibrio y estequiometría, como ocurre en preguntas de PAU.

El campus virtual de Método Nebula desarrolla ácido-base desde especies y equilibrio hasta valoraciones y preguntas de examen, con ejemplos, ejercicios y errores comunes. Si quieres saber qué parte de la cadena falla y practicarla en orden, utiliza el botón de contacto.
`,xn=`---
title: "Enlace químico PAU: geometría molecular, polaridad y fuerzas intermoleculares con una sola lógica"
seoTitle: "Enlace químico PAU: geometría, polaridad y fuerzas"
date: "2026-09-25"
updated: "2026-09-25"
description: "Domina enlace químico PAU: Lewis, geometría VSEPR, polaridad, hibridación, fuerzas intermoleculares y propiedades."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-quimica-estructura-atomica-configuracion,bachillerato-quimica-periodicidad-configuracion,pau-quimica-organica-mapa-reacciones"
image: "/assets/latex/molecular-geometry-vsepr.svg"
---

Los ejercicios de enlace químico parecen una lista de excepciones cuando se intenta adivinar la polaridad o el punto de ebullición. En realidad, existe una cadena de razonamiento: electrones de valencia, estructura de Lewis, geometría, polaridad, fuerzas y propiedad macroscópica.

> **Respuesta directa.** Dibuja Lewis, cuenta regiones electrónicas alrededor del átomo central, aplica repulsión de pares y analiza si los dipolos de enlace se cancelan. Después identifica las fuerzas entre partículas; no confundas un enlace covalente dentro de una molécula con una fuerza intermolecular.

![Geometrías ideales AX2, AX3 y AX4 con sus ángulos](/assets/latex/molecular-geometry-vsepr.svg)

## Primero: estructura de Lewis

1. Suma electrones de valencia y ajusta por la carga.
2. Elige átomo central, normalmente el menos electronegativo salvo hidrógeno.
3. Une con enlaces sencillos.
4. Completa octetos externos.
5. Coloca electrones restantes en el átomo central.
6. Si falta octeto, forma enlaces múltiples y compara cargas formales.

La carga formal puede calcularse como:

$$
CF=V-N-\\frac{B}{2},
$$

donde $V$ son electrones de valencia, $N$ no enlazantes y $B$ electrones compartidos.

## Geometría mediante VSEPR

Cada enlace sencillo, doble o triple cuenta como una región electrónica. Los pares libres también cuentan y repelen con mayor intensidad:

$$
\\text{par libre–par libre}>\\text{par libre–enlace}>\\text{enlace–enlace}.
$$

- $AX_2$: lineal, $180^\\circ$.
- $AX_3$: trigonal plana, $120^\\circ$.
- $AX_4$: tetraédrica, aproximadamente $109.5^\\circ$.

En $NH_3$ hay cuatro regiones, pero una es un par libre: la geometría molecular es piramidal trigonal y el ángulo disminuye respecto al tetraédrico ideal. En $H_2O$, dos pares libres producen geometría angular.

## Polaridad: enlace y molécula no son lo mismo

Un enlace es polar si existe diferencia de electronegatividad. La molécula será polar solo si la suma vectorial de sus dipolos no se cancela.

$CO_2$ contiene enlaces polares, pero su geometría lineal y simétrica cancela los dipolos. $H_2O$ es angular y los dipolos no se cancelan, por lo que es polar. La frase “tiene enlaces polares, luego es polar” está incompleta.

## Fuerzas intermoleculares

- **Dispersión de London:** existe entre todas las partículas y aumenta con polarizabilidad y superficie de contacto.
- **Dipolo–dipolo:** aparece entre moléculas polares.
- **Puente de hidrógeno:** requiere H enlazado a N, O o F y un par libre disponible en otra partícula.

Romper fuerzas intermoleculares cambia el estado físico; romper enlaces intramoleculares cambia la identidad química. Al hervir agua no se rompen enlaces O–H, se vencen interacciones entre moléculas.

## Ejemplo comparativo

$CH_4$ y $NH_3$ tienen masas molares próximas. $CH_4$ es tetraédrico y apolar; solo presenta dispersión. $NH_3$ es piramidal, polar y forma puentes de hidrógeno. Por eso cabe esperar un punto de ebullición mayor para el amoniaco.

Una comparación completa menciona tipo de partícula, fuerza dominante y energía necesaria para separarlas. Decir únicamente “es más polar” no conecta con la propiedad.

## Sólidos y conductividad

- Los metales conducen por electrones deslocalizados.
- Los sólidos iónicos no conducen porque los iones están fijos; fundidos o disueltos sí pueden hacerlo.
- Las sustancias moleculares suelen tener puntos de fusión bajos y no conducen.
- Las redes covalentes presentan enlaces fuertes extendidos y puntos de fusión altos; grafito es una excepción conductora por sus electrones deslocalizados.

## Errores frecuentes

- Contar un doble enlace como dos regiones VSEPR.
- Omitir pares libres al decidir geometría.
- Confundir geometría electrónica y molecular.
- Asignar puente de hidrógeno a cualquier molécula con hidrógeno.
- Explicar un punto de ebullición rompiendo enlaces covalentes.

## Convertir el mapa en respuestas PAU

El campus virtual de Método Nebula enlaza estructura atómica, enlace, periodicidad y orgánica en una secuencia común. Incluye teoría, ejercicios de Lewis, comparaciones de propiedades y modelos PAU resueltos con el nivel de justificación exigido. El botón de contacto permite entrar en una ruta donde cada respuesta se corrige por razonamiento, no solo por resultado.
`,vn=`---
title: "Química PAU: domina equilibrio químico y deja de confundir K, Q y Le Châtelier"
date: "2026-09-25"
updated: "2026-10-28"
description: "Equilibrio químico para PAU explicado con K, Q, tablas de equilibrio, Le Châtelier, ejemplo resuelto y errores frecuentes."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-quimica-acido-base-ph-calculos,preparar-selectividad-con-calendario,fisica-y-quimica-como-plantear-problemas"
image: "/assets/latex/equilibrium-shift.svg"
---

El equilibrio químico no significa que la reacción se haya detenido. Significa que las velocidades directa e inversa son iguales y que las concentraciones macroscópicas permanecen constantes. Entender esta frase evita buena parte de los errores posteriores.

En PAU, el bloque exige conectar tres niveles: la reacción, la composición y la respuesta del sistema a un cambio. **K describe el equilibrio; Q describe el estado actual; Le Châtelier ayuda a predecir cómo responde el sistema.**

![Evolución de concentraciones antes y después de una perturbación del equilibrio](/assets/latex/equilibrium-shift.svg)

## Escribe bien la expresión de equilibrio

Para:

$$
aA+bB\\rightleftharpoons cC+dD,
$$

la constante en concentración se expresa como:

$$
K_c=\\frac{[C]^c[D]^d}{[A]^a[B]^b}.
$$

Los exponentes proceden de los coeficientes estequiométricos. Los sólidos y líquidos puros no se incluyen en la forma habitual porque su actividad se considera constante.

## K no dice cuánto tarda la reacción

Un valor grande de $K$ indica que el equilibrio favorece productos; un valor pequeño favorece reactivos. No informa de la rapidez. Una reacción puede tener un equilibrio muy desplazado y ser extremadamente lenta.

La temperatura sí puede cambiar $K$. Añadir un catalizador acelera las reacciones directa e inversa, pero no modifica la composición de equilibrio.

## Q decide hacia dónde evoluciona el sistema

El cociente de reacción tiene la misma forma algebraica que $K$, pero se calcula con la composición del instante considerado:

- $Q<K$: el sistema evoluciona hacia productos.
- $Q>K$: evoluciona hacia reactivos.
- $Q=K$: ya está en equilibrio.

Esta comparación debe preceder a una tabla de cambio: te ayuda a asignar correctamente los signos.

## Ejemplo con tabla de equilibrio

Para $\\mathrm{H_2+I_2\\rightleftharpoons2HI}$, se introducen 1,0 mol/L de $H_2$ y 1,0 mol/L de $I_2$, sin HI inicial. Si en equilibrio han reaccionado $x$ mol/L:

| Especie | Inicial | Cambio | Equilibrio |
|---|---:|---:|---:|
| $H_2$ | 1,0 | $-x$ | $1,0-x$ |
| $I_2$ | 1,0 | $-x$ | $1,0-x$ |
| $HI$ | 0 | $+2x$ | $2x$ |

Entonces:

$$
K_c=\\frac{(2x)^2}{(1-x)^2}.
$$

La tabla no es una plantilla decorativa. Codifica la estequiometría y garantiza que las concentraciones finales sean físicamente posibles.

## Le Châtelier sin frases automáticas

Si aumenta la concentración de un reactivo, el sistema tiende a consumir parte de lo añadido. Si disminuye el volumen de un equilibrio gaseoso, se favorece el lado con menor número de moles gaseosos. Si aumenta la temperatura, trata el calor como reactivo o producto según la reacción sea endotérmica o exotérmica.

La palabra “tiende” importa: el sistema compensa parcialmente la perturbación, no la elimina mágicamente.

## Presión, volumen y gases inertes

Reducir volumen aumenta presiones parciales y puede desplazar el equilibrio si cambia el número total de moles gaseosos entre lados. Añadir un gas inerte a volumen constante no cambia las presiones parciales de las especies reactivas en el modelo ideal, por lo que no desplaza el equilibrio.

Son preguntas frecuentes porque obligan a razonar más allá de una regla memorizada.

## Errores frecuentes

- Incluir sólidos en $K_c$.
- Cambiar $K$ al variar una concentración a temperatura constante.
- Decir que un catalizador “produce más producto”.
- Usar Le Châtelier sin indicar qué variable cambia.
- Resolver una raíz matemática que produce concentración negativa.
- Confundir equilibrio dinámico con ausencia de reacción.

## Práctica de examen

Entrena cuatro formatos: escribir $K$, comparar $Q$ y $K$, resolver una tabla y justificar una perturbación. Después mezcla equilibrio con cinética, termoquímica o ácido-base. En PAU los bloques pueden conectarse y la elección del método cuenta tanto como el cálculo.

El campus virtual de Método Nebula organiza Química PAU desde fundamentos hasta cinética y equilibrio, con ejemplos guiados, ejercicios, preguntas de examen y errores comunes. Si quieres detectar qué decisión falla y convertirla en una secuencia de práctica, utiliza el botón de contacto.
`,bn=`---
title: "Estequiometría PAU: gases, disoluciones y reactivo limitante con un mapa que evita atajos"
seoTitle: "Estequiometría PAU: gases, disoluciones y moles"
date: "2026-09-20"
updated: "2026-09-20"
description: "Resuelve estequiometría PAU con moles, gases ideales, disoluciones, pureza, rendimiento, reactivo limitante y unidades."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "bachillerato-fisica-quimica-mol-estequiometria,bachillerato-quimica-reactivo-limitante-rendimiento-pureza,pau-quimica-acido-base-ph-calculos"
image: "/assets/latex/stoichiometry-chain.svg"
---

La estequiometría no consiste en encadenar reglas de tres. Todo problema debe pasar por una magnitud común —los moles— y por la proporción de una ecuación ajustada. Esa disciplina evita mezclar gramos, litros y concentraciones como si fueran equivalentes.

> **Respuesta directa.** Ajusta la reacción, convierte cada dato a moles, decide el reactivo limitante, aplica la razón estequiométrica y transforma el resultado a la unidad pedida. Pureza y rendimiento se aplican en momentos distintos: la pureza corrige lo disponible; el rendimiento corrige lo obtenido.

![Cadena de conversiones entre datos, moles, proporción química y resultado](/assets/latex/stoichiometry-chain.svg)

## La ecuación es el centro

Para:

$$
\\mathrm{N_2+3H_2\\to2NH_3},
$$

la relación es 1 mol de $N_2$ por 3 mol de $H_2$ y 2 mol de $NH_3$. Los coeficientes relacionan cantidades de sustancia, no gramos ni litros en cualquier condición.

## Cuatro entradas habituales hacia los moles

Masa:

$$
n=\\frac mM.
$$

Disolución:

$$
n=cV,
$$

con $V$ en $\\mathrm{dm^3}$ si $c$ está en $\\mathrm{mol\\,dm^{-3}}$.

Gas ideal:

$$
pV=nRT.
$$

Partículas:

$$
N=nN_A.
$$

Escribe la unidad antes de elegir fórmula. Un volumen de gas no determina moles sin conocer las condiciones o un volumen molar especificado.

## Ejemplo con gas y disolución

Reaccionan 25.0 mL de $HCl$ 0.200 M con magnesio:

$$
\\mathrm{Mg+2HCl\\to MgCl_2+H_2}.
$$

Los moles de ácido son:

$$
n(HCl)=0.200(0.0250)=5.00\\times10^{-3}\\ \\mathrm{mol}.
$$

La proporción 2:1 produce:

$$
n(H_2)=2.50\\times10^{-3}\\ \\mathrm{mol}.
$$

A 298 K y 1.00 bar, usando $R=0.08314\\ \\mathrm{L\\,bar\\,mol^{-1}\\,K^{-1}}$:

$$
V=\\frac{nRT}{p}=0.0619\\ \\mathrm L=61.9\\ \\mathrm{mL}.
$$

La coherencia de unidades de $R$ evita introducir factores ocultos de 1000.

## Reactivo limitante sin intuiciones

Si hay varios reactivos con cantidades dadas, compara:

$$
\\frac{n_i}{\\nu_i}.
$$

El menor cociente limita el avance de reacción. No es necesariamente el reactivo con menos gramos ni menos moles. Después de identificarlo, toda cantidad de producto se calcula desde él.

## Pureza y rendimiento

Para una muestra impura:

$$
m_{\\rm puro}=m_{\\rm muestra}\\frac{\\%\\text{ pureza}}{100}.
$$

El rendimiento compara producto real y teórico:

$$
\\%\\text{ rendimiento}=\\frac{m_{\\rm real}}{m_{\\rm teórico}}100.
$$

La pureza se usa antes de convertir el reactivo a moles. El rendimiento se aplica después de obtener el máximo teórico. Invertir el porcentaje puede producir resultados mayores que el máximo posible.

## Diluciones y mezclas

En una dilución se conservan moles de soluto:

$$
c_1V_1=c_2V_2.
$$

Esta igualdad no se aplica a una reacción química que consume soluto. Si se mezclan dos disoluciones del mismo soluto sin reacción, se suman moles y volúmenes antes de calcular la concentración final, siempre que la aproximación de volúmenes aditivos sea válida.

## Comprobaciones que detectan fallos

- El limitante debe agotarse y el otro quedar en exceso.
- Un rendimiento menor del 100 % reduce producto, no lo aumenta.
- Una disolución diluida tiene concentración menor, pero los mismos moles transferidos.
- El número de cifras significativas debe respetar los datos.
- La ecuación ajustada debe conservar átomos y carga.

## Del cálculo aislado al dominio de química

El campus virtual de Método Nebula trabaja esta misma ruta en problemas de gases, valoraciones, equilibrio, electroquímica y termoquímica. Incluye teoría, ejercicios por niveles y modelos PAU completos para que las conversiones se conviertan en un procedimiento estable. El botón de contacto da acceso al itinerario y a la práctica corregida.
`,yn=`---
title: "Estructura atómica PAU: configuraciones electrónicas, números cuánticos y periodicidad sin contradicciones"
seoTitle: "Estructura atómica PAU: configuración y números cuánticos"
date: "2026-10-04"
updated: "2026-10-04"
description: "Domina estructura atómica PAU: niveles, orbitales, configuraciones electrónicas, iones, números cuánticos y propiedades periódicas."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-quimica-equilibrio-quimico-estudiar,pau-quimica-organica-mapa-reacciones,bachillerato-quimica-periodicidad-configuracion"
image: "/assets/latex/atomic-energy-levels.svg"
---

Una configuración electrónica no es una cadena que se recita: debe respetar capacidad de orbitales, energía, exclusión de Pauli y máxima multiplicidad de Hund.

> **Respuesta directa.** Cada electrón se describe por cuatro números cuánticos. La configuración fundamental llena orbitales por energía; los iones se forman retirando o añadiendo electrones en los orbitales adecuados, no copiando mecánicamente el último término escrito.

![Niveles de energía y transiciones electrónicas discretas](/assets/latex/atomic-energy-levels.svg)

## Capacidad de niveles y subniveles

- Subnivel $s$: 1 orbital, 2 electrones.
- $p$: 3 orbitales, 6 electrones.
- $d$: 5 orbitales, 10 electrones.
- $f$: 7 orbitales, 14 electrones.

Cada orbital admite dos electrones con espines opuestos.

## Reglas de llenado

1. **Aufbau:** se ocupan primero orbitales de menor energía.
2. **Pauli:** no existen dos electrones con los cuatro números cuánticos iguales.
3. **Hund:** en orbitales degenerados, se maximiza el número de electrones desapareados antes de aparearlos.

Por ejemplo, el nitrógeno:

$$
\\mathrm{N}:1s^2\\,2s^2\\,2p^3
$$

tiene tres electrones desapareados en $2p$.

## Números cuánticos

$$
n=1,2,3,\\ldots
$$

$$
\\ell=0,\\ldots,n-1,
\\qquad
m_\\ell=-\\ell,\\ldots,\\ell,
\\qquad
m_s=\\pm\\frac12.
$$

Para un electrón $3p$, $n=3$ y $\\ell=1$; $m_\\ell$ puede ser $-1,0,1$.

## Formación de iones

En metales de transición se retiran primero los electrones del nivel con mayor $n$. Por ejemplo:

$$
\\mathrm{Fe}:[Ar]\\,4s^2\\,3d^6,
$$

$$
\\mathrm{Fe^{2+}}:[Ar]\\,3d^6.
$$

El orden de escritura no sustituye al criterio energético del ion.

## Espectros y transiciones

Un fotón emitido o absorbido cumple:

$$
\\Delta E=h\\nu=\\frac{hc}{\\lambda}.
$$

Los espectros son discretos porque las energías permitidas también lo son.

## Ejemplo de transición y longitud de onda

Si un electrón desciende entre dos niveles cuya diferencia es $3.0\\times10^{-19}$ J, el fotón emitido tiene:

$$
\\nu=\\frac{\\Delta E}{h}
=\\frac{3.0\\times10^{-19}}{6.626\\times10^{-34}}
=4.53\\times10^{14}\\ \\mathrm{Hz},
$$

$$
\\lambda=\\frac c\\nu
\\approx6.62\\times10^{-7}\\ \\mathrm m=662\\ \\mathrm{nm}.
$$

Una absorción requiere un fotón con la diferencia exacta entre niveles dentro del modelo; una emisión parte de un estado más energético y libera esa diferencia. Conviene indicar el sentido antes de decidir el signo de $\\Delta E$.

## Electrones desapareados y magnetismo

Un átomo o ion con electrones desapareados presenta comportamiento paramagnético; si todos están apareados, es diamagnético. Para decidirlo, no basta la configuración abreviada: hay que distribuir los electrones entre los orbitales degenerados aplicando Hund.

Por ejemplo, en $2p^4$ se ocupan primero los tres orbitales con espines paralelos y después se aparea uno. Quedan dos electrones desapareados. Dibujar cajas y flechas es una comprobación pequeña que evita afirmar erróneamente que cuatro electrones forman dos parejas.

## Configuraciones especialmente estables

Algunos elementos de transición presentan excepciones al orden de llenado elemental porque subniveles semillenos o llenos pueden resultar energéticamente favorables. Estas excepciones no invalidan Aufbau: recuerdan que los orbitales $4s$ y $3d$ tienen energías próximas y que el modelo de flechas diagonales es una aproximación operativa.

En examen, utiliza la configuración aceptada en el temario y razona la formación del ion a partir del nivel de mayor $n$ ocupado.

## Periodicidad

La carga nuclear efectiva y el apantallamiento explican tendencias de radio, energía de ionización y electronegatividad. Una explicación PAU debe indicar qué atracción cambia y si el electrón externo pertenece al mismo nivel.

## Errores frecuentes

- Escribir más de dos electrones en un orbital.
- Aparear electrones $p$ antes de ocupar los tres orbitales.
- Proponer $\\ell=n$.
- Retirar electrones $3d$ antes de $4s$ al formar cationes comunes.
- Explicar tendencias solo con “hay más protones”, ignorando distancia y apantallamiento.

El campus de Método Nebula desarrolla estructura atómica, enlace y periodicidad mediante teoría y problemas PAU. Contacta para convertir configuraciones y justificaciones en un procedimiento coherente.
`,hn=`---
title: "Química orgánica PAU: el mapa de reacciones para pasar de alquenos a productos sin adivinar"
date: "2026-10-17"
updated: "2026-10-17"
description: "Organiza las reacciones orgánicas de PAU por grupo funcional, enlace que cambia, reactivo y tipo de reacción con ejemplos razonados."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-quimica-equilibrio-quimico-estudiar,bachillerato-fisica-quimica-mol-estequiometria"
image: "/assets/latex/organic-reaction-map.svg"
---

La química orgánica de PAU se vuelve inabarcable cuando se memoriza como una lista de flechas independientes. En realidad, casi todas las preguntas se ordenan con tres decisiones: **qué grupo funcional tengo, qué enlace debe cambiar y qué reactivo permite ese cambio**.

![Mapa minimalista de transformaciones de un alqueno hacia alcano, halogenoalcano, alcohol y polímero](/assets/latex/organic-reaction-map.svg)

## Leer primero la estructura

Antes de nombrar una reacción, localiza el grupo funcional:

- $\\mathrm{C=C}$: alqueno.
- $\\mathrm{-OH}$: alcohol.
- $\\mathrm{-CHO}$: aldehído.
- $\\mathrm{>C=O}$: cetona.
- $\\mathrm{-COOH}$: ácido carboxílico.
- $\\mathrm{-COO-}$: éster.
- $\\mathrm{C-X}$: derivado halogenado.

Después compara reactivo y producto. Si desaparece un doble enlace y aparecen dos enlaces simples, probablemente hay una adición. Si una molécula elimina un grupo pequeño y forma un doble enlace, es una eliminación.

## Adiciones al doble enlace

El enlace $\\pi$ de un alqueno puede romperse para formar dos enlaces nuevos.

Hidrogenación:

$$
\\mathrm{CH_2=CH_2+H_2\\rightarrow CH_3-CH_3}.
$$

Hidratación:

$$
\\mathrm{CH_2=CH_2+H_2O\\rightarrow CH_3-CH_2OH}.
$$

Adición de haluro de hidrógeno:

$$
\\mathrm{CH_3-CH=CH_2+HBr\\rightarrow productos\\ de\\ adición}.
$$

En alquenos asimétricos, la orientación puede justificarse con la regla de Markovnikov en el nivel donde se exija: el hidrógeno se incorpora preferentemente al carbono que ya tiene más hidrógenos.

## Eliminación: el camino inverso

Un alcohol puede deshidratarse y formar un alqueno:

$$
\\mathrm{CH_3-CH_2OH\\rightarrow CH_2=CH_2+H_2O}.
$$

No basta con escribir el producto: hay que comprobar que el carbono conserva cuatro enlaces y que la ecuación mantiene todos los átomos.

## Oxidación de alcoholes

Un alcohol primario se oxida primero a aldehído y después a ácido carboxílico:

$$
\\mathrm{R-CH_2OH\\rightarrow R-CHO\\rightarrow R-COOH}.
$$

Un alcohol secundario se oxida a cetona:

$$
\\mathrm{R-CHOH-R'\\rightarrow R-CO-R'}.
$$

Un alcohol terciario no tiene el hidrógeno necesario en el carbono funcional para esta oxidación sencilla. Esta conclusión debe salir de la estructura, no de contar carbonos totales.

## Esterificación

Ácido carboxílico y alcohol forman éster y agua:

$$
\\mathrm{R-COOH+R'-OH\\rightleftharpoons R-COO-R'+H_2O}.
$$

Es una reacción de condensación y reversible. Para nombrar el éster, identifica la parte procedente del ácido y el grupo alquilo procedente del alcohol.

## Polimerización por adición

Muchos monómeros de alqueno se unen al abrir su doble enlace:

$$
n\\,\\mathrm{CH_2=CHX}\\rightarrow[-\\mathrm{CH_2-CHX}-]_n.
$$

La unidad repetitiva debe mostrar enlaces abiertos a ambos lados y conservar todos los sustituyentes del monómero.

## Ejercicio de ruta sintética

Una ruta representativa conecta el eteno con el etanoato de etilo.

La primera etapa es la hidratación del eteno para obtener etanol. La oxidación de una parte de ese alcohol produce ácido etanoico. Finalmente, la esterificación entre el ácido y el etanol restante conduce al etanoato de etilo.

La ruta no se memoriza completa: se construye conectando grupos funcionales compatibles.

## Cómo justificar una respuesta

Una respuesta rigurosa incluye:

1. Nombre o fórmula del reactivo orgánico inicial.
2. Reactivo inorgánico o condición relevante.
3. Fórmula del producto principal.
4. Tipo de reacción.
5. Comprobación de átomos y valencias.

## Errores frecuentes

- Cambiar la longitud de la cadena sin que la reacción lo permita.
- Dibujar un carbono con cinco enlaces.
- Confundir sustitución con adición.
- Oxidar un alcohol secundario hasta ácido carboxílico sin ruptura de cadena.
- Olvidar el agua en una esterificación.
- Escribir el polímero conservando el doble enlace del monómero.

El campus virtual de Método Nebula desarrolla nomenclatura, isomería y un mapa completo de adición, eliminación, sustitución, oxidación, esterificación y polimerización con problemas PAU. El botón de contacto permite solicitar una ruta para reconstruir transformaciones a partir de la estructura.
`,qn=`---
title: "Electroquímica PAU: cómo resolver pilas, potenciales y reacciones redox sin perder los signos"
date: "2026-09-25"
updated: "2026-09-25"
description: "Método riguroso para pilas galvánicas en Química PAU: oxidación, reducción, potencial, notación, electrones y ejemplo resuelto."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-quimica-equilibrio-quimico-estudiar,pau-quimica-acido-base-ph-calculos"
image: "/assets/latex/galvanic-cell.svg"
---

Una pila galvánica no se resuelve recordando que “ánodo es negativo”. Se resuelve identificando **qué especie cede electrones, cuál los acepta y si la reacción global propuesta es espontánea**. El signo de cada electrodo aparece después, como consecuencia del proceso.

![Esquema de una pila galvánica con ánodo, cátodo, flujo de electrones y puente salino](/assets/latex/galvanic-cell.svg)

## Oxidación y reducción: empieza por los electrones

Oxidación es pérdida de electrones:

$$
M\\rightarrow M^{n+}+ne^-.
$$

Reducción es ganancia de electrones:

$$
X^{m+}+me^-\\rightarrow X.
$$

En una pila espontánea, la oxidación ocurre en el ánodo y la reducción en el cátodo. Los electrones circulan por el circuito exterior **desde el ánodo hacia el cátodo**.

## Qué significan los potenciales estándar

Las tablas proporcionan potenciales estándar de reducción. Un valor más positivo indica mayor tendencia a reducirse bajo condiciones estándar. Por eso, entre dos semirreacciones escritas como reducciones, la de mayor $E^\\circ$ suele actuar como cátodo.

$$
E^\\circ_{\\text{pila}}=E^\\circ_{\\text{cátodo}}-E^\\circ_{\\text{ánodo}}.
$$

En esta expresión ambos valores se toman de la tabla como potenciales de reducción. No cambies primero el signo del ánodo y vuelvas a restar: estarías invirtiéndolo dos veces.

## Ejemplo: pila Zn/Cu

Datos:

$$
E^\\circ(\\mathrm{Cu^{2+}/Cu})=+0,34\\ \\mathrm{V},
$$

$$
E^\\circ(\\mathrm{Zn^{2+}/Zn})=-0,76\\ \\mathrm{V}.
$$

El cobre tiene el potencial de reducción mayor, así que se reduce:

$$
\\mathrm{Cu^{2+}+2e^-\\rightarrow Cu}.
$$

El zinc se oxida:

$$
\\mathrm{Zn\\rightarrow Zn^{2+}+2e^-}.
$$

La reacción global es:

$$
\\mathrm{Zn+Cu^{2+}\\rightarrow Zn^{2+}+Cu}.
$$

Y el potencial:

$$
E^\\circ_{\\text{pila}}=0,34-(-0,76)=1,10\\ \\mathrm{V}.
$$

Como el resultado es positivo, la reacción escrita es espontánea en condiciones estándar.

## El puente salino no transporta electrones

Al oxidarse el zinc aumenta la carga positiva de su disolución. Los aniones del puente salino migran hacia ese compartimento. En el cátodo se consumen cationes de cobre, por lo que los cationes del puente migran hacia allí para conservar la neutralidad eléctrica.

El puente salino cierra el circuito mediante movimiento iónico; los electrones viajan por el conductor metálico. Confundir ambos recorridos es un error conceptual frecuente.

## Notación de la pila

Para la pila anterior:

$$
\\mathrm{Zn(s)\\,|\\,Zn^{2+}(aq)\\,||\\,Cu^{2+}(aq)\\,|\\,Cu(s)}.
$$

Una línea separa fases; la doble línea representa el puente salino. Por convenio se escribe el ánodo a la izquierda y el cátodo a la derecha.

## ¿Se multiplican los potenciales?

No. Si multiplicas una semirreacción por 2 para igualar electrones, el potencial no se multiplica. $E^\\circ$ es una magnitud intensiva. Lo que sí cambia con la cantidad de sustancia es la energía libre:

$$
\\Delta G^\\circ=-nFE^\\circ.
$$

$n$ es el número de electrones intercambiados en la reacción global ajustada y $F$ la constante de Faraday.

## Secuencia segura para un ejercicio PAU

El desarrollo completo comienza con las dos semirreacciones escritas como reducciones y sus potenciales tabulados. La de mayor potencial ocupa el cátodo; la otra se invierte para representar la oxidación. Después se igualan los electrones —sin multiplicar los potenciales— y se obtiene la reacción global.

El cálculo de $E^\\circ_{\\text{pila}}$ cierra la parte energética. La representación de polos, flujo electrónico y migración iónica completa el modelo físico. La conservación de átomos y carga, junto con el signo del potencial, ofrece una comprobación final independiente.

## Errores frecuentes

- Confundir ánodo con electrodo siempre positivo: eso cambia en una electrólisis.
- Hacer circular electrones por la disolución.
- Usar el potencial menor como cátodo.
- Multiplicar $E^\\circ$ al ajustar electrones.
- Escribir una reacción global con carga no conservada.
- Decir que una reacción es espontánea sin relacionarlo con el signo de $E^\\circ$.

El campus virtual de Método Nebula desarrolla números de oxidación, ajuste ion-electrón, pilas, potenciales, electrólisis y leyes de Faraday con ejercicios progresivos y modelos de examen. El botón de contacto permite acceder a una ruta centrada en el razonamiento completo, sin depender de reglas aisladas.
`,En=`---
title: "Termoquímica PAU: ley de Hess, entalpías y signos sin perder energía por el camino"
seoTitle: "Termoquímica PAU: ley de Hess, entalpías y signos"
date: "2026-10-18"
updated: "2026-10-18"
description: "Domina termoquímica PAU: entalpía, ley de Hess, entalpías de formación, energías de enlace, calorimetría y signos."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-quimica-equilibrio-quimico-estudiar,pau-quimica-acido-base-ph-calculos,pau-corregir-simulacros-plan-estudio"
image: "/assets/latex/hess-cycle.svg"
---

La ley de Hess no es una fórmula nueva: expresa que la entalpía es una función de estado. Si reactivos y productos son los mismos, el cambio total no depende del camino intermedio.

> **Respuesta directa.** Construye un ciclo donde todas las flechas tengan dirección clara. Si inviertes una reacción, cambia el signo de $\\Delta H$; si multiplicas sus coeficientes, multiplica también la entalpía.

![Ciclo de Hess entre reactivos, productos y elementos de referencia](/assets/latex/hess-cycle.svg)

## Exotérmica y endotérmica

$$
\\Delta H=H_{\\text{productos}}-H_{\\text{reactivos}}.
$$

- $\\Delta H<0$: proceso exotérmico.
- $\\Delta H>0$: proceso endotérmico.

El signo pertenece al sistema. “Libera calor” y $\\Delta H<0$ describen la misma situación.

## Entalpías estándar de formación

La entalpía estándar de formación es el cambio al formar un mol de compuesto desde sus elementos en estados estándar:

$$
\\Delta H^\\circ_{\\rm r}
=
\\sum\\nu\\,\\Delta H^\\circ_f(\\text{productos})
-
\\sum\\nu\\,\\Delta H^\\circ_f(\\text{reactivos}).
$$

Los coeficientes estequiométricos multiplican cada valor. Para un elemento en su estado estándar, $\\Delta H_f^\\circ=0$.

## Ejemplo

Para:

$$
\\mathrm{CH_4+2O_2\\to CO_2+2H_2O(l)},
$$

con $\\Delta H_f^\\circ$ en kJ/mol: $\\mathrm{CH_4}=-74.8$, $\\mathrm{CO_2}=-393.5$, $\\mathrm{H_2O(l)}=-285.8$:

$$
\\Delta H^\\circ_{\\rm r}
=[-393.5+2(-285.8)]-[-74.8]
=-890.3\\ \\mathrm{kJ/mol}.
$$

La combustión es exotérmica.

## Energías de enlace

Como romper enlaces requiere energía y formarlos la libera:

$$
\\Delta H\\approx
\\sum E(\\text{enlaces rotos})
-
\\sum E(\\text{enlaces formados}).
$$

Es una estimación porque las energías tabuladas suelen ser valores medios en fase gaseosa.

## Calorimetría

$$
q=mc\\Delta T.
$$

Si la disolución gana calor, la reacción lo pierde:

$$
q_{\\text{reacción}}=-q_{\\text{disolución}}.
$$

Después divide por los moles que reaccionan según la ecuación para expresar kJ/mol.

## Ejemplo de calorimetría con signo

Se mezclan disoluciones cuya masa total es 100 g y la temperatura aumenta $6.5\\ ^\\circ\\mathrm C$. Si se aproxima $c=4.18\\ \\mathrm{J\\,g^{-1}\\,K^{-1}}$:

$$
q_{\\text{disolución}}=100(4.18)(6.5)=2717\\ \\mathrm J=2.717\\ \\mathrm{kJ}.
$$

La disolución ha ganado energía, así que $q_{\\text{reacción}}=-2.717$ kJ. Si reaccionaron $0.0500$ mol según la ecuación escrita:

$$
\\Delta H=\\frac{-2.717}{0.0500}=-54.3\\ \\mathrm{kJ\\,mol^{-1}}.
$$

La referencia “por mol” corresponde al avance de reacción de la ecuación ajustada, no necesariamente a cualquier reactivo tomado por separado.

## Pérdidas de calor y calidad del dato

En un calorímetro escolar, parte del calor se transfiere al recipiente y al entorno. En una reacción exotérmica, la subida de temperatura medida suele ser menor que la ideal, por lo que el módulo calculado de $\\Delta H$ queda infravalorado. Aislar el vaso, colocar tapa y registrar la temperatura máxima mediante extrapolación reduce este efecto.

No todas las discrepancias se arreglan diciendo “pérdida de calor”. Una combustión incompleta o la evaporación del combustible cambian la cantidad de reacción; usar capacidades caloríficas medias introduce otra aproximación. Identificar la dirección del error demuestra comprensión experimental.

## Método de resolución

1. Ajusta la reacción.
2. Marca estados físicos.
3. Decide qué datos encajan: formación, combustión, enlaces o calorimetría.
4. Escribe el ciclo o la suma antes de calcular.
5. Comprueba signo, unidad y cantidad de sustancia de referencia.

## Errores frecuentes

- Olvidar coeficientes estequiométricos.
- Cambiar una reacción de sentido sin cambiar $\\Delta H$.
- Confundir agua líquida y gaseosa.
- Sumar enlaces formados con signo positivo.
- Dar el calor total cuando piden entalpía molar.

El campus virtual de Método Nebula conecta termoquímica, equilibrio y espontaneidad mediante teoría y problemas PAU. El botón de contacto permite trabajar el razonamiento y no solo la tabla de datos.
`,_n=`---
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
`,jn=`---
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
`,Cn=`---
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
`,zn=`---
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
`,Sn=`---
title: Problemas de optimización con derivadas: ejercicios resueltos
date: 2026-09-05
updated: 2026-09-05
description: Aprende a modelizar problemas de máximos y mínimos, definir el dominio y comprobar extremos con ejercicios geométricos y económicos resueltos.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: que-son-las-derivadas-y-para-que-se-utilizan,continuidad-derivabilidad-diferencias-problemas,como-aprobar-calculo-i-ingenieria-seis-semanas
image: /favicon.svg
---

Resolver un problema de optimización consiste en traducir una situación a una función, determinar su dominio y localizar dónde alcanza un máximo o un mínimo. Derivar es solo una parte: la mayor dificultad suele estar en elegir variables, usar la restricción y comprobar que la solución tiene sentido.

Antes de trabajar problemas aplicados conviene dominar la [interpretación de las derivadas](/blog/que-son-las-derivadas-y-para-que-se-utilizan/), especialmente la relación entre el signo de la pendiente y el crecimiento de una función.

## El esquema que funciona

Un problema completo se resuelve en este orden:

1. Identifica la magnitud que se quiere maximizar o minimizar.
2. Define las variables con unidades.
3. Traduce las restricciones a ecuaciones o desigualdades.
4. Expresa la función objetivo con una sola variable.
5. Determina el dominio físico o matemático.
6. Busca puntos críticos interiores.
7. Compara candidatos y extremos del dominio.
8. Interpreta el resultado en las variables originales.
9. Comprueba unidades, restricciones y tipo de extremo.

Empezar derivando antes de construir la función objetivo suele producir una ecuación correcta para el objeto equivocado.

## Máximos locales y absolutos

Una función $f$ tiene un máximo local en $x=a$ si $f(a)$ es mayor o igual que los valores suficientemente próximos. Es un máximo absoluto en un dominio $D$ si

$$
f(a)\\geq f(x)
\\qquad\\text{para todo }x\\in D.
$$

Las definiciones de mínimo invierten la desigualdad. Un extremo local describe el entorno; uno absoluto compara todo el dominio.

Si $f$ es derivable y tiene un extremo local en un punto interior $a$, el teorema de Fermat asegura que

$$
f'(a)=0.
$$

La condición es necesaria bajo esas hipótesis, pero no suficiente. En $f(x)=x^3$, $f'(0)=0$ y no hay máximo ni mínimo.

## Qué puntos deben comprobarse

Los candidatos a extremo absoluto son:

- puntos interiores donde $f'(x)=0$;
- puntos interiores donde $f'$ no existe;
- extremos incluidos del intervalo;
- límites en fronteras abiertas o infinitas cuando el dominio no es cerrado.

La [continuidad y derivabilidad](/blog/continuidad-derivabilidad-diferencias-problemas/) desempeñan papeles distintos. La continuidad en un intervalo cerrado garantiza que máximo y mínimo absolutos se alcanzan; la derivabilidad permite localizar candidatos interiores mediante la pendiente.

## Cómo decidir si un candidato es máximo o mínimo

### Criterio del signo de la primera derivada

Si $f'$ cambia de positivo a negativo, $f$ pasa de crecer a decrecer y hay un máximo local. Si cambia de negativo a positivo, hay un mínimo local.

Este criterio funciona aunque $f''$ no exista.

### Criterio de la segunda derivada

Si $f'(a)=0$ y $f''(a)>0$, hay un mínimo local. Si $f''(a)<0$, hay un máximo local. Cuando $f''(a)=0$, el criterio no concluye.

### Comparación de valores

En un intervalo cerrado, evaluar la función en todos los candidatos y en los extremos es el procedimiento más directo para clasificar extremos absolutos.

## Concavidad y garantías globales

Si $f''(x)<0$ en todo un intervalo, $f$ es estrictamente cóncava. Cualquier punto crítico interior es entonces el único máximo global del intervalo. Si $f''(x)>0$, la función es estrictamente convexa y un punto crítico es el único mínimo global.

Esta información es más fuerte que el criterio local de la segunda derivada. Comprobar solo $f''(a)<0$ describe el comportamiento cerca de $a$; comprobar el signo en todo el dominio puede resolver la comparación global.

En muchos modelos de beneficio aparece una cuadrática cóncava, mientras que costes formados por una cantidad y su inversa suelen ser convexos en el dominio positivo.

## Ejemplo 1 — función en un intervalo cerrado

Halla los extremos absolutos de

$$
f(x)=x^3-3x
$$

en $[-2,3]$.

Derivamos:

$$
f'(x)=3x^2-3=3(x-1)(x+1).
$$

Los puntos críticos interiores son $x=-1$ y $x=1$. Evaluamos también los extremos:

$$
\\begin{array}{c|rrrr}
x&-2&-1&1&3\\\\ \\hline
f(x)&-2&2&-2&18
\\end{array}
$$

El máximo absoluto es $18$ en $x=3$. El mínimo absoluto es $-2$ y se alcanza tanto en $x=-2$ como en $x=1$.

Este ejemplo muestra dos detalles: un extremo global puede estar en la frontera y el mismo valor extremo puede alcanzarse en varios puntos.

## Modelizar antes de derivar

En problemas verbales suele haber dos expresiones:

- la **función objetivo**, que representa área, volumen, coste, beneficio o distancia;
- la **restricción**, que relaciona las variables disponibles.

La restricción permite eliminar variables. Después debe trasladarse también al dominio: longitudes positivas, cantidades no negativas, capacidad limitada o valores para los que las fórmulas están definidas.

## Ejemplo 2 — rectángulo con perímetro fijo

Entre todos los rectángulos de perímetro $40$ metros, encuentra el de área máxima.

Sean $x$ e $y$ las longitudes de los lados. La restricción es

$$
2x+2y=40,
$$

de donde $y=20-x$. El área es

$$
A(x)=xy=x(20-x)=20x-x^2.
$$

Las longitudes no pueden ser negativas, así que $0\\leq x\\leq20$. Derivamos:

$$
A'(x)=20-2x.
$$

El único punto crítico es $x=10$. Como $A''(x)=-2<0$, es un máximo. Entonces $y=10$ y

$$
\\boxed{A_{\\max}=100\\text{ m}^2}.
$$

![Parábola de una función de área con máximo en el vértice](/assets/latex/quadratic-optimization.svg)

**Comprobación.** En los extremos degenerados $x=0$ y $x=20$, el área es cero. El candidato interior es necesariamente el máximo absoluto. El rectángulo óptimo resulta ser un cuadrado.

## Ejemplo 3 — cercado junto a un río

Disponemos de $100$ metros de valla para cerrar tres lados de un rectángulo; el cuarto lado coincide con un río y no necesita valla. ¿Qué dimensiones maximizan el área?

Sea $x$ la longitud de cada lado perpendicular al río e $y$ el lado paralelo. La restricción es

$$
2x+y=100,
$$

así que $y=100-2x$. La función objetivo es

$$
A(x)=x(100-2x)=100x-2x^2.
$$

El dominio físico es $0\\leq x\\leq50$. Derivamos:

$$
A'(x)=100-4x.
$$

El punto crítico es $x=25$. Entonces $y=50$ y

$$
A(25)=25\\cdot50=\\boxed{1250\\text{ m}^2}.
$$

Como $A''=-4<0$ y los extremos del dominio dan área cero, es el máximo absoluto.

## Ejemplo 4 — caja sin tapa

De una lámina rectangular de $30$ cm por $20$ cm se recortan cuadrados iguales de lado $x$ en las esquinas. Al plegar se forma una caja sin tapa. Encuentra el valor de $x$ que maximiza el volumen.

Las dimensiones de la caja son

$$
x,\\qquad30-2x,\\qquad20-2x.
$$

El volumen es

$$
V(x)=x(30-2x)(20-2x).
$$

Para que todas las dimensiones sean no negativas,

$$
0\\leq x\\leq10.
$$

Desarrollamos y derivamos:

$$
V(x)=600x-100x^2+4x^3,
$$

$$
V'(x)=600-200x+12x^2
=4(3x^2-50x+150).
$$

Las raíces son

$$
x=\\frac{25\\pm5\\sqrt7}{3}.
$$

La raíz con signo positivo es mayor que $10$ y queda fuera del dominio. El único candidato interior válido es

$$
\\boxed{x=\\frac{25-5\\sqrt7}{3}\\approx3{,}92\\text{ cm}}.
$$

Además, $V(0)=V(10)=0$, mientras que el candidato produce volumen positivo. Por tanto, es el máximo absoluto.

**Interpretación.** No basta con resolver $V'(x)=0$: una de las dos soluciones algebraicas no puede construir una caja y debe descartarse por el dominio.

## Ejemplo 5 — cilindro con volumen fijo

Un cilindro cerrado debe tener volumen $V_0$. Determina la relación entre radio y altura que minimiza su superficie.

La restricción es

$$
\\pi r^2h=V_0,
$$

con $r>0$ y $h>0$. Despejamos

$$
h=\\frac{V_0}{\\pi r^2}.
$$

La superficie total incluye dos bases y la superficie lateral:

$$
S=2\\pi r^2+2\\pi rh.
$$

Sustituyendo la restricción,

$$
S(r)=2\\pi r^2+\\frac{2V_0}{r}.
$$

Derivamos:

$$
S'(r)=4\\pi r-\\frac{2V_0}{r^2}.
$$

La condición $S'(r)=0$ da

$$
4\\pi r^3=2V_0,
\\qquad
r=\\left(\\frac{V_0}{2\\pi}\\right)^{1/3}.
$$

Como

$$
S''(r)=4\\pi+\\frac{4V_0}{r^3}>0,
$$

el punto es un mínimo. Al volver a la restricción se obtiene

$$
\\boxed{h=2r}.
$$

La altura óptima coincide con el diámetro. Esta relación es independiente del volumen concreto.

## Ejemplo 6 — distancia mínima a una curva

Encuentra los puntos de la parábola $y=x^2$ más próximos al punto $(0,3)$.

Un punto de la parábola es $(x,x^2)$. Su distancia al punto dado es

$$
D(x)=\\sqrt{x^2+(x^2-3)^2}.
$$

Como la raíz cuadrada es creciente, minimizar $D$ equivale a minimizar

$$
Q(x)=D(x)^2=x^2+(x^2-3)^2.
$$

Esta elección evita derivar una raíz. Derivamos:

$$
Q'(x)=2x+4x(x^2-3)
=2x(2x^2-5).
$$

Los candidatos son

$$
x=0,
\\qquad
x=\\pm\\sqrt{\\frac52}.
$$

Evaluamos:

$$
Q(0)=9,
\\qquad
Q\\left(\\pm\\sqrt{\\frac52}\\right)
=\\frac52+\\left(-\\frac12\\right)^2
=\\frac{11}{4}.
$$

Los dos puntos más próximos son

$$
\\boxed{\\left(\\pm\\sqrt{\\frac52},\\frac52\\right)},
$$

y la distancia mínima es $\\sqrt{11}/2$. La simetría explica que haya dos soluciones.

## Ejemplo 7 — beneficio económico

Una empresa vende $q$ unidades a un precio por unidad

$$
p(q)=100-q,
$$

y tiene coste total

$$
C(q)=20q+100.
$$

El ingreso es precio por cantidad:

$$
R(q)=q(100-q).
$$

El beneficio es

$$
B(q)=R(q)-C(q)
=80q-q^2-100.
$$

El precio exige $0\\leq q\\leq100$. Derivamos:

$$
B'(q)=80-2q.
$$

El candidato es $q=40$, y $B''(q)=-2<0$. Por tanto,

$$
\\boxed{q=40}
$$

maximiza el beneficio dentro del modelo. El precio correspondiente es $60$ y el beneficio máximo es

$$
B(40)=3200-1600-100=1500.
$$

Las unidades monetarias deben indicarse según el enunciado. El modelo supone que pueden venderse cantidades continuas; si $q$ tuviera que ser entero, se compararían los enteros próximos al candidato.

## Ejemplo 8 — coste medio mínimo

El coste total de producir $q>0$ unidades es

$$
C(q)=q^2+100.
$$

El coste medio es

$$
\\overline C(q)=\\frac{C(q)}q=q+\\frac{100}{q}.
$$

Derivamos:

$$
\\overline C'(q)=1-\\frac{100}{q^2}.
$$

El único candidato positivo es $q=10$. Como

$$
\\overline C''(q)=\\frac{200}{q^3}>0,
$$

es un mínimo. El coste medio mínimo vale

$$
\\boxed{\\overline C(10)=20}.
$$

No se estaba minimizando el coste total, que crece con $q$, sino el coste por unidad. Nombrar correctamente la función objetivo cambia el problema.

## Ejemplo 8 bis — rectángulo bajo una parábola

Un rectángulo tiene un vértice en el origen y el vértice opuesto $(x,y)$ sobre la parábola

$$
y=12-x^2
$$

en el primer cuadrante. Encuentra el área máxima.

La propia curva proporciona la restricción. El área es

$$
A(x)=xy=x(12-x^2)=12x-x^3.
$$

El primer cuadrante exige $x\\geq0$ e $y\\geq0$, de modo que

$$
0\\leq x\\leq\\sqrt{12}.
$$

Derivamos:

$$
A'(x)=12-3x^2.
$$

El candidato del dominio es $x=2$. La altura correspondiente es $y=8$, y

$$
\\boxed{A_{\\max}=2\\cdot8=16}.
$$

Como $A''(x)=-6x<0$ para $x>0$ y el área se anula en los dos extremos, el candidato es el máximo absoluto.

Este problema muestra por qué el dominio debe deducirse de la geometría antes de resolver $A'=0$: la ecuación también produce $x=-2$, que no pertenece al primer cuadrante.

## Dominios abiertos y extremos que no se alcanzan

Si el dominio no es cerrado, una función puede acercarse a su mejor valor sin alcanzarlo. Por ejemplo, $f(x)=x$ en $(0,1)$ no tiene máximo: todos sus valores son menores que $1$, pero $1$ no pertenece al dominio. Tampoco tiene mínimo.

Por eso no basta con afirmar que una función continua «tiene máximo y mínimo». El teorema de Weierstrass requiere un intervalo cerrado y acotado.

## Restricciones y soluciones no válidas

Una raíz de $f'(x)=0$ puede quedar fuera del dominio físico. También pueden aparecer puntos donde la fórmula reducida está definida pero la situación original no: longitudes nulas, denominadores cero o cantidades negativas.

Después de optimizar hay que reconstruir todas las variables y comprobar:

- que satisfacen la restricción;
- que tienen las unidades correctas;
- que pertenecen al dominio;
- que producen realmente el mejor valor frente a los demás candidatos.

## Existencia antes de buscar la solución

Antes de derivar conviene preguntar si el máximo o mínimo tiene que existir. Una función continua sobre un dominio compacto —cerrado y acotado en una variable— alcanza ambos extremos. En un intervalo abierto o no acotado hay que estudiar límites en la frontera.

En el problema del cilindro, por ejemplo,

$$
S(r)=2\\pi r^2+\\frac{2V_0}{r}
$$

tiende a $+\\infty$ tanto cuando $r\\to0^+$ como cuando $r\\to\\infty$. Si existe un único punto crítico y la función es convexa, ese punto debe ser el mínimo global. Este argumento completa la clasificación local de $S''>0$.

También puede ocurrir que el objetivo no esté acotado. Si una restricción permite aumentar indefinidamente una variable y la función objetivo crece con ella, no existe máximo finito. La respuesta correcta no es buscar una raíz de la derivada, sino demostrar que los valores pueden superar cualquier cota.

## Problemas discretos

La derivada trabaja con variables continuas. Si una cantidad debe ser entera, el punto crítico continuo orienta la búsqueda, pero la solución final exige comparar enteros admisibles próximos.

### Ejemplo 9 — número entero de unidades

Supón que el beneficio modelizado es

$$
B(n)=-3(n-12{,}4)^2+500
$$

y solo pueden fabricarse unidades enteras. El máximo continuo está en $12{,}4$. Los candidatos enteros relevantes son $12$ y $13$:

$$
B(12)=499{,}52,
\\qquad
B(13)=498{,}92.
$$

El máximo discreto se alcanza en $n=12$. Redondear automáticamente al entero más cercano suele funcionar en una parábola simétrica, pero comparar los candidatos es la justificación correcta.

## Cómo redactar una solución completa

Una buena respuesta no empieza con una derivada aislada. Debe incluir:

1. «Sea $x$…», con significado y unidades.
2. Restricción y despeje.
3. Función objetivo reducida.
4. Dominio.
5. Derivada y puntos críticos.
6. Criterio usado para clasificar.
7. Recuperación de las demás variables.
8. Respuesta verbal con unidades.

Esta estructura permite detectar si una cuenta algebraicamente correcta responde realmente a lo pedido.

## Errores frecuentes

- **Derivar la restricción en vez de la función objetivo.** La restricción sirve para eliminar variables.
- **Mantener dos variables sin método adicional.** En problemas elementales debe reducirse a una.
- **No escribir el dominio.** Pueden aceptarse soluciones geométricamente imposibles.
- **Resolver $f'=0$ y detenerse.** También hay que clasificar y comparar.
- **Olvidar extremos del intervalo.** Un máximo absoluto puede estar en la frontera.
- **Usar solo la segunda derivada cuando vale cero.** En ese caso no concluye.
- **Confundir máximo local y absoluto.** El enunciado suele pedir una magnitud global.
- **Minimizar la distancia con una raíz innecesaria.** Minimizar su cuadrado suele ser más sencillo.
- **Redondear demasiado pronto.** Conserva valores exactos hasta la interpretación final.
- **No volver al problema.** El valor de $x$ puede ser un recorte, no la dimensión solicitada.

## Cómo comprobar el resultado

Sustituye la solución en la restricción y en la función objetivo. Compara con los demás candidatos y prueba valores cercanos para detectar si el comportamiento coincide con un máximo o un mínimo.

Revisa también la escala: un área no puede tener unidades lineales, un volumen no puede ser negativo y un coste medio debe expresarse por unidad. La concavidad global puede simplificar la prueba: una cuadrática con coeficiente principal negativo tiene un único máximo.

## Ejercicios propuestos

1. Dos números positivos suman $20$. Maximiza su producto.
2. Minimiza $f(x)=x+9/x$ para $x>0$.
3. Un rectángulo tiene un vértice en el origen y el opuesto sobre $y=12-x^2$ en el primer cuadrante. Maximiza su área.
4. Halla los extremos absolutos de $f(x)=x^4-4x^2$ en $[-3,3]$.
5. Si el precio es $p(q)=60-2q$, maximiza el ingreso para $q\\geq0$ y precio no negativo.
6. Un cercado rectangular junto a un río dispone de $240$ metros para tres lados. Halla las dimensiones óptimas.
7. Encuentra el punto de la recta $y=2x+1$ más próximo al origen.
8. Explica por qué $f(x)=1-1/x$ no alcanza máximo en $[1,\\infty)$.

## Soluciones

**1. Producto máximo.** Si los números son $x$ y $20-x$,

$$
P(x)=x(20-x),\\qquad0\\leq x\\leq20.
$$

$P'(x)=20-2x=0$ da $x=10$. Ambos números son $10$ y el producto máximo es $\\boxed{100}$.

**2. Mínimo.**

$$
f'(x)=1-\\frac9{x^2}=0
$$

da $x=3$ en el dominio positivo. Como $f''(x)=18/x^3>0$, el mínimo es $\\boxed{f(3)=6}$.

**3. Área bajo una parábola.** El vértice opuesto es $(x,12-x^2)$, con $0\\leq x\\leq\\sqrt{12}$. Entonces

$$
A(x)=x(12-x^2),
\\qquad
A'(x)=12-3x^2.
$$

El candidato positivo es $x=2$, la altura es $8$ y el área máxima es $\\boxed{16}$.

**4. Comparación de candidatos.**

$$
f'(x)=4x(x^2-2),
$$

así que los candidatos son $0$ y $\\pm\\sqrt2$, además de $\\pm3$. Los valores son $0$, $-4$ y $45$, respectivamente. El mínimo absoluto es $-4$ en $x=\\pm\\sqrt2$ y el máximo es $45$ en $x=\\pm3$.

**5. Ingreso.**

$$
R(q)=q(60-2q),
\\qquad0\\leq q\\leq30.
$$

$R'(q)=60-4q=0$ da $q=15$. El ingreso máximo es $\\boxed{450}$.

**6. Tres lados.** Si $x$ es cada lado perpendicular, $y=240-2x$ y

$$
A(x)=x(240-2x).
$$

$A'(x)=240-4x=0$ da $x=60$, $y=120$ y área máxima $\\boxed{7200\\text{ m}^2}$.

**7. Distancia al origen.** Un punto es $(x,2x+1)$. Minimizamos

$$
Q(x)=x^2+(2x+1)^2=5x^2+4x+1.
$$

$Q'(x)=10x+4=0$ da $x=-2/5$ y $y=1/5$. El punto buscado es $\\boxed{(-2/5,1/5)}$.

**8. Supremo no alcanzado.** Para $x\\geq1$, $f'(x)=1/x^2>0$ y la función crece. Además, $f(x)<1$ para todo $x$ finito, aunque $f(x)\\to1$ cuando $x\\to\\infty$. Su supremo es $1$, pero no existe máximo.

## Resumen práctico

Optimizar exige modelizar, reducir a una variable, fijar el dominio y comparar todos los candidatos. Los puntos con derivada cero son posibilidades, no respuestas automáticas. Extremos, puntos no derivables y restricciones físicas forman parte del análisis.

Una respuesta queda cerrada cuando recupera todas las variables originales, demuestra el carácter global del extremo y expresa el resultado con unidades. La concavidad, los valores de frontera y los límites del dominio son herramientas de comprobación, no pasos opcionales.

Si el modelo admite solo valores enteros, compara los enteros cercanos al óptimo continuo. Si el dominio es abierto o infinito, estudia sus fronteras mediante límites antes de afirmar que el mejor valor se alcanza.

Si necesitas practicar modelización y comprobación sobre problemas de tu asignatura, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
`,Pn=`---
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
`,Ln=`---
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
`,An=`---
title: Qué son las derivadas y para qué se utilizan
seoTitle: "Derivadas: qué son, para qué sirven y ejemplos"
date: 2026-06-19
updated: 2026-10-29
description: Una guía clara para entender las derivadas como pendiente, ritmo de cambio y herramienta para optimizar funciones.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: continuidad-derivabilidad-diferencias-problemas,problemas-optimizacion-derivadas-ejercicios-resueltos,como-resolver-limites-indeterminaciones-ejercicios
image: /favicon.svg
---

Una derivada mide **cómo cambia una magnitud cuando cambia otra**. En una gráfica, esa idea se ve como la pendiente de la curva en un punto concreto. En un problema real, puede representar velocidad, crecimiento, coste marginal, sensibilidad de un modelo o el punto donde una función deja de subir y empieza a bajar.

La dificultad no está solo en aplicar reglas. Está en entender qué pregunta responde la derivada.

> **Respuesta directa.** Una derivada es el ritmo de cambio instantáneo de una función. Sirve para calcular pendientes, velocidades, tasas de crecimiento y puntos máximos o mínimos. Su valor no solo se calcula: debe interpretarse dentro del problema y con las unidades correspondientes.

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
2. **Optimización.** Para maximizar beneficios, minimizar costes o encontrar el mejor diseño, se construye una función objetivo y se estudian sus candidatos; la guía de [problemas de optimización con derivadas](/blog/problemas-optimizacion-derivadas-ejercicios-resueltos/) desarrolla el proceso completo.
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

Cuando una curva viene dada por una ecuación en $x$ e $y$ sin despejar, esa misma regla conduce a la [derivación implícita](/blog/derivacion-implicita-ejercicios-resueltos/). Si la función depende de varias variables independientes, la extensión natural son las [derivadas parciales y el gradiente](/blog/derivadas-parciales-gradiente-ejercicios/).

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

Para integrar este cálculo con dominio, asíntotas, monotonía y curvatura, sigue el procedimiento de [estudio completo de una función](/blog/estudio-completo-funcion-paso-a-paso/).

## Cómo estudiarlas mejor

Para dominar derivadas, trabaja cada ejercicio en tres capas:

- Qué significa la función.
- Qué mide la derivada.
- Qué interpretación tiene el resultado.

Si solo practicas reglas, cualquier enunciado nuevo parece distinto. Si entiendes la derivada como ritmo de cambio, las reglas empiezan a tener dirección.

Puedes continuar con [qué son las integrales y para qué se utilizan](/blog/que-son-las-integrales-y-para-que-se-utilizan/) o revisar [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/).
`,Un=`---
title: Qué son las integrales y para qué se utilizan
seoTitle: "Integrales: qué son, para qué sirven y ejemplos"
date: 2026-06-21
updated: 2026-10-29
description: Una explicación práctica de las integrales como acumulación, área bajo la curva y herramienta para medir cantidades totales.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: teorema-fundamental-calculo-ejemplos-ejercicios,integral-definida-e-indefinida-diferencias-ejemplos,area-entre-dos-curvas-ejercicios-resueltos
image: /favicon.svg
---

Una integral mide **acumulación**. Si la derivada responde a "a qué ritmo cambia algo", la integral responde a "cuánto se ha acumulado en total".

Por eso las integrales aparecen cuando queremos calcular áreas, distancias recorridas, trabajo, masa, probabilidad acumulada, consumo total o cualquier cantidad que se obtiene sumando pequeñas contribuciones.

> **Respuesta directa.** Una integral suma contribuciones infinitesimales para obtener una cantidad total. Sirve para calcular áreas, desplazamientos, trabajo, masa o probabilidad acumulada. La integral indefinida busca primitivas; la definida evalúa una acumulación entre dos límites.

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

Cuando la magnitud depende de dos coordenadas, la acumulación se realiza sobre una región mediante [integrales dobles](/blog/integrales-dobles-ejercicios-resueltos/). Así se calculan, por ejemplo, volúmenes bajo superficies y masas de láminas con densidad variable.

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
`,Dn=`---
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
`,wn=`---
title: Regla de L'Hôpital: cuándo utilizarla y cuándo no
seoTitle: "Regla de L'Hôpital: cuándo usarla, condiciones y errores"
date: 2026-08-23
updated: 2026-10-29
description: Aprende cuándo se puede aplicar la regla de L'Hôpital, cómo transformar otras indeterminaciones y qué errores evitar con ejercicios resueltos.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: como-resolver-limites-indeterminaciones-ejercicios,que-son-las-derivadas-y-para-que-se-utilizan,como-aprobar-calculo-i-ingenieria-seis-semanas
image: /favicon.svg
---

La regla de L'Hôpital se aplica a cocientes cuya sustitución produce las formas indeterminadas $0/0$ o $\\infty/\\infty$. Permite sustituir el límite de un cociente de funciones por el límite del cociente de sus derivadas, siempre que se cumplan sus hipótesis.

No sirve directamente para $1/0$, $0\\cdot\\infty$, $\\infty-\\infty$ ni potencias indeterminadas. Estas formas deben transformarse primero.

> **Respuesta directa.** L'Hôpital solo se aplica directamente a cocientes que producen \\(0/0\\) o \\(\\infty/\\infty\\). Comprueba la forma, deriva numerador y denominador por separado y vuelve a evaluar. En productos, diferencias o potencias indeterminadas, transforma primero la expresión.

## Qué afirma la regla

Supongamos que $f$ y $g$ son derivables en un entorno perforado de $a$, que $g'(x)\\neq0$ cerca de $a$ y que

$$
\\lim_{x\\to a}f(x)=\\lim_{x\\to a}g(x)=0
$$

o que ambas funciones tienden en módulo a infinito. Si existe

$$
\\lim_{x\\to a}\\frac{f'(x)}{g'(x)}=L,
$$

donde $L$ puede ser finito o infinito, entonces

$$
\\boxed{\\lim_{x\\to a}\\frac{f(x)}{g(x)}=L}.
$$

Hay versiones equivalentes para límites laterales y para $x\\to\\pm\\infty$. La regla proporciona una condición suficiente: puede ocurrir que el límite original exista aunque el cociente de derivadas no tenga límite.

### El valor en el punto no es lo importante

Las funciones no necesitan estar definidas exactamente en $a$. La regla trabaja en un entorno perforado, igual que la definición de límite. Podemos redefinir $f(a)$ o $g(a)$ sin cambiar el resultado, siempre que su comportamiento próximo y las demás hipótesis permanezcan iguales.

La condición $g'(x)\\neq0$ evita que el nuevo cociente quede indefinido de forma persistente cerca del punto. La existencia del límite de $f'/g'$ es la pieza que transmite información al cociente original; si ese nuevo límite oscila, la regla no concluye.

Cuando $f$ y $g$ tienden a infinito, no se exige que lo hagan con el mismo signo. La forma $(-\\infty)/\\infty$ también pertenece al caso de cociente infinito entre infinito. El signo queda recogido al calcular $f'/g'$.

## Por qué derivar numerador y denominador puede funcionar

Cerca de un punto donde $f(a)=g(a)=0$, ambas funciones se comparan mediante sus variaciones. El teorema del valor medio de Cauchy relaciona el cociente

$$
\\frac{f(x)-f(a)}{g(x)-g(a)}
$$

con un cociente $f'(c)/g'(c)$ en algún punto intermedio $c$. Si el cociente de derivadas se aproxima a $L$, también lo hace la razón de los incrementos.

Esta idea utiliza la relación entre límites y [derivadas como tasas de cambio](/blog/que-son-las-derivadas-y-para-que-se-utilizan/). También explica por qué no se deriva el cociente con la regla habitual:

$$
\\left(\\frac fg\\right)'
=\\frac{f'g-fg'}{g^2}.
$$

L'Hôpital no afirma que el cociente original y el cociente de derivadas sean funciones iguales. Afirma que, bajo ciertas hipótesis, tienen el mismo límite.

## Comprobación previa obligatoria

Antes de aplicar la regla:

1. Sustituye o estudia los límites de numerador y denominador por separado.
2. Confirma que la forma sea exactamente $0/0$ o $\\infty/\\infty$.
3. Comprueba que las funciones sean derivables en el entorno relevante.
4. Deriva numerador y denominador por separado.
5. Calcula el nuevo límite.
6. Si vuelve a ser $0/0$ o $\\infty/\\infty$, revisa de nuevo las hipótesis antes de repetir.

La [guía general para resolver límites](/blog/como-resolver-limites-indeterminaciones-ejercicios/) debe preceder a esta técnica: muchas indeterminaciones se eliminan de forma más clara factorizando, racionalizando o usando límites notables.

## Ejemplo 1 — forma 0/0 con logaritmo

Calcula

$$
\\lim_{x\\to1}\\frac{\\ln x}{x-1}.
$$

Numerador y denominador tienden a cero. Podemos aplicar L'Hôpital:

$$
\\lim_{x\\to1}\\frac{1/x}{1}=1.
$$

Por tanto,

$$
\\boxed{\\lim_{x\\to1}\\frac{\\ln x}{x-1}=1}.
$$

La respuesta también concuerda con la derivada de $\\ln x$ en $x=1$, porque el cociente original es su cociente incremental.

## Ejemplo 2 — aplicación repetida

Calcula

$$
\\lim_{x\\to0}\\frac{e^x-1-x}{x^2}.
$$

La sustitución da $0/0$. Derivamos una vez:

$$
\\lim_{x\\to0}\\frac{e^x-1}{2x}.
$$

Sigue siendo $0/0$, así que la regla puede aplicarse de nuevo:

$$
\\lim_{x\\to0}\\frac{e^x}{2}=\\frac12.
$$

Luego

$$
\\boxed{\\lim_{x\\to0}\\frac{e^x-1-x}{x^2}=\\frac12}.
$$

No se repite la regla porque «todavía hay derivadas disponibles», sino porque después de la primera aplicación se mantiene una forma autorizada.

## Ejemplo 3 — forma infinito entre infinito

Estudia

$$
\\lim_{x\\to\\infty}\\frac{\\ln x}{x}.
$$

Ambas funciones tienden a infinito. Al derivar,

$$
\\lim_{x\\to\\infty}\\frac{1/x}{1}
=\\lim_{x\\to\\infty}\\frac1x=0.
$$

Así,

$$
\\boxed{\\ln x=o(x)}.
$$

El logaritmo crece sin cota, pero mucho más despacio que una función lineal.

## Ejemplo 4 — una exponencial domina a un polinomio

Calcula

$$
\\lim_{x\\to\\infty}\\frac{x^2}{e^x}.
$$

La forma es $\\infty/\\infty$. Aplicamos la regla dos veces:

$$
\\lim_{x\\to\\infty}\\frac{2x}{e^x}
=\\lim_{x\\to\\infty}\\frac2{e^x}=0.
$$

Por tanto,

$$
\\boxed{\\lim_{x\\to\\infty}\\frac{x^2}{e^x}=0}.
$$

El mismo razonamiento muestra que $x^n/e^x\\to0$ para cualquier entero fijo $n\\geq0$: se deriva el polinomio hasta convertirlo en una constante.

## Jerarquía de crecimiento

Para $x\\to\\infty$, una jerarquía útil es

$$
(\\ln x)^m\\ll x^p\\ll a^x,
\\qquad m>0,\\ p>0,\\ a>1.
$$

El símbolo $u\\ll v$ indica que $u/v\\to0$. L'Hôpital permite justificar estas comparaciones. Por ejemplo, cada derivación reduce la potencia de $x$, mientras una exponencial sigue siendo proporcional a sí misma. Para comparar logaritmos con potencias, una aplicación ya transforma $\\ln x/x^p$ en una constante por $1/x^p$.

### Ejemplo 4 bis — logaritmo elevado frente a potencia

Calcula

$$
\\lim_{x\\to\\infty}\\frac{(\\ln x)^2}{x}.
$$

La forma es $\\infty/\\infty$. Una aplicación da

$$
\\lim_{x\\to\\infty}\\frac{2\\ln x/x}{1}
=\\lim_{x\\to\\infty}\\frac{2\\ln x}{x}.
$$

Sigue siendo $\\infty/\\infty$. Aplicamos de nuevo:

$$
\\lim_{x\\to\\infty}\\frac{2/x}{1}=0.
$$

Así, $(\\ln x)^2=o(x)$. La potencia del logaritmo no altera que una potencia positiva de $x$ termine dominando.

### Ejemplo 4 ter — base exponencial distinta de e

Para $a>1$,

$$
\\lim_{x\\to\\infty}\\frac{x}{a^x}
$$

tiene forma $\\infty/\\infty$. Como $(a^x)'=a^x\\ln a$,

$$
\\lim_{x\\to\\infty}\\frac1{a^x\\ln a}=0.
$$

El factor $\\ln a>0$ no cambia la convergencia. Si $0<a<1$, en cambio, $a^x\\to0$ y el cociente original no presenta forma infinito entre infinito: crece a $+\\infty$.

## Cuándo no hace falta utilizarla

Que una expresión sea un cociente no obliga a aplicar L'Hôpital. Si la sustitución produce un valor determinado, se evalúa directamente. Si existe una simplificación elemental que revela el comportamiento, suele ser preferible.

### Ejemplo 5 — factorización más directa

$$
\\lim_{x\\to3}\\frac{x^2-9}{x-3}
$$

tiene forma $0/0$, por lo que L'Hôpital sería válida y daría

$$
\\lim_{x\\to3}\\frac{2x}{1}=6.
$$

Sin embargo, factorizar ofrece más información:

$$
\\frac{(x-3)(x+3)}{x-3}=x+3
\\qquad(x\\neq3).
$$

Vemos que la discontinuidad es evitable y que el límite vale $6$. La regla calcula el número, mientras que la simplificación explica la estructura.

### Ejemplo 6 — un límite notable es suficiente

En

$$
\\lim_{x\\to0}\\frac{\\sin x}{x},
$$

L'Hôpital produciría $\\lim_{x\\to0}\\cos x=1$. Pero las derivadas de seno y coseno se demuestran inicialmente utilizando este límite notable. Usar L'Hôpital para demostrarlo en ese contexto sería circular.

Una técnica puede ser formalmente válida en un curso avanzado y, aun así, ser inadecuada si depende del resultado que se pretende establecer.

## Transformar la forma 0 por infinito

Un producto $f(x)g(x)$ con forma $0\\cdot\\infty$ se convierte en cociente:

$$
f(x)g(x)=\\frac{f(x)}{1/g(x)}
\\quad\\text{o}\\quad
\\frac{g(x)}{1/f(x)}.
$$

Se escoge la forma que produzca $0/0$ o $\\infty/\\infty$ y derivadas manejables.

### Ejemplo 7 — x por logaritmo

Calcula

$$
\\lim_{x\\to0^+}x\\ln x.
$$

La forma es $0\\cdot(-\\infty)$. Escribimos

$$
x\\ln x=\\frac{\\ln x}{1/x}.
$$

Ahora aparece $(-\\infty)/\\infty$. Aplicamos la regla:

$$
\\lim_{x\\to0^+}\\frac{1/x}{-1/x^2}
=\\lim_{x\\to0^+}(-x)=0.
$$

Por tanto,

$$
\\boxed{\\lim_{x\\to0^+}x\\ln x=0}.
$$

El producto se aproxima a cero desde valores negativos.

## Transformar infinito menos infinito

Una diferencia de dos términos infinitos puede reunirse en una fracción común o racionalizarse. Solo después se comprueba la nueva forma.

### Ejemplo 8 — diferencia de fracciones

Calcula

$$
\\lim_{x\\to0}\\left(\\frac1x-\\frac1{e^x-1}\\right).
$$

Cada término diverge. Reunimos:

$$
\\frac1x-\\frac1{e^x-1}
=\\frac{e^x-1-x}{x(e^x-1)}.
$$

La nueva forma es $0/0$. Derivamos:

$$
\\lim_{x\\to0}
\\frac{e^x-1}{e^x-1+xe^x}.
$$

Continúa siendo $0/0$. Una segunda aplicación da

$$
\\lim_{x\\to0}
\\frac{e^x}{e^x+e^x+xe^x}
=\\frac12.
$$

Por tanto, el límite original es $\\boxed{1/2}$. Aplicar la regla por separado a los dos términos no resolvería una resta de infinitos.

## Potencias indeterminadas

Las formas $1^\\infty$, $0^0$ e $\\infty^0$ se estudian tomando logaritmos. Si $y=f(x)^{g(x)}$ y $f(x)>0$, entonces

$$
\\ln y=g(x)\\ln f(x).
$$

Se calcula el límite del producto transformado. Si vale $A$, la potencia original tiende a $e^A$.

### Ejemplo 9 — forma 1 elevado a infinito

Calcula

$$
\\lim_{x\\to\\infty}\\left(1+\\frac3x\\right)^x.
$$

Sea $y=(1+3/x)^x$. Entonces

$$
\\ln y=x\\ln\\left(1+\\frac3x\\right)
=\\frac{\\ln(1+3/x)}{1/x}.
$$

Es una forma $0/0$. Derivamos respecto de $x$:

$$
\\frac{-3/[x^2(1+3/x)]}{-1/x^2}
=\\frac3{1+3/x}\\longrightarrow3.
$$

Por continuidad de la exponencial,

$$
\\boxed{\\lim_{x\\to\\infty}\\left(1+\\frac3x\\right)^x=e^3}.
$$

El límite calculado con L'Hôpital es el de $\\ln y$, no directamente el de $y$.

## La regla puede no ayudar

Derivar puede complicar la expresión, producir otro límite más difícil o crear un cociente sin límite. Esto no demuestra que el límite original no exista.

### Ejemplo 10 — el cociente de derivadas no tiene límite

Considera

$$
\\lim_{x\\to0}\\frac{x^2\\sin(1/x)}{x}.
$$

Para $x\\neq0$, la expresión es $x\\sin(1/x)$. Como

$$
|x\\sin(1/x)|\\leq|x|,
$$

el teorema del encaje demuestra que el límite vale $0$.

Si intentamos L'Hôpital, obtenemos

$$
\\frac{2x\\sin(1/x)-\\cos(1/x)}{1},
$$

que no tiene límite por la oscilación del coseno. No se contradice la regla: su hipótesis sobre el límite del cociente de derivadas no se cumple, así que no aporta conclusión.

## Casos en los que está prohibida

No debe aplicarse directamente en estas situaciones:

- El cociente tiende a $c/0$ con $c\\neq0$. Se estudian signos y límites laterales.
- Numerador y denominador tienen límites finitos no nulos.
- La expresión es una suma, producto, diferencia o potencia sin transformar.
- Alguna función no es derivable en el entorno lateral considerado.
- Se deriva el cociente completo en vez de numerador y denominador por separado.

### Ejemplo 11 — no existe una forma indeterminada

Para

$$
\\lim_{x\\to0}\\frac{1+x}{x},
$$

el numerador tiende a $1$ y el denominador a $0$. L'Hôpital daría incorrectamente $1$ si se aplicara sin comprobar la forma. En realidad,

$$
\\lim_{x\\to0^-}\\frac{1+x}{x}=-\\infty,
\\qquad
\\lim_{x\\to0^+}\\frac{1+x}{x}=+\\infty.
$$

El límite bilateral no existe.

## Límites laterales y parámetros

La regla puede aplicarse por separado a cada lateral. Esto es necesario si aparecen logaritmos, raíces o denominadores cuyo dominio solo permite acercarse desde un lado.

### Ejemplo 12 — parámetro para eliminar el término dominante

Determina $a$ para que exista un límite finito

$$
\\lim_{x\\to0}\\frac{\\ln(1+x)-ax}{x^2}
$$

y calcula su valor.

El denominador tiende a cero. El numerador también tiende a cero para cualquier $a$, así que la primera aplicación es válida:

$$
\\lim_{x\\to0}
\\frac{1/(1+x)-a}{2x}.
$$

Para que este cociente no tenga numerador no nulo sobre cero, debe cumplirse

$$
1-a=0,
$$

es decir, $a=1$. Solo con ese valor reaparece la forma $0/0$ y podemos derivar otra vez:

$$
\\lim_{x\\to0}\\frac{-1/(1+x)^2}{2}
=-\\frac12.
$$

Por tanto,

$$
\\boxed{a=1,
\\qquad
\\lim_{x\\to0}\\frac{\\ln(1+x)-x}{x^2}=-\\frac12}.
$$

Este tipo de ejercicio no consiste en aplicar la regla hasta que aparezca un número. Primero hay que escoger el parámetro que cancela el término de primer orden.

### Ejemplo 13 — límite lateral con logaritmo

Calcula

$$
\\lim_{x\\to0^+}\\frac{\\ln x}{1/x}.
$$

La expresión solo está definida para $x>0$ y tiene forma $(-\\infty)/\\infty$. Al derivar,

$$
\\frac{1/x}{-1/x^2}=-x\\to0.
$$

Luego el límite es $0$, desde valores negativos. Escribir $x\\to0$ sin el signo derecho ocultaría la restricción del logaritmo.

## L'Hôpital e integrales impropias

La regla puede ayudar a evaluar los límites que aparecen al calcular una integral impropia, pero no sustituye su definición. Por ejemplo, tras integrar por partes puede aparecer

$$
\\lim_{b\\to\\infty}be^{-b}
=\\lim_{b\\to\\infty}\\frac b{e^b}=0.
$$

L'Hôpital justifica el último límite. La convergencia de la integral exige además haber reemplazado el extremo infinito, calculado en un intervalo finito y tomado todos los límites necesarios. La guía de [integrales impropias](/blog/integrales-impropias-convergencia-ejercicios/) desarrolla esa estructura.

## Comparación con desarrollos de Taylor

Cuando se conocen desarrollos locales, Taylor puede mostrar qué términos se cancelan y cuál es el primer orden que sobrevive. L'Hôpital suele llegar al mismo coeficiente mediante derivaciones repetidas.

### Ejemplo 14 — cancelación de segundo orden

Calcula

$$
\\lim_{x\\to0}\\frac{e^x-\\cos x-x}{x^2}.
$$

La sustitución produce $0/0$. Derivamos:

$$
\\lim_{x\\to0}\\frac{e^x+\\sin x-1}{2x}.
$$

Sigue siendo $0/0$. Una segunda aplicación da

$$
\\lim_{x\\to0}\\frac{e^x+\\cos x}{2}=1.
$$

El desarrollo local explica el mismo resultado:

$$
e^x=1+x+\\frac{x^2}{2}+o(x^2),
\\qquad
\\cos x=1-\\frac{x^2}{2}+o(x^2).
$$

Al restar, los términos constantes y lineales se cancelan y queda $x^2+o(x^2)$. Dividir por $x^2$ produce el límite $1$.

L'Hôpital es más mecánica; Taylor hace visible el orden de la cancelación. Si un ejercicio pide justificar sin desarrollos, se usa la regla. Si se estudian equivalencias o aproximaciones, Taylor puede aportar más información.

## Cuándo detener las aplicaciones repetidas

Después de cada derivación se vuelve a sustituir. Si aparece un número dividido por otro número no nulo, se evalúa y se termina. Si aparece una forma no autorizada, no se sigue derivando por costumbre.

También hay que detenerse si el nuevo cociente resulta más difícil y existe otra vía. En cocientes racionales, por ejemplo, dividir por la potencia dominante suele resolver el límite de inmediato. En expresiones oscilantes, una cota puede ser más útil que las derivadas.

Una cadena larga de aplicaciones aumenta el riesgo de perder factores de la regla de la cadena. Conviene simplificar el cociente después de cada paso antes de decidir si se repite.

## Cómo elegir entre L'Hôpital y otra técnica

| Situación | Técnica preferente | Motivo |
|---|---|---|
| Polinomios factorizables | Factorización | Muestra factores y discontinuidades evitables |
| Diferencia con raíces | Conjugado | Elimina $\\infty-\\infty$ o $0/0$ |
| Cociente con exponenciales o logaritmos | L'Hôpital | Las derivadas suelen simplificar |
| Cociente de polinomios en infinito | Términos dominantes | Más breve y estructural |
| Producto $0\\cdot\\infty$ | Convertir en cociente | La regla no actúa sobre productos |
| Potencia indeterminada | Logaritmo y después L'Hôpital | Se transforma el exponente |
| Oscilación acotada | Teorema del encaje | Derivar puede destruir la cota útil |

La mejor solución no es la que utiliza la técnica más avanzada, sino la que justifica el límite con menos pasos y deja visible la razón matemática.

## Errores frecuentes

- **Aplicarla antes de comprobar la forma.** Solo $0/0$ y $\\infty/\\infty$ están autorizadas directamente.
- **Usar la regla del cociente.** Se calcula $f'/g'$, no $(f/g)'$.
- **Derivar solo una parte.** Todo el numerador y todo el denominador deben derivarse.
- **Repetir automáticamente.** Cada nueva aplicación exige otra forma indeterminada válida.
- **Olvidar la regla de la cadena.** Derivar $e^{x^2}$ o $\\ln(g(x))$ requiere la derivada interior.
- **No transformar productos, diferencias o potencias.** La forma original debe convertirse primero.
- **Concluir que el límite no existe si falla el cociente de derivadas.** Puede resolverse por otro método.
- **Ignorar los laterales.** Las hipótesis y conclusiones pueden cumplirse solo por un lado.

## Cómo comprobar el resultado

Escribe en cada línea la forma que aparece después de sustituir. Así queda justificada cada aplicación. Al terminar, contrasta el signo y el orden de crecimiento: un logaritmo debe crecer más despacio que una potencia positiva, y una exponencial más rápido que cualquier potencia fija.

Si el resultado contradice una factorización simple o una tabla de signos lateral, revisa la transformación. Una comprobación numérica cerca del punto puede detectar fallos, aunque no sustituye la demostración.

## Ejercicios propuestos

1. $\\displaystyle\\lim_{x\\to0}\\frac{e^{2x}-1}{x}$
2. $\\displaystyle\\lim_{x\\to0}\\frac{\\ln(1+x)-x}{x^2}$
3. $\\displaystyle\\lim_{x\\to\\infty}\\frac{x^3}{e^x}$
4. $\\displaystyle\\lim_{x\\to\\infty}\\frac{\\ln x}{\\sqrt{x}}$
5. $\\displaystyle\\lim_{x\\to0^+}x^2\\ln x$
6. $\\displaystyle\\lim_{x\\to\\infty}x\\left(e^{1/x}-1\\right)$
7. $\\displaystyle\\lim_{x\\to0}\\left(\\frac1x-\\frac1{\\sin x}\\right)$
8. $\\displaystyle\\lim_{x\\to\\infty}\\left(1+\\frac2x\\right)^{3x}$
9. Decide si L'Hôpital puede aplicarse directamente a $\\lim_{x\\to0}(1+x)/x^2$.
10. Resuelve $\\lim_{x\\to0}(1-\\cos x)/x^2$ por L'Hôpital y comprueba el número de aplicaciones.

## Soluciones

**1. Una aplicación.** Es $0/0$:

$$
\\lim_{x\\to0}\\frac{2e^{2x}}1=\\boxed{2}.
$$

**2. Dos aplicaciones.**

$$
\\lim_{x\\to0}\\frac{1/(1+x)-1}{2x}
$$

sigue siendo $0/0$. Derivando otra vez,

$$
\\lim_{x\\to0}\\frac{-1/(1+x)^2}{2}=\\boxed{-\\frac12}.
$$

**3. Exponencial dominante.** Tres aplicaciones convierten el numerador sucesivamente en $3x^2$, $6x$ y $6$:

$$
\\lim_{x\\to\\infty}\\frac6{e^x}=\\boxed{0}.
$$

**4. Logaritmo frente a raíz.**

$$
\\lim_{x\\to\\infty}\\frac{1/x}{1/(2\\sqrt{x})}
=\\lim_{x\\to\\infty}\\frac2{\\sqrt{x}}=\\boxed{0}.
$$

**5. Producto transformado.**

$$
x^2\\ln x=\\frac{\\ln x}{1/x^2}
\\xrightarrow{\\text{L'Hôpital}}
\\frac{1/x}{-2/x^3}=-\\frac{x^2}{2}\\to\\boxed{0}.
$$

**6. Producto transformado.**

$$
x(e^{1/x}-1)=\\frac{e^{1/x}-1}{1/x}.
$$

Es $0/0$. El cociente de derivadas es $e^{1/x}$, por lo que el resultado es $\\boxed{1}$.

**7. Diferencia reunida.**

$$
\\frac1x-\\frac1{\\sin x}
=\\frac{\\sin x-x}{x\\sin x}.
$$

La primera aplicación da

$$
\\lim_{x\\to0}\\frac{\\cos x-1}{\\sin x+x\\cos x},
$$

que sigue siendo $0/0$. La segunda produce

$$
\\lim_{x\\to0}\\frac{-\\sin x}{2\\cos x-x\\sin x}=\\frac02=\\boxed{0}.
$$

La regla es válida, pero reunir primero las fracciones era imprescindible para convertir $\\infty-\\infty$ en un cociente autorizado.

**8. Potencia.** Tomando logaritmos,

$$
3x\\ln(1+2/x)\\to6,
$$

de modo que el límite es $\\boxed{e^6}$.

**9. No.** La forma es $1/0$, no indeterminada. Ambos laterales tienden a $+\\infty$ porque $x^2>0$ y el numerador es positivo cerca de cero.

**10. Dos aplicaciones.** La primera produce $\\sin x/(2x)$, todavía $0/0$; la segunda produce $\\cos x/2$, cuyo límite es $\\boxed{1/2}$.

## Resumen práctico

L'Hôpital compara derivadas únicamente en formas $0/0$ o $\\infty/\\infty$. Comprueba la forma antes de cada aplicación y transforma productos, diferencias y potencias. Factorizar, racionalizar, usar equivalentes o aplicar el encaje puede ser más informativo y más breve.

La existencia del límite de $f'/g'$ permite concluir sobre $f/g$, pero su ausencia no demuestra que el límite original falle. Trata la regla como un teorema con hipótesis, no como una orden de «derivar arriba y abajo».

En una solución escrita, deja visible la forma indeterminada antes de cada flecha de L'Hôpital. Ese pequeño control documenta que la aplicación es legal y facilita localizar el paso exacto si una derivada o un signo resultan incorrectos.

Simplifica siempre el nuevo cociente antes de decidir el paso siguiente.

Si estás preparando Cálculo universitario y necesitas decidir qué técnica admite cada límite sobre tus propios ejercicios, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
`,Rn=`---
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
`,Mn=`---
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
`,In=`---
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
`;function Tn(e){const a=/^---\s*\n([\s\S]*?)\n---\s*\n?/.exec(e);if(!a)return{data:{},body:e.trim()};const i={};for(const n of a[1].split(`
`)){const s=n.indexOf(":");if(s===-1)continue;const o=n.slice(0,s).trim();let r=n.slice(s+1).trim();(r.startsWith('"')&&r.endsWith('"')||r.startsWith("'")&&r.endsWith("'"))&&(r=r.slice(1,-1)),o&&(i[o]=r)}return{data:i,body:e.slice(a[0].length).trim()}}function Nn(e){const a=e.trim().split(/\s+/).filter(Boolean).length;return Math.max(1,Math.round(a/200))}const Fn=Object.assign({"../content/blog/algebra-lineal-universidad-que-estudiar-primero-errores.md":c,"../content/blog/area-entre-dos-curvas-ejercicios-resueltos.md":l,"../content/blog/bachillerato-fisica-quimica-mol-estequiometria.md":d,"../content/blog/bachillerato-matematicas-funciones-representacion.md":u,"../content/blog/bachillerato-matematicas-sucesiones-progresiones.md":m,"../content/blog/bachillerato-matematicas-trigonometria-triangulos.md":p,"../content/blog/bachillerato-quimica-periodicidad-configuracion.md":$,"../content/blog/bachillerato-quimica-reactivo-limitante-rendimiento-pureza.md":g,"../content/blog/cambio-variables-jacobiano-integrales-dobles.md":f,"../content/blog/circuitos-corriente-continua-problemas-resueltos-universidad.md":x,"../content/blog/como-aprobar-calculo-i-ingenieria-seis-semanas.md":v,"../content/blog/como-aprobar-estadistica-psicologia-sin-base-matematica.md":b,"../content/blog/como-aprobar-fisica-i-ingenieria-sin-memorizar-formulas.md":y,"../content/blog/como-aprobar-matematicas-i-ade-economia.md":h,"../content/blog/como-estudiar-matematicas-sin-memorizar.md":q,"../content/blog/como-preparar-ib-mathematics-aa-ai.md":E,"../content/blog/como-preparar-pau-matematicas-ii.md":_,"../content/blog/como-resolver-limites-indeterminaciones-ejercicios.md":j,"../content/blog/continuidad-derivabilidad-diferencias-problemas.md":C,"../content/blog/derivacion-implicita-ejercicios-resueltos.md":z,"../content/blog/derivadas-integrales-universitarias-prueba-nivel-ejercicios-resueltos.md":S,"../content/blog/derivadas-parciales-gradiente-ejercicios.md":P,"../content/blog/diagramas-cuerpo-libre-metodo-errores-frecuentes.md":L,"../content/blog/econometria-desde-cero-interpretar-regresion.md":A,"../content/blog/economia-ade-matematicas-sin-perderse.md":U,"../content/blog/ecuaciones-diferenciales-identificar-metodo-correcto.md":D,"../content/blog/errores-comunes-inferencia-estadistica.md":w,"../content/blog/eso-fisica-quimica-densidad-presion-flotacion.md":R,"../content/blog/eso-fisica-quimica-electricidad-circuitos.md":M,"../content/blog/eso-fisica-quimica-energia-mecanica.md":I,"../content/blog/eso-fisica-quimica-formulacion-inorganica.md":T,"../content/blog/eso-fisica-quimica-leyes-newton-dinamica.md":N,"../content/blog/eso-fisica-quimica-mezclas-disoluciones-separacion.md":F,"../content/blog/eso-fisica-quimica-sonido-ondas.md":H,"../content/blog/eso-matematicas-ecuaciones-sistemas-estudiar.md":O,"../content/blog/eso-matematicas-polinomios-factorizacion.md":B,"../content/blog/eso-matematicas-porcentajes-interes-compuesto.md":k,"../content/blog/eso-matematicas-probabilidad-estudiar.md":Q,"../content/blog/estadistica-descriptiva-eso-cuartiles-rango-diagrama-caja.md":G,"../content/blog/estadistica-descriptiva-eso-media-mediana-moda.md":V,"../content/blog/estadistica-desde-cero-para-elegir-contrastes.md":W,"../content/blog/estequiometria-universitaria-ejercicios-resueltos.md":J,"../content/blog/estudio-completo-funcion-paso-a-paso.md":K,"../content/blog/fisica-y-quimica-como-plantear-problemas.md":X,"../content/blog/gcse-chemistry-acids-bases-salts-en.md":Z,"../content/blog/gcse-chemistry-acids-bases-salts.md":Y,"../content/blog/gcse-chemistry-bonding-revision-en.md":ee,"../content/blog/gcse-chemistry-bonding-revision.md":ne,"../content/blog/gcse-chemistry-electrolysis-electrode-products-en.md":ae,"../content/blog/gcse-chemistry-electrolysis-electrode-products.md":ie,"../content/blog/gcse-chemistry-equations-moles-revision-en.md":oe,"../content/blog/gcse-chemistry-equations-moles-revision.md":re,"../content/blog/gcse-chemistry-rates-collision-theory-en.md":se,"../content/blog/gcse-chemistry-rates-collision-theory.md":te,"../content/blog/gcse-maths-algebra-graphs-revision-en.md":ce,"../content/blog/gcse-maths-algebra-graphs-revision.md":le,"../content/blog/gcse-maths-histograms-cumulative-frequency-en.md":de,"../content/blog/gcse-maths-histograms-cumulative-frequency.md":ue,"../content/blog/gcse-maths-probability-trees-conditional-en.md":me,"../content/blog/gcse-maths-probability-trees-conditional.md":pe,"../content/blog/gcse-maths-revision-plan-foundation-higher-en.md":$e,"../content/blog/gcse-maths-revision-plan-foundation-higher.md":ge,"../content/blog/gcse-maths-transformations-vectors-en.md":fe,"../content/blog/gcse-maths-transformations-vectors.md":xe,"../content/blog/gcse-maths-trigonometry-bearings-en.md":ve,"../content/blog/gcse-maths-trigonometry-bearings.md":be,"../content/blog/gcse-physics-electricity-revision-en.md":ye,"../content/blog/gcse-physics-electricity-revision.md":he,"../content/blog/gcse-physics-energy-work-power-efficiency-en.md":qe,"../content/blog/gcse-physics-energy-work-power-efficiency.md":Ee,"../content/blog/gcse-physics-forces-exam-questions-en.md":_e,"../content/blog/gcse-physics-forces-exam-questions.md":je,"../content/blog/gcse-physics-radioactivity-half-life-en.md":Ce,"../content/blog/gcse-physics-radioactivity-half-life.md":ze,"../content/blog/gcse-physics-space-stars-life-cycle-en.md":Se,"../content/blog/gcse-physics-space-stars-life-cycle.md":Pe,"../content/blog/gcse-physics-thermal-heating-curves-en.md":Le,"../content/blog/gcse-physics-thermal-heating-curves.md":Ae,"../content/blog/gcse-physics-waves-refraction-en.md":Ue,"../content/blog/gcse-physics-waves-refraction.md":De,"../content/blog/gravitacion-eso-ley-universal-peso-ejercicios.md":we,"../content/blog/ib-gcse-como-preparar-examenes-internacionales.md":Re,"../content/blog/integracion-por-partes-formula-ejercicios-resueltos.md":Me,"../content/blog/integracion-por-sustitucion-cambio-variable-ejercicios.md":Ie,"../content/blog/integral-definida-e-indefinida-diferencias-ejemplos.md":Te,"../content/blog/integrales-dobles-ejercicios-resueltos.md":Ne,"../content/blog/integrales-funciones-racionales-fracciones-parciales.md":Fe,"../content/blog/integrales-impropias-convergencia-ejercicios.md":He,"../content/blog/matrices-determinantes-sistemas-ecuaciones-guia.md":Oe,"../content/blog/maximos-minimos-varias-variables-ejercicios.md":Be,"../content/blog/metodos-de-integracion-como-elegir.md":ke,"../content/blog/microeconomia-i-tipos-problemas-examen.md":Qe,"../content/blog/mru-eso-movimiento-rectilineo-uniforme-ejercicios.md":Ge,"../content/blog/mrua-eso-movimiento-rectilineo-uniformemente-acelerado-ejercicios.md":Ve,"../content/blog/p-valor-intervalo-confianza-tamano-efecto-ejemplo.md":We,"../content/blog/pau-ccss-inferencia-intervalos-confianza.md":Je,"../content/blog/pau-ccss-matrices-modelos-economicos.md":Ke,"../content/blog/pau-ccss-programacion-lineal-problemas.md":Xe,"../content/blog/pau-corregir-simulacros-plan-estudio.md":Ze,"../content/blog/pau-fisica-campo-gravitatorio-satelites.md":Ye,"../content/blog/pau-fisica-cuantica-efecto-fotoelectrico.md":en,"../content/blog/pau-fisica-electromagnetismo-estudiar.md":nn,"../content/blog/pau-fisica-movimiento-armonico-simple.md":an,"../content/blog/pau-fisica-nuclear-defecto-masa.md":on,"../content/blog/pau-fisica-ondas-resolver-problemas.md":rn,"../content/blog/pau-fisica-optica-lentes-espejos.md":sn,"../content/blog/pau-fisica-relatividad-especial.md":tn,"../content/blog/pau-matematicas-derivabilidad-parametros-tangentes.md":cn,"../content/blog/pau-matematicas-geometria-metrica-distancias-angulos.md":ln,"../content/blog/pau-matematicas-ii-vectores-rectas-planos.md":dn,"../content/blog/pau-matematicas-integrales-areas.md":un,"../content/blog/pau-matematicas-limites-asintotas.md":mn,"../content/blog/pau-matematicas-matrices-determinantes-gauss.md":pn,"../content/blog/pau-matematicas-probabilidad-distribuciones.md":$n,"../content/blog/pau-matematicas-sistemas-parametro-rouche-frobenius.md":gn,"../content/blog/pau-quimica-acido-base-ph-calculos.md":fn,"../content/blog/pau-quimica-enlace-geometria-molecular.md":xn,"../content/blog/pau-quimica-equilibrio-quimico-estudiar.md":vn,"../content/blog/pau-quimica-estequiometria-gases-disoluciones.md":bn,"../content/blog/pau-quimica-estructura-atomica-configuracion.md":yn,"../content/blog/pau-quimica-organica-mapa-reacciones.md":hn,"../content/blog/pau-quimica-pilas-electroquimica-redox.md":qn,"../content/blog/pau-quimica-termoquimica-hess-entalpia.md":En,"../content/blog/preparar-pau-desde-verano-plan-septiembre.md":_n,"../content/blog/preparar-selectividad-con-calendario.md":jn,"../content/blog/primer-proyecto-python-principiantes-datos.md":Cn,"../content/blog/probabilidad-condicionada-bayes-problemas-resueltos.md":zn,"../content/blog/problemas-optimizacion-derivadas-ejercicios-resueltos.md":Sn,"../content/blog/python-y-sql-para-empezar-en-datos.md":Pn,"../content/blog/que-prueba-estadistica-utilizar-guia-test-correcto.md":Ln,"../content/blog/que-son-las-derivadas-y-para-que-se-utilizan.md":An,"../content/blog/que-son-las-integrales-y-para-que-se-utilizan.md":Un,"../content/blog/r-spss-jamovi-python-programa-estadistico-universidad.md":Dn,"../content/blog/regla-lhopital-cuando-usarla-ejercicios.md":wn,"../content/blog/regresion-lineal-anova-cuando-utilizar-interpretar-resultados.md":Rn,"../content/blog/teorema-fundamental-calculo-ejemplos-ejercicios.md":Mn,"../content/blog/transicion-al-sector-it-en-6-meses.md":In}),t=Object.entries(Fn).map(([e,a])=>{const i=e.split("/").pop().replace(/\.md$/,""),{data:n,body:s}=Tn(a);return{slug:i,title:n.title??i,seoTitle:n.seoTitle??"",date:n.date??"",updated:n.updated??n.date??"",description:n.description??"",tag:n.tag??"Blog",category:n.category??n.tag??"Blog",image:n.image??"/favicon.svg",language:n.language==="en"?"en":"es",translation:n.translation??"",relatedService:n.relatedService??"/contacto/",relatedPosts:n.relatedPosts?n.relatedPosts.split(",").map(o=>o.trim()).filter(Boolean):[],readingMinutes:Nn(s),body:s}}).sort((e,a)=>e.date<a.date?1:e.date>a.date?-1:0);function On(){return t}function Bn(e,a=9){return Math.max(1,Math.ceil(e.length/a))}function kn(e,a,i=9){const n=(a-1)*i;return e.slice(n,n+i)}function Hn(e){return t.find(a=>a.slug===e)}function Qn(e){return t.filter(a=>a.category===e)}function Gn(e,a=3){const i=e.relatedPosts.map(o=>Hn(o)).filter(o=>!!o),s=[...t.filter(o=>o.language===e.language),...t].filter(o=>o.slug!==e.slug&&!i.some(r=>r.slug===o.slug));return[...i,...s].slice(0,a)}function Vn(e,a="es"){if(!e)return"";const i=new Date(e);return Number.isNaN(i.getTime())?e:i.toLocaleDateString(a==="en"?"en-GB":"es-ES",{day:"numeric",month:"long",year:"numeric"})}export{Bn as a,Hn as b,kn as c,On as d,Gn as e,Vn as f,Qn as g};
