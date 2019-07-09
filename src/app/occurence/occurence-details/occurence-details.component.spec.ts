import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurenceDetailsComponent } from './occurence-details.component';

describe('OccurenceDetailsComponent', () => {
  let component: OccurenceDetailsComponent;
  let fixture: ComponentFixture<OccurenceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccurenceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccurenceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
