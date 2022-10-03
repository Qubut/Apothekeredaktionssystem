import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight-toast',
  templateUrl: './highlight-toast.component.html',
  styleUrls: ['./highlight-toast.component.css']
})
export class HighlightToastComponent implements OnInit {
  @Input() title:string=''
  @Input() description? =''
  @Input() color=''
  constructor() { }

  ngOnInit(): void {
  }

}
