var images = []; //The list of images the user clicks, in order.
var mainImage;
var imageSlots = [];
var startTime = 0;
var isStarted = false;
var timer;
var seenUrls = [];
var goal;
var startUrl;
var gifChain = [];

$(document).ready(function(){
	goal = getParameterByName('goal');
	if(goal == '' || goal.indexOf(' ') != -1){
		goal = 'cat';
	}
	document.getElementById('goal').innerHTML="You are looking for: " + goal;
	startUrl = getParameterByName('url');
	if(startUrl == ''){
		startUrl = 'https://media.giphy.com/media/iPTTjEt19igne/giphy.gif';
		//gifChain.push(startUrl);
	}
	
    $("#1").click(function(){
        //gifChain.push($("#1").attr('src'));
        picClick(1);
    });
    $("#2").click(function(){
    	//gifChain.push($("#2").attr('src'));
        picClick(2);
    });
    $("#3").click(function(){
    	//gifChain.push($("#3").attr('src'));
        picClick(3);
    });
    $("#4").click(function(){
    	//gifChain.push($("#4").attr('src'));
        picClick(4);
    });

    $("#1").mouseover(function() {
    	getGif(mainImage.src, 0);
    });

    $("#2").mouseover(function() {
    	getGif(mainImage.src, 1);
    });

    $("#3").mouseover(function() {
    	getGif(mainImage.src, 2);
    });

    $("#4").mouseover(function() {
    	getGif(mainImage.src, 3);
    });




    for(var i = 0; i < 4; i++){
		imageSlots[i] = document.getElementById((i+1).toString());
		imageSlots[i].src = 'static/q' + (i+1) + '.jpg';
	}

	mainImage = document.getElementById('main');
	mainImage.src = startUrl;
	seenUrls.push(mainImage.src);
	gifChain.push(mainImage.src);
	//getGifs(mainImage.src);
	// for debugging of win() method
	//win();
});

function picClick(index){
	//if(gifChain.length == 5) win();
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
	
	gifChain.push(mainImage.src);
	checkVictory(mainImage.src);
	//getGifs(mainImage.src);
}

function tick(){
	var d = new Date();
	var millis = d-startTime;
	var s = (millis / 1000).toFixed(2);
	document.getElementById('time').innerHTML=s;
}

function checkVictory(url) {
	$.ajax({
		url: $STATIC_ROOT + '/passLink',
		data: "data=" + url + "&checkVictory=1" + "&goal=" + goal,
		type: 'POST',
		success: function(response) {
			if (response["data"] == "won") {
				alert("Nice job, you won!");
				win();
				return;
			} else {
				return;
			}

		}
	});
}

function getGifs(url){
	$.ajax({
		url: $STATIC_ROOT + '/passLink',
		data: "data=" + url + "&number=4&goal=" + goal,
		type: 'POST',
		success: function(response) {
			if (response["data"] == "won") {
				win();
				return;
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
			getGifs(url);
		}
	});
}

function getGif(url, index){

	var checkString = 'static/q' + (index+1) + '.jpg';
	if (imageSlots[index].src.indexOf(checkString) == -1) {
		return;
	} else {
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

}

function win(){
	//alert("You win!");
	window.clearInterval(timer);
	var d = new Date();
	var millis = d-startTime;
	$.ajax({
		url: $STATIC_ROOT + '/win',
		data: 'time=' + millis + '&urls=' + gifChain,
		//data: 'time=' + s + '&urls=' + gifChain.join(' '),
		type: 'POST',
		success: function(response) {
			window.location.href=$STATIC_ROOT + response.redirect;
		},
		error: function(error) {
			
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