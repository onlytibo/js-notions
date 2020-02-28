// Un prompt s'affiche avec la question suivante
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
let n = -1
const factorial = (n) => { 
  return (n != 1) ? n * factorial(n - 1) : 1;
}

while (n <= 0) {
  n = prompt("De quel nombre veux-tu calculer la factorielle ?");
  if (n > 0) {
    console.log(`Le résultat est : ${factorial(n)}`);
    break;
  }
  console.log("Mets un chiffre positif please");
}


