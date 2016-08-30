import { Component,Type } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'tc-app',
  templateUrl: './app.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent  extends Type {
  constructor() {
  }
}
