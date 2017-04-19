import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import Players from './players/players.component'
import PlayerDetail  from './players/detail/player-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: 'detail/:id', component: PlayerDetail },
  { path: 'players', component: Players },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export default class AppRoutingModule { }
