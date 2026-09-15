---
title: "MRU en ESO: movimiento rectilíneo uniforme con fórmulas y ejercicios"
date: "2026-08-12"
updated: "2026-08-12"
description: "Aprende MRU en ESO: posición, velocidad, tiempo y gráficas con un método claro, unidades y ejercicios resueltos."
tag: "ESO"
category: "Física y Química"
relatedService: "/clases-particulares/fisica-ingenieria/"
relatedPosts: "mrua-eso-movimiento-rectilineo-uniformemente-acelerado-ejercicios,gravitacion-eso-ley-universal-peso-ejercicios,fisica-y-quimica-como-plantear-problemas"
image: "/assets/latex/mru-posicion-tiempo-eso.svg"
---

El **movimiento rectilíneo uniforme** (MRU) describe un objeto que se mueve en línea recta con velocidad constante. No acelera, no frena y no cambia de dirección. Es un modelo sencillo, pero sirve para aprender a traducir un enunciado a magnitudes, ecuaciones, unidades y gráficas.

En la realidad, un coche rara vez mantiene exactamente la misma velocidad durante mucho tiempo. Aun así, el MRU aproxima bien tramos cortos de una cinta transportadora, un ascensor en su parte central o un ciclista que avanza a ritmo constante.

## Cómo reconocer un MRU

Busca estas pistas en el enunciado:

- se mueve «a velocidad constante»;
- recorre distancias iguales en tiempos iguales;
- no acelera ni frena;
- la trayectoria es recta.

La idea clave es esta:

$$
a=0.
$$

Que la aceleración sea cero no significa que el objeto esté parado. Puede avanzar rápido; simplemente su velocidad no cambia.

## Magnitudes y unidades

En un problema de MRU aparecen normalmente tres magnitudes:

| Magnitud | Símbolo | Unidad del SI |
|---|---|---|
| Posición | $x$ | metro (m) |
| Tiempo | $t$ | segundo (s) |
| Velocidad | $v$ | metro por segundo (m/s) |

La velocidad indica cuánto cambia la posición en cada segundo:

$$
v=\frac{\Delta x}{\Delta t}.
$$

Si un objeto avanza $30$ metros en $5$ segundos, su velocidad es:

$$
v=\frac{30}{5}=6\ \text{m/s}.
$$

Es importante incluir la unidad. Escribir solo «6» no permite saber si hablas de metros por segundo, kilómetros por hora o una distancia.

## La ecuación de posición

En MRU, la posición se calcula con:

$$
x=x_0+v\,t.
$$

Aquí:

- $x_0$ es la posición inicial;
- $v$ es la velocidad, con signo según el sentido elegido;
- $t$ es el tiempo transcurrido;
- $x$ es la posición final.

No confundas posición inicial con distancia recorrida. Si una persona empieza a $20$ m de un poste y recorre $40$ m en el sentido positivo, termina en la posición $60$ m.

## Ejemplo resuelto: un ciclista que ya está en marcha

Un ciclista se encuentra inicialmente a $20$ m de una referencia y avanza a $4$ m/s. ¿Dónde estará a los $10$ s?

Los datos son:

$$
x_0=20\ \text{m},\qquad v=4\ \text{m/s},\qquad t=10\ \text{s}.
$$

Aplicamos la ecuación:

$$
x=20+4\cdot10=60\ \text{m}.
$$

El ciclista está en la posición $60$ m. Su **desplazamiento** ha sido $40$ m, pero su posición final es $60$ m porque no partía del origen.

![Gráfica posición-tiempo de un ciclista en MRU que parte de veinte metros y avanza cuatro metros por segundo](/assets/latex/mru-posicion-tiempo-eso.svg)

La recta no pasa por el origen porque $x_0=20$ m. Su pendiente es positiva: la posición aumenta con el tiempo. Entre $0$ y $5$ s sube de $20$ a $40$ m; por eso la velocidad es $20/5=4$ m/s.

## Cómo interpretar una gráfica posición-tiempo

En una gráfica $x-t$:

- una recta ascendente representa velocidad positiva;
- una recta descendente representa velocidad negativa, es decir, movimiento en el sentido contrario;
- una recta horizontal representa reposo;
- una recta más inclinada significa mayor rapidez en valor absoluto.

La pendiente se calcula así:

$$
v=\frac{x_2-x_1}{t_2-t_1}.
$$

No confundas una gráfica posición-tiempo con una gráfica velocidad-tiempo. En una gráfica $x-t$, la altura muestra posición y la inclinación muestra velocidad. En una gráfica $v-t$, la altura sí representa velocidad.

