---
title: "Estudio completo de una función paso a paso"
date: "2026-09-02"
updated: "2026-09-02"
description: "Aprende a estudiar una función: dominio, cortes, límites, asíntotas, monotonía, extremos, concavidad y representación gráfica."
tag: "Cálculo"
category: "Matemáticas universitarias"
relatedService: "/clases-particulares/calculo-universitario/"
relatedPosts: "como-resolver-limites-indeterminaciones-ejercicios,continuidad-derivabilidad-diferencias-problemas,que-son-las-derivadas-y-para-que-se-utilizan"
image: "/favicon.svg"
---

Estudiar una función no consiste en encadenar cálculos sin criterio. El objetivo es reunir información algebraica y analítica suficiente para entender su comportamiento y dibujar una gráfica coherente. Si sigues siempre el mismo orden, cada resultado prepara el siguiente y es mucho más difícil olvidar un caso importante.

En esta guía encontrarás un procedimiento completo, dos estudios desarrollados y una colección de ejercicios con solución. Es el tipo de esquema que conviene dominar para Cálculo I, Matemáticas II de Bachillerato y asignaturas cuantitativas de primeros cursos universitarios.

## Qué significa estudiar una función

Un estudio completo responde, como mínimo, a estas preguntas:

1. ¿Para qué valores de $x$ existe la función?
2. ¿Dónde corta a los ejes y qué signo tiene?
3. ¿Es continua? ¿Presenta saltos, huecos o infinitos?
4. ¿Qué ocurre cerca de los extremos del dominio y cuando $x\to\pm\infty$?
5. ¿Dónde crece, decrece y alcanza extremos relativos?
6. ¿Dónde es cóncava o convexa y dónde cambia de curvatura?
7. ¿Qué asíntotas orientan la gráfica?
8. ¿Cómo se combinan todos esos datos en un esbozo final?

No todos los apartados aportan lo mismo en todas las funciones. Por ejemplo, buscar periodicidad en un polinomio suele ser inútil, mientras que en una función trigonométrica es esencial. El método debe ser sistemático, pero no mecánico.

## Orden recomendado para analizar una función

### 1. Dominio

El dominio es el conjunto de valores para los que la expresión tiene sentido. Debe calcularse antes que nada, porque condiciona límites, continuidad, derivadas e intervalos de crecimiento.

Las restricciones más frecuentes son:

- denominadores distintos de cero;
- radicandos de raíces pares mayores o iguales que cero;
- argumentos de logaritmos estrictamente positivos;
- argumentos válidos en funciones trigonométricas inversas.

Por ejemplo, para

$$
f(x)=\frac{\sqrt{x+2}}{x-1},
$$

se exige $x+2\ge 0$ y $x\ne1$. Por tanto,

$$
\operatorname{Dom}(f)=[-2,1)\cup(1,+\infty).
$$

Un error habitual es resolver cada restricción y unir sus soluciones. Cuando deben cumplirse simultáneamente, hay que tomar la intersección.

### 2. Simetrías y periodicidad

Calcula $f(-x)$ siempre que el dominio sea simétrico respecto de cero:

- si $f(-x)=f(x)$, la función es par y su gráfica es simétrica respecto del eje $y$;
- si $f(-x)=-f(x)$, es impar y tiene simetría respecto del origen;
- si no se cumple ninguna igualdad, no se deduce una simetría de este tipo.

Por ejemplo, $f(x)=x^4-2x^2$ es par y $g(x)=x^3-3x$ es impar. Basta estudiar con detalle una mitad de la gráfica y reflejarla, aunque conviene conservar los intervalos completos en la tabla de signos.

En funciones trigonométricas busca además un periodo $T>0$ tal que $f(x+T)=f(x)$. La periodicidad permite reducir el estudio a un intervalo fundamental.

### 3. Cortes con los ejes y signo

El corte con el eje vertical se obtiene evaluando $f(0)$, si $0$ pertenece al dominio. Los cortes con el eje horizontal son las soluciones reales de

$$
f(x)=0.
$$

En una función racional, los ceros proceden del numerador, pero hay que descartar los valores que anulan también el denominador. Después, una tabla de signos indica dónde la gráfica está por encima o por debajo del eje $x$.

Ejemplo: si

$$
h(x)=\frac{(x-2)(x+1)}{x-3},
$$

los puntos que separan intervalos son $-1$, $2$ y $3$. Probando un valor en cada intervalo se obtiene el signo de $h$ sin desarrollar los productos.

