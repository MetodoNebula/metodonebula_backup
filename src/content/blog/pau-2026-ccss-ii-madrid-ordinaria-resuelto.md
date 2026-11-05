---
title: PAU 2026 · Comunidad de Madrid · Matemáticas Aplicadas a las Ciencias Sociales II — examen resuelto
seoTitle: PAU 2026 · Comunidad de Madrid · Matemáticas Aplicadas a las Ciencias Sociales II — examen resuelto
date: 2026-10-09
updated: 2026-11-05
description: Examen PAU 2026 · Comunidad de Madrid · Matemáticas Aplicadas a las Ciencias Sociales II resuelto paso a paso con planteamientos, cálculos y comprobaciones para preparar la Selectividad.
tag: CCSS II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: pau-ccss-programacion-lineal-problemas,pau-ccss-inferencia-intervalos-confianza,pau-ccss-matrices-modelos-economicos
image: /favicon.svg
---

Este examen resuelto conserva el enunciado y desarrolla cada apartado. Úsalo primero a contrarreloj y compáralo después con el razonamiento, no solo con el resultado final.

**Convocatoria:** ordinaria  
**Comunidad autónoma:** Comunidad de Madrid

## Pregunta 1 · Opinión sobre la vivienda

### Enunciado

En una encuesta de octubre de 2025 participan 4.029 personas. Entre los 333 jóvenes de 18 a 24 años, el 35,5 % menciona la vivienda entre los principales problemas del país.

**1.a)** Estima con un intervalo de confianza del 95 % la proporción de jóvenes de esa edad que mencionaría la vivienda.  
**1.b)** Para una nueva encuesta, calcula el tamaño de muestra necesario si queremos un error máximo de 5 puntos porcentuales y una confianza del 97 %, suponiendo que $p=0{,}355$.

### Solución

**1.a)** Con $n=333$, $\widehat p=0{,}355$ y $z_{0{,}975}=1{,}96$:

$$E=1{,}96\sqrt{\frac{0{,}355(1-0{,}355)}{333}}\approx0{,}0514.$$

Así, el intervalo es

$$\boxed{[0{,}3036;\ 0{,}4064]}.$$

**1.b)** Para un 97 % de confianza se toma $z\approx2{,}17$. Exigiendo $E\le0{,}05$:

$$n\ge\frac{z^2p(1-p)}{E^2}=\frac{2{,}17^2\cdot0{,}355\cdot0{,}645}{0{,}05^2}\approx431{,}29.$$

El tamaño mínimo entero es $\boxed{432\text{ personas}}$.

## Pregunta 2 · Opción 2.1: primitivas y áreas

### Enunciado

Considera la función

$$f(x)=x(1-x^2)+e^{-\lambda x},$$

donde $\lambda$ es un parámetro real.

**a)** Encuentra una primitiva $F$ que cumpla $F(0)=1$.  
**b)** Calcula el área bajo la curva sobre $[0,1]$.  
**c)** ¿Para qué valores de $\lambda$ se cumple $f'(0)>0$?

### Solución

**a)** Para $\lambda\ne0$, integramos término a término:

$$F(x)=\frac{x^2}{2}-\frac{x^4}{4}-\frac{e^{-\lambda x}}\lambda+C.$$

La condición $F(0)=1$ exige $C=1+1/\lambda$. De este modo,

$$\boxed{F(x)=\frac{x^2}{2}-\frac{x^4}{4}+\frac{1-e^{-\lambda x}}\lambda+1}\qquad(\lambda\ne0).$$

Si $\lambda=0$, el término exponencial es 1 y la primitiva queda $\boxed{F(x)=x^2/2-x^4/4+x+1}$.

**b)** La función es no negativa en $[0,1]$, por lo que el área coincide con la integral:

$$A=\int_0^1 f(x)\,dx=\boxed{\frac14+\frac{1-e^{-\lambda}}\lambda}\qquad(\lambda\ne0).$$

Para $\lambda=0$, $A=\boxed{5/4}$.

**c)** $f'(x)=1-3x^2-\lambda e^{-\lambda x}$, así que $f'(0)=1-\lambda>0$ cuando $\boxed{\lambda<1}$.

## Pregunta 2 · Opción 2.2: continuidad y asíntotas

### Enunciado

Trabajamos con

$$f(x)=\begin{cases}\dfrac{x+2}{(x-2)^2},&x<0,\\\dfrac{x^2+x^3}{x^2+1},&x\ge0.\end{cases}$$

Calcula el dominio, estudia la continuidad en $x=0$ y determina las asíntotas cuando $x\to-\infty$ y $x\to+\infty$.

### Solución

Los denominadores no se anulan en los intervalos donde se usan, por tanto el dominio es $\boxed{\mathbb R}$.

Para la continuidad en el origen:

$$f(0)=0,\qquad\lim_{x\to0^-}f(x)=\frac24=\frac12,\qquad\lim_{x\to0^+}f(x)=0.$$

Los límites laterales difieren; **hay una discontinuidad de salto en $x=0$**.

Por la izquierda,

$$\lim_{x\to-\infty}\frac{x+2}{(x-2)^2}=0,$$

así que hay una asíntota horizontal $\boxed{y=0}$ cuando $x\to-\infty$.

Por la derecha, como el numerador tiene un grado más que el denominador, buscamos una asíntota oblicua. Su pendiente y ordenada son

$$m=\lim_{x\to+\infty}\frac{f(x)}x=1,\qquad n=\lim_{x\to+\infty}[f(x)-x]=\lim_{x\to+\infty}\frac{x^2-x}{x^2+1}=1.$$

La asíntota oblicua es $\boxed{y=x+1}$.

## Pregunta 3 · Opción 3.1: ecuación matricial

### Enunciado

