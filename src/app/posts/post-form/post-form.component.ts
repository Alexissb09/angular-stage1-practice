import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css',
})
export class PostFormComponent {
  form = this.fb.nonNullable.group({
    user: ['', [Validators.required]],
    content: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private postsService: PostsService,
    private router: Router,
  ) {}

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { user, content } = this.form.getRawValue();
    this.postsService.addPost({
      user,
      content,
      published: new Date(),
    });
    this.router.navigate(['/posts/list']);
  }
}
