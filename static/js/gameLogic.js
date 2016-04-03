var images = []; //The list of images the user clicks, in order.
var cats = ["https://media.giphy.com/media/QgcQLZa6glP2w/giphy.gif","https://media.giphy.com/media/l4KhYXYuv0HH0AExy/giphy.gif","https://media.giphy.com/media/r6uEVfPTT7PYk/giphy.gif","https://media.giphy.com/media/2xDY8blbVyc3S/giphy.gif","https://media.giphy.com/media/wDs4w9nojvmG4/giphy.gif","https://media.giphy.com/media/evAe2zNwDqamA/giphy.gif","https://media.giphy.com/media/LImE2WbJViyGI/giphy.gif","https://media.giphy.com/media/zunNjgGVFOi9G/giphy.gif","https://media.giphy.com/media/hl8EB6j2kjDWM/giphy.gif","https://media.giphy.com/media/oBlBIWmmuhdzW/giphy.gif","https://media.giphy.com/media/EvPbiBl3efxzW/giphy.gif","https://media.giphy.com/media/N74Z9WOMdnKvK/giphy.gif","https://media.giphy.com/media/JJ3k9jY2mi0ZG/giphy.gif","https://media.giphy.com/media/pWbSd03oTAbnO/giphy.gif","https://media.giphy.com/media/bT1bfX2D0VIJi/giphy.gif","https://media.giphy.com/media/ivelTBasMg67S/giphy.gif","https://media.giphy.com/media/3AkIiqu7vfriw/giphy.gif","https://media.giphy.com/media/7qD1odpQnVfR6/giphy.gif","https://media.giphy.com/media/wJb1Ie0huUCyI/giphy.gif","https://media.giphy.com/media/5KN6UqeDnyF1u/giphy.gif","https://media.giphy.com/media/2lCx5z6e652De/giphy.gif","https://media.giphy.com/media/5XblzuJO9uKje/giphy.gif","https://media.giphy.com/media/1UiLoPw0e0opO/giphy.gif","https://media.giphy.com/media/dWhp7Do60N8vC/giphy.gif","https://media.giphy.com/media/4XnL30fhVarrG/giphy.gif"];
var catLength=25;
var mainImage;
var imageSlots = [];
var startTime = 0;
var isStarted = false;
var timer;
var seenUrls = [];
var goal;
var startUrl;
$(document).ready(function(){

	goal = getParameterByName('goal');
	startUrl = getParameterByName('url');
	
    $("#1").click(function(){
        picClick(1);
    });
    $("#2").click(function(){
        picClick(2);
    });
    $("#3").click(function(){
        picClick(3);
    });
    $("#4").click(function(){
        picClick(4);
    });

    for(var i = 0; i < 4; i++){
		imageSlots[i] = document.getElementById((i+1).toString());
	}
	mainImage = document.getElementById('main');
	mainImage.src = startUrl;
	seenUrls.push(mainImage.src);
	getGifs(mainImage.src);
});

function picClick(index){
	if (!isStarted){
		isStarted = true;
		var d = new Date();
		startTime = d.getTime();
		timer = setInterval(function(){ tick(); }, 100);
	}
	mainImage.src=imageSlots[index-1].src;
	
	for(var i = 0; i < 4; i++){
		imageSlots[i].src = 'static/q' + (i+1) + '.jpg';
	}
	getGifs(mainImage.src);
}

function tick(){
	var d = new Date();
	var millis = d-startTime;
	var s = (millis / 1000).toFixed(2);
	document.getElementById('time').innerHTML=s;
}

function getGifs(url){
	$.ajax({
		url: $STATIC_ROOT + '/passLink',
		data: "data=" + url + "&number=4&goal=" + goal,
		type: 'POST',
		success: function(response) {
			if (response["data"] == "won") {
				alert("You win!");
			} else {
				var gifs = response["data"].split(" ");
				for(var i = 0; i < 4; i++){
					if(seenUrls.indexOf(gifs[i]) == -1 && gifs[i] != ''){
						imageSlots[i].src = gifs[i];
						seenUrls.push(imageSlots[i].src);
					}else{
						getGif(url, i);
					}
				}

			}

		},
		error: function(error) {
			alert("There was an error connecting to the server.");
		}
	});
}
function getGif(url, index){
	alert(index);
	$.ajax({
		url: $STATIC_ROOT + '/passLink',
		data: "data=" + url + "&number=1&goal=" + goal,
		type: 'POST',
		success: function(response) {
			gif = response["data"];
			if(seenUrls.indexOf(gif) == -1 && gif != ''){
				imageSlots[index].src = gif;
				seenUrls.push(imageSlots[index].src);
			}else{
				getGif(url, index);
				return;
			}
			
		},
		error: function(error) {
			getGif(url, index);
			return;
		}
	});
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}