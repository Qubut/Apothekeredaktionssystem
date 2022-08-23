import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() data: Data = {
    name: '',
    number: 0,
    fax: 0,
    email: '',
    adresse: {
      strasse: '',
      nr: 0,
      plz: 0,
      ort: '',
    },
    oeffnungszeiten: {
      zeiten: [],
    },
    motto: '',
    beschreibung: '',
    greeting: '',
  };
  emailLink = '';

  offen = true;
  constructor() {}

  ngOnInit(): void {
    this.emailLink = `mailto:${this.data.email}`;
    this.istOffen()
  }
  istOffen() {
    let date = new Date(Date.now());
    let day = date.getDay();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sun = 6;
    let sat = 5;
    if (day != sat && day != sun) {
      if (
        (hour >= 8 && min >= 30 && hour <= 12 && min <= 30) ||
        (hour >= 13 && min >= 30 && hour <= 18)
      ) {
        this.offen = true;
      } else {
        this.offen = false;
      }
    } else if (day == sat) {
      if (hour >= 8 && min >= 30 && hour <= 12 && min <= 30) {
        this.offen = true;
      }
    } else {
      this.offen = false;
    }
  }
}
