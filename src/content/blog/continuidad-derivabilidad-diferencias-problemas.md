---
title: Continuidad y derivabilidad: diferencias y problemas
date: 2026-08-31
updated: 2026-08-31
description: Distingue continuidad y derivabilidad, clasifica discontinuidades y resuelve funciones a trozos, parámetros, esquinas y tangentes paso a paso.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: como-resolver-limites-indeterminaciones-ejercicios,que-son-las-derivadas-y-para-que-se-utilizan,problemas-optimizacion-derivadas-ejercicios-resueltos
image: /favicon.svg
---

Una función es continua en un punto cuando su límite coincide con su valor. Es derivable cuando existe una pendiente instantánea finita y única. Toda función derivable en un punto es continua allí, pero una función continua puede no ser derivable: una esquina, una cúspide o una tangente vertical rompen la derivabilidad sin romper la gráfica.

## Continuidad en un punto

Una función $f$ es continua en $x=a$ si se cumplen simultáneamente:

1. $f(a)$ está definida.
2. Existe $\lim_{x\to a}f(x)$.
3. $\lim_{x\to a}f(x)=f(a)$.

Como el límite bilateral existe solo cuando coinciden los laterales, también podemos escribir

$$
\lim_{x\to a^-}f(x)
=\lim_{x\to a^+}f(x)
=f(a).
$$

Esta formulación es especialmente útil en funciones definidas a trozos. La guía de [límites e indeterminaciones](/blog/como-resolver-limites-indeterminaciones-ejercicios/) desarrolla las técnicas necesarias para calcular cada lateral.

### Interpretación gráfica

La continuidad significa que los valores próximos a $a$ están próximos a $f(a)$. La frase «dibujar sin levantar el lápiz» puede servir como intuición, pero no sustituye las tres condiciones: no distingue bien dominios, extremos ni comportamientos oscilatorios.

## Continuidad en intervalos

Una función es continua en un intervalo abierto si lo es en cada punto. En un intervalo cerrado $[a,b]$ se pide continuidad por la derecha en $a$, por la izquierda en $b$ y continuidad bilateral en los puntos interiores.

Las funciones elementales son continuas donde están definidas:

- los polinomios, en toda la recta real;
- los cocientes, donde el denominador no se anula;
- las raíces pares, donde el radicando es no negativo;
- los logaritmos, donde su argumento es positivo;
- las exponenciales y funciones trigonométricas, en sus dominios.

Sumas, productos y composiciones de funciones continuas siguen siendo continuas cuando las operaciones están definidas.

## Tipos de discontinuidad

Clasificar la discontinuidad ayuda a decidir si puede corregirse redefiniendo un punto o si forma parte esencial del comportamiento.

### Discontinuidad evitable

Existe un límite finito $L$, pero $f(a)$ no existe o no coincide con $L$.

### Ejemplo 1 — un hueco algebraico

Sea

$$
f(x)=\frac{x^2-4}{x-2},\qquad x\neq2.
$$

Factorizamos:

$$
f(x)=x+2\qquad(x\neq2).
$$

Por tanto,

$$
\lim_{x\to2}f(x)=4.
$$

La función original no está definida en $2$, pero la discontinuidad se elimina definiendo $f(2)=4$. La fórmula simplificada no borra la restricción original; indica cuál debe ser la extensión continua.

### Discontinuidad de salto

Los límites laterales existen y son finitos, pero son distintos.

### Ejemplo 2 — función a trozos

$$
f(x)=
\begin{cases}
x+1,&x<0,\\
x^2+2,&x\geq0.
\end{cases}
$$

En $x=0$,

$$
\lim_{x\to0^-}f(x)=1,
\qquad
\lim_{x\to0^+}f(x)=2.
$$

No existe el límite bilateral. Cambiar únicamente $f(0)$ no puede unir dos tendencias diferentes, así que la discontinuidad no es evitable.

### Discontinuidad infinita

Al menos un límite lateral es infinito. Por ejemplo,

$$
f(x)=\frac1{x-1}
$$

tiene una asíntota vertical en $x=1$:

$$
\lim_{x\to1^-}f(x)=-\infty,
\qquad
\lim_{x\to1^+}f(x)=+\infty.
$$

### Discontinuidad oscilatoria

Los valores no se aproximan a un número ni crecen con un signo fijo, sino que oscilan indefinidamente. En

$$
f(x)=\sin(1/x),
$$

