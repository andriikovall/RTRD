import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventServise } from 'src/app/services/event.service';
import { Event, User } from '../../interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  event: Event;

  user: User = this.authService.user;
  reported = false;

  donation: number;

  loadingPayment = false;

@ViewChild('reportModal', { static: true }) public reportModal;
@ViewChild('donateModal', { static: true }) public donateModal;

constructor(
  private route: ActivatedRoute,
  private eventService: EventServise,
  private authService: AuthService) { }

ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  this.eventService.getById(id).subscribe(ev => {
    this.event = ev;
  }, err => {
    console.log(err);
  })
}

onReportClicked() {
  this.reportModal.show();
}

onReportConfirmed() {
  this.reported = true;
  setTimeout(() => this.reportModal.hide(), 3000);
}

isSubscribed() {
  return this.user.subscribes.some(s => s == this.event._id);
}

subscribe() {
  if(this.isSubscribed()) {
    this.user.subscribes = this.user.subscribes.filter(s => s != this.event._id)
    console.log('ssssss')
    console.log(this.user.subscribes)
    this.authService.update(this.user).subscribe(e => {
      console.log(e);
    })
  } else {
    this.user.subscribes.push(this.event._id)
    this.authService.update(this.user).subscribe(e => {
      console.log(e);
      this.ngOnInit();
    });
  }

}
  onDonationClick() {
    this.donateModal.show();
  }

  onDonationConfirm() {
    this.loadingPayment = true;
    setTimeout(() => {
      this.donateModal.hide();
      this.loadingPayment = false
    }, 2000);
  }

}
