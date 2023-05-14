import env from "./env.json" assert {type:"json"}

document.addEventListener("DOMContentLoaded", () => {
  const screenshotForm = document.getElementById("screenshotForm");
  const screenshotContainer = document.getElementById("screenshotContainer");
  const savedScreenshotsContainer = document.getElementById("savedScreenshots");

  screenshotForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const urlInput = document.getElementById("urlInput");
    const url = urlInput.value;

    // Generate the screenshot
    await generateScreenshot(url);
  });

  async function generateScreenshot(url) {
    const screenshotApiUrl = `https://website-screenshot6.p.rapidapi.com/screenshot?url=${encodeURIComponent(
      url
    )}&width=1920&height=1080&fullscreen=true`;
    const screenshotApiOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": env.RapidAPI_API_KEY,
        "X-RapidAPI-Host": "website-screenshot6.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(screenshotApiUrl, screenshotApiOptions);
      const screenshotData = await response.blob();

      // Display the generated screenshot
      const screenshotUrl = URL.createObjectURL(screenshotData);
      screenshotContainer.innerHTML = `<img src="${screenshotUrl}" alt="Generated Screenshot">`;

      // Save button
      const saveButton = document.createElement("button");
      saveButton.textContent = "Save Screenshot";
      saveButton.addEventListener("click", () => {
        saveScreenshot(url, screenshotData);
      });
      screenshotContainer.appendChild(saveButton);
    } catch (error) {
      console.error(error);
    }
  }

  async function saveScreenshot(url, screenshotData) {
    const crudApiUrl =
      `https://crudcrud.com/api/${env.CRUDCRUD_API_KEY}`;
    const crudApiOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, screenshotData }),
    };

    try {
      const response = await fetch(crudApiUrl, crudApiOptions);
      const savedScreenshot = await response.json();

      // Add the saved screenshot to the list
      const savedScreenshotItem = document.createElement("li");
      savedScreenshotItem.setAttribute(
        "data-screenshot-id",
        savedScreenshot._id
      );
      savedScreenshotItem.textContent = savedScreenshot.url;

      // Delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        deleteScreenshot(savedScreenshot._id);
        savedScreenshotItem.remove();
      });

      savedScreenshotItem.appendChild(deleteButton);
      savedScreenshotsContainer.appendChild(savedScreenshotItem);
    } catch (error) {
      console.error("Error saving screenshot:", error);
    }
  }

  async function deleteScreenshot(screenshotId) {
    const crudApiUrl = `https://crudcrud.com/api/${env.CRUDCRUD_API_KEY}/${screenshotId}`;
    const crudApiOptions = {
      method: "DELETE",
    };

    try {
      await fetch(crudApiUrl, crudApiOptions);
      console.log("Screenshot deleted successfully");
    } catch (error) {
      console.error("Error deleting screenshot:", error);
    }
  }
});
