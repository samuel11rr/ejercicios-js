const sam = {
  nombre: 'Samuel',
  edad: 30,
  imprimir() {
    console.log( `Nombre: ${ this.nombre } - Edad: ${ this.edad }` )
  }
}

const brenda = {
  nombre: 'Brenda',
  edad: 30,
  imprimir() {
    console.log( `Nombre: ${ this.nombre } - Edad: ${ this.edad }` )
  }
}

// sam.imprimir();


function Persona( nombre, edad ) {
  this.nombre = nombre;
  this.edad   = edad;

  this.imprimir = function() {
    console.log( `Nombre: ${ this.nombre } - Edad: ${ this.edad }` );
  }
}

const maria = new Persona('Maria', 25);
const sandy = new Persona('Sandy', 22);

maria.imprimir();
sandy.imprimir();