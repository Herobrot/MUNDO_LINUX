function DesplegarMenu(){
    document.getElementById("Oculto_Id").classList.toggle("Oculto");
    var Columna1 = document.getElementById("No-Display1");
    Columna1.style.display = Columna1.style.display === 'none' ? '' : 'none';

    var Columna2 = document.getElementById("No-Display2");
    Columna2.style.display = Columna2.style.display === 'none' ? '' : 'none';

    var Columna3 = document.getElementById("No-Display3");
    Columna3.style.display = Columna3.style.display === 'none' ? '' : 'none';
}

function Opacidad_Anuncio(){
    document.getElementById("Aside").classList.toggle("Opacidad_Aside");
}

var Click = 0;

function CambiarColor_1(){
    Click++;
    console.log("Click es de: " , Click);

    if(Click >= 10){
        document.getElementById("Color_1").style.color = "navy";
        console.log("Se ejecuto");
    }
}

function CambiarColor_2(){
    Click++;
    if(Click >= 20){
        document.getElementById("Color_2").style.color = "lime";
    }
}

function CambiarColor_3(){
    Click++;
    if(Click == 50){
        document.getElementById("Color_3").style.color = "chartreuse";
    }

    else{
        document.getElementById("Color_3").style.color = "black";
    }
}