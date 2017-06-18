

var audio = new Audio('Perfect.mp3');

function start() {
	audio.play();
}

function stop() {
	audio.pause();
	audio.currentTime = 0;
}

var api_key = "SQOM2E1BW2R6JLNG"
var endPoint = "https://freemusicarchive.org/api/get/curators.xml?api_key="+api_key;
var albumEndPoint = "https://freemusicarchive.org/api/get/albums.xml?api_key="+api_key;

$(document).ready(function() {

	load();


})

function album(title,url,image) {
	this.title = title;
	this.url = url;
	this.image = image;
}

function load() {
	$.ajax({
	
		type:"GET",
		url: albumEndPoint,
			// dataType:'JSON',
		success: function(result) {
			console.log(result)
			var json = $.parseJSON(result);
			console.log(json)
	
		}
	});
}