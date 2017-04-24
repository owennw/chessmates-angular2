import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core'

import ComponentsModule from '../components/components.module'

import Leaderboard from './leaderboard.component'

import LeaderboardRouting from './leaderboard.routing'

@NgModule({
  imports: [
    ComponentsModule,
    LeaderboardRouting,
  ],
  declarations: [
    Leaderboard,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ],
})

export default class LeaderboardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LeaderboardModule,
      providers: [],
    }
  }
}
