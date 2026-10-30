---
title: "Física nuclear PAU: defecto de masa, energía de enlace y radiactividad con unidades bajo control"
seoTitle: "Física nuclear PAU: defecto de masa y energía de enlace"
date: "2026-10-06"
updated: "2026-10-06"
description: "Resuelve Física nuclear PAU: defecto de masa, energía de enlace por nucleón, desintegraciones, vida media y actividad."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-fisica-cuantica-efecto-fotoelectrico,gcse-physics-radioactivity-half-life,pau-corregir-simulacros-plan-estudio"
image: "/assets/latex/half-life-curve.svg"
---

En física nuclear aparecen masas muy pequeñas y energías enormes porque la conversión $E=mc^2$ multiplica cualquier defecto de masa por $c^2$. El reto es mantener coherentes núcleos, átomos, unidades de masa y electronvoltios.

> **Respuesta directa.** El defecto de masa es la diferencia entre la suma de masas de nucleones separados y la masa del núcleo. Su energía equivalente es la energía de enlace: $E_b=\Delta mc^2$. Dividir entre el número de nucleones permite comparar estabilidad.

![Curva exponencial de núcleos no desintegrados y vidas medias](/assets/latex/half-life-curve.svg)

## Defecto de masa

Para un núcleo con $Z$ protones y $N$ neutrones:

$$
\Delta m=Zm_p+Nm_n-m_{\rm núcleo}.
$$

Si se utilizan masas atómicas, debe elegirse una formulación que cancele correctamente las masas electrónicas. No mezcles masa nuclear y atómica sin explicarlo.

## Energía de enlace

$$
E_b=\Delta mc^2.
$$

Con $\Delta m$ en unidades de masa atómica:

$$
1\ \mathrm{u}\,c^2\approx931.5\ \mathrm{MeV}.
$$

La energía de enlace por nucleón es:

$$
\frac{E_b}{A},
$$

donde $A=Z+N$. Cuanto mayor sea en la región habitual, más ligado está el núcleo.

## Ejemplo

Si $\Delta m=0.0300$ u:

$$
E_b=0.0300(931.5)=27.9\ \mathrm{MeV}.
$$

Para un núcleo con $A=4$:

$$
\frac{E_b}{A}=6.99\ \mathrm{MeV/nucleón}.
$$

## Desintegraciones

- Alfa: $A$ disminuye 4 y $Z$ disminuye 2.
- Beta menos: un neutrón se transforma en protón; $A$ no cambia y $Z$ aumenta 1.
- Gamma: no cambian $A$ ni $Z$; el núcleo pierde energía.

Conserva carga eléctrica, número de nucleones, energía y momento.

## Vida media y actividad

$$
N=N_0e^{-\lambda t},
\qquad
A=\lambda N,
\qquad
T_{1/2}=\frac{\ln2}{\lambda}.
$$

No confundas $A$ de número másico con actividad: el contexto y la unidad Bq los distinguen.

## Ejemplo de decaimiento y actividad

Una muestra contiene inicialmente $8.0\times10^{12}$ núcleos y tiene vida media de 6 h. Tras 18 h han transcurrido tres vidas medias:

$$
N=N_0\left(\frac12\right)^3=1.0\times10^{12}.
$$

Para calcular la actividad en becquerelios, la constante debe expresarse en $\mathrm{s^{-1}}$:

$$
\lambda=\frac{\ln2}{6(3600)}=3.21\times10^{-5}\ \mathrm{s^{-1}},
$$

$$
A=\lambda N=3.21\times10^7\ \mathrm{Bq}.
$$

La actividad también se reduce a la mitad en cada vida media porque es proporcional a $N$.

## Energía liberada en una reacción nuclear

Para una reacción, el valor energético es:

$$
Q=(m_{\rm inicial}-m_{\rm final})c^2.
$$

Si $Q>0$, la masa final es menor y la diferencia aparece como energía cinética o radiación. Si $Q<0$, la reacción requiere al menos esa energía, además de las condiciones impuestas por la conservación del momento.

Al usar masas atómicas, los electrones deben aparecer equilibrados en ambos lados. Después de calcular el defecto en u, multiplicar por 931.5 produce MeV para la reacción escrita. No debe dividirse por nucleón salvo que la pregunta pida una comparación de estabilidad.

## Fisión y fusión

Ambas pueden liberar energía al producir núcleos con mayor energía de enlace por nucleón. La explicación correcta se apoya en la curva de enlace, no en que “se pierde masa” sin indicar la transformación energética.

## Errores frecuentes

- Restar masas en orden inverso.
- Usar kg con el factor 931.5 MeV/u.
- Comparar energía total en vez de energía por nucleón.
- Cambiar $A$ en una emisión beta.
- Aplicar una disminución lineal a una ley exponencial.

El campus de Método Nebula conecta estructura nuclear, decaimiento, energía de enlace y problemas PAU. Contacta para practicar balances y conversiones con corrección detallada.
