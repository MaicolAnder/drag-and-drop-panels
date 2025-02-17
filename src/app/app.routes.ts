import { Routes } from '@angular/router';
import { PanelsEditorComponent } from './features/panels-editor/panels-editor.component';
import { PanelsViewerComponent } from './features/panels-viewer/panels-viewer.component';

export const routes: Routes = [
  { path: '', redirectTo: 'editor', pathMatch: 'full' },
  { path: 'editor', component: PanelsEditorComponent },
  { path: 'viewer', component: PanelsViewerComponent }
];
