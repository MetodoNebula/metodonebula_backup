---
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

La integración por sustitución, o cambio de variable, deshace la regla de la cadena. Si una integral contiene una función compuesta \(f(g(x))\) y también el factor \(g'(x)\), hacemos \(u=g(x)\) para convertirla en una integral de \(f(u)\). El cambio es adecuado cuando toda la expresión puede escribirse en la nueva variable y el resultado es más sencillo.

La clave no es «cambiar lo que está dentro de un paréntesis». Hay que transformar a la vez la función, el diferencial y, en integrales definidas, los límites. Si después del cambio quedan mezcladas \(x\) y \(u\), el procedimiento está incompleto o la sustitución no conviene.

## Por qué funciona: la regla de la cadena al revés

Si \(F'(u)=f(u)\) y \(u=g(x)\), la regla de la cadena afirma que

$$
\frac{d}{dx}F(g(x))=F'(g(x))g'(x)=f(g(x))g'(x).
$$

Al leer esta igualdad al revés obtenemos

$$
\int f(g(x))g'(x)\,dx=F(g(x))+C.
$$

Con la notación

$$
u=g(x), \qquad du=g'(x)\,dx,
$$

escribimos

$$
\int f(g(x))g'(x)\,dx=\int f(u)\,du.
$$

La notación diferencial ayuda a organizar factores, pero la justificación matemática es la regla de la cadena. El símbolo \(du\) no es una variable independiente que podamos inventar: debe corresponder a la derivada del cambio elegido.

## Cómo reconocer una sustitución útil

Busca una expresión interior \(g(x)\) cuya derivada aparezca en el resto del integrando, quizá multiplicada por una constante. Las formas más frecuentes son:

| Estructura | Cambio natural | Forma resultante |
| --- | --- | --- |
| \(g'(x)[g(x)]^n\) | \(u=g(x)\) | \(\int u^n du\) |
| \(g'(x)e^{g(x)}\) | \(u=g(x)\) | \(\int e^u du\) |
| \(g'(x)\cos(g(x))\) | \(u=g(x)\) | \(\int\cos u\,du\) |
| \(g'(x)/g(x)\) | \(u=g(x)\) | \(\int du/u\) |
| \(g'(x)/(1+g(x)^2)\) | \(u=g(x)\) | \(\int du/(1+u^2)\) |
| \(g'(x)/\sqrt{1-g(x)^2}\) | \(u=g(x)\) | \(\int du/\sqrt{1-u^2}\) |

La derivada no tiene que coincidir de manera exacta. En

$$
\int x\cos(x^2)\,dx,
$$

la derivada de \(x^2\) es \(2x\), mientras solo aparece \(x\). Se compensa con un factor \(1/2\). Lo que no podemos compensar con una constante es una potencia o función que falta.

Por ejemplo, \(u=x^2+1\) no resuelve directamente

$$
\int\frac{dx}{x^2+1},
$$

porque \(du=2x\,dx\) y el factor \(x\) no aparece. Esa integral es inmediata mediante la arcotangente. El parecido visual con una composición no basta.

## Procedimiento para integrales indefinidas

Sigue estos pasos:

1. Identifica la función interior y propón \(u=g(x)\).
2. Calcula \(du=g'(x)dx\).
3. Despeja el bloque diferencial que aparece en la integral, incluidos los factores constantes.
4. Sustituye hasta que no quede ninguna \(x\).
5. Integra respecto de \(u\).
6. Vuelve a \(x\).
7. Añade \(C\) y deriva el resultado.

Si la sustitución no elimina \(x\) o deja una integral igual de difícil, vuelve al integrando original y revisa el [método de integración más adecuado](/blog/metodos-de-integracion-como-elegir/).

## Ejemplo 1 — potencia de una función lineal

Calcula

$$
\int(3x-2)^5\,dx.
$$

**Qué nos piden.** Una primitiva de una potencia compuesta.

**Cómo reconocer el método.** La función interior es \(3x-2\), cuya derivada es la constante \(3\).

Tomamos

$$
u=3x-2, \qquad du=3\,dx, \qquad dx=\frac13du.
$$

La integral se transforma en

$$
\begin{aligned}
\int(3x-2)^5\,dx
&=\frac13\int u^5\,du\\
&=\frac13\cdot\frac{u^6}{6}+C\\
&=\frac{(3x-2)^6}{18}+C.
\end{aligned}
$$

**Comprobación.**

$$
\frac{d}{dx}\left[\frac{(3x-2)^6}{18}\right]
=\frac6{18}(3x-2)^5\cdot3=(3x-2)^5.
$$

El factor \(1/3\) del cambio es el que compensa el \(3\) de la regla de la cadena.

## Ejemplo 2 — raíz y factor proporcional

Calcula

$$
\int x\sqrt{x^2+5}\,dx.
$$

La expresión interior \(x^2+5\) tiene derivada \(2x\), proporcional al factor exterior. Elegimos

$$
u=x^2+5, \qquad du=2x\,dx, \qquad x\,dx=\frac12du.
$$

Entonces

$$
\begin{aligned}
\int x\sqrt{x^2+5}\,dx
&=\frac12\int u^{1/2}\,du\\
&=\frac12\cdot\frac{2}{3}u^{3/2}+C\\
&=\frac13(x^2+5)^{3/2}+C.
\end{aligned}
$$

**Dominio.** Como \(x^2+5>0\), la expresión está definida para todo \(x\in\mathbb R\).

## Ejemplo 3 — forma logarítmica

Calcula

$$
\int\frac{2x}{x^2-4}\,dx.
$$

Tomamos \(u=x^2-4\), \(du=2x\,dx\). Así,

$$
\int\frac{2x}{x^2-4}\,dx
=\int\frac1u\,du
=\ln|u|+C
=\ln|x^2-4|+C.
$$

**Por qué aparece el valor absoluto.** El denominador puede ser positivo o negativo, pero no puede valer cero. La identidad

$$
\frac{d}{dx}\ln|g(x)|=\frac{g'(x)}{g(x)}
$$

es válida en cada intervalo donde \(g(x)\neq0\). Aquí esos intervalos están separados por \(x=-2\) y \(x=2\).

**Comprobación.** Derivando \(\ln|x^2-4|\) obtenemos \(2x/(x^2-4)\).

## Ejemplo 4 — exponencial con función interior

Calcula

$$
\int x^2e^{x^3+1}\,dx.
$$

La función del exponente es \(x^3+1\) y su derivada \(3x^2\) aparece salvo un factor:

$$
u=x^3+1, \qquad du=3x^2\,dx, \qquad x^2dx=\frac13du.
$$

Por tanto,

$$
\int x^2e^{x^3+1}\,dx
=\frac13\int e^u\,du
=\frac13e^u+C
=\frac13e^{x^3+1}+C.
$$

No conviene separar \(e^{x^3+1}=e\,e^{x^3}\) como método principal: es correcto, pero la sustitución sigue siendo la decisión que resuelve la composición.

## Ejemplo 5 — composición trigonométrica

Calcula

$$
\int\sin^4x\cos x\,dx.
$$

**Reconocimiento.** La derivada de \(\sin x\) es \(\cos x\), presente como factor. Tomamos

$$
u=\sin x, \qquad du=\cos x\,dx.
$$

Entonces

$$
\int\sin^4x\cos x\,dx
=\int u^4\,du
=\frac{u^5}{5}+C
=\frac{\sin^5x}{5}+C.
$$

**Alternativa.** Elegir \(u=\cos x\) no es imposible, pero obligaría a transformar \(\sin^4x=(1-\cos^2x)^2\) y todavía quedaría un factor \(\cos xdx\) que no coincide con \(-\sin xdx\). La primera elección elimina el integrando de una vez.

## Ejemplo 6 — completar el diferencial

Calcula

$$
\int\frac{x+1}{x^2+2x+5}\,dx.
$$

La derivada del denominador es \(2x+2=2(x+1)\). Tomamos

$$
u=x^2+2x+5, \qquad du=2(x+1)\,dx.
$$

Por tanto,

$$
(x+1)dx=\frac12du
$$

y

$$
\int\frac{x+1}{x^2+2x+5}\,dx
=\frac12\int\frac{du}{u}
=\frac12\ln(x^2+2x+5)+C.
$$

Como \(x^2+2x+5=(x+1)^2+4>0\), no es necesario el valor absoluto, aunque escribirlo tampoco sería incorrecto.

## Sustitución en integrales definidas

Si

$$
u=g(x),
$$

los límites deben expresarse en la nueva variable:

$$
x=a\Rightarrow u=g(a), \qquad x=b\Rightarrow u=g(b).
$$

El teorema de cambio de variable, bajo las hipótesis habituales de continuidad y derivabilidad, se escribe

$$
\int_a^b f(g(x))g'(x)\,dx
=\int_{g(a)}^{g(b)}f(u)\,du.
$$

No es necesario que \(g\) sea creciente. Si \(g(a)>g(b)\), los nuevos límites quedan invertidos y ese orden conserva automáticamente el signo.

Tampoco es imprescindible que \(g\) sea inyectiva para una integral de la forma exacta \(f(g(x))g'(x)\): una primitiva \(F(g(x))\) justifica la igualdad por el teorema fundamental. Por ejemplo,

$$
\int_{-1}^{1}2xe^{x^2}\,dx
$$

tiene integrando impar y vale cero. Con \(u=x^2\), ambos extremos se transforman en \(u=1\), de modo que

$$
\int_1^1e^u\,du=0.
$$

No hay contradicción: al recorrer de \(x=-1\) a \(0\), \(u\) baja de \(1\) a \(0\); después vuelve de \(0\) a \(1\), y las contribuciones se cancelan. Si el integrando no contiene exactamente el factor \(g'(x)\), esta simplificación no puede usarse sin dividir el intervalo y analizar el cambio con cuidado.

### Ejemplo 7 — cambiar los límites

Calcula

$$
\int_0^2\frac{x}{x^2+1}\,dx.
$$

Tomamos

$$
u=x^2+1, \qquad du=2x\,dx.
$$

Transformamos los extremos:

$$
x=0\Rightarrow u=1, \qquad x=2\Rightarrow u=5.
$$

Entonces

$$
\begin{aligned}
\int_0^2\frac{x}{x^2+1}\,dx
&=\frac12\int_1^5\frac1u\,du\\
&=\frac12\left[\ln u\right]_1^5\\
&=\frac12\ln5.
\end{aligned}
$$

**Comprobación cualitativa.** El integrando es no negativo en \([0,2]\), luego el resultado debe ser positivo. \(\frac12\ln5\approx0{,}805\) cumple esa condición.

### Ejemplo 8 — límites que se invierten

Calcula

$$
\int_0^1 -2x e^{1-x^2}\,dx.
$$

Tomamos \(u=1-x^2\), de modo que \(du=-2x\,dx\). Los límites son

$$
x=0\Rightarrow u=1, \qquad x=1\Rightarrow u=0.
$$

Por tanto,

$$
\int_0^1 -2xe^{1-x^2}\,dx
=\int_1^0e^u\,du
=\left[e^u\right]_1^0
=1-e.
$$

El resultado negativo es coherente: el factor \(-2x\) es no positivo y la exponencial es positiva. Invertir manualmente los límites sin añadir un signo menos habría producido un resultado incorrecto.

## Normalizar antes de reconocer una primitiva

A veces el cambio solo sirve para llevar la expresión a una forma estándar. Calcula

$$
\int\frac{dx}{\sqrt{4-9x^2}}.
$$

Factorizamos \(4\) dentro de la raíz:

$$
\sqrt{4-9x^2}=2\sqrt{1-\left(\frac{3x}{2}\right)^2}.
$$

Tomamos \(u=3x/2\), por lo que \(dx=2du/3\). Entonces

$$
\begin{aligned}
\int\frac{dx}{\sqrt{4-9x^2}}
&=\frac13\int\frac{du}{\sqrt{1-u^2}}\\
&=\frac13\arcsin u+C\\
&=\frac13\arcsin\left(\frac{3x}{2}\right)+C.
\end{aligned}
$$

La primitiva real se considera en intervalos contenidos en \((-2/3,2/3)\). Al derivarla, el factor \(3/2\) de la cadena se combina con \(1/3\) y con la normalización de la raíz para recuperar el integrando. Este tipo de escala aparece también en formas de arcotangente y logaritmo.

## Sustitución para expresiones racionales no inmediatas

A veces el cambio natural no está «dentro» de una función trascendente, sino que reduce una simetría algebraica.

### Ejemplo 9 — usar una potencia como nueva variable

Calcula

$$
\int\frac{x^3}{x^2+1}\,dx.
$$

Escribimos \(x^3dx=x^2(xdx)\) y tomamos \(u=x^2+1\). Entonces \(x^2=u-1\) y \(x\,dx=du/2\):

$$
\begin{aligned}
\int\frac{x^3}{x^2+1}\,dx
&=\frac12\int\frac{u-1}{u}\,du\\
&=\frac12\int\left(1-\frac1u\right)du\\
&=\frac{u}{2}-\frac12\ln|u|+C\\
&=\frac{x^2+1}{2}-\frac12\ln(x^2+1)+C.
\end{aligned}
$$

La constante \(1/2\) dentro del primer término podría absorberse en \(C\), de modo que \(x^2/2-\frac12\ln(x^2+1)+C\) es una forma equivalente.

**Comprobación.**

$$
\frac{d}{dx}\left[\frac{x^2}{2}-\frac12\ln(x^2+1)\right]
=x-\frac{x}{x^2+1}
=\frac{x^3}{x^2+1}.
$$

## Cambios encadenados y sustitución inversa

Una primera sustitución puede revelar una segunda técnica. Lo importante es que cada paso reduzca la complejidad y que las variables no se mezclen.

### Ejemplo 10 — sustitución y después partes

Calcula

$$
\int x\ln(x^2+1)\,dx.
$$

Tomamos

$$
u=x^2+1, \qquad du=2x\,dx.
$$

Así,

$$
\int x\ln(x^2+1)\,dx=\frac12\int\ln u\,du.
$$

La integral del logaritmo se resuelve por partes:

$$
\int\ln u\,du=u\ln u-u+C.
$$

Por tanto,

$$
\int x\ln(x^2+1)\,dx
=\frac12\left[(x^2+1)\ln(x^2+1)-(x^2+1)\right]+C.
$$

La constante incluida en \(-(x^2+1)/2\) permite escribir también

$$
\frac{x^2+1}{2}\ln(x^2+1)-\frac{x^2}{2}+C.
$$

Ambas primitivas difieren solo en una constante. La [integración por partes](/blog/integracion-por-partes-formula-ejercicios-resueltos/) explica el segundo paso con detalle.

## Separar el numerador para crear una sustitución

En algunos cocientes, el numerador no coincide con la derivada del denominador, pero puede descomponerse en una parte proporcional a ella y un resto. La parte proporcional produce un logaritmo; el resto se trata por separado.

### Ejemplo 11 — derivada del denominador más un resto

Calcula

$$
\int\frac{3x+1}{x^2+x+1}\,dx.
$$

La derivada del denominador es \(2x+1\). Buscamos constantes \(A\) y \(B\) tales que

$$
3x+1=A(2x+1)+B.
$$

Comparando coeficientes, \(A=3/2\) y \(B=-1/2\). Entonces

$$
\int\frac{3x+1}{x^2+x+1}\,dx
=\frac32\int\frac{2x+1}{x^2+x+1}\,dx
-\frac12\int\frac{dx}{x^2+x+1}.
$$

La primera integral se resuelve con \(u=x^2+x+1\):

$$
\frac32\ln(x^2+x+1).
$$

Para la segunda completamos el cuadrado:

$$
x^2+x+1=\left(x+\frac12\right)^2+\frac34.
$$

Usando la forma de la arcotangente,

$$
\int\frac{dx}{x^2+x+1}
=\frac{2}{\sqrt3}\arctan\left(\frac{2x+1}{\sqrt3}\right)+C.
$$

Por tanto,

$$
\boxed{
\int\frac{3x+1}{x^2+x+1}\,dx
=\frac32\ln(x^2+x+1)
-\frac1{\sqrt3}\arctan\left(\frac{2x+1}{\sqrt3}\right)+C
}.
$$

El denominador es siempre positivo porque su discriminante es negativo. La lección no es que todo cociente pida sustitución, sino que comparar el numerador con la derivada del denominador permite separar la parte integrable por cadena.

## Cambios recíprocos

Cuando aparecen potencias de \(1/x\), puede ser útil tomar \(u=1/x\). Por ejemplo,

$$
\int\frac{1}{x^2}\sqrt{1+\frac1x}\,dx, \qquad x\neq0.
$$

Elegimos

$$
u=1+\frac1x, \qquad du=-\frac1{x^2}dx.
$$

Entonces

$$
\begin{aligned}
\int\frac{1}{x^2}\sqrt{1+\frac1x}\,dx
&=-\int u^{1/2}du\\
&=-\frac23u^{3/2}+C\\
&=-\frac23\left(1+\frac1x\right)^{3/2}+C.
\end{aligned}
$$

La expresión real exige \(1+1/x\geq0\). Derivar el resultado devuelve el integrando en cada intervalo de su dominio. Este patrón recuerda que la función interior no tiene por qué ser un polinomio: puede ser racional, trigonométrica o logarítmica.

## Sustitución algebraica frente a sustitución trigonométrica

No todos los cambios de variable consisten en elegir una subexpresión. En integrales con raíces como

$$
\sqrt{a^2-x^2}, \qquad \sqrt{a^2+x^2}, \qquad \sqrt{x^2-a^2},
$$

se utilizan cambios \(x=a\sin\theta\), \(x=a\tan\theta\) o \(x=a\sec\theta\) para aplicar identidades pitagóricas. Es el mismo principio de cambio de variable, pero la elección procede de la geometría de la expresión, no de encontrar una derivada ya presente.

En cambio, para \(\int dx/\sqrt{9-x^2}\) también podemos reconocer directamente la derivada de \(\arcsin(x/3)\). Conviene usar la primitiva inmediata cuando se conoce y reservar la sustitución trigonométrica para formas donde realmente elimina una raíz complicada.

## Sustituciones que parecen buenas pero fracasan

Analizar un intento fallido enseña a elegir mejor.

### Caso 1 — falta la derivada interior

En

$$
\int e^{x^2}\,dx,
$$

tomar \(u=x^2\) da \(du=2x\,dx\), pero no hay factor \(x\). Despejar \(dx=du/(2x)\) deja \(x=\sqrt u\) y produce

$$
\frac12\int\frac{e^u}{\sqrt u}\,du,
$$

que no es más simple. La primitiva de \(e^{x^2}\) no es elemental.

### Caso 2 — el cambio no reduce el producto

En

$$
\int xe^x\,dx,
$$

usar \(u=e^x\) obliga a escribir \(x=\ln u\), y queda \(\int\ln u\,du\). Puede resolverse, pero solo mediante partes; el cambio añade una etapa innecesaria. Aplicar partes directamente es más claro.

### Caso 3 — sustitución demasiado grande

En

$$
\int\frac{2x+1}{x^2+x+4}\,dx,
$$

el cambio \(u=(x^2+x+4)^2\) es válido en principio, pero complica la potencia del denominador. Elegir \(u=x^2+x+4\) produce directamente \(du=(2x+1)dx\) y una integral logarítmica.

La mejor sustitución suele ser la expresión más simple cuya derivada organiza el resto del integrando.

## Errores frecuentes

- **Cambiar solo una parte.** Si \(u=x^2+1\), hay que transformar también el factor diferencial; no se puede escribir \(\int x/u\,dx\) y continuar como si \(dx=du\).
- **Mezclar variables.** Una integral en \(u\) no debe contener \(x\).
- **Perder una constante.** De \(du=2x\,dx\) se deduce \(x\,dx=du/2\).
- **No volver a \(x\) en una indefinida.** La respuesta final debe estar en la variable original salvo que se pida otra cosa.
- **Volver a \(x\) y usar límites en \(u\).** En una definida, elige uno de los dos caminos y mantén la coherencia.
- **Añadir \(C\) antes de terminar.** Una sola constante al final es suficiente.
- **Omitir el valor absoluto.** \(\int du/u=\ln|u|+C\).
- **Forzar el método cuando falta \(g'(x)\).** No todos los integrandos con paréntesis son composiciones integrables por sustitución.

## Cómo comprobar el cambio y el resultado

Antes de integrar en \(u\), haz una comprobación estructural:

1. ¿Ha desaparecido completamente \(x\)?
2. ¿El nuevo diferencial incluye todos los factores y constantes?
3. ¿La nueva integral es más sencilla?
4. Si es definida, ¿los límites están en la misma variable que la primitiva?

Después, deriva la respuesta final usando la regla de la cadena. Para una integral definida, revisa además signo y orden de magnitud. Si \(m\leq f(x)\leq M\) en \([a,b]\), entonces

$$
m(b-a)\leq\int_a^bf(x)\,dx\leq M(b-a).
$$

Estas cotas detectan valores absurdos aunque el cálculo formal parezca ordenado.

En un examen, escribe el cambio y el diferencial en la misma línea, por ejemplo \(u=x^2+1, du=2x\,dx\). Después muestra explícitamente el factor constante que ajustas. En una integral definida, anota la conversión de cada extremo antes de integrar. Esta notación breve permite distinguir un fallo conceptual —el cambio no elimina \(x\)— de un simple error de coeficiente o de límites.

## Ejercicios propuestos

Identifica primero \(u\), calcula \(du\) y explica qué factor permite el cambio.

1. \(\displaystyle \int 6x(3x^2+1)^4\,dx\)
2. \(\displaystyle \int \frac{e^x}{1+e^x}\,dx\)
3. \(\displaystyle \int \frac{\cos x}{2+\sin x}\,dx\)
4. \(\displaystyle \int x^5\sqrt{x^2+1}\,dx\)
5. \(\displaystyle \int_0^{\pi/2}\sin x\cos^3x\,dx\)
6. \(\displaystyle \int_1^e \frac{\ln x}{x}\,dx\)
7. \(\displaystyle \int \frac{dx}{x\ln x}\), con \(x>1\)

## Soluciones de los ejercicios

**1. Potencia compuesta.** Tomamos \(u=3x^2+1\), \(du=6x\,dx\):

$$
\int6x(3x^2+1)^4\,dx
=\int u^4\,du
=\frac{u^5}{5}+C
=\frac{(3x^2+1)^5}{5}+C.
$$

**2. Derivada del denominador.** Con \(u=1+e^x\), \(du=e^xdx\):

$$
\int\frac{e^x}{1+e^x}\,dx=\ln(1+e^x)+C.
$$

No hace falta valor absoluto porque \(1+e^x>0\).

**3. Composición trigonométrica.** Tomamos \(u=2+\sin x\), \(du=\cos xdx\):

$$
\int\frac{\cos x}{2+\sin x}\,dx=\ln(2+\sin x)+C.
$$

El argumento está entre \(1\) y \(3\), por lo que siempre es positivo.

**4. Reescritura algebraica.** Usamos \(u=x^2+1\), \(du=2x\,dx\). Como \(x^5dx=x^4(xdx)=(u-1)^2du/2\):

$$
\begin{aligned}
\int x^5\sqrt{x^2+1}\,dx
&=\frac12\int(u-1)^2u^{1/2}\,du\\
&=\frac12\int(u^{5/2}-2u^{3/2}+u^{1/2})\,du\\
&=\frac{u^{7/2}}7-\frac{2u^{5/2}}5+\frac{u^{3/2}}3+C.
\end{aligned}
$$

Volviendo a \(x\):

$$
\frac{(x^2+1)^{7/2}}7-\frac{2(x^2+1)^{5/2}}5+\frac{(x^2+1)^{3/2}}3+C.
$$

**5. Integral definida trigonométrica.** Elegimos \(u=\cos x\), \(du=-\sin xdx\). Los límites cambian de \(x=0,\pi/2\) a \(u=1,0\):

$$
\int_0^{\pi/2}\sin x\cos^3x\,dx
=-\int_1^0u^3\,du
=\int_0^1u^3\,du
=\frac14.
$$

**6. Logaritmo como variable.** Tomamos \(u=\ln x\), \(du=dx/x\). Los límites son \(u=0\) y \(u=1\):

$$
\int_1^e\frac{\ln x}{x}\,dx
=\int_0^1u\,du
=\frac12.
$$

**7. Sustitución encadenada sencilla.** Con \(u=\ln x\), \(du=dx/x\):

$$
\int\frac{dx}{x\ln x}
=\int\frac{du}{u}
=\ln|u|+C
=\ln(\ln x)+C,
$$

donde \(x>1\) garantiza \(\ln x>0\). En otros intervalos del dominio se mantiene \(\ln|\ln x|\).

## Resumen práctico

Una sustitución buena identifica la función interior, incorpora su derivada y convierte todo el integrando a una sola variable. Las constantes pueden ajustarse; los factores variables que faltan, no. En integrales definidas, transforma los límites y respeta su orden. En indefinidas, vuelve a la variable original y añade \(C\).

La comprobación más fiable consiste en derivar: si recuperas el integrando mediante la regla de la cadena, el cambio y los coeficientes son correctos. Si el método no elimina \(x\) o produce una integral peor, no insistas; revisa si corresponde simplificar, usar partes o aplicar otra técnica.

En cálculo multivariable, la misma idea exige corregir áreas mediante el determinante: consulta la guía de [cambio de variables y jacobiano en integrales dobles](/blog/cambio-variables-jacobiano-integrales-dobles/).

Si estás trabajando sustituciones más exigentes en Cálculo y necesitas corregir la elección del cambio sobre ejercicios reales de tu asignatura, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
