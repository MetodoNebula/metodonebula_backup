---
title: "IB Mathematics AA: differential equations and modelling"
seoTitle: "IB Mathematics AA: Differential Equations and Modelling"
date: "2026-12-17"
updated: "2026-11-10"
description: "IB Mathematics AA differential equations explained with separation of variables, initial conditions, exponential models and interpretation."
tag: "IB Mathematics"
category: "Exámenes internacionales"
relatedService: "/preparacion-examenes/ib-mathematics/"
relatedPosts: "ib-mathematics-aa-numeros-complejos-forma-polar,que-son-las-derivadas-y-para-que-se-utilizan,que-son-las-integrales-y-para-que-se-utilizan"
image: "/favicon.svg"
language: "en"
---

A differential equation describes a relationship involving a changing quantity and its rate of change. Solving it means finding a function that satisfies both the equation and, when given, the initial condition.

> **Direct answer.** For a separable equation, put all terms involving the dependent variable on one side and all terms involving the independent variable on the other, integrate, then use the initial condition before making numerical predictions.

## Exponential change

If a quantity $P$ changes at a rate proportional to itself,

$$
\frac{dP}{dt}=kP.
$$

Separating variables gives

$$
\frac{dP}{P}=k\,dt.
$$

After integration,

$$
\ln|P|=kt+C,
$$

so $P=Ae^{kt}$. An initial value $P(0)=P_0$ gives $A=P_0$.

If $k>0$ the model grows; if $k<0$ it decays. The sign is a conclusion from the equation, not a label added afterwards.

## A model with a limiting value

Not every growth process remains exponential. If a quantity approaches a carrying level $L$, a model may include

$$
\frac{dP}{dt}=kP\left(1-\frac{P}{L}\right).
$$

The signs tell the story: when $0<P<L$, the rate is positive; when $P>L$, the rate is negative. Before solving, use the differential equation itself to identify equilibrium values and whether they are stable.

## A separable example

Suppose

$$
\frac{dy}{dx}=3xy.
$$

Then

$$
\frac{dy}{y}=3x\,dx.
$$

Integrating gives $\ln|y|=\frac32x^2+C$, hence

$$
y=Ae^{3x^2/2}.
$$

If $y(0)=4$, then $A=4$. Substitution into the original equation is a direct check of the result.

## Modelling limits

Every differential-equation model makes assumptions. A population model with unlimited exponential growth eventually becomes unrealistic; a decay model assumes a constant proportional rate. State the interval and physical conditions where the model is intended to apply.

## Reading a solution before calculating with it

For $P=P_0e^{kt}$, the units in the exponent matter: $kt$ must be dimensionless, so $k$ has units of reciprocal time. If $P_0=120$ and $k=-0.08\ \mathrm{day^{-1}}$, then after five days

$$
P=120e^{-0.08(5)}\approx80.4.
$$

The result is smaller than 120, as the negative rate predicts. A numerical answer larger than the initial value would flag an incorrect sign before any marking scheme is needed.

## Common mistakes

- Integrating $1/y$ as $1/y^2$ instead of $\ln|y|$.
- Applying an initial condition before obtaining the general solution.
- Dropping the integration constant.
- Giving a formula without interpreting units or the sign of the rate.

## Course alignment

IB Mathematics content and assessment differ between AA/AI and SL/HL, and a revised AA course begins first teaching in 2027. Check your own course guide and session before assuming that a method is assessed in the same way. This article develops separable-model mathematics; it does not replace the current subject guide.

For connected calculus work, see [derivatives](/blog/que-son-las-derivadas-y-para-que-se-utilizan/) and [integrals](/blog/que-son-las-integrales-y-para-que-se-utilizan/). The [IB Mathematics preparation route](/preparacion-examenes/ib-mathematics/) can adapt practice to AA/AI and SL/HL.
