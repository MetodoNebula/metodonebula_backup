---
title: Métodos de integración: cómo elegir la técnica adecuada
date: 2026-08-12
updated: 2026-08-12
description: Aprende a reconocer qué método de integración conviene usar, con un árbol de decisión, ejemplos resueltos y comprobaciones por derivación.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: integracion-por-sustitucion-cambio-variable-ejercicios,integracion-por-partes-formula-ejercicios-resueltos,que-son-las-integrales-y-para-que-se-utilizan
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
\int f(x)\,dx=F(x)+C.
$$

La constante \(C\) es necesaria porque todas las funciones \(F(x)+C\) tienen la misma derivada. En una integral definida, una vez encontrada una primitiva, usamos el teorema fundamental del cálculo:

$$
\int_a^b f(x)\,dx=F(b)-F(a).
$$

Esta diferencia importa al elegir método. En una integral indefinida hay que volver a la variable original y añadir \(C\). En una definida podemos transformar también los límites y terminar en la nueva variable.

No toda función elemental tiene una primitiva expresable mediante funciones elementales. Por ejemplo, \(\int e^{-x^2}\,dx\) no se resuelve con sustitución, partes o fracciones parciales en términos elementales. Antes de encadenar técnicas sin rumbo, hay que admitir esa posibilidad.

Si necesitas afianzar el significado geométrico y de acumulación, empieza por [qué son las integrales y para qué se utilizan](/blog/que-son-las-integrales-y-para-que-se-utilizan/).

## El orden de decisión que evita intentos al azar

Conviene revisar una integral en este orden:

