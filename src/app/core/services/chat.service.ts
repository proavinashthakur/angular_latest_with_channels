import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  userSignIn(data): Observable<any> {
    // var headers_object = new HttpHeaders().set("Authorization", "Token " + token);
    return this.http.post(environment.base_url + "auth/signin", data);
  }

}
