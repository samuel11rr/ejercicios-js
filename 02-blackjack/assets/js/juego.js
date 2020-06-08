/** 
 * PATRON MODULO 
 * Esto una funcion anonima autoinvocada
 * y sirve para cambiar el scope
 * y proteger el codigo
 */

const miModulo = (() => {
  'use strict'


  let deck          = [];
  const tipos       = ['C', 'D', 'H', 'S'],
        especiales  = ['A', 'J', 'Q', 'K'];

  let puntosJugadores = [];

  // Referencias html
  const btnPedir    = document.querySelector('#btnPedir'),
        btnDetener  = document.querySelector('#btnDetener'),
        btnNuevo    = document.querySelector('#btnNuevo');

  const divCartasJugadores  = document.querySelectorAll('.divCartas'),
        puntosHTML          = document.querySelectorAll('small');


  const inicializarJuego = ( numJugadores = 2 ) => {
    console.clear();

    deck = crearDeck();
    puntosJugadores = [];

    for ( let i = 0; i < numJugadores; i++ ) {
      puntosJugadores.push(0);
    }

    puntosHTML.forEach( elem => elem.innerText = 0 );
    divCartasJugadores.forEach( elem => elem.innerHTML = '' );
  
    btnPedir.disabled   = false;
    btnDetener.disabled = false;
  
  }



  const crearDeck = () => {
    deck = [];

    for (let i = 2; i <= 10; i++) {
      for ( let tipo of tipos ) {
        deck.push( i+tipo );
      }
    }
  
    for ( let tipo of tipos ) {
      for ( let especial of especiales ) {
        deck.push( especial+tipo );
      }
    }
  
    return _.shuffle ( deck );
  }
  
  
  
  const pedirCarta = () => {
    if ( deck.length === 0 ) {
      throw 'No hay cartas en el deck';
    }
    return deck.pop();
  }
  
  
  
  const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length-1);
  
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : Number( valor );
  }
  
  

  const acumularPuntos = ( carta, turno ) => {
    puntosJugadores[ turno ] = puntosJugadores[ turno ] + valorCarta( carta );
    puntosHTML[ turno ].innerText = puntosJugadores[ turno ];

    return puntosJugadores[ turno ];
  }



  const crearCarta = ( carta, turno ) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`
    imgCarta.classList.add('carta');

    divCartasJugadores[ turno ].append( imgCarta );
  }



  const determinarGanador = () => {
    const [ puntosMinimos, puntosCompu ] = puntosJugadores;

    setTimeout( () => {
      if ( puntosCompu === puntosMinimos ) {
        alert('Nadie gana :(');
      } else if ( puntosMinimos > 21 ) {
        alert('Computadora gana >:]');
      } else if ( puntosCompu > 21 ) {
        alert('Humano gana :v');
      } else {
        alert('Computadora gana >:]');
      } 
    }, 100);
  }



  const turnoComputadora = ( puntosMinimos ) => {
    let puntosCompu = 0;

    do {
      const carta = pedirCarta();
      puntosCompu = acumularPuntos( carta, puntosJugadores.length - 1 );
      crearCarta( carta, puntosJugadores.length - 1 );
  
    } while( (puntosCompu < puntosMinimos) && (puntosMinimos <= 21) );

    determinarGanador();
  }
  
  
  
  /** EVENTOS */
  btnPedir.addEventListener( 'click', () => {    
    const carta = pedirCarta();
    const puntosJugador = acumularPuntos( carta, 0 );

    crearCarta( carta, 0 );
  
    if ( puntosJugador > 21 ) {
      console.warn('Perdiste');
      btnPedir.disabled   = true;
      btnDetener.disabled = true;
      turnoComputadora( puntosJugador );
  
    } else if ( puntosJugador === 21 ) {
      console.warn('21, Genial!');
      btnPedir.disabled   = true;
      btnDetener.disabled = true;
      turnoComputadora( puntosJugador );
    }
  });
  
  
  
  btnDetener.addEventListener( 'click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugadores[0] );
  });
  
  
  
  // btnNuevo.addEventListener( 'click', () => {
  //   inicializarJuego();
  // });


  return {
    nuevoJuego: inicializarJuego
  };

})();