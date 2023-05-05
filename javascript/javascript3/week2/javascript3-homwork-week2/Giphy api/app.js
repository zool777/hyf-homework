const API_KEY = "OaG19WwiSmErWJe7q1FagPpJ3Re3otCH";
const searchButton = document.getElementById("search-button");
const searchTerm = document.getElementById("search-term");
const resultCount = document.getElementById("result-count");
const resultsContainer = document.querySelector(".results-container");

searchButton.addEventListener("click", searchGIFs);

async function searchGIFs() {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchTerm.value}&api_key=${API_KEY}&limit=${resultCount.value}`
    );
    const { data } = await response.json();
    resultsContainer.innerHTML = "";
    data.forEach((gif) => {
      const img = document.createElement("img");
      img.src = gif.images.original.url;
      resultsContainer.appendChild(img);
    });
  } catch (error) {
    console.error(error);
    resultsContainer.innerHTML =
      "<p>An error occurred while fetching GIFs.</p>";
  }
}
