// código del cuadrado

class Cuadrado {
    constructor(lado) {
        this.lado = lado;
    }

    getLado() {
        return this.lado;
    }

    setLado(lado) {
        this.lado = lado;
    }

    calcPerimetro() {
        return this.getLado() * 4;
    }

    getPerimetro() {
        return this.calcPerimetro();
    }

    calcArea() {
        return this.getLado() * this.getLado();
    }

    getArea() {
        return this.calcArea();
    }
}
let cuadrado1 = new Cuadrado(0);
/*
console.group("Cuadrados");
cuadrado1.setLado(20);
console.log(
    "Los lados del cuadrado miden: "
    + cuadrado1.getLado()
    + " cm.");
console.log(
    "El perímetro del cuadrado es: "
    + cuadrado1.getPerimetro()
    + " cm.");
console.log(
    "El área del cuadrado es: "
    + cuadrado1.getArea()
    + " cm^2.");
console.groupEnd();
*/
// código del triángulo

class Triangulo {
    constructor(ladoI, ladoD, ladoBase, altura) {
        this.ladoI = ladoI;
        this.ladoD = ladoD;
        this.ladoBase = ladoBase;
        this.altura = altura;
    }

    getLadoI() {
        return this.ladoI
    }

    setLadoI(ladoI) {
        this.ladoI = ladoI;
    }

    getLadoD() {
        return this.ladoD
    }

    setLadoD(ladoD) {
        this.ladoD = ladoD;
    }

    getLadoBase() {
        return this.ladoBase
    }

    setLadoBase(ladoBase) {
        this.ladoBase = ladoBase;
    }

    getAltura() {
        return this.altura
    }

    setAltura(altura) {
        this.altura = altura;
    }

    calcPerimetro() {
        return this.getLadoI() + this.getLadoD() + this.getLadoBase();
    }

    calcArea() {
        return (this.getLadoBase() * this.getAltura()) / 2;
    }

    getPerimetro() {
        return this.calcPerimetro();
    }

    getArea() {
        return this.calcArea();
    }
}
let triangulo1 = new Triangulo(0,0,0,0);
/*
console.group("Triángulos");
triangulo1.setLadoI(5);
triangulo1.setLadoD(5);
triangulo1.setLadoBase(5);
triangulo1.setAltura(4);
console.log(
    "Los lados del triángulo miden: "
    + triangulo1.getLadoI()
    + " cm, "
    + triangulo1.getLadoD()
    + " cm y "
    + triangulo1.getLadoBase()
    + " cm. La altura es: "
    + triangulo1.getAltura()
    + " cm.");
console.log(
    "El perímetro del triángulo es: "
    + triangulo1.getPerimetro()+" cm.");
console.log(
    "El área del triángulo es: "
    + triangulo1.getArea()+" cm^2.");
console.groupEnd();
*/
// código del círculo

class Circulo {
    constructor(radio) {
        this.radio = radio;
    }

    getRadio() {
        return this.radio;
    }

    setRadio(radio) {
        this.radio = radio;
    }

    calcDiametro() {
        return this.getRadio() * 2;
    }

    getDiametro() {
        return this.calcDiametro();
    }

    calcPerimetro() {
        return this.getDiametro() * Math.PI;
    }

    getPerimetro() {
        return this.calcPerimetro();
    }

    calcArea() {
        return (this.getRadio() * this.getRadio()) * Math.PI;
    }

    getArea() {
        return this.calcArea();
    }
}
let circulo1 = new Circulo(0);
/*
console.group("Círculos");
circulo1.setRadio(5);
console.log(
    "El radio del círculo mide: "
    + circulo1.getRadio()
    + " cm.");
console.log(
    "El diametro del círculo es: "
    + circulo1.getDiametro()
    + " cm.");
console.log(
    "El perímetro del círculo es: "
    + circulo1.getPerimetro()
    + " cm.");
console.log(
    "El área del círculo es: "
    + circulo1.getArea()
    + " cm^2.");
console.groupEnd();
*/

// Interactuando con HTML y JS

