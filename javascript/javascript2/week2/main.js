const searchInput = document.getElementById("search");
const ratingInput = document.getElementById("rating");
const priceInput = document.getElementById("price");
const sort = document.getElementById("sort");
const products = getAvailableProducts();
const main = document.querySelector("main");

console.log("Script loaded");
console.log(products);
function renderProducts(productArr) {
  const listItems = productArr.map((product) => {
    return `
      <li>
        <h2>${product.name}</h2>
        <div>Price: ${product.price}</div>
        <div>Rating: ${product.rating}</div>
      </li>
    `;
  });
  const list = document.createElement("ul");
  list.innerHTML = listItems.join("");
  main.appendChild(list);
  return list;
}
renderProducts(products);

searchInput.addEventListener("input", () => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  if (filteredProducts.length > 0) {
    main.innerHTML = "";
    main.appendChild(renderProducts(filteredProducts));
  } else {
    main.innerHTML = "<p>No products found</p>";
  }
});

priceInput.addEventListener("input", () => {
  main.innerText = "";
  renderProducts(
    products.filter((product) => product.price <= priceInput.value)
  );
  if (!priceInput.value) {
    renderProducts(products);
  }
});

ratingInput.addEventListener("input", () => {
  main.innerText = "";
  renderProducts(
    products.filter((product) => product.rating >= ratingInput.value)
  );
  if (!ratingInput.value) {
    renderProducts(products);
  }
});

function sortProducts(sortOption) {
  let sortedProducts = [products];
  if (sortOption === "top-rated") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortOption === "alphabetical") {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === "cheap-first") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "expensive-first") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }
  return sortedProducts;
}
// Event listener for sorting dropdown
sort.addEventListener("change", () => {
  const sortOption = sort.value;
  const sortedProducts = sortProducts(sortOption);
  renderProducts(sortedProducts);
});
renderProducts(products);
