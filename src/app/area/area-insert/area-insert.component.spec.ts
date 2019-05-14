import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaInsertComponent } from './area-insert.component';

describe('AreaInsertComponent', () => {
  let component: AreaInsertComponent;
  let fixture: ComponentFixture<AreaInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
