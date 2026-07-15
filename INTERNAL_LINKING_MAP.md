# Mapa de enlazado interno

## Reglas implementadas

- Home enlaza hacia servicios, metodologia, blog y contacto.
- Servicios enlazan a lecturas relacionadas y al siguiente paso de contacto.
- Blog index enlaza a destacados, guias pilar, categorias y recientes.
- Categoria enlaza a su guia pilar y servicio relacionado.
- Articulo enlaza a categoria, servicio relacionado y guia pilar cuando aplica.
- Sitemap HTML agrupa principales, servicios, categorias y articulos por categoria.

## Clusters principales

| Cluster | Categoria | Servicio relacionado | Guia pilar | Articulos satelite |
| --- | --- | --- | --- | --- |
| Matematicas universitarias | `/blog/categoria/matematicas-universitarias/` | `/clases-particulares/matematicas-universidad/` | `/blog/como-aprobar-calculo-i-ingenieria-seis-semanas/` | algebra lineal, estudiar sin memorizar, derivadas e integrales, EDO, matrices, derivadas, integrales |
| Estadistica | `/blog/categoria/estadistica/` | `/clases-particulares/estadistica-universidad/` | `/blog/que-prueba-estadistica-utilizar-guia-test-correcto/` | estadistica psicologia, econometria, inferencia, contrastes, p-valor, Bayes, software, regresion/ANOVA |
| Programacion y datos | `/blog/categoria/programacion-y-datos/` | `/clases-particulares/programacion-universidad/` | `/blog/python-y-sql-para-empezar-en-datos/` | ruta inicial Python/SQL |
| Fisica y Quimica | `/blog/categoria/fisica-y-quimica/` | `/clases-particulares/fisica-ingenieria/` | `/blog/fisica-y-quimica-como-plantear-problemas/` | circuitos, Fisica I, diagramas de cuerpo libre, estequiometria |
| Economia y ADE | `/blog/categoria/economia-y-ade/` | `/clases-particulares/economia-ade/` | `/blog/economia-ade-matematicas-sin-perderse/` | Matematicas I ADE, Microeconomia I |
| Selectividad | `/blog/categoria/selectividad/` | `/clases-particulares/selectividad/` | `/blog/preparar-selectividad-con-calendario/` | calendario de preparacion |
| Examenes internacionales | `/blog/categoria/examenes-internacionales/` | `/clases-particulares/gcse-ib/` | `/blog/ib-gcse-como-preparar-examenes-internacionales/` | preparacion con rubrica |
| Carrera tecnologica | `/blog/categoria/carrera-tecnologica/` | `/clases-particulares/programacion-universidad/` | `/blog/transicion-al-sector-it-en-6-meses/` | ruta IT inicial |

## Paginas hub

| Hub | Enlaza hacia | Recibe enlaces desde |
| --- | --- | --- |
| `/` | Servicios, metodologia, blog, contacto | Header, footer, sitemap |
| `/clases-particulares/universidad/` | Todos los servicios, contacto | Home, header, sitemap |
| `/blog/` | Destacados, guias pilar, categorias, recientes | Header, home, footer, sitemap |
| `/mapa-del-sitio/` | Principales, servicios, categorias, articulos agrupados | Footer |
| `/contacto/` | Email, telefono, WhatsApp | CTAs globales, servicios, articulos |

## Flujo recomendado de autoridad

1. Home -> hub de servicios y blog.
2. Blog -> categorias.
3. Categorias -> guia pilar y servicio relacionado.
4. Articulos satelite -> categoria, guia pilar y servicio.
5. Servicios -> articulos relacionados y contacto.

## Pendientes de enlazado

- Cuando se publiquen mas articulos de programacion, selectividad, examenes internacionales o carrera tecnologica, enlazarlos desde su categoria y desde el servicio correspondiente.
- Si se crean nuevos recursos descargables o ejercicios, incorporarlos desde el articulo pilar antes que crear paginas aisladas.
- Revisar Search Console tras publicar para detectar URLs con impresiones sin clicks y reforzar enlaces internos hacia ellas.
