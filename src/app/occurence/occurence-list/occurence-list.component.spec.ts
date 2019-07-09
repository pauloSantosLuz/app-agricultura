import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurenceListComponent } from './occurence-list.component';

describe('OccurenceListComponent', () => {
  let component: OccurenceListComponent;
  let fixture: ComponentFixture<OccurenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccurenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccurenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
