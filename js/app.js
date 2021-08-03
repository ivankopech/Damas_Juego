//TABLERO
var Tablero  = [
    [null, 1, null, 1, null, 1, null, 1],
    [1, null, 1, null, 1, null, 1, null],
    [null, 1, null, 1, null, 1, null, 1],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [2, null, 2, null, 2, null, 2, null],
    [null, 2, null, 2, null, 2, null, 2],
    [2, null, 2, null, 2, null, 2, null],
  ];
  
  function creacionTablero(){
    var Tableroo = document.getElementById('Tablero');
    var contador = 0;
  
    for (let i = 0; i < Tablero.length; i++) {
      var nuevoCuadradoFila = document.createElement('div');
      nuevoCuadradoFila.className = 'fila -fila' + i
      Tableroo.appendChild(nuevoCuadradoFila);
  
      contador = i % 2
  
      for (let index = 0; index < Tablero[i].length; index++) {
          var nuevaCasilla = document.createElement('div');
  
          if(contador === 0){
              nuevaCasilla.className= 'casillaBlanca';
              contador++;
          }
          else{
              nuevaCasilla.className = 'casillaNegra'
              contador--;
          }
          nuevaCasilla.id = 'fila-' + i + '-col-'+ index;
          nuevoCuadradoFila.appendChild(nuevaCasilla);
      }
    }
    creacionFichas();
  }
  creacionTablero();
  
  function creacionFichas(){
    for (let i = 0; i < Tablero.length; i++) {
        for (let v = 0; v < Tablero[i].length; v++) {
  
            var Casilla = document.getElementById('fila-' + i + '-col-' + v);
            // CREACION FICHAS COLOR ROJA
            if (Tablero[i][v] === 1) {
                var nuevaFicha = document.createElement('div');
                nuevaFicha.className = 'fichaRoja';
                Casilla.appendChild(nuevaFicha);    
            }
            // CREACION FICHA COLOR AZUL
            if (Tablero[i][v] === 2) {
                var nuevaFicha = document.createElement('div');
                nuevaFicha.className = 'fichaAzul';
                Casilla.appendChild(nuevaFicha);   
            }
            // CREACION FICHA REY ROJA
            if (Tablero[i][v] === 11) {
                var nuevaFicha = document.createElement('div');
                nuevaFicha.className = 'fichaRoja Rey';
                Casilla.appendChild(nuevaFicha);
            }
            //CREACION FICHA REY AZUL
            if (Tablero[i][v] === 22) {
                var nuevaFicha = document.createElement('div');
                nuevaFicha.className = 'fichaAzul Rey';
                Casilla.appendChild(nuevaFicha);
            }
        }
    }
  }

  var Turno = 1;
  var fichaRojaVariable = document.getElementsByClassName('fichaRoja');
  var fichaAzulVariable = document.getElementsByClassName('fichaAzul');
  
  function eventoClick(){
      if (Turno ===1) {
          for (var i = 0; i < fichaRojaVariable.length; i++) {
              fichaRojaVariable[i].addEventListener('click', obtenerFichaObjeto);
          }
      }
      else{
          for (var i = 0; i < fichaAzulVariable.length; i++) {
              fichaAzulVariable[i].addEventListener('click', obtenerFichaObjeto);
          }
      }
  }

  //OBJETO DE LA FICHA QUE SELECCIONEMOS
  var obtenerFichaObjeto = {
      idFila : null, 
      idColumna: null, 
      Rey: false,
      moverIzquierda : false,
      moverDerecha: false,
      moverComerIzquierda: false,
      moverComerDerecha: false,
      moverPintarIzquierda: null,
      moverPintarDerecha: null,
      moverComerIzquierdaPintado: null,
      moverComerDerechaPintado: null,
      moverFilaPintar:null,
      moverFilaComerPintado: null,
  }
  
  function obtenerFicha(evento){
      resetearTablero(); 
      obtenerFichaObjeto.idFila = parseInt(evento.path[1].id.substring(5,6));
      obtenerFichaObjeto.idColumna= parseInt(evento.path[1].id.substring(11,12));
  
      if (evento.target.classList.contains('Rey')) {
          obtenerFichaObjeto.Rey = true;
      }
      else{
          obtenerFichaObjeto.Rey = false;
      }
  
      if (obtenerFichaObjeto.Rey === false) {
          resetearMovimientosPermitidosObjeto(); 
          for (let a = 1; a < 8 ; a++) {
             buscarEspaciosDisponibles(obtenerFichaObjeto.idFila, obtenerFichaObjeto.idColumna, a, a);
          }
          resetearMovimientosPermitidosObjeto(); 
          resetearObtenerFichaObjeto(); 
          for (let a = 1; a < 8 ; a++) {
             buscarEspaciosDisponibles(obtenerFichaObjeto.idFila, obtenerFichaObjeto.idColumna, a, a);
          }
      }
  }

  