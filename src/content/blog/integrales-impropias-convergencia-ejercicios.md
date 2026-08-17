---
title: Integrales impropias: convergencia y ejercicios resueltos
date: 2026-08-15
updated: 2026-08-15
description: Aprende a clasificar integrales impropias, plantear los límites correctos y decidir su convergencia con criterios y ejercicios resueltos.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: teorema-fundamental-calculo-ejemplos-ejercicios,integrales-funciones-racionales-fracciones-parciales,metodos-de-integracion-como-elegir
image: /favicon.svg
---

Una integral impropia aparece cuando el intervalo es infinito o cuando el integrando se hace infinito en algún punto del intervalo. No se calcula sustituyendo $\infty$ en una primitiva: primero se reemplaza el problema por uno o varios límites y después se decide si esos límites existen y son finitos.

Si el límite es finito, la integral **converge**. Si no existe o es infinito, **diverge**.

## Por qué no es una integral definida ordinaria

El [teorema fundamental del cálculo](/blog/teorema-fundamental-calculo-ejemplos-ejercicios/) se aplica directamente a funciones continuas en intervalos cerrados y acotados. En una integral impropia falla al menos una de esas condiciones:

- el intervalo no está acotado, como $[1,\infty)$;
- la función no está acotada cerca de un extremo;
- existe una singularidad dentro del intervalo.

La notación

$$
\int_1^\infty f(x)dx
$$

es una abreviatura de un límite. El símbolo $\infty$ no es un número real ni un extremo en el que podamos evaluar una función.

## Tipo I: intervalos infinitos

Para una función continua en $[a,\infty)$ se define

$$
\int_a^\infty f(x)dx
=\lim_{b\to\infty}\int_a^b f(x)dx.
$$

La integral converge si el límite existe y es finito. De forma análoga,

$$
\int_{-\infty}^b f(x)dx
=\lim_{a\to-\infty}\int_a^b f(x)dx.
$$

Si ambos extremos son infinitos, se elige un punto real $c$ y se separa:

$$
\int_{-\infty}^{\infty}f(x)dx
=\int_{-\infty}^{c}f(x)dx
+\int_c^{\infty}f(x)dx.
$$

Las dos integrales deben converger por separado. No está permitido imponer límites simétricos y confiar en que dos divergencias se cancelen.

### Ejemplo 1 — potencia convergente en infinito

Estudia

$$
\int_1^\infty\frac1{x^2}dx.
$$

Sustituimos el extremo infinito por $b$:

$$
\begin{aligned}
\int_1^\infty\frac1{x^2}dx
&=\lim_{b\to\infty}\int_1^b x^{-2}dx\\
&=\lim_{b\to\infty}\left[-\frac1x\right]_1^b\\
&=\lim_{b\to\infty}\left(1-\frac1b\right)=1.
\end{aligned}
$$

La integral converge y su valor es $1$. Aunque el intervalo tenga longitud infinita, la altura decrece con suficiente rapidez.

### Ejemplo 2 — la integral armónica diverge

Considera

$$
\int_1^\infty\frac1x dx.
$$

El planteamiento correcto es

$$
\lim_{b\to\infty}[\ln x]_1^b
=\lim_{b\to\infty}\ln b.
$$

El límite es $+\infty$, luego

$$
\boxed{\int_1^\infty\frac1x dx\text{ diverge}.}
$$

Que $1/x$ tienda a cero no basta. La función decrece demasiado despacio y la acumulación sigue creciendo sin cota.

### Ejemplo 3 — decrecimiento exponencial

Calcula

$$
\int_0^\infty e^{-3x}dx.
$$

$$
\begin{aligned}
\int_0^\infty e^{-3x}dx
&=\lim_{b\to\infty}\left[-\frac13e^{-3x}\right]_0^b\\
&=\lim_{b\to\infty}\left(\frac13-\frac13e^{-3b}\right)\\
&=\frac13.
\end{aligned}
$$

