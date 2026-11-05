---
title: PAU 2026 · Aragón · Matemáticas Aplicadas a las Ciencias Sociales II — examen resuelto
seoTitle: PAU 2026 · Aragón · Matemáticas Aplicadas a las Ciencias Sociales II — examen resuelto
date: 2026-10-17
updated: 2026-11-05
description: Examen PAU 2026 · Aragón · Matemáticas Aplicadas a las Ciencias Sociales II resuelto paso a paso con planteamientos, cálculos y comprobaciones para preparar la Selectividad.
tag: CCSS II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: pau-ccss-programacion-lineal-problemas,pau-ccss-inferencia-intervalos-confianza,pau-ccss-matrices-modelos-economicos
image: /favicon.svg
---

Este examen resuelto conserva el enunciado y desarrolla cada apartado. Úsalo primero a contrarreloj y compáralo después con el razonamiento, no solo con el resultado final.

**Convocatoria:** ordinaria  
**Comunidad autónoma:** Aragón

## Ejercicio 1 · Planificación de lotes

### Enunciado

Una librería prepara dos clases de lotes cada semana: **Novedades** y **Reposición**. Cada lote de Novedades requiere 3 horas de recepción y 1 de etiquetado; cada lote de Reposición necesita 1 hora de recepción y 2 de etiquetado. Se dispone de 100 horas semanales en cada departamento. Los beneficios son, respectivamente, 500 € y 400 € por lote, y deben prepararse al menos 40 lotes en total.

**a)** Decide cuántos lotes de cada tipo hay que preparar para ganar lo máximo posible.  
**b)** Comprueba si hacer 10 lotes de Novedades y 40 de Reposición es posible y si da el mejor beneficio.

### Solución

Sea $x$ la cantidad de lotes de Novedades e $y$ la de Reposición. Buscamos maximizar

$$B(x,y)=500x+400y$$

sujeto a

$$\begin{cases}3x+y\le100,\\x+2y\le100,\\x+y\ge40,\\x\ge0,\ y\ge0.\end{cases}$$

Las intersecciones de las rectas que delimitan la región factible proporcionan los vértices $(0,40)$, $(0,50)$, $(20,40)$ y $(30,10)$. Evaluamos:

| $(x,y)$ | Beneficio |
|---|---:|
| $(0,40)$ | 16.000 € |
| $(0,50)$ | 20.000 € |
| $(20,40)$ | **26.000 €** |
| $(30,10)$ | 19.000 € |

El máximo se alcanza con $\boxed{x=20}$ lotes de Novedades y $\boxed{y=40}$ de Reposición: $\boxed{26\,000\text{ €}}$.

En la alternativa $(10,40)$ se cumplen $3(10)+40=70\le100$, $10+2(40)=90\le100$ y $10+40=50\ge40$. Por tanto, **sí es viable**, pero su beneficio es $500(10)+400(40)=21\,000\text{ €}$, inferior al máximo.

## Ejercicio 2 · Precio de los libros y descargas

### Enunciado

Para estudiar cómo podrían variar las descargas ilegales al encarecerse un libro, la librería usa el modelo

$$D(x)=-4x^3+36x^2+864x+400,\qquad2\le x\le15,$$

donde $x$ representa la subida del precio, en euros, sobre un precio inicial de 10 €.

**a)** Calcula las descargas previstas para aumentos de 2 € y 15 €, estudia cuándo suben y bajan y localiza los valores máximo y mínimo, indicando el precio final correspondiente.  
**b)** Averigua si existe un punto de inflexión y explica la curvatura de la función.

### Solución

**a)** En los extremos del intervalo:

$$D(2)=2240,\qquad D(15)=7960.$$

Derivamos para estudiar el crecimiento:

$$D'(x)=-12x^2+72x+864=-12(x-12)(x+6).$$

Los puntos críticos son $x=12$ y $x=-6$, pero solo $12$ pertenece al dominio. La función **crece** en $[2,12]$ y **decrece** en $[12,15]$. Además,

$$D(12)=-4(12)^3+36(12)^2+864(12)+400=9040.$$

Por comparación de los valores, el **máximo absoluto** es $\boxed{9040}$ descargas cuando el precio final es $10+12=\boxed{22\text{ €}}$; el **mínimo absoluto** es $\boxed{2240}$ descargas cuando el precio es $10+2=\boxed{12\text{ €}}$. El punto $x=12$ también es un máximo relativo.

**b)** La segunda derivada es

$$D''(x)=-24x+72.$$

Al resolver $D''(x)=0$ obtenemos $x=3$. Para $x<3$, $D''>0$ (curva convexa), y para $x>3$, $D''<0$ (curva cóncava). Como $D(3)=3208$, el punto de inflexión es $\boxed{(3,3208)}$.

## Ejercicio 3 · Encuesta de compras online

### Enunciado

En una muestra aleatoria de 100 clientes de una librería, 52 afirman comprar por internet al menos una vez al mes.

