// import { validar_telefono as validar_telefono } from './validaciones.js';
// validar_telefono();

// function validar_telefono(string) {

//     var validado = false;
//     var phone = document.getElementById(string).value;

//     if(string.indexOf('@') != -1 || string.indexOf('!') != -1 || string.indexOf('_') != -1 || string.indexOf('-') != -1 || string.indexOf('/') != -1){
//         alert("No puede tener caracteres especiales");
//     }else if(string.length >= 6 && string.length <= 10){
//         alert("Telefono Valido");
//         validado=true;
//         console.log(respuesta);
//         return validado;
//     }else {
//         alert("Telefono Inválido");
//         console.log(respuesta);
//         return validado;
//     }
// }

function validar_telefono(string){
    var respuesta = false;
    if(string.length>7 && string.length<=10 && string.includes('@','!','/','_','-')){
        respuesta = true;
        return respuesta;
    }else{
        return respuesta;
    }
}

function validar_direccion(string){
    var respuesta = false;
    if(string.length >=7 && string.length<= 30 && string.includes("#") && string.search('Carrera', 'Transversal', 
    'Circular', 'Calle')){
        respuesta = true;
        return respuesta;
    }else{
        return respuesta;
    }
}

module.exports.validar_telefono = validar_telefono;
module.exports.validar_direccion = validar_direccion;