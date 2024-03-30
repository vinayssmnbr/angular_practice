import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  additem(data: product) {
    return this.http.post('http://localhost:3000/product', data);
  }
  getitem(): Observable<product[]> {
    return this.http.get<product[]>('http://localhost:3000/product');
  }

  deleteproduct(id: Number) {
    return this.http.delete(`http://localhost:3000/product/${id}`);
  }
  updateProduct(obj: product): Observable<product> {
    return this.http.put<any>(`http://localhost:3000/product/${obj.id}`, obj);
  }

  getproductId(id: string) {
    return this.http.get<product>(`http://localhost:3000/product/${id}`);
  }
}
