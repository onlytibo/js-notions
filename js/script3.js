let n = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

const generatePyramid = (n) => { 
  let hash = "#";
  let line = "";
  for (let i = 1; i <= n; i++) { // défini le nombre de ligne 

    for (let j = 1; j <= n - i; j++) { // défini le nombre d'espaces
      line = line + " ";
    }

    for (let k = 1; k <= i; k++) { // mets un hash à la fin de chaque line
      line = line + hash;
    }
    
    console.log(line);
    line = "";
  }
}

generatePyramid(n)
