import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [PostComponent, PostListComponent],
  imports: [CommonModule],
  exports: [PostComponent, PostListComponent],
})
export class PostsModule {}
