interface IPlayers {
  WHITE: string
  BLACK: string
}

export default class Match {
  id: string
  players: IPlayers
  name: string
  url: string

  constructor({ id, players }: { id: string, players: IPlayers }) {
    this.id = id
    this.players = players
    this.name = `${this.players.WHITE} vs. ${this.players.BLACK}`
    this.url = `https://lichess.org/embed/${id}?theme=auto&bg=auto`
  }
}
