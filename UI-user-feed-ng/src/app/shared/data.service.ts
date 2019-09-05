import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  feedDataUrl: string = 'assets/data.json';
  // userImageUrl: string = `https://randomuser.me/api/portraits/thumb/men/${Math.floor((Math.random() * 99) + 1)}.jpg`
  constructor(private http: HttpClient) { }

  /** Get User Data from static file data.json */
  getFeedData() : Observable<User[]> {
      return this.http.get<User[]>(`${this.feedDataUrl}`);
  }

  /** Get placeholder User Avatar from Random User API */
  // getUserAvatar(): Observable<any> {
  //   return this.http.get(`${this.userImageUrl}`);
  // }
}
