---
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

Para integrar una función racional \(P(x)/Q(x)\), primero se compara el grado de los polinomios. Si el cociente es impropio, se hace la división; después se factoriza el denominador y se descompone la fracción propia en términos simples. Esos términos producen logaritmos, potencias racionales y arcotangentes que sí tienen primitivas conocidas.

El punto difícil no suele ser integrar al final, sino construir correctamente la descomposición: distinguir factores lineales simples o repetidos, factores cuadráticos irreducibles y numeradores de la forma adecuada para cada caso.

## Qué es una función racional

Una función racional es un cociente

$$
R(x)=\frac{P(x)}{Q(x)},
$$

donde \(P\) y \(Q\) son polinomios y \(Q(x)\neq0\). La integral se estudia en intervalos que no contengan ceros del denominador.

La fracción es **propia** si

$$
\deg P<\deg Q,
$$

e **impropia** si \(\deg P\geq\deg Q\). Toda fracción impropia puede escribirse mediante división euclídea como

$$
\frac{P(x)}{Q(x)}=S(x)+\frac{R(x)}{Q(x)},
$$

donde \(S\) es un polinomio y \(\deg R<\deg Q\). Solo la fracción propia se descompone en fracciones parciales.

Este método ocupa una rama específica dentro de la [guía para elegir métodos de integración](/blog/metodos-de-integracion-como-elegir/): se aplica a cocientes de polinomios, no a cualquier expresión que contenga una fracción.

## La idea de las fracciones parciales

Descomponer en fracciones parciales significa reemplazar un cociente complicado por una suma de cocientes sencillos con el mismo denominador común. Por ejemplo,

$$
\frac{1}{(x-1)(x+2)}
=\frac{1/3}{x-1}-\frac{1/3}{x+2}.
$$

La igualdad puede comprobarse reuniendo el lado derecho:

$$
\frac{1}{3(x-1)}-\frac{1}{3(x+2)}
=\frac{(x+2)-(x-1)}{3(x-1)(x+2)}
=\frac{1}{(x-1)(x+2)}.
$$

Ahora la integral es inmediata:

$$
\int\frac{dx}{(x-1)(x+2)}
=\frac13\ln|x-1|-\frac13\ln|x+2|+C.
$$

El método funciona porque todo polinomio real se factoriza en factores lineales y cuadráticos irreducibles. A cada tipo de factor le corresponde una forma concreta en la descomposición.

## Árbol de decisión para una función racional

Antes de calcular coeficientes, sigue este orden:

1. Comprueba que numerador y denominador son polinomios.
2. Determina el dominio excluyendo los ceros reales de \(Q\).
3. Si \(\deg P\geq\deg Q\), divide.
4. Factoriza completamente el denominador sobre los reales.
5. Escribe todos los términos parciales que exige cada factor, incluidos los repetidos.
6. Calcula los coeficientes por sustitución de raíces, comparación de coeficientes o una combinación de ambos.
7. Integra cada término.
8. Deriva la respuesta o reúne las fracciones para comprobarla.

No conviene empezar a integrar antes de completar la descomposición. Una plantilla incompleta puede producir una identidad imposible aunque las operaciones posteriores estén bien hechas.

## Plantillas según el denominador

| Factor de \(Q(x)\) | Términos que deben incluirse |
| --- | --- |
| Lineal simple \((x-a)\) | \(\dfrac{A}{x-a}\) |
| Lineal repetido \((x-a)^m\) | \(\dfrac{A_1}{x-a}+\dfrac{A_2}{(x-a)^2}+\cdots+\dfrac{A_m}{(x-a)^m}\) |
| Cuadrático irreducible \(x^2+px+q\) | \(\dfrac{Ax+B}{x^2+px+q}\) |
| Cuadrático irreducible repetido \(q(x)^m\) | \(\dfrac{A_1x+B_1}{q(x)}+\cdots+\dfrac{A_mx+B_m}{q(x)^m}\) |

En un factor cuadrático el numerador debe tener grado menor que dos, por eso se usa \(Ax+B\), no una sola constante. Omitir el término lineal impide representar todos los numeradores posibles.

