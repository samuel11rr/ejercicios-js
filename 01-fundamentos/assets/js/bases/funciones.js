function saludar( nombre ) {
    console.log(arguments);
    console.log('Hola ' + nombre);
    return 10;
}


const saludar2 = function( nombre ) {
    console.log( 'Hola ' + nombre );
}


const saludarFlecha = () => {
    console.log( 'Saludar flecha' );
}

const saludarFlecha2 = (nombre) => {
    console.log( 'Saludar ' + nombre );
}

// saludar( 'Samuel', 40, true, 'Mexico' );
// saludar2( 'Samuel' );
// saludarFlecha();
// saludarFlecha2('Brenda');


// const retornoDeSaludar = saludar( 'Samuel', 40, true, 'Mexico' );
// console.log({ retornoDeSaludar });



function sumar( a, b) {
    return a+b;
}

const sumar2 = (a,b) => a+b;

console.log( sumar(1,2) );
console.log( sumar2(1,2) );



const getAleatorio2 = () => Math.random();

console.log( getAleatorio2() );