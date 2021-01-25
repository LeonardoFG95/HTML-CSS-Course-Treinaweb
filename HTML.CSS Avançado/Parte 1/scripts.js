// Transições

var element = document.getElementsByClassName('my-transition')[0];

setInterval(() => {
    element.style.backgroundColor = "blue";
}, 2000);

setTimeout(() => {
    setInterval(() => {
        element.style.backgroundColor = "red";
    },2000);
}, 1000);

// Animações

var animationElement = document.getElementsByClassName('my-animation')[0];

animationElement.addEventListener("animationstart", listener, false);
animationElement.addEventListener("animationend", listener, false);
animationElement.addEventListener("animationiteration", listener, false);

function listener(e) {
    switch(e.type) {
        case "animationstart":
            console.log("Animção Iniciada!");
            break;
        case "animationend":
            console.log("Animação Encerrada!");
            break;
        case "animationiteration":
            console.log("Repetindo a Animação!");
            break;
    }
}

