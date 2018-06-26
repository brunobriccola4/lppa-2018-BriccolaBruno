console.log('game');
var Game = {
  next: null,
  board: null,
  cells: null,
  init: function () {
    Board.createCells();
    Game.board = Board.getBoard();
    Game.cells = Board.getCells();
    Game.next = document.getElementById('next');
  },
  start: function () {
    for (var i = 0; i < Game.cells.length; i++) {
      Game.cells[i].onclick = Cell.toggle;
    }
    Game.next.onclick = Board.nextStep;
  },
  update: function () {

  }
};
//Ciclo de vida:
//init: creo o capturo variables, etc
//start: primera vuelta
//update: se actualiza el nuevo estado
//render: mostrar en pantalla el estado actual de la aplicacion
//die: termina