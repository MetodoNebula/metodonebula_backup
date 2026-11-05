---
title: Matemáticas Aplicadas a las CCSS II · PAU 2026 · Comunidad Valenciana — examen resuelto
seoTitle: PAU Matemáticas Aplicadas a las CCSS II Comunidad Valenciana 2026 resuelta
date: 2026-06-01
updated: 2026-11-05
description: Examen resuelto de Matemáticas Aplicadas a las Ciencias Sociales II de Comunidad Valenciana 2026, con procedimientos completos.
tag: Matemáticas CCSS PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

Se prepara una mezcla con dos fertilizantes: NutriMax ($x$ litros, $5$ €/L) y BioGrow ($y$ litros, $4$ €/L). La mezcla debe cumplir tres requisitos nutricionales mínimos, que se traducen en las restricciones $2x+y\ge8$, $x+y\ge6$ y $x+2y\ge10$ (además de $x,y\ge0$).

**(a)** Escriba la función objetivo y las restricciones, y determine la región factible y la combinación de coste mínimo.

**(b)** Calcule el coste mínimo.

### Solución

**(a)** Con $x$ = litros de NutriMax e $y$ = litros de BioGrow, se minimiza el coste
$$f(x,y)=5x+4y$$
sujeto a
$$\begin{cases}2x+y\ge8\\ x+y\ge6\\ x+2y\ge10\\ x,y\ge0.\end{cases}$$
La región factible es **no acotada**, con vértices $A(0,8)$, $B(2,4)$ (intersección de $x+y=6$ y $x+2y=10$, que también cumple $2x+y=8$) y $C(10,0)$. Evaluamos el coste:
$$f(A)=5\cdot0+4\cdot8=32,\quad f(B)=5\cdot2+4\cdot4=26,\quad f(C)=5\cdot10=50.$$
Al ser un problema de **mínimo** sobre región no acotada (con gradiente positivo), el óptimo está en un vértice: el coste mínimo se alcanza en $B(2,4)$, es decir, **$2$ litros de NutriMax y $4$ litros de BioGrow**.

**(b)** El coste mínimo es
$$f(2,4)=5\cdot2+4\cdot4=10+16=26\ \text{€}.$$
