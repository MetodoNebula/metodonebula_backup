---
title: "Campo eléctrico en PAU: cómo dominar potencial, trabajo y condensadores sin perder los signos"
seoTitle: "Campo eléctrico PAU: potencial y condensadores"
date: "2026-07-22"
updated: "2026-07-22"
description: "Resuelve campo eléctrico PAU: superposición, potencial, energía, trabajo, superficies equipotenciales y condensadores paso a paso."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-fisica-electromagnetismo-estudiar,pau-fisica-campo-gravitatorio-satelites,pau-fisica-optica-lentes-espejos"
image: "/assets/latex/electric-potential-field.svg"
---

El campo eléctrico se complica cuando se mezclan magnitudes vectoriales y escalares. La fuerza y el campo necesitan dirección; el potencial y la energía se suman con signo. Separar esas dos capas evita casi todos los errores de PAU.

> **Respuesta directa.** Calcula el campo como suma vectorial y el potencial como suma algebraica. Después usa $\vec F=q\vec E$, $U=qV$ y $W_{campo}=-\Delta U$. Antes de operar, fija el signo de cada carga y el sentido del desplazamiento.

![Campo radial, superficies equipotenciales y variación con la distancia](/assets/latex/electric-potential-field.svg)

## Campo de una carga puntual

Una carga $Q$ crea a distancia $r$:

$$
\vec E=\frac{kQ}{r^2}\hat r.
$$

Si $Q>0$, apunta hacia fuera; si $Q<0$, hacia la carga. El módulo es siempre positivo, pero el vector incorpora dirección y sentido. Para varias cargas:

$$
\vec E_{total}=\sum_i\vec E_i.
$$

Conviene dibujar cada contribución antes de descomponer en ejes.

## Potencial y superposición

El potencial de una carga puntual, tomando cero en el infinito, es:

$$
V=\frac{kQ}{r}.
$$

Es escalar:

$$
V_{total}=k\sum_i\frac{Q_i}{r_i}.
$$

Dos campos pueden cancelarse en un punto mientras el potencial no es cero, o al revés. No existe contradicción: $\vec E$ mide variación espacial de $V$ y cumple $\vec E=-\nabla V$.

## Energía y trabajo

Para una carga de prueba $q$:

$$
U=qV,
\qquad
\Delta U=q(V_B-V_A).
$$

El trabajo realizado por el campo es:

$$
W_{campo}=-\Delta U=q(V_A-V_B).
$$

Si sólo actúa la fuerza eléctrica, la disminución de energía potencial se transforma en energía cinética. Una carga positiva tiende espontáneamente hacia menor potencial; una negativa, hacia mayor potencial.

## Ejemplo de movimiento

Un electrón parte del reposo y atraviesa una diferencia de potencial de módulo $250\ \mathrm V$. La ganancia de energía cinética es:

$$
\Delta K=e|\Delta V|
=(1.60\times10^{-19})(250)
=4.0\times10^{-17}\ \mathrm J.
$$

En electronvoltios son $250\ \mathrm{eV}$. Para hallar la velocidad no relativista:

$$
\frac12m_ev^2=\Delta K.
$$

## Superficies equipotenciales

Mover una carga sobre una superficie equipotencial no cambia $U$, por lo que el campo no realiza trabajo. Las líneas de campo cortan esas superficies perpendicularmente y apuntan hacia potencial decreciente.

En un campo uniforme entre placas:

$$
E=\frac{|\Delta V|}{d}.
$$

Esta relación no debe aplicarse automáticamente al campo radial de una carga puntual.

## Condensadores

La capacidad se define como:

$$
C=\frac{Q}{V}.
$$

Para placas paralelas ideales:

$$
C=\frac{\varepsilon A}{d}.
$$

La energía almacenada puede escribirse de tres formas equivalentes:

$$
U_C=\frac12CV^2=\frac{Q^2}{2C}=\frac12QV.
$$

Elegir la forma adecuada depende de qué magnitud permanece constante al cambiar geometría o dieléctrico.

## Errores que restan puntos

- Sumar módulos de campo sin respetar direcciones.
- Usar $r$ en lugar de $r^2$ para $E$.
- Confundir trabajo del campo con trabajo externo.
- Omitir el signo de la carga al calcular energía.
- Aplicar $E=\Delta V/d$ fuera de un campo uniforme.
- Confundir carga de una placa con carga neta del condensador.

## Una ruta completa de electromagnetismo

El campus virtual de Método Nebula conecta campo, potencial, energía, condensadores e inducción mediante teoría, ejercicios escalonados y exámenes PAU resueltos. El botón de contacto permite acceder a una ruta donde cada problema empieza con el diagrama de signos y termina con una comprobación física.
