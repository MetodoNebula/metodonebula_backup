---
title: "Movimiento armónico simple en PAU: de la proyección circular a energía, velocidad y aceleración"
seoTitle: "Movimiento armónico simple PAU: método y ejercicios"
date: "2026-10-28"
updated: "2026-10-28"
description: "Domina el MAS en Física PAU: ecuación, fase, velocidad, aceleración, energía, muelles y péndulos con un ejemplo resuelto."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-fisica-ondas-resolver-problemas,pau-corregir-simulacros-plan-estudio,pau-fisica-campo-gravitatorio-satelites"
image: "/assets/latex/shm-projection.svg"
---

El movimiento armónico simple no es una colección de senos y cosenos: es el movimiento producido por una aceleración proporcional al desplazamiento y dirigida hacia el equilibrio.

> **Respuesta directa.** Si $a=-\omega^2x$, el movimiento es armónico simple. Desde $x=A\cos(\omega t+\varphi)$ se obtienen $v=-\omega A\sin(\omega t+\varphi)$ y $a=-\omega^2x$. La fase inicial debe deducirse de la posición y el sentido de movimiento.

![Proyección de un movimiento circular y relaciones fundamentales del MAS](/assets/latex/shm-projection.svg)

## Las cuatro magnitudes que ordenan el problema

- $A$: amplitud, máximo valor de $|x|$.
- $\omega$: frecuencia angular, en rad/s.
- $T=2\pi/\omega$: período.
- $\varphi$: fase inicial.

La frecuencia es $f=1/T=\omega/(2\pi)$. Mezclar $f$ y $\omega$ introduce un factor $2\pi$ que contamina todo el ejercicio.

## Posición, velocidad y aceleración

Partiendo de:

$$
x=A\cos(\omega t+\varphi),
$$

se deriva:

$$
v=-\omega A\sin(\omega t+\varphi),
\qquad
a=-\omega^2A\cos(\omega t+\varphi)=-\omega^2x.
$$

En el centro, $|v|$ es máximo y $a=0$. En los extremos, $v=0$ y $|a|$ es máximo.

## Energía sin memorizar tres fórmulas aisladas

Para un muelle:

$$
E=\frac12kA^2,
\qquad
E_p=\frac12kx^2,
\qquad
E_c=E-E_p.
$$

Como $\omega^2=k/m$, también:

$$
v^2=\omega^2(A^2-x^2).
$$

## Ejemplo resuelto

Una masa oscila con $A=0.08$ m y $T=0.40$ s. En $t=0$ está en el extremo positivo.

$$
\omega=\frac{2\pi}{T}=5\pi\ \mathrm{rad/s}.
$$

La condición inicial permite tomar $\varphi=0$:

$$
x=0.08\cos(5\pi t).
$$

La velocidad máxima es:

$$
v_{\max}=\omega A=5\pi(0.08)=0.4\pi\approx1.26\ \mathrm{m/s}.
$$

## Muelle y péndulo

Para una masa unida a un muelle:

$$
T=2\pi\sqrt{\frac{m}{k}}.
$$

Para un péndulo simple y oscilaciones pequeñas:

$$
T=2\pi\sqrt{\frac{\ell}{g}}.
$$

La aproximación de ángulo pequeño es una hipótesis física; no debe omitirse.

## Cómo obtener la fase inicial sin adivinar

Las condiciones iniciales deben cumplir simultáneamente posición y velocidad:

$$
x_0=A\cos\varphi,
\qquad
v_0=-\omega A\sin\varphi.
$$

La primera ecuación suele proporcionar dos ángulos posibles. El signo de $v_0$ decide cuál corresponde al movimiento real. Por ejemplo, si $x_0=A/2$ y la partícula se desplaza hacia posiciones negativas, $\cos\varphi=1/2$ y $\sin\varphi>0$; por tanto, puede tomarse $\varphi=\pi/3$. Elegir $5\pi/3$ daría la posición correcta, pero una velocidad positiva, incompatible con el enunciado.

## Una comprobación energética útil

En cualquier posición, la suma debe conservarse:

$$
\frac12mv^2+\frac12kx^2=\frac12kA^2.
$$

Si el resultado da $|x|>A$ o $|v|>\omega A$, hay un error algebraico o de unidades. Esta comprobación también permite resolver preguntas sin tiempo: conocida la posición, se obtiene el módulo de la velocidad, aunque su signo requiere saber hacia dónde se mueve el oscilador.

En una gráfica $x(t)$, la pendiente representa $v$ y la concavidad determina el signo de $a$. En un máximo de $x$, la pendiente es cero y la concavidad es negativa; esa lectura conecta cálculo y física y evita memorizar puntos aislados.

## Método PAU

1. Define origen y sentido positivo.
2. Calcula $\omega$.
3. Usa posición y velocidad inicial para fijar fase.
4. Deriva la ecuación, no adivines signos.
5. Comprueba extremos, centro y unidades.

## Errores frecuentes

- Usar grados en una fase expresada en radianes.
- Suponer $\varphi=0$ sin leer las condiciones iniciales.
- Colocar velocidad máxima en un extremo.
- Olvidar el signo restaurador de $a=-\omega^2x$.
- Aplicar la fórmula del péndulo a amplitudes grandes sin justificar.

El campus virtual de Método Nebula integra MAS y ondas con teoría, ejercicios graduados y problemas PAU. El contacto sirve para diagnosticar si el bloqueo está en la fase, las derivadas o la interpretación física.
