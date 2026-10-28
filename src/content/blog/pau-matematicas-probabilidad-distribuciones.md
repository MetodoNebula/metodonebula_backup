---
title: "Probabilidad y distribuciones en PAU: aprende a elegir el modelo antes de calcular"
date: "2026-10-17"
updated: "2026-10-28"
description: "Probabilidad para Matemáticas II PAU: sucesos, binomial, normal, tipificación, ejemplos, comprobaciones y errores frecuentes."
tag: "PAU"
category: "Selectividad"
relatedService: "/preparacion-examenes/matematicas-selectividad/"
relatedPosts: "probabilidad-condicionada-bayes-problemas-resueltos,como-preparar-pau-matematicas-ii"
image: "/assets/latex/normal-distribution.svg"
---

La calculadora puede devolver ocho decimales y aun así responder a otro problema. En probabilidad PAU, la decisión más importante ocurre antes: definir la variable, traducir el suceso y justificar el modelo.

![Distribución normal con la zona central sombreada y una secuencia de comprobación](/assets/latex/normal-distribution.svg)

## Escribe el suceso antes de operar

“Al menos 3” significa $X\ge3$; “más de 3”, $X>3$; “como máximo 3”, $X\le3$. Una diferencia de una unidad cambia la probabilidad. Anota la desigualdad y, si la variable es discreta, los valores incluidos.

## Probabilidad condicionada

La probabilidad de $A$ sabiendo $B$ es:

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)},\qquad P(B)>0.
$$

Condicionar cambia el universo de referencia. Independencia significa $P(A\cap B)=P(A)P(B)$, no que los sucesos sean incompatibles. Sucesos incompatibles con probabilidad positiva no son independientes.

## Cuándo usar una binomial

Comprueba cuatro condiciones:

1. número fijo de ensayos $n$;
2. dos resultados relevantes por ensayo;
3. probabilidad de éxito $p$ constante;
4. independencia razonable.

Entonces $X\sim B(n,p)$ y:

$$
P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}.
$$

La media es $np$ y la varianza $np(1-p)$.

## Ejemplo binomial

Una prueba se supera con probabilidad 0,7 y se realizan 5 intentos independientes. La probabilidad de exactamente 4 éxitos es:

$$
P(X=4)=\binom54(0.7)^4(0.3)\approx0.36015.
$$

Para “al menos 4” debes añadir $P(X=5)$; para “al menos uno” suele ser más rápido usar el complemento $1-P(X=0)$.

## Distribución normal

Si $X\sim N(\mu,\sigma)$, estandariza mediante:

$$
Z=\frac{X-\mu}{\sigma}.
$$

Antes de usar una tabla o calculadora, dibuja la campana y sombrea la zona. El dibujo anticipa si el resultado debe ser menor o mayor que 0,5 y evita restas invertidas.

## Ejemplo normal

Las puntuaciones siguen $N(70,10)$, donde 10 es la desviación típica. Para $P(X>85)$:

$$
z=\frac{85-70}{10}=1.5.
$$

Entonces:

$$
P(X>85)=P(Z>1.5)\approx0.0668.
$$

Tiene sentido: 85 está 1,5 desviaciones por encima de la media, así que la cola debe ser pequeña.

## Aproximación normal a binomial

Cuando el temario lo incluya y las condiciones sean adecuadas, recuerda la corrección por continuidad. Por ejemplo, $P(X\le20)$ se aproxima con $P(Y<20.5)$. Justifica la aproximación según el criterio enseñado en tu comunidad.

## Errores frecuentes

- Usar binomial sin comprobar independencia o $p$ constante.
- Confundir desviación típica y varianza.
- Traducir mal “al menos” y “más de”.
- Olvidar el complemento.
- Estandarizar con el signo invertido.
- Obtener una probabilidad fuera de $[0,1]$ y no revisarla.

## Rutina PAU

Variable → modelo → suceso → cálculo → comprobación → frase final. Escribe las seis etapas incluso cuando la calculadora haga la operación central. El corrector debe ver por qué ese resultado responde a esa pregunta.

El campus virtual de Método Nebula desarrolla probabilidad, distribuciones y preparación de examen con teoría, ejemplos, ejercicios y simulación. Si quieres identificar si pierdes puntos por modelo, lenguaje o cálculo, utiliza el botón de contacto.
