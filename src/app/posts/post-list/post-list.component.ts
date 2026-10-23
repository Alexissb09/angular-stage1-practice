import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {
  posts$ = this.postsService.posts$;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.loadPosts();
  }
}
