import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  headerActions = [
    { icon: 'calculator', label: 'Calculadora' },
    { icon: 'pause-circle', label: 'Pausar Venta' },
    { icon: 'play-circle', label: 'Continuar Venta' },
    { icon: 'lock', label: 'Bloquear Caja' },
    { icon: 'file-text', label: 'Recaudo' }
  ];
}
