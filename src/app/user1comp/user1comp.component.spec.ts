import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { User1compComponent } from './user1comp.component';

describe('User1compComponent', () => {
  let component: User1compComponent;
  let fixture: ComponentFixture<User1compComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ User1compComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(User1compComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
