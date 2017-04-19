import { Component } from '@angular/core'

@Component({
  selector: 'lichess-app',
  template: `
    <heading [text]="title"></heading>
    <nav>
      <ul>
        <li><a routerLink="/dashboard">Home</a></li>
        <li><a routerLink="/matches">Matches</a></li>
        <li><a routerLink="/players">Players</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ './app.component.css' ],
})

export class App {
  title = 'Chessmates'
}
