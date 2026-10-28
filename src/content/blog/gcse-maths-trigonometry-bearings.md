---
title: "GCSE Maths: trigonometry y bearings con un método de dibujo que evita ángulos imposibles"
date: "2026-11-07"
updated: "2026-11-07"
description: "Resuelve bearings y trigonometría en GCSE Maths: norte, ángulos, SOHCAHTOA, seno, coseno y comprobaciones con ejemplo."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-maths-algebra-graphs-revision,gcse-maths-revision-plan-foundation-higher"
image: "/assets/latex/bearing-triangle.svg"
---

Los problemas de **bearings** parecen difíciles porque mezclan un mapa, una convención angular y trigonometría. La mayoría de errores no ocurre al usar la calculadora: ocurre al dibujar el ángulo en el lugar equivocado.

Un bearing se mide **desde el norte, en sentido horario y se escribe con tres cifras**. Si el dibujo respeta esas tres reglas, la trigonometría posterior se vuelve mucho más segura.

![Recorrido entre tres puntos con líneas norte, bearing y triángulo de distancias](/assets/latex/bearing-triangle.svg)

## Traducir un bearing a un dibujo

El bearing $056^\circ$ desde A hacia B significa:

1. Sitúate en A.
2. Dibuja una línea vertical hacia el norte.
3. Gira $56^\circ$ en sentido horario.
4. Traza la dirección AB.

No es el ángulo que forma AB con una horizontal ni se mide desde B. Es un giro orientado cuyo vértice está en el punto de salida.

## Líneas norte paralelas

En un mapa plano, las líneas norte dibujadas en distintos puntos son paralelas. Por eso pueden usarse ángulos alternos y suplementarios para encontrar los ángulos internos del triángulo del recorrido.

Esta es la conexión geométrica que suele faltar cuando un ejercicio entrega dos bearings y pide una distancia.

## Triángulo rectángulo: SOHCAHTOA

Si aparece un ángulo recto:

$$
\sin\theta=\frac{\text{opuesto}}{\text{hipotenusa}},\qquad
\cos\theta=\frac{\text{adyacente}}{\text{hipotenusa}},
$$

$$
\tan\theta=\frac{\text{opuesto}}{\text{adyacente}}.
$$

Etiqueta los lados respecto al ángulo elegido antes de escoger razón. “Opuesto” y “adyacente” cambian cuando cambia el ángulo de referencia; “hipotenusa” no.

## Triángulos no rectángulos

Si conoces un par lado–ángulo opuesto, la regla del seno suele ser natural:

$$
\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}.
$$

Si conoces dos lados y el ángulo comprendido, o tres lados, usa la regla del coseno:

$$
a^2=b^2+c^2-2bc\cos A.
$$

La elección depende de los datos, no de la fórmula que recuerdes primero.

## Ejemplo con dos trayectos

Un barco navega 12 km con bearing $056^\circ$ desde A hasta B. Después recorre 8 km con bearing $124^\circ$ desde B hasta C. ¿Qué distancia separa A y C?

La dirección BA es la opuesta a AB, así que su bearing desde B es:

$$
056^\circ+180^\circ=236^\circ.
$$

El ángulo interno ABC es la diferencia menor entre $236^\circ$ y $124^\circ$:

$$
B=112^\circ.
$$

Con dos lados y el ángulo comprendido aplicamos coseno:

$$
AC^2=12^2+8^2-2\cdot12\cdot8\cos112^\circ.
$$

$$
AC\approx16,73\ \mathrm{km}.
$$

La comprobación geométrica es potente: con un ángulo obtuso, el lado opuesto debe ser el mayor. $16,73$ km es mayor que 12 km y 8 km, como esperábamos.

## Bearing de regreso

El reverse bearing se obtiene sumando o restando $180^\circ$ y ajustando al intervalo $000^\circ$–$360^\circ$. El regreso de $056^\circ$ es $236^\circ$; el de $310^\circ$ es $130^\circ$.

## Errores frecuentes

- Medir desde el este como en el plano cartesiano.
- Girar en sentido antihorario.
- Escribir $56^\circ$ en vez de $056^\circ$ cuando se pide bearing.
- Usar directamente la diferencia entre bearings sin comprobar el vértice.
- Aplicar SOHCAHTOA a un triángulo sin ángulo recto.
- Dejar la calculadora en radianes.
- Redondear un ángulo intermedio demasiado pronto.

## Protocolo de examen

Dibuja los nortes → marca los giros → construye el triángulo → calcula sus ángulos internos → elige razón o ley → resuelve → comprueba tamaño y unidad → expresa el bearing con tres cifras.

El campus virtual de Método Nebula desarrolla Trigonometry, Geometry y Bearings con teoría visual, ejercicios guiados y preguntas tipo examen. Si quieres convertir el dibujo en una herramienta de razonamiento y no en un boceto decorativo, utiliza el botón de contacto.
