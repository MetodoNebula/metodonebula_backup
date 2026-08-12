---
title: Integración por partes: fórmula y ejercicios resueltos
date: 2026-08-12
updated: 2026-08-12
description: Domina la integración por partes: deducción de la fórmula, elección de u y dv, casos repetidos, integrales definidas y ejercicios resueltos.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: metodos-de-integracion-como-elegir,integracion-por-sustitucion-cambio-variable-ejercicios,que-son-las-integrales-y-para-que-se-utilizan
image: /favicon.svg
---

La integración por partes transforma una integral \(\int u\,dv\) en \(uv-\int v\,du\). Conviene usarla cuando el integrando contiene un producto y **derivar uno de los factores lo simplifica**, mientras el otro se puede integrar. También resuelve integrales de logaritmos y funciones inversas escribiéndolas como un producto por \(1\).

La fórmula no decide por sí sola qué parte será \(u\) y cuál \(dv\). Esa elección es el centro del método: la nueva integral debe ser más sencilla que la original o formar con ella una ecuación que podamos despejar.

## De dónde sale la fórmula

Partimos de la regla de derivación de un producto:

$$
(uv)'=u'v+uv'.
$$

Integramos ambos lados respecto de \(x\):

$$
uv=\int u'v\,dx+\int uv'\,dx.
$$

Reordenando,

$$
\int uv'\,dx=uv-\int u'v\,dx.
$$

Con la notación diferencial \(du=u'\,dx\) y \(dv=v'\,dx\), obtenemos

$$
\boxed{\int u\,dv=uv-\int v\,du}.
$$

Por tanto, integración por partes es la regla del producto utilizada al revés. No crea una primitiva de la nada: intercambia un producto por otro que esperamos que sea más fácil.

Para integrales definidas entre \(a\) y \(b\), la fórmula es

$$
\int_a^b u\,dv=\left[uv\right]_a^b-\int_a^b v\,du.
$$

Los límites se mantienen porque no estamos cambiando la variable de integración; estamos reorganizando el producto.

## Cómo elegir u y dv

Una elección eficaz debe cumplir dos condiciones:

1. \(u\) se simplifica al derivarlo.
2. \(dv\) tiene una primitiva que podemos calcular sin introducir más dificultad.

La regla mnemotécnica LIATE ordena candidatos para \(u\): logarítmicas, inversas trigonométricas, algebraicas, trigonométricas y exponenciales. En español también se usa ILATE. Es una preferencia, no un teorema. Antes de seguirla, comprueba qué ocurre realmente al derivar e integrar.

| Producto | Elección habitual de \(u\) | Elección habitual de \(dv\) | Motivo |
| --- | --- | --- | --- |
| \(x^n e^{ax}\) | \(x^n\) | \(e^{ax}dx\) | El polinomio baja de grado |
| \(x^n\sin(ax)\) | \(x^n\) | \(\sin(ax)dx\) | El polinomio termina desapareciendo |
| \(\ln x\) | \(\ln x\) | \(dx\) | Su derivada es \(1/x\) |
| \(\arctan x\) | \(\arctan x\) | \(dx\) | Su derivada es racional |
| \(e^{ax}\cos(bx)\) | Una de las dos | La otra por \(dx\) | Dos aplicaciones devuelven la integral original |

No conviene elegir como \(dv\) una expresión cuya primitiva desconocemos. En \(\int e^{x^2}x^3\,dx\), por ejemplo, tomar \(dv=e^{x^2}dx\) bloquea el método porque \(e^{x^2}\) no tiene primitiva elemental. Primero habría que usar \(u=x^2\) como cambio de variable, no como parte.

## Procedimiento paso a paso

Ante una integral candidata a partes:

1. Escribe el integrando como producto, aunque uno de los factores sea \(1\).
2. Elige \(u\) y \(dv\).
3. Calcula \(du\) derivando \(u\) y \(v\) integrando \(dv\).
4. Sustituye en \(uv-\int v\,du\), sin olvidar el signo menos.
5. Resuelve la integral restante; si exige partes otra vez, repite con una elección coherente.
6. Simplifica y añade \(C\) una sola vez al final.
7. Deriva el resultado para comprobarlo.

