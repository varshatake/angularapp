import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agecomp2Component } from './agecomp2.component';

describe('Agecomp2Component', () => {
  let component: Agecomp2Component;
  let fixture: ComponentFixture<Agecomp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agecomp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agecomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