La exponencial tiende a cero más rápido que cualquier potencia inversa, por lo que muchas integrales con decaimiento exponencial convergen.

## Tipo II: integrando no acotado

Si $f$ es continua en $(a,b]$ pero se hace infinita al acercarse a $a$ por la derecha, definimos

$$
\int_a^b f(x)dx
=\lim_{c\to a^+}\int_c^b f(x)dx.
$$

Si la singularidad está en el extremo derecho,

$$
\int_a^b f(x)dx
=\lim_{c\to b^-}\int_a^c f(x)dx.
$$

Una singularidad interior $c\in(a,b)$ obliga a separar la integral:

$$
\int_a^b f(x)dx
=\int_a^c f(x)dx+\int_c^b f(x)dx.
$$

Cada término se define con su propio límite lateral y ambos deben converger.

### Ejemplo 4 — singularidad integrable en un extremo

Estudia

$$
\int_0^1\frac1{\sqrt{x}}dx.
$$

La función no está definida en $x=0$. Planteamos

$$
\begin{aligned}
\int_0^1x^{-1/2}dx
&=\lim_{c\to0^+}\int_c^1x^{-1/2}dx\\
&=\lim_{c\to0^+}[2\sqrt{x}]_c^1\\
&=\lim_{c\to0^+}(2-2\sqrt c)=2.
\end{aligned}
$$

La altura se hace infinita, pero el área acumulada cerca del cero sigue siendo finita.

### Ejemplo 5 — singularidad demasiado fuerte

Para

$$
\int_0^1\frac1{x^{3/2}}dx
$$

obtenemos

$$
\begin{aligned}
\lim_{c\to0^+}\int_c^1x^{-3/2}dx
&=\lim_{c\to0^+}[-2x^{-1/2}]_c^1\\
&=\lim_{c\to0^+}\left(-2+\frac2{\sqrt c}\right)=+\infty.
\end{aligned}
$$

Por tanto, diverge. Comparar este resultado con el ejemplo anterior muestra que no toda asíntota vertical produce el mismo comportamiento.

### Ejemplo 6 — singularidad interior

Estudia

$$
\int_0^2\frac{dx}{(x-1)^2}.
$$

Hay una singularidad en $x=1$. Debemos separar:

$$
\int_0^1\frac{dx}{(x-1)^2}
+\int_1^2\frac{dx}{(x-1)^2}.
$$

Ya en el lado izquierdo,

$$
\begin{aligned}
\lim_{c\to1^-}\int_0^c(x-1)^{-2}dx
&=\lim_{c\to1^-}\left[-\frac1{x-1}\right]_0^c\\
&=\lim_{c\to1^-}\left(-\frac1{c-1}-1\right)=+\infty.
\end{aligned}
$$

La integral diverge. No hace falta calcular el otro lado para decidirlo, aunque también diverge.

## Integrales p: los dos modelos que hay que dominar

Las potencias permiten clasificar muchas integrales por comparación.

### En infinito

$$
\int_1^\infty\frac1{x^p}dx
\begin{cases}
\text{converge},&p>1,\\
\text{diverge},&p\leq1.
\end{cases}
$$

Si $p>1$, su valor es

$$
\int_1^\infty x^{-p}dx=\frac1{p-1}.
$$

### Cerca de cero

$$
\int_0^1\frac1{x^p}dx
\begin{cases}
\text{converge},&p<1,\\
\text{diverge},&p\geq1.
\end{cases}
$$

Si $p<1$, su valor es $1/(1-p)$. Los criterios parecen opuestos porque describen zonas distintas: en infinito interesa que la función decrezca rápido; cerca de cero interesa que la singularidad no crezca demasiado.

| Modelo | Converge cuando | Caso frontera |
|---|---:|---|
| $\int_1^\infty x^{-p}dx$ | $p>1$ | $p=1$ diverge |
| $\int_0^1 x^{-p}dx$ | $p<1$ | $p=1$ diverge |

## Integrales con dos causas de impropiedad

