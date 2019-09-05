import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {

  feedList: Array<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.getFeedData().subscribe(data => {
    //   // console.log(data.feed);
    //   this.feedList = data.feed;
    //   console.log(this.feedList);
    // })

    this.dataService.getFeedData().subscribe((data: User) => {
      // console.log(data.feed);
      this.feedList = [...data.feed];
      console.log(this.feedList);
    })
  }

}
