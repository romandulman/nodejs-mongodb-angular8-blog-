import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor(private postService: PostsService, private activatedRoute: ActivatedRoute) { }
  id: number;
  post: object;
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    alert(this.id);
    this.postService.getSinglePost(this.id).subscribe(post => {
      this.post = post;
      }
    );
  }
}
