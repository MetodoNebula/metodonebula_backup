---
title: Matemáticas II · PAU 2026 · Aragón — examen resuelto
seoTitle: Matemáticas II · PAU 2026 · Aragón — examen resuelto
date: 2026-10-16
updated: 2026-11-05
description: Examen Matemáticas II · PAU 2026 · Aragón resuelto paso a paso con planteamientos, cálculos y comprobaciones para preparar la Selectividad.
tag: Matemáticas II PAU
category: Selectividad
relatedService: /campus/
relatedPosts: como-preparar-pau-matematicas-ii,pau-matematicas-matrices-determinantes-gauss,pau-matematicas-integrales-areas
image: /favicon.svg
---

Este examen resuelto conserva el enunciado y desarrolla cada apartado. Úsalo primero a contrarreloj y compáralo después con el razonamiento, no solo con el resultado final.

**Convocatoria:** ordinaria. **Examen:** las preguntas 1, 2 y 3 son obligatorias; en las 4 y 5 hay que escoger una opción.

## Ejercicio 1 · Evolución de poblaciones con matrices

### Enunciado

Tres especies de un ecosistema, A, B y C, tienen poblaciones $a_k$, $b_k$ y $c_k$ en el mes $k$. Su evolución se representa con

$$\begin{pmatrix}a_{k+1}\\b_{k+1}\\c_{k+1}\end{pmatrix}
=M\begin{pmatrix}a_k\\b_k\\c_k\end{pmatrix},\qquad
M=\begin{pmatrix}1&0&0\\1&1&0\\1&0&1\end{pmatrix}.$$

**a)** Al principio hay 100 ejemplares de A, 124 de B y 234 de C. ¿Cuántos habrá tras dos meses? (0,5 puntos)

**b)** Explica por qué, sin hacer la potencia, la población en el mes $k$ se calcula multiplicando la población inicial por $M^k$. (0,5 puntos)

**c)** Obtén una fórmula para $M^k$ y describe qué ocurre con cada especie a medida que pasan los meses. (1 punto)

### Solución

**a)** Multiplicamos una vez para el primer mes:

$$M\begin{pmatrix}100\\124\\234\end{pmatrix}
=\begin{pmatrix}100\\224\\334\end{pmatrix}.$$

Y volvemos a aplicar la misma matriz:

$$M\begin{pmatrix}100\\224\\334\end{pmatrix}
=\boxed{\begin{pmatrix}100\\324\\434\end{pmatrix}}.$$

**b)** Si escribimos $v_k=(a_k,b_k,c_k)^T$, tenemos $v_1=Mv_0$, $v_2=Mv_1=M^2v_0$ y $v_3=Mv_2=M^3v_0$. Repitiendo este razonamiento mes a mes:

$$\boxed{v_k=M^kv_0}.$$

**c)** Calculamos algunas potencias para encontrar el patrón:

$$M^2=\begin{pmatrix}1&0&0\\2&1&0\\2&0&1\end{pmatrix},\qquad
M^3=\begin{pmatrix}1&0&0\\3&1&0\\3&0&1\end{pmatrix}.$$

Por inducción, la expresión general es

$$\boxed{M^k=\begin{pmatrix}1&0&0\\k&1&0\\k&0&1\end{pmatrix}}.$$

Así, $a_k=a_0$, $b_k=b_0+ka_0$ y $c_k=c_0+ka_0$. En este ejemplo, A se mantiene en 100 individuos y B y C ganan 100 ejemplares cada mes.

## Ejercicio 2 · Primitivas y monotonía

### Enunciado

Una función $f$ es continua en $[0,\infty)$ y cumple

$$f'(x)=\frac{e^{\sqrt{x}}}{\sqrt{x}}\quad(x>0),\qquad f(1)=2e-2.$$

**a)** Encuentra $f(x)$ y calcula su límite cuando $x\to0^+$. (1 punto)

**b)** Indica dónde crece o decrece y demuestra que $f(x)\ge0$ para todo $x\ge0$. (1 punto)

### Solución

