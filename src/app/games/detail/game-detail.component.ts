import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'

import GamesService from '../games.service'

import Game from '../game'

@Component({
  selector: 'game',
  templateUrl: './game-detail.component.html',
  styleUrls: [ './game-detail.component.css' ],
})

export default class GameComponent implements OnInit {
  game: Game

  constructor(
    private gameService: GamesService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.gameService.getGame(params['id']))
      .subscribe(game => this.game = game)
  }

  goBack(): void {
    this.location.back()
  }
}
