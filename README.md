# U04-P01: Farmacias de guardia

![imagen_previa.PNG](https://github.com/Ayoamaro/farmacias_guardia.github.io/blob/master/img/imagen_previa.PNG?raw=true)

## Requisitos mínimos
Los datos obtenidos del JSON se representarán (crearán, accederán, recorrerán,...) en el HTML utilizando métodos DOM con JS. 
````
Elementos contenidos en el JSON
````
Cuando se muestre un elemento por pantalla se debe representar: su nombre, la dirección, su horario, su web y su teléfono
* cada elemento debe representarse de manera diferenciada.
* se deben asociar varias clases que vendrán definidas en un ficheros CSS separado o un framework como Bootstrap a los distintos elementos anteriores.
* si no tiene web, no debe mostrarse nada (la palabra web, icono representativo de un navegador, www,....) asociado a la web.
* 
````
Agrupamiento de la información de los elementos del JSON
````
Las farmacias deben mostrarse agrupadas por distrito y después por barrio.

Debemos mostrar de cada farmacia agrupada en un bloque en el que figure su nombre, la dirección, web y su teléfono. Si no tiene Web, no.

Las farmacias deben mostrarse agrupadas por distrito y después por barrio.

El nombre del distrito debe mostrarse una única vez. Si hay varias farmacias en distintos barrios del mismo distrito, el nombre del distrito se mostrará una sola vez.

Si hay varias farmacias en el mismo barrio, el nombre del barrio se mostrará una sola vez.
````
Filtros
````
Inicialmente, al cargarse la página, deben mostrarse todos los elementos del JSON.

En la parte superior se deben disponer los siguientes filtros que crearemos usando JS. Se precisa al menos un filtro y un máximo de 3.

Se podrá filtrar por distrito y por barrio mediante algún elemento como por ejemplo, una caja de texto y su botón para buscar.

Cuando se realiza la búsqueda se deben crear los elementos dinámicamente mediante DOM y JS que cumplan con él o los criterios. Para ello, si ya hay elementos representados, debemos borrarlos mediante DOM y JS.

## Ejecución
1. Descargar [el proyecto](https://bit.ly/2zt6DGT) y descomprimir
2. Abrir con [Visual Studio Code](https://code.visualstudio.com) o algún editor de código
3. Descargar el [Live Server](https://bit.ly/3elOzNx)
3. Abrir el **index.html** y ejecutarlo con la opción "Go Live"

## Hecho con
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - **70,26%**
* [HTML5](https://developer.mozilla.org/es/docs/HTML/HTML5) - **29,74%**
