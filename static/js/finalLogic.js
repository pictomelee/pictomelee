
$(document).ready(function(){

	tElement = document.getElementById('tFinal');
	gElement = document.getElementById('gFinal');
	var millis = $TIME;
	tElement.innerHTML=(millis / 1000).toFixed(2) + " seconds";
	//gElement.innerHTML=$CHAIN;
	
	var urls = $CHAIN.split(',');
	for (var i = 0; i < urls.length; i++){
		var newImg = document.createElement("img");
		var d  = document.createElement("div");
		newImg.src = urls[i];
		d.appendChild(newImg)
		gElement.appendChild(d);
		var line = document.createTextNode("|");
		var dLine  = document.createElement("div");
		dLine.appendChild(line)
		gElement.appendChild(dLine);
		var arrow = document.createTextNode("V");
		var dArrow  = document.createElement("div");
		dArrow.appendChild(arrow)
		gElement.appendChild(dArrow);
	}
	var newImg = document.createElement("img");
	var d  = document.createElement("div");
	newImg.src = urls[urls.length-1];
	d.appendChild(newImg)
	gElement.appendChild(d);
});
