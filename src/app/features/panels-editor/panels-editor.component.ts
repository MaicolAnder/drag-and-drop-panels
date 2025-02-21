import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragEnd, CdkDragMove, CdkDragStart, DragDropModule, DragRef, Point } from '@angular/cdk/drag-drop';
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
  isVisible?: boolean;
}

@Component({
  selector: 'app-panels-editor',
  standalone: true,
  imports: [CommonModule, DragDropModule, FormsModule, RouterModule],
  templateUrl: './panels-editor.component.html',
  styleUrl: './panels-editor.component.css'
})
export class PanelsEditorComponent implements AfterViewInit {
  @ViewChild('panelsArea', { static: false }) panelsArea!: ElementRef;

  readonly PANEL_WIDTH = 25;
  readonly PANEL_HEIGHT = 15;

  panelsAreaWidth = 1;  // Se actualizará dinámicamente
  panelsAreaHeight = 1;
  dragPosition = { x: 0, y: 0 };

  panels: Panel[] = [];

  // Update the example panels dimensions
  examplePanel: Panel[] = [
    {
      id: 1,
      text: 'Panel Carrito de Productos',
      description: 'Escanea el código de barras del producto y agrega al carrito',
      color: '#FFFFFF',
      position: { x: 1, y: 1 },
      width: 70,    // Increased width for main cart panel
      height: 65,    // Increased height for main cart panel
      isVisible: true
    },
    {
      id: 2,
      text: 'Panel información clientes',
      description: 'Busqueda o opción de creación de clientes',
      color: '#FFFFFF',
      position: { x: 76, y: 1 },
      width: 23,    // Adjusted width for right side panels
      height: 20,    // Adjusted height for right side panels
      isVisible: true
    },
    {
      id: 3,
      text: 'Panel información asesores',
      description: 'Información de asesores',
      color: '#FFFFFF',
      position: { x: 76, y: 22 },
      width: 23,
      height: 20,
      isVisible: true
    },
    {
      id: 4,
      text: 'Panel Clientes Pycca',
      description: 'Información de clientes Pycca',
      color: '#FFFFFF',
      position: { x: 76, y: 43 },
      width: 23,
      height: 20,
      isVisible: false
    },
    {
      id: 5,
      text: 'Visualizar Promociones',
      description: 'Visualización de promociones',
      color: '#ffffff',
      position: { x: 1, y: 68 },
      width: 70,
      height: this.PANEL_HEIGHT,
      isVisible: false
    },
    {
      id: 6,
      text: 'Información de saldos',
      description: 'Desglosado de los saldos de la cuenta',
      color: '#F5FFCC',
      position: { x: 76, y: 64 },
      width: 23,
      height: this.PANEL_HEIGHT*2,
      isVisible: true
    },
  ];

  selectedPanel: Panel | null = null;

  constructor() {
    this.panels = this.examplePanel;
    if (this.panels.length === 0) {
      // Initialize example panels with visibility
      this.panels = this.examplePanel.map(panel => ({ ...panel, isVisible: true }));
    }
  }

  ngAfterViewInit() {
    this.updatePanelsAreaSize();
  }

  toggleCardStatus(panel: Panel): void {
    panel.isVisible = !panel.isVisible;
    console.log(`Card ${panel.id} está ${panel.isVisible ? 'activada' : 'inactivada'}`);
  }

  updatePanelsAreaSize() {
    if (this.panelsArea) {
      this.panelsAreaWidth = this.panelsArea.nativeElement.clientWidth;
      this.panelsAreaHeight = this.panelsArea.nativeElement.clientHeight;
    }
  }

  onDragEnded(event: CdkDragEnd, panel: any): void {
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

  togglePanelVisibility(): void {
    if (this.selectedPanel) {
      this.selectedPanel.isVisible = !this.selectedPanel.isVisible;
      this.savePanelPositions();
    }
  }

  private savePanelPositions(): void {
    const panels = JSON.stringify(this.panels);
    localStorage.setItem('panels', panels);
    console.log('Guardado', JSON.parse(panels));
  }

  getPanelPositions(){
    const panels = localStorage.getItem('panels');
    return panels ? JSON.parse(panels) : [];
  }

}
