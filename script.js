function ShuffleArr(arr){
	// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
	// Fisher-Yates aka (Knuth)
	
	var current_index = arr.length, temporary_value, random_index;
	while (0 !== current_index) {
		random_index = Math.floor(Math.random() * current_index);
		current_index -= 1;
		
		temporary_value = arr[current_index];
		arr[current_index] = arr[random_index];
		arr[random_index] = temporary_value;
}};
function UpdateScore(s) {
	score+=s;
	$('#sky h2').addClass('score').text(score + 'p');
	};
	
	
function LoadAudio(arr) {
	for(i = 0; i < arr.length; i+=1){
		var sound_id = "sound" + i ; 
		var sound_src= arr[i].sound; 
		// var voice_id = "voice" +i;
		// var voice_src = arr[i].voice;
		
		var sound = '<audio id="' +sound_id+ '">' + '<source src="' + sound_src + '" type="audio/wav"></audio>';
		// var voice = '<audio id="' +voice_id+ '">' + '<source src="' + voice_src + '" type="audio/wav"></audio>';
		
		$(sound).appendTo('body');
		// $(voice).appendTo('body');
		arr[i].index = i;
	}

};


function DrawCritters(arr){
	$("#container").empty();
	
	for (i = 0; i < 4 ; i += 1){
	
	
	var btn = '<div id = "btn' + i + '"></div>';
	$(btn).appendTo("#container").addClass('critter').css({"background-image": "url(" + arr[i].pic + ")"});
	}
	seed = Math.floor(Math.random() * 3);
	
	
	for(i = 0; i < 4; i += 1) {
		
		if (i == seed){
			
			sound_Loop = setInterval(function() { 
			$("#sound"+arr[seed].index).prop('currentTime', 0).trigger('play');
				
	
			}, 3000);
			
			$("#btn" +seed).on("click", function() {
					clearInterval(sound_Loop);
					$("#sound"+arr[seed].index).trigger('pause');
					$("#clink").trigger('play');
					UpdateScore(10);
					ShuffleArr(Critter);
					DrawCritters(arr);
				});
		}
		else {
		 $("#btn" +i).on("click", function() {
			
			$("#wrong").trigger("play");
			UpdateScore(-3);
		});
		}
		
	}
};




var score = 0;


var main = function() {
	
	LoadAudio(Critter);
	
	DrawCritters(Critter);
	
	
	
};


$(document).ready(main);