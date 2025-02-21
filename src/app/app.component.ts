import { Component } from '@angular/core';
import { NavbarLateralComponent } from "./shared/components/navbar-lateral/navbar-lateral.component";
import { PanelsEditorComponent } from "./features/panels-editor/panels-editor.component";
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pycca';
}
