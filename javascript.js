// this is the vanilla javascript version
// the jquery version is located at jquery.js

let btnlength = document.querySelectorAll('.drum').length;

for(let i = 0; i < btnlength; i++) {
	let btn = document.querySelectorAll('.drum')[i];
	btn.addEventListener('click', btnFunction);
}


function btnFunction() {
	mySound(this.innerHTML)

  buttonAnimation(this.innerHTML);
}

document.addEventListener('keypress', keyFunction);

function keyFunction(event) {
	mySound(event.key)

  buttonAnimation(event.key);
}

function mySound(sound) {

	switch(sound) {
		case('w'):
		let tom4 = new Audio('sounds/w.mp3')
		tom4.play();
		break;

		case('a'):
		let kickBass = new Audio('sounds/a.mp3')
		kickBass.play();
		break;

		case('s'):
		let tom2 = new Audio('sounds/s.mp3')
		tom2.play();
		break;

		case('d'):
		let tom1 = new Audio('sounds/d.mp3')
		tom1.play();
		break;

		case('j'):
		let snare = new Audio('sounds/j.mp3')
		snare.play();
		break;

		case('k'):
		let tom3 = new Audio('sounds/k.mp3')
		tom3.play();
		break;

		case('l'):
		let crash = new Audio('sounds/l.mp3')
		crash.play();
		break;

		default: console.log('nothing')
	}

}

// this is a shorter alternative to switch statement

// function mySound(sound) {
// 	let audio = new Audio ('sounds/' + sound + '.mp3' )
// 	audio.play();
// }

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("#" + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}