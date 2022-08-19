import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Data, Item } from '__global';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit, OnChanges {
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
  emailLink = '';
  @Input() links: Item[] = [];
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.emailLink = `mailto:${this.data.email}`;
  }
  ngOnInit(): void {}
}
