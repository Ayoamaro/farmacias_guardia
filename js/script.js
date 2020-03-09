/**
 * @file script.js es el archivo JS de la prática (U04P01 - Farmacias de guardia)
 * @author Ayoze Amaro Estévez
 */

/* Variable que usaremos para trabajar con los datos del array. */
var datosFarmacia = arrayFarmacias;

/**
 * Esta función genera todos los contenedores donde pondremos las farmacias junto con sus datos
 * @type {function}
 */
iniciarPrograma ();
function iniciarPrograma () {
    var formulario = document.createElement("form");
    formulario.setAttribute("class", "m-2");
    document.body.appendChild(formulario);

    var titulo = document.createElement("h1");
    var infoTitulo = document.createTextNode("Farmacias de Tenerife");
    titulo.appendChild(infoTitulo);
    titulo.setAttribute("class", "m-2");
    formulario.appendChild(titulo);
    
    var filtrado = document.createElement("h5");
    var infoFiltrado = document.createTextNode("Filtrar por...");
    filtrado.appendChild(infoFiltrado);
    filtrado.setAttribute("class", "font-italic m-2");
    formulario.appendChild(filtrado);

    var textoDistrito = document.createElement("p");
    var infoText = document.createTextNode("Distritos");
    textoDistrito.appendChild(infoText);
    
    var distritos = document.createElement("input");
    distritos.setAttribute("type", "checkbox");
    distritos.setAttribute("class", "btn btn-primary m-2");
    distritos.setAttribute("onclick", "buscarDistritos()");

    var textoBarrio = textoDistrito.cloneNode();
    var infoTexto = document.createTextNode("Barrios");
    textoBarrio.appendChild(infoTexto);
    
    var barrios = document.createElement("input");
    barrios.setAttribute("type", "radio");
    barrios.setAttribute("class", "btn btn-primary m-2");
    barrios.setAttribute("onclick", "buscarBarrios()");

    var deleteFiltros = document.createElement("button");
    var infoDelete = document.createTextNode("Eliminar Filtros");
    deleteFiltros.appendChild(infoDelete);
    deleteFiltros.setAttribute("class", "btn btn-primary m-2");
    deleteFiltros.setAttribute("onclick", "borradoGeneral()");

    formulario.appendChild(infoText);
    formulario.appendChild(distritos);
    formulario.appendChild(infoTexto);
    formulario.appendChild(barrios);
    formulario.appendChild(deleteFiltros);

    /* La variable paginaJS será el 'div' que usaremos para almacenar toda la información que imprimiremos */
    var paginaJS = document.createElement("div");
    paginaJS.setAttribute("id", "pagina");
    document.body.appendChild(paginaJS);
}

/**
 * Se encarga del borrado de datos cada vez que usemos un filtro o recargemos la página
 * @type {function}
 */
function borradoGeneral() {
    if (document.getElementById("pagina") != undefined) {
        document.getElementById("pagina").remove();
    }
}

/**
 * Función genérica para crear cada Farmacia y respresentarla en el body dentro de un 'div' 
 * Dentro de ella pedimos imprimir: Su nombre, dirección, horario, web (si tiene) y teléfono
 * @type {function}
 * @param {*} index Parámetro que recibe el número de la farmacia en concreto para publicarla en el body del HTML
 */
