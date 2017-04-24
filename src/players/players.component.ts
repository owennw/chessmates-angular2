import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import PlayersService from './players.service'
import { IPlayer } from './player'

@Component({
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})

export default class Players implements OnInit {
  players: IPlayer[] = []

  constructor(
    private playersService: PlayersService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getPlayers()
  }

  getPlayers(): void {
    this.playersService.getPlayers()
      .then(players => this.players = players)
  }

  onSelect(player: IPlayer): void {
    this.router.navigate(['/players', player.id])
  }
}
