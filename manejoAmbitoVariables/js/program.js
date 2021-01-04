var nombre = null //Variable global

function mostrarNombre(parametro) {
    nombre = parametro.value;
    var saludo = "Hola " + nombre.toUpperCase();
    document.getElementById("resultado").innerHTML = saludo;
}

function saludarLocal(parametro) {
    var nombre = parametro
    var saludo = "Hola " + nombre.toUpperCase() + " Local";
    alert(saludo);
}

function saludarGlobal() {
    var saludo = "Hola " + nombre.toUpperCase() + " Global";
    alert(saludo);
}
