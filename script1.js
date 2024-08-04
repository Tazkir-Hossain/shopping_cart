// Store the unit price separately
const price = document.getElementById("price").innerText;
const priceNumber = parseFloat(price);

// plus sign button event handler
const plusbtn = document.getElementById("plus");
plusbtn.addEventListener("click", function () {
  const updateText = document.getElementById("updateText").value;
  const updateTextNumber = parseFloat(updateText);
  const total = updateTextNumber + 1;
  document.getElementById("updateText").value = total;

  const price = document.getElementById("price").innerText;
  const priceNumber = parseFloat(price);
  const totalPrice = total * priceNumber;
  document.getElementById("price").innerText = totalPrice;
});

// minus sign button event handler
const minusbtn = document.getElementById("minus");
minusbtn.addEventListener("click", function () {
  const updateText = document.getElementById("updateText").value;
  const updateTextNumber = parseFloat(updateText);
  if (updateTextNumber > 1) {
    const total = updateTextNumber - 1;
    document.getElementById("updateText").value = total;

    const price = document.getElementById("price").innerText;
    const priceNumber = parseFloat(price);
    const totalPrice = total * priceNumber;
    document.getElementById("price").innerText = totalPrice;
  }
});

// plus sign button event handler
const plusButtons = document.querySelectorAll(".plus");
plusButtons.forEach((plusButton, index) => {
  plusButton.addEventListener("click", () => {
    const updateText = document.querySelectorAll(".updateText")[index].value;
    const updateTextNumber = parseFloat(updateText);
    const total = updateTextNumber + 1;
    hello(".updateText", total, index);
  });
});

//
//
//
//
//
//
//
//
//
//
//
//
function buttonHandler() {
  const updatePhoneText = document.getElementById("updatePhoneText").value;
  const updatePhoneTextNumber = parseFloat(updatePhoneText);
}
