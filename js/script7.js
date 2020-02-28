let sentence = "";

const answer = (sentence) => {
  while (sentence !== "exit") {
    sentence = prompt("Qu'est-ce que tu as à me dire ? (tape \"exit\" pour terminer)");


    if (sentence == 0) {
      console.log(sentence);
      console.log("Bot : t'es en PLS ?"); 
    } else if (sentence.endsWith("?")) {
      console.log(sentence);
      console.log("Bot : Ouais Ouais...");
    } else if (sentence === sentence.toUpperCase()) {
      console.log(sentence);
      console.log("Bot : Pwa, calme-toi...");
    } else if (sentence.toLowerCase().includes("fortnite")) {
      console.log(sentence);
      console.log("Bot : On s' fait une partie soum-soum ?");
    } else {
      console.log(sentence);
      console.log("Bot : balek.");
    }

  }
}
console.log(answer(sentence));