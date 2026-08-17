---
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
- $A(x)=\int_a^x f(t)\,dt$ es la acumulación desde un punto fijo $a$ hasta $x$.
- $F(x)$ es una primitiva de $f$, es decir, $F'(x)=f(x)$.

La primera parte relaciona $A$ con $f$; la segunda relaciona la integral definida con cualquier primitiva $F$. Esta distinción completa lo explicado en la guía sobre [integral definida e indefinida](/blog/integral-definida-e-indefinida-diferencias-ejemplos/).

![La integral como acumulación del área bajo una curva](/assets/latex/integral-area.svg)

Si $f$ es positiva, $A(x)$ representa el área acumulada bajo su gráfica. Cuando el extremo derecho avanza una cantidad pequeña $h$, se añade una franja de anchura $h$ y altura aproximadamente $f(x)$. Por eso el incremento de área es aproximadamente $f(x)h$, y la tasa de cambio del área es $f(x)$.

## Primera parte: derivar una función definida mediante una integral

Sea $f$ continua en un intervalo que contiene a $a$ y $x$. Definimos

$$
A(x)=\int_a^x f(t)\,dt.
$$

Entonces $A$ es derivable y

$$
\boxed{A'(x)=f(x)}.
$$

La letra $t$ es una variable muda: solo sirve para recorrer el intervalo de integración. Podríamos escribir $u$, $s$ o cualquier otra letra sin cambiar la función $A(x)$. No conviene escribir $\int_a^x f(x)\,dx$ cuando después vamos a derivar respecto de $x$, porque el mismo símbolo quedaría usado como variable libre y variable de integración.

### Justificación mediante el cociente incremental

Partimos de la definición de derivada:

$$
\frac{A(x+h)-A(x)}{h}.
$$

La aditividad de la integral permite escribir

$$
A(x+h)-A(x)
=\int_x^{x+h}f(t)\,dt.
$$

Por tanto,

$$
\frac{A(x+h)-A(x)}{h}
=\frac1h\int_x^{x+h}f(t)\,dt.
$$

El miembro derecho es el valor medio de $f$ en el intervalo corto entre $x$ y $x+h$. Si $f$ es continua, ese promedio se aproxima a $f(x)$ cuando $h$ tiende a cero. Luego

$$
A'(x)=\lim_{h\to0}\frac1h\int_x^{x+h}f(t)\,dt=f(x).
$$

Esta demostración aclara el papel de la continuidad: garantiza que, en intervalos cada vez más pequeños, el promedio de la función converge a su valor en el punto.

### Ejemplo 1 — extremo superior igual a x

Sea

$$
A(x)=\int_0^x(1+t^2)\,dt.
$$

Nos piden $A'(x)$, no el valor numérico de una integral. El extremo superior es exactamente $x$, así que la primera parte da

$$
\boxed{A'(x)=1+x^2}.
$$

Podemos comprobarlo calculando primero la acumulación:

$$
A(x)=\left[t+\frac{t^3}{3}\right]_0^x
=x+\frac{x^3}{3},
$$

y derivando. Se obtiene de nuevo $1+x^2$.

La ventaja del teorema aparece cuando la primitiva no es elemental: para derivar $\int_0^x e^{-t^2}dt$ no necesitamos encontrar una fórmula cerrada; su derivada es $e^{-x^2}$.

### Ejemplo 2 — el extremo variable está abajo

Calcula la derivada de

$$
B(x)=\int_x^3\sqrt{1+t^4}\,dt.
$$

Invertimos los límites:

$$
B(x)=-\int_3^x\sqrt{1+t^4}\,dt.
$$

Ahora aplicamos el teorema:

$$
\boxed{B'(x)=-\sqrt{1+x^4}}.
$$

El signo negativo tiene sentido geométrico. Al aumentar $x$, el intervalo $[x,3]$ se acorta y la acumulación disminuye.

## Límites variables y regla de la cadena

Si el extremo superior es una función $g(x)$,

$$
H(x)=\int_a^{g(x)}f(t)\,dt,
$$

se compone la función de acumulación con $g$. La regla de la cadena produce

$$
\boxed{H'(x)=f(g(x))g'(x)}.
$$

No basta con sustituir $t$ por $g(x)$: hay que multiplicar por la derivada del límite.

### Ejemplo 3 — extremo superior compuesto

Deriva

$$
H(x)=\int_1^{x^2}\ln(1+t)\,dt.
$$

El integrando es $f(t)=\ln(1+t)$ y el extremo es $g(x)=x^2$. Por tanto,

$$
H'(x)=\ln(1+x^2)\cdot2x.
$$

Así,

$$
\boxed{H'(x)=2x\ln(1+x^2)}.
$$

No necesitamos integrar el logaritmo. La pregunta se resuelve reconociendo teorema fundamental más regla de la cadena.

### Ambos extremos dependen de x

Para

$$
G(x)=\int_{u(x)}^{v(x)}f(t)\,dt,
$$

elegimos un punto fijo $c$ y descomponemos:

$$
G(x)=\int_c^{v(x)}f(t)\,dt-\int_c^{u(x)}f(t)\,dt.
$$

Al derivar,

$$
\boxed{G'(x)=f(v(x))v'(x)-f(u(x))u'(x)}.
$$

El límite superior aporta con signo positivo y el inferior con signo negativo.

### Ejemplo 4 — dos límites variables

Sea

$$
G(x)=\int_x^{2x}e^{t^2}\,dt.
$$

No existe una primitiva elemental de $e^{t^2}$, pero eso no impide derivar $G$. Aplicamos la fórmula:

$$
G'(x)=e^{(2x)^2}\cdot2-e^{x^2}\cdot1.
$$

Por tanto,

$$
\boxed{G'(x)=2e^{4x^2}-e^{x^2}}.
$$

La comprobación estructural es sencilla: aparecen dos contribuciones, una por cada frontera móvil, y cada una incluye la velocidad de su frontera.

## Segunda parte: calcular una integral mediante una primitiva

Sea $f$ continua en $[a,b]$ y sea $F$ una primitiva de $f$ en ese intervalo. Entonces

$$
\boxed{\int_a^b f(x)\,dx=F(b)-F(a)}.
$$

Esta igualdad se conoce también como fórmula de Newton–Leibniz. La notación habitual es

$$
\int_a^b f(x)\,dx
=\left[F(x)\right]_a^b
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
A(x)=\int_a^x f(t)dt.
$$

La primera parte asegura que $A'(x)=f(x)$. Por tanto, $A$ es una primitiva de $f$. Si $F$ es cualquier otra primitiva, ambas difieren en una constante:

$$
A(x)=F(x)+C.
$$

Como $A(a)=\int_a^a f(t)dt=0$, resulta $0=F(a)+C$ y, por tanto, $C=-F(a)$. Así,

$$
A(x)=F(x)-F(a).
$$

Al tomar $x=b$ obtenemos

$$
\int_a^b f(t)dt=A(b)=F(b)-F(a).
$$

Esta deducción muestra que Newton–Leibniz no es una regla añadida desde fuera: surge al identificar la función de acumulación como una primitiva concreta, la que vale cero en $a$.

## Orientación y aditividad antes de calcular

Las integrales definidas cumplen propiedades que permiten reorganizar intervalos:

$$
\int_a^a f(x)dx=0,
\qquad
\int_b^a f(x)dx=-\int_a^b f(x)dx,
$$

y, para cualquier punto $c$ del dominio,

$$
\int_a^b f(x)dx
=\int_a^c f(x)dx+\int_c^b f(x)dx.
$$

Estas igualdades son coherentes con la fórmula $F(b)-F(a)$. Por ejemplo,

$$
\int_a^c f+\int_c^b f
=[F(c)-F(a)]+[F(b)-F(c)]
=F(b)-F(a).
$$

Los términos $F(c)$ se cancelan. La aditividad permite dividir en puntos donde cambia una fórmula, el signo del integrando o la frontera de una región.

### Ejemplo 5 bis — reconstruir una integral con datos parciales

Supón que

$$
\int_0^3f(x)dx=7
\qquad\text{y}\qquad
\int_3^5f(x)dx=-2.
$$

Sin conocer la fórmula de $f$ podemos concluir

$$
\int_0^5f(x)dx=7+(-2)=5.
$$

Además,

$$
\int_5^0f(x)dx=-5.
$$

El dato negativo en $[3,5]$ significa acumulación neta negativa; no necesariamente que el área geométrica sea negativa.

### Ejemplo 5 — integral polinómica

Calcula

$$
\int_1^3(2x-1)\,dx.
$$

Una primitiva es $F(x)=x^2-x$. Aplicamos la fórmula:

$$
\begin{aligned}
\int_1^3(2x-1)\,dx
&=[x^2-x]_1^3\\
&=(9-3)-(1-1)\\
&=6.
\end{aligned}
$$

**Comprobación geométrica.** En $[1,3]$ la función es positiva, con alturas $1$ y $5$. El área del trapecio es

$$
\frac{1+5}{2}\cdot2=6,
$$

coincidente con el cálculo analítico.

### Ejemplo 6 — valor absoluto y cambio de fórmula

Calcula

$$
\int_{-1}^{2}|x|\,dx.
$$

El integrando cambia de expresión en $x=0$:

$$
|x|=
\begin{cases}
-x,&x<0,\\
x,&x\geq0.
\end{cases}
$$

Debemos separar:

$$
\begin{aligned}
\int_{-1}^{2}|x|\,dx
&=\int_{-1}^{0}(-x)\,dx+\int_0^2x\,dx\\
&=\left[-\frac{x^2}{2}\right]_{-1}^{0}
+\left[\frac{x^2}{2}\right]_0^2\\
&=\frac12+2=\frac52.
\end{aligned}
$$

No existe una única expresión polinómica válida a ambos lados del cero. El teorema se aplica en cada tramo y la aditividad reúne los resultados.

## Cómo reconocer qué parte hay que usar

| Enunciado | Herramienta principal | Señal decisiva |
|---|---|---|
| «Calcula $\int_a^b f(x)dx$» | Segunda parte | Hay límites numéricos y se busca un valor |
| «Deriva $\int_a^x f(t)dt$» | Primera parte | El extremo es la variable |
| «Deriva $\int_a^{g(x)}f(t)dt$» | Primera parte + cadena | El extremo es una función de $x$ |
| «Deriva $\int_{u(x)}^{v(x)}f(t)dt$» | Fórmula de Leibniz para extremos | Se mueven ambas fronteras |
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
A(x)=\int_0^x(t^2-1)\,dt.
$$

Por el teorema,

$$
A'(x)=x^2-1=(x-1)(x+1).
$$

Así, $A$ crece en $(-\infty,-1)$ y $(1,\infty)$, y decrece en $(-1,1)$. Tiene un máximo local en $x=-1$ y un mínimo local en $x=1$.

Si queremos comprobarlo con la fórmula explícita,

$$
A(x)=\frac{x^3}{3}-x.
$$

Pero esta primitiva no era necesaria para obtener los intervalos de crecimiento.

## Teorema del valor medio para integrales

Si $f$ es continua en $[a,b]$, existe al menos un punto $c\in[a,b]$ tal que

$$
\int_a^b f(x)\,dx=f(c)(b-a).
$$

Equivale a afirmar que alguna altura real de la función produce un rectángulo con la misma área neta. El valor medio de $f$ es

$$
f_{\mathrm{medio}}=\frac1{b-a}\int_a^b f(x)\,dx.
$$

### Ejemplo 8 — localizar el valor medio

Para $f(x)=x^2$ en $[0,2]$,

$$
f_{\mathrm{medio}}
=\frac12\int_0^2x^2dx
=\frac12\left[\frac{x^3}{3}\right]_0^2
=\frac43.
$$

Buscamos $c\in[0,2]$ con $c^2=4/3$. Como $c$ debe ser no negativo,

$$
\boxed{c=\frac{2}{\sqrt3}}.
$$

La continuidad asegura la existencia; en este caso la monotonía de $x^2$ en $[0,2]$ hace que el punto sea único.

## Acumulación de una tasa: unidades e interpretación

Si $r(t)$ mide una tasa en «unidades por segundo», entonces

$$
Q(b)-Q(a)=\int_a^b r(t)dt
$$

mide unidades acumuladas. El diferencial $dt$ aporta la dimensión de tiempo. El teorema fundamental afirma a la vez que $Q'(t)=r(t)$: la derivada recupera la tasa instantánea.

### Ejemplo 8 bis — velocidad, desplazamiento y distancia

Una partícula tiene velocidad

$$
v(t)=3t^2-6t
$$

en metros por segundo durante $0\leq t\leq3$. El desplazamiento es

$$
\begin{aligned}
\int_0^3v(t)dt
&=[t^3-3t^2]_0^3\\
&=27-27=0\text{ m}.
\end{aligned}
$$

Esto no significa que la partícula no se haya movido. Como $v(t)=3t(t-2)$, la velocidad es negativa entre $0$ y $2$ y positiva entre $2$ y $3$. La distancia total requiere integrar $|v|$:

$$
\begin{aligned}
D
&=-\int_0^2v(t)dt+\int_2^3v(t)dt\\
&=-[t^3-3t^2]_0^2+[t^3-3t^2]_2^3\\
&=4+4=8\text{ m}.
\end{aligned}
$$

El desplazamiento suma con signo; la distancia suma la magnitud de cada tramo. El punto $t=2$ se obtiene resolviendo dónde cambia el signo de la tasa.

### Ejemplo 8 ter — reconstruir una cantidad a partir de su tasa

La tasa de entrada de agua en un depósito es $r(t)=4-t$ litros por minuto y al inicio hay $10$ litros. Para $0\leq t\leq3$, la cantidad es

$$
Q(t)=10+\int_0^t(4-s)ds
=10+4t-\frac{t^2}{2}.
$$

En el minuto tres,

$$
Q(3)=10+12-\frac92=\frac{35}{2}\text{ litros}.
$$

Al derivar la fórmula obtenemos $Q'(t)=4-t$, lo que comprueba que la cantidad reconstruida tiene la tasa exigida. El valor inicial también se verifica: $Q(0)=10$.

## Hipótesis y casos que requieren cuidado

La continuidad de $f$ en $[a,b]$ es una condición suficiente y cómoda para el teorema en cursos iniciales. Hay versiones más generales, pero no conviene aplicar mecánicamente la fórmula sin revisar el dominio.

Si el integrando se hace infinito dentro del intervalo o el extremo es infinito, estamos ante una [integral impropia](/blog/integrales-impropias-convergencia-ejercicios/) y hay que introducir límites. Por ejemplo, no es válido escribir

$$
\int_{-1}^{1}\frac1x\,dx=[\ln|x|]_{-1}^{1}=0.
$$

La función no está definida en $x=0$ y las dos integrales laterales divergen. La sustitución formal de extremos ha ocultado la singularidad.

También puede ocurrir que $f$ sea integrable pero no tenga una primitiva expresable con funciones elementales. La función

$$
A(x)=\int_0^x e^{-t^2}dt
$$

sigue estando bien definida y satisface $A'(x)=e^{-x^2}$. La dificultad algebraica de encontrar una fórmula cerrada no invalida el teorema.

### Qué no afirma el teorema

El teorema no dice que toda función tenga una primitiva elemental ni que toda integral represente un área positiva. Tampoco autoriza a atravesar una discontinuidad infinita como si el integrando fuera continuo.

La primera parte parte de una acumulación bien definida y concluye derivabilidad bajo hipótesis adecuadas. La segunda parte requiere una primitiva válida en el intervalo relevante. Si una fórmula de primitiva solo vale en ciertos intervalos del dominio, cada componente debe tratarse por separado.

Por ejemplo, $\ln|x|$ es una primitiva de $1/x$ tanto en $(-\infty,0)$ como en $(0,\infty)$, pero eso no permite aplicar Newton–Leibniz en $[-1,1]$: el intervalo cruza un punto donde el integrando no existe. Revisar el dominio precede siempre a evaluar extremos.

El teorema tampoco convierte automáticamente una integral neta en área. Si $f$ cambia de signo,

$$
\int_a^b f(x)dx
$$

resta la contribución situada bajo el eje. Para obtener área geométrica se integra $|f|$ o se divide en los ceros y se cambia el signo de los tramos negativos.

## Ejemplo 9 — ecuación con una función integral

Encuentra los puntos críticos de

$$
H(x)=\int_1^{x^2}(t^3-4t)\,dt.
$$

Derivamos sin calcular la integral:

$$
H'(x)=\left[(x^2)^3-4x^2\right]2x
=2x^3(x^4-4).
$$

Los puntos críticos satisfacen

$$
2x^3(x^2-2)(x^2+2)=0.
$$

Los reales son

$$
x=0,\qquad x=\pm\sqrt2.
$$

**Comprobación.** El factor $x^2+2$ nunca se anula en los reales. Sustituir los tres valores en la expresión factorizada confirma que $H'(x)=0$.

## Ejemplo 10 — integral definida mediante sustitución

Calcula

$$
\int_0^1 2x\cos(x^2)\,dx.
$$

Reconocemos la derivada de $x^2$. Tomamos $u=x^2$, de modo que $du=2x\,dx$. Transformamos también los límites: si $x=0$, $u=0$; si $x=1$, $u=1$. Entonces

$$
\int_0^1 2x\cos(x^2)dx
=\int_0^1\cos u\,du
=[\sin u]_0^1
=\sin1.
$$

Aquí trabajan dos ideas distintas: el cambio de variable simplifica el integrando y la segunda parte del teorema evalúa la integral resultante.

## Problema tipo examen — derivada segunda y tangente

Sea

$$
F(x)=\int_0^{x^2+1}\frac{t}{1+t^2}dt.
$$

Se pide hallar $F'(x)$, $F''(x)$ y la recta tangente a la gráfica de $F$ en $x=0$.

Primero aplicamos teorema fundamental y cadena:

$$
F'(x)=\frac{x^2+1}{1+(x^2+1)^2}\cdot2x.
$$

Para calcular $F''(0)$ no hace falta desarrollar toda la derivada. Escribimos $F'(x)=2x\,q(x)$, donde

$$
q(x)=\frac{x^2+1}{1+(x^2+1)^2}.
$$

Entonces

$$
F''(x)=2q(x)+2xq'(x),
$$

y

$$
F''(0)=2q(0)=2\cdot\frac12=1.
$$

La pendiente de la tangente es $F'(0)=0$. Para obtener el punto,

$$
F(0)=\int_0^1\frac{t}{1+t^2}dt
=\left[\frac12\ln(1+t^2)\right]_0^1
=\frac12\ln2.
$$

Por tanto, la recta tangente es horizontal:

$$
\boxed{y=\frac12\ln2}.
$$

La comprobación reúne las dos partes del teorema: la primera proporciona la pendiente y la segunda calcula la ordenada del punto de tangencia.

## Errores frecuentes

- **Olvidar la regla de la cadena.** La derivada de $\int_a^{x^2}f(t)dt$ es $2x f(x^2)$, no $f(x^2)$.
- **Perder el signo del límite inferior.** En $\int_x^a f(t)dt$, la derivada es $-f(x)$.
- **Sustituir la variable muda de forma incorrecta.** En el extremo se evalúa todo el integrando: si $f(t)=t\sin t$, entonces $f(x^2)=x^2\sin(x^2)$.
- **Añadir $+C$ a una integral definida.** La evaluación en extremos elimina la constante.
- **Restar en orden inverso.** La fórmula es $F(b)-F(a)$.
- **Confundir integral neta con área geométrica.** Las zonas donde $f<0$ restan; para calcular área puede ser necesario dividir y cambiar el signo, como se explica en [área entre curvas](/blog/area-entre-dos-curvas-ejercicios-resueltos/).
- **Ignorar discontinuidades.** Una singularidad interior exige estudiar integrales impropias por separado.
- **Intentar hallar una primitiva que no hace falta.** Para derivar una integral con extremo variable suele bastar el teorema.

## Cómo comprobar un resultado

En una integral definida, deriva la primitiva propuesta antes de evaluar. Después revisa el signo y estima el orden de magnitud: si $m\leq f(x)\leq M$ en $[a,b]$, entonces

$$
m(b-a)\leq\int_a^bf(x)dx\leq M(b-a).
$$

En una derivada de integral con límites variables, comprueba tres elementos: evaluación del integrando en cada extremo, derivada de cada extremo y signo negativo del límite inferior.

## Ejercicios propuestos

1. Deriva $A(x)=\int_2^x(t^3+1)dt$.
2. Deriva $B(x)=\int_{x^3}^{4}\sqrt{1+t^2}dt$.
3. Deriva $C(x)=\int_{\sin x}^{x^2}\frac{dt}{1+t^2}$.
4. Calcula $\int_{-1}^{2}(3x^2-2x)dx$.
5. Calcula $\int_0^2|x-1|dx$.
6. Halla el valor medio de $f(x)=3x+1$ en $[0,4]$ y un punto donde se alcance.
7. Estudia los intervalos de crecimiento de $G(x)=\int_0^x t(t-2)dt$.
8. Calcula $\int_0^{\pi/2}\sin x\cos x\,dx$ mediante un cambio de variable.

## Soluciones

**1. Extremo directo.**

$$
\boxed{A'(x)=x^3+1}.
$$

**2. Límite inferior compuesto.** El signo es negativo y $(x^3)'=3x^2$:

$$
\boxed{B'(x)=-3x^2\sqrt{1+x^6}}.
$$

**3. Dos límites variables.**

$$
\begin{aligned}
C'(x)
&=\frac{2x}{1+x^4}
-\frac{\cos x}{1+\sin^2x}.
\end{aligned}
$$

**4. Newton–Leibniz.** Una primitiva es $x^3-x^2$:

$$
[x^3-x^2]_{-1}^{2}=4-(-2)=\boxed{6}.
$$

**5. Valor absoluto.** Separamos en $x=1$:

$$
\int_0^1(1-x)dx+\int_1^2(x-1)dx
=\frac12+\frac12=\boxed{1}.
$$

**6. Valor medio.**

$$
f_{\mathrm{medio}}=\frac14\int_0^4(3x+1)dx
=\frac14[\tfrac32x^2+x]_0^4=7.
$$

Como $3c+1=7$, se alcanza en $\boxed{c=2}$.

**7. Crecimiento.** Por el teorema, $G'(x)=x(x-2)$. Es positiva si $x<0$ o $x>2$, y negativa si $0<x<2$. Por tanto, $G$ crece en $(-\infty,0)$ y $(2,\infty)$, y decrece en $(0,2)$.

**8. Sustitución y evaluación.** Con $u=\sin x$, $du=\cos x\,dx$ y límites $0$ y $1$:

$$
\int_0^1u\,du=\left[\frac{u^2}{2}\right]_0^1=\boxed{\frac12}.
$$

## Resumen práctico

La primera parte del teorema deriva acumulaciones: $\frac{d}{dx}\int_a^x f(t)dt=f(x)$. Si el extremo es compuesto, se añade la regla de la cadena; si se mueven ambos extremos, se resta la contribución del inferior. La segunda parte calcula integrales definidas: $\int_a^b f=F(b)-F(a)$.

La comprobación esencial consiste en derivar la primitiva, respetar la orientación de los límites y revisar el dominio completo. En problemas de acumulación, interpreta además el signo y las unidades: una integral definida mide cambio neto, mientras que el área o la distancia total pueden exigir dividir el intervalo.

Antes de operar, identifica si buscas una derivada o una acumulación numérica, revisa continuidad y dominio, y separa cualquier singularidad. Si necesitas practicar estas decisiones con ejercicios de tu asignatura, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
