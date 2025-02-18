import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';
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
export class PanelsEditorComponent implements AfterViewInit {
  @ViewChild('panelsArea', { static: false }) panelsArea!: ElementRef;

  readonly PANEL_WIDTH = 25;
  readonly PANEL_HEIGHT = 15;
  readonly GRID_SIZE = 20;

  panelsAreaWidth = 1;  // Se actualizará dinámicamente
  panelsAreaHeight = 1;

  panels: Panel[] = [];

  examplePanel: Panel[] = [
    {
      id: 1,
      text: 'Panel Carrito de Productos',
      description: 'Escanea el código de barras del producto y agrega al carrito',
      color: '#EBEBEB',
      position: { x: 0, y: 0 },
      width: 70,
      height: 60
    },
    {
      id: 2,
      text: 'Panel información clientes',
      description: 'Busqueda o opción de creación de clientes',
      color: '#E8E8E8',
      position: { x: 75, y: 0 },
      width: this.PANEL_WIDTH,
      height: this.PANEL_HEIGHT
    },
    {
      id: 3,
      text: 'Panel información asesores',
      description: 'Información de asesores',
      color: '#ffffff',
      position: { x: 75, y: 20 },
      width: this.PANEL_WIDTH,
      height: this.PANEL_HEIGHT
    },
    {
      id: 4,
      text: 'Panel Clientes Pycca',
      description: 'Información de clientes Pycca',
      color: '#EBF3FF',
      position: { x: 75, y: 40 },
      width: this.PANEL_WIDTH,
      height: this.PANEL_HEIGHT
    },
    {
      id: 5,
      text: 'Panel Visualizar Promociones',
      description: 'Visualización de promociones',
      color: '#ffffff',
      position: { x: 0, y: 65 },
      width: 70,
      height: this.PANEL_HEIGHT
    },
    {
      id: 6,
      text: 'Panel Información de saldos',
      description: 'Desglosado de los saldos de la cuenta',
      color: '#F5FFCC',
      position: { x: 75, y: 60 },
      width: this.PANEL_WIDTH,
      height: this.PANEL_HEIGHT*2
    },
  ];

  selectedPanel: Panel | null = null;

  constructor() {
    this.panels = this.getPanelPositions();
    console.log(this.panels);
    if (this.panels.length === 0) {
      this.panels = this.examplePanel;
    }
  }

  ngAfterViewInit() {
    this.updatePanelsAreaSize();
  }

  updatePanelsAreaSize() {
    if (this.panelsArea) {
      this.panelsAreaWidth = this.panelsArea.nativeElement.clientWidth;
      this.panelsAreaHeight = this.panelsArea.nativeElement.clientHeight;
    }
  }

  onDragEnded(event: CdkDragEnd, panel: Panel): void {
    const element = event.source.element.nativeElement;
    const offsetX = element.offsetLeft;
    const offsetY = element.offsetTop;

    if (this.panelsAreaWidth && this.panelsAreaHeight) {
      let newX = (offsetX / this.panelsAreaWidth) * 100;
      let newY = (offsetY / this.panelsAreaHeight) * 100;

      // Evitar valores negativos y asegurarse de que no salga del área
      panel.position.x = Math.max(0, Math.min(newX, 100 - panel.width));
      panel.position.y = Math.max(0, Math.min(newY, 100 - panel.height));
    }

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
    const panels = JSON.stringify(this.panels);
    localStorage.setItem('panels', panels);
    console.log('Guardado', JSON.parse(panels));
  }

  private getPanelPositions(): Panel[] {
    const panels = localStorage.getItem('panels');
    return panels ? JSON.parse(panels) : [];
  }
}
