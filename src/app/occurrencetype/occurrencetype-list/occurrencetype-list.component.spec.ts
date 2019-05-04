import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurrencetypeListComponent } from './occurrencetype-list.component';

describe('OccurrencetypeListComponent', () => {
  let component: OccurrencetypeListComponent;
  let fixture: ComponentFixture<OccurrencetypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccurrencetypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccurrencetypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
