import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import Match, { IMatch } from './match'

import { baseUrl } from '../config'

@Injectable()
export default class MatchesService {
  private matchesUrl = `${baseUrl}/games`

  constructor(private http: Http) {
  }

  getMatches(): Promise<IMatch[]> {
    return this.http
      .get(this.matchesUrl)
      .toPromise()
      .then(response => response.json().map((r: any) => new Match(r)))
      .catch(this.handleError)
  }

  getMatch(id: string): Promise<Match> {
    return this.getMatches()
      .then(matches => matches.find((m: IMatch) => m.id === id))
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }
}
