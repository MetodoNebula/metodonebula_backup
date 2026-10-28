---
title: "GCSE Maths: histograms and cumulative frequency without confusing height and area"
date: "2026-10-15"
updated: "2026-10-28"
description: "Learn histograms, frequency density and cumulative frequency in GCSE Maths through calculation, interpretation and error checks."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-maths-revision-plan-foundation-higher-en,gcse-maths-algebra-graphs-revision-en"
image: "/assets/latex/histogram-density-en.svg"
language: "en"
translation: "gcse-maths-histograms-cumulative-frequency"
---

In a bar chart, height may represent frequency. In a histogram with unequal class widths, that rule fails: **the area of each bar represents frequency**. Its height is frequency density.

![Histogram with unequal classes and the relationship between area, density and frequency](/assets/latex/histogram-density-en.svg)

## The essential formula

$$
\text{frequency density}=\frac{\text{frequency}}{\text{class width}}.
$$

Equivalently, $\text{frequency}=\text{density}\times\text{class width}$. This is base times height: the bar's area.

## Table example

| Time (min) | Frequency | Width | Density |
|---|---:|---:|---:|
| $0<t\le10$ | 8 | 10 | 0.8 |
| $10<t\le20$ | 18 | 10 | 1.8 |
| $20<t\le40$ | 24 | 20 | 1.2 |
| $40<t\le50$ | 5 | 10 | 0.5 |

The third class has a greater frequency than the second but a lower bar because it is twice as wide. Area, not height alone, preserves the 24 observations.

## Recovering a frequency from the graph

If a bar runs from 30 to 50 with density 1.6:

$$
f=(50-30)\cdot1.6=32.
$$

There are 32 observations in that interval. Write the width explicitly so that 50 is not mistaken for the base.

## Cumulative frequency

Cumulative frequency adds every observation up to each upper class boundary. Frequencies $8,18,24,5$ give cumulative totals $8,26,50,55$.

Plot the upper boundaries against these totals and join them with an increasing curve. It must never fall: adding another class cannot reduce the running total.

## Median and quartiles from the curve

For $N$ values, locate:

$$
Q_1:\frac N4,\qquad \text{median}:\frac N2,\qquad Q_3:\frac{3N}{4}.
$$

Move horizontally to the curve and then down to the value axis. Grouped data give estimates. The interquartile range $IQR=Q_3-Q_1$ measures the central spread and is less sensitive to extremes than the full range.

## Estimating inside a class

A cumulative curve can estimate how many values lie below a point inside a class. A table calculation usually assumes a uniform distribution within the interval. State that assumption: the original individual values are unavailable.

## Histogram versus bar chart

| Histogram | Bar chart |
|---|---|
| Grouped continuous variable | Categories or discrete values |
| Bars touch | Bars may be separated |
| Area represents frequency | Height usually represents frequency |
| Continuous numerical axis | A categorical axis is possible |

## Common mistakes

- Setting height equal to frequency for unequal classes.
- Using the upper boundary instead of the difference as class width.
- Leaving gaps between continuous intervals.
- Plotting class midpoints on a cumulative frequency graph.
- Reading quartiles at $N/3$ and $2N/3$.
- Reporting an estimate as exact.

## Quick checks

The total bar area must represent the total frequency. The final cumulative value must equal $N$, and $Q_1<\text{median}<Q_3$ with a positive IQR.

Método Nebula's virtual campus develops statistics through tables, histograms, cumulative frequency, box plots and distribution comparisons. The contact button opens a route that trains calculation and written interpretation together.
