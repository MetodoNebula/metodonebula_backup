---
title: Derivadas de producto y cociente: ejercicios resueltos
seoTitle: "Derivadas de producto y cociente: ejercicios resueltos"
date: 2026-11-05
updated: 2026-11-05
description: Aprende las reglas de derivación de productos y cocientes con ejercicios resueltos, comprobaciones y errores frecuentes.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: que-son-las-derivadas-y-para-que-se-utilizan,regla-cadena-ejercicios-resueltos,problemas-optimizacion-derivadas-ejercicios-resueltos
image: /favicon.svg
---

Las reglas de producto y cociente se usan cuando dos funciones se multiplican o una se divide entre otra. No se obtiene la derivada multiplicando o dividiendo las derivadas: cada regla mezcla la función original de una parte con la derivada de la otra.

> **Respuesta directa.** Si \(y=u(x)v(x)\), entonces \(y'=u'v+uv'\). Si \(y=u(x)/v(x)\), con \(v(x)\neq0\), entonces \(y'=\frac{u'v-uv'}{v^2}\).

## Antes de elegir una regla

No todo lo que contiene una multiplicación visible necesita la regla de producto. Por ejemplo, \(3x^2\) es una constante por una función y deriva a \(6x\); no hace falta escribir producto. En cambio, \(x^2e^x\) contiene dos funciones que cambian con \(x\), así que sí requiere la regla.

En un cociente, comprueba primero si se puede simplificar. La expresión

$$
\frac{x^2-1}{x-1}
$$

se reduce a \(x+1\) para \(x\neq1\). En cambio, si no hay una simplificación útil, la regla del cociente organiza el cálculo de forma segura.

## Regla del producto

Para (y=u\,v), la regla es

$$
\boxed{(uv)'=u'v+uv'}.
$$

Una forma práctica de no cambiar el orden es decir: «derivada de la primera por la segunda, más primera por derivada de la segunda». No se deriva todo a la vez.

### Ejemplo 1 — polinomio por exponencial

Deriva

$$
y=x^2e^x.
$$

Tomamos \(u=x^2\), \(v=e^x\). Entonces \(u'=2x\) y \(v'=e^x\). Aplicamos la regla:

$$
y'=2xe^x+x^2e^x.
$$

Podemos factorizar:

$$
\boxed{y'=e^x(x^2+2x)}.
$$

La forma factorizada ayuda a comprobar que ambos sumandos conservan el factor exponencial original.

### Ejemplo 2 — producto de seno y polinomio

Deriva

$$
y=(x^3-1)\sin x.
$$

Aquí \(u=x^3-1\), \(v=\sin x\), \(u'=3x^2\) y \(v'=\cos x\). Por tanto,

$$
\boxed{y'=3x^2\sin x+(x^3-1)\cos x}.
$$

No se puede combinar más salvo que el contexto dé un valor concreto de \(x\).

### Ejemplo 3 — producto con regla de la cadena

Deriva

$$
y=x\sqrt{x^2+1}.
$$

La estructura exterior es un producto. Para la segunda función también hace falta cadena:

$$
\frac{d}{dx}\sqrt{x^2+1}=\frac{x}{\sqrt{x^2+1}}.
$$

Entonces,

$$
y'=\sqrt{x^2+1}+x\frac{x}{\sqrt{x^2+1}}
=\frac{2x^2+1}{\sqrt{x^2+1}}.
$$

La guía de [regla de la cadena](/blog/regla-cadena-ejercicios-resueltos/) explica con detalle el factor que aparece al derivar \(x^2+1\).

## Regla del cociente

Para \(y=u/v\), con \(v\neq0\), se usa

$$
\boxed{\left(\frac uv\right)'=\frac{u'v-uv'}{v^2}}.
$$

El numerador mantiene el orden: derivada de arriba por abajo, menos arriba por derivada de abajo. El denominador se eleva al cuadrado completo.

### Ejemplo 4 — cociente de polinomios

Deriva

$$
y=\frac{x^2+1}{x-2}.
$$

Tomamos \(u=x^2+1\), \(v=x-2\), \(u'=2x\), \(v'=1\). Sustituyendo,

$$
y'=\frac{2x(x-2)-(x^2+1)}{(x-2)^2}.
$$

Simplificamos el numerador:

$$
2x^2-4x-x^2-1=x^2-4x-1.
$$

Así,

$$
\boxed{y'=\frac{x^2-4x-1}{(x-2)^2}}.
$$

El resultado no está definido en (x=2), igual que la función original.

### Ejemplo 5 — cociente trigonométrico con función compuesta

Deriva

$$
y=\frac{\sin x}{x^2+1}.
$$

Tenemos \(u=\sin x\), \(v=x^2+1\), \(u'=\cos x\), \(v'=2x\). Entonces,

$$
\boxed{y'=\frac{(x^2+1)\cos x-2x\sin x}{(x^2+1)^2}}.
$$

Es preferible conservar los paréntesis hasta el final: evitan perder el signo menos o elevar solo una parte del denominador.

## Errores frecuentes

- **Producto de derivadas.** \((uv)'\neq u'v'\). Faltan los términos que recogen el cambio de cada factor mientras el otro permanece.
- **Cociente de derivadas.** \((u/v)'\neq u'/v'\). La regla correcta tiene dos términos en el numerador y \(v^2\) en el denominador.
- **Cambiar el signo menos.** En el cociente, el orden es (u'v-uv'), no al revés.
- **Olvidar la cadena dentro de un factor.** En \(x\cos(2x)\), la derivada de \(\cos(2x)\) es \(-2\sin(2x)\).
- **No simplificar antes.** Si hay factores comunes, reducir puede eliminar por completo la necesidad de usar cociente.

## Ejercicios propuestos

1. Deriva \(x^3\ln x\), con \(x>0\).
2. Deriva \((x+1)e^{-x}\).
3. Deriva \(\frac{x^2}{x+1}\).
4. Deriva \(\frac{\ln x}{x}\), con \(x>0\).
5. Deriva \(x^2\sin(3x)\).

## Soluciones

1. \(3x^2\ln x+x^2\).
2. \(e^{-x}-(x+1)e^{-x}=-xe^{-x}\).
3. \(\frac{2x(x+1)-x^2}{(x+1)^2}=\frac{x^2+2x}{(x+1)^2}\).
4. \(\frac{1-\ln x}{x^2}\).
5. \(2x\sin(3x)+3x^2\cos(3x)\).

## Resumen práctico

Usa producto cuando hay dos funciones que se multiplican y cociente cuando una función se divide entre otra que no se puede simplificar. Escribe primero \(u\), \(v\), \(u'\) y \(v'\); esa preparación reduce más errores que memorizar una frase rápida. Si alguno de los factores es una función compuesta, añade la regla de la cadena dentro de ese paso.

Para practicar estas reglas con ejercicios de tu asignatura, consulta las [clases particulares de Cálculo](/clases-particulares/calculo-universitario/).
