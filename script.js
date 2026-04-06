const buttonStone = document.getElementById("stone");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");
const myPointer = document.querySelector(".myPoint");
const computerPointer = document.querySelector(".pointLauncher");
const resultText = document.querySelector(".result");
const pointerHuman = document.querySelector(".pointer-human");
const pointerMachine = document.querySelector(".pointer-machine");

let humanScore = 0;
let machineScore = 0;

const humanClick = (humanChoice) => {
    result( humanChoice, computerClick())

}
const computerClick = () => {
    const choices = ["stone", "paper", "scissors"];
    const choicesNumber = Math.floor(Math.random() * 3);
    return choices[choicesNumber]
}
const result = (human, machine) => {
    console.log(human, machine);
    if(human === machine) {
        resultText.innerHTML = "Empate"
    }else if(human === "paper" && machine === "stone") {
        resultText.innerHTML = "você ganhou"
        humanScore++;
        pointerHuman.innerHTML = humanScore;
    }else if(human === "stone" && machine === "scissors") {
        resultText.innerHTML = "você ganhou"
        humanScore++;
        pointerHuman.innerHTML = humanScore;
    }else if(human === "scissors" && machine === "paper") {
        resultText.innerHTML = "você ganhou"
        humanScore++;
        pointerHuman.innerHTML = humanScore;
    }else {
        resultText.innerHTML = "você perdeu"
        machineScore++;
        pointerMachine.innerHTML = machineScore;
    }
}

buttonStone.addEventListener("click", () => humanClick("stone"));
buttonPaper.addEventListener("click", () => humanClick("paper"));
buttonScissors.addEventListener("click", () => humanClick("scissors"));