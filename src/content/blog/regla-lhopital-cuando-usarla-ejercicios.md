---
title: Regla de L'Hôpital: cuándo utilizarla y cuándo no
date: 2026-08-23
updated: 2026-08-23
description: Aprende cuándo se puede aplicar la regla de L'Hôpital, cómo transformar otras indeterminaciones y qué errores evitar con ejercicios resueltos.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/calculo-universitario/
relatedPosts: como-resolver-limites-indeterminaciones-ejercicios,que-son-las-derivadas-y-para-que-se-utilizan,como-aprobar-calculo-i-ingenieria-seis-semanas
image: /favicon.svg
---

La regla de L'Hôpital se aplica a cocientes cuya sustitución produce las formas indeterminadas $0/0$ o $\infty/\infty$. Permite sustituir el límite de un cociente de funciones por el límite del cociente de sus derivadas, siempre que se cumplan sus hipótesis.

No sirve directamente para $1/0$, $0\cdot\infty$, $\infty-\infty$ ni potencias indeterminadas. Estas formas deben transformarse primero.

## Qué afirma la regla

Supongamos que $f$ y $g$ son derivables en un entorno perforado de $a$, que $g'(x)\neq0$ cerca de $a$ y que

$$
\lim_{x\to a}f(x)=\lim_{x\to a}g(x)=0
$$

o que ambas funciones tienden en módulo a infinito. Si existe

$$
\lim_{x\to a}\frac{f'(x)}{g'(x)}=L,
$$

donde $L$ puede ser finito o infinito, entonces

$$
\boxed{\lim_{x\to a}\frac{f(x)}{g(x)}=L}.
$$

Hay versiones equivalentes para límites laterales y para $x\to\pm\infty$. La regla proporciona una condición suficiente: puede ocurrir que el límite original exista aunque el cociente de derivadas no tenga límite.

### El valor en el punto no es lo importante

Las funciones no necesitan estar definidas exactamente en $a$. La regla trabaja en un entorno perforado, igual que la definición de límite. Podemos redefinir $f(a)$ o $g(a)$ sin cambiar el resultado, siempre que su comportamiento próximo y las demás hipótesis permanezcan iguales.

La condición $g'(x)\neq0$ evita que el nuevo cociente quede indefinido de forma persistente cerca del punto. La existencia del límite de $f'/g'$ es la pieza que transmite información al cociente original; si ese nuevo límite oscila, la regla no concluye.

Cuando $f$ y $g$ tienden a infinito, no se exige que lo hagan con el mismo signo. La forma $(-\infty)/\infty$ también pertenece al caso de cociente infinito entre infinito. El signo queda recogido al calcular $f'/g'$.

## Por qué derivar numerador y denominador puede funcionar

Cerca de un punto donde $f(a)=g(a)=0$, ambas funciones se comparan mediante sus variaciones. El teorema del valor medio de Cauchy relaciona el cociente

$$
\frac{f(x)-f(a)}{g(x)-g(a)}
$$

con un cociente $f'(c)/g'(c)$ en algún punto intermedio $c$. Si el cociente de derivadas se aproxima a $L$, también lo hace la razón de los incrementos.

Esta idea utiliza la relación entre límites y [derivadas como tasas de cambio](/blog/que-son-las-derivadas-y-para-que-se-utilizan/). También explica por qué no se deriva el cociente con la regla habitual:

$$
\left(\frac fg\right)'
=\frac{f'g-fg'}{g^2}.
$$

L'Hôpital no afirma que el cociente original y el cociente de derivadas sean funciones iguales. Afirma que, bajo ciertas hipótesis, tienen el mismo límite.

## Comprobación previa obligatoria

Antes de aplicar la regla:

1. Sustituye o estudia los límites de numerador y denominador por separado.
2. Confirma que la forma sea exactamente $0/0$ o $\infty/\infty$.
3. Comprueba que las funciones sean derivables en el entorno relevante.
4. Deriva numerador y denominador por separado.
5. Calcula el nuevo límite.
6. Si vuelve a ser $0/0$ o $\infty/\infty$, revisa de nuevo las hipótesis antes de repetir.

La [guía general para resolver límites](/blog/como-resolver-limites-indeterminaciones-ejercicios/) debe preceder a esta técnica: muchas indeterminaciones se eliminan de forma más clara factorizando, racionalizando o usando límites notables.

