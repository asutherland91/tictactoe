class Game {
  constructor(player1, player2) {
    this.gameWon = false;
    this.gameDraw = false;
    this.currentPlayer = player1;
    this.startingPlayer = player1;
    this.player1 = player1;
    this.player2 = player2;
    this.gameState = ["spot 0", "spot 1", "spot 2", "spot 3", "spot 4", "spot 5", "spot 6", "spot 7",  "spot 8"];
    this.turn = 0;
  }

  // I'll need this if I make a reset button;
  // whoseTurn() {
    
  // }

  resetGame() {
    if(this.gameWon||this.gameDraw) {
      this.gameWon = false;
      this.gameDraw = false;
      this.gameState = ["spot 0", "spot 1", "spot 2", "spot 3", "spot 4", "spot 5", "spot 6", "spot 7",  "spot 8"];
      this.turn = 0;
      if(this.startingPlayer === this.player1) {
        this.currentPlayer = this.player2;
        this.startingPlayer = this.player2;
      }
      else if (this.startingPlayer === this.player2) {
        this.currentPlayer = this.player1;
        this.startingPlayer = this.player1;
      }
    }
  }

  checkGameState() {
    if(this.gameState[0] === this.gameState[1] && this.gameState[0] === this.gameState[2]) {
      this.gameWon = true;
      this.currentPlayer.increaseWins();
    }
    else if(this.gameState[3] === this.gameState[4] && this.gameState[3] === this.gameState[5]) {
      this.gameWon = true;
      this.currentPlayer.increaseWins();
    }
    else if(this.gameState[6] === this.gameState[7] && this.gameState[6] === this.gameState[8]) {
      this.gameWon = true;
      this.currentPlayer.increaseWins();
    }
    else if(this.gameState[0] === this.gameState[3] && this.gameState[0] === this.gameState[6]) {
      this.gameWon = true;
      this.currentPlayer.increaseWins();
    }
    else if(this.gameState[1] === this.gameState[4] && this.gameState[1] === this.gameState[7]) {
      this.gameWon = true;
      this.currentPlayer.increaseWins();
    }
    else if(this.gameState[2] === this.gameState[5] && this.gameState[2] === this.gameState[8]) {
      this.gameWon = true;
      this.currentPlayer.increaseWins();
    }
    else if(this.gameState[0] === this.gameState[4] && this.gameState[0] === this.gameState[8]) {
      this.gameWon = true;
      this.currentPlayer.increaseWins();
    }
    else if(this.gameState[6] === this.gameState[4] && this.gameState[6] === this.gameState[2]) {
      this.gameWon = true;
      this.currentPlayer.increaseWins();
    }
    else if(this.turn === 9) {
      this.gameDraw = true;
    }

  }

  takeTurn(spot) {
    if(this.gameState[spot] !== this.player1.id && this.gameState[spot] !== this.player2.id) {
      this.gameState[spot] = this.currentPlayer.id;
      this.turn++;
      this.checkGameState();
      return true;
    }
    return false;
  }

  changeTurn() {
    if(this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    }
    else {
      this.currentPlayer = this.player1;
    }
  }
}