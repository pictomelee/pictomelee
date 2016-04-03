var images = []; //The list of images the user clicks, in order.
var cats = ["https://media.giphy.com/media/QgcQLZa6glP2w/giphy.gif","https://media.giphy.com/media/l4KhYXYuv0HH0AExy/giphy.gif","https://media.giphy.com/media/r6uEVfPTT7PYk/giphy.gif","https://media.giphy.com/media/2xDY8blbVyc3S/giphy.gif","https://media.giphy.com/media/wDs4w9nojvmG4/giphy.gif","https://media.giphy.com/media/evAe2zNwDqamA/giphy.gif","https://media.giphy.com/media/LImE2WbJViyGI/giphy.gif","https://media.giphy.com/media/zunNjgGVFOi9G/giphy.gif","https://media.giphy.com/media/hl8EB6j2kjDWM/giphy.gif","https://media.giphy.com/media/oBlBIWmmuhdzW/giphy.gif","https://media.giphy.com/media/EvPbiBl3efxzW/giphy.gif","https://media.giphy.com/media/N74Z9WOMdnKvK/giphy.gif","https://media.giphy.com/media/JJ3k9jY2mi0ZG/giphy.gif","https://media.giphy.com/media/pWbSd03oTAbnO/giphy.gif","https://media.giphy.com/media/bT1bfX2D0VIJi/giphy.gif","https://media.giphy.com/media/ivelTBasMg67S/giphy.gif","https://media.giphy.com/media/3AkIiqu7vfriw/giphy.gif","https://media.giphy.com/media/7qD1odpQnVfR6/giphy.gif","https://media.giphy.com/media/wJb1Ie0huUCyI/giphy.gif","https://media.giphy.com/media/5KN6UqeDnyF1u/giphy.gif","https://media.giphy.com/media/2lCx5z6e652De/giphy.gif","https://media.giphy.com/media/5XblzuJO9uKje/giphy.gif","https://media.giphy.com/media/1UiLoPw0e0opO/giphy.gif","https://media.giphy.com/media/dWhp7Do60N8vC/giphy.gif","https://media.giphy.com/media/4XnL30fhVarrG/giphy.gif"];
var catLength=25;
var mainImage;
var imageSlots = [];

$(document).ready(function(){
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
    init();
});

function init(){
	for(var i = 0; i < 4; i++){
		imageSlots[i] = document.getElementById((i+1).toString());
		var index = Math.floor(Math.random() * catLength);
		imageSlots[i].src = cats[index];
	}
		var index = Math.floor(Math.random() * catLength);
		mainImage = document.getElementById('main');
		mainImage.src = cats[index];
}

function picClick(index){


	var newIndex = "#" + index.toString();
	var urlToSend = $(newIndex).attr('src');
	alert(urlToSend);

	$.ajax({
		url: $SCRIPT_ROOT + "/passLink",
		type: "POST",
		data: JSON.stringify({"gifUrl": urlToSend.toString() }),
		contentType: "application/json; charset=utf-8",
		// success: function(response) {
		// 	console.log(response);
		// },
		// error: function(error) {
		// 	console.log(error);
		// }
	});
}





