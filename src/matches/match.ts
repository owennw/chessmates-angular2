interface IMatchPlayer {
  userId: string
  rating: number
  ratingDiff: number
}

interface IPlayers {
  white: IMatchPlayer
  black: IMatchPlayer
}

interface IClock {
  initial: number
  increment: number
  totalTime: number
}

export interface IMatch {
  id: string
  rated: boolean
  variant: string
  speed: string
  createdAt: Date
  lastMoveAt: Date
  turns: number
  clock: IClock
  players: IPlayers
  winner: IMatchPlayer
  status: string
  loser: IMatchPlayer
  name: string
  url: string
}

export default class Match implements IMatch {
  id: string
  rated: boolean
  variant: string
  speed: string
  createdAt: Date
  lastMoveAt: Date
  turns: number
  clock: IClock
  players: IPlayers
  winner: IMatchPlayer
  status: string
  loser: IMatchPlayer
  name: string
  url: string

  constructor(props: any) {
    this.id = props.id
    this.rated = props.rated
    this.variant = props.variant
    this.speed = props.speed
    this.createdAt = new Date(props.createdAt)
    this.lastMoveAt = new Date(props.lastMoveAt)
    this.turns = props.turns
    this.clock = props.clock as IClock
    this.players = props.players as IPlayers
    this.winner = this.players[props.winner]
    this.status = props.status
    this.loser = this.players[props.winner === 'white' ? 'black' : 'white']

    this.name = `${this.players.white.userId} vs. ${this.players.black.userId}`
    this.url = `https://lichess.org/embed/${this.id}?theme=auto&bg=auto`
  }
}
