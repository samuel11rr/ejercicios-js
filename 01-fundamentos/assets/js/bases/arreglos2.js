let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono Trigger'];

console.log('Numero de elementos: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[ juegos.length-1 ];

console.log({ primero, ultimo });

juegos.forEach( ( elemento, indice, arreglo ) => {
    console.log({ elemento, indice, arreglo });
});


// push() agrega elemento al final
let nuevaLongitud = juegos.push( 'F-Zero' );
console.log({ nuevaLongitud, juegos });


// unshift() agrega elemento al inicio
nuevaLongitud = juegos.unshift( 'Fire Emblem' );
console.log({ nuevaLongitud, juegos });


// pop() remover ultimo elemento
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });


// splice() quita un elemento de una posición dada
// ( puntoInicial, cantidadElementos )
let juegosBorrados = juegos.splice( 1, 2 );
console.log({ juegosBorrados, juegos });


// indexOf() devuelve la posición de un elemento dado
let metroidIndex = juegos.indexOf( 'Metroid' );
console.log({ metroidIndex, metroidIndex });