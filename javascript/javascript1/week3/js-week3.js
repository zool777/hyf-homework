// *Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
const removeAhmed = names.filter((e) => e.names === "Ahmed");
names.splice(1, 1);
console.log(names);
// *When will we be there??
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
  getDistance: function (distancation, speed) {
    let time = (distancation / speed) * 60;
    let hours = Math.floor(time / 60);
    let minutes = time % 60;
    return `${hours} hours and ${minutes.toFixed()} minutes`;
  },
};
const travelTime = travelInformation.getDistance(432, 50);
console.log(travelTime);

// *Series duration of my life
const seriesDurations = [
  {
    title: "Prison Break",
    days: 2,
    hours: 18,
    minutes: 0,
  },
  {
    title: "Breaking Bad",
    days: 1,
    hours: 22,
    minutes: 29,
  },
  {
    title: "Pablo Escobar",
    days: 3,
    hours: 12,
    minutes: 45,
  },
];
const mySeries = [];
seriesDurations.forEach((kino) => {
  const MoviesName = kino.title;
  const daysOfYear = kino.days / 365;
  const hoursOfYear = kino.hours / 8760;
  const minutesOfYear = kino.minutes / 525600;
  const wasteTime = (daysOfYear + hoursOfYear + minutesOfYear).toFixed(3);
  const pushTotal = daysOfYear + hoursOfYear + minutesOfYear;
  console.log(`${MoviesName} took ${wasteTime}% of my life`);
  mySeries.push(pushTotal);
});
const totalWastingTime = mySeries.reduce((accumulator, clearInterval) => {
  return accumulator + clearInterval;
}, 0);
console.log(`In total that is: ${totalWastingTime}`);

//* Save a note
const notes = [];
function saveNote(content, id) {
  notes.push({ content, id });
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

//* Get a note
function getNote(id) {
  for (let i in notes) {
    if (id === notes[i].id) {
      return notes[i];
    }
  }
}
const firstNote = getNote(1);
console.log(firstNote);

//* Log out notes
function logOutNotesFormatted() {
  notes.forEach((x) =>
    console.log(
      `The note with id: ${x.id}, has the following note text: ${x.content}`
    )
  );
}

logOutNotesFormatted();
