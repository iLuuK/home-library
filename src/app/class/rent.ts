export class Rent {
    private name: string;
    private date: Date;
    private comment: string;

    constructor(name: string, date: Date, comment: string) {
        this.setName(name);
        this.setDate(date);
        this.setComment(comment);
    }

    public getName(): string {
        return this.name;
    }
    public setName(newName: string) {
        this.name = newName;
    }

    public getDate(): Date {
        return this.date;
    }
    public setDate(newDate: Date) {
        this.date = newDate;
    }

    public getComment(): string {
        return this.comment;
    }
    public setComment(newComment: string) {
        this.comment = newComment;
    }
}
