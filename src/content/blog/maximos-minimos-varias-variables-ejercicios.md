---
title: "Máximos y mínimos de varias variables: guía y ejercicios"
date: "2026-09-01"
updated: "2026-09-01"
description: "Aprende a hallar y clasificar extremos de dos variables con gradiente, matriz hessiana, fronteras y multiplicadores de Lagrange."
tag: "Cálculo"
category: "Matemáticas universitarias"
relatedService: "/clases-particulares/calculo-universitario/"
relatedPosts: "derivadas-parciales-gradiente-ejercicios,problemas-optimizacion-derivadas-ejercicios-resueltos,estudio-completo-funcion-paso-a-paso"
image: "/assets/latex/multivariable-extrema-contours.svg"
---

Para buscar máximos y mínimos de una función de varias variables no basta con igualar una derivada a cero. Hay que localizar candidatos interiores, clasificarlos, analizar la frontera del dominio y comparar valores si se piden extremos absolutos. La matriz hessiana resuelve muchos casos interiores; los multiplicadores de Lagrange permiten incorporar restricciones.

Esta guía desarrolla el procedimiento completo para funciones de dos variables, explica qué ocurre cuando el criterio de la hessiana no decide y resuelve ejemplos con y sin restricciones.

## Extremos locales y absolutos

Sea una función

$$
f:D\subseteq\mathbb R^2\to\mathbb R.
$$

Decimos que $f$ tiene un mínimo local en $(a,b)$ si existe un entorno del punto tal que

$$
f(a,b)\le f(x,y)
$$

para todos los puntos del dominio dentro de ese entorno. Es un máximo local si la desigualdad se invierte.

Un mínimo absoluto cumple la desigualdad en todo $D$; un máximo absoluto también se compara con todo el dominio. La diferencia es esencial: un valle pequeño puede ser un mínimo local y, sin embargo, existir otro punto con un valor menor.

En una variable solo podemos acercarnos por la izquierda o por la derecha. En dos variables hay infinitas direcciones. Por eso un punto puede ser mínimo a lo largo de una recta y máximo a lo largo de otra: eso produce un punto de silla.

![Comparación de curvas de nivel numeradas para un mínimo, un máximo y un punto de silla, con flechas que indican dónde aumenta cada función](/assets/latex/multivariable-extrema-contours.svg)

En el mínimo, los niveles $1$, $4$ y $9$ aumentan al alejarse del centro; en el máximo, los niveles $-1$, $-4$ y $-9$ disminuyen hacia fuera, de modo que el valor central cero es el mayor. En el punto de silla aparecen dos familias de hipérbolas: la función sube en la dirección del eje $x$ y baja en la del eje $y$.

## Primer paso: localizar todos los candidatos

Si $f$ es diferenciable y tiene un extremo local en un punto interior $(a,b)$, entonces

$$
\nabla f(a,b)=\mathbf0.
$$

En dos variables hay que resolver el sistema

$$
f_x(x,y)=0,
\qquad
f_y(x,y)=0.
$$

Las soluciones son puntos críticos o estacionarios, pero todavía no sabemos si son máximos, mínimos o puntos de silla.

La lista de candidatos también debe incluir:

- puntos interiores donde alguna derivada parcial no existe;
- puntos de la frontera del dominio;
- vértices y extremos de cada tramo de la frontera;
- comportamientos límite si el dominio no es cerrado o no está acotado.

Igualar el gradiente a cero solo encuentra candidatos interiores regulares. Es el equivalente multivariable de resolver $f'(x)=0$ sin mirar los extremos de un intervalo.

## Matriz hessiana y criterio de la segunda derivada

La matriz hessiana de una función de dos variables es

$$
H_f(x,y)=
\begin{pmatrix}
f_{xx} & f_{xy}\\
f_{yx} & f_{yy}
\end{pmatrix}.
$$

Si las segundas parciales son continuas, las cruzadas coinciden. En un punto crítico definimos

$$
D=f_{xx}f_{yy}-(f_{xy})^2.
$$

El criterio es:

| Condición en el punto crítico | Clasificación |
|---|---|
| $D>0$ y $f_{xx}>0$ | mínimo local |
| $D>0$ y $f_{xx}<0$ | máximo local |
| $D<0$ | punto de silla |
| $D=0$ | el criterio no decide |

