import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataBook } from '../class/data-book';
import { Rent } from '../class/rent';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private listOfBook: BehaviorSubject<DataBook[]> = new BehaviorSubject<DataBook[]>([]);
  private listOfBookShow: BehaviorSubject<DataBook[]> = new BehaviorSubject<DataBook[]>([]);
  private selectBook: BehaviorSubject<DataBook> = new BehaviorSubject<DataBook>(null);

  private filterNameBook: string = '';
  private filterNameAuthor: string = '';
  private filterIsbn: string = '';

  private typeSort: string = 'titleAsc';

  constructor(private snackBarService: SnackbarService) {
    this.getListOfBookInLocalStorage();
  }

  getListOfBookInLocalStorage(): void {
    let oldListOfIsbnBookString = JSON.parse(localStorage.getItem('listOfBook'));
    let oldListOfIsbnBookObject: Array<DataBook> = new Array<DataBook>();
    if (oldListOfIsbnBookString !== null) {
      oldListOfIsbnBookString.forEach(book => {
        let newBook = new DataBook(book.title, book.authors, book.publishedDate, book.description, book.isbn, book.thumbnail);
        if (book.rent !== null) {
          let newRent = new Rent(book.rent.name, new Date(book.rent.date), book.rent.comment);
          newBook.setRent(newRent);
        }
        oldListOfIsbnBookObject.push(newBook);
      });
      this.listOfBook.next(oldListOfIsbnBookObject);
      this.filterListOfBook();
    }
  }

  public addBook(newBook: DataBook, oldList: boolean = false): void {
    let newListOfBook = this.listOfBook.getValue();
    if (this.checkBookNotExist(newBook, newListOfBook)) {
      newListOfBook.push(newBook);
      this.listOfBook.next(newListOfBook);
      this.filterListOfBook();
      this.backupListOfBook();
      if (oldList !== true)
        this.snackBarService.openSnackBar('Livre "' + newBook.getTitle() + '" ajouté !')
    } else {
      if (oldList !== true)
        this.snackBarService.openSnackBar('Livre "' + newBook.getTitle() + '" déjà ajouté !')
    }
  }
  public subscribeListOfBook(): Observable<DataBook[]> {
    return this.listOfBookShow.asObservable();
  }
  public setSelectBook(newSelectBook: DataBook): void {
    this.selectBook.next(newSelectBook);
  }
  public subscribeSelectBook(): Observable<DataBook> {
    return this.selectBook.asObservable();
  }
  public backupListOfBook(): void {
    localStorage.setItem('listOfBook', JSON.stringify(this.listOfBook.getValue()));
  }
  public setRentBook(rentBook: DataBook, rent: Rent): void {
    let newListOfBook = this.listOfBook.getValue();
    newListOfBook.map(book => {
      if (book === rentBook) {
        book.setRent(rent);
      }
      return book;
    })
    this.listOfBook.next(newListOfBook);
    this.filterListOfBook();
    this.backupListOfBook();
  }

  public checkBookNotExist(newBook: DataBook, listOfBook: DataBook[]): Boolean {
    const found = listOfBook.find(book => this.formatIsbn(book.getIsbn()).includes(this.formatIsbn(newBook.getIsbn())));
    return found === undefined;
  }

  // transform isbn to compare isbn 10 and 13
  private formatIsbn(isbn: string): string {
    return isbn.slice(isbn.length - 9, isbn.length - 1)
  }

  public checkSelectBookExist(): boolean {
    return this.selectBook.getValue() !== null ? true : false;
  }

  private campareNameOfBook(book: DataBook): boolean {
    if (this.filterNameBook === '') {
      return true;
    }
    return book.getTitle().toLowerCase().includes(this.filterNameBook.toLowerCase());
  }

  private compareNameOfAuthor(book: DataBook): boolean {
    if (this.filterNameAuthor === '') {
      return true;
    }
    return book.getAuthors().toLowerCase().includes(this.filterNameAuthor.toLowerCase());
  }

  private compareIsbn(book: DataBook): boolean {
    if (this.filterIsbn === '') {
      return true;
    }
    return this.formatIsbn(book.getIsbn()).includes(this.formatIsbn(this.filterIsbn));
  }

  private compareFilter(actualListOfBookShow: DataBook[]): DataBook[] {
    let newListOfBookShow = actualListOfBookShow.filter(book => (this.campareNameOfBook(book)));
    newListOfBookShow = newListOfBookShow.filter(book => this.compareNameOfAuthor(book));
    newListOfBookShow = newListOfBookShow.filter(book => this.compareIsbn(book));
    return newListOfBookShow;
  }

  private filterListOfBook(): void {
    let actualListOfBookShow = this.listOfBook.getValue();
    if (this.filterNameAuthor === '' && this.filterNameBook === '' && this.filterIsbn === '') {
      this.listOfBookShow.next(actualListOfBookShow);
    } else {
      this.listOfBookShow.next(this.compareFilter(actualListOfBookShow));
    }
  }

  public setFilterNameBook(name: string): void {
    this.filterNameBook = name;
    this.filterListOfBook();
  }
  public setFilterNameAuthor(name: string): void {
    this.filterNameAuthor = name;
    this.filterListOfBook();

  }
  public setFilterIsbn(isbn: string): void {
    this.filterIsbn = isbn;
    this.filterListOfBook();
  }

  public setTypeSort(sort: string): void {
    this.typeSort = sort;
    this.sortList();
  }

  private sortList(): void {
    let newListOfBook = this.listOfBook.getValue();
    if (this.typeSort === "titleAsc") newListOfBook.sort(this.sortTitleAsc);
    if (this.typeSort === "titleDsc") newListOfBook.sort(this.sortTitleDsc);
    this.listOfBook.next(newListOfBook);
    this.filterListOfBook();
    this.backupListOfBook();
  }


  private sortTitleAsc(a: DataBook, b: DataBook) {
    if (a.getTitle() > b.getTitle()) return 1;
    if (b.getTitle() > a.getTitle()) return -1;
    return 0;
  }
  private sortTitleDsc(a: DataBook, b: DataBook) {
    if (a.getTitle() < b.getTitle()) return 1;
    if (b.getTitle() < a.getTitle()) return -1;
    return 0;
  }
}
