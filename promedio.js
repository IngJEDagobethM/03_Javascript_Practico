const lista1 = [
    110,
    200,
    150,
    175,
    230,
    1000000,
    200,
    270,
    105,
    8,
    150,
    200,
    200
];

function mediaAritmetica(lista) {
    let sumaLista = 0;
    /*
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }
    */
   sumaLista = lista.reduce(
       function(valorAcumulado = 0, nuevoElemento) {
           return valorAcumulado + nuevoElemento;
       }
   );
    return sumaLista / lista.length;
}

// console.log(mediaAritmetica(lista1));

function ordenarLista(lista) {
    function compareNumbers(a, b) {
        return a - b;
    }
    return lista.sort(compareNumbers);
}

function esPar(numero) {
    if ( numero % 2 === 0 ) {
        return true;
    } else {
        return false;
    }
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

// console.log(mediana(ordenarLista(lista1)));

function moda(lista) {
    let listaCount = {};
    lista.map(function(elemento) {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    });

    let listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );

    return listaArray[listaArray.length-1]
}

console.log(moda(lista1));