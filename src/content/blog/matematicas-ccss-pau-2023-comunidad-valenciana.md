---
title: Matemáticas Aplicadas a las CCSS II · PAU 2023 · Comunidad Valenciana — examen resuelto
seoTitle: PAU Matemáticas Aplicadas a las CCSS II Comunidad Valenciana 2023 resuelta
date: 2023-06-01
updated: 2026-11-05
description: Examen resuelto de Matemáticas Aplicadas a las Ciencias Sociales II de Comunidad Valenciana 2023, con procedimientos completos.
tag: Matemáticas CCSS PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

Se dice que una matriz cuadrada $A$ es *normal* si $A^{t}A=AA^{t}$, donde $A^{t}$ es su traspuesta.

Halla el valor de $x$ para que la matriz $A=\begin{pmatrix} 2 & 1 \\ -1 & x \end{pmatrix}$ sea normal.

### Solución

Sea $A=\begin{pmatrix} 2 & 1 \\ -1 & x \end{pmatrix}$, con traspuesta $A^{t}=\begin{pmatrix} 2 & -1 \\ 1 & x \end{pmatrix}$.

Calculamos los dos productos:
$$AA^{t}=\begin{pmatrix} 5 & x-2 \\ x-2 & 1+x^2 \end{pmatrix},\qquad A^{t}A=\begin{pmatrix} 5 & 2-x \\ 2-x & 1+x^2 \end{pmatrix}.$$
Imponiendo $A^{t}A=AA^{t}$, los elementos de la diagonal ya coinciden; basta igualar el elemento no diagonal:
$$x-2=2-x\ \Rightarrow\ 2x=4\ \Rightarrow\ x=2.$$
Para $x=2$ la matriz $A=\begin{pmatrix} 2 & 1 \\ -1 & 2 \end{pmatrix}$ es normal.

## Ejercicio 2

### Enunciado

La alarma de un banco suena con probabilidad $0{,}95$ cuando hay un motivo justificado y con probabilidad $0{,}3$ cuando no lo hay. El ladrón Arsenio Lupin roba el banco (único posible motivo) con probabilidad $0{,}1$.

**(a)** Calcula la probabilidad de que robe y la alarma no suene.

**(b)** Si la alarma suena, ¿cuál es la probabilidad de que no esté robando?

**(c)** Si la alarma no ha sonado, ¿cuál es la probabilidad de que haya robado el banco?

### Solución

Sean $R=$«hay robo» y $S=$«suena la alarma». Datos: $P(R)=0{,}1$, $P(\overline{R})=0{,}9$, $P(S\mid R)=0{,}95$, $P(S\mid\overline{R})=0{,}3$.

**(a)** $P(R\cap\overline{S})=P(R)P(\overline{S}\mid R)=0{,}1\cdot(1-0{,}95)=0{,}1\cdot0{,}05=0{,}005.$

**(b)** Probabilidad de que suene: $P(S)=0{,}1\cdot0{,}95+0{,}9\cdot0{,}3=0{,}095+0{,}27=0{,}365.$ Entonces
$$P(\overline{R}\mid S)=\frac{P(\overline{R}\cap S)}{P(S)}=\frac{0{,}9\cdot0{,}3}{0{,}365}=\frac{0{,}27}{0{,}365}=0{,}7397.$$

**(c)** $P(\overline{S})=1-0{,}365=0{,}635$ y $P(R\cap\overline{S})=0{,}005$, luego
$$P(R\mid\overline{S})=\frac{0{,}005}{0{,}635}=0{,}0079.$$

## Ejercicio 3

### Enunciado

En una agencia de viajes, el $60\%$ de los clientes hace un viaje al año, el $30\%$ hace dos y el $10\%$ hace tres o más. Además, el $54\%$ de todos los clientes está casado y hace un viaje, el $14\%$ está casado y hace dos, y el $2\%$ está casado y hace tres o más.

