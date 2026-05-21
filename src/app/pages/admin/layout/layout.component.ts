// admin-layout.component.ts
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminHeaderComponent } from '../../../components/admin/header/header.component';
import { AdminSidebarComponent } from '../../../components/admin/sidebar/sidebar.component';
@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, AdminSidebarComponent, AdminHeaderComponent],
  templateUrl: './layout.html',
})
export class AdminLayoutComponent {
  isMenuOpen = signal(false);
}