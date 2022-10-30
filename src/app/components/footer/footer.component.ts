import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit, OnChanges {
  @Input() data?: Data;
  emailLink = '';
  @Input() links: Item[] = [];
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.emailLink = `mailto:${this.data?.email}`;
  }
  ngOnInit(): void {
  }
}