## Ejemplo 1 — forma 0/0 con logaritmo

Calcula

$$
\lim_{x\to1}\frac{\ln x}{x-1}.
$$

Numerador y denominador tienden a cero. Podemos aplicar L'Hôpital:

$$
\lim_{x\to1}\frac{1/x}{1}=1.
$$

Por tanto,

$$
\boxed{\lim_{x\to1}\frac{\ln x}{x-1}=1}.
$$

La respuesta también concuerda con la derivada de $\ln x$ en $x=1$, porque el cociente original es su cociente incremental.

## Ejemplo 2 — aplicación repetida

Calcula

$$
\lim_{x\to0}\frac{e^x-1-x}{x^2}.
$$

La sustitución da $0/0$. Derivamos una vez:

$$
\lim_{x\to0}\frac{e^x-1}{2x}.
$$

Sigue siendo $0/0$, así que la regla puede aplicarse de nuevo:

$$
\lim_{x\to0}\frac{e^x}{2}=\frac12.
$$

Luego

$$
\boxed{\lim_{x\to0}\frac{e^x-1-x}{x^2}=\frac12}.
$$

No se repite la regla porque «todavía hay derivadas disponibles», sino porque después de la primera aplicación se mantiene una forma autorizada.

## Ejemplo 3 — forma infinito entre infinito

Estudia

$$
\lim_{x\to\infty}\frac{\ln x}{x}.
$$

Ambas funciones tienden a infinito. Al derivar,

$$
\lim_{x\to\infty}\frac{1/x}{1}
=\lim_{x\to\infty}\frac1x=0.
$$

Así,

$$
\boxed{\ln x=o(x)}.
$$

El logaritmo crece sin cota, pero mucho más despacio que una función lineal.

## Ejemplo 4 — una exponencial domina a un polinomio

Calcula

$$
\lim_{x\to\infty}\frac{x^2}{e^x}.
$$

La forma es $\infty/\infty$. Aplicamos la regla dos veces:

$$
\lim_{x\to\infty}\frac{2x}{e^x}
=\lim_{x\to\infty}\frac2{e^x}=0.
$$

Por tanto,

$$
\boxed{\lim_{x\to\infty}\frac{x^2}{e^x}=0}.
$$

El mismo razonamiento muestra que $x^n/e^x\to0$ para cualquier entero fijo $n\geq0$: se deriva el polinomio hasta convertirlo en una constante.

## Jerarquía de crecimiento

Para $x\to\infty$, una jerarquía útil es

$$
(\ln x)^m\ll x^p\ll a^x,
\qquad m>0,\ p>0,\ a>1.
$$

El símbolo $u\ll v$ indica que $u/v\to0$. L'Hôpital permite justificar estas comparaciones. Por ejemplo, cada derivación reduce la potencia de $x$, mientras una exponencial sigue siendo proporcional a sí misma. Para comparar logaritmos con potencias, una aplicación ya transforma $\ln x/x^p$ en una constante por $1/x^p$.

### Ejemplo 4 bis — logaritmo elevado frente a potencia

Calcula

$$
\lim_{x\to\infty}\frac{(\ln x)^2}{x}.
$$

La forma es $\infty/\infty$. Una aplicación da

$$
\lim_{x\to\infty}\frac{2\ln x/x}{1}
=\lim_{x\to\infty}\frac{2\ln x}{x}.
$$

Sigue siendo $\infty/\infty$. Aplicamos de nuevo:

$$
\lim_{x\to\infty}\frac{2/x}{1}=0.
$$

Así, $(\ln x)^2=o(x)$. La potencia del logaritmo no altera que una potencia positiva de $x$ termine dominando.

### Ejemplo 4 ter — base exponencial distinta de e

Para $a>1$,

$$
\lim_{x\to\infty}\frac{x}{a^x}
$$

tiene forma $\infty/\infty$. Como $(a^x)'=a^x\ln a$,

$$
\lim_{x\to\infty}\frac1{a^x\ln a}=0.
$$

El factor $\ln a>0$ no cambia la convergencia. Si $0<a<1$, en cambio, $a^x\to0$ y el cociente original no presenta forma infinito entre infinito: crece a $+\infty$.

## Cuándo no hace falta utilizarla

Que una expresión sea un cociente no obliga a aplicar L'Hôpital. Si la sustitución produce un valor determinado, se evalúa directamente. Si existe una simplificación elemental que revela el comportamiento, suele ser preferible.

