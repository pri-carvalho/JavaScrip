//Priscila Carvalho
//TP1 - Diagnostique

let nome = prompt("Quel est votre nom?")
console.log(nome)

let voyage = prompt("Avez-vous voyagé en dehors du pays dans les 14 derniers jours? (oui/non)")
console.log(voyage)

let symptomes = prompt("Avez-vous des symptômes? (oui/non)")
console.log(symptomes)

let nbAge = prompt("Quel âge avez-vous? ")
let nbAgeEntier = parseInt(nbAge, 1)
console.log(nbAge)

let poids = prompt("Quel est votre poids (kg)?")
let poidsEntier = parseFloat(poids, 1)
console.log(poids)

const conditionAgeSymptomesRespectee = nbAge >= 65 && symptomes == "oui"
const conditionRetourVoyageSymptomesRespectee = voyage == "oui" && symptomes == "oui"
const conditionPoidsSymptomesRespectee =poids > 200 && symptomes == "oui"


if(conditionAgeSymptomesRespectee || conditionRetourVoyageSymptomesRespectee || conditionPoidsSymptomesRespectee){
    document.write( nome, ", il est recommandé de vous faire tester.")}
else {document.write( nome, ", vous n'avez pas à vous faire tester.")}

