---
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
\lim_{x\to a}f(x)=L
$$

cuando los valores de $f(x)$ pueden hacerse tan próximos a $L$ como queramos tomando $x$ suficientemente próximo a $a$, sin exigir que $x=a$.

El límite describe el comportamiento **alrededor** del punto. Por eso puede existir aunque $f(a)$ no esté definido o aunque tenga un valor distinto de $L$.

Por ejemplo, la función

$$
f(x)=\frac{x^2-1}{x-1}
$$

no está definida en $x=1$. Sin embargo, para $x\neq1$ se simplifica como $f(x)=x+1$, de modo que

$$
\lim_{x\to1}\frac{x^2-1}{x-1}=2.
$$

El hueco en un único punto no cambia la tendencia de los valores cercanos.

## Definición rigurosa

La afirmación $\lim_{x\to a}f(x)=L$ significa que para todo $\varepsilon>0$ existe un $\delta>0$ tal que

$$
0<|x-a|<\delta
\quad\Longrightarrow\quad
|f(x)-L|<\varepsilon.
$$

$\varepsilon$ mide la precisión deseada en la salida y $\delta$ indica cuánto debemos acercarnos en la entrada. La condición $0<|x-a|$ excluye el propio punto: el límite no depende necesariamente de $f(a)$.

### Ejemplo 1 — demostración epsilon-delta sencilla

Demuestra que

$$
\lim_{x\to2}(3x-1)=5.
$$

Queremos conseguir $|(3x-1)-5|<\varepsilon$. Simplificamos:

$$
|(3x-1)-5|=|3x-6|=3|x-2|.
$$

Si elegimos $\delta=\varepsilon/3$, entonces

$$
0<|x-2|<\delta
\quad\Longrightarrow\quad
|(3x-1)-5|<3\delta=\varepsilon.
$$

Esto verifica formalmente el límite. En los ejercicios de cálculo habitual no se repite esta prueba para cada función; se usan propiedades demostradas a partir de la definición.

## Límites laterales y existencia del límite

El límite por la izquierda considera $x<a$:

$$
\lim_{x\to a^-}f(x),
$$

y el límite por la derecha considera $x>a$:

$$
\lim_{x\to a^+}f(x).
$$

El límite bilateral existe si y solo si ambos límites laterales existen y son iguales.

### Ejemplo 2 — laterales distintos

Estudia

$$
\lim_{x\to0}\frac{x}{|x|}.
$$

Si $x<0$, $|x|=-x$ y el cociente vale $-1$. Si $x>0$, $|x|=x$ y vale $1$. Por tanto,

$$
\lim_{x\to0^-}\frac{x}{|x|}=-1,
\qquad
\lim_{x\to0^+}\frac{x}{|x|}=1.
$$

Como no coinciden, el límite bilateral no existe. No debe responderse $0/0$: eso solo describe la sustitución, no el comportamiento lateral.

## Primer paso: sustitución directa

Polinomios, exponenciales, funciones trigonométricas y logaritmos son continuos en sus dominios. Los cocientes de funciones continuas también lo son donde el denominador no se anula.

### Álgebra de límites

Si $f(x)\to L$ y $g(x)\to M$, con límites finitos, entonces

$$
f(x)+g(x)\to L+M,
\qquad
f(x)g(x)\to LM,
$$

y, si $M\neq0$,

$$
\frac{f(x)}{g(x)}\to\frac LM.
$$

También pueden componerse límites con funciones continuas. Si $f(x)\to L$ y $\varphi$ es continua en $L$, entonces

$$
\varphi(f(x))\to\varphi(L).
$$

Esto justifica pasos habituales como introducir un límite dentro de una raíz cuando el argumento permanece en el dominio, o pasar de $u(x)\to2$ a $e^{u(x)}\to e^2$. No justifica dividir por una función cuyo límite es cero ni separar formas indeterminadas.

### Ejemplo 3 — no hay indeterminación

Calcula

$$
\lim_{x\to2}\frac{x^2+3x-1}{x+4}.
$$

El denominador vale $6$, así que sustituimos:

$$
\frac{2^2+3\cdot2-1}{2+4}
=\frac9{6}=\boxed{\frac32}.
$$

Factorizar o aplicar una regla avanzada aquí solo añadiría trabajo.

## Qué es una indeterminación

Una indeterminación es una forma simbólica que no determina por sí sola el límite. Las principales son

