---
title: "Porcentajes e interés compuesto en ESO: el factor multiplicativo que evita casi todos los errores"
date: "2026-11-04"
updated: "2026-11-04"
description: "Aprende porcentajes sucesivos, descuentos e interés compuesto con factores multiplicativos, ejemplos y comprobaciones para ESO."
tag: "ESO"
category: "Matemáticas ESO y Bachillerato"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "eso-matematicas-ecuaciones-sistemas-estudiar,como-estudiar-matematicas-sin-memorizar"
image: "/assets/latex/compound-growth.svg"
---

El error más común con porcentajes no es calcular mal un 20 %. Es creer que subir un 20 % y bajar después un 20 % deja la cantidad como estaba. El segundo porcentaje actúa sobre una base distinta. La herramienta que hace visible esa diferencia es el **factor multiplicativo**.

![Crecimiento compuesto representado como multiplicaciones sucesivas por el mismo factor](/assets/latex/compound-growth.svg)

## Del porcentaje al factor

Un aumento del $r\%$ equivale a multiplicar por:

$$
1+\frac{r}{100}.
$$

Una disminución del $r\%$ equivale a multiplicar por:

$$
1-\frac{r}{100}.
$$

Por ejemplo, subir un 15 % es multiplicar por $1,15$; descontar un 15 % es multiplicar por $0,85$.

## Por qué aumentar y disminuir no se cancelan

Una chaqueta cuesta 100 €. Sube un 20 %:

$$
100\cdot1,20=120.
$$

Después baja un 20 %:

$$
120\cdot0,80=96.
$$

El efecto conjunto es:

$$
1,20\cdot0,80=0,96.
$$

El precio final es un 4 % menor que el inicial. Los porcentajes sucesivos no se suman ni se restan sin más: **sus factores se multiplican**.

## Encontrar el valor inicial

Tras aplicar un descuento del 30 %, un producto cuesta 84 €. Si $P$ es el precio inicial:

$$
0,70P=84.
$$

Por tanto:

$$
P=\frac{84}{0,70}=120\ \text{€}.
$$

No hay que “sumar el 30 % a 84”, porque 84 representa ya el 70 % del precio original.

## Interés simple e interés compuesto

En interés simple, los intereses se calculan siempre sobre el capital inicial:

$$
C_n=C_0(1+nr).
$$

En interés compuesto, cada periodo incorpora los intereses al capital y el siguiente porcentaje actúa sobre la nueva cantidad:

$$
C_n=C_0(1+r)^n.
$$

La potencia no es una fórmula arbitraria: resume $n$ multiplicaciones por el mismo factor.

## Ejemplo de interés compuesto

Se depositan 1500 € al 3 % anual durante 4 años:

$$
C_4=1500(1,03)^4\approx1688,26\ \text{€}.
$$

El interés generado es:

$$
1688,26-1500=188,26\ \text{€}.
$$

Una estimación rápida confirma que el resultado es razonable: un 3 % anual durante cuatro años debe producir algo más de un 12 %, porque los intereses también generan intereses.

## Variaciones encadenadas

Si una población aumenta un 8 %, disminuye un 5 % y después aumenta un 2 %, el factor total es:

$$
1,08\cdot0,95\cdot1,02=1,04652.
$$

La variación global es un aumento del $4,652\%$. Esta forma funciona con precios, población, depreciación, inflación y concentraciones.

## Método para no perder la base

1. Escribe la cantidad que actúa como 100 % en ese paso.
2. Convierte cada variación en factor.
3. Multiplica los factores en el orden del problema.
4. Si buscan el valor inicial, divide por el factor total.
5. Comprueba si el resultado debe ser mayor o menor.

## Errores frecuentes

- Calcular todos los porcentajes sobre el valor inicial cuando son sucesivos.
- Usar $20$ en vez de $0,20$ como tasa.
- Confundir capital final con interés generado.
- Sumar tasas de crecimiento compuesto.
- Redondear el capital tras cada año.
- Olvidar adaptar la tasa y el número de periodos: una tasa anual no puede combinarse directamente con meses.

## Práctica breve

1. Un precio de 240 € recibe un descuento del 15 %. Resultado: 204 €.
2. Tras una subida del 12 %, un salario es 1568 €. Salario inicial: 1400 €.
3. 2000 € crecen al 2,5 % anual durante 3 años. Capital: aproximadamente 2153,78 €.
4. Un valor sube 10 % y baja 10 %. Factor total: $1,10\cdot0,90=0,99$.

El campus virtual de Método Nebula conecta proporcionalidad, porcentajes y matemática financiera con ejemplos resueltos, ejercicios graduados y corrección de errores típicos. Si quieres aprender a elegir la operación y justificarla, el botón de contacto permite definir una ruta desde tu nivel real.
