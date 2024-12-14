// script.js

let display = document.getElementById("display");

function appendNumber(number) {
  if (display.innerText === "0") {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

function appendOperator(operator) {
  const lastChar = display.innerText.slice(-1);
  if (!isNaN(lastChar)) {
    display.innerText += operator;
  }
}

function appendDot() {
  const lastPart = display.innerText.split(/[\+\-\*\/]/).pop();
  if (!lastPart.includes(".")) {
    display.innerText += ".";
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  if (display.innerText.length === 1) {
    display.innerText = "0";
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace("÷", "/").replace("×", "*"));
  } catch {
    display.innerText = "Error";
  }
}