$$
\frac00,
\qquad
\frac{\infty}{\infty},
\qquad
0\cdot\infty,
\qquad
\infty-\infty,
\qquad
0^0,
\qquad
1^\infty,
\qquad
\infty^0.
$$

Por ejemplo, dos cocientes con forma $0/0$ pueden tender a números distintos o no tener límite. La forma indica que hay que transformar; no es el resultado.

No son indeterminaciones expresiones como $1/0$ o $\infty+\infty$. En esos casos hay que estudiar signo y laterales para decidir si el límite es infinito o no existe.

## Técnica 1: factorizar y simplificar

La factorización es la primera opción cuando aparecen polinomios y la sustitución da $0/0$.

### Ejemplo 4 — diferencia de cuadrados

Calcula

$$
\lim_{x\to3}\frac{x^2-9}{x-3}.
$$

Factorizamos el numerador:

$$
x^2-9=(x-3)(x+3).
$$

Para $x\neq3$ podemos cancelar $x-3$:

$$
\frac{x^2-9}{x-3}=x+3.
$$

Ahora evaluamos la expresión equivalente cerca del punto:

$$
\boxed{\lim_{x\to3}\frac{x^2-9}{x-3}=6}.
$$

La cancelación no afirma que las funciones sean iguales en $x=3$; afirma que coinciden en un entorno perforado, que es lo que importa para el límite.

### Ejemplo 5 — factor común de mayor grado

Calcula

$$
\lim_{x\to0}\frac{x^3-2x^2}{x^2}.
$$

Extraemos $x^2$:

$$
\frac{x^2(x-2)}{x^2}=x-2
\qquad(x\neq0).
$$

Por tanto, el límite es $\boxed{-2}$.

## Técnica 2: multiplicar por el conjugado

Cuando una resta con raíces produce $0/0$ o $\infty-\infty$, el conjugado convierte la diferencia de raíces en una diferencia algebraica.

### Ejemplo 6 — raíz cerca de un punto finito

Calcula

$$
\lim_{x\to0}\frac{\sqrt{x+4}-2}{x}.
$$

Multiplicamos numerador y denominador por el conjugado:

$$
\frac{\sqrt{x+4}-2}{x}
\frac{\sqrt{x+4}+2}{\sqrt{x+4}+2}
=\frac{x}{x(\sqrt{x+4}+2)}.
$$

Para $x\neq0$ se simplifica a

$$
\frac1{\sqrt{x+4}+2}.
$$

Ahora sustituimos:

$$
\boxed{\frac14}.
$$

### Ejemplo 7 — diferencia infinita

Calcula

$$
\lim_{x\to\infty}\left(\sqrt{x^2+x}-x\right).
$$

La forma es $\infty-\infty$. Racionalizamos:

$$
\sqrt{x^2+x}-x
=\frac{x}{\sqrt{x^2+x}+x}.
$$

Como $x>0$ cuando $x\to\infty$, dividimos numerador y denominador por $x$:

$$
\frac1{\sqrt{1+1/x}+1}\longrightarrow\boxed{\frac12}.
$$

No es correcto separar la diferencia en dos límites infinitos y restarlos.

## Técnica 3: reducir a común denominador

Las diferencias de fracciones suelen ocultar un factor cancelable.

### Ejemplo 8 — diferencia de cocientes

Calcula

$$
\lim_{x\to2}\frac{\frac1x-\frac12}{x-2}.
$$

Unimos el numerador:

$$
\frac1x-\frac12=\frac{2-x}{2x}=-\frac{x-2}{2x}.
$$

Entonces

$$
\frac{\frac1x-\frac12}{x-2}
=-\frac1{2x},
$$

y el límite vale

$$
\boxed{-\frac14}.
$$

Esta expresión es también el cociente incremental de $f(x)=1/x$ en $x=2$, por lo que coincide con $f'(2)$.

## Límites trigonométricos notables

El límite fundamental es

$$
\lim_{x\to0}\frac{\sin x}{x}=1,
$$

siempre que el ángulo esté medido en radianes. De él se deducen

$$
\lim_{x\to0}\frac{\tan x}{x}=1,
\qquad
\lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12.
$$

No deben aplicarse si el argumento no tiende a cero sin antes hacer el ajuste necesario.

### Ejemplo 9 — ajustar el argumento

Calcula

$$
\lim_{x\to0}\frac{\sin(3x)}{x}.
$$

Multiplicamos y dividimos por $3$:

$$
\frac{\sin(3x)}{x}
=3\frac{\sin(3x)}{3x}.
$$

