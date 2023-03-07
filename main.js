//query selectors
var nameInputOne = document.querySelector("#name-input1");
var nameInputTwo = document.querySelector("#name-input2");
var letsGoButtonOne = document.querySelector(".submit-1");
var letsGoButtonTwo = document.querySelector(".submit-2");
var playerOneOptions = document.querySelectorAll(".player-one-option");
var playerTwoOptions = document.querySelectorAll(".player-two-option");
var nameOne = document.querySelector(".name-one");
var scoreOne = document.querySelector(".score-one");
var nameTwo = document.querySelector(".name-two");
var scoreTwo = document.querySelector(".score-two");
var gameBoardWrapper = document.querySelector(".game-board-section")
var gameBoard = document.querySelectorAll(".game-board-piece");
var header = document.querySelector("h1");
var gameResult = document.querySelector("h2");
var selectionSection = document.querySelectorAll(".selection-section")
var marioGif = document.querySelector(".mario-gif");
var bowserGif = document.querySelector(".bowser-gif");
var winner = document.querySelector(".winner");

//event listeners
nameInputOne.addEventListener("keyup", enableOneButton);
nameInputTwo.addEventListener("keyup", enableTwoButton);
letsGoButtonOne.addEventListener("click", setUpPlayer);
letsGoButtonTwo.addEventListener("click", setUpPlayer);
for(var i = 0; i < playerOneOptions.length; i++) {
  playerOneOptions[i].addEventListener("click", enableOneButton);
}
for(var i = 0; i < playerTwoOptions.length; i++) {
  playerTwoOptions[i].addEventListener("click", enableTwoButton);
}
for(var i = 0; i < gameBoard.length; i++) {
  gameBoard[i].addEventListener("click", placeIcon);
}

var playerOne;
var playerTwo;
var game;

//functions
function hideSideBar() {
  for(var i = 0; i < icons.length; i++ ) {
    selectionSection[i].classList.add("hidden")
  }
}

function setUpPlayer(event) {
  event.preventDefault();
  if(event.target.classList.contains("submit-1")) {
    var playerIconOne = document.querySelector("input[name=player-piece-1]:checked").value;
    playerOne = new Player(nameInputOne.value, playerIconOne);
    nameOne.innerHTML = playerOne.name;
    scoreOne.innerHTML = playerOne.wins;
    var playerOneSection = document.querySelector(".left-side .selection-section");
    playerOneSection.classList.add("hidden");
    marioGif.classList.remove("hidden");
  }
  else if(event.target.classList.contains("submit-2")) {
    var playerIconTwo = document.querySelector("input[name=player-piece-2]:checked").value;
    playerTwo = new Player(nameInputTwo.value, playerIconTwo);
    nameTwo.innerHTML = playerTwo.name;
    scoreTwo.innerHTML = playerTwo.wins;
    var playerTwoSection = document.querySelector(".right-side");
    playerTwoSection.classList.add("hidden");
    bowserGif.classList.remove("hidden");
  }
  startGame();
}

function startGame() {
  if(playerOne && playerTwo) {
    gameResult.classList.add("hidden");
    gameBoardWrapper.classList.remove("hidden");
    header.classList.remove("hidden");
    game = new Game(playerOne, playerTwo);
   
    bannerChangeTurns();
  }
}

function bannerChangeTurns() {
  header.innerHTML = `${game.currentPlayer.name}'s Turn!`;
}

function boardChangeGameState() {
  if(game.gameWon) {
    gameBoardWrapper.classList.add("hidden");
    header.classList.add("hidden");
    gameResult.innerHTML = `${game.currentPlayer.name} Won!`;
    gameResult.classList.remove("hidden");
    if(game.currentPlayer == playerOne) {
      scoreOne.innerHTML = playerOne.wins;
      winner.classList.remove("hidden");
    }
    else if(game.currentPlayer == playerTwo) {
      scoreTwo.innerHTML = playerTwo.wins;
      winner.classList.remove("hidden");
    }
    setTimeout(resetGameBoard, 1800);
  }
  else if(game.gameDraw) {
    gameBoardWrapper.classList.add("hidden");
    header.classList.add("hidden");
    gameResult.innerHTML = `Draw!`;
    gameResult.classList.remove("hidden");
    setTimeout(resetGameBoard, 1800);
  }
  game.changeTurn();
}

  function resetGameBoard() {
    var icons = document.querySelectorAll(".game-board-piece .player-icons");
    for(var i = 0; i < icons.length; i++ ) {
      icons[i].remove();
    }
    gameResult.classList.add("hidden");
    header.classList.remove("hidden");
    winner.classList.add("hidden")
    gameBoardWrapper.classList.remove("hidden");
    game.resetGame();
    bannerChangeTurns();
  }


function placeIcon(event) {
  if(game) {
    var spot = event.target.closest(".game-board-piece").id[5];
    var legalTurn = game.takeTurn(spot);
    if(legalTurn) {
      event.target.innerHTML = `<img class="player-icons" src="${game.currentPlayer.token}" alt="${game.currentPlayer.name}'s piece"/>`
      if(game.gameWon||game.gameDraw) {
        setTimeout(boardChangeGameState, 400);
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