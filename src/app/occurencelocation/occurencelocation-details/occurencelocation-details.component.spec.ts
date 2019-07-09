import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurencelocationDetailsComponent } from './occurencelocation-details.component';

describe('OccurencelocationDetailsComponent', () => {
  let component: OccurencelocationDetailsComponent;
  let fixture: ComponentFixture<OccurencelocationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccurencelocationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccurencelocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
