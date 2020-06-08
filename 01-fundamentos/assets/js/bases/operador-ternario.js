const dia = 0; // 0: domingo
const horaActual = 10;

let horaApertura;
let mensaje;

horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

mensaje = ( horaActual >= horaApertura )
        ? 'está abierto'
        : `Está cerrado, hoy abrimos a las ${ horaApertura }`;

console.log({ horaApertura, mensaje });