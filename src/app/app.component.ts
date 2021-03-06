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
        <li><a routerLink="/leaderboard">Leaderboard</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
    <footer>Version: 1.0.0; Last Updated: 20/04/2014</footer>
  `,
  styleUrls: [ '../styles/styles.css', './app.component.css' ],
  encapsulation: ViewEncapsulation.None,
})

export class App {
}
