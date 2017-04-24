import { Routes } from '@angular/router'

import Players from './players.component'
import PlayerDetail  from './detail/player-detail.component'

const routes: Routes = [
  { path: 'players', component: Players },
  { path: 'player/:id', component: PlayerDetail },
]

export default routes
