import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend } from '@angular/http'
import { MockBackend, MockConnection } from '@angular/http/testing'

import environment from '../environments/environment'
import players from './stub-players'
import matches from './stub-matches'

const setupMockGet = (connection: MockConnection) => (url: String, stubs: Array<Object>) => {
  if (connection.request.method === RequestMethod.Get && connection.request.url.match(`/${url}$`)) {
    connection.mockRespond(new Response(new ResponseOptions({ body: stubs.slice() })))
    return
  }

  return
}

/**
 * Provider to allow the use of a stub backend instead of a real Http service for backend-less development.
 */
const StubBackendProvider = {
  provide: Http,
  deps: [MockBackend, BaseRequestOptions, XHRBackend],
  useFactory: (mockBackend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) => {

    if (!environment.stubBackend) {
      return new Http(realBackend, options)
    }


    mockBackend.connections.subscribe((connection: MockConnection) => {
      const mockGet = setupMockGet(connection)

      // Wrap in timeout to simulate server api call
      setTimeout(() => {
        mockGet('players', players)
        mockGet('player/[A-Za-z]*', players.filter(p => p.id === connection.request.url.split('/').pop()))

        mockGet('games', matches)
        mockGet('game/[A-Za-z]*', matches.filter(m => m.id === connection.request.url.split('/').pop()))
      }, 500)
    })

    return new Http(mockBackend, options)
  },
}

export default StubBackendProvider
