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

