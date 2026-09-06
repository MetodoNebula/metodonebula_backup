---
title: Problemas de optimización con derivadas: ejercicios resueltos
date: 2026-09-05
updated: 2026-09-05
description: Aprende a modelizar problemas de máximos y mínimos, definir el dominio y comprobar extremos con ejercicios geométricos y económicos resueltos.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: que-son-las-derivadas-y-para-que-se-utilizan,continuidad-derivabilidad-diferencias-problemas,como-aprobar-calculo-i-ingenieria-seis-semanas
image: /favicon.svg
---

Resolver un problema de optimización consiste en traducir una situación a una función, determinar su dominio y localizar dónde alcanza un máximo o un mínimo. Derivar es solo una parte: la mayor dificultad suele estar en elegir variables, usar la restricción y comprobar que la solución tiene sentido.

Antes de trabajar problemas aplicados conviene dominar la [interpretación de las derivadas](/blog/que-son-las-derivadas-y-para-que-se-utilizan/), especialmente la relación entre el signo de la pendiente y el crecimiento de una función.

## El esquema que funciona

Un problema completo se resuelve en este orden:

1. Identifica la magnitud que se quiere maximizar o minimizar.
2. Define las variables con unidades.
3. Traduce las restricciones a ecuaciones o desigualdades.
4. Expresa la función objetivo con una sola variable.
5. Determina el dominio físico o matemático.
6. Busca puntos críticos interiores.
7. Compara candidatos y extremos del dominio.
8. Interpreta el resultado en las variables originales.
9. Comprueba unidades, restricciones y tipo de extremo.

Empezar derivando antes de construir la función objetivo suele producir una ecuación correcta para el objeto equivocado.

## Máximos locales y absolutos

Una función $f$ tiene un máximo local en $x=a$ si $f(a)$ es mayor o igual que los valores suficientemente próximos. Es un máximo absoluto en un dominio $D$ si

$$
f(a)\geq f(x)
\qquad\text{para todo }x\in D.
$$

Las definiciones de mínimo invierten la desigualdad. Un extremo local describe el entorno; uno absoluto compara todo el dominio.

Si $f$ es derivable y tiene un extremo local en un punto interior $a$, el teorema de Fermat asegura que

$$
f'(a)=0.
$$

La condición es necesaria bajo esas hipótesis, pero no suficiente. En $f(x)=x^3$, $f'(0)=0$ y no hay máximo ni mínimo.

## Qué puntos deben comprobarse

Los candidatos a extremo absoluto son:

- puntos interiores donde $f'(x)=0$;
- puntos interiores donde $f'$ no existe;
- extremos incluidos del intervalo;
- límites en fronteras abiertas o infinitas cuando el dominio no es cerrado.

La [continuidad y derivabilidad](/blog/continuidad-derivabilidad-diferencias-problemas/) desempeñan papeles distintos. La continuidad en un intervalo cerrado garantiza que máximo y mínimo absolutos se alcanzan; la derivabilidad permite localizar candidatos interiores mediante la pendiente.

## Cómo decidir si un candidato es máximo o mínimo

### Criterio del signo de la primera derivada

Si $f'$ cambia de positivo a negativo, $f$ pasa de crecer a decrecer y hay un máximo local. Si cambia de negativo a positivo, hay un mínimo local.

Este criterio funciona aunque $f''$ no exista.

### Criterio de la segunda derivada

Si $f'(a)=0$ y $f''(a)>0$, hay un mínimo local. Si $f''(a)<0$, hay un máximo local. Cuando $f''(a)=0$, el criterio no concluye.

### Comparación de valores

En un intervalo cerrado, evaluar la función en todos los candidatos y en los extremos es el procedimiento más directo para clasificar extremos absolutos.

## Concavidad y garantías globales

Si $f''(x)<0$ en todo un intervalo, $f$ es estrictamente cóncava. Cualquier punto crítico interior es entonces el único máximo global del intervalo. Si $f''(x)>0$, la función es estrictamente convexa y un punto crítico es el único mínimo global.

Esta información es más fuerte que el criterio local de la segunda derivada. Comprobar solo $f''(a)<0$ describe el comportamiento cerca de $a$; comprobar el signo en todo el dominio puede resolver la comparación global.

En muchos modelos de beneficio aparece una cuadrática cóncava, mientras que costes formados por una cantidad y su inversa suelen ser convexos en el dominio positivo.

## Ejemplo 1 — función en un intervalo cerrado

Halla los extremos absolutos de

