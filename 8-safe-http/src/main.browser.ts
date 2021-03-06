/**
 * Fichero raiz de la aplicación
 * lo carga webpack según el webpack.config
 * recorre todo el código siguiendo los imports
 */

// angular2 va más allá del browser
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// importación de tu módulo raiz
import {AppModule} from './app/app.module';

// arranque manual de la aplicación (ng-app)
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
