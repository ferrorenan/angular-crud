import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureContainerComponent } from './structure-container.component';

describe('StructureContainerComponent', () => {
  let component: StructureContainerComponent;
  let fixture: ComponentFixture<StructureContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructureContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
