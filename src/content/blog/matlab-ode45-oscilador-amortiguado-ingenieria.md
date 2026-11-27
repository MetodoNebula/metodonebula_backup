---
title: "MATLAB ode45 para vibraciones: oscilador amortiguado, tolerancias y eventos"
seoTitle: "MATLAB ode45: oscilador amortiguado y tolerancias"
date: "2026-11-27"
updated: "2026-11-27"
description: "Cómo resolver un oscilador amortiguado con ode45 en MATLAB: sistema de primer orden, condiciones iniciales, RelTol, AbsTol, gráficas y eventos."
tag: "MATLAB"
category: "Física y Química"
relatedService: "/clases-particulares/fisica-ingenieria/"
relatedPosts: "oscilador-armonico-amortiguado-ecuaciones-diferenciales-ingenieria,maxima-ecuaciones-diferenciales-ode2-rk-ingenieria,circuitos-rlc-fasores-resonancia-ingenieria"
image: "/favicon.svg"
---

ode45 es un punto de partida excelente para muchas ecuaciones diferenciales no rígidas de Ingeniería, pero requiere que traduzcas correctamente el modelo a un sistema de primer orden. El error más común no es elegir una tolerancia: es poner posición y velocidad en el orden equivocado o devolver un vector fila cuando el solver espera un vector columna.

> **Objetivo de este artículo.** Modelar un oscilador masa–muelle amortiguado con ode45, definir condiciones iniciales, interpretar las tolerancias y comprobar que la simulación respeta el comportamiento físico esperado.

## Del modelo de segundo orden al sistema de primer orden

Partimos de:

$$
m x''+c x'+kx=F(t).
$$

Define el estado:

$$
y_1=x,\qquad y_2=x'.
$$

Entonces:

$$
y_1'=y_2,
\qquad
y_2'=\frac{F(t)-cy_2-ky_1}{m}.
$$

ode45 trabaja con $y'=f(t,y)$, por eso debes devolver ambas derivadas:

```matlab
m = 1.0;
c = 0.8;
k = 20.0;

F = @(t) 0;

odefun = @(t,y) [ ...
    y(2);
    (F(t) - c*y(2) - k*y(1))/m ...
];
```

El punto y coma dentro del vector genera una columna. Si usas una coma, MATLAB crea una fila y el solver puede interpretar mal el tamaño del estado.

## Condiciones iniciales y resolución

Supón que el sistema parte de $x(0)=0.10$ m y $x'(0)=0$ m/s:

```matlab
tspan = [0 15];
y0 = [0.10; 0];

[t,y] = ode45(odefun, tspan, y0);

x = y(:,1);
v = y(:,2);

plot(t,x,'LineWidth',1.5)
grid on
xlabel('Tiempo (s)')
ylabel('Desplazamiento x (m)')
title('Oscilador amortiguado')
```

Cada fila de y corresponde al instante de la misma fila de t. La primera columna representa la posición y la segunda la velocidad porque ese fue el orden que definiste en odefun. No cambies esa interpretación a mitad del análisis.

## Comprueba primero el régimen de amortiguamiento

Antes de mirar la gráfica, calcula:

$$
\Delta=c^2-4mk.
$$

Con los valores anteriores:

$$
\Delta=0.8^2-4(1)(20)<0.
$$

El sistema es subamortiguado: debes esperar oscilaciones con amplitud decreciente. Si tu gráfica crece sin límite con $F(t)=0$, revisa signos, unidades o el orden de las variables de estado.

Puedes comparar la frecuencia natural y la amortiguada:

```matlab
wn = sqrt(k/m);
zeta = c/(2*sqrt(m*k));
wd = wn*sqrt(1-zeta^2);
```

Estas cantidades conectan la simulación numérica con la solución analítica de la ecuación diferencial.

## RelTol y AbsTol: qué controlan de verdad

MATLAB ajusta el tamaño de paso para mantener el error local de cada componente dentro de una combinación de tolerancia relativa y absoluta:

