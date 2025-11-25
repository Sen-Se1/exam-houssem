import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postList = [
    { id: '1', titre: "Premier post", contenu: "détails premier post" },
    { id: '2', titre: "Deuxième post", contenu: "détails deuxième post" },
    { id: '3', titre: "Troisième post", contenu: "détails troisième post" },
  ];

  constructor() {}

  getPosts() {
    return this.postList;
  }
}