Como $3x\to0$,

$$
\boxed{\lim_{x\to0}\frac{\sin(3x)}x=3}.
$$

### Ejemplo 10 — identidad de ángulo mitad

Calcula

$$
\lim_{x\to0}\frac{1-\cos x}{x^2}.
$$

Usamos $1-\cos x=2\sin^2(x/2)$:

$$
\frac{1-\cos x}{x^2}
=\frac12\left(\frac{\sin(x/2)}{x/2}\right)^2.
$$

El cociente notable tiende a $1$, así que el resultado es $\boxed{1/2}$.

Estos límites son la base de derivadas trigonométricas, conectadas con la interpretación de la [derivada como tasa de cambio](/blog/que-son-las-derivadas-y-para-que-se-utilizan/).

## Equivalentes infinitesimales

Decimos que $f$ y $g$ son equivalentes cuando $x\to a$ si

$$
\lim_{x\to a}\frac{f(x)}{g(x)}=1,
$$

y escribimos $f(x)\sim g(x)$. Cerca de cero son especialmente útiles

$$
\sin x\sim x,
\qquad
\tan x\sim x,
\qquad
1-\cos x\sim\frac{x^2}{2},
$$

$$
e^x-1\sim x,
\qquad
\ln(1+x)\sim x.
$$

Los equivalentes pueden sustituirse con seguridad dentro de productos y cocientes. No deben reemplazarse término a término dentro de una resta que provoque cancelación, porque podría desaparecer precisamente el orden dominante.

### Ejemplo 10 bis — combinar varios equivalentes

Calcula

$$
\lim_{x\to0}\frac{e^{2x}-1}{\sin(3x)}.
$$

Cuando $x\to0$,

$$
e^{2x}-1\sim2x,
\qquad
\sin(3x)\sim3x.
$$

Por tanto,

$$
\frac{e^{2x}-1}{\sin(3x)}
\sim\frac{2x}{3x}=\boxed{\frac23}.
$$

La misma conclusión puede obtenerse multiplicando por los cocientes notables correspondientes. La notación de equivalencia resume ese razonamiento.

### Orden de un infinitésimo

Si $f(x)/g(x)\to0$, decimos que $f$ es de orden menor que $g$. Por ejemplo, cuando $x\to0$,

$$
x^2=o(x),
$$

porque $x^2/x=x\to0$. En una suma, el término de orden mayor domina:

$$
3x+x^2\sim3x.
$$

Esta idea permite anticipar resultados y detectar simplificaciones incorrectas.

### Ejemplo 10 ter — identificar el término dominante

$$
\lim_{x\to0}\frac{4x^2+x^3}{2x^2-5x^4}
$$

Factorizamos el menor grado presente:

$$
\frac{x^2(4+x)}{x^2(2-5x^2)}
=\frac{4+x}{2-5x^2}
\longrightarrow\boxed{2}.
$$

Numerador y denominador son ambos equivalentes a constantes por $x^2$; los términos de grados superiores no afectan al límite.

## Límites en infinito de cocientes

En un cociente de polinomios se compara el grado dominante:

- si el grado del numerador es menor, el límite es $0$;
- si los grados son iguales, se divide el cociente de coeficientes principales;
- si el grado del numerador es mayor, el módulo crece sin cota y hay que estudiar signo.

### Ejemplo 11 — mismo grado

$$
\lim_{x\to\infty}\frac{3x^2-x+4}{2x^2+5}
$$

Dividimos todo por $x^2$:

$$
\lim_{x\to\infty}
\frac{3-1/x+4/x^2}{2+5/x^2}
=\boxed{\frac32}.
$$

Solo los términos dominantes sobreviven, pero escribir la división justifica el resultado.

## Asíntotas horizontales y oblicuas

Si

$$
\lim_{x\to\infty}f(x)=L,
$$

la recta $y=L$ es una asíntota horizontal por la derecha. Puede existir otra distinta cuando $x\to-\infty$.

Una recta $y=mx+n$ es asíntota oblicua si

$$
\lim_{x\to\infty}[f(x)-(mx+n)]=0.
$$

Sus coeficientes se buscan mediante

$$
m=\lim_{x\to\infty}\frac{f(x)}x,
\qquad
n=\lim_{x\to\infty}[f(x)-mx],
$$

si ambos límites apropiados existen y $m\neq0$.

### Ejemplo 11 bis — asíntota de una función racional

Encuentra la asíntota oblicua de

$$
f(x)=\frac{x^2+1}{x-1}.
$$

