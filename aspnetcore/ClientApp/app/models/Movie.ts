export class Movie {
    constructor(public id: number,
        public title: string,
        public length: number,
        public rating: number) {

    }

    rate() {
        return {
            good: this.rating >= 5,
            bad: this.rating <= 2
        }
    }

    increaseRating() {
        if (this.rating < 5) {
            this.rating += 1;
        }
        else {
            this.rating = 1;
        }
    }

    decreaseRating() {
        if (this.rating > 1) {
            this.rating -= 1;
        }
        else {
            this.rating = 5;
        }
    }
}