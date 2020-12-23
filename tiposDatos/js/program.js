document.write("Programa para manejo de tipos de datos");

// Cadena (string)
var cadena = "soy una cadena";
document.write("<br/>Valor cadena: " + cadena);

//Numeros
var num1 = 15;
var num2 = parseInt("20");
var num3 = num1 + num2;
document.write("<br/>Valor num1: " + num1 + " Valor num2: " + num2 + " La suma es: " + num3);

//Boolean
var bandera = true;
var resultado = (num1 == num2);
document.write("<br/>Bandera: " + bandera + "; Resultado: " + resultado);

//tipo null
var tipoNull = null;
document.write("<br/>Valor tipoNull: " + tipoNull);

//tipo no definido
var undefined;
document.write("<br/>Valor no definido: " + undefined);

//Conocer el tipo de datos
resultado = (typeof num1 == "number");
document.write("<br/>Resultado: " + resultado);
