import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'

import ComponentsModule from '../components/components.module'

import Matches from './matches.component'
import MatchDetail from './detail/match-detail.component'
import MatchPlayer from './detail/match-player.component'
import MatchesService from './matches.service'

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  declarations: [
    Matches,
    MatchDetail,
    MatchPlayer,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ],
  exports: [
    Matches,
    MatchDetail,
    MatchPlayer,
  ],
})

export default class MatchesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatchesModule,
      providers: [MatchesService],
    }
  }
}