---
title: "IB Mathematics AI: regression, correlation and technology interpretation"
seoTitle: "IB Mathematics AI: Regression, Correlation and Technology"
date: "2026-10-20"
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

## Worked interpretation of a model

Suppose technology returns

$$
\widehat y=12.4+3.18x,\qquad r^2=0.81.
$$

If $x$ is hours of sunlight per day and $y$ is plant height in centimetres over a fixed observation period, the gradient predicts an increase of $3.18$ cm for one extra hour of sunlight **within the observed range**. The value $r^2=0.81$ does not mean that 81% of a plant's height is caused by sunlight.

If an observed height is 38 cm and the model predicts 35 cm, the residual is $+3$ cm. Positive residuals at both ends and negative ones in the middle would suggest curvature that a straight line misses.

## Interpolation and extrapolation

Interpolation estimates inside the range of observed $x$ values. Extrapolation goes beyond it. A line may fit data from 1 to 10 hours, but using it at 100 hours can produce a number with no sensible meaning.

## Comparing plausible models

Suppose a scatter plot rises more steeply as $x$ increases. A linear, quadratic and exponential regression can all return numerical statistics, but the best choice is not automatically the one with the largest displayed $r^2$. Compare the residual plots, whether the parameters make sense in context and whether the model gives credible values across the observed domain. A curve whose residuals alternate around zero is usually more defensible than a straight line with a clear U-shaped residual pattern.

## Technology checklist

- Label variables and units before entering data.
- Keep enough displayed digits until the final answer.
- Compare at least two plausible models when the graph is not linear.
- Interpret parameters in the situation, not only mathematically.
- State limits caused by sample size, outliers or extrapolation.

## Match the model to the data

The current AI guide expects students to select, fit, test and reflect on models, including reasonable domains and the danger of extrapolation. Compare a linear, exponential or quadratic shape before selecting one, and explain why the model is appropriate for the context rather than merely reporting the calculator output.

For deeper statistical interpretation, consult [regression and ANOVA](/blog/regresion-lineal-anova-cuando-utilizar-interpretar-resultados/). The [IB Mathematics preparation route](/preparacion-examenes/ib-mathematics/) can connect technology output with the wording expected in assessment.
