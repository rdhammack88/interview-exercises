import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeedListComponent } from './feed/feed-list/feed-list.component';
import { FeedListItemComponent } from './feed/feed-list-item/feed-list-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FeedListComponent,
      FeedListItemComponent,

    ],
    imports: [
      BrowserModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
