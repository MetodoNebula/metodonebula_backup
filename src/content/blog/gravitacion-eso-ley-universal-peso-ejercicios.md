---
title: "Gravitación en ESO: ley universal, masa, peso y ejercicios resueltos"
date: "2026-08-26"
updated: "2026-08-26"
description: "Aprende gravitación en ESO: fuerza gravitatoria, ley de Newton, diferencia entre masa y peso, caída libre y ejercicios resueltos."
tag: "ESO"
category: "Física y Química"
relatedService: "/clases-particulares/fisica-ingenieria/"
relatedPosts: "mrua-eso-movimiento-rectilineo-uniformemente-acelerado-ejercicios,mru-eso-movimiento-rectilineo-uniforme-ejercicios,fisica-y-quimica-como-plantear-problemas"
image: "/assets/latex/gravitacion-fuerzas-tierra-eso.svg"
---

La **gravitación** es la interacción por la que dos cuerpos con masa se atraen. Gracias a ella permanecemos sobre la Tierra, la Luna gira alrededor de nuestro planeta y los planetas siguen órbitas alrededor del Sol. No es una fuerza exclusiva de la Tierra: cualquier par de masas se atrae, aunque esa atracción suele ser demasiado pequeña para notarla entre objetos cotidianos.

En esta guía distinguirás la ley de gravitación universal, masa y peso. La diferencia es importante: una persona no pierde masa al viajar a la Luna, pero sí pesa menos allí.

## La idea de Newton: todas las masas se atraen

La ley de gravitación universal afirma que la fuerza entre dos masas es:

$$
F=G\frac{Mm}{r^2}.
$$

Cada letra representa una magnitud:

| Símbolo | Significado | Unidad |
|---|---|---|
| $F$ | Fuerza gravitatoria | newton (N) |
| $G$ | Constante de gravitación universal | $6{,}67\cdot10^{-11}$ N·m²/kg² |
| $M$, $m$ | Masas de los cuerpos | kilogramo (kg) |
| $r$ | Distancia entre sus centros | metro (m) |

![Esquema de la atracción gravitatoria entre la Tierra y un objeto, con fuerzas en sentidos opuestos y distancia entre centros](/assets/latex/gravitacion-fuerzas-tierra-eso.svg)

La fórmula muestra dos ideas decisivas:

- si una de las masas aumenta, la fuerza aumenta;
- si la distancia aumenta, la fuerza disminuye mucho porque aparece $r^2$ en el denominador.

Por ejemplo, si la distancia se duplica, $r^2$ se multiplica por cuatro. La fuerza se reduce a la cuarta parte, no solo a la mitad.

## Las fuerzas aparecen por pares

La Tierra atrae a un objeto y el objeto atrae a la Tierra con una fuerza de la misma intensidad. Sus direcciones son opuestas, porque cada fuerza actúa sobre un cuerpo distinto.

Esto no significa que ambos cuerpos aceleren igual. La aceleración depende también de la masa:

$$
a=\frac{F}{m}.
$$

Como la masa de la Tierra es enorme, su aceleración causada por una persona es inapreciable. La persona sí acelera hacia la Tierra si no hay un soporte que la sostenga.

## Masa y peso no son lo mismo

En conversación se usa «peso» para decir cuántos kilogramos tiene alguien, pero en Física son magnitudes distintas.

| Magnitud | Qué mide | Unidad | ¿Cambia al viajar? |
|---|---|---|---|
| Masa | Cantidad de materia e inercia | kg | No |
| Peso | Fuerza gravitatoria que ejerce un astro | N | Sí |

El peso se calcula cerca de la superficie terrestre con:

$$
P=mg.
$$

En la Tierra, normalmente usamos:

$$
g\approx9{,}8\ \text{m/s}^2.
$$

En algunos ejercicios de ESO el enunciado permite aproximar $g$ a $10$ m/s². Usa el valor que indique el problema.

### Ejemplo: el peso de una mochila

Una mochila tiene masa $m=6$ kg. En la Tierra:

$$
P=mg=6\cdot9{,}8=58{,}8\ \text{N}.
$$

Su masa sigue siendo $6$ kg en cualquier lugar. En la Luna, donde $g\approx1{,}62$ m/s², su peso sería:

$$
P_{\text{Luna}}=6\cdot1{,}62=9{,}72\ \text{N}.
$$

La mochila sería más fácil de levantar, pero no tendría menos materia.

## De la ley universal al peso cerca de la Tierra

La ley de Newton se puede escribir para un objeto de masa $m$ cerca de la Tierra:

$$
F=G\frac{M_{\text{Tierra}}m}{R_{\text{Tierra}}^2}.
$$

Como $M_{\text{Tierra}}$, $G$ y $R_{\text{Tierra}}$ son los mismos para todos los objetos cercanos a la superficie, ese conjunto se resume en $g$:

$$
g=G\frac{M_{\text{Tierra}}}{R_{\text{Tierra}}^2}.
$$

