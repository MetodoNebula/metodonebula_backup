---
title: Matemáticas II · PAU 2025 · Andalucía — examen resuelto
seoTitle: Matemáticas II · PAU 2025 · Andalucía — examen resuelto
date: 2025-10-16
updated: 2026-11-05
description: Examen de Matemáticas II de la PAU 2025 de Andalucía resuelto paso a paso, con todas las opciones desarrolladas.
tag: Matemáticas II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: como-preparar-pau-matematicas-ii,pau-matematicas-matrices-determinantes-gauss,pau-matematicas-integrales-areas
image: /favicon.svg
---

Aquí tienes el examen completo con cada enunciado acompañado de su desarrollo. Puedes hacerlo primero sin mirar y usar las soluciones después para localizar exactamente qué técnica necesitas repasar.

**Convocatoria:** ordinaria. **Formato:** el ejercicio 1 es obligatorio; en cada uno de los otros tres bloques se elegía una de las dos propuestas. Se resuelven aquí las siete propuestas.

## Ejercicio 1 · Precio de tres prendas

### Enunciado

La compra de un jersey, una camisa y un pantalón suma 80 €. El jersey cuesta un tercio de lo que cuestan juntos la camisa y el pantalón.

**a)** ¿Quedan determinados de forma única los precios del jersey y de la camisa? Razona la respuesta.

**b)** Con descuentos del 30 % en el jersey, del 40 % en la camisa y del 20 % en el pantalón, la compra habría costado 57 €. Calcula los precios iniciales.

### Solución

Llamemos $j$, $c$ y $p$ a los precios del jersey, la camisa y el pantalón. Los datos iniciales dan

$$j+c+p=80,\qquad j=\frac{c+p}{3}.$$

La segunda igualdad dice $c+p=3j$. Al sustituirla en la primera queda $j+3j=80$, de donde

$$j=20,\qquad c+p=60.$$

Todas estas cantidades están expresadas en euros.

Por tanto, el jersey sí queda fijado: cuesta **20 €**. En cambio, la camisa no: puede valer cualquier cantidad compatible con que, junto al pantalón, sume 60 €. Por ejemplo, $c=25$ y $p=35$, pero también $c=30$ y $p=30$.

En las rebajas se ahorran $80-57=23$ euros. Ese ahorro cumple

$$0{,}3j+0{,}4c+0{,}2p=23.$$

Ya sabemos que $j=20$ y que $c+p=60$. Sustituimos $p=60-c$:

$$0{,}3(20)+0{,}4c+0{,}2(60-c)=23.$$

Así, $6+0{,}4c+12-0{,}2c=23$, luego $0{,}2c=5$ y $c=25$. Finalmente, $p=60-25=35$.

$$\boxed{j=20,\quad c=25,\quad p=35}$$

Es decir: 20 €, 25 € y 35 €, respectivamente.

## Ejercicio 2 · Un límite con parámetro

### Enunciado

Sabiendo que es finito, calcula el valor de $a$ y del límite

$$\lim_{x\to0}\frac{\sin x-ax+2-2\cos x}{e^x-x\cos x-1}.$$

### Solución

Al sustituir $x=0$ aparece $0/0$. Aplicamos L'Hôpital una vez:

$$\lim_{x\to0}\frac{\cos x-a+2\sin x}{e^x-\cos x+x\sin x}.$$

El denominador vuelve a valer 0 en $x=0$. Para que el límite pueda ser finito, el numerador también debe anularse: $1-a=0$. Por tanto, necesariamente $a=1$.

Con ese valor aplicamos L'Hôpital una segunda vez:

$$
\lim_{x\to0}\frac{-\sin x+2\cos x}{e^x+2\sin x+x\cos x}
=\frac{-\sin0+2\cos0}{e^0+2\sin0+0\cos0}=2.
$$

$$\boxed{a=1\quad\text{y}\quad L=2}$$

## Ejercicio 3 · Asíntota y monotonía

### Enunciado

Sea $f(x)=a+\dfrac{\ln x}{x^2}$, con $x>0$.

**a)** Halla $a$ para que $y=1$ sea una asíntota horizontal.

**b)** Para $a=0$, estudia el crecimiento, el decrecimiento y los extremos relativos.

### Solución

Para $x\to+\infty$, el cociente $\ln x/x^2$ tiende a 0. Por eso

$$\lim_{x\to+\infty}f(x)=a.$$

La asíntota ha de ser $y=1$, así que $\boxed{a=1}$.

Ahora tomamos $a=0$: $f(x)=\ln x/x^2$. Derivamos usando la regla del cociente:

$$f'(x)=\frac{1-2\ln x}{x^3}.$$

Como $x^3>0$ en el dominio, el signo depende de $1-2\ln x$. Se anula cuando

$$\ln x=\frac12\quad\Longrightarrow\quad x=\sqrt e.$$

Antes de $\sqrt e$ el numerador es positivo y después es negativo. Así que $f$ crece en $(0,\sqrt e)$ y decrece en $(\sqrt e,+\infty)$. Tiene un máximo relativo, y también absoluto, en $x=\sqrt e$:

$$f(\sqrt e)=\frac{\ln(\sqrt e)}{(\sqrt e)^2}=\frac{1/2}{e}=\frac1{2e}.$$

$$\boxed{\text{Máximo en }\left(\sqrt e,\frac1{2e}\right)}$$

## Ejercicio 4 · Tetraedro y distancia a un plano

### Enunciado

Sean $O=(0,0,0)$, $A=(0,2,-2)$, $B=(1,2,m)$ y $C=(2,3,2)$.

**a)** Calcula los valores de $m$ para que el tetraedro $OABC$ tenga volumen 3.

**b)** Para $m=0$, halla la distancia de $O$ al plano que pasa por $A$, $B$ y $C$.

