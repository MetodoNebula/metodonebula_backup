---
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

El área entre dos curvas se calcula integrando la distancia vertical entre ellas. Si \(f(x)\geq g(x)\) en todo el intervalo \([a,b]\), entonces

$$
A=\int_a^b\bigl(f(x)-g(x)\bigr)\,dx.
$$

La parte decisiva no es hallar primitivas: es encontrar correctamente las intersecciones y determinar qué función está arriba en cada tramo. Si las curvas cambian de orden, hay que dividir el intervalo; un área geométrica nunca puede salir negativa.

## La idea geométrica: sumar distancias

En una posición \(x\), la altura de una tira vertical que une las dos curvas es

$$
h(x)=y_{\text{superior}}-y_{\text{inferior}}.
$$

Si la tira tiene anchura muy pequeña \(dx\), su área aproximada es \(h(x)dx\). La integral suma esas contribuciones:

$$
A=\int_a^b h(x)\,dx.
$$

![Región entre la recta y=x+2 y la parábola y=x², limitada por sus puntos de intersección](/assets/latex/area-between-curves.svg)

En la figura, la recta está por encima de la parábola entre \(x=-1\) y \(x=2\). Por eso la altura es \((x+2)-x^2\). Fuera de ese intervalo las curvas intercambian su orden, pero esas zonas no forman parte de la región sombreada.

La interpretación se apoya en el significado de acumulación explicado en [qué son las integrales](/blog/que-son-las-integrales-y-para-que-se-utilizan/). Aquí el integrando no es una de las curvas, sino la separación entre ambas.

## Procedimiento completo

Para una región limitada por \(y=f(x)\) y \(y=g(x)\):

1. Dibuja un esquema cualitativo o analiza las funciones.
2. Resuelve \(f(x)=g(x)\) para encontrar las intersecciones.
3. Ordena las abscisas de corte.
4. Decide qué función está arriba en cada intervalo, usando un punto de prueba si hace falta.
5. Escribe «superior menos inferior» en cada tramo.
6. Integra y evalúa los límites.
7. Comprueba que el resultado es no negativo y razonable respecto al dibujo.

No empieces calculando primitivas antes de resolver las intersecciones. Los límites forman parte del planteamiento geométrico, no son datos secundarios.

## Ejemplo 1 — recta y parábola

Calcula el área encerrada por

$$
y=x+2 \qquad\text{e}\qquad y=x^2.
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

de donde \(x=-1\) y \(x=2\).

**Qué curva está arriba.** Probamos \(x=0\): la recta vale \(2\) y la parábola vale \(0\). La recta es superior en \([-1,2]\).

**Desarrollo.**

$$
\begin{aligned}
A
&=\int_{-1}^{2}\left[(x+2)-x^2\right]dx\\
&=\left[\frac{x^2}{2}+2x-\frac{x^3}{3}\right]_{-1}^{2}\\
&=\left(2+4-\frac83\right)-\left(\frac12-2+\frac13\right)\\
&=\frac92.
\end{aligned}
$$

**Comprobación.** La anchura de la región es \(3\) y su altura máxima, en torno al centro, es algo mayor que \(2\). Un área de \(4{,}5\) es coherente. Además, el integrando es no negativo en todo el intervalo.

## Integral con signo frente a área geométrica

Para una función \(f\), la integral

$$
\int_a^b f(x)dx
$$

suma con signo: las zonas bajo el eje \(x\) restan. En cambio, el área entre \(y=f(x)\) y el eje es

$$
A=\int_a^b|f(x)|dx.
$$

El valor absoluto no se integra de forma mecánica: primero hay que encontrar los ceros y escribir una expresión sin valor absoluto en cada tramo. La [diferencia entre integral definida e indefinida](/blog/integral-definida-e-indefinida-diferencias-ejemplos/) ayuda a separar el cálculo de acumulación con signo del cálculo de primitivas.

## Ejemplo 2 — área respecto del eje x

Calcula el área entre \(f(x)=x^2-1\) y el eje \(x\) en \([-2,2]\).

Los ceros son

$$
x^2-1=0 \quad\Rightarrow\quad x=-1,1.
$$

La función es positiva en \([-2,-1]\) y \([1,2]\), y negativa en \([-1,1]\). Por simetría par,

