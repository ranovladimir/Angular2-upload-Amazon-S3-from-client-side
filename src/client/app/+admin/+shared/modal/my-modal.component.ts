import {Component, OnInit} from '@angular/core';
import {ModalService} from './modal.service';

@Component({
  moduleId: module.id,
  selector: 'my-modal',
  template: ` 
 <style>
/* The Modal (background) */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
    background-color: #fefefe;
    margin: auto;
    margin-top: 150px;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
}

/* The Close Button */
.close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}
/*:host{*/
/*display: block;*/
/*}*/
</style>
 
  <!-- The Modal -->
<div id="myModal"  class="modal"  [style.display] = "isShown ? 'block' : 'none'" >

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close" (click)="close()">×</span>
    <p>Some text in the Modal..</p>
  </div>

</div>
 
 `
})
export class MyModalComponent implements OnInit {
  private defaults = {
    title: 'Confirmation',
    message: 'Do you want to cancel your changes?',
    cancelText: 'Cancel',
    okText: 'OK'
  };
  isShown = false;

  constructor(modalService:ModalService) {
    modalService.activate = this.activate.bind(this);

  }

  // http://www.w3schools.com/howto/howto_css_modals.asp
  ngOnInit() {
    console.log('init');
  }

  activate(message = this.defaults.message, title = this.defaults.title) {
    let promise = new Promise<boolean>((resolve, reject) => {
   
      this.show();
    });

    return promise;
  }

  private show() {
    console.log('show !!');
    this.isShown = true;
  }

  private close() {
    console.log('hide !!');
    this.isShown = false;
  }
}