$$
f(x)=x^3-3x
$$

en $[-2,3]$.

Derivamos:

$$
f'(x)=3x^2-3=3(x-1)(x+1).
$$

Los puntos críticos interiores son $x=-1$ y $x=1$. Evaluamos también los extremos:

$$
\begin{array}{c|rrrr}
x&-2&-1&1&3\\ \hline
f(x)&-2&2&-2&18
\end{array}
$$

El máximo absoluto es $18$ en $x=3$. El mínimo absoluto es $-2$ y se alcanza tanto en $x=-2$ como en $x=1$.

Este ejemplo muestra dos detalles: un extremo global puede estar en la frontera y el mismo valor extremo puede alcanzarse en varios puntos.

## Modelizar antes de derivar

En problemas verbales suele haber dos expresiones:

- la **función objetivo**, que representa área, volumen, coste, beneficio o distancia;
- la **restricción**, que relaciona las variables disponibles.

La restricción permite eliminar variables. Después debe trasladarse también al dominio: longitudes positivas, cantidades no negativas, capacidad limitada o valores para los que las fórmulas están definidas.

## Ejemplo 2 — rectángulo con perímetro fijo

Entre todos los rectángulos de perímetro $40$ metros, encuentra el de área máxima.

Sean $x$ e $y$ las longitudes de los lados. La restricción es

$$
2x+2y=40,
$$

de donde $y=20-x$. El área es

$$
A(x)=xy=x(20-x)=20x-x^2.
$$

Las longitudes no pueden ser negativas, así que $0\leq x\leq20$. Derivamos:

$$
A'(x)=20-2x.
$$

El único punto crítico es $x=10$. Como $A''(x)=-2<0$, es un máximo. Entonces $y=10$ y

$$
\boxed{A_{\max}=100\text{ m}^2}.
$$

![Parábola de una función de área con máximo en el vértice](/assets/latex/quadratic-optimization.svg)

**Comprobación.** En los extremos degenerados $x=0$ y $x=20$, el área es cero. El candidato interior es necesariamente el máximo absoluto. El rectángulo óptimo resulta ser un cuadrado.

## Ejemplo 3 — cercado junto a un río

Disponemos de $100$ metros de valla para cerrar tres lados de un rectángulo; el cuarto lado coincide con un río y no necesita valla. ¿Qué dimensiones maximizan el área?

Sea $x$ la longitud de cada lado perpendicular al río e $y$ el lado paralelo. La restricción es

$$
2x+y=100,
$$

así que $y=100-2x$. La función objetivo es

$$
A(x)=x(100-2x)=100x-2x^2.
$$

El dominio físico es $0\leq x\leq50$. Derivamos:

$$
A'(x)=100-4x.
$$

El punto crítico es $x=25$. Entonces $y=50$ y

$$
A(25)=25\cdot50=\boxed{1250\text{ m}^2}.
$$

Como $A''=-4<0$ y los extremos del dominio dan área cero, es el máximo absoluto.

## Ejemplo 4 — caja sin tapa

De una lámina rectangular de $30$ cm por $20$ cm se recortan cuadrados iguales de lado $x$ en las esquinas. Al plegar se forma una caja sin tapa. Encuentra el valor de $x$ que maximiza el volumen.

Las dimensiones de la caja son

$$
x,\qquad30-2x,\qquad20-2x.
$$

El volumen es

$$
V(x)=x(30-2x)(20-2x).
$$

Para que todas las dimensiones sean no negativas,

$$
0\leq x\leq10.
$$

Desarrollamos y derivamos:

$$
V(x)=600x-100x^2+4x^3,
$$

$$
V'(x)=600-200x+12x^2
=4(3x^2-50x+150).
$$

Las raíces son

$$
x=\frac{25\pm5\sqrt7}{3}.
$$

La raíz con signo positivo es mayor que $10$ y queda fuera del dominio. El único candidato interior válido es

$$
\boxed{x=\frac{25-5\sqrt7}{3}\approx3{,}92\text{ cm}}.
$$

Además, $V(0)=V(10)=0$, mientras que el candidato produce volumen positivo. Por tanto, es el máximo absoluto.

**Interpretación.** No basta con resolver $V'(x)=0$: una de las dos soluciones algebraicas no puede construir una caja y debe descartarse por el dominio.

## Ejemplo 5 — cilindro con volumen fijo

Un cilindro cerrado debe tener volumen $V_0$. Determina la relación entre radio y altura que minimiza su superficie.

La restricción es

