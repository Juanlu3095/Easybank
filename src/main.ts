import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Don't know if this is necessary ...
// import { $localize } from '@angular/localize/init'

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