$$
A=2\int_1^2(x^2-1)dx-\int_{-1}^{1}(x^2-1)dx.
$$

También podemos aprovechar la simetría del tramo central:

$$
A=2\int_1^2(x^2-1)dx+2\int_0^1(1-x^2)dx.
$$

Calculamos:

$$
2\left[\frac{x^3}{3}-x\right]_1^2
+2\left[x-\frac{x^3}{3}\right]_0^1
=\frac83.
$$

**Comprobación.** La integral con signo en \([-2,2]\) sería

$$
\int_{-2}^{2}(x^2-1)dx=\frac43,
$$

distinta del área total \(8/3\). La diferencia procede de la región negativa, que en el área se cuenta en positivo.

## Cuando las curvas cambian de orden

Si \(f-g\) cambia de signo dentro del intervalo, una sola integral puede cancelar áreas. Hay que localizar todos los puntos donde \(f(x)=g(x)\) y separar.

En forma compacta,

$$
A=\int_a^b|f(x)-g(x)|dx,
$$

pero para calcularla se elimina el valor absoluto por tramos.

## Ejemplo 3 — dos curvas que se cruzan varias veces

Calcula el área entre

$$
f(x)=x^3 \qquad\text{y}\qquad g(x)=x
$$

en \([-1,1]\).

**Intersecciones.**

$$
x^3=x \quad\Rightarrow\quad x(x-1)(x+1)=0.
$$

Los cortes son \(-1,0,1\).

En \((-1,0)\), por ejemplo en \(x=-1/2\), \(x^3=-1/8\) y \(x=-1/2\), así que \(x^3\) está arriba. En \((0,1)\), \(x\) está arriba.

Por tanto,

$$
A=\int_{-1}^{0}(x^3-x)dx+\int_0^1(x-x^3)dx.
$$

La simetría permite escribir

$$
A=2\int_0^1(x-x^3)dx
=2\left[\frac{x^2}{2}-\frac{x^4}{4}\right]_0^1
=\frac12.
$$

**Error que evita el planteamiento.** Integrar \(x-x^3\) directamente en \([-1,1]\) daría cero porque es impar, pero la región tiene área positiva.

## Cómo decidir la función superior

Hay tres métodos útiles:

- **Gráfica razonada.** Ayuda a entender la región, pero un dibujo aproximado no sustituye la comprobación.
- **Punto de prueba.** Entre dos intersecciones, evalúa ambas funciones en un valor sencillo.
- **Estudio del signo.** Factoriza \(f(x)-g(x)\) y construye una tabla de signos.

Si \(f-g>0\), \(f\) está arriba; si \(f-g<0\), está arriba \(g\). El estudio del signo es especialmente seguro cuando hay más de dos cortes.

## Ejemplo 4 — exponencial y recta en un intervalo dado

Calcula el área entre \(y=e^x\) y \(y=1+x\) para \(x\in[-1,1]\).

Las funciones coinciden en \(x=0\). Además, la desigualdad clásica

$$
e^x\geq1+x
$$

se cumple para todo \(x\), con igualdad solo en cero. Por tanto, la exponencial está arriba en ambos tramos y no hace falta separar para cambiar el orden:

$$
\begin{aligned}
A
&=\int_{-1}^{1}\left(e^x-1-x\right)dx\\
&=\left[e^x-x-\frac{x^2}{2}\right]_{-1}^{1}\\
&=e+e^{-1}-3.
\end{aligned}
$$

El resultado es positivo, aproximadamente \(0{,}086\). Es pequeño porque \(1+x\) es la recta tangente a \(e^x\) en cero y ambas curvas permanecen próximas en el intervalo.

## Integrar respecto de y

Las tiras verticales no siempre son la opción más simple. Si las curvas se describen mejor como \(x\) en función de \(y\), usamos tiras horizontales:

$$
A=\int_c^d\left(x_{\text{derecha}}-x_{\text{izquierda}}\right)dy.
$$

La regla es análoga: derecha menos izquierda. Elegimos la orientación que evite partir innecesariamente la región.

## Ejemplo 5 — una parábola lateral y una recta

Calcula el área encerrada por

