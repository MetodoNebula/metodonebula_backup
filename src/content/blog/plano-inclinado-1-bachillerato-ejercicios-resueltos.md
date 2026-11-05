---
title: "Plano inclinado con y sin rozamiento: ejercicios resueltos de 1º Bachillerato"
seoTitle: "Plano inclinado: ejercicios con y sin rozamiento"
date: 2026-11-05
updated: 2026-11-05
description: "Resuelve problemas de plano inclinado con y sin rozamiento: diagrama de fuerzas, descomposición del peso, normal y aceleración paso a paso."
tag: "Bachillerato"
category: "Física y Química"
relatedService: "/clases-particulares/fisica-ingenieria/"
relatedPosts: "eso-fisica-quimica-leyes-newton-dinamica,diagramas-cuerpo-libre-metodo-errores-frecuentes,mrua-eso-movimiento-rectilineo-uniformemente-acelerado-ejercicios"
image: "/assets/latex/forces-free-body.svg"
---

En un plano inclinado el peso sigue apuntando verticalmente hacia abajo. El truco no consiste en girar el peso: consiste en elegir ejes paralelos y perpendiculares al plano para descomponerlo. Una vez hecho el diagrama, el problema se convierte en dos ecuaciones sencillas.

> **Respuesta directa.** Sobre un plano de ángulo \(\theta\), el peso se descompone en \(mg\sin\theta\) paralelo al plano y \(mg\cos\theta\) perpendicular al plano. Sin rozamiento, \(a=g\sin\theta\). Con rozamiento, añade una fuerza opuesta al movimiento de módulo \(f=\mu N\).

## El diagrama que debes hacer siempre

Sobre un bloque actúan, como mínimo:

- el peso \(\vec P=m\vec g\), vertical;
- la normal \(\vec N\), perpendicular al plano;
- el rozamiento \(\vec f\), si la superficie no es lisa, paralelo al plano y opuesto al deslizamiento o a su tendencia.

Si elegimos el eje \(x\) paralelo al plano y el eje \(y\) perpendicular:

$$
P_x=mg\sin\theta,\qquad P_y=mg\cos\theta.
$$

Como el bloque no se despega del plano, normalmente \(a_y=0\). Por tanto:

$$
N=mg\cos\theta.
$$

La normal no suele valer \(mg\): solo coincide con el peso en una superficie horizontal sin otras fuerzas verticales.

## Caso 1 — plano sin rozamiento

Un bloque de \(4\text{ kg}\) baja por un plano de \(30^\circ\). Calcula su aceleración usando \(g=9{,}8\text{ m/s}^2\).

En la dirección del plano, la única fuerza es la componente del peso:

$$
mg\sin30^\circ=ma.
$$

La masa se simplifica:

$$
a=g\sin30^\circ=9{,}8\cdot0{,}5=4{,}9\text{ m/s}^2.
$$

La masa influye en el peso, pero también en la inercia; por eso desaparece en este caso ideal.

## Caso 2 — plano con rozamiento

Un bloque de \(5\text{ kg}\) baja por un plano de \(37^\circ\) con coeficiente de rozamiento \(\mu=0{,}20\). Usa \(g=9{,}8\text{ m/s}^2\).

Primero calculamos la normal:

$$
N=mg\cos37^\circ.
$$

El rozamiento vale \(f=\mu N\) y apunta cuesta arriba porque el bloque baja. En el eje paralelo:

$$
mg\sin37^\circ-\mu mg\cos37^\circ=ma.
$$

Por tanto:

$$
a=g(\sin37^\circ-0{,}20\cos37^\circ)\approx4{,}3\text{ m/s}^2.
$$

El rozamiento no se suma siempre con el mismo signo: se coloca en sentido opuesto al movimiento real o a la tendencia de movimiento.

## Caso 3 — fuerza que empuja cuesta arriba

Un bloque de \(2\text{ kg}\) está sobre un plano sin rozamiento de \(30^\circ\). Se aplica una fuerza de \(15\text{ N}\) hacia arriba del plano. Tomamos positivo hacia arriba.

$$
\sum F_x=15-mg\sin30^\circ.
$$

Con \(g=9{,}8\text{ m/s}^2\):

$$
\sum F_x=15-2\cdot9{,}8\cdot0{,}5=5{,}2\text{ N}.
$$

Entonces:

$$
a=\frac{5{,}2}{2}=2{,}6\text{ m/s}^2.
$$

El resultado positivo confirma que el bloque acelera cuesta arriba con el sentido elegido.

## ¿Se mueve o se queda en reposo?

Con rozamiento estático, no des por hecho que el bloque desliza. Primero compara la componente que tira cuesta abajo con el máximo rozamiento estático:

$$
mg\sin\theta\quad\text{y}\quad f_{s,\max}=\mu_s mg\cos\theta.
$$

Si la primera no supera al máximo rozamiento estático, el bloque puede permanecer quieto. En ese caso el rozamiento adopta justo el valor necesario, que puede ser menor que \(\mu_sN\).

## Errores frecuentes

- Dibujar el peso perpendicular al plano en vez de vertical.
- Usar \(mg\sin\theta\) como normal y \(mg\cos\theta\) como fuerza paralela: están intercambiadas.
- Aplicar \(f=\mu N\) sin decidir antes el sentido del rozamiento.
- Ignorar la fuerza aplicada al calcular la normal cuando esa fuerza tiene componente perpendicular.
- Olvidar indicar el signo y el sentido de la aceleración.

## Ejercicios propuestos

1. Un bloque baja sin rozamiento por un plano de \(20^\circ\). Calcula \(a\).
2. Un bloque de \(3\text{ kg}\) baja por un plano de \(30^\circ\), con \(\mu=0{,}10\). Calcula la normal y la aceleración.
3. Un bloque está en reposo sobre un plano de \(25^\circ\). ¿Qué sentido tendría el rozamiento si empezara a deslizar hacia abajo?
4. Sobre un plano sin rozamiento de \(45^\circ\), una fuerza de \(20\text{ N}\) tira cuesta arriba de un bloque de \(2\text{ kg}\). Calcula la aceleración.

## Soluciones

1. \(a=9{,}8\sin20^\circ\approx3{,}35\text{ m/s}^2\).
2. \(N=3\cdot9{,}8\cos30^\circ\approx25{,}5\text{ N}\) y \(a=9{,}8(\sin30^\circ-0{,}10\cos30^\circ)\approx4{,}05\text{ m/s}^2\).
3. Cuesta arriba del plano.
4. \(a=(20-2\cdot9{,}8\sin45^\circ)/2\approx3{,}07\text{ m/s}^2\), cuesta arriba.

Antes de resolver problemas más largos, practica los [diagramas de cuerpo libre](/blog/diagramas-cuerpo-libre-metodo-errores-frecuentes/) y las [leyes de Newton en ESO](/blog/eso-fisica-quimica-leyes-newton-dinamica/). Para apoyo individualizado, consulta las [clases particulares de Física](/clases-particulares/fisica-ingenieria/).