### 4. Continuidad y discontinuidades

Las funciones elementales son continuas en los puntos donde están definidas. Por eso, en muchas expresiones basta localizar los valores excluidos del dominio y estudiar sus límites laterales.

En una función definida a trozos también debes comparar:

$$
\lim_{x\to a^-}f(x),\qquad
\lim_{x\to a^+}f(x),\qquad
f(a).
$$

La función es continua en $a$ solo si los dos límites laterales existen, coinciden y su valor común es $f(a)$. Si quieres repasar esta relación con detalle, consulta la guía sobre [continuidad y derivabilidad](/blog/continuidad-derivabilidad-diferencias-problemas/).

### 5. Límites y asíntotas

Estudia los límites en los extremos de cada intervalo del dominio y en $\pm\infty$. Esta información permite detectar tres clases habituales de asíntotas.

Hay una asíntota vertical $x=a$ si al menos uno de los límites laterales es infinito:

$$
\lim_{x\to a^-}f(x)=\pm\infty
\quad\text{o}\quad
\lim_{x\to a^+}f(x)=\pm\infty.
$$

Hay una asíntota horizontal $y=L$ si

$$
\lim_{x\to+\infty}f(x)=L
\quad\text{o}\quad
\lim_{x\to-\infty}f(x)=L.
$$

Los dos extremos pueden dar horizontales distintas. Finalmente, existe una asíntota oblicua $y=mx+n$, con $m\ne0$, si

$$
m=\lim_{x\to\pm\infty}\frac{f(x)}{x},
\qquad
n=\lim_{x\to\pm\infty}\bigl(f(x)-mx\bigr)
$$

son finitos. En funciones racionales también puede obtenerse mediante división de polinomios. La guía de [límites e indeterminaciones](/blog/como-resolver-limites-indeterminaciones-ejercicios/) desarrolla las técnicas necesarias para este paso.

### 6. Primera derivada: monotonía y extremos

Calcula $f'(x)$ y localiza los puntos críticos: valores interiores del dominio donde $f'(x)=0$ o donde la derivada no existe. Después estudia el signo de $f'$ en los intervalos determinados por esos puntos y por las discontinuidades.

- Si $f'(x)>0$, la función crece.
- Si $f'(x)<0$, la función decrece.
- Un cambio de $+$ a $-$ produce un máximo relativo.
- Un cambio de $-$ a $+$ produce un mínimo relativo.

Que $f'(a)=0$ no garantiza por sí solo un extremo. En $f(x)=x^3$, la derivada se anula en cero, pero la función sigue creciendo a ambos lados. Encontrarás el significado geométrico de este cálculo en [qué son las derivadas](/blog/que-son-las-derivadas-y-para-que-se-utilizan/).

### 7. Segunda derivada: curvatura e inflexión

La convención verbal puede variar entre manuales, pero el signo matemático no cambia:

- si $f''(x)>0$, las pendientes aumentan y la gráfica es convexa o cóncava hacia arriba;
- si $f''(x)<0$, las pendientes disminuyen y la gráfica es cóncava hacia abajo.

Los candidatos a punto de inflexión se obtienen resolviendo $f''(x)=0$ y añadiendo los puntos donde $f''$ no existe pero $f$ sí. Para confirmar una inflexión debe cambiar el signo de $f''$ y el punto ha de pertenecer a la gráfica.

Por eso una asíntota vertical nunca es un punto de inflexión, aunque la segunda derivada cambie de signo al cruzar el valor excluido.

### 8. Recorrido y representación final

El recorrido es el conjunto de valores que toma $f$. A veces se deduce de la continuidad, los límites y los extremos. En otros casos conviene resolver $y=f(x)$ respecto de $x$ y exigir que exista una solución real.

Para el esbozo final, marca primero cortes, extremos e inflexiones; dibuja después las asíntotas con línea discontinua; finalmente conecta la información respetando monotonía, curvatura y límites. Una tabla conjunta evita contradicciones:

| Intervalo | Signo de $f$ | Signo de $f'$ | Signo de $f''$ | Comportamiento |
|---|---:|---:|---:|---|
| $I_1$ | $-$ | $+$ | $-$ | Crece bajo el eje y se curva hacia abajo |
| $I_2$ | $+$ | $-$ | $+$ | Decrece sobre el eje y se curva hacia arriba |

No dibujes primero para justificar después los cálculos: la gráfica debe ser la consecuencia del estudio.

