import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'

import PlayersService from '../players.service'
import { IPlayer } from '../player'

@Component({
  templateUrl: './player-detail.component.html',
  styleUrls: [ './player-detail.component.css' ],
})

export default class PlayerDetailComponent implements OnInit {
  player: IPlayer

  constructor(
    private playersService: PlayersService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.playersService.getPlayer(params['id']))
      .subscribe(player => this.player = player)
  }

  goBack(): void {
    this.location.back()
  }
}
