import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css',
})
export class GameListComponent implements OnInit {
  games: Game[] = [];
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe((data) => {
      this.games = data;
      console.log(this.games);
    });
  }
}
