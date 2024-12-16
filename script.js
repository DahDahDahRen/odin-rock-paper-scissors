// The computer player must randomly generate either rock, paper, or scissor

// The human player must be able to input either rock, paper, or scissorr

// Track both human and computer score.

// Decide who are the winner in every rounds between human and computer.

// Track the number of wins of both the human and computer player

// The game should be played for five rounds

function app() {
  const selectionContainer = document.querySelector(
    ".rock-paper-scissor-container"
  );
  const displayText = document.querySelector(".display-text");

  //* Computer Choice
  //! Generate random computer choice
  function getComputerChoice() {
    const random = Math.floor(Math.random() * 3) + 1;

    // Rock
    if (random === 1) {
      return "rock";
    }

    // Paper
    if (random === 2) {
      return "paper";
    }

    // Scissor
    if (random === 3) {
      return "scissor";
    }
  }

  //* Human Inputed Choice
  //! Human player shall input a choice to a prompt
  // function getHumanChoice() {
  //   const humanChoice = prompt("Rock, Paper, or Scissor?");

  //   if (humanChoice === "") {
  //     console.log("You did not made the choice!");
  //   } else {
  //     return humanChoice.toLowerCase();
  //   }
  // }

  //* Play game function
  function playGame() {
    //* App Variable
    const gameOverAfterRoundFive = 5;
    let roundsPlayed = 0;
    let humanScore = 0;
    let computerScore = 0;

    //* Update score of human
    function updateHumanScore() {
      humanScore++;
    }

    //* Update score of computer
    function updateComputerScore() {
      computerScore++;
    }

    //* Play a single round
    //! Start a game and compare the choice of human and computer players
    function playRound(humanChoice, computerChoice) {
      //! Check if the human and computer are draw
      if (humanChoice === computerChoice) {
        return console.log(`The game draw!`);
      } else {
        //! Check for rock
        if (humanChoice === "rock") {
          if (computerChoice === "scissor") {
            //! Update human score
            updateHumanScore();

            //! Declare the human winner
            return console.log("Player Wins");
          }
        } else {
          //! Update computer score
          updateComputerScore();

          //! Declare the computer winner
          return console.log("Computer Wins");
        }

        //! Check for paper
        if (humanChoice === "paper") {
          if (computerChoice === "rock") {
            //! Update human score
            updateHumanScore();

            //! Declare the human winner
            return console.log("Player Wins");
          }
        } else {
          //! Update computer score
          updateComputerScore();

          //! Declare the computer winner
          return console.log("Computer Wins");
        }

        //! Check for scissor
        if (humanChoice === "scissor") {
          if (computerChoice === "paper") {
            //! Update human score
            updateHumanScore();

            //! Declare the human winner
            return console.log("Player Wins");
          }
        } else {
          //! Update the computer score
          updateComputerScore();

          //! Declare the computer winner
          return console.log("Computer Wins");
        }
      }
    }

    selectionContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("button")) {
        //Get human and computer choice
        let humanChoiceSelection = e.target.dataset.choice;
        let computerSelection = getComputerChoice();

        //Game State and Rounds played
        if (roundsPlayed < gameOverAfterRoundFive) {
          roundsPlayed = roundsPlayed + 1;

          displayText.textContent = `Round: ${roundsPlayed}`;

          return playRound(humanChoiceSelection, computerSelection);
        }

        //Display result game over
        if (roundsPlayed === gameOverAfterRoundFive) {
          roundsPlayed = 0;

          return (displayText.textContent = `Game over!`);
        }
      }
    });
  }

  playGame();
}

app();
