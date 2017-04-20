import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'lichess-app',
  template: `
    <header>Chessmates</header>
    <nav>
      <ul>
        <li><a routerLink="/dashboard">Home</a></li>
        <li><a routerLink="/matches">Matches</a></li>
        <li><a routerLink="/players">Players</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ './styles/styles.css', './app.component.css' ],
  encapsulation: ViewEncapsulation.None,
})

export class App {
}
