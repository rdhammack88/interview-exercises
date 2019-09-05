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
  userAvatar: string = `https://randomuser.me/api/portraits/thumb/men/${Math.floor((Math.random() * 99) + 1)}.jpg`

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.user.thumb = this.userAvatar;
    // this.userAvatar = this.dataService.getUserAvatar().subscribe(data => {
      // console.log(data);
    // })
  }

  onComment() {
    console.log('Comment input should open');
  }

  onLike() {
    console.log('User liked comment');

    this.itemLiked = !this.itemLiked;
    this.itemLiked == true ? this.user.likes++ : this.user.likes--





    // const $likeBtn = $('.like-btn');

    // $likeBtn.click(() => {
    //     // console.log('liked!');
    //     let liked = '<i class="fas fa-thumbs-up"></i>';
    //     let notLiked = '<i class="far fa-thumbs-up"></i>';
    //     let dataPrefix = this.children('svg').data('prefix');
    //     console.log(this.children('svg').data('prefix') == 'far' ? 'not liked' : 'liked') //.firstChild.at('prefix') == 'fas');

    //     // dataPrefix == 'far' ? likeBtn.children('svg').data('prefix', 'fas') : likeBtn.children('svg').data('prefix', 'far');
    //     dataPrefix === 'far' ? this.html(liked) : this.html(notLiked);
    //     console.log(this.children('svg').data('prefix') == 'far' ? 'not liked' : 'liked') //.firstChild.at('prefix') == 'fas');
    // })
  }

}
