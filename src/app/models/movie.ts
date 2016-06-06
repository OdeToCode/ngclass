export class Movie {
    id: number;
    title: string;
    rating: number;
    length: number;
    
    constructor(id: number, title: string, rating: number, length: number) {
        this.id = id;
        this.title = title;
        this.rating = rating;
        this.length = length;
    }
    
    upRating() {
        if(this.rating < 5) {
            this.rating += 1;
        }
        else {
            this.rating = 1;
        }
    }
    
    downRating() {
        if(this.rating > 1) {
            this.rating -= 1;
        }
        else{
            this.rating = 5;
        }
    }
    
    get isGood() {
        return this.rating > 3;
    }
    
    get isBad() {
        return this.rating < 2;
    }
    
}
