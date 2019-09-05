import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeedListComponent } from './feed/feed-list/feed-list.component';
import { FeedListItemComponent } from './feed/feed-list-item/feed-list-item.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FeedListComponent,
      FeedListItemComponent,

    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
