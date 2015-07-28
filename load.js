var critter = [];

var right_snd = new buzz.sound("content/audio/yay.wav");
var wrong_snd = new buzz.sound("content/audio/wrong.wav");

function xmlParse(xml) {
	var i = 0;
	$(xml).find("critter").each(function() {
		
		critter[i]={
		name:($(this).find("name").text()),
		pic:($(this).find("pic").text()),
		sound:($(this).find("sound").text()),
		voice:($(this).find("voice").text())
		
		};
		
		i++;
		});
		
	};
	
$.ajax({
		type: "GET",
		url: "/critters/critters.xml",
		dataType: "xml",
		async: false,
		error: function(textStatus){console.log("FATAL: critters.xml ");console.log(textStatus)},
		success: xmlParse,
		
		
	});		
console.log(critter);

for(i in critter){
	console.log(i);
	console.log(critter[i]);
};

for(i=0; i<critter.length; i++){
	$.ajax({
		type: "head",
		url: critter[i].sound,
		async: false,
		error: function() {
			critter.splice(i,1);
			i--;
			
			
		},
		success: function() {
			critter[i].sound = new buzz.sound(critter[i].sound);
		},
		
	});
};

for(i=0; i<critter.length; i++){
	$.ajax({
		type: "head",
		url: critter[i].voice,
		async: false,
		error: function() {
			critter[i].voice = undefined;
			
			
		},
		success: function() {
			critter[i].voice = new buzz.sound(critter[i].voice);
		},
		
	});
};




for(i=0; i<critter.length; i++){
	//console.log(i);
	console.log(critter[i]);
};







