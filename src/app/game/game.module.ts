import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list/game-list.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [GameListComponent],
  imports: [CommonModule, MatCardModule],
  exports: [GameListComponent],
})
export class GameModule {}
