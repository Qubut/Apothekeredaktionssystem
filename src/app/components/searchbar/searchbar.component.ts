import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  searchForm = FormGroup; 
  constructor() { }

  ngOnInit(): void {
  }
  search(query:Event){

  }

}
