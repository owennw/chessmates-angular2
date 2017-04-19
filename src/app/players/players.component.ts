import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import Player from './player'
import PlayersService from './players.service'

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})

export default class Players implements OnInit {
  players: Player[]
  selectedPlayer: Player

  constructor(
    private playerService: PlayersService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getPlayers()
  }

  getPlayers(): void {
    this.playerService.getPlayers()
      .then(players => this.players = players)
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPlayer.id])
  }
}
