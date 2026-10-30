---
title: "Límites y asíntotas en Matemáticas II PAU: cómo decidir el método antes de calcular"
seoTitle: "Límites y asíntotas PAU: método paso a paso"
date: "2026-09-18"
updated: "2026-09-18"
description: "Resuelve límites y asíntotas en Matemáticas II PAU: indeterminaciones, equivalencias, racionalización, laterales y representación."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "como-resolver-limites-indeterminaciones-ejercicios,continuidad-derivabilidad-diferencias-problemas,como-preparar-pau-matematicas-ii"
image: "/assets/latex/limit-asymptote.svg"
---

Una asíntota no se encuentra dibujando una línea que “parece cercana”. Se demuestra con límites. El orden eficaz es siempre el mismo: identificar el punto, sustituir, clasificar la indeterminación y elegir una transformación que conserve el límite.

> **Respuesta directa.** Los límites laterales detectan asíntotas verticales; el límite en infinito determina asíntota horizontal; si la función menos una recta tiende a cero, existe asíntota oblicua. Antes de usar L’Hôpital, factoriza, racionaliza o compara grados cuando sea más directo.

![Función racional con asíntotas vertical y horizontal](/assets/latex/limit-asymptote.svg)

## Sustituir primero

La sustitución puede dar:

- un número real: el límite ya está resuelto;
- infinito con signo: estudia comportamiento lateral;
- una forma indeterminada como $0/0$, $\infty/\infty$, $0\cdot\infty$ o $\infty-\infty$.

Una indeterminación no es el resultado. Solo indica que la expresión debe transformarse.

## Factorización en un límite finito

$$
\lim_{x\to2}\frac{x^2-4}{x-2}
=\lim_{x\to2}\frac{(x-2)(x+2)}{x-2}=4.
$$

La simplificación es válida para $x\neq2$, precisamente los valores que intervienen al aproximarse. No demuestra que la función original esté definida en 2; demuestra que el límite existe.

## Racionalización

Para:

$$
\lim_{x\to0}\frac{\sqrt{1+x}-1}{x},
$$

multiplica por el conjugado:

$$
\frac{\sqrt{1+x}-1}{x}
\frac{\sqrt{1+x}+1}{\sqrt{1+x}+1}
=\frac1{\sqrt{1+x}+1}\to\frac12.
$$

El conjugado elimina una diferencia de radicales, no es una receta para cualquier raíz.

## Asíntotas verticales

$x=a$ es asíntota vertical si al menos uno de los límites laterales es infinito:

$$
\lim_{x\to a^-}f(x)=\pm\infty
\quad\text{o}\quad
\lim_{x\to a^+}f(x)=\pm\infty.
$$

En $f(x)=(2x+1)/(x-2)$, el denominador cambia de signo alrededor de 2 mientras el numerador es positivo. Por tanto, un lateral tiende a $-\infty$ y el otro a $+\infty$. Una tabla de signos pequeña evita adivinar.

## Horizontales y oblicuas

Si:

$$
\lim_{x\to\pm\infty}f(x)=L,
$$

entonces $y=L$ es asíntota horizontal en esa dirección.

Para una oblicua $y=mx+n$:

$$
m=\lim_{x\to\infty}\frac{f(x)}x,
\qquad
n=\lim_{x\to\infty}[f(x)-mx],
$$

con $m$ finito y no nulo. En funciones racionales, dividir polinomios suele ser más transparente que memorizar diferencias de grados.

## Equivalencias y L’Hôpital

Cerca de cero:

$$
\sin x\sim x,\qquad e^x-1\sim x,\qquad \ln(1+x)\sim x.
$$

Las equivalencias se usan en productos y cocientes dentro de su contexto, no sustituyendo términos de una suma sin controlar el error. L’Hôpital se reserva para cocientes $0/0$ o $\infty/\infty$ cuando las hipótesis se cumplen; derivar numerador y denominador no es una operación algebraica general.

## Cómo entra en el estudio de una función

Los límites determinan dominio extendido, ramas y asíntotas. Después se combinan con signo, derivadas y puntos notables. Una representación coherente debe acercarse a cada asíntota por el lado que indican los límites y respetar crecimiento y extremos.

## Errores frecuentes

- Escribir $0/0=0$.
- Afirmar que todo cero del denominador genera asíntota vertical.
- Calcular una horizontal solo en $+\infty$.
- Confundir una discontinuidad evitable con una asíntota.
- Aplicar L’Hôpital antes de verificar la indeterminación.

## Aprovechar el clúster que ya funciona

Los límites y las derivadas son ya una de las puertas de entrada orgánica más fuertes de Método Nebula. En el campus virtual, esta explicación se conecta con continuidad, representación, derivabilidad e integrales mediante ejercicios graduados y modelos PAU. El botón de contacto permite pasar de artículos sueltos a un itinerario completo con exámenes resueltos.
