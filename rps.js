
    let userMove;

    // Update userMove when user clicks a move selection button.
    let rockBtn = document.querySelector('.rock-btn');

    rockBtn.addEventListener('click', () => {
      userMove = 'rock';
      playGame();
    });

    let paperBtn = document.querySelector('.paper-btn');

    paperBtn.addEventListener('click', () => {
      userMove = 'paper';
      playGame();
    });

    let scissorsBtn = document.querySelector('.scissors-btn');

    scissorsBtn.addEventListener('click', () => {
      userMove = 'scissors';
      playGame();
    });

    // Gets computer move by generating a random number between 0 - 2 then convert the number to rock, paper or scissors.
    let getComputerMove;
    let computerMove;

    function generateComputerMove() {
    getComputerMove = Math.floor(Math.random() * 3);
    if(getComputerMove == 0) {
      computerMove = "rock";
    }
    else if(getComputerMove == 1) {
      computerMove = "paper";
    }
    else if(getComputerMove == 2) {
      computerMove = "scissors";
    }
  }

    let result;
    let wins = 0;
    let losses = 0;
    let draws = 0;

    // Determines the winner of the game.
    function determineMoveResult() {
      switch(userMove) {
        case "rock":
          if(computerMove == "rock") {
            result = "You draw";
            draws++;
          }
          else if(computerMove == "paper") {
            result = "You lose";
            losses++;
          }
          else if(computerMove == "scissors") {
            result = "You win";
            wins++;
          }
          break;

        case "paper":
          if(computerMove == "rock") {
            result = "You win";
            wins++;
          }
          else if(computerMove == "paper") {
            result = "You draw";
            draws++;
          }
          else if(computerMove == "scissors") {
            result = "You lose";
            losses++;
          }
          break;

        case "scissors":
          if(computerMove == "rock") {
            result = "You lose";
            losses++;
          }
          else if(computerMove == "paper") {
            result = "You win";
            wins++;
          }
          else if(computerMove == "scissors") {
            result = "You draw";
            draws++;
          }
          break;
      }
    }

    let resultsParagraph;

    // Displays the current user and computer move.
    function displayMoves() {
      if (resultsParagraph === undefined) {
        resultsParagraph = document.createElement('p');
        document.body.appendChild(resultsParagraph);
      }
      resultsParagraph.textContent = `Computer chose ${computerMove}. ${result}`;
    }

    let scoreParagraph;

    function displayScore() {
      if (scoreParagraph === undefined) {
      scoreParagraph = document.createElement('p');
      document.body.appendChild(scoreParagraph);
      }
      scoreParagraph.textContent = `${wins} wins   ${losses} losses   ${draws} draws`;
    }

    let gameWinner;
    let winnerParagraph;
    let currentTotal = 0;

    function displayGameResults() {
      // Determines game results.
      if (wins > losses) {
        gameWinner = '🎉 You won the game!'
      }
      else if (wins < losses) {
        gameWinner = '💻 The computer wins this time.'
      }
      else {
        gameWinner = '🤝 The game is a draw!';
      }

      // Displays game results if, wins + losses > 5.
      currentTotal = wins + losses + draws;
      
        if (winnerParagraph === undefined) {
          winnerParagraph = document.createElement('p');
          document.body.appendChild(winnerParagraph);
        }
      winnerParagraph.textContent = `${gameWinner}`;

      // Reset the score after 5 moves.
      if (currentTotal > 5) {
        document.body.removeChild(winnerParagraph);
        winnerParagraph = undefined;
        wins = 0;
        losses = 0;
        draws = 0;
        scoreParagraph.textContent = `${wins} wins   ${losses} losses   ${draws} draws`
      }
    }

    // Plays one round of rock, paper, scissors. Called when user clicks a move button.
    function playGame() {
      generateComputerMove();
      determineMoveResults();
      displayMoves();
      displayScore();
      if (wins + losses + draws >= 5) {
        displayGameResults();
      }
    }