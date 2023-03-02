//query selectors
var nameInputOne = document.querySelector("#name-input1");
var nameInputTwo = document.querySelector("#name-input2");
var radioMario = document.querySelector("#mario");
var radioLuigi = document.querySelector("#luigi");
var radioPeach = document.querySelector("#peach");
var radioYoshi = document.querySelector("#yoshi");
var radioBowser = document.querySelector("#bowser");
var radioBoo = document.querySelector("#boo");
var radioGoomba = document.querySelector("#goomba");
var radioSpiny = document.querySelector("#spiny");
var letsGoButtonOne = document.querySelector(".submit-1");
var letsGoButtonTwo = document.querySelector(".submit-2");
var leftOne = document.querySelector(".left-1");
var midOne = document.querySelector(".mid-1");
var RightOne = document.querySelector(".right-1");
var leftTwo = document.querySelector(".left-2");
var midTwo = document.querySelector(".mid-2");
var rightTwo = document.querySelector(".right-2");
var leftThree = document.querySelector(".left-3");
var midThree = document.querySelector(".mid-3");
var rightThree = document.querySelector(".right-3");
var playerWon = document.querySelector(".player-won");
var radioOne = document.querySelectorAll(".radio-one");
var radioTwo = document.querySelectorAll(".radio-two");
var nameOne = document.querySelector(".name-one");
var scoreOne = document.querySelector(".score-one");
var nameTwo = document.querySelector(".name-two");
var scoreTwo = document.querySelector(".score-two");
var gameBoard = document.querySelectorAll(".game-board-pieces");

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
    game = new Game(playerOne, playerTwo)
  }
}

function placeIcon(event) {
  if(game) {
    event.target.innerHTML = `<img class="player-icons" src="${game.currentPlayer.token}" alt="${game.currentPlayer.name}'s piece"/>`
    var spot = event.target.id[5];
    game.takeTurn(spot);
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