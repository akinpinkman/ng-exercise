import { Routes } from '@angular/router';
import { GameListComponent } from './game/game-list/game-list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: GameListComponent,
  },
];
