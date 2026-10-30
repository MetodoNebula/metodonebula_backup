---
title: "Sucesiones y progresiones en Bachillerato: cómo distinguir crecimiento lineal, exponencial y sumas"
seoTitle: "Sucesiones y progresiones en Bachillerato"
date: "2026-10-16"
updated: "2026-10-16"
description: "Domina sucesiones aritméticas y geométricas en Bachillerato: término general, sumas, crecimiento, interés y ejercicios."
tag: "Matemáticas Bachillerato"
category: "Matemáticas ESO y Bachillerato"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "eso-matematicas-porcentajes-interes-compuesto,bachillerato-matematicas-funciones-representacion,como-estudiar-matematicas-sin-memorizar"
image: "/assets/latex/sequences-growth.svg"
---

Una sucesión aritmética y una geométrica pueden empezar con números parecidos, pero responden a modelos distintos. La primera añade una cantidad constante; la segunda multiplica por un factor constante.

> **Respuesta directa.** Si las diferencias son constantes, usa $a_n=a_1+(n-1)d$. Si los cocientes son constantes, usa $a_n=a_1r^{n-1}$. Para sumar términos, identifica primero el tipo y el número de términos.

![Comparación del crecimiento aritmético lineal y geométrico exponencial](/assets/latex/sequences-growth.svg)

## Progresión aritmética

$$
a_n=a_1+(n-1)d.
$$

La suma de los primeros $n$ términos es:

$$
S_n=\frac n2(a_1+a_n)
=\frac n2[2a_1+(n-1)d].
$$

### Ejemplo

En $5,8,11,\ldots$, $d=3$:

$$
a_{20}=5+19(3)=62.
$$

## Progresión geométrica

$$
a_n=a_1r^{n-1}.
$$

Si $r\neq1$:

$$
S_n=a_1\frac{r^n-1}{r-1}.
$$

Para $|r|<1$, la suma infinita converge:

$$
S_\infty=\frac{a_1}{1-r}.
$$

## Crecimiento porcentual

Un aumento del 4 % por período corresponde a:

$$
r=1.04.
$$

Tras $n$ períodos:

$$
C_n=C_0(1.04)^n.
$$

Sumar $4$ cada año no representa un 4 % salvo en un caso muy particular.

## Encontrar una posición

Si $a_n=7+4(n-1)$ y queremos $a_n=95$:

$$
95=7+4(n-1)
\Rightarrow88=4(n-1)
\Rightarrow n=23.
$$

La posición debe ser un número natural; si el despeje no lo es, el valor no pertenece a la sucesión.

## Modelos recurrentes

Una sucesión también puede definirse por recurrencia:

$$
a_{n+1}=a_n+d
$$

o:

$$
a_{n+1}=ra_n.
$$

La recurrencia explica cómo avanzar; el término general permite ir directamente a cualquier posición.

## Deducir parámetros a partir de dos términos

En una progresión aritmética, si $a_4=17$ y $a_{10}=41$:

$$
a_1+3d=17,
\qquad
a_1+9d=41.
$$

Al restar, $6d=24$, luego $d=4$ y $a_1=5$. Restar ecuaciones elimina el término inicial y evita probar valores.

En una geométrica con términos positivos, si $a_3=12$ y $a_6=96$:

$$
\frac{a_6}{a_3}=r^3=8\Rightarrow r=2,
\qquad
a_1=\frac{12}{2^2}=3.
$$

El cociente entre términos separa el efecto acumulado de la razón.

## Sumas en problemas reales

Si una persona ahorra 50 € el primer mes y aumenta la aportación mensual en 10 €, las aportaciones forman una progresión aritmética. En 12 meses:

$$
a_{12}=50+11(10)=160,
$$

$$
S_{12}=\frac{12}{2}(50+160)=1260\ \text{€}.
$$

El término $a_{12}$ es solo la aportación del último mes; $S_{12}$ es el total acumulado. Confundirlos es uno de los fallos más frecuentes en enunciados contextualizados.

En un capital con interés compuesto, en cambio, cada valor se obtiene multiplicando el anterior. Si además se realizan aportaciones periódicas, aparece una suma geométrica: cada depósito permanece invertido durante un número distinto de períodos. Dibujar una línea temporal ayuda a asignar el exponente correcto.

## Interpretación gráfica y límites

Una aritmética se representa mediante puntos alineados, aunque la variable $n$ solo toma valores naturales. Una geométrica con $r>1$ crece de forma exponencial; con $0<r<1$, decrece hacia cero. Si $r<0$, los signos alternan, por lo que la gráfica no es una curva exponencial positiva sencilla.

La suma infinita solo existe para $|r|<1$ porque los términos deben acercarse a cero. Esa condición es matemática, no un detalle opcional de la fórmula.

## Errores frecuentes

- Usar $n$ en vez de $n-1$.
- Confundir diferencia con razón.
- Aplicar la suma infinita cuando $|r|\geq1$.
- Interpretar porcentaje como incremento fijo.
- No comprobar si la posición obtenida es entera.

## Estrategia de examen

Construye una tabla con $n$, $a_n$, diferencia y cociente. El patrón correcto suele hacerse visible antes de elegir fórmula.

El campus de Método Nebula desarrolla sucesiones, funciones e interés compuesto con teoría y ejercicios graduados. Contacta para conectar fórmulas, gráficas y problemas contextualizados.
