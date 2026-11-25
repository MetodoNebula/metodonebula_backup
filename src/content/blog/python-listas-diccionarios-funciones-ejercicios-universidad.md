---
title: "Python: listas, diccionarios y funciones con ejercicios resueltos"
seoTitle: "Python listas, diccionarios y funciones: ejercicios resueltos"
date: "2026-11-25"
updated: "2026-11-25"
description: "Aprende a usar listas, diccionarios y funciones en Python con ejercicios resueltos para universidad, programación y análisis de datos."
tag: "Python"
category: "Programación y datos"
relatedService: "/formacion-it/python-sql-data-engineering/"
relatedPosts: "primer-proyecto-python-principiantes-datos,python-y-sql-para-empezar-en-datos,normalizacion-bases-datos-1fn-2fn-3fn"
image: "/favicon.svg"
---

Las listas, los diccionarios y las funciones son tres herramientas que aparecen desde el primer ejercicio útil de Python. La clave no es memorizar su sintaxis, sino elegir cuál representa mejor tus datos y dividir una tarea en pasos comprobables.

> **Respuesta directa.** Usa una lista cuando el orden importa y almacenas varios valores; un diccionario cuando cada valor necesita una clave; y una función cuando una operación tiene nombre, entrada y salida reutilizables.

## Listas: una colección ordenada

Una lista guarda elementos en un orden concreto:

~~~python
notas = [6.5, 8.0, 7.25, 5.0]
~~~

El primer elemento tiene índice 0. Para recorrerla:

~~~python
for nota in notas:
    print(nota)
~~~

Ejercicio: calcula cuántas notas son aprobados sin escribir cuatro condiciones manuales:

~~~python
aprobados = 0
for nota in notas:
    if nota >= 5:
        aprobados += 1

print(aprobados)
~~~

El contador empieza en cero y solo aumenta cuando se cumple la condición. Es el patrón básico de muchos problemas de examen.

## Diccionarios: relaciona una clave con un valor

Un diccionario es útil cuando quieres acceder a un dato por su nombre:

~~~python
alumno = {
    "nombre": "Lucía",
    "grado": "Ingeniería",
    "nota": 8.0
}

print(alumno["nota"])
~~~

Las claves deben representar un campo estable. No uses una lista de listas si el problema pide datos con significado distinto y después necesitas recordar que la posición 2 era la nota.

## Funciones: encapsula una tarea

Una función recibe parámetros, realiza una operación y devuelve un resultado:

~~~python
def media(valores):
    return sum(valores) / len(valores)
~~~

Así puedes reutilizarla:

~~~python
notas = [6.5, 8.0, 7.25, 5.0]
print(media(notas))
~~~

El uso de return es importante. Imprimir un resultado dentro de la función sirve para verlo, pero no permite emplearlo después en otro cálculo.

## Ejercicio integrado

Guarda varias asignaturas y sus notas, y devuelve las que están aprobadas:

~~~python
calificaciones = {
    "Álgebra": 7.0,
    "Programación": 4.5,
    "Estadística": 6.0
}

def asignaturas_aprobadas(datos):
    resultado = []
    for asignatura, nota in datos.items():
        if nota >= 5:
            resultado.append(asignatura)
    return resultado

print(asignaturas_aprobadas(calificaciones))
~~~

El diccionario modela la relación asignatura-nota; la lista resultado conserva una colección ordenada de asignaturas aprobadas; la función hace que la tarea se pueda probar y reutilizar.

## Errores que conviene detectar pronto

- Usar = en una condición en lugar de ==.
- Intentar acceder a una clave que no existe sin comprobarla.
- Modificar una lista mientras la recorres sin entender el efecto.
- Olvidar que len de una lista puede ser cero antes de dividir.
- Imprimir una función en vez de devolver un valor reutilizable.

Si ya manejas estas estructuras, el siguiente paso puede ser leer datos, limpiarlos o combinarlos con SQL. Empieza por [tu primer proyecto Python para datos](/blog/primer-proyecto-python-principiantes-datos/) y consulta la ruta de [Python, SQL y Data Engineering](/formacion-it/python-sql-data-engineering/) para una preparación guiada.
