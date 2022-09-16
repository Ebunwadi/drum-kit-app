// this is the jquery version
// the vanilla javascript is located at javascript.js

$('.drum').click(function(){
	let sounds = $(this).attr('id')
	makeSound(sounds);
	buttonAnimation(sounds);
})

$(document).keypress(function(event){
	makeSound(event.key)
	buttonAnimation(event.key)
})

function makeSound(sound) {
	let audio = new Audio ('sounds/' + sound + '.mp3' )
	audio.play();
}

function buttonAnimation(animate) {
	$('#' + animate).addClass('pressed')

	setTimeout(function(){
		$('#' + animate).removeClass('pressed')
	}, 100)
}