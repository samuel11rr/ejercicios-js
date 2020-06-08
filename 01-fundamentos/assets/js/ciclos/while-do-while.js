const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];


console.warn('While');

let i = 0;
// while( i < carros.length ) {
//   console.log( carros[i] );
//   i++;
// }


// hace lo mismo que el anterior
while( carros[i] ) {
  if ( i === 1 ) {
    // break; // break finaliza el ciclo
    i++;
    continue; // continue permite continuar con el ciclo
  }

  console.log( carros[i] );
  i++;
}




// do while
// Se ejecuta por lo menos una vez
console.warn('Do While');

let j = 0;

do {
  console.log( carros[j] );
  j++;
} while( carros[j] );