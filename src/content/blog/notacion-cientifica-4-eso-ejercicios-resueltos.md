---
title: "Notación científica en 4 ESO: cómo operar y ejercicios resueltos"
seoTitle: "Notación científica 4 ESO: ejercicios resueltos paso a paso"
date: "2026-11-05"
updated: "2026-11-10"
description: "Aprende notación científica en 4 ESO con potencias de diez, operaciones, orden de magnitud, cifras significativas y ejercicios desarrollados."
tag: "Matemáticas ESO"
category: "ESO"
relatedService: "/campus/"
relatedPosts: "eso-matematicas-potencias-radicales,factores-conversion-3-eso-ejercicios-resueltos,proporcionalidad-directa-inversa-2-eso-ejercicios"
image: "/favicon.svg"
---

La notación científica no es una forma elegante de escribir números grandes: es una manera de conservar la escala de una cantidad y de operar sin perder ceros. Por eso aparece en Física, Química, Tecnología y en problemas de examen donde el cálculo importa tanto como interpretar si el resultado es razonable.

> **Respuesta directa.** Un número está en notación científica si se escribe como $a\times10^n$, con $1\leq|a|<10$ y $n$ entero. Desplaza la coma hasta dejar una sola cifra distinta de cero a su izquierda: los lugares desplazados dan el exponente, positivo si el número original era grande y negativo si era pequeño.

## Pasar un número a notación científica

Para $4\,560\,000$, la coma debe quedar después del 4:

$$
4\,560\,000=4.56\times10^6.
$$

Se ha desplazado seis lugares hacia la izquierda, así que el exponente es 6. En cambio,

$$
0.000072=7.2\times10^{-5}.
$$

Ahora la coma se ha desplazado cinco lugares hacia la derecha para llegar a 7.2; el exponente debe ser negativo. El signo del exponente no depende de hacia dónde movemos el lápiz, sino del tamaño del número original: los números entre 0 y 1 llevan exponente negativo.

## Volver a la forma decimal

En $3.18\times10^4$, el $10^4$ desplaza la coma cuatro lugares a la derecha:

$$
3.18\times10^4=31\,800.
$$

En $6.5\times10^{-3}$, la coma se desplaza tres lugares a la izquierda:

$$
6.5\times10^{-3}=0.0065.
$$

Completar los huecos con ceros evita una lectura equivocada de la escala. Es especialmente importante al convertir unidades en Ciencias.

## Multiplicar y dividir: se operan los exponentes

Al multiplicar potencias de la misma base, los exponentes se suman:

$$
(2.4\times10^5)(3\times10^{-2})=7.2\times10^{5-2}=7.2\times10^3.
$$

Primero se multiplican los coeficientes, $2.4\times3=7.2$, y después se suman los exponentes. En una división, se restan:

$$
\frac{8.4\times10^7}{2.1\times10^3}=4\times10^{7-3}=4\times10^4.
$$

No se suman o restan exponentes cuando se suman números. Esa es una regla exclusiva de multiplicar o dividir potencias.

## Sumar y restar exige igualar exponentes

No se puede sumar directamente $3.2\times10^6+4.5\times10^5$ porque representan unidades de escala distinta. Reescribimos el segundo término con exponente 6:

$$
4.5\times10^5=0.45\times10^6.
$$

Ahora sí:

$$
3.2\times10^6+0.45\times10^6=3.65\times10^6.
$$

La idea es parecida a sumar metros con metros antes de sumar: la potencia de diez es parte de la unidad de escala.

## Ejercicio resuelto: una distancia astronómica

Una sonda recorre $2.7\times10^8\ \mathrm{km}$ en un tiempo de $9.0\times10^3\ \mathrm{h}$. Calcula su velocidad media en km/h.

$$
v=\frac{2.7\times10^8}{9.0\times10^3}
=\frac{2.7}{9.0}\times10^{8-3}
=0.3\times10^5.
$$

La última expresión no está normalizada, pues el coeficiente debe estar entre 1 y 10. Por tanto,

$$
v=3.0\times10^4\ \mathrm{km\,h^{-1}}.
$$

El ajuste final de $0.3\times10^5$ a $3.0\times10^4$ es el paso que suele olvidarse. Ambos valores representan la misma cantidad, pero solo el segundo está en notación científica correcta.

## Orden de magnitud y sentido físico

El orden de magnitud aproxima una cantidad a la potencia de diez más representativa. $6.8\times10^7$ está más cerca de $10^8$ que de $10^7$, así que su orden de magnitud es $10^8$. Esta estimación ayuda a detectar fallos: si una calculadora devuelve $10^{-12}$ metros para el ancho de una habitación, el error no es de redondeo, sino de escala.

## Errores que conviene detectar

- Escribir $24\times10^3$ como forma final: equivale a $2.4\times10^4$, pero no está normalizado.
- Olvidar el signo negativo en cantidades menores que uno.
- Sumar exponentes al sumar números.
- Redondear el coeficiente antes de acabar la operación.
- Dar un resultado sin unidad en un problema físico o químico.

En el [Campus de Método Nebula](/campus/) este contenido se conecta con potencias, conversiones de unidades y problemas de Física y Química mediante explicaciones, ejemplos resueltos y práctica gradual. Así la notación científica deja de ser una regla aislada y se convierte en una herramienta para entender cantidades reales.