Una misma integral puede tener extremos infinitos y singularidades. Hay que cortar en todos los puntos problemáticos.

### Ejemplo 7 — toda la recta real

Calcula

$$
\int_{-\infty}^{\infty}e^{-|x|}dx.
$$

El valor absoluto cambia de fórmula en cero y ambos extremos son infinitos:

$$
\int_{-\infty}^{0}e^x dx
+\int_0^\infty e^{-x}dx.
$$

Cada integral converge:

$$
\int_{-\infty}^{0}e^x dx=1,
\qquad
\int_0^\infty e^{-x}dx=1.
$$

Por tanto,

$$
\boxed{\int_{-\infty}^{\infty}e^{-|x|}dx=2}.
$$

La simetría permite anticipar que ambas contribuciones son iguales, pero la definición exige que existan por separado.

### Ejemplo 8 — singularidad interior integrable

Calcula

$$
\int_0^2\frac{dx}{\sqrt{|x-1|}}.
$$

La singularidad está en $x=1$. Separamos y usamos simetría:

$$
\begin{aligned}
\int_0^2\frac{dx}{\sqrt{|x-1|}}
&=\int_0^1\frac{dx}{\sqrt{1-x}}
+\int_1^2\frac{dx}{\sqrt{x-1}}\\
&=2+2=4.
\end{aligned}
$$

Ambos límites laterales son finitos, así que la integral converge pese a que el integrando sea no acotado en el centro.

## Criterio de comparación directa

Supongamos que $0\leq f(x)\leq g(x)$ para $x$ suficientemente grande.

- Si $\int_a^\infty g(x)dx$ converge, entonces $\int_a^\infty f(x)dx$ también converge.
- Si $\int_a^\infty f(x)dx$ diverge, entonces $\int_a^\infty g(x)dx$ también diverge.

La dirección importa. Una función menor que una función divergente puede converger; una función mayor que una convergente puede divergir. Es necesario comparar en el sentido que transmite información.

### Ejemplo 9 — demostrar convergencia sin integrar

Estudia

$$
\int_1^\infty\frac{dx}{x^2+3}.
$$

Para $x\geq1$,

$$
0<\frac1{x^2+3}\leq\frac1{x^2}.
$$

Como $\int_1^\infty1/x^2\,dx$ converge, la integral propuesta también converge. No era necesario calcular su valor exacto.

## Criterio de comparación por el límite

Sean $f$ y $g$ positivas para $x$ suficientemente grande. Si

$$
\lim_{x\to\infty}\frac{f(x)}{g(x)}=L,
\qquad 0<L<\infty,
$$

entonces $\int f$ y $\int g$ tienen el mismo carácter: ambas convergen o ambas divergen.

### Ejemplo 10 — cociente de polinomios

Estudia

$$
\int_1^\infty\frac{2x+1}{x^3+1}dx.
$$

Para valores grandes, el cociente se comporta como $2/x^2$. Elegimos $g(x)=1/x^2$ y calculamos

$$
\lim_{x\to\infty}
\frac{(2x+1)/(x^3+1)}{1/x^2}
=\lim_{x\to\infty}\frac{2x^3+x^2}{x^3+1}=2.
$$

Como el límite es positivo y finito, y la integral de $1/x^2$ converge, la integral original converge.

En cocientes racionales puede usarse como regla preliminar: si el denominador tiene al menos dos grados más que el numerador, la cola suele compararse con $1/x^p$ para algún $p>1$. La descomposición exacta se estudia en [integrales de funciones racionales](/blog/integrales-funciones-racionales-fracciones-parciales/).

## Comparación cerca de una singularidad finita

Los mismos criterios se aplican cuando $x\to a^+$ o $x\to a^-$. En lugar de comparar con $1/x^p$ en infinito, se compara con

$$
\frac1{|x-a|^p}.
$$

Cerca de $a$, la integral converge si la potencia singular tiene exponente $p<1$ y diverge si $p\geq1$.

### Ejemplo 11 — singularidad oculta por una función trigonométrica

