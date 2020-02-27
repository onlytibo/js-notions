const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
console.log("\n");
console.log("\n");
console.log("Est - ce que tous les livres ont été au moins empruntés une fois ?");
console.log("*****************************");

let totalBook = 0;
let rentedBook = 0;

books.forEach(book => {
  totalBook += 1;
  if (book.rented > 0) { 
    console.log(`${book.title} rented more than 1 time`); 
    rentedBook += 1;
  } else {
    console.log(`${book.title} never rented`);
  }
});

console.log(`======> ${rentedBook} on ${totalBook} books have been rented`);

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
console.log("\n");
console.log("\n");
console.log("Quel est livre le plus emprunté ?");
console.log("*****************************");

function compare( a, b ) {
  if ( a.rented < b.rented ){
    return -1;
  }
  if ( a.rented > b.rented ){
    return 1;
  }
  return 0;
}

books.sort(compare).reverse();

console.log(books[0]);
console.log(`======> Le livre le plus emprunté est : ${books[0].title}`);

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
console.log("\n");
console.log("\n");
console.log("Quel est le livre le moins emprunté ?");
console.log("*****************************");

function compare( a, b ) {
  if ( a.rented < b.rented ){
    return -1;
  }
  if ( a.rented > b.rented ){
    return 1;
  }
  return 0;
}

books.sort(compare);

console.log(books[0]);
console.log(`======> Le livre le moins emprunté est : ${books[0].title}`);

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
console.log("\n");
console.log("\n");
console.log("Trouve le livre avec l'ID: 873495 ;");
console.log("*****************************");

books.forEach(book => {
  if (book.id === 873495) { 
    console.log(`======> ${book.title} a l'ID ${book.id}`); 
  }
});


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
console.log("\n");
console.log("\n");
console.log("Supprime le livre avec l'ID: 133712 ;");
console.log("*****************************");

for (let book in books) {
  if (books[book].id === 133712) {
    delete books[book];
    console.log(books);
  }
}


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
console.log("\n");
console.log("\n");
console.log("Trie les livres par ordre alphabétique(sans celui avec l'ID 133712 car il est supprimé).");
console.log("*****************************");

function compare( a, b ) {
  if ( a.title < b.title ){
    return -1;
  }
  if ( a.title > b.title ){
    return 1;
  }
  return 0;
}

books.sort(compare);

console.log(books);