Si el problema principal es decidir entre partes y otros métodos, consulta antes el [árbol de decisión de métodos de integración](/blog/metodos-de-integracion-como-elegir/).

## Ejemplo 1 — polinomio por exponencial

Calcula

$$
\int xe^x\,dx.
$$

**Qué nos piden.** Una primitiva del producto de una función algebraica y una exponencial.

**Cómo reconocer el método.** Al derivar \(x\) obtenemos \(1\); \(e^x\) se integra sin cambiar de familia. Elegimos

$$
u=x, \qquad dv=e^x\,dx.
$$

Entonces

$$
du=dx, \qquad v=e^x.
$$

Aplicamos la fórmula:

$$
\begin{aligned}
\int xe^x\,dx
&=xe^x-\int e^x\,dx\\
&=xe^x-e^x+C\\
&=e^x(x-1)+C.
\end{aligned}
$$

**Comprobación.**

$$
\frac{d}{dx}\left[e^x(x-1)\right]
=e^x(x-1)+e^x=xe^x.
$$

La cancelación final confirma el signo de la fórmula.

## Ejemplo 2 — polinomio de grado dos y partes repetidas

Calcula

$$
\int x^2e^x\,dx.
$$

Elegimos \(u=x^2\) y \(dv=e^x\,dx\):

$$
du=2x\,dx, \qquad v=e^x.
$$

La primera aplicación produce

$$
\int x^2e^x\,dx=x^2e^x-2\int xe^x\,dx.
$$

La integral restante es el ejemplo anterior. Sustituimos su resultado:

$$
\begin{aligned}
\int x^2e^x\,dx
&=x^2e^x-2(xe^x-e^x)+C\\
&=e^x(x^2-2x+2)+C.
\end{aligned}
$$

**Interpretación del proceso.** Cada derivación reduce el grado del polinomio: \(x^2\to2x\to2\to0\). Por eso sabemos de antemano que el método terminará.

**Comprobación.**

$$
\frac{d}{dx}\left[e^x(x^2-2x+2)\right]
=e^x(x^2-2x+2)+e^x(2x-2)=x^2e^x.
$$

## Ejemplo 3 — polinomio por seno

Calcula

$$
\int x\sin x\,dx.
$$

Tomamos

$$
u=x, \quad dv=\sin x\,dx, \quad du=dx, \quad v=-\cos x.
$$

El signo de \(v\) es importante:

$$
\begin{aligned}
\int x\sin x\,dx
&=-x\cos x-\int(-\cos x)\,dx\\
&=-x\cos x+\sin x+C.
\end{aligned}
$$

**Comprobación.** La derivada de \(-x\cos x\) es \(-\cos x+x\sin x\); al sumar la derivada de \(\sin x\), los cosenos se cancelan.

## Ejemplo 4 — integrar un logaritmo

Calcula

$$
\int\ln x\,dx, \qquad x>0.
$$

**Cómo reconocer el método.** No hay un producto visible, pero podemos escribir \(\ln x\cdot1\). La derivada del logaritmo es más sencilla.

$$
u=\ln x, \quad dv=dx, \quad du=\frac1x\,dx, \quad v=x.
$$

Entonces

$$
\begin{aligned}
\int\ln x\,dx
&=x\ln x-\int x\frac1x\,dx\\
&=x\ln x-x+C.
\end{aligned}
$$

En un intervalo negativo puede trabajarse con \(\ln|x|\):

$$
\int\ln|x|\,dx=x\ln|x|-x+C, \qquad x\neq0.
$$

Derivar \(x\ln|x|-x\) en cualquier intervalo que no contenga cero devuelve \(\ln|x|\).

## Ejemplo 5 — función trigonométrica inversa

Calcula

$$
\int\arctan x\,dx.
$$

Escribimos \(\arctan x\cdot1\) y elegimos

$$
u=\arctan x, \quad dv=dx.
$$

Así,

$$
du=\frac{1}{1+x^2}\,dx, \qquad v=x.
$$

Aplicamos partes:

$$
\int\arctan x\,dx=x\arctan x-\int\frac{x}{1+x^2}\,dx.
$$

La integral restante se resuelve con \(w=1+x^2\), \(dw=2x\,dx\):

