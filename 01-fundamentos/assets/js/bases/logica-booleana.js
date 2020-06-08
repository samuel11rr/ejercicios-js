const regresaTrue = () => {
  console.log( 'regresa true' );
  return true;
}

const regresaFalse = () => {
  console.log( 'regresa false' );
  return false;
}

// Not o negación
console.warn( 'NOT o negacion' )
console.log( true ); // true
console.log( !true ); // false
console.log( !false ); // true
console.log( !!false ); // false

console.log( !regresaFalse() ); // true


// Operador AND
console.warn( 'operador AND' );
console.log( true && true ); // true
console.log( true && false ); // false
console.log( true && !false ); // true

console.log( regresaFalse() && regresaTrue() ); // false
console.log( regresaTrue() && regresaFalse() ); // false

regresaFalse() && regresaTrue();


// Operador OR
console.warn( 'Operador OR' );
console.log( true || false ); // true
console.log( false || false ); // true

console.log( regresaFalse() || regresaTrue() ); // true
console.log( regresaTrue() || regresaFalse() ); // true


// Asignaciones
console.warn( 'Asignaciones' );

const soyUndefined  = undefined;
const soyNull       = null;
const soyFalse      = false;

const a1 = true && 'Hola Mundo' && 150; // asigna el ultimo valor
const a2 = 'Hola' && 'Mundo' && soyFalse && true; // Asigna el ultimo valor solo si todo tiene un valor != false
const a3 = soyFalse || 'Ya no soy false';
const a4 = soyUndefined || soyNull || soyFalse || 'Ya no soy false';
const a5 = soyUndefined || soyNull || soyFalse || regresaTrue() || 'Ya no soy false';

console.log( a1, a2, a3, a4, a5 );