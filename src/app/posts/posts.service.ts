import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Post } from './post.model';
import { POSTS_API_URL } from './posts.tokens';

interface PostDto {
  user: string;
  content: string;
  published: number;
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private loaded = false;
  private postsSubject = new BehaviorSubject<Post[] | null>(null);
  readonly posts$ = this.postsSubject.asObservable();

  constructor(
    private http: HttpClient,
    @Inject(POSTS_API_URL) private url: string,
  ) {}

  loadPosts(): void {
    if (this.loaded) return;
    this.loaded = true;

    this.http
      .get<PostDto[]>(this.url)
      .pipe(
        map((posts) =>
          posts.map((post) => ({
            ...post,
            published: new Date(post.published),
          })),
        ),
      )
      .subscribe((posts) =>
        this.postsSubject.next([...(this.postsSubject.value ?? []), ...posts]),
      );
  }

  addPost(post: Post): void {
    this.postsSubject.next([post, ...(this.postsSubject.value ?? [])]);
  }
}
