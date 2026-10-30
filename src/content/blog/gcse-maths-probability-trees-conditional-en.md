---
title: "GCSE Maths: probability trees and conditional probability without adding the wrong branches"
seoTitle: "GCSE Maths: probability trees and conditional probability"
date: "2026-09-16"
updated: "2026-09-16"
description: "Master GCSE probability trees: dependent events, sampling without replacement, conditional probability, branch products and checks."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-maths-histograms-cumulative-frequency-en,gcse-maths-algebra-graphs-revision-en,gcse-maths-transformations-vectors-en"
image: "/assets/latex/probability-tree-conditional.svg"
language: "en"
translation: "gcse-maths-probability-trees-conditional"
---

A probability tree is more than a diagram carrying fractions. Each route represents an intersection of events and each split must contain probabilities conditional on what has already happened.

> **Direct answer.** Multiply probabilities along one route because all its events must occur. Add complete routes when any of them gives the required result. Without replacement, update both numerator and denominator after the first selection.

![Probability tree with events A and B and conditional probabilities](/assets/latex/probability-tree-conditional.svg)

## Rules that build the tree

At every split, branch probabilities add to 1:

$$
P(A)+P(A^c)=1.
$$

For a two-stage route:

$$
P(A\cap B)=P(A)P(B\mid A).
$$

$P(B\mid A)$ means the probability of B given that A has occurred. It need not equal $P(B)$.

## Replacement and independence

A bag contains 3 red balls and 2 blue balls. One ball is taken, replaced and a second is taken. The probability of two reds is:

$$
P(RR)=\frac35\cdot\frac35=\frac9{25}.
$$

The bag returns to its original composition, so the selections are independent in this model.

Getting one of each colour has two routes:

$$
P(RB\text{ or }BR)=\frac35\frac25+\frac25\frac35=\frac{12}{25}.
$$

Multiplying only one route would omit a possible order.

## Without replacement

Using the same bag without returning the first ball:

$$
P(RR)=\frac35\cdot\frac24=\frac3{10}.
$$

After one red has been removed, 2 reds remain among 4 balls. If the first ball were blue, the second red probability would be $3/4$. Each second branch depends on the first outcome.

## Conditional probability from data

The definition is:

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)},
$$

provided $P(B)>0$. The denominator restricts the sample space to cases where B occurred.

If 40 students play sport, 18 of those also play an instrument, and there are 100 students in total:

$$
P(I\mid S)=\frac{18/100}{40/100}=\frac{18}{40}=0.45.
$$

Dividing by 100 would answer $P(I\cap S)$ instead of the conditional question.

## Reversing a tree and Bayes' rule

A tree may give $P(A)$, $P(B\mid A)$ and $P(B\mid A^c)$ but ask for $P(A\mid B)$. First calculate:

$$
P(B)=P(A)P(B\mid A)+P(A^c)P(B\mid A^c),
$$

then:

$$
P(A\mid B)=\frac{P(A)P(B\mid A)}{P(B)}.
$$

A condition cannot be reversed by swapping letters. $P(A\mid B)$ and $P(B\mid A)$ use different restricted sample spaces.

## Quick checks

- Each pair of branches from one node adds to 1.
- Every probability lies between 0 and 1.
- All complete end routes add to 1.
- Without replacement, the total number of objects falls.
- “At least one” may be easier as $1-P(\text{none})$.

## Common mistakes

- Adding probabilities along one route.
- Multiplying alternative routes.
- Keeping the same denominator without replacement.
- Confusing mutually exclusive and independent events.
- Rounding each branch before the final result.

## From one tree to complete GCSE preparation

Método Nebula's virtual campus connects probability, statistics and algebra through visual examples, graded practice and exam questions. Trees are trained first as structures and then as conditional calculations. Use the contact button to access a bilingual route with theory, exercises and worked models.
