import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import Game from './game'

import { baseUrl } from '../config'

@Injectable()
export default class GamesService {
  private gamesUrl = `${baseUrl}/games`

  constructor(private http: Http) {
  }

  getGames(): Promise<Game[]> {
    return this.http
      .get(this.gamesUrl)
      .toPromise()
      .then(response => response.json() as Game[])
      .catch(this.handleError)
  }

  getGame(id: string): Promise<Game> {
    return this.getGames()
      .then(games => games.find((g: Game) => g.id === id))
      .then(g => { console.log(g); return g })
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }
}
