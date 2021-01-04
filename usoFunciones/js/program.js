function calcularFactorial(entrada) {
    var numero = entrada.value;
    if (numero >= 0 && numero <= 100) {
        var resultado = factorial(numero);
        limpiar();
        imprimir(resultado);
    } else {
        limpiar();
        imprimir();
    }
}

function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

function limpiar(){
    document.getElementById("resultado").innerHTML = "";
}

function imprimir(resultado = null){
    if(resultado) {
        document.getElementById("resultado").innerHTML = "El factorial es: " + resultado;
    }
    else {
        document.getElementById("resultado").innerHTML ="El numero proporcionado debe estar entre 0 y 100"
    }
}