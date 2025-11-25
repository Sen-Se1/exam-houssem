import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  loading = false;
  errorMsg = '';

  constructor(private ps: PostService) {}

  // ngOnInit(): void {
  //   this.posts = this.ps.getPosts();
  // }

  ngOnInit(): void {
    this.loading = true;

    this.ps.getPosts().subscribe({
      next: (listPosts: any) => {
        this.posts = listPosts;
        this.loading = false;
      },
      error: (err) => {
        this.errorMsg = 'Erreur lors du chargement des posts';
        this.loading = false;
        console.error(err);
      },
    });
  }
}
