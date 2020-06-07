import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfBookComponent } from './list-of-book.component';

describe('ListOfBookComponent', () => {
  let component: ListOfBookComponent;
  let fixture: ComponentFixture<ListOfBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
