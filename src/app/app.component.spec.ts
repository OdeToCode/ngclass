import {
  it,
  inject,
  describe,
  beforeEachProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { AppComponent } from './app.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    AppComponent
  ]);

  it('should initialize with a message', inject([AppComponent], (app) => {    
    expect(app.message).toBe('Hello');
  }));

});