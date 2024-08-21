console.log("Hello World!");
const prompt = require("prompt-sync")();

function getComputerChoice(){
    let nu = Math.floor((Math.random()* 3) + 1);
    if (nu === 1) {
        return "Rock";
    } else if (nu === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice(){
    while (true) {
        try {
            let input = prompt("Enter choice: ").toLowerCase();
            if ((input != "rock") && (input != "scissors") && (input != "paper")) {
                console.log("Enter again, not an option, enter rock, paper or scissors");
            } else {
                return input;
            }
        } catch (error) {
            console.log("Unexpected error, details: " + error);
        }
    }
}



let answer = getHumanChoice();
console.log(answer);

