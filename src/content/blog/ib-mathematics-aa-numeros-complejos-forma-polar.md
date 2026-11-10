---
title: "IB Mathematics AA: números complejos, forma polar y teorema de De Moivre"
seoTitle: "IB Mathematics AA: números complejos, forma polar y De Moivre"
date: "2026-12-07"
updated: "2026-11-10"
description: "Números complejos para IB Mathematics AA: forma cartesiana y polar, argumento, módulo, potencias, raíces y De Moivre."
tag: "IB Mathematics"
category: "Exámenes internacionales"
relatedService: "/preparacion-examenes/ib-mathematics/"
relatedPosts: "como-preparar-ib-mathematics-aa-ai,ib-mathematics-internal-assessment-metodo-ideas,gcse-maths-trigonometry-bearings-en"
image: "/favicon.svg"
---

Los números complejos se vuelven más sencillos cuando se representan como puntos y vectores en el plano. La forma cartesiana sirve para sumar; la polar revela por qué multiplicar complejos suma ángulos y multiplica módulos.

> **Respuesta directa.** Si $z=a+bi$, su módulo es $|z|=\sqrt{a^2+b^2}$ y una forma polar es $z=r(\cos\theta+i\sin\theta)$. Para multiplicar, multiplica módulos y suma argumentos; para elevar a potencias usa el teorema de De Moivre.

## De cartesiana a polar

Para $z=1+i\sqrt3$,

$$
|z|=\sqrt{1^2+(\sqrt3)^2}=2.
$$

El punto está en el primer cuadrante y cumple $\tan\theta=\sqrt3$, de modo que $\theta=\pi/3$. Por tanto,

$$
z=2\left(\cos\frac{\pi}{3}+i\sin\frac{\pi}{3}\right).
$$

El cuadrante importa: calcular solo la tangente puede llevar al argumento equivocado.

## Multiplicación y división

Si $z_1=r_1\operatorname{cis}\theta_1$ y $z_2=r_2\operatorname{cis}\theta_2$, entonces

$$
z_1z_2=r_1r_2\operatorname{cis}(\theta_1+\theta_2).
$$

Al dividir, divide módulos y resta argumentos. Esta regla es una consecuencia geométrica: cada multiplicación combina una dilatación y un giro.

## Teorema de De Moivre

Para un entero $n$,

$$
[r\operatorname{cis}\theta]^n=r^n\operatorname{cis}(n\theta).
$$

Así, las potencias altas se calculan sin expandir binomios repetidamente. Para encontrar las raíces $n$-ésimas de un complejo, reparte el argumento en giros iguales:

$$
w_k=\sqrt[n]{r}\operatorname{cis}\left(\frac{\theta+2\pi k}{n}\right),
\qquad k=0,\ldots,n-1.
$$

Las raíces quedan regularmente espaciadas sobre un círculo.

## Comprobaciones útiles

- El módulo de un producto debe ser el producto de módulos.
- Las $n$ raíces tienen el mismo módulo.
- Un argumento puede diferir en múltiplos de $2\pi$ sin cambiar el número complejo.

Para integrar este bloque con el estilo de preguntas AA y tus condiciones de examen, consulta la [preparación de IB Mathematics](/preparacion-examenes/ib-mathematics/) y la guía de [IB Mathematics AA y AI](/blog/como-preparar-ib-mathematics-aa-ai/).
