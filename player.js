class Player {
  constructor(name, token) {
    this.name = name;
    this.id = Date.now();
    this.token = token;
    
    var savedWins = window.localStorage.getItem(name) || 0;
    this.wins = parseInt(savedWins);
  }

  increaseWins() {
    this.wins++;
    window.localStorage.setItem(this.name, this.wins);
  }
}