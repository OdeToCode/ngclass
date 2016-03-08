import {Router} from "angular2/router";
import {Injectable} from "angular2/core";

export abstract class Counter {
    abstract incrementCount();
    abstract getCount();
}

@Injectable()
export class InMemoryCounter implements Counter { 
    
    private _count: number;
    
    constructor() {
        this._count = 0;
    }
    
    incrementCount() {
        this._count += 1;
    }
    
    getCount() {
        return this._count;
    }
    
}


