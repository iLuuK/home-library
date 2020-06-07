import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { DataBook } from '../class/data-book';
import { LibraryService } from './library.service';
import { SnackbarService } from './snackbar.service';


@Injectable({
  providedIn: 'root'
})
export class GoogleApiBookService {

  constructor(private http: HttpClient, private libraryService: LibraryService, private snackbarService: SnackbarService) {
  }

  private getUrlService(isbn: string): string {
    return 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn + '&fields=items(volumeInfo(title,authors,publishedDate,description,industryIdentifiers,imageLinks))';
  }

  public getBookDataFromApi(isbn: string, oldList: boolean = false) {
    this.http
      .get(this.getUrlService(isbn)).pipe()
      .toPromise()
      .then((data) => {
        const infoBook = data['items'][0]['volumeInfo'];
        let newBook = new DataBook(infoBook['title'], this.getListOfAuthorsString(infoBook['authors']), infoBook['publishedDate'], infoBook['description'], infoBook['industryIdentifiers'][0]['identifier'], infoBook['imageLinks']['thumbnail']);
        this.libraryService.addBook(newBook, oldList);
      })
      .catch((err: HttpErrorResponse) => {
        this.snackbarService.openSnackBar("Erreur lors du chargement des données")
        console.error('An error occurred:', err.error);
      });
  }


  // transform array string of authors in string
  private getListOfAuthorsString(listOfAuthors: string[]): string {
    let listOfAuthorsString: string = '';
    listOfAuthors.forEach(author => listOfAuthorsString += author + ', ');
    listOfAuthorsString = listOfAuthorsString.slice(0, listOfAuthorsString.length -2);
    return listOfAuthorsString;
  }
}
