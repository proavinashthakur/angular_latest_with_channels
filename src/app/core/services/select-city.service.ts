import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SelectCityService {

  constructor(private http: HttpClient) { }
  msgForm = new FormGroup({
    msg: new FormControl('', Validators.required),

  })

  get_continents(): Observable<any> {
    return this.http.get(environment.base_url + "get-continents");
  }

  get_countries(id): Observable<any> {
    return this.http.get(environment.base_url + "get-countries/" + id);
  }

  get_cities(id): Observable<any> {
    return this.http.get(environment.base_url + "get-cities/" + id);
  }

}
