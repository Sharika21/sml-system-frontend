import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNonwordSetPageComponent } from './create-nonword-set-page.component';

describe('CreateNonwordSetPageComponent', () => {
  let component: CreateNonwordSetPageComponent;
  let fixture: ComponentFixture<CreateNonwordSetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateNonwordSetPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateNonwordSetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