Estudia

$$
\int_0^{\pi/2}\frac{dx}{\sqrt{\sin x}}.
$$

La única singularidad está en $x=0$. Como

$$
\lim_{x\to0^+}\frac{1/\sqrt{\sin x}}{1/\sqrt{x}}
=\lim_{x\to0^+}\sqrt{\frac{x}{\sin x}}=1,
$$

ambas funciones tienen el mismo comportamiento local. La integral modelo

$$
\int_0^1x^{-1/2}dx
$$

converge; por comparación límite, la integral propuesta también converge. No necesitamos encontrar una primitiva de $1/\sqrt{\sin x}$.

### Ejemplo 12 — el logaritmo no domina una potencia crítica

Estudia

$$
\int_0^{1/2}|\ln x|\,dx.
$$

El integrando crece al acercarse a cero, pero mucho más despacio que $x^{-1/2}$. De hecho,

$$
\lim_{x\to0^+}\frac{|\ln x|}{x^{-1/2}}
=\lim_{x\to0^+}\sqrt{x}|\ln x|=0.
$$

Por tanto, para $x$ suficientemente pequeño, $|\ln x|\leq x^{-1/2}$. Como el modelo converge cerca de cero, también lo hace la integral del logaritmo. La altura infinita no basta para concluir divergencia; importa la rapidez del crecimiento.

## Criterio de Cauchy y significado de converger

La convergencia de $\int_a^\infty f(x)dx$ significa que las contribuciones lejanas pueden hacerse tan pequeñas como queramos. Formalmente, para todo $\varepsilon>0$ existe $M$ tal que, si $v>u>M$,

$$
\left|\int_u^v f(x)dx\right|<\varepsilon.
$$

Este criterio no exige conocer de antemano el valor de la integral. Explica por qué una cola convergente deja de añadir cantidades apreciables y por qué una cola como la de $1/x$ nunca se estabiliza por completo.

Para funciones no negativas, las integrales parciales

$$
F(b)=\int_a^b f(x)dx
$$

crecen con $b$. En ese caso converger equivale a que $F(b)$ permanezca acotada. Si crece sin cota, la integral diverge a $+\infty$.

## Estimar el error de truncar una integral

En cálculo numérico se reemplaza a menudo $\int_a^\infty f$ por $\int_a^B f$. El error es la cola

$$
R_B=\int_B^\infty f(x)dx.
$$

Una comparación proporciona una cota útil. Si para $x\geq B$ se cumple

$$
0\leq f(x)\leq\frac{C}{x^p},
\qquad p>1,
$$

entonces

$$
0\leq R_B\leq\frac{C}{(p-1)B^{p-1}}.
$$

### Ejemplo 13 — elegir un punto de corte

Queremos aproximar

$$
\int_1^\infty\frac{dx}{x^2+1}
$$

integrando solo hasta $B$. Como $1/(x^2+1)\leq1/x^2$,

$$
0\leq R_B\leq\int_B^\infty\frac{dx}{x^2}=\frac1B.
$$

Para garantizar un error menor o igual que $0{,}01$, basta elegir $B\geq100$. La cota puede no ser óptima, pero certifica la precisión sin conocer el error exacto.

## Convergencia absoluta y condicional

Una integral $\int_a^\infty f(x)dx$ converge absolutamente si

$$
\int_a^\infty|f(x)|dx
$$

converge. La convergencia absoluta implica convergencia ordinaria.

Algunas funciones oscilantes convergen por cancelación sin hacerlo absolutamente. Un ejemplo clásico es

$$
\int_1^\infty\frac{\sin x}{x}dx,
$$

que converge condicionalmente, mientras que la integral de $|\sin x|/x$ diverge. En cambio,

$$
\int_1^\infty\sin x\,dx
$$

diverge porque

$$
\int_1^b\sin x\,dx=\cos1-\cos b
$$

no tiene límite cuando $b\to\infty$. Oscilar no garantiza convergencia: también debe disminuir suficientemente la contribución de las oscilaciones.

