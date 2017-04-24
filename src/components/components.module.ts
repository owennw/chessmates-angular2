import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import Page from './page/page.component'
import PageHeader from './page/page-header.component'
import Panel from './panel/panel.component'
import Board from './board/board.component'
import SafePipe from './board/safepipe'
import Row from './row/row.component'

@NgModule({
  imports: [CommonModule],
  declarations: [
    Page,
    PageHeader,
    Panel,
    Board,
    SafePipe,
    Row,
  ],
  exports: [
    Page,
    PageHeader,
    Panel,
    Board,
    Row,
  ],
})

export default class ComponentsModule {}
