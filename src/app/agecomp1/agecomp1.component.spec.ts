import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agecomp1Component } from './agecomp1.component';

describe('Agecomp1Component', () => {
  let component: Agecomp1Component;
  let fixture: ComponentFixture<Agecomp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agecomp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agecomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
