---
title: PAU 2026 · Cataluña · Matemáticas Aplicadas a las Ciencias Sociales II — examen resuelto
seoTitle: PAU 2026 · Cataluña · Matemáticas Aplicadas a las Ciencias Sociales II — examen resuelto
date: 2026-10-11
updated: 2026-11-05
description: Examen PAU 2026 · Cataluña · Matemáticas Aplicadas a las Ciencias Sociales II resuelto paso a paso con planteamientos, cálculos y comprobaciones para preparar la Selectividad.
tag: CCSS II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: pau-ccss-programacion-lineal-problemas,pau-ccss-inferencia-intervalos-confianza,pau-ccss-matrices-modelos-economicos
image: /favicon.svg
---

Este examen resuelto conserva el enunciado y desarrolla cada apartado. Úsalo primero a contrarreloj y compáralo después con el razonamiento, no solo con el resultado final.

**Convocatoria:** ordinaria · Serie 1  
**Comunidad autónoma:** Cataluña

## Ejercicio 1 · Seguidores en redes sociales

### Enunciado

Un médico empieza a compartir vídeos sobre salud. Sus seguidores aumentan, después bajan a raíz de un vídeo polémico y vuelven a crecer tras otra publicación exitosa. El número de seguidores, $t$ semanas después de empezar, se describe mediante

$$f(t)=10t^3-120t^2+450t+700,\qquad0\le t\le10.$$

**1.1)** ¿Cuántos seguidores tiene al empezar y al acabar las diez semanas? Estudia cuándo aumentan o disminuyen y localiza los máximos y mínimos locales. Indica los puntos principales para dibujar la gráfica.  
**1.2)** ¿En qué semanas se relacionan los cambios de tendencia con los dos vídeos? ¿Cuántos seguidores hay entonces? ¿Cuándo se llega al máximo absoluto?

### Solución

Los valores al principio y al final son $f(0)=\boxed{700}$ y $f(10)=\boxed{3200}$. Para estudiar la tendencia derivamos:

$$f'(t)=30t^2-240t+450=30(t-3)(t-5).$$

La derivada es positiva para $0<t<3$, negativa para $3<t<5$ y positiva para $5<t<10$. Por tanto, la gráfica **crece** en $(0,3)$, **decrece** en $(3,5)$ y vuelve a **crecer** en $(5,10)$. En los puntos críticos:

$$f(3)=1240,\qquad f(5)=1200.$$

Existe un máximo local en $(3,1240)$ y un mínimo local en $(5,1200)$. Para esbozar la gráfica bastan esos dos puntos junto a $(0,700)$ y $(10,3200)$, respetando la tendencia de cada tramo.

El vídeo polémico corresponde a la **semana 3**, cuando hay 1.240 seguidores; el vídeo exitoso, a la **semana 5**, cuando hay 1.200. El mayor número de seguidores de todo el periodo se alcanza en la **semana 10: $\boxed{3200}$ seguidores**.

## Ejercicio 2 · Precio de tres frutas

### Enunciado

Un productor vende cajas de fresas, albaricoques y cerezas. Un pedido de 5 cajas de fresas, 3 de albaricoques y 4 de cerezas cuesta 120 €. Otro de 2 cajas de fresas, 1 de albaricoques y 3 de cerezas cuesta 56 €.

**2.1)** Expresa los precios de las fresas y los albaricoques en función del de las cerezas. Calcula después el coste de 6 cajas de fresas, 4 de albaricoques y 2 de cerezas.  
**2.2)** Si una caja de albaricoques vale 12,50 €, encuentra los otros dos precios.

### Solución

Llamamos $f$, $a$ y $c$ a los precios de cada tipo de caja. Obtenemos:

$$\begin{cases}5f+3a+4c=120,\\2f+a+3c=56.\end{cases}$$

De la segunda, $a=56-2f-3c$. Sustituimos en la primera:

$$5f+3(56-2f-3c)+4c=120\Rightarrow f=48-5c.$$

Ahora $a=56-2(48-5c)-3c=7c-40$. Así,

$$\boxed{f=48-5c,\qquad a=7c-40}.$$

El pedido solicitado cuesta

$$6f+4a+2c=6(48-5c)+4(7c-40)+2c=\boxed{128\text{ €}}.$$

Si $a=12{,}50$, entonces $12{,}5=7c-40$, de donde $c=7{,}5$. Finalmente, $f=48-5(7{,}5)=10{,}5$. Los precios son **10,50 € por fresas**, **12,50 € por albaricoques** y **7,50 € por cerezas**.

## Ejercicio 3 · Eficiencia de páginas web

### Enunciado

Una empresa llama *eficiente* a una página web si tarda menos de 3 segundos en cargar. Sostiene que al menos el 50 % de sus páginas son eficientes. Se selecciona una muestra aleatoria de 2.500 páginas.

