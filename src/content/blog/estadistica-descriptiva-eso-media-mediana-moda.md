---
title: "Estadística descriptiva en ESO: media, mediana, moda y frecuencias"
date: "2026-09-15"
updated: "2026-09-15"
description: "Aprende estadística descriptiva para ESO: frecuencia absoluta y relativa, media, mediana y moda con tablas, diagramas y ejercicios resueltos."
tag: "ESO"
category: "Estadística"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "como-estudiar-matematicas-sin-memorizar,como-aprobar-estadistica-psicologia-sin-base-matematica,estadistica-desde-cero-para-elegir-contrastes"
image: "/assets/latex/frecuencias-absoluta-relativa-eso.svg"
---

La estadística descriptiva sirve para ordenar datos y responder preguntas sencillas: ¿cuál es el valor más frecuente?, ¿qué resultado representa mejor al grupo?, ¿qué parte de la clase ha elegido cada opción? Para hacerlo bien no basta con aplicar una fórmula: primero hay que saber qué datos tenemos y qué información queremos resumir.

En esta guía aprenderás a construir una tabla de frecuencias y a calcular e interpretar frecuencia absoluta, frecuencia relativa, media, mediana y moda. Todos los ejemplos usan datos pequeños para que puedas comprobar cada paso.

## Antes de calcular: datos y variable

Una **variable estadística** es la característica que observamos. Por ejemplo:

- número de mascotas de cada alumno;
- minutos que tarda cada persona en llegar al instituto;
- color de mochila elegido;
- puntuación de un examen.

Los resultados que obtiene cada persona son los **datos**. Si preguntamos a catorce estudiantes cuántas mascotas tienen, un posible listado sería:

$$
0,\ 1,\ 2,\ 1,\ 0,\ 3,\ 1,\ 2,\ 1,\ 0,\ 2,\ 1,\ 3,\ 0.
$$

El listado sin ordenar contiene toda la información, pero cuesta responder de un vistazo. La estadística descriptiva la organiza sin inventar ni alterar ningún dato.

No todas las variables admiten las mismas operaciones. El número de mascotas es cuantitativo: podemos ordenar, sumar y calcular la media. El color de una mochila es cualitativo: podemos contar cuántas veces aparece cada color y hallar la moda, pero no tiene sentido sumar «rojo + azul» ni calcular una media de colores.

## Frecuencia absoluta: cuántas veces aparece un valor

La **frecuencia absoluta**, que escribiremos $f_i$, es el número de veces que aparece un valor.

Ordenemos los datos del ejemplo. Hay cuatro estudiantes con cero mascotas, cinco con una, tres con dos y dos con tres. El número total de alumnos es

$$
n=4+5+3+2=14.
$$

| Número de mascotas $x_i$ | Frecuencia absoluta $f_i$ |
|---:|---:|
| 0 | 4 |
| 1 | 5 |
| 2 | 3 |
| 3 | 2 |
| **Total** | **14** |

La suma de las frecuencias absolutas debe coincidir siempre con el número total de datos. Es la primera comprobación que conviene hacer antes de seguir.

Una frecuencia absoluta responde a preguntas del tipo «¿cuántos?». En este caso: cinco estudiantes tienen una mascota.

## Frecuencia relativa: qué parte del total representa

La **frecuencia relativa**, $h_i$, compara cada frecuencia absoluta con el total:

$$
h_i=\frac{f_i}{n}.
$$

Para expresarla como porcentaje, multiplicamos por cien:

$$
\text{porcentaje}=h_i\cdot100.
$$

Calculamos la tabla completa:

| Mascotas $x_i$ | $f_i$ | Frecuencia relativa $h_i=f_i/14$ | Porcentaje |
|---:|---:|---:|---:|
| 0 | 4 | $4/14\approx0{,}286$ | $28{,}6\%$ |
| 1 | 5 | $5/14\approx0{,}357$ | $35{,}7\%$ |
| 2 | 3 | $3/14\approx0{,}214$ | $21{,}4\%$ |
| 3 | 2 | $2/14\approx0{,}143$ | $14{,}3\%$ |
| **Total** | **14** | **1** | **100 %** |

La frecuencia relativa responde a «¿qué parte?» o «¿qué porcentaje?». Decir que la frecuencia relativa de una mascota es $0{,}357$ significa que aproximadamente el $35{,}7\%$ del grupo tiene una mascota.

Por el redondeo, los porcentajes de una tabla pueden sumar $99{,}9\%$ o $100{,}1\%$. No es un error si cada porcentaje se ha redondeado por separado; la suma exacta de las frecuencias relativas antes de redondear debe ser uno.

