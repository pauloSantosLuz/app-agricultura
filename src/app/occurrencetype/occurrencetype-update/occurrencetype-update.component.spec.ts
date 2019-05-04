import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurrencetypeUpdateComponent } from './occurrencetype-update.component';

describe('OccurrencetypeUpdateComponent', () => {
  let component: OccurrencetypeUpdateComponent;
  let fixture: ComponentFixture<OccurrencetypeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccurrencetypeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccurrencetypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
