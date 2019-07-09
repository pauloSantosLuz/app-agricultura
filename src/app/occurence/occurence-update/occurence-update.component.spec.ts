import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurenceUpdateComponent } from './occurence-update.component';

describe('OccurenceUpdateComponent', () => {
  let component: OccurenceUpdateComponent;
  let fixture: ComponentFixture<OccurenceUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccurenceUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccurenceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
