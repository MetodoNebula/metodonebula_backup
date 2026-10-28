---
title: "Física GCSE: vida media y radiactividad con gráficas que explican el decaimiento"
date: "2026-10-22"
updated: "2026-10-22"
description: "Entiende la desintegración radiactiva y la vida media en Física GCSE: proceso aleatorio, curva exponencial, actividad, cálculos y seguridad."
tag: "GCSE"
category: "Exámenes internacionales"
relatedService: "/clases-particulares/gcse-ib/"
relatedPosts: "gcse-physics-forces-exam-questions,gcse-physics-energy-work-power-efficiency"
image: "/assets/latex/half-life-curve.svg"
language: "es"
translation: "gcse-physics-radioactivity-half-life-en"
---

La desintegración de un núcleo individual es aleatoria: no podemos predecir cuándo ocurrirá. Sin embargo, una muestra con muchísimos núcleos sigue un patrón estadístico muy regular. Esa combinación —azar microscópico y ley macroscópica— es la idea central de **desintegración radiactiva**.

![Curva exponencial de núcleos no desintegrados con marcas en cada vida media](/assets/latex/half-life-curve.svg)

## Qué significa la vida media

La vida media $T_{1/2}$ es el tiempo necesario para que se reduzca a la mitad:

- el número de núcleos radiactivos no desintegrados, o
- la actividad debida a esos núcleos.

Después de una vida media queda $1/2$; después de dos, $1/4$; después de tres, $1/8$.

$$
N=N_0\left(\frac12\right)^n,
$$

donde $n=t/T_{1/2}$ es el número de vidas medias transcurridas.

## No disminuye la misma cantidad

Si una muestra empieza con 800 núcleos representativos:

$$
800\to400\to200\to100.
$$

Las disminuciones son 400, 200 y 100. Se pierde la misma **fracción**, no la misma cantidad. Por eso la gráfica es exponencial y nunca una recta descendente.

## Ejemplo de cálculo directo

Una fuente tiene actividad inicial de 640 Bq y vida media de 6 h. Tras 18 h han pasado:

$$
n=\frac{18}{6}=3
$$

vidas medias. Entonces:

$$
A=640\left(\frac12\right)^3=80\ \mathrm{Bq}.
$$

Un becquerel equivale a una desintegración por segundo.

## Encontrar la vida media en una gráfica

La lectura comienza con un valor de actividad claramente identificable y continúa en el punto donde la curva alcanza su mitad. La diferencia entre ambos tiempos proporciona una estimación de $T_{1/2}$. Un segundo par de valores permite comprobarla y reducir el efecto del error gráfico.

No es obligatorio comenzar en $t=0$. Si la actividad pasa de 300 Bq a 150 Bq entre las horas 4 y 9, la vida media es 5 h.

## Radiación de fondo

Un detector mide radiación de la fuente y radiación de fondo. Antes de calcular una vida media debe corregirse:

$$
\text{tasa de recuento corregida}=\text{medida}-\text{fondo}.
$$

Si se olvida esta resta, la curva parece acercarse a un valor positivo y la vida media calculada resulta incorrecta.

## Alfa, beta y gamma

| Radiación | Naturaleza | Penetración | Ionización |
|---|---|---|---|
| Alfa | Núcleo de helio | Baja | Alta |
| Beta | Electrón o positrón | Media | Media |
| Gamma | Onda electromagnética | Alta | Menor |

La peligrosidad depende de actividad, tipo de radiación, tiempo, distancia y si la fuente está dentro o fuera del cuerpo. “Gamma es siempre más peligrosa” es una simplificación incorrecta.

## Contaminación e irradiación

La irradiación significa exposición a radiación procedente de una fuente externa. La contaminación significa que material radiactivo no deseado entra o queda sobre un objeto o persona. Un objeto irradiado no se vuelve necesariamente radiactivo.

## Seguridad razonada

Las medidas básicas reducen dosis:

- Disminuir tiempo de exposición.
- Aumentar distancia.
- Utilizar blindaje adecuado.
- Evitar ingestión o inhalación de fuentes no selladas.
- Manipular con pinzas y almacenar en recipientes etiquetados.

Cada medida debe vincularse con cómo reduce la exposición, no recitarse como una lista.

## Errores frecuentes

- Restar una cantidad fija en cada vida media.
- Confundir actividad con número total de núcleos ya desintegrados.
- Leer la mitad del tiempo en vez de la mitad de la actividad.
- No corregir radiación de fondo.
- Afirmar que el proceso aleatorio no puede modelizarse.
- Confundir contaminación e irradiación.

El campus virtual de Método Nebula desarrolla física nuclear con estructura del núcleo, radiaciones, vida media, actividad, seguridad y preguntas de examen. El botón de contacto permite solicitar una ruta que conecta cálculos, gráficas y explicaciones científicas.
