export class Movie {
    id: number;
    title: string;
    rating: number;
    length: number;
    
    constructor(id: number, title:string, rating:number, length:number) {
        this.id = id;
        this.title = title;
        this.rating = rating;
        this.length = length;
    }
    
    isGood() {
        return this.rating >= 4;
    }
    
    isBad() {
        return this.rating < 2;
    }
    
    downRating() {
        this.rating -= 1;
        if(this.rating < 1){
            this.rating = 5;
        }
    }
    
    upRating() {
        this.rating += 1;
        if(this.rating > 5) {
            this.rating = 1;
        }
    }
}