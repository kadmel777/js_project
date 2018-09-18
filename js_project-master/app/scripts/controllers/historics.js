
var ppx=5;
var ppy=40;
var colo1= "rgb(255,255,223)";
var colo2= "rgb(233,233,233)";
var conspx = 90;
var inispx =90;
var hh=[];

/**
 * Función que maneja toda la logica de los historicos
 */
function historicsActionsController() {
    var i = 0 ;    
    var tobr=[];
    var brp;
    var brann = [];
    var text="";
    hh=[];
    //tu código aquí.
    if (REPO.length>0){
        for(i=0;i<REPO.length;i++){
             brann.push(REPO[i].getrama());
        }
        brann.sort();
        brp=brann[0];
        tobr[0]=brann[0];
        for(i=1;i<REPO.length;i++){
            if(brp != brann[i]){
                tobr.push(brann[i]);
            }
            brp=brann[i];
        }
    }
    var colusu = [];
    var porff;

    for (i=0;i<(Usuario.length);i++){
        if (Usuario[i][0] != "Selecionar"){
            colusu.push([Usuario[i][0],"rgb("+ Math.round(255*Math.random())+"," +Math.round(255*Math.random()) + ","+Math.round(255*Math.random())+")"]   );
    
        }
    }

    for (i=0;i<tobr.length;i++){
        if(i%2==0){
            text += "<rect x=0"  + " y=" +  (ppy+(40*i)-20).toString() + " width=" +  "100%"  + " height=40 style="+ '"' + " fill:" + colo1 + '"' + "/>"   ;
        }
        else{
            text += "<rect x=0"  + " y=" +  (ppy+(40*i)-20).toString() + " width=" +  "100%"  + " height=40 style="+ '"' + " fill:" + colo2 + '"' + "/>"   ;
        }
    }
    
    for (i=0;i<tobr.length;i++){
        text += "<text x=" + '"' + ppx.toString() + '"' + " y=" + '"' + (ppy+(40*i)).toString() +  '"' + " fill=" + '"' + "red" + '"' + ">" + tobr[i].toString() +  "</text>";
        porff=(ppy+(40*i));
    }
    
    porff=porff+40;

    for (i=0;i<colusu.length;i++){
        text += "<text x=" + '"' + ppx.toString() + '"' + " y=" + '"' + (porff+(40*i)).toString() +  '"' + " fill=" + '"' + colusu[i][1] + '"' + ">" + colusu[i][0] +  "</text>";
    }

    var tiemp=[];
    var tempro;
    var tempro2;


    if (REPO.length>0){
        for(i=0;i<REPO.length;i++){
            tiemp.push((REPO[i].getfecha().getTime()));
        }
        tiemp.sort();
    }
    tempro2=Math.round((tiemp[tiemp.length-1]-tiemp[0]));
    //tempro=Math.round((tiemp[tiemp.length-1]-tiemp[0])/REPO.length);
    tempro=10;

    var longg=[];
    var j = 0;
    var init=0;
    var fint=0;
    var posxi=0;
    var posxf=0;

    var hh3=[];

    for(i=0;i<tobr.length;i++){
        longg=[];
        for(j=0;j<REPO.length;j++){            
            if(tobr[i]===REPO[j].getrama()){
                longg.push((REPO[j].getfecha().getTime()));
            }
        }
        longg.sort();
        init=((longg[0]-tiemp[0])/tempro2)*100;
        fint=((longg[(longg.length-1)]-tiemp[0])/tempro2)*100;
        hh3.push([longg[0],longg[longg.length-1,tobr[i]]]);
        
        if(init>tempro){
            posxi=Math.round(init/tempro);
        }
        else{
            posxi=0;
        }
        
        if(fint>tempro){
            posxf=Math.round(fint/tempro);
        }
        else{
            posxf=0;
        }
       // if (posxi==posxf){
       //     posxf=posxf+1;
       // }
        //hh3.push([init,fint]);
        text+= drawlih(posxi,i,posxf);
        text+= drawliv(posxi,i);
    }
    /*var tmhh;
    for(i=0;i<(hh.length);i++){
        for(j=0;j<(hh.length-1);j++){
            if(hh[j][0]>hh[(j+1)][0]){
                tmhh=hh[j];
                hh[j]=hh[(j+1)];
                hh[j+1]=tmhh; 
            }
        }
    }*/
    
    var cnx;
    var cny;
    for(i=0;i<colusu.length;i++){
       for(j=0;j<REPO.length;j++){
            if(colusu[i][0]===REPO[j].getusuario()){
                cnx=(((REPO[j].getfecha().getTime())-tiemp[0])/tempro2)*100;
                if(cnx>tempro){
                    cnx=Math.round(cnx/tempro);
                }
                else{
                    cnx=0;
                }
                cny=tobr.indexOf((REPO[j].getrama()));
                text+=dracir(cny,cnx,colusu[i][1]);
            }
       } 
    }
    document.getElementById("cann").innerHTML = text ;
   // document.getElementById("debu").innerHTML =  tiemp+ " "+ hh3+" "+tempro2;
};
function drawlih(xxi,yy,xxf){
    var text="";
    var ggy= ppy+(40*yy);
    text= "<path d="+'"'+"M"+(xxi*conspx+inispx)+"," +ggy+ " L"+(xxf*conspx+inispx)+ ","+ggy + '"'+" fill="+'"'+"none"+'"'+" stroke-width=" + '"'+'3'+'"'+ " stroke="+'"'+"rgb(140, 133, 125)"+'"'+"> </path>";
    hh.push([xxi,xxf,ggy]);
    return text;
}

function drawliv(yyi,xx){
    var text="";
    var ggy= ppy+(40*xx);
    text= "<path d="+'"'+"M"+(yyi*conspx+inispx)+"," +ppy+ " L"+(yyi*conspx+inispx)+ ","+ggy + '"'+" fill="+'"'+"none"+'"'+" stroke-width=" + '"'+'3'+'"'+ " stroke="+'"'+"rgb(140, 133, 125)"+'"'+"> </path>";
   
    return text;
}

var hh2=[];

function dracir(cy,cx,coloor){
    var text="";
    text= "<circle cx="+'"'+ (cx*conspx+inispx) +'"'+ " cy="+ '"'+ (ppy+(40*cy))+'"' + " r="+ '"' +"5"+ '"' + " fill="+'"'+coloor+ '"' +"></circle>" ;
    return text;
    hh2.push(text);
}