// extraer array de salarios a partir de objeto
const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

// ordenar salarios de menor a mayor
const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

// Helpers | Utils

function mediaAritmetica(lista) {
    let sumaLista = 0;
    sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    return sumaLista / lista.length;
}

function esPar(numero) {
    return ( numero % 2 === 0 );
}

// Calculo de Mediana

function mediana(lista) {
    let mitadLista = lista.length / 2;
    if (esPar(lista.length)) {
        return mediaAritmetica([
            lista[parseInt(mitadLista)],
            lista[parseInt(mitadLista) - 1]
        ]);
    } else {
        return lista[parseInt(mitadLista)];
    }
}

// Calculo de Mediana de Salarios General

const medSalariosGen = mediana(salariosColSorted);

// Calculo de Top 10%

function porcConDescuento(descuento) {
    return 100 - descuento;
} 

function valorConDescuento(valor, descuento) {
    return ( valor * porcConDescuento(descuento) ) / 100;
} 

// splice (posicion_inicial_corte, numero_posiciones) funciona como SUBSTR (PL/SQL)
const top10 = 10;
const spliceStart = valorConDescuento(salariosColSorted.length, top10);
const spliceCount = salariosColSorted.length - spliceStart;
// console.log("inicio: "+spliceStart+" fin: "+spliceCount);
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medSalariosTop10 = mediana(salariosColTop10);

// Escribir resultados

console.log("Mediana General " + medSalariosGen);
console.log("Mediana Top 10% " + medSalariosTop10);