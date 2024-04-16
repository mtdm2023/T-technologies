import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHederCardComponent } from './user-heder-card.component';

describe('UserHederCardComponent', () => {
  let component: UserHederCardComponent;
  let fixture: ComponentFixture<UserHederCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserHederCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserHederCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
