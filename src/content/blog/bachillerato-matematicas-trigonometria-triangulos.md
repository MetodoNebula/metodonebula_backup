---
title: "Trigonometría en Bachillerato: cómo elegir entre seno, coseno y tangente sin probar fórmulas"
date: "2026-11-27"
updated: "2026-11-27"
description: "Método para resolver triángulos en Bachillerato: razones trigonométricas, leyes de senos y cosenos, ambigüedad y ejemplos."
tag: "Bachillerato"
category: "Matemáticas ESO y Bachillerato"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "bachillerato-matematicas-funciones-representacion,como-estudiar-matematicas-sin-memorizar"
image: "/assets/latex/triangle-strategy.svg"
---

Resolver un triángulo no consiste en buscar una fórmula que contenga la letra desconocida. Consiste en reconocer qué información geométrica está disponible. El criterio más útil es mirar si existe un **par lado–ángulo opuesto** o un **ángulo comprendido entre dos lados**.

![Triángulo general con criterio para elegir la ley de los senos o la ley del coseno](/assets/latex/triangle-strategy.svg)

## Si hay ángulo recto

En un triángulo rectángulo, respecto al ángulo $\theta$:

$$
\sin\theta=\frac{\text{cateto opuesto}}{\text{hipotenusa}},\quad
\cos\theta=\frac{\text{cateto adyacente}}{\text{hipotenusa}},
$$

$$
\tan\theta=\frac{\text{cateto opuesto}}{\text{cateto adyacente}}.
$$

Elige la razón que conecta los dos lados conocidos o buscados. Pitágoras es preferible si intervienen únicamente lados.

## Ley de los senos

En cualquier triángulo:

$$
\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}.
$$

Es especialmente útil cuando conoces:

- Dos ángulos y un lado.
- Dos lados y un ángulo opuesto a uno de ellos.

La correspondencia es esencial: $a$ siempre está frente a $A$, $b$ frente a $B$ y $c$ frente a $C$.

## Ley del coseno

$$
a^2=b^2+c^2-2bc\cos A.
$$

Conviene cuando conoces:

- Dos lados y el ángulo comprendido.
- Los tres lados y buscas un ángulo.

Es una extensión de Pitágoras. Si $A=90^\circ$, entonces $\cos A=0$ y queda $a^2=b^2+c^2$.

## Ejemplo con ley del coseno

Dos lados miden 7 cm y 10 cm y el ángulo comprendido es $48^\circ$. El lado opuesto cumple:

$$
a^2=7^2+10^2-2\cdot7\cdot10\cos48^\circ.
$$

$$
a\approx7,44\ \mathrm{cm}.
$$

La desigualdad triangular proporciona una comprobación: el tercer lado debe estar entre $|10-7|=3$ y $10+7=17$.

## Ejemplo con ley de los senos

Si $A=42^\circ$, $a=8$ cm y $B=65^\circ$:

$$
\frac{b}{\sin65^\circ}=\frac{8}{\sin42^\circ}.
$$

$$
b=8\frac{\sin65^\circ}{\sin42^\circ}\approx10,84\ \mathrm{cm}.
$$

El tercer ángulo es $C=180^\circ-42^\circ-65^\circ=73^\circ$.

## El caso ambiguo del seno

Si se conocen dos lados y un ángulo no comprendido, puede haber dos triángulos, uno o ninguno. Esto ocurre porque:

$$
\sin\theta=\sin(180^\circ-\theta).
$$

Si la calculadora devuelve $B=38^\circ$, también hay que comprobar $B'=142^\circ$. La segunda opción solo es válida si la suma con el ángulo conocido es menor que $180^\circ$ y los lados respetan la geometría.

## Área de un triángulo

Con dos lados y el ángulo comprendido:

$$
\mathcal A=\frac12bc\sin A.
$$

La fórmula se deduce de base por altura: la altura relativa a $b$ es $c\sin A$. Entender esa deducción evita confundir qué ángulo debe emplearse.

## El dibujo también es una comprobación

Un croquis no necesita estar a escala exacta, pero debe conservar el orden de los ángulos y la correspondencia de lados. El ángulo mayor siempre queda frente al lado mayor. Si el cálculo produce $A>B$ pero también $a<b$, alguna pareja se ha cruzado o la calculadora está en el modo incorrecto.

Conviene mantener todos los decimales durante el desarrollo y redondear solo al final. Al resolver un triángulo, un lado redondeado se utiliza después para otro ángulo o para el área; un pequeño error temprano puede amplificarse. Cuando sea posible, reutiliza los datos originales en lugar de un resultado intermedio.

En problemas aplicados añade una frase final: altura, distancia o ángulo en el contexto. Un número trigonométrico sin indicar qué segmento representa deja incompleta la solución.

## Protocolo de decisión

1. Dibuja y etiqueta lados opuestos a sus ángulos.
2. Marca todos los datos.
3. Busca primero un ángulo recto.
4. Si hay un par opuesto conocido, considera seno.
5. Si hay dos lados y el ángulo comprendido, considera coseno.
6. Si hay tres lados, usa coseno para un ángulo.
7. Comprueba suma de ángulos, desigualdad triangular y tamaño relativo.

## Errores frecuentes

- Emparejar un lado con un ángulo no opuesto.
- Usar ley de los senos sin ningún par completo conocido.
- Olvidar la segunda solución del seno.
- Dejar la calculadora en radianes.
- Introducir un ángulo no comprendido en la ley del coseno.
- Redondear antes del resultado final.

El campus virtual de Método Nebula desarrolla trigonometría desde triángulos rectángulos hasta leyes de senos y cosenos, identidades y ecuaciones, con ejemplos y práctica gradual. Si quieres elegir el método por la estructura del problema, utiliza el botón de contacto.
