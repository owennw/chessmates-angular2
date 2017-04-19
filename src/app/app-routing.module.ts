import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import Dashboard from './dashboard/dashboard.component'

import Players from './players/players.component'
import PlayerDetail  from './players/detail/player-detail.component'

import Matches from './matches/matches.component'
import MatchDetail from './matches/detail/match-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'player/:id', component: PlayerDetail },
  { path: 'players', component: Players },
  { path: 'matches', component: Matches },
  { path: 'match/:id', component: MatchDetail },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export default class AppRoutingModule { }
