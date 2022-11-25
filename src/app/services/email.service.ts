import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
  });
  constructor(private http: HttpClient) {}
  Upload(data:FormData){
    return this.http.post(`${environment.backend}/api/upload`,data)
  }
  getUrl(id:string){

    return this.http.get(`${environment.backend}/api/upload/files/${id}`)
  }
  SendMessage(mssg: string) {
    return this.http.post(`${environment.backend}/api/nachrichten`, mssg, { headers: this.headers });
  }
  SendEmail(input: string) {
    return this.http.post(`${environment.backend}/api/bestellungen`, input, {
      headers: this.headers,
      responseType: 'text',
    });
  }
}