Si $D>0$, las curvaturas principales tienen el mismo signo. El signo de $f_{xx}$ distingue un cuenco de una cúpula. Si $D<0$, la superficie se curva hacia arriba en unas direcciones y hacia abajo en otras.

Esta tabla solo se aplica después de comprobar que el punto es crítico e interior. Si $D=0$, no puede concluirse «no hay extremo»: hace falta otro argumento.

## Ejemplo 1: mínimo de una función cuadrática

Estudiemos

$$
f(x,y)=x^2+2y^2-4x+8y+1.
$$

Buscamos los puntos críticos:

$$
f_x=2x-4=0,
\qquad
f_y=4y+8=0.
$$

La única solución es $(2,-2)$. Las segundas parciales son

$$
f_{xx}=2,
\qquad f_{yy}=4,
\qquad f_{xy}=0.
$$

Por tanto,

$$
D=2\cdot4-0^2=8>0,
$$

y como $f_{xx}>0$, hay un mínimo local. En este caso podemos demostrar que es absoluto completando cuadrados:

$$
f(x,y)=(x-2)^2+2(y+2)^2-11.
$$

Los cuadrados son no negativos, así que

$$
f(x,y)\ge-11,
$$

con igualdad únicamente en $(2,-2)$. El mínimo absoluto vale $-11$ y no existe máximo porque la función crece sin cota al alejarnos.

La hessiana clasifica localmente; completar cuadrados proporciona además una prueba global.

## Ejemplo 2: reconocer un punto de silla

Sea

$$
f(x,y)=x^2-y^2.
$$

El gradiente es $(2x,-2y)$ y solo se anula en $(0,0)$. Allí,

$$
D=(2)(-2)-0=-4<0,
$$

por lo que existe un punto de silla.

También puede verse comparando trayectorias. Sobre el eje $x$,

$$
f(x,0)=x^2\ge0,
$$

mientras que sobre el eje $y$,

$$
f(0,y)=-y^2\le0.
$$

En cualquier entorno del origen hay valores mayores y menores que $f(0,0)=0$. Esta prueba por caminos es especialmente útil cuando el criterio de segundo orden no decide.

## Qué hacer cuando $D=0$

Considera dos funciones con el mismo resultado inconcluso:

$$
f(x,y)=x^4+y^4,
\qquad
g(x,y)=x^4-y^4.
$$

Ambas tienen gradiente nulo en el origen y todas sus segundas parciales valen cero allí, de modo que $D=0$.

Sin embargo,

$$
f(x,y)\ge0=f(0,0),
$$

así que $f$ tiene un mínimo absoluto en el origen. Para $g$, sobre $y=0$ se obtienen valores positivos y sobre $x=0$ valores negativos; el origen es un punto de silla.

Cuando $D=0$, puedes:

1. factorizar o completar cuadrados;
2. estudiar el signo de $f(x,y)-f(a,b)$;
3. aproximarte por distintas curvas;
4. usar términos de orden superior de Taylor;
5. explotar desigualdades o propiedades globales.

El objetivo es decidir si cerca del punto todos los valores quedan a un lado o aparecen valores a ambos lados.

## Ejemplo 3: varios puntos críticos en un mismo problema

Estudiemos

$$
f(x,y)=x^3+y^3-3x-3y.
$$

Las ecuaciones del gradiente son independientes:

$$
f_x=3x^2-3=0,
\qquad
f_y=3y^2-3=0.
$$

Por tanto, $x=\pm1$ e $y=\pm1$. Hay cuatro combinaciones, no dos:

$$
(1,1),\quad(1,-1),\quad(-1,1),\quad(-1,-1).
$$

Las segundas parciales son

$$
f_{xx}=6x,
\qquad
f_{yy}=6y,
\qquad
f_{xy}=0,
$$

así que $D=36xy$. En $(1,1)$, $D>0$ y $f_{xx}>0$: hay un mínimo local de valor $-4$. En $(-1,-1)$, $D>0$ y $f_{xx}<0$: hay un máximo local de valor $4$. En los dos puntos con signos mezclados, $D<0$ y aparecen puntos de silla, ambos de valor cero.

Ninguno de los extremos locales es absoluto. Sobre la recta $y=0$,

$$
f(x,0)=x^3-3x,
$$

que tiende a $+\infty$ cuando $x\to+\infty$ y a $-\infty$ cuando $x\to-\infty$. El ejemplo separa tres tareas que suelen confundirse: resolver todas las combinaciones del sistema, clasificar localmente y estudiar después el comportamiento global.

