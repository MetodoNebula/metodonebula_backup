---
title: Matemáticas II · PAU 2026 · Principado de Asturias — examen resuelto
seoTitle: Matemáticas II · PAU 2026 · Principado de Asturias — examen resuelto
date: 2026-10-14
updated: 2026-11-05
description: Examen Matemáticas II · PAU 2026 · Principado de Asturias resuelto paso a paso con planteamientos, cálculos y comprobaciones para preparar la Selectividad.
tag: Matemáticas II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: como-preparar-pau-matematicas-ii,pau-matematicas-matrices-determinantes-gauss,pau-matematicas-integrales-areas
image: /favicon.svg
---

Este examen resuelto conserva el enunciado y desarrolla cada apartado. Úsalo primero a contrarreloj y compáralo después con el razonamiento, no solo con el resultado final.

**Convocatoria:** ordinaria. **Examen:** hay cinco preguntas, cada una con opciones A y B. Se responden cuatro preguntas y, en cada una, se escoge solo una opción.

## Ejercicio 1A · compras en una cafetería

### Enunciado

Una persona va tres días a una cafetería. El primero compra **1 café, 2 tés y 2 zumos** por 11 €. El segundo pide **1 café, 3 tés y 3 zumos** y paga 16 €. El tercer día compra **3 cafés, 3 tés y cierta cantidad de zumos**, con un total exacto de 21 €.

**a) (1,5 puntos)** Construye un sistema que permita calcular el precio de cada bebida. Llama $p$ al número de zumos del tercer día y estudia el sistema según el valor de $p$.

**b) (0,5 puntos)** El camarero dice que con esos 21 € se han comprado dos zumos. El cliente responde que eso no puede ser correcto. ¿Quién tiene razón?

**c) (0,5 puntos)** Si finalmente se confirma que el tercer día fueron cuatro zumos, ¿cuál es el precio de cada bebida?

### Solución

**a) Empezamos dando nombre a los precios.** Sea $x$ el precio de un café, $y$ el de un té y $z$ el de un zumo, todos en euros. Las tres compras se expresan mediante

$$
\begin{cases}
x+2y+2z=11,\\
x+3y+3z=16,\\
3x+3y+pz=21.
\end{cases}
$$

Aplicamos eliminación de Gauss a la matriz ampliada:

$$
\left[\begin{array}{ccc|c}
1&2&2&11\\
1&3&3&16\\
3&3&p&21
\end{array}\right]
\xrightarrow{\substack{F_2\leftarrow F_2-F_1\\F_3\leftarrow F_3-3F_1}}
\left[\begin{array}{ccc|c}
1&2&2&11\\
0&1&1&5\\
0&-3&p-6&-12
\end{array}\right]
\xrightarrow{F_3\leftarrow F_3+3F_2}
\left[\begin{array}{ccc|c}
1&2&2&11\\
0&1&1&5\\
0&0&p-3&3
\end{array}\right].
$$

La última fila representa $(p-3)z=3$. Por tanto:

- Si $p\neq3$, hay **una solución única**.
- Si $p=3$, quedaría $0=3$, que es imposible. En ese caso, **no existe solución**.

**b) Probamos con $p=2$.** La última ecuación de la matriz escalonada da

$$-z=3\quad\Longrightarrow\quad z=-3.$$

Un zumo no puede tener un precio negativo. Por tanto, **el cliente tiene razón**: dos zumos no encajan con las condiciones de la compra.

**c) Ahora tomamos $p=4$.** De la última fila obtenemos $z=3$. Después, la segunda fila da $y+3=5$, luego $y=2$. Por último,

$$x+2\cdot2+2\cdot3=11\quad\Longrightarrow\quad x=1.$$

$$\boxed{\text{Café: }1,\quad\text{té: }2,\quad\text{zumo: }3}$$

Los tres precios están expresados en euros.

## Ejercicio 1B · matrices con un parámetro

### Enunciado

Considera la matriz

$$A=\begin{pmatrix}-1&2&-2\\0&3&-4\\a&2&-3\end{pmatrix},\qquad a\in\mathbb R.$$

