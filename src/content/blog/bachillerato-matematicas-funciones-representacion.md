---
title: "Cómo representar cualquier función en Bachillerato: la guía que conecta todos los pasos"
date: "2026-10-09"
updated: "2026-10-28"
description: "Guía completa para estudiar y representar funciones en Bachillerato: dominio, cortes, límites, derivadas, concavidad y ejemplo."
tag: "Bachillerato"
category: "Matemáticas ESO y Bachillerato"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "estudio-completo-funcion-paso-a-paso,continuidad-derivabilidad-diferencias-problemas"
image: "/assets/latex/function-study.svg"
---

Una representación de funciones no es una colección de cálculos independientes. Es una investigación: cada dato restringe la forma que puede tener la gráfica. El dominio dice dónde existe; los límites describen comportamientos; las derivadas explican cómo cambia.

![Gráfica con máximo, mínimo y secuencia para el estudio completo de una función](/assets/latex/function-study.svg)

## El orden que evita contradicciones

1. Dominio y simetrías.
2. Cortes con los ejes y signo.
3. Límites y asíntotas.
4. Continuidad.
5. Primera derivada: crecimiento y extremos.
6. Segunda derivada: concavidad e inflexión.
7. Tabla resumen y dibujo.

El orden puede adaptarse, pero dibujar antes de justificar suele ocultar errores.

## Dominio: la primera frontera

Busca denominadores nulos, radicandos negativos en raíces pares y argumentos no positivos en logaritmos. Para una racional:

$$
f(x)=\frac{x+1}{x-2},
$$

el dominio es $\mathbb{R}\setminus\{2\}$. Ese punto también sugiere estudiar una posible asíntota vertical.

## Cortes y signo

El corte con el eje $y$ se obtiene evaluando $f(0)$ si existe. Los cortes con el eje $x$ se hallan resolviendo $f(x)=0$. En una función racional, los ceros proceden del numerador siempre que el denominador no se anule.

Una tabla de signos indica dónde la gráfica queda por encima o por debajo del eje.

## Límites y asíntotas

Una asíntota vertical en $x=a$ requiere estudiar límites laterales. Una horizontal $y=L$ aparece si $f(x)\to L$ cuando $x\to\pm\infty$. Una oblicua puede buscarse cuando la función crece aproximadamente como una recta.

No escribas una asíntota por reconocer una forma: justifícala con el límite correspondiente.

## Primera derivada: de símbolos a comportamiento

Los puntos críticos aparecen donde $f'(x)=0$ o donde la derivada no existe dentro del dominio. Construye una tabla de signos:

- $f'(x)>0$: la función crece.
- $f'(x)<0$: decrece.
- cambio de $+$ a $-$: máximo local.
- cambio de $-$ a $+$: mínimo local.

Un punto con derivada cero no es automáticamente un extremo.

## Segunda derivada y concavidad

El signo de $f''$ informa de la curvatura. Un candidato a punto de inflexión debe pertenecer a la gráfica y mostrar cambio de concavidad. Resolver $f''(x)=0$ solo produce candidatos.

## Ejemplo breve

Considera:

$$
f(x)=x^3-3x.
$$

El dominio es todo $\mathbb{R}$ y la función es impar. Sus ceros son $x=-\sqrt3,0,\sqrt3$.

$$
f'(x)=3x^2-3=3(x-1)(x+1).
$$

Crece en $(-\infty,-1)$ y $(1,\infty)$; decrece en $(-1,1)$. Hay máximo local en $x=-1$, con $f(-1)=2$, y mínimo en $x=1$, con $f(1)=-2$.

Además:

$$
f''(x)=6x,
$$

por lo que cambia la concavidad en $x=0$ y el origen es punto de inflexión.

## Comprobaciones que ahorran errores

- Los cortes calculados deben aparecer en el dibujo.
- La gráfica no puede cruzar una asíntota vertical porque ese valor no pertenece al dominio.
- El sentido de crecimiento debe coincidir con la tabla de $f'$.
- Máximos, mínimos e inflexiones deben tener coordenadas completas.
- El comportamiento en infinito debe respetar los límites.

## Errores frecuentes

- Derivar antes de estudiar el dominio.
- Resolver $f'(x)=0$ y llamar extremos a todos los resultados.
- Confundir asíntota horizontal con un límite que no existe.
- Dibujar una curva suave atravesando un punto excluido.
- No separar intervalos en puntos fuera del dominio.

## Cómo practicar

Trabaja primero polinomios, después racionales y finalmente funciones con raíces, logaritmos o exponenciales. Alterna estudios parciales con ejercicios completos. Una vez por semana, representa una función con tiempo limitado y explica oralmente cada decisión.

El campus virtual de Método Nebula recorre funciones, límites, derivadas y aplicaciones con teoría, ejemplos y ejercicios graduados. Si quieres detectar si el bloqueo es algebraico, gráfico o de cálculo, utiliza el botón de contacto y convertimos el diagnóstico en una ruta concreta.