## Ejemplo 1: estudio completo de una función racional

Analicemos

$$
f(x)=\frac{x^2+1}{x-1}.
$$

### Dominio, cortes y signo

El denominador se anula en $x=1$, luego

$$
\operatorname{Dom}(f)=\mathbb{R}\setminus\{1\}.
$$

El numerador $x^2+1$ es siempre positivo, así que no hay cortes con el eje $x$. Como $f(0)=-1$, el corte vertical es $(0,-1)$. Además, el signo depende solo de $x-1$: $f(x)<0$ si $x<1$ y $f(x)>0$ si $x>1$.

La función no es par ni impar.

### Límites y asíntotas

Al acercarnos a uno, el numerador tiende a $2>0$ y el denominador cambia de signo:

$$
\lim_{x\to1^-}f(x)=-\infty,
\qquad
\lim_{x\to1^+}f(x)=+\infty.
$$

Por tanto, $x=1$ es una asíntota vertical. La división de polinomios da

$$
f(x)=x+1+\frac{2}{x-1}.
$$

Como el último término tiende a cero cuando $x\to\pm\infty$, la asíntota oblicua es $y=x+1$. No hay asíntota horizontal.

### Crecimiento y extremos

Derivamos la expresión dividida:

$$
f'(x)=1-\frac{2}{(x-1)^2}
=\frac{(x-1)^2-2}{(x-1)^2}.
$$

Los puntos estacionarios son

$$
x=1-\sqrt2,
\qquad
x=1+\sqrt2.
$$

El denominador de $f'$ es positivo en el dominio. El numerador es positivo cuando $|x-1|>\sqrt2$ y negativo cuando $|x-1|<\sqrt2$. Así:

- crece en $(-\infty,1-\sqrt2)$ y $(1+\sqrt2,+\infty)$;
- decrece en $(1-\sqrt2,1)$ y $(1,1+\sqrt2)$.

En $x=1-\sqrt2$ hay un máximo relativo, cuyo valor es

$$
f(1-\sqrt2)=2-2\sqrt2.
$$

En $x=1+\sqrt2$ hay un mínimo relativo, con

$$
f(1+\sqrt2)=2+2\sqrt2.
$$

### Curvatura y recorrido

La segunda derivada es

$$
f''(x)=\frac{4}{(x-1)^3}.
$$

Es negativa en $(-\infty,1)$ y positiva en $(1,+\infty)$. La curvatura cambia al atravesar $x=1$, pero ese valor no pertenece al dominio: no existe punto de inflexión.

Los extremos de cada rama y sus límites muestran que el recorrido es

$$
(-\infty,2-2\sqrt2]\cup[2+2\sqrt2,+\infty).
$$

También se puede comprobar imponiendo que la ecuación $y=(x^2+1)/(x-1)$ tenga soluciones reales. Al reorganizar aparece una cuadrática en $x$ cuyo discriminante exige $y^2-4y-4\ge0$, exactamente la condición anterior.

La gráfica final tiene dos ramas separadas por $x=1$, se aproxima a $y=x+1$ en ambos infinitos y nunca corta el eje horizontal.

## Ejemplo 2: estudio de una función polinómica

Sea

$$
g(x)=x^3-3x.
$$

Su dominio es $\mathbb R$ y es impar porque $g(-x)=-g(x)$. Los ceros satisfacen

$$
x(x^2-3)=0,
$$

de modo que corta el eje $x$ en $-\sqrt3$, $0$ y $\sqrt3$. Al ser un polinomio cúbico,

$$
\lim_{x\to-\infty}g(x)=-\infty,
\qquad
\lim_{x\to+\infty}g(x)=+\infty,
$$

y no tiene asíntotas.

La primera derivada es

$$
g'(x)=3x^2-3=3(x-1)(x+1).
$$

Es positiva en $(-\infty,-1)$, negativa en $(-1,1)$ y positiva en $(1,+\infty)$. Por tanto, hay un máximo relativo en $(-1,2)$ y un mínimo relativo en $(1,-2)$.

Como

$$
g''(x)=6x,
$$

la gráfica es cóncava hacia abajo para $x<0$ y hacia arriba para $x>0$. En $(0,0)$ existe un punto de inflexión. La continuidad y los límites infinitos permiten concluir que su recorrido es todo $\mathbb R$.

Este ejemplo muestra por qué conviene cruzar los datos: la simetría impar relaciona los dos extremos y el punto de inflexión coincide con el centro de simetría.