cuando $x\to0$ el argumento recorre valores cada vez mayores y el seno sigue oscilando entre $-1$ y $1$. El límite no existe.

## Definición de derivabilidad

Una función es derivable en $x=a$ si existe y es finito el límite

$$
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}h.
$$

El cociente mide la pendiente de una secante entre $(a,f(a))$ y un punto próximo. Cuando $h\to0$, si las pendientes convergen a un único valor, obtenemos la pendiente de la tangente. La guía sobre [qué son las derivadas](/blog/que-son-las-derivadas-y-para-que-se-utilizan/) desarrolla su interpretación como tasa de cambio.

![Recta tangente como límite de pendientes secantes](/assets/latex/derivative-tangent.svg)

También pueden calcularse derivadas laterales:

$$
f'_-(a)=\lim_{h\to0^-}\frac{f(a+h)-f(a)}h,
\qquad
f'_+(a)=\lim_{h\to0^+}\frac{f(a+h)-f(a)}h.
$$

La derivada bilateral existe si ambas son finitas e iguales.

## Derivabilidad implica continuidad

Si $f$ es derivable en $a$, podemos escribir para $x\neq a$:

$$
f(x)-f(a)
=\frac{f(x)-f(a)}{x-a}(x-a).
$$

Al tomar límites cuando $x\to a$,

$$
\lim_{x\to a}[f(x)-f(a)]
=f'(a)\cdot0=0.
$$

Por tanto,

$$
\lim_{x\to a}f(x)=f(a),
$$

y $f$ es continua en $a$.

La implicación contraria es falsa. La continuidad asegura que no hay salto, hueco ni asíntota; no asegura que exista una pendiente única.

## Ejemplo 3 — continua pero no derivable: valor absoluto

Sea $f(x)=|x|$. Es continua en $0$ porque

$$
\lim_{x\to0}|x|=0=f(0).
$$

Las derivadas laterales son

$$
f'_-(0)=\lim_{h\to0^-}\frac{|h|}{h}=-1,
\qquad
f'_+(0)=\lim_{h\to0^+}\frac{|h|}{h}=1.
$$

Como no coinciden, $f'(0)$ no existe. La gráfica tiene una esquina: llega con pendiente $-1$ y sale con pendiente $1$.

## Ejemplo 4 — cúspide y derivadas infinitas

Considera $f(x)=x^{2/3}$. Es continua en $0$, pero para $x\neq0$,

$$
f'(x)=\frac{2}{3x^{1/3}}.
$$

Cuando $x\to0^-$, la derivada tiende a $-\infty$; cuando $x\to0^+$, tiende a $+\infty$. No existe una derivada finita en el origen. La gráfica presenta una cúspide.

Una tangente vertical tampoco cuenta como derivada real finita en la definición habitual de Cálculo I, aunque geométricamente pueda hablarse de una recta tangente vertical.

## Funciones a trozos: método completo

Para estudiar una unión en $x=a$:

1. Comprueba continuidad igualando límite izquierdo, límite derecho y valor.
2. Solo si es continua, calcula las derivadas laterales.
3. Iguala las derivadas laterales para exigir derivabilidad.
4. Resuelve los parámetros y verifica el resultado en la función original.

La continuidad es una condición previa. Una función discontinua nunca puede ser derivable en el punto de ruptura.

## Ejemplo 5 — ajustar dos parámetros

Determina $m$ y $n$ para que

$$
f(x)=
\begin{cases}
mx+n,&x<1,\\
x^2,&x\geq1
\end{cases}
$$

sea derivable en $x=1$.

**Continuidad.** El límite izquierdo es $m+n$ y el valor de la rama derecha es $1$. Por tanto,

$$
m+n=1.
$$

**Derivadas laterales.** La derivada izquierda vale $m$ y la derecha, $2x$ evaluada en $1$, vale $2$. Luego

$$
m=2.
$$

Sustituyendo en la condición de continuidad, $n=-1$. La solución es

$$
\boxed{m=2,\qquad n=-1}.
$$

**Comprobación.** Las dos ramas toman el valor $1$ en la unión y ambas pendientes valen $2$.

## Ejemplo 6 — continuidad no garantiza derivabilidad

Determina $a$ para que

$$
f(x)=
\begin{cases}
ax,&x<0,\\
x^2+x,&x\geq0
\end{cases}
$$

sea continua y estudia cuándo es derivable.

Ambas ramas tienden a $0$ en el origen para cualquier $a$, y $f(0)=0$. Por tanto, es continua para todo $a$.

