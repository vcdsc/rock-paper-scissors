// start game
var readyToPlay = confirm("Ready to Play?");

// define players
var player1 = prompt("Who dares defy me?");
var player2 = "Computer";

// declare an array variable to hold the possible moves ("R", "P", or "S") as strings
var moves = ["R", "P", "S"];

// declare variables for tracking wins, losses, and ties for player1
var wins = 0;
var losses = 0;
var ties = 0;

// by using a loop we can play multiple rounds
for (let i = 0; i < 5; i++) {
  // prompt user for their input
  var player1Move = prompt(
    `Hi ${player1}! What's your move? Rock, Paper, or Scissors? (To make it easier on you, just type R, P, or S.)`
  );
  // my solution handles everything as uppercase, so the below ensures that if a valid but lowercase letter is entered it is still considered
  player1Move = player1Move.toUpperCase();

  // if the user did not click "Cancel", game proceeds
  if (player1Move !== null) {
    // this helps us determine a random play for player2, "Computer"
    var player2Move = moves[Math.floor(Math.random() * moves.length)];

    // we need to determine if player1 wins, loses, or ties but game logic only runs if player1 chooses a valid option, otherwise loop re-runs
    if (player1Move === "R" || player1Move === "P" || player1Move === "S") {
      // tie(s)
      if (player1Move === player2Move) {
        ties++;
        alert(
          `Ah! Great minds think alike, you both picked ${player1Move} - it's a tie! So far, you have tied ${ties} time(s).`
        );

        // player1 win(s)
      } else if (
        (player1Move === "R" && player2Move === "S") ||
        (player1Move === "P" && player2Move === "R") ||
        (player1Move === "S" && player2Move === "P")
      ) {
        wins++;
        alert(
          `Sucks to be you, ${player2}! ${player1Move} trumps ${player2Move}, ${player1} wins! So far, ${player1} has won ${wins} time(s).`
        );

        // computer win(s)
      } else {
        losses++;
        alert(
          `Oh no, ${player1}! ${player2Move} trumps ${player1Move}, ${player2} wins! So far, ${player1} has lost ${losses} time(s).`
        );
      }

      // handle invalid input
    } else {
      alert(
        `Hold on a minute ${player1}! This is Rock, Paper, Scissors, not Scrabble! Please enter a valid move only: R, P, or S.`
      );
    }

    // if the user decides he is done with playing and clicks "Cancel", this will cause the loop to break
  } else {
    break;
  }
}

alert(
  `GAME OVER ${player1}! \nTie(s): ${ties} \nWin(s): ${wins} \nLosse(s): ${losses}`
);
console.log(`Tie(s): ${ties} \nWins: ${wins} \nTLosses: ${losses}`);