$$
x=y^2 \qquad\text{y}\qquad x=y+2.
$$

**Intersecciones.** Igualamos:

$$
y^2=y+2 \quad\Rightarrow\quad (y-2)(y+1)=0.
$$

Así, \(y=-1\) y \(y=2\). En \(y=0\), la recta da \(x=2\) y la parábola \(x=0\), luego la recta está a la derecha.

$$
\begin{aligned}
A
&=\int_{-1}^{2}\left[(y+2)-y^2\right]dy\\
&=\left[\frac{y^2}{2}+2y-\frac{y^3}{3}\right]_{-1}^{2}\\
&=\frac92.
\end{aligned}
$$

Es la misma estructura algebraica del primer ejemplo, rotada en la forma de describir las fronteras.

## Ejemplo 6 — elegir la orientación que simplifica

Considera la región limitada por \(y=x^2\) y \(y=2-x\). Con tiras verticales, las intersecciones se obtienen de

$$
x^2=2-x,
$$

es decir, \(x=-2\) y \(x=1\). La recta está arriba:

$$
A=\int_{-2}^{1}(2-x-x^2)dx=\frac92.
$$

Si intentáramos integrar respecto de \(y\), la parábola se convertiría en \(x=\pm\sqrt y\) y la frontera izquierda cambiaría en parte de la región. Habría que dividir el cálculo. Las tiras verticales son claramente mejores.

La orientación no cambia el área; cambia la dificultad del planteamiento.

## Ejemplo 7 — área entre valor absoluto y parábola

Calcula el área encerrada por

$$
y=|x| \qquad\text{y}\qquad y=x^2.
$$

La igualdad \(x^2=|x|\) produce \(x=-1,0,1\). En \([-1,0]\), \(|x|=-x\); en \([0,1]\), \(|x|=x\). El valor absoluto está por encima de \(x^2\) en ambos tramos.

Por simetría,

$$
A=2\int_0^1(x-x^2)dx
=2\left[\frac{x^2}{2}-\frac{x^3}{3}\right]_0^1
=\frac13.
$$

**Comprobación.** Cada mitad tiene base \(1\) y altura máxima menor que \(1/4\); un área total de \(1/3\) es compatible con la forma curvada de la región.

## Ejemplo 8 — parámetro y unidades

La velocidad de dos móviles durante \(0\leq t\leq4\) es

$$
v_1(t)=2t \qquad\text{y}\qquad v_2(t)=t+2,
$$

en metros por segundo. Calcula la diferencia total de desplazamiento acumulado en valor absoluto.

Las velocidades coinciden cuando \(2t=t+2\), es decir, en \(t=2\). Antes de ese instante \(v_2>v_1\); después \(v_1>v_2\):

$$
\begin{aligned}
A
&=\int_0^2[(t+2)-2t]dt+\int_2^4[2t-(t+2)]dt\\
&=\int_0^2(2-t)dt+\int_2^4(t-2)dt\\
&=2+2=4.
\end{aligned}
$$

Las unidades son metros, porque integramos una diferencia de velocidades respecto del tiempo. Geométricamente es un área en una gráfica velocidad-tiempo; físicamente representa la diferencia acumulada sin cancelaciones.

## Regiones no acotadas y áreas impropias

Dos curvas pueden delimitar una región que se extiende hasta infinito. El área se define mediante un límite. Por ejemplo, entre \(y=1/x^2\) y el eje \(x\) para \(x\geq1\):

$$
A=\int_1^\infty\frac1{x^2}dx
=\lim_{b\to\infty}\left[-\frac1x\right]_1^b=1.
$$

Una región infinita puede tener área finita. En cambio,

$$
\int_1^\infty\frac1x dx
$$

diverge, de modo que la región bajo \(1/x\) tiene área infinita. El dibujo por sí solo no decide la convergencia.

## Regiones delimitadas por tres curvas

Cuando intervienen tres o más fronteras, una misma función puede no ser la superior o inferior en todo el intervalo. Las intersecciones deben usarse para describir el contorno real, no para integrar automáticamente todas las parejas posibles.

### Ejemplo 9 — parábola y dos rectas

Calcula el área de la región limitada por

$$
y=x^2,\qquad y=x+2,\qquad y=-x+2.
$$

