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
	


function DrawCritters(arr){
	$("#container").empty();
	
	for (i = 0; i < 4 ; i += 1){
	
	
	var btn = '<div id = "btn' + i + '"></div>';
	$(btn).appendTo("#container").addClass('critter').css({"background-image": "url(" + arr[i].pic + ")"});
	$("#btn"+i).animate({"background-size":"180px"},1500);
	}
	seed = Math.floor(Math.random() * 3);
	
	
	for(i = 0; i < 4; i += 1) {
		
		if (i == seed){
			
			console.log(arr[seed]);
			sound_Loop = setInterval(function() { 
			arr[seed].sound.play();
				
	
			}, 3000);
			
			$("#btn" +seed).on("click", function() {
					clearInterval(sound_Loop);
					critter[i].sound.stop()
					right_snd.play();
					UpdateScore(10);
					ShuffleArr(critter);
					DrawCritters(critter);
				});
		}
		else {
		 $("#btn" +i).on("click", function() {
		
			$(this).animate({'top': '-3000px'}, 1000);
			wrong_snd.play();
			UpdateScore(-3);
		});
		}
		
	}
};




var score = 0;


var main = function() {
	
	
	DrawCritters(critter);
	
	
	
};


$(document).ready(main);