import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  menuItems = [
    { icon: 'home', route: '/home', label: 'Home' },
    { icon: 'users', route: '/users', label: 'Users' },
    { icon: 'grid', route: '/apps', label: 'Apps' },
    { icon: 'shopping-cart', route: '/cart', label: 'Cart' },
    { icon: 'camera', route: '/camera', label: 'Camera' },
    { icon: 'dollar-sign', route: '/payments', label: 'Payments' },
    { icon: 'credit-card', route: '/cards', label: 'Cards' },
    { icon: 'arrow-right', route: '/next', label: 'Next' },
    { icon: 'arrow-left', route: '/back', label: 'Back' },
    { icon: 'calendar', route: '/calendar', label: 'Calendar' },
    { icon: 'wifi', route: '/wifi', label: 'Wifi' },
    { icon: 'lock', route: '/security', label: 'Security' },
    { icon: 'building', route: '/company', label: 'Company' },
    { icon: 'settings', route: '/settings', label: 'Settings' }
  ];
}
