import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurencelocationDeleteComponent } from './occurencelocation-delete.component';

describe('OccurencelocationDeleteComponent', () => {
  let component: OccurencelocationDeleteComponent;
  let fixture: ComponentFixture<OccurencelocationDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccurencelocationDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccurencelocationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