## Ejemplo 1 — dos factores lineales distintos

Calcula

$$
\int\frac{5x+1}{(x-2)(x+1)}\,dx.
$$

**Qué nos piden.** Una primitiva de una fracción propia con dos polos simples.

**Cómo reconocer el método.** El denominador ya está factorizado en dos factores lineales distintos. Planteamos

$$
\frac{5x+1}{(x-2)(x+1)}
=\frac{A}{x-2}+\frac{B}{x+1}.
$$

Multiplicamos por \((x-2)(x+1)\):

$$
5x+1=A(x+1)+B(x-2).
$$

Sustituir las raíces elimina un término cada vez. Para \(x=2\):

$$
11=3A \quad\Rightarrow\quad A=\frac{11}{3}.
$$

Para \(x=-1\):

$$
-4=-3B \quad\Rightarrow\quad B=\frac43.
$$

Integramos:

$$
\boxed{
\int\frac{5x+1}{(x-2)(x+1)}\,dx
=\frac{11}{3}\ln|x-2|+\frac43\ln|x+1|+C
}.
$$

**Comprobación.** Al derivar y reunir denominadores, el numerador es

$$
\frac{11}{3}(x+1)+\frac43(x-2)=5x+1.
$$

## Ejemplo 2 — primero hay que dividir

Calcula

$$
\int\frac{x^3+2x^2+1}{x^2-1}\,dx.
$$

**Reconocimiento.** El grado del numerador es tres y el del denominador es dos. La fracción es impropia.

La división da

$$
\frac{x^3+2x^2+1}{x^2-1}
=x+2+\frac{x+3}{x^2-1}.
$$

Factorizamos \(x^2-1=(x-1)(x+1)\) y planteamos

$$
\frac{x+3}{(x-1)(x+1)}
=\frac{A}{x-1}+\frac{B}{x+1}.
$$

De

$$
x+3=A(x+1)+B(x-1)
$$

obtenemos \(A=2\) al usar \(x=1\), y \(B=-1\) al usar \(x=-1\). Por tanto,

$$
\begin{aligned}
\int\frac{x^3+2x^2+1}{x^2-1}\,dx
&=\int\left(x+2+\frac{2}{x-1}-\frac{1}{x+1}\right)dx\\
&=\frac{x^2}{2}+2x+2\ln|x-1|-\ln|x+1|+C.
\end{aligned}
$$

**Error frecuente.** Intentar una descomposición directa sin hacer la división. Las fracciones parciales representan la parte propia, no el cociente polinómico.

## Ejemplo 3 — factor lineal repetido

Calcula

$$
\int\frac{2x+3}{x(x-1)^2}\,dx.
$$

Como \(x-1\) aparece al cuadrado, la plantilla debe incluir las dos potencias:

$$
\frac{2x+3}{x(x-1)^2}
=\frac{A}{x}+\frac{B}{x-1}+\frac{C}{(x-1)^2}.
$$

Multiplicamos por \(x(x-1)^2\):

$$
2x+3=A(x-1)^2+Bx(x-1)+Cx.
$$

Con \(x=0\), \(A=3\). Con \(x=1\), \(5=C\). Para obtener \(B\), usamos por ejemplo \(x=2\):

$$
7=3+2B+10 \quad\Rightarrow\quad B=-3.
$$

Así,

$$
\frac{2x+3}{x(x-1)^2}
=\frac3x-\frac3{x-1}+\frac5{(x-1)^2}.
$$

Integramos recordando que \((x-1)^{-2}\) no produce un logaritmo:

$$
\boxed{
3\ln|x|-3\ln|x-1|-\frac5{x-1}+C
}.
$$

En efecto,

$$
\int\frac5{(x-1)^2}dx
=5\int(x-1)^{-2}dx
=-\frac5{x-1}.
$$

## Ejemplo 4 — cuadrático irreducible

Calcula

$$
\int\frac{3x+5}{x^2+2x+5}\,dx.
$$

El denominador no tiene raíces reales, pues su discriminante es \(4-20=-16\). No se necesitan fracciones parciales, pero sí separar el numerador usando la derivada del denominador:

$$
3x+5=\frac32(2x+2)+2.
$$

Entonces

$$
\int\frac{3x+5}{x^2+2x+5}dx
=\frac32\int\frac{2x+2}{x^2+2x+5}dx
+2\int\frac{dx}{(x+1)^2+4}.
$$

La primera integral es logarítmica. Para la segunda usamos

$$
\int\frac{dx}{z^2+a^2}=\frac1a\arctan\left(\frac za\right)+C.
$$

Resultado:

$$
\boxed{
\frac32\ln(x^2+2x+5)
+\arctan\left(\frac{x+1}{2}\right)+C
}.
$$

**Comprobación.** La derivada de la arcotangente es

$$
\frac{1/2}{1+(x+1)^2/4}
=\frac{2}{(x+1)^2+4},
$$

que coincide con el resto de la separación.

## Ejemplo 5 — factor lineal y cuadrático

Calcula

$$
\int\frac{x^2+2x+3}{(x-1)(x^2+1)}\,dx.
$$

La plantilla correcta es

$$
\frac{x^2+2x+3}{(x-1)(x^2+1)}
=\frac{A}{x-1}+\frac{Bx+C}{x^2+1}.
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
A+B=1,\qquad C-B=2,\qquad A-C=3.
$$

La solución es \(A=3\), \(B=-2\), \(C=0\). Así,

$$
\frac{x^2+2x+3}{(x-1)(x^2+1)}
=\frac3{x-1}-\frac{2x}{x^2+1}.
$$

Integramos:

$$
\boxed{3\ln|x-1|-\ln(x^2+1)+C}.
$$

Aunque la plantilla exigía \(Bx+C\), el cálculo puede dar \(C=0\). Lo incorrecto sería suponerlo antes de resolver el sistema.

## Ejemplo 6 — cuadrático irreducible con resto de arcotangente

Calcula

$$
\int\frac{x^2+1}{(x+1)(x^2+4)}\,dx.
$$

Planteamos

$$
\frac{x^2+1}{(x+1)(x^2+4)}
=\frac{A}{x+1}+\frac{Bx+C}{x^2+4}.
$$

La identidad de numeradores es

$$
x^2+1=A(x^2+4)+(Bx+C)(x+1).
$$

Al expandir y comparar:

$$
A+B=1,\qquad B+C=0,\qquad 4A+C=1.
$$

Se obtiene \(A=2/5\), \(B=3/5\), \(C=-3/5\). Por tanto,

$$
\begin{aligned}
\int\frac{x^2+1}{(x+1)(x^2+4)}dx
&=\frac25\ln|x+1|
+\frac35\int\frac{x}{x^2+4}dx
-\frac35\int\frac{dx}{x^2+4}\\
&=\frac25\ln|x+1|
+\frac3{10}\ln(x^2+4)
-\frac3{10}\arctan\left(\frac x2\right)+C.
\end{aligned}
$$

El coeficiente de la arcotangente incluye \(1/2\), porque \(a=2\).

## Ejemplo 7 — integral definida con singularidades fuera del intervalo

En una [integral definida](/blog/integral-definida-e-indefinida-diferencias-ejemplos/) no basta con encontrar una primitiva: el intervalo debe quedar dentro del dominio o tratarse mediante los límites de una integral impropia.

Calcula

$$
\int_0^1\frac{dx}{(x+1)(x+2)}.
$$

Las singularidades \(x=-1\) y \(x=-2\) quedan fuera de \([0,1]\), así que la integral es propia. Descomponemos:

$$
\frac1{(x+1)(x+2)}=\frac1{x+1}-\frac1{x+2}.
$$

Entonces

$$
\begin{aligned}
\int_0^1\frac{dx}{(x+1)(x+2)}
&=\left[\ln(x+1)-\ln(x+2)\right]_0^1\\
&=(\ln2-\ln3)-(\ln1-\ln2)\\
&=\ln\left(\frac43\right).
\end{aligned}
$$

