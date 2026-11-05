---
title: Matemáticas II · PAU 2025 · Navarra — examen resuelto
seoTitle: Matemáticas II · PAU 2025 · Navarra — examen resuelto
date: 2025-10-24
updated: 2026-11-05
description: Examen de Matemáticas II de la PAU 2025 de Navarra resuelto paso a paso, con todos los bloques y opciones.
tag: Matemáticas II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: como-preparar-pau-matematicas-ii,pau-matematicas-matrices-determinantes-gauss,pau-matematicas-limites-derivadas
image: /favicon.svg
---

Este examen tiene dos propuestas por bloque. Aquí están todas, con el enunciado seguido de una solución que explica las decisiones, no solo el cálculo final.

## P1 · Coste mínimo de máquinas

### Enunciado

Un trabajo tarda 80 horas con una máquina. Cada máquina cuesta 10 € de puesta en marcha y 5 € por cada hora de uso. Un único operario cobra 18 € por hora de supervisión. El tiempo es inversamente proporcional al número de máquinas. ¿Cuántas máquinas minimizan el coste?

### Solución

Si se usan $x$ máquinas, el trabajo dura $80/x$ horas. El coste de las máquinas es $10x+5x(80/x)=10x+400$; el del operario es $18(80/x)=1440/x$. Por tanto,

$$G(x)=10x+400+\frac{1440}{x},\qquad x>0.$$

Derivamos e igualamos a cero:

$$G'(x)=10-\frac{1440}{x^2}=0\Longrightarrow x^2=144.$$

La solución física es $x=12$. Además, $G''(x)=2880/x^3>0$, así que es un mínimo.

$$\boxed{\text{Se deben usar 12 máquinas.}}$$

## P2 · Precio de la electricidad

### Enunciado

En $0\le t\le1$, el precio es

$$p(t)=0{,}15+\sin^2\left(\frac{\pi t}{2}\right)\cos\left(\frac{\pi t}{2}\right).$$

**a)** Halla máximos y mínimos. **b)** Calcula el valor medio en $[0,1]$.

### Solución

La derivada puede factorizarse como

$$p'(t)=\frac\pi2\sin\left(\frac{\pi t}{2}\right)\left[3\cos^2\left(\frac{\pi t}{2}\right)-1\right].$$

En el intervalo aparecen $t=0$ y $t=\frac2\pi\arccos(1/\sqrt3)$. Al comparar también con $t=1$, los extremos absolutos son

$$\boxed{p_{\min}=0{,}15\text{ en }t=0\text{ y }t=1},$$

$$\boxed{p_{\max}=0{,}15+\frac{2}{3\sqrt3}\approx0{,}5349\text{ en }t=\frac2\pi\arccos\frac1{\sqrt3}\approx0{,}6082}.$$

Para el valor medio integramos. Con $u=\sin(\pi t/2)$,

$$\int p(t)dt=0{,}15t+\frac{2}{3\pi}\sin^3\left(\frac{\pi t}{2}\right).$$

Como el intervalo tiene longitud 1,

$$\boxed{\overline p=0{,}15+\frac{2}{3\pi}\approx0{,}3622}.$$

## A1 · Sistema dependiente de $m$

### Enunciado

Estudia y resuelve, cuando sea compatible,

$$\begin{cases}(m^2-3m)x-my+2mz=3,\\(m^2-3m)x+3y+3mz=m+9,\\(3m-m^2)x+my-mz=0.\end{cases}$$

### Solución

Aplicamos Rouché-Frobenius: un sistema es compatible si los rangos de la matriz de coeficientes y de la ampliada coinciden. En vez de empezar calculando determinantes largos, hacemos dos operaciones elementales que eliminan $x$ en dos filas:

$$F_2\leftarrow F_2-F_1,\qquad F_3\leftarrow F_3+F_1.$$

El sistema equivalente queda

$$
\begin{cases}
m(m-3)x-my+2mz=3,\\
(m+3)y+mz=m+6,\\
mz=3.
\end{cases}
$$

Si $m\ne0$, la última ecuación da directamente

$$z=\frac3m.$$

La sustituimos en la segunda:

$$
(m+3)y+m\frac3m=m+6
\Longrightarrow(m+3)y=m+3.
$$

Cuando $m\ne-3$, queda $y=1$. Por último, en la primera ecuación sustituimos $y=1$ y $z=3/m$:

$$
m(m-3)x-m+6=3
\Longrightarrow m(m-3)x=m-3.
$$

Si además $m\ne3$, se obtiene $x=1/m$. Esto explica, sin saltos, el caso general.

Ahora revisamos los valores que no permitían dividir:

- Para $m=0$, la primera ecuación se convierte en $0=3$; por tanto es incompatible.
- Para $m=-3$, la tercera fija $z=-1$; la segunda no aporta información nueva y la primera deja $y=-1-6x$. Si $x=\lambda$, hay infinitas soluciones $(\lambda,-1-6\lambda,-1)$.
- Para $m=3$, la tercera fija $z=1$ y la segunda da $y=1$; $x$ queda libre. Si $x=\lambda$, las soluciones son $(\lambda,1,1)$.

En forma de resumen:

$$
\begin{array}{c|c|c}
m&\text{tipo}&\text{solución}\\\hline
m\ne-3,0,3&\text{compatible determinado}&(x,y,z)=(1/m,1,3/m)\\
m=-3&\text{compatible indeterminado}&(x,y,z)=(\lambda,-1-6\lambda,-1)\\
m=0&\text{incompatible}&\text{no hay solución}\\
m=3&\text{compatible indeterminado}&(x,y,z)=(\lambda,1,1)
\end{array}
$$

En los dos casos indeterminados, $\lambda\in\mathbb R$. La distinción se justifica porque, al sustituir esos valores, el rango de la ampliada coincide con el de coeficientes salvo en $m=0$, donde aparece una fila contradictoria.

## A2 · Determinante de una expresión matricial

### Enunciado

Sean matrices cuadradas de orden 3 con $|A|=1/4$ y $|B|=2$. Calcula $|C|$ si

$$C=2(A B^t)^2(B^t)^{-1}.$$

### Solución

Como $(B^t)(B^t)^{-1}=I$, se simplifica

$$C=2AB^tA.$$

El 2 multiplica una matriz de orden 3, así que al tomar determinantes aporta $2^3$. Además, $|B^t|=|B|$:

$$|C|=2^3|A||B^t||A|=8\cdot\frac14\cdot2\cdot\frac14=\boxed1.$$

## B1 · Recta que corta a otras dos

### Enunciado

Halla la recta por $P=(2,0,-1)$ que corta a

$$
s:\begin{cases}2x+y-3z-6=0,\\2x-3z-8=0,\end{cases}\qquad
r:\frac{x+1}{2}=y=z+2.
$$

### Solución

Parametrizamos:

$$
r=(-1+2\alpha,\alpha,-2+\alpha),\qquad
s=\left(4+\frac32\lambda,-2,\lambda\right).
$$

Buscamos un punto de cada recta alineado con $P$. La condición de proporcionalidad de los vectores hacia $P$ da $\alpha=2$ y $\lambda=-2$. Los puntos de corte son $A=(3,2,0)$ y $B=(1,-2,-2)$; el vector $\overrightarrow{PB}=(1,2,1)$ sirve de dirección.

$$\boxed{t:\frac{x-2}{1}=\frac y2=\frac{z+1}{1}}.$$

## B2 · Vértices de un cuadrado en el espacio

### Enunciado

Dos vértices consecutivos son $A=(1,0,-1)$ y $B=(1,4,2)$. Los otros dos están en una recta que pasa por $P=(6,-4,-4)$.

**a)** Halla esa recta. **b)** Halla el plano por $A$ perpendicular a $AB$. **c)** Calcula los otros vértices.

### Solución

El vector $\overrightarrow{AB}=(0,4,3)$ es paralelo al lado opuesto. La recta buscada es

$$r:(x,y,z)=(6,-4,-4)+\lambda(0,4,3).$$

El plano perpendicular a $AB$ y que pasa por $A$ usa ese vector como normal:

$$4y+3z+3=0.$$

Al intersectar con $r$ resulta $\lambda=1$ y el vértice $D=(6,0,-1)$. Sumamos el vector $AB$ para obtener el otro:

$$\boxed{D=(6,0,-1),\qquad C=(6,4,2)}.$$

## C1 · Continuidad y teorema de Rolle

### Enunciado

Sea $f(x)=\cos(\pi x/2)\ln(x^2+x-5)$.

**a)** Demuestra continuidad en $[2,3]$. **b)** Demuestra que existe $c\in(2,3)$ con $f'(c)=0$.

### Solución

Para $x\in[2,3]$, se cumple $x^2+x-5\ge1>0$. El logaritmo existe y es continuo; al multiplicarlo por el coseno, $f$ es continua en el intervalo y derivable en su interior.

Además,

$$f(2)=\cos\pi\ln1=0,\qquad f(3)=\cos(3\pi/2)\ln7=0.$$

Se cumplen las hipótesis del teorema de Rolle: continuidad en $[2,3]$, derivabilidad en $(2,3)$ e igualdad en los extremos. Por Rolle, existe al menos un $\boxed{c\in(2,3)}$ tal que $\boxed{f'(c)=0}$.

## C2 · Asíntotas y simetría

### Enunciado

Estudia las asíntotas, simetrías y comportamiento junto a las asíntotas verticales de

$$f(x)=\frac{3x^3}{x^2-4}.$$

### Solución

Como $f(-x)=-f(x)$, la función es impar, con simetría respecto al origen. El dominio excluye $x=\pm2$, donde el numerador no se anula: son asíntotas verticales.

La división proporciona

$$\frac{3x^3}{x^2-4}=3x+\frac{12x}{x^2-4},$$

de modo que la asíntota oblicua es $\boxed{y=3x}$; no hay horizontal.

El signo en cada lado da el comportamiento completo:

$$
\begin{array}{c|cc}
&\text{por la izquierda}&\text{por la derecha}\\\hline
x=-2&-\infty&+\infty\\
x=2&-\infty&+\infty
\end{array}
$$

## Cómo usar este examen

Aquí conviven optimización, parámetros, geometría y teoremas de análisis. Cuando repases, etiqueta cada error con uno de esos bloques: así conviertes la corrección en un plan de estudio real.

Para practicar por bloques y recibir seguimiento, puedes acceder al [Campus de Método Nebula](/campus/).