$$
\pi r^2h=V_0,
$$

con $r>0$ y $h>0$. Despejamos

$$
h=\frac{V_0}{\pi r^2}.
$$

La superficie total incluye dos bases y la superficie lateral:

$$
S=2\pi r^2+2\pi rh.
$$

Sustituyendo la restricción,

$$
S(r)=2\pi r^2+\frac{2V_0}{r}.
$$

Derivamos:

$$
S'(r)=4\pi r-\frac{2V_0}{r^2}.
$$

La condición $S'(r)=0$ da

$$
4\pi r^3=2V_0,
\qquad
r=\left(\frac{V_0}{2\pi}\right)^{1/3}.
$$

Como

$$
S''(r)=4\pi+\frac{4V_0}{r^3}>0,
$$

el punto es un mínimo. Al volver a la restricción se obtiene

$$
\boxed{h=2r}.
$$

La altura óptima coincide con el diámetro. Esta relación es independiente del volumen concreto.

## Ejemplo 6 — distancia mínima a una curva

Encuentra los puntos de la parábola $y=x^2$ más próximos al punto $(0,3)$.

Un punto de la parábola es $(x,x^2)$. Su distancia al punto dado es

$$
D(x)=\sqrt{x^2+(x^2-3)^2}.
$$

Como la raíz cuadrada es creciente, minimizar $D$ equivale a minimizar

$$
Q(x)=D(x)^2=x^2+(x^2-3)^2.
$$

Esta elección evita derivar una raíz. Derivamos:

$$
Q'(x)=2x+4x(x^2-3)
=2x(2x^2-5).
$$

Los candidatos son

$$
x=0,
\qquad
x=\pm\sqrt{\frac52}.
$$

Evaluamos:

$$
Q(0)=9,
\qquad
Q\left(\pm\sqrt{\frac52}\right)
=\frac52+\left(-\frac12\right)^2
=\frac{11}{4}.
$$

Los dos puntos más próximos son

$$
\boxed{\left(\pm\sqrt{\frac52},\frac52\right)},
$$

y la distancia mínima es $\sqrt{11}/2$. La simetría explica que haya dos soluciones.

## Ejemplo 7 — beneficio económico

Una empresa vende $q$ unidades a un precio por unidad

$$
p(q)=100-q,
$$

y tiene coste total

$$
C(q)=20q+100.
$$

El ingreso es precio por cantidad:

$$
R(q)=q(100-q).
$$

El beneficio es

$$
B(q)=R(q)-C(q)
=80q-q^2-100.
$$

El precio exige $0\leq q\leq100$. Derivamos:

$$
B'(q)=80-2q.
$$

El candidato es $q=40$, y $B''(q)=-2<0$. Por tanto,

$$
\boxed{q=40}
$$

maximiza el beneficio dentro del modelo. El precio correspondiente es $60$ y el beneficio máximo es

$$
B(40)=3200-1600-100=1500.
$$

Las unidades monetarias deben indicarse según el enunciado. El modelo supone que pueden venderse cantidades continuas; si $q$ tuviera que ser entero, se compararían los enteros próximos al candidato.

## Ejemplo 8 — coste medio mínimo

El coste total de producir $q>0$ unidades es

$$
C(q)=q^2+100.
$$

El coste medio es

$$
\overline C(q)=\frac{C(q)}q=q+\frac{100}{q}.
$$

Derivamos:

$$
\overline C'(q)=1-\frac{100}{q^2}.
$$

El único candidato positivo es $q=10$. Como

$$
\overline C''(q)=\frac{200}{q^3}>0,
$$

es un mínimo. El coste medio mínimo vale

$$
\boxed{\overline C(10)=20}.
$$

No se estaba minimizando el coste total, que crece con $q$, sino el coste por unidad. Nombrar correctamente la función objetivo cambia el problema.

## Ejemplo 8 bis — rectángulo bajo una parábola

Un rectángulo tiene un vértice en el origen y el vértice opuesto $(x,y)$ sobre la parábola

$$
y=12-x^2
$$

en el primer cuadrante. Encuentra el área máxima.

La propia curva proporciona la restricción. El área es

$$
A(x)=xy=x(12-x^2)=12x-x^3.
$$

El primer cuadrante exige $x\geq0$ e $y\geq0$, de modo que

$$
0\leq x\leq\sqrt{12}.
$$

Derivamos:

$$
A'(x)=12-3x^2.
$$

El candidato del dominio es $x=2$. La altura correspondiente es $y=8$, y

