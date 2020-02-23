import { Component, OnInit } from '@angular/core';
import { Sponsor } from 'src/app/interfaces';

@Component({
  selector: 'app-sponsors-top',
  templateUrl: './sponsors-top.component.html',
  styleUrls: ['./sponsors-top.component.scss']
})
export class SponsorsTopComponent implements OnInit {

  // sponsors: Sponsor = new Array<Sponsor>(0);

  constructor() { }

  ngOnInit() {
  }

}
