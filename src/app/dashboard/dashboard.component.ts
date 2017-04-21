import { Component, OnInit } from '@angular/core'

import { IMatch } from '../matches/match'
import MatchesService from '../matches/matches.service'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
})

export default class Dashboard implements OnInit {
  matches: IMatch[] = []
  filteredMatches: IMatch[] = []
  options: number[]
  defaultOption: number

  constructor(private matchService: MatchesService) {
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
}
