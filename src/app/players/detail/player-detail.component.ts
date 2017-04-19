import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'

import LichessService from '../../lichess/lichess.service'
import LichessUser from '../../lichess/lichess-user'

@Component({
  selector: 'player',
  templateUrl: './player-detail.component.html',
  styleUrls: [ './player-detail.component.css' ],
})

export default class PlayerDetailComponent implements OnInit {
  player: LichessUser

  constructor(
    private playerService: LichessService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.playerService.getUser(params['id']))
      .subscribe(player => this.player = player)
  }

  goBack(): void {
    this.location.back()
  }
}
