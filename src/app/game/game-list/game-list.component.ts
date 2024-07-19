import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css',
})
export class GameListComponent implements OnInit {
  @Input() category: string = 'games';
  
  games: Game[] = [];
  
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames(this.category).subscribe((data) => {
      this.games = data;
      console.log(this.games);
    });
  }
}