La derivada izquierda es $a$; la derecha es

$$
\lim_{h\to0^+}\frac{h^2+h}{h}
=\lim_{h\to0^+}(h+1)=1.
$$

La función es derivable solo si $a=1$. Una condición de continuidad puede dejar libre un parámetro que la derivabilidad determina.

## Redefinir una función y estudiar su derivada

### Ejemplo 7 — extensión continua de un cociente

Sea

$$
f(x)=
\begin{cases}
\dfrac{x^2-1}{x-1},&x\neq1,\\
c,&x=1.
\end{cases}
$$

Para $x\neq1$, $f(x)=x+1$. La continuidad exige $c=2$. Con ese valor, la función extendida coincide en toda la recta con $x+1$, por lo que es derivable en $1$ y

$$
f'(1)=1.
$$

Si $c\neq2$, la función es discontinua y, en consecuencia, no derivable en $1$.

## Derivable una vez, pero no dos

La regularidad tiene niveles. Una función puede ser derivable sin tener segunda derivada.

### Ejemplo 8 — la función x por valor absoluto

Sea

$$
f(x)=x|x|
=\begin{cases}
-x^2,&x<0,\\
x^2,&x\geq0.
\end{cases}
$$

En el origen,

$$
f'(0)=\lim_{h\to0}\frac{h|h|}{h}
=\lim_{h\to0}|h|=0.
$$

La función es derivable. Para $x\neq0$,

$$
f'(x)=
\begin{cases}
-2x,&x<0,\\
2x,&x>0.
\end{cases}
$$

Esta derivada también es continua en cero si definimos $f'(0)=0$, pero sus pendientes laterales son $-2$ y $2$. Por tanto, $f''(0)$ no existe.

## Derivable no significa derivada continua

Una función puede tener derivada en todos los puntos y, sin embargo, su derivada no ser continua. Ser de clase $C^1$ —tener primera derivada continua— es una condición más fuerte que ser simplemente derivable.

### Ejemplo 8 bis — derivada oscilatoria

Definimos

$$
f(x)=
\begin{cases}
x^2\sin(1/x),&x\neq0,\\
0,&x=0.
\end{cases}
$$

La función es continua en cero porque

$$
|x^2\sin(1/x)|\leq x^2\to0.
$$

Para estudiar su derivada en el origen usamos la definición:

$$
f'(0)=\lim_{h\to0}\frac{h^2\sin(1/h)}h
=\lim_{h\to0}h\sin(1/h)=0.
$$

Para $x\neq0$, la regla del producto y la cadena dan

$$
f'(x)=2x\sin(1/x)-\cos(1/x).
$$

El primer término tiende a cero, pero el coseno oscila. Por tanto, $f'(x)$ no tiene límite cuando $x\to0$ y la derivada no es continua en el origen, aunque $f'(0)$ exista.

Este ejemplo separa tres niveles: continuidad de $f$, existencia de $f'$ y continuidad de $f'$.

## Las derivadas tienen la propiedad del valor intermedio

El teorema de Darboux afirma que una derivada toma todos los valores intermedios entre dos de sus valores, incluso si no es continua. Una derivada no puede presentar una discontinuidad de salto.

Esto no significa que toda derivada sea continua: el ejemplo anterior oscila. Significa que, al pasar de una pendiente a otra, no puede omitir pendientes intermedias. Es una propiedad especial que no comparte una función arbitraria discontinua.

## Teoremas que dependen de la continuidad

### Teorema de Bolzano

Si $f$ es continua en $[a,b]$ y $f(a)f(b)<0$, existe al menos un $c\in(a,b)$ con $f(c)=0$. El teorema garantiza existencia, no unicidad ni una fórmula para la raíz.

### Ejemplo 9 — demostrar que existe una solución

Para $f(x)=x^3+x-1$,

$$
f(0)=-1,
\qquad
f(1)=1.
$$

Como el polinomio es continuo, existe una raíz en $(0,1)$. Además,

$$
f'(x)=3x^2+1>0,
$$

así que la función es estrictamente creciente y la raíz es única.

### Aproximar la raíz mediante bisección

Bolzano también fundamenta un algoritmo. Como la raíz del ejemplo está en $[0,1]$, evaluamos el punto medio $1/2$:

$$
f(1/2)=\frac18+\frac12-1=-\frac38.
$$

El cambio de signo queda ahora entre $1/2$ y $1$. Repetir el proceso divide el intervalo por la mitad en cada paso. Tras $n$ bisecciones, la anchura es

