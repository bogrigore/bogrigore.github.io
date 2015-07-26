var Critter = [];

xmlParse = function(xml) {
	var i = 0;
	$(xml).find("critter").each(function() {
		
		Critter[i]={
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
		success: xmlParse,
		async: false,
		error: function(jqxhr,textStatus,errorThrown){console.log(jqxhr);consolelog(textStatus);console.log(errorThrown);}
		
	});		






