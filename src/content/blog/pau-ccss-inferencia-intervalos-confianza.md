---
title: "Inferencia estadística en Matemáticas CCSS PAU: intervalos de confianza y tamaño muestral con sentido"
seoTitle: "Inferencia estadística PAU: intervalos y tamaño muestral"
date: "2026-10-02"
updated: "2026-10-02"
description: "Resuelve inferencia estadística en Matemáticas CCSS PAU: intervalos de confianza, error, nivel de confianza y tamaño muestral."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "pau-matematicas-probabilidad-distribuciones,p-valor-intervalo-confianza-tamano-efecto-ejemplo,como-preparar-pau-matematicas-ii"
image: "/assets/latex/confidence-interval.svg"
---

Un intervalo de confianza no afirma que “la media está dentro con probabilidad 95 %” después de calcularlo. El parámetro es fijo; el procedimiento aleatorio es el intervalo construido a partir de la muestra.

> **Respuesta directa.** Un intervalo combina estimación puntual y margen de error. Aumentar confianza ensancha el intervalo; aumentar tamaño muestral lo estrecha. La interpretación debe mencionar el parámetro poblacional y el nivel de confianza.

![Distribución muestral y margen de un intervalo de confianza](/assets/latex/confidence-interval.svg)

## Intervalo para una media

Con desviación poblacional conocida:

$$
\bar x\pm z_{\alpha/2}\frac{\sigma}{\sqrt n}.
$$

El error máximo es:

$$
E=z_{\alpha/2}\frac{\sigma}{\sqrt n}.
$$

Para 95 % de confianza, $z_{\alpha/2}\approx1.96$.

## Ejemplo resuelto

Una muestra de $n=100$ tiene media $\bar x=52$ y $\sigma=10$. El intervalo al 95 % es:

$$
52\pm1.96\frac{10}{\sqrt{100}}
=52\pm1.96.
$$

Por tanto:

$$
(50.04,\ 53.96).
$$

Interpretación: con el procedimiento utilizado, estimamos la media poblacional mediante un intervalo de confianza del 95 % entre 50.04 y 53.96.

## Tamaño muestral

Si se exige error máximo $E$:

$$
n\geq\left(\frac{z_{\alpha/2}\sigma}{E}\right)^2.
$$

El resultado se redondea siempre hacia arriba, porque una muestra menor no garantiza el error solicitado.

### Ejemplo de diseño muestral

Si $\sigma=12$, se desea confianza del 95 % y error máximo 2:

$$
n\geq\left(\frac{1.96(12)}{2}\right)^2
=138.30.
$$

Se necesitan al menos 139 observaciones. Redondear a 138 produciría un error ligeramente superior al exigido. Si se quisiera reducir el error a 1 manteniendo todo lo demás, el tamaño se multiplicaría aproximadamente por cuatro.

## Condiciones y representatividad

Las fórmulas no corrigen una muestra sesgada. La selección debe ser aleatoria o razonablemente representativa y las observaciones deben poder tratarse como independientes. Para usar la aproximación normal en una proporción, se comprueba que los recuentos esperados de éxitos y fracasos sean suficientemente grandes según el criterio del temario.

Un intervalo estrecho obtenido de una encuesta voluntaria puede ser preciso respecto a esa muestra y, sin embargo, no describir bien la población. Precisión y ausencia de sesgo son propiedades distintas.

## Comparar dos intervalos con rigor

Si dos intervalos se han construido con el mismo método, uno más estrecho indica menor error estándar. Puede deberse a una muestra mayor o a menor variabilidad. Sin conocer ambas condiciones, no se debe atribuir la diferencia solo a $n$.

Que un valor hipotético quede fuera del intervalo sugiere incompatibilidad con los datos al nivel asociado, pero no mide por sí solo la importancia práctica de la diferencia. En PAU, la conclusión debe responder a la pregunta contextual y conservar las unidades.

También conviene distinguir confianza de probabilidad individual: el intervalo estima una media o proporción poblacional, no el rango donde caerá el 95 % de las observaciones.

## Qué ensancha o estrecha

- Mayor confianza $\Rightarrow$ mayor $z$ $\Rightarrow$ intervalo más ancho.
- Mayor variabilidad $\Rightarrow$ intervalo más ancho.
- Mayor $n$ $\Rightarrow$ menor error, con dependencia $1/\sqrt n$.

Cuadruplicar la muestra divide aproximadamente el error entre dos.

## Proporciones

Para una proporción muestral $\hat p$:

$$
\hat p\pm z_{\alpha/2}
\sqrt{\frac{\hat p(1-\hat p)}{n}}.
$$

Comprueba las condiciones del modelo y expresa el resultado como proporción o porcentaje de forma consistente.

## Método PAU

1. Identifica parámetro: media o proporción.
2. Extrae $n$, estimador, dispersión y confianza.
3. Calcula el valor crítico.
4. Halla error e intervalo.
5. Interpreta en contexto.
6. Si piden $n$, despeja y redondea hacia arriba.

## Errores frecuentes

- Usar $1.96$ para cualquier nivel de confianza.
- Dividir por $n$ en lugar de $\sqrt n$.
- Redondear el tamaño muestral hacia abajo.
- Interpretar el intervalo como rango de datos individuales.
- Omitir unidades o contexto.

El campus de Método Nebula reúne probabilidad, distribuciones, muestreo e inferencia con modelos PAU resueltos. Contacta para integrar fórmulas e interpretación en un plan de examen.
