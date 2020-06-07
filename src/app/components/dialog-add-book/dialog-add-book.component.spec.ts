import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddBookComponent } from './dialog-add-book.component';

describe('DialogAddBookComponent', () => {
  let component: DialogAddBookComponent;
  let fixture: ComponentFixture<DialogAddBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
