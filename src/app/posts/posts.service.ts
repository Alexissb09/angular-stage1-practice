import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { POSTS_API_URL } from './posts.tokens';
import { delay, map, Observable } from 'rxjs';
import { Post } from './post.model';

interface PostDto {
  user: string;
  content: string;
  published: number;
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(
    private http: HttpClient,
    @Inject(POSTS_API_URL) private url: string,
  ) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get<PostDto[]>(this.url).pipe(
      map((posts) =>
        posts.map((post) => ({
          ...post,
          published: new Date(post.published),
        })),
      ),
    );
  }
}
