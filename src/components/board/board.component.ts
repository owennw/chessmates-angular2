import { Component, Input } from '@angular/core'

@Component({
  selector: 'board',
  template: '<iframe class="board" [src]="url | safe"></iframe>',
  styleUrls: [ './board.component.css' ],
})

export default class Board {
  @Input() url: string
}