**(a)** Si un cliente hace dos o más viajes, ¿cuál es la probabilidad de que no esté casado?

**(b)** Siendo $G=$«no estar casado» y $H=$«hacer menos de tres viajes al año», calcula $P(G\cup H)$.

**(c)** ¿Son independientes los sucesos $J=$«estar casado» y $K=$«no hacer exactamente dos viajes»? Justifica.

### Solución

**(a)** $P(\text{dos o más})=P(2)+P(3^+)=0{,}3+0{,}1=0{,}4$. Casados con dos o más: $0{,}14+0{,}02=0{,}16$. No casados con dos o más: $0{,}4-0{,}16=0{,}24$. Luego
$$P(\text{no casado}\mid \text{dos o más})=\frac{0{,}24}{0{,}4}=0{,}6.$$

**(b)** $G=$«no casado», $H=$«menos de tres viajes» (uno o dos). Por De Morgan, $\overline{G}\cap\overline{H}=$«casado y tres o más viajes», cuya probabilidad es $0{,}02$. Entonces
$$P(G\cup H)=1-P(\overline{G}\cap\overline{H})=1-0{,}02=0{,}98.$$

**(c)** $J=$«casado»: $P(J)=0{,}54+0{,}14+0{,}02=0{,}70$. $K=$«no hace exactamente dos viajes»: $P(K)=1-P(2)=1-0{,}3=0{,}7$. La intersección $J\cap K=$«casado y no hace dos viajes» $=$ casado con uno o con tres o más: $P(J\cap K)=0{,}54+0{,}02=0{,}56$. Como
$$P(J)\cdot P(K)=0{,}70\cdot0{,}7=0{,}49\neq 0{,}56=P(J\cap K),$$
los sucesos **no son independientes**.

## Ejercicio 4

### Enunciado

Para alimentar a un animal se combinan latas de dos marcas, $A$ y $B$. Cada lata de la marca $A$ cuesta $10$ € y cada lata de la marca $B$ cuesta $16$ €. La dieta diaria debe aportar unos mínimos de tres nutrientes, lo que se traduce en las restricciones $4x+2y\geq 8$, $6x+20y\geq 46$ y $x+12y\geq 12$ (con $x,y\geq0$), donde $x$ es el número de latas de la marca $A$ e $y$ el de la marca $B$.

**(a)** ¿Cómo hay que combinar ambas marcas para que el precio sea mínimo?

**(b)** ¿Cuál es ese precio mínimo?

### Solución

Función objetivo a minimizar: $F(x,y)=10x+16y$, sujeta a $4x+2y\geq8$, $6x+20y\geq46$, $x+12y\geq12$, $x,y\geq0$.

La región factible es no acotada; sus vértices (cortes de las rectas de restricción) son:
$$(0,4),\quad (1,2),\quad (6,\,0{,}5),\quad (12,0).$$
(Por ejemplo, $(1,2)$ es el corte de $4x+2y=8$ con $6x+20y=46$.)

Evaluando la función objetivo:
$$F(0,4)=64,\quad F(1,2)=10+32=42,\quad F(6,0{,}5)=68,\quad F(12,0)=120.$$
El mínimo es $42$ € en el vértice $(1,2)$. Como la región es no acotada pero buscamos el mínimo (con coeficientes positivos), la solución óptima está en ese vértice.

**(a)** La combinación óptima es **$1$ lata de la marca $A$ y $2$ latas de la marca $B$**.

**(b)** El precio mínimo es $42$ €.

## Ejercicio 5

### Enunciado

Dada la función $f(x)=\dfrac{x^2+2x-15}{2x^2-3x-2}$:

**(a)** Halla el dominio y los puntos de corte con los ejes.

**(b)** Determina las asíntotas verticales y horizontales.

**(c)** Calcula los intervalos de crecimiento y decrecimiento.

**(d)** Calcula los máximos y mínimos locales.

