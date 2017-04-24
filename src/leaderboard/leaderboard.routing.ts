import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import Leaderboard from './leaderboard.component'

const routes: Routes = [
  { path: '', component: Leaderboard },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export default class LeaderboardRouting {}
