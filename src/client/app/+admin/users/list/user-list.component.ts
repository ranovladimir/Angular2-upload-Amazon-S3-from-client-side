/**
 * Created by Vladimir on 12/07/2016.
 */
import {Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges}    from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {UserService} from '../service/user.service';
import {User} from '../model/user';
import {Subscription} from 'rxjs/Rx';


@Component({
  moduleId: module.id,
  selector: 'tc-user-list',
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './user-list.component.html',
  providers: [UserService]
})


export class UserListComponent implements OnInit, OnDestroy, OnChanges {

  @Input() private currentPage:number = 1;
  private totalPage:number = 1;
  private users:User[];
  private queryParamsSubscription:Subscription;

  private serviceSubscription:Subscription;

  constructor(private userService:UserService, private router:Router) {
  }

  ngOnInit() {
    this.queryParamsSubscription = this.router.routerState.queryParams.subscribe(
      params=> {
        this.currentPage = +params['page'] || 1;
      }
    );
    this.getUsers(this.currentPage);

  }

  private getUsers(currentPage:number = 1) {
    this.serviceSubscription = this.userService.getAllUsers(currentPage).subscribe(
      data => {
        this.users = data.users;
        console.log('users !!!!! '+ JSON.stringify(this.users  ));
        this.totalPage = data.totalNumberPage;
      },
      err => console.log(err),
      () => console.log('Completed')
    );
  }


  ngOnChanges(changes:SimpleChanges):any {

    return undefined;
  }



  next(index:number = 1) {
    this.currentPage = this.currentPage + index;

    let navigationExtras = {
      queryParams: {'page': this.currentPage}
    };
    this.router.navigate(['/admin/user'], navigationExtras);

    this.getUsers(this.currentPage);

  }

  previous(index:number = 1) {
    this.currentPage = this.currentPage - index;
    
    let navigationExtras = {
      queryParams: {'page': this.currentPage}
    };
    this.router.navigate(['/admin/user'], navigationExtras);
    this.getUsers(this.currentPage);
  }

  ngOnDestroy():any {
    this.queryParamsSubscription.unsubscribe();
    this.serviceSubscription.unsubscribe();
    return undefined;
  }


}
