import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMainMenuComponent } from './side-main-menu.component';

describe('SideMainMenuComponent', () => {
  let component: SideMainMenuComponent;
  let fixture: ComponentFixture<SideMainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMainMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
