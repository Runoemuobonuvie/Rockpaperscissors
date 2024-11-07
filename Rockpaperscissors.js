let playerScore = 0;
let computerScore = 0;

const choiceMap = {
    'Rock': 0,
    'Paper': 1,
    'Scissors': 2
};

const choices = ['Rock', 'Paper', 'Scissors'];  

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 0;
    } else if (
        (playerChoice === 0 && computerChoice === 2) ||
        (playerChoice === 1 && computerChoice === 0) ||
        (playerChoice === 2 && computerChoice === 1)
    ) {
        return 1;
    } else {
        return -1;
    }
}

function updateResults(message) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = message;
}

function updateScore() {
    const scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function handleSelection(playerSelection) {
    const playerChoice = choiceMap[playerSelection];
    const computerChoice = Math.floor(Math.random() * 3);

    const result = playRound(playerChoice, computerChoice);

    if (result === 1) {  
        playerScore++;
        updateResults(`You won this round! Computer chose: ${choices[computerChoice]}`);
    } else if (result === -1) {  
        computerScore++;
        updateResults(`Aww, You lost! Computer chose: ${choices[computerChoice]}`);
    } else if (result === 0) {  
        updateResults(`It's a tie! Both chose: ${choices[computerChoice]}`);
    }

    updateScore();

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === computerScore) {
            updateResults("It's a tie! You both reached the score limit at the same time!");
        } else if (playerScore > computerScore) {
            updateResults("Congrats! You won the game");
        } else {
            updateResults("Game over! The computer won");
        }

        restartGame();
    }
}

function restartGame (){
    playerScore = 0;
    computerScore = 0;
    updateScore();
    updateResults("Game reset! Start a new round!");
   

}

document.getElementById("rock-btn").addEventListener('click', () => handleSelection("Rock"));
document.getElementById("paper-btn").addEventListener('click', () => handleSelection("Paper"));
document.getElementById("scissors-btn").addEventListener('click', () => handleSelection("Scissors"));

document.getElementById("restart-btn").addEventListener('click', restartGame);

