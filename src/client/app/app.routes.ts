import {provideRouter, RouterConfig, Route} from '@angular/router';

import {AdminRoutes} from './+admin/index';
import {AppComponent} from './app.component';

const fallbackRoute:Route = {
  path: '**',
  redirectTo: '/',

};
const routes:RouterConfig = <RouterConfig>[
  {
    path: '',
    component: AppComponent,
    children: [
      ...AdminRoutes,
    ]
  },
  fallbackRoute,

];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
