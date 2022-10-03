import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})
export class HighlightComponent implements OnInit {

  @Input() highlight:Highlight = {
    title:'',
    color:''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
