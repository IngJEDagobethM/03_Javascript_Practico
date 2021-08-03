// código del cuadrado

class Cuadrado {
    constructor(lado) {
        this.lado = lado;
    }

    perimetro() {
        return this.lado * 4;
    };

    area() {
        return this.lado * this.lado;
    };
}

console.group("Cuadrados");
let cuadrado1 = new Cuadrado(5);
console.log(
    "Los lados del cuadrado miden: "
    + cuadrado1.lado+" cm.");
console.log(
    "El perímetro del cuadrado es: "
    + cuadrado1.perimetro()+" cm.");
console.log(
    "El área del cuadrado es: "
    + cuadrado1.area()+" cm^2.");
console.groupEnd();

// código del triángulo

class Triangulo {
    constructor(ladoI, ladoD, ladoBase, altura) {
        this.ladoI = ladoI;
        this.ladoD = ladoD;
        this.ladoBase = ladoBase;
        this.altura = altura;
    }

    perimetro() {
        return this.ladoI + this.ladoD + this.ladoBase;
    };

    area() {
        return (this.ladoBase * this.altura) / 2;
    };
}

console.group("Triángulos");
let triangulo1 = new Triangulo(5,5,3,4.5);
console.log(
    "Los lados del triángulo miden: "
    + triangulo1.ladoI
    + " cm, "
    + triangulo1.ladoD
    + " cm y "
    + triangulo1.ladoBase
    + " cm. La altura es: "
    + triangulo1.altura
    + " cm.");
console.log(
    "El perímetro del triángulo es: "
    + triangulo1.perimetro()+" cm.");
console.log(
    "El área del triángulo es: "
    + triangulo1.area()+" cm^2.");
console.groupEnd();

// código del círculo

class Circulo {
    constructor(radio) {
        this.radio = radio;
    }

    diametro() {
        return this.radio * 2;
    }

    perimetro() {
        return this.diametro() * Math.PI;
    };

    area() {
        return (this.radio * this.radio) * Math.PI;
    };
}

console.group("Círculos");
let circulo1 = new Circulo(5);
console.log(
    "El radio del círculo mide: "
    + circulo1.radio+" cm.");
console.log(
    "El diametro del círculo es: "
    + circulo1.diametro()+" cm.");
console.log(
    "El perímetro del círculo es: "
    + circulo1.perimetro()+" cm.");
console.log(
    "El área del círculo es: "
    + circulo1.area()+" cm^2.");
console.groupEnd();