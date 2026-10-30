import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      // https://javascript.plainenglish.io/withinmemoryscrolling-in-angular-modern-scroll-restoration-and-anchor-scrolling-explained-c1974da4bf6c
      // https://www.reddit.com/r/angular/comments/1oqo38x/anchor_links_not_working_with_angular_20/
      withInMemoryScrolling({
        anchorScrolling: 'enabled'
      })
    ),
    provideHttpClient(
      withFetch()
    ),
    provideClientHydration(withEventReplay(),
  )
  ]
};
