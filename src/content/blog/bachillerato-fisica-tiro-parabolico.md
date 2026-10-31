---
title: "Tiro parabólico en Bachillerato: cómo separar movimientos y acertar con tiempo, altura y alcance"
seoTitle: "Tiro parabólico en Bachillerato: método completo"
date: "2026-08-27"
updated: "2026-08-27"
description: "Resuelve tiro parabólico en Bachillerato: componentes de velocidad, ecuaciones, tiempo de vuelo, altura máxima, alcance y trayectoria."
tag: "Física Bachillerato"
category: "Física y Química"
relatedService: "/clases-particulares/fisica-ingenieria/"
relatedPosts: "mrua-eso-movimiento-rectilineo-uniformemente-acelerado-ejercicios,mru-eso-movimiento-rectilineo-uniforme-ejercicios,eso-fisica-quimica-leyes-newton-dinamica"
image: "/assets/latex/projectile-components.svg"
---

El tiro parabólico parece un movimiento complicado porque ocurre en dos dimensiones. La clave es que no se resuelve con una única ecuación vectorial improvisada: se separa en un MRU horizontal y un MRUA vertical que comparten el mismo tiempo.

> **Respuesta directa.** Descompón $\vec v_0$ en $v_{0x}=v_0\cos\theta$ y $v_{0y}=v_0\sin\theta$. Horizontalmente $a_x=0$; verticalmente $a_y=-g$. Calcula el tiempo con la ecuación vertical y úsalo después en la horizontal.

![Trayectoria parabólica y componentes horizontal y vertical de la velocidad inicial](/assets/latex/projectile-components.svg)

## Sistema de referencia

Elige origen en el lanzamiento, eje $x$ horizontal y eje $y$ hacia arriba. Sin resistencia del aire:

$$
x=v_0\cos\theta\,t,
$$

$$
y=v_0\sin\theta\,t-\frac12gt^2.
$$

Las velocidades son:

$$
v_x=v_0\cos\theta,
\qquad
v_y=v_0\sin\theta-gt.
$$

$v_x$ permanece constante; $v_y$ disminuye linealmente.

## Altura máxima

En el punto más alto, la componente vertical es cero, pero la velocidad total no: queda $v_x$.

$$
0=v_0\sin\theta-gt_h
\Rightarrow
t_h=\frac{v_0\sin\theta}{g}.
$$

Sustituyendo en $y(t)$:

$$
h_{\max}=\frac{v_0^2\sin^2\theta}{2g}.
$$

Confundir $v_y=0$ con $v=0$ elimina erróneamente el movimiento horizontal.

## Tiempo y alcance al mismo nivel

Si aterriza a la misma altura, se impone $y=0$. Además de $t=0$ aparece:

$$
t_v=\frac{2v_0\sin\theta}{g}.
$$

El alcance es:

$$
R=v_0\cos\theta\,t_v
=\frac{v_0^2\sin2\theta}{g}.
$$

Para una rapidez fija y mismo nivel, el alcance máximo ideal ocurre a $45^\circ$. Esta conclusión cambia si las alturas inicial y final son distintas o existe aire.

## Ejemplo resuelto

Se lanza una pelota a 20 m/s con $30^\circ$:

$$
v_{0x}=20\cos30^\circ=17.3\ \mathrm{m/s},
$$

$$
v_{0y}=20\sin30^\circ=10.0\ \mathrm{m/s}.
$$

Con $g=9.8\ \mathrm{m/s^2}$:

$$
t_v=\frac{2(10)}{9.8}=2.04\ \mathrm s,
$$

$$
R=17.3(2.04)=35.3\ \mathrm m,
$$

$$
h_{\max}=\frac{10^2}{2(9.8)}=5.10\ \mathrm m.
$$

## Lanzamiento desde altura

Si el objeto parte desde $y_0$, la ecuación vertical es:

$$
y=y_0+v_{0y}t-\frac12gt^2.
$$

El tiempo de impacto se obtiene resolviendo la ecuación de segundo grado y eligiendo la raíz positiva físicamente válida. Ya no se puede usar directamente $t_v=2v_{0y}/g$.

## Ecuación de la trayectoria

Eliminando $t=x/(v_0\cos\theta)$:

$$
y=x\tan\theta-
\frac{gx^2}{2v_0^2\cos^2\theta}.
$$

Es una parábola porque aparece un término cuadrático negativo. Esta ecuación conecta la cinemática con el estudio matemático de funciones.

## Errores frecuentes

- Usar $g$ en el eje horizontal.
- Aplicar seno y coseno al revés sin mirar el ángulo.
- Suponer velocidad total cero en la altura máxima.
- Usar fórmulas de mismo nivel desde una altura.
- Mezclar kilómetros por hora y metros por segundo.

## Entrenar la separación de movimientos

El campus virtual de Método Nebula enlaza cinemática, vectores, dinámica y energía mediante teoría, ejercicios graduados y problemas de Bachillerato resueltos. El botón de contacto permite acceder a una ruta donde cada diagrama se traduce en ecuaciones antes de calcular.
