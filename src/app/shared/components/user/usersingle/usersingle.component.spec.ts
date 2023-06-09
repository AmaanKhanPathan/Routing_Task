import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersingleComponent } from './usersingle.component';

describe('UsersingleComponent', () => {
  let component: UsersingleComponent;
  let fixture: ComponentFixture<UsersingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
