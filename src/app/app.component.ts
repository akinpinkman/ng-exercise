import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameModule } from './game/game.module';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-exercise';
}
