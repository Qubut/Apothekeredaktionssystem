import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angebote',
  templateUrl: './angebote.component.html',
  styleUrls: ['./angebote.component.css'],
})
export class AngeboteComponent implements OnInit {
  angebote: Angebot[] = [];
  constructor() {}

  ngOnInit(): void {}
  show(e: Hits) {
    (<Angebot[]>(<unknown>e)).forEach((d)=>console.log(d));
  }
}
