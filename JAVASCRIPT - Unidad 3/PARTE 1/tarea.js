/* Ejercicio 1*/

function determinarMedioTransporte(distancia) {
    if (distancia >= 0 && distancia <= 1000) {
        return "Pie";
    } else if (distancia > 1000 && distancia <= 10000) {
        return "Bicicleta";
    } else if (distancia > 10000 && distancia <= 30000) {
        return "Colectivo";
    } else if (distancia > 30000 && distancia <= 100000) {
        return "Auto";
    } else if (distancia > 100000) {
        return "Avion";
    }
}

console.log(determinarMedioTransporte(100000));

/* Ejercicio 2*/


function elMayor(array){
    return Math.max(...array);
}

const array = [70,2,3,4,5,6];

console.log(elMayor(array));