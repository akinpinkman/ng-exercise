import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from '../../../services/game.service';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css',
})
export class GameListComponent implements OnInit, AfterViewInit {
  @Input() category: string = '';
  @Input() title: string = '';

  swiper!: Swiper;

  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames(this.category).subscribe((data) => {
      this.games = data;
    });
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper', {
      slidesPerView: 8,
      spaceBetween: 0,
      slidesPerGroup: 8,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}