**a) (1 punto)** Encuentra los valores de $a$ para los que $A^2=I$, donde $I$ es la identidad de orden 3.

**b) (0,5 puntos)** Otra matriz $B$ de tamaño $3\times3$ verifica $B^2=2I$. ¿Qué valores puede tener $\det B$?

**c) (1 punto)** Calcula el determinante y el rango de $A$ según $a$.

### Solución

**a) Multiplicamos la matriz por sí misma.**

$$
A^2=\begin{pmatrix}
1-2a&0&0\\
-4a&1&0\\
-4a&2a&1-2a
\end{pmatrix}.
$$

Para que sea la identidad, todos los elementos que dependen de $a$ deben coincidir con los de $I$. Se cumple precisamente cuando

$$\boxed{a=0}.$$

**b) Usamos los determinantes.**

$$\det(B^2)=\det(2I)=2^3=8.$$

Como $\det(B^2)=(\det B)^2$, tenemos

$$(\det B)^2=8\quad\Longrightarrow\quad\boxed{\det B=\pm2\sqrt2}.$$

**c) Calculamos el determinante de $A$.**

$$\boxed{\det A=1-2a}.$$

Si $a\neq\tfrac12$, el determinante no se anula, de modo que $\operatorname{rg}(A)=3$. Si $a=\tfrac12$, el determinante es cero, pero existe un menor de orden 2 no nulo:

$$\begin{vmatrix}-1&2\\0&3\end{vmatrix}=-3\neq0.$$

Así que

$$\boxed{\operatorname{rg}(A)=\begin{cases}3,&a\neq\frac12,\\2,&a=\frac12.\end{cases}}$$

## Ejercicio 2A · evolución de una acción

### Enunciado

Una empresa empieza a cotizar en bolsa con sus acciones a **5 €**. Durante los primeros 30 días, su precio se puede aproximar por

$$f(t)=\frac{5t^2+2t+5}{t^2+1},\qquad t\in[0,30],$$

donde $t$ es el número de días desde que empezó a cotizar.

**a) (1 punto)** La empresa tiene como objetivo que la acción llegue a valer 6,50 €. ¿Lo conseguirá durante ese primer mes?

**b) (0,75 puntos)** Estudia cuándo sube y cuándo baja el precio.

**c) (0,75 puntos)** Si el modelo siguiera funcionando indefinidamente, ¿hacia qué precio tendería la acción?

### Solución

**a) Buscamos el precio máximo.** Reescribimos la función y calculamos la derivada:

$$f(t)=5+\frac{2t}{t^2+1},\qquad f'(t)=\frac{2(1-t^2)}{(t^2+1)^2}.$$

La derivada se anula para $t=\pm1$, pero solo $t=1$ pertenece al intervalo. La segunda derivada es

$$f''(t)=\frac{4t(t^2-3)}{(t^2+1)^3},\qquad f''(1)=-1<0.$$

Por tanto, en $t=1$ hay un máximo y $f(1)=6$. Los extremos del intervalo tampoco superan ese valor: $f(0)=5$ y $f(30)=4565/901\approx5{,}0666$.

$$\boxed{\text{No: el valor máximo de la acción es }6.}$$

La cifra está expresada en euros.

**b) Analizamos el signo de la derivada.** Para $0\leq t<1$, $1-t^2>0$, así que $f$ crece. Para $1<t\leq30$, $1-t^2<0$ y la función decrece. En resumen, **sube durante el primer día y baja a partir de entonces**.

**c) Calculamos el límite a largo plazo.**

$$\lim_{t\to+\infty}\frac{5t^2+2t+5}{t^2+1}=\boxed{5}.$$

Si mantuviéramos el mismo modelo, el precio se acercaría a **5 € por acción**.

## Ejercicio 2B · función definida a trozos

### Enunciado

Sea la función

$$
f(x)=\begin{cases}
x^2-Ax+11,&x<2,\\
\sqrt{5x-1},&x\geq2.
\end{cases}
$$