## Convertir km/h y m/s

Muchos ejercicios mezclan kilómetros por hora y metros por segundo. Antes de sustituir, deja todas las unidades en un mismo sistema.

Para pasar de km/h a m/s, divide entre $3{,}6$:

$$
72\ \text{km/h}=\frac{72}{3{,}6}=20\ \text{m/s}.
$$

Para pasar de m/s a km/h, multiplica por $3{,}6$:

$$
5\ \text{m/s}=5\cdot3{,}6=18\ \text{km/h}.
$$

Una forma de comprobarlo: $20$ m/s es una velocidad considerable para correr, pero razonable para un vehículo; $20$ km/h no equivale a $20$ m/s.

## Encuentros: dos móviles en una recta

Dos móviles se encuentran cuando tienen la misma posición en el mismo instante. Supón que A sale del origen a $3$ m/s y B está inicialmente a $30$ m y se mueve hacia A a $2$ m/s.

Si tomamos hacia la derecha como sentido positivo:

$$
x_A=3t
$$

$$
x_B=30-2t.
$$

En el encuentro, $x_A=x_B$:

$$
3t=30-2t.
$$

$$
5t=30\Rightarrow t=6\ \text{s}.
$$

La posición del encuentro es:

$$
x_A=3\cdot6=18\ \text{m}.
$$

Los signos no son adornos: el $-2t$ indica que B se mueve hacia posiciones menores.

## Método seguro para resolver MRU

1. Dibuja una recta y elige el sentido positivo.
2. Escribe $x_0$, $v$ y $t$ con unidades.
3. Convierte unidades antes de calcular.
4. Elige $x=x_0+vt$ o $v=\Delta x/\Delta t$ según lo que se pida.
5. Revisa si el signo y el tamaño del resultado tienen sentido.

Por ejemplo, si un objeto se mueve hacia la izquierda y has elegido la derecha como positiva, una posición que disminuye es coherente. Un tiempo negativo en un problema que pregunta qué ocurrirá después de salir suele indicar que has planteado mal el origen temporal o los signos.

## Errores frecuentes

### Usar $x=vt$ cuando $x_0$ no es cero

La fórmula $x=vt$ solo es un caso particular en el que se parte del origen. En general necesitas $x=x_0+vt$.

### Confundir distancia y posición

La distancia recorrida es cuánto se ha desplazado el objeto; la posición dice dónde está respecto a una referencia. Pueden tener el mismo valor solo si se parte del origen y se avanza en el sentido positivo.

### Mezclar km/h con segundos

Si $v$ está en km/h y el tiempo en segundos, el producto no sale en metros. Convierte antes.

### Pensar que una velocidad constante implica posición constante

Con velocidad constante distinta de cero, la posición cambia de manera regular. Lo constante es el incremento por segundo, no la posición.

## Ejercicios resueltos

### 1. Posición final

Una persona empieza en $x_0=-10$ m y camina a $1{,}5$ m/s hacia el sentido positivo durante $8$ s. Calcula su posición.

$$
x=-10+1{,}5\cdot8=2\ \text{m}.
$$

Termina en la posición $2$ m. Ha recorrido $12$ m, pero empezó diez metros a la izquierda del origen.

### 2. Tiempo necesario

Un robot se mueve a $0{,}8$ m/s y debe recorrer $24$ m. ¿Cuánto tarda?

$$
t=\frac{\Delta x}{v}=\frac{24}{0{,}8}=30\ \text{s}.
$$

### 3. Conversión de unidades

Un tren viaja a $90$ km/h durante $20$ s. ¿Qué distancia recorre?

Primero:

$$
90\ \text{km/h}=\frac{90}{3{,}6}=25\ \text{m/s}.
$$

Después:

$$
d=vt=25\cdot20=500\ \text{m}.
$$

## Resumen para estudiar

En MRU la trayectoria es recta y la velocidad es constante, así que $a=0$. Usa $x=x_0+vt$, elige un sentido positivo y no mezcles unidades. En la gráfica posición-tiempo, la pendiente es la velocidad.

Cuando la velocidad deja de ser constante, el modelo correcto pasa a ser el [MRUA: movimiento rectilíneo uniformemente acelerado](/blog/mrua-eso-movimiento-rectilineo-uniformemente-acelerado-ejercicios/). Para reforzar el método general de planteamiento, consulta también [cómo resolver problemas de Física y Química](/blog/fisica-y-quimica-como-plantear-problemas/).

Si necesitas practicar con ejercicios de tu curso, puedes consultar las [clases particulares de Física](/clases-particulares/fisica-ingenieria/).
