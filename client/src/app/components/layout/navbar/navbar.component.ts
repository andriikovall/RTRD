import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../../interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @ViewChild('loginModal', { static: true }) public loginModal;
  @ViewChild('registerModal', { static: true }) public registerModal;

  login: string = '';
  password: string = '';
  passwordRepeat: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

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

  onRegisterConfirm() {
    if (this.password !== this.passwordRepeat) {
      alert('passwords dot match');
    }
    this.authService.register(this.login, this.password).subscribe(user => {
      console.log(user);
    }, (err) => console.log(err));
  }

  onLoginConfirm() {
    this.authService.login(this).subscribe( user => {
      console.log(user)
    }, err => console.log(err));
  }
}
