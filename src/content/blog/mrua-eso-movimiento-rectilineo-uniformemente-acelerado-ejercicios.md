---
title: "MRUA en ESO: movimiento rectilíneo acelerado con fórmulas y ejercicios"
date: "2026-08-19"
updated: "2026-08-19"
description: "Aprende MRUA en ESO: aceleración, velocidad, posición y gráficas con ejemplos resueltos y control de unidades."
tag: "ESO"
category: "Física y Química"
relatedService: "/clases-particulares/fisica-ingenieria/"
relatedPosts: "mru-eso-movimiento-rectilineo-uniforme-ejercicios,gravitacion-eso-ley-universal-peso-ejercicios,fisica-y-quimica-como-plantear-problemas"
image: "/assets/latex/mrua-velocidad-tiempo-eso.svg"
---

El **movimiento rectilíneo uniformemente acelerado** (MRUA) ocurre cuando un objeto se mueve en línea recta y su velocidad cambia siempre al mismo ritmo. Puede ganar velocidad —acelerar— o perderla —frenar—. Lo que se mantiene constante es la aceleración, no la velocidad.

El MRUA aparece en un coche que arranca de forma regular, en una bicicleta que frena suavemente o en una caída libre si despreciamos el rozamiento del aire. Es la continuación natural del [MRU](/blog/mru-eso-movimiento-rectilineo-uniforme-ejercicios/): en MRU $a=0$; en MRUA la aceleración es constante y distinta de cero.

## Magnitudes que hay que distinguir

| Magnitud | Símbolo | Unidad del SI | Qué indica |
|---|---|---|---|
| Posición | $x$ | m | Dónde está el móvil |
| Velocidad inicial | $v_0$ | m/s | Velocidad al empezar |
| Velocidad final | $v$ | m/s | Velocidad en un instante |
| Aceleración | $a$ | m/s² | Cambio de velocidad por segundo |
| Tiempo | $t$ | s | Tiempo transcurrido |

Decir que $a=2$ m/s² significa que la velocidad aumenta $2$ m/s cada segundo. No significa que recorra dos metros por segundo al cuadrado: la unidad describe un cambio de velocidad.

## La primera ecuación: velocidad y tiempo

Cuando la aceleración es constante:

$$
v=v_0+at.
$$

Un patinete parte con $v_0=3$ m/s y acelera a $1{,}5$ m/s² durante $4$ s. Entonces:

$$
v=3+1{,}5\cdot4=9\ \text{m/s}.
$$

Cada segundo aumenta $1{,}5$ m/s: $3$, $4{,}5$, $6$, $7{,}5$, $9$. La velocidad no es constante, pero su incremento por segundo sí lo es.

## La ecuación de posición

Para saber dónde está el móvil usamos:

$$
x=x_0+v_0t+\frac12at^2.
$$

El término con $t^2$ aparece porque la velocidad va cambiando. No lo uses en MRU, donde $a=0$ y queda simplemente $x=x_0+vt$.

Si un móvil parte del origen y del reposo, $x_0=0$ y $v_0=0$. La ecuación se simplifica:

$$
x=\frac12at^2.
$$

## Ejemplo completo: un carro que arranca

Un carro parte del reposo y acelera a $2$ m/s² durante $4$ s. Calcula su velocidad final y el espacio recorrido.

Datos:

$$
v_0=0,\qquad a=2\ \text{m/s}^2,\qquad t=4\ \text{s}.
$$

Velocidad final:

$$
v=0+2\cdot4=8\ \text{m/s}.
$$

Posición recorrida:

$$
x=0+0\cdot4+\frac12\cdot2\cdot4^2=16\ \text{m}.
$$

El carro alcanza $8$ m/s y recorre $16$ m. No uses $d=vt=8\cdot4=32$ m: esa cuenta supondría que se ha movido a $8$ m/s durante los cuatro segundos, pero empezó parado.

![Gráfica velocidad-tiempo de un MRUA que parte del reposo, alcanza ocho metros por segundo en cuatro segundos y recorre dieciséis metros](/assets/latex/mrua-velocidad-tiempo-eso.svg)

En la gráfica $v-t$, la pendiente es la aceleración:

$$
a=\frac{\Delta v}{\Delta t}=\frac{8-0}{4-0}=2\ \text{m/s}^2.
$$

Además, el área bajo la gráfica representa el desplazamiento. En este caso es un triángulo:

$$
\text{área}=\frac12\cdot4\cdot8=16\ \text{m}.
$$

Las dos formas dan la misma distancia porque describen el mismo movimiento.

## Aceleración positiva, negativa y frenada

El signo depende del eje que elijas. Si tomas como positivo el sentido del movimiento inicial:

