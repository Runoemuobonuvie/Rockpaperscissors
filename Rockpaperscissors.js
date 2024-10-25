let playerScore = 0;
      let computerScore = 0;

      function playRound(playerChoice, computerChoice){
        if(playerChoice === null || playerChoice === undefined || playerChoice < 0|| playerChoice > 2 || isNaN(playerChoice)){
            console.log("invalid choice");
        }
        else if(playerChoice === computerChoice){
            return 0;
        }
        else if (
            (playerChoice === 0 && computerChoice === 2 )||
            (playerChoice === 1 && computerChoice === 0 )||
            (playerChoice === 2 && computerChoice === 1)
        ){
            return 1;
        }
        else{
            return -1;
        }
      }
      // main function to play game
      function playGame(){
         
        let playerScore = 0;
        let computerScore = 0;

        for (let round = 0; round < 5; round++){
            console.log(`\nRound: ${round + 1}`);

            // get computer choice 
            let computerChoice = Math.floor(Math.random() * 3);
            let choices = ["rock", "paper", "scissors"];
            console.log(`Computer chose: ${choices[computerChoice]}`);

            // get human choice
            let playerChoice = prompt("Choose rock,paper or scissors");
            const choiceMap = {
                "rock" : 0,
                 "paper" : 1,
                 "scissors" : 2
            };
            
            playerChoice = choiceMap[playerChoice];

            // play round and get result
            let result = playRound(playerChoice, computerChoice)

            if (result === null){
                console.log("Inavlid input, round skipped");
            }
            else if (result === 1){
                playerScore++
                console.log("Aww, you won this round");
            }
            else if (result === -1){
                computerScore++
                console.log("Sorry, you lost this round");
            }
            else{
                console.log("It's a tie");
            }
            // display current result
            console.log(`Current score - You: ${playerScore}, Computer: ${computerScore}`);
        }
            // final result
            console.log("\nGame over!")
            console.log(`Final score - You: ${playerScore}, Computer: ${computerScore}`);

            if (playerScore > computerScore){
                console.log("Yay! you won the game!");
            }
            else if (playerScore < computerScore){
                console.log("Sorry, you lost the game.");
            }
            else {
                console.log("It's a tie!");
            }

      }
      // call function to start game
        playGame();
          
        