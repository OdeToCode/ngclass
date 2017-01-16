import "angular2-universal-polyfills/browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModule, Component, Input, Output, EventEmitter } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser";

@Component({
    selector:"counter",
    template: 
    `
        <h3>{{value}}</h3>
        <button (click)="doIncrement()">Increment</button>
    `
})
class CounterComponent {
    @Input() value: number;
    @Output() increment: EventEmitter<number> = new EventEmitter();

    constructor() {
        this.value = 1;     
    }    

    doIncrement() {
        this.increment.emit(this.value);
    }
}

@Component({
    selector: "app",
    template: 
    `
        <div>
            <h3 *ngIf="name">Hello, from 
                <span [innerText]="name"></span>
            </h3>
            

            <button [ngClass]="{foo:true, bar:false}" (click)="toggleName()">Toggle Name</button>

            <hr />
            <counter [value]="value" (increment)="incrementValue($event)"></counter>
        </div>
    
    `
})
class AppComponent {
    name: string;
    value: number;


    constructor() {
        this.name = "At The Movies!";
        this.value = 3;
    }

    toggleName() {
        if(this.name) {
            this.name = "";
        } else {
            this.name = "At the Movies!!";
        }
    }

    incrementValue(lastValue: number) {
        this.value = lastValue + 10;
    }
}


@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, CounterComponent],
    bootstrap: [AppComponent]
})
class AppModule {

}


platformBrowserDynamic().bootstrapModule(AppModule)

// <app />


























// import 'angular2-universal-polyfills/browser';
// import { enableProdMode } from '@angular/core';
// import { platformUniversalDynamic } from 'angular2-universal';
// import { AppModule } from './app/app.module';
// import 'bootstrap';

// // Enable either Hot Module Reloading or production mode
// if (module['hot']) {
//     module['hot'].accept();
//     module['hot'].dispose(() => { platform.destroy(); });
// } else {
//     enableProdMode();
// }

// // Boot the application, either now or when the DOM content is loaded
// const platform = platformUniversalDynamic();
// const bootApplication = () => { platform.bootstrapModule(AppModule); };
// if (document.readyState === 'complete') {
//     bootApplication();
// } else {
//     document.addEventListener('DOMContentLoaded', bootApplication);
// }