$$
\frac{b-a}{2^n}.
$$

La continuidad garantiza que no perdemos la raíz al conservar el subintervalo cuyos extremos tienen signos opuestos. La monotonía demostrada con $f'>0$ garantiza, además, que seguimos encerrando la única raíz.

### Teorema de los valores intermedios

Una función continua toma todos los valores comprendidos entre $f(a)$ y $f(b)$. No puede saltar de uno a otro omitiendo alturas intermedias.

### Teorema de Weierstrass

Una función continua en un intervalo cerrado y acotado $[a,b]$ alcanza máximo y mínimo absolutos. Si el intervalo es abierto o no acotado, la conclusión puede fallar.

Estos resultados son la base de muchos [problemas de optimización con derivadas](/blog/problemas-optimizacion-derivadas-ejercicios-resueltos/): la continuidad garantiza que existe un extremo global y la derivabilidad ayuda a localizar candidatos interiores.

## Derivabilidad y extremos

El teorema de Fermat afirma que si $f$ tiene un extremo local en un punto interior $a$ y es derivable allí, entonces $f'(a)=0$. La afirmación no funciona al revés: $f'(a)=0$ no garantiza un extremo.

Tampoco exige que todos los extremos sean derivables. $f(x)=|x|$ tiene un mínimo absoluto en $0$ y no es derivable allí. Al buscar extremos deben revisarse:

- puntos donde $f'(x)=0$;
- puntos del dominio donde $f'$ no existe;
- extremos del intervalo.

### Ejemplo 10 — punto estacionario sin extremo

Para $f(x)=x^3$,

$$
f'(x)=3x^2,
$$

y $f'(0)=0$. Sin embargo, la función es creciente a ambos lados del origen. El punto es una inflexión con tangente horizontal, no un máximo ni un mínimo.

## Continuidad y derivabilidad en extremos del dominio

En un extremo se utiliza la condición lateral compatible con el dominio. La función $f(x)=\sqrt{x}$ es continua por la derecha en $0$ porque

$$
\lim_{x\to0^+}\sqrt{x}=0=f(0).
$$

Su cociente incremental lateral es

$$
\frac{\sqrt{h}-0}{h}=\frac1{\sqrt h}\to+\infty.
$$

No tiene derivada lateral finita en cero. La gráfica presenta una tangente vertical al comenzar su dominio.

## Operaciones que conservan derivabilidad

Si $f$ y $g$ son derivables en $a$, también lo son $f+g$, $fg$ y $f/g$ cuando $g(a)\neq0$. La composición $f\circ g$ es derivable si $g$ lo es en $a$ y $f$ lo es en $g(a)$; su derivada viene dada por la regla de la cadena.

El valor absoluto requiere atención. Si $g(a)\neq0$, entonces $|g|$ es derivable cerca de $a$ porque el signo de $g$ permanece estable por continuidad. Si $g(a)=0$ y $g'(a)\neq0$, $g$ cruza el eje con pendiente no nula y $|g|$ suele crear una esquina.

### Ejemplo 10 bis — valor absoluto de una función

Estudia la derivabilidad de

$$
h(x)=|x^2-1|.
$$

Los únicos puntos problemáticos son los ceros interiores del valor absoluto: $x=\pm1$. Cerca de $x=1$,

$$
h(x)=
\begin{cases}
1-x^2,&x<1,\\
x^2-1,&x>1.
\end{cases}
$$

Las pendientes laterales son $-2$ y $2$, así que no es derivable en $1$. En $x=-1$ las pendientes laterales también son opuestas. La función es continua en toda la recta, pero no derivable en $\pm1$.

No era necesario estudiar todos los puntos: fuera de los ceros, el signo interior no cambia localmente y la composición es derivable.

## Cómo responder en un examen

Cuando se pide «estudia continuidad y derivabilidad», una solución completa debe indicar:

1. El dominio.
2. Los únicos puntos potencialmente problemáticos.
3. Los límites laterales y el valor de la función.
4. La conclusión de continuidad.
5. Las derivadas laterales, solo en los puntos continuos que lo requieran.
6. La conclusión de derivabilidad y la interpretación geométrica.

No es necesario rehacer límites en cada punto donde la fórmula es elemental. Basta justificar que cada rama es continua y derivable en el interior de su dominio y concentrar el análisis en las uniones o restricciones.

## Errores frecuentes