**a)** Calcula un intervalo de confianza del 96 % para esa proporción. ¿Encaja con la idea de que el porcentaje real es del 65 %?  
**b)** Si tomamos $p=0{,}52$ como proporción verdadera y elegimos con reemplazamiento 10 clientes, ¿qué probabilidad hay de que exactamente 6 compren online cada mes?

### Solución

**a)** La proporción de la muestra es $\widehat p=52/100=0{,}52$ y $\widehat q=0{,}48$. Para un 96 % de confianza se toma $z_{0{,}98}\approx2{,}055$. Por tanto,

$$E=z\sqrt{\frac{\widehat p(1-\widehat p)}n}=2{,}055\sqrt{\frac{0{,}52\cdot0{,}48}{100}}\approx0{,}1027.$$

El intervalo queda

$$\boxed{[0{,}4173;\ 0{,}6227]}.$$

El valor $0{,}65$ está fuera, así que **hay motivos para cuestionar** que el porcentaje poblacional sea del 65 %.

**b)** Si $X$ es el número de personas que compran online, $X\sim\mathrm{Bin}(10;0{,}52)$. Entonces,

$$P(X=6)=\binom{10}{6}(0{,}52)^6(0{,}48)^4=\boxed{0{,}2204}.$$

## Ejercicio 4 · Opción Q1: artículos con descuento

### Enunciado

Una librería rebaja un 10 % todos sus productos. Un cliente compra una novela, un cuaderno y una mochila y paga 117 € tras aplicar el descuento. Antes de la rebaja, el cuaderno costaba la cuarta parte que la novela y la mochila el doble. Calcula el precio original de los tres artículos.

### Solución

Llamamos $n$, $c$ y $m$ a los precios originales. Tenemos:

$$0{,}9(n+c+m)=117,\qquad c=\frac n4,\qquad m=2n.$$

La primera ecuación indica $n+c+m=130$. Sustituimos:

$$n+\frac n4+2n=130\quad\Longrightarrow\quad\frac{13n}{4}=130\quad\Longrightarrow\quad n=40.$$

Por tanto, $c=40/4=10$ y $m=2(40)=80$. Los precios originales son $\boxed{40\text{ €}}$ por la novela, $\boxed{10\text{ €}}$ por el cuaderno y $\boxed{80\text{ €}}$ por la mochila.

## Ejercicio 4 · Opción Q2: beneficio de una campaña

### Enunciado

El beneficio asociado a una campaña, medido en cientos de euros, se modeliza mediante

$$B(x)=3x^2+ax+1,$$

donde $x$ es el tiempo en días. Sabemos que durante los dos primeros días el beneficio acumulado fue de 3.000 €, así que $\int_0^2 B(x)\,dx=30$. Encuentra el parámetro $a$.

### Solución

Calculamos la integral:

$$\int_0^2(3x^2+ax+1)\,dx=\left[x^3+\frac{ax^2}{2}+x\right]_0^2=8+2a+2=10+2a.$$

Igualamos al beneficio acumulado: $10+2a=30$, así que $\boxed{a=10}$.

## Ejercicio 4 · Opción Q3: promociones y compras

### Enunciado

La librería reparte tres promociones: **A** (novelas), **B** (manuales) y **C** (accesorios). De 1.000 clientes, 300 reciben A, el 50 % reciben B y los demás C. Compra durante la semana el 60 % de quienes reciben A, el 80 % de quienes reciben B y el 70 % de quienes reciben C. Se elige una persona que sí ha comprado: ¿qué probabilidad hay de que tuviera la promoción A?

### Solución

Definimos $D$ como «realiza una compra». Las probabilidades iniciales son

$$P(A)=0{,}3,\quad P(B)=0{,}5,\quad P(C)=0{,}2.$$

Además, $P(D\mid A)=0{,}6$, $P(D\mid B)=0{,}8$ y $P(D\mid C)=0{,}7$. Aplicamos Bayes:

$$\begin{aligned}P(A\mid D)&=\frac{P(A)P(D\mid A)}{P(A)P(D\mid A)+P(B)P(D\mid B)+P(C)P(D\mid C)}\\
&=\frac{0{,}3\cdot0{,}6}{0{,}3\cdot0{,}6+0{,}5\cdot0{,}8+0{,}2\cdot0{,}7}\\
&=\frac{0{,}18}{0{,}72}=\boxed{0{,}25}.
\end{aligned}$$

La probabilidad es del **25 %**.

## Cómo usar este examen para preparar la PAU

Haz una primera vuelta sin consultar la solución. Al corregir, señala el primer paso que no supiste justificar y repítelo al día siguiente. Así conviertes un modelo de examen en una lista concreta de técnicas que debes entrenar.

Si quieres trabajar estos bloques con una ruta de práctica, explicaciones y seguimiento, tienes el [Campus de Método Nebula](/campus/).

