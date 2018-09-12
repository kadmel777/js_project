
/**
 * Controla la logica general de la aplicación, como navegación 
 * basica, cargue de templates y persistencia de información
 */


menu = document.querySelector("ul");
var xhr = new XMLHttpRequest();

var REPO = {
    'master': []
};

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
        if (this.status !== 200) return;
        document.querySelector(".container").innerHTML = this.responseText;
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

    var fired_on = event.target.id;
    var view = fired_on.split("-")[1];

    loadPage(view);
};


/**attach handler */
menu.addEventListener("click", menuClickHandler);