## Extremos absolutos en regiones cerradas y acotadas

El teorema de Weierstrass garantiza que una función continua sobre un conjunto compacto —cerrado y acotado en $\mathbb R^2$— alcanza máximo y mínimo absolutos. El teorema asegura que existen, pero no dice dónde.

El procedimiento es:

1. Halla los puntos críticos del interior.
2. Estudia cada parte de la frontera como un problema de una variable o mediante Lagrange.
3. Incluye vértices, uniones y puntos donde la parametrización falla.
4. Evalúa $f$ en todos los candidatos.
5. Compara los valores.

La comparación final es imprescindible. La hessiana no identifica por sí sola el máximo absoluto sobre una región limitada.

## Ejemplo 4: región triangular

Busquemos los extremos absolutos de

$$
f(x,y)=xy
$$

en el triángulo

$$
D=\{(x,y):x\ge0,\ y\ge0,\ x+y\le4\}.
$$

En el interior, $\nabla f=(y,x)$ solo se anula en $(0,0)$, que está en la frontera, así que no hay candidatos interiores.

Analizamos los tres lados:

- Si $x=0$, entonces $f=0$.
- Si $y=0$, entonces $f=0$.
- Si $x+y=4$, escribimos $y=4-x$, con $0\le x\le4$.

En el tercer lado,

$$
g(x)=x(4-x)=4x-x^2.
$$

Como $g'(x)=4-2x$, el candidato es $x=2$, luego $y=2$ y $f(2,2)=4$. En los vértices $(0,0)$, $(4,0)$ y $(0,4)$, el valor es cero.

Por comparación, el máximo absoluto es $4$ en $(2,2)$ y el mínimo absoluto es $0$, alcanzado en los dos lados apoyados sobre los ejes.

## Multiplicadores de Lagrange

Para optimizar $f(x,y)$ bajo una restricción suave

$$
g(x,y)=c,
$$

los extremos regulares satisfacen

$$
\nabla f=\lambda\nabla g,
\qquad
g(x,y)=c.
$$

Geométricamente, en un extremo restringido la curva de nivel de $f$ es tangente a la restricción. Sus vectores normales son paralelos, de ahí el multiplicador $\lambda$.

El sistema completo es

$$
\begin{cases}
f_x=\lambda g_x,\\
f_y=\lambda g_y,\\
g(x,y)=c.
\end{cases}
$$

Debe revisarse aparte cualquier punto de la restricción donde $\nabla g=0$, porque la condición regular deja de ser aplicable.

## Ejemplo 5: producto máximo en una circunferencia

Queremos hallar los extremos de

$$
f(x,y)=xy
$$

sujetos a $x^2+y^2=1$. Tomamos $g=x^2+y^2$:

$$
(y,x)=\lambda(2x,2y).
$$

El sistema es

$$
y=2\lambda x,
\qquad
x=2\lambda y,
\qquad
x^2+y^2=1.
$$

Ni $x$ ni $y$ pueden ser cero, porque las dos primeras ecuaciones obligarían a que ambos lo fueran, contradiciendo la restricción. Multiplicando las relaciones o sustituyendo se obtiene $4\lambda^2=1$, así que $y=\pm x$.

Si $y=x$, entonces $2x^2=1$ y aparecen

$$
\left(\frac1{\sqrt2},\frac1{\sqrt2}\right),
\quad
\left(-\frac1{\sqrt2},-\frac1{\sqrt2}\right),
$$

con valor $1/2$. Si $y=-x$, aparecen los otros dos puntos diagonales, con valor $-1/2$.

Como la circunferencia es compacta y $f$ es continua, la comparación demuestra que el máximo absoluto es $1/2$ y el mínimo absoluto es $-1/2$.

## Ejemplo 6: distancia mínima con una restricción

Hallemos el punto de la recta

$$
x+2y=6
$$

más cercano al origen. Minimizar la distancia $\sqrt{x^2+y^2}$ equivale a minimizar

$$
f(x,y)=x^2+y^2,
$$

porque la raíz cuadrada es creciente. Con $g=x+2y$:

$$
(2x,2y)=\lambda(1,2).
$$

Así,

$$
2x=\lambda,
\qquad
2y=2\lambda,
$$

de donde $x=\lambda/2$ e $y=\lambda$. La restricción da

