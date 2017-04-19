import { Component } from '@angular/core'

@Component({
  selector: 'lichess-app',
  template: `
    <heading [text]="title"></heading>
    <nav>
      <a routerLink="/dashboard">Home</a>
      <a routerLink="/games">Games</a>
      <a routerLink="/players">Players</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ './app.component.css' ],
})

export class App {
  title = 'Chessmates'
}