### Solución

Desde $O$ tomamos los vectores $\overrightarrow{OA}=(0,2,-2)$, $\overrightarrow{OB}=(1,2,m)$ y $\overrightarrow{OC}=(2,3,2)$. El volumen es un sexto del valor absoluto del producto mixto:

$$
V=\frac16\left|\det\begin{pmatrix}0&2&-2\\1&2&m\\2&3&2\end{pmatrix}\right|
=\frac{|4m-2|}{6}.
$$

Pedimos $V=3$:

$$|4m-2|=18,$$

de donde $4m-2=18$ o $4m-2=-18$. Así obtenemos

$$\boxed{m=5\quad\text{o}\quad m=-4}.$$

Para $m=0$, $B=(1,2,0)$. Dos vectores del plano $ABC$ son

$$\overrightarrow{AB}=(1,0,2),\qquad\overrightarrow{AC}=(2,1,4).$$

Un vector normal es $\overrightarrow{AB}\times\overrightarrow{AC}=(-2,0,1)$. Con el punto $A$, la ecuación del plano es

$$-2(x-0)+(z+2)=0\quad\Longrightarrow\quad -2x+z+2=0.$$

La distancia desde $O=(0,0,0)$ es

$$
d=\frac{|-2\cdot0+0+2|}{\sqrt{(-2)^2+0^2+1^2}}
=\boxed{\frac{2\sqrt5}{5}}.
$$

## Ejercicio 5 · Plano y recta perpendicular

### Enunciado

Dados $P=(1,1,1)$ y la recta

$$r:\ \frac{x-1}{1}=\frac{y-2}{2}=\frac{z-3}{2},$$

**a)** Halla el plano que contiene a $r$ y pasa por $P$.

**b)** Halla la recta que pasa por $P$ y corta perpendicularmente a $r$.

### Solución

La recta $r$ pasa por $Q=(1,2,3)$ y tiene vector director $v=(1,2,2)$. Para construir el plano necesitamos otro vector contenido en él:

$$\overrightarrow{PQ}=Q-P=(0,1,2).$$

Un vector normal es $v\times\overrightarrow{PQ}=(2,-2,1)$. Usando $P$, el plano queda

$$2(x-1)-2(y-1)+(z-1)=0,$$

es decir,

$$\boxed{2x-2y+z-1=0}.$$

Para encontrar la perpendicular, buscamos primero su pie $H$ sobre $r$. El plano perpendicular a $r$ que pasa por $P$ tiene normal $v$:

$$x+2y+2z-5=0.$$

Parametrizamos $r$ como $(x,y,z)=(1+t,2+2t,3+2t)$ y lo metemos en ese plano:

$$1+t+2(2+2t)+2(3+2t)-5=0\Longrightarrow9t+6=0,$$

por lo que $t=-2/3$ y

$$H=\left(\frac13,\frac23,\frac53\right).$$

El vector $\overrightarrow{PH}=(-2/3,-1/3,2/3)$ es proporcional a $(2,1,-2)$. Por tanto, una ecuación de la recta pedida es

$$\boxed{(x,y,z)=(1,1,1)+\lambda(2,1,-2)}.$$

## Ejercicio 6 · Reconstruir una función desde $f''$

### Enunciado

Encuentra la función que verifica

$$f''(x)=e^{x-1}-\frac1x,\qquad x>0,$$

y pasa por los puntos $(2,e-2-2\ln2)$ y $(1,0)$.

### Solución

Integramos una vez:

$$f'(x)=e^{x-1}-\ln x+A.$$

Integramos de nuevo. Como $\int\ln x\,dx=x\ln x-x$, obtenemos

$$f(x)=e^{x-1}-x\ln x+(A+1)x+B.$$

Imponemos $f(1)=0$:

$$1+0+(A+1)+B=0\quad\Longrightarrow\quad A+B=-2.$$

Con $f(2)=e-2-2\ln2$:

$$e-2\ln2+2(A+1)+B=e-2-2\ln2,$$

así que $2A+B=-4$. Al restar las dos ecuaciones resulta $A=-2$ y entonces $B=0$. Finalmente,

$$\boxed{f(x)=e^{x-1}-x\ln x-x}.$$

## Ejercicio 7 · Probabilidad con una tabla

### Enunciado

En una inspección se obtuvieron estos resultados:

|          |  Coches |   Motos |
| -------- | ------: | ------: |
| Aptos    | 116 383 | 160 667 |
| No aptos |   2 679 |   3 447 |

Se elige un vehículo al azar.

**a)** Calcula la probabilidad de que sea una moto o haya resultado apto.

**b)** Sabiendo que es un coche, calcula la probabilidad de que no sea apto.

### Solución

Los totales son 119 062 coches, 164 114 motos y 283 176 vehículos. Para el apartado a), «moto o apto» incluye todas las motos y los coches aptos; no contamos dos veces las motos aptas porque ya están dentro del grupo de motos:

$$
P(\text{moto}\cup\text{apto})=\frac{164114+116383}{283176}
=\boxed{\frac{4921}{4968}\approx0{,}9905}.
$$

Al condicionar a que el vehículo es un coche, solo miramos la columna de coches. De esos 119 062 coches, 2 679 no fueron aptos:

$$
P(\text{no apto}\mid\text{coche})=\frac{2679}{119062}
=\boxed{\approx0{,}0225}.
$$

## Cómo aprovechar este examen

Antes de repetirlo, anota qué apartado te hizo detenerte: límite, estudio de función, geometría, integral o probabilidad. Practicar con ese diagnóstico es más efectivo que limitarse a comprobar el resultado final.

Si quieres una planificación con ejercicios graduados, explicaciones y seguimiento, puedes trabajar estos bloques en el [Campus de Método Nebula](/campus/).