$$
\int\frac{x}{1+x^2}\,dx=\frac12\ln(1+x^2).
$$

Por tanto,

$$
\int\arctan x\,dx=x\arctan x-\frac12\ln(1+x^2)+C.
$$

Este ejemplo muestra una secuencia habitual: partes crea una integral que después se resuelve por sustitución. Los métodos pueden combinarse sin que la clasificación inicial sea incorrecta.

## Ejemplo 6 — integral definida

Calcula

$$
\int_0^1 xe^x\,dx.
$$

Podemos usar la primitiva del ejemplo 1, pero aplicaremos la fórmula definida para hacer explícitos los extremos:

$$
u=x, \quad dv=e^x\,dx, \quad du=dx, \quad v=e^x.
$$

Entonces

$$
\begin{aligned}
\int_0^1 xe^x\,dx
&=\left[xe^x\right]_0^1-\int_0^1e^x\,dx\\
&=e-\left[e^x\right]_0^1\\
&=e-(e-1)=1.
\end{aligned}
$$

**Comprobación cualitativa.** En \([0,1]\), \(xe^x\geq0\), así que el resultado debe ser positivo. Además, \(xe^x\leq e\), de modo que el área no puede superar \(e\); el valor \(1\) es razonable.

## Ejemplo 7 — integral cíclica

Calcula

$$
I=\int e^x\cos x\,dx.
$$

Ningún factor desaparece al derivarlo. Sin embargo, dos aplicaciones de partes devuelven la integral original, lo que permite despejarla.

Primera aplicación: elegimos \(u=\cos x\), \(dv=e^x\,dx\). Entonces \(du=-\sin x\,dx\), \(v=e^x\):

$$
I=e^x\cos x+\int e^x\sin x\,dx.
$$

Llamamos \(J=\int e^x\sin x\,dx\). Aplicamos partes con \(u=\sin x\), \(dv=e^x\,dx\):

$$
J=e^x\sin x-\int e^x\cos x\,dx=e^x\sin x-I.
$$

Sustituimos en la primera igualdad:

$$
I=e^x\cos x+e^x\sin x-I.
$$

Por tanto,

$$
2I=e^x(\sin x+\cos x)
$$

y

$$
\boxed{I=\frac{e^x}{2}(\sin x+\cos x)+C}.
$$

**Error típico.** Cuando reaparece \(I\), no se cancela ni se abandona el método: se agrupan ambos términos y se despeja. La constante se añade después de resolver la ecuación.

**Comprobación.**

$$
\frac{d}{dx}\left[\frac{e^x}{2}(\sin x+\cos x)\right]
=\frac{e^x}{2}(\sin x+\cos x)+\frac{e^x}{2}(\cos x-\sin x)
=e^x\cos x.
$$

## Ejemplo 8 — partes dentro de un cambio de variable

Calcula

$$
\int x^3\ln(x^2)\,dx, \qquad x\neq0.
$$

Podríamos aplicar partes directamente, pero la estructura \(x^2\) dentro del logaritmo y el factor \(x^3dx=x^2(xdx)\) sugieren primero \(t=x^2\):

$$
t=x^2, \qquad dt=2x\,dx, \qquad x^3dx=t\frac{dt}{2}.
$$

La integral queda

$$
\frac12\int t\ln t\,dt,
$$

donde \(t>0\). Ahora usamos partes:

$$
u=\ln t, \quad dv=t\,dt, \quad du=\frac1t\,dt, \quad v=\frac{t^2}{2}.
$$

Entonces

$$
\begin{aligned}
\frac12\int t\ln t\,dt
&=\frac12\left(\frac{t^2}{2}\ln t-\int\frac{t^2}{2}\frac1t\,dt\right)\\
&=\frac{t^2}{4}\ln t-\frac{t^2}{8}+C.
\end{aligned}
$$

Volvemos a \(x\):

$$
\int x^3\ln(x^2)\,dx
=\frac{x^4}{4}\ln(x^2)-\frac{x^4}{8}+C.
$$

La estrategia útil no es «partes siempre va primero en un producto», sino escoger el orden que reduzca antes la estructura compuesta.

## Método tabular para polinomios

