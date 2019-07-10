import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecipitationDeleteComponent } from './precipitation-delete.component';

describe('PrecipitationDeleteComponent', () => {
  let component: PrecipitationDeleteComponent;
  let fixture: ComponentFixture<PrecipitationDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecipitationDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecipitationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