## Ejemplo 3: valor absoluto y puntos no derivables

Considera


$$
p(x)=|x^2-4|.
$$

El dominio es $\mathbb R$ y la función es par. Para analizarla sin cometer errores, escribimos el valor absoluto por tramos:

$$
p(x)=
\begin{cases}
x^2-4, & x\le-2\ \text{o}\ x\ge2,\\
4-x^2, & -2<x<2.
\end{cases}
$$

Los cortes con el eje horizontal son $x=\pm2$ y el corte vertical es $(0,4)$. La función nunca es negativa. No tiene asíntotas: cuando $|x|\to\infty$, domina el término $x^2$.

La derivada en los intervalos abiertos es

$$
p'(x)=
\begin{cases}
2x, & x<-2\ \text{o}\ x>2,\\
-2x, & -2<x<2.
\end{cases}
$$

En $x=-2$, la pendiente lateral izquierda vale $-4$ y la derecha vale $4$; en $x=2$, las pendientes son $-4$ y $4$. La función es continua en ambos puntos, pero no derivable: aparecen dos esquinas que son mínimos absolutos de valor cero. Además, $p$ decrece en $(-\infty,-2)$, crece en $(-2,0)$, decrece en $(0,2)$ y crece en $(2,+\infty)$. En $(0,4)$ hay un máximo relativo.

Dentro de $(-2,2)$, $p''=-2$; fuera, $p''=2$. La curvatura cambia al pasar por $\pm2$, pero la gráfica tiene esquinas. Algunos temarios exigen derivabilidad o una tangente para hablar de inflexión y no los clasifican como tales; otros usan únicamente el cambio de concavidad. Conviene aplicar la definición fijada en la asignatura y justificar el cambio de signo. En cualquier caso, el ejemplo demuestra que un estudio completo debe incluir los puntos donde $f'$ no existe: limitarse a resolver $f'(x)=0$ haría perder los dos mínimos absolutos.

## Cómo comprobar que el esbozo es coherente

Una vez dibujada la gráfica, sométela a controles independientes. Cada corte anotado debe satisfacer la fórmula original. Cerca de una asíntota vertical, comprueba el signo de numerador y denominador a ambos lados. En un extremo, verifica que el valor pertenece al recorrido previsto y que el signo de $f'$ cambia como afirmas.

También puedes elegir un punto de prueba en cada intervalo y comparar el valor real con el dibujo. Si la gráfica aparece por encima del eje donde la tabla dice $f<0$, o se aleja de una asíntota cuando el límite afirma lo contrario, el esbozo contiene un fallo. Una calculadora gráfica resulta útil como comprobación final, pero no sustituye estas justificaciones porque puede ocultar huecos, escalas relevantes o ramas muy próximas a una asíntota.

## Errores frecuentes en un estudio de funciones

### Olvidar separar intervalos por discontinuidades

Una tabla de signos no puede atravesar un punto que no pertenece al dominio. Aunque la fórmula de $f'$ conserve el signo, los intervalos quedan separados por esa discontinuidad.

### Confundir un candidato con una conclusión

Las ecuaciones $f'(x)=0$ y $f''(x)=0$ solo generan candidatos. Debes comprobar cambios de signo o aplicar un criterio equivalente. Escribir «hay un mínimo porque la derivada vale cero» es una justificación incompleta.

### Afirmar que una asíntota no puede cortarse

La gráfica puede cortar una asíntota horizontal u oblicua. Una asíntota describe el comportamiento límite, no una barrera. La asíntota vertical sí corresponde a un valor donde la función no puede tomar un punto finito si el límite es infinito.

### Ignorar los límites laterales

En un punto excluido, el límite por la izquierda y el límite por la derecha pueden ser distintos. Especificar solo «el límite es infinito» puede ocultar que una rama baja a $-\infty$ y la otra sube a $+\infty$.

### Dibujar una curva incompatible con la segunda derivada

Una función puede crecer siendo cóncava hacia abajo o decrecer siendo cóncava hacia arriba. Monotonía y curvatura son propiedades distintas; ambas deben respetarse en el dibujo.

## Ejercicios propuestos

Intenta justificar cada apartado mediante una tabla, no solo con una gráfica de calculadora.