Cuando hay que repetir partes varias veces con un polinomio, el método tabular resume las derivadas sucesivas y las primitivas sucesivas. Para

$$
\int x^3e^x\,dx,
$$

derivamos \(x^3\) hasta cero e integramos \(e^x\) repetidamente:

| Signo | Derivadas de \(x^3\) | Primitivas de \(e^x\) |
| --- | --- | --- |
| \(+\) | \(x^3\) | \(e^x\) |
| \(-\) | \(3x^2\) | \(e^x\) |
| \(+\) | \(6x\) | \(e^x\) |
| \(-\) | \(6\) | \(e^x\) |
|  | \(0\) |  |

Multiplicamos en diagonal con signos alternos:

$$
\int x^3e^x\,dx=e^x(x^3-3x^2+6x-6)+C.
$$

El esquema tabular ahorra escritura, pero no es una fórmula nueva. Es integración por partes repetida. Si las derivadas no terminan o las primitivas se complican, la tabla puede ocultar en vez de aclarar.

## Fórmulas de reducción

Partes permite relacionar una integral con otra de la misma familia y menor exponente. Define

$$
I_n=\int x^ne^{ax}\,dx, \qquad a\neq0.
$$

Elegimos \(u=x^n\) y \(dv=e^{ax}dx\). Entonces

$$
du=nx^{n-1}dx, \qquad v=\frac{e^{ax}}{a}.
$$

La fórmula da

$$
I_n=\frac{x^ne^{ax}}{a}-\frac{n}{a}\int x^{n-1}e^{ax}\,dx.
$$

Es decir,

$$
\boxed{I_n=\frac{x^ne^{ax}}{a}-\frac{n}{a}I_{n-1}}.
$$

No se trata de memorizar otra receta, sino de expresar por qué el proceso termina: cada paso reduce \(n\) en una unidad hasta llegar a \(I_0=\int e^{ax}dx\). También existen reducciones para potencias trigonométricas y otros productos, pero deben deducirse con sus condiciones, no aplicarse como identidades aisladas.

Por ejemplo, para \(n=2\) y \(a=2\):

$$
I_2=\frac{x^2e^{2x}}2-I_1,
$$

y

$$
I_1=\frac{xe^{2x}}2-\frac14e^{2x}.
$$

Sustituyendo,

$$
\int x^2e^{2x}dx
=e^{2x}\left(\frac{x^2}{2}-\frac{x}{2}+\frac14\right)+C.
$$

La derivación de esta expresión confirma simultáneamente la fórmula y los coeficientes.

## Partes en integrales impropias

La fórmula sigue siendo útil cuando un extremo es infinito o el integrando no está acotado, pero primero hay que escribir la integral como límite y comprobar que los términos de frontera existen.

### Ejemplo 9 — un extremo infinito

Calcula

$$
\int_0^\infty xe^{-x}\,dx.
$$

Por definición,

$$
\int_0^\infty xe^{-x}\,dx
=\lim_{b\to\infty}\int_0^bxe^{-x}\,dx.
$$

En la integral finita elegimos \(u=x\), \(dv=e^{-x}dx\), de modo que \(du=dx\) y \(v=-e^{-x}\):

$$
\begin{aligned}
\int_0^bxe^{-x}\,dx
&=\left[-xe^{-x}\right]_0^b+\int_0^be^{-x}\,dx\\
&=-be^{-b}+1-e^{-b}.
\end{aligned}
$$

Como \(e^b\) crece más deprisa que \(b\),

$$
\lim_{b\to\infty}be^{-b}=0
$$

y \(e^{-b}\to0\). Por tanto,

$$
\int_0^\infty xe^{-x}\,dx=1.
$$

No sería riguroso escribir directamente \([-xe^{-x}]_0^\infty\) sin justificar el límite. En integrales impropias, partes transforma el problema, pero no sustituye el análisis de convergencia.

## Qué ocurre si intercambiamos mal los papeles

En \(\int xe^x dx\), elegir \(u=e^x\) y \(dv=x\,dx\) es legal. Produce

$$
\frac{x^2e^x}{2}-\frac12\int x^2e^x\,dx,
$$

