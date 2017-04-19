import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import Game from './game'
import GamesService from './games.service'

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})

export default class Games implements OnInit {
  games: Game[]
  selectedGame: Game

  constructor(
    private gamesService: GamesService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getGames()
  }

  getGames(): void {
    this.gamesService.getGames()
      .then(games => this.games = games)
  }

  onSelect(game: Game): void {
    this.selectedGame = game
  }

  gotoDetail(): void {
    this.router.navigate(['/game', this.selectedGame.id])
  }
}