Las rectas se cortan en \((0,2)\). La parábola corta a \(y=x+2\) en \(x=-1,2\), y a \(y=-x+2\) en \(x=-2,1\). Para la región central, los extremos son \(x=-2\) y \(x=2\).

Entre \(-2\) y \(0\), la frontera superior es \(y=-x+2\). Entre \(0\) y \(2\), es \(y=x+2\). La parábola forma la frontera inferior:

$$
\begin{aligned}
A
&=\int_{-2}^{0}\left[(-x+2)-x^2\right]dx
+\int_0^2\left[(x+2)-x^2\right]dx.
\end{aligned}
$$

La región es simétrica respecto del eje \(y\), así que

$$
A=2\int_0^2(x+2-x^2)dx
=\frac{20}{3}.
$$

**Qué había que reconocer.** Las rectas intercambian el papel de frontera superior en \(x=0\). Usar una sola entre \(-2\) y \(2\) incluiría puntos fuera del recinto.

## Curvas dadas de forma implícita

Una ecuación como

$$
x^2+y^2=R^2
$$

no define una única función \(y=f(x)\) en toda la circunferencia. Hay dos ramas:

$$
y=\sqrt{R^2-x^2}
\qquad\text{y}\qquad
y=-\sqrt{R^2-x^2}.
$$

Para calcular el área del círculo con tiras verticales, la altura es

$$
2\sqrt{R^2-x^2},
$$

y

$$
A=\int_{-R}^{R}2\sqrt{R^2-x^2}dx=\pi R^2.
$$

El detalle esencial es distinguir las dos ramas; \(y=\sqrt{R^2-x^2}\) describe solo el semicírculo superior.

## Ejemplo 10 — región dentro de un círculo

En el círculo unidad \(x^2+y^2=1\), calcula el área situada por encima de \(y=0\).

La frontera superior es \(y=\sqrt{1-x^2}\), la inferior es el eje y los extremos son \(-1,1\):

$$
A=2\int_0^1\sqrt{1-x^2}dx.
$$

Con \(x=\sin\theta\), \(dx=\cos\theta d\theta\), y límites \(0,\pi/2\):

$$
\begin{aligned}
A
&=2\int_0^{\pi/2}\cos^2\theta d\theta\\
&=2\int_0^{\pi/2}\frac{1+\cos2\theta}{2}d\theta\\
&=\frac\pi2.
\end{aligned}
$$

**Comprobación geométrica.** Es un semicírculo de radio uno, cuya área conocida es \(\pi/2\).

## Cómo construir un esquema útil

Un esquema matemático debe mostrar los puntos de intersección, qué curvas forman el borde, los intervalos donde cambia la frontera y la orientación de una tira representativa.

Si eliges tiras verticales, dibuja un pequeño segmento vertical dentro de la región y lee sus extremos. Si una misma tira atraviesa dos regiones separadas o cambia de frontera al desplazarse, probablemente tendrás que dividir el intervalo o usar tiras horizontales.

## Cotas para comprobar el área

Si la distancia entre curvas \(h(x)\) satisface

$$
0\leq h(x)\leq M
$$

en un intervalo de anchura \(b-a\), entonces

$$
0\leq A\leq M(b-a).
$$

También puede inscribirse un rectángulo para obtener una cota inferior. Estas estimaciones detectan límites equivocados, factores de simetría olvidados y errores aritméticos grandes.

Por ejemplo, entre \(y=x\) y \(y=x^2\) en \([0,1]\), la separación máxima es \(1/4\); por tanto el área debe ser menor que \(1/4\). El valor exacto \(1/6\) cumple la cota.

## Ejemplo 11 — decidir entre dx y dy

Calcula el área limitada por $y=x^2$, el eje $y$ y la recta $y=2x+3$ en la región situada a la derecha del eje vertical.

La parábola y la recta se cortan cuando $x^2=2x+3$, es decir, en $x=-1$ y $x=3$. La región indicada usa $0\leq x\leq3$. Con tiras verticales, la recta está arriba:

$$
\begin{aligned}
A
&=\int_0^3(2x+3-x^2)dx\\
&=\left[x^2+3x-\frac{x^3}{3}\right]_0^3\\
&=9.
\end{aligned}
$$

