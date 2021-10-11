"use strict";
var FigurasGeometricas = /** @class */ (function () {
    function FigurasGeometricas() {
    }
    FigurasGeometricas.prototype.cuadrado = function (lado) {
        return lado * lado;
    };
    FigurasGeometricas.prototype.rectangulo = function (base, altura) {
        return base * altura;
    };
    FigurasGeometricas.prototype.triangulo = function (base, altura) {
        return (base * altura) / 2;
    };
    FigurasGeometricas.prototype.circulo = function (diametro) {
        var radio = diametro / 2;
        radio = radio * radio;
        return 3.1416 * radio;
    };
    FigurasGeometricas.prototype.seleccionar = function (opcion) {
        var areaFigura = 0;
        if (opcion == 1) {
            var lado = prompt("Introduce un lado del cuadrado.");
            lado = parseFloat(lado);
            areaFigura = this.cuadrado(lado);
        }
        else if (opcion == 2) {
            var base = prompt("Introduce la base del rectangulo.");
            base = parseFloat(base);
            var altura = prompt("Introduce la altura del rectangulo.");
            altura = parseFloat(altura);
            areaFigura = this.rectangulo(base, altura);
        }
        else if (opcion == 3) {
            var base = prompt("Introduce la base del rectangulo.");
            base = parseFloat(base);
            var altura = prompt("Introduce la altura del rectangulo.");
            altura = parseFloat(altura);
            areaFigura = this.triangulo(base, altura);
        }
        else if (opcion == 4) {
            var diametro = prompt("Introduce el diametro del circulo");
            areaFigura = this.circulo(diametro);
        }
        console.log("El area de la figura es: " + areaFigura);
    };
    return FigurasGeometricas;
}());
var calcular = new FigurasGeometricas();
var opcion = prompt("Selecciona la opcion para calcular el area\n                            1.Cuadrado\n                            2.Rectangulo\n                            3.Triangulo\n                            4.Circulo");
opcion = parseInt(opcion);
calcular.seleccionar(opcion);
