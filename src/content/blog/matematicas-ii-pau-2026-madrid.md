---
title: PAU 2026 Matemáticas II: examen resuelto de Madrid
seoTitle: PAU 2026 Matemáticas II Madrid: examen resuelto
date: 2026-10-18
updated: 2026-11-05
description: Examen PAU 2026 de Matemáticas II de Madrid resuelto paso a paso: matrices, optimización, geometría, probabilidad y análisis.
tag: Matemáticas II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: como-preparar-pau-matematicas-ii,pau-matematicas-matrices-determinantes-gauss,pau-matematicas-integrales-areas
image: /favicon.svg
---

Aquí tienes el modelo completo con las tres preguntas obligatorias y las dos opciones de los bloques finales. Haz primero una elección por bloque como si estuvieras en el examen; después revisa el desarrollo para detectar qué método te faltaba.

## Pregunta 1 · Matriz con parámetro

Sea

$$A=\begin{pmatrix}1&\lambda-2&\lambda\\0&1&\lambda-1\\1&0&1\end{pmatrix}.$$

Estudia el rango de \(A\) según \(\lambda\). Después, para \(\lambda=2\), resuelve \(A^2-AX=I\).

### Solución

Las dos últimas filas son independientes, así que el rango nunca baja de 2. Calculamos el determinante:

$$\det(A)=\lambda^2-4\lambda+3=(\lambda-1)(\lambda-3).$$

Cuando \(\lambda\ne1,3\), el determinante no se anula y el rango vale 3. En los dos valores que anulan el determinante sigue habiendo un menor de orden 2 no nulo, por lo que el rango es 2:

$$\boxed{\operatorname{rg}(A)=3\text{ si }\lambda\ne1,3;\qquad \operatorname{rg}(A)=2\text{ si }\lambda=1\text{ o }3.}$$

Para \(\lambda=2\):

$$A=\begin{pmatrix}1&0&2\\0&1&1\\1&0&1\end{pmatrix},\qquad
A^{-1}=\begin{pmatrix}-1&0&2\\-1&1&1\\1&0&-1\end{pmatrix}.$$

De \(A^2-AX=I\) despejamos \(X=A^{-1}(A^2-I)=A-A^{-1}\). Así:

$$\boxed{X=\begin{pmatrix}2&0&0\\1&0&0\\0&0&2\end{pmatrix}.}$$

## Pregunta 2 · Coste mínimo en un jardín

Un jardín triangular rectángulo tiene catetos de 42 m y 56 m. Se cubre con techo un rectángulo cuyo vértice opuesto al ángulo recto está sobre la hipotenusa. El suelo cubierto cuesta 30 €/m² y el resto 50 €/m². Calcula las dimensiones que minimizan el coste.

### Solución

Llamamos \(x\) al lado del rectángulo sobre el cateto de 56 m e \(y\) al que queda sobre el cateto de 42 m. Por semejanza:

$$\frac{x}{56}+\frac{y}{42}=1\quad\Longrightarrow\quad y=42-\frac34x.$$

El área total del jardín es \(42\cdot56/2=1176\) m². Como la zona cubierta mide \(xy\), el coste es:

$$C=30xy+50(1176-xy)=58800-20xy.$$

Sustituyendo \(y\):

$$C(x)=15x^2-840x+58800.$$

Derivamos:

$$C'(x)=30x-840=0\quad\Longrightarrow\quad x=28.$$

Además \(C''(x)=30>0\), por lo que es un mínimo. Finalmente:

$$y=42-\frac34\cdot28=21.$$

Las dimensiones óptimas son:

$$\boxed{28\text{ m}\times21\text{ m}.}$$

## Pregunta 3 · Plano y recta

Dados el plano \(\pi:2x+2y-z=13\) y la recta

$$r:\frac{x-2}{1}=\frac y1=\frac z4,$$

calcula el simétrico de \(P=(2,0,0)\) respecto a \(\pi\), y resuelve las dos opciones: la distancia entre \(r\) y \(\pi\), o un plano que contenga \(r\) y sea perpendicular a \(\pi\).

### Solución

La normal de \(\pi\) es \(n=(2,2,-1)\). La recta perpendicular al plano que pasa por \(P\) es:

$$
(x,y,z)=(2,0,0)+t(2,2,-1).
$$

Al sustituir en el plano se obtiene \(t=1\), luego el pie de la perpendicular es \(M=(4,2,-1)\). Como \(M\) es el punto medio entre \(P\) y su reflejo \(Q\):

$$Q=2M-P=\boxed{(6,4,-2)}.$$

