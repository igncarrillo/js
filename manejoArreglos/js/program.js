function manejoMatrices() {
    //Genero la matriz
    var matriz = [];
    for (i = 0; i < 3; i++) {
        matriz[i] = [];
    }

    //Lleno la matriz
    var contador = 0;
    for (i = 0; i < matriz.length; i++) {
        for (j = 0; j < 3; j++) {
            matriz[i][j] = String.fromCharCode(97 + contador);
            contador++;
        }
    }

    imprimir(matriz);
}

function imprimir(dato) {
    for (i = 0; i < dato.length; i++) {
        for (j = 0; j < dato[i].length; j++) {
            document.getElementById("resultado").innerHTML += dato[i][j] + ", ";
        }
        document.getElementById("resultado").innerHTML += "<br>";
        }
}

function limpiar() {
    document.getElementById("resultado").innerHTML = "";
}