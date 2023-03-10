// const balance =13300;
// if (balance <= 0) {
//   console.log("Please deposit some money");
// } else if (balance > 0 && balance <= 1000) {
//   console.log("Your balance is looking okay");
// } else if (balance > 1000 && balance <= 3000) {
//   console.log("Your balance is looking good");
// } else if (balance > 3000 && balance <= 10000) {
//   console.log('Your balance is fantastic');
// }else if (balance > 10000) {
//   console.log('Your balance is AMAZING!');
// }


//*Event application*

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function getEventWeekday(date) {
  const eventDay = (new Date().getDay() + date) % 7;
  const eventWeekday = weekday[eventDay];
  return ` ${date}  ${eventWeekday}.`;
}
console.log(getEventWeekday(9));

// *Flight booking fullname function*

function GetFullname(firstName, surName, useFormalName) {
  this.firstName = firstName;
  this.surName = surName;
  this.FullName = () => `${this.firstName} ${this.surName}`;
  this.useFormalName = () =>
    useFormalName === true
      ? `Lord ${this.firstName} ${this.surName}`
      : `${this.firstName} ${this.surName}`;
}
const getFullname = new GetFullname("Jack", "jensen", true);
console.log(getFullname.FullName());
console.log(getFullname.useFormalName());

// *Weather wear*

function clothesToWear(temp) {
  if (temp <= 0) {
    return "Weather is Cold: Wear A winter Jacket.";
  } else if (temp > 0 && temp <= 10) {
    return "weather is Not too Cold: Wear sweatshirt.";
  } else if (temp > 10 && temp <= 20) {
    return "Weather is warm today: Wear Jeans.";
  } else {
    return "Weather is hot today: Wear T-shirt.";
  }
}
console.log(clothesToWear(12));

// *Student manager*

const class07Students = [];
function addStudentToClass(studentName) {
  if (class07Students.length < 6 || studentName === "") {
    if (class07Students.includes(studentName)) {
      console.log(true);
    } else if (studentName === "") {
      console.log("Note: Add Student Name");
    }
    // else if(studentName !== "" ){
    //   console.log(studentName.replace('Queen','President') )
    // }
    else {
      console.log(class07Students.push(studentName));
    }
  }
  else {
    console.log(`Error : Not more than 7 student`);
  }
}
addStudentToClass("");
addStudentToClass("pilal");
addStudentToClass("lila");
addStudentToClass("lubna");
addStudentToClass("sarah");
addStudentToClass("Hansen");
addStudentToClass("Sumar");
addStudentToClass("Kate");
addStudentToClass("Salim");
addStudentToClass("President");

function getNumberOfStudents() {
  console.log(class07Students.push("Queen"));
  console.log(class07Students.join("-"));
  console.log(class07Students);
}
getNumberOfStudents();
