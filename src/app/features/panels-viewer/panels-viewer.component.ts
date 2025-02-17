import { Component, OnInit } from '@angular/core';
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
export class PanelsViewerComponent implements OnInit {
  panels: Panel[] = [];

  ngOnInit(): void {
    this.loadPanels();
  }

  private loadPanels(): void {
    const savedPanels = localStorage.getItem('panels');
    if (savedPanels) {
      this.panels = JSON.parse(savedPanels);
      console.log(this.panels);
    }
  }
}
