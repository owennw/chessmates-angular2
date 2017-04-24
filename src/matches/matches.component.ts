import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { IMatch } from './match'
import MatchesService from './matches.service'

@Component({
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
})

export default class Matches implements OnInit {
 matches: IMatch[] = []
  filteredMatches: IMatch[] = []
  options: number[]
  defaultOption: number

  constructor(
    private matchService: MatchesService,
    private router: Router
  ) {
    this.options = [3, 6, 9]
    this.defaultOption = 6
  }

  filter(number: number) {
    this.filteredMatches = this.matches.slice(0, number)
  }

  ngOnInit(): void {
    this.matchService.getMatches()
      .then(matches => this.matches = matches)
      .then(() => this.filter(this.defaultOption))
  }

  onFilterChange(value: number) {
    this.filter(value)
  }

  onSelect(match: IMatch): void {
    this.router.navigate(['/matches', match.id])
  }
}
