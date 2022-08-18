import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { members } from '../app/members';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  url:string="http://localhost:3000/members";
  getmembers(){
    return this.http.get<members[]>(this.url);
  }
}

