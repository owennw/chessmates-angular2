import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import Player from './player'

import { baseUrl } from '../config'

@Injectable()
export default class PlayerService {
  private playersUrl = `${baseUrl}/players`

  constructor(private http: Http) {
  }

  getPlayers(): Promise<Player[]> {
    return this.http
      .get(this.playersUrl)
      .toPromise()
      .then(response => response.json() as Player[])
      .catch(this.handleError)
  }

  getPlayer(id: string): Promise<Player> {
    return this.getPlayers()
      .then(players => players.find((p: Player) => p.id === id))
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }
}
