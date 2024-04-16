import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratebuttonComponent } from './generatebutton.component';

describe('GeneratebuttonComponent', () => {
  let component: GeneratebuttonComponent;
  let fixture: ComponentFixture<GeneratebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratebuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneratebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
