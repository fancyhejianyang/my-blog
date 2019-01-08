import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticleListService {
  private arc_type = new Subject<string>();
  constructor(
    private http: HttpClient
  ) { }
  arc_type$ = this.arc_type.asObservable();
  arc_type_update(type: string) {
    this.arc_type.next(type);
  }
  getArticleList(type: string) {
    return this.http.get('');
  }
}
