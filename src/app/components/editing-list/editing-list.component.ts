import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddBookComponent } from '../dialog-add-book/dialog-add-book.component';
import { FormGroup, FormControl } from '@angular/forms';
import { LibraryService } from 'src/app/services/library.service';


interface Sort {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-editing-list',
  templateUrl: './editing-list.component.html',
  styleUrls: ['./editing-list.component.css']
})
export class EditingListComponent implements OnInit {

  sorts: Sort[] = [
    {value: 'titleAsc', viewValue: 'Titre ascendant'},
    {value: 'titleDsc', viewValue: 'Titre descendant'},
  ];


  myForm = new FormGroup({
    nameBook: new FormControl(),
    nameAuthor: new FormControl(),
    isbn: new FormControl(),
    sort: new FormControl()
  });



  constructor(private dialog: MatDialog, private libraryService: LibraryService) { }

  ngOnInit() {
    this.myForm.get('nameBook').valueChanges.subscribe((name: string) => {
      this.libraryService.setFilterNameBook(name);
    });
    this.myForm.get('nameAuthor').valueChanges.subscribe((name: string) => {
      this.libraryService.setFilterNameAuthor(name);
    });
    this.myForm.get('isbn').valueChanges.subscribe((isbn: string) => {
      this.libraryService.setFilterIsbn(isbn);
    });
    this.myForm.get('sort').valueChanges.subscribe((sort: string) => {
      this.libraryService.setTypeSort(sort);
    });



  }


  openDialogAddBook(): void {
    const dialogRef = this.dialog.open(DialogAddBookComponent, {
      width: '500px'
    });
  }

}
