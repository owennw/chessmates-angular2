import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import PlayersService from './players.service'

import LichessUser from '../lichess/lichess-user'
import LichessService from '../lichess/lichess.service'

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})

export default class Players implements OnInit {
  players: LichessUser[] = []

  constructor(
    private playerService: PlayersService,
    private lichessService: LichessService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getPlayers()
  }

  getPlayers(): void {
    this.playerService.getPlayers()
      .then(players => players.forEach(p =>
        this.lichessService.getUser(p.id).then(u => this.players.push(u)))
      )
  }

  onSelect(player: LichessUser): void {
    this.router.navigate(['/player', player.id])
  }
}
