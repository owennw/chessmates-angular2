import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import Match from './match'
import MatchesService from './matches.service'

@Component({
  selector: 'matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
})

export default class Matches implements OnInit {
  matches: Match[]
  selectedMatch: Match

  constructor(
    private matchesService: MatchesService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getMatches()
  }

  getMatches(): void {
    this.matchesService.getMatches()
      .then(matches => this.matches = matches)
  }

  onSelect(match: Match): void {
    this.selectedMatch = match
  }

  gotoDetail(): void {
    this.router.navigate(['/match', this.selectedMatch.id])
  }
}