**a) (0,75 puntos)** Calcula $A$ para que la función sea continua.

**b) (1,25 puntos)** Para $A=6$, indica en qué intervalos crece o decrece.

**c) (0,5 puntos)** Con $A=6$, ¿hay un máximo o mínimo relativo en $x=2$?

### Solución

**a) Igualamos los dos tramos en el punto de unión.**

$$\lim_{x\to2^-}f(x)=2^2-2A+11=15-2A.$$

Por la derecha, y también en el propio punto, tenemos

$$f(2)=\sqrt{5\cdot2-1}=3.$$

Para garantizar la continuidad pedimos $15-2A=3$. De aquí,

$$\boxed{A=6}.$$

**b) Derivamos por separado.** Cuando $x<2$,

$$f'(x)=2x-6<0,$$

porque en ese intervalo siempre $x<2<3$. La función es **decreciente** a la izquierda de 2.

Cuando $x>2$,

$$f'(x)=\frac5{2\sqrt{5x-1}}>0.$$

Por tanto, la función es **creciente** a la derecha de 2.

**c) Interpretamos el cambio de comportamiento.** La gráfica baja hasta $x=2$ y después sube. Eso significa que allí hay un **mínimo relativo**, cuyo valor es

$$\boxed{f(2)=3}.$$

## Ejercicio 3A · primitivas y áreas

### Enunciado

Sabemos que

$$F(x)=\frac12\sin\left(\frac\pi2x^2\right)$$

es una primitiva de otra función $f$.

**a) (1 punto)** Encuentra la expresión de $f$.

**b) (0,75 puntos)** Busca otra primitiva de $f$ que valga 6 cuando $x=0$.

**c) (0,75 puntos)** Calcula el área comprendida entre la gráfica de $f$, el eje $OX$ y las rectas $x=0$ y $x=1$.

### Solución

**a) Derivamos la primitiva que nos han dado.** Aplicamos la regla de la cadena:

$$
f(x)=F'(x)=\frac12\cos\left(\frac\pi2x^2\right)\cdot\pi x
=\boxed{\frac{\pi x}{2}\cos\left(\frac\pi2x^2\right)}.
$$

**b) Añadimos una constante de integración.** Cualquier otra primitiva tiene la forma

$$G(x)=\frac12\sin\left(\frac\pi2x^2\right)+C.$$

Como $G(0)=6$ y $\sin0=0$, obtenemos $C=6$. Por tanto,

$$\boxed{G(x)=\frac12\sin\left(\frac\pi2x^2\right)+6}.$$

**c) Comprobamos el signo antes de integrar.** En $0\leq x\leq1$, $x\geq0$ y el coseno del ángulo $\frac\pi2x^2\in[0,\pi/2]$ no es negativo. Por tanto, el área coincide con la integral:

$$
A=\int_0^1 f(x)\,dx=F(1)-F(0)
=\frac12\sin\frac\pi2-\frac12\sin0
=\boxed{\frac12\ \text{u}^2}.
$$

## Ejercicio 3B · una función racional

### Enunciado

Trabajamos con la función

$$f(x)=\frac{x-2}{x^2+1}.$$

**a) (1,25 puntos)** Calcula una primitiva de $f$.

**b) (1,25 puntos)** Encuentra el área comprendida entre su gráfica, el eje horizontal y las rectas $x=0$ y $x=1$.

### Solución

**a) Separamos la fracción en dos partes sencillas de integrar.**

$$
\int\frac{x-2}{x^2+1}\,dx
=\int\frac{x}{x^2+1}\,dx-2\int\frac1{x^2+1}\,dx.
$$

Recordamos que la derivada de $\ln(x^2+1)$ contiene $2x$ y que la derivada de $\arctan x$ es $1/(1+x^2)$. Así,

$$\boxed{F(x)=\frac12\ln(x^2+1)-2\arctan(x)+C}.$$

**b) Tenemos en cuenta que la gráfica está por debajo del eje.** Para $0\leq x\leq1$, $x-2<0$, mientras que el denominador es positivo. El área se calcula cambiando el signo de la integral:

$$
\begin{aligned}
A&=-\int_0^1\frac{x-2}{x^2+1}\,dx\\
&=-\left[\frac12\ln(x^2+1)-2\arctan x\right]_0^1\\
&=-\left(\frac12\ln2-\frac\pi2\right).
\end{aligned}
$$

Por tanto,

$$\boxed{A=\frac\pi2-\frac12\ln2\approx1{,}2242\ \text{u}^2}.$$

## Ejercicio 4A · una recta y un plano

### Enunciado

Dado el plano $\pi:x+2y+3z=6$ y el punto $P=(0,-1,-2)$:

**a) (1,25 puntos)** Escribe una recta que pase por $P$ y sea paralela al plano. ¿Es la única posible?

**b) (1,25 puntos)** Encuentra el punto $Q$ del plano que está más cerca de $P$ y calcula la distancia entre ambos.

### Solución

**a) Elegimos un vector paralelo al plano.** El vector normal de $\pi$ es $n=(1,2,3)$. Un vector director $v$ de una recta paralela al plano debe cumplir $n\cdot v=0$. Por ejemplo,

$$v=(2,2,-2),\qquad (1,2,3)\cdot(2,2,-2)=2+4-6=0.$$

Con este vector y el punto $P$, obtenemos

$$\boxed{r:(x,y,z)=(0,-1,-2)+\lambda(2,2,-2),\quad\lambda\in\mathbb R}.$$

**No es única:** hay infinitos vectores no nulos perpendiculares a $n$ y, por tanto, infinitas rectas posibles que pasan por $P$ y son paralelas a $\pi$.

**b) Buscamos la proyección ortogonal de $P$ sobre el plano.** La recta perpendicular al plano que pasa por $P$ tiene dirección $n$:

$$s:(x,y,z)=(0,-1,-2)+\lambda(1,2,3).$$

Un punto cualquiera de $s$ tiene coordenadas $(\lambda,-1+2\lambda,-2+3\lambda)$. Lo sustituimos en el plano:

$$
\lambda+2(-1+2\lambda)+3(-2+3\lambda)=6
\quad\Longrightarrow\quad14\lambda=14
\quad\Longrightarrow\quad\lambda=1.
$$

Por tanto, el pie de la perpendicular es $\boxed{Q=(1,1,1)}$. La distancia vale

$$\boxed{d(P,Q)=\sqrt{(1-0)^2+(1+1)^2+(1+2)^2}=\sqrt{14}\approx3{,}74}.$$

## Ejercicio 4B · un cambio de dirección

### Enunciado

Un vehículo se mueve en línea recta desde $P=(2,1,3)$ hacia $Q=(0,-1,1)$. Cuando ha recorrido la **mitad del trayecto**, gira y sigue una nueva recta que pasa por $H=(1,1,1)$.

**a) (0,5 puntos)** Localiza el punto donde gira.

**b) (0,75 puntos)** Escribe la recta por la que continúa después del giro.

**c) (0,75 puntos)** Calcula el ángulo formado por la dirección anterior y la nueva.

### Solución

**a) Hallamos el punto medio del segmento $PQ$.**

$$
M=\frac{P+Q}{2}
=\left(\frac{2+0}{2},\frac{1-1}{2},\frac{3+1}{2}\right)
=\boxed{(1,0,2)}.
$$

**b) Construimos la nueva recta.** Esta pasa por $M=(1,0,2)$ y $H=(1,1,1)$. Un vector director es

$$\overrightarrow{MH}=H-M=(0,1,-1).$$

En forma vectorial,

$$\boxed{r:(x,y,z)=(1,0,2)+\lambda(0,1,-1)}.$$

**c) Comparamos las dos direcciones.** Antes del giro el vector de movimiento es

$$u=Q-P=(-2,-2,-2),$$

y después, $w=(0,1,-1)$. Calculamos el producto escalar:

$$u\cdot w=(-2)\cdot0+(-2)\cdot1+(-2)\cdot(-1)=0.$$

Al ser ambos vectores no nulos y tener producto escalar cero, son perpendiculares. Por tanto,

