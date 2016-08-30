/**
 * Created by Vladimir on 10/08/2016.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';

import  'rxjs/Rx';
import {Observable} from 'rxjs/Rx' ;



@Injectable()
export class UploadService {
  awsResource = 'http://localhost:5000/v1/api/aws';

  constructor(private http:Http) {
  }

  /*
   This does nothing more than fetching the policy and signature from a node backend
   Check this for more info:
   http://stackoverflow.com/questions/18476217/amazon-s3-post-api-and-signing-a-policy-with-nodejs
   */
  getSignaturePolicy(isPublic = true, directory = 'public') { //the acl public is change in the back-end
    console.log('fetching Policy and Signature');
    let body = JSON.stringify({directory: directory, isPublic: isPublic});
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.awsResource + '/sign', body, options)
      .map(response => response.json())
      .catch(this.handleError)
      ;

  }
  

  handleError(error:Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error !!');
  }


}

export class UploadUtils {
  constructor(public signature:string = 'signature',
              public policy:string = 'policy') {
  }
}
