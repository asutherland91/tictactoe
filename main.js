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


//event listeners
nameInputOne.addEventListener("keyup", enableOneButton);
nameInputTwo.addEventListener("keyup", enableTwoButton);
for(var i = 0; i < radioOne.length; i++) {
  radioOne[i].addEventListener("click", enableOneButton);
}
for(var i = 0; i < radioTwo.length; i++) {
  radioTwo[i].addEventListener("click", enableTwoButton);
}



var playerOne;
var playerTwo;


//functions

function setUpPlayer(event) {
  event.preventDefault();
  var playerIcon = document.querySelector("input[name=player-piece]:checked").value;
  if(playerIcon === "mario"||"luigi"||"peach"||"yoshi") {
    playerOne = new Player(nameInputOne.value, playerIcon);
  }
  else {
    playerTwo = new Player(nameInputTwo.value, playerIcon);
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