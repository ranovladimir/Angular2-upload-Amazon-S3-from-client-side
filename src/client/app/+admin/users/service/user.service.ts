/**
 * Created by Vladimir on 12/07/2016.
 */


import {Injectable}   from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import  'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {Enterprise} from '../model/enterprise';
import {User} from'../model/user';

//Hard coded-users for test
let USERS = [
  new User(11, 'TheUserTest'),
  new User(1, 'TheSecondeUserTest'),
  new User(),
  new User(),
  new User(),
  new User(),
  new User(),
  new User(),
  new User(),
  new User(),
  new User(),
  new User(),
  new User(99, 'houssemZoro', 'Zaier ', 'Houssem', 'monPassword', 'houssem.zaier@gùmail.com', 'bornup', '08/08/1987')
];

let usersPromise = Promise.resolve(USERS);


//Users from back-end for test
@Injectable()
export class UserService {
  userRessource = 'http://localhost:5000/v1/api/user';
  enterpriseRessource = 'http://localhost:5000/v1/api/enterprise';
  userRessource1 = 'http://www.mocky.io/v2/578e57240f00007004e9a080';
  userRessource2 = 'http://www.mocky.io/v2/578e57e60f00009704e9a083';
  userRessource3 = 'http://www.mocky.io/v2/578f8bd5260000f0007ee3bd';


  constructor(private http:Http) {
  }

  //OLD CODE               //
  //   headers = new Headers({
  // 'Content-Type': 'application/json'});
  // return this.http.get('http://cors.io/?u='+this.userRessource1, {headers: this.headers})

  //HardCODED
  // getAllUsers() {
  //   return usersPromise;
  // }
  getAllUsers(currentPage:number = 1, size:number = 5) {
    // return this.http.get('http://cors.io/?u='+this.userRessource3)


    /*  this.userRessource=this.userRessource+"?currentPage="+page+"&size="+size;
     return this.http.get(this.userRessource)
     .map( (response:Response) =>
     {
     <User[]>  response.json().users ;
     // response.json().totalNumberPage;
     })
     .do(users=> console.log('all users are: ' + JSON.stringify(users)))
     .catch(this.handleError)
     ;*/
    let urlUserRessource = this.userRessource + '?currentPage=' + currentPage + '&size=' + size;
    return this.http.get(urlUserRessource).map((response:Response) => response.json())
      .catch(this.handleError);


  }

  handleError(error:Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error !!');
  }


  getUser(idUser:number | string) {      // IdUser = NUMBER OU STRING ???? A CORRIGER.
    return usersPromise.then(users => users.find(user => user.idUser === +idUser));
  }

//OLD CODE
//   getAllUsers(): observable<User[]> {
//     return this.http.get(this.userRessource)
//       .map(this.extractData);
//   }
//   private extractData(res: Response){
//     let body = res.json();
//     return body.data || {};
//   }

  createUserEnterpriseProfile(enterprise:Enterprise, user:User) {
    //todo
    const enterpriseBody = JSON.stringify(enterprise);
    let body=JSON.stringify(new Enterprise(null,'XAXA'));
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // return this.http.post(this.enterpriseRessource, enterpriseBody, {headers: headers});
    return this.http.post(this.enterpriseRessource, body , options);

  }
}
