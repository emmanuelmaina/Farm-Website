// const addItem = document.getElementById("add");
// const subtract = document.getElementById("subtract");
// const result = document.getElementById("result")
const myName = document.getElementById("name");

myName.addEventListener('focus', () => {
    myName.style.backgroundColor = "hsla(236, 85%, 16%, 0.466)";
});   
myName.addEventListener('focusout', () => {
    myName.style.backgroundColor = "white";
});   

const myEmail = document.getElementById("email");

myEmail.addEventListener('focus', () => {
    myEmail.style.backgroundColor = "hsla(236, 85%, 16%, 0.466)";
});   
myEmail.addEventListener('focusout', () => {
    myEmail.style.backgroundColor = "white";
});   

const myMessage = document.getElementById("message");

myMessage.addEventListener('focus', () => {
    myMessage.style.backgroundColor = "hsla(236, 85%, 16%, 0.466)";
});   
myMessage.addEventListener('focusout', () => {
    myMessage.style.backgroundColor = "white";
});   

const submit = document.getElementById("btn");

submit.addEventListener('mouseover', () => {
    submit.style.backgroundColor = " hsl(193, 87%, 80%)";
})
submit.addEventListener('mouseout', () => {
    submit.style.backgroundColor = "  hsl(193, 87%, 49%)";
})















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






















































