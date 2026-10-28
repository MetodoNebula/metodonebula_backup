---
title: "Reactivo limitante, pureza y rendimiento: el problema de estequiometría que resume Bachillerato"
date: "2026-11-12"
updated: "2026-11-12"
description: "Resuelve problemas de reactivo limitante, pureza y rendimiento en Química de Bachillerato con una cadena de cálculo rigurosa."
tag: "Bachillerato"
category: "Física y Química"
relatedService: "/clases-particulares/fisica-quimica/"
relatedPosts: "bachillerato-fisica-quimica-mol-estequiometria,estequiometria-universitaria-ejercicios-resueltos"
image: "/assets/latex/stoichiometry-chain.svg"
---

Los problemas más completos de estequiometría combinan una muestra impura, dos reactivos, un rendimiento inferior al 100 % y una pregunta final en gramos. Parecen cuatro dificultades, pero se resuelven con una sola cadena lógica: **cantidad real → moles disponibles → proporción química → producto teórico → producto real**.

![Cadena de cálculo desde masa y pureza hasta reactivo limitante y rendimiento](/assets/latex/stoichiometry-chain.svg)

## La ecuación ajustada es el centro

Consideremos:

$$
\mathrm{2Al+3Cl_2\rightarrow2AlCl_3}.
$$

Los coeficientes relacionan moles, no gramos: 2 mol de Al reaccionan con 3 mol de $\mathrm{Cl_2}$ para formar 2 mol de $\mathrm{AlCl_3}$. Antes de comparar reactivos hay que convertirlos a moles.

## Pureza: corrige la cantidad antes de reaccionar

Si una muestra de masa $m_{\text{muestra}}$ tiene pureza $p$ expresada como fracción:

$$
m_{\text{puro}}=p\,m_{\text{muestra}}.
$$

Una muestra de 10,0 g al 80 % contiene 8,0 g de sustancia activa. Los 2,0 g restantes no pueden entrar en la proporción estequiométrica salvo que el problema indique otra reacción.

## Cómo identificar el reactivo limitante

Convierte cada reactivo a moles y calcula cuánto producto podría formar por separado. El que produzca menos cantidad de producto es el limitante.

También puede compararse el cociente:

$$
\frac{n_i}{\nu_i},
$$

donde $n_i$ son los moles disponibles y $\nu_i$ el coeficiente estequiométrico. El menor cociente señala el reactivo limitante.

## Ejemplo integrado

Reaccionan 13,5 g de Al al 80 % de pureza con 28,4 g de $\mathrm{Cl_2}$. ¿Qué masa real de $\mathrm{AlCl_3}$ se obtiene si el rendimiento es del 75 %? Usa $M(Al)=27,0$, $M(Cl_2)=71,0$ y $M(AlCl_3)=133,5\,\mathrm{g/mol}$.

Masa pura de aluminio:

$$
m(Al)=13,5\cdot0,80=10,8\ \mathrm{g}.
$$

Moles disponibles:

$$
n(Al)=\frac{10,8}{27,0}=0,400\ \mathrm{mol},
$$

$$
n(Cl_2)=\frac{28,4}{71,0}=0,400\ \mathrm{mol}.
$$

Comparamos con los coeficientes:

$$
\frac{0,400}{2}=0,200,\qquad \frac{0,400}{3}=0,133.
$$

El cloro es limitante. Según $3\,\mathrm{mol}\ Cl_2\to2\,\mathrm{mol}\ AlCl_3$:

$$
n_{\text{teo}}(AlCl_3)=0,400\frac{2}{3}=0,2667\ \mathrm{mol}.
$$

$$
m_{\text{teo}}=0,2667\cdot133,5=35,6\ \mathrm{g}.
$$

Con rendimiento del 75 %:

$$
m_{\text{real}}=0,75\cdot35,6=26,7\ \mathrm{g}.
$$

## Reactivo en exceso

El aluminio consumido es:

$$
n(Al)_{\text{cons}}=0,400\frac{2}{3}=0,2667\ \mathrm{mol}.
$$

Quedan $0,400-0,2667=0,1333$ mol, es decir, 3,60 g de Al puro. El rendimiento no significa necesariamente que reaccione solo el 75 % del limitante; describe la relación entre producto real aislado y producto teórico bajo el modelo del problema.

## Orden correcto de las correcciones

La pureza se aplica al reactivo disponible antes de calcular moles. El rendimiento se aplica al producto teórico al final:

$$
\%R=\frac{m_{\text{real}}}{m_{\text{teórico}}}\times100.
$$

Intercambiar ambas etapas puede dar resultados numéricos aparentemente plausibles, pero rompe el significado químico.

## Control de unidades y de magnitud

Escribe cada conversión como un factor que cancela unidades. Por ejemplo:

$$
28,4\ \mathrm{g\ Cl_2}\cdot\frac{1\ \mathrm{mol\ Cl_2}}{71,0\ \mathrm{g\ Cl_2}}\cdot
\frac{2\ \mathrm{mol\ AlCl_3}}{3\ \mathrm{mol\ Cl_2}}.
$$

Al final solo quedan moles de producto. Esta escritura permite localizar un cociente invertido sin repetir todo el ejercicio. También conviene estimar: si 0,4 mol de reactivo limitante se transforma con una proporción $2/3$, el producto debe ser menor que 0,4 mol; obtener 0,6 mol indicaría que la razón se ha invertido.

La masa de producto puede superar la masa del limitante porque incorpora átomos del reactivo en exceso. Por tanto, comparar solo esas dos masas no es una prueba válida de error; la comprobación correcta es conservar cada elemento mediante la ecuación ajustada.

## Errores frecuentes

- Comparar masas de reactivos en vez de moles ajustados.
- Aplicar la pureza al producto.
- Elegir como limitante el reactivo con menos gramos.
- Aplicar el rendimiento antes de identificar el limitante.
- Usar coeficientes de una ecuación sin ajustar.
- Confundir masa teórica con masa real.

El campus virtual de Método Nebula desarrolla mol, masas molares, limitante, pureza, rendimiento, gases y disoluciones mediante ejemplos guiados y problemas acumulativos. Si quieres entrenar la cadena completa hasta que cada paso tenga sentido, utiliza el botón de contacto.
