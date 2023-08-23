import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedrivenassignmentComponent } from './templatedrivenassignment.component';

describe('TemplatedrivenassignmentComponent', () => {
  let component: TemplatedrivenassignmentComponent;
  let fixture: ComponentFixture<TemplatedrivenassignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatedrivenassignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatedrivenassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