**Interpretación.** El integrando es positivo en todo el intervalo, y \(\ln(4/3)>0\). Además, el integrando está entre \(1/6\) y \(1/2\), por lo que el resultado debe quedar entre esos valores; \(\ln(4/3)\approx0{,}288\) es coherente.

## Ejemplo 8 — una singularidad dentro del intervalo

Considera

$$
\int_0^2\frac{dx}{x-1}.
$$

No podemos aplicar directamente

$$
\left[\ln|x-1|\right]_0^2=0,
$$

porque el integrando no está definido en \(x=1\). La integral es impropia y debe separarse:

$$
\int_0^1\frac{dx}{x-1}+\int_1^2\frac{dx}{x-1}.
$$

Cada término se define mediante un límite, y ambos divergen. La cancelación simétrica que daría cero corresponde al valor principal de Cauchy, no a la convergencia de la integral impropia ordinaria.

Este control del dominio es imprescindible: una primitiva algebraicamente correcta no garantiza que una integral definida exista.

## Tres formas de calcular los coeficientes

### Sustitución de raíces

Es la opción más rápida para factores lineales distintos. Tras eliminar denominadores, sustituir \(x=a\) anula todos los términos salvo el asociado a \(x-a\).

### Comparación de coeficientes

Se expanden ambos lados y se igualan los coeficientes de cada potencia de \(x\). Es necesaria cuando hay cuadráticos irreducibles y útil como comprobación general.

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
\frac{P(x)}{x(x-1)(x+1)}
=\frac A x+\frac B{x-1}+\frac C{x+1},
$$

pero

$$
\frac{P(x)}{x(x^2+1)}
=\frac A x+\frac{Bx+C}{x^2+1}.
$$

No se introducen factores complejos en una integral real elemental. El factor \(x^2+1\) se conserva y conduce a logaritmos o arcotangentes.

También hay que mantener las multiplicidades. Si

$$
Q(x)=(x-2)^2(x^2+1),
$$

la plantilla completa es

$$
\frac{A}{x-2}+\frac{B}{(x-2)^2}
+\frac{Cx+D}{x^2+1}.
$$

Contar incógnitas sirve como control. Aquí hay cuatro coeficientes, tantos como grados de libertad tiene un numerador general de grado menor que cuatro.

## Ejemplo 9 — cuadrático irreducible repetido

Calcula

$$
\int\frac{dx}{(x^2+1)^2}.
$$

Una vía eficaz consiste en fabricar la derivada de \(x/(x^2+1)\):

$$
\frac{d}{dx}\left(\frac{x}{x^2+1}\right)
=\frac{1-x^2}{(x^2+1)^2}.
$$

Buscamos \(A,B\) tales que

$$
\frac1{(x^2+1)^2}
=A\frac{1-x^2}{(x^2+1)^2}+\frac{B}{x^2+1}.
$$

El numerador del lado derecho es

$$
A(1-x^2)+B(x^2+1)=(A+B)+(B-A)x^2.
$$

Necesitamos \(A+B=1\) y \(B-A=0\), luego \(A=B=1/2\). Así,

$$
\boxed{
\int\frac{dx}{(x^2+1)^2}
=\frac{x}{2(x^2+1)}+\frac12\arctan x+C
}.
$$

**Comprobación.** La derivada del primer sumando aporta \((1-x^2)/[2(x^2+1)^2]\), y la del segundo \((x^2+1)/[2(x^2+1)^2]\). La suma es el integrando.

## Ejemplo 10 — división y factor repetido

Calcula

$$
\int\frac{x^3+x^2+1}{x(x-1)^2}dx.
$$

Numerador y denominador tienen grado tres. Como \(x(x-1)^2=x^3-2x^2+x\), la división produce

$$
\frac{x^3+x^2+1}{x(x-1)^2}
=1+\frac{3x^2-x+1}{x(x-1)^2}.
$$

Planteamos

$$
\frac{3x^2-x+1}{x(x-1)^2}
=\frac A x+\frac B{x-1}+\frac C{(x-1)^2}.
$$

La identidad es

$$
3x^2-x+1=A(x-1)^2+Bx(x-1)+Cx.
$$

