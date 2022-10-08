import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css'],
})
export class HighlightComponent implements OnInit {
  @Input() highlight: Highlight = {
    title: '',
    description: '',
    color: '',
    publishedAt: '',
  };
  date = new Date();
  day = '';
  year = '';
  month = '';
  constructor() {}

  ngOnInit(): void {
    this.date = new Date(this.highlight.publishedAt);
    this.day = this.date.getDay().toString();
    this.month = this.date.getMonth().toString();
    this.year = this.date.getFullYear().toString();
  }
}
