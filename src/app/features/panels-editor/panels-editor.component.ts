import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Panel {
  id: number;
  text: string;
  description: string;
  color: string;
  position: { x: number; y: number };
  width: number;
  height: number;
}

@Component({
  selector: 'app-panels-editor',
  standalone: true,
  imports: [CommonModule, DragDropModule, FormsModule, RouterModule],
  templateUrl: './panels-editor.component.html',
  styleUrl: './panels-editor.component.css'
})
export class PanelsEditorComponent {
  readonly PANEL_WIDTH = 400;
  readonly PANEL_HEIGHT = 120;
  readonly GRID_SIZE = 20;

  panels: Panel[] = [
    {
      id: 1,
      text: 'Panel Carrito de Productos',
      description: 'Escanea el código de barras del producto y agrega al carrito',
      color: '#EBEBEB',
      position: { x: 0, y: 20 },
      width: 600,
      height: 600
    },
    {
      id: 2,
      text: 'Panel información clientes',
      description: 'Busqueda o opción de creación de clientes',
      color: '#E8E8E8',
      position: { x: 630, y: 20 },
      width: this.PANEL_WIDTH,
      height: this.PANEL_HEIGHT
    },
    {
      id: 3,
      text: 'Panel información asesores',
      description: 'Información de asesores',
      color: '#ffffff', position: { x: 630, y: 160 },
      width: this.PANEL_WIDTH,
      height: this.PANEL_HEIGHT
    },
    {
      id: 4,
      text: 'Panel Clientes Pycca',
      description: 'Información de clientes Pycca',
      color: '#EBF3FF',
      position: { x: 630, y: 300 },
      width: this.PANEL_WIDTH,
      height: this.PANEL_HEIGHT
    },
    {
      id: 5,
      text: 'Panel Visualizar Promociones',
      description: 'Visualización de promociones',
      color: '#ffffff',
      position: { x: 0, y: 650 },
      width: 600,
      height: this.PANEL_HEIGHT
    },
    {
      id: 6,
      text: 'Panel Información de saldos',
      description: 'Desglosado de los saldos de la cuenta',
      color: '#F5FFCC',
      position: { x: 630, y: 440 },
      width: this.PANEL_WIDTH,
      height: this.PANEL_HEIGHT*3
    },
  ];

  selectedPanel: Panel | null = null;

  onDragEnded(event: any, panel: Panel): void {
    console.log(event, panel);
    this.savePanelPositions();
  }

  selectPanel(panel: Panel): void {
    this.selectedPanel = panel;
  }

  updatePanelText(text: string): void {
    if (this.selectedPanel) {
      this.selectedPanel.text = text;
      this.savePanelPositions();
    }
  }

  updatePanelColor(color: string): void {
    if (this.selectedPanel) {
      this.selectedPanel.color = color;
      this.savePanelPositions();
    }
  }

  private savePanelPositions(): void {
    localStorage.setItem('panels', JSON.stringify(this.panels));
  }

  private getPanelPositions(): Panel[] {
    const panels = localStorage.getItem('panels');
    return panels ? JSON.parse(panels) : [];
  }
}
