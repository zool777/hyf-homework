// A future age calculator:-
let yearOfBirth = 1987;
yearFuture = 2027;
age = yearFuture - yearOfBirth;
console.log(
  `You Will Be ${age} years old in ${yearFuture}, don't upset you Still young!`
);
// A dog age calculator:-

let dogYearOfBirth = 2017;
dogYearFuture = 2027;
dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = dogYear;

if (shouldShowResultInDogYears!==true) {
  console.log(
    `Your dog will be ${dogYear * 7} dog years old in ${dogYearFuture}`
  );
} else {
  console.log(
    `Your dog will be ${dogYear} human years old in ${dogYearFuture}`
  );
}
// Housey pricey (A house price estimator"Peter")
let width = 8;
height = 10;
depth = 10;
gardenSizeInM2 = 100;
volumeInMeters = width * depth * height;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
SalePrice = 2500000;
console.log(housePrice); //actual Price
const actualPrice =
  SalePrice > housePrice
    ? console.log("Peter is paying more than real Price.")
    : console.log("Peter is get Good Price.");

// Housey pricey (A house price estimator"Julia")
width = 5;
height = 8;
depth = 11;
gardenSizeInM2 = 70;
volumeInMeters = width * depth * height;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
SalePrice = 1000000;
console.log(housePrice); //actual Price
if (SalePrice < housePrice) {
  console.log("Julia's paying too little.");
} else {
  console.log("Julia is't paying too little.");
}

// Startup name generator
const firstWords = [
  "Mosic",
  "Opera",
  "Hard",
  "Awesome",
  "Nice",
  "Amazing",
  "Draw",
  "zeal",
  "Odor",
  "Live",
];
const secondWords = [
  "Hello",
  "Attention",
  "Cashew",
  "Kind",
  "Yacht",
  "Outstanding",
  "Utterly",
  "Rhythm",
  "Future",
  "Copenhagen",
];
const fristSecondWords = firstWords.concat(secondWords);
randomNumber = Math.floor(Math.random() * 10);
startupName = `${firstWords[randomNumber]} ${secondWords[randomNumber]}`;

for (let i = fristSecondWords.length; i > 0; i--) {
  let randomNumber = Math.floor(Math.random() * 10);
  let all = fristSecondWords[i];
  fristSecondWords[i] = fristSecondWords[randomNumber];
  fristSecondWords[randomNumber] = all;
}

console.log(fristSecondWords);
// console.log(fristSecondWords);
console.log(secondWords);
console.log(
  `The startup:- ${startupName} Contains ${startupName.length} Characters`
);