1. **Simplificar.** Expande, factoriza, divide polinomios, separa una fracción o usa una identidad elemental si con ello aparecen integrales inmediatas.
2. **Buscar una primitiva conocida.** Potencias, exponenciales, funciones trigonométricas básicas y formas logarítmicas no necesitan un método más sofisticado.
3. **Buscar una composición.** Si ves \(g(x)\) dentro de otra función y también aparece \(g'(x)\), prueba sustitución.
4. **Examinar productos.** Si derivar un factor lo simplifica y el otro se integra con facilidad, prueba partes.
5. **Clasificar cocientes racionales.** Si es un cociente de polinomios, haz división cuando proceda y después fracciones parciales.
6. **Reconocer estructuras trigonométricas.** Potencias de seno y coseno, secante y tangente o raíces de expresiones cuadráticas requieren identidades o sustituciones específicas.
7. **Comprobar si el problema es impropio o no elemental.** Los límites infinitos y las singularidades exigen estudiar convergencia; algunas primitivas requieren funciones especiales o métodos numéricos.

La regla práctica es sencilla: un método es prometedor si **reduce la complejidad**. Tras el cambio, la nueva integral debe ser más reconocible que la anterior. Si no lo es, revisa la elección.

| Señal en el integrando | Primera técnica que conviene probar | Pregunta de control |
| --- | --- | --- |
| Suma de potencias o términos conocidos | Linealidad e integrales inmediatas | ¿Puedo integrar término a término? |
| \(f(g(x))g'(x)\) | Sustitución | ¿Está la derivada de la función interior, quizá salvo una constante? |
| Producto como \(x e^x\), \(x\sin x\) o \(\ln x\) | Partes | ¿Derivar un factor lo simplifica? |
| \(P(x)/Q(x)\), con \(P,Q\) polinomios | División y fracciones parciales | ¿El grado del numerador es menor que el del denominador? |
| Potencias de seno, coseno, secante o tangente | Identidades trigonométricas | ¿Hay una potencia impar que pueda reservar? |
| \(\sqrt{a^2-x^2}\), \(\sqrt{a^2+x^2}\) o \(\sqrt{x^2-a^2}\) | Sustitución trigonométrica o hiperbólica | ¿Qué identidad elimina la raíz? |
| Límites infinitos o integrando no acotado | Integral impropia | ¿Existe el límite que define la integral? |

## Método 1: simplificar antes de integrar

Una forma complicada puede ocultar una suma inmediata. La simplificación no es un paso decorativo: a menudo es el método principal.

### Ejemplo 1 — cociente que se simplifica

Calcula

$$
\int \frac{x^3-2x}{x}\,dx, \qquad x\neq 0.
$$

**Qué nos piden.** Una primitiva en cualquier intervalo que no cruce \(x=0\).

**Cómo reconocer el método.** Todos los términos del numerador son divisibles por \(x\). No hacen falta ni sustitución ni fracciones parciales.

$$
\frac{x^3-2x}{x}=x^2-2.
$$

Integramos término a término:

$$
\int (x^2-2)\,dx=\frac{x^3}{3}-2x+C.
$$

**Comprobación.** Al derivar obtenemos \(x^2-2\), que coincide con el integrando simplificado. La restricción \(x\neq0\) sigue perteneciendo al problema original aunque la expresión final esté definida en cero.

### Ejemplo 2 — completar una derivada logarítmica

Calcula

$$
\int \frac{2x+5}{x^2+5x+7}\,dx.
$$

El numerador es exactamente la derivada del denominador:

$$
\frac{d}{dx}(x^2+5x+7)=2x+5.
$$

Por tanto es la forma inmediata \(\int f'(x)/f(x)\,dx\):

$$
\int \frac{2x+5}{x^2+5x+7}\,dx=\ln|x^2+5x+7|+C.
$$

Como el discriminante del denominador es \(25-28=-3\), el polinomio es siempre positivo y también podríamos escribir \(\ln(x^2+5x+7)+C\).

**Comprobación.** La derivada del logaritmo es el cociente original. La observación decisiva fue comparar numerador y derivada del denominador antes de iniciar un procedimiento más largo.

## Método 2: sustitución para deshacer la regla de la cadena

La sustitución se basa en la regla de la cadena. Si el integrando tiene la forma

$$
f(g(x))g'(x),
$$

tomamos \(u=g(x)\) y \(du=g'(x)\,dx\). La integral se convierte en \(\int f(u)\,du\).

No hace falta que \(g'(x)\) aparezca idéntica: puede faltar o sobrar una constante. Sí debe desaparecer **toda** la dependencia de \(x\) tras el cambio. La guía de [integración por sustitución y cambio de variable](/blog/integracion-por-sustitucion-cambio-variable-ejercicios/) desarrolla este criterio con más casos.

### Ejemplo 3 — composición directa

Calcula

$$
\int x\sqrt{x^2+4}\,dx.
$$

**Reconocimiento.** La raíz contiene \(x^2+4\) y fuera aparece \(x\), que es proporcional a su derivada \(2x\).

Tomamos

$$
u=x^2+4, \qquad du=2x\,dx, \qquad x\,dx=\frac{1}{2}du.
$$

Entonces

$$
\begin{aligned}
\int x\sqrt{x^2+4}\,dx
&=\frac12\int u^{1/2}\,du\\
&=\frac12\cdot\frac{2}{3}u^{3/2}+C\\
&=\frac13(x^2+4)^{3/2}+C.
\end{aligned}
$$

**Comprobación.** Aplicando la regla de la cadena:

$$
\frac{d}{dx}\left[\frac13(x^2+4)^{3/2}\right]
=\frac13\cdot\frac32(x^2+4)^{1/2}\cdot2x
=x\sqrt{x^2+4}.
$$

### Ejemplo 4 — una sustitución que no conviene

En

$$
\int x\,e^x\,dx,
$$

tomar \(u=x\) no cambia nada, y tomar \(u=e^x\) deja \(x=\ln u\), con lo que resulta \(\int \ln u\,du\). La integral no se ha simplificado de forma suficiente: hemos transformado un producto en otro problema que también exige partes. La señal correcta es que al derivar \(x\) obtenemos \(1\), mientras \(e^x\) se integra sin cambiar. Aquí conviene integración por partes.

## Método 3: integración por partes para productos

La fórmula procede de integrar la regla del producto:

$$
\int u\,dv=uv-\int v\,du.
$$

Se usa cuando podemos dividir el integrando en una parte \(u\), que al derivarse se simplifica, y otra \(dv\), que podemos integrar. También permite integrar funciones como \(\ln x\) o \(\arctan x\) escribiéndolas como producto por \(1\).

### Ejemplo 5 — producto de polinomio y exponencial

Calcula

$$
\int x e^{2x}\,dx.
$$

Elegimos \(u=x\), porque se reduce a \(1\), y \(dv=e^{2x}\,dx\):

$$
du=dx, \qquad v=\frac12e^{2x}.
$$

Aplicamos la fórmula:

$$
\begin{aligned}
\int xe^{2x}\,dx
&=\frac{x}{2}e^{2x}-\int\frac12e^{2x}\,dx\\
&=\frac{x}{2}e^{2x}-\frac14e^{2x}+C\\
&=\frac{e^{2x}}{4}(2x-1)+C.
\end{aligned}
$$

**Comprobación.** Derivar el producto final produce \(xe^{2x}\). Si tras aplicar partes la integral restante fuera más difícil que la original, la elección de \(u\) y \(dv\) debería revisarse.

### Ejemplo 6 — una función que no parece producto

Calcula

$$
\int \ln x\,dx, \qquad x>0.
$$

Escribimos \(\ln x\cdot1\). Elegimos

$$
u=\ln x, \quad dv=dx, \quad du=\frac1x\,dx, \quad v=x.
$$

Así,

$$
\int\ln x\,dx=x\ln x-\int1\,dx=x\ln x-x+C.
$$

La [guía de integración por partes](/blog/integracion-por-partes-formula-ejercicios-resueltos/) explica elecciones repetidas, integrales cíclicas y el uso en integrales definidas.

## Método 4: funciones racionales y fracciones parciales

Una función racional tiene la forma \(P(x)/Q(x)\), con \(P\) y \(Q\) polinomios. El procedimiento tiene dos fases:

1. Si \(\deg P\geq\deg Q\), divide los polinomios.
2. Factoriza \(Q\) sobre los reales y descompón la fracción propia resultante.

Factores lineales producen términos logarítmicos. Factores cuadráticos irreducibles pueden producir logaritmos y arcotangentes.

### Ejemplo 7 — factores lineales distintos

Calcula

$$
\int\frac{5x+1}{x^2-x-2}\,dx.
$$

Factorizamos el denominador:

$$
x^2-x-2=(x-2)(x+1).
$$

Buscamos \(A\) y \(B\) tales que

$$
\frac{5x+1}{(x-2)(x+1)}=\frac{A}{x-2}+\frac{B}{x+1}.
$$

Al multiplicar por el denominador:

$$
5x+1=A(x+1)+B(x-2).
$$

Con \(x=2\), \(11=3A\), luego \(A=11/3\). Con \(x=-1\), \(-4=-3B\), luego \(B=4/3\). Por tanto,

$$
\int\frac{5x+1}{x^2-x-2}\,dx
=\frac{11}{3}\ln|x-2|+\frac{4}{3}\ln|x+1|+C.
$$

**Comprobación.** Al derivar y reunir las fracciones se recupera \( (5x+1)/(x^2-x-2) \). El valor absoluto es necesario porque cada factor puede cambiar de signo en los intervalos del dominio.

### Ejemplo 8 — primero hay que dividir

Calcula

$$
\int\frac{x^2+1}{x+1}\,dx.
$$

Como el grado del numerador es mayor, dividimos:

$$
\frac{x^2+1}{x+1}=x-1+\frac{2}{x+1}.
$$

Así,

$$
\int\frac{x^2+1}{x+1}\,dx
=\frac{x^2}{2}-x+2\ln|x+1|+C.
$$

Intentar fracciones parciales antes de convertir la fracción en propia añade trabajo y suele provocar errores de coeficientes.

## Método 5: identidades e integrales trigonométricas

En productos de potencias de seno y coseno, la paridad orienta la decisión:

- Si una potencia de seno es impar, reserva un factor \(\sin x\) y transforma el resto mediante \(\sin^2x=1-\cos^2x\); después usa \(u=\cos x\).
- Si una potencia de coseno es impar, reserva \(\cos x\), usa \(\cos^2x=1-\sin^2x\) y toma \(u=\sin x\).
- Si ambas potencias son pares, usa fórmulas de ángulo mitad.

Para potencias de secante y tangente hay reglas análogas basadas en \(1+\tan^2x=\sec^2x\).

### Ejemplo 9 — potencia impar

Calcula

$$
\int\sin^3x\cos^2x\,dx.
$$

Reservamos un seno:

$$
\sin^3x=\sin x(1-\cos^2x).
$$

Tomamos \(u=\cos x\), \(du=-\sin x\,dx\):

$$
\begin{aligned}
\int\sin^3x\cos^2x\,dx
&=-\int(1-u^2)u^2\,du\\
&=-\int(u^2-u^4)\,du\\
&=-\frac{u^3}{3}+\frac{u^5}{5}+C\\
&=-\frac{\cos^3x}{3}+\frac{\cos^5x}{5}+C.
\end{aligned}
$$

El método completo combina una identidad y una sustitución. Las categorías no son compartimentos cerrados: una integral puede exigir varios pasos en secuencia.

## Método 6: sustituciones trigonométricas para raíces cuadráticas

Las identidades pitagóricas eliminan raíces de tres formas frecuentes:

| Expresión | Sustitución habitual | Identidad utilizada |
| --- | --- | --- |
| \(\sqrt{a^2-x^2}\) | \(x=a\sin\theta\) | \(1-\sin^2\theta=\cos^2\theta\) |
| \(\sqrt{a^2+x^2}\) | \(x=a\tan\theta\) | \(1+\tan^2\theta=\sec^2\theta\) |
| \(\sqrt{x^2-a^2}\) | \(x=a\sec\theta\) | \(\sec^2\theta-1=\tan^2\theta\) |

### Ejemplo 10 — raíz de \(a^2-x^2\)

Calcula

$$
\int\frac{dx}{\sqrt{9-x^2}}.
$$

Tomamos \(x=3\sin\theta\), por lo que \(dx=3\cos\theta\,d\theta\). En el intervalo donde \(\cos\theta\geq0\),

$$
\sqrt{9-x^2}=\sqrt{9-9\sin^2\theta}=3\cos\theta.
$$

Entonces

$$
\int\frac{3\cos\theta\,d\theta}{3\cos\theta}
=\int d\theta=\theta+C.
$$

Como \(\theta=\arcsin(x/3)\),

$$
\int\frac{dx}{\sqrt{9-x^2}}=\arcsin\left(\frac{x}{3}\right)+C.
$$

**Comprobación.** La derivada de \(\arcsin(x/3)\) es \(1/\sqrt{9-x^2}\). En este ejemplo la forma también puede reconocerse como primitiva inmediata; la sustitución explica de dónde procede.

## Integrales definidas: el método no cambia, pero sí los límites

Cuando hacemos \(u=g(x)\) en una integral definida, podemos transformar los límites:

$$
x=a\Rightarrow u=g(a), \qquad x=b\Rightarrow u=g(b).
$$

Así evitamos volver a \(x\) antes de evaluar.

### Ejemplo 11 — sustitución con límites

Calcula

$$
\int_0^1 2x e^{x^2}\,dx.
$$

Tomamos \(u=x^2\), \(du=2x\,dx\). Los límites cambian de \(x=0,1\) a \(u=0,1\):

$$
\int_0^1 2xe^{x^2}\,dx
=\int_0^1 e^u\,du
=\left[e^u\right]_0^1=e-1.
$$

**Interpretación.** El integrando es positivo en \([0,1]\), luego el resultado debe ser positivo; \(e-1\approx1{,}718\) cumple esa condición.

No mezcles límites en \(x\) con una primitiva escrita en \(u\). O cambias los límites y trabajas enteramente en \(u\), o vuelves a \(x\) antes de sustituir extremos.

## Ejemplo 12 — un problema que exige dos decisiones

Calcula

$$
\int\frac{x^3}{(x^2+1)^2}\,dx.
$$

**Primera lectura.** Es un cociente, pero no conviene empezar con fracciones parciales en \(x\): el denominador contiene la composición \(x^2+1\) y el numerador puede escribirse como \(x^2(x\,dx)\). Esa estructura sugiere sustitución.

Tomamos

$$
u=x^2+1, \qquad du=2x\,dx, \qquad x^2=u-1.
$$

La integral queda

$$
\begin{aligned}
\int\frac{x^3}{(x^2+1)^2}\,dx
&=\frac12\int\frac{u-1}{u^2}\,du\\
&=\frac12\int\left(\frac1u-\frac1{u^2}\right)du.
\end{aligned}
$$

**Segunda decisión.** Después del cambio ya no hace falta otro método especial: simplificamos en potencias e integramos término a término.

$$
\begin{aligned}
\frac12\int(u^{-1}-u^{-2})\,du
&=\frac12\left(\ln|u|+\frac1u\right)+C\\
&=\frac12\ln(x^2+1)+\frac{1}{2(x^2+1)}+C.
\end{aligned}
$$

**Comprobación.** Al derivar,

$$
\frac{x}{x^2+1}-\frac{x}{(x^2+1)^2}
=\frac{x[(x^2+1)-1]}{(x^2+1)^2}
=\frac{x^3}{(x^2+1)^2}.
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

Un método algebraico puede encontrar una primitiva y, aun así, no resolver una integral impropia: falta estudiar el límite. Por ejemplo,

$$
\int_1^\infty\frac{1}{x^2}\,dx
=\lim_{b\to\infty}\int_1^b x^{-2}\,dx
=\lim_{b\to\infty}\left[-\frac1x\right]_1^b=1.
$$

En cambio,

$$
\int_1^\infty\frac1x\,dx
=\lim_{b\to\infty}\ln b
$$

diverge. Tener una fórmula antiderivada no garantiza convergencia.

Tampoco conviene forzar los métodos elementales sobre \(\int e^{-x^2}\,dx\), \(\int \sin(x^2)\,dx\) o \(\int dx/\ln x\). Estas integrales definen o se expresan mediante funciones especiales; en intervalos concretos pueden aproximarse numéricamente.

## Errores frecuentes al elegir técnica

- **Aplicar partes a cualquier producto.** En \(\int x\cos(x^2)\,dx\), la sustitución \(u=x^2\) resuelve la integral de inmediato; partes la complica.
- **Hacer un cambio que no elimina \(x\).** Si después de sustituir quedan mezcladas \(u\) y \(x\), el cambio está incompleto o no es adecuado.
- **Olvidar dividir una función racional impropia.** Fracciones parciales se aplica a la parte propia.
- **Usar \(\ln f(x)\) sin valor absoluto.** La primitiva general de \(f'(x)/f(x)\) es \(\ln|f(x)|+C\) en intervalos donde \(f\neq0\).
- **Perder factores constantes.** Si \(du=3x^2dx\) y solo aparece \(x^2dx\), debe introducirse un factor \(1/3\).
- **Encadenar métodos sin medir progreso.** Cada paso debe acercar el integrando a una tabla de primitivas conocidas.
- **Confundir integral con área total.** Una integral definida suma con signo. Si se pide área geométrica, hay que localizar los cambios de signo y separar intervalos.

## Cómo comprobar una integral sin rehacerla

La comprobación principal de una integral indefinida es derivar el resultado. Hazla por capas:

1. Deriva la expresión final con la regla adecuada.
2. Simplifica hasta recuperar exactamente el integrando.
3. Revisa el dominio: logaritmos, raíces y denominadores pueden exigir intervalos concretos.
4. En integrales definidas, comprueba signo, orden de magnitud y unidades.

Si \(F'(x)=f(x)\), la técnica fue correcta aunque la primitiva tenga una forma distinta a la de una solución oficial. Por ejemplo,

$$
-\frac12\ln\left|\frac{1+x}{1-x}\right|+C
$$

y

$$
\frac12\ln\left|\frac{x-1}{x+1}\right|+C
$$

pueden representar la misma familia en intervalos adecuados, pues difieren como mucho en una constante tras considerar los valores absolutos.

## Práctica progresiva: decide antes de calcular

Para cada integral, anota primero el método y la señal que lo justifica.

1. \(\displaystyle \int (4x^3-2x+7)\,dx\)
2. \(\displaystyle \int \frac{x}{x^2+9}\,dx\)
3. \(\displaystyle \int x\cos x\,dx\)
4. \(\displaystyle \int \frac{3x+5}{(x-1)(x+2)}\,dx\)
5. \(\displaystyle \int \cos^3x\,dx\)
6. \(\displaystyle \int_0^2 \frac{x}{\sqrt{x^2+5}}\,dx\)

## Soluciones de la práctica

**1. Inmediata y linealidad.** Integramos término a término:

$$
x^4-x^2+7x+C.
$$

**2. Sustitución.** Con \(u=x^2+9\), \(du=2x\,dx\):

$$
\int\frac{x}{x^2+9}\,dx=\frac12\ln(x^2+9)+C.
$$

**3. Partes.** Elegimos \(u=x\), \(dv=\cos x\,dx\):

$$
\int x\cos x\,dx=x\sin x+\cos x+C.
$$

La derivada de \(x\sin x+\cos x\) es \(\sin x+x\cos x-\sin x=x\cos x\).

**4. Fracciones parciales.** Planteamos

$$
\frac{3x+5}{(x-1)(x+2)}=\frac{A}{x-1}+\frac{B}{x+2}.
$$

De \(3x+5=A(x+2)+B(x-1)\), al usar \(x=1\) sale \(A=8/3\), y con \(x=-2\), \(B=1/3\). Por tanto,

$$
\frac83\ln|x-1|+\frac13\ln|x+2|+C.
$$

**5. Identidad y sustitución.** Escribimos \(\cos^3x=(1-\sin^2x)\cos x\) y usamos \(u=\sin x\):

$$
\int\cos^3x\,dx=\sin x-\frac{\sin^3x}{3}+C.
$$

**6. Sustitución definida.** Con \(u=x^2+5\), \(du=2x\,dx\), los límites son \(u=5\) y \(u=9\):

$$
\int_0^2\frac{x}{\sqrt{x^2+5}}\,dx
=\frac12\int_5^9u^{-1/2}\,du
=\left[\sqrt{u}\right]_5^9
=3-\sqrt5.
$$

El resultado es positivo y menor que \(1\), coherente con un integrando que va de \(0\) a \(2/3\) en un intervalo de longitud \(2\).

## Resumen operativo

Primero simplifica. Después busca una forma inmediata o una composición con su derivada. Si hay un producto, pregunta si derivar un factor lo simplifica; si hay un cociente de polinomios, divide y descompón; si hay potencias trigonométricas o raíces cuadráticas características, usa sus identidades. En una integral impropia, el último paso siempre es evaluar el límite.

La elección no se memoriza como una lista de palabras clave. Se entrena comparando la estructura del integrando con las reglas de derivación que ya conoces y comprobando si cada transformación reduce la dificultad.

Si estás preparando Cálculo universitario y necesitas aplicar este árbol de decisión a tus hojas de problemas o exámenes, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
