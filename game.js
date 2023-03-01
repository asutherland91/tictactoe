class Game {
  constructor(player1, player2) {
    this.gameWon = false;
    this.gameDraw = false;
    this.currentPlayer = player1;
    this.player1 = player1;
    this.player2 = player2;
    this.gameState = ["spot 0", "spot 1", "spot 2", "spot 3", "spot 4", "spot 5", "spot 6", "spot 7",  "spot 8"];
    this.turn = 0;



  }

  whoseTurn() {
    
  }

  resetGame() {

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
    if(!this.gameState[spot]) {
      this.gameState[spot] = this.currentPlayer.id;
      this.turn++;
      this.checkGameState();

      if(this.currentPlayer === this.player1) {
        this.currentPlayer = this.player2;
      }
      else {
        this.currentPlayer = this.player1;
      }
    }
  }

}