import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticleListService {

  constructor(
    private http: HttpClient
  ) { }
  getArticleList(type: string) {
    // return this.http.get('');
  }
}
