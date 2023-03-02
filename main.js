//query selectors
var nameInputOne = document.querySelector("#name-input1");
var nameInputTwo = document.querySelector("#name-input2");
var letsGoButtonOne = document.querySelector(".submit-1");
var letsGoButtonTwo = document.querySelector(".submit-2");
var playerWon = document.querySelector(".player-won");
var radioOne = document.querySelectorAll(".radio-one");
var radioTwo = document.querySelectorAll(".radio-two");
var nameOne = document.querySelector(".name-one");
var scoreOne = document.querySelector(".score-one");
var nameTwo = document.querySelector(".name-two");
var scoreTwo = document.querySelector(".score-two");
var gameBoardWrapper = document.querySelector(".game-board-section")
var gameBoard = document.querySelectorAll(".game-board-pieces");
var header = document.querySelector("h1");
var gameResult = document.querySelector("h2");

//event listeners
nameInputOne.addEventListener("keyup", enableOneButton);
nameInputTwo.addEventListener("keyup", enableTwoButton);
letsGoButtonOne.addEventListener("click", setUpPlayer);
letsGoButtonTwo.addEventListener("click", setUpPlayer);
for(var i = 0; i < radioOne.length; i++) {
  radioOne[i].addEventListener("click", enableOneButton);
}
for(var i = 0; i < radioTwo.length; i++) {
  radioTwo[i].addEventListener("click", enableTwoButton);
}
for(var i = 0; i < gameBoard.length; i++) {
  gameBoard[i].addEventListener("click", placeIcon);
}

var playerOne;
var playerTwo;
var game;

//functions

function setUpPlayer(event) {
  event.preventDefault();
  if(event.target.classList.contains("submit-1")) {
    var playerIconOne = document.querySelector("input[name=player-piece-1]:checked").value;
    playerOne = new Player(nameInputOne.value, playerIconOne);
    nameOne.innerHTML = playerOne.name;
    scoreOne.innerHTML = playerOne.wins;
  }
  else if(event.target.classList.contains("submit-2")) {
    var playerIconTwo = document.querySelector("input[name=player-piece-2]:checked").value;
    playerTwo = new Player(nameInputTwo.value, playerIconTwo);
    nameTwo.innerHTML = playerTwo.name;
    scoreTwo.innerHTML = playerTwo.wins;
  }
  startGame();
}

function startGame() {
  if(playerOne && playerTwo) {
    game = new Game(playerOne, playerTwo);
    bannerChangeTurns();
  }
}

function bannerChangeTurns() {
  header.innerHTML = `${game.currentPlayer.name}'s Turn!`
}

function boardChangeGameState() {
  if(game.gameWon) {
    gameBoardWrapper.classList.add("hidden");
    header.classList.add("hidden");
    gameResult.innerHTML = `${game.currentPlayer.name} Won!`;
    gameResult.classList.remove("hidden");
    if(game.currentPlayer == playerOne) {
      scoreOne.innerHTML = playerOne.wins;
    }
    else if(game.currentPlayer == playerTwo) {
      scoreTwo.innerHTML = playerTwo.wins;
    }
    setTimeout(resetGameBoard, 2000);
  }
}

  function resetGameBoard() {
    var icons = document.querySelectorAll(".game-board-pieces .player-icons");
    for(var i = 0; i < icons.length; i++ ) {
      icons[i].remove();
    }
    gameResult.classList.add("hidden");
    header.classList.remove("hidden");
    gameBoardWrapper.classList.remove("hidden");
    bannerChangeTurns();
    game.resetGame();
  }


function placeIcon(event) {
  if(game) {
    var spot = event.target.closest(".game-board-pieces").id[5];
    var legalTurn = game.takeTurn(spot);
    if(legalTurn) {
      event.target.innerHTML = `<img class="player-icons" src="${game.currentPlayer.token}" alt="${game.currentPlayer.name}'s piece"/>`
      if(game.gameWon||game.gameDraw) {
        boardChangeGameState();
        game.changeTurn();
      }
      else {
        game.changeTurn();
        bannerChangeTurns();
      }
    }
  }
}

function enableOneButton() {
  var playerIcon = document.querySelector("input[name=player-piece-1]:checked");
  if(playerIcon && nameInputOne.value) {
    letsGoButtonOne.removeAttribute("disabled");
  } 
}

function enableTwoButton() {
  var playerIcon = document.querySelector("input[name=player-piece-2]:checked");
  if(playerIcon && nameInputTwo.value) {
    letsGoButtonTwo.removeAttribute("disabled");
  }
} 