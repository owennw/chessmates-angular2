import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend } from '@angular/http'
import { MockBackend, MockConnection } from '@angular/http/testing'

import environment from '../environments/environment'
import players from './stub-players'

/**
 * Provider to allow the use of a stub backend instead of a real Http service for backend-less development.
 */
const StubBackendProvider = {
  provide: Http,
  deps: [MockBackend, BaseRequestOptions, XHRBackend],
  useFactory: (mockBackend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) => {

    if (!environment.stubBackend) {
      console.log('Configuring real Http backend...')
      return new Http(realBackend, options)
    }

    console.log('Configuring stub Http backend...')

    mockBackend.connections.subscribe((connection: MockConnection) => {

      // wrap in timeout to simulate server api call
      setTimeout(() => {

        // Get all tasks
        if (connection.request.method === RequestMethod.Get && connection.request.url.match('/players$')) {
          connection.mockRespond(new Response(new ResponseOptions({body: players.slice()})))
          return
        }
      }, 500)

    })

    return new Http(mockBackend, options)
  },
}

export default StubBackendProvider
