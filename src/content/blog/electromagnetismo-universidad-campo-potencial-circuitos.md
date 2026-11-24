---
title: Electromagnetismo universitario: campo, potencial, circuitos e inducción
date: 2026-11-24
updated: 2026-11-24
description: Guía para preparar Electromagnetismo universitario en Física e Ingeniería: campo eléctrico, potencial, Gauss, circuitos, campo magnético e inducción.
tag: Electromagnetismo
category: Física y Química
relatedService: /clases-particulares/fisica-ingenieria/
relatedPosts: pau-fisica-electromagnetismo-estudiar,diagramas-cuerpo-libre-metodo-errores-frecuentes,como-aprobar-calculo-i-ingenieria-seis-semanas
image: /favicon.svg
---

**Electromagnetismo universitario** parece difícil cuando se estudia como una lista de fórmulas. La manera más estable de resolver problemas es distinguir siempre cuatro elementos: fuente, campo, interacción y geometría.

Antes de calcular, escribe qué genera el campo, dónde se pide evaluarlo, qué simetría existe y qué magnitud se busca. Ese mapa evita mezclar campo eléctrico con potencial, flujo con fuerza, o inducción con una corriente constante.

## Campo eléctrico y potencial: no son la misma cosa

El campo eléctrico indica fuerza por unidad de carga:

$$
\vec E=\frac{\vec F}{q}.
$$

El potencial eléctrico es energía potencial por unidad de carga. En un campo conservativo,

$$
\Delta V=-\int_A^B \vec E\cdot d\vec l.
$$

El campo es vectorial y el potencial es escalar. En problemas sencillos, el potencial puede facilitar el cálculo de energía; en otros, la dirección del campo es esencial. No elijas una herramienta por costumbre: elige la que responde a la incógnita.

## Ley de Gauss: cuándo simplifica el problema

La ley de Gauss es

$$
\oint \vec E\cdot d\vec A=\frac{Q_{int}}{\varepsilon_0}.
$$

No sirve para cualquier distribución solo porque aparezca una carga. Funciona especialmente bien cuando la simetría hace que $E$ sea constante sobre una superficie cerrada adecuada: esfera, cilindro infinito o plano ideal. Antes de usarla, nombra la simetría y la superficie gaussiana; después, separa claramente carga encerrada y carga total.

## Circuitos: plantea nodos, sentidos y signos

En circuitos de corriente continua, las leyes de Kirchhoff organizan el razonamiento:

$$
\sum I_{entrada}=\sum I_{salida},
$$

y, en una malla cerrada,

$$
\sum \Delta V=0.
$$

Puedes elegir libremente el sentido de cada corriente. Si el resultado sale negativo, no has “fallado”: significa que la corriente real va en el sentido opuesto al supuesto. El error es cambiar signos a mitad del sistema sin explicarlo.

## Campo magnético e inducción

Una carga en movimiento experimenta la fuerza de Lorentz:

$$
\vec F=q(\vec E+\vec v\times\vec B).
$$

La parte magnética es perpendicular a velocidad y campo, por lo que no cambia directamente la energía cinética de una carga puntual. En cambio, puede curvar su trayectoria.

Para inducción, la idea es el cambio de flujo magnético:

$$
\mathcal E=-\frac{d\Phi_B}{dt}.
$$

La señal menos expresa la ley de Lenz: la corriente inducida se opone al cambio de flujo que la produce. No memorices una regla de dirección sin dibujar primero el sentido de $\vec B$, la normal de la superficie y si el flujo aumenta o disminuye.

## Método de resolución para problemas de examen

1. Dibuja fuentes, punto de estudio, ejes y sentidos.
2. Escribe la ley física antes de sustituir valores.
3. Declara qué simetría, conservación o condición de contorno usas.
4. Comprueba unidades y orden de magnitud.
5. Interpreta el signo o dirección final con una frase.

En las [clases de Física para Ingeniería](/clases-particulares/fisica-ingenieria/) practicamos este planteamiento con problemas de tu temario y exámenes anteriores. Si necesitas preparar una convocatoria, envía asignatura, grado, contenidos y fecha mediante [contacto](/contacto/).
