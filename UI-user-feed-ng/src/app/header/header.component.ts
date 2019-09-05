import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

  showCommentInput() {
    console.log('Comment Input Should Display!')
  }
}
