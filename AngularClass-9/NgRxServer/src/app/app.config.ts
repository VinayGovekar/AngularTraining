import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreModule, provideState, provideStore } from '@ngrx/store';
import { cricketerReducer } from './store/cricketer/cricketer.reducer';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    importProvidersFrom(StoreModule.forRoot({
      cricketers:cricketerReducer,
    })),
    provideEffects()
    // provideState({ name: 'cricketers', reducer: cricketerReducer }),
  ],
};
