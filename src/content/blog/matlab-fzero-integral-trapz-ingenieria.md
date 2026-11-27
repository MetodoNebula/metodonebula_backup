---
title: "MATLAB fzero, integral y trapz: raíces e integración numérica con datos de Ingeniería"
seoTitle: "MATLAB fzero, integral y trapz: ejercicios de Ingeniería"
date: "2026-11-27"
updated: "2026-11-27"
description: "Cómo usar fzero, integral y trapz en MATLAB para Ingeniería: intervalos con cambio de signo, integración de funciones, datos experimentales no uniformes y validación."
tag: "MATLAB"
category: "Matemáticas universitarias"
relatedService: "/clases-particulares/matematicas-universidad/"
relatedPosts: "integrales-impropias-convergencia-ejercicios,integrales-dobles-ejercicios-resueltos,matlab-sistemas-lineales-condicionamiento-ingenieria"
image: "/favicon.svg"
---

En Ingeniería, muchas ecuaciones no se despejan de forma cerrada y muchos datos provienen de sensores, no de una función conocida. MATLAB distingue bien ambos escenarios: fzero busca una raíz de una función escalar; integral calcula una integral adaptativa cuando conoces la función; trapz integra valores muestreados.

> **Objetivo de este artículo.** Elegir la herramienta correcta entre fzero, integral y trapz, justificar el intervalo o la malla de datos y comprobar que un resultado numérico tiene sentido físico y de unidades.

## fzero no resuelve cualquier ecuación

fzero trabaja con una ecuación escalar de una variable:

$$
f(x)=0.
$$

Por ejemplo, para encontrar el tiempo en que una temperatura modelada alcanza 60 °C:

$$
T(t)=20+80(1-e^{-0.15t}).
$$

Definimos el residuo:

```matlab
T = @(t) 20 + 80*(1-exp(-0.15*t));
f = @(t) T(t) - 60;
```

Antes de usar un algoritmo, comprueba dos tiempos que encierren un cambio de signo:

```matlab
f(0)
f(10)
```

Si uno es negativo y otro positivo, puedes usar el intervalo:

```matlab
[t60,fval,exitflag,output] = fzero(f,[0 10]);
```

Después, valida el resultado:

```matlab
T(t60)
fval
exitflag
```

t60 tiene unidades de tiempo porque t era la variable temporal. El valor fval debe ser cercano a cero; exitflag informa si el proceso terminó con éxito. No entregues solo la cifra t60 sin escribir qué condición física satisface.

## Por qué el intervalo es mejor que un punto a ciegas

Con una estimación inicial de un solo punto, fzero intenta localizar un intervalo donde la función cambie de signo. Si ya conoces dos puntos con signos opuestos, dáselos explícitamente. Así el problema está mejor planteado y la raíz queda encerrada.

Hay una limitación fundamental: una raíz de multiplicidad par puede no implicar cambio de signo. Por ejemplo, $(x-2)^2$ vale cero en 2 pero no cambia de signo. fzero no es una herramienta para detectar automáticamente todas esas raíces a partir de cualquier punto.

## Una ecuación de balance de energía

Supón que un caudal de enfriamiento depende de una temperatura desconocida y el balance se expresa como:

$$
Q_{\text{generado}}-Q_{\text{extraído}}(T)=0.
$$

En MATLAB el trabajo empieza por definir un residuo con unidades consistentes:

```matlab
Qgen = 2500;
Qout = @(T) 180*(T-20) + 0.8*(T-20).^2;
balance = @(T) Qgen - Qout(T);

Tsol = fzero(balance,[20 100]);
balance(Tsol)
```

El punto antes de potencia permite que la función admita vectores si luego quieres representarla. Es una práctica sencilla que evita errores al pasar de cálculo a gráficos.

## integral: cuando conoces la función

Si conoces analíticamente la potencia $P(t)$ y buscas energía:

$$
E=\int_{t_0}^{t_f}P(t)\,dt,
$$

usa integral con una función anónima:

```matlab
P = @(t) 1200*exp(-0.2*t).*sin(t).^2;
E = integral(P,0,20);
```

El punto antes de multiplicación o potencia es necesario cuando MATLAB evalúa P en vectores de puntos. Si escribes sin los puntos, una expresión que funciona con un escalar puede fallar durante la integración.

integral adapta internamente los puntos de evaluación. No confundas esto con integrar datos de una tabla: para eso está trapz.

## trapz: cuando tienes mediciones

Supón mediciones de velocidad tomadas en tiempos irregulares:

```matlab
t = [0 0.3 0.9 1.4 2.2 3.0];
v = [0 1.8 3.6 4.1 3.0 1.2];

desplazamiento = trapz(t,v);
```

La respuesta aproxima:

$$
s\approx\int v(t)\,dt.
$$

Es esencial pasar ambos vectores. trapz(v) asumiría separación unidad entre muestras, lo que sería incorrecto porque los tiempos no están espaciados uniformemente.

Antes de usarlo, revisa:

```matlab
numel(t) == numel(v)
all(diff(t) > 0)
```

Las mediciones deben tener la misma longitud y t debe estar ordenado. Un vector de tiempo desordenado puede producir una integral sin significado físico aunque MATLAB devuelva un número.

## Error de discretización: compara mallas

Para una función conocida, puedes usar integral como referencia y trapz sobre una malla para estudiar el efecto del paso:

```matlab
f = @(x) exp(-x.^2);
Iref = integral(f,0,2);

x1 = linspace(0,2,21);
x2 = linspace(0,2,201);

I1 = trapz(x1,f(x1));
I2 = trapz(x2,f(x2));

err1 = abs(I1-Iref);
err2 = abs(I2-Iref);
```

Una malla diez veces más densa suele reducir el error trapezoidal en una función suave, pero no debes prometer una tasa sin verificar condiciones. Si los datos tienen ruido, una malla más densa no elimina automáticamente el error de medición.

## Integrales impropias y singularidades

Si aparece un extremo infinito o una singularidad, no ocultes el análisis matemático tras una llamada numérica. Determina primero si la integral debería converger y localiza los puntos problemáticos. Para una función conocida, integral puede trabajar con intervalos finitos y algunas transformaciones internas, pero la interpretación de la convergencia sigue siendo tuya.

Cuando hay una discontinuidad dentro del intervalo, divide el problema en subintervalos donde la función esté bien definida y analiza el límite. Una única llamada que devuelve un número no equivale a una demostración de existencia.

## Errores que cambian la solución

- Pasar a fzero una ecuación en lugar de una función que devuelva el residuo.
- No comprobar cambio de signo al usar un intervalo.
- Ignorar fval y exitflag.
- Usar ^ y * en lugar de .^ y .* para funciones evaluadas en vectores.
- Aplicar integral a datos tabulados o trapz a datos con espaciado irregular sin pasar la coordenada.
- Integrar una velocidad y llamar al resultado energía sin revisar unidades.
- Aumentar el número de puntos sin comprobar si domina el error de medición.

Para reforzar el análisis previo, continúa con [integrales impropias y convergencia](/blog/integrales-impropias-convergencia-ejercicios/). En Métodos Numéricos, Termodinámica, Señales o Física, las [clases de Matemáticas universitarias](/clases-particulares/matematicas-universidad/) pueden trabajar los ejercicios y datos de tu asignatura.

Las sintaxis de fzero y trapz se apoyan en la [documentación oficial de fzero](https://www.mathworks.com/help/matlab/ref/fzero.html) y [trapz](https://www.mathworks.com/help/matlab/ref/trapz.html).
