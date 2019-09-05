import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  feedDataUrl: string = 'assets/data.json';

  constructor(private http: HttpClient) { }

  /** Get User Data from static file data.json */
  getFeedData() : Observable<User[]> {
      return this.http.get<User[]>(`${this.feedDataUrl}`);
  }

  /** Get placeholder User Avatar from Random User API */
  getAvatar() {
    let randomNum: number = Math.floor((Math.random() * 99) + 1);
    let avatarURL: string = 'https://randomuser.me/api/portraits/thumb/men/';
    let userAvatar: string = `${avatarURL}${randomNum}.jpg`
    return userAvatar;
  }
}
