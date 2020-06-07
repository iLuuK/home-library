import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';




import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';













import { MainComponent } from './components/main/main.component';
import { EditingListComponent } from './components/editing-list/editing-list.component';
import { DialogAddBookComponent } from './components/dialog-add-book/dialog-add-book.component';
import { ListOfBookComponent } from './components/list-of-book/list-of-book.component';
import { DialogRentBookComponent } from './components/dialog-rent-book/dialog-rent-book.component';
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { RentBookComponent } from './components/rent-book/rent-book.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    EditingListComponent,
    DialogAddBookComponent,
    ListOfBookComponent,
    DialogRentBookComponent,
    DetailBookComponent,
    RentBookComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatIconModule,
    MatSelectModule
  ],
  entryComponents: [DialogAddBookComponent, DialogRentBookComponent],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
