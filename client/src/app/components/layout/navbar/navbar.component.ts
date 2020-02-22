import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../../interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @ViewChild('loginModal', { static: true }) public loginModal;
  @ViewChild('registerModal', { static: true }) public registerModal;
  @ViewChild('event', { static: true }) public eventModal;

  form: FormGroup;

  login: string = '';
  password: string = '';
  passwordRepeat: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
      bio: new FormControl(null),
      date: new FormControl(null),
      region: new FormControl(null),
    })
  }

  links = [
    { label: 'Головна', path: '/main', active: true },
    { label: 'Хардкод ивент', path: '/event', active: false }
  ]

  onLinkClicked(link) {
    this.links.forEach(l => l.active = false);
    link.active = true;
  }

  onEventCreatingClicked() {
    this.eventModal.show();
    this.loginModal.hide();
    this.registerModal.hide();
  }

  onEventSubmit() {

  }

  onRegisterClicked() {
    this.registerModal.show();
    this.loginModal.hide();
    this.eventModal.hide();
  }

  onLoginClicked() {
    this.loginModal.show();
    this.registerModal.hide();
    this.eventModal.hide();
  }

  onRegisterConfirm() {
    if (this.password !== this.passwordRepeat) {
      alert('passwords dot match');
      return;
    }
    this.authService.register(this.login, this.password).subscribe(user => {
      console.log(user);
    }, (err) => console.log(err));
  }

  onLoginConfirm() {
    this.authService.login({ login: this.login, password: this.password }).subscribe(user => {
      console.log(user)
    }, err => console.log(err));
  }
}
