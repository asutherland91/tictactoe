class Player {
  constructor(name, token) {
    this.name = name;
    this.id = Date.now();
    this.token = token;
    this.wins = 0;
  }

  increaseWins() {
    this.wins++;
  }
}