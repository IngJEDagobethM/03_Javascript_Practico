// extraer array de salarios a partir de objeto
const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

// ordenar salarios 
const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

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

console.log(mediana(salariosColSorted));