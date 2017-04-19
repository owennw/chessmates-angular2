export default class Game {
  name: string = `${this.players.WHITE} (white) vs. ${this.players.BLACK} (black)`

  constructor(public id: string, public players: any) {
  }
}
