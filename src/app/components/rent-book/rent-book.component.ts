import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';
import { Observable } from 'rxjs';
import { DataBook } from 'src/app/class/data-book';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Rent } from 'src/app/class/rent';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-rent-book',
  templateUrl: './rent-book.component.html',
  styleUrls: ['./rent-book.component.css']
})
export class RentBookComponent implements OnInit {
  selectBook: Observable<DataBook>;
  myForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    date: new FormControl('', [
      Validators.required,
    ]),
    comment: new FormControl()
  });
  dateRent: Date = null;

  constructor(private libraryService: LibraryService, private snackbarService: SnackbarService) { }

  ngOnInit() {
    this.selectBook = this.libraryService.subscribeSelectBook();
    this.selectBook.subscribe();
  }
  checkCanRent(): boolean {
    return (this.myForm.get('name').status === 'VALID' && this.dateRent !== null);
  }

  createRent(book: DataBook): void {
    const newRent = new Rent(this.myForm.get('name').value, this.dateRent, this.myForm.get('comment').value);
    this.libraryService.setRentBook(book, newRent);
    this.snackbarService.openSnackBar('Livre "' + book.getTitle() + '" loué !');
  }

  dateChange(event): void {
    this.dateRent = event.value;
  }

  returnBook(book: DataBook): void {
    this.dateRent = null;
    this.myForm.controls['name'].setValue('');
    this.myForm.controls['comment'].setValue('');
    this.libraryService.setRentBook(book, null);
    this.snackbarService.openSnackBar('Livre "' + book.getTitle() + '" retourné !');
  }




}
