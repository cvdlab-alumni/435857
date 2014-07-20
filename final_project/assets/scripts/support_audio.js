function Sound(name,volume_lvl,loop_setting) {

	//IMPORTANTE
    //setTimeout(function(){Sound("Bioshock_Advertisements",0.5,true);}, 5000);

	this.audio = document.createElement("audio");
	var source = document.createElement("source");
	var volume = document.getElementById("volume");
	
	source.src = "assets/sounds/" + name + ".mp3";
	audio.appendChild(source);
	
	audio.volume = volume_lvl;
	audio.loop = loop_setting;

	return audio;

}
