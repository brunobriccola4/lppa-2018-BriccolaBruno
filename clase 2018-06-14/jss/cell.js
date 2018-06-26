var Cell = {
  //toggle: es como un switch entre 2 valores, estado opuesto al actual
  toggle: function (evt) {
    console.log(evt);
    var cell = evt.target;
    if(cell.className === 'alive') {
      cell.className = '';
    }
    else{
      cell.className = 'alive';
    }
    //console.dir para ver las propiedades del elemento
    console.dir(cell);
  }
}