**a)** Integramos la derivada usando $t=\sqrt{x}$, de modo que $dx=2t\,dt$:

$$\int\frac{e^{\sqrt{x}}}{\sqrt{x}}\,dx
=\int\frac{e^t}{t}(2t\,dt)=2e^t+C=2e^{\sqrt{x}}+C.$$

Imponemos $f(1)=2e-2$: $2e+C=2e-2$, luego $C=-2$. Por tanto,

$$\boxed{f(x)=2e^{\sqrt{x}}-2},\qquad
\boxed{\lim_{x\to0^+}f(x)=2-2=0}.$$

**b)** Para $x>0$, tanto $e^{\sqrt x}$ como $\sqrt x$ son positivos, de manera que $f'(x)>0$. La función crece en $(0,\infty)$ y, como $f(0)=0$ y es continua, se cumple $\boxed{f(x)\ge0}$ en todo su dominio.

## Ejercicio 3 · Intersección de planos

### Enunciado

Tenemos los planos $\pi:x-2y+4z+1=0$ y $\pi_d:2x-3y+6z=d$, donde $d$ es real.

**a)** ¿Hay algún $d$ con el que los planos no tengan ningún punto en común? (1 punto)

**b)** Para $d=-2$, encuentra la recta de intersección de ambos planos. (1 punto)

### Solución

**a)** Sus vectores normales son $n=(1,-2,4)$ y $n_d=(2,-3,6)$. No son proporcionales, ya que $1/2\neq(-2)/(-3)$. Los planos **se cortan para cualquier valor de $d$**.

**b)** Con $d=-2$ resolvemos

$$\begin{cases}x-2y+4z=-1,\\2x-3y+6z=-2.\end{cases}$$

De la primera, $x=2y-4z-1$. Sustituyéndola en la segunda:

$$2(2y-4z-1)-3y+6z=-2\ \Longrightarrow\ y-2z=0.$$

Tomando $z=t$, sale $y=2t$ y $x=-1$. La intersección es la recta

$$\boxed{r:\begin{cases}x=-1,\\y=2t,\\z=t,\end{cases}\quad t\in\mathbb R}.$$


## Ejercicio 4.1 · Examen tipo test

### Enunciado

Un examen tiene cuatro preguntas, cada una con cinco respuestas posibles y una única correcta. Los aciertos valen 2,5 puntos, los errores restan 0,625 puntos y las preguntas en blanco no puntúan. Contestamos las cuatro al azar.

**a)** ¿Qué probabilidad hay de sacar una nota de al menos 9? (1 punto)

**b)** ¿Qué probabilidad hay de suspender, es decir, quedarse por debajo de 5? (1 punto)

### Solución

Cada respuesta tiene probabilidad $p=1/5$ de ser correcta y $q=4/5$ de ser incorrecta.

**a)** La única forma de llegar a 9 es acertarlo todo, con nota 10:

$$P(\text{nota}\ge9)=\left(\frac15\right)^4=\boxed{\frac1{625}=0{,}0016}.$$

**b)** Con 3 aciertos se obtiene $3(2{,}5)-0{,}625=6{,}875$, y con 2 aciertos se obtiene $2(2{,}5)-2(0{,}625)=3{,}75$. Por tanto, se aprueba con 3 o 4 respuestas acertadas. La probabilidad de aprobar es

$$\begin{aligned}P(\text{aprobar})&=\binom43\left(\frac15\right)^3\frac45+\binom44\left(\frac15\right)^4\\
&=\frac{16+1}{625}=\frac{17}{625}.
\end{aligned}$$

Usamos el complementario:

$$P(\text{suspender})=1-\frac{17}{625}=\boxed{\frac{608}{625}=0{,}9728}.$$

## Ejercicio 4.2 · Eficacia de tratamientos

### Enunciado

Un hospital compara dos técnicas quirúrgicas. Estas son las intervenciones registradas:

| Gravedad | Técnica 1 | Técnica 2 |
|---|---:|---:|
| Grave | 44 | 140 |
| Leve | 136 | 40 |

De ellas, tuvieron éxito las siguientes:

