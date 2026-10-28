---
title: "Densidad, presión y flotación en ESO: por qué un objeto pesado también puede flotar"
date: "2026-11-19"
updated: "2026-11-19"
description: "Entiende densidad, presión hidrostática y empuje en ESO con modelos, fórmulas, un ejemplo resuelto y errores de unidades."
tag: "ESO"
category: "Física y Química"
relatedService: "/clases-particulares/fisica-quimica/"
relatedPosts: "fisica-y-quimica-como-plantear-problemas,gravitacion-eso-ley-universal-peso-ejercicios"
image: "/assets/latex/buoyancy-density.svg"
---

“El hierro se hunde y la madera flota” es una observación, no una explicación. Un barco de acero puede flotar porque no importa solo su masa: importa la **densidad media**, el volumen de fluido desplazado y el equilibrio entre peso y empuje.

![Cuerpo parcialmente sumergido con peso hacia abajo, empuje hacia arriba y fórmulas de densidad](/assets/latex/buoyancy-density.svg)

## Densidad: masa por unidad de volumen

$$
\rho=\frac{m}{V}.
$$

En el SI se expresa en $\mathrm{kg/m^3}$, aunque en laboratorio es frecuente $\mathrm{g/cm^3}$. La conversión clave es:

$$
1\ \mathrm{g/cm^3}=1000\ \mathrm{kg/m^3}.
$$

La densidad no indica cuánta materia hay sin más, sino cuánta masa ocupa cada unidad de volumen.

## Flotar no significa no tener peso

Todo cuerpo con masa tiene peso:

$$
P=mg.
$$

Al sumergirse en un fluido recibe una fuerza ascendente, el empuje:

$$
E=\rho_{\text{fluido}}gV_{\text{desplazado}}.
$$

Si flota en reposo, la fuerza resultante es cero:

$$
E=P.
$$

El cuerpo se sumerge solo hasta desplazar un peso de fluido igual a su propio peso.

## Relación entre densidad y fracción sumergida

Para un cuerpo homogéneo que flota:

$$
\rho_f gV_{\text{sum}}=\rho_c gV_{\text{total}}.
$$

Por tanto:

$$
\frac{V_{\text{sum}}}{V_{\text{total}}}=\frac{\rho_c}{\rho_f}.
$$

Si la densidad del cuerpo es el 80 % de la del líquido, queda sumergido el 80 % de su volumen.

## Ejemplo resuelto

Un bloque de volumen $0,020\,\mathrm{m^3}$ y masa 16 kg flota en agua de densidad $1000\,\mathrm{kg/m^3}$.

Su densidad media es:

$$
\rho_c=\frac{16}{0,020}=800\ \mathrm{kg/m^3}.
$$

La fracción sumergida es:

$$
\frac{V_{\text{sum}}}{V}=\frac{800}{1000}=0,80.
$$

Así que:

$$
V_{\text{sum}}=0,80\cdot0,020=0,016\ \mathrm{m^3}.
$$

Comprobación: el empuje vale $1000\cdot9,8\cdot0,016=156,8$ N, igual al peso $16\cdot9,8=156,8$ N.

## Presión en un fluido

La presión es fuerza por unidad de superficie:

$$
p=\frac{F}{A}.
$$

En un líquido en reposo, la presión aumenta con la profundidad:

$$
p=p_0+\rho gh.
$$

No depende de la forma del recipiente, sino de la densidad del fluido, la gravedad y la profundidad. La diferencia de presión entre la parte inferior y superior del cuerpo es el origen del empuje neto.

## Por qué flota un barco de acero

El casco encierra aire y aumenta mucho el volumen total sin aumentar la masa en la misma proporción. La densidad media del conjunto barco–aire puede ser menor que la del agua. Si entra agua, la masa aumenta y el volumen exterior casi no cambia; la densidad media sube y puede perderse el equilibrio.

## Flotar, quedar suspendido o hundirse

Al soltar completamente un cuerpo dentro de un líquido pueden darse tres situaciones:

- Si $\rho_c<\rho_f$, inicialmente el empuje supera al peso y el cuerpo asciende hasta flotar parcialmente.
- Si $\rho_c=\rho_f$, empuje y peso pueden equilibrarse con el cuerpo totalmente sumergido: queda suspendido.
- Si $\rho_c>\rho_f$, el peso supera al empuje máximo y el cuerpo desciende.

Este criterio supone que la densidad del cuerpo es uniforme y que no hay otras fuerzas relevantes. Si el objeto toca el fondo, aparece además la fuerza normal; ya no puede afirmarse que peso y empuje sean las únicas fuerzas.

La misma comparación explica por qué un submarino modifica su flotabilidad llenando o vaciando tanques: cambia su masa y, por tanto, su densidad media, sin variar mucho el volumen exterior.

## Errores frecuentes

- Comparar masas cuando hay que comparar densidades.
- Usar el volumen total en Arquímedes cuando el cuerpo flota parcialmente.
- Creer que el empuje desaparece cuando el objeto se hunde.
- Mezclar $\mathrm{cm^3}$ con $\mathrm{kg/m^3}$.
- Decir que flota porque “no pesa”.
- Olvidar que equilibrio exige igualdad de fuerzas, no ausencia de fuerzas.

El campus virtual de Método Nebula desarrolla masa, volumen, densidad, presión, empuje y flotación con experimentos razonados, ejemplos y problemas progresivos. Si quieres conectar cada fórmula con el modelo físico que la justifica, utiliza el botón de contacto.
