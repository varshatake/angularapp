import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidassignmentComponent } from './rapidassignment.component';

describe('RapidassignmentComponent', () => {
  let component: RapidassignmentComponent;
  let fixture: ComponentFixture<RapidassignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapidassignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapidassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
