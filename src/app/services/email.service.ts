import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'X-Content-Type-Options': 'nosniff',
    Connection: 'keep-alive',
    'Keep-Alive': 'timeout=5',
  });
  constructor(private http: HttpClient) {}

  SendEmail(input: string) {

    return this.http
      .post(`/api/bestellungen`, input, {
        headers: this.headers,
        responseType: 'text',
      })
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
