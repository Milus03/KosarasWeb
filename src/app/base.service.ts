import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { subscribeOn } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  termekekListaja = "assets.json"
  termekek:any = []

  constructor(private http:HttpClient) { 
    this.getProducts().subscribe((data:any)=>{
      this.termekek = data
    })
  }

  getProducts(){
    return this.http.get(this.termekekListaja)
  }
}
