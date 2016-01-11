export class Movie {
    title: string;
    rating: number;
    
    constructor(title: string, rating: number) {
        this.title = title;
        this.rating = rating;
    }
    
    increaseRating() {
        if(this.rating < 5) {
           // this.rating +=1;
        }
        else{
            this.rating = 1;
        }
    }
    
    decreaseRating() {
        if(this.rating > 1) {
            this.rating -= 1;
        }
        else{
            this.rating = 5;
        }
    }
    
    isGood() {
        return this.rating > 3;
    }
    
    isBad() {
        return this.rating < 3;
    }
    
}