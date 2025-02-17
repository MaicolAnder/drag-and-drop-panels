import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-lateral',
  imports: [CommonModule],
  templateUrl: './navbar-lateral.component.html',
  styleUrl: './navbar-lateral.component.css'
})
export class NavbarLateralComponent {
  menuItems = [
    { title: 'Clientes', completed: true },
    { title: 'Caja', completed: true },
    { title: 'Ventas', completed: true },
    { title: 'Recaudaciones', completed: true },
    { title: 'Promociones', completed: true },
    { title: 'Notas de crédito', completed: true },
    { title: 'Cambios de cheque', completed: true },
    { title: 'Precancelación difer...', completed: true }
  ];

  onlineItems = [
    { title: 'Bloquear caja' },
    { title: 'Unidad de negocio' }
  ];
}
