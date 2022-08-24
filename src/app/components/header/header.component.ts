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

  constructor() {}

  ngOnInit(): void {
    this.emailLink = `mailto:${this.data.email}`;
  }
 
}
