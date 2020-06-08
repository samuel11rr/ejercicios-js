const elMayor = (a, b) => (a > b) ? a : b;
console.log( elMayor(4, 8) );


const tieneMembresia = ( miembro ) => miembro ? '2 dólares' : '10 dólares';
console.log( tieneMembresia(true) );



const amigo = false;
const amigosArr = [
  'Peter',
  'Tony',
  'Strange',
  amigo ? 'Thor' : 'Loki',
  // ( () => 'Nick Fury' )(), // Funcion autoinvocada
];

console.log( amigosArr );



const nota = 65;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log({ nota, grado });