function crearFarmacia(index) {
    var cardFarmacia = document.createElement("div");
    cardFarmacia.setAttribute('class', 'card m-4 p-4');
    cardFarmacia.setAttribute('style', 'list-style-type: none;');
    
    var farmacia = document.createElement("h4");
    var nombreFarmacia = document.createTextNode(`${datosFarmacia[index]['NOMBRE']}`);
    farmacia.appendChild(nombreFarmacia);

    var direccion = document.createElement("li");
    var nombreDireccion = document.createTextNode(`${datosFarmacia[index]['DIRECCION']}`);
    direccion.appendChild(nombreDireccion);

    var lunes = direccion.cloneNode();
    var nLunes = document.createTextNode(`LUNES: ${datosFarmacia[index]['LUNES']}`);
    lunes.appendChild(nLunes);

    var martes = direccion.cloneNode();
    var nMartes = document.createTextNode(`MARTES: ${datosFarmacia[index]['MARTES']}`);
    martes.appendChild(nMartes);

    var miercoles = direccion.cloneNode();
    var nMiercoles = document.createTextNode(`MIÉRCOLES: ${datosFarmacia[index]['MIERCOLES']}`);
    miercoles.appendChild(nMiercoles);

    var jueves = direccion.cloneNode();
    var nJueves = document.createTextNode(`JUEVES: ${datosFarmacia[index]['JUEVES']}`);
    jueves.appendChild(nJueves);

    var viernes = direccion.cloneNode();
    var nViernes = document.createTextNode(`VIERNES: ${datosFarmacia[index]['VIERNES']}`);
    viernes.appendChild(nViernes);

    var sabado = direccion.cloneNode();
    var nSabado = document.createTextNode(`SABADO: ${datosFarmacia[index]['SABADO']}`);
    sabado.appendChild(nSabado);

    var domingo = direccion.cloneNode();
    var nDomingo = document.createTextNode(`DOMINGO: ${datosFarmacia[index]['DOMINGO']}`);
    domingo.appendChild(nDomingo);

    var telefono = direccion.cloneNode();
    var nTelefono = document.createTextNode(`TELEFONO: ${datosFarmacia[index]['TELEFONO']}`);
    telefono.appendChild(nTelefono);

    var web = direccion.cloneNode();
    var nWeb = document.createTextNode(`${datosFarmacia[index]['WEB']}`);
    web.setAttribute('class', 'text-success');
    web.appendChild(nWeb);

    document.getElementById('pagina').appendChild(cardFarmacia);
    cardFarmacia.appendChild(farmacia);
    cardFarmacia.appendChild(direccion);
    cardFarmacia.appendChild(lunes);
    cardFarmacia.appendChild(martes);
    cardFarmacia.appendChild(miercoles);
    cardFarmacia.appendChild(jueves);
    cardFarmacia.appendChild(viernes);
    cardFarmacia.appendChild(sabado);
    cardFarmacia.appendChild(domingo);
    cardFarmacia.appendChild(telefono);
    cardFarmacia.appendChild(web);
}

/**
 * Mostrado general de todas las farmacias existentes en el array
 * @type {function}
 */
mostrarFarmacias();
function mostrarFarmacias() { 
    borradoGeneral();
    var paginaFarmacias = document.createElement("div");
    paginaFarmacias.setAttribute("id", "pagina");
    document.body.appendChild(paginaFarmacias);

    for (var index = 0; index < datosFarmacia.length; index++ ){
        if (datosFarmacia[index]['WEB'] == undefined) {
            datosFarmacia[index]['WEB'] = ``;
        }
        crearFarmacia(index);
    }
}

/**
 * Mostrado de las farmacias agrupadas por Distritos existentes
 *  @type {function}
 */
function buscarDistritos() { 
    borradoGeneral();
    var paginaDistritos = document.createElement("div");
    paginaDistritos.setAttribute("id", "pagina");
    document.body.appendChild(paginaDistritos);

    /* Creación de un array con solo los Distritos del array 'datosFarmacia' */ 
    const filtroDistritos = [...new Set(datosFarmacia.map(item => item.DISTRITO))];

    for (var ind = 0; ind < filtroDistritos.length; ind++) {
        var distritos = document.createElement('h4');
        var nDistritos = document.createTextNode(filtroDistritos[ind]);
        distritos.setAttribute("class", "text-light bg-primary m-3 p-2");
        distritos.appendChild(nDistritos);

        document.getElementById('pagina').appendChild(distritos);
        paginaDistritos.appendChild(distritos);

        for (var index = 0; index < datosFarmacia.length; index++) {
            if (datosFarmacia[index]['WEB'] == undefined) {
                datosFarmacia[index]['WEB'] = ``;
            }

            /* Imprimiremos cada farmacia siempre y cuando sean del mismo distrito */ 
            if (filtroDistritos[ind] == datosFarmacia[index]['DISTRITO']) {
                crearFarmacia(index);
            }
        }
    }
}

/**
 * Mostrado de las farmacias agrupadas por Barrios existentes
 *  @type {function}
 */
function buscarBarrios() { 
    borradoGeneral();
    var paginaBarrios = document.createElement("div");
    paginaBarrios.setAttribute("id", "pagina");
    document.body.appendChild(paginaBarrios);

    /* Creación de un array con solo los Barrios del array 'datosFarmacia' */ 
    const filtroBarrios = [...new Set(datosFarmacia.map(item => item.BARRIO))];

    for (var ind = 0; ind < filtroBarrios.length; ind++) {
        var barrios = document.createElement('h4');
        var nBarrios = document.createTextNode(filtroBarrios[ind]);
        barrios.setAttribute("class", "text-light bg-danger m-3 p-2");
        barrios.appendChild(nBarrios);

        document.getElementById('pagina').appendChild(barrios);
        paginaBarrios.appendChild(barrios);

        for (var index = 0; index < datosFarmacia.length; index++) {
            if (datosFarmacia[index]['WEB'] == undefined) {
                datosFarmacia[index]['WEB'] = ``;
            }

            /* Imprimiremos cada farmacia siempre y cuando sean del mismo barrio */ 
            if (filtroBarrios[ind] == datosFarmacia[index]['BARRIO']) {
                crearFarmacia(index);
            }
        }
    }
}