// Store the unit price separately
const phonePrice = document.getElementById("phonePrice").innerText;
const phonePriceNumber = parseFloat(phonePrice);
//
//
function buttonHandler(isIncrease) {
  const updatePhoneText = document.getElementById("updatePhoneText").value;
  const updatePhoneTextNumber = parseInt(updatePhoneText);
  console.log("Before:", updatePhoneTextNumber);
  //const totalPhone = updatePhoneTextNumber + 1;
  let totalPhone = updatePhoneTextNumber;
  if (isIncrease == true) {
    totalPhone = updatePhoneTextNumber + 1;
  }
  if (isIncrease == false && updatePhoneTextNumber > 0) {
    totalPhone = updatePhoneTextNumber - 1;
  }
  console.log("After:", totalPhone);
  document.getElementById("updatePhoneText").value = totalPhone;
  const totalPhonePrice = totalPhone * phonePriceNumber;
  document.getElementById("phonePrice").innerText = totalPhonePrice;
  calculateTotal();
}

// plus sign button event handler
const phonePlusBtn = document.getElementById("phonePlusBtn");
phonePlusBtn.addEventListener("click", function () {
  // const updatePhoneText = document.getElementById("updatePhoneText").value;
  // const updatePhoneTextNumber = parseFloat(updatePhoneText);
  // const totalPhone = updatePhoneTextNumber + 1;
  // document.getElementById("updatePhoneText").value = totalPhone;
  //const phonePrice = document.getElementById("phonePrice").innerText;
  // const phonePriceNumber = parseFloat(phonePrice);
  // const totalPhonePrice = totalPhone * phonePriceNumber;
  // document.getElementById("phonePrice").innerText = totalPhonePrice;
  buttonHandler(true);
});

// minus sign button event handler
const phoneMinusBtn = document.getElementById("phoneMinusBtn");
phoneMinusBtn.addEventListener("click", function () {
  // const updatePhoneText = document.getElementById("updatePhoneText").value;
  // const updatePhoneTextNumber = parseFloat(updatePhoneText);
  // //if (updatePhoneTextNumber > 1) {
  // const totalPhone = updatePhoneTextNumber - 1;
  // document.getElementById("updatePhoneText").value = totalPhone;

  // //const phonePrice = document.getElementById("phonePrice").innerText;
  // // const phonePriceNumber = parseFloat(phonePrice);
  // const totalPhonePrice = totalPhone * phonePriceNumber;
  // document.getElementById("phonePrice").innerText = totalPhonePrice;
  // }
  buttonHandler(false);
});

const casePrice = document.getElementById("casePrice").innerText;
//const casePriceNumber = parseInt(casePrice);
console.log(casePrice);
const casePlusBtn = document.getElementById("casePlusBtn");
casePlusBtn.addEventListener("click", function () {
  const updateCaseText = document.getElementById("updateCaseText").value;
  const updateCaseTextNumber = parseInt(updateCaseText);
  const totalCase = updateCaseTextNumber + 1;
  document.getElementById("updateCaseText").value = totalCase;

  // const casePrice = document.getElementById("casePrice").innerText;
  // const casePriceNumber = parseInt(casePrice);
  const totalCasePrice = totalCase * casePrice;
  document.getElementById("casePrice").innerText = totalCasePrice;
  calculateTotal();
});

const caseMinusBtn = document.getElementById("caseMinusBtn");
caseMinusBtn.addEventListener("click", function () {
  const updateCaseText = document.getElementById("updateCaseText").value;
  const updateCaseTextNumber = parseInt(updateCaseText);
  if (updateCaseTextNumber > 0) {
    const totalCase = updateCaseTextNumber - 1;
    document.getElementById("updateCaseText").value = totalCase;

    // const casePrice = document.getElementById("casePrice").innerText;
    // const casePriceNumber = parseInt(casePrice);
    const totalCasePrice = totalCase * casePrice;
    document.getElementById("casePrice").innerText = totalCasePrice;
    calculateTotal();
  }
});

function calculateTotal() {
  const phoneInput = document.getElementById("updatePhoneText").value;
  const phoneCount = parseInt(phoneInput);

  const caseInput = document.getElementById("updateCaseText").value;
  const caseCount = parseInt(caseInput);

  const totalPrice = phoneCount * 1219 + caseCount * 59;
  const subTotal = document.getElementById("subTotal").innerText;
  document.getElementById("subTotal").innerText = totalPrice;

  const tax = Math.round(totalPrice * 0.1);
  document.getElementById("tax").innerText = tax;

  const total = totalPrice + tax;
  document.getElementById("total").innerText = total;
}
