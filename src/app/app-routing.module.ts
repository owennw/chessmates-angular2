import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import Dashboard from '../dashboard/dashboard.component'

import matchRoutes from '../matches/routes'
import playersRoutes from '../players/routes'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  ...matchRoutes,
  ...playersRoutes,
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export default class AppRoutingModule { }