1. Estudia dominio, cortes, asíntotas y signo de $f(x)=\dfrac{2x+1}{x-2}$.
2. Determina monotonía y extremos de $f(x)=x^4-4x^2$.
3. Estudia la curvatura y los puntos de inflexión de $f(x)=x^4-4x^3$.
4. Analiza completamente $f(x)=\dfrac{x^2}{x+1}$.
5. Estudia $f(x)=\ln x-x$ en su dominio.
6. Decide si $f(x)=\dfrac{x}{x^2+1}$ es par, impar o ninguna de las dos, y halla sus extremos.
7. Halla el recorrido de $f(x)=x^2-4x+7$.
8. Explica por qué $f(x)=x^{1/3}$ no tiene un extremo en cero aunque su derivada no sea finita allí.

## Soluciones razonadas

### Ejercicio 1

El dominio es $\mathbb R\setminus\{2\}$. El corte vertical es $(0,-1/2)$ y el horizontal, $(-1/2,0)$. Hay asíntota vertical $x=2$. Como

$$
\frac{2x+1}{x-2}=2+\frac5{x-2},
$$

la asíntota horizontal es $y=2$. El signo es positivo en $(-\infty,-1/2)$, negativo en $(-1/2,2)$ y positivo en $(2,+\infty)$.

### Ejercicio 2

La derivada es $f'(x)=4x(x^2-2)$, con puntos críticos $-\sqrt2$, $0$ y $\sqrt2$. La función decrece en $(-\infty,-\sqrt2)$, crece en $(-\sqrt2,0)$, decrece en $(0,\sqrt2)$ y crece en $(\sqrt2,+\infty)$. Tiene mínimos absolutos en $(\pm\sqrt2,-4)$ y un máximo relativo en $(0,0)$.

### Ejercicio 3

Se obtiene

$$
f''(x)=12x^2-24x=12x(x-2).
$$

Es positiva en $(-\infty,0)$ y $(2,+\infty)$, y negativa en $(0,2)$. Hay puntos de inflexión en $(0,0)$ y $(2,-16)$.

### Ejercicio 4

El dominio es $\mathbb R\setminus\{-1\}$. La división

$$
\frac{x^2}{x+1}=x-1+\frac1{x+1}
$$

da la asíntota oblicua $y=x-1$ y la vertical $x=-1$. Como

$$
f'(x)=\frac{x(x+2)}{(x+1)^2},
$$

crece en $(-\infty,-2)$ y $(0,+\infty)$, y decrece en $(-2,-1)$ y $(-1,0)$. Hay un máximo relativo en $(-2,-4)$ y un mínimo relativo en $(0,0)$.

### Ejercicio 5

El dominio es $(0,+\infty)$. Como $f'(x)=1/x-1$, crece en $(0,1)$ y decrece en $(1,+\infty)$. Su máximo absoluto es $f(1)=-1$. Además, $f''(x)=-1/x^2<0$, así que es cóncava hacia abajo en todo el dominio y no tiene inflexiones.

### Ejercicio 6

La función es impar. Su derivada es

$$
f'(x)=\frac{1-x^2}{(x^2+1)^2}.
$$

Decrece en $(-\infty,-1)$, crece en $(-1,1)$ y decrece en $(1,+\infty)$. Tiene un mínimo en $(-1,-1/2)$ y un máximo en $(1,1/2)$.

### Ejercicio 7

Completando el cuadrado,

$$
x^2-4x+7=(x-2)^2+3.
$$

El mínimo absoluto es $3$, alcanzado en $x=2$, y no hay cota superior. El recorrido es $[3,+\infty)$.

### Ejercicio 8

La función es estrictamente creciente a ambos lados de cero y también al atravesarlo. La tangente es vertical, pero no cambia la monotonía: cero no es máximo ni mínimo. Este caso recuerda que los puntos donde $f'$ no existe también deben analizarse, no clasificarse de forma automática.

## Plantilla rápida para un examen

Si tienes poco tiempo, usa esta lista de control:

1. Escribe el dominio y separa sus intervalos.
2. Comprueba simetría, cortes y signo.
3. Calcula límites laterales y en el infinito; anota asíntotas.
4. Halla $f'$, sus puntos críticos y una tabla de monotonía.
5. Evalúa los extremos en la función original.
6. Halla $f''$, estudia su signo y confirma inflexiones.
7. Deduce el recorrido cuando sea viable.
8. Dibuja al final y comprueba que respeta todos los datos.

Para aprender a enlazar estos pasos en problemas reales, en las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/) trabajamos el razonamiento, la presentación y la comprobación de cada resultado, no una plantilla memorizada sin contexto.
