var helloWorld = function(){
	var message = document.getElementById("helloWorld");
	message.setAttribute("class", "");
};

var showHelloWorldButton = document.getElementById("showHelloWorld");
showHelloWorldButton.addEventListener("click", helloWorld);

var helloway = function(){
	var message = document.getElementById("helloway");
	message.setAttribute("class", "");
};

var showhellowayButton = document.getElementById("showhelloway");
showhellowayButton.addEventListener("click", helloway);
