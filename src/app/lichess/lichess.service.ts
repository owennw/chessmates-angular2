import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import LichessUser from './lichess-user'

@Injectable()
export default class MatchesService {
  private baseUrl = 'https://en.lichess.org/api'

  constructor(private http: Http) {
  }

  getUser(id: string): Promise<LichessUser> {
    return this.http
      .get(`${this.baseUrl}/user/${id}`)
      .toPromise()
      .then(response => new LichessUser(response.json()))
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }
}
