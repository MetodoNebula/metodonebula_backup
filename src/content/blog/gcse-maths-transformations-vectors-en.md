---
title: "GCSE Maths: transformations and vectors without getting lost on the grid"
seoTitle: "GCSE Maths: transformations and vectors"
date: "2026-10-19"
updated: "2026-10-19"
description: "Master GCSE translations, rotations, reflections, enlargements and vectors with correct notation, centres and scale factors."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-maths-algebra-graphs-revision-en,gcse-maths-trigonometry-bearings-en,gcse-maths-histograms-cumulative-frequency-en"
image: "/assets/latex/gcse-vector-transform.svg"
language: "en"
translation: "gcse-maths-transformations-vectors"
---

In transformation questions, a correct image may earn few marks if its description is incomplete. “It moves” is not enough: name the transformation and state every parameter that defines it.

> **Direct answer.** A translation needs a vector; a rotation needs centre, angle and direction; a reflection needs its mirror line; an enlargement needs centre and scale factor. Vectors describe displacements and add component by component.

![A triangle translated on a coordinate grid by a vector](/assets/latex/gcse-vector-transform.svg)

## Translations

The vector

$$
\begin{pmatrix}5\\2\end{pmatrix}
$$

means 5 units right and 2 units up. Every vertex receives exactly the same displacement.

Do not report final coordinates as the vector. Use:

$$
\text{vector}=\text{final point}-\text{initial point}.
$$

## Rotations

A complete description states:

- centre;
- angle;
- clockwise or anticlockwise direction.

Every point keeps the same distance from the centre. Draw a line from the centre to one vertex, construct the angle and repeat consistently.

## Reflections

The mirror line is the perpendicular bisector of each segment joining a point to its image. To recover an unknown mirror line, join corresponding points and mark their midpoints.

Lines such as $x=2$, $y=-1$ and $y=x$ behave differently; sketch the line first.

## Enlargements

For centre $C$ and scale factor $k$:

$$
\overrightarrow{CP'}=k\overrightarrow{CP}.
$$

- $k>1$: larger image.
- $0<k<1$: smaller image.
- $k<0$: image on the opposite side of the centre.

A negative scale factor is valid and changes relative orientation.

## Vectors and routes

If $\vec a=\binom{3}{1}$ and $\vec b=\binom{-2}{4}$:

$$
\vec a+\vec b=\begin{pmatrix}1\\5\end{pmatrix}.
$$

Two routes with the same start and finish have the same resultant vector. This supports proofs about parallel lines and midpoints.

## Midpoint example

If $M$ is the midpoint of $AB$:

$$
\overrightarrow{AM}=\frac12\overrightarrow{AB}.
$$

If $\vec{OA}=\vec a$ and $\vec{OB}=\vec b$:

$$
\vec{OM}=\frac{\vec a+\vec b}{2}.
$$

## Invariants that check the construction

Translations, rotations and reflections preserve lengths and angles, so they are isometries. An enlargement preserves angles but multiplies every length by $|k|$ and every area by $k^2$. If an image enlarged by $k=3$ has a 12 cm side, the original side was 4 cm, while the image area is nine times the original.

These properties reveal mistakes without repeating the whole construction. Under reflection, a point and its image must be equally far from the mirror line. Under rotation, both must be equally far from the centre. Under translation, the segments joining corresponding points are parallel, equal and point in the same direction.

## A short vector proof

If $P$ divides $AB$ in the ratio $AP:PB=2:1$, it lies two thirds of the way from $A$ to $B$:

$$
\vec{OP}=\vec a+\frac23(\vec b-\vec a)
=\frac13\vec a+\frac23\vec b.
$$

The coefficients add to 1, confirming that $P$ lies on line $AB$. To prove that two segments are parallel, show that their vectors are scalar multiples. To prove that they also have equal length and direction, show that the vectors are equal.

In a multi-mark question, write each equality and state the geometric conclusion it supports. A correct final expression without the logical link can lose a reasoning mark.

## Common mistakes

- Omitting the centre of rotation or enlargement.
- Reversing vector components.
- Using a positive component for a move down or left.
- Scaling coordinates from the origin when the centre is elsewhere.
- Describing the image without naming the transformation.

Método Nebula's virtual campus connects geometry, coordinates, transformations and vectors through worked examples and graded GCSE questions. Contact us for a route combining accurate construction with algebraic reasoning.