![Diagrama de barras de la frecuencia absoluta y porcentaje relativo para cero, una, dos y tres mascotas en un grupo de catorce estudiantes](/assets/latex/frecuencias-absoluta-relativa-eso.svg)

El diagrama de barras permite comparar de inmediato las frecuencias absolutas: la barra de una mascota es la más alta. Los porcentajes escritos sobre las barras dan la misma información en relación con el total. No confundas altura de la barra con porcentaje si el eje vertical está rotulado como frecuencia absoluta.

## Cómo elegir un gráfico sencillo

Para valores o categorías separados —colores, número de mascotas, deporte favorito— el diagrama de barras es claro porque compara alturas. Debe cumplir tres reglas:

1. Cada barra representa un valor o categoría.
2. Las barras tienen la misma anchura y dejan espacio entre sí.
3. El eje vertical empieza en cero cuando se comparan frecuencias, para no exagerar diferencias.

Un gráfico de sectores también puede mostrar porcentajes de un total, pero es menos preciso para comparar cantidades cercanas. Si dos sectores son parecidos, suele ser más fácil distinguir sus alturas en un diagrama de barras.

Cuando la variable es cuantitativa y se han agrupado datos en intervalos, se usa un histograma. A diferencia del diagrama de barras, las columnas del histograma se tocan porque los intervalos representan una escala continua.

## La media: repartir el total por igual

La **media aritmética** se obtiene sumando todos los datos y dividiendo entre su número:

$$
\bar x=\frac{x_1+x_2+\cdots+x_n}{n}.
$$

La idea es imaginar que repartimos el total por igual entre todos. Con la tabla de frecuencias es más rápido multiplicar cada valor por las veces que aparece:

$$
\bar x=\frac{\sum x_i f_i}{n}.
$$

Para las mascotas:

$$
\bar x=\frac{0\cdot4+1\cdot5+2\cdot3+3\cdot2}{14}
=\frac{17}{14}\approx1{,}21.
$$

La media es aproximadamente $1{,}21$ mascotas por estudiante. Nadie necesita tener exactamente $1{,}21$ mascotas: la media es un resumen del grupo, no un dato que deba aparecer en la lista.

### Comprobación de la media

El total de mascotas es $17$. Si cada uno de los catorce estudiantes tuviera exactamente la media, el total sería aproximadamente

$$
14\cdot1{,}21\approx16{,}94,
$$

muy cerca de $17$; la pequeña diferencia procede de haber redondeado $1{,}214285\ldots$ a dos decimales. Si usamos la fracción exacta $17/14$, recuperamos exactamente el total.

La media utiliza todos los valores, lo que es una ventaja, pero también hace que los datos muy alejados influyan mucho en ella.

## La mediana: el dato central una vez ordenado

La **mediana** es el valor que deja la mitad de los datos a un lado y la otra mitad al otro, después de ordenarlos de menor a mayor.

Los catorce datos ordenados son:

$$
0,0,0,0,1,1,1,1,1,2,2,2,3,3.
$$

Como hay un número par de datos, los dos valores centrales ocupan las posiciones

$$
\frac n2=7
\qquad\text{y}\qquad
\frac n2+1=8.
$$

El séptimo y el octavo valor son ambos $1$. Por tanto,

$$
\operatorname{Mediana}=\frac{1+1}{2}=1.
$$

La regla general es:

- Si el número de datos es impar, la mediana es el dato que ocupa la posición $(n+1)/2$.
- Si es par, se calcula la media de los dos datos centrales.

La mediana exige ordenar. Hallar «el dato que está en medio» en el listado original no sirve, porque el orden en que se recogieron los datos no tiene importancia.

## La moda: el valor más frecuente

La **moda** es el valor con mayor frecuencia absoluta. En la tabla de mascotas, la frecuencia más alta es $5$, correspondiente a una mascota. Luego:

$$
\operatorname{Moda}=1.
$$

La moda es la única de estas tres medidas que puede usarse con variables cualitativas. Si en una clase el color de mochila más repetido es azul, azul es la moda, aunque no podamos calcular una media o una mediana de colores.

Una distribución puede tener:

- una moda: **unimodal**;
- dos modas: **bimodal**;
- varias modas;
- ninguna moda clara si todos los valores aparecen el mismo número de veces.

Por ejemplo, en los datos $1,1,2,2,3$ hay dos modas: $1$ y $2$. No es correcto elegir una solo porque aparece antes.