La división de polinomios da

$$
\frac{x^2+1}{x-1}=x+1+\frac2{x-1}.
$$

Como $2/(x-1)\to0$ cuando $x\to\pm\infty$,

$$
f(x)-(x+1)\to0.
$$

La asíntota oblicua es

$$
\boxed{y=x+1}.
$$

La diferencia entre la función y la recta mide el error de la aproximación, no solo su pendiente dominante.

### Infinito negativo y raíces

Debe recordarse que

$$
\sqrt{x^2}=|x|,
$$

no $x$ para todo real. Si $x\to-\infty$, entonces $|x|=-x$. Ignorar este signo cambia muchos límites con radicales.

## Límites infinitos y asíntotas verticales

Si $f(x)$ crece sin cota al acercarse a $a$, escribimos $f(x)\to+\infty$ o $f(x)\to-\infty$. Esto describe divergencia infinita, no un límite real.

### Ejemplo 12 — el signo lateral decide

Para

$$
\frac1{x-2},
$$

el denominador es negativo y muy pequeño por la izquierda, y positivo y muy pequeño por la derecha:

$$
\lim_{x\to2^-}\frac1{x-2}=-\infty,
\qquad
\lim_{x\to2^+}\frac1{x-2}=+\infty.
$$

El límite bilateral no existe porque los laterales no coinciden. La recta $x=2$ es una asíntota vertical.

En cambio,

$$
\lim_{x\to2}\frac1{(x-2)^2}=+\infty,
$$

porque el denominador es positivo a ambos lados.

## Teorema del encaje

Si

$$
g(x)\leq f(x)\leq h(x)
$$

cerca de $a$, y $g(x)$ y $h(x)$ tienen el mismo límite $L$, entonces $f(x)$ también tiende a $L$.

### Ejemplo 13 — oscilación acotada

Calcula

$$
\lim_{x\to0}x^2\sin\left(\frac1x\right).
$$

La función seno oscila sin acercarse a un único valor, pero

$$
-1\leq\sin(1/x)\leq1.
$$

Al multiplicar por $x^2\geq0$,

$$
-x^2\leq x^2\sin(1/x)\leq x^2.
$$

Los extremos tienden a cero, así que

$$
\boxed{\lim_{x\to0}x^2\sin(1/x)=0}.
$$

## Indeterminaciones con productos y potencias

Una forma $0\cdot\infty$ suele transformarse en cociente:

$$
f(x)g(x)=\frac{f(x)}{1/g(x)}
\quad\text{o}\quad
\frac{g(x)}{1/f(x)}.
$$

Para potencias $f(x)^{g(x)}$ con formas $1^\infty$, $0^0$ o $\infty^0$, se toma logaritmo. Si $y=f(x)^{g(x)}$ y $f(x)>0$, entonces

$$
\ln y=g(x)\ln f(x).
$$

Se calcula primero el límite del exponente logarítmico y después se aplica la exponencial.

### Ejemplo 13 bis — producto cero por infinito

Calcula

$$
\lim_{x\to0^+}x\ln x.
$$

La forma es $0\cdot(-\infty)$. La transformamos en cociente:

$$
x\ln x=\frac{\ln x}{1/x}.
$$

También puede hacerse el cambio $x=1/t$, con $t\to\infty$:

$$
x\ln x=-\frac{\ln t}{t}.
$$

El logaritmo crece más despacio que la función lineal, así que $\ln t/t\to0$. Por tanto,

$$
\boxed{\lim_{x\to0^+}x\ln x=0}.
$$

El signo es negativo cerca de cero, pero los valores se aproximan a cero desde abajo.

### Ejemplo 14 — límite exponencial notable

Calcula

$$
\lim_{x\to\infty}\left(1+\frac2x\right)^x.
$$

Es una forma $1^\infty$. Sea $y_x=(1+2/x)^x$. Entonces

$$
\ln y_x=x\ln\left(1+\frac2x\right).
$$

Con $u=2/x$,

$$
x\ln\left(1+\frac2x\right)
=2\frac{\ln(1+u)}u\longrightarrow2,
$$

porque $\lim_{u\to0}\ln(1+u)/u=1$. Por continuidad de la exponencial,

$$
\boxed{\lim_{x\to\infty}\left(1+\frac2x\right)^x=e^2}.
$$

## Funciones definidas a trozos y continuidad

En un punto donde cambia la fórmula, se calculan los dos límites laterales. Después se comparan entre sí y con el valor de la función si se pide continuidad.

