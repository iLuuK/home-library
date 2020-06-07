import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataBook } from 'src/app/class/data-book';
import { LibraryService } from 'src/app/services/library.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogRentBookComponent } from '../dialog-rent-book/dialog-rent-book.component';


@Component({
  selector: 'app-list-of-book',
  templateUrl: './list-of-book.component.html',
  styleUrls: ['./list-of-book.component.css']
})
export class ListOfBookComponent implements OnInit {
  bookList$: Observable<DataBook[]>;
  constructor(private libraryService: LibraryService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.bookList$ = this.libraryService.subscribeListOfBook();
    this.bookList$.subscribe();
  }
  setSelectBook(selectBook: DataBook): void {
    this.libraryService.setSelectBook(selectBook);
  }

  openDialogRent(book: DataBook): void {
    this.setSelectBook(book)
    const dialogRef = this.dialog.open(DialogRentBookComponent, {
      width: '800px',
      data: book
    });
  }
  // change fromat date us to fr
  changeFormatDate(oldDate) {
    var p = oldDate.split(/\D/g)
    return [p[2], p[1], p[0]].join("/")
  }

}
