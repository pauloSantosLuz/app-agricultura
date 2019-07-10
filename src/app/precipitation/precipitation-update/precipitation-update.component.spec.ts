import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecipitationUpdateComponent } from './precipitation-update.component';

describe('PrecipitationUpdateComponent', () => {
  let component: PrecipitationUpdateComponent;
  let fixture: ComponentFixture<PrecipitationUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecipitationUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecipitationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
