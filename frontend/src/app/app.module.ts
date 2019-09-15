import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { PostsComponent } from './pages/posts/posts.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatTooltipModule, MatDialogModule} from '@angular/material';

import { PostsService  } from './services/posts.service';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import {AuthService} from "./services/auth.service";

const appRoutes: Routes = [
  {path: 'home', component: PostsComponent},
  {path: 'addpost', component: AddPostComponent},
  {path: 'singlepost/:id', component: SinglePostComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    SinglePostComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    [BrowserAnimationsModule],
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatDialogModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),  ],
  providers: [
    PostsService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
