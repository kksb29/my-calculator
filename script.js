let inputState = "";

const inputvalue1 = document.getElementById("inputnum1");

// Selecting the All the button
function setVal(id, val) {
  const btn = document.getElementById(id);
  btn.addEventListener("click", function () {
    inputState += val;
    inputvalue1.value = inputState;
  });
}

// For Only Numbers
setVal("btn1", "1");
setVal("btn2", "2");
setVal("btn3", "3");
setVal("btn4", "4");
setVal("btn5", "5");
setVal("btn6", "6");
setVal("btn7", "7");
setVal("btn8", "8");
setVal("btn9", "9");
setVal("btn0", "0");

// For Operator
setVal("btnMod", "%");
setVal("btnDivide", "/");
setVal("btnPlus", "+");
setVal("btnSub", "-");
setVal("btnMul", "*");
setVal("btnDot", ".");

// To Clear the Input when AC is clicked
const AC = document.getElementById("btnAC");
AC.addEventListener("click", function () {
  inputState = "";
  inputvalue1.value = "";
});
// logic of the brackets
let isOpenBracket = true;
const bracketBtn = document.getElementById("btnBraket");
bracketBtn.addEventListener("click", toggleBracket);
function toggleBracket() {
  if (isOpenBracket) {
    inputState += "(";
    bracketBtn.textContent = ")";
  } else {
    inputState += ")";
    bracketBtn.textContent = ")";
  }
  inputvalue1.value = inputState;
  isOpenBracket = !isOpenBracket;
}

// To calculate the Result
const equalButton = document.getElementById("btnEqual");
equalButton.addEventListener("click", function () {
  calculate();
});

// Write the logic for the Calculator
function calculate() {
  try {
    let result = eval(inputState);

    inputvalue1.value = result;

    inputState = result.toString();
  } catch (error) {
    inputvalue1.value = "error";
  }
}
// for button x (deleting the numbers digit by digit)
const deletebydigit = document.getElementById("btnCut");

deletebydigit.addEventListener("click", function () {
  let currentvalue = inputvalue1.value;
  inputState = currentvalue.slice(0, -1);
  inputvalue1.value = inputState;
});
