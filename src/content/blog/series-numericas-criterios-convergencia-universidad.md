---
title: Series numéricas y criterios de convergencia: guía para Cálculo y Análisis Matemático
date: 2026-11-24
updated: 2026-11-24
description: Aprende a decidir la convergencia de series numéricas en Cálculo universitario: comparación, cociente, raíz, alternadas y errores frecuentes de examen.
tag: Series numéricas
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: series-taylor-maclaurin-ejercicios-resueltos,integrales-impropias-convergencia-ejercicios,como-aprobar-calculo-i-ingenieria-seis-semanas
image: /favicon.svg
---

Las **series numéricas** suelen bloquear en Análisis Matemático porque hay muchos criterios y todos parecen aplicables. La forma más eficaz de estudiar no es memorizar una tabla: es identificar la estructura de $a_n$ y elegir una comparación que responda a esa estructura.

Una serie tiene la forma

$$
\sum_{n=1}^{\infty}a_n.
$$

La pregunta no es si los términos “se hacen pequeños”, sino si las sumas parciales se acercan a un límite finito. Que $a_n\to0$ es necesario para converger, pero no suficiente: la serie armónica $\sum 1/n$ es el contraejemplo básico.

## Un árbol de decisión para elegir criterio

Antes de escribir fórmulas, revisa estas pistas:

1. **Potencias de $n$:** compara con una p-serie, $\sum 1/n^p$.
2. **Factoriales o exponenciales:** prueba el criterio del cociente o de la raíz.
3. **Términos positivos parecidos a una expresión conocida:** usa comparación directa o por el límite.
4. **Signos alternos:** comprueba Leibniz antes de buscar algo más complicado.
5. **Logaritmos, radicales o fracciones poco claras:** intenta estimar el comportamiento dominante para $n$ grande.

La elección tiene que escribirse en la solución. “Aplicamos el criterio del cociente” no basta: indica qué límite calculas y qué conclusión permite.

## Ejemplo: criterio del cociente

Estudia la serie

$$
\sum_{n=1}^{\infty}\frac{3^n}{n!}.
$$

Si $a_n=3^n/n!$, entonces

$$
\left|\frac{a_{n+1}}{a_n}\right|
=\frac{3^{n+1}}{(n+1)!}\frac{n!}{3^n}
=\frac{3}{n+1}\longrightarrow0.
$$

Como el límite es menor que uno, la serie converge absolutamente. El dato decisivo no es que aparezca un factorial: es mostrar que ese factorial crece más rápido que la potencia.

## Ejemplo: una serie alternada no siempre converge absolutamente

Para

$$
\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n},
$$

los términos $1/n$ disminuyen y tienden a cero, así que la serie converge por Leibniz. Sin embargo, al quitar los signos queda la serie armónica, que diverge. Por eso se dice que la convergencia es condicional, no absoluta.

En un examen, diferenciar esos dos casos suele ser más importante que escribir una definición larga.

## Errores frecuentes al estudiar convergencia

- Concluir que una serie converge solo porque $a_n\to0$.
- Aplicar un criterio sin comprobar sus hipótesis.
- Olvidar que el cociente o la raíz no decide nada cuando el límite vale uno.
- Confundir la convergencia de una serie con la de una sucesión.
- No justificar la comparación elegida.

Un buen entrenamiento consiste en clasificar diez series antes de resolverlas por completo. Escribe primero “p-serie”, “factorial”, “alternada” o “comparación”, y después calcula. Así conviertes la elección de criterio en una decisión rápida y razonada.

Las series se conectan con integrales impropias, desarrollos de Taylor y modelos de aproximación. Si necesitas preparar Análisis Matemático con ejercicios de tu facultad, consulta las [clases de Cálculo universitario](/clases-particulares/calculo-universitario/) o envía tu temario y fecha de examen mediante [contacto](/contacto/).
