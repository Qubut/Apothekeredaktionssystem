import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  jobs$ = new Observable<Job[]>();
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.jobs$ = this.apiService.getJobs();
  }
}
