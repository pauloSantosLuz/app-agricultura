import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurrencetypeInsertComponent } from './occurrencetype-insert.component';

describe('OccurrencetypeInsertComponent', () => {
  let component: OccurrencetypeInsertComponent;
  let fixture: ComponentFixture<OccurrencetypeInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccurrencetypeInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccurrencetypeInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