### Ejemplo 5 — factorización más directa

$$
\lim_{x\to3}\frac{x^2-9}{x-3}
$$

tiene forma $0/0$, por lo que L'Hôpital sería válida y daría

$$
\lim_{x\to3}\frac{2x}{1}=6.
$$

Sin embargo, factorizar ofrece más información:

$$
\frac{(x-3)(x+3)}{x-3}=x+3
\qquad(x\neq3).
$$

Vemos que la discontinuidad es evitable y que el límite vale $6$. La regla calcula el número, mientras que la simplificación explica la estructura.

### Ejemplo 6 — un límite notable es suficiente

En

$$
\lim_{x\to0}\frac{\sin x}{x},
$$

L'Hôpital produciría $\lim_{x\to0}\cos x=1$. Pero las derivadas de seno y coseno se demuestran inicialmente utilizando este límite notable. Usar L'Hôpital para demostrarlo en ese contexto sería circular.

Una técnica puede ser formalmente válida en un curso avanzado y, aun así, ser inadecuada si depende del resultado que se pretende establecer.

## Transformar la forma 0 por infinito

Un producto $f(x)g(x)$ con forma $0\cdot\infty$ se convierte en cociente:

$$
f(x)g(x)=\frac{f(x)}{1/g(x)}
\quad\text{o}\quad
\frac{g(x)}{1/f(x)}.
$$

Se escoge la forma que produzca $0/0$ o $\infty/\infty$ y derivadas manejables.

### Ejemplo 7 — x por logaritmo

Calcula

$$
\lim_{x\to0^+}x\ln x.
$$

La forma es $0\cdot(-\infty)$. Escribimos

$$
x\ln x=\frac{\ln x}{1/x}.
$$

Ahora aparece $(-\infty)/\infty$. Aplicamos la regla:

$$
\lim_{x\to0^+}\frac{1/x}{-1/x^2}
=\lim_{x\to0^+}(-x)=0.
$$

Por tanto,

$$
\boxed{\lim_{x\to0^+}x\ln x=0}.
$$

El producto se aproxima a cero desde valores negativos.

## Transformar infinito menos infinito

Una diferencia de dos términos infinitos puede reunirse en una fracción común o racionalizarse. Solo después se comprueba la nueva forma.

### Ejemplo 8 — diferencia de fracciones

Calcula

$$
\lim_{x\to0}\left(\frac1x-\frac1{e^x-1}\right).
$$

Cada término diverge. Reunimos:

$$
\frac1x-\frac1{e^x-1}
=\frac{e^x-1-x}{x(e^x-1)}.
$$

La nueva forma es $0/0$. Derivamos:

$$
\lim_{x\to0}
\frac{e^x-1}{e^x-1+xe^x}.
$$

Continúa siendo $0/0$. Una segunda aplicación da

$$
\lim_{x\to0}
\frac{e^x}{e^x+e^x+xe^x}
=\frac12.
$$

Por tanto, el límite original es $\boxed{1/2}$. Aplicar la regla por separado a los dos términos no resolvería una resta de infinitos.

## Potencias indeterminadas

Las formas $1^\infty$, $0^0$ e $\infty^0$ se estudian tomando logaritmos. Si $y=f(x)^{g(x)}$ y $f(x)>0$, entonces

$$
\ln y=g(x)\ln f(x).
$$

Se calcula el límite del producto transformado. Si vale $A$, la potencia original tiende a $e^A$.

### Ejemplo 9 — forma 1 elevado a infinito

Calcula

$$
\lim_{x\to\infty}\left(1+\frac3x\right)^x.
$$

Sea $y=(1+3/x)^x$. Entonces

$$
\ln y=x\ln\left(1+\frac3x\right)
=\frac{\ln(1+3/x)}{1/x}.
$$

Es una forma $0/0$. Derivamos respecto de $x$:

$$
\frac{-3/[x^2(1+3/x)]}{-1/x^2}
=\frac3{1+3/x}\longrightarrow3.
$$

Por continuidad de la exponencial,

$$
\boxed{\lim_{x\to\infty}\left(1+\frac3x\right)^x=e^3}.
$$

El límite calculado con L'Hôpital es el de $\ln y$, no directamente el de $y$.

## La regla puede no ayudar

