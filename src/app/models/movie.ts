export class Movie {
    id: number;
    title: string;
    length: number;
    rating: number;

    constructor(id: number, title: string, length: number, rating: number) {
        this.id = id;
        this.title = title;
        this.length = length;
        this.rating = rating;
    }

    upVote() {
        if( this.rating < 5 ) {
            this.rating += 1;
        } else {
            this.rating = 1;
        }
    }

    downVote() {
        if(this.rating > 1) {
            this.rating -= 1;
        } else {
            this.rating = 5;
        }
    }
}