### Por qué la convergencia absoluta es más fuerte

Para cualquier tramo finito $[a,b]$ se cumple

$$
\left|\int_a^b f(x)dx\right|
\leq\int_a^b|f(x)|dx.
$$

Si la integral de $|f|$ tiene una cola arbitrariamente pequeña, la desigualdad obliga a que la cola de $f$ también sea pequeña. Por eso la convergencia absoluta implica la ordinaria.

### Ejemplo 10 bis — convergencia absoluta por comparación

Estudia

$$
\int_1^\infty\frac{\cos x}{x^2}dx.
$$

No necesitamos una primitiva. Como $|\cos x|\leq1$,

$$
0\leq\left|\frac{\cos x}{x^2}\right|
\leq\frac1{x^2}.
$$

La integral de $1/x^2$ converge, luego

$$
\int_1^\infty\left|\frac{\cos x}{x^2}\right|dx
$$

converge por comparación. La integral original converge absolutamente y, por tanto, converge.

La ventaja de introducir el valor absoluto es que elimina las cancelaciones: demostramos que incluso la suma de todas las magnitudes es finita. En una integral condicional, en cambio, la cancelación entre zonas positivas y negativas es indispensable.

## Valor principal de Cauchy no es convergencia ordinaria

Para

$$
\int_{-1}^{1}\frac1x dx,
$$

el límite simétrico

$$
\lim_{\varepsilon\to0^+}
\left(\int_{-1}^{-\varepsilon}\frac1x dx
+\int_{\varepsilon}^{1}\frac1x dx\right)=0
$$

por cancelación. Sin embargo, cada integral lateral diverge. La integral impropia ordinaria no existe; el valor $0$ es el **valor principal de Cauchy**, un concepto distinto que debe nombrarse explícitamente.

## Sustitución y partes en integrales impropias

Las técnicas algebraicas siguen siendo válidas, pero primero se aplican en un intervalo propio y después se toma el límite. El cambio de variable debe transformar también el extremo impropio.

### Ejemplo 14 — sustitución con extremo infinito

Calcula

$$
\int_0^\infty xe^{-x^2}dx.
$$

Trabajamos primero hasta $b$ y usamos $u=x^2$, $du=2x\,dx$:

$$
\begin{aligned}
\int_0^\infty xe^{-x^2}dx
&=\lim_{b\to\infty}\frac12\int_0^{b^2}e^{-u}du\\
&=\frac12\lim_{b\to\infty}(1-e^{-b^2})\\
&=\boxed{\frac12}.
\end{aligned}
$$

Escribir directamente un límite superior $\infty^2$ no aporta rigor; la transformación se justifica para $b$ finito.

### Ejemplo 15 — integración por partes y convergencia

Calcula

$$
\int_0^\infty xe^{-x}dx.
$$

Para $b>0$, integramos por partes con $u=x$ y $dv=e^{-x}dx$:

$$
\int_0^bxe^{-x}dx
=\left[-xe^{-x}\right]_0^b+\int_0^be^{-x}dx
=-be^{-b}+1-e^{-b}.
$$

Como $be^{-b}\to0$ y $e^{-b}\to0$,

$$
\boxed{\int_0^\infty xe^{-x}dx=1}.
$$

La fórmula de partes transforma la integral, pero la convergencia se concluye solo después de evaluar los términos límite.

## Aplicación: normalizar una densidad

Una función no negativa $f$ puede ser una densidad de probabilidad en $[0,\infty)$ si su integral total es $1$. Considera

$$
f(x)=Ce^{-2x},\qquad x\geq0.
$$

La condición de normalización exige

$$
1=\int_0^\infty Ce^{-2x}dx
=C\cdot\frac12.
$$

Por tanto, $C=2$. Una vez normalizada, la probabilidad de que la variable supere $a\geq0$ es

$$
\int_a^\infty2e^{-2x}dx=e^{-2a}.
$$

