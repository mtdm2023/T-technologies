import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusComponentAvailable } from './status.component';

describe('StatusComponent', () => {
  let component: StatusComponentAvailable;
  let fixture: ComponentFixture<StatusComponentAvailable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusComponentAvailable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusComponentAvailable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
