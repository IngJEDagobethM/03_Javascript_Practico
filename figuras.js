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
        this.escaleno = false;
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

    getEscaleno() {
        return this.escaleno
    }

    setEscaleno(escaleno) {
        this.escaleno = escaleno;
    }

    calcPerimetro() {
        return this.getLadoI() + this.getLadoD() + this.getLadoBase();
    }

    getPerimetro() {
        return this.calcPerimetro();
    }

    calcArea() {
        this.calcAltura();
        if (this.getEscaleno()) {
            return Math.sqrt(this.getAltura() * ((this.getAltura() - this.getLadoI()) * (this.getAltura() - this.getLadoD()) * (this.getAltura() - this.getLadoBase())));
        } 
        return (this.getLadoBase() * this.getAltura()) / 2;
    }

    getArea() {
        return this.calcArea();
    }

    calcAltura() {
        if (this.getLadoI() === this.getLadoD() && this.getLadoD() === this.getLadoBase()) {
            // equilatero
            this.setAltura((Math.sqrt((3 * this.getLadoI()))) / 2);
        } else if (this.getLadoI() === this.getLadoD() && this.getLadoD() != this.getLadoBase() ||
                   this.getLadoI() != this.getLadoD() && this.getLadoD() === this.getLadoBase() ||
                   this.getLadoI() != this.getLadoBase() && this.getLadoD() === this.getLadoBase()) {
            // isoceles
            this.setAltura(Math.sqrt(Math.pow(this.getLadoI(),2) - (Math.pow(this.getLadoBase(),2) / 4)));
        } else {
            // escaleno
            this.setAltura(this.getPerimetro() / 2); // semiperimetro
            this.setEscaleno(true);
        }
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

function calcPerimetroCuadrado() {
    cuadrado1.setLado(Number(document.getElementById("input__cuadrado-lado").value));
    alert(cuadrado1.getPerimetro());
}

function calcAreaCuadrado() {
    cuadrado1.setLado(Number(document.getElementById("input__cuadrado-lado").value));
    alert(cuadrado1.getArea());
}

function calcPerimetroTriangulo() {
    triangulo1.setLadoI(Number(document.getElementById("input__triangulo-lado1").value));
    triangulo1.setLadoD(Number(document.getElementById("input__triangulo-lado2").value));
    triangulo1.setLadoBase(Number(document.getElementById("input__triangulo-base").value));
    alert(triangulo1.getPerimetro());
}

function calcAreaTriangulo() {
    triangulo1.setLadoI(Number(document.getElementById("input__triangulo-lado1").value));
    triangulo1.setLadoD(Number(document.getElementById("input__triangulo-lado2").value));
    triangulo1.setLadoBase(Number(document.getElementById("input__triangulo-base").value));
    alert(triangulo1.getArea());
}

function calcPerimetroCirculo() {
    circulo1.setRadio(Number(document.getElementById("input__circulo-radio").value));
    alert(circulo1.getPerimetro());
}

function calcAreaCirculo() {
    circulo1.setRadio(Number(document.getElementById("input__circulo-radio").value));
    alert(circulo1.getArea());
}