// function crearPersona( nombre, apellido ) {
//     return { nombre, apellido }
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona( 'Samuel', 'Ramirez' );
console.log( persona );



function imprimeArgumentos() {
    console.log( arguments );
}


// parametros rest
const imprimeArgumentos2 = ( ...args ) => args;

const [ edad, vivo, nombre ] = imprimeArgumentos2( 10, true, 'Samuel' );
console.log({ edad, vivo, nombre });


const { apellido: nuevoApellido } = crearPersona( 'Samuel', 'Ramirez' );
console.log({ nuevoApellido });



const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: [
        'Mark I',
        'Mark V',
        'Hulkbuster'
    ],
};


// desestructuracion; parametros predefinidos
const imprimePropiedades = ({ nombre, codeName, vivo, edad=45, trajes }) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}

imprimePropiedades( tony );