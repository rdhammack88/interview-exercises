import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/user';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-feed-list-item',
  templateUrl: './feed-list-item.component.html',
  styleUrls: ['./feed-list-item.component.scss']
})
export class FeedListItemComponent implements OnInit {
  @Input() user: User;
  itemLiked: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.user.thumb = this.dataService.getAvatar();
  }

  onLike() {
    this.itemLiked = !this.itemLiked;
    this.itemLiked == true ? this.user.likes++ : this.user.likes--;
  }

  onComment() {

  }
}
