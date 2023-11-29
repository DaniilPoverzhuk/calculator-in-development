const currentCalculation = document.querySelector(".calc__top-current input");
const btnsMath = document.querySelectorAll(".calc__abilities-item");

const mathOperations = ["/", "*", "+", "-", "%"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const arrayCurrentCalculations = [];

btnsMath.addEventListener("click", addSymbolToCurrentMath);

function addSymbolToCurrentMath(event) {
  const clickedSymbol = event.target.textContent();

  if (mathOperations.includes(clickedSymbol)) {
    if (clickedSymbol === "-") {
      return (currentCalculation.value += clickedSymbol);
    }

    if (!currentCalculation.value.length) {
      return;
    }
  }

  if (numbers.includes(clickedSymbol)) {
    return (currentCalculation.value += clickedSymbol);
  }
}