$$\boxed{\alpha=90^\circ=\frac\pi2\ \text{radianes}}.$$

## Ejercicio 5A · defectos en una fábrica

### Enunciado

Una fábrica de vaqueros realiza dos controles de calidad: uno comprueba el largo de los pantalones y otro revisa las costuras. El **10 %** de las prendas falla el control de longitud, el **5 %** falla el de costuras y el **0,8 %** falla ambos.

**a) (1,25 puntos)** Si escogemos unos pantalones al azar, ¿qué probabilidad hay de que fallen **al menos uno** de los dos controles?

**b) (1,25 puntos)** Si sabemos que han fallado el control de longitud, ¿qué probabilidad hay de que también fallen el de costuras?

### Solución

Llamemos $L$ al suceso «falla la longitud» y $C$ a «fallan las costuras». Nos dan

$$P(L)=0{,}10,\qquad P(C)=0{,}05,\qquad P(L\cap C)=0{,}008.$$

**a) Sumamos las dos probabilidades y restamos la intersección**, que se habría contado dos veces:

$$
P(L\cup C)=P(L)+P(C)-P(L\cap C)
=0{,}10+0{,}05-0{,}008
=\boxed{0{,}142}.
$$

Es decir, una probabilidad del **14,2 %**.

**b) Aplicamos la probabilidad condicionada.**

$$
P(C\mid L)=\frac{P(C\cap L)}{P(L)}
=\frac{0{,}008}{0{,}10}
=\boxed{0{,}08}.
$$

Por tanto, si el pantalón falla por longitud, la probabilidad de que también falle por costuras es del **8 %**.

## Ejercicio 5B · carga máxima de una grúa

### Enunciado

Una grúa dispone de un sistema de seguridad que se activa si intenta levantar una caja de **más de 40 kg**. El peso de las cajas sigue una distribución normal con media **38 kg** y desviación típica **1,2 kg**:

$$X\sim N(38,1{,}2).$$

**a) (1,25 puntos)** Calcula la probabilidad de que la alarma salte al levantar una caja elegida al azar.

**b) (1,25 puntos)** Si la grúa levanta diez cajas, una tras otra, y sus pesos son independientes, ¿qué probabilidad hay de que salte la alarma **al menos una vez**?

### Solución

**a) Tipificamos el peso.** Buscamos $P(X>40)$. Para una normal no importa si usamos $>$ o $\geq$, ya que la probabilidad de un valor exacto es cero. Definimos

$$Z=\frac{X-38}{1{,}2}\sim N(0,1).$$

Entonces,

$$P(X>40)=P\left(Z>\frac{40-38}{1{,}2}\right)=P(Z>1{,}6667).$$

Con el valor de tabla $P(Z\leq1{,}6667)\approx0{,}9520$,

$$\boxed{P(X>40)=1-0{,}9520=0{,}0480}.$$

Es una probabilidad del **4,8 %**.

**b) Usamos el suceso contrario.** Sea $Y$ el número de alarmas que saltan durante los diez levantamientos. Suponiendo independencia,

$$Y\sim B(10,0{,}048).$$

Es más fácil calcular que **no salte ninguna** y restarlo de 1:

$$
\begin{aligned}
P(Y\geq1)&=1-P(Y=0)\\
&=1-\binom{10}{0}(0{,}048)^0(0{,}952)^{10}\\
&=1-(0{,}952)^{10}.
\end{aligned}
$$

Por tanto,

$$\boxed{P(Y\geq1)\approx0{,}3885}.$$

La probabilidad de que la alarma salte al menos una vez es aproximadamente del **38,85 %**.

## Cómo usar este examen para preparar la PAU

Haz una primera vuelta sin consultar la solución. Al corregir, señala el primer paso que no supiste justificar y repítelo al día siguiente. Así conviertes un modelo de examen en una lista concreta de técnicas que debes entrenar.

Si quieres trabajar estos bloques con una ruta de práctica, explicaciones y seguimiento, tienes el [Campus de Método Nebula](/campus/).