### Ejemplo 15 — determinar un parámetro

Sea

$$
f(x)=
\begin{cases}
kx+1,&x<2,\\
x^2-1,&x\geq2.
\end{cases}
$$

Determina $k$ para que $f$ sea continua en $x=2$.

Por la izquierda,

$$
\lim_{x\to2^-}f(x)=2k+1.
$$

Por la derecha y en el punto,

$$
\lim_{x\to2^+}f(x)=f(2)=2^2-1=3.
$$

La continuidad exige $2k+1=3$, luego

$$
\boxed{k=1}.
$$

Este ejercicio combina existencia del límite, igualdad de laterales y coincidencia con el valor de la función.

## Árbol de decisión para resolver límites

1. **Comprueba el dominio** cerca del punto y determina si necesitas laterales.
2. **Sustituye directamente.** Si aparece un valor real, termina.
3. **Clasifica la forma.** No llames indeterminación a cualquier división por cero.
4. Para $0/0$, prueba factorización, conjugado, denominador común o límite notable.
5. Para $\infty/\infty$, divide por el término dominante o reorganiza la expresión.
6. Para $\infty-\infty$, reúne términos o racionaliza.
7. Para productos indeterminados, convierte en cociente.
8. Para potencias indeterminadas, toma logaritmos.
9. Si hay oscilación acotada, busca un encaje.
10. Comprueba laterales, signo y orden de magnitud.

La regla de L'Hôpital puede ser útil para ciertas formas $0/0$ y $\infty/\infty$, pero tiene hipótesis y no debe sustituir estas transformaciones básicas. Merece un estudio independiente porque aplicarla a formas no válidas conduce a errores.

## Lectura gráfica y comprobación numérica

Una gráfica puede sugerir un límite, pero no lo demuestra. La resolución puede ser insuficiente para mostrar oscilaciones rápidas, huecos o asíntotas, y un programa puede unir visualmente puntos que pertenecen a ramas distintas.

Una tabla de valores también es solo una comprobación. Para estudiar $x\to a$, conviene tomar puntos por ambos lados y reducir progresivamente la distancia, por ejemplo $a\pm10^{-1}$, $a\pm10^{-2}$ y $a\pm10^{-3}$. Si las columnas parecen dirigirse a valores distintos, hay que calcular límites laterales de forma analítica.

Los cálculos numéricos cerca de una forma $0/0$ pueden sufrir cancelación y redondeo. En

$$
\frac{\sqrt{1+x}-1}{x},
$$

restar dos números casi iguales pierde precisión cuando $x$ es muy pequeño. La forma racionalizada

$$
\frac1{\sqrt{1+x}+1}
$$

es matemáticamente equivalente para $x\neq0$ y numéricamente más estable. La transformación algebraica no solo permite hallar el límite: también mejora su evaluación.

Si una tabla parece estabilizarse, conviene comparar la diferencia entre cada valor y el candidato a límite. Si esa diferencia disminuye de forma coherente desde ambos lados, la conjetura gana plausibilidad; aun así, la conclusión final debe apoyarse en continuidad, una transformación algebraica, un límite notable o un teorema de comparación.

## Relación entre límites, continuidad y derivadas

Una función es continua en $a$ si se cumplen tres condiciones:

1. $f(a)$ está definida.
2. $\lim_{x\to a}f(x)$ existe.
3. El límite coincide con $f(a)$.

La derivada se define mediante otro límite:

$$
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}h.
$$

Por eso factorizar, racionalizar y usar límites notables no son técnicas aisladas: permiten construir las reglas de derivación. Más adelante, el [teorema fundamental del cálculo](/blog/teorema-fundamental-calculo-ejemplos-ejercicios/) utiliza de nuevo un límite de cocientes para demostrar que la derivada de una acumulación recupera el integrando.

## Errores frecuentes

- **Dar $0/0$ como respuesta.** Es una señal de indeterminación, no un valor.
- **Cancelar un factor que no existe.** Solo pueden cancelarse factores multiplicativos completos.
- **Separar $\infty-\infty$.** Cada término diverge y la diferencia puede tener cualquier comportamiento.
- **Olvidar los límites laterales.** Son imprescindibles con valores absolutos, funciones a trozos y denominadores que cambian de signo.
- **Usar grados en límites trigonométricos.** Los límites notables requieren radianes.
- **Escribir $\sqrt{x^2}=x$.** La identidad correcta es $|x|$.
- **Aplicar un límite notable sin ajustar el argumento.** Debe aparecer exactamente una variable que tienda a cero.
- **Confundir límite infinito con existencia de límite real.** $+\infty$ describe crecimiento sin cota.
- **Manipular la expresión solo en el punto.** Las transformaciones deben ser equivalentes en un entorno perforado.

