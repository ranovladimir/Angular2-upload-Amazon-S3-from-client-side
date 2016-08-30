/**
 * Created by Vladimir on 15/07/2016.
 */
import {Component}            from '@angular/core';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute}    from '@angular/router';
import {MyModalComponent} from './+shared/modal/my-modal.component';

@Component({
  moduleId: module.id,
  templateUrl:'./admin.component.html',
  styleUrls: ['./admin.component.css'],
  directives: [ROUTER_DIRECTIVES,MyModalComponent],

})
export class AdminComponent {
  constructor(private router:Router ) {
  }

  navigateAbsolute() {
    this.router.navigate(['admin/tutorial']);
  }

  navigateRelative() {
   console.log(this.router.url );
    this.router.navigate([this.router.url +'/tutorial']);
  }
}
