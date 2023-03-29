let sectionForm = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let exchangeRateElement = document.querySelector(".js-exchangeRate");
let resultElement = document.querySelector(".js-result");
let selectElement = document.querySelector(".js-select");
let bodyBackgroud = document.querySelector(".js-body");
let bodyButtonToggleIcon = document.querySelector(".js-body__buttonToggleIcon");
let bodyButtonToggleTheme = document.querySelector(
  ".js-body__buttonToggleTheme"
);

selectElement.addEventListener("input", (event) => {
  let selectValue = selectElement.value;

  switch (selectValue) {
    case "USD":
      exchangeRateElement.value = "4.50";
      break;
    case "EURO":
      exchangeRateElement.value = "4.70";
      break;
  }
});

sectionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = amountElement.value;
  let exchangeRate = exchangeRateElement.value;
  let result = amount * exchangeRate;

  resultElement.value = result.toFixed(2);
});

bodyButtonToggleTheme.addEventListener("click", () => {
  bodyBackgroud.classList.toggle("body--dark");

  bodyButtonToggleIcon.innerText = bodyBackgroud.classList.contains(
    "body--dark"
  )
    ? "☀"
    : "🌤";
});

// amountElement.focus();
