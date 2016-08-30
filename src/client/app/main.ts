import { APP_BASE_HREF } from '@angular/common';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import {AuthGuard} from './+admin/+security/auth-guard.service';
import {AuthService} from './+admin/+security/auth.service';
import {UnsavedChangesGuard} from './+admin/+security/unsaved-changes-guard';
import {DialogService} from './+admin/+security/dialog.service';
import {ModalService} from './+admin/+shared/modal/modal.service';

if ('<%= ENV %>' === 'prod') { enableProdMode(); }

/**
 * Bootstraps the application and makes the ROUTER_PROVIDERS and the APP_BASE_HREF available to it.
 * @see https://angular.io/docs/ts/latest/api/platform-browser-dynamic/index/bootstrap-function.html
 */
bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  AuthGuard,
  AuthService,
  ModalService,
  {
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }
])
  .catch(err => console.error(err));

