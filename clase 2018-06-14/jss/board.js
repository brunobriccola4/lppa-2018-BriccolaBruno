var Board = {
  rows: 5,
  columns: 5,
  getBoard: function () {
    return document.getElementsByClassName('board')[0];
  },
  getCells: function (){
    var board = Board.getBoard();
    return board.getElementsByTagName('li');
  },
  getAliveCells: function () {
    return document.getElementsByClassName('alive');
  },
  createCells: function () {
    var board = Board.getBoard();
    var html = '';
    var cellCount = Board.rows * Board.columns;
    for (var i = 0; i < cellCount; i++) {
      html = html + '<li></li>';
    }
    board.innerHTML = html;
  },
  nextStep: function (cells) {
    var boardHTML = Board.getCells();
    var currentBoard = GameOfLife.getBoardFromHTML(boardHTML, Board.columns);
    console.log(currentBoard);
  }
}