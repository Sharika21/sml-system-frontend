import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNonwordsetPageComponent } from './create-nonwordset-page.component';

describe('CreateNonwordsetPageComponent', () => {
  let component: CreateNonwordsetPageComponent;
  let fixture: ComponentFixture<CreateNonwordsetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateNonwordsetPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateNonwordsetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
