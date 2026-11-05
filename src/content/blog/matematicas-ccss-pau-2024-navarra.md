---
title: Matemáticas Aplicadas a las CCSS II · PAU 2024 · Navarra — examen resuelto
seoTitle: PAU Matemáticas Aplicadas a las CCSS II Navarra 2024 resuelta
date: 2024-06-01
updated: 2026-11-05
description: Examen resuelto de Matemáticas Aplicadas a las Ciencias Sociales II de Navarra 2024, con procedimientos completos.
tag: Matemáticas CCSS PAU
category: Selectividad
---

## Ejercicio 1

### Enunciado

La primera derivada de una función $f$ es $f'(x)=x(x-2)^2$.

**(i)** Determine los extremos relativos y los intervalos de crecimiento y decrecimiento de $f$.
**(ii)** Determine los intervalos de concavidad y convexidad y los puntos de inflexión.
**(iii)** Determine $f(x)$ sabiendo que $f(0)=5$.

### Solución

**(i)** $f'(x)=0\Rightarrow x=0$ o $x=2$. Signo de $f'$: como $(x-2)^2\geq0$, el signo coincide con el de $x$. Así $f'<0$ en $(-\infty,0)$ y $f'>0$ en $(0,2)\cup(2,\infty)$. Por tanto $f$ **decrece en $(-\infty,0)$** y **crece en $(0,\infty)$**; en $x=0$ hay un **mínimo relativo** (en $x=2$ no hay extremo, pues $f'$ no cambia de signo).

**(ii)** Desarrollando, $f'(x)=x^3-4x^2+4x$, de modo que $f''(x)=3x^2-8x+4=0\Rightarrow x=2$ y $x=\tfrac23$. Estudiando el signo de $f''$: convexa ($\cup$) en $\left(-\infty,\tfrac23\right)$ y en $(2,\infty)$; cóncava ($\cap$) en $\left(\tfrac23,2\right)$. Hay **puntos de inflexión en $x=\tfrac23$ y $x=2$**.

**(iii)** Integrando $f'$:
$$f(x)=\int (x^3-4x^2+4x)\,dx=\frac{x^4}{4}-\frac{4x^3}{3}+2x^2+C$$
Como $f(0)=5$, se tiene $C=5$. Por tanto $f(x)=\dfrac{x^4}{4}-\dfrac{4x^3}{3}+2x^2+5$.

## Ejercicio 2

### Enunciado

Sea la función
$$f(x)=\begin{cases} -x^2-4x & \text{si } x\leq-1 \\ 4-x & \text{si } -1<x\leq1 \\ x^2-6x+8 & \text{si } x>1 \end{cases}$$

**(i)** Estudie la continuidad de $f$, clasificando sus puntos de discontinuidad.
**(ii)** Estudie la derivabilidad de $f$.
**(iii)** Calcule $\displaystyle\int_0^2 f(x)\,dx$.

### Solución

**(i)** En cada intervalo abierto $f$ es polinómica, luego continua. Estudiamos los empalmes.

En $x=-1$: $f(-1)=-(-1)^2-4(-1)=-1+4=3$; $\lim_{x\to-1^-}(-x^2-4x)=-1+4=3$; $\lim_{x\to-1^+}(4-x)=5$. Como los límites laterales son $3\neq5$, hay una **discontinuidad inevitable de salto finito** en $x=-1$.

En $x=1$: $f(1)=4-1=3$; $\lim_{x\to1^-}(4-x)=3$; $\lim_{x\to1^+}(x^2-6x+8)=3$. Coinciden con $f(1)$, luego $f$ es **continua en $x=1$**.

$f$ es continua en $\mathbb{R}\setminus\{-1\}$ con discontinuidad de salto finito en $x=-1$.

**(ii)** La derivada en cada tramo es
$$f'(x)=\begin{cases} -2x-4 & x<-1 \\ -1 & -1<x<1 \\ 2x-6 & x>1 \end{cases}$$
En $x=-1$ no es derivable (no es continua). En $x=1$: $f'(1^-)=-1$ y $f'(1^+)=2-6=-4$; como $-1\neq-4$, **no es derivable en $x=1$**. Por tanto $f$ es derivable en $\mathbb{R}\setminus\{-1,1\}$.

**(iii)** En $[0,2]$ la función cambia de expresión en $x=1$:
$$\int_0^2 f(x)\,dx=\int_0^1(4-x)\,dx+\int_1^2(x^2-6x+8)\,dx=\frac72+\frac43=\frac{29}{6}$$

## Ejercicio 3

### Enunciado

El tiempo (en días) que tardan los jóvenes de una región en encontrar trabajo relacionado con sus estudios sigue una normal de varianza $2500$ días$^2$. Una muestra da: $101, 200, 187, 69, 237, 125, 173, 235, 24, 60$.

**(i)** Calcule un intervalo de confianza al 92 % para el tiempo medio e interprételo.
**(ii)** Con la misma muestra se obtuvo otro intervalo de amplitud $68{,}62143$ días. Calcule su nivel de confianza, justificándolo.

### Solución

La varianza es $2500$, luego $\sigma=50$ días; $X\sim N(\mu,50)$. La media muestral es
$$\overline{x}=\frac{101+200+187+69+237+125+173+235+24+60}{10}=141{,}1\ \text{días}$$

**(i)** Para el 92 %: $1-\alpha=0{,}92\Rightarrow\alpha/2=0{,}04\Rightarrow z_{\alpha/2}=1{,}75$ (pues $P(Z\leq z)=0{,}96$). El error es
$$E=z_{\alpha/2}\dfrac{\sigma}{\sqrt{n}}=1{,}75\cdot\dfrac{50}{\sqrt{10}}\approx27{,}67\ \text{días}$$
Intervalo: $(141{,}1-27{,}67,\ 141{,}1+27{,}67)=(113{,}43,\ 168{,}77)$. Con un 92 % de confianza, el tiempo medio en encontrar trabajo está entre $113{,}43$ y $168{,}77$ días.

**(ii)** El error es la mitad de la amplitud: $E=\dfrac{68{,}62143}{2}=34{,}3107$ días. Despejando:
$$z_{\alpha/2}=\dfrac{E\sqrt{n}}{\sigma}=\dfrac{34{,}3107\cdot\sqrt{10}}{50}=2{,}17$$
En la tabla, $P(Z\leq2{,}17)=0{,}985\Rightarrow\alpha/2=0{,}015\Rightarrow1-\alpha=0{,}97$. El nivel de confianza es del **97 %**.

## Ejercicio 4

### Enunciado

En una encuesta a jóvenes universitarios el 40 % consulta libros en la biblioteca ($L$), el 55 % consulta vídeos con tutoriales ($T$) y el 15 % consulta ambos formatos.

**(i)** Probabilidad de que consulte alguno de los dos formatos.
**(ii)** Probabilidad de que consulte solamente uno de los dos formatos.
**(iii)** Sabiendo que no consulta vídeos, probabilidad de que tampoco consulte libros.

### Solución

**(i)** $P(L\cup T)=P(L)+P(T)-P(L\cap T)=0{,}40+0{,}55-0{,}15=0{,}80$.

**(ii)** "Solo uno" = $P(L\cap T^c)+P(L^c\cap T)=(0{,}40-0{,}15)+(0{,}55-0{,}15)=0{,}25+0{,}40=0{,}65$.

**(iii)** $P(L^c\,|\,T^c)=\dfrac{P(L^c\cap T^c)}{P(T^c)}$. Como $P(L^c\cap T^c)=1-P(L\cup T)=1-0{,}80=0{,}20$ y $P(T^c)=1-0{,}55=0{,}45$:
$$P(L^c\,|\,T^c)=\dfrac{0{,}20}{0{,}45}=\dfrac{4}{9}\approx0{,}4444$$

## Ejercicio 5

### Enunciado

Una empresa recibe disolvente de dos distribuidores D1 y D2. D2 tiene capacidad diaria de 20 litros y D1 el triple (60 litros). La empresa necesita al menos 50 litros al día y quiere recibir al menos 30 litros diarios más de D1 que de D2. Coste: D1 $0{,}8$ €/litro, D2 $1$ €/litro. Emisiones tóxicas: D1 $0{,}06$ mg/litro, D2 $0{,}02$ mg/litro. Se desea minimizar la contaminación sin gastar más de 80 € diarios.

**(i)** Plantee el problema.
**(ii)** Resuélvalo gráficamente e interprete la solución.
**(iii)** Analice qué ocurriría si no se quisiera gastar más de 30 € diarios.

### Solución

**(i)** Minimizar $C(x,y)=0{,}06x+0{,}02y$ sujeto a
$$\begin{cases} 4x+5y\leq400 \\ x\leq60,\ y\leq20 \\ x+y\geq50 \\ x\geq y+30 \\ x,y\geq0 \end{cases}$$

**(ii)** Los vértices de la región factible y el valor de $C$ son:
$$A(40,10):\ 2{,}6;\quad B(50,20):\ 3{,}4;\quad C(60,20):\ 4;\quad D(60,0):\ 3{,}6;\quad E(50,0):\ 3$$
(El vértice $A$ es la intersección de $x=y+30$ y $x+y=50$.) El mínimo es $C(A)=2{,}6$ mg/litro. Enviando **40 litros diarios de D1 y 10 de D2** la contaminación es mínima, igual a $2{,}6$ mg/litro.

**(iii)** Con la nueva condición el coste sería $0{,}8x+y\leq30\Rightarrow4x+5y\leq150$. No existe ningún punto del primer cuadrante que cumpla a la vez $x+y\geq50$ y $4x+5y\leq150$ (la primera obliga a cantidades grandes que exceden el presupuesto). La región factible es vacía: el problema no tiene solución, las condiciones son incompatibles.

## Ejercicio 6

### Enunciado

Una empresa de deportes de montaña vende sesiones individuales de senderismo, rápel y ciclismo de montaña. Un día concreto vende un total de 45 sesiones. Los precios por sesión y persona son 40 €, 20 € y 60 € respectivamente, recaudando 1700 € ese día. Si por cada persona que elige rápel hay tres que eligen senderismo, ¿cuántas personas han realizado cada actividad?

**(i)** Plantee el sistema de ecuaciones lineales.
**(ii)** Resuelva el sistema e interprete la solución.

### Solución

**(i)** Sean $s$ las sesiones de senderismo, $r$ las de rápel y $c$ las de ciclismo.
$$\begin{cases} s+r+c=45 \\ 40s+20r+60c=1700 \\ s=3r \end{cases}\ \Longrightarrow\ \begin{cases} s+r+c=45 \\ 2s+r+3c=85 \\ s=3r \end{cases}$$
(la segunda ecuación se simplifica dividiendo entre 20).

**(ii)** Sustituyendo $s=3r$ en las dos primeras:
$$4r+c=45,\qquad 7r+3c=85$$
De la primera $c=45-4r$; sustituyendo en la segunda: $7r+3(45-4r)=85\Rightarrow -5r=-50\Rightarrow r=10$. Entonces $s=30$ y $c=45-40=5$.

Interpretación: **30 personas hicieron senderismo, 10 rápel y 5 ciclismo de montaña**.
