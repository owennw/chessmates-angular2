import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import PlayersService from './players.service'
import Player from './player'

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})

export default class Players implements OnInit {
  players: Player[] = []

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

  onSelect(player: Player): void {
    this.router.navigate(['/player', player.id])
  }
}
