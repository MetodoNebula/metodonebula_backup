---
title: "Química PAU: laboratorio, rendimiento, pureza y análisis de errores en un mismo problema"
seoTitle: "Rendimiento, pureza y errores de laboratorio en PAU"
date: "2026-10-27"
updated: "2026-10-27"
description: "Guía para problemas de Química PAU que combinan pureza, reactivo limitante, rendimiento experimental, material y fuentes de error."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-quimica-estequiometria-gases-disoluciones,pau-quimica-volumetrias-acido-base-redox,pau-quimica-equilibrio-quimico-estudiar"
image: "/assets/latex/pau-lab-yield-chain.svg"
---

Los problemas experimentales de Química PAU suelen encadenar varias capas: una muestra impura, una reacción ajustada, un reactivo limitante, una cantidad teórica y una masa realmente obtenida. Si se aplica el porcentaje equivocado en el momento incorrecto, todo el desarrollo queda desplazado.

> **Respuesta directa.** Convierte primero la masa comercial en sustancia pura, pasa a moles, aplica la estequiometría y calcula el producto teórico. Solo entonces utiliza el rendimiento para relacionar cantidad teórica y real. Analiza los errores según cómo alterarían la medida.

![Cadena de cálculo desde masa inicial y pureza hasta moles, estequiometría, masa real y rendimiento](/assets/latex/pau-lab-yield-chain.svg)

## Pureza: qué parte de la muestra reacciona

Si una muestra de masa $m_0$ tiene una pureza $P$ expresada como fracción:

$$
m_{\text{pura}}=Pm_0.
$$

Una pureza del 85 % significa $P=0.85$. Esa masa pura se convierte en moles:

$$
n=\frac{m_{\text{pura}}}{M}.
$$

No reduzcas al 85 % la masa de todos los reactivos ni el producto final: el porcentaje describe específicamente la composición de la muestra indicada.

## Reactivo limitante: compara avances de reacción

Para:

$$
aA+bB\rightarrow cC,
$$

compara:

$$
\frac{n_A}{a}\quad\text{y}\quad\frac{n_B}{b}.
$$

El menor valor determina el avance máximo y, por tanto, el reactivo limitante. Comparar simplemente los moles de $A$ y $B$ solo funciona si los coeficientes son iguales.

Los moles teóricos de producto son:

$$
n_C=c\min\left(\frac{n_A}{a},\frac{n_B}{b}\right).
$$

## Rendimiento: del máximo teórico a lo obtenido

El rendimiento porcentual es:

$$
\eta=\frac{m_{\text{real}}}{m_{\text{teórica}}}\cdot100.
$$

Si conoces $\eta$ y buscas la masa real:

$$
m_{\text{real}}=\frac{\eta}{100}m_{\text{teórica}}.
$$

Si buscas la teórica a partir de la real, debes dividir por la fracción de rendimiento. Esta distinción evita obtener una cantidad teórica menor que la real sin justificación.

## Ejemplo encadenado

Una muestra de $10.0\ \mathrm g$ contiene un 80.0 % de $A$, con $M_A=40.0\ \mathrm{g\,mol^{-1}}$. La reacción es $2A\rightarrow B$ y $M_B=60.0\ \mathrm{g\,mol^{-1}}$.

$$
m_A=0.800(10.0)=8.00\ \mathrm g,
$$

$$
n_A=\frac{8.00}{40.0}=0.200\ \mathrm{mol},
$$

$$
n_B=\frac{0.200}{2}=0.100\ \mathrm{mol},
$$

$$
m_{B,\text{teórica}}=0.100(60.0)=6.00\ \mathrm g.
$$

Con un rendimiento del 75.0 %:

$$
m_{B,\text{real}}=0.750(6.00)=4.50\ \mathrm g.
$$

Cada porcentaje actúa en una etapa diferente: la pureza antes de la estequiometría y el rendimiento después del máximo teórico.

## Analizar errores exige indicar la dirección

No basta con escribir “error humano”. Explica qué medida cambia y cómo afecta al resultado.

- Producto húmedo: la masa medida aumenta y el rendimiento calculado queda sobreestimado.
- Pérdida de sólido durante una transferencia: disminuye la masa real y el rendimiento aparente.
- Reacción incompleta: queda reactivo y se obtiene menos producto.
- Impurezas en el producto: la masa atribuida al producto aumenta artificialmente.
- Calentamiento insuficiente hasta masa constante: puede quedar disolvente o agua.

Un rendimiento superior al 100 % no implica haber creado materia; sugiere producto húmedo, impuro, tara incorrecta o datos incompatibles.

## Material y precisión

Relaciona instrumento y función. Una balanza mide masa; una pipeta aforada transfiere un volumen preciso; una probeta es menos exacta; un matraz aforado prepara un volumen total; un Büchner acelera la filtración al vacío. Nombrar el material sin explicar su elección no demuestra el criterio experimental.

## Comprobaciones finales

Verifica conservación de átomos, unidades, reactivo limitante y sentido de los porcentajes. Si el rendimiento es menor que 100 %, la masa real debe ser menor que la teórica. Si la pureza disminuye manteniendo la masa comercial, disminuyen los moles reactivos.

El campus virtual de Método Nebula integra estequiometría, disoluciones y laboratorio con problemas encadenados, esquemas y exámenes PAU resueltos. El botón de contacto permite acceder a una ruta donde pureza, reactivo limitante y rendimiento dejan de ser fórmulas separadas y se convierten en un único razonamiento verificable.
