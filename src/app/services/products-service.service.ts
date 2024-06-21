import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProducts} from "../interfaces/products.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
 private apiURL = "https://fakestoreapi.com/products";
  constructor( private http: HttpClient) { }

  getAllProducts(): Observable<IProducts[]>{
    return this.http.get<IProducts[]>(this.apiURL)
  }

  getSingleProduct(id: number){
    return this.http.get(`${this.apiURL}/${id}`)
  }
}
