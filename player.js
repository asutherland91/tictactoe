class Player {
  constructor(id, name, token) {
    this.id = id;
    this.name = name;
    this.token = token;
    this.wins = 0;
  }

  increaseWins() {
    this.win++;
  }
}