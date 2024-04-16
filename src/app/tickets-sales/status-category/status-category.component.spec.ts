import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCategoryComponent } from './status-category.component';

describe('StatusCategoryComponent', () => {
  let component: StatusCategoryComponent;
  let fixture: ComponentFixture<StatusCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
