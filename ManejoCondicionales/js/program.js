function seleccionarDia(entrada) {
    var diaFecha = null; //Posteriormente lo envio a el html
    var dia = new Date(entrada.value).getDay();

    switch (dia) {
        case 0:
            diaFecha = "El dia es Lunes";
            break
        case 1:
            diaFecha = "El dia es Martes";
            break
        case 2:
            diaFecha = "El dia es Miercoles";
            break
        case 3:
            diaFecha = "El dia es Jueves";
            break
        case 4:
            diaFecha = "El dia es Viernes";
            break
        case 5:
            diaFecha = "El dia es Sabado";
            break
        case 6:
            diaFecha = "El dia es Domingo";
            break
    }

    document.getElementById("resultado").innerHTML = diaFecha;
}