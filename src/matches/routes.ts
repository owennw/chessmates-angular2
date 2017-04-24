import { Routes } from '@angular/router'

import Matches from './matches.component'
import MatchDetail from './detail/match-detail.component'

const routes: Routes = [
  { path: 'matches', component: Matches },
  { path: 'match/:id', component: MatchDetail },
]

export default routes
