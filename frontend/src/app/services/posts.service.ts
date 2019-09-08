import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class PostsService {

  constructor( private  httpClient: HttpClient) { }

  getAllPosts() {
   return this.httpClient.get('');
  }
  getSinglePost(id) {
    return this.httpClient.get(''+id);
  }


}
