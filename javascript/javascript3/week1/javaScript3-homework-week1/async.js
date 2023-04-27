navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    const videoElement = document.createElement("video");
    videoElement.srcObject = stream;
    videoElement.play();
    document.body.appendChild(videoElement);
  })
  .catch((error) => console.log(error));

// Get battery info
if ("getBattery" in navigator) {
  navigator
    .getBattery()
    .then((battery) => {
      const batteryElement = document.createElement("h2");
      batteryElement.textContent = `Battery level: ${battery.level * 100}%`;
      document.body.appendChild(batteryElement);
    })
    .catch((error) => console.log(error));
}

// Request USB device
const vendorId = 0x1234;
const productId = 0xabcd;
navigator.usb
  .requestDevice({ filters: [{ vendorId, productId }] })
  .then((device) => {
    console.log("Device found:", device.productName);
  })
  .catch((error) => console.log(error));

// Convert currency
const apiEndpoint = "https://open.er-api.com/v6/latest/USD";
const amountInput = document.getElementById("amount");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const resultInput = document.getElementById("result");
let exchangeRates = {};

function fetchCurrencies() {
  return fetch(apiEndpoint)
    .then((response) => response.json())
    .then((data) => {
      exchangeRates = data.rates;
      return Object.keys(exchangeRates);
    })
    .catch((error) => console.log(error));
}

function populateDropdowns(currencies) {
  currencies.forEach((currency) => {
    const optionFrom = document.createElement("option");
    optionFrom.value = currency;
    optionFrom.textContent = currency;
    fromSelect.appendChild(optionFrom);

    const optionTo = document.createElement("option");
    optionTo.value = currency;
    optionTo.textContent = currency;
    toSelect.appendChild(optionTo);
  });
}

function convertCurrency() {
  const amount = amountInput.value;
  const from = fromSelect.value;
  const to = toSelect.value;
  const rate = exchangeRates[to] / exchangeRates[from];
  const result = amount * rate;
  resultInput.value = result.toFixed(2);
}

Promise.resolve()
  .then(fetchCurrencies)
  .then(populateDropdowns)
  .then(() => {
    fromSelect.value = "EUR";
    toSelect.value = "DKK";
    convertCurrency();
  });

amountInput.addEventListener("input", convertCurrency);
fromSelect.addEventListener("change", convertCurrency);
toSelect.addEventListener("change", convertCurrency);
