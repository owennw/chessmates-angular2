import { Component, Input } from '@angular/core'

@Component({
  selector: 'heading',
  template: '<h1>{{text}}</h1>',
  styleUrls: ['./heading.component.css'],
})

export default class Heading {
  @Input() text: string
}