Con \(x=0\), \(A=1\). Con \(x=1\), \(C=3\). Comparando el coeficiente de \(x^2\), \(A+B=3\), luego \(B=2\). Por tanto,

$$
\frac{x^3+x^2+1}{x(x-1)^2}
=1+\frac1x+\frac2{x-1}+\frac3{(x-1)^2}.
$$

Finalmente,

$$
\boxed{x+\ln|x|+2\ln|x-1|-\frac3{x-1}+C}.
$$

**Comprobación estructural.** Hay un término lineal por la división, logaritmos por los polos simples y un término racional por el polo doble. Esa correspondencia permite detectar si falta una parte.

## Unicidad y formas equivalentes

Una vez fijadas la factorización y la plantilla, los coeficientes son únicos. La primitiva, sin embargo, puede escribirse de varias formas. Por ejemplo,

$$
\ln|x-1|-\ln|x+1|
=\ln\left|\frac{x-1}{x+1}\right|.
$$

Ambas expresiones tienen la misma derivada en cada intervalo del dominio. Para comparar respuestas, deriva o usa propiedades logarítmicas sin perder los valores absolutos.

## Por qué los polos determinan la plantilla

La forma de cada término parcial reproduce el comportamiento local del cociente cerca de un cero del denominador. Si $Q(a)=0$ y la raíz es simple, la función se comporta cerca de $a$ como una constante dividida por $x-a$. Por eso aparece $A/(x-a)$ y su primitiva contiene $A\ln|x-a|$. Si la raíz tiene multiplicidad dos, también puede existir un término proporcional a $(x-a)^{-2}$, cuya primitiva es racional.

Para una raíz simple puede calcularse directamente el coeficiente asociado:

$$
A=\lim_{x\to a}(x-a)\frac{P(x)}{Q(x)}.
$$

Si $Q(x)=(x-a)S(x)$ y $S(a)\neq0$, entonces

