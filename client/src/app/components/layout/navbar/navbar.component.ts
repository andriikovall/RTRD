import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @ViewChild('loginModal', { static: true }) public loginModal;
  @ViewChild('registerModal', { static: true }) public registerModal;

  links = [
    { label: 'Main', path: '/main', active: true },
    { label: 'Gallery', path: '/gallery', active: false }
  ]

  onLinkClicked(link) {
    this.links.forEach(l => l.active = false);
    link.active = true;
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
