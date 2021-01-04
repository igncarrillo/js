function generarPares() {
    var contador = 0;
    while (contador <= 10) {
        if (contador % 2 == 0) {
            document.getElementById("respuesta").innerHTML += contador + " ";
        }
        contador++;
    }
}

function limpiarContador() {
    document.getElementById("respuesta").innerHTML = " ";
}