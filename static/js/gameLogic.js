var images = []; //The list of images the user clicks, in order.
var cats = ["http://giphy.com/gifs/cat-funny-QgcQLZa6glP2w","http://giphy.com/gifs/baseballhittingdrills-cat-funny-kitten-l4KhYXYuv0HH0AExy","http://giphy.com/gifs/dillonfrancis-dillion-francis-r6uEVfPTT7PYk","http://giphy.com/gifs/trolli-cat-lol-gif-lolz-2xDY8blbVyc3S","http://giphy.com/gifs/cat-funny-wDs4w9nojvmG4","http://giphy.com/gifs/cat-halloween-funny-evAe2zNwDqamA","http://giphy.com/gifs/cat-kitten-halloween-LImE2WbJViyGI","http://giphy.com/gifs/funny-gif-cat-animals-zunNjgGVFOi9G","http://giphy.com/gifs/cat-funny-gif-hl8EB6j2kjDWM","http://giphy.com/gifs/funny-gif-cat-animals-oBlBIWmmuhdzW","http://giphy.com/gifs/funny-gif-cat-animals-EvPbiBl3efxzW","http://giphy.com/gifs/funny-gif-cat-animals-N74Z9WOMdnKvK","http://giphy.com/gifs/cat-funny-animal-JJ3k9jY2mi0ZG","http://giphy.com/gifs/cat-animated-dog-pWbSd03oTAbnO","http://giphy.com/gifs/cat-gif-black-bT1bfX2D0VIJi","http://giphy.com/gifs/cat-funny-ivelTBasMg67S","http://giphy.com/gifs/cat-gif-lamula-3AkIiqu7vfriw","http://giphy.com/gifs/cat-funny-gif-7qD1odpQnVfR6","http://giphy.com/gifs/cat-funny-gatinho-wJb1Ie0huUCyI","http://giphy.com/gifs/cat-funny-gif-5KN6UqeDnyF1u","http://giphy.com/gifs/funny-gif-2lCx5z6e652De","http://giphy.com/gifs/cat-funny-gif-5XblzuJO9uKje","http://giphy.com/gifs/cat-kitty-bored-1UiLoPw0e0opO","http://giphy.com/gifs/coffee-cat-gif-funny-dWhp7Do60N8vC","http://giphy.com/gifs/funny-cat-gif-scared-fish-4XnL30fhVarrG"];
var catLength=25;
var mainImage;
var imageSlots = [];
init();

	
function init(){
	for(var i = 1; i < 5; i++){
		imageSlots[i] = document.getElementById(toString(i));
		var index = Math.floor((Math.random() * catLength);
		imageSlots[i].src = cats[index];
	}
	
}
