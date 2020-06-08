// const bloquea la reasignacion de la variable, pero permite modificar sus propiedades

const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: [
        'Mark I',
        'Mark V',
        'Hulkbuster'
    ],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima pelicula': 'Infinity Way'
}

console.log( personaje );
console.log( 'Nombre: ', personaje.nombre );
console.log( 'Nombre: ', personaje['nombre'] );
console.log( 'Edad: ', personaje.edad );

console.log( 'Coords: ', personaje.coords );
console.log( 'Lat: ', personaje.coords.lat );
console.log( 'Lng: ', personaje.coords.lng );

console.log( 'Armaduras: ', personaje.trajes.length );
console.log( 'Ultimo traje: ', personaje.trajes[ personaje.trajes.length - 1 ] );

const x = 'vivo';
console.log('vivo', personaje[x]);

console.log( 'Ultima pelicula: ', personaje['ultima pelicula'] );


// eliminar propiedad
delete personaje.edad;
console.log( personaje );

personaje.casado = true;


// creamos arreglos por cada propiedad
const entriesPares = Object.entries( personaje );
console.log( entriesPares );


// freeze() bloquea las asignaciones directas del objeto
Object.freeze( personaje );
console.log( personaje );


// getOwnPropertyNames() devuelve un arreglo con los nombres de las propiedades
const propiedades = Object.getOwnPropertyNames( personaje );

// Object.values() regresa un arreglos con los valores de las propiedades
const valores = Object.values( personaje );


console.log({ propiedades, valores });
