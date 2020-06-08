let a = 5;

if ( a >= 10 ) {
  console.log( 'A es mayor o igual a 10' );
} else {
  console.log( 'A es menor a 10' );
}

// console.log( 'Fin' );

const hoy = new Date();
let dia   = hoy.getDate();

console.log({ dia });

if ( dia === 0 ) {
  console.log( 'Es domingo' );
} else if ( dia === 1 ) {
  console.log( 'Es lunes' );
} else {
  console.log( 'No es domingo ni lunes' );
}

