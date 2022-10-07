import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  private api = "https://mailthis.to/kowar";

  constructor(private http: HttpClient){}

    SendEmail(input: any) {
      console.log(input);

      return this.http.post(this.api, input, {responseType: 'text'}).pipe(
        map((response: any) => {
              if (response) {
                return response
              }
          },(error: any) => {
              if (error) {
                  return error
              }
          }
        )
	    )
    }
}
