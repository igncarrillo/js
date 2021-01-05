function calcularSuma() {
    var operandos = ingresarOperandos();
    var suma = operandos[0] + operandos[1];
    alert("El resultado de la suma es: " + suma);
}

function calcularResta() {
    var operandos = ingresarOperandos();
    var resta = operandos[0] - operandos[1];
    alert("El resultado de la suma es: " + resta);
}

function calcularMult() {
    var operandos = ingresarOperandos();
    var multi = operandos[0] * operandos[1];
    alert("El resultado de la suma es: " + multi);
}

function calcularDiv() {
    var operandos = ingresarOperandos();
    if (operandos[1] != 0) {
        var div = operandos[0] / operandos[1];
        alert("El resultado de la suma es: " + div);
    } else {
        alert("No se puede dividir por cero");
    }
}

function ingresarOperandos() {
    var operando1 = parseInt(prompt("Ingrese el primer operando: ", 1));
    var operando2 = parseInt(prompt("Ingrese el segundo operando: ", 1));

    return [operando1, operando2]
}
