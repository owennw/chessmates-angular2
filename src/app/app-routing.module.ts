import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import Dashboard from '../dashboard/dashboard.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'matches', loadChildren: '../matches/matches.module' },
  { path: 'players', loadChildren: '../players/players.module' },
  { path: 'leaderboard', loadChildren: '../leaderboard/leaderboard.module' },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export default class AppRoutingModule { }
