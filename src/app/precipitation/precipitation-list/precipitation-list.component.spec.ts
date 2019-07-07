import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecipitationListComponent } from './precipitation-list.component';

describe('PrecipitationListComponent', () => {
  let component: PrecipitationListComponent;
  let fixture: ComponentFixture<PrecipitationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecipitationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecipitationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