![Diagrama de puntos ordenado para catorce estudiantes: la barra de una mascota marca la moda, las posiciones séptima y octava marcan la mediana y una línea discontinua señala la media aproximada de una coma veintiuna mascotas](/assets/latex/media-mediana-moda-eso.svg)

En este ejemplo coinciden mediana y moda, pero no tienen por qué coincidir siempre. La línea discontinua de la media queda algo a la derecha de uno porque los valores dos y tres empujan el promedio hacia arriba.

## Media, mediana y moda: qué cuenta cada una

Las tres medidas intentan resumir una distribución, pero no responden exactamente a la misma pregunta.

| Medida | Qué indica | Cuándo resulta especialmente útil |
|---|---|---|
| Media | El reparto equilibrado del total | Datos numéricos sin valores extremos muy influyentes |
| Mediana | El valor central ordenado | Datos con valores extremos o distribuciones muy desiguales |
| Moda | El valor más repetido | Categorías o cuando interesa conocer la opción habitual |

No se trata de elegir una medida «mejor» para todos los casos. Debe elegirse la que describa honestamente los datos.

## Ejemplo completo: cuando la media puede engañar

Ocho estudiantes tardan estos minutos en llegar al instituto:

$$
8,9,10,11,12,13,14,60.
$$

La media es

$$
\bar x=\frac{8+9+10+11+12+13+14+60}{8}
=\frac{137}{8}=17{,}125.
$$

Sin embargo, siete de las ocho personas tardan entre ocho y catorce minutos. El valor $60$ es excepcional y arrastra la media hacia arriba.

Para hallar la mediana, los datos ya están ordenados. Al haber ocho, miramos las posiciones cuarta y quinta:

$$
\operatorname{Mediana}=\frac{11+12}{2}=11{,}5.
$$

En este caso, decir que el tiempo habitual de desplazamiento ronda los $11{,}5$ minutos describe mejor a la mayoría que decir $17{,}125$ minutos. La media no está mal calculada; simplemente responde a otra idea: incluye por completo el trayecto extraordinario de sesenta minutos.

No hay moda porque cada tiempo aparece una sola vez.

## Frecuencias acumuladas: para ubicar posiciones

La **frecuencia acumulada** suma las frecuencias hasta un valor determinado. Para las mascotas:

| Mascotas | $f_i$ | Frecuencia acumulada |
|---:|---:|---:|
| 0 | 4 | 4 |
| 1 | 5 | 9 |
| 2 | 3 | 12 |
| 3 | 2 | 14 |

La tabla indica que las posiciones de la $1$ a la $4$ corresponden a cero mascotas; de la $5$ a la $9$, a una mascota. Por eso las posiciones séptima y octava de la mediana valen una.

Las frecuencias acumuladas no sustituyen a las frecuencias absolutas: responden a «¿cuántos tienen este valor o uno menor?». Son especialmente útiles al localizar medianas y cuartiles en tablas grandes.

## Método seguro para resolver un ejercicio

Cuando aparezca una lista de datos, sigue este orden:

1. Identifica qué se está midiendo y si son datos numéricos o categorías.
2. Ordena los valores o construye una tabla de frecuencias.
3. Comprueba que la suma de $f_i$ es el número total de datos.
4. Calcula $h_i=f_i/n$ y verifica que las frecuencias relativas suman uno.
5. Para la media, calcula $\sum x_if_i$ antes de dividir entre $n$.
6. Para la mediana, localiza la posición central en los datos ordenados.
7. Para la moda, busca la frecuencia absoluta mayor.
8. Interpreta el resultado con una frase completa y con sus unidades.

Es preferible escribir «la media es $2{,}3$ libros por alumno» a dejar solamente «$2{,}3$». Las unidades ayudan a comprobar qué has calculado.

## Errores frecuentes

### Dividir entre el número de valores distintos

En la media se divide entre el número total de datos, no entre el número de filas de una tabla. En el ejemplo hay cuatro valores posibles, pero catorce estudiantes.

### Olvidar multiplicar por la frecuencia

En una tabla, la suma para la media es $\sum x_if_i$. Usar solo $0+1+2+3$ ignora que algunos valores aparecen más veces que otros.

### Calcular la mediana sin ordenar

La mediana depende de la posición, y las posiciones solo tienen sentido en una lista ordenada.

### Confundir frecuencia relativa con porcentaje

$0{,}25$ y $25\%$ expresan la misma proporción en formatos diferentes. $0{,}25\%$, en cambio, equivale a $0{,}0025$ y es mucho menor.

### Llamar moda al valor más grande

La moda no es el número mayor: es el que aparece más veces. En $1,1,1,8$, la moda es $1$, aunque $8$ sea el valor máximo.

