---
title: "Ecuaciones trigonométricas en Bachillerato: soluciones generales, identidades y círculo unitario"
seoTitle: "Ecuaciones trigonométricas en Bachillerato"
date: "2026-07-13"
updated: "2026-07-13"
description: "Resuelve ecuaciones trigonométricas en Bachillerato con círculo unitario, soluciones generales, identidades, intervalos y comprobación."
tag: "Matemáticas Bachillerato"
category: "Matemáticas ESO y Bachillerato"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "bachillerato-matematicas-trigonometria-triangulos,bachillerato-matematicas-funciones-representacion,gcse-maths-trigonometry-bearings"
image: "/assets/latex/unit-circle-solutions.svg"
---

Una calculadora devuelve un ángulo, pero una ecuación trigonométrica suele tener infinitas soluciones. El paso decisivo es usar la simetría y la periodicidad para reconstruir todas, y después filtrar el intervalo pedido.

> **Respuesta directa.** Aísla la razón trigonométrica, localiza los cuadrantes compatibles y escribe la familia general. Para seno y coseno el periodo es $360^\circ$ o $2\pi$; para tangente, $180^\circ$ o $\pi$. Comprueba las transformaciones que puedan introducir o eliminar soluciones.

![Dos soluciones de seno igual a un medio en el círculo unitario](/assets/latex/unit-circle-solutions.svg)

## El círculo unitario

En el punto de ángulo $x$ sobre la circunferencia unidad:

$$
(\cos x,\sin x).
$$

Por eso $\sin x$ es la coordenada vertical y $\cos x$ la horizontal. La tangente es su cociente cuando $\cos x\neq0$:

$$
\tan x=\frac{\sin x}{\cos x}.
$$

Esta interpretación permite decidir signos por cuadrantes sin depender de una regla mnemotécnica aislada.

## Soluciones generales básicas

Si $\sin x=\sin\alpha$:

$$
x=\alpha+360^\circ k
$$

o

$$
x=180^\circ-\alpha+360^\circ k.
$$

Para $\cos x=\cos\alpha$:

$$
x=\pm\alpha+360^\circ k.
$$

Para $\tan x=\tan\alpha$:

$$
x=\alpha+180^\circ k,
\qquad k\in\mathbb Z.
$$

## Ejemplo en un intervalo

Resuelve $2\sin x-1=0$ para $0^\circ\le x<360^\circ$:

$$
\sin x=\frac12.
$$

El seno es positivo en los cuadrantes primero y segundo, con ángulo de referencia $30^\circ$. Por tanto:

$$
x=30^\circ,\ 150^\circ.
$$

Si se pidiera solución general, se añadiría $360^\circ k$ a ambas familias.

## Usar identidades

Las identidades principales son:

$$
\sin^2x+\cos^2x=1,
$$

$$
1+\tan^2x=\frac1{\cos^2x}.
$$

Permiten escribir toda la ecuación con una sola razón. Por ejemplo:

$$
2\sin^2x-3\cos x=0
$$

se transforma usando $\sin^2x=1-\cos^2x$ en una ecuación cuadrática en $\cos x$.

## Ecuaciones cuadráticas trigonométricas

Si aparece:

$$
2\cos^2x-\cos x-1=0,
$$

se trata $u=\cos x$:

$$
2u^2-u-1=0
\Rightarrow
(2u+1)(u-1)=0.
$$

Así $\cos x=-1/2$ o $\cos x=1$. Cada valor genera sus propias soluciones en el intervalo.

## Ángulos múltiples

En $\sin(2x)=\sqrt3/2$, primero se resuelve para $2x$ dentro de un intervalo duplicado. Si $0\le x<2\pi$, entonces $0\le2x<4\pi$.

Sólo después se divide cada solución entre dos. Reducir el intervalo demasiado pronto hace desaparecer respuestas válidas.

## Grados y radianes

Comprueba el modo de la calculadora antes de operar. En análisis matemático, el radian es la unidad natural porque:

$$
\frac{d}{dx}\sin x=\cos x
$$

es válida sin factores adicionales cuando $x$ está en radianes.

No mezcles $180^\circ k$ con $\pi k$ dentro de la misma familia.

## Comprobar que no falta ninguna solución

Tras obtener una lista en un intervalo, ordénala y sustitúyela en la ecuación original. El número de cortes esperado también puede estimarse comparando las gráficas de ambos miembros: si $\sin x$ se iguala a una constante entre $-1$ y $1$, normalmente aparecen dos cortes por periodo, salvo en los extremos $1$ y $-1$.

Esta lectura gráfica detecta soluciones perdidas al dividir por una razón trigonométrica. También permite rechazar de inmediato ecuaciones como $\cos x=1.3$, que no tienen solución real porque el recorrido del coseno es $[-1,1]$.

## Errores frecuentes

- Dar sólo el valor principal de la calculadora.
- Olvidar la segunda solución de seno o coseno.
- Usar periodo $2\pi$ para la tangente.
- Dividir por $\sin x$ o $\cos x$ y perder soluciones donde valen cero.
- No ajustar el intervalo al resolver $2x$ o $3x$.

## Entrenar periodicidad con método

El campus virtual de Método Nebula conecta trigonometría, funciones, identidades y derivadas mediante teoría visual, ejercicios escalonados y problemas de Bachillerato resueltos. El botón de contacto permite acceder a una ruta donde cada solución se justifica en el círculo antes de expresarse algebraicamente.
