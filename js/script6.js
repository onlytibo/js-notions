
let firstARN = "CCGUCGUUGCGCUACAGC";
let secondARN = "CCUCGCCGGUACUUCUCG";

const converter = (arn) => {
  
  let arrAcids = [];

  arrARN = arn.match(/.{1,3}/g); // on coupe par tranche de 3 et on le place dans un ary

  arrARN.forEach(codon => {

    switch (codon) {
      case "UCU":
      case "UCC":
      case "UCA":
      case "UCG":
      case "AGU":
      case "AGC":
        arrAcids.push("Sérine");
        break;
      
      case "CCU":
      case "CCC":
      case "CCA":
      case "CCG":
        arrAcids.push("Proline");
        break;

      case "UUA":
      case "UUG":
        arrAcids.push("Leucine");
        break;

      case "UUU":
      case "UUC":
        arrAcids.push("Phénylalanine");
        break;

      case "CGU":
      case "CGC":
      case "CGA":
      case "CGG":
      case "AGA":
      case "AGG":
        arrAcids.push("Arginine");
        break;

      case "UAU":
      case "UAC":
        arrAcids.push("Tyrosine");
        break;

      default:
        arrAcids.push(codon);
        break;
    }
  });

  return arrAcids.join('-');
}

console.log(`ARN \"${firstARN}\" - Acids :`);
console.log(converter(firstARN));

console.log("\n");

console.log(`ARN \"${secondARN}\" - Acids :`);
console.log(converter(secondARN));