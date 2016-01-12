import {Pipe, PipeTransform} from "angular2/core";

@Pipe({name:"rating"})
export class RatingPipe implements PipeTransform {
    
    transform(value: number, args: string[]) {
       
        return "*".repeat(value);        
    }
  
}