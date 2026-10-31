---
title: "Integrales en Matemáticas CCSS PAU: áreas, acumulación y aplicaciones económicas con sentido"
seoTitle: "Integrales CCSS PAU: áreas y acumulación"
date: "2026-08-13"
updated: "2026-08-13"
description: "Aplica integrales en Matemáticas CCSS PAU a áreas, funciones marginales, acumulación, costes, ingresos e interpretación contextual."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "pau-matematicas-integrales-areas,que-son-las-integrales-y-para-que-se-utilizan,pau-ccss-derivadas-optimizacion-economia"
image: "/assets/latex/integral-area.svg"
---

En CCSS, una integral no es solo “el área bajo una curva”. Puede reconstruir una magnitud total a partir de su tasa marginal, calcular acumulaciones o comparar ingresos y costes. El contexto decide qué representa el signo.

> **Respuesta directa.** La integral definida acumula cambios. Si $C'(x)$ es coste marginal, entonces $C(b)-C(a)=\int_a^b C'(x)\,dx$. Para áreas geométricas, divide en intervalos donde la función o el orden de las curvas cambie de signo.

![Área acumulada bajo una función entre dos límites](/assets/latex/integral-area.svg)

## Integral como acumulación

Si $r(t)$ es una tasa en unidades por hora:

$$
\int_a^b r(t)\,dt
$$

representa cantidad acumulada entre $a$ y $b$. Las unidades lo muestran: unidades/hora multiplicadas por horas producen unidades.

Una tasa negativa resta a la acumulación neta; no representa “área negativa” en un sentido físico automático, sino disminución de la magnitud modelada.

## De marginal a total

Si se conoce:

$$
C'(x)=0.02x+5
$$

y el coste fijo $C(0)=400$, entonces:

$$
C(x)=\int(0.02x+5)\,dx
=0.01x^2+5x+K.
$$

La condición inicial da $K=400$:

$$
C(x)=0.01x^2+5x+400.
$$

Sin el coste fijo, la primitiva solo se determina hasta una constante.

## Incremento de coste

El coste adicional al pasar de 100 a 150 unidades es:

$$
C(150)-C(100)
=\int_{100}^{150}(0.02x+5)\,dx.
$$

Calculando:

$$
\left[0.01x^2+5x\right]_{100}^{150}
=375\ \text{€}.
$$

El coste fijo desaparece en la diferencia, como debe ocurrir.

## Área respecto al eje

La integral definida cuenta área con signo:

$$
\int_a^bf(x)\,dx.
$$

El área geométrica es:

$$
A=\int_a^b|f(x)|\,dx,
$$

separando en los ceros. Si una curva está bajo el eje, su contribución a la integral es negativa, pero el área se suma positiva.

## Área entre ingresos y costes

Si $I(x)$ y $C(x)$ representan tasas marginales, la acumulación de ventaja marginal entre $a$ y $b$ es:

$$
\int_a^b[I'(x)-C'(x)]\,dx
=B(b)-B(a).
$$

Si representan funciones totales, el área entre curvas tiene otra interpretación y no equivale directamente a beneficio. Es esencial leer qué magnitud está en el eje vertical.

## Valor medio

El valor medio de $f$ en $[a,b]$ es:

$$
f_{\rm medio}=\frac1{b-a}\int_a^bf(x)\,dx.
$$

No es la media de los extremos salvo en funciones lineales. En contexto puede representar tasa media, demanda media o valor medio continuo.

## Errores frecuentes

- Olvidar la constante al reconstruir una función total.
- Interpretar toda integral como área geométrica positiva.
- Confundir una función total con una marginal.
- Evaluar el extremo inferior sin paréntesis.
- Dar un resultado sin unidades ni contexto.

## Integrar el tema en la preparación CCSS

El campus virtual de Método Nebula conecta derivadas, funciones marginales, integrales, matrices y optimización mediante teoría y modelos económicos. Incluye ejercicios graduados y exámenes PAU resueltos. El botón de contacto permite acceder al recorrido y practicar tanto el cálculo como la interpretación que exige la prueba.