- **Comprobar solo que existe $f(a)$.** La continuidad exige también el límite y su igualdad con el valor.
- **Calcular solo un lateral.** En puntos interiores se necesitan ambos.
- **Estudiar derivabilidad antes de continuidad.** Si falla la continuidad, la derivabilidad queda descartada.
- **Igualar únicamente las derivadas.** Una función puede tener fórmulas con pendientes iguales y aun así presentar un salto.
- **Confundir continuidad con suavidad.** $|x|$ es continua y tiene una esquina.
- **Aceptar infinito como derivada.** En la definición habitual, la derivada debe ser finita.
- **Pensar que $f'(a)=0$ implica extremo.** Hace falta estudiar signos, derivadas superiores o valores.
- **Olvidar puntos donde la derivada no existe.** También pueden ser candidatos a extremos.
- **Aplicar condiciones bilaterales en un extremo.** Debe respetarse el dominio.

## Cómo comprobar el resultado

Para continuidad, verifica que las tres cantidades —lateral izquierdo, lateral derecho y valor— coincidan. Para derivabilidad, confirma primero esa igualdad y compara después las dos pendientes laterales.

Una representación gráfica ayuda a interpretar huecos, saltos, esquinas y tangentes verticales, pero la escala puede ocultarlos. La comprobación definitiva es analítica.

## Ejercicios propuestos

1. Clasifica la discontinuidad de $f(x)=(x^2-9)/(x-3)$ en $x=3$.
2. Estudia continuidad y derivabilidad de $f(x)=|x-2|$ en $x=2$.
3. Determina $k$ para que $f(x)=kx+1$ si $x<1$ y $f(x)=x^2$ si $x\geq1$ sea continua.
4. En el ejercicio anterior, decide si algún valor de $k$ hace la función derivable.
5. Estudia continuidad de $f(x)=1/(x^2-4)$ y clasifica sus discontinuidades.
6. Estudia la derivabilidad de $f(x)=x^{1/3}$ en el origen.
7. Determina $a,b$ para que $f(x)=ax+b$ si $x<0$ y $f(x)=e^x$ si $x\geq0$ sea derivable.
8. Demuestra que $x^5+x-1=0$ tiene una única raíz en $(0,1)$.

## Soluciones

**1. Evitable.** Para $x\neq3$, el cociente vale $x+3$ y su límite es $6$. Definir $f(3)=6$ la elimina.

**2. Continua, no derivable.** El valor y el límite son cero. Las pendientes laterales son $-1$ y $1$.

**3. Continuidad.** El límite izquierdo es $k+1$ y el valor derecho es $1$. Luego $k=0$.

**4. Derivabilidad.** La pendiente izquierda sería $k$ y la derecha, $2$. La continuidad exige $k=0$ y la derivabilidad exigiría $k=2$; no existe un valor que cumpla ambas.

**5. Discontinuidades infinitas.** El dominio excluye $x=\pm2$. En ambos puntos el denominador tiende a cero y aparecen asíntotas verticales.

**6. No derivable.**

$$
\frac{h^{1/3}-0}{h}=\frac1{h^{2/3}}\to+\infty.
$$

Existe una tangente vertical, pero no una derivada finita.

**7. Dos condiciones.** La continuidad exige $b=e^0=1$. Las pendientes laterales deben satisfacer $a=e^0=1$. Por tanto, $\boxed{a=1,b=1}$.

**8. Existencia y unicidad.** Para $f(x)=x^5+x-1$, $f(0)=-1$ y $f(1)=1$. Bolzano garantiza una raíz. Como $f'(x)=5x^4+1>0$, la función es estrictamente creciente y no puede tener dos raíces.

## Resumen práctico

La continuidad compara límite y valor; la derivabilidad compara pendientes laterales. Derivabilidad implica continuidad, pero esquinas, cúspides y tangentes verticales muestran que la recíproca es falsa. En funciones a trozos, impón primero continuidad y después igualdad de derivadas.

En un [estudio completo de una función](/blog/estudio-completo-funcion-paso-a-paso/), empieza por el dominio y concentra los cálculos en uniones, ceros de denominadores, extremos de raíces y puntos con valor absoluto. Distingue además entre ser derivable y tener derivada continua: son niveles diferentes de regularidad.

Para funciones a trozos, redacta las conclusiones punto por punto: dónde es continua, dónde es derivable y qué tipo de fallo aparece en cada excepción. Una única afirmación global puede ocultar condiciones laterales diferentes.

Si necesitas practicar funciones a trozos, parámetros y justificaciones con el nivel de detalle de tu asignatura, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