**3.1)** Suponiendo que cada página tiene probabilidad $p=0{,}5$ de ser eficiente y que las observaciones son independientes, define la distribución de $X$, el número de páginas eficientes. Calcula aproximadamente $P(X\le1299)$ usando una normal **sin corrección de continuidad**.  
**3.2)** La muestra tiene un tiempo medio de carga de 2,95 segundos y desviación típica muestral de 0,38 segundos. Construye un intervalo de confianza del 95 % para el tiempo medio poblacional y comenta qué permite concluir respecto al porcentaje de páginas eficientes.

### Solución

**3.1)** La variable $X$ es binomial:

$$X\sim\mathrm{Bin}(2500;0{,}5).$$

Su media es $np=1250$ y la desviación típica $\sqrt{np(1-p)}=25$. Aproximamos por $Y\sim N(1250,25)$ (segundo parámetro entendido como desviación típica):

$$P(X\le1299)\approx P\left(Z\le\frac{1299-1250}{25}\right)=P(Z\le1{,}96)=\boxed{0{,}975}.$$

**3.2)** Para un 95 % de confianza usamos $z=1{,}96$. El error es

$$E=1{,}96\frac{0{,}38}{\sqrt{2500}}=0{,}014896\approx0{,}015\text{ s}.$$

El intervalo de confianza es

$$\boxed{[2{,}935;\ 2{,}965]\text{ segundos}}.$$

El extremo superior está por debajo de 3 segundos, por lo que el tiempo **medio** estimado es inferior a 3 segundos. **Importante:** esto no demuestra por sí solo que al menos la mitad de las páginas tarden menos de 3 segundos; para verificar esa afirmación se necesitaría información sobre la proporción de páginas eficientes, no solo sobre la media de sus tiempos de carga.

## Ejercicio 4 · Tabla de estudiantes

### Enunciado común

Una universidad tiene esta distribución de estudiantes:

| Facultad | Grado | Máster | Doctorado | Total |
|---|---:|---:|---:|---:|
| Ciencias | 450 | 172 | 41 | 663 |
| Ingeniería | 445 | 178 | 45 | 668 |
| Letras | 438 | 183 | 48 | 669 |
| **Total** | **1333** | **533** | **134** | **2000** |

### Opción A · Probabilidades, matrices y matrículas

**Enunciado.** **4.1)** Si escogemos a una persona al azar, ¿qué probabilidad hay de que curse doctorado en Letras? Si elegimos a alguien de máster, ¿qué probabilidad hay de que sea de Ingeniería? **4.2)** Organiza los datos sin totales en una matriz $3\times3$, calcula los totales por nivel con un producto matricial y calcula los ingresos de matrícula si el grado cuesta 1.000 €, el máster 1.500 € y el doctorado 500 €.

**Solución.** Calculamos las probabilidades:

$$P(\text{Letras y doctorado})=\frac{48}{2000}=\boxed{0{,}024}.$$

$$P(\text{Ingeniería}\mid\text{máster})=\frac{178}{533}\approx\boxed{0{,}334}.$$

La matriz de estudiantes es

$$T=\begin{pmatrix}450&172&41\\445&178&45\\438&183&48\end{pmatrix}.$$

El vector de totales por nivel se obtiene sumando las tres facultades con un producto:

$$\begin{pmatrix}1&1&1\end{pmatrix}T=\begin{pmatrix}1333&533&134\end{pmatrix}.$$

Por último, el ingreso total por matrícula es

$$\begin{pmatrix}1333&533&134\end{pmatrix}\begin{pmatrix}1000\\1500\\500\end{pmatrix}=\boxed{2\,199\,500\text{ €}}.$$

### Opción B · Más probabilidades y becas

**Enunciado.** **4.1)** Calcula la probabilidad de que una persona elegida al azar curse máster en Ciencias y la probabilidad de cursar máster sabiendo que estudia en Ingeniería. **4.2)** En la universidad hay 1.036 estudiantes con beca. Entre los 1.333 estudiantes de grado y los 533 de máster, la mitad tiene beca, y hay tantos becados en máster como en doctorado. ¿Cuántas becas corresponden a cada nivel?

**Solución.** Para el primer apartado:

$$P(\text{Ciencias y máster})=\frac{172}{2000}=\boxed{0{,}086},\qquad P(\text{máster}\mid\text{Ingeniería})=\frac{178}{668}\approx\boxed{0{,}2665}.$$

Sean $g$, $m$ y $d$ las personas becadas de grado, máster y doctorado. El sistema es

$$\begin{cases}g+m+d=1036,\\g+m=(1333+533)/2=933,\\m=d.\end{cases}$$

Sustituyendo $m=d$ en las dos primeras ecuaciones: $g+2d=1036$, $g+d=933$. Restamos y obtenemos $d=103$, luego $m=103$ y $g=830$. Se conceden $\boxed{830}$ becas en grado, $\boxed{103}$ en máster y $\boxed{103}$ en doctorado.

## Cómo usar este examen para preparar la PAU

Haz una primera vuelta sin consultar la solución. Al corregir, señala el primer paso que no supiste justificar y repítelo al día siguiente. Así conviertes un modelo de examen en una lista concreta de técnicas que debes entrenar.

Si quieres trabajar estos bloques con una ruta de práctica, explicaciones y seguimiento, tienes el [Campus de Método Nebula](/campus/).

