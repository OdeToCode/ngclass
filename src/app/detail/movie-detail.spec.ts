import {
  inject,
  addProviders
} from '@angular/core/testing';

// to use Translate Service, we need Http, and to test Http we need to mock the backend
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import {ActivatedRoute} from "@angular/router";
import {MovieData} from "../services/movies.service";

import { MovieDetailComponent } from './movie-detail.component';


class MockActivatedRoute {
    constructor() {
       this.snapshot = {
           params: {
               id: 42
           }
       };
    }
}

describe('The Detail Componenbt', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([
      MovieDetailComponent,
      BaseRequestOptions,
      MovieData,
      MockBackend,
      {
          provide: ActivatedRoute,
          useClass: MockActivatedRoute
      },
      // Provide a mocked (fake) backend for Http
      {
        provide: Http,
        deps: [MockBackend, BaseRequestOptions],
        useFactory: function useFactory(backend, defaultOptions) {
          return new Http(backend, defaultOptions);
        }
      }
    ]);
  });

  it("should have a movie delivered after nginit", 
        inject([MovieDetailComponent, MockBackend], 
                    (component: MovieDetailComponent,
                     backend: MockBackend) => {
      
      backend.connections.subscribe(c => {
          let options = new ResponseOptions({
              body: JSON.stringify({title: "Fake Wars"})
          });
          c.mockRespond(new Response(options));
      });
      

      component.ngOnInit();
      expect(component.movie.title).toBe("Fake Wars"); 
  }));

});