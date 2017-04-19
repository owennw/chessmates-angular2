import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import Players from './players/players.component'
import PlayerDetail  from './players/detail/player-detail.component'

import Games from './games/games.component'
import GameDetail from './games/detail/game-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: 'player/:id', component: PlayerDetail },
  { path: 'players', component: Players },
  { path: 'games', component: Games },
  { path: 'game/:id', component: GameDetail },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export default class AppRoutingModule { }
