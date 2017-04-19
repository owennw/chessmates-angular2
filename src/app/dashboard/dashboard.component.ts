import { Component, OnInit } from '@angular/core'

import Match from '../matches/match'
import MatchesService from '../matches/matches.service'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
})

export default class Dashboard implements OnInit {
  matches: Match[] = []

  constructor(private matchService: MatchesService) {
  }

  ngOnInit(): void {
    this.matchService.getMatches()
      .then(matches => this.matches = matches.slice(0, 9))
  }
}