Sean

$$A=\begin{pmatrix}1/2&1&3/2\\1&1/2&1\\3/2&1&1/2\end{pmatrix},\qquad B=\begin{pmatrix}1&0&0\\0&1/2&0\\0&0&1/4\end{pmatrix}.$$

**a)** Resuelve $AXB=A+B$ para la matriz $X$.  
**b)** Calcula $\det(C^2B)$, siendo $C=2(A^{-1})^t$.

### Solución

**a)** La matriz $A$ tiene determinante 1, así que es invertible. Multiplicando por $A^{-1}$ a la izquierda y por $B^{-1}$ a la derecha:

$$AXB=A+B\Rightarrow X=A^{-1}+B^{-1}.$$

Calculamos

$$A^{-1}=\begin{pmatrix}-3/4&1&1/4\\1&-2&1\\1/4&1&-3/4\end{pmatrix},\qquad B^{-1}=\begin{pmatrix}1&0&0\\0&2&0\\0&0&4\end{pmatrix}.$$

Sumando,

$$\boxed{X=\begin{pmatrix}1/4&1&1/4\\1&0&1\\1/4&1&13/4\end{pmatrix}}.$$

**b)** Aprovechamos las propiedades del determinante de matrices de orden 3:

$$\det C=\det\bigl(2(A^{-1})^t\bigr)=2^3\det(A^{-1})=\frac8{\det A}=8.$$

Como $\det B=1/8$,

$$\det(C^2B)=\det(C)^2\det B=8^2\cdot\frac18=\boxed{8}.$$

## Pregunta 3 · Opción 3.2: programación lineal

### Enunciado

Una región del plano cumple

$$x\le6,\quad3y-2x\le10,\quad3y\ge2-2x,\quad x+y\le10,\quad y\ge x-6.$$

**a)** Encuentra los vértices de esa región y descríbela.  
**b)** Calcula el mínimo de $3y-x/2$ sobre la región.

### Solución

Al representar las rectas frontera y quedarnos con las intersecciones que cumplen todas las desigualdades, la región factible es un pentágono con vértices

$$A(4,6),\quad B(6,4),\quad C(6,0),\quad D(4,-2),\quad E(-2,2).$$

La función objetivo es $g(x,y)=3y-x/2$. La valoramos en los vértices:

| Vértice | $g(x,y)$ |
|---|---:|
| $(4,6)$ | 16 |
| $(6,4)$ | 9 |
| $(6,0)$ | -3 |
| $(4,-2)$ | **-8** |
| $(-2,2)$ | 7 |

El mínimo es $\boxed{-8}$ y se alcanza en $\boxed{(4,-2)}$.

## Pregunta 4 · Opción 4.1: sucesos condicionados

### Enunciado

De tres sucesos $A$, $B$ y $C$ sabemos que

$$P(A)=0{,}4,\ P(B)=0{,}6,\ P(C)=0{,}5,\ P(A\mid C)=0{,}6,\ P(B\mid C)=0{,}8.$$

También sabemos que $A$ y $B$ son independientes **condicionados a $C$**, y que $P(A\cap B\mid C^c)=0{,}08$.

**a)** Decide si $A$ y $B$ son independientes sin condicionar.  
**b)** Calcula $P(C\mid A\cap B)$.

### Solución

La independencia condicionada implica

$$P(A\cap B\mid C)=P(A\mid C)P(B\mid C)=0{,}6\cdot0{,}8=0{,}48.$$

Por probabilidad total,

$$P(A\cap B)=0{,}48\cdot0{,}5+0{,}08\cdot0{,}5=0{,}28.$$

Como $P(A)P(B)=0{,}4\cdot0{,}6=0{,}24\ne0{,}28$, **no son independientes**.

Aplicamos Bayes:

$$P(C\mid A\cap B)=\frac{P(A\cap B\mid C)P(C)}{P(A\cap B)}=\frac{0{,}48\cdot0{,}5}{0{,}28}=\boxed{0{,}8571}.$$

## Pregunta 4 · Opción 4.2: control de calidad

### Enunciado

En un laboratorio, el 3 % de los productos presenta defectos graves, el 7 % defectos leves y el 90 % restante no tiene defectos. Un test da positivo al 98 % de los defectos graves, al 80 % de los leves y al 5 % de los productos sin defectos.

**a)** ¿Qué probabilidad hay de obtener un resultado negativo en un producto elegido al azar?  
**b)** Si el resultado es positivo, ¿qué probabilidad hay de que el defecto sea grave?

### Solución

Sean $G$ (grave), $L$ (leve), $N$ (sin defectos) y $+$ / $-$ (resultado del test).

**a)** Las probabilidades de negativo en los tres grupos son $0{,}02$, $0{,}20$ y $0{,}95$. Por probabilidad total:

$$P(-)=0{,}02\cdot0{,}03+0{,}20\cdot0{,}07+0{,}95\cdot0{,}90=\boxed{0{,}8696}.$$

**b)** Primero,

$$P(+)=0{,}98\cdot0{,}03+0{,}80\cdot0{,}07+0{,}05\cdot0{,}90=0{,}1304.$$

Entonces,

$$P(G\mid+)=\frac{P(+\mid G)P(G)}{P(+)}=\frac{0{,}98\cdot0{,}03}{0{,}1304}=\boxed{0{,}2255}.$$

## Cómo usar este examen para preparar la PAU

Haz una primera vuelta sin consultar la solución. Al corregir, señala el primer paso que no supiste justificar y repítelo al día siguiente. Así conviertes un modelo de examen en una lista concreta de técnicas que debes entrenar.

Si quieres trabajar estos bloques con una ruta de práctica, explicaciones y seguimiento, tienes el [Campus de Método Nebula](/campus/).

