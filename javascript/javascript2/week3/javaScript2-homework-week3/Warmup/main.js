// Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
setTimeout(function () {
  console.log("Call after 2.5 seconds");
}, 2500);
// Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.
function logAfterDelay(delay, stringToLog) {
  setTimeout(function () {
    console.log(stringToLog);
  }, delay * 1000);
}
logAfterDelay(3, "Hello, Jasmine!");
logAfterDelay(5, "Super!");
logAfterDelay(2, "How Your Mood today?");
// Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function () {
  logAfterDelay(5, "Called after 5 seconds");
});
// Create functions 
function logEarth() {
  console.log("Earth");
}
function logSaturn() {
  console.log("Saturn");
}
function logPlanet(planetLogFunction) {
  planetLogFunction();
}
logPlanet(logEarth); // Logs 'Earth'
logPlanet(logSaturn); // Logs 'Saturn'
//Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api
const logLocationButton = document.getElementById("logLocationButton");
let map;
logLocationButton.addEventListener("click", function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      console.log("Latitude: " + latitude + ", Longitude: " + longitude);
      let latLng = new google.maps.LatLng(latitude, longitude);
      if (!map) {
        map = new google.maps.Map(document.getElementById("map"), {
          center: latLng,
          zoom: 13,
        });
      } else {
        map.setCenter(latLng);
      }
      let marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: "You are here!",
      });
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
});
// Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions
function runAfterDelay(delay, callback) {
  setTimeout(callback, delay * 1000);
}
runAfterDelay(3, function () {
  console.log("This callback function was called after 3 seconds");
});

runAfterDelay(5, function () {
  console.log("This callback function was called after 5 seconds");
});

const myCallback = function () {
  console.log("This is a callback function that was assigned to a variable");
};
runAfterDelay(2, myCallback);
// Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"
let lastClickTime = 0;
document.addEventListener("click", function () {
  let currentTime = new Date().getTime();
  if (currentTime - lastClickTime < 500) {
    console.log("double click!");
  }
  lastClickTime = currentTime;
});
// Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}
function tellFunnyJoke() {
  console.log(
    "Why did the tomato turn red? Because it saw the salad dressing!"
  );
}

function tellBadJoke() {
  console.log("What do you call a fake noodle? An impasta.");
}
jokeCreator(true, tellFunnyJoke, tellBadJoke);
jokeCreator(false, tellFunnyJoke, tellBadJoke);
// Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
const functionArray = [
  function () {
    console.log("This is the first function");
  },
  function () {
    console.log("This is the second function");
  },
  function () {
    console.log("This is the third function");
  },
];
for (let i = 0; i < functionArray.length; i++) {
  functionArray[i]();
}
// Create a function as a const and try creating a function normally. Call both functions. Read up on this if you are interested:
// Create function using const declaration
const myConstFunction = function () {
  console.log("This is a function created using a const declaration");
};
// Create function using regular function declaration
function myRegularFunction() {
  console.log(
    "This is a function created using a regular function declaration"
  );
}
// Call both functions
myConstFunction();
myRegularFunction();
// Create an object that has a key whose value is a function. Try calling this function.
const myObject = {
  myFunction: function () {
    console.log("This function is a value of a key in an object");
  },
};
myObject.myFunction();
