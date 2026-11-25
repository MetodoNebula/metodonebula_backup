---
title: "SQL GROUP BY y HAVING: ejercicios con COUNT, SUM y filtros de agregados"
seoTitle: "SQL GROUP BY y HAVING: ejercicios resueltos"
date: "2026-11-25"
updated: "2026-11-25"
description: "Ejercicios de SQL GROUP BY y HAVING: diferencia con WHERE, COUNT, SUM, NULL y consultas de agregación explicadas paso a paso."
tag: "SQL y datos"
category: "Programación y datos"
relatedService: "/formacion-it/python-sql-data-engineering/"
relatedPosts: "sql-joins-inner-left-ejercicios-resueltos,normalizacion-bases-datos-1fn-2fn-3fn,python-y-sql-para-empezar-en-datos"
image: "/favicon.svg"
---

La diferencia entre WHERE y HAVING se vuelve sencilla si recuerdas el orden lógico de una consulta: WHERE decide qué filas llegan al agrupamiento; HAVING decide qué grupos se conservan después de calcular agregados.

> **Respuesta directa.** Usa WHERE para filtrar filas individuales y HAVING para filtrar resultados de COUNT, SUM, AVG u otras funciones agregadas. GROUP BY crea un resultado por cada combinación de columnas agrupadas.

## Una tabla de pedidos

| pedido_id | cliente | categoria | importe |
| --- | --- | --- | ---: |
| 1 | Ana | Libros | 25 |
| 2 | Ana | Libros | 40 |
| 3 | Bruno | Material | 15 |
| 4 | Carla | Libros | 30 |

Para obtener ventas por cliente:

~~~sql
SELECT cliente, SUM(importe) AS total_ventas
FROM pedidos
GROUP BY cliente;
~~~

Cada cliente aparece una sola vez porque el agrupamiento reúne sus filas.

## WHERE antes de agrupar

Si quieres ventas por cliente solo de la categoría Libros:

~~~sql
SELECT cliente, SUM(importe) AS total_ventas
FROM pedidos
WHERE categoria = 'Libros'
GROUP BY cliente;
~~~

WHERE elimina antes las filas de Material. Es correcto porque categoria pertenece a una fila concreta.

## HAVING después de agrupar

Si ahora quieres conservar solo clientes cuyas ventas de Libros superan 50:

~~~sql
SELECT cliente, SUM(importe) AS total_ventas
FROM pedidos
WHERE categoria = 'Libros'
GROUP BY cliente
HAVING SUM(importe) > 50;
~~~

La condición no puede ir en WHERE porque total_ventas todavía no existe mientras se filtran filas. HAVING trabaja con el grupo ya formado.

## COUNT: qué estás contando realmente

Para contar pedidos de cada cliente:

~~~sql
SELECT cliente, COUNT(*) AS pedidos
FROM pedidos
GROUP BY cliente;
~~~

COUNT(*) cuenta filas. COUNT(columna) cuenta solo valores no nulos de esa columna. Esta diferencia es relevante cuando usas LEFT JOIN: una fila conservada sin coincidencia puede existir, pero su identificador relacionado será NULL.

## Error de examen: seleccionar una columna no agrupada

Esta consulta no es válida en SQL estándar:

~~~sql
SELECT cliente, categoria, SUM(importe)
FROM pedidos
GROUP BY cliente;
~~~

Un mismo cliente puede tener varias categorías. Debes agrupar también por categoria o decidir una agregación que responda a la pregunta:

~~~sql
SELECT cliente, categoria, SUM(importe) AS total
FROM pedidos
GROUP BY cliente, categoria;
~~~

## Ejercicio final: categorías con tres o más pedidos

~~~sql
SELECT categoria, COUNT(*) AS total_pedidos
FROM pedidos
GROUP BY categoria
HAVING COUNT(*) >= 3;
~~~

La salida es una fila por categoría que supera el criterio. No devuelves cada pedido individual: devuelves un resumen.

## Checklist antes de ejecutar

1. ¿El resultado debe tener una fila por cliente, categoría o mes?
2. ¿Qué columnas definen ese grupo?
3. ¿El filtro se aplica a filas o a totales?
4. ¿COUNT(*) y COUNT(columna) representan lo mismo en este caso?
5. ¿Todas las columnas seleccionadas están agrupadas o agregadas?

Para combinar primero varias tablas y después resumir resultados, repasa [INNER JOIN y LEFT JOIN con ejercicios](/blog/sql-joins-inner-left-ejercicios-resueltos/). Puedes practicar SQL aplicado a datos en la ruta de [Python, SQL y Data Engineering](/formacion-it/python-sql-data-engineering/).
