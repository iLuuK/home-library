import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-rent-book',
  templateUrl: './dialog-rent-book.component.html',
  styleUrls: ['./dialog-rent-book.component.css']
})
export class DialogRentBookComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogRentBookComponent>) { }

  ngOnInit() {
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

}
