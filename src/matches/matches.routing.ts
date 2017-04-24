import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import Matches from './matches.component'
import MatchDetail from './detail/match-detail.component'

const routes: Routes = [
  { path: '', component: Matches },
  { path: ':id', component: MatchDetail },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export default class MatchesRouting {}
