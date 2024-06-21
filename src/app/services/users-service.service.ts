import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProducts} from "../interfaces/products.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiURL = "https://reqres.in/api/users";
  constructor( private http: HttpClient) { }

  getAllUsers(): Observable<any>{
    return this.http.get<any>(this.apiURL)
  }

  getSingleUser(id: number){
    return this.http.get(`${this.apiURL}/${id}`)
  }
}
