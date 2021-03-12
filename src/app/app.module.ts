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

import { ChatComponent } from './components/chat/chat.component';
import { PerformerQueueComponent } from './components/performer-queue/performer-queue.component';
import { UserIconComponent } from './components/user-icon/user-icon.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { VoteBannerComponent } from './components/vote-banner/vote-banner.component';
import { RoomComponent } from './components/room/room.component';
import { CurrentTrackComponent } from './components/current-track/current-track.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './core/store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { HttpClientModule } from '@angular/common/http';

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
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
