import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelsEditorComponent } from './panels-editor.component';

describe('PanelsEditorComponent', () => {
  let component: PanelsEditorComponent;
  let fixture: ComponentFixture<PanelsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelsEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