$$
\boxed{A_{\max}=2\cdot8=16}.
$$

Como $A''(x)=-6x<0$ para $x>0$ y el área se anula en los dos extremos, el candidato es el máximo absoluto.

Este problema muestra por qué el dominio debe deducirse de la geometría antes de resolver $A'=0$: la ecuación también produce $x=-2$, que no pertenece al primer cuadrante.

## Dominios abiertos y extremos que no se alcanzan

Si el dominio no es cerrado, una función puede acercarse a su mejor valor sin alcanzarlo. Por ejemplo, $f(x)=x$ en $(0,1)$ no tiene máximo: todos sus valores son menores que $1$, pero $1$ no pertenece al dominio. Tampoco tiene mínimo.

Por eso no basta con afirmar que una función continua «tiene máximo y mínimo». El teorema de Weierstrass requiere un intervalo cerrado y acotado.

## Restricciones y soluciones no válidas

Una raíz de $f'(x)=0$ puede quedar fuera del dominio físico. También pueden aparecer puntos donde la fórmula reducida está definida pero la situación original no: longitudes nulas, denominadores cero o cantidades negativas.

Después de optimizar hay que reconstruir todas las variables y comprobar:

- que satisfacen la restricción;
- que tienen las unidades correctas;
- que pertenecen al dominio;
- que producen realmente el mejor valor frente a los demás candidatos.

## Existencia antes de buscar la solución

Antes de derivar conviene preguntar si el máximo o mínimo tiene que existir. Una función continua sobre un dominio compacto —cerrado y acotado en una variable— alcanza ambos extremos. En un intervalo abierto o no acotado hay que estudiar límites en la frontera.

En el problema del cilindro, por ejemplo,

$$
S(r)=2\pi r^2+\frac{2V_0}{r}
$$

tiende a $+\infty$ tanto cuando $r\to0^+$ como cuando $r\to\infty$. Si existe un único punto crítico y la función es convexa, ese punto debe ser el mínimo global. Este argumento completa la clasificación local de $S''>0$.

También puede ocurrir que el objetivo no esté acotado. Si una restricción permite aumentar indefinidamente una variable y la función objetivo crece con ella, no existe máximo finito. La respuesta correcta no es buscar una raíz de la derivada, sino demostrar que los valores pueden superar cualquier cota.

## Problemas discretos

La derivada trabaja con variables continuas. Si una cantidad debe ser entera, el punto crítico continuo orienta la búsqueda, pero la solución final exige comparar enteros admisibles próximos.

### Ejemplo 9 — número entero de unidades

Supón que el beneficio modelizado es

$$
B(n)=-3(n-12{,}4)^2+500
$$

y solo pueden fabricarse unidades enteras. El máximo continuo está en $12{,}4$. Los candidatos enteros relevantes son $12$ y $13$:

$$
B(12)=499{,}52,
\qquad
B(13)=498{,}92.
$$

El máximo discreto se alcanza en $n=12$. Redondear automáticamente al entero más cercano suele funcionar en una parábola simétrica, pero comparar los candidatos es la justificación correcta.

## Cómo redactar una solución completa

Una buena respuesta no empieza con una derivada aislada. Debe incluir:

1. «Sea $x$…», con significado y unidades.
2. Restricción y despeje.
3. Función objetivo reducida.
4. Dominio.
5. Derivada y puntos críticos.
6. Criterio usado para clasificar.
7. Recuperación de las demás variables.
8. Respuesta verbal con unidades.

Esta estructura permite detectar si una cuenta algebraicamente correcta responde realmente a lo pedido.

## Errores frecuentes

- **Derivar la restricción en vez de la función objetivo.** La restricción sirve para eliminar variables.
- **Mantener dos variables sin método adicional.** En problemas elementales debe reducirse a una.
- **No escribir el dominio.** Pueden aceptarse soluciones geométricamente imposibles.
- **Resolver $f'=0$ y detenerse.** También hay que clasificar y comparar.
- **Olvidar extremos del intervalo.** Un máximo absoluto puede estar en la frontera.
- **Usar solo la segunda derivada cuando vale cero.** En ese caso no concluye.
- **Confundir máximo local y absoluto.** El enunciado suele pedir una magnitud global.
- **Minimizar la distancia con una raíz innecesaria.** Minimizar su cuadrado suele ser más sencillo.
- **Redondear demasiado pronto.** Conserva valores exactos hasta la interpretación final.
- **No volver al problema.** El valor de $x$ puede ser un recorte, no la dimensión solicitada.

