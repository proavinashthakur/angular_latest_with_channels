import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  addProduct(data): Observable<any> {
    return this.http.post(environment.base_url + "add-product", data);
  }

  listProducts(): Observable<any> {
    return this.http.get(environment.base_url + "list-products");
  }
  deleteProduct(pid): Observable<any> {
    return this.http.delete(environment.base_url + "delete-product/" + pid);
  }
  updateProduct(data): Observable<any> {
    return this.http.put(environment.base_url + "update-product/" + data.pid, data);
  }
}