La convergencia no es aquí un detalle técnico: garantiza que la masa total de probabilidad sea finita y pueda ajustarse a uno.

## Un problema con dos comportamientos distintos

Estudia y calcula

$$
\int_0^\infty\frac{dx}{\sqrt{x}(1+x)}.
$$

Hay que analizar dos zonas. Cerca de cero, la función se comporta como $x^{-1/2}$, que es integrable. En infinito,

$$
\frac1{\sqrt{x}(1+x)}\sim\frac1{x^{3/2}},
$$

cuya cola también converge. Esto demuestra que ambas causas de impropiedad son compatibles con la convergencia.

Para calcular el valor hacemos $x=t^2$, $dx=2t\,dt$. Cuando $x$ recorre $(0,\infty)$, también lo hace $t$:

$$
\begin{aligned}
\int_0^\infty\frac{dx}{\sqrt{x}(1+x)}
&=\int_0^\infty\frac{2t}{t(1+t^2)}dt\\
&=2[\arctan t]_0^\infty\\
&=\boxed{\pi}.
\end{aligned}
$$

El análisis previo evita aceptar una transformación formal sin saber si los extremos problemáticos producen límites finitos.

## Cómo elegir entre cálculo exacto y criterios

No toda pregunta de convergencia exige encontrar una primitiva.

| Estructura | Primera opción | Objetivo |
|---|---|---|
| Potencia pura | Integral $p$ | Clasificar por el exponente |
| Función positiva parecida a una potencia | Comparación límite | Decidir sin integrar |
| Desigualdad sencilla | Comparación directa | Acotar por un modelo conocido |
| Exponencial por polinomio | Sustitución o partes | Calcular y justificar el límite |
| Singularidades y extremos infinitos | Separar todos los puntos | Exigir convergencia en cada zona |
| Función oscilante | Convergencia absoluta o criterio específico | Controlar cancelaciones |

Si el enunciado pide solo «estudia la convergencia», una comparación rigurosa suele ser mejor que una primitiva complicada. Si pide además el valor, primero se justifica que el objeto existe y después se aplica la técnica de integración adecuada.

## Procedimiento completo

1. Localiza extremos infinitos, ceros del denominador, logaritmos fuera de dominio y raíces problemáticas.
2. Divide el intervalo en cada punto singular.
3. Sustituye cada extremo impropio por una variable distinta.
4. Calcula la integral definida antes de tomar el límite.
5. Evalúa cada límite por separado.
6. Declara convergencia solo si todos son finitos.
7. Si la primitiva es difícil o innecesaria, utiliza comparación.
8. Indica el valor únicamente después de justificar la convergencia.

## Errores frecuentes

- **Sustituir infinito en una primitiva.** Debe escribirse un límite.
- **No separar una singularidad interior.** Un único límite que atraviesa el punto no define la integral.
- **Cancelar dos divergencias.** Los lados deben converger independientemente.
- **Pensar que $f(x)\to0$ implica convergencia.** $1/x$ es el contraejemplo básico.
- **Usar mal la comparación.** Hay que comprobar positividad, desigualdad y carácter de la función modelo.
- **Confundir acotación con convergencia.** Una función acotada sobre un intervalo infinito puede acumular área infinita.
- **Olvidar el dominio.** Una fórmula algebraica simplificada puede ocultar un punto excluido del integrando original.
- **Dar solo «diverge» sin mostrar el límite.** La clasificación debe quedar justificada.

## Cómo comprobar el resultado

Antes de aceptar una integral impropia, revisa que todos los símbolos $\infty$ y todos los puntos singulares hayan sido reemplazados por límites laterales. Comprueba después el signo: una función no negativa no puede producir un valor negativo.

También sirve comparar el tamaño. Si $0\leq f\leq g$ y ya sabes que el área bajo $g$ es finita, el valor bajo $f$ no puede superarla. En una potencia, contrasta siempre el exponente con los dos modelos $p$.

## Ejercicios propuestos

1. Calcula $\int_2^\infty x^{-3}dx$.
2. Calcula $\int_0^4x^{-1/2}dx$.
3. Estudia $\int_0^1\ln x\,dx$.
4. Calcula $\int_0^\infty e^{-2x}dx$.
5. Calcula $\int_{-\infty}^{0}e^x dx$.
6. Estudia $\int_0^\infty\frac{dx}{x+1}$.
7. Estudia $\int_1^\infty\frac{dx}{x^2+x}$ y calcula su valor si converge.
8. Clasifica $\int_0^1x^{-p}dx$ para $p=1/3$, $p=1$ y $p=2$.
9. Estudia $\int_1^\infty\frac{3x^2+1}{x^4+2}dx$ por comparación límite.
10. Decide si $\int_0^1\frac{dx}{x^{2/3}(1+x)}$ converge.

## Soluciones

**1. Cola de potencia.**

$$
\lim_{b\to\infty}\left[-\frac1{2x^2}\right]_2^b
=\boxed{\frac18}.
$$

**2. Singularidad integrable.**

$$
\lim_{c\to0^+}[2\sqrt{x}]_c^4
=\boxed{4}.
$$

**3. Logaritmo en cero.** Aunque $\ln x\to-\infty$,

$$
\begin{aligned}
\int_0^1\ln x\,dx
&=\lim_{c\to0^+}[x\ln x-x]_c^1\\
&=-1-\lim_{c\to0^+}(c\ln c-c)\\
&=\boxed{-1}.
\end{aligned}
$$

Se usa $c\ln c\to0$.

**4. Exponencial.**

$$
\lim_{b\to\infty}\left[-\frac12e^{-2x}\right]_0^b
=\boxed{\frac12}.
$$

**5. Extremo izquierdo infinito.**

$$
\lim_{a\to-\infty}[e^x]_a^0
=1-0=\boxed{1}.
$$

**6. Modelo armónico desplazado.**

$$
\lim_{b\to\infty}[\ln(x+1)]_0^b
=\lim_{b\to\infty}\ln(b+1)=+\infty.
$$

La integral diverge.

**7. Fracciones simples.** Como

$$
\frac1{x(x+1)}=\frac1x-\frac1{x+1},
$$

$$
\lim_{b\to\infty}[\ln x-\ln(x+1)]_1^b
=0-(-\ln2)=\boxed{\ln2}.
$$

**8. Modelo cerca de cero.** Para $p=1/3$ converge y vale $1/(1-1/3)=3/2$. Para $p=1$ y $p=2$ diverge.

**9. Comparación en infinito.** Tomamos $g(x)=1/x^2$:

$$
\lim_{x\to\infty}
\frac{(3x^2+1)/(x^4+2)}{1/x^2}=3.
$$

Como el límite es positivo y finito y $\int_1^\infty1/x^2dx$ converge, la integral propuesta converge.

**10. Comparación cerca de cero.** El factor $1/(1+x)$ permanece entre constantes positivas y

$$
\frac1{x^{2/3}(1+x)}\sim\frac1{x^{2/3}}.
$$

Como $2/3<1$, la integral converge en cero. No hay otra singularidad en $[0,1]$.

## Resumen práctico

Una integral es impropia por un intervalo infinito, por una singularidad o por ambas causas. Se define mediante límites, se divide en todos los puntos problemáticos y converge solo si cada límite necesario es finito. Las integrales $p$ y los criterios de comparación permiten decidir muchos casos sin encontrar una primitiva exacta.

La clasificación debe preceder al valor. Antes de integrar, marca sobre el intervalo cada punto fuera del dominio y estudia por separado el comportamiento local y la cola en infinito. Después elige entre cálculo exacto y comparación. Esta secuencia evita cancelaciones ilegítimas, sustituciones de $\infty$ como si fuera un número y conclusiones basadas únicamente en que el integrando tiende a cero.

Si necesitas trabajar convergencia, comparaciones y técnicas de integración sobre ejercicios de tu asignatura, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
