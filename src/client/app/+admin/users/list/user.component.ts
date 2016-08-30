/**
 * Created by Vladimir on 15/07/2016.
 */
import {Component, OnInit, OnDestroy}    from '@angular/core';
import {UserListComponent} from './user-list.component';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {ModalService} from '../../+shared/modal/modal.service';
import {Subscription} from 'rxjs/Rx';


@Component({
  moduleId: module.id,
  selector: 'tc-user',
  directives: [UserListComponent, ROUTER_DIRECTIVES],
  templateUrl: './user.component.html',
  host: {
    class: 'row'
  }
})
export class UserComponent implements OnInit, OnDestroy {

  constructor(private modalService:ModalService) {
  }

  ngOnInit() {

  }

  onClick() {
    let msg = 'Are you sure you want to reset the database?';
    console.log(msg);

    this.modalService.activate(msg).then(responseOK => {
      if (responseOK) {
        // this._messageService.resetDb();
        console.log('OK');
      }
    });
  }

  ngOnDestroy() {
  }
}
