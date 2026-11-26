---
title: "Integrales de línea y teorema de Green: ejercicios para Ingeniería"
seoTitle: "Integrales de línea y teorema de Green: ejercicios resueltos"
date: "2026-11-27"
updated: "2026-11-27"
description: "Integrales de línea, campos conservativos y teorema de Green explicados con ejercicios de Cálculo Vectorial para estudiantes de Ingeniería."
tag: "Cálculo Vectorial"
category: "Matemáticas universitarias"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "derivadas-parciales-gradiente-ejercicios,maximos-minimos-varias-variables-ejercicios,multiplicadores-lagrange-extremos-restricciones-ejercicios"
image: "/favicon.svg"
---

Una integral de línea no se resuelve eligiendo una fórmula al azar. Primero hay que distinguir si integras una función a lo largo de una curva, el trabajo de un campo vectorial o una circulación sobre una curva cerrada. Esa decisión determina el método.

> **Respuesta directa.** Para calcular $\int_C\mathbf F\cdot d\mathbf r$, comprueba primero si el campo es conservativo. Si no lo es y $C$ es una curva cerrada simple, el teorema de Green puede convertir la integral de línea en una integral doble.

## Parametrizar una curva

Si una curva $C$ se describe por:

$$
\mathbf r(t)=(x(t),y(t)),\qquad a\leq t\leq b,
$$

entonces:

$$
d\mathbf r=\mathbf r'(t)\,dt.
$$

Para un campo $\mathbf F=(P,Q)$:

$$
\int_C\mathbf F\cdot d\mathbf r
=
\int_a^b
\left[P(x(t),y(t))x'(t)+Q(x(t),y(t))y'(t)\right]dt.
$$

No olvides los límites ni el sentido de recorrido: invertir la orientación cambia el signo de una integral de trabajo o circulación.

## Caso rápido: campo conservativo

Considera:

$$
\mathbf F(x,y)=(2xy,\;x^2+3y^2).
$$

En un dominio simplemente conexo:

$$
\frac{\partial P}{\partial y}=2x,
\qquad
\frac{\partial Q}{\partial x}=2x.
$$

Como coinciden, el campo es conservativo. Buscamos un potencial $\phi$ tal que $\nabla\phi=\mathbf F$:

$$
\phi(x,y)=x^2y+y^3.
$$

Por tanto, de $A$ a $B$:

$$
\int_C\mathbf F\cdot d\mathbf r=\phi(B)-\phi(A).
$$

No necesitas parametrizar cada trayecto: el resultado solo depende de los extremos.

## Teorema de Green

Para una curva cerrada $C$ orientada en sentido antihorario que encierra una región $D$:

$$
\oint_C P\,dx+Q\,dy
=
\iint_D
\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dA.
$$

Es especialmente útil cuando la curva está formada por varios tramos o su parametrización sería incómoda.

## Ejemplo sobre un rectángulo

Calcula la circulación de:

$$
\mathbf F=(-y,\;x)
$$

sobre el borde del rectángulo $0\leq x\leq2$, $0\leq y\leq1$, con orientación positiva.

Aquí:

$$
\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}
=
1-(-1)=2.
$$

Así:

$$
\oint_C\mathbf F\cdot d\mathbf r
=
\iint_D2\,dA
=
2\cdot(2\cdot1)=4.
$$

El resultado mide una circulación positiva del campo alrededor de la región.

## Errores habituales

- Confundir $\int_C f\,ds$ con $\int_C\mathbf F\cdot d\mathbf r$.
- Usar Green en una curva que no es cerrada.
- Olvidar cambiar el signo si la orientación es horaria.
- Comprobar derivadas cruzadas sin verificar el dominio.
- Parametrizar cuando existe un potencial y se pide solo trabajo entre dos puntos.

Para construir la base de estos problemas, repasa [derivadas parciales y gradiente](/blog/derivadas-parciales-gradiente-ejercicios/). En Cálculo Vectorial, Física Matemática o Ingeniería, las [clases de Matemáticas universitarias](/clases-particulares/matematicas-universidad/) pueden adaptarse a los ejercicios y la notación de tu grado.
