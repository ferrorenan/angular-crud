import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelContentComponent } from './panel-content.component';

describe('PanelContentComponent', () => {
  let component: PanelContentComponent;
  let fixture: ComponentFixture<PanelContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
