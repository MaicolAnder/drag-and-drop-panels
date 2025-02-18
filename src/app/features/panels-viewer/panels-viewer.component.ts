import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  selector: 'app-panels-viewer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './panels-viewer.component.html',
  styleUrls: ['./panels-viewer.component.css']
})
export class PanelsViewerComponent implements AfterViewInit {
  @ViewChild('panelsContainer', { static: false }) panelsContainer!: ElementRef;

  panelsAreaWidth = 1;
  panelsAreaHeight = 1;
  panels: Panel[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.loadPanels();
  }

  loadPanels() {
    const panelsData = localStorage.getItem('panels');
    if (panelsData) {
      this.panels = JSON.parse(panelsData);
    }

    if (this.panelsContainer) {
      this.panelsAreaWidth = this.panelsContainer.nativeElement.clientWidth;
      this.panelsAreaHeight = this.panelsContainer.nativeElement.clientHeight;
    }

    // ✅ Forzar la detección de cambios para evitar el error NG0100
    this.cdr.detectChanges();
  }

  getPanelStyle(panel: Panel) {
    return {
      left: (panel.position.x / 100) * this.panelsAreaWidth + 'px',
      top: (panel.position.y / 100) * this.panelsAreaHeight + 'px',
      width: (panel.width / 100) * this.panelsAreaWidth + 'px',
      height: (panel.height / 100) * this.panelsAreaHeight + 'px',
      backgroundColor: panel.color
    };
  }
}
