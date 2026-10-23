import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostsRoutingModule } from './posts-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [PostComponent, PostListComponent, PostFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PostsRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [PostComponent, PostListComponent],
})
export class PostsModule {}
