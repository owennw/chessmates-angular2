import Player from '../players/player'

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
}

interface ILichessUser {
  id: string
  username: string
  online: boolean
  language: string
  perfs: IChessTypes
  createdAt: number
  seenAt: number
}

class LichessUser implements Player {
  id: string
  username: string
  online: boolean
  language: string
  blitz: ILichessTypeStats
  bullet: ILichessTypeStats
  correspondence: ILichessTypeStats
  puzzle: ILichessTypeStats
  classical: ILichessTypeStats
  createdAt: number
  seenAt: number

  constructor(lichessUser: ILichessUser) {
    this.id = lichessUser.id
    this.username = lichessUser.username
    this.online = lichessUser.online
    this.language = lichessUser.language
    this.blitz = lichessUser.perfs.blitz as ILichessTypeStats
    this.bullet = lichessUser.perfs.bullet as ILichessTypeStats
    this.correspondence = lichessUser.perfs.correspondence as ILichessTypeStats
    this.puzzle = lichessUser.perfs.puzzle as ILichessTypeStats
    this.classical = lichessUser.perfs.classical as ILichessTypeStats
    this.createdAt = lichessUser.createdAt
    this.seenAt = lichessUser.seenAt
  }
}

export default LichessUser
