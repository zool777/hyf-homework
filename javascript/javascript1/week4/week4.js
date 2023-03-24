// *Vowel Count
function getCount(str) {
  const vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(getCount("abracadabra"));

// *Digit*Digit
function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((i) => i * i)
    .join("");
}
// *Highest and Lowest
function highAndLow(numbers) {
  var num = numbers.split(" ");
  var max = Math.max.apply(null, num);
  var min = Math.min.apply(null, num);
  return max + " " + min;
}
console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));

// *Voice assistant
let todo = [];
let name = "";
function getReply(command) {
  if (command.startsWith("Hello my name is")) {
    name = command.substring(17);
    return `Nice to meet you, ${name}!`;
  } else if (command === "What is my name?") {
    return `Your name is, ${name}.`;
  } else if (command.startsWith("Add ")) {
    const task = command.substring(4, 10);
    todo.push(task);
    return `${task} added to your todo list.`;
  } else if (command === "What is on my todo?") {
    return `You have ${todo.length} tasks on your todo list:\n${todo.join(
      "\n"
    )}`;
  } else if (command === "Remove last from my todo") {
    const task = todo.pop();
    return `${task} has been removed from your todo list.`;
  } else if (command === "What day is it today?") {
    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return `Today is ${today.toLocaleDateString("en-US", options)}.`;
  } else if (command.match(/(\d+) \* (\d+)/)) {
    const match = command.match(/(\d+) \* (\d+)/);
    const result = match[1] * match[2];
    return `The result of ${match[1]} * ${match[2]} is ${result}.`;
  } else if (command === "Set a timer for 4 minutes") {
    const time = command.slice(16, 17);
    setTimeout(() => {
      console.log("Timer done");
    }, 40000);
    return `Timer set to ${time} minutes`;
  } else {
    return "I'm sorry, I don't understand. Could you please try again?";
  }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove last from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("Set a timer for 4 minutes"));