### Redondear demasiado pronto

Conserva fracciones o decimales suficientes durante el cálculo y redondea al final. Así evitas que pequeñas aproximaciones alteren un porcentaje total o una media.

## Ejercicios para practicar

### 1. Tabla de frecuencias

Las horas semanales de lectura de diez alumnos son:

$$
0,1,2,1,3,2,1,0,2,1.
$$

Construye una tabla con frecuencia absoluta, relativa y porcentaje.

### 2. Media con tabla

Una encuesta obtiene esta tabla de hermanos por alumno:

| Hermanos | 0 | 1 | 2 | 3 |
|---:|---:|---:|---:|---:|
| Frecuencia | 3 | 8 | 6 | 3 |

Calcula la media.

### 3. Mediana impar

Halla la mediana de

$$
4,7,5,6,4,8,7.
$$

### 4. Mediana par

Halla la mediana de

$$
12,8,10,9,11,7.
$$

### 5. Moda o modas

Indica la moda de $2,3,2,4,5,3,2,3$.

### 6. Elegir una medida

Los precios de siete cuadernos son $2,2,2,3,3,3,20$ euros. ¿Qué medida describe mejor el precio habitual: media, mediana o moda? Justifica.

### 7. Interpretar una frecuencia relativa

En un grupo de $30$ alumnos, la frecuencia relativa de quienes van andando al centro es $0{,}4$. ¿Cuántos alumnos son?

### 8. Comprobar una tabla

Una tabla presenta frecuencias relativas $0{,}18$, $0{,}42$, $0{,}27$ y $0{,}15$. ¿Puede ser correcta? Explica por qué.

## Soluciones razonadas

### Solución 1

Los valores posibles son $0$, $1$, $2$ y $3$. Sus frecuencias son $2$, $4$, $3$ y $1$, respectivamente. Como $n=10$, las frecuencias relativas son $0{,}2$, $0{,}4$, $0{,}3$ y $0{,}1$; los porcentajes son $20\%$, $40\%$, $30\%$ y $10\%$. Las absolutas suman $10$ y las relativas suman $1$, así que la tabla pasa las dos comprobaciones.

### Solución 2

El total de alumnos es

$$
n=3+8+6+3=20.
$$

El total de hermanos contado con frecuencias es

$$
0\cdot3+1\cdot8+2\cdot6+3\cdot3=29.
$$

Luego la media es

$$
\bar x=\frac{29}{20}=1{,}45.
$$

El grupo tiene una media de $1{,}45$ hermanos por alumno.

### Solución 3

Ordenamos: $4,4,5,6,7,7,8$. Hay siete datos, así que la posición central es la cuarta. La mediana es $6$.

### Solución 4

Ordenamos: $7,8,9,10,11,12$. Hay seis datos; los centrales son el tercero y el cuarto. Por tanto,

$$
\operatorname{Mediana}=\frac{9+10}{2}=9{,}5.
$$

### Solución 5

Los valores $2$ y $3$ aparecen tres veces cada uno. La distribución es bimodal: sus modas son $2$ y $3$.

### Solución 6

La media es $35/7=5$ euros, pero queda muy influida por el cuaderno de $20$ euros. La mediana es $3$ y la moda también es $3$. Para describir el precio habitual, $3$ euros es más representativo que la media de $5$ euros.

### Solución 7

Multiplicamos la proporción por el total:

$$
0{,}4\cdot30=12.
$$

Van andando $12$ alumnos.

### Solución 8

No puede ser correcta porque

$$
0{,}18+0{,}42+0{,}27+0{,}15=1{,}02.
$$

Las frecuencias relativas exactas deben sumar uno. Podría tratarse de un problema de redondeo si se indicara que los números son aproximados, pero la diferencia de $0{,}02$ es demasiado grande para una tabla sencilla con dos decimales sin una explicación.

## Resumen para estudiar

La frecuencia absoluta cuenta; la relativa compara con el total. La media reparte el total por igual; la mediana localiza el centro de los datos ordenados; la moda identifica el valor más repetido. Antes de operar, organiza los datos y al terminar comprueba sumas, posiciones y unidades.

Para afianzar este método, no memorices una tabla modelo: cambia los datos de un ejercicio, vuelve a ordenar y explica en voz alta qué representa cada resultado. La guía sobre [cómo estudiar matemáticas sin memorizar fórmulas](/blog/como-estudiar-matematicas-sin-memorizar/) puede ayudarte a convertir esa práctica en rutina.

Si necesitas reforzar Estadística o Matemáticas de ESO con ejercicios de tu propio temario, puedes consultar las [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/).
