---
title: Integrales inmediatas: ejercicios resueltos paso a paso
seoTitle: "Integrales inmediatas: ejercicios resueltos paso a paso"
date: 2026-11-05
updated: 2026-11-05
description: Aprende a reconocer y resolver integrales inmediatas con potencias, exponenciales, trigonometría, logaritmos y ejercicios resueltos.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: que-son-las-integrales-y-para-que-se-utilizan,metodos-de-integracion-como-elegir,integracion-por-sustitucion-cambio-variable-ejercicios
image: /favicon.svg
---

Una integral inmediata se resuelve aplicando directamente una regla de primitivas, sin necesidad de cambio de variable, integración por partes ni fracciones parciales. El reto no es memorizar una lista larga: es simplificar primero y reconocer la estructura que ya conoces.

> **Respuesta directa.** Una integral es inmediata si, tras simplificar, cada término coincide con una primitiva conocida. Integra término a término y añade una única constante \(C\) al final.

## Reglas que conviene reconocer

Para \(n\neq-1\),

$$
\int x^n\,dx=\frac{x^{n+1}}{n+1}+C.
$$

Además,

$$
\int e^x\,dx=e^x+C,
\qquad
\int \cos x\,dx=\sin x+C,
\qquad
\int \sin x\,dx=-\cos x+C,
$$

y

$$
\int \frac1x\,dx=\ln|x|+C.
$$

La linealidad permite separar sumas y sacar constantes:

$$
\int\bigl(af(x)+bg(x)\bigr)dx
=a\int f(x)dx+b\int g(x)dx.
$$

## Método de trabajo

1. Simplifica factores, potencias y fracciones sencillas.
2. Separa una suma en términos reconocibles.
3. Aplica la regla correspondiente a cada término.
4. Comprueba derivando el resultado completo.

No intentes usar una técnica avanzada antes de revisar este orden. Muchas integrales que parecen difíciles se vuelven inmediatas tras una simplificación corta.

## Ejemplo 1 — polinomio

Calcula

$$
\int(3x^4-2x^2+5)dx.
$$

Integramos término a término:

$$
\int3x^4dx=\frac{3x^5}{5},
\qquad
\int-2x^2dx=-\frac{2x^3}{3},
\qquad
\int5dx=5x.
$$

Por tanto,

$$
\boxed{\frac{3x^5}{5}-\frac{2x^3}{3}+5x+C}.
$$

## Ejemplo 2 — una potencia negativa no es siempre un logaritmo

Calcula

$$
\int\left(\frac{4}{x^3}-\frac2x\right)dx.
$$

Escribimos \(4/x^3=4x^{-3}\). Entonces,

$$
\int4x^{-3}dx=4\frac{x^{-2}}{-2}=-\frac2{x^2}.
$$

El segundo término sí tiene exponente (-1), así que usa logaritmo:

$$
\boxed{-\frac2{x^2}-2\ln|x|+C}.
$$

La regla de potencias no sirve para (x^{-1}), porque dividiríamos entre cero al sumar uno al exponente.

## Ejemplo 3 — exponenciales y trigonometría

Calcula

$$
\int\left(2e^x-3\sin x+4\cos x\right)dx.
$$

Aplicando las primitivas básicas,

$$
\boxed{2e^x+3\cos x+4\sin x+C}.
$$

El signo de \(\int\sin x\,dx\) es negativo. Una comprobación por derivación detecta enseguida ese error.

## Ejemplo 4 — simplificar antes de integrar

Calcula

$$
\int\frac{x^3+2x}{x}\,dx,
\qquad x\neq0.
$$

Primero simplificamos:

$$
\frac{x^3+2x}{x}=x^2+2.
$$

Ahora la integral es inmediata:

$$
\boxed{\frac{x^3}{3}+2x+C}.
$$

Aplicar la regla del cociente aquí añadiría trabajo y ocultaría la estructura real.

## Cuándo dejar de llamarla inmediata

Si aparece una función dentro de otra junto con su derivada, puede corresponder [cambio de variable](/blog/integracion-por-sustitucion-cambio-variable-ejercicios/). Si hay un producto de funciones que no se simplifica, quizá necesites [integración por partes](/blog/integracion-por-partes-formula-ejercicios-resueltos/). La guía de [métodos de integración](/blog/metodos-de-integracion-como-elegir/) ayuda a decidir sin probar técnicas al azar.

## Ejercicios propuestos

1. (int(6x^5-x+4)dx)
2. (int(5/x^2+3/x)dx)
3. (int(2\cos x-e^x)dx)
4. (int(x^4-1)/x^2\,dx)

## Soluciones

1. (x^6-x^2/2+4x+C).
2. (-5/x+3\ln|x|+C).
3. (2\sin x-e^x+C).
4. Primero (x^2-x^{-2}); resultado (x^3/3+1/x+C).

## Resumen práctico

Una integral inmediata se reconoce después de simplificar, no antes. Separa términos, identifica la primitiva y deriva tu resultado para comprobarlo. Esa rutina evita usar sustitución o partes cuando no hacen falta.

Si necesitas practicar estas técnicas con ejercicios de tu temario, consulta las [clases particulares de Cálculo](/clases-particulares/calculo-universitario/).
