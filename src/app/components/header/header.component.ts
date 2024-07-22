import { Component, ElementRef, Renderer2 } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe, CommonModule, SidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isSidebarOpen$ = this.sidebarService.isSidebarOpen$;

  constructor(
    private sidebarService: SidebarService,
    private renderer: Renderer2,
    private elementReft: ElementRef,
  ) {}

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