- $a>0$: la velocidad se hace más positiva; el móvil gana rapidez en ese sentido.
- $a<0$: la velocidad disminuye; puede estar frenando.

Un coche va a $20$ m/s y frena con $a=-4$ m/s². ¿Cuánto tarda en detenerse?

Al parar, $v=0$:

$$
0=20-4t.
$$

$$
t=5\ \text{s}.
$$

El signo negativo no es un resultado malo: indica que la aceleración apunta en sentido contrario a la velocidad inicial.

## Caída libre: un MRUA vertical

En ESO suele aproximarse la caída libre como MRUA con aceleración gravitatoria:

$$
g\approx9{,}8\ \text{m/s}^2.
$$

Si elegimos hacia abajo como sentido positivo y dejamos caer un objeto, $v_0=0$ y $a=g$. Tras $2$ s:

$$
v=gt=9{,}8\cdot2=19{,}6\ \text{m/s}.
$$

Si elegimos hacia arriba como sentido positivo, entonces $a=-g$. Ambas elecciones son correctas si mantienes los signos de forma coherente. La gravedad se estudia con más detalle en la guía de [gravitación en ESO](/blog/gravitacion-eso-ley-universal-peso-ejercicios/).

## Cómo distinguir las gráficas

| Gráfica | Qué representa su pendiente | Qué representa el área |
|---|---|---|
| Posición-tiempo ($x-t$) | Velocidad | No se suele interpretar como distancia en ESO |
| Velocidad-tiempo ($v-t$) | Aceleración | Desplazamiento |
| Aceleración-tiempo ($a-t$) | No es una magnitud básica en este nivel | Cambio de velocidad |

Una recta inclinada en una gráfica velocidad-tiempo significa aceleración constante. Una recta horizontal en esa misma gráfica significaría velocidad constante, es decir, MRU.

## Método seguro para problemas de MRUA

1. Decide el sentido positivo y dibuja un eje sencillo.
2. Escribe $x_0$, $v_0$, $v$, $a$ y $t$, con unidades.
3. Identifica qué magnitud buscas.
4. Elige una ecuación que incluya la incógnita y los datos conocidos.
5. Sustituye unidades coherentes: metros, segundos y m/s.
6. Comprueba que el signo final cuenta una historia física razonable.

No hace falta usar todas las fórmulas. Elegir bien la ecuación forma parte del problema.

## Errores frecuentes

### Confundir velocidad con aceleración

La velocidad dice cuánto cambia la posición por segundo; la aceleración, cuánto cambia la velocidad por segundo. Sus unidades son distintas.

### Usar $d=vt$ con la velocidad final

En MRUA, $v$ cambia. Solo podrías usar $d=v_{\text{media}}t$ si calculas antes la velocidad media. Cuando la aceleración es constante:

$$
v_{\text{media}}=\frac{v_0+v}{2}.
$$

En el carro, $v_{\text{media}}=(0+8)/2=4$ m/s, y $4\cdot4=16$ m.

### Olvidar elevar el tiempo al cuadrado

En $\frac12at^2$, primero se eleva $t$ al cuadrado. Para $t=4$, $t^2=16$, no $8$.

### Tratar una frenada como aceleración positiva

Si el móvil se dirige en el sentido positivo y disminuye su velocidad, la aceleración debe tener signo negativo.

## Ejercicios resueltos

### 1. Velocidad después de acelerar

Una moto lleva $5$ m/s y acelera a $3$ m/s² durante $2$ s.

$$
v=5+3\cdot2=11\ \text{m/s}.
$$

### 2. Posición con velocidad inicial

Una pelota se mueve desde $x_0=2$ m con $v_0=4$ m/s y acelera a $1$ m/s² durante $3$ s.

$$
x=2+4\cdot3+\frac12\cdot1\cdot3^2=18{,}5\ \text{m}.
$$

### 3. Frenada

Un patinador va a $12$ m/s y tiene aceleración $-2$ m/s². Calcula su velocidad a los $4$ s.

$$
v=12-2\cdot4=4\ \text{m/s}.
$$

Sigue avanzando en el sentido inicial, pero más despacio.

## Resumen para estudiar

En MRUA la trayectoria es recta y la aceleración es constante. Usa $v=v_0+at$ para velocidades y $x=x_0+v_0t+\frac12at^2$ para posiciones. En una gráfica $v-t$, la pendiente es la aceleración y el área es el desplazamiento.

Para consolidar la base, repasa el [MRU con ejercicios](/blog/mru-eso-movimiento-rectilineo-uniforme-ejercicios/) y el método de [plantear problemas de Física y Química](/blog/fisica-y-quimica-como-plantear-problemas/). Si necesitas practicar con tu temario, puedes consultar las [clases particulares de Física](/clases-particulares/fisica-ingenieria/).