$$
\frac\lambda2+2\lambda=6,
$$

luego $\lambda=12/5$. El punto es

$$
\left(\frac65,\frac{12}5\right).
$$

La distancia mínima vale

$$
\sqrt{\frac{36}{25}+\frac{144}{25}}
=\frac6{\sqrt5}.
$$

El vector que une el origen con el punto es paralelo a $(1,2)$, normal a la recta, lo que confirma la solución geométricamente.

## Ejemplo 7: dominio no acotado

Sea

$$
f(x,y)=x^2+y^2-2x
$$

en todo $\mathbb R^2$. El único punto crítico satisface

$$
2x-2=0,\qquad 2y=0,
$$

por lo que es $(1,0)$. La hessiana es $2I$, positiva definida, y el punto es un mínimo local. Además,

$$
f(x,y)=(x-1)^2+y^2-1\ge-1,
$$

así que es mínimo absoluto.

No hay máximo: tomando $(x,y)=(t,0)$, $f(t,0)=t^2-2t\to+\infty$. En dominios no compactos hay que estudiar estos comportamientos; Weierstrass ya no garantiza extremos absolutos.

## Hessiana, autovalores y forma cuadrática

El criterio del determinante es la versión bidimensional de una idea más general. Cerca de un punto crítico, el término cuadrático de Taylor es

$$
\frac12\mathbf h^{\mathsf T}H_f(a,b)\mathbf h.
$$

Si la hessiana es positiva definida, ese término es positivo en toda dirección no nula y aparece un mínimo. Si es negativa definida, aparece un máximo. Si es indefinida, hay direcciones con signos opuestos y el punto es de silla.

En dimensiones mayores suele clasificarse mediante autovalores o menores principales:

- todos los autovalores positivos: mínimo local;
- todos negativos: máximo local;
- signos mezclados: punto de silla;
- algún autovalor cero: el criterio puede ser inconcluso.

Esta interpretación conecta la optimización con el álgebra lineal sin convertir el cálculo en una tabla memorizada.

## Restricciones por desigualdades

Una condición como $g(x,y)\le c$ no se trata imponiendo Lagrange en todos los puntos. El interior de la región se estudia con $\nabla f=0$; la igualdad $g=c$ describe solo la frontera y se analiza después. En un disco $x^2+y^2\le1$, por ejemplo, debes combinar los candidatos interiores con los obtenidos sobre la circunferencia.

Si hay varias desigualdades, la frontera puede tener tramos distintos y vértices donde se activan dos restricciones. En cursos avanzados esta situación se formaliza con las condiciones de Karush-Kuhn-Tucker. En un primer curso suele ser más claro separar geométricamente interior, lados y vértices, como hicimos en el triángulo.

Antes de calcular, comprueba además si el conjunto es compacto. Una restricción cerrada como $x^2+y^2=1$ es compacta; la recta $x+y=1$ no está acotada. En la primera se alcanzan máximo y mínimo para toda función continua, mientras que en la segunda puede existir solo uno o ninguno.

La existencia debe decidirse antes de interpretar candidatos. Un valor límite que no se alcanza puede ser supremo o ínfimo sin constituir un máximo o mínimo.

## Errores frecuentes

### Clasificar sin resolver todo el sistema

Las ecuaciones $f_x=0$ y $f_y=0$ deben cumplirse simultáneamente. Resolverlas por separado y combinar valores arbitrariamente crea puntos que no son críticos.

### Olvidar la frontera

En una región cerrada, un extremo absoluto aparece con frecuencia en un lado o un vértice. El gradiente interior no puede detectarlo.

### Interpretar $D=0$ como ausencia de extremo

El criterio simplemente no decide. Debes estudiar el signo, caminos o términos de orden superior.

### Aplicar Lagrange sin la restricción

Las ecuaciones de paralelismo generan candidatos, pero todos deben satisfacer $g=c$. También hay que comprobar puntos no regulares y comparar valores.

### Optimizar una expresión más difícil de lo necesario

Para distancias suele minimizarse el cuadrado; para productos positivos a veces ayuda el logaritmo. La transformación debe preservar el orden de los valores en el dominio.

## Ejercicios propuestos

