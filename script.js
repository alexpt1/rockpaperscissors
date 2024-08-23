//Picks a random int between 1 and 3 for rock paper and scisors
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

//Gets the final results
function getResult(humanScore, computerScore){
    if (humanScore < computerScore) {
        return "You lose, computer wins";
    } else if (humanScore > computerScore) {
        return "You win, computer loses";
    } else {
        return "Whole game is a draw";
    }
}

//Gets the results after every round
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

//Checks that the score values are below 5, if not then display final results
function checkValues(val1, val2) {
    if (val1 === 5 || val2 === 5) {
        return true;
    } else {
        return false;
    }
}

function playGame(){
    const container = document.createElement("div");

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let computerChoice = getComputerChoice();

            // Display the result of the round
            let gameAfter = document.createElement('p');
            gameAfter.textContent = playRound(button.id, computerChoice);
            gameAfter.style.color = 'white';
            container.appendChild(gameAfter);

            // Display the computer's choice
            let compChoice = document.createElement('p');
            compChoice.textContent = computerChoice;
            compChoice.style.color = 'white';
            container.appendChild(compChoice);

            // Display the current scores
            let currentScores = document.createElement('p');
            currentScores.textContent = "Current scores are Human: " + humanScore + " and Computer: " + computerScore;
            currentScores.style.color = 'white';
            container.appendChild(currentScores);

            // Check the values and display the final result if needed
            if (checkValues(humanScore, computerScore)) {
                let result = document.createElement('h1');
                result.textContent = getResult(humanScore, computerScore);
                result.style.color = 'white';
                container.appendChild(result);
            }

            // Append the container to the body (only once)
            document.body.appendChild(container);
    });
});


    
}

let humanScore = 0;
let computerScore = 0;
playGame();



