import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import Players from './players.component'
import PlayerDetail  from './detail/player-detail.component'

const routes: Routes = [
  { path: '', component: Players },
  { path: ':id', component: PlayerDetail },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export default class PlayersRouting {}
