/**
 * Función para manejar toda la logica de control de versiones
 */
cont1=0;
function versionerActionsController() {
    
    var i;
    var text;
    for (i=0;i<Usuario.length;i++){
        text += "<option>" + Usuario[i][0];
    }

    document.getElementById("miSelect").innerHTML = text;

    if (cont1==0){
        debuug();
        cont1=1;
    }
   

};

function debuug(){
   
    REPO.push( new Repositorio("hola","master",new Date(2018, 01, 24, 10, 30, 30, 0),"hola","Principal"));
    REPO.push( new Repositorio("hola","user1",new Date(2018, 01, 24, 10, 36, 30, 0),"hola","rama2"));
    REPO.push( new Repositorio("hola","user2",new Date(2018, 01, 24, 10, 40, 30, 0),"hola","rama1"));
    REPO.push( new Repositorio("hola","master",new Date(2018, 01, 24, 10, 50, 30, 0),"hola","Principal"));
    REPO.push( new Repositorio("hola","user1",new Date(2018, 01, 24, 10, 50, 30, 0),"hola","rama2"));
    
};

function combo(){
  
    var indice = document.getElementById("miSelect").selectedIndex;
    var textoEscogido = document.getElementById("miSelect").options[indice].text;
    usuAct = textoEscogido;
    var i;
    var person = prompt("digite su contraseña", "");
    for (i=0;i<i<Usuario.length;i++){
        if(textoEscogido === Usuario[i][0]){
            if(person === Usuario[i][1]){
                document.getElementById("commander").disabled = false;
                i=Usuario.length+1;
            }
            else{
                alert("Contraseña Incorrecta");
                document.getElementById("commander").disabled = true;     
            }
        }
    }
    
};

function comander(){
    var commen = document.getElementById("inp-command").value;
    
    var gitcomand = "";
    var comentario = "";
    
    var incom = commen.indexOf(":");
    var fincom = commen.lastIndexOf(":");
    if ((fincom>0)&&(fincom != incom)&&(incom>0)){
        gitcomand = commen.substring(0,(incom));
        comentario = commen.substring((incom+1),(fincom));
        gitaction(gitcomand,comentario);
        
    }
    document.getElementById("inp-command").value ="";
    //document.getElementById("debu").innerHTML = REPO[REPO.length-1].getrama();
    /*
    
    document.getElementById("debu").innerHTML = REPO[0].getfecha().getTime();*/
    
};

function gitaction(comando,comentario){
    var i=0;
    var bol = false;
    
    
    if (comando === "git commit "){
        for (i=0;i<REPO.length;i++){
            bol=false;
            if((REPO[i].getcomentario()==comentario)&&(REPO[i].getusuario()==usuAct)){
                alert("el commit ya existe");
                bol=true;
                break;
            }
        }
        if (bol==false){
            REPO.push( new Repositorio(document.getElementById("ver-text").value , usuAct,new Date(),comentario,RAMA));
        }
    }

    else if (comando === "git branch "){
        RAMA= comentario;
        document.getElementById("debu").innerHTML = RAMA;
     
    }
    else {
        document.getElementById("debu").innerHTML = " Comando desconocido ";
    }
};
