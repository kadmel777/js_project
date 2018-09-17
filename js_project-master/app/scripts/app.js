
/**
 * Controla la logica general de la aplicación, como navegación 
 * basica, cargue de templates y persistencia de información
 */


menu = document.querySelector("ul");
var xhr = new XMLHttpRequest();

var REPO = [];  

var Usuario = [["Selecionar",""],["master","master"],["user1","1234"],["user2","1234"]];
var usuAct = "";

function Repositorio(repo, usu, fecha, comit, bran) {
    this.repo = repo;
    this.usu = usu;
    this.fecha = fecha;
    this.comit = comit;
    this.bran = bran;
}

Repositorio.prototype.getrepo = function() {
    return this.repo;
};

Repositorio.prototype.getusuario = function() {
    return this.usu;
};

Repositorio.prototype.getfecha = function() {
    return this.fecha;
};

Repositorio.prototype.getcomentario = function() {
    return this.comit;
};

Repositorio.prototype.getrama = function() {
    return this.bran;
};

var RAMA = "Principal";

/**
 
 * Injecta el controlador que maneja las acciones de acuerdo a la
 * vista dada.
 * @param {string} page 
 */
var fireActions = function (page) {
    switch (page) {
        case "users":
            usersActionsController(); //en users.js
            break;
        case "versioner":
            versionerActionsController(); //en versioner.js
            break;
        case "historic":
            historicsActionsController(); //en historics.js
            break;
    }
};


/**
 * Carga el template seleccionado de acuerdo a la opcíón del menu
 * @param {string} page 
 */
var loadPage = function (page) {
    var path = "../app/templates/" + page + ".html";
    xhr.open('GET', path, true);
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return; /*deteccion de errores*/
        document.querySelector(".container").innerHTML = this.responseText;/*publico en el container*/
        fireActions(page);
    };
    xhr.send();
};

/**
 * handler to manage menu click event
 * @param {*Obj} event 
 */
var menuClickHandler = function (event) {
    if (event.target.tagName != "LI") {
        return;
    }

    var fired_on = event.target.id;  /*obtengo el id del li*/
    var view = fired_on.split("-")[1]; /*separo en dos el id ya que se llama menu - algo*/

    loadPage(view);
};


/**attach handler */
menu.addEventListener("click", menuClickHandler);

