fetch("computers.json")
  .then((response) => response.json())
  .then((data) => {
    const computerList = document.querySelector("#computer-list");

    data.computers.forEach((computer) => {
      const computerCard = document.createElement("div");
      computerCard.className = "computer-card";

      const heading = document.createElement("h2");
      heading.textContent = `${computer.brand} ${computer.model}`;

      const screenSize = document.createElement("p");
      screenSize.textContent = `Screen Size: ${computer.screen_size}`;

      const processor = document.createElement("p");
      processor.textContent = `Processor: ${computer.processor}`;

      const ram = document.createElement("p");
      ram.textContent = `RAM: ${computer.ram}`;

      const storage = document.createElement("p");
      storage.textContent = `Storage: ${computer.storage}`;

      const price = document.createElement("p");
      price.className = "price";
      price.textContent = `Price: ${computer.price}`;

      computerCard.appendChild(heading);
      computerCard.appendChild(screenSize);
      computerCard.appendChild(processor);
      computerCard.appendChild(ram);
      computerCard.appendChild(storage);
      computerCard.appendChild(price);

      computerList.appendChild(computerCard);
    });
  });