Derivar puede complicar la expresión, producir otro límite más difícil o crear un cociente sin límite. Esto no demuestra que el límite original no exista.

### Ejemplo 10 — el cociente de derivadas no tiene límite

Considera

$$
\lim_{x\to0}\frac{x^2\sin(1/x)}{x}.
$$

Para $x\neq0$, la expresión es $x\sin(1/x)$. Como

$$
|x\sin(1/x)|\leq|x|,
$$

el teorema del encaje demuestra que el límite vale $0$.

Si intentamos L'Hôpital, obtenemos

$$
\frac{2x\sin(1/x)-\cos(1/x)}{1},
$$

que no tiene límite por la oscilación del coseno. No se contradice la regla: su hipótesis sobre el límite del cociente de derivadas no se cumple, así que no aporta conclusión.

## Casos en los que está prohibida

No debe aplicarse directamente en estas situaciones:

- El cociente tiende a $c/0$ con $c\neq0$. Se estudian signos y límites laterales.
- Numerador y denominador tienen límites finitos no nulos.
- La expresión es una suma, producto, diferencia o potencia sin transformar.
- Alguna función no es derivable en el entorno lateral considerado.
- Se deriva el cociente completo en vez de numerador y denominador por separado.

### Ejemplo 11 — no existe una forma indeterminada

Para

$$
\lim_{x\to0}\frac{1+x}{x},
$$

el numerador tiende a $1$ y el denominador a $0$. L'Hôpital daría incorrectamente $1$ si se aplicara sin comprobar la forma. En realidad,

$$
\lim_{x\to0^-}\frac{1+x}{x}=-\infty,
\qquad
\lim_{x\to0^+}\frac{1+x}{x}=+\infty.
$$

El límite bilateral no existe.

## Límites laterales y parámetros

La regla puede aplicarse por separado a cada lateral. Esto es necesario si aparecen logaritmos, raíces o denominadores cuyo dominio solo permite acercarse desde un lado.

### Ejemplo 12 — parámetro para eliminar el término dominante

Determina $a$ para que exista un límite finito

$$
\lim_{x\to0}\frac{\ln(1+x)-ax}{x^2}
$$

y calcula su valor.

El denominador tiende a cero. El numerador también tiende a cero para cualquier $a$, así que la primera aplicación es válida:

$$
\lim_{x\to0}
\frac{1/(1+x)-a}{2x}.
$$

Para que este cociente no tenga numerador no nulo sobre cero, debe cumplirse

$$
1-a=0,
$$

es decir, $a=1$. Solo con ese valor reaparece la forma $0/0$ y podemos derivar otra vez:

$$
\lim_{x\to0}\frac{-1/(1+x)^2}{2}
=-\frac12.
$$

Por tanto,

$$
\boxed{a=1,
\qquad
\lim_{x\to0}\frac{\ln(1+x)-x}{x^2}=-\frac12}.
$$

Este tipo de ejercicio no consiste en aplicar la regla hasta que aparezca un número. Primero hay que escoger el parámetro que cancela el término de primer orden.

### Ejemplo 13 — límite lateral con logaritmo

Calcula

$$
\lim_{x\to0^+}\frac{\ln x}{1/x}.
$$

La expresión solo está definida para $x>0$ y tiene forma $(-\infty)/\infty$. Al derivar,

$$
\frac{1/x}{-1/x^2}=-x\to0.
$$

Luego el límite es $0$, desde valores negativos. Escribir $x\to0$ sin el signo derecho ocultaría la restricción del logaritmo.

## L'Hôpital e integrales impropias

La regla puede ayudar a evaluar los límites que aparecen al calcular una integral impropia, pero no sustituye su definición. Por ejemplo, tras integrar por partes puede aparecer

$$
\lim_{b\to\infty}be^{-b}
=\lim_{b\to\infty}\frac b{e^b}=0.
$$

L'Hôpital justifica el último límite. La convergencia de la integral exige además haber reemplazado el extremo infinito, calculado en un intervalo finito y tomado todos los límites necesarios. La guía de [integrales impropias](/blog/integrales-impropias-convergencia-ejercicios/) desarrolla esa estructura.

## Comparación con desarrollos de Taylor

Cuando se conocen desarrollos locales, Taylor puede mostrar qué términos se cancelan y cuál es el primer orden que sobrevive. L'Hôpital suele llegar al mismo coeficiente mediante derivaciones repetidas.

