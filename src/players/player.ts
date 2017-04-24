interface ILichessTypeStats {
  games: number
  rating: number
  prog: number
}

interface IChessTypes {
  blitz: ILichessTypeStats
  bullet: ILichessTypeStats
  correspondence: ILichessTypeStats
  puzzle: ILichessTypeStats
  classical: ILichessTypeStats
  crazyhouse: ILichessTypeStats
}

export interface IPlayer {
  id: string
  username: string
  online: boolean
  language: string
  blitz: ILichessTypeStats
  bullet: ILichessTypeStats
  correspondence: ILichessTypeStats
  puzzle: ILichessTypeStats
  classical: ILichessTypeStats
  createdAt: Date
  seenAt: Date
}

interface IPlayerRaw {
  id: string
  username: string
  online: boolean
  language: string
  perfs: IChessTypes
  createdAt: number
  seenAt: number
}

class Player implements IPlayer {
  id: string
  username: string
  online: boolean
  language: string
  blitz: ILichessTypeStats
  bullet: ILichessTypeStats
  correspondence: ILichessTypeStats
  puzzle: ILichessTypeStats
  classical: ILichessTypeStats
  createdAt: Date
  seenAt: Date

  constructor(player: IPlayerRaw) {
    this.id = player.id
    this.username = player.username
    this.online = player.online
    this.language = player.language
    this.blitz = player.perfs.blitz as ILichessTypeStats
    this.bullet = player.perfs.bullet as ILichessTypeStats
    this.correspondence = player.perfs.correspondence as ILichessTypeStats
    this.puzzle = player.perfs.puzzle as ILichessTypeStats
    this.classical = player.perfs.classical as ILichessTypeStats
    this.createdAt = new Date(player.createdAt)
    this.seenAt = new Date(player.seenAt)
  }
}

export default Player
