---
title: "Electroquímica PAU: cómo resolver pilas, potenciales y reacciones redox sin perder los signos"
date: "2026-09-25"
updated: "2026-09-25"
description: "Método riguroso para pilas galvánicas en Química PAU: oxidación, reducción, potencial, notación, electrones y ejemplo resuelto."
tag: "PAU"
category: "Selectividad"
relatedService: "/clases-particulares/selectividad/"
relatedPosts: "pau-quimica-equilibrio-quimico-estudiar,pau-quimica-acido-base-ph-calculos"
image: "/assets/latex/galvanic-cell.svg"
---

Una pila galvánica no se resuelve recordando que “ánodo es negativo”. Se resuelve identificando **qué especie cede electrones, cuál los acepta y si la reacción global propuesta es espontánea**. El signo de cada electrodo aparece después, como consecuencia del proceso.

![Esquema de una pila galvánica con ánodo, cátodo, flujo de electrones y puente salino](/assets/latex/galvanic-cell.svg)

## Oxidación y reducción: empieza por los electrones

Oxidación es pérdida de electrones:

$$
M\rightarrow M^{n+}+ne^-.
$$

Reducción es ganancia de electrones:

$$
X^{m+}+me^-\rightarrow X.
$$

En una pila espontánea, la oxidación ocurre en el ánodo y la reducción en el cátodo. Los electrones circulan por el circuito exterior **desde el ánodo hacia el cátodo**.

## Qué significan los potenciales estándar

Las tablas proporcionan potenciales estándar de reducción. Un valor más positivo indica mayor tendencia a reducirse bajo condiciones estándar. Por eso, entre dos semirreacciones escritas como reducciones, la de mayor $E^\circ$ suele actuar como cátodo.

$$
E^\circ_{\text{pila}}=E^\circ_{\text{cátodo}}-E^\circ_{\text{ánodo}}.
$$

En esta expresión ambos valores se toman de la tabla como potenciales de reducción. No cambies primero el signo del ánodo y vuelvas a restar: estarías invirtiéndolo dos veces.

## Ejemplo: pila Zn/Cu

Datos:

$$
E^\circ(\mathrm{Cu^{2+}/Cu})=+0,34\ \mathrm{V},
$$

$$
E^\circ(\mathrm{Zn^{2+}/Zn})=-0,76\ \mathrm{V}.
$$

El cobre tiene el potencial de reducción mayor, así que se reduce:

$$
\mathrm{Cu^{2+}+2e^-\rightarrow Cu}.
$$

El zinc se oxida:

$$
\mathrm{Zn\rightarrow Zn^{2+}+2e^-}.
$$

La reacción global es:

$$
\mathrm{Zn+Cu^{2+}\rightarrow Zn^{2+}+Cu}.
$$

Y el potencial:

$$
E^\circ_{\text{pila}}=0,34-(-0,76)=1,10\ \mathrm{V}.
$$

Como el resultado es positivo, la reacción escrita es espontánea en condiciones estándar.

## El puente salino no transporta electrones

Al oxidarse el zinc aumenta la carga positiva de su disolución. Los aniones del puente salino migran hacia ese compartimento. En el cátodo se consumen cationes de cobre, por lo que los cationes del puente migran hacia allí para conservar la neutralidad eléctrica.

El puente salino cierra el circuito mediante movimiento iónico; los electrones viajan por el conductor metálico. Confundir ambos recorridos es un error conceptual frecuente.

## Notación de la pila

Para la pila anterior:

$$
\mathrm{Zn(s)\,|\,Zn^{2+}(aq)\,||\,Cu^{2+}(aq)\,|\,Cu(s)}.
$$

Una línea separa fases; la doble línea representa el puente salino. Por convenio se escribe el ánodo a la izquierda y el cátodo a la derecha.

## ¿Se multiplican los potenciales?

No. Si multiplicas una semirreacción por 2 para igualar electrones, el potencial no se multiplica. $E^\circ$ es una magnitud intensiva. Lo que sí cambia con la cantidad de sustancia es la energía libre:

$$
\Delta G^\circ=-nFE^\circ.
$$

$n$ es el número de electrones intercambiados en la reacción global ajustada y $F$ la constante de Faraday.

## Secuencia segura para un ejercicio PAU

El desarrollo completo comienza con las dos semirreacciones escritas como reducciones y sus potenciales tabulados. La de mayor potencial ocupa el cátodo; la otra se invierte para representar la oxidación. Después se igualan los electrones —sin multiplicar los potenciales— y se obtiene la reacción global.

El cálculo de $E^\circ_{\text{pila}}$ cierra la parte energética. La representación de polos, flujo electrónico y migración iónica completa el modelo físico. La conservación de átomos y carga, junto con el signo del potencial, ofrece una comprobación final independiente.

## Errores frecuentes

- Confundir ánodo con electrodo siempre positivo: eso cambia en una electrólisis.
- Hacer circular electrones por la disolución.
- Usar el potencial menor como cátodo.
- Multiplicar $E^\circ$ al ajustar electrones.
- Escribir una reacción global con carga no conservada.
- Decir que una reacción es espontánea sin relacionarlo con el signo de $E^\circ$.

El campus virtual de Método Nebula desarrolla números de oxidación, ajuste ion-electrón, pilas, potenciales, electrólisis y leyes de Faraday con ejercicios progresivos y modelos de examen. El botón de contacto permite acceder a una ruta centrada en el razonamiento completo, sin depender de reglas aisladas.
