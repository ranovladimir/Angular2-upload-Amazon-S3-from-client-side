/**
 * Created by Vladimir on 12/07/2016.
 */
import {RouterConfig}          from '@angular/router';
import {UserListComponent} from './list/user-list.component';
import {UserDetailComponent} from "./detail/user-detail.component";
import {UserComponent} from "./list/user.component";
import {UserCreateComponent} from "./create/user-create.component";



export const UserRoutes:RouterConfig =
  <RouterConfig>[
    {
      path: 'user',
      children: [
        {
          path: '',
          component: UserComponent,
        }, {
          path: 'new',
          component: UserCreateComponent
        }
      ]
    }


]
;
