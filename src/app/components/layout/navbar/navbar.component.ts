import { Component, OnInit, ViewChild } from '@angular/core';
// import { MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('loginModal', { static: true }) public loginModal;
  @ViewChild('registerModal', { static: true }) public registerModal;

  constructor() { }

  ngOnInit() {
    console.log(this.loginModal);
    console.log(this.registerModal);
  }

  onRegisterClicked() {
    this.loginModal.hide();
    this.registerModal.show();
  }

  onLoginClicked() {
    this.loginModal.show();
    this.registerModal.hide();
  }
}
