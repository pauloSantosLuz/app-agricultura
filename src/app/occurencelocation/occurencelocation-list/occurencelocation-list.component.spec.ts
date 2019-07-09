import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurencelocationListComponent } from './occurencelocation-list.component';

describe('OccurencelocationListComponent', () => {
  let component: OccurencelocationListComponent;
  let fixture: ComponentFixture<OccurencelocationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccurencelocationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccurencelocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
