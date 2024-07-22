import { Component, ElementRef, Renderer2 } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isSidebarOpen$ = this.sidebarService.isSidebarOpen$;

  constructor(
    private sidebarService: SidebarService,
    private renderer: Renderer2,
    private el: ElementRef,
  ) {}

  toggleSidebar() {
    this.sidebarService.toggleSidebar();

    const sideBarContainer =
      this.el.nativeElement.querySelector('.sideBarContainer');
    if (sideBarContainer) {
      const currentWidth = sideBarContainer.style.width;
      if (currentWidth === '200px') {
        this.renderer.removeStyle(sideBarContainer, 'width');
      } else {
        this.renderer.setStyle(sideBarContainer, 'width', '200px');
      }
    }
  }
}
