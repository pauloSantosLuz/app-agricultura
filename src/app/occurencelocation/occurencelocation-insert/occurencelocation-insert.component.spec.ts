import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurencelocationInsertComponent } from './occurencelocation-insert.component';

describe('OccurencelocationInsertComponent', () => {
  let component: OccurencelocationInsertComponent;
  let fixture: ComponentFixture<OccurencelocationInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccurencelocationInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccurencelocationInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
