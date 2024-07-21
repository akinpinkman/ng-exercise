import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isSidebarOpen$ = this.sidebarService.isSidebarOpen$;

  constructor(private sidebarService: SidebarService) {}

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
