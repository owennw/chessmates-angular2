import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule, BaseRequestOptions } from '@angular/http'

import AppRoutingModule from './app-routing.module'

import StubBackendProvider from '../stub-backend/stub-backend.provider'
import { MockBackend } from '@angular/http/testing'

import { App } from './app.component'

import Heading from './heading.component'

import Dashboard from './dashboard/dashboard.component'

import Players from './players/players.component'
import PlayerDetail from './players/detail/player-detail.component'
import PlayersService from './players/players.service'

import Matches from './matches/matches.component'
import MatchDetail from './matches/detail/match-detail.component'
import MatchesService from './matches/matches.service'

import LichessService from './lichess/lichess.service'

import SafePipe from './safepipe'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    App,
    SafePipe,
    Heading,
    Dashboard,
    Players,
    PlayerDetail,
    Matches,
    MatchDetail,
  ],
  providers: [
    StubBackendProvider,
    MockBackend,
    BaseRequestOptions,
    PlayersService,
    MatchesService,
    LichessService,
  ],
  bootstrap: [
    App,
  ],
})

export default class AppModule { }
