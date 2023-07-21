import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IscheckboxComponent } from './ischeckbox.component';

describe('IscheckboxComponent', () => {
  let component: IscheckboxComponent;
  let fixture: ComponentFixture<IscheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IscheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IscheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
