import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-leistung',
  templateUrl: './leistung.component.html',
  styleUrls: ['./leistung.component.css'],
})
export class LeistungComponent implements OnInit {
  @Input() leistung: Leistung = { name: '', description: '' };
  constructor() {}

  ngOnInit(): void {}
}
