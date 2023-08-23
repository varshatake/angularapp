import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveassignmentComponent } from './reactiveassignment.component';

describe('ReactiveassignmentComponent', () => {
  let component: ReactiveassignmentComponent;
  let fixture: ComponentFixture<ReactiveassignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveassignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
