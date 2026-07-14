---
title: Derivadas e integrales universitarias: prueba de nivel con ejercicios resueltos
date: 2026-06-23
updated: 2026-06-23
description: Prueba de nivel de derivadas e integrales universitarias con ejercicios resueltos para detectar errores antes del examen de Cálculo.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/matematicas-universidad/
relatedPosts: que-son-las-derivadas-y-para-que-se-utilizan,que-son-las-integrales-y-para-que-se-utilizan,como-aprobar-calculo-i-ingenieria-seis-semanas
image: /favicon.svg
---

Esta prueba de nivel de derivadas e integrales universitarias sirve para saber si tienes la base de Cálculo suficientemente firme antes de entrar en problemas más largos. No mide velocidad. Mide criterio.

Haz primero los ejercicios sin mirar la solución. Después revisa no solo el resultado, sino el método elegido.

## Ejercicio 1: derivada con regla de la cadena

Calcula:

$$
f(x)=\ln(1+x^2)
$$

Solución:

$$
f'(x)=\frac{1}{1+x^2}\cdot 2x=\frac{2x}{1+x^2}
$$

Qué comprueba: si reconoces que el logaritmo tiene una función interna. El error habitual es escribir \(1/(1+x^2)\) y olvidar multiplicar por \(2x\).

## Ejercicio 2: recta tangente

Encuentra la recta tangente a \(f(x)=x^3-2x\) en \(x=1\).

Primero:

$$
f(1)=1-2=-1
$$

La derivada es:

$$
f'(x)=3x^2-2
$$

Por tanto:

$$
f'(1)=1
$$

La recta tangente:

$$
y=f(1)+f'(1)(x-1)
$$

queda:

$$
y=-1+(x-1)=x-2
$$

Qué comprueba: interpretación de la derivada como pendiente local.

## Ejercicio 3: integral inmediata con cambio de variable

Calcula:

$$
\int 3x^2 e^{x^3}\,dx
$$

Tomamos:

$$
u=x^3,\quad du=3x^2\,dx
$$

Entonces:

$$
\int 3x^2 e^{x^3}\,dx=\int e^u\,du=e^u+C=e^{x^3}+C
$$

Qué comprueba: si sabes detectar una función y su derivada dentro de la integral.

## Ejercicio 4: integración por partes

Calcula:

$$
\int x e^x\,dx
$$

Usamos:

$$
\int u\,dv=uv-\int v\,du
$$

Elige \(u=x\) y \(dv=e^x dx\). Entonces \(du=dx\) y \(v=e^x\). Por tanto:

$$
\int x e^x\,dx=xe^x-\int e^x\,dx=xe^x-e^x+C
$$

Resultado:

$$
\int x e^x\,dx=e^x(x-1)+C
$$

Qué comprueba: elección razonable de \(u\). En general, conviene derivar la parte que se simplifica.

## Ejercicio 5: área bajo una curva

Calcula el área bajo \(f(x)=2x\) entre \(x=0\) y \(x=3\).

$$
\int_0^3 2x\,dx=\left[x^2\right]_0^3=9
$$

El área es \(9\). No basta con integrar: hay que interpretar la integral definida como acumulación en un intervalo.

## Ejercicio 6: integral con signo

Calcula:

$$
\int_{-1}^{1} x^3\,dx
$$

La función \(x^3\) es impar, así que el área positiva y negativa se compensan:

$$
\int_{-1}^{1} x^3\,dx=0
$$

También se puede calcular:

$$
\left[\frac{x^4}{4}\right]_{-1}^{1}=\frac{1}{4}-\frac{1}{4}=0
$$

Qué comprueba: diferencia entre integral definida y área geométrica total. Si te piden área encerrada, habría que partir intervalos y tomar valores absolutos cuando corresponda.

## Cómo interpretar tu resultado

Si has fallado ejercicios 1 o 3, el problema principal es regla de la cadena. Si has fallado 2, falta interpretación geométrica de la derivada. Si has fallado 4, necesitas practicar elección de técnica. Si has fallado 5 o 6, revisa integrales definidas y significado de signo.

## Nivel mínimo antes de un examen universitario

Antes de enfrentarte a problemas de Cálculo I deberías poder:

- Derivar funciones compuestas sin perder factores.
- Construir rectas tangentes.
- Reconocer cambios de variable sencillos.
- Aplicar integración por partes.
- Interpretar integrales definidas.
- Revisar si un resultado tiene sentido por signo, unidades o gráfica.

Para profundizar, puedes leer las guías sobre [qué son las derivadas](/blog/que-son-las-derivadas-y-para-que-se-utilizan/) y [qué son las integrales](/blog/que-son-las-integrales-y-para-que-se-utilizan/). Si quieres un diagnóstico más completo, revisa [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/).
