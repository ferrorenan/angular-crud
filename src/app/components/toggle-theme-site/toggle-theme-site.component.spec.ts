import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleThemeSiteComponent } from './toggle-theme-site.component';

describe('ToggleThemeSiteComponent', () => {
  let component: ToggleThemeSiteComponent;
  let fixture: ComponentFixture<ToggleThemeSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleThemeSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleThemeSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
