//Déclaration de l'array days.
let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
//Création de la balise virtuelle ul.
let ul = document.createElement("ul")

for (i = 0; i < 7; i++) {
    //Création de la balise virtelle li
    let li = document.createElement("li")
    //Liaison de days avec la liste li
    li.innerText = days[i]
    //Création d'une condition d'affichage en gras
    if (days[i] == "Samedi" || days[i] == "Dimanche") {
        li.style.fontWeight = "bold"
    } 
    //li accrochée à ul
    ul.append(li)
}
//ul accrochée à body
document.body.append(ul)
