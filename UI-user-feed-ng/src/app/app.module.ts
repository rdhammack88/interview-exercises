import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FeedListComponent } from './components/feed/feed-list/feed-list.component';
import { FeedListItemComponent } from './components/feed/feed-list-item/feed-list-item.component';

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
