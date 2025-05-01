const myName = document.getElementById("name");

myName.addEventListener('focus', () => {
    myName.style.backgroundColor = "hsla(236, 85%, 16%, 0.466)";
    myName.style.color = "red";
});   
myName.addEventListener('focusout', () => {
    myName.style.backgroundColor = "white";
});   

const myEmail = document.getElementById("email");

myEmail.addEventListener('focus', () => {
    myEmail.style.backgroundColor = "hsla(236, 85%, 16%, 0.466)";
    myEmail.style.color = "red";
});   
myEmail.addEventListener('focusout', () => {
    myEmail.style.backgroundColor = "white";
});   

const myMessage = document.getElementById("message");

myMessage.addEventListener('focus', () => {
    myMessage.style.backgroundColor = "hsla(236, 85%, 16%, 0.466)";
    myMessage.style.color = "red"
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





 