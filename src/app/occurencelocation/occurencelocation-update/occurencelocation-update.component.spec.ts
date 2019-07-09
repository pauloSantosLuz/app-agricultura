import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurencelocationUpdateComponent } from './occurencelocation-update.component';

describe('OccurencelocationUpdateComponent', () => {
  let component: OccurencelocationUpdateComponent;
  let fixture: ComponentFixture<OccurencelocationUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccurencelocationUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccurencelocationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
