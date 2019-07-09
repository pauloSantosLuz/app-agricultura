import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurenceInsertComponent } from './occurence-insert.component';

describe('OccurenceInsertComponent', () => {
  let component: OccurenceInsertComponent;
  let fixture: ComponentFixture<OccurenceInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccurenceInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccurenceInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
