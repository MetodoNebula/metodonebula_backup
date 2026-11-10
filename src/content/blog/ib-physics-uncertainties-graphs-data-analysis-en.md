---
title: "IB Physics uncertainties and graphs: data analysis with worked examples"
seoTitle: "IB Physics Uncertainties, Graphs and Data Analysis"
date: "2026-12-21"
updated: "2026-11-10"
description: "IB Physics data analysis explained through uncertainty, percentage uncertainty, gradients, error bars and original worked examples."
tag: "IB Physics"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "ib-physics-formula-booklet-mechanics-units-worked-problems-en,ib-physics-data-booklet-waves-fields-electricity-en,gcse-physics-forces-exam-questions-en"
image: "/favicon.svg"
language: "en"
---

In IB Physics, a measured value without its uncertainty is incomplete data. The aim is not to make an experiment look exact; it is to show what the apparatus can genuinely support and whether the conclusion survives that limitation.

> **Direct answer.** Record a measurement with a sensible absolute uncertainty, propagate that uncertainty through the calculation, then use error bars and the gradient to judge how strongly the data support a model. More decimal places do not create more accuracy.

## Absolute, fractional and percentage uncertainty

An absolute uncertainty has the same unit as the measurement. A length reported as $12.4\pm0.1\ \mathrm{cm}$ has an absolute uncertainty of $0.1\ \mathrm{cm}$. Its fractional uncertainty is $0.1/12.4$, and its percentage uncertainty is

$$
\frac{0.1}{12.4}\times100\approx0.8\%.
$$

Percentage uncertainty lets unlike measurements be compared fairly. An uncertainty of $\pm0.1\ \mathrm{cm}$ is significant for a 1.0 cm length but much less important for a 1.0 m length.

## Propagating uncertainty through a calculation

For multiplication, division and powers, percentage uncertainties are combined at school level. If $\rho=m/V$, and mass has a $2\%$ uncertainty while volume has a $3\%$ uncertainty, the density has an estimated percentage uncertainty of

$$
2\%+3\%=5\%.
$$

For addition or subtraction, absolute uncertainties are combined instead. If two independently measured lengths are added as $4.2\pm0.1\ \mathrm{cm}$ and $7.8\pm0.1\ \mathrm{cm}$, report $12.0\pm0.2\ \mathrm{cm}$ before converting that result into a percentage if needed.

The rule matters because it tells you where experimental quality is being lost. Reducing a tiny mass uncertainty does little if volume dominates the final uncertainty.

## Worked calculation: density from measured values

A sample has mass $m=(18.6\pm0.1)\ \mathrm{g}$ and volume $V=(6.20\pm0.10)\ \mathrm{cm^3}$. Its density is

$$
\rho=\frac{18.6}{6.20}=3.00\ \mathrm{g\,cm^{-3}}.
$$

The percentage uncertainties are

$$
\frac{0.1}{18.6}\times100=0.5\%,\qquad
\frac{0.10}{6.20}\times100=1.6\%.
$$

So the combined percentage uncertainty is about $2.1\%$. The absolute uncertainty in density is $0.021\times3.00\approx0.06\ \mathrm{g\,cm^{-3}}$, giving

$$
\rho=(3.00\pm0.06)\ \mathrm{g\,cm^{-3}}.
$$

The volume measurement contributes more uncertainty, so improving the balance would not be the first priority.

## Graphs are models, not decoration

Put the independent variable on the horizontal axis and the dependent variable on the vertical axis. Label both with quantity and unit, choose a scale that uses most of the plotting area and plot uncertainty bars where they are meaningful.

For a linear relationship $y=mx+c$, the gradient $m$ and intercept $c$ often have physical meaning. If a force–extension graph follows $F=kx$, the gradient is the spring constant $k$. It is not enough to calculate a gradient: state its unit and what it represents in the experiment.

## Gradient uncertainty from limiting lines

First draw a best-fit line that represents the overall trend. Then draw the steepest and shallowest reasonable lines that still pass through the uncertainty bars. If their gradients are $m_{\max}$ and $m_{\min}$, estimate

$$
\Delta m=\frac{m_{\max}-m_{\min}}{2}.
$$

Suppose the best-fit gradient is $4.8\ \mathrm{N\,m^{-1}}$, while limiting gradients are $5.2$ and $4.4\ \mathrm{N\,m^{-1}}$. Then $\Delta m=(5.2-4.4)/2=0.4\ \mathrm{N\,m^{-1}}$, so a defensible result is $k=(4.8\pm0.4)\ \mathrm{N\,m^{-1}}$.

## What the graph can and cannot claim

If the uncertainty bars overlap a proposed line, the data may be consistent with that model; they do not prove it. A non-zero intercept may indicate a systematic offset, but it may also be consistent with zero within uncertainty. Separate the observation from the explanation: first describe the pattern, then give a physical reason that fits it.

## A concise data-analysis check

- Report raw measurements to the resolution of the instrument, not to invented precision.
- Carry extra digits in intermediate steps, then round the final uncertainty sensibly.
- Give units for every plotted axis, gradient and derived constant.
- Do not force a line through the origin unless the model requires it and the data support it.
- Use uncertainty to qualify a conclusion rather than hiding a disagreement.

This guide uses original examples rather than reproducing assessment material. For tailored work on experimental reasoning and physics calculations, see [GCSE and IB preparation](/clases-particulares/gcse-ib/).
