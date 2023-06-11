const numbers = process.argv
  .slice(2)
  .map(Number)
  .filter((num) => !isNaN(num));

if (numbers.length === 0) {
  console.log("Please provide at least one valid number.");
} else {
  const sum = numbers.reduce((a, b) => a + b, 0);
  const average = sum / numbers.length;
  console.log(`Average: ${average}`);
}
