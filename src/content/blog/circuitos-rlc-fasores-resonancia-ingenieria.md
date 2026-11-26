---
title: "Circuitos RLC en corriente alterna: fasores, impedancia y resonancia"
seoTitle: "Circuitos RLC: fasores, impedancia y resonancia"
date: "2026-11-27"
updated: "2026-11-27"
description: "Circuitos RLC de corriente alterna para Ingeniería: cómo usar fasores, impedancia compleja, desfase, potencia y frecuencia de resonancia."
tag: "Electrotecnia"
category: "Física y Química"
relatedService: "/clases-particulares/fisica-ingenieria/"
relatedPosts: "circuitos-corriente-continua-problemas-resueltos-universidad,electromagnetismo-universidad-campo-potencial-circuitos,mecanica-fluidos-bernoulli-continuidad-ejercicios-resueltos"
image: "/favicon.svg"
---

Un circuito RLC no se resuelve con la ley de Ohm de corriente continua usando solo números reales. En régimen sinusoidal, resistencia, bobina y condensador responden de forma distinta a la frecuencia; los fasores permiten conservar la estructura de Kirchhoff sin perder el desfase.

> **Respuesta directa.** En un RLC serie, usa la impedancia $Z=R+j(\omega L-1/\omega C)$. La corriente fasorial es $\underline I=\underline V/Z$ y la resonancia ocurre cuando las reactancias inductiva y capacitiva se cancelan.

## De una señal sinusoidal a un fasor

Para una tensión:

$$
v(t)=V_m\cos(\omega t+\phi),
$$

se trabaja normalmente con su valor eficaz y representación compleja. Si todos los elementos operan a la misma frecuencia, derivar e integrar se traduce en multiplicar o dividir por $j\omega$.

No mezcles valor máximo $V_m$ y valor eficaz $V_{\text{rms}}$ en un mismo cálculo:

$$
V_{\text{rms}}=\frac{V_m}{\sqrt2}.
$$

## Impedancias básicas

En régimen sinusoidal:

$$
Z_R=R,
\qquad
Z_L=j\omega L,
\qquad
Z_C=\frac{1}{j\omega C}=-\frac{j}{\omega C}.
$$

La parte imaginaria indica almacenamiento y devolución de energía, no una “resistencia negativa”.

Para un RLC serie:

$$
Z=R+j\left(\omega L-\frac{1}{\omega C}\right).
$$

## Ejemplo: calcular la corriente

Un circuito serie tiene $R=20\,\Omega$, $L=0{,}10$ H, $C=100\,\mu$F y frecuencia $f=50$ Hz. Entonces:

$$
\omega=2\pi f\approx314\text{ rad/s}.
$$

Las reactancias son aproximadamente:

$$
X_L=\omega L\approx31{,}4\,\Omega,
\qquad
X_C=\frac{1}{\omega C}\approx31{,}8\,\Omega.
$$

La parte reactiva es muy pequeña, de modo que $Z$ es casi puramente resistiva. Si la tensión eficaz es 100 V, la corriente eficaz queda cerca de:

$$
I\approx\frac{100}{20}=5\text{ A}.
$$

La aproximación tiene sentido porque el circuito está próximo a la resonancia.

## Resonancia en serie

La resonancia ocurre cuando:

$$
\omega_0L=\frac{1}{\omega_0C}.
$$

Por tanto:

$$
\omega_0=\frac{1}{\sqrt{LC}},
\qquad
f_0=\frac{1}{2\pi\sqrt{LC}}.
$$

En un RLC serie ideal, en resonancia la impedancia vale $R$ y la corriente es máxima. Eso no significa que las tensiones en L y C sean pequeñas: pueden ser grandes y estar en oposición de fase.

## Potencia activa, reactiva y aparente

Con valores eficaces:

$$
S=VI^*,
$$

donde la potencia compleja se escribe:

$$
S=P+jQ.
$$

La potencia activa es $P=VI\cos\varphi$ y la reactiva es $Q=VI\sin\varphi$. Un factor de potencia bajo no siempre significa un error de cálculo: refleja un desfase que debe interpretarse en el circuito.

## Errores típicos

- Usar $X_L=\omega/L$ en vez de $\omega L$.
- Olvidar el signo negativo de la reactancia capacitiva.
- Sumar módulos de impedancia en vez de cantidades complejas.
- Mezclar hercios con radianes por segundo.
- Concluir que resonancia equivale a potencia infinita: la resistencia limita la corriente.

Para consolidar primero las leyes de Kirchhoff y los signos en circuitos, repasa [circuitos de corriente continua](/blog/circuitos-corriente-continua-problemas-resueltos-universidad/). Las [clases de Física e Ingeniería](/clases-particulares/fisica-ingenieria/) pueden preparar Electrotecnia, Teoría de Circuitos o Física II con el nivel de tu grado.
