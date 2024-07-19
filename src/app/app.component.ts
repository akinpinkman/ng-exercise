import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameModule } from './game/game.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-exercise';
}
