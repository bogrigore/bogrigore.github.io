var score = 0;

var main = function() {

	$('#dog-snd').trigger('load');
	$('#horse-snd').trigger('load');
	$('#cow-snd').trigger('load');
	$('#sheep-snd').trigger('load');
	$('#clink-snd').trigger('load');
	
	
	RandomButNot();
};

function RandomButNot(what) {
	
	seed = Math.random();
	if(what === "dog" 	&& (Math.floor(seed * 3) + 1  == 1)) {  Horse();} else
	if(what === "dog" 	&& (Math.floor(seed * 3) + 1  == 2)) {  Cow(); 	} else
	if(what === "dog" 	&& (Math.floor(seed * 3) + 1  == 3)) {  Sheep();} else
	if(what === "horse" && (Math.floor(seed * 3) + 1  == 1)) {  Dog(); 	} else
	if(what === "horse" && (Math.floor(seed * 3) + 1  == 2)) {  Cow();	} else
	if(what === "horse" && (Math.floor(seed * 3) + 1  == 3)) {  Sheep();} else
	if(what === "cow" 	&& (Math.floor(seed * 3) + 1  == 1)) {  Dog();  } else
	if(what === "cow" 	&& (Math.floor(seed * 3) + 1  == 2)) {  Horse();} else
	if(what === "cow" 	&& (Math.floor(seed * 3) + 1  == 3)) {  Sheep();} else
	if(what === "sheep" && (Math.floor(seed * 3) + 1  == 1)) {  Dog();	} else
	if(what === "sheep" && (Math.floor(seed * 3) + 1  == 2)) {  Horse();} else
	if(what === "sheep" && (Math.floor(seed * 3) + 1  == 3)) {  Cow();	} else
	if(Math.floor(seed * 4) + 1  == 1) {  Dog(); 						} else
	if(Math.floor(seed * 4) + 1  == 2) {  Horse(); 						} else
	if(Math.floor(seed * 4) + 1  == 3) {  Cow(); 						} else
	if(Math.floor(seed * 4) + 1  == 4) {  Sheep(); 						}; 
	}; 
	
function Dog() {
	
	var loop = setInterval(function() { 
	
	$('#dog-snd').trigger('play');
	
			}, 3000);
	
	$('#dog-btn').click(function() {
			clearInterval(loop);
			$('#dog-snd').prop('currentTime', 0).trigger('pause');
			$('#clink-snd').trigger('play');
			$('#dog-btn').off();
			UpdateScore();
			RandomButNot('dog');
			});

	
		
};

function Horse() {
	
	var loop = setInterval(function() { 
	
	$('#horse-snd').trigger('play');
	
			}, 3000);
	
	$('#horse-btn').click(function() {
			clearInterval(loop);
			$('#horse-snd').prop('currentTime', 0).trigger('pause');
			$('#clink-snd').trigger('play');
			$('#horse-btn').off();
			UpdateScore();
			RandomButNot('horse');
			});
};

function Cow() {
	
	var loop = setInterval(function() { 
	
	$('#cow-snd').trigger('play');
	
			}, 3000);
	
	$('#cow-btn').click(function() {
			clearInterval(loop);
			$('#cow-snd').prop('currentTime', 0).trigger('pause');
			$('#clink-snd').trigger('play');
			$('#cow-btn').off();
			UpdateScore();
			RandomButNot('cow');
			});
};

function Sheep() {
	
	var loop = setInterval(function() { 
	
	$('#sheep-snd').trigger('play');
	
			}, 3000);
	
	$('#sheep-btn').click(function() {
			clearInterval(loop);
			$('#sheep-snd').prop('currentTime', 0).triggerHandler('pause');
			$('#clink-snd').trigger('play');
			$('#sheep-btn').off();
			UpdateScore();
			RandomButNot('sheep');
			});
};

function UpdateScore() {
	score+=10;
	$('#sky h2').addClass('score').text(score + 'p');
	};

$(document).ready(main);