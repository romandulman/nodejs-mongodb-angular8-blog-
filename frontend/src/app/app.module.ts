import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { PostsComponent } from './pages/posts/posts.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatTooltipModule, MatDialogModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    [BrowserAnimationsModule],
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
