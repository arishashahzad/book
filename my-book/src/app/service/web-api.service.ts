
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  
  private apiurl= 'http://localhost:3000/books'
  

  constructor(private httpsclient:HttpClient) { }
  httpsOption={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  getAll():Observable<any>{
    return this.httpsclient.get(this.apiurl)
  }
  create(data:User):Observable<any>{
    return this.httpsclient.post(this.apiurl,
    JSON.stringify(data),this.httpsOption)  
  }
  getSingleRecord(id:number):Observable<any>{
    return this.httpsclient.get(this.apiurl + '?id=' + id);
  }

  update(id:number,data:User):Observable<any>{
    return this.httpsclient.put(`${this.apiurl}`,JSON.stringify(data),this.httpsOption)
    
  }
  deletebook(id:number){
    return this.httpsclient.delete(`${this.apiurl}/${id}`)
  }
  }
  
