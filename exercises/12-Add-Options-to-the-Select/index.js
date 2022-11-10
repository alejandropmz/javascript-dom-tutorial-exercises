let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

let countriesSelect = document.getElementById("mySelect");


for (let i = 0; i < countries.length; i++){
    
    let element = document.createElement("option")
    element.append(countries[i])
    countriesSelect.appendChild(element)
}

function alertNation(){
    alert()
}