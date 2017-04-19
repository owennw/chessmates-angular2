import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule, BaseRequestOptions } from '@angular/http'

import AppRoutingModule from './app-routing.module'

import StubBackendProvider from '../stub-backend/stub-backend.provider'
import { MockBackend } from '@angular/http/testing'

import { App } from './app.component'

import Heading from './heading.component'

import Players from './players/players.component'
import PlayerDetail from './players/detail/player-detail.component'
import PlayersService from './players/players.service'

import Games from './games/games.component'
import GameDetail from './games/detail/game-detail.component'
import GamesService from './games/games.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    App,
    Heading,
    Players,
    PlayerDetail,
    Games,
    GameDetail,
  ],
  providers: [
    StubBackendProvider,
    MockBackend,
    BaseRequestOptions,
    PlayersService,
    GamesService,
  ],
  bootstrap: [
    App,
  ],
})

export default class AppModule { }
