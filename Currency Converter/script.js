const form = document.querySelector("form");
const amountInput = document.querySelector(".amount input");
const fromSelect = document.querySelector("select[name='from']");
const toSelect = document.querySelector("select[name='to']");
const msg = document.querySelector(".msg");

const countryList = {
  USD: "US",
  INR: "IN",
  EUR: "DE", 
  GBP: "GB",
  AUD: "AU",
  CAD: "CA",
  JPY: "JP",
  CNY: "CN",
  RUB: "RU",
  AED: "AE",
  SAR: "SA",
  SGD: "SG",
  ZAR: "ZA",
};


const dropdowns = document.querySelectorAll(".dropdown select");

for (let select of dropdowns) {
  for (let currencyCode in countryList) {
    let option = document.createElement("option");
    option.value = currencyCode;
    option.innerText = currencyCode;
    select.append(option);
  }
}

dropdowns[0].value = "USD";
dropdowns[1].value = "INR";

const updateFlag = (element) => {
  let currencyCode = element.value;
  let countryCode = countryList[currencyCode];
  let img = element.parentElement.querySelector("img");

  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
};

for (let select of dropdowns) {
  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}

const swapIcon = document.querySelector(".fa-arrow-right-arrow-left");

swapIcon.addEventListener("click", () => {
  let temp = dropdowns[0].value;
  dropdowns[0].value = dropdowns[1].value;
  dropdowns[1].value = temp;

  updateFlag(dropdowns[0]);
  updateFlag(dropdowns[1]);
});

form.addEventListener("submit", async (e) => {
  e.preventDefault(); 

  let amount = amountInput.value;
  if (amount === "" || amount <= 0) {
    amount = 1;
    amountInput.value = "1";
  }

  const fromCurrency = fromSelect.value;
  const toCurrency = toSelect.value;

  const URL = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    const rate = data.rates[toCurrency];
    const finalAmount = (amount * rate).toFixed(2);

msg.innerHTML = `
  💱 <strong>${amount} ${fromCurrency}</strong>
  &nbsp;→&nbsp;
  <strong>${finalAmount} ${toCurrency}</strong>
`;
msg.className = "msg show";
  } catch (error) {
msg.innerText = "❌ Something went wrong. Try again.";
msg.className = "msg error show";
  }
  const time = new Date().toLocaleTimeString();
msg.innerHTML += `<br><small>Updated at ${time}</small>`;
  
});
