class Persona {

  static _conteo = 0;
  
  static get conteo() {
    return Persona._conteo + ' instancias';
  }

  static mensaje() {
    console.log('Este es un metodo estático')
  }


  nombre = '';
  codigo = '';
  frase = '';
  comida = '';

  constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase' ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;
  }


  set setComidaFavorita( comida ) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
  }


  quienSoy() {
    console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
  }

  miFrase() {
    this.quienSoy();
    console.log( `${ this.codigo } dice "${ this.frase }"` );
  }

}


const spiderman= new Persona( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino' );
const ironman= new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman' );
// console.log( spiderman );
// console.log( ironman );

// Persona._conteo = 2;

// spiderman.quienSoy();
// ironman.quienSoy();

spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'Pay de cereza de la tia May';
// spiderman.nemesis = 'Duende Verde';

console.log( spiderman );
console.log( spiderman.getComidaFavorita );

console.log('Conteo static', Persona._conteo);
console.log( Persona.conteo );
Persona.mensaje();




Persona.propiedadExterna = 'Hola mundo';
console.log( Persona );
console.log( Persona.propiedadExterna );
