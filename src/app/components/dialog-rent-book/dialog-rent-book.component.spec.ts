import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRentBookComponent } from './dialog-rent-book.component';

describe('DialogRentBookComponent', () => {
  let component: DialogRentBookComponent;
  let fixture: ComponentFixture<DialogRentBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRentBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRentBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
