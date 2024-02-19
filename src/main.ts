import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module'; // Import your AppModule
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// Bootstrap the AppModule to start the application
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
