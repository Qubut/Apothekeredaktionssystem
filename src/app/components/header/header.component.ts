import { Component, Input, OnInit } from '@angular/core';
import { Data } from '__global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
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
    greeting:''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
