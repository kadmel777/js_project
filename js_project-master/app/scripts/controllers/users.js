/**
 * Función para agregar toda la logica de la administración 
 * usuarios
 */

function usersActionsController() {
    //tu código aquí.  
   
}
function cregistro()
{
    var name=document.getElementById("user-name").value;
    var passw=document.getElementById("psw").value;
    if ((name != "")&&(passw!="")){
        Usuario.push([name,passw]);
        document.getElementById("user-name").value="" ; 
        document.getElementById("psw").value="" ; 
    }
    else {
        alert("por favor llene todos los espacios");
    }
    var lon;
    lon = Usuario.length;
    document.getElementById("debu").innerHTML = Usuario+lon;
}



