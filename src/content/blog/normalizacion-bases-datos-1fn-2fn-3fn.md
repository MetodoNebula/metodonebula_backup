---
title: "Normalización de bases de datos: 1FN, 2FN y 3FN con ejemplo completo"
seoTitle: "Normalización de bases de datos: 1FN, 2FN y 3FN explicadas"
date: "2026-11-10"
updated: "2026-11-10"
description: "Normalización SQL explicada con dependencias funcionales, claves, primera, segunda y tercera forma normal y un ejemplo paso a paso."
tag: "SQL y datos"
category: "Programación y datos"
relatedService: "/formacion-it/python-sql-data-engineering/"
relatedPosts: "python-y-sql-para-empezar-en-datos,primer-proyecto-python-principiantes-datos,transicion-al-sector-it-en-6-meses"
image: "/favicon.svg"
---

Normalizar una base de datos consiste en separar hechos que dependen de cosas distintas. El objetivo no es tener muchas tablas: es evitar que una modificación deje datos contradictorios, que una inserción requiera inventar valores o que un borrado elimine información que aún necesitas.

> **Respuesta directa.** La 1FN exige valores atómicos; la 2FN elimina dependencias de una parte de una clave compuesta; la 3FN elimina dependencias transitivas entre atributos no clave. Antes de dividir tablas, identifica la clave y escribe qué atributo determina a cuál.

## Una tabla que mezcla hechos

Imagina una tabla de matrículas:

| alumno_id | alumno_nombre | asignatura_id | asignatura_nombre | profesor | nota |
| --- | --- | --- | --- | --- | --- |
| 17 | Lucía | MAT101 | Álgebra | Moreno | 8,1 |

La clave natural podría ser $(alumno\_id, asignatura\_id)$. Sin embargo, `alumno_nombre` depende solo de `alumno_id`, mientras que `asignatura_nombre` y `profesor` dependen solo de `asignatura_id`.

## Primera forma normal

Cada celda debe contener un valor indivisible para el modelo. Una columna `telefonos` con “600..., 700...” mezcla dos valores. Crea una tabla de teléfonos relacionada con alumno si necesitas almacenar varios.

## Segunda forma normal

Con una clave compuesta, ningún atributo no clave debe depender solo de una parte. Separamos:

$$
\text{Alumno}(alumno\_id, alumno\_nombre)
$$

$$
\text{Asignatura}(asignatura\_id, asignatura\_nombre, profesor)
$$

$$
\text{Matricula}(alumno\_id, asignatura\_id, nota).
$$

Ahora la nota depende de la matrícula completa, mientras que los nombres están donde pertenecen.

## Tercera forma normal

Supón que Asignatura guarda `profesor_id`, `profesor_nombre` y `departamento`. Si `profesor_id` determina nombre y departamento, esos atributos no deben repetirse por cada asignatura. Crea una tabla `Profesor(profesor_id, profesor_nombre, departamento)` y conserva la clave foránea en Asignatura.

## Comprobar un diseño

Pregúntate qué sucede si cambias el profesor, añades un alumno sin matrícula o borras la última matrícula de una asignatura. Si el diseño obliga a actualizar muchas filas o hace desaparecer un hecho independiente, probablemente hay una dependencia mal ubicada.

La normalización no sustituye a pensar en consultas, índices y uso real de los datos, pero da una base fiable para hacerlo. Continúa con [Python y SQL para empezar en datos](/blog/python-y-sql-para-empezar-en-datos/) o profundiza en la ruta de [Python, SQL y Data Engineering](/formacion-it/python-sql-data-engineering/).
