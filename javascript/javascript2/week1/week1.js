// * Find and count the Danish letters
const danishLetters = ["æ", "ø", "å"];
const text = "This is a string with some Danish letters: æ, ø, å";
let danishLetterCount = 0;
for (let i = 0; i < text.length; i++) {
  if (danishLetters.includes(text[i])) {
    danishLetterCount++;
  }
}
console.log(
  `The total number of Danish letters in the string is ${danishLetterCount}.`
);
// * Spirit animal name generator
const nameInput = document.getElementById("name-input");
const generateButton = document.getElementById("generate-button");
const spiritAnimal = document.getElementById("spirit-animal");
const spiritAnimals = [
  "The Snow Leopard",
  "The Fullmoon Wolf",
  "The Golden Eagle",
  "The Night Owl",
  "The Wise Owl",
  "The Majestic Lion",
  "The Mystic Unicorn",
  "The Graceful Swan",
  "The Playful Dolphin",
  "The Loyal Dog",
];
// Add an event listener to the button
generateButton.addEventListener("click", () => {
  const name = nameInput.value;
  const randomIndex = Math.floor(Math.random() * spiritAnimals.length);
  const spiritAnimalName = spiritAnimals[randomIndex];
  spiritAnimal.textContent = `${name} - ${spiritAnimalName}`;
});
