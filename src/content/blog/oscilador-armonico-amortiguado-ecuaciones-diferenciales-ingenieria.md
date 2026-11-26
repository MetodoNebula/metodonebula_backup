---
title: "Oscilador armónico amortiguado: ecuaciones diferenciales para Ingeniería"
seoTitle: "Oscilador amortiguado: ecuación diferencial y ejercicios"
date: "2026-11-27"
updated: "2026-11-27"
description: "Oscilador armónico amortiguado explicado con ecuaciones diferenciales: casos subamortiguado, crítico y sobreamortiguado para Física e Ingeniería."
tag: "Ecuaciones diferenciales"
category: "Matemáticas universitarias"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "ecuaciones-diferenciales-identificar-metodo-correcto,series-taylor-maclaurin-ejercicios-resueltos,clases-calculo-analisis-matematico-universidad"
image: "/favicon.svg"
---

El oscilador masa–muelle amortiguado conecta Ecuaciones Diferenciales, Física y Vibraciones. El enunciado puede hablar de una suspensión, un sensor o una máquina, pero el modelo básico es el mismo: inercia, fuerza recuperadora y rozamiento proporcional a la velocidad.

> **Respuesta directa.** El modelo libre amortiguado es $m x''+c x'+kx=0$. La relación entre $c^2$ y $4mk$ decide si el movimiento oscila, vuelve al equilibrio lo más rápido posible o vuelve sin oscilar.

## Construir el modelo físico

Para un desplazamiento $x(t)$ respecto al equilibrio:

- La fuerza elástica es $-kx$.
- La fuerza de amortiguamiento viscoso es $-cx'$.
- La segunda ley de Newton da:

$$
m x''=-cx'-kx.
$$

Reordenando:

$$
m x''+cx'+kx=0.
$$

Las unidades ayudan a detectar errores: $m x''$, $cx'$ y $kx$ deben tener unidades de fuerza.

## Ecuación característica

Buscamos soluciones de la forma $x(t)=e^{rt}$. La ecuación característica es:

$$
mr^2+cr+k=0.
$$

Su discriminante es:

$$
\Delta=c^2-4mk.
$$

No clasifiques el movimiento mirando solo si $c$ es “grande”. Debes compararlo con $2\sqrt{mk}$.

## Subamortiguado: todavía hay oscilación

Si $c^2<4mk$, las raíces son complejas:

$$
r=-\frac{c}{2m}\pm i\omega_d,
$$

donde:

$$
\omega_d=\sqrt{\frac{k}{m}-\left(\frac{c}{2m}\right)^2}.
$$

La solución tiene la forma:

$$
x(t)=e^{-ct/(2m)}
\left[A\cos(\omega_dt)+B\sin(\omega_dt)\right].
$$

La envolvente exponencial disminuye con el tiempo, mientras seno y coseno describen las oscilaciones. Es el caso típico de una vibración que se va apagando.

## Amortiguamiento crítico y sobreamortiguado

Si $c^2=4mk$, hay una raíz doble. La solución es:

$$
x(t)=(A+Bt)e^{-ct/(2m)}.
$$

El sistema regresa al equilibrio sin oscilar y, dentro de este modelo, tan rápido como es posible sin sobrepasarlo.

Si $c^2>4mk$, aparecen dos raíces reales negativas distintas. El retorno también es sin oscilación, pero suele ser más lento. Más amortiguamiento no implica siempre una vuelta más rápida.

## Ejemplo de clasificación

Para $m=1$ kg, $k=25$ N/m y $c=6$ N·s/m:

$$
c^2-4mk=36-100=-64.
$$

Como es negativo, el sistema es subamortiguado. Su frecuencia amortiguada es:

$$
\omega_d=\sqrt{25-9}=4\text{ rad/s}.
$$

Después se usan las condiciones iniciales $x(0)$ y $x'(0)$ para calcular $A$ y $B$.

## Errores frecuentes

- Usar $kx$ como fuerza positiva sin fijar un eje y signos coherentes.
- Confundir frecuencia natural $\sqrt{k/m}$ con frecuencia amortiguada.
- Decir que el amortiguamiento crítico oscila una vez.
- Olvidar que las constantes se determinan con posición y velocidad inicial.
- Aplicar este modelo a un sistema con fuerza externa sin añadir el término de forzamiento.

Para reconocer primero qué tipo de ecuación diferencial te están pidiendo, consulta [cómo identificar el método correcto](/blog/ecuaciones-diferenciales-identificar-metodo-correcto/). Las [clases de Matemáticas universitarias](/clases-particulares/matematicas-universidad/) pueden trabajar el modelo de vibraciones específico de tu asignatura.
