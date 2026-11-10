---
title: "IB Mathematics AI: regression, correlation and technology interpretation"
seoTitle: "IB Mathematics AI: Regression, Correlation and Technology"
date: "2026-12-19"
updated: "2026-11-10"
description: "IB Mathematics AI regression and correlation explained with technology output, residuals, interpolation, extrapolation and interpretation."
tag: "IB Mathematics"
category: "Exámenes internacionales"
relatedService: "/preparacion-examenes/ib-mathematics/"
relatedPosts: "regresion-lineal-anova-cuando-utilizar-interpretar-resultados,ib-mathematics-internal-assessment-metodo-ideas,como-preparar-ib-mathematics-aa-ai"
image: "/favicon.svg"
language: "en"
---

Regression in IB Mathematics AI is not a calculator result to copy into a conclusion. A model must be chosen, its parameters interpreted in context and its limitations identified from the data and residuals.

> **Direct answer.** Use a scatter plot before selecting a model. Interpret the coefficient of determination and residuals alongside the equation, interpolate within the observed range when justified and treat extrapolation with caution.

## Linear regression in context

A linear model has the form

$$
y=a+bx.
$$

The gradient $b$ is the predicted change in $y$ for one unit of $x$. The intercept $a$ is meaningful only if $x=0$ is within, or reasonably close to, the context of the data.

For example, if a model predicts study score from hours worked, a positive gradient describes an association in the observed sample. It does not prove that every extra hour causes exactly that change in every student.

## Correlation is not a verdict

The correlation coefficient measures the strength and direction of a linear association. A high magnitude can still hide a curved pattern, an outlier or a common cause affecting both variables. Always inspect the graph.

## Residuals reveal what the equation misses

A residual is

$$
\text{observed value}-\text{predicted value}.
$$

Residuals scattered randomly around zero support a linear model more than a visible curve or widening spread would. A residual plot therefore adds evidence that a calculator's regression output cannot provide by itself.

## Interpolation and extrapolation

Interpolation estimates inside the range of observed $x$ values. Extrapolation goes beyond it. A line may fit data from 1 to 10 hours, but using it at 100 hours can produce a number with no sensible meaning.

## Technology checklist

- Label variables and units before entering data.
- Keep enough displayed digits until the final answer.
- Compare at least two plausible models when the graph is not linear.
- Interpret parameters in the situation, not only mathematically.
- State limits caused by sample size, outliers or extrapolation.

For deeper statistical interpretation, consult [regression and ANOVA](/blog/regresion-lineal-anova-cuando-utilizar-interpretar-resultados/). The [IB Mathematics preparation route](/preparacion-examenes/ib-mathematics/) can connect technology output with the wording expected in assessment.
