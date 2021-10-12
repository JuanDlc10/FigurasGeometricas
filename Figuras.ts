class FigurasGeometricas{
    public cuadrado (lado : number) : number {
        return lado*lado;
    }
    public rectangulo(base : number, altura : number) : number {
        return base * altura;
    }
    public triangulo(base : number, altura : number) : number {
        return (base * altura) / 2;
    }
    public circulo(diametro : number) : number {
        let radio = diametro / 2;
        radio = radio * radio;
        return 3.1416 * radio;
    }
    public seleccionar (opcion : number){
        let areaFigura : number = 0;
        if(opcion == 1){
            let lado : any = prompt("Introduce un lado del cuadrado.")
            lado = parseFloat(lado)
            areaFigura = this.cuadrado (lado);
        }else if(opcion == 2) {
            let base : any = prompt("Introduce la base del rectangulo.")
            base = parseFloat (base);
            let altura : any = prompt("Introduce la altura del rectangulo.")
            altura = parseFloat (altura);
            areaFigura = this.rectangulo (base,altura);
        } else if(opcion == 3){
            let base : any = prompt("Introduce la base del rectangulo.")
            base = parseFloat (base);
            let altura : any = prompt("Introduce la altura del rectangulo.")
            altura = parseFloat (altura);
            areaFigura = this.triangulo (base,altura)
        }else if(opcion == 4){
            let diametro : any = prompt("Introduce el diametro del circulo")
            areaFigura = this.circulo (diametro)
        }
        console.log("El area de la figura es: " + areaFigura)
    }
}
const calcular = new FigurasGeometricas();
let opcion : any = prompt(`Selecciona la opcion para calcular el area
                            1.Cuadrado
                            2.Rectangulo
                            3.Triangulo
                            4.Circulo`);
opcion = parseInt(opcion);
calcular.seleccionar(opcion);

