import { Component } from '@angular/core';
import { NavbarLateralComponent } from "./shared/components/navbar-lateral/navbar-lateral.component";
import { PanelsEditorComponent } from "./features/panels-editor/panels-editor.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [PanelsEditorComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pycca';
}
