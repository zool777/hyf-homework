function validateForm() {
  let x = document.forms["myForm"]["click"].value;
  if (x == "") {
    alert("Let's go grab some coffee");
    return false;
  }
}
