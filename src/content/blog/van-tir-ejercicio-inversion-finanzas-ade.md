---
title: "VAN y TIR: cómo resolver un ejercicio de inversión en Finanzas para ADE"
seoTitle: "VAN y TIR: ejercicio resuelto de Finanzas para ADE"
date: "2026-11-25"
updated: "2026-11-25"
description: "Ejercicio resuelto de VAN y TIR para Finanzas en ADE: flujos de caja, tasa de descuento, decisión de inversión y errores habituales."
tag: "Finanzas"
category: "Economía y ADE"
relatedService: "/clases-particulares/economia-ade/"
relatedPosts: "contabilidad-financiera-ade-asientos-libro-diario-balance,microeconomia-i-tipos-problemas-examen,como-aprobar-matematicas-i-ade-economia"
image: "/favicon.svg"
---

En un ejercicio de VAN y TIR, la calculadora no toma la decisión por ti. Primero hay que construir correctamente los flujos de caja: una inversión inicial no es un gasto operativo, la amortización no es una salida de caja y el valor residual solo aparece cuando corresponde.

> **Respuesta directa.** Acepta un proyecto aislado si su VAN es positivo a la tasa exigida. La TIR es la tasa que hace el VAN igual a cero; compárala con la rentabilidad mínima requerida, pero no la uses sin revisar los flujos.

## El VAN: traer cada flujo al presente

Para una inversión inicial $I_0$ y flujos $FC_t$:

$$
VAN=-I_0+\sum_{t=1}^{n}\frac{FC_t}{(1+k)^t}.
$$

La tasa $k$ refleja la rentabilidad mínima exigida o coste de capital del proyecto. No es un porcentaje decorativo: cambiarla modifica el valor actual de los flujos futuros.

## Ejercicio con tres años

Un proyecto exige 10.000 euros hoy y genera 4.000 euros al final de cada uno de los tres años. La tasa exigida es 8 %.

$$
VAN=-10\,000+\frac{4\,000}{1.08}+\frac{4\,000}{1.08^2}+\frac{4\,000}{1.08^3}.
$$

Los valores actualizados son aproximadamente 3.704, 3.429 y 3.175 euros. Por tanto:

$$
VAN\approx-10\,000+10\,308=308\text{ euros}.
$$

El proyecto añade valor al criterio del 8 %, aunque el margen es pequeño. Una buena respuesta escribe la decisión y el criterio, no solo el número final.

## TIR: qué calcula y qué no

La TIR es el valor $r$ que cumple:

$$
0=-I_0+\sum_{t=1}^{n}\frac{FC_t}{(1+r)^t}.
$$

En el ejemplo, la TIR será algo superior al 8 %, porque el VAN a 8 % es positivo. Puedes calcularla con la función financiera de una hoja de cálculo, una calculadora o interpolación si el examen lo pide.

La regla simple es:

- TIR mayor que $k$: proyecto aceptable.
- TIR menor que $k$: proyecto no aceptable.

## Cuando VAN y TIR pueden discrepar

En proyectos mutuamente excluyentes, con distinta escala o distinta distribución temporal de flujos, VAN y TIR pueden recomendar proyectos distintos. Si el objetivo es maximizar valor a la tasa de descuento pertinente, el VAN tiene prioridad.

También puede haber varias TIR o ninguna interpretación clara cuando los flujos cambian de signo más de una vez. No ignores esa señal: describe el problema y vuelve al VAN.

## Flujo de caja no es resultado contable

Para construir $FC_t$, distingue:

- Desembolso inicial de maquinaria, instalación o capital circulante.
- Cobros y pagos operativos.
- Impuestos.
- Recuperación de capital circulante al final, si procede.
- Valor residual y efecto fiscal, cuando el enunciado lo incluya.

La amortización afecta al impuesto, pero no es una salida de caja por sí misma. En ejercicios completos, su efecto llega a través del ahorro fiscal.

## Errores frecuentes

- Descontar la inversión inicial como si ocurriera al final del primer año.
- Sumar beneficio contable en lugar de flujo de caja.
- Aceptar un VAN negativo porque la TIR «parece alta» sin compararla con $k$.
- Usar una tasa mensual para flujos anuales.
- Olvidar el signo negativo del desembolso inicial.

Si en tu asignatura aparecen valoraciones, presupuestos de capital o decisiones financieras, trabaja primero la línea temporal de los flujos. Puedes reforzarlo con [clases particulares de Economía y ADE](/clases-particulares/economia-ade/) adaptadas al método de tu universidad.
