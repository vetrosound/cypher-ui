import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { ChatComponent } from './chat/chat.component';
import { PerformerQueueComponent } from './performer-queue/performer-queue.component';
import { UserIconComponent } from './user-icon/user-icon.component';
import { UsersListComponent } from './users-list/users-list.component';
import { VoteBannerComponent } from './vote-banner/vote-banner.component';
import { RoomComponent } from './room/room.component';
import { CurrentTrackComponent } from './current-track/current-track.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    PerformerQueueComponent,
    UserIconComponent,
    UsersListComponent,
    VoteBannerComponent,
    RoomComponent,
    CurrentTrackComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