Por eso obtenemos $P=mg$. La fórmula del peso no contradice la ley universal: es su forma práctica para objetos cerca de la superficie terrestre.

## Caída libre y aceleración de la gravedad

Cuando soltamos un objeto y despreciamos el aire, cae con aceleración aproximadamente constante $g$. Es un caso de [MRUA](/blog/mrua-eso-movimiento-rectilineo-uniformemente-acelerado-ejercicios/).

Si elegimos hacia abajo como sentido positivo y soltamos el objeto desde reposo:

$$
v=gt
$$

$$
d=\frac12gt^2.
$$

Una pelota se deja caer durante $2$ s. Entonces:

$$
v=9{,}8\cdot2=19{,}6\ \text{m/s}
$$

$$
d=\frac12\cdot9{,}8\cdot2^2=19{,}6\ \text{m}.
$$

Sin aire, una bola pesada y una ligera caen con la misma aceleración. La diferencia que observamos entre una hoja y una moneda se debe sobre todo al rozamiento con el aire, no a que la gravedad «tire más» de la moneda por ser más pesada.

## Órbitas: caer sin llegar al suelo

Un satélite está atraído por la Tierra igual que cualquier objeto. Sin embargo, tiene una velocidad horizontal muy alta. Mientras cae hacia la Tierra, la curvatura de su trayectoria acompaña la curvatura del planeta; por eso permanece en órbita.

No hace falta pensar que en una nave orbital no hay gravedad. Sí la hay, y precisamente proporciona la fuerza que curva la trayectoria. La sensación de ingravidez aparece porque nave y astronautas están cayendo juntos.

## Método para resolver ejercicios de gravitación

1. Decide si te piden **peso** cerca de la Tierra o fuerza entre dos masas separadas.
2. Escribe datos con unidades: kg, m y N.
3. Para peso, usa $P=mg$.
4. Para dos cuerpos a distancia, usa $F=GMm/r^2$.
5. Si aparece un radio, recuerda que $r$ mide entre centros, no entre superficies.
6. Revisa el resultado: el peso debe salir en N, no en kg.

La fórmula larga con $G$ suele requerir notación científica. Es buena práctica escribir las potencias de diez paso a paso, en vez de introducir todos los números de golpe en una calculadora.

## Errores frecuentes

### Escribir el peso en kilogramos

Los kilogramos son unidad de masa. El peso es una fuerza y se mide en newtons.

### Usar la masa en gramos

En el SI, la masa debe estar en kg. Una masa de $500$ g es $0{,}5$ kg antes de usar $P=mg$.

### Olvidar el cuadrado de la distancia

En $F=GMm/r^2$, solo la distancia está al cuadrado. Duplicar $r$ divide la fuerza entre cuatro.

### Pensar que no existe gravedad en el espacio

La gravedad disminuye con la distancia, pero no desaparece de golpe. Mantiene a planetas, lunas y satélites en sus trayectorias.

### Confundir acción y reacción con fuerzas que se anulan

La Tierra tira del objeto y el objeto tira de la Tierra con fuerzas iguales. No se anulan porque no actúan sobre el mismo cuerpo.

## Ejercicios resueltos

### 1. Peso de una persona

Una persona tiene masa $60$ kg. Calcula su peso en la Tierra con $g=9{,}8$ m/s².

$$
P=60\cdot9{,}8=588\ \text{N}.
$$

### 2. Peso en la Luna

La misma persona está en la Luna, con $g=1{,}62$ m/s².

$$
P_{\text{Luna}}=60\cdot1{,}62=97{,}2\ \text{N}.
$$

Su masa continúa siendo $60$ kg.

### 3. Efecto de la distancia

Dos masas están separadas una distancia $r$. Si pasan a estar a distancia $2r$, ¿qué ocurre con la fuerza?

$$
F'=G\frac{Mm}{(2r)^2}=G\frac{Mm}{4r^2}=\frac F4.
$$

La fuerza se reduce a una cuarta parte.

### 4. Caída libre

Se deja caer un objeto desde reposo durante $3$ s. Con $g=9{,}8$ m/s², ¿qué distancia cae?

$$
d=\frac12\cdot9{,}8\cdot3^2=44{,}1\ \text{m}.
$$

## Resumen para estudiar

Todas las masas se atraen con una fuerza que aumenta con las masas y disminuye con el cuadrado de la distancia. La masa se mide en kg y no cambia al viajar; el peso es una fuerza, se mide en N y vale $P=mg$ cerca de la Tierra. La caída libre es un MRUA con aceleración $g$.

Para practicar el movimiento de caída, repasa el [MRUA con fórmulas y ejercicios](/blog/mrua-eso-movimiento-rectilineo-uniformemente-acelerado-ejercicios/). Para aprender a identificar datos, unidades y modelo antes de calcular, consulta [cómo plantear problemas de Física y Química](/blog/fisica-y-quimica-como-plantear-problemas/). También puedes consultar las [clases particulares de Física](/clases-particulares/fisica-ingenieria/).
