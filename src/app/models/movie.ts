export class Movie {
    
    constructor(public id: number, 
                public title: string, 
                public rating: number, 
                public length: number) {
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
