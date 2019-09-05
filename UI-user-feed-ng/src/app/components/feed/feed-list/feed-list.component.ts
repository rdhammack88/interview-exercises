import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {
  feedList: Array<any>;
  feedCount: number;
  comment: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getFeedData().subscribe((data: User[]) => {
      this.feedList = (data as any).feed;
      this.feedCount = this.feedList.length;
    })
  }

  addNewComment() {
    if(!this.comment) return;
    let newComment = this.comment;
    let currentTime = new Date();
    let timestamp = currentTime.getTime().toString();
    let currentTimeOffset = currentTime.getTimezoneOffset().toString();
    let commentData = {
      user: 'User 3',
      value: newComment.trim(),
      id: 3,
      timestamp: timestamp,
      timeZoneOffset: currentTimeOffset,
      likes: 0,
      thumb: this.dataService.getAvatar()
    }

    this.feedList.unshift(commentData);
    this.feedCount++;
    this.comment = '';
  }

  trackById(index:number, item:User) {
    return item.id;
  }
}
