import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GoogleApiBookService } from 'src/app/services/google-api-book.service';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-dialog-add-book',
  templateUrl: './dialog-add-book.component.html',
  styleUrls: ['./dialog-add-book.component.css']
})
export class DialogAddBookComponent implements OnInit {
  myForm = new FormGroup({
    isbn: new FormControl()
  });

  constructor(public dialogRef: MatDialogRef<DialogAddBookComponent>, private googleApiBookService: GoogleApiBookService) { }

  ngOnInit() {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  addBook(): void {
    this.googleApiBookService.getBookDataFromApi(this.myForm.get('isbn').value);
    this.closeDialog();
  }
}
