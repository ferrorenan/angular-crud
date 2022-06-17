import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultButtonLinkComponent } from './default-button-link.component';

describe('DefaultButtonLinkComponent', () => {
  let component: DefaultButtonLinkComponent;
  let fixture: ComponentFixture<DefaultButtonLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultButtonLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultButtonLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