una integral más difícil que la original. La fórmula no ha fallado; ha revelado que la elección no reduce complejidad. Volver atrás y escoger \(u=x\) es una decisión matemática justificada, no un truco de solución oficial.

## Cuándo no usar integración por partes

Antes de aplicar la fórmula, busca señales de otro método:

- En \(\int 2x\cos(x^2)\,dx\), aparece una función compuesta y su derivada: sustitución \(u=x^2\).
- En \(\int x/(x^2+1)\,dx\), la derivada del denominador está en el numerador: sustitución logarítmica.
- En \(\int (x^2+3x)/(x+1)\,dx\), conviene dividir polinomios.
- En \(\int \sin x\cos x\,dx\), basta \(u=\sin x\) o una identidad trigonométrica.

Un producto visible no basta para justificar partes. La prueba es comparar la integral original con \(\int v\,du\): si la nueva es claramente más simple o permite cerrar un ciclo, el método tiene sentido.

## Ejemplo 10 — potencia por logaritmo

Calcula

$$
\int x^2\ln x\,dx, \qquad x>0.
$$

**Reconocimiento.** El producto combina una potencia y un logaritmo. Derivar \(\ln x\) produce \(1/x\), que reduce la potencia después de multiplicar por la primitiva de \(x^2\). Elegimos

$$
u=\ln x, \qquad dv=x^2dx.
$$

Así,

$$
du=\frac1x dx, \qquad v=\frac{x^3}{3}.
$$

Aplicamos partes:

$$
\begin{aligned}
\int x^2\ln x\,dx
&=\frac{x^3}{3}\ln x-\int\frac{x^3}{3}\frac1x\,dx\\
&=\frac{x^3}{3}\ln x-\frac13\int x^2dx\\
&=\frac{x^3}{3}\ln x-\frac{x^3}{9}+C.
\end{aligned}
$$

**Comprobación.** La derivada del primer término es \(x^2\ln x+x^2/3\), mientras la del segundo es \(-x^2/3\). Los términos adicionales se cancelan. Este patrón se generaliza, para \(n\neq-1\), a

$$
\int x^n\ln x\,dx
=\frac{x^{n+1}}{n+1}\ln x-\frac{x^{n+1}}{(n+1)^2}+C.
$$

La condición \(x>0\) corresponde a \(\ln x\); con \(\ln|x|\), la misma fórmula es válida en intervalos que no contienen cero.

## Errores frecuentes y cómo corregirlos

- **Olvidar el signo menos.** Escribe siempre la plantilla \(uv-\int v\,du\) antes de sustituir.
- **Integrar \(u\) y derivar \(dv\).** Los papeles son asimétricos: \(u\) se deriva; \(dv\) se integra.
- **Elegir un \(dv\) imposible.** Debes conocer \(v=\int dv\).
- **No repetir el método cuando queda un polinomio.** En \(x^2e^x\), una sola aplicación no termina el problema.
- **Añadir constantes en cada etapa.** Basta una constante \(C\) al final; las intermedias se absorben en ella.
- **Tratar LIATE como obligación.** Comprueba que la integral restante sea más sencilla.
- **Evaluar mal una integral definida.** El término \(uv\) también se evalúa en ambos extremos.
- **Confundir la reaparición de la integral con un fracaso.** En casos cíclicos, esa reaparición permite formar una ecuación.

## Cómo comprobar el resultado

Deriva la primitiva completa, sin comprobar solo una parte. Si el resultado tiene forma \(e^{ax}P(x)\), usa la regla del producto y agrupa términos. Si contiene logaritmos, revisa dominio y valor absoluto. En una integral definida, añade estas comprobaciones:

1. El signo concuerda con el integrando en el intervalo.
2. El valor está dentro de cotas sencillas cuando el integrando está acotado.
3. Si hay unidades, el resultado tiene unidades de «integrando por variable».

Una comprobación rápida evita los dos fallos más comunes de partes: el signo de \(v\) en funciones trigonométricas y la pérdida de un coeficiente al integrar \(e^{ax}\).

En una solución de examen, deja visibles las cuatro piezas \(u\), \(dv\), \(du\) y \(v\) antes de aplicar la fórmula. Esa línea permite comprobar la elección y localizar un error sin rehacer todo el cálculo. Si repites el método, usa letras nuevas o indica «segunda aplicación» para no mezclar los papeles. La presentación debe mostrar por qué la integral restante es más sencilla, no solo una cadena de igualdades.

