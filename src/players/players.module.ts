import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core'

import ComponentsModule from '../components/components.module'

import Players from '../players/players.component'
import PlayerDetail from '../players/detail/player-detail.component'
import PlayersService from '../players/players.service'

import PlayersRouting from './players.routing'

@NgModule({
  imports: [
    ComponentsModule,
    PlayersRouting,
  ],
  declarations: [
    Players,
    PlayerDetail,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
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