| Gravedad | Técnica 1 | Técnica 2 |
|---|---:|---:|
| Grave | 30 | 102 |
| Leve | 120 | 36 |

**a)** Si sabemos que una operación salió bien, ¿cuál de las dos técnicas es más probable que se utilizara? (0,5 puntos)

**b)** ¿Qué técnica elegirías para una lesión leve? ¿Y para una grave? (1 punto)

**c)** Cuando no se conoce la gravedad, el hospital usa por defecto la técnica 1. Explica por qué esa regla puede resultar engañosa. (0,5 puntos)

### Solución

**a)** Hubo $30+120+102+36=288$ éxitos. La técnica 1 aportó $150$ y la técnica 2 aportó $138$. Al elegir un expediente exitoso, es más probable que se haya usado la **técnica 1** ($150/288>138/288$).

**b)** Conviene comparar las tasas de éxito **dentro de cada grupo de gravedad**:

- Lesiones leves: técnica 1, $120/136\approx0{,}8824$; técnica 2, $36/40=0{,}9$.
- Lesiones graves: técnica 1, $30/44\approx0{,}6818$; técnica 2, $102/140\approx0{,}7286$.

La **técnica 2** tiene la mejor tasa tanto en lesiones leves como en graves.

**c)** Si no se distinguen los grupos, la eficacia global de la primera técnica parece mayor:

$$P(E\mid T_1)=\frac{150}{180}\approx0{,}8333,\qquad
P(E\mid T_2)=\frac{138}{180}\approx0{,}7667.$$

Pero al separar por gravedad, la técnica 2 es mejor en los dos grupos. La aparente contradicción se debe a que se operaron proporciones muy distintas de casos graves y leves con cada técnica: es un ejemplo de cómo **agregar datos puede invertir una comparación**.


## Ejercicio 5.1 · Optimización de recursos

### Enunciado

Una universidad puede contar con hasta 70 archiveros para digitalizar expedientes. Con un equipo de 50, cada trabajador procesa 80 expedientes al mes. Si se incorpora un nuevo archivero, cada miembro del equipo pasa a digitalizar un expediente menos al mes. ¿Cuántos archiveros conviene asignar para maximizar la producción mensual? (2 puntos)

### Solución

Sea $x$ el número de nuevos archiveros, con $0\le x\le20$. El equipo tendrá $50+x$ personas y cada una digitalizará $80-x$ expedientes. El total mensual es

$$f(x)=(50+x)(80-x)=-x^2+30x+4000.$$

Derivamos y anulamos la derivada:

$$f'(x)=-2x+30=0\ \Longrightarrow\ x=15.$$

Como $f''(x)=-2<0$, es un máximo. Por tanto, el equipo óptimo tiene $50+15=\boxed{65\text{ archiveros}}$ y procesa $(65)(65)=\boxed{4225\text{ expedientes/mes}}$.

## Ejercicio 5.2 · Límite de exponenciales

### Enunciado

Calcula el límite

$$\lim_{x\to0}\frac{e^{\sin x}-e^x}{1-\cos x}.$$

### Solución

Al sustituir $x=0$ aparece $0/0$, así que aplicamos L'Hôpital:

$$L=\lim_{x\to0}\frac{\cos x\,e^{\sin x}-e^x}{\sin x}.$$

Vuelve a aparecer $0/0$ y derivamos de nuevo:

$$L=\lim_{x\to0}\frac{(\cos^2x-\sin x)e^{\sin x}-e^x}{\cos x}.$$

Ahora podemos sustituir $x=0$:

$$L=\frac{(1-0)\cdot1-1}{1}=\boxed{0}.$$

## Cómo usar este examen para preparar la PAU

Haz una primera vuelta sin consultar la solución. Al corregir, señala el primer paso que no supiste justificar y repítelo al día siguiente. Así conviertes un modelo de examen en una lista concreta de técnicas que debes entrenar.

Si quieres trabajar estos bloques con una ruta de práctica, explicaciones y seguimiento, tienes el [Campus de Método Nebula](/campus/).