Con tiras horizontales habría que despejar $x=\sqrt y$ para la parábola y $x=(y-3)/2$ para la recta. Además, la frontera izquierda cambiaría en parte de la región, lo que obliga a dividir. Integrar respecto de $x$ evita esa complicación.

**Comprobación.** La separación es cero en $x=3$, vale $3$ en $x=0$ y alcanza un máximo de $4$ en $x=1$. Una región de anchura $3$ y altura media $3$ tiene área $9$, coherente con el cálculo.

## Aplicación: excedente económico

Si una curva de demanda inversa es $p_D(q)$ y una curva de oferta es $p_O(q)$, el área

$$
\int_0^{q^*}[p_D(q)-p_O(q)]dq
$$

mide la diferencia acumulada entre disposición a pagar y coste marginal hasta la cantidad de equilibrio $q^*$.

Por ejemplo, si

$$
p_D(q)=10-q,
\qquad
p_O(q)=2+q,
$$

el equilibrio satisface $10-q=2+q$, luego $q^*=4$. El área entre ambas curvas es

$$
\int_0^4[(10-q)-(2+q)]dq
=\int_0^4(8-2q)dq
=16.
$$

Si el precio está en euros y la cantidad en unidades, el resultado se expresa en euros. La interpretación contextual no cambia el planteamiento, pero obliga a indicar unidades y sentido.

## Errores frecuentes

- **Restar en el orden incorrecto.** Con tiras verticales: superior menos inferior.
- **Usar solo dos intersecciones cuando hay más.** Hay que analizar todos los cortes relevantes.
- **Confundir integral con área.** Las zonas negativas no se cancelan en un área geométrica.
- **No partir cuando cambia el orden.** El integrando \(f-g\) debe ser no negativo en cada tramo de área.
- **Confiar únicamente en el dibujo.** Un esquema orienta; el signo de \(f-g\) confirma.
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

1. Área entre \(y=2x\) y \(y=x^2\).
2. Área entre \(y=x^2-4\) y el eje \(x\) en \([-3,3]\).
3. Área entre \(y=\sqrt{x}\) y \(y=x\) en \([0,1]\).
4. Área entre \(y=x^3-x\) y el eje \(x\) en \([-1,1]\).
5. Área encerrada por \(x=y^2-1\) y \(x=1-y\).
6. Área bajo \(y=e^{-x}\) para \(x\geq0\).

## Soluciones de los ejercicios

**1. Recta y parábola.** Las intersecciones son \(x=0,2\), y \(2x\geq x^2\) entre ellas:

$$
A=\int_0^2(2x-x^2)dx=\frac43.
$$

**2. Tres tramos por cambios de signo.** Los ceros son \(-2,2\). Por simetría,

$$
A=2\int_0^2(4-x^2)dx+2\int_2^3(x^2-4)dx=\frac{46}{3}.
$$

**3. Raíz y recta.** En \([0,1]\), \(\sqrt{x}\geq x\):

$$
A=\int_0^1(\sqrt{x}-x)dx
=\frac23-\frac12=\frac16.
$$

**4. Simetría.** \(x^3-x\) es positiva en \([-1,0]\) y negativa en \([0,1]\):

$$
A=2\int_0^1(x-x^3)dx=\frac12.
$$

**5. Tiras horizontales.** Las intersecciones satisfacen \(y^2-1=1-y\), luego \(y=-2,1\). La recta queda a la derecha:

$$
A=\int_{-2}^{1}\left[(1-y)-(y^2-1)\right]dy=\frac92.
$$

**6. Área impropia.**

$$
A=\int_0^\infty e^{-x}dx
=\lim_{b\to\infty}\left[-e^{-x}\right]_0^b=1.
$$

## Resumen práctico

El área entre curvas es la integral de una distancia: superior menos inferior con tiras verticales, o derecha menos izquierda con tiras horizontales. Las intersecciones determinan los límites y los posibles cambios de orden. Si una función cruza el eje o las curvas se cruzan varias veces, se divide la región antes de integrar.

La mejor comprobación combina álgebra y geometría: integrandos no negativos, extremos correctos, estimación visual y unidades coherentes. Si necesitas practicar el planteamiento sobre gráficas de examen, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
