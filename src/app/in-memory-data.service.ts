import { InMemoryDbService } from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      players: [
        { 'id': 'jfaker', 'username': 'jfaker' },
        { 'id': 'riciardos', 'username': 'riciardos' },
        { 'id': 'samei07', 'username': 'samei07' },
        { 'id': 'sydeman', 'username': 'sydeman' },
        { 'id': 'torrlane', 'username': 'torrlane' },
        { 'id': 'owennw', 'username': 'owennw' },
        { 'id': 'jedrus07', 'username': 'jedrus07' },
      ],
    }
  }
}