$$
A=\frac{P(a)}{S(a)}=\frac{P(a)}{Q'(a)}.
$$

Esta es la justificación del método de cubrir o sustituir la raíz. No debe aplicarse sin más a raíces repetidas, porque al multiplicar por un solo factor todavía queda una singularidad.

### Ejemplo 11 — coeficiente mediante el límite

En

$$
\frac{2x+1}{(x-3)(x^2+1)},
$$

el coeficiente del término $1/(x-3)$ es

$$
A=\lim_{x\to3}\frac{2x+1}{x^2+1}=\frac7{10}.
$$

Todavía hacen falta los coeficientes de $(Bx+C)/(x^2+1)$, que se obtienen comparando coeficientes. El límite acelera una parte del sistema, pero no sustituye la plantilla completa.

## Ejemplo 12 — ejercicio tipo examen con parámetro

Determina $k$ para que

$$
\int\frac{kx+4}{(x-1)(x+2)}dx
$$

no contenga un término $\ln|x+2|$, y calcula entonces la primitiva.

Planteamos

$$
\frac{kx+4}{(x-1)(x+2)}
=\frac A{x-1}+\frac B{x+2}.
$$

La ausencia del logaritmo exige $B=0$. Tras eliminar denominadores,

$$
kx+4=A(x+2)+B(x-1).
$$

Con $x=-2$ obtenemos $-2k+4=-3B$. Como $B=0$, resulta $k=2$. Para ese valor,

$$
\frac{2x+4}{(x-1)(x+2)}=\frac2{x-1}
$$

en los puntos del dominio original. Por tanto,

$$
\boxed{2\ln|x-1|+C}.
$$

Aunque el factor $x+2$ se cancele, la función original no está definida en $x=-2$. La primitiva se entiende en intervalos contenidos en el dominio original.

## Errores frecuentes

- **No dividir una fracción impropia.** La plantilla se aplica después de la división.
- **Factorizar de forma incompleta.** \(x^2-1\) debe escribirse como \((x-1)(x+1)\).
- **Omitir potencias repetidas.** Para \((x-a)^3\) hacen falta denominadores de grados uno, dos y tres.
- **Usar una constante sobre un cuadrático.** El numerador general es \(Ax+B\).
- **Perder el valor absoluto.** Los factores lineales producen \(\ln|x-a|\).
- **Convertir toda potencia en logaritmo.** Solo \((x-a)^{-1}\) integra como logaritmo; exponentes menores usan la regla de potencias.
- **Ignorar el dominio en integrales definidas.** Una singularidad interior obliga a estudiar límites.
- **Resolver coeficientes sin verificar.** Sustituye la descomposición en un valor ordinario o reúne fracciones.

## Cómo comprobar el resultado

Hay dos comprobaciones complementarias:

1. Antes de integrar, reúne las fracciones parciales y verifica que recuperas \(P(x)/Q(x)\).
2. Después, deriva la primitiva y simplifica.

También conviene revisar el comportamiento cerca de los polos. Un término \(A/(x-a)\) debe corresponder a un logaritmo \(A\ln|x-a|\); un término \(A/(x-a)^2\) produce \(-A/(x-a)\). Si la respuesta no refleja las singularidades del integrando, probablemente falta un término.

## Ejercicios propuestos

1. \(\displaystyle \int\frac{7x-1}{(x-1)(x+3)}dx\)
2. \(\displaystyle \int\frac{x^2+2}{x+1}dx\)
3. \(\displaystyle \int\frac{dx}{x(x+1)^2}\)
4. \(\displaystyle \int\frac{2x+4}{x^2+4x+8}dx\)
5. \(\displaystyle \int\frac{x+2}{(x-2)(x^2+1)}dx\)
6. \(\displaystyle \int_0^1\frac{2x+3}{(x+1)(x+2)}dx\)

## Soluciones de los ejercicios

**1. Factores lineales.** De

$$
\frac{7x-1}{(x-1)(x+3)}=\frac{A}{x-1}+\frac{B}{x+3}
$$

se obtiene \(A=3/2\) y \(B=11/2\). Por tanto,

$$
\frac32\ln|x-1|+\frac{11}{2}\ln|x+3|+C.
$$

**2. División.** Como

$$
\frac{x^2+2}{x+1}=x-1+\frac3{x+1},
$$

la primitiva es

$$
\frac{x^2}{2}-x+3\ln|x+1|+C.
$$

**3. Factor repetido.** La descomposición es

$$
\frac1{x(x+1)^2}=\frac1x-\frac1{x+1}-\frac1{(x+1)^2}.
$$

Así,

$$
\ln|x|-\ln|x+1|+\frac1{x+1}+C.
$$

**4. Derivada del denominador.** Como \(2x+4\) es la derivada de \(x^2+4x+8\),

$$
\ln(x^2+4x+8)+C.
$$

El argumento es siempre positivo porque \((x+2)^2+4>0\).

**5. Lineal y cuadrático.** La descomposición resulta

$$
\frac{x+2}{(x-2)(x^2+1)}
=\frac{4/5}{x-2}+\frac{-4x/5+1/5}{x^2+1}.
$$

Por tanto,

$$
\frac45\ln|x-2|-\frac25\ln(x^2+1)+\frac15\arctan x+C.
$$

**6. Integral definida.** Primero,

$$
\frac{2x+3}{(x+1)(x+2)}=\frac1{x+1}+\frac1{x+2}.
$$

Luego,

$$
\int_0^1\frac{2x+3}{(x+1)(x+2)}dx
=\left[\ln(x+1)+\ln(x+2)\right]_0^1
=\ln3.
$$

## Resumen operativo

Una integral racional se resuelve en tres capas: división si la fracción es impropia, factorización completa del denominador y descomposición con la plantilla adecuada. Los factores lineales generan logaritmos o potencias; los cuadráticos irreducibles exigen separar una derivada logarítmica y un resto de arcotangente.

El método termina cuando cada sumando encaja en una primitiva conocida. La comprobación más segura se hace antes y después de integrar: primero reuniendo la descomposición y después derivando el resultado.

Si necesitas aplicar estas plantillas a ejercicios de tu asignatura y corregir la factorización o el sistema de coeficientes, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
