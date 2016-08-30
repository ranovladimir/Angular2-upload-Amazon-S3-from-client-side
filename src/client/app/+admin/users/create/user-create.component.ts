/**
 * Created by Vladimir on 15/07/2016.
 */



/**
 * Created by Vladimir on 12/07/2016.
 */
import {Component, OnDestroy, OnInit, ViewEncapsulation, ViewChild, ElementRef}    from '@angular/core';
import {Enterprise} from '../model/enterprise';
import {User} from '../model/user';
import {UserService} from '../service/user.service';
import {UploadService} from '../../../shared/service/upload.service';

@Component({
  moduleId: module.id,
  templateUrl: './user-create.component.html',
  host: {
    class: 'row'
  },
  providers: [UserService,UploadService]

})


export class UserCreateComponent implements OnInit {

  enterprise:Enterprise = new Enterprise();
  user:User = new User();
  file:File;
  acl:string;
  policy:string;
  s3signature:string;


  constructor(private userService:UserService, private uploadService:UploadService) {

  }

  ngOnInit():any {

    return undefined;
  }


  onInputFileChange(fileInput:any) {
    let previewImage:any;
    previewImage = document.getElementById('preview');

    if (fileInput.target.files[0]) {
      var files = fileInput.srcElement.files;
      this.file = files[0];

      var reader = new FileReader();
      console.dir(fileInput.target.files[0]);
      reader.readAsDataURL(fileInput.target.files[0]);
      reader.onload = function (e:any) {
        previewImage.src = e.target.result;
      };
    } else {
      previewImage.src = 'http://placehold.it/350x150';
    }
  }

  handleResponse(response:any) {
    this.acl= response.acl;
    this.policy = response.policy;
    this.s3signature = response.signature;
    console.log('this.acl: ' +this.acl);
    console.log('this.policy: ' +this.policy);
    console.log('this.s3signature: ' +this.s3signature);
  }

  createUserEnterpriseProfile(enterprise:Enterprise, user:User) {
    console.log('enterprise: ' + JSON.stringify(enterprise) + '  user: ' + JSON.stringify(user));

    this.uploadService.getSignaturePolicy().subscribe(
      response => {
        this.handleResponse(response);
        this.uploadToS3();
      }
    );

  }

  uploadToS3() {
    let formData:FormData = new FormData();
    let xhr:XMLHttpRequest = new XMLHttpRequest();

    //Build AWS S3 Request
    formData.append('bucket', 'YOUR-BUCKET-NAME');
    formData.append('key', '' + this.file.name);
    formData.append('acl',this.acl);
    formData.append('Content-Type', 'image/jpeg');

    formData.append('X-Amz-Date', YOUR-DATE-STRING + 'T000000Z');

    formData.append('X-Amz-Algorithm', 'AWS4-HMAC-SHA256');
    formData.append('X-Amz-Credential', 'YOUR-ACCES-KEY-ID/YOUR-DATE-STRING/YOUR-REGION-END-POINT/s3/aws4_request');



    formData.append('Policy', this.policy);


    formData.append('X-Amz-Signature', this.s3signature);
    formData.append('file', this.file);


    xhr.open('POST', 'http://YOUR-BUCKET-NAME.s3.amazonaws.com/', true);

    xhr.onload = function () {
      alert('Upload done !');
    };

    xhr.send(formData);


  }

}