$$
|e_i|\leq\max(\mathrm{RelTol}|y_i|,\mathrm{AbsTol}_i).
$$

No copies tolerancias muy pequeñas por reflejo. Escoge escalas coherentes con las unidades de posición y velocidad y comprueba si el resultado relevante cambia al endurecerlas:

```matlab
opts1 = odeset('RelTol',1e-5,'AbsTol',1e-7);
opts2 = odeset('RelTol',1e-8,'AbsTol',1e-10);

[t1,y1] = ode45(odefun,tspan,y0,opts1);
[t2,y2] = ode45(odefun,tspan,y0,opts2);
```

Como ode45 escoge sus propios puntos internos, no compares y1 y y2 fila a fila si t1 y t2 no coinciden. Interpola o pide una malla de salida concreta para comparar una magnitud física.

## Pedir valores en instantes determinados

Si necesitas valores cada 0,01 s para una tabla o una gráfica común:

```matlab
tEval = 0:0.01:15;
[t,y] = ode45(odefun,tEval,y0,opts1);
```

ode45 sigue haciendo pasos internos adaptativos y evalúa la solución en los puntos que has solicitado. Una malla más densa no reemplaza una tolerancia apropiada; solo define dónde quieres recibir la salida.

## Fuerza externa y resonancia

Para una excitación sinusoidal:

```matlab
F0 = 3;
Omega = 4.3;
F = @(t) F0*cos(Omega*t);

odefun = @(t,y) [ ...
    y(2);
    (F(t) - c*y(2) - k*y(1))/m ...
];
```

No etiquetes cualquier amplitud grande como resonancia. Compara Omega con la frecuencia natural y considera el amortiguamiento. Para estudiar el estado estacionario, simula suficiente tiempo como para separar el transitorio de la respuesta forzada.

## Detectar un evento físico

Un evento puede detener la integración al alcanzar una condición, por ejemplo cuando la posición cruza cero en sentido descendente. Crea una función local al final del script:

```matlab
function [value,isterminal,direction] = cruceCero(t,y)
    value = y(1);
    isterminal = 1;
    direction = -1;
end
```

Después la añades a las opciones:

```matlab
opts = odeset(opts1,'Events',@cruceCero);
[t,y,te,ye,ie] = ode45(odefun,tspan,y0,opts);
```

te contiene el instante del evento. No supongas que el último punto ordinario de t coincide con precisión con el cruce: usa la salida de evento.

## Cuándo ode45 deja de ser una buena primera opción

ode45 suele ser apropiado para problemas no rígidos. Si el solver reduce el paso de forma extrema, muestra muchas evaluaciones o el sistema contiene escalas de tiempo muy separadas, investiga rigidez y considera solvers como ode15s. Cambiar de solver debe responder al problema, no a que una gráfica parezca más suave.

## Errores que invalidan una simulación

- Devolver [x;v] en lugar de [v;aceleración].
- Olvidar dividir la fuerza neta por m.
- Usar una condición inicial fila sin comprobar el formato de salida.
- Mezclar radianes por segundo y hercios al construir una fuerza sinusoidal.
- Comparar soluciones en mallas de tiempo distintas sin interpolar.
- Elegir RelTol muy pequeña y concluir que eso valida el modelo.
- Usar MaxStep para “forzar precisión” sin estudiar tolerancias ni eventos.

Para entender la ecuación antes de simularla, repasa [el oscilador amortiguado y su ecuación diferencial](/blog/oscilador-armonico-amortiguado-ecuaciones-diferenciales-ingenieria/). Para Física II, Vibraciones o Métodos Numéricos, las [clases de Física e Ingeniería](/clases-particulares/fisica-ingenieria/) pueden usar MATLAB con el modelo de tu asignatura.

La sintaxis y la interpretación de ode45, las opciones de odeset y los eventos se han contrastado con la [documentación oficial de ode45](https://www.mathworks.com/help/matlab/ref/ode45.html) y el [resumen de opciones ODE](https://www.mathworks.com/help/matlab/math/summary-of-ode-options.html).
