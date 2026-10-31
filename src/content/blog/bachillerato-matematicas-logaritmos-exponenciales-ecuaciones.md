---
title: "Logaritmos y exponenciales en Bachillerato: cómo resolver ecuaciones controlando el dominio"
seoTitle: "Logaritmos y exponenciales en Bachillerato"
date: "2026-07-15"
updated: "2026-07-15"
description: "Resuelve ecuaciones logarítmicas y exponenciales en Bachillerato: propiedades, dominio, cambio de base, modelización y comprobación."
tag: "Matemáticas Bachillerato"
category: "Matemáticas ESO y Bachillerato"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "bachillerato-matematicas-funciones-representacion,bachillerato-matematicas-sucesiones-progresiones,eso-matematicas-potencias-radicales"
image: "/assets/latex/log-exp-map.svg"
---

El logaritmo no es una operación aislada: responde a la pregunta “¿a qué exponente hay que elevar la base?”. Entender esta relación inversa permite pasar de una ecuación exponencial a una logarítmica sin encadenar reglas de memoria.

> **Respuesta directa.** Usa $a^x=b\iff\log_a b=x$, con $a>0$, $a\neq1$ y $b>0$. Antes de operar en una ecuación logarítmica impón que todos los argumentos sean positivos; al final comprueba las soluciones en la ecuación original.

![Equivalencia entre forma exponencial y logarítmica y propiedad del producto](/assets/latex/log-exp-map.svg)

## Definición y dominio

La equivalencia fundamental es:

$$
\log_a b=x
\Longleftrightarrow
a^x=b.
$$

Por ejemplo, $\log_2 8=3$ porque $2^3=8$. En números reales, el argumento debe ser positivo. Por tanto, en $\log(x-4)$ se exige:

$$
x-4>0\Rightarrow x>4.
$$

Esta condición se escribe antes de transformar la ecuación.

## Propiedades con significado

Las propiedades proceden de las leyes de exponentes:

$$
\log_a(MN)=\log_aM+\log_aN,
$$

$$
\log_a\left(\frac MN\right)=\log_aM-\log_aN,
$$

$$
\log_a(M^r)=r\log_aM.
$$

No existe una regla equivalente para una suma:

$$
\log(M+N)\neq\log M+\log N.
$$

## Ecuaciones exponenciales

Si puede expresarse todo en la misma base:

$$
3^{2x-1}=27=3^3
\Rightarrow
2x-1=3
\Rightarrow
x=2.
$$

Si las bases no se igualan, se toman logaritmos:

$$
5^x=17
\Rightarrow
x=\frac{\ln17}{\ln5}.
$$

La base del logaritmo elegido es irrelevante si se usa de forma coherente.

## Ecuaciones logarítmicas

Considera:

$$
\log_2(x-1)+\log_2(x-3)=3.
$$

El dominio exige $x>3$. Se agrupan los logaritmos:

$$
\log_2[(x-1)(x-3)]=3,
$$

$$
(x-1)(x-3)=8.
$$

Así:

$$
x^2-4x-5=0
\Rightarrow x=5\ \text{o}\ x=-1.
$$

Sólo $x=5$ cumple el dominio.

## Cambio de base

Para cualquier base válida $c$:

$$
\log_a b=\frac{\log_c b}{\log_c a}.
$$

Esta fórmula permite calcular logaritmos de cualquier base con $\ln$ o $\log$ decimal y explica por qué $\log_a b=1/\log_b a$.

## Modelos de crecimiento y decrecimiento

Un modelo exponencial puede escribirse:

$$
N(t)=N_0e^{kt}.
$$

Si $k>0$, hay crecimiento; si $k<0$, decrecimiento. Para despejar el tiempo:

$$
t=\frac1k\ln\left(\frac{N}{N_0}\right).
$$

La constante y las unidades deben interpretarse dentro del contexto: población, capital, concentración o desintegración.

## Lectura gráfica

$y=a^x$ y $y=\log_a x$ son funciones inversas y sus gráficas son simétricas respecto a $y=x$. La exponencial tiene asíntota horizontal $y=0$; el logaritmo, asíntota vertical $x=0$.

Para $a>1$ ambas son crecientes. Para $0<a<1$ son decrecientes.

## Comprobar una solución

La comprobación no consiste sólo en sustituir en la última ecuación transformada. Debe hacerse en la original, porque al agrupar logaritmos o resolver una ecuación polinómica pueden aparecer valores fuera del dominio. Un control rápido combina tres preguntas: ¿son positivos todos los argumentos?, ¿las dos expresiones tienen el mismo valor? y ¿el tamaño del resultado es razonable según la monotonía de la función?

En modelos, además, se revisa el contexto. Un tiempo negativo puede ser algebraicamente válido pero quedar fuera del intervalo estudiado; una población o una concentración no puede aceptarse si contradice las condiciones físicas del problema.

## Errores frecuentes

- Admitir argumentos nulos o negativos.
- Distribuir el logaritmo sobre una suma.
- Olvidar comprobar raíces obtenidas al resolver una cuadrática.
- Confundir $\log_a b$ con $a/b$.
- Redondear demasiado pronto en un modelo exponencial.

## Conectar álgebra, funciones y aplicaciones

El campus virtual de Método Nebula une potencias, logaritmos, funciones, sucesiones y modelos de crecimiento mediante teoría, ejercicios graduados y problemas de Bachillerato resueltos. El botón de contacto permite acceder a una ruta que entrena dominio, transformación y comprobación en cada ecuación.
