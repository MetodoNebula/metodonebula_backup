---
title: "Campo gravitatorio PAU: satélites, órbitas y energía con un único desarrollo matemático"
date: "2026-11-09"
updated: "2026-11-09"
description: "Resuelve satélites en Física PAU: radio orbital, velocidad, periodo, energía, escape y errores de signo con deducciones paso a paso."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-fisica-electromagnetismo-estudiar,pau-fisica-ondas-resolver-problemas"
image: "/assets/latex/satellite-orbit.svg"
---

Los problemas de satélites dejan de parecer una colección de fórmulas cuando se entiende una idea: **la gravedad proporciona la aceleración centrípeta necesaria para curvar la trayectoria**. A partir de esa igualdad se deducen la velocidad orbital y el periodo. No hace falta memorizarlos como resultados independientes.

![Satélite en órbita con velocidad tangencial, fuerza gravitatoria radial y radio orbital](/assets/latex/satellite-orbit.svg)

## Primero: el radio correcto

Si un satélite está a altura $h$ sobre la superficie terrestre, su distancia al centro es:

$$
r=R_T+h.
$$

La ley de gravitación y las expresiones de campo o potencial siempre utilizan distancia al centro. Sustituir solo $h$ es uno de los errores más costosos del tema.

## Velocidad orbital deducida

En una órbita circular, la fuerza gravitatoria actúa como fuerza centrípeta:

$$
\frac{GMm}{r^2}=\frac{mv^2}{r}.
$$

Simplificamos la masa del satélite y un factor $r$:

$$
v=\sqrt{\frac{GM}{r}}.
$$

La velocidad no depende de la masa del satélite. Además, al aumentar $r$, la velocidad orbital disminuye. Esta conclusión debe aparecer antes de introducir números.

## Periodo y tercera ley de Kepler

Para movimiento circular uniforme:

$$
v=\frac{2\pi r}{T}.
$$

Sustituyendo la velocidad orbital:

$$
T=2\pi\sqrt{\frac{r^3}{GM}}.
$$

Al elevar al cuadrado:

$$
T^2=\frac{4\pi^2}{GM}r^3.
$$

Así aparece la tercera ley de Kepler para cuerpos que orbitan la misma masa central.

## Energía de una órbita circular

La energía potencial gravitatoria, tomando cero en el infinito, es:

$$
U=-\frac{GMm}{r}.
$$

Con $v^2=GM/r$:

$$
K=\frac12mv^2=\frac{GMm}{2r}.
$$

Por tanto, la energía mecánica total es:

$$
E=K+U=-\frac{GMm}{2r}.
$$

Es negativa porque el satélite está ligado gravitatoriamente. En una órbita más alta, $E$ es menos negativa: hay que aportar energía para elevar el satélite, aunque su rapidez final sea menor.

## Ejemplo numérico

Calcula la velocidad de un satélite a 400 km de altura. Usa $R_T=6,37\times10^6$ m y $GM_T=3,986\times10^{14}\,\mathrm{m^3/s^2}$.

$$
r=6,37\times10^6+4,00\times10^5=6,77\times10^6\ \mathrm{m}.
$$

$$
v=\sqrt{\frac{3,986\times10^{14}}{6,77\times10^6}}
\approx7,67\times10^3\ \mathrm{m/s}.
$$

El orden de magnitud, unos kilómetros por segundo, es razonable para una órbita terrestre baja.

## Velocidad de escape

Para llegar al infinito con velocidad final nula, la energía total inicial debe ser cero:

$$
\frac12mv_e^2-\frac{GMm}{r}=0.
$$

Entonces:

$$
v_e=\sqrt{\frac{2GM}{r}}.
$$

Desde el mismo radio, $v_e=\sqrt2\,v_{\text{orbital}}$. Esta relación sale del balance de energía y funciona como comprobación.

## Campo, potencial, fuerza y energía

Estas cuatro magnitudes se parecen en las fórmulas, pero responden a preguntas distintas:

$$
g=\frac{GM}{r^2},\qquad V=-\frac{GM}{r},
$$

$$
F=mg,\qquad U=mV.
$$

$g$ y $V$ describen el campo creado por la masa central y no dependen del cuerpo de prueba. $F$ y $U$ sí incluyen su masa. Además, campo y fuerza son vectores dirigidos hacia el centro, mientras que potencial y energía son escalares. Distinguir estas parejas evita sumar potenciales como vectores o asignar dirección a una energía.

El gradiente espacial también es distinto: el campo decrece como $1/r^2$ y el potencial como $1/r$. Por eso no pueden intercambiarse aunque ambos se anulen al llevar el origen de referencia al infinito.

## Órbita geoestacionaria

Un satélite geoestacionario debe tener periodo igual al de rotación terrestre, orbitar en el plano ecuatorial y hacerlo en el mismo sentido que la Tierra. Igualar solo el periodo no basta para garantizar que permanezca sobre el mismo punto.

## Errores frecuentes

- Utilizar altura en vez de radio orbital.
- Confundir campo $g=GM/r^2$ con potencial $V=-GM/r$.
- Eliminar el signo negativo de la energía potencial.
- Pensar que una órbita alta requiere mayor velocidad.
- Introducir kilómetros en una fórmula con $G$ en unidades SI.
- Usar conservación de energía sin declarar los estados inicial y final.

## Estructura de una solución rigurosa

Dibujo y radio → ley física → deducción simbólica → sustitución SI → unidades → interpretación. La deducción simbólica permite ver dependencias, detectar datos irrelevantes y conservar puntos aunque falle una operación numérica.

El campus virtual de Método Nebula desarrolla campo gravitatorio, potencial, energía, satélites, órbitas y escape con teoría, demostraciones, ejercicios y problemas PAU. Si quieres dominar el desarrollo matemático que conecta todo el bloque, utiliza el botón de contacto.
