---
title: "Sistemas de ecuaciones en 3º ESO: problemas resueltos paso a paso"
seoTitle: "Sistemas de ecuaciones 3º ESO: problemas resueltos"
date: 2026-11-05
updated: 2026-11-05
description: "Resuelve sistemas de ecuaciones de 3º ESO con sustitución, igualación y reducción: problemas explicados, comprobaciones y errores frecuentes."
tag: "ESO"
category: "Matemáticas ESO y Bachillerato"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "eso-matematicas-ecuaciones-sistemas-estudiar,ecuaciones-segundo-grado-3-eso-ejercicios-resueltos,eso-matematicas-porcentajes-interes-compuesto"
image: "/assets/latex/equations-balance.svg"
---

Un sistema de dos ecuaciones con dos incógnitas no se resuelve buscando dos números por intuición. Se resuelve encontrando el único par que cumple **las dos condiciones a la vez**. El método cambia, pero la comprobación final siempre es la misma: sustituir el resultado en ambas ecuaciones.

> **Respuesta directa.** Elige sustitución si una incógnita ya está despejada, igualación si puedes despejar con facilidad y reducción si los coeficientes permiten eliminar una letra. Después comprueba el par \((x,y)\) en las dos ecuaciones.

## Qué representa un sistema

Cada ecuación describe una recta. La solución es el punto donde ambas rectas se cortan. Por ejemplo:

$$
\begin{cases}
x+y=7\\
x-y=1
\end{cases}
$$

significa buscar dos números cuya suma sea \(7\) y cuya diferencia sea \(1\). La respuesta es \(x=4\), \(y=3\).

## Método 1 — sustitución

Úsalo cuando una ecuación permite despejar una letra sin crear fracciones incómodas.

### Ejemplo resuelto

$$
\begin{cases}
y=2x+1\\
3x+y=13
\end{cases}
$$

Sustituimos la expresión de \(y\) en la segunda ecuación:

$$
3x+(2x+1)=13.
$$

Entonces \(5x=12\), de donde \(x=12/5\). Sustituimos de nuevo:

$$
y=2\left(\frac{12}{5}\right)+1=\frac{29}{5}.
$$

La solución es \(\left(\frac{12}{5},\frac{29}{5}\right)\). Que aparezcan fracciones no significa que el método esté mal: el sistema decide el resultado.

## Método 2 — igualación

Si las dos ecuaciones se pueden escribir como \(y=\dots\), igualamos sus partes derechas.

### Ejemplo resuelto

$$
\begin{cases}
y=3x-2\\
y=10-x
\end{cases}
$$

Como ambas expresiones valen \(y\):

$$
3x-2=10-x.
$$

Sumamos \(x\) y \(2\) a los dos miembros: \(4x=12\), luego \(x=3\). Al sustituir, \(y=7\). La solución es \((3,7)\).

## Método 3 — reducción

En reducción sumamos o restamos ecuaciones para que desaparezca una incógnita. Es especialmente útil si los coeficientes ya son opuestos o se pueden volver opuestos multiplicando una ecuación.

### Ejemplo resuelto

$$
\begin{cases}
2x+3y=17\\
2x-y=5
\end{cases}
$$

Restamos la segunda ecuación de la primera:

$$
(2x+3y)-(2x-y)=17-5.
$$

Así obtenemos \(4y=12\), por tanto \(y=3\). En \(2x-y=5\), queda \(2x-3=5\); de modo que \(x=4\). La solución es \((4,3)\).

## Cómo traducir un problema a un sistema

La parte decisiva suele estar antes de operar:

1. Define qué representa cada incógnita y escribe sus unidades.
2. Localiza las dos relaciones independientes del enunciado.
3. Convierte cada relación en una ecuación.
4. Resuelve y comprueba que la respuesta tiene sentido en el contexto.

### Problema resuelto: entradas de cine

Dos entradas de adulto y tres de estudiante cuestan \(31\) euros. Una entrada de adulto y dos de estudiante cuestan \(19\) euros. Si \(a\) es el precio adulto y \(e\) el de estudiante:

$$
\begin{cases}
2a+3e=31\\
a+2e=19
\end{cases}
$$

Multiplicamos la segunda ecuación por \(-2\) y sumamos:

$$
(2a+3e)+(-2a-4e)=31-38.
$$

Entonces \(-e=-7\), así que \(e=7\). Al sustituir en \(a+2e=19\), obtenemos \(a=5\). Una comprobación rápida: \(2\cdot5+3\cdot7=31\).

## Casos sin una solución única

- **Una solución:** las rectas se cortan en un punto.
- **Ninguna solución:** aparecen ecuaciones incompatibles, como \(0=4\); las rectas son paralelas.
- **Infinitas soluciones:** aparece una identidad, como \(0=0\); ambas ecuaciones representan la misma recta.

No debes dividir entre una expresión que puede valer cero sin haberlo comprobado: podrías perder alguno de estos casos.

## Errores frecuentes

- Cambiar un signo al pasar un término en vez de operar igual en ambos miembros.
- Resolver una ecuación y olvidar sustituirla en la otra.
- Confundir el orden: una solución se escribe \((x,y)\), no \((y,x)\).
- Crear dos ecuaciones que expresan la misma información del problema.
- No interpretar el resultado: un precio negativo o un número no entero de personas suele indicar un planteamiento equivocado.

## Ejercicios propuestos

1. Resuelve por sustitución: \(\begin{cases}y=x+4\\2x+y=13\end{cases}\).
2. Resuelve por igualación: \(\begin{cases}y=5x-1\\y=11-x\end{cases}\).
3. Resuelve por reducción: \(\begin{cases}3x+2y=16\\3x-2y=8\end{cases}\).
4. En una granja hay \(18\) animales entre gallinas y conejos, y \(50\) patas. ¿Cuántos hay de cada?

## Soluciones

1. \((x,y)=(3,7)\).
2. \((x,y)=(2,9)\).
3. \((x,y)=(4,2)\).
4. Si \(g+c=18\) y \(2g+4c=50\), entonces \(c=7\) y \(g=11\).

Para repasar el sentido de los pasos antes de usar métodos más rápidos, consulta la guía de [ecuaciones y sistemas en ESO](/blog/eso-matematicas-ecuaciones-sistemas-estudiar/). Si necesitas una práctica adaptada a tu curso, consulta las [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/).