1. Clasifica los puntos críticos de $f=x^2+xy+y^2$.
2. Clasifica el origen para $f=x^3-3xy^2$.
3. Estudia el origen para $f=x^4+2x^2y^2+y^4$.
4. Halla los extremos absolutos de $f=x+y$ en $x^2+y^2\le1$.
5. Halla los extremos de $f=x^2+y^2$ sujetos a $x+y=1$.
6. Maximiza $xyz$ para $x,y,z>0$ y $x+y+z=12$.
7. Halla el punto de $x^2+y^2=4$ más cercano a $(3,0)$.
8. Busca los extremos absolutos de $f=x^2-y$ en $0\le x\le2$, $0\le y\le1$.
9. Decide si $f=e^{x^2+y^2}$ tiene máximo o mínimo en $\mathbb R^2$.
10. Explica por qué $f=x^2+y^2$ no tiene máximo en el disco abierto $x^2+y^2<1$.

## Soluciones

### Ejercicio 1

El gradiente es

$$
\nabla f=(2x+y,x+2y),
$$

y solo se anula en el origen. Allí

$$
D=4-1=3>0,
\qquad
f_{xx}=2>0,
$$

así que hay un mínimo. Además,

$$
x^2+xy+y^2=\left(x+\frac y2\right)^2+\frac{3y^2}{4}\ge0,
$$

por lo que el mínimo es absoluto.

### Ejercicio 2

El origen es el único punto crítico y $D=0$. En coordenadas polares,

$$
f(r\cos\theta,r\sin\theta)=r^3\cos(3\theta),
$$

que toma ambos signos arbitrariamente cerca del origen. Es un punto de silla.

### Ejercicio 3

La función es $(x^2+y^2)^2\ge0$. Aunque $D=0$ en el origen, allí se alcanza un mínimo absoluto de valor cero.

### Ejercicio 4

No hay puntos críticos interiores. En la circunferencia, Lagrange da $(1,1)=2\lambda(x,y)$, luego $x=y=\pm1/\sqrt2$ con el mismo signo. El máximo es $\sqrt2$ en $(1/\sqrt2,1/\sqrt2)$ y el mínimo $-\sqrt2$ en el opuesto.

### Ejercicio 5

Lagrange da $(2x,2y)=\lambda(1,1)$, así que $x=y$. Con $x+y=1$, resulta $(1/2,1/2)$ y el mínimo es $1/2$. Sobre la recta no hay máximo porque $x^2+(1-x)^2\to+\infty$ cuando $|x|\to\infty$.

### Ejercicio 6

Las ecuaciones $yz=\lambda$, $xz=\lambda$ y $xy=\lambda$ implican $x=y=z$ al ser positivas. La restricción da $x=y=z=4$ y el producto máximo es $64$. La positividad y la desigualdad AM-GM confirman que es máximo global.

### Ejercicio 7

La distancia cuadrada es $(x-3)^2+y^2$. Sobre la circunferencia se simplifica a $13-6x$, así que se minimiza maximizando $x$. El punto es $(2,0)$ y la distancia mínima vale $1$.

### Ejercicio 8

No hay puntos críticos interiores porque $f_y=-1$. En el rectángulo, $x^2$ varía entre $0$ y $4$, y $-y$ entre $-1$ y $0$. El mínimo es $-1$ en $(0,1)$ y el máximo es $4$ en $(2,0)$.

### Ejercicio 9

El gradiente $2e^{x^2+y^2}(x,y)$ se anula solo en el origen. Allí hay un mínimo absoluto de valor $1$, porque $x^2+y^2\ge0$. No existe máximo: la función tiende a infinito cuando aumenta la distancia al origen.

### Ejercicio 10

Todos los valores cumplen $f<1$, pero pueden acercarse tanto como se quiera a $1$ al aproximarse a la circunferencia. El supremo es $1$, pero no se alcanza porque la frontera no pertenece al dominio. Por tanto, no hay máximo absoluto.

## Resumen operativo

Primero separa el problema interior del problema de frontera. En el interior, resuelve $\nabla f=0$ y clasifica con la hessiana; si el determinante es cero, cambia de argumento. En una región compacta, analiza cada frontera y compara todos los candidatos. Con una restricción regular, Lagrange expresa el paralelismo de los gradientes, pero no evita la comprobación final.

Conviene dominar antes las [derivadas parciales y el gradiente](/blog/derivadas-parciales-gradiente-ejercicios/). Si necesitas practicar clasificaciones y restricciones con los ejercicios de tu asignatura, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
