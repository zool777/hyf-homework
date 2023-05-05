console.log("Hello");
document.addEventListener("DOMContentLoaded", function () {
  // Get the form and submit button
  const form = document.querySelector("form");
  const submitBtn = form.querySelector("button[type='submit']");

  // Add a listener for the form submit event
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the input values
    const name = document.querySelector("#inputName").value;
    const message = document.querySelector(
      "textarea[name='contact-message']"
    ).value;
    const mood = calculateMood(message);

    if (mood === "happy") {
      showAlert(
        `Hey there ${name}. You are clearly happy! :)`,
        "alert-success"
      );
    } else if (mood === "sad") {
      showAlert(`I'm sorry ${name}. You are clearly sad! :(`, "alert-primary");
    } else {
      showAlert(
        `It's hard to tell how you're feeling, ${name}. :|`,
        "alert-warning"
      );
    }
  });

  function calculateMood(message) {
    // Convert the message to lowercase and remove whitespace
    const cleanedMessage = message.toLowerCase().trim();

    // Check for keywords indicating happiness or sadness
    if (cleanedMessage.includes("happy") || cleanedMessage.includes("great")) {
      return "happy";
    } else if (
      cleanedMessage.includes("sad") ||
      cleanedMessage.includes("upset")
    ) {
      return "sad";
    } else {
      return "neutral";
    }
  }
  function showAlert(message, className) {
    // Create the alert element
    const alert = document.createElement("div");
    alert.className = `alert ${className} alert-dismissible fade show`;
    alert.role = "alert";
    alert.textContent = message;

    // Create the close button
    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "close";
    closeBtn.dataset.dismiss = "alert";
    closeBtn.setAttribute("aria-label", "Close");

    // Create the close icon
    const closeIcon = document.createElement("span");
    closeIcon.setAttribute("aria-hidden", "true");
    closeIcon.innerHTML = "&times;";

    // Add the close icon to the button and the button to the alert
    closeBtn.appendChild(closeIcon);
    alert.appendChild(closeBtn);

    // Insert the alert before the form
    form.insertAdjacentElement("beforebegin", alert);
  }
});
