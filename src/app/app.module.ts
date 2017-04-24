import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule, BaseRequestOptions } from '@angular/http'

import AppRoutingModule from './app-routing.module'

import StubBackendProvider from '../stub-backend/stub-backend.provider'
import { MockBackend } from '@angular/http/testing'

import { App } from './app.component'

import ComponentsModule from '../components/components.module'

import Dashboard from '../dashboard/dashboard.component'

import PlayersModule from '../players/players.module'
import MatchesModule from '../matches/matches.module'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ComponentsModule,
    MatchesModule.forRoot(),
    PlayersModule.forRoot(),
  ],
  declarations: [
    App,
    Dashboard,
  ],
  providers: [
    StubBackendProvider,
    MockBackend,
    BaseRequestOptions,
  ],
  bootstrap: [
    App,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ],
})

export default class AppModule { }