## Cómo comprobar el resultado

Evalúa la expresión en valores próximos al punto por ambos lados. No es una demostración, pero detecta errores de signo y resultados incompatibles con la escala. Si el resultado es finito tras una forma $0/0$, verifica que el factor problemático se haya cancelado por completo.

En infinito, divide mentalmente por el término dominante y comprueba si el resultado concuerda con los grados. En una asíntota vertical, construye una tabla de signos del denominador y del numerador.

## Ejercicios propuestos

1. $\displaystyle\lim_{x\to4}\frac{x^2-16}{x-4}$
2. $\displaystyle\lim_{x\to0}\frac{\sqrt{1+x}-1}{x}$
3. $\displaystyle\lim_{x\to0}\frac{\sin(5x)}{2x}$
4. $\displaystyle\lim_{x\to\infty}\frac{4x^3-x}{2x^3+7x}$
5. $\displaystyle\lim_{x\to\infty}\left(\sqrt{x^2+4x}-x\right)$
6. $\displaystyle\lim_{x\to0}x\cos(1/x)$
7. Estudia los laterales de $\displaystyle\frac{x+1}{x-1}$ cuando $x\to1$.
8. $\displaystyle\lim_{x\to0}\frac{e^x-1}{x}$
9. $\displaystyle\lim_{x\to\infty}\left(1-\frac3x\right)^x$
10. Determina $a$ para que $f(x)=ax+2$ si $x<1$ y $f(x)=x^2+3$ si $x\geq1$ sea continua.

## Soluciones

**1. Factorización.**

$$
\frac{(x-4)(x+4)}{x-4}=x+4\longrightarrow\boxed{8}.
$$

**2. Conjugado.**

$$
\frac{\sqrt{1+x}-1}{x}
=\frac1{\sqrt{1+x}+1}\longrightarrow\boxed{\frac12}.
$$

**3. Límite notable.**

$$
\frac{\sin(5x)}{2x}
=\frac52\frac{\sin(5x)}{5x}
\longrightarrow\boxed{\frac52}.
$$

**4. Términos dominantes.** Dividiendo por $x^3$, el límite es $\boxed{2}$.

**5. Racionalización.**

$$
\sqrt{x^2+4x}-x
=\frac{4x}{\sqrt{x^2+4x}+x}
=\frac4{\sqrt{1+4/x}+1}
\longrightarrow\boxed{2}.
$$

**6. Encaje.** Como $|x\cos(1/x)|\leq|x|$ y $|x|\to0$, el límite es $\boxed{0}$.

**7. Signos laterales.** El numerador tiende a $2>0$. El denominador es negativo por la izquierda y positivo por la derecha:

$$
\lim_{x\to1^-}\frac{x+1}{x-1}=-\infty,
\qquad
\lim_{x\to1^+}\frac{x+1}{x-1}=+\infty.
$$

El límite bilateral no existe.

**8. Límite notable exponencial.**

$$
\boxed{\lim_{x\to0}\frac{e^x-1}{x}=1}.
$$

**9. Potencia.** Es el modelo $(1+u/x)^x\to e^u$ con $u=-3$:

$$
\boxed{e^{-3}}.
$$

**10. Continuidad.** El límite izquierdo es $a+2$ y el valor por la derecha es $4$. Igualando, $a+2=4$, luego $\boxed{a=2}$.

## Resumen práctico

Sustituye primero y transforma solo si aparece una indeterminación. Factoriza polinomios, racionaliza diferencias con raíces, reúne fracciones, ajusta los límites notables y divide por el término dominante en infinito. Los laterales deciden la existencia en puntos problemáticos; el encaje controla oscilaciones acotadas.

Al terminar, sustituye de nuevo en la expresión transformada, revisa el signo desde ambos lados y contrasta el orden de magnitud. Una forma indeterminada nunca es la respuesta final.

Los límites sostienen continuidad, derivadas e integrales, por lo que conviene dominarlos antes de avanzar en un plan de [Cálculo I para Ingeniería](/blog/como-aprobar-calculo-i-ingenieria-seis-semanas/). Si necesitas practicar con ejercicios de tu temario y recibir corrección del razonamiento, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
