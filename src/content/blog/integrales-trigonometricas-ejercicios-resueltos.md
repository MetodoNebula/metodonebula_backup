---
title: "Integrales trigonométricas: ejercicios universitarios resueltos"
seoTitle: "Integrales trigonométricas: ejercicios resueltos"
date: 2026-10-24
updated: 2026-11-05
description: "Aprende a resolver integrales trigonométricas con identidades, sustitución y ejercicios universitarios resueltos paso a paso."
tag: "Cálculo"
category: "Matemáticas universitarias"
relatedService: "/campus/"
relatedPosts: "integrales-inmediatas-ejercicios-resueltos,integracion-por-sustitucion-cambio-variable-ejercicios,metodos-de-integracion-como-elegir"
image: "/favicon.svg"
---

Las integrales trigonométricas no se resuelven memorizando una lista extensa: primero identifica si una derivada interior está presente, si conviene usar una identidad o si una potencia impar permite separar un factor.

> **Respuesta directa.** Si aparece una función con su derivada, usa sustitución. Para potencias de seno y coseno, separa un factor cuando una potencia es impar; si ambas son pares, usa identidades de ángulo doble.

## Sustitución directa

$$
\int\sin x\cos x\,dx.
$$

Tomamos \(u=\sin x\), \(du=\cos x\,dx\). Entonces:

$$
\int u\,du=\frac{u^2}{2}+C=\frac{\sin^2x}{2}+C.
$$

## Potencias con exponente impar

Para:

$$
\int\sin^3x\cos x\,dx,
$$

separa \(\sin^3x=\sin x(1-\cos^2x)\) si eliges \(u=\cos x\), o usa \(u=\sin x\) dejando \(\sin^2x=1-\cos^2x\) según el factor disponible. La elección debe hacer aparecer \(du\).

## Potencias pares

En:

$$
\int\sin^2x\,dx,
$$

usamos \(\sin^2x=(1-\cos2x)/2\):

$$
\int\sin^2x\,dx=\frac{x}{2}-\frac{\sin2x}{4}+C.
$$

## Errores frecuentes

- Cambiar variable sin transformar toda la integral.
- Usar una identidad que complica la expresión.
- Olvidar la constante \(C\).
- No derivar el resultado para comprobarlo.

## Ejercicios

1. \(\int\cos(3x)\,dx\).
2. \(\int\sin x\cos^2x\,dx\).
3. \(\int\cos^2x\,dx\).

## Soluciones

1. \(\sin(3x)/3+C\).
2. \(-\cos^3x/3+C\).
3. \(x/2+\sin(2x)/4+C\).

En el [Campus de Método Nebula](/campus/) los métodos de integración se entrenan como decisiones: reconocer estructura, elegir técnica y comprobar cada primitiva.
