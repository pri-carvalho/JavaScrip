const dateNaissance = new Date(1984, 9, 22)

function calculateAge() {
  const ageDifMs = Date.now() - dateNaissance.getTime()
  const ageDate = new Date(ageDifMs)

  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

const nom = 'Philippe Fleury'
const sexe = 'H'
const situationParticuliere = false
const age = calculateAge()

let recommandationAlcoolRespectee = true
const journeesAlcool = []
let maxAlcoolSemaine = 0
let maxAlcoolJour = 0
const nbJours = parseInt(prompt('Combien de jours voulez-vous analyser ?'), 10)

for (let i = 0; i < nbJours; i++) {
  journeesAlcool.push(parseInt(prompt(`Entrez le nombre de consommation d'alcool du ${i + 1}º jour`), 10))
}
rapport()

// functions

function nomIverse() {
  const espaceVide = nom.indexOf(' ')
  const prenom = nom.substring(0, espaceVide)
  const nomDeFamille = nom.substring(espaceVide + 1)

  if (espaceVide == -1) {
    return nomDeFamille
  }
  return (`${nomDeFamille}, ${prenom}`)
}
function sommaConsommation() {
  let sommaAlcoolParJour = 0

  for (let i = 0; i < journeesAlcool.length; i++) {
    sommaAlcoolParJour += journeesAlcool[i]
  }

  return sommaAlcoolParJour
}

function moyenneParJour() {
  if (isNaN(sommaConsommation() / journeesAlcool.length)) {
    return 0;
  }
  return (sommaConsommation() / journeesAlcool.length).toFixed(2)
}

function consommationUneSemaine() {
  if ((moyenneParJour() * 7) > maxAlcoolSemaine) {
    recommandationAlcoolRespectee = false
  }
  return (moyenneParJour() * 7).toFixed(2)
}

function recommandation() {
  if (situationParticuliere == true) {
    maxAlcoolSemaine = 0
    maxAlcoolJour = 0
  } else if (sexe == 'H') {
    maxAlcoolSemaine = 15
    maxAlcoolJour = 3
  } else {
    maxAlcoolSemaine = 10
    maxAlcoolJour = 2
  }
}

function maximumEnUneJournee() {
  if ((Math.max.apply(null, journeesAlcool)) > maxAlcoolJour) {
    recommandationAlcoolRespectee = false
  }
  return Math.max.apply(null, journeesAlcool)
}

function ratioDeJourneeExcedants() {
  let nbJoursExcedant = 0

  for (let i = 0; i < journeesAlcool.length; i++) {
    if (journeesAlcool[i] > 0 && journeesAlcool[i] > maxAlcoolJour) {
      nbJoursExcedant++
    }
  }
  return ((nbJoursExcedant / journeesAlcool.length) * 100).toFixed(2);
}

function ratioDeJourneeSansAlcool() {
  let nbJoursZero = 0
  for (let i = 0; i < journeesAlcool.length; i++) {
    if (journeesAlcool[i] == 0) {
      nbJoursZero++
    }
  }
  return ((nbJoursZero / journeesAlcool.length) * 100).toFixed(2)
}

function recommandationRespectee() {
  if (recommandationAlcoolRespectee == true) {
    return ('Vous respectez les recommandations.')
  }
  return ('Vous ne respectez pas les recommandations.')
}

function rapport() {
  
  recommandation()
  const maintenant = new Date()

  document.write(`${maintenant.getDate()}/${maintenant.getMonth()}/${maintenant.getFullYear()} à ${
    maintenant.getHours()}:${maintenant.getMinutes()}:${maintenant.getSeconds()}<br>`)
  document.write(`${nomIverse()}<br>`)
  document.write(`Âge: ${calculateAge()} année(s)` + '<br>')
  document.write(`Moyenne par jour: ${moyenneParJour()}<br>`)
  document.write(`consumation sur une semaine: ${consommationUneSemaine()} Recommandation: ${maxAlcoolSemaine}<br>`)
  document.write(`Maximum en une journée: ${maximumEnUneJournee()} Recommandation: ${maxAlcoolJour}<br>`)
  document.write(`Ratio de journée excédants: ${ratioDeJourneeExcedants()}%` + '<br>')
  document.write(`Ratio de journée sans alcool: ${ratioDeJourneeSansAlcool()}%` + '<br>')
  document.write(recommandationRespectee())
}
