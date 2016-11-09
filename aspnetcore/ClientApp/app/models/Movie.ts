export class Movie {
    constructor(public id: number, 
                public title: string, 
                public rating: number ){

    }

    increaseRating() {
        if(this.rating < 10) {
            this.rating += 1;
        } else {
            this.rating = 1;
        }
    }

    rate() {
        return {
            good: this.rating > 8, 
            bad: this.rating < 3
        }
    }
}