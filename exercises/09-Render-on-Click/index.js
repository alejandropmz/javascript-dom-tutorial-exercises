let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	let HelloWorld = document.createElement("div");
	HelloWorld.style.background = "yellow";
	HelloWorld.innerHTML = "Hello World";
	
	document.body.appendChild(HelloWorld)

});

