import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {
  // @Output() addComment: EventEmitter<any> = new EventEmitter();
  feedList: Array<any>;
  feedCount: number;
  comment: string;
  // user: any;
  // id: number;
  // user: User;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.getFeedData().subscribe(data => {
    //   // console.log(data.feed);
    //   this.feedList = data.feed;
    //   console.log(this.feedList);
    // })

    this.dataService.getFeedData().subscribe((data: User[]) => {
      // console.log(data.feed);
      this.feedList = [...data.feed];
      this.feedCount = this.feedList.length;
      console.log(this.feedList);
      // console.log(this.user);
      console.log(this.feedList.map(data => data))
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
      likes: 0
    }

    console.log(commentData);

    // this.addComment.emit(comment);


    // let newComment = this.comment.trim();
    // let currentTime = new Date();
    // let currentTimeOffset = currentTime.getTimezoneOffset().toString();
    // let newCommentData: User = {
    //   user: 'User 3',
    //   value: newComment,
    //   id: 3,
    //   timestamp: currentTime.getTime().toString(),
    //   timeZoneOffset: currentTimeOffset,
    //   likes: 0
    // }
    this.feedList.unshift(commentData);
    this.feedCount++;
    this.comment = '';
  }

  trackById(index:number, item: User) {
    return item.id;
  }
}