## Cómo comprobar el resultado

Sustituye la solución en la restricción y en la función objetivo. Compara con los demás candidatos y prueba valores cercanos para detectar si el comportamiento coincide con un máximo o un mínimo.

Revisa también la escala: un área no puede tener unidades lineales, un volumen no puede ser negativo y un coste medio debe expresarse por unidad. La concavidad global puede simplificar la prueba: una cuadrática con coeficiente principal negativo tiene un único máximo.

## Ejercicios propuestos

1. Dos números positivos suman $20$. Maximiza su producto.
2. Minimiza $f(x)=x+9/x$ para $x>0$.
3. Un rectángulo tiene un vértice en el origen y el opuesto sobre $y=12-x^2$ en el primer cuadrante. Maximiza su área.
4. Halla los extremos absolutos de $f(x)=x^4-4x^2$ en $[-3,3]$.
5. Si el precio es $p(q)=60-2q$, maximiza el ingreso para $q\geq0$ y precio no negativo.
6. Un cercado rectangular junto a un río dispone de $240$ metros para tres lados. Halla las dimensiones óptimas.
7. Encuentra el punto de la recta $y=2x+1$ más próximo al origen.
8. Explica por qué $f(x)=1-1/x$ no alcanza máximo en $[1,\infty)$.

## Soluciones

**1. Producto máximo.** Si los números son $x$ y $20-x$,

$$
P(x)=x(20-x),\qquad0\leq x\leq20.
$$

$P'(x)=20-2x=0$ da $x=10$. Ambos números son $10$ y el producto máximo es $\boxed{100}$.

**2. Mínimo.**

$$
f'(x)=1-\frac9{x^2}=0
$$

da $x=3$ en el dominio positivo. Como $f''(x)=18/x^3>0$, el mínimo es $\boxed{f(3)=6}$.

**3. Área bajo una parábola.** El vértice opuesto es $(x,12-x^2)$, con $0\leq x\leq\sqrt{12}$. Entonces

$$
A(x)=x(12-x^2),
\qquad
A'(x)=12-3x^2.
$$

El candidato positivo es $x=2$, la altura es $8$ y el área máxima es $\boxed{16}$.

**4. Comparación de candidatos.**

$$
f'(x)=4x(x^2-2),
$$

así que los candidatos son $0$ y $\pm\sqrt2$, además de $\pm3$. Los valores son $0$, $-4$ y $45$, respectivamente. El mínimo absoluto es $-4$ en $x=\pm\sqrt2$ y el máximo es $45$ en $x=\pm3$.

**5. Ingreso.**

$$
R(q)=q(60-2q),
\qquad0\leq q\leq30.
$$

$R'(q)=60-4q=0$ da $q=15$. El ingreso máximo es $\boxed{450}$.

**6. Tres lados.** Si $x$ es cada lado perpendicular, $y=240-2x$ y

$$
A(x)=x(240-2x).
$$

$A'(x)=240-4x=0$ da $x=60$, $y=120$ y área máxima $\boxed{7200\text{ m}^2}$.

**7. Distancia al origen.** Un punto es $(x,2x+1)$. Minimizamos

$$
Q(x)=x^2+(2x+1)^2=5x^2+4x+1.
$$

$Q'(x)=10x+4=0$ da $x=-2/5$ y $y=1/5$. El punto buscado es $\boxed{(-2/5,1/5)}$.

**8. Supremo no alcanzado.** Para $x\geq1$, $f'(x)=1/x^2>0$ y la función crece. Además, $f(x)<1$ para todo $x$ finito, aunque $f(x)\to1$ cuando $x\to\infty$. Su supremo es $1$, pero no existe máximo.

## Resumen práctico

Optimizar exige modelizar, reducir a una variable, fijar el dominio y comparar todos los candidatos. Los puntos con derivada cero son posibilidades, no respuestas automáticas. Extremos, puntos no derivables y restricciones físicas forman parte del análisis.

Una respuesta queda cerrada cuando recupera todas las variables originales, demuestra el carácter global del extremo y expresa el resultado con unidades. La concavidad, los valores de frontera y los límites del dominio son herramientas de comprobación, no pasos opcionales.

Si el modelo admite solo valores enteros, compara los enteros cercanos al óptimo continuo. Si el dominio es abierto o infinito, estudia sus fronteras mediante límites antes de afirmar que el mejor valor se alcanza.

Si necesitas practicar modelización y comprobación sobre problemas de tu asignatura, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