**(e)** Representa gráficamente la función.

### Solución

**(a)** Denominador: $2x^2-3x-2=0\Rightarrow x=2$ o $x=-\tfrac12$. Dominio: $\mathbb{R}\setminus\{-0{,}5,\ 2\}$. Cortes con OX (numerador $=0$): $x^2+2x-15=0\Rightarrow x=3,\ x=-5$, es decir $(-5,0)$ y $(3,0)$. Corte con OY: $f(0)=\dfrac{-15}{-2}=\dfrac{15}{2}$, punto $\big(0,\tfrac{15}{2}\big)$.

**(b)** Asíntotas verticales en los ceros del denominador: $x=-0{,}5$ y $x=2$. Asíntota horizontal: como numerador y denominador tienen igual grado, $y=\dfrac{1}{2}$ (cociente de coeficientes principales).

**(c)-(d)** Derivando e igualando a cero se obtienen los puntos críticos $x=1$ y $x=7$. El estudio del signo de $f'$ da: $f$ **creciente** en $]1,2[\cup]2,7[$ y **decreciente** en $]-\infty,-\tfrac12[\cup]-\tfrac12,1[\cup]7,+\infty[$. Por tanto:
- Mínimo local en $x=1$: $f(1)=\dfrac{1+2-15}{2-3-2}=\dfrac{-12}{-3}=4$.
- Máximo local en $x=7$: $f(7)=\dfrac{49+14-15}{98-21-2}=\dfrac{48}{75}=\dfrac{16}{25}$.

**(e)** Con el dominio, los cortes, las asíntotas ($x=-0{,}5$, $x=2$, $y=\tfrac12$) y los extremos (mínimo $(1,4)$, máximo $(7,\tfrac{16}{25})$) se traza la gráfica, con tres ramas separadas por las asíntotas verticales.

## Ejercicio 6

### Enunciado

Una empresa paga una cuota fija mensual de $1\,200$ € por la electricidad. Los primeros $250$ kWh cuestan $5$ € cada uno; el consumo entre $250$ y $900$ kWh cuesta $3$ € cada kWh, y el resto $2$ € cada kWh.

**(a)** ¿A cuánto asciende el recibo el mes en que la empresa consumió $400$ kWh?

**(b)** Obtén la función $f(x)$ que da el importe del recibo mensual si consume $x$ kWh y represéntala.

**(c)** Una segunda empresa, con la misma cuota fija, paga $3$ € por cada kWh. ¿Pueden ambas empresas tener el mismo consumo y el mismo importe de recibo? En caso afirmativo, indica el consumo y el importe.

### Solución

**(a)** Para $400$ kWh se usa el tramo $250<x\leq900$. El importe es $f(400)=1\,700+3\cdot400=1\,700+1\,200=2\,900$ €.

**(b)** Acumulando los costes por tramos (y asegurando continuidad en $250$ y $900$):
$$f(x)=\begin{cases} 1\,200+5x & \text{si } 0\leq x\leq 250 \\ 1\,700+3x & \text{si } 250< x\leq 900 \\ 2\,600+2x & \text{si } x>900 \end{cases}$$
(En $x=250$: $1\,200+1\,250=2\,450=1\,700+750$; en $x=900$: $1\,700+2\,700=4\,400=2\,600+1\,800$.) Su gráfica es una poligonal creciente de pendientes decrecientes $5$, $3$ y $2$.

**(c)** La segunda empresa tiene $g(x)=1\,200+3x$. Buscamos $x$ con $f(x)=g(x)$. En el tramo $x>900$:
$$2\,600+2x=1\,200+3x\Rightarrow x=1\,400\ \text{kWh}.$$
El importe es $g(1\,400)=1\,200+3\cdot1\,400=5\,400$ €. Por tanto sí: con un consumo de $1\,400$ kWh ambas pagan $5\,400$ €.
