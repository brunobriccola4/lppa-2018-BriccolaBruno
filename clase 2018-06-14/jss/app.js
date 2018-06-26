console.log("10");

var play = function () {
  var cells = Board.getAliveCells();
  Board.updateCells(cells);
}

var init =  function () {
    Game.init();
    Game.start();
  // var btnPlay = Board.getPlayButtton();
  // btnPlay.onclick = play;
}

window.onload = init;