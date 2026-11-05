---
title: Límites trigonométricos: ejercicios resueltos y métodos
seoTitle: "Límites trigonométricos: ejercicios resueltos paso a paso"
date: 2026-11-05
updated: 2026-11-05
description: Aprende a resolver límites trigonométricos con los límites notables, equivalencias, identidades y ejercicios resueltos paso a paso.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: como-resolver-limites-indeterminaciones-ejercicios,regla-lhopital-cuando-usarla-ejercicios,que-son-las-derivadas-y-para-que-se-utilizan
image: /favicon.svg
---

Los límites trigonométricos se apoyan en unas equivalencias básicas cerca de cero. El paso decisivo es transformar la expresión para que aparezca una de ellas, respetando siempre que los ángulos estén expresados en radianes.

> **Respuesta directa.** Cerca de \(0\), \(\sin x/x\to1\), \(\tan x/x\to1\) y \((1-\cos x)/x^2\to1/2\). Reescribe el límite para formar esos cocientes y simplifica los factores restantes.

## Límites notables

Los tres resultados más útiles son

$$
\lim_{x\to0}\frac{\sin x}{x}=1,
\qquad
\lim_{x\to0}\frac{\tan x}{x}=1,
\qquad
\lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12.
$$

No son fórmulas para sustituir números sin mirar. Hay que adaptar la expresión hasta que el argumento trigonométrico y el denominador tengan la misma variable, quizá multiplicando por una constante.

## Ejemplo 1 — seno con argumento lineal

Calcula

$$
\lim_{x\to0}\frac{\sin(5x)}{x}.
$$

Introducimos (5x) en el denominador:

$$
\frac{\sin(5x)}{x}
=5\frac{\sin(5x)}{5x}.
$$

Como \(5x\to0\), el cociente notable tiende a uno. Por tanto,

$$
\boxed{5}.
$$

## Ejemplo 2 — tangente y seno en el mismo límite

Calcula

$$
\lim_{x\to0}\frac{\tan(2x)}{\sin(3x)}.
$$

Multiplicamos y dividimos para formar dos límites notables:

$$
\frac{\tan(2x)}{\sin(3x)}
=\frac{\tan(2x)}{2x}\cdot\frac{3x}{\sin(3x)}\cdot\frac23.
$$

Los dos primeros factores tienden a (1), así que el límite vale

$$
\boxed{\frac23}.
$$

## Ejemplo 3 — coseno menos uno

Calcula

$$
\lim_{x\to0}\frac{1-\cos(4x)}{x^2}.
$$

Escribimos

$$
\frac{1-\cos(4x)}{x^2}
=16\frac{1-\cos(4x)}{(4x)^2}.
$$

El cociente notable tiende a (1/2). Luego,

$$
\boxed{8}.
$$

## Ejemplo 4 — usar una identidad

Calcula

$$
\lim_{x\to0}\frac{\sin^2x}{x^2}.
$$

Reagrupamos:

$$
\frac{\sin^2x}{x^2}=\left(\frac{\sin x}{x}\right)^2.
$$

Por el límite notable,

$$
\boxed{1}.
$$

## Ejemplo 5 — racionalizar una diferencia de cosenos

Calcula

$$
\lim_{x\to0}\frac{1-\cos x}{\sin^2x}.
$$

Usamos \(1-\cos^2x=\sin^2x\):

$$
\frac{1-\cos x}{\sin^2x}
=\frac{1-\cos x}{(1-\cos x)(1+\cos x)}
=\frac1{1+\cos x}.
$$

Al tomar el límite,

$$
\boxed{\frac12}.
$$

Esta vía es más clara que derivar numerador y denominador sin identificar la identidad.

## Errores frecuentes

- **Usar grados.** Los límites notables están formulados en radianes.
- **Olvidar una constante.** Si aparece \(\sin(ax)\), crea el factor \(ax\) completo en el denominador.
- **Sustituir directamente en una forma (0/0).** Primero hay que transformar o simplificar.
- **Aplicar L'Hôpital como primer reflejo.** Puede funcionar en algunos casos, pero las identidades y límites notables suelen mostrar mejor la estructura. Consulta la guía de [L'Hôpital](/blog/regla-lhopital-cuando-usarla-ejercicios/) cuando las hipótesis estén claras.

## Ejercicios propuestos

1. (lim_{x\to0}\sin(7x)/x)
2. (lim_{x\to0}\sin(2x)/\tan(5x))
3. (lim_{x\to0}(1-\cos(3x))/x^2)
4. (lim_{x\to0}\tan^2x/x^2)

## Soluciones

1. (7).
2. (2/5).
3. (9/2).
4. (1).

## Resumen práctico

Primero identifica cuál de los límites notables puede aparecer. Después ajusta el argumento, conserva las constantes y revisa que trabajas en radianes. Para otras indeterminaciones, consulta la guía general de [límites e indeterminaciones](/blog/como-resolver-limites-indeterminaciones-ejercicios/).
