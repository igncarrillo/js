function mostrarNombre(entrada){
    var nombre = entrada.value;
    var salida = "Hola "+ nombre.toUpperCase()

    document.getElementById("resultado").innerHTML = salida
}