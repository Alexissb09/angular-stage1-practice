import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'list',
    component: PostListComponent,
  },
  {
    path: 'create',
    component: PostFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
