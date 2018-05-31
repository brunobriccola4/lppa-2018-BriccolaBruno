console.log('Hola');

var changeColor = function (li) {
	li.style.backgroundColor = '#F00'
}

window.onload = function () {
	var btnPlay = document.getElementById('play');
	btnPlay.onclick = function (){
	var liAlives = document.getElementsByClassName('alive')
	for (var i = liAlives.length - 1; i >= 0; i--) {
		changeColor(liAlives[i])
	}
	}
}