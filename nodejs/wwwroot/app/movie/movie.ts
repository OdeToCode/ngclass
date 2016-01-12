export class Movie {
    title: string;
    rating: number;
    year: number;
    id: number;
    
    /**
     * Movie model constructor
     */
    constructor(id: number, title: string, rating: number, year: number) {
        this.id = id;
        this.title = title;
        this.rating = rating;
        this.year = year;       
    }
    
    increaseRating() {
        if (this.rating < 5) {
            this.rating += 1;
        }
    }
    
    decreaseRating() {
        if (this.rating > 1) {
            this.rating -= 1;
        }
    }
    
    isGood() {
        return this.rating > 3;
    }
    
    isBad() {
        return this.rating < 3
    }
}