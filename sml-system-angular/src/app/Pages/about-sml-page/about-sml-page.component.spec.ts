import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSmlPageComponent } from './about-sml-page.component';

describe('AboutSmlPageComponent', () => {
  let component: AboutSmlPageComponent;
  let fixture: ComponentFixture<AboutSmlPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutSmlPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutSmlPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
