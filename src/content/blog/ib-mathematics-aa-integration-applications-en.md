---
title: "IB Mathematics AA integration: areas, volumes and interpretation"
seoTitle: "IB Mathematics AA Integration: Areas, Volumes and Applications"
date: "2026-10-28"
updated: "2026-11-10"
description: "IB Mathematics AA integration explained with definite integrals, signed area, volumes of revolution and fully worked original examples."
tag: "IB Mathematics"
category: "Exámenes internacionales"
relatedService: "/preparacion-examenes/ib-mathematics/"
relatedPosts: "ib-mathematics-aa-differential-equations-modelling-en,que-son-las-integrales-y-para-que-se-utilizan,que-son-las-derivadas-y-para-que-se-utilizan"
image: "/favicon.svg"
language: "en"
---

Integration in Mathematics AA is not just antidifferentiation. A definite integral accumulates signed change, which is why a correct integral can still be the wrong answer when the question asks for geometric area or a physically meaningful total.

> **Direct answer.** Sketch or analyse the function first, identify where it crosses an axis, integrate on the correct intervals and interpret the sign. For a volume of revolution, write the radius explicitly before choosing the formula.

## Indefinite and definite integrals do different jobs

An indefinite integral produces a family of functions:

$$
\int 3x^2\,dx=x^3+C.
$$

The constant is required because differentiation removes constants. A definite integral produces a number:

$$
\int_a^b f(x)\,dx=F(b)-F(a),
$$

where $F'(x)=f(x)$. Its sign records whether the graph lies mostly above or below the horizontal axis over that interval.

## Worked area problem with a crossing point

Find the total area between $y=x-2$ and the $x$-axis from $x=0$ to $x=5$. The line crosses the axis at $x=2$. On $[0,2]$ it is below the axis, so its signed integral is negative; on $[2,5]$ it is positive.

$$
\text{Area}=-\int_0^2(x-2)\,dx+\int_2^5(x-2)\,dx.
$$

With antiderivative $x^2/2-2x$,

$$
-\left[\frac{x^2}{2}-2x\right]_0^2+\left[\frac{x^2}{2}-2x\right]_2^5
=2+\frac92=6.5.
$$

Writing just $\int_0^5(x-2)\,dx$ would give the signed displacement in area units, not the requested total geometric area.

## Area between two curves

For the region between $y=f(x)$ and $y=g(x)$, the integrand is top minus bottom. Find their intersections first; the upper function can change across the interval.

For $y=x$ and $y=x^2$ between 0 and 1, $x\ge x^2$, so

$$
A=\int_0^1(x-x^2)\,dx=\left[\frac{x^2}{2}-\frac{x^3}{3}\right]_0^1=\frac16.
$$

The sketch is a mathematical check: it tells you the area must be positive and small because both curves are confined between 0 and 1.

## Volumes of revolution: identify the radius

When the region under $y=f(x)$ is rotated around the $x$-axis, a typical disk has radius $f(x)$ and area $\pi[f(x)]^2$. Therefore

$$
V=\pi\int_a^b[f(x)]^2\,dx.
$$

If $y=x$ from 0 to 2 rotates about the $x$-axis,

$$
V=\pi\int_0^2x^2\,dx=\pi\left[\frac{x^3}{3}\right]_0^2=\frac{8\pi}{3}.
$$

The radius is a distance. If rotation is about $y=3$, the radius is not $f(x)$ automatically: it is the vertical distance $|3-f(x)|$. Write that distance before squaring it.

## Integration in a physical context

If velocity is given by $v(t)$, then $\int_a^b v(t)\,dt$ is displacement. Total distance requires splitting the calculation wherever velocity changes sign, just like a geometric area problem. Units provide a quick check: $(\mathrm{m\,s^{-1}})\times\mathrm{s}=\mathrm{m}$.

For a rate such as litres per minute, integrating over minutes gives litres. A bare numerical result is incomplete if it has not been interpreted in the context and correct units.

## Common errors that a sketch prevents

- Forgetting $+C$ in an indefinite integral.
- Treating signed area as total area when the graph crosses the axis.
- Choosing bottom minus top between curves.
- Squaring the wrong radius in a volume calculation.
- Reporting an answer without units or a conclusion in context.

The 2027 Mathematics AA update retains a focus on functions and calculus while changing some course details, so students should check the guide that applies to their own session. This article gives original practice mathematics, not reproduced assessment questions. For connected modelling, read [differential equations](/blog/ib-mathematics-aa-differential-equations-modelling-en/).
