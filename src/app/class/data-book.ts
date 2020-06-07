import { Rent } from './rent';

export class DataBook {
    private title: string;
    private authors: string;
    private publishedDate: Date;
    private description: string;
    private isbn: string;
    private thumbnail: string;
    private rent: Rent;
    private show: boolean

    constructor(title: string, authors: string, publishedDate: Date, description: string, isbn: string, thumbnail: string) {
        this.setTitle(title);
        this.setAuthors(authors);
        this.setPublishedDate(publishedDate);
        this.setDescription(description);
        this.setIsbn(isbn);
        this.setThumbnail(thumbnail);
        this.setRent(null);
        this.canShow();
    };

    public getTitle(): string {
        return this.title;
    }
    public setTitle(newTitle: string) {
        this.title = newTitle;
    }

    public getAuthors(): string {
        return this.authors;
    }
    public setAuthors(newAuthors: string) {
        this.authors = newAuthors;
    }

    public getPublishedDate(): Date {
        return this.publishedDate;
    }
    public setPublishedDate(newDate: Date) {
        this.publishedDate = newDate;
    }

    public getDescription(): string {
        return this.description;
    }
    public setDescription(newDescription: string) {
        this.description = newDescription;
    }

    public getIsbn(): string {
        return this.isbn;
    }
    public setIsbn(newIsbn10: string) {
        this.isbn = newIsbn10;
    }

    public getThumbnail(): string {
        return this.thumbnail;
    }
    public setThumbnail(newThumbnails: string) {
        this.thumbnail = newThumbnails;
    }

    public getRent(): Rent {
        return this.rent;
    }
    public setRent(newRent: Rent) {
        this.rent = newRent;
    }

    public getShow(): boolean {
        return this.show;
    }
    public canShow(): void {
        this.show = true;
    }
    public canNotShow(): void {
        this.show = false;
    }
}