### Ejemplo 14 — cancelación de segundo orden

Calcula

$$
\lim_{x\to0}\frac{e^x-\cos x-x}{x^2}.
$$

La sustitución produce $0/0$. Derivamos:

$$
\lim_{x\to0}\frac{e^x+\sin x-1}{2x}.
$$

Sigue siendo $0/0$. Una segunda aplicación da

$$
\lim_{x\to0}\frac{e^x+\cos x}{2}=1.
$$

El desarrollo local explica el mismo resultado:

$$
e^x=1+x+\frac{x^2}{2}+o(x^2),
\qquad
\cos x=1-\frac{x^2}{2}+o(x^2).
$$

Al restar, los términos constantes y lineales se cancelan y queda $x^2+o(x^2)$. Dividir por $x^2$ produce el límite $1$.

L'Hôpital es más mecánica; Taylor hace visible el orden de la cancelación. Si un ejercicio pide justificar sin desarrollos, se usa la regla. Si se estudian equivalencias o aproximaciones, Taylor puede aportar más información.

## Cuándo detener las aplicaciones repetidas

Después de cada derivación se vuelve a sustituir. Si aparece un número dividido por otro número no nulo, se evalúa y se termina. Si aparece una forma no autorizada, no se sigue derivando por costumbre.

También hay que detenerse si el nuevo cociente resulta más difícil y existe otra vía. En cocientes racionales, por ejemplo, dividir por la potencia dominante suele resolver el límite de inmediato. En expresiones oscilantes, una cota puede ser más útil que las derivadas.

Una cadena larga de aplicaciones aumenta el riesgo de perder factores de la regla de la cadena. Conviene simplificar el cociente después de cada paso antes de decidir si se repite.

## Cómo elegir entre L'Hôpital y otra técnica

| Situación | Técnica preferente | Motivo |
|---|---|---|
| Polinomios factorizables | Factorización | Muestra factores y discontinuidades evitables |
| Diferencia con raíces | Conjugado | Elimina $\infty-\infty$ o $0/0$ |
| Cociente con exponenciales o logaritmos | L'Hôpital | Las derivadas suelen simplificar |
| Cociente de polinomios en infinito | Términos dominantes | Más breve y estructural |
| Producto $0\cdot\infty$ | Convertir en cociente | La regla no actúa sobre productos |
| Potencia indeterminada | Logaritmo y después L'Hôpital | Se transforma el exponente |
| Oscilación acotada | Teorema del encaje | Derivar puede destruir la cota útil |

La mejor solución no es la que utiliza la técnica más avanzada, sino la que justifica el límite con menos pasos y deja visible la razón matemática.

## Errores frecuentes

- **Aplicarla antes de comprobar la forma.** Solo $0/0$ y $\infty/\infty$ están autorizadas directamente.
- **Usar la regla del cociente.** Se calcula $f'/g'$, no $(f/g)'$.
- **Derivar solo una parte.** Todo el numerador y todo el denominador deben derivarse.
- **Repetir automáticamente.** Cada nueva aplicación exige otra forma indeterminada válida.
- **Olvidar la regla de la cadena.** Derivar $e^{x^2}$ o $\ln(g(x))$ requiere la derivada interior.
- **No transformar productos, diferencias o potencias.** La forma original debe convertirse primero.
- **Concluir que el límite no existe si falla el cociente de derivadas.** Puede resolverse por otro método.
- **Ignorar los laterales.** Las hipótesis y conclusiones pueden cumplirse solo por un lado.

## Cómo comprobar el resultado

Escribe en cada línea la forma que aparece después de sustituir. Así queda justificada cada aplicación. Al terminar, contrasta el signo y el orden de crecimiento: un logaritmo debe crecer más despacio que una potencia positiva, y una exponencial más rápido que cualquier potencia fija.

Si el resultado contradice una factorización simple o una tabla de signos lateral, revisa la transformación. Una comprobación numérica cerca del punto puede detectar fallos, aunque no sustituye la demostración.

## Ejercicios propuestos

