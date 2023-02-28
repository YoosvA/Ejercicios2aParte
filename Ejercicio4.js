// Solucion
var Ejercicios2 = /** @class */ (function () {
    function Ejercicios2() {
    }
    Ejercicios2.prototype.ejercicio1 = function () {
        var precio = 0;
        var tipodeuva = 0;
        var tamanouva = 0;
        var totalprecio = 0;
        precio = Number(prompt("ingresa el precio"));
        tipodeuva = prompt("ingresa el tipo de uva");
        tamanouva = Number(prompt("ingresa el tamano de la uva"));
        if (tipodeuva == "a") {
            if (tamanouva == 1) {
                totalprecio = precio + 0.20;
            }
            else if (tamanouva == 2) {
                totalprecio = precio + 0.30;
            }
        }
        else if (tipodeuva == "b") {
            if (tamanouva == 1) {
                totalprecio = precio - 0.30;
            }
            else if (tamanouva == 2) {
                totalprecio = precio - 0.50;
            }
        }
        console.log("el precio total es de: ".concat(totalprecio));
    };
    Ejercicios2.prototype.ejercicio2 = function () {
        var alumnos = 0;
        var totalpago = 0;
        alumnos = Number(prompt("ingresa el numero de alumnos"));
        if (alumnos >= 100) {
            totalpago = alumnos * 0.65;
        }
        else if (alumnos >= 50 && alumnos <= 99) {
            totalpago = alumnos * 0.70;
        }
        else if (alumnos >= 30 && alumnos <= 49) {
            totalpago = alumnos * 0.95;
        }
        else if (alumnos <= 30) {
            totalpago = alumnos * 4000;
        }
        console.log("el total a pagar es de ".concat(totalpago));
    };
    Ejercicios2.prototype.ejercicio3 = function () {
        var minutosllamada = 0;
        var paquete1 = Number(1);
        var paquete2 = Number(0.80);
        var paquete3 = Number(0.70);
        var cobrollamada = 0;
        var minutosextra = 0;
        var dia = 0;
        var turno = 0;
        var cobrototal = 0;
        minutosllamada = Number(prompt("ingresa los miutos de llamada"));
        if (minutosllamada <= 5) {
            cobrollamada = paquete1;
        }
        else if (minutosllamada >= 6 && minutosllamada <= 8) {
            cobrollamada = paquete1 + paquete2;
        }
        else if (minutosllamada >= 9 && minutosllamada <= 10) {
            cobrollamada = paquete1 + paquete2 + paquete3;
        }
        else if (minutosllamada > 10) {
            minutosextra = minutosllamada - 10;
            cobrollamada = (minutosextra * 0.50) + (paquete1 + paquete2 + paquete3);
        }
        dia = prompt("ingresa un dia de la semana y si es domigo ingresalo de esa manera");
        turno = prompt("ingresa el turno si es trade tarde y si es otro horario ingresa");
        if (dia != "domingo") {
            if (turno != "tarde") {
                cobrototal = cobrollamada + (cobrollamada * 0.15);
            }
            else {
                cobrototal = cobrollamada + (cobrollamada * 0.1);
            }
        }
        else {
            cobrototal = cobrollamada + (cobrollamada * 0.03);
        }
        console.log("el total a pagar por la llamada es: ".concat(cobrototal));
    };
    return Ejercicios2;
}());
var objeto = new Ejercicios2();
// objeto.ejercicio1();
// objeto.ejercicio2();
objeto.ejercicio3();
