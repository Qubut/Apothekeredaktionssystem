import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {

  highlights$ = new Observable<Highlight[]>()
  constructor(private apiService:ApiService) { }
  ngOnInit(): void {
    this.highlights$ = this.apiService.getHighlights()
  }


}
