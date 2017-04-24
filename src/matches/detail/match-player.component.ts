import { Component, Input } from '@angular/core'

import { IMatch } from '../match'
import { IPlayer } from '../../players/player'

@Component({
  selector: 'match-player',
  templateUrl: './match-player.component.html',
})

export default class MatchPlayer {
  @Input() match: IMatch
  @Input() player: IPlayer
}
