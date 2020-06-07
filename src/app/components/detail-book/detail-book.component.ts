import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';
import { Observable } from 'rxjs';
import { DataBook } from 'src/app/class/data-book';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  selectBook: Observable<DataBook>;
  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    this.selectBook = this.libraryService.subscribeSelectBook();
    this.selectBook.subscribe();
  }

    // change fromat date us to fr
    changeFormatDate(oldDate) {
      var p = oldDate.split(/\D/g)
      return [p[2], p[1], p[0]].join("/")
    }

}
