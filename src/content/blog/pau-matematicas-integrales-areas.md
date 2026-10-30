---
title: "Integrales en Matemáticas II PAU: áreas, signos y primitivas con un método que se puede comprobar"
seoTitle: "Integrales PAU: áreas, signos y ejercicios resueltos"
date: "2026-10-14"
updated: "2026-10-14"
description: "Resuelve integrales y áreas en Matemáticas II PAU: primitivas, puntos de corte, cambios de signo, planteamiento y comprobaciones."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "area-entre-dos-curvas-ejercicios-resueltos,integracion-por-partes-formula-ejercicios-resueltos,como-preparar-pau-matematicas-ii"
image: "/assets/latex/integral-area.svg"
---

En PAU, el cálculo de una primitiva suele ser solo una parte del ejercicio. Los puntos decisivos están antes: interpretar la región, encontrar cortes y decidir dónde cambia el signo.

> **Respuesta directa.** Para calcular un área, dibuja o estudia las funciones, encuentra intersecciones, divide donde cambie el orden y suma integrales no negativas. Una integral definida con signo no siempre coincide con el área geométrica.

![Área acumulada bajo una curva entre dos límites](/assets/latex/integral-area.svg)

## Integral definida y área

$$
\int_a^b f(x)\,dx
$$

representa área con signo. Si $f<0$, la contribución es negativa. El área respecto al eje es:

$$
A=\int_a^b|f(x)|\,dx,
$$

que se calcula separando en los ceros.

Entre dos curvas:

$$
A=\int_a^b\bigl(y_{\rm superior}-y_{\rm inferior}\bigr)\,dx.
$$

## Ejemplo resuelto

Calcula el área entre $y=2x$ y $y=x^2$.

Intersecciones:

$$
x^2=2x\Rightarrow x=0,\ 2.
$$

En $(0,2)$, $2x>x^2$:

$$
A=\int_0^2(2x-x^2)\,dx
=\left[x^2-\frac{x^3}{3}\right]_0^2
=4-\frac83=\frac43.
$$

El resultado es positivo y compatible con la escala de la región.

## Elegir técnica de integración

- Composición con derivada interior: sustitución.
- Producto que mejora al derivar un factor: partes.
- Cociente racional: división y fracciones parciales cuando proceda.
- Funciones elementales: tabla de primitivas.

La técnica se decide por estructura, no por la apariencia de dificultad.

## Condiciones con una función integral

Si:

$$
F(x)=\int_a^x f(t)\,dt,
$$

entonces:

$$
F'(x)=f(x).
$$

Los máximos y mínimos de $F$ se estudian con el signo de $f$, no integrando de nuevo.

## Área cuando la curva cambia de signo

Considera $f(x)=x^2-1$ entre $x=-2$ y $x=2$. Sus ceros son $-1$ y $1$. La función es positiva en los extremos y negativa en el intervalo central, de modo que el área exige tres tramos:

$$
A=\int_{-2}^{-1}(x^2-1)\,dx
-\int_{-1}^{1}(x^2-1)\,dx
+\int_{1}^{2}(x^2-1)\,dx.
$$

Por simetría par:

$$
A=2\int_1^2(x^2-1)\,dx+2\int_0^1(1-x^2)\,dx=4.
$$

En cambio, la integral con signo sobre $[-2,2]$ vale $4/3$. La diferencia no es de cálculo, sino de interpretación geométrica.

## Parámetros determinados por una integral

Si una función $f(x)=kx$ debe encerrar área 6 con el eje entre 0 y 3:

$$
\int_0^3kx\,dx=\frac{9k}{2}=6
\Rightarrow k=\frac43.
$$

Antes de igualar a un área positiva, debe verificarse el signo de $f$ en el intervalo. En problemas con parámetros, los puntos de corte pueden depender del propio parámetro; resolverlos al principio evita integrar sobre una región equivocada.

Una buena presentación incluye ecuación de cortes, orden de las funciones, integral planteada y valor exacto. La calculadora puede comprobar un decimal, pero no sustituye la justificación de la región.

## Método PAU

1. Representa lo imprescindible.
2. Calcula cortes y ceros.
3. Ordena funciones por intervalos.
4. Escribe la integral antes de hallar primitivas.
5. Evalúa con paréntesis.
6. Comprueba signo y magnitud.

## Errores frecuentes

- Integrar superior menos inferior sin verificar el orden.
- Olvidar dividir cuando hay cruces.
- Confundir primitiva con integral definida.
- Omitir la constante en una integral indefinida.
- Perder signos al evaluar el extremo inferior.

El campus de Método Nebula incluye teoría, métodos de integración, áreas y modelos PAU resueltos paso a paso. Contacta para organizar el bloque según tu comunidad y nota objetivo.
