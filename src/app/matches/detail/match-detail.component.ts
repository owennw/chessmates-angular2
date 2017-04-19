import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'

import MatchesService from '../matches.service'

import Match from '../match'

@Component({
  selector: 'match',
  templateUrl: './match-detail.component.html',
  styleUrls: [ './match-detail.component.css' ],
})

export default class MatchComponent implements OnInit {
  match: Match

  constructor(
    private matchesService: MatchesService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.matchesService.getMatch(params['id']))
      .subscribe(match => this.match = match)
  }

  goBack(): void {
    this.location.back()
  }
}
