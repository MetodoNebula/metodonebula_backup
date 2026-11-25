---
title: "SQL JOIN: INNER JOIN y LEFT JOIN con ejercicios resueltos"
seoTitle: "SQL JOIN: INNER JOIN y LEFT JOIN con ejemplos resueltos"
date: "2026-11-25"
updated: "2026-11-25"
description: "Aprende a elegir INNER JOIN o LEFT JOIN en SQL con tablas de ejemplo, consultas explicadas y errores habituales en ejercicios de universidad y datos."
tag: "SQL y datos"
category: "Programación y datos"
relatedService: "/formacion-it/python-sql-data-engineering/"
relatedPosts: "normalizacion-bases-datos-1fn-2fn-3fn,python-y-sql-para-empezar-en-datos,primer-proyecto-python-principiantes-datos"
image: "/favicon.svg"
---

Los JOIN no se dominan memorizando una sintaxis. La pregunta importante es qué filas quieres conservar cuando no existe una coincidencia. Si sabes responder eso antes de escribir SQL, elegir entre INNER JOIN y LEFT JOIN se vuelve mecánico.

> **Respuesta directa.** INNER JOIN conserva solo las filas que tienen pareja en ambas tablas. LEFT JOIN conserva todas las filas de la tabla situada a la izquierda y muestra NULL cuando no encuentra pareja en la derecha.

## Dos tablas para pensar el problema

Supón estas tablas:

alumnos

| alumno_id | nombre |
| --- | --- |
| 1 | Alba |
| 2 | Bruno |
| 3 | Carla |

matriculas

| matricula_id | alumno_id | asignatura |
| --- | --- | --- |
| 10 | 1 | SQL |
| 11 | 1 | Python |
| 12 | 2 | Estadística |

Carla no tiene matrícula. Esa única diferencia permite entender ambos tipos de unión.

## INNER JOIN: solo coincidencias

~~~sql
SELECT a.nombre, m.asignatura
FROM alumnos AS a
INNER JOIN matriculas AS m
  ON a.alumno_id = m.alumno_id;
~~~

El resultado incluye a Alba dos veces, porque tiene dos matrículas, y a Bruno una vez. Carla no aparece: no hay fila de matriculas que coincida con su identificador.

Usa INNER JOIN cuando el resultado no tenga sentido sin el dato relacionado. Por ejemplo, una lista de matrículas con el nombre de su alumno.

## LEFT JOIN: conserva la tabla principal

~~~sql
SELECT a.nombre, m.asignatura
FROM alumnos AS a
LEFT JOIN matriculas AS m
  ON a.alumno_id = m.alumno_id;
~~~

Ahora Carla sí aparece, con NULL en asignatura. La tabla de la izquierda, alumnos, marca el conjunto que debe sobrevivir completo.

Es la consulta adecuada si preguntas «¿qué alumnos no tienen matrícula?»:

~~~sql
SELECT a.nombre
FROM alumnos AS a
LEFT JOIN matriculas AS m
  ON a.alumno_id = m.alumno_id
WHERE m.matricula_id IS NULL;
~~~

## El error más frecuente: anular tu LEFT JOIN

Esta consulta parece conservar alumnos sin matrícula, pero no lo hace:

~~~sql
SELECT a.nombre, m.asignatura
FROM alumnos AS a
LEFT JOIN matriculas AS m
  ON a.alumno_id = m.alumno_id
WHERE m.asignatura = 'SQL';
~~~

La condición en WHERE elimina las filas con NULL, así que el resultado se comporta como un INNER JOIN para ese filtro. Si quieres conservar todos los alumnos y mostrar SQL cuando exista, pon la condición en ON:

~~~sql
SELECT a.nombre, m.asignatura
FROM alumnos AS a
LEFT JOIN matriculas AS m
  ON a.alumno_id = m.alumno_id
 AND m.asignatura = 'SQL';
~~~

## Ejercicio: contar sin perder filas

Para contar cuántas asignaturas tiene cada alumno, incluido quien tiene cero:

~~~sql
SELECT a.nombre, COUNT(m.matricula_id) AS total_asignaturas
FROM alumnos AS a
LEFT JOIN matriculas AS m
  ON a.alumno_id = m.alumno_id
GROUP BY a.alumno_id, a.nombre;
~~~

Utiliza COUNT(m.matricula_id), no COUNT(*). El segundo cuenta la fila de Carla que el LEFT JOIN conserva, aunque no tenga matrícula. El primero cuenta solo identificadores de matrícula reales.

## Antes de hacer JOIN, revisa la cardinalidad

La unión no crea errores por sí sola; revela la estructura de los datos. Pregúntate si la relación es:

- Uno a uno.
- Uno a muchos, como alumno y matrículas.
- Muchos a muchos, que necesita una tabla intermedia.

Si unes dos tablas con varias filas por la misma clave, los resultados se multiplican. No es un fallo de SQL: debes decidir si esa multiplicación representa la pregunta que quieres responder.

## Checklist para resolver ejercicios de SQL

1. Escribe en una frase qué entidad quieres conservar completa.
2. Identifica las claves que conectan las tablas.
3. Decide si las filas sin coincidencia deben aparecer.
4. Elige INNER JOIN o LEFT JOIN.
5. Comprueba si el filtro debe ir en ON o en WHERE.
6. Revisa si un COUNT cuenta filas o valores reales.

Los JOIN se vuelven mucho más claros cuando tus tablas ya tienen claves y dependencias bien diseñadas. Empieza por [normalización de bases de datos](/blog/normalizacion-bases-datos-1fn-2fn-3fn/) y, si preparas SQL o Python para universidad o datos, consulta la ruta de [Python, SQL y Data Engineering](/formacion-it/python-sql-data-engineering/).