## Ejercicios propuestos

Resuelve sin mirar las soluciones y justifica la elección de \(u\) y \(dv\).

1. \(\displaystyle \int x e^{3x}\,dx\)
2. \(\displaystyle \int x^2\cos x\,dx\)
3. \(\displaystyle \int \ln(2x)\,dx\), con \(x>0\)
4. \(\displaystyle \int x\ln x\,dx\), con \(x>0\)
5. \(\displaystyle \int_0^{\pi}x\sin x\,dx\)
6. \(\displaystyle \int e^{2x}\sin x\,dx\)

## Soluciones de los ejercicios

**1. Polinomio por exponencial.** Elegimos \(u=x\), \(dv=e^{3x}dx\), de modo que \(du=dx\) y \(v=e^{3x}/3\):

$$
\int xe^{3x}\,dx
=\frac{x}{3}e^{3x}-\frac13\int e^{3x}\,dx
=e^{3x}\left(\frac{x}{3}-\frac19\right)+C.
$$

**2. Dos aplicaciones.** Primero \(u=x^2\), \(dv=\cos xdx\):

$$
\int x^2\cos x\,dx=x^2\sin x-2\int x\sin x\,dx.
$$

Como \(\int x\sin xdx=-x\cos x+\sin x\), resulta

$$
x^2\sin x+2x\cos x-2\sin x+C.
$$

**3. Logaritmo por \(1\).** Con \(u=\ln(2x)\), \(dv=dx\), tenemos \(du=dx/x\) y \(v=x\):

$$
\int\ln(2x)\,dx=x\ln(2x)-x+C.
$$

La derivada de \(\ln(2x)\) es \(1/x\), no \(1/(2x)\): la regla de la cadena cancela el factor \(2\).

**4. Producto con logaritmo.** Elegimos \(u=\ln x\) y \(dv=x\,dx\):

$$
\begin{aligned}
\int x\ln x\,dx
&=\frac{x^2}{2}\ln x-\frac12\int x\,dx\\
&=\frac{x^2}{2}\ln x-\frac{x^2}{4}+C.
\end{aligned}
$$

**5. Integral definida.** Con \(u=x\), \(dv=\sin xdx\), \(v=-\cos x\):

$$
\begin{aligned}
\int_0^\pi x\sin x\,dx
&=\left[-x\cos x\right]_0^\pi+\int_0^\pi\cos x\,dx\\
&=\pi+\left[\sin x\right]_0^\pi=\pi.
\end{aligned}
$$

El resultado es positivo, como corresponde a \(x\sin x\geq0\) en \([0,\pi]\).

**6. Integral cíclica.** Sea \(I=\int e^{2x}\sin xdx\). Con \(u=\sin x\), \(dv=e^{2x}dx\):

$$
I=\frac12e^{2x}\sin x-\frac12\int e^{2x}\cos x\,dx.
$$

Aplicando partes a la integral restante y sustituyendo se obtiene

$$
I=\frac12e^{2x}\sin x-\frac14e^{2x}\cos x-\frac14I.
$$

Por tanto,

$$
\boxed{I=\frac{e^{2x}}{5}(2\sin x-\cos x)+C}.
$$

Al derivar, los términos en \(\cos x\) se cancelan y queda \(e^{2x}\sin x\).

## Qué debes recordar

Integración por partes funciona cuando el intercambio \(\int u\,dv\to uv-\int v\,du\) produce una integral más sencilla. Elige \(u\) pensando en su derivada y \(dv\) pensando en una primitiva accesible. Los polinomios suelen derivarse; exponenciales y funciones trigonométricas suelen integrarse. Logaritmos e inversas trigonométricas se multiplican por \(1\).

Después de aplicar la fórmula, pueden ocurrir tres cosas útiles: la nueva integral es inmediata, hay que repetir partes o reaparece la integral original y se despeja. En todos los casos, la derivación del resultado es la prueba definitiva.

Si quieres practicar el método con ejercicios de tu grado y recibir corrección sobre la elección de \(u\), los signos y la presentación, consulta las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
