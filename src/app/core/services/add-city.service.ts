import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddCityService {

  constructor(private http: HttpClient) { }

  get_all_data(): Observable<any> {
    return this.http.get(environment.base_url + "get-cities-data");
  }
  async add_new_city(data) {
    return this.http.post(environment.base_url + "add-city", data).toPromise();
  }
}
