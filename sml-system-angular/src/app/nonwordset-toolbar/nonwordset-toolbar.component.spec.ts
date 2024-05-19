import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonwordsetToolbarComponent } from './nonwordset-toolbar.component';

describe('NonwordsetToolbarComponent', () => {
  let component: NonwordsetToolbarComponent;
  let fixture: ComponentFixture<NonwordsetToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NonwordsetToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonwordsetToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
