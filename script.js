const prompt = require("prompt-sync")();

function getComputerChoice(){
    let nu = Math.floor((Math.random()* 3) + 1);
    if (nu === 1) {
        return "rock";
    } else if (nu === 2) {
        return "paper";
    } else {
        return "scissors";
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

function playGame(){
    function getResult(humanScore, computerScore){
        if (humanScore < computerScore) {
            return "You lose, computer wins";
        } else if (humanScore > computerScore) {
            return "You win, computer loses";
        } else {
            return "Whole game is a draw";
        }
    }
    function playRound(humanChoice, computerChoice){
        if (humanChoice == "rock"){
            if (computerChoice == "rock"){
                return "Draw";   
            }
            if (computerChoice == "paper"){
                computerScore ++;
                return "Loss, paper beats rock";
            }
            if (computerChoice == "scissors"){
                humanScore ++;
                return "Win, rock beats scissors";
            }
        }
        if (humanChoice == "paper"){
            if (computerChoice == "rock"){
                humanScore ++;
                return "Win, paper beats rock";
            }
            if (computerChoice == "paper"){
                return "Draw";
            }  
            if (computerChoice == "scissors"){
                computerScore ++;
                return "Loss, scissors beats paper";
            }
        }
        if (humanChoice == "scissors"){
            if (computerChoice == "rock"){
                computerScore ++;
                return "Loss, rock beats scissors";
            }
            if (computerChoice == "paper"){
                humanScore ++;
                return "Win, scissors beats paper";
            }
            if (computerChoice == "scissors"){
                return "Draw";
            }
        }
    }
    let humanScore = 0;
    let computerScore = 0;
    for (let round = 0; round < 5; round++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(computerChoice);
        console.log(playRound(humanChoice, computerChoice));
        console.log("Current scores are Human: " + humanScore + " and Computer: " + computerScore);
        console.log("-----------------------------------------------//");
    }
    console.log(getResult(humanScore, computerScore));
}

playGame();



