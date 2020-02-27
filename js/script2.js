// Un prompt s'affiche avec la question suivante
let n = prompt("De quel nombre veux-tu calculer la factorielle ?");
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
const factorial = (n) => { 
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(`Le résultat est : ${factorial(n)}`);


