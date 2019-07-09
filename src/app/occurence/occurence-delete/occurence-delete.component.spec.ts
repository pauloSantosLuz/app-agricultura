import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurenceDeleteComponent } from './occurence-delete.component';

describe('OccurenceDeleteComponent', () => {
  let component: OccurenceDeleteComponent;
  let fixture: ComponentFixture<OccurenceDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccurenceDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccurenceDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