1. $\displaystyle\lim_{x\to0}\frac{e^{2x}-1}{x}$
2. $\displaystyle\lim_{x\to0}\frac{\ln(1+x)-x}{x^2}$
3. $\displaystyle\lim_{x\to\infty}\frac{x^3}{e^x}$
4. $\displaystyle\lim_{x\to\infty}\frac{\ln x}{\sqrt{x}}$
5. $\displaystyle\lim_{x\to0^+}x^2\ln x$
6. $\displaystyle\lim_{x\to\infty}x\left(e^{1/x}-1\right)$
7. $\displaystyle\lim_{x\to0}\left(\frac1x-\frac1{\sin x}\right)$
8. $\displaystyle\lim_{x\to\infty}\left(1+\frac2x\right)^{3x}$
9. Decide si L'Hôpital puede aplicarse directamente a $\lim_{x\to0}(1+x)/x^2$.
10. Resuelve $\lim_{x\to0}(1-\cos x)/x^2$ por L'Hôpital y comprueba el número de aplicaciones.

## Soluciones

**1. Una aplicación.** Es $0/0$:

$$
\lim_{x\to0}\frac{2e^{2x}}1=\boxed{2}.
$$

**2. Dos aplicaciones.**

$$
\lim_{x\to0}\frac{1/(1+x)-1}{2x}
$$

sigue siendo $0/0$. Derivando otra vez,

$$
\lim_{x\to0}\frac{-1/(1+x)^2}{2}=\boxed{-\frac12}.
$$

**3. Exponencial dominante.** Tres aplicaciones convierten el numerador sucesivamente en $3x^2$, $6x$ y $6$:

$$
\lim_{x\to\infty}\frac6{e^x}=\boxed{0}.
$$

**4. Logaritmo frente a raíz.**

$$
\lim_{x\to\infty}\frac{1/x}{1/(2\sqrt{x})}
=\lim_{x\to\infty}\frac2{\sqrt{x}}=\boxed{0}.
$$

**5. Producto transformado.**

$$
x^2\ln x=\frac{\ln x}{1/x^2}
\xrightarrow{\text{L'Hôpital}}
\frac{1/x}{-2/x^3}=-\frac{x^2}{2}\to\boxed{0}.
$$

**6. Producto transformado.**

$$
x(e^{1/x}-1)=\frac{e^{1/x}-1}{1/x}.
$$

Es $0/0$. El cociente de derivadas es $e^{1/x}$, por lo que el resultado es $\boxed{1}$.

**7. Diferencia reunida.**

$$
\frac1x-\frac1{\sin x}
=\frac{\sin x-x}{x\sin x}.
$$

La primera aplicación da

$$
\lim_{x\to0}\frac{\cos x-1}{\sin x+x\cos x},
$$

que sigue siendo $0/0$. La segunda produce

$$
\lim_{x\to0}\frac{-\sin x}{2\cos x-x\sin x}=\frac02=\boxed{0}.
$$

La regla es válida, pero reunir primero las fracciones era imprescindible para convertir $\infty-\infty$ en un cociente autorizado.

**8. Potencia.** Tomando logaritmos,

$$
3x\ln(1+2/x)\to6,
$$

de modo que el límite es $\boxed{e^6}$.

**9. No.** La forma es $1/0$, no indeterminada. Ambos laterales tienden a $+\infty$ porque $x^2>0$ y el numerador es positivo cerca de cero.

**10. Dos aplicaciones.** La primera produce $\sin x/(2x)$, todavía $0/0$; la segunda produce $\cos x/2$, cuyo límite es $\boxed{1/2}$.

## Resumen práctico

L'Hôpital compara derivadas únicamente en formas $0/0$ o $\infty/\infty$. Comprueba la forma antes de cada aplicación y transforma productos, diferencias y potencias. Factorizar, racionalizar, usar equivalentes o aplicar el encaje puede ser más informativo y más breve.

La existencia del límite de $f'/g'$ permite concluir sobre $f/g$, pero su ausencia no demuestra que el límite original falle. Trata la regla como un teorema con hipótesis, no como una orden de «derivar arriba y abajo».

En una solución escrita, deja visible la forma indeterminada antes de cada flecha de L'Hôpital. Ese pequeño control documenta que la aplicación es legal y facilita localizar el paso exacto si una derivada o un signo resultan incorrectos.

Simplifica siempre el nuevo cociente antes de decidir el paso siguiente.

Si estás preparando Cálculo universitario y necesitas decidir qué técnica admite cada límite sobre tus propios ejercicios, puedes consultar las [clases particulares de Cálculo universitario](/clases-particulares/calculo-universitario/).
