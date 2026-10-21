import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { POSTS_API_URL } from './posts.tokens';

@NgModule({
  declarations: [PostComponent, PostListComponent],
  imports: [CommonModule],
  exports: [PostComponent, PostListComponent],
  providers: [
    {
      provide: POSTS_API_URL,
      useValue: 'https://asmisalan.github.io/feedgram/posts.json',
    },
  ],
})
export class PostsModule {}
