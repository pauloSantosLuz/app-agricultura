import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfimDeleteDialogComponent } from './confim-delete-dialog.component';

describe('ConfimDeleteDialogComponent', () => {
  let component: ConfimDeleteDialogComponent;
  let fixture: ComponentFixture<ConfimDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfimDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfimDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
