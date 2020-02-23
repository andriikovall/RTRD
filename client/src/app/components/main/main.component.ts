import { Component, OnInit, ViewChild } from '@angular/core';
import { EventServise } from 'src/app/services/event.service';
import { Observable } from 'rxjs';
import { Event } from '../../interfaces'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
}) 
export class MainComponent implements OnInit {

  idToDelete: string = '';

  @ViewChild('confirmModal', { static: true }) public confirmModal;

  constructor(private eventService: EventServise, 
    public authService: AuthService) { }


  events: Event[] = [];

  ngOnInit() {
    this.eventService.getAll().subscribe(e => {
      this.events = e;
    });
  }

  onUpvoteClick(event: Event) {
    event.vote+=1;
    this.eventService.update(event).subscribe(e => this.ngOnInit());
    
  }

  onDownvoteClick(event: Event) {
    event.vote-=1;
    this.eventService.update(event).subscribe(e => this.ngOnInit());
    
  }


  onRemove(id: string) {
    this.idToDelete = id;
    this.confirmModal.show();
  }

  onRemoveConfirm() {
    this.eventService.delete(this.idToDelete).subscribe(res => {
      this.confirmModal.hide();
      this.ngOnInit();
      console.log(res);
    }, err => console.log(err));
  }

}
