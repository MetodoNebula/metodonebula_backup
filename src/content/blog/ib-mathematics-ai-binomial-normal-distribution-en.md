---
title: "IB Mathematics AI probability: binomial and normal distributions"
seoTitle: "IB Mathematics AI Binomial and Normal Distributions"
date: "2026-12-29"
updated: "2026-11-10"
description: "IB Mathematics AI probability distributions explained with binomial conditions, normal-model standardization, technology and worked examples."
tag: "IB Mathematics"
category: "Exámenes internacionales"
relatedService: "/preparacion-examenes/ib-mathematics/"
relatedPosts: "ib-mathematics-ai-regression-correlation-technology-en,regresion-lineal-anova-cuando-utilizar-interpretar-resultados,como-preparar-ib-mathematics-aa-ai"
image: "/favicon.svg"
language: "en"
---

Probability-distribution questions test whether a model fits a situation before they test calculator commands. A binomial calculation can be numerically flawless and still be invalid if the trials are not independent or the probability is not constant.

> **Direct answer.** Define the random variable, justify the model from the context, translate the requested probability into symbols and then use technology or a formula with the correct inclusive endpoints. Finally, decide whether the numerical answer is plausible for the distribution.

## When a binomial model is appropriate

Write $X\sim\mathrm{Bin}(n,p)$ only when there is a fixed number of trials, two outcomes per trial, a constant probability of success and independent trials. Here $n$ is the number of trials and $p$ is the probability of the defined success.

If 12 independently manufactured components each have a 0.08 probability of being defective, then the number of defective components can be modelled as $X\sim\mathrm{Bin}(12,0.08)$. The word independently matters: sampling without replacement from a small known batch would not automatically meet the condition.

## Exact, cumulative and complementary probability

For exactly $r$ successes,

$$
P(X=r)=\binom nrp^r(1-p)^{n-r}.
$$

For at most $r$, use $P(X\le r)$. For at least $r$, a complementary calculation is often clearer:

$$
P(X\ge r)=1-P(X\le r-1).
$$

The $r-1$ is essential. “At least 3” includes 3, so the complement is 0, 1 or 2, not 0 through 3.

## Worked binomial example

With $X\sim\mathrm{Bin}(12,0.08)$, find the probability of at least two defective components. Use the complement:

$$
P(X\ge2)=1-P(X=0)-P(X=1).
$$

$$
=1-(0.92)^{12}-\binom{12}{1}(0.08)(0.92)^{11}\approx0.249.
$$

The expected number is $np=0.96$, so a probability near one quarter for two or more defects is more credible than a result close to one. That expectation is not the answer, but it is a useful sense check.

## The normal model and standardization

A continuous normal random variable is written $X\sim N(\mu,\sigma^2)$, where $\mu$ is the mean and $\sigma$ is the standard deviation. Standardization converts a value into a number of standard deviations from the mean:

$$
z=\frac{x-\mu}{\sigma}.
$$

If test times follow $T\sim N(54,6^2)$ minutes, then 66 minutes corresponds to $z=(66-54)/6=2$. A probability above 66 minutes is the area to the right of $z=2$, which technology can calculate.

## Reading calculator output accurately

Technology may use commands for a lower bound, upper bound, mean and standard deviation. For $P(48<T<60)$, the lower and upper bounds are 48 and 60. For $P(T>60)$, use 60 as the lower bound and an appropriately large upper bound or a complementary probability, depending on the calculator.

Because normal distributions are continuous, $P(T<60)$ and $P(T\le60)$ are equal. That is unlike a discrete binomial distribution, where inclusive wording changes which integer outcomes are included.

## Model criticism belongs in the answer

A normal model can assign a small probability to an impossible negative value if the mean is not far from zero relative to the standard deviation. That does not necessarily invalidate every estimate, but it is a limitation to acknowledge. Similarly, a bell-shaped histogram alone is not proof of normality; context, sample size and outliers matter.

## A short checklist for distribution questions

- Define success and the random variable before selecting a distribution.
- Translate “at least”, “at most” and “between” into inequalities.
- Check binomial assumptions instead of only typing $n$ and $p$.
- Use $\sigma$, not $\sigma^2$, as the denominator in a $z$-score.
- Give a probability as a decimal or percentage with sensible rounding and an interpretation in context.

The current Mathematics AI material treats technology as a tool for calculation and interpretation, not a replacement for model selection. Pair this with [regression and residuals](/blog/ib-mathematics-ai-regression-correlation-technology-en/) to strengthen the modelling side of statistics.
