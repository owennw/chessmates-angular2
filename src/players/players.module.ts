import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'

import ComponentsModule from '../components/components.module'

import Players from '../players/players.component'
import PlayerDetail from '../players/detail/player-detail.component'
import PlayersService from '../players/players.service'

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  declarations: [
    Players,
    PlayerDetail,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ],
  exports: [
    Players,
    PlayerDetail,
  ],
})

export default class PlayersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PlayersModule,
      providers: [PlayersService],
    }
  }
}
