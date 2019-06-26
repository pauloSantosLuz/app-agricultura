import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecipitationInsertComponent } from './precipitation-insert.component';

describe('PrecipitationInsertComponent', () => {
  let component: PrecipitationInsertComponent;
  let fixture: ComponentFixture<PrecipitationInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecipitationInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecipitationInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
