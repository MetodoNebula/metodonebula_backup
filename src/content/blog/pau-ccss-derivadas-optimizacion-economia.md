---
title: "Derivadas en Matemáticas CCSS PAU: coste marginal, beneficio y optimización con interpretación"
seoTitle: "Derivadas CCSS PAU: coste, beneficio y optimización"
date: "2026-08-18"
updated: "2026-08-18"
description: "Aplica derivadas en Matemáticas CCSS PAU a coste marginal, ingresos, beneficio, crecimiento, elasticidad y optimización económica."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "que-son-las-derivadas-y-para-que-se-utilizan,problemas-optimizacion-derivadas-ejercicios-resueltos,pau-ccss-programacion-lineal-problemas"
image: "/assets/latex/marginal-optimization.svg"
---

En Matemáticas CCSS, derivar no termina al obtener una fórmula. La puntuación decisiva suele estar en interpretar qué significa el signo, qué unidad tiene la derivada y por qué un punto crítico representa o no una decisión óptima.

> **Respuesta directa.** Si $I(x)$ son ingresos y $C(x)$ costes, el beneficio es $B(x)=I(x)-C(x)$. Un máximo interior candidato cumple $B'(x)=0$, es decir, ingreso marginal igual a coste marginal. Después hay que comparar extremos y comprobar que la cantidad pertenece al dominio económico.

![Curva de beneficio con máximo y condiciones de primera y segunda derivada](/assets/latex/marginal-optimization.svg)

## Magnitudes totales y marginales

$C'(x)$ es el coste marginal: aproxima cuánto aumenta el coste al producir una unidad adicional alrededor de $x$. No es el coste total ni necesariamente el coste exacto de esa unidad.

Del mismo modo:

$$
I'(x)=\text{ingreso marginal},
\qquad
B'(x)=I'(x)-C'(x).
$$

Las unidades ayudan: si $C$ está en euros y $x$ en unidades, $C'$ se expresa en euros por unidad.

## Crecimiento y decisión

- Si $B'(x)>0$, aumentar producción eleva el beneficio localmente.
- Si $B'(x)<0$, aumentarla lo reduce.
- Si $B'(x)=0$, existe un candidato a máximo, mínimo o punto estacionario.

La condición $B'=0$ no basta. Se revisa cambio de signo o:

$$
B''(x^*)<0
$$

para confirmar un máximo local.

## Ejemplo completo

Supón:

$$
I(x)=60x-0.2x^2,
\qquad
C(x)=12x+400.
$$

Entonces:

$$
B(x)=-0.2x^2+48x-400.
$$

Derivando:

$$
B'(x)=-0.4x+48.
$$

El punto crítico es:

$$
-0.4x+48=0\Rightarrow x=120.
$$

Como $B''(x)=-0.4<0$, el beneficio es máximo. Su valor:

$$
B(120)=2480\ \text{€}.
$$

La solución debe indicar 120 unidades, no solo “$x=120$”.

## Restricciones y extremos

Si la capacidad limita $0\leq x\leq100$, el punto $x=120$ no es factible. Hay que comparar beneficio en extremos y puntos críticos del intervalo. En este caso, como $B'>0$ hasta 100, el máximo factible ocurre en 100.

Una respuesta matemática fuera del dominio no es una decisión válida.

## Coste medio

$$
\overline C(x)=\frac{C(x)}x.
$$

Minimizar coste medio no equivale a minimizar coste total. Para un mínimo interior de $\overline C$:

$$
\overline C'(x)=0.
$$

En muchos modelos, esta condición implica que coste marginal y coste medio coinciden en el mínimo del coste medio.

## Elasticidad

Para una función de demanda $D(p)$, una elasticidad habitual es:

$$
E(p)=-\frac{pD'(p)}{D(p)}.
$$

Compara cambios porcentuales, por lo que es adimensional. Su interpretación depende del convenio del enunciado; no se debe copiar una clasificación sin revisar la definición dada.

## Errores frecuentes

- Confundir coste marginal con coste medio.
- Declarar máximo solo porque $B'=0$.
- Ignorar capacidad o cantidades no negativas.
- Omitir unidades e interpretación.
- Redondear una cantidad discreta sin comparar enteros vecinos.

## Convertir la visibilidad en preparación

Las derivadas son el clúster con mayor tracción orgánica actual de Método Nebula. Este artículo amplía esa entrada hacia CCSS y economía; el campus virtual la conecta con funciones, matrices y programación lineal mediante ejercicios y modelos PAU. El botón de contacto permite acceder al itinerario completo y a la práctica corregida.
