
let num4 = "Four"; // creo las variables para darle dinamismo al ejercicio
let num5 = "Five"; // y poder hacer que momentaneamente se continúe la secuencia
let num6 = "Six"; // en string
let num7 = "Seven";
let num8 = "Eight";
let num9 = "Nine";



let createButton = document.getElementById("superDuperButton"); // hago el llamado al
// button con el id

let counter = 0; // creo un contador para poder comparar las variables de los string
//  con el orden en base a las listas

createButton.addEventListener("click", function(){ // creo la funcion que se va a 
	// ejecutar cuando se afectúe el click en el boton antes llamado

	counter++ // aumento los valores de contador para ir acorde al anexado de li

	let addItem = document.getElementById("myList"); // como en necesario para el ejercicio
	// agregar elementos a una lista, hago el llamado de la lista con su id

	let added = document.createElement("li"); // creo los elementos que componen la lista
	// (li) 

	// a la misma lista added le agrego el innerHTML para poder pasarle el valor que
	// se le va a agregar a la ul mayor

	if (counter == 1){ // aqui condiciono al contador para poder darle el dinamismo a la pagina
		// para que cuando sea un determinado numero se coloque el string correspondiente
		added.innerHTML = `${num4} element`
	}
	if (counter == 2){
		added.innerHTML = `${num5} element` // concateno las variables donde tengo los string7
		// con la palabra element para seguir la secuencia
	}
	if (counter == 3){
		added.innerHTML = `${num6} element`
	}
	if (counter == 4){
		added.innerHTML = `${num7} element`
	}
	if (counter == 5){
		added.innerHTML = `${num8} element`
	}
	if (counter == 6){
		added.innerHTML = `${num9} element and... this is over for me... this now is automatic count..`
	} // en este if paro ya la secuencia con un msj especifico

	if (counter > 6){
		added.innerHTML = `element number ${counter + 3}th` // aqui ya se genera automatico
	}

	

	addItem.appendChild(added) // addItem que es que es nuestro elemento ul mayor
	// se comienza a completar con el added que es la <li> con su respectivo mensaje
		// esto se ejecuta cada vez que se hace click, cumpliendo con el requisito 
		// del ejercicio.
})