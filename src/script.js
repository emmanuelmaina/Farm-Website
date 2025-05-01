// const addItem = document.getElementById("add");
// const subtract = document.getElementById("subtract");
// const result = document.getElementById("result")

let result = 0;

document.getElementById("add").addEventListener("click", function () {
  result += 1;
  document.getElementById("result").innerHTML = result;
});

document.getElementById("subtract").addEventListener("click", function () {
  result -= 1;
  document.getElementById("result").innerHTML = result;
});

document.getElementById("reset").addEventListener("click", function () {
    result = 0;
    document.getElementById("result").innerHTML = result;
});























































