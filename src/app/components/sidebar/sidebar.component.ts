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
  constructor(
    private sidebarService: SidebarService,
    private renderer: Renderer2,
    private el: ElementRef,
  ) {}

  toggleSidebar() {
    this.sidebarService.toggleSidebar();

    const buttonContainer =
      this.el.nativeElement.querySelector('.buttonContainer');
    if (buttonContainer) {
      const currentWidth = buttonContainer.style.width;
      if (currentWidth === '10%') {
        this.renderer.removeStyle(buttonContainer, 'width');
      } else {
        this.renderer.setStyle(buttonContainer, 'width', '10%');
      }
    }
  }
}
