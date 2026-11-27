---
title: "MATLAB para sistemas lineales en Ingeniería: barra inversa, rango y condicionamiento"
seoTitle: "MATLAB para sistemas lineales: A\\b, rango y condicionamiento"
date: "2026-11-27"
updated: "2026-11-27"
description: "Guía práctica de MATLAB para sistemas lineales de Ingeniería: operador A\\b, sistemas sobredeterminados, residuo, rango, condicionamiento y errores numéricos."
tag: "MATLAB"
category: "Matemáticas universitarias"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "matrices-determinantes-sistemas-ecuaciones-guia,minimos-cuadrados-proyeccion-ortogonal-algebra-lineal,maxima-algebra-lineal-matrices-autovalores-ingenieria"
image: "/favicon.svg"
---

En MATLAB, resolver un sistema lineal no significa calcular una inversa por costumbre. El operador de barra inversa elige algoritmos adecuados a la estructura de $A$ y sirve tanto para sistemas cuadrados como para problemas de mínimos cuadrados. Pero su resultado debe interpretarse: una solución puede existir y aun así ser numéricamente poco fiable si la matriz está mal condicionada.

> **Objetivo de este artículo.** Resolver y verificar sistemas $Ax=b$ en MATLAB, distinguir sistema cuadrado, sobredeterminado y subdeterminado, y diagnosticar cuándo un número aparentemente correcto merece desconfianza.

## Construir el problema sin perder dimensiones

Una matriz se introduce por filas; los espacios o comas separan columnas y el punto y coma separa filas:

```matlab
A = [2 -1  0;
     1  3  4;
     0  2  1];

b = [1; 9; 3];
size(A)
size(b)
```

El vector b debe ser columna si quieres representar $Ax=b$. Antes de ejecutar una operación, comprueba que A tiene tantas filas como entradas tiene b. MATLAB puede emitir un error de dimensiones, pero anticiparlo evita confundir una traspuesta con un dato físico distinto.

## El operador correcto: x = A\\b

Para un sistema cuadrado no singular:

```matlab
A = [2 -1; 1 3];
b = [1; 9];

x = A\b
residuo = A*x - b
norm(residuo)
```

El operador A barra inversa b resuelve $Ax=b$. No se lee como una división numérica ordinaria. El residuo es la primera comprobación: su norma debería ser pequeña respecto a la escala de b, aunque que sea pequeña no basta para asegurar que x tenga muchos dígitos correctos.

Evita este patrón como solución habitual:

```matlab
x = inv(A)*b;
```

La inversa explícita hace más trabajo, suele ser menos estable y oculta el tipo de problema que estás resolviendo. Puede ser útil en una demostración concreta, pero no es la herramienta estándar para obtener x.

## Sistema sobredeterminado: ajuste por mínimos cuadrados

En un ajuste con más ecuaciones que incógnitas, por ejemplo datos experimentales frente a un modelo lineal:

```matlab
A = [1 0;
     1 1;
     1 2;
     1 3];

b = [1.1; 1.9; 3.2; 3.8];

x = A\b;
ajuste = A*x;
r = b - ajuste;
norm(r)
```

Aquí MATLAB devuelve un vector que minimiza $\lVert Ax-b\rVert_2$. No debes escribir que ha “resuelto exactamente” las cuatro ecuaciones salvo que el residuo sea cero. La condición geométrica verificable es que el residuo sea ortogonal al espacio columna de A:

```matlab
A'*r
```

La salida debería ser cercana a cero, con un margen coherente con la aritmética de punto flotante.

## Sistema subdeterminado: una solución básica no es todas las soluciones

Si hay menos ecuaciones que incógnitas, MATLAB puede devolver una solución básica:

```matlab
A = [1 1 1;
     1 2 3];

b = [2; 4];

x = A\b
rank(A)
```

Eso no describe automáticamente el espacio completo de soluciones. Para una entrega de Álgebra Lineal, usa reducción, rango–nulidad y una base del núcleo para parametrizar la familia. MATLAB ayuda a comprobar; no reemplaza la argumentación.

## Rango y singularidad

Las funciones rank y rcond responden preguntas distintas:

```matlab
rank(A)
rcond(A)
```

rank estima el número de direcciones independientes, con una tolerancia numérica. rcond estima el recíproco de una medida de condicionamiento para matrices cuadradas. Si rcond es muy pequeño, la matriz está cerca de ser singular y pequeñas perturbaciones en datos pueden producir grandes cambios en la solución.

Para inspeccionar una matriz mal condicionada puedes usar la matriz de Hilbert:

```matlab
H = hilb(8);
cond(H)
rcond(H)
```

No es un problema de que MATLAB “falle”. Es una propiedad del problema: los datos no contienen información suficiente para recuperar una solución estable con muchos dígitos.

## Escala y residuo relativo

Un residuo absoluto de $10^{-8}$ puede ser excelente o pésimo según las unidades. Usa un indicador relativo:

```matlab
resRel = norm(A*x - b) / norm(b)
```

Si b puede ser nulo, adapta la comprobación. Además, un residuo pequeño no implica siempre error pequeño en x: una matriz con condición alta puede amplificarlo. Este contraste entre residuo y condicionamiento es frecuente en Métodos Numéricos.

## Mínimos cuadrados: no formes ecuaciones normales por defecto

Para un problema sobredeterminado, esta expresión es matemáticamente conocida:

$$
(A^TA)x=A^Tb.
$$

Sin embargo, formar $A^TA$ puede empeorar el condicionamiento. La instrucción A barra inversa b evita que tengas que construirlo manualmente y aprovecha factorizaciones internas más adecuadas. Si el ejercicio pide derivar ecuaciones normales, muéstralas; si pide calcular de forma fiable, usa la herramienta apropiada.

## Errores prácticos que cambian el resultado

- Usar / en lugar de \\: resuelven problemas matriciales distintos.
- Escribir b como vector fila cuando el modelo necesita columna.
- Aplicar inv(A)*b a cualquier matriz.
- Llamar solución exacta a un ajuste con residuo no nulo.
- Interpretar rank como una verdad exacta sin considerar la tolerancia y la escala.
- Ignorar cond o rcond ante datos casi dependientes.
- Usar números con unidades mezcladas sin escalar el problema.

Para comprender la teoría que hay bajo los comandos, revisa [matrices, determinantes y sistemas](/blog/matrices-determinantes-sistemas-ecuaciones-guia/) y [mínimos cuadrados y proyección ortogonal](/blog/minimos-cuadrados-proyeccion-ortogonal-algebra-lineal/). Las [clases de Matemáticas universitarias](/clases-particulares/matematicas-universidad/) pueden trabajar el tipo de sistemas y tolerancias que aparecen en tu grado.

La sintaxis de A barra inversa b y los casos cuadrado, sobredeterminado y subdeterminado siguen la [documentación oficial de MathWorks](https://www.mathworks.com/help/matlab/math/systems-of-linear-equations.html).
