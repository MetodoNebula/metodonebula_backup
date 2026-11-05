---
title: Regla de la cadena: ejercicios resueltos paso a paso
seoTitle: "Regla de la cadena: fórmula y ejercicios resueltos"
date: 2026-11-05
updated: 2026-11-05
description: Aprende la regla de la cadena con una fórmula clara, cómo reconocer funciones compuestas, ejercicios resueltos y errores frecuentes.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: que-son-las-derivadas-y-para-que-se-utilizan,derivadas-producto-cociente-ejercicios,problemas-optimizacion-derivadas-ejercicios-resueltos
image: /favicon.svg
---

La regla de la cadena se utiliza cuando una función está aplicada sobre otra. En vez de derivar la expresión completa como si fuera una suma de símbolos, se deriva primero la función exterior, se conserva la interior y se multiplica por la derivada de esa función interior.

> **Respuesta directa.** Si \(y=f(g(x))\), entonces
>
> $$
> y'=f'(g(x))\,g'(x).
> $$
>
> Deriva la capa exterior, deja intacta la expresión interior y multiplica por su derivada.

## Cómo reconocer una función compuesta

Hay regla de la cadena cuando una expresión aparece dentro de otra operación. Algunos patrones frecuentes son:

- Una potencia de un polinomio: ((3x-1)^5).
- Una raíz con una expresión interior: \(\sqrt{x^2+4}\).
- Una exponencial: \(e^{x^2}\).
- Un logaritmo: \(\ln(2x+3)\).
- Una función trigonométrica: \(\sin(x^3)\).

La pregunta útil es: «¿qué tendría que sustituir por una sola letra para simplificar la función?». Si eliges (u=g(x)), la expresión queda como (f(u)). Esa separación muestra la función exterior (f) y la interior (g).

## Método en cuatro pasos

1. Marca la función interior y llámala (u) mentalmente o por escrito.
2. Deriva la función exterior respecto de (u).
3. Sustituye de nuevo la expresión interior.
4. Multiplica por (u'), la derivada de la expresión interior.

En \((3x-1)^5\), por ejemplo, la exterior es \(u^5\) y la interior es \(u=3x-1\). La derivada exterior es \(5u^4\), que se convierte en \(5(3x-1)^4\). Falta multiplicar por \(u'=3\). Por tanto,

$$
\frac{d}{dx}(3x-1)^5=15(3x-1)^4.
$$

Olvidar el factor (3) es uno de los errores más frecuentes: la potencia se ha derivado, pero la composición no.

## Ejemplo 1 — potencia de una función lineal

Calcula

$$
\frac{d}{dx}(2x+5)^7.
$$

Tomamos \(u=2x+5\). La exterior es \(u^7\), luego

$$
\frac{d}{du}u^7=7u^6.
$$

Como (u'=2), obtenemos

$$
\boxed{\frac{d}{dx}(2x+5)^7=14(2x+5)^6}.
$$

La comprobación estructural es sencilla: al derivar una séptima potencia, el exponente baja a seis, pero la base compuesta no desaparece.

## Ejemplo 2 — raíz y potencia fraccionaria

Calcula

$$
\frac{d}{dx}\sqrt{x^2+4}.
$$

Escribimos la raíz como potencia:

$$
\sqrt{x^2+4}=(x^2+4)^{1/2}.
$$

La derivada exterior aporta \(1/2\), la potencia baja a \(-1/2\) y la interior aporta \(2x\):

$$
\frac{d}{dx}(x^2+4)^{1/2}
=\frac12(x^2+4)^{-1/2}\cdot2x.
$$

Simplificando,

$$
\boxed{\frac{x}{\sqrt{x^2+4}}}.
$$

No se deriva la raíz como si fuese \(\sqrt{2x}\). La expresión \(x^2+4\) es una unidad interior completa.

## Ejemplo 3 — exponencial con exponente compuesto

Calcula

$$
\frac{d}{dx}e^{x^3-x}.
$$

La derivada de (e^u) es (e^u), pero hay que multiplicar por (u'). Como

$$
u=x^3-x,
\qquad u'=3x^2-1,
$$

queda

$$
\boxed{\frac{d}{dx}e^{x^3-x}=e^{x^3-x}(3x^2-1)}.
$$

## Ejemplo 4 — logaritmo

Calcula

$$
\frac{d}{dx}\ln(4x^2+1).
$$

Para (ln u), la derivada exterior es (1/u). Por tanto,

$$
\frac{d}{dx}\ln(4x^2+1)
=\frac{1}{4x^2+1}\cdot8x
=\boxed{\frac{8x}{4x^2+1}}.
$$

El denominador se conserva completo. Escribir \(1/(8x)\) confunde la derivada de la función interior con la función interior original.

## Ejemplo 5 — seno de una potencia

Calcula

$$
\frac{d}{dx}\sin(x^4).
$$

La derivada exterior de \(\sin u\) es \(\cos u\). La interior \(u=x^4\) tiene derivada \(4x^3\). Entonces,

$$
\boxed{\frac{d}{dx}\sin(x^4)=4x^3\cos(x^4)}.
$$

## Cuando se combinan varias reglas

La regla de la cadena puede aparecer dentro de una suma, un producto o un cociente. Primero se aplica la regla que describe la estructura exterior y, dentro de cada parte, se deriva la composición que aparezca.

Por ejemplo, en

$$
y=x^2\cos(3x),
$$

la operación exterior es un producto. Usamos producto y, al derivar \(\cos(3x)\), usamos cadena:

$$
y'=2x\cos(3x)+x^2\bigl[-\sin(3x)\cdot3\bigr].
$$

Por tanto,

$$
\boxed{y'=2x\cos(3x)-3x^2\sin(3x)}.
$$

Si la duda está en distinguir esos casos, consulta la guía de [derivadas de producto y cociente](/blog/derivadas-producto-cociente-ejercicios/).

## Errores frecuentes

- **Olvidar derivar la interior.** \((x^2+1)^3\) no deriva a \(3(x^2+1)^2\), sino a \(6x(x^2+1)^2\).
- **Derivar el exponente y la base a la vez sin una regla válida.** En \(e^{x^2}\), la derivada no es \(x^{2e}\).
- **Separar una potencia compuesta incorrectamente.** En general, ((x+1)^n) no se puede derivar término a término sin desarrollar o aplicar cadena.
- **No usar paréntesis.** Escribe (cos(x^2)), no (cos x^2), para dejar claro qué está dentro de la función.

## Ejercicios propuestos

1. Deriva ((5x-2)^6).
2. Deriva ((x^2-3x+1)^4).
3. Deriva (cos(2x^3)).
4. Deriva (ln(1+x^5)).
5. Deriva (\frac{1}{(x^2+1)^3}).

## Soluciones

1. (30(5x-2)^5).
2. (4(x^2-3x+1)^3(2x-3)).
3. (-6x^2sin(2x^3)).
4. (5x^4/(1+x^5)).
5. Escribe ((x^2+1)^{-3}): la derivada es (-6x(x^2+1)^{-4}), o bien (-6x/(x^2+1)^4).

## Resumen práctico

La regla de la cadena traduce una idea simple: un cambio en (x) atraviesa cada capa de una función compuesta. Identifica la interior, deriva la exterior, conserva la interior y multiplica por su derivada. Después simplifica y comprueba que ningún factor de la cadena haya desaparecido.

Para pasar del concepto a ejercicios de nivel universitario, puedes consultar las [clases particulares de Cálculo](/clases-particulares/calculo-universitario/).
