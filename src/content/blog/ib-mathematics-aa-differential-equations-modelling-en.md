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

## Common mistakes

- Integrating $1/y$ as $1/y^2$ instead of $\ln|y|$.
- Applying an initial condition before obtaining the general solution.
- Dropping the integration constant.
- Giving a formula without interpreting units or the sign of the rate.

For connected calculus work, see [derivatives](/blog/que-son-las-derivadas-y-para-que-se-utilizan/) and [integrals](/blog/que-son-las-integrales-y-para-que-se-utilizan/). The [IB Mathematics preparation route](/preparacion-examenes/ib-mathematics/) can adapt practice to AA/AI and SL/HL.
