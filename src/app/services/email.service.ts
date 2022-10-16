import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  constructor(private http: HttpClient) {}

  SendEmail(input: string) {
    console.log(input);

    return this.http
      .post(`/api/bestellungen`, input, { responseType: 'text' })
      .pipe(
        map(
          (response: any) => {
            if (response) {
              return response;
            }
          },
          (error: any) => {
            if (error) {
              return error;
            }
          }
        )
      );
  }
}
