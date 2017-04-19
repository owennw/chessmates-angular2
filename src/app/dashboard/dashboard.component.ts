import { Component, OnInit } from '@angular/core'

import Game from '../games/game'
import GamesService from '../games/games.service'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
})

export default class Dashboard implements OnInit {
  games: Game[] = []

  constructor(private gameService: GamesService) {
  }

  ngOnInit(): void {
    this.gameService.getGames()
      .then(games => this.games = games.slice(1, 5))
  }
}
