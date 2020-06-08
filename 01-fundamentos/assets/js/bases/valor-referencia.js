let a = 10;
let b = a;

a = 30;
console.log({ a, b });



let juan = {
    nombre: 'Juan'
};


// al asignar un objeto a ana se rompe la referencia, pero se añade el contenido de juan 
// en objetos el operador spread ... sirve para quitar el contenido de la variable subsiguiente
let ana = { ...juan };
ana.nombre = 'Ana'

console.log({ ana, juan });

// En JS todos los objetos son pasados por referencia
// Las variables primitivos se pasan por valor

const cambiaNombre = ( { ...persona } ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );

console.log({ peter, tony });


// en arreglos
const frutas = ['manzana', 'pera', 'piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
// en arreglos el operador rest ... sirve para sacar los elementos del array
// en este caso estamos creando un arreglo nuevo con los elementos extraidos del array frutas
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('mango');
otrasFrutas2.push('mango');
console.table({ frutas, otrasFrutas, otrasFrutas2 });
