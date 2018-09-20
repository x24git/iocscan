import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpinfoService {

  constructor(private http: HttpClient) { }

  // Get all posts from the API
  getData(ip) {
    let data = {"ip": ip};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.post('/api/ip',data,httpOptions) 
      //.subscribe(res => console.log(res.json()));
      // .catch(this.handleErrorObservable);
  }
  

}