El vector de \(r\) es \(v=(1,1,4)\), perpendicular a \(n\), por lo que la recta y el plano son paralelos. La distancia se calcula con cualquier punto de \(r\), por ejemplo \(P=(2,0,0)\):

$$d(r,\pi)=\frac{|2\cdot2+2\cdot0-0-13|}{\sqrt{2^2+2^2+(-1)^2}}=\boxed{3}. $$

Para la otra opción, el plano buscado contiene a \(P\), a \(v\) y a \(n\). Al calcular su ecuación resulta:

$$\boxed{x-y-2=0.}$$

## Pregunta 4.1 · Duración de baterías

La duración de una batería sigue una normal de media 24 horas y desviación típica 3 horas. Se considera defectuosa por debajo de 21 horas. Calcula la probabilidad de defecto y la probabilidad de que, en 10 teléfonos independientes, al menos 9 no sean defectuosos.

### Solución

Tipificamos el límite:

$$z=\frac{21-24}{3}=-1.$$

Por tanto:

$$P(X<21)=P(Z<-1)=1-P(Z\le1)=1-0{,}8413=\boxed{0{,}1587}. $$

La probabilidad de que una batería no sea defectuosa es \(q=0{,}8413\). Si \(Y\) es el número de defectuosas en 10 teléfonos, \(Y\sim B(10,0{,}1587)\). Pedir al menos 9 no defectuosas equivale a pedir \(Y\le1\):

$$
\begin{aligned}
P(Y\le1)&=P(Y=0)+P(Y=1)\\
&=\binom{10}{0}q^{10}+\binom{10}{1}(0{,}1587)q^9\\
&\approx\boxed{0{,}5127}.
\end{aligned}
$$

## Pregunta 4.2 · Sucesos

Sabiendo que \(P(B)=0{,}4\), \(P(\overline{A\cup B})=0{,}4\) y \(P(B\mid A)=0{,}2\), calcula \(P(A)\), \(P(A\cap B)\) y \(P((A\cap B)\mid(A\cup B))\).

### Solución

Del dato del complemento obtenemos \(P(A\cup B)=1-0{,}4=0{,}6\). Además:

$$P(A\cap B)=P(B\mid A)P(A)=0{,}2P(A).$$

Usando la fórmula de la unión:

$$0{,}6=P(A)+0{,}4-0{,}2P(A),$$

de donde:

$$\boxed{P(A)=0{,}25,\qquad P(A\cap B)=0{,}05.}$$

Finalmente:

$$P((A\cap B)\mid(A\cup B))=\frac{0{,}05}{0{,}6}=\boxed{\frac1{12}\approx0{,}0833}. $$

## Pregunta 5.1 · Área con logaritmos

Calcula el área limitada por \(y=\ln x\), el eje \(x\) y la recta \(x=e\).

### Solución

La curva corta el eje \(x\) en \(x=1\). Así que:

$$A=\int_1^e\ln x\,dx.$$

Por partes, \(\int\ln x\,dx=x\ln x-x\). Evaluando:

$$A=[x\ln x-x]_1^e=(e-e)-(0-1)=\boxed{1}. $$

## Pregunta 5.2 · Continuidad, derivabilidad y tangente

Sea

$$
f(x)=
\begin{cases}
3x^2-\sin(ax)+b,&x<0,\\
\dfrac{2e^x}{1+x^2},&x\ge0.
\end{cases}
$$

Encuentra \(a\) y \(b\) para que sea continua y derivable en 0, y calcula la tangente en \(x=2\).

### Solución

Por la izquierda, el límite en 0 vale \(b\). Por la derecha, \(f(0)=2\). La continuidad exige:

$$\boxed{b=2}. $$

La derivada por la izquierda es \(6x-a\cos(ax)\), que en 0 vale \(-a\). Para \(x>0\):

$$f'(x)=\frac{2e^x(x^2-2x+1)}{(1+x^2)^2},$$

y por la derecha, \(f'(0)=2\). De ahí:

$$-a=2\quad\Longrightarrow\quad\boxed{a=-2}. $$

En \(x=2\):

$$f(2)=\frac{2e^2}{5},\qquad f'(2)=\frac{2e^2}{25}.$$

La recta tangente queda:

$$\boxed{y-\frac{2e^2}{5}=\frac{2e^2}{25}(x-2).}$$

## Cómo practicar con este examen

Elige primero una sola opción en las preguntas 4 y 5 y resuélvela con tiempo. En la corrección, anota si el bloqueo fue de planteamiento, cálculo o justificación: ese diagnóstico te dice qué entrenar en el siguiente modelo.

Puedes organizar esa práctica y recibir seguimiento en el [Campus de Método Nebula](/campus